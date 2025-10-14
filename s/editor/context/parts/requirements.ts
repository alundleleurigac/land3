
import {Cellar, OpfsForklift} from "@e280/quay"
import {Datafile, Driver, O, Omni, TimelineFile, VideoPlayer} from "@omnimedia/omnitool"

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
	const driver = await Driver.setup()
	const project = new Omni(driver)
	const controllers = {
		cargo: new CargoController(strata, cellar),
		player: await VideoPlayer.create(driver, strata.timeline.state.timeline as TimelineFile)
	}
	const omni = new O({
		get project() {
			return strata.timeline.state.timeline as TimelineFile
		},
		set project(p: TimelineFile) {
			strata.timeline.mutate(state => state.timeline = p)
		}
	})
	demo(strata, project)
	return {strata, controllers, tabs, keybindings, omni, project}
}

async function demo(strata: Strata, omni: Omni) {
	const demoVideo = await fetch("/assets/transitions.mp4")
	const bytes = await demoVideo.bytes()
	const {videoA} = await omni.load({videoA: Datafile.make(bytes)})
	strata.timeline.mutate(state => state.timeline =
		omni.timeline(o =>
			o.sequence(
			  o.stack(
			    o.video(videoA, {duration: 5000}),
			    o.audio(videoA, {duration: 8000})
			  ),
			  o.video(videoA, {duration: 7000})
		)),
	)
}
