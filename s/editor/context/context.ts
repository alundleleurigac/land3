
import {makeRouter} from "./parts/router.js"
import {prepareViews} from "./parts/views.js"
import {mkOmniMedia} from "../dom/components/omni-media/element.js"
import {Requirements, setupRequirements} from "./parts/requirements.js"

export class EditorContext {
	static async setup() {
		const requirements = await setupRequirements()
		return new this(requirements)
	}

	constructor(private requirements: Requirements) {}

	router = makeRouter(this)
	views = prepareViews(this)

	getElements = () => ({
		OmniMedia: mkOmniMedia(this),
	})

	get strata() { return this.requirements.strata }
	get tabs() { return this.requirements.tabs }
	get controllers() { return this.requirements.controllers }

	dispose = () => {
		this.requirements.keybindings.dispose()
	}
}

