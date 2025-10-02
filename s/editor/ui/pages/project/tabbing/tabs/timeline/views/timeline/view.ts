import {html} from "lit"
import {view} from "@e280/sly"
import {TimelineFile, Kind} from "@omnimedia/omnitool"

import styleCss from "./style.css.js"
import {Ruler} from "../ruler/view.js"
import {Playhead} from "../playhead/view.js"
import {TimelineTrack} from "../track/view.js"
import {crawl} from "../../../../utils/tree.js"
import themeCss from "../../../../../../../../theme.css.js"
import {EditorContext} from "../../../../../../../../context/context.js"

export const TimelineArea = view(use => (context: EditorContext) => {
	use.styles(themeCss, styleCss)

	// mock state
	const state: TimelineFile = {
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
	}

	const tracks = crawl(state)

	return html`
    <div class="timeline-grid">
      <div class="corner-box"></div>

      <div class="ruler-container">
        ${Ruler(context)}
      </div>

      <div class="playhead-container">
        ${Playhead()}
      </div>

			<div class="tracks-container">
        ${tracks.map((items, i) => TimelineTrack(items, i))}
			</div>
    </div>
	`
})




