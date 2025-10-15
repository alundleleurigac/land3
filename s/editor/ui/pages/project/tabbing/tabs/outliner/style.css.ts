import {css} from "lit"

export default css`@layer view {

:host {
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow-y: auto;
	background: #1f1f1f;
}

.search-bar {
	padding: 1em;
	position: sticky;
	top: 0;
	background: #1f1f1f;
	z-index: 2;
}

.search-bar input {
	width: 100%;
	padding: 0.8em 1em;
	background: #2a2a2a;
	border: 1px solid #3a3a3a;
	border-radius: 8px;
	color: #eee;
	font-size: 1em;
}

.search-bar input:focus {
	outline: none;
	border-color: var(--prime);
	box-shadow: 0 0 0 2px color-mix(in srgb, var(--prime) 30%, transparent);
}

.outliner-tabs {
	flex: 1;
	display: flex;
	flex-direction: column;
}

.outliner-tabs > input[type="radio"] {
	display: none;
}

.tab-bar {
	display: flex;
	border-bottom: 1px solid #3a3a3a;
	padding: 0 1em;
}

.tab-bar label {
	padding: 0.8em 1.2em;
	cursor: pointer;
	color: #888;
	font-weight: 600;
	border-bottom: 2px solid transparent;
	transition: color 0.2s ease, border-color 0.2s ease;
}

.tab-bar label:hover {
	color: #ccc;
}

.outliner-tabs > input#tab-clips:checked ~ .tab-bar label[for="tab-clips"],
.outliner-tabs > input#tab-roles:checked ~ .tab-bar label[for="tab-roles"],
.outliner-tabs > input#tab-tags:checked ~ .tab-bar label[for="tab-tags"] {
	color: white;
	border-bottom-color: var(--prime);
}

.tab-panels {
	flex: 1;
	padding: 1.5em 1em;
}

.tab-panel {
	display: none;
}

.outliner-tabs > input#tab-clips:checked ~ .tab-panels #clips-panel,
.outliner-tabs > input#tab-roles:checked ~ .tab-panels #roles-panel,
.outliner-tabs > input#tab-tags:checked ~ .tab-panels #tags-panel {
	display: flex;
	flex-direction: column;
	gap: 1.5em;
}

.placeholder {
	color: #666;
	font-style: italic;
	text-align: center;
	padding: 2em;
}

.section {
	display: flex;
	flex-direction: column;
	gap: 0.8em;
}

.section-title {
	font-size: 0.9em;
	font-weight: bold;
	color: #888;
	text-transform: uppercase;
	padding: 0 0.5em;
}

.item-list {
	display: flex;
	flex-direction: column;
	gap: 0.5em;
}

.item-list-header {
	display: grid;
	grid-template-columns: 2em 2em 1fr auto auto;
	gap: 0.8em;
	padding: 0 0.8em;
	font-size: 0.8em;
	font-weight: bold;
	color: #777;
}

.item-list-header span:nth-child(1) { grid-column: 3; }
.item-list-header span:nth-child(2) { grid-column: 4; }

.item-row {
	display: grid;
	grid-template-columns: 2em 2em 1fr auto auto;
	align-items: center;
	gap: 0.8em;
	padding: 0.5em 0.8em;
	border-radius: 8px;
	background: #2c2c2c;
	border: 1px solid transparent;
	cursor: pointer;
	transition: background 0.2s ease, border-color 0.2s ease;
}

.item-row:hover {
	background: #3a3a3a;
}

.color-swatch {
	width: 1em;
	height: 1em;
	border-radius: 4px;
	border: 1px solid #111;
}

.icon {
	display: flex;
	align-items: center;
	color: #aaa;
}

.icon svg {
	width: 1.2em;
	height: 1.2em;
}

.label {
	font-weight: 600;
	color: #ddd;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.duration {
	font-size: 0.9em;
	color: #888;
	justify-self: end;
}

.star-button {
	display: flex;
	align-items: center;
	justify-content: center;
	background: none;
	border: none;
	color: #888;
	padding: 0.3em;
	border-radius: 50%;
	cursor: pointer;
	transition: color 0.2s ease, background 0.2s ease;
}

.star-button:hover {
	background: #444;
	color: yellow;
}

.star-button svg {
	width: 1.1em;
	height: 1.1em;
}

.star-button[data-starred] {
	color: yellow;
}

}`

