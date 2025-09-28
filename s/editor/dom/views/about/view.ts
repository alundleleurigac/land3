import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import themeCss from "../../../theme.css.js"

import {getMetaVersion} from "../../../../tools/get-meta-version.js"
import {EditorContext} from "../../../context/context.js"

export const AboutView = view(use => (context: EditorContext) => {
	use.name("about")
	use.styles(themeCss, styleCss)

	const version = use.once(() => getMetaVersion())

	return html`
		<div class=plate>
			<img alt="" src="/assets/logo/omni.avif"/>
			<h2><span>Omniclip</span> <span>v${version}</span></h2>
			<p>a new horizon</p>
		<div>
	`
})
