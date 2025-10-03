
import {html} from "lit"
import {view} from "@e280/sly"
import {Item} from "@omnimedia/omnitool"

import styleCss from "./style.css.js"
import {renderItem} from "../../../parts/render-item.js"
import themeCss from "../../../../../../../../../theme.css.js"
import {EditorContext} from "../../../../../../../../../context/context.js"

export const SequenceView = view(use => (context: EditorContext, item: Item.Sequence) => {
	use.styles(styleCss, themeCss)

	return html`
		<div class="sequence-content">
			${item.children.map(childId => renderItem(context, childId))}
		</div>
	`
})

