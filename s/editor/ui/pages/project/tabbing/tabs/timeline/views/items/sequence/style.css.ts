import {css} from "lit"

export default css`@layer view {

:host {
	display: block;
	width: 100%;
}

.sequence-content {
	display: flex;
	gap: 5px;
	align-items: flex-start;
	padding: 5px;
	background: #252525;
	border-radius: 8px;
	width: fit-content;
}

}`

