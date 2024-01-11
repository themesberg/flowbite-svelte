<script lang="ts">
	interface Props {
		children: any;
		header?: any;
		isOpen: boolean;
		footer?: any;
		footerClass?: string | undefined;
	}
	import { twMerge } from 'tailwind-merge';

	let { children, header, isOpen, footer, footerClass } = $props<Props>();

	let hidden = $state('hidden');
  
	$effect(() => {
		hidden = isOpen ? '' : 'hidden';
	});
  $inspect('Dropdown isOpen: ', isOpen, 'hidden: ', hidden)
</script>

<!-- Dropdown menu -->
<div
	id="dropdown"
	class="z-10 {hidden} w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
>
	{#if header}
		<div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
			{@render header()}
		</div>
	{/if}
	<ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
		{@render children()}
	</ul>
	{#if footer}
		<div class={twMerge('overflow-hidden rounded-b-lg py-1', footerClass)}>
			{@render footer()}
		</div>
	{/if}
</div>
