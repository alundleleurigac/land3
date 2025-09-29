
import {shiny, themes} from "@e280/shiny"
import {Cellar, OpfsForklift} from "@e280/quay"
import {contextualizeViews, spa} from "@e280/sly"

import {Strata} from "./strata.js"
import {Lol} from "../dom/views/lol/view.js"
import {Nav} from "../dom/views/nav/view.js"
import {AboutPage} from "../pages/about/view.js"
import {mkOmniMedia} from "../dom/components/omni-media/element.js"
import {TabBar} from "../dom/views/tab-bar/view.js"
import {CargoController} from "./controllers/cargo.js"
import {UnknownPage} from "../pages/unknown/view.js"
import {AccountPage} from "../pages/account/view.js"
import {ProjectPage} from "../pages/project/view.js"
import {TabManager} from "./controllers/input/tabs.js"
import {ProjectsPage} from "../pages/projects/view.js"
import {Keybindings} from "./controllers/input/keybindings.js"

export class EditorContext {
	static async setup() {
		const requirements = await setupRequirements()
		return new this(requirements)
	}

	constructor(private requirements: Requirements) {}

	get strata() {
		return this.requirements.strata
	}

	get tabs() {
		return this.requirements.tabs
	}

	get controllers() {
		return this.requirements.controllers
	}

	router = new spa.Router({
		routes: {
			home: spa.route("#/", async() => AboutPage(this)),
			account: spa.route("#/account", async() => AccountPage(this)),
			projects: spa.route("#/projects", async() => ProjectsPage(this)),
			project: spa.route(`#/project/{projectId}`, async() => ProjectPage(this)),
		},
		notFound: async() => UnknownPage(),
	})

	views = {
		...shiny({theme: themes.basic}).views,
		...contextualizeViews(this, {Nav, Lol}),
	}

	getElements = () => ({
		OmniMedia: mkOmniMedia(this),
	})

	dispose = () => {
		this.requirements.keybindings.dispose()
	}
}

type Requirements = Awaited<ReturnType<typeof setupRequirements>>

async function setupRequirements() {
	const strata = new Strata()
	const tabs = new TabManager()
	const keybindings = await Keybindings.setup(tabs)
	const forklift = await OpfsForklift.setup("files")
	const cellar = new Cellar(forklift)
	const controllers = {
		cargo: new CargoController(strata, cellar),
	}
	return {strata, controllers, tabs, keybindings}
}

