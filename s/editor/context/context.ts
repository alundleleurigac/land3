
import {spa} from "@e280/sly"
import {Cellar, OpfsForklift} from "@e280/quay"

import {Strata} from "./strata.js"
import {NavView} from "../dom/views/nav/view.js"
import {getLolView} from "../dom/views/lol/view.js"
import {AboutView} from "../dom/views/about/view.js"
import {CargoController} from "./controllers/cargo.js"
import {UnknownView} from "../dom/views/unknown/view.js"
import {AccountView} from "../dom/views/account/view.js"
import {ProjectsView} from "../dom/views/projects/view.js"
import {getOmniMedia} from "../dom/components/omni-media/element.js"

export class EditorContext {
	static async setup() {
		const requirements = await setupRequirements()
		return new this(requirements)
	}

	constructor(private requirements: Requirements) {}

	get strata() {
		return this.requirements.strata
	}

	get controllers() {
		return this.requirements.controllers
	}

	router = new spa.Router({
		routes: {
			home: spa.route("#/", async() => AboutView(this)),
			account: spa.route("#/account", async() => AccountView(this)),
			projects: spa.route("#/projects", async() => ProjectsView(this)),
		},
		notFound: async() => UnknownView(),
	})


	views = {
		Nav: NavView(this),
		About: AboutView(this),
		Account: AccountView(this),
		LolView: getLolView(this),
		Project: ProjectsView(this)
	}

	getElements = () => ({
		OmniMedia: getOmniMedia(this),
	})
}

type Requirements = Awaited<ReturnType<typeof setupRequirements>>

async function setupRequirements() {
	const strata = new Strata()
	const forklift = await OpfsForklift.setup("files")
	const cellar = new Cellar(forklift)
	const controllers = {
		cargo: new CargoController(strata, cellar),
	}
	return {strata, controllers}
}

