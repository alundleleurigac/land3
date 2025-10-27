import {html} from "lit"
import {view} from "@e280/sly"
import {Filmstrip, Item} from "@omnimedia/omnitool"

import styleCss from "./style.css.js"
import themeCss from "../../../../../../../../../../theme.css.js"
import {EditorContext} from "../../../../../../../../../../context/context.js"

export const FilmstripView = view(use => (
	context: EditorContext,
	clip: Item.Video,
) => {
	use.styles(styleCss, themeCss)

	const settings = context.strata.settings
	const ui = context.strata.ui
	const pixelsPerMillisecond = 0.1 * settings.state.zoom

	const thumbnails = use.signal<{ time: number, canvas: HTMLCanvasElement | OffscreenCanvas }[]>([])
	const getFrequencyInSec = (zoom: number) => Math.max(0.1, 1 / Math.pow(zoom, 1.5));
  const thumbnailDivWidthPx = getFrequencyInSec(settings.state.zoom) * 1000 * pixelsPerMillisecond

	const op = use.op.promise<Filmstrip>(
		Filmstrip.init("/assets/temp/gl.mp4", {
			onChange: (tiles) => thumbnails(tiles.map(({canvas, time}) => ({canvas: canvas.canvas, time}))),
			canvasSinkOptions: {width: 120, height: 72, fit: "cover"}
	}))

	const filmstrip = op.isLoading ? op.wait : op.require()

	const update = async (scrollLeft: number) => {
		const viewportStart = scrollLeft / (pixelsPerMillisecond)
		const viewportEnd = (scrollLeft + ui.state.timelineWidth) / (pixelsPerMillisecond)
		const visibleClipStart = Math.max(clip.start, viewportStart)
		const visibleClipEnd = Math.min(clip.start + clip.duration, viewportEnd)

		if (visibleClipStart < visibleClipEnd)
			(await filmstrip).range = [(visibleClipStart - clip.start) / 1000, (visibleClipEnd - clip.start) / 1000]
	}

	use.once(async() => update(0))

	use.mount(() => {
		const dispose1 = settings.on(async({zoom}) => (await filmstrip).frequency = getFrequencyInSec(zoom))
		const dispose2 = ui.on(async ({timelineScrollLeft}) => update(timelineScrollLeft))
		return () => {dispose1(), dispose2()}
	})

	return html`
		<div class="filmstrip-container">
			${(thumbnails().map(({time, canvas}) => html`
				<div
					class="thumbnail"
					style="
						left: ${time * 1000 * pixelsPerMillisecond}px;
						width: ${thumbnailDivWidthPx}px;
					"
				>
					${canvas}
				</div>
			`))}
		</div>
	`
})
