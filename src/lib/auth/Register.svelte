<script lang="ts">
	import type { AuthFunctionType, LinkType, AuthFieldType } from '../types';
	import { Alert } from '../index';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let register: AuthFunctionType = undefined;
	export let error: string = '';
	export let login: LinkType = undefined;
	export let rememberMe: boolean = false;
	export let lostPassword: LinkType = undefined;
	export let message: string = '';
	// Variables bound to respective inputs via bind:value
	// export let email: string = 'email';
	// export let password: string = '';
	// export let name: string = '';
	//
	// export let nameField: string = 'username';

	// field names password, name, email
	export let fields: AuthFieldType[] = [
		{
			label: 'name',
			fieldtype: 'text',
			required: true,
			placeholder: 'Your name'
		},
		{
			label: 'email',
			fieldtype: 'email',
			required: true,
			placeholder: 'Your email'
		},
		{
			label: 'password',
			fieldtype: 'password',
			required: true,
			placeholder: 'Your password'
		}
	];
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
		{#each fields as field}
			<div>
				<label
					for={field.label}
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>{field.label}</label
				>
				<input
					type={field.fieldtype}
					required={field.required}
					name={field.label}
					placeholder={field.placeholder}
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
				/>
			</div>
		{/each}
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
