<script lang="ts">
	export let tip: string;
	export let top: boolean = false;
	export let right: boolean = false;
	export let bottom: boolean = false;
	export let left: boolean = false;
	export let active: boolean = false;
</script>

<div class="tooltip-wrapper">
	<span class="tooltip-slot">
		<slot />
	</span>
	<div
		class="inline-block absolute invisible z-10 py-2 px-3 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 tooltip"
		class:active
		class:left
		class:right
		class:bottom
		class:top
	>
		{#if tip}
			<div class="text-sm font-medium text-gray-900">{tip}</div>
		{:else}
			<slot name="custom-tip" />
		{/if}
	</div>
</div>

<style>
	.tooltip-wrapper {
		position: relative;
		display: inline-block;
	}
	.tooltip {
		position: absolute;
		font-family: inherit;
		display: inline-block;
		white-space: nowrap;
		color: inherit;
		opacity: 0;
		visibility: hidden;
		transition: opacity 150ms, visibility 150ms;
	}

	.tooltip.top:after {
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		margin-left: -10px;
		border-width: 5px;
		border-style: solid;
		border-color: #ddd transparent transparent transparent;
	}
	.tooltip.bottom::after {
		content: '';
		position: absolute;
		top: -30%;
		left: 50%;
		margin-left: -10px;
		border-width: 5px;
		border-style: solid;
		border-color: transparent transparent #ddd transparent;
	}
	.tooltip.right::after {
		content: '';
		position: absolute;
		/* vertically center */
		top: 50%;
		transform: translateY(-50%);
		/* position tooltip correctly */
		right: 100%;
		margin-left: -5px;

		border-width: 5px;
		border-style: solid;
		border-color: transparent #ddd transparent transparent;
	}
	.tooltip.left::after {
		content: '';
		position: absolute;
		/* vertically center */
		top: 50%;
		transform: translateY(-50%);
		/* position tooltip correctly */
		left: 100%;
		/* margin-left: -5px; */
		border-width: 5px;
		border-style: solid;
		border-color: transparent transparent transparent #ddd;
	}
	.tooltip.top {
		left: 50%;
		transform: translate(-50%, -100%);
		margin-top: -8px;
	}
	.tooltip.bottom {
		left: 50%;
		bottom: 0px;
		transform: translate(-50%, 100%);
		/* margin-bottom: -px; */
	}
	.tooltip.left {
		left: 0;
		transform: translateX(-100%);
		margin-left: -8px;
	}
	.tooltip.right {
		right: 0;
		transform: translateX(100%);
		margin-right: 0px;
	}
	.tooltip.active {
		opacity: 1;
		visibility: initial;
	}
	.tooltip-slot:hover + .tooltip {
		opacity: 1;
		visibility: initial;
	}
</style>
