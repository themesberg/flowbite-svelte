<script lang="ts">
	import { Button, Alert, Spinner } from '../index';
	import type { LinkType } from '../types';
	export let loginLink: LinkType;
	export let success: string;
	export let error: string;
</script>

<div
	class="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 w-full"
>
	{#if success}
		<h1 class="text-xl w-full mb-4 font-medium text-gray-900 dark:text-white">
			Your email is confirmed.
		</h1>
		<a href={loginLink.href} class="py-4">
			<Button name={loginLink.name} textSize="text-sm" />
		</a>
	{:else}
		<Spinner />
	{/if}
	{#if error}
		<Alert alertId="alert-red" color="red" closeBtn>{error}</Alert>
	{/if}
</div>
