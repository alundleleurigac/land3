import {css} from "lit"

export default css`@layer view {

:host {
	display: grid;
	grid-template-columns: 200px 1fr;
	width: 100%;
}

.track-header {
	grid-column: 1;
	display: flex;
	align-items: center;
	padding: 0.5em;
	background: #222;
	border-bottom: 1px solid #1a1a1a;
	border-right: 1px solid #1a1a1a;
	user-select: none;
	gap: 1em;
}

.track-name {
	font-weight: bold;
	color: #ccc;
	font-size: 0.9em;
	margin-right: auto;
}

.track-controls {
	display: flex;
	gap: 0.5em;
}

.track-controls button {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 1.8em;
	height: 1.8em;
	background: #333;
	border: none;
	color: #aaa;
	border-radius: 0.3em;
	cursor: pointer;
	transition: background 0.2s ease;
}

.track-controls button:hover {
	background: #444;
	color: white;
}

.track-controls svg {
	width: 1em;
	height: 1em;
}

.track-content {
	grid-column: 2;
	position: relative;
	background: #1f1f1f;
	border-bottom: 1px solid #1a1a1a;
}

}`

