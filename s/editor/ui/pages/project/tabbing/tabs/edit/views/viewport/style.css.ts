import {css} from "lit"

export default css`@layer view {
:host {
	height: 100%;
}

.viewport {
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

canvas {
	height: 100%;
	overflow: auto;
	background: var(--bg);
}
}`
