
import {html, css} from "lit"
import {dom, view} from "@e280/sly"

import {EditorContext} from "./context/context.js"

const context = await EditorContext.setup()

class OmniEditor extends view.component(use => {
	use.styles(css`
		:host {
			display: flex;
			flex-direction: column;
			height: 100vh;
			overflow: hidden;
		}
		main {
			flex: 1;
			overflow: auto;
		}
	`)


	return html`
		${context.views.Nav}
		<main>
			${context.router.render()}
		</main>
	`
}) {}

dom.register({...context.getElements(), OmniEditor})
