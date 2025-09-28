import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import themeCss from "../../../theme.css.js"
import {EditorContext} from "../../../context/context.js"

export const NavView = view(use => (context: EditorContext) => {
	const {router} = context
	use.styles(themeCss, styleCss)

	return html`
		<h2>Omniclip</h2>
		<div class="links">
			<a href="${router.nav.home.hash()}" class="${router.nav.home.active ? "active" : ""}">About</a>
			<a href="${router.nav.projects.hash()}" class="${router.nav.projects.active ? "active" : ""}">Projects</a>
			<a href="${router.nav.account.hash()}" class="${router.nav.account.active ? "active" : ""}">Account</a>
		</div>
	`
})
