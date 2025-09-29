
import {spa} from "@e280/sly"
import {EditorContext} from "../context"
import {AboutPage} from "../../pages/about/view.js"
import {AccountPage} from "../../pages/account/view.js"
import {UnknownPage} from "../../pages/unknown/view.js"
import {ProjectPage} from "../../pages/project/view.js"
import {ProjectsPage} from "../../pages/projects/view.js"

export const makeRouter = (context: EditorContext) => new spa.Router({
	notFound: async() => UnknownPage(context)(),
	routes: {
		home: spa.route("#/", async() => AboutPage(context)()),
		account: spa.route("#/account", async() => AccountPage(context)()),
		projects: spa.route("#/projects", async() => ProjectsPage(context)()),
		project: spa.route(`#/project/{projectId}`, async(id) => ProjectPage(context)(id.projectId)),
	},
})

