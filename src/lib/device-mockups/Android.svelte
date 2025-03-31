<script lang="ts">
	import { type AndroidProps as Props, android } from '.';

	let {
		children,
		divClass,
		div2Class,
		div3Class,
		div4Class,
		div5Class,
		div6Class,
		div7Class,
		...restProps
	}: Props = $props();

	const { div, slot, top, leftTop, leftMid, leftBot, right } = android();
</script>

<div {...restProps} class={div({ class: divClass })}>
	<div class={top({ class: div2Class })}></div>
	<div class={leftTop({ class: div3Class })}></div>
	<div class={leftMid({ class: div4Class })}></div>
	<div class={leftBot({ class: div5Class })}></div>
	<div class={right({ class: div6Class })}></div>
	<div class={slot({ class: div7Class })}>
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>

