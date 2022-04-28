<script lang="ts">
	import { ColorShadowButton, Button } from '$lib/index';
	import { BellOutline } from 'svelte-heros';
</script>

<section>
	<h1 class="py-16">Welcome to your new SvelteKit app</h1>
	<Button name="Button disabled" disabled />
	<Button name="">
		<BellOutline class="text-red-500 dark:text-purple-300" />
	</Button>
	<ColorShadowButton color="blue" name="Blue" />
	<ColorShadowButton color="green" name="Green" />
	<ColorShadowButton color="cyan" name="Cyan" />
	<ColorShadowButton color="teal" name="Teal" />Teal
	<ColorShadowButton color="lime" name="Lime" />Lime
	<ColorShadowButton color="red" name="Red" />Red
	<ColorShadowButton color="pink" name="Pink" />Pink
	<ColorShadowButton color="purple" name="Purple">Purple</ColorShadowButton>
</section>
