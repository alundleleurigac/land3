import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import themeCss from "../../../theme.css.js"

export const UnknownView = view(use => () => {
	use.name("unknown")
	use.styles(themeCss, styleCss)

	return html`
		<h1>unknown</h1>
	`
})
