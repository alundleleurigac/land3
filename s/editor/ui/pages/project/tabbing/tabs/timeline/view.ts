
import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import themeCss from "../../../../../../theme.css.js"
import {TimelineArea} from "./views/timeline/view.js"
import {TimelineViewport} from "./views/viewport/view.js"
import {EditorContext} from "../../../../../../context/context.js"

export const TimelineTab = view(use => (context: EditorContext) => {
	use.styles(themeCss, styleCss)

	return html`
		${TimelineViewport(context)}
		${TimelineArea(context)}
	`
})

