
import {html} from "lit"
import {view} from "@e280/sly"
import {Item} from "@omnimedia/omnitool"

import styleCss from "./style.css.js"
import {renderItem} from "../../parts/render-item.js"
import themeCss from "../../../../../../../../theme.css.js"
import eyeSvg from "../../../../../../../icons/gravity-ui/eye.svg.js"
import lockSvg from "../../../../../../../icons/gravity-ui/lock.svg.js"
import {EditorContext} from "../../../../../../../../context/context.js"
import volumeSvg from "../../../../../../../icons/gravity-ui/volume.svg.js"

export const StackView = view(use => (context: EditorContext, item: Item.Stack) => {
	use.styles(styleCss, themeCss)

	return html`
		<div class="track-header">
			<div class="track-name">${item.id}</div>
			<div class="track-controls">
				<button title="Visibility toggle">${eyeSvg}</button>
				<button title="Toggle Lock">${lockSvg}</button>
				<button title="Toggle Volume">${volumeSvg}</button>
			</div>
		</div>

		<div class="track-content">
			${item.children.map(id => renderItem(context, id))}
		</div>
	`
})
