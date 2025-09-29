
import {css} from "lit"
export default css`@layer view {

nav {
	display: flex;
	border-bottom: 1px solid #333;
	background: #222;
}

button {
	background: transparent;
	border: none;
	color: #aaa;
	padding: 0.8em 1.2em;
	cursor: pointer;
	border-bottom: 2px solid transparent;
	font-size: 1em;
}

button:hover {
	background: #2a2a2a;
	color: white;
}

button[data-active] {
	color: white;
	border-bottom-color: cyan;
}

}`

