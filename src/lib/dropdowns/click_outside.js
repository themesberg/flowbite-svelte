export function clickOutside(node) {
	const handleClick = (event) => {
		if (!node.contains(event.target)) {
			node.dispatchEvent(new CustomEvent("outclick"));
		}
	};

	document.addEventListener("click", handleClick, false);

	return {
		destroy() {
			document.removeEventListener("click", handleClick, false);
		}
	};
}