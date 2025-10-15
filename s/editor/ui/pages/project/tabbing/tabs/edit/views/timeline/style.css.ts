import {css} from "lit"

export default css`@layer view {

:host {
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow: hidden;
}

.timeline-grid {
	display: grid;
	grid-template-columns: 200px 1fr;
	grid-template-rows: auto 1fr;
	flex: 1;
	overflow: auto;
	position: relative;
	background: #181818;
}

.corner-box {
	grid-column: 1;
	grid-row: 1;
	position: sticky;
	top: 0;
	left: 0;
	background: #222;
	border-bottom: 1px solid #1a1a1a;
	border-right: 1px solid #1a1a1a;
	z-index: 6;
}

.ruler-container {
	grid-column: 2;
	grid-row: 1;
	position: sticky;
	top: 0;
	overflow: visible;
	z-index: 4;
}

.headers-panel {
	grid-column: 1;
	grid-row: 2;
	position: sticky;
	left: 0;
	background: #222;
	height: 100vh;
	z-index: 6;
}

.content-panel {
	grid-column: 2;
	grid-row: 2;
	position: relative;
	z-index: 1;
}

.playhead-container {
	grid-column: 2;
	grid-row: 2;
	position: relative;
	z-index: 5;
	pointer-events: none;
}

}`

