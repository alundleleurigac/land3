
import {html} from "lit"
import {view} from "@e280/sly"
import styleCss from "./style.css"
import themeCss from "../../../theme.css"

export const TimelineTab = view(use => () => {
	use.styles(themeCss, styleCss)

	return html`<h3>Timeline</h3>`
})
