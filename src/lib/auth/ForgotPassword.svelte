<script lang="ts">
	import type { AuthFunctionType } from '../types';
	import Alert from '../alerts/Alert.svelte';
	export let forgot: AuthFunctionType;
	let email: string;
	let error: string;
	let message: string;
	let data: string;
</script>

<div
	class="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 w-full"
>
	<form class="space-y-6" on:submit|preventDefault={forgot}>
		<div class="heading">
			<a class="back" href="/"><i class="bi bi-arrow-left dark:text-white" /></a>
			<h2 class="text-xl font-medium text-gray-900 dark:text-white">Forgot password</h2>
		</div>
		<div>
			<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				>Email</label
			>
			<input
				type="email"
				required
				name="email"
				placeholder="Enter your email"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
				bind:value={email}
			/>
			{#if data}
				<div class="mt-6">
					<Alert alertId="alert-green" color="yellow" closeBtn>
						{data}
					</Alert>
				</div>
			{/if}
			{#if message}
				<div class="mt-6">
					<Alert alertId="alert-green" color="green" closeBtn>
						{message}
					</Alert>
				</div>
			{/if}
			{#if error}
				<div class="mt-6">
					<Alert alertId="alert-green" color="red" closeBtn>
						{error}
					</Alert>
				</div>
			{/if}
		</div>
		<button
			type="submit"
			class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>Send recovery email</button
		>
	</form>
</div>
