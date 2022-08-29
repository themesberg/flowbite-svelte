/*
 Custom Event Dispatcher
 
 Sets `target` in event data.

 https://svelte.dev/repl/c93cbf99a8ca4f44912e662a8e3cbef7?version=3.37.0

*/

import { get_current_component } from 'svelte/internal';

export default function createEventDispatcher() {
	const component = get_current_component();
	return (type, target, detail) => {
		const callbacks = component.$$.callbacks[type];
		if (callbacks) {
			const event = new CustomEvent(type, { detail });
			target.dispatchEvent(event);
			callbacks.slice().forEach((fn) => {
				fn.call(component, event);
			});
		}
	};
}
