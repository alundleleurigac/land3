
import {Cellar, OpfsForklift} from "@e280/quay"
import {O, TimelineFile, VideoPlayer} from "@omnimedia/omnitool"

import {Strata} from "./strata.js"
import {CargoController} from "../controllers/cargo.js"
import {Keybindings} from "../controllers/input/keybindings.js"
import {TabManager} from "../../ui/pages/project/tabbing/tab-manager.js"

export type Requirements = Awaited<ReturnType<typeof setupRequirements>>

export async function setupRequirements() {
	const strata = new Strata()
	const tabs = new TabManager()
	const keybindings = await Keybindings.setup(tabs)
	const forklift = await OpfsForklift.setup("files")
	const cellar = new Cellar(forklift)
	const controllers = {
		cargo: new CargoController(strata, cellar),
		player: await VideoPlayer.create(strata.timeline.state.timeline as TimelineFile)
	}
	const omni = new O({
		get project() {
			return strata.timeline.state.timeline as TimelineFile
		},
		set project(p: TimelineFile) {
			strata.timeline.mutate(state => state.timeline = p)
		}
	})
	return {strata, controllers, tabs, keybindings, omni}
}

