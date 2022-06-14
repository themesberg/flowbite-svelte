<script lang="ts">
	import classNames from 'classnames';
	import { browser } from '$app/env';
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
	export let style: 'dark' | 'light' | 'auto' = 'dark';
	export let content: string = '';
	export let animation: false | `duration-${number}` = 'duration-300';
	export let arrow: boolean = true;
	let open = false;
	const floatingPlacement = ({
		placement
	}: {
		placement: 'auto' | Placement;
	}): Placement | undefined => {
		return placement === 'auto' ? undefined : placement;
	};
	const floatingArrowPlacement = ({ placement }: { placement: Placement }): Placement => {
		if (!placement) {
			return 'top';
		}
		return {
			top: 'bottom',
			right: 'left',
			bottom: 'top',
			left: 'right'
		}[placement.split('-')[0]] as Placement;
	};
	const floatingMiddleware = ({
		arrowRef,
		placement
	}: {
		arrowRef: any;
		placement: 'auto' | Placement;
	}) => {
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
		computePosition(triggerRef as Element, tooltipRef as Element, {
			middleware: floatingMiddleware({ arrowRef, placement }),
			placement: floatingPlacement({ placement })
		}).then((data) => (placementData = data));
	let attachedScroll: boolean = false;
	$: browser && tooltipRef && open && updatePosition();
	$: {
		if (browser && open && !attachedScroll) {
			attachedScroll = true;
			window.addEventListener('scroll', updatePosition, true);
		} else if (!open && attachedScroll) {
			attachedScroll = false;
			window.removeEventListener('scroll', updatePosition, true);
		}
	}
	onDestroy(() => {
		if (attachedScroll) {
			attachedScroll = false;
			window.removeEventListener('scroll', updatePosition, true);
		}
	});
</script>

<svelte:window on:resize={() => open && updatePosition()} />

<div>
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
		use:clickOutside={() => {
			if (open) {
				open = false;
			}
		}}
	>
		<slot />
	</div>

	<div
		bind:this={tooltipRef}
		data-testid="tooltip"
		class={classNames(
			'absolute inline-block rounded-lg py-2 px-3 text-sm font-medium shadow-sm',
			animation !== false && `transition-opacity ${animation}`,
			{
				'invisible opacity-0': !open,
				'bg-gray-900 text-white dark:bg-gray-700': style === 'dark',
				'border border-gray-200 bg-white text-gray-900': style === 'light',
				'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white':
					style === 'auto'
			},
			$$props.class
		)}
		style={`left:${placementData?.x}px;top:${placementData?.y}px;position:${placementData?.strategy}`}
	>
		<div class="relative z-20">
			<slot name="content">
				{content}
			</slot>
		</div>
		{#if arrow}
			<div
				class={classNames('absolute z-10 h-2 w-2 rotate-45', {
					'bg-gray-900 dark:bg-gray-700': style === 'dark',
					'bg-white': style === 'light',
					'bg-white dark:bg-gray-700': style === 'auto'
				})}
				data-testid="tooltip-arrow"
				style={`left:${placementData?.middlewareData.arrow?.x}px;top:${
					placementData?.middlewareData.arrow?.y
				}px;${floatingArrowPlacement({ placement: placementData?.placement })}:-4px`}
				bind:this={arrowRef}
			>
				&nbsp;
			</div>
		{/if}
	</div>
</div>
