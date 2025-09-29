
import {html} from "lit"
import {view} from "@e280/sly"
import styleCss from "./style.css.js"
import themeCss from "../../../theme.css.js"
import {EditorContext} from "../../../context/context.js"

export const UnknownPage = (context: EditorContext) => view(use => () => {
	use.name("unknown")
	use.styles(themeCss, styleCss)

	return html`
		<header theme=topper></header>

		<div theme=paddy>
			<h1>unknown</h1>
		</div>
	`
})

