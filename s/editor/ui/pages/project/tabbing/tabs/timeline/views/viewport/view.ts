import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import {Toolbar} from "../toolbar/view.js"
import {EditorContext} from "../../../../../../../../context/context.js"

export const TimelineViewport = view(use => (context: EditorContext) => {
	use.styles(styleCss)
	const player = context.controllers.player

	return html`
		<div class=viewport>
			${player.canvas}
			${Toolbar(context)}
		</div>
	`
})


