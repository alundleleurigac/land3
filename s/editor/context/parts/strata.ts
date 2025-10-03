
import {Chronicle, Trunk} from "@e280/strata"
import { Kind, TimelineFile } from "@omnimedia/omnitool"

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
}

export class Strata {
	trunk = new Trunk<State>({
		files: {
			hashes: [],
		},
		chron: Trunk.chronicle({
			timeline: {
				root: 0,
				info: "https://omniclip.app/",
				version: 1,
				format: "timeline",
  			items: [
      			{ id: 0, kind: Kind.Sequence, children: [1, 5] },
      			{ id: 1, kind: Kind.Stack, children: [2, 3] },
      			{ id: 2, kind: Kind.Clip, duration: 5000, mediaHash: "vid_a", start: 0 },
      			{ id: 3, kind: Kind.Clip, duration: 8000, mediaHash: "aud_a", start: 0 },
      			{ id: 5, kind: Kind.Clip, duration: 7000, mediaHash: "vid_b", start: 0 },
  			]
			},
		}),
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
}

