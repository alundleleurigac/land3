import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import {Ruler} from "../ruler/view.js"
import {Playhead} from "../playhead/view.js"
import {renderItem} from "../../parts/render-item.js"
import themeCss from "../../../../../../../../theme.css.js"
import {EditorContext} from "../../../../../../../../context/context.js"

export const TimelineArea = view(use => (context: EditorContext) => {
	use.styles(themeCss, styleCss)

	return html`
		<div class="timeline-area"}>
			${Ruler(context)}
			<div class="content-area">
				${Playhead()}
				${renderItem(context, context.strata.timeline.state.timeline.root)}
			</div>
		</div>
	`
})

