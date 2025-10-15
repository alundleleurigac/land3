import {html} from "lit"
import {view} from "@e280/sly"
import {Item} from "@omnimedia/omnitool"

import {TimelineItem} from "../parts/item/view.js"
import themeCss from "../../../../../../../../../theme.css.js"
import {EditorContext} from "../../../../../../../../../context/context.js"

export const TimelineText = view(use => (context: EditorContext, clip: Item.Text, ancestors: Item.Any[]) => {
	use.styles(themeCss)

	return html`${TimelineItem(context, clip, html``, ancestors)}`}
)


