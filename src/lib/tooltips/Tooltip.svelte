<script lang="ts">
	import classNames from 'classnames';
	import { clickOutside } from '$lib/utils/clickOutside';
	import {
		computePosition,
		flip,
		shift,
		offset,
		autoPlacement,
		arrow as arrowFloat,
		type ComputePositionReturn
	} from '@floating-ui/dom';
	import type { Placement } from '@floating-ui/dom';
	import { onDestroy } from 'svelte';

	export let placement: 'auto' | Placement = 'top';
	export let trigger: 'hover' | 'click' = 'hover';
	export let style: 'dark' | 'light' | 'auto' | 'custom' = 'dark';
	export let content: string = '';
	export let animation: false | `duration-${number}` = 'duration-300';
	export let arrow: boolean = true;
	export let tipClass: string =
		'absolute inline-block rounded-lg py-2 px-3 text-sm font-medium shadow-sm';
	export let tipColor: string = '';
	export let open = false;

	const tipStyleClasses = {
		dark: 'bg-gray-900 text-white dark:bg-gray-700',
		light: 'border border-gray-200 bg-white text-gray-900',
		auto: 'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white',
		custom: tipColor
	};

	const arrowStyleClasses = {
		dark: 'bg-gray-900 dark:bg-gray-700',
		light: 'bg-white',
		auto: 'bg-white dark:bg-gray-700',
		custom: tipColor
	};

	let toolTipClass;
	$: toolTipClass = classNames(
		tipClass,
		animation !== false && `transition-opacity ${animation}`,
		!open && 'invisible opacity-0',
		tipStyleClasses[style],
		$$props.class
	);
	const floatingPlacement = (placement: 'auto' | Placement): Placement | undefined => {
		return placement === 'auto' ? undefined : placement;
	};

	const floatingMiddleware = (arrowRef: any, placement: 'auto' | Placement) => {
		const middleware = [];
		middleware.push(offset(8));
		middleware.push(placement === 'auto' ? autoPlacement() : flip());
		middleware.push(shift({ padding: 8 }));
		if (arrowRef) {
			middleware.push(arrowFloat({ element: arrowRef }));
		}
		return middleware;
	};
	let placementData: ComputePositionReturn;
	let tooltipRef: HTMLElement, triggerRef: HTMLElement, arrowRef: HTMLElement;
	const updatePosition = () =>
		computePosition(triggerRef as Element, tooltipRef as HTMLElement, {
			middleware: floatingMiddleware(arrowRef, placement),
			placement: floatingPlacement(placement)
		}).then((data) => (placementData = data));
	let attachedScroll: boolean = false;
	$: tooltipRef && open && updatePosition();
	$: {
		if (tooltipRef && triggerRef) {
			if (open && !attachedScroll) {
				attachedScroll = true;
				window.addEventListener('scroll', updatePosition, true);
			} else if (!open && attachedScroll) {
				attachedScroll = false;
				window.removeEventListener('scroll', updatePosition, true);
			}
		}
	}
	onDestroy(() => {
		if (attachedScroll) {
			attachedScroll = false;
			window.removeEventListener('scroll', updatePosition, true);
		}
	});

	const arrPos = {
		top: 'bottom',
		right: 'left',
		bottom: 'top',
		left: 'right'
	};

	let floatingArrowPlacement;
	$: {
		if (placementData) {
			const arrow = placementData.middlewareData.arrow;
			const pos = arrPos[placementData?.placement?.split('-')[0]] ?? 'top';
			if (pos === 'top' || pos === 'bottom')
				floatingArrowPlacement = `${pos}: -4px; left: ${px(arrow?.x)}`;
			else floatingArrowPlacement = `${pos}: -4px; top: ${px(arrow?.y)}`;
		}
	}

	const px = (x) => (x === undefined ? '' : x + 'px');
</script>

<svelte:window on:resize={() => open && updatePosition()} />

<div
	use:clickOutside={() => {
		if (open) {
			open = false;
		}
	}}
>
	<div
		class="w-fit"
		bind:this={triggerRef}
		on:mouseenter={() => {
			if (trigger === 'hover') {
				open = true;
			}
		}}
		on:mouseleave={() => {
			if (open && trigger === 'hover') {
				open = false;
			}
		}}
		on:click={() => {
			if (trigger === 'click') {
				open = !open;
			}
		}}
	>
		<slot />
	</div>

	<div
		bind:this={tooltipRef}
		data-testid="tooltip"
		class={toolTipClass}
		style:left={px(placementData?.x)}
		style:top={px(placementData?.y)}
		style:position={placementData?.strategy ?? ''}
	>
		<div class="relative z-20">
			<slot name="content">
				{content}
			</slot>
		</div>
		{#if arrow}
			<div
				class={classNames('absolute z-10 h-2 w-2 rotate-45', arrowStyleClasses[style])}
				data-testid="tooltip-arrow"
				style={floatingArrowPlacement}
				bind:this={arrowRef}
			>
				&nbsp;
			</div>
		{/if}
	</div>
</div>
