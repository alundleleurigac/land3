import {html} from "lit";
import {Item, Kind} from "@omnimedia/omnitool"

import {StackView} from "../views/track/view.js"
import {TimelineVideo} from "../views/items/video/view.js"
import {SequenceView} from "../views/items/sequence/view.js"
import {EditorContext} from "../../../../../../../context/context.js"

export function renderItem(context: EditorContext, id: number) {
	const itemsMap = new Map(
		context.strata.timeline.state.timeline.items
			.map(item => [item.id, item])
	)

	const item = itemsMap.get(id)!
	switch (item.kind) {
		case Kind.Sequence: {
			console.log(item, "Seq")
			return SequenceView(context, item as Item.Sequence)
		}
		case Kind.Stack: {
			console.log("stack")
			return StackView(context, item as Item.Stack)
		}
		case Kind.Clip:
			return TimelineVideo(context, item)
		default:
			return html`<div>Unknown Item: ${item.kind}</div>`
	}

}
