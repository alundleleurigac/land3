import {css} from "lit"

export default css`@layer view {

:host {
  display: grid;
  grid-template-columns: 200px 1fr;
}

.sequence-container {
	display: flex;
	flex-direction: row;
	gap: 5px;
	align-items: flex-start;
	padding: 5px;
	background: #252525;
	border-radius: 8px;
}

}`

