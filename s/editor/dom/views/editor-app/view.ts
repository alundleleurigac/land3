
import {html} from 'lit'
import {view} from '@e280/sly'

import styleCss from './style.css.js'
import themeCss from '../../../theme.css.js'
import {TimelineTab} from '../../tabs/timeline/view.js'
import {OutlinerTab} from '../../tabs/outliner/view.js'
import {EditorContext} from '../../../context/context.js'

export const EditorApp = (context: EditorContext) => view(use => (projectId: string) => {
	use.styles(themeCss, styleCss)
	use.mount(() => () => context.dispose())

	const manager = context.tabs
	const TabBarView = context.views.TabBar()

	const renderActiveTab = () => {
		switch (manager.activeTabId.value) {
			case "timeline": return TimelineTab()
			case "outliner": return OutlinerTab()
			default: return html`<p>Unknown tab</p>`
		}
	}

	return html`
		<p>editing project: ${projectId}</p>
		${TabBarView}
		<div class="tab-content">
			${renderActiveTab()}
		</div>
	`
})

