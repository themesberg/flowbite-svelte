<script lang="ts">
	import { type ActivityProps as Props, activity } from './index';

	let { children, class: className, ...restProps }: Props = $props();
	const base = activity({ class: className });
</script>

<ol {...restProps} class={base}>
	{@render children()}
</ol>
