<script lang="ts">
	import { type BottomNavHeaderItemProps as Props, bottomnavheaderitem } from '.';
	let { itemName, active, class: className, ...restProps }: Props = $props();
	let base = $derived(bottomnavheaderitem({ active, className }));
</script>

<button {...restProps} class={base}>
	{itemName}
</button>

