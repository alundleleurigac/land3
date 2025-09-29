
import {html} from "lit"
import {view} from "@e280/sly"
import styleCss from "./style.css.js"
import themeCss from "../../theme.css.js"
import {EditorContext} from "../../context/context.js"

export const ProjectPage = (context: EditorContext) => view(use => (projectId: string) => {
	use.styles(themeCss, styleCss)

	return html`
		<div class="app">
			${context.views.EditorApp(projectId)}
		</div>
	`
})

