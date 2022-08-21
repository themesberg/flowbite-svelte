<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { createPopper } from '@popperjs/core';
	import classNames from 'classnames';

	import type { Modifier, Placement, Instance } from '@popperjs/core';

	const dispatch = createEventDispatcher();

	export let open: boolean = false;

	export let placement: Placement = 'top';
	export let offset: number = 8;
	export let trigger: 'hover' | 'click' = 'hover';
	export let arrow: boolean = true;
	export let animation: false | `duration-${number}` = 'duration-300';

	export let activeContent: boolean;

	let clickable: boolean;
	$: clickable = trigger === 'click';

	let triggerEl, contentEl, popper: Instance;

	let _blocked: boolean = false; // managment of the race condition between focusin and click events
	const block = () => ((_blocked = true), setTimeout(() => (_blocked = false), 500));

	const showHandler = (ev) => {
		if (clickable && ev.type === 'focusin' && !open) block();
		open = ev.type === 'click' && !_blocked ? !open : true;
	};

	const hideHandler = (ev) => {
		if (activeContent)
			setTimeout(
				() =>
					(!clickable && (triggerEl.matches(':hover') || contentEl.matches(':hover'))) ||
					contentEl.contains(document.activeElement) ||
					(open = false),
				100
			);
		else open = false;
	};

	$: {
		if (triggerEl && contentEl) {
			popper = createPopper(triggerEl, contentEl, {
				placement,
				modifiers: [{ name: 'offset', options: { offset: [0, offset] } }]
			});
		}
	}

	function enableListeners(modifiers: Modifier<any, any>[]) {
		const modifier = modifiers.find((x) => x.name === 'eventListeners');
		if (!modifier) return [...modifiers, { name: 'eventListeners', enabled: open }];
		modifier.enabled = open;
		return modifiers;
	}

	$: {
		if (popper) {
			// Enable the event listeners
			popper.setOptions(({ modifiers, ...options }) => ({
				...options,
				modifiers: enableListeners(modifiers)
			}));
			open && popper.update(); // Update the position
			dispatch('show', open);
		}
	}

	let divClass: string;
	$: divClass = classNames(
		'z-10',
		animation && `transition-opacity ${animation}`,
		open ? 'visible opacity-100' : 'invisible opacity-0',
		$$props.class
	);
</script>

<div
	bind:this={triggerEl}
	on:focusin={showHandler}
	on:focusout={hideHandler}
	on:click={clickable ? showHandler : undefined}
	on:mouseenter={clickable ? undefined : showHandler}
	on:mouseleave={clickable ? undefined : hideHandler}
	class="inline-block"
>
	<slot name="trigger" />
</div>
<div
	bind:this={contentEl}
	role="tooltip"
	tabindex={activeContent ? -1 : undefined}
	class={divClass}
	on:focusin={activeContent ? showHandler : undefined}
	on:focusout={activeContent ? hideHandler : undefined}
	on:mouseenter={activeContent && !clickable ? showHandler : undefined}
	on:mouseleave={activeContent && !clickable ? hideHandler : undefined}
>
	<slot />
	{#if arrow}<div data-popper-arrow />{/if}
</div>
