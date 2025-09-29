import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css"

export const TimelineTab = view(use => () => {
	use.styles(styleCss)

	return html`<h3>Timeline</h3>`
})
