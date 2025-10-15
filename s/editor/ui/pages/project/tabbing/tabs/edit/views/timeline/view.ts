import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import {Ruler} from "../ruler/view.js"
import {Playhead} from "../playhead/view.js"
import {renderItem} from "../../parts/render-item.js"
import {renderItemMenu} from "../items/parts/menu/view.js"
import themeCss from "../../../../../../../../theme.css.js"
import {EditorContext} from "../../../../../../../../context/context.js"

export const TimelineArea = view(use => (context: EditorContext) => {
	use.styles(themeCss, styleCss)
	const viewedItemId = context.strata.viewedItemId.state.id

	return html`
		<div class="timeline-grid">
			<div class="corner-box"></div>
			<div class="ruler-container">
				${Ruler(context)}
			</div>
			<div class="playhead-container">
				${Playhead(context)}
			</div>
			<div class="headers-panel">
				${renderItemMenu(context)}
			</div>
			<div class="content-panel">
				${renderItem(context, viewedItemId, [])}
			</div>
		</div>
	`
})

