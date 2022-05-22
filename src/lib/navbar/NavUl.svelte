<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	export let divClass: string =
		'hidden justify-between items-center w-full md:flex md:w-auto md:order-1';

	export let ulClass =
		'flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium';
	export let hidden = true;
	// $: hidden;
	// $: console.log('hidden: ', hidden);
</script>

<div class={divClass} class:hidden id="mobile-menu">
	<ul class="{ulClass} {$$props.class || ''}">
		<slot />
	</ul>
</div>
