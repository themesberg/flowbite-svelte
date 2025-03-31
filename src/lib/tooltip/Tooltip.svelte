<script lang="ts">
	import {
		computePosition,
		flip,
		shift,
		arrow,
		offset as floatingOffset,
		type Placement,
		type Strategy
	} from '@floating-ui/dom';
	import { onDestroy } from 'svelte';
	import { tooltip } from './theme';
	import type { TooltipProps } from '.';

	let {
		children,
		color = 'default',
		showOn = 'hover',
		arrow: showArrow = true,
		offset = 8,
		triggeredBy,
		reference,
		position = 'top' as Placement,
		strategy = 'absolute',
		class: className,
		visible = false,
		...restProps
	}: TooltipProps = $props();

	let isVisible = $state(visible);
	let tooltipElement: HTMLElement | null = $state(null);
	let triggerElement: HTMLElement | null = null;
	let referenceElement: HTMLElement | null = null;
	let arrowElement: HTMLElement | null = $state(null);

	let { base, arrowBase } = $derived(tooltip({ color, arrow: showArrow, position }));

	const staticSideMap = {
		top: 'bottom',
		right: 'left',
		bottom: 'top',
		left: 'right'
	} as const;

	type StaticSide = (typeof staticSideMap)[keyof typeof staticSideMap];

	const getStaticSide = (placement: string): StaticSide => {
		const basePlacement = placement.split('-')[0] as keyof typeof staticSideMap;
		return staticSideMap[basePlacement];
	};

	const updatePosition = async () => {
		// Get the reference element (either from reference prop or triggeredBy)
		const targetElement = reference ? referenceElement : triggerElement;

		if (!tooltipElement || !targetElement) return;

		const middleware = [flip(), shift({ padding: 8 }), floatingOffset(offset)];

		if (showArrow && arrowElement) {
			middleware.push(arrow({ element: arrowElement }));
		}

		const { x, y, placement, middlewareData } = await computePosition(
			targetElement,
			tooltipElement,
			{
				placement: position as Placement,
				strategy: strategy as Strategy,
				middleware
			}
		);

		Object.assign(tooltipElement.style, {
			left: `${x}px`,
			top: `${y}px`,
			position: strategy
		});

		if (showArrow && arrowElement && middlewareData.arrow) {
			const { x: arrowX, y: arrowY } = middlewareData.arrow;
			const staticSide = getStaticSide(placement);

			const styles: Partial<CSSStyleDeclaration> = {
				left: arrowX != null ? `${arrowX}px` : '',
				top: arrowY != null ? `${arrowY}px` : '',
				right: '',
				bottom: ''
			};

			styles[staticSide] = '-4px';
			Object.assign(arrowElement.style, styles);
		}
	};

	const showTooltip = () => {
		if (!triggeredBy) return;
		isVisible = true;
		setTimeout(updatePosition, 0);
	};

	const hideTooltip = () => {
		if (!triggeredBy) return;
		isVisible = false;
	};

	const toggleTooltip = () => {
		if (!triggeredBy) return;
		isVisible = !isVisible;
		if (isVisible) {
			setTimeout(updatePosition, 0);
		}
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			showOn === 'click' &&
			isVisible &&
			tooltipElement &&
			triggerElement &&
			!tooltipElement.contains(event.target as Node) &&
			!triggerElement.contains(event.target as Node)
		) {
			hideTooltip();
		}
	};

	$effect(() => {
		isVisible = visible;
	});

	$effect(() => {
		// Set up reference element if provided
		if (reference) {
			referenceElement = document.querySelector(reference);
		}

		// Set up trigger element and events if provided
		if (triggeredBy) {
			triggerElement = document.querySelector(triggeredBy);

			if (triggerElement) {
				if (showOn === 'hover') {
					triggerElement.addEventListener('mouseenter', showTooltip);
					triggerElement.addEventListener('mouseleave', hideTooltip);
				} else if (showOn === 'click') {
					triggerElement.addEventListener('click', toggleTooltip);
					document.addEventListener('click', handleClickOutside);
				}
			}
		}

		const cleanup = () => {
			if (triggerElement) {
				if (showOn === 'hover') {
					triggerElement.removeEventListener('mouseenter', showTooltip);
					triggerElement.removeEventListener('mouseleave', hideTooltip);
				} else if (showOn === 'click') {
					triggerElement.removeEventListener('click', toggleTooltip);
					document.removeEventListener('click', handleClickOutside);
				}
			}
		};

		onDestroy(cleanup);
		return cleanup;
	});

	$effect(() => {
		if (isVisible) {
			const handlePositionUpdate = () => {
				if (isVisible) updatePosition();
			};

			window.addEventListener('resize', handlePositionUpdate);
			window.addEventListener('scroll', handlePositionUpdate, true);

			return () => {
				window.removeEventListener('resize', handlePositionUpdate);
				window.removeEventListener('scroll', handlePositionUpdate, true);
			};
		}
	});
</script>

{#if isVisible}
	<div
		role="tooltip"
		bind:this={tooltipElement}
		{...restProps}
		class={`${base({ className })} ${isVisible ? 'visible opacity-100' : 'invisible opacity-0'} transition-opacity duration-200`}
	>
		{@render children()}
		{#if showArrow}
			<div bind:this={arrowElement} class={arrowBase({ arrow: showArrow, position })}></div>
		{/if}
	</div>
{/if}
