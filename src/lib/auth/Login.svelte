<script lang="ts">
	import type { AuthFunctionType, LinkType, AuthFieldType } from '../types';
	import { Alert } from '../index';
	export let login: AuthFunctionType = undefined;
	export let title = 'Sign in';
	export let btnSignInColor = 'blue';
	export let rememberMe = false;
	export let signup: LinkType = undefined;
	export let lostPassword: LinkType = undefined;
	export let error: string = '';

	let submitClass: string;
	export let fields: AuthFieldType[] = [
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

	if (btnSignInColor === 'blue') {
		submitClass =
			'w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
	} else if (btnSignInColor === 'gray') {
		submitClass =
			'w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800';
	} else if (btnSignInColor === 'red') {
		submitClass =
			'w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800';
	} else if (btnSignInColor === 'yellow') {
		submitClass =
			'w-full text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800';
	} else if (btnSignInColor === 'green') {
		submitClass =
			'w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800';
	} else if (btnSignInColor === 'indigo') {
		submitClass =
			'w-full text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800';
	} else if (btnSignInColor === 'purple') {
		submitClass =
			'w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800';
	} else if (btnSignInColor === 'pink') {
		submitClass =
			'w-full text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800';
	} else {
		submitClass =
			'w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
	}
</script>

<div
	class="p-4 max-w-sm w-full bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
>
	<form class="space-y-6" on:submit|preventDefault={login}>
		<h3 class="text-xl font-medium text-gray-900 dark:text-white">{title}</h3>
		{#each fields as field}
			<div>
				<label
					for={field.label}
					class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
					>{field.label}</label
				>
				<input
					type={field.fieldtype}
					name={field.label}
					id={field.label}
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
					placeholder={field.placeholder}
					required={field.required}
				/>
			</div>
		{/each}
		<div class="flex items-start">
			{#if rememberMe}
				<div class="flex items-start">
					<div class="flex items-center h-5">
						<input
							id="remember"
							type="checkbox"
							class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
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
		{#if error}
			<div class="mt-6">
				<Alert alertId="alert-red" color="red" closeBtn>
					{error}
				</Alert>
			</div>
		{/if}
		<button type="submit" class={submitClass}>Login to your account</button>
		{#if signup}
			<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
				Not registered? <a
					href={signup.href}
					rel={signup.rel}
					class="text-blue-700 hover:underline dark:text-blue-500">{signup.name}</a
				>
			</div>
		{/if}
	</form>
</div>
