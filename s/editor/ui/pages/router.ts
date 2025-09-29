
import {spa} from "@e280/sly"
import {AboutPage} from "./about/view.js"
import {AccountPage} from "./account/view.js"
import {UnknownPage} from "./unknown/view.js"
import {ProjectPage} from "./project/view.js"
import {ProjectsPage} from "./projects/view.js"
import {EditorContext} from "../../context/context.js"

export const makeRouter = (context: EditorContext) => new spa.Router({
	notFound: () => UnknownPage(context)(),
	routes: {
		home: spa.route("#/", async() => AboutPage(context)()),
		account: spa.route("#/account", async() => AccountPage(context)()),
		projects: spa.route("#/projects", async() => ProjectsPage(context)()),
		project: spa.route(`#/project/{projectId}`, async(id) => ProjectPage(context)(id.projectId)),
	},
})

