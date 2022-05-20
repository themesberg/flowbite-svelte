<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	export let divClass: string = 'w-full md:block md:w-auto';

	export let ulClass =
		'flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium';
	export let hidden = true;
	$: hidden;
	// $: console.log('hidden: ', hidden);
</script>

<div class={divClass} class:hidden id="mobile-menu">
	<ul class="{ulClass} {$$props.class || ''}">
		<slot />
	</ul>
</div>
