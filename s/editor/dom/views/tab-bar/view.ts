
import {html} from "lit"
import {view} from "@e280/sly"
import {repeat} from "lit/directives/repeat.js"

import styleCss from "./style.css.js"
import themeCss from "../../../theme.css.js"
import {EditorContext} from "../../../context/context.js"

export const TabBar = (context: EditorContext) => view(use => () => {
	const manager = context.tabs
	use.styles(themeCss, styleCss)

	return html`
		<nav>
			${repeat(manager.tabs.value, tab => tab.id, tab => html`
				<button
					?data-active=${tab.id === manager.activeTabId.value}
					@click=${() => manager.switchTo(tab.id)}>
					${tab.id}
				</button>
			`)}
		</nav>
	`
})
