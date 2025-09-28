import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import themeCss from "../../../theme.css.js"
import {EditorContext} from "../../../context/context.js"

export const ProjectsView = view(use => (context: EditorContext) => {
	use.name("projects")
	use.styles(themeCss, styleCss)

	return html`
		<div class=plate>
			<h1>Projects</h1>
			<p>The project browser will be here.</p>
		<div>
	`
})
