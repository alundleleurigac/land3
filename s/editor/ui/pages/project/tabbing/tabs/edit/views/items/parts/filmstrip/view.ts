import {html} from "lit"
import {view} from "@e280/sly"
import {Item} from "@omnimedia/omnitool"

import styleCss from "./style.css.js"
import themeCss from "../../../../../../../../../../theme.css.js"
import {EditorContext} from "../../../../../../../../../../context/context.js"

export const FilmstripView = view(use => (
	context: EditorContext,
	clip: Item.Video,
) => {
	use.styles(styleCss, themeCss)

	const {zoom} = context.strata.settings.state
	const scrollLeft = 100
	const timelineAreaWidth = 500
	const pixelsPerMillisecond = 0.2 * zoom

	const thumbnails = use.signal<{ time: number, canvas: HTMLCanvasElement | OffscreenCanvas }[]>([])
	const manager = use.signal<FilmstripManager | null>(null)

	// Initialize the FilmstripManager once
	use.mount(() => {
		const newManager = new FilmstripManager({
			mediaSource: "/assets/transition-tutorial.mp4",
			onChange: (newThumbnails) => thumbnails.value = newThumbnails,
		})
		newManager.initialize()
		manager.value = newManager
		return () => newManager.dispose()
	})

	// This effect runs whenever zoom or scroll changes, because we're watching the strata state
	use.once(() => {
		if (!manager.value) return

		// Calculate the timeline's visible time range from strata state
		const viewportStart = scrollLeft / (pixelsPerMillisecond)
		const viewportEnd = (scrollLeft + timelineAreaWidth) / (pixelsPerMillisecond)

		// Calculate which part of this specific clip is visible
		const clipStartTime = clip.start
		const clipEndTime = clip.start + clip.duration
		const visibleClipStart = Math.max(clipStartTime, viewportStart)
		const visibleClipEnd = Math.min(clipEndTime, viewportEnd)

		if (visibleClipStart < visibleClipEnd) {
			manager.value.update(
				zoom,
				visibleClipStart - clipStartTime,
				visibleClipEnd - clipStartTime
			)
		}


	},
			// [zoom, scrollLeft, timelineAreaWidth]
		)


	return html`
		<div class="filmstrip-container">
			${thumbnails.value.map(({ time, canvas }) => html`
				<div
					class="thumbnail"
					style="left: ${time * 1000 * pixelsPerMillisecond}px"
				>
					${canvas}
				</div>
			`)}
		</div>
	`
})


import {Filmstrip} from "@omnimedia/omnitool"

// Manages a single Filmstrip instance, updating it based on viewport changes.
export class FilmstripManager {
	private filmstrip: Filmstrip | null = null

	constructor(
		private options: {
			mediaSource: string | Blob
			onChange: (thumbnails: { time: number; canvas: HTMLCanvasElement | OffscreenCanvas }[]) => void
		}
	) {}

	async initialize() {
		this.filmstrip = await Filmstrip.init(this.options.mediaSource, {
			onChange: (tiles) => this.options.onChange(tiles.map(tile => ({time: tile.time, canvas: tile.canvas.canvas}))),
			canvasSinkOptions: { width: 120, height: 72, fit: "cover" }
		})
	}

	// This is the core update function.
	// It's called by the UI whenever zoom or scroll changes.
	update(zoom: number, visibleStartTime: number, visibleEndTime: number) {
		if (!this.filmstrip) return

		// 1. Update Frequency based on Zoom
		// As you zoom in (higher zoom value), the frequency increases (smaller interval).
		const newFrequency = Math.max(0.1, 1 / Math.pow(zoom, 1.5))
		this.filmstrip.frequency = newFrequency

		// 2. Update the visible time range
		this.filmstrip.range = [visibleStartTime, visibleEndTime]
	}

	dispose() {
		// Future cleanup logic for the filmstrip instance
	}
}
