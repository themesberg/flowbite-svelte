export function navHelper() {
	let navOpen = $state(false);
   

	function toggleNav() {
        console.log('clicked toggle')
		navOpen = !navOpen;
        // console.log('navHelper navOpen', navOpen)
	}

    function closeNav(){
        navOpen = false;
    }

	return {
		get navStatus() {
			return navOpen;
		},


		toggleNav,
        closeNav
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
    }
}