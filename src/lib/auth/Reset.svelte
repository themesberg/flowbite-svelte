<script lang="ts">
	import type { AuthFunctionType, LinkType } from '../types';
	import { Alert } from '../index';
	export let resetpw: AuthFunctionType = undefined;
	export let password: string = '';
	export let email: string = '';
	export let confirmpw: string = '';
	export let error: string = '';
	export let message: string = '';
</script>

<div
	class="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 w-full"
>
	<form class="space-y-6" on:submit|preventDefault={resetpw}>
		<div class="heading">
			<h2 class="text-xl font-medium text-gray-900 dark:text-white">Reset password</h2>
		</div>
		<input
			type="password"
			required
			name="password"
			placeholder="Enter your password."
			bind:value={password}
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
		/>
		<input
			type="password"
			required
			name="confirmpw"
			placeholder="Confirm your password."
			bind:value={confirmpw}
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
		/>
		<input type="hidden" required name="email" bind:value={email} />
		{#if error}
			<div class="mt-6">
				<Alert alertId="alert-green" color="red" closeBtn>
					{error}
				</Alert>
			</div>
		{/if}
		{#if message}
			<div class="mt-6">
				<Alert alertId="alert-green" color="green" closeBtn>
					{message}
				</Alert>
				<a
					href="/auth/login"
					class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Go to Login</a
				>
			</div>
		{/if}
		<button
			class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			type="submit">Reset</button
		>
	</form>
</div>
