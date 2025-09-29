
import {provide} from "@e280/stz"
import {shiny, themes, ShinyViews} from "@e280/shiny"
import {Example} from "./example/view.js"
import {EditorContext} from "../../context/context.js"

export const shinyViews = shiny({theme: themes.basic}).views

export const editorViews = {
	Example,
}

export const prepareViews = (context: EditorContext) => ({
	...shinyViews,
	...provide(context, editorViews),
} as {[K in keyof typeof editorViews]: ReturnType<(typeof editorViews)[K]>} & ShinyViews)

