
import {html} from "lit"
import {view} from "@e280/sly"
import styleCss from "./style.css.js"
import themeCss from "../../theme.css.js"
import {EditorContext} from "../../context/context.js"

export const AccountPage = (context: EditorContext) => view(use => () => {
	use.name("account")
	use.styles(themeCss, styleCss)

	return html`
		<div class=plate>
			<h1>Account</h1>
			<p>User account settings will be here.</p>
		<div>
	`
})
