//
// Focus trap copied from https://uxdesign.cc/how-to-trap-focus-inside-modal-to-make-it-ada-compliant-6a50f9a70700
//

// add all the elements inside modal which you want to make focusable
const focusableElements =
	'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function getFocusable(node) {
	const focusableContent = node.querySelectorAll(focusableElements);
	return [focusableContent[0], focusableContent[focusableContent.length - 1]];
}

export default function focusTrap(node, _open) {
	let firstFocusableElement, lastFocusableElement; // first and last element to be focused inside modal

	function handleFocusTrap(e) {
		let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

		if (!isTabPressed) {
			return;
		}

		if (e.shiftKey) {
			// if shift key pressed for shift + tab combination
			if (document.activeElement === firstFocusableElement) {
				lastFocusableElement.focus(); // add focus for the last focusable element
				e.preventDefault();
			}
		} else {
			// if tab key is pressed
			if (document.activeElement === lastFocusableElement) {
				// if focused has reached to last focusable element then focus first focusable element after pressing tab
				firstFocusableElement.focus(); // add focus for the first focusable element
				e.preventDefault();
			}
		}
	}

	if (_open) {
		[firstFocusableElement, lastFocusableElement] = getFocusable(node);
		document.addEventListener('keydown', handleFocusTrap, true);
		firstFocusableElement.focus();
	}

	return {
		update(_open) {
			if (_open) {
				[firstFocusableElement, lastFocusableElement] = getFocusable(node);
				document.addEventListener('keydown', handleFocusTrap, true);
				firstFocusableElement.focus();
			} else {
				document.removeEventListener('keydown', handleFocusTrap, true);
			}
		},

		destroy() {
			document.removeEventListener('keydown', handleFocusTrap, true);
		}
	};
}
