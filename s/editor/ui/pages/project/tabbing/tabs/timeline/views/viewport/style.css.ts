import {css} from "lit"

export default css`@layer view {
.viewport {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

canvas {
	width: 500px;
	background: var(--bg);
}
}`
