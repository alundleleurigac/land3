
import {html} from "lit"
import {view} from "@e280/sly"
import {Item, Waveform} from "@omnimedia/omnitool"

import {TimelineItem} from "../parts/item/view.js"
import themeCss from "../../../../../../../../../theme.css.js"
import {EditorContext} from "../../../../../../../../../context/context.js"

export const TimelineAudio = view(use => (context: EditorContext, clip: Item.Audio, ancestors: Item.Any[]) => {
	use.styles(themeCss)

	const wave = use.once(() => {
		const wave = document.createElement("div")
		wave.style.pointerEvents = "none"
		const waveform = Waveform.init(context.driver, "/assets/temp/gl.mp4", wave)
		waveform.then(w => w.wavesurfer.setOptions({
			height: 35,
			barAlign: "bottom",
			barWidth: undefined,
			waveColor: "rgb(3, 148, 129)"
		}))
		return wave
	})

	return html`${TimelineItem(context, clip, html`${wave}`, ancestors)}`}
)


