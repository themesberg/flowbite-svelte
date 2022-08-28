<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { createPopper } from '@popperjs/core';
	import classNames from 'classnames';
	import type { Placement, Instance } from '@popperjs/core';

	export let activeContent: boolean = false;
	export let animation: false | number = 100;
	export let arrow: boolean = true;
	export let offset: number = 8;
	export let placement: Placement = 'top';
	export let trigger: 'hover' | 'click' = 'hover';
	export let triggeredBy: string;

	const dispatch = createEventDispatcher();

	let open: boolean = false;

	let clickable: boolean;
	$: clickable = trigger === 'click';

	$: dispatch('show', open);

	let triggerEl;
	let triggerEls = [];
	let popper: Instance;

	let _blocked: boolean = false; // managment of the race condition between focusin and click events
	const block = () => ((_blocked = true), setTimeout(() => (_blocked = false), 250));

	const showHandler = (ev: Event) => {
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
	const hasHover = (el) => (el as Element).matches && (el as Element).matches(':hover');
	const hasFocus = (el) =>
		(el as Element).contains && (el as Element).contains(document.activeElement);

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

	function init(node, _open) {
		popper = createPopper(triggerEl, node, {
			placement,
			modifiers: [
				{ name: 'offset', options: { offset: [0, offset] } },
				{ name: 'eventListeners', enabled: open }
			]
		});
		return {
			destroy() {
				popper.destroy();
			}
		};
	}

	onMount(() => {
		const events: [string, any, boolean][] = [
			['focusin', showHandler, true],
			['focusout', hideHandler, true],
			['click', showHandler, clickable],
			['mouseenter', showHandler, !clickable],
			['mouseleave', hideHandler, !clickable]
		];

		triggerEls = [...document.querySelectorAll(triggeredBy)];
		if (!triggerEls.length) console.error('no triggers given');

		triggerEls.forEach((element: HTMLElement) => {
			// trigger must be focusable
			if (element.tabIndex < 0) element.tabIndex = 0;
			for (const [name, handler, cond] of events) if (cond) element.addEventListener(name, handler);
		});

		return () => {
			triggerEl = undefined;
			triggerEls.forEach((element: HTMLElement) => {
				if (element) {
					for (const [name, handler, cond] of events) element.removeEventListener(name, handler);
				}
			});
		};
	});
</script>

{#if open}
	<div
		use:init={open}
		transition:fade={{ duration: animation ? animation : 0 }}
		role="tooltip"
		tabIndex={activeContent ? -1 : undefined}
		class={classNames('z-10', $$props.class)}
		on:focusin={activeContent ? showHandler : undefined}
		on:focusout={activeContent ? hideHandler : undefined}
		on:mouseenter={activeContent && !clickable ? showHandler : undefined}
		on:mouseleave={activeContent && !clickable ? hideHandler : undefined}
		style="position: absolute;">
		<slot />
		{#if arrow}<div data-popper-arrow />{/if}
	</div>
{/if}
