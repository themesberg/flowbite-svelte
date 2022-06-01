<script>
	import { Iconinput } from '$lib/index';
	import { AtSymbol } from 'svelte-heros';
</script>

<Iconinput
	id="email"
	type="email"
	name="email"
	placeholder="Your email"
	label="Border"
	icon={AtSymbol}
	iconClass="h-4 w-4 mr-2 text-blue-500 dark:text-red-500"
	readonly
/>
