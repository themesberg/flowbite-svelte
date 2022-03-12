<script lang="ts">
	import type { AuthFunctionType, LinkType } from '../types';
	import { Alert } from '../index';
	export let register: AuthFunctionType;
	export let error: string;
	export let login: LinkType;
	export let rememberMe: boolean;
	export let lostPassword: LinkType;
	export let message: string;
	// Variables bound to respective inputs via bind:value
	export let email: string;
	export let password: string;
	export let name: string;
</script>

<div
	class="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 w-full"
>
	<form class="space-y-6" on:submit|preventDefault={register}>
		{#if message}
			<div class="mt-6">
				<Alert alertId="alert-green" color="green" closeBtn>
					{message}
				</Alert>
			</div>
		{/if}
		<div class="heading">
			<a class="back" href="/"><i class="bi bi-arrow-left dark:text-white" /></a>
			<h3 class="text-xl font-medium text-gray-900 dark:text-white">Register</h3>
		</div>
		<div>
			<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				>Name</label
			>
			<input
				type="text"
				required
				name="name"
				placeholder="Enter your name"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
				bind:value={name}
			/>
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
		</div>
		<div>
			<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				>Your password</label
			>
			<input
				type="password"
				required
				name="password"
				placeholder="Enter your password"
				class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
				bind:value={password}
			/>
		</div>
		{#if error}
			<div class="mt-6">
				<Alert alertId="alert-green" color="red" closeBtn>
					{error}
				</Alert>
			</div>
		{/if}
		<div class="flex items-start">
			{#if rememberMe}
				<div class="flex items-start">
					<div class="flex items-center h-5">
						<input
							id="remember"
							aria-describedby="remember"
							type="checkbox"
							class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
							required
						/>
					</div>
					<div class="ml-3 text-sm">
						<label for="remember" class="font-medium text-gray-900 dark:text-gray-300"
							>Remember me</label
						>
					</div>
				</div>
			{/if}
			{#if lostPassword}
				<a
					href={lostPassword.href}
					rel={lostPassword.rel}
					class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
					>{lostPassword.name}</a
				>
			{/if}
		</div>
		<button
			type="submit"
			class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
			>Register</button
		>
		{#if login}
			<a
				href={login.href}
				rel={login.rel}
				class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">{login.name}</a
			>
		{/if}
	</form>
</div>
