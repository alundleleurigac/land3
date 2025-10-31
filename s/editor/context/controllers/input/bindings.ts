import * as tact from "@benev/tact"

export const bindings = tact.asBindings({
	editor: {
		next_tab: "KeyE",
		previous_tab: "KeyQ",
		switch_to_tab_1: "Digit1",
		switch_to_tab_2: "Digit2",
		switch_to_tab_3: "Digit3",
		switch_to_tab_4: "Digit4",
		switch_to_tab_5: "Digit5",
	},
	timeline: {
		play_pause: "Space",
		split_clip: "KeyS",
	},
	outliner: {
		// future outliner specific actions
	},
	export: {}
})
