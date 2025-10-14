
import {Chronicle, Trunk} from "@e280/strata"
import {TimelineFile} from "@omnimedia/omnitool"

export type State = {
	files: {
		hashes: string[]
	}
	chron: Chronicle<{
		timeline: TimelineFile
	}>
	settings: {
		timebase: number
		zoom: number
		resolution: {
			width: number
			height: number
		}
	}
	outliner: {
		starred: number[]
	}
	viewedItemId: {id: number}
}

export class Strata {
	trunk = new Trunk<State>({
		files: {
			hashes: [],
		},
		chron: Trunk.chronicle({
			timeline: {
				info: "https://omniclip.app/",
				format: "timeline",
				version: 0,
				rootId: 1,
				items: []
			}
		}),
		outliner: {
			starred: [4]
		},
		viewedItemId: {id: 4},
		settings: {
			timebase: 30,
			zoom: 1,
			resolution: {
				width: 1920,
				height: 1080
			}
		}
	})

	settings = this.trunk.branch(s => s.settings)
	files = this.trunk.branch(s => s.files)
	timeline = this.trunk.chronobranch(64, s => s.chron)
	viewedItemId = this.trunk.branch(s => s.viewedItemId)
	outliner = this.trunk.branch(s => s.outliner)
}

