import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css"

export const OutlinerTab = view(use => () => {
	use.styles(styleCss)

	return html`<h3>Outliner</h3>`
})
