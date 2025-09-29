
import {html} from "lit"
import {view} from "@e280/sly"
import styleCss from "./style.css.js"
import themeCss from "../../../theme.css.js"
import {EditorContext} from "../../../context/context.js"
import {getMetaVersion} from "../../../../tools/get-meta-version.js"

export const AboutPage = (context: EditorContext) => view(use => () => {
	use.name("about")
	use.styles(themeCss, styleCss)

	const version = use.once(() => getMetaVersion())

	return html`
		<header theme=topper></header>

		<section theme=paddy>
			<img alt="" src="/assets/logo/omni.avif"/>
			<h2>
				<strong>Omniclip</strong>
				<small>v${version}</small>
			</h2>
		<section>
	`
})

