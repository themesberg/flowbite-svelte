<script lang="ts">
	import { type GroupProps as Props, group } from '.';

	let { children, divClass, timeClass, date, olClass, ...restProps }: Props = $props();
	const { div, time, ol } = $derived(group());
</script>

<div class={div({ class: divClass })}>
	<time class={time({ class: timeClass })}>{date}</time>
	<ol {...restProps} class={ol({ class: olClass })}>
		{@render children()}
	</ol>
</div>

