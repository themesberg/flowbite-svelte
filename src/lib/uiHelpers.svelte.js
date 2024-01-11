export function uiHelpers() {
	let isOpen = $state(false);

	function toggle() {
		// console.log('clicked toggle');
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

