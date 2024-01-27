export function uiHelpers() {
	let isOpen: boolean | undefined = $state(false);

	function toggle() {
		isOpen = !isOpen;
	}

	function close() {
		isOpen = false;
	}

	function open() {
		isOpen = true;
	}

	return {
		get isOpen() {
			return isOpen;
		},
		set isOpen(value: boolean | undefined) {
			isOpen = value;
		},

		toggle,
		close,
		open
	};
}

export function clickOutside(element, callbackFunction) {
	function onClick(event) {
		if (typeof callbackFunction === 'function') {
			if (!element.contains(event.target)) {
				callbackFunction();
			}
		} else {
			console.error('Callback function is not a function');
		}
	}

	document.body.addEventListener('click', onClick);

	return {
		update(newCallbackFunction) {
			if (typeof newCallbackFunction === 'function') {
				callbackFunction = newCallbackFunction;
			} else {
				console.error('New callback function is not a function');
			}
		},
		destroy() {
			document.body.removeEventListener('click', onClick);
		}
	};
}
