<script lang="ts">
	import { ColorShadowButton, Button } from '$lib/index';
	import { BellOutline } from 'svelte-heros';
</script>

<section>
	<h1 class="py-16">Welcome to your new SvelteKit app</h1>
	<Button class="mr-8">Button</Button>
	<Button disabled>Button disabled</Button>
	<Button>
		<BellOutline class="text-red-500 dark:text-purple-300" />
	</Button>
	<ColorShadowButton color="blue">Blue</ColorShadowButton>
	<ColorShadowButton color="green">Green</ColorShadowButton>
	<ColorShadowButton color="cyan">Cyan</ColorShadowButton>
	<ColorShadowButton color="teal">Teal</ColorShadowButton>
	<ColorShadowButton color="lime">Lime</ColorShadowButton>
	<ColorShadowButton color="red">Red</ColorShadowButton>
	<ColorShadowButton color="pink">Pink</ColorShadowButton>
	<ColorShadowButton color="purple">Purple</ColorShadowButton>
</section>
