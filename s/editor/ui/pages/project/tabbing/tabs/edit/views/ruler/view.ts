import {html} from "lit"
import {view} from "@e280/sly"
import {debounce} from "@e280/stz"

import styleCss from "./style.css.js"
import {PIXELS_PER_MILLISECOND} from "../../constants.js"
import {formatTime} from "../../../../utils/format-time.js"
import {EditorContext} from "../../../../../../../../context/context.js"

export const Ruler = view(use => (context: EditorContext) => {
	use.styles(styleCss)

	const {zoom, timebase} = context.strata.settings.state
	const duration = 15000 // mock

	const generateMarkers = () => {
		const markers = []
		const basePixelsPerSecond = 100 // The width of 1 second at zoom level 1
		const pixelsPerSecond = basePixelsPerSecond * zoom

		// Define minimum spacing in pixels to avoid clutter
		const minSpacingForLabels = 60
		const minSpacingForMajorTicks = 10
		const minSpacingForMinorTicks = 4

		const secondsInterval = 1000
		const pixelsPerSecondInterval = secondsInterval * (pixelsPerSecond / 1000)

		if (pixelsPerSecondInterval > minSpacingForMajorTicks) {
			for (let time = 0; time <= duration; time += secondsInterval) {
				const isLabelVisible = pixelsPerSecondInterval > minSpacingForLabels
				markers.push(html`
					<div
						class="marker major"
						style="left: ${time * (pixelsPerSecond / 1000)}px"
					>
						${isLabelVisible ? html`<span class="time">${formatTime(time)}</span>` : null}
					</div>
				`)
			}
		}

		// Add 10-frame markers if space allows
		const tenFrameInterval = (1000 / timebase) * 10
		const pixelsPerTenFrames = tenFrameInterval * (pixelsPerSecond / 1000)

		if (pixelsPerTenFrames > minSpacingForMajorTicks) {
			for (let time = 0; time <= duration; time += tenFrameInterval) {
				if (time % secondsInterval !== 0) { // Avoid drawing over a major tick
					markers.push(html`
						<div
							class="marker medium"
							style="left: ${time * (pixelsPerSecond / 1000)}px"
						></div>
					`)
				}
			}
		}

		// Add single-frame markers only when very zoomed in
		const frameInterval = 1000 / timebase
		const pixelsPerFrame = frameInterval * (pixelsPerSecond / 1000)

		if (pixelsPerFrame > minSpacingForMinorTicks) {
			for (let time = 0; time <= duration; time += frameInterval) {
				if (time % tenFrameInterval !== 0) { // Avoid drawing over medium/major ticks
					markers.push(html`
						<div
							class="marker minor"
							style="left: ${time * (pixelsPerSecond / 1000)}px"
						></div>
					`)
				}
			}
		}

		return markers
	}

	const player = context.controllers.player

	const throttledSeek = use.once(() => debounce(50, time => player.seek(time)))

	const ruler = use.once(async () => {
		await use.rendered
		return use.shadow.querySelector(".ruler")
	})

	const seek = async (event: PointerEvent) => {
		const rulerRect = (await ruler)!.getBoundingClientRect()
		const x = event.clientX - rulerRect.left
		const timeInMs = x / (PIXELS_PER_MILLISECOND * zoom)
		throttledSeek(timeInMs >= 0 ? timeInMs : 0)
		player.currentTime.value = timeInMs >= 0 ? timeInMs : 0
	}

	const handlePointerMove = seek

	const handlePointerDown = (event: PointerEvent) => {
		seek(event)
		window.addEventListener("pointermove", handlePointerMove)
		window.addEventListener("pointerup", handlePointerUp)
	}

	const handlePointerUp = () => {
		window.removeEventListener("pointermove", handlePointerMove)
		window.removeEventListener("pointerup", handlePointerUp)
	}

	return html`
		<div
			@pointerdown=${handlePointerDown}
			class="ruler"
		>
			${generateMarkers()}
		</div>`
})
