
import {html} from "lit"
import {spa, view} from "@e280/sly"
import styleCss from "./style.css.js"
import themeCss from "../../theme.css.js"
import {EditorContext} from "../../context/context.js"

export const EditorApp = (context: EditorContext) => view.component(use => {
	use.styles(themeCss, styleCss)

	const {router} = context
	use.styles(themeCss, styleCss)

	function renderLink(label: string, navigable: spa.Navigable) {
		const hash = navigable.hash()
		const className = navigable.active ? "active" : ""
		return html`<a href="${hash}" class="${className}">${label}</a>`
	}

	return html`
		<h2>Omniclip</h2>
		<nav>
			${renderLink("About", router.nav.home)}
			${renderLink("Projects", router.nav.projects)}
			${renderLink("Account", router.nav.account)}
		</nav>
		<main>
			${context.router.render()}
		</main>
	`
})

