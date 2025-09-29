import {html, css} from "lit"
import {view} from "@e280/sly"

import {repeat} from "lit/directives/repeat.js"
import {EditorContext} from "../../../context/context.js"

export const TabBar = view(use => (context: EditorContext) => {
	const manager = context.tabs
	use.styles(css`
		nav {
			display: flex;
			border-bottom: 1px solid #333;
			background: #222;
		}
		button {
			background: transparent;
			border: none;
			color: #aaa;
			padding: 0.8em 1.2em;
			cursor: pointer;
			border-bottom: 2px solid transparent;
			font-size: 1em;
		}
		button:hover {
			background: #2a2a2a;
			color: white;
		}
		button[data-active] {
			color: white;
			border-bottom-color: cyan;
		}
	`)

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
