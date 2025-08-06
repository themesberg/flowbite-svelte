<script lang="ts">
	import { Card } from 'flowbite-svelte';

	let { name, dir, path, thumnailSize, ...restProps }: { name: string; dir: string; path: string; thumnailSize?: string } = $props();

	path = path.toLowerCase();
	dir = dir.toLowerCase();
</script>

<Card href="/{dir}{path}/" {...restProps} class="dark:hover:shadow-lg-light max-w-none! shadow-none hover:shadow-lg dark:hover:bg-gray-900">
	<div class="flex items-center justify-between rounded-t-md border-b border-gray-200 bg-gray-50 px-5 py-2.5 dark:border-gray-700 dark:bg-gray-700">
		<span class="text-base font-medium text-gray-900 dark:text-white">{name}</span>
		<span class="text-gray-500 dark:text-gray-400">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-5 w-5">
				<path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
			</svg>
		</span>
	</div>
	<div class="flex h-52 items-center justify-center">
		<div class="relative block h-5/6 dark:hidden {thumnailSize ? thumnailSize : 'w-56'}">
			<span
				style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"
			>
				<img
					alt={name}
					src="/images/{dir}{path}.svg"
					decoding="async"
					data-nimg="fill"
					style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: contain;"
					sizes="100vw"
					srcset="/images/{dir}{path}.svg 640w, /images/{dir}{path}.svg 750w, /images/{dir}{path}.svg 828w, /images/{dir}{path}.svg 1080w, /images/{dir}{path}.svg 1200w, /images/{dir}{path}.svg 1920w, /images/{dir}{path}.svg 2048w, /images/{dir}{path}.svg 3840w"
				/>
				<noscript></noscript>
			</span>
		</div>
		<div class="relative hidden h-5/6 dark:block {thumnailSize ? thumnailSize : 'w-56'}">
			<span
				style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"
			>
				<img
					alt={name}
					src="/images/{dir}{path}-dark.svg"
					decoding="async"
					data-nimg="fill"
					style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: contain;"
				/>
				<noscript></noscript>
			</span>
		</div>
	</div>
</Card>
