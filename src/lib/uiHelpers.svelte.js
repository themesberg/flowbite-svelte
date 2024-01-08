export function uiHelpers() {
	let isOpen = $state(false);

	function toggle() {
		console.log('clicked toggle');
		isOpen = !isOpen;
	}

	function close() {
		isOpen = false;
	}

	return {
		get isOpen() {
			return isOpen;
		},

		toggle,
		close
	};
}

export function clickOutside(element, callbackFunction) {
	function onClick(event) {
		if (!element.contains(event.target)) {
			callbackFunction();
		}
	}

	document.body.addEventListener('click', onClick);

	return {
		update(newCallbackFunction) {
			callbackFunction = newCallbackFunction;
		},
		destroy() {
			document.body.removeEventListener('click', onClick);
		}
	};
}
