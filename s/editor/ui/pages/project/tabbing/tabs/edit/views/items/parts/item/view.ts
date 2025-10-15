import {view} from "@e280/sly"
import {html, TemplateResult} from "lit"
import {Item} from "@omnimedia/omnitool"

import styleCss from "./style.css.js"
import {DirectiveResult} from "lit/directive.js"
import {PIXELS_PER_MILLISECOND} from "../../../../constants.js"
import themeCss from "../../../../../../../../../../theme.css.js"
import {EditorContext} from "../../../../../../../../../../context/context.js"


export const TimelineItem = view(use => (
	context: EditorContext,
	item: Item.Video | Item.Text,
	content: TemplateResult | DirectiveResult,
	ancestors: Item.Any[]
) => {
	use.styles(themeCss, styleCss)

	const {zoom} = context.strata.settings.state
	const visualWidth = (item.duration ?? 0) * PIXELS_PER_MILLISECOND * zoom
	const setViewedItem = async () => await context.strata.viewedItemId.mutate(i => i.id = item.id)
	const setSelectedItem = async () => await context.strata.selectedItem.mutate(i => i.id = item.id)

	return html`
		<div
			@dblclick=${setViewedItem}
			class="item ${item.kind}"
			?data-selected=${""}
			@click=${setSelectedItem}
			style="width: ${visualWidth}px;"
		>
			${content}
			<div class="resize-handle start"></div>
			<div class="resize-handle end"></div>
		</div>
	`
})

