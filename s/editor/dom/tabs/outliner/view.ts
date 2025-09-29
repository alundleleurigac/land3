
import {html} from "lit"
import {view} from "@e280/sly"
import styleCss from "./style.css"
import themeCss from "../../../theme.css"

export const OutlinerTab = view(use => () => {
	use.styles(themeCss, styleCss)

	return html`<h3>Outliner</h3>`
})

