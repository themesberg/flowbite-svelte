<script lang="ts">
	import type { NavbarType } from '../types';
	export let liButtonClass: string;
	export let name: string;
	let hidden = true;
	let block = false;
	export let child: NavbarType[];

	const handleDropdown = () => {
		hidden = !hidden;
		block = !block;
	};
	export let dropdownDiv: string;
	export let dropdownLinkClassWithChild: string;
	export let rel: string;
</script>

<li>
	<button on:click={() => handleDropdown()} class={liButtonClass}
		>{name}
		<svg
			class="ml-1 w-4 h-4"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
				clip-rule="evenodd"
			/></svg
		></button
	>

	<!-- Dropdown menu -->
	<div class:hidden class:block class={dropdownDiv} style="position: absolute; margin: 0px;">
		<ul class="py-1" aria-labelledby="dropdownLargeButton">
			{#each child as item}
				<li>
					<a href={item.href} {rel} class={dropdownLinkClassWithChild}>{item.name}</a>
				</li>
			{/each}
		</ul>
	</div>
</li>
