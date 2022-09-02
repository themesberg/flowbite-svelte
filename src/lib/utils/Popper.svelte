<script lang="ts">
	import { onMount } from 'svelte';
	import { createPopper } from '@popperjs/core';
	import classNames from 'classnames';
	import type { Placement, Instance } from '@popperjs/core';
	import createEventDispatcher from './createEventDispatcher';

	export let activeContent: boolean = false;
	export let animation: 'none' | 'fast' | 'medium' | 'slow' = 'none';
	export let arrow: boolean = true;
	export let offset: number = 8;
	export let placement: Placement = 'top';
	export let trigger: 'hover' | 'click' = 'hover';
	export let triggeredBy: string = undefined;
	export let open: boolean = false;

	const dispatch = createEventDispatcher();

	let clickable: boolean;
	$: clickable = trigger === 'click';

	$: popper && dispatch('show', popper.state.elements.reference, open);

	let contentEl;
	let triggerEls = [];
	let popper: Instance;

	let _blocked: boolean = false; // managment of the race condition between focusin and click events
	const block = () => ((_blocked = true), setTimeout(() => (_blocked = false), 250));

	const showHandler = (ev: Event) => {
		if (triggerEls.includes(ev.target) && popper.state.elements.reference !== ev.target) {
			popper.state.elements.reference = ev.target as Element;
			block();
		}
		if (clickable && ev.type === 'focusin' && !open) block();
		open = clickable && ev.type === 'click' && !_blocked ? !open : true;
	};

	// reactivity
	$: popper && open && popper.setOptions({ placement });

	// typescript typeguards - poper.state.element.reference: Element|HTMLElement|VirtualElement
	const hasHover = (el) => (el as Element).matches && (el as Element).matches(':hover');
	const hasFocus = (el) => (el as Element).contains && (el as Element).contains(document.activeElement);

	const hideHandler = (ev) => {
		if (activeContent) {
			setTimeout(() => {
				const elements = Object.values(popper?.state.elements ?? {});
				if (ev.type === 'mouseleave' && elements.some(hasHover)) return;
				if (ev.type === 'focusout' && elements.some(hasFocus)) return;
				open = false;
			}, 100);
		} else open = false;
	};

	onMount(() => {
		const events: [string, any, boolean][] = [
			['focusin', showHandler, true],
			['focusout', hideHandler, true],
			['click', showHandler, clickable],
			['mouseenter', showHandler, !clickable],
			['mouseleave', hideHandler, !clickable]
		];

		triggerEls = [...document.querySelectorAll(triggeredBy)];
		if (!triggerEls.length) {
			if (contentEl.previousElementSibling) triggerEls.push(contentEl.previousElementSibling);
			else console.error('No triggers found.');
		}

		triggerEls.forEach((element: HTMLElement) => {
			if (element.tabIndex < 0) element.tabIndex = 0; // trigger must be focusable
			for (const [name, handler, cond] of events) if (cond) element.addEventListener(name, handler);
		});

		if (triggerEls[0])
			popper = createPopper(triggerEls[0], contentEl, {
				placement,
				modifiers: [
					{ name: 'offset', options: { offset: [0, offset] } },
					{ name: 'eventListeners', enabled: open }
				]
			});

		return () => {
			triggerEls.forEach((element: HTMLElement) => {
				if (element) {
					for (const [name, handler] of events) element.removeEventListener(name, handler);
				}
			});
			popper && popper.destroy();
		};
	});

	const animationDuration = {
		fast: 'duration-100',
		medium: 'duration-300',
		slow: 'duration-700'
	};

	let popperClass;
	$: popperClass = classNames(
		'z-10',
		open ? 'opacity-100 visible' : 'opacity-0 invisible',
		animationDuration[animation] && 'transition-opacity',
		animationDuration[animation],
		$$props.class
	);
</script>

<div
	bind:this={contentEl}
	role="tooltip"
	tabIndex={activeContent ? -1 : undefined}
	class={popperClass}
	on:focusin={activeContent ? showHandler : undefined}
	on:focusout={activeContent ? hideHandler : undefined}
	on:mouseenter={activeContent && !clickable ? showHandler : undefined}
	on:mouseleave={activeContent && !clickable ? hideHandler : undefined}
	style:position="absolute">
	<slot />
	{#if arrow}<div data-popper-arrow />{/if}
</div>
