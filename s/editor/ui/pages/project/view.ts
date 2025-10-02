
import {html} from "lit"
import {view} from "@e280/sly"

import styleCss from "./style.css.js"
import {TabBar} from "./tabbing/bar/view.js"
import themeCss from "../../../theme.css.js"
import {TabManager} from "./tabbing/tab-manager.js"
import {TimelineTab} from "./tabbing/tabs/timeline/view.js"
import {OutlinerTab} from "./tabbing/tabs/outliner/view.js"
import {EditorContext} from "../../../context/context.js"

export const ProjectPage = (context: EditorContext) => view(use => (projectId: string) => {
	use.styles(themeCss, styleCss)
	use.mount(() => () => context.dispose())

	const manager = use.once(() => new TabManager())

	const renderActiveTab = () => {
		switch (manager.activeTabId.value) {
			case "timeline": return TimelineTab(context)
			case "outliner": return OutlinerTab()
			default: return html`<p>Unknown tab</p>`
		}
	}

	return html`
		<header theme=topper>
			${TabBar(manager)}
		</header>

		<p>editing project: ${projectId}</p>

		<div class="tab-content">
			${renderActiveTab()}
		</div>
	`
})

