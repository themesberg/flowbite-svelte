<script lang="ts">
	import { type BottomNavHeaderProps as Props, bottomnavheader } from '.';

	let { children, outerClass, innerClass, ...restProps }: Props = $props();
	const { innerDiv, outerDiv } = $derived(bottomnavheader());
</script>

<div {...restProps} class={outerDiv({ class: outerClass })}>
	<div class={innerDiv({ class: innerClass })} role="group">
		{@render children()}
	</div>
</div>
