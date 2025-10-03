import {css} from "lit"

export default css`@layer view {

:host {
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow: hidden;
}

.timeline-area {
	display: flex;
	flex-direction: column;
	flex: 1;
	overflow: auto;
	position: relative;
	background: #181818;
}

.content-area {
	position: relative;
	width: fit-content;
	min-width: 100%;
}

}`

