
import {html} from "lit"
import {view} from "@e280/sly"
import styleCss from "./style.css.js"
import themeCss from "../../../../../../theme.css.js"

export const TimelineTab = view(use => () => {
	use.styles(themeCss, styleCss)

	return html`<h3>Timeline</h3>`
})

