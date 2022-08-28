<script lang="ts">
	import { createEventDispatcher, onMount, onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
	import { createPopper } from '@popperjs/core';
	import classNames from 'classnames';

	import type { Modifier, Placement, Instance, VirtualElement } from '@popperjs/core';

	const dispatch = createEventDispatcher();

	export let triggers: string;
	export let open: boolean = false;

	export let placement: Placement = 'top';
	export let offset: number = 8;
	export let trigger: 'hover' | 'click' = 'hover';
	export let arrow: boolean = true;
	// export let animation: false | `duration-${number}` = 'duration-3000';
	export let activeContent: boolean;

	let clickable: boolean;
	$: clickable = trigger === 'click';

	let triggerEl;
	let triggerEls = [];
	let popper: Instance;

	let _blocked: boolean = false; // managment of the race condition between focusin and click events
	const block = () => ((_blocked = true), setTimeout(() => (_blocked = false), 250));

	$: console.log(triggers, document.querySelectorAll(triggers));

	const showHandler = (ev: Event) => {
		console.log('show', ev.type, ev.target);
		if (triggerEl === undefined) triggerEl = ev.target;
		else if (triggerEls.includes(ev.target) && triggerEl !== ev.target) {
			popper.state.elements.reference = ev.target as HTMLElement;
			popper.setOptions({ placement });
			triggerEl = ev.target;
			block();
		}
		if (clickable && ev.type === 'focusin' && !open) block();
		open = clickable && ev.type === 'click' && !_blocked ? !open : true;
	};

	// typescript typeguards - poper.state.element.reference: Element|HTMLElement|VirtualElement
	const hasHover = (x) => (x as Element).matches && (x as Element).matches(':hasHover');
	const hasFocus = (x) =>
		(x as Element).contains && (x as Element).contains(document.activeElement);

	const hideHandler = (ev) => {
		if (!_blocked)
			setTimeout(() => {
				const elements = Object.values(popper.state.elements);
				if (ev.type === 'mouseleave' && elements.some(hasHover)) return;
				if (ev.type === 'focusout' && elements.some(hasFocus)) return;
				open = false;
			}, 100);
	};

	function init(node, _open) {
		console.log('init', triggers, triggerEl);
		// const popper: Instance = createPopper(triggerEl, node, {
		popper = createPopper(triggerEl, node, {
			placement,
			modifiers: [
				{ name: 'offset', options: { offset: [0, offset] } },
				{ name: 'eventListeners', enabled: open }
			]
		});
		return {
			update(_open) {
				console.log('update');
				updatePopper(popper);
			},
			destroy() {
				console.log('destroy');
				popper.destroy();
			}
		};
	}

	function enableListeners(modifiers: Modifier<any, any>[]) {
		const modifier = modifiers.find((x) => x.name === 'eventListeners');
		if (!modifier) return [...modifiers, { name: 'eventListeners', enabled: open }];
		modifier.enabled = open;
		return modifiers;
	}

	function updatePopper(popper: Instance) {
		// Enable the event listeners
		popper.setOptions(({ modifiers, ...options }) => ({
			...options,
			modifiers: enableListeners(modifiers)
		}));
		open && popper.update(); // Update the position
		dispatch('show', open);
	}

	let divClass: string;
	$: divClass = classNames('z-10', $$props.class);

	onMount(() => {
		triggerEls = [...document.querySelectorAll(triggers)];
		if (!triggerEls.length) console.error('no triggers given');

		triggerEls.forEach((node) => {
			console.log(node, node.tabindex);
			node.addEventListener('focusin', showHandler);
			node.addEventListener('focusout', hideHandler);
			if (clickable) {
				node.addEventListener('click', showHandler);
			} else {
				node.addEventListener('mouseenter', showHandler);
				node.addEventListener('mouseleave', hideHandler);
			}
		});

		return () => {
			triggerEl = undefined;
			triggerEls.forEach((element: HTMLElement) => {
				console.log('destroy', element);
				element.removeEventListener('focusin', showHandler);
				element.removeEventListener('focusout', hideHandler);
				element.removeEventListener('click', showHandler);
				element.removeEventListener('mouseenter', showHandler);
				element.removeEventListener('mouseleave', hideHandler);
			});
		};
	});
</script>

{#if open}
	<div
		use:init={open}
		transition:fade={{ duration: 100, delay: 0 }}
		role="tooltip"
		tabindex={activeContent ? -1 : undefined}
		class={divClass}
		on:focusin={activeContent ? showHandler : undefined}
		on:focusout={activeContent ? hideHandler : undefined}
		on:mouseenter={activeContent && !clickable ? showHandler : undefined}
		on:mouseleave={activeContent && !clickable ? hideHandler : undefined}
		style="position: absolute;">
		<slot />
		{#if arrow}<div data-popper-arrow />{/if}
	</div>
{/if}
