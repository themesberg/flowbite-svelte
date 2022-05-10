<script lang="ts">
	import type { AuthFunctionType, LinkType, Colors } from '../types';
	import Alert from '../alerts/Alert.svelte';
	export let login: AuthFunctionType;
	export let title: string = 'Sign in';
	export let btnSignInColor: Colors = 'blue';
	export let rememberMe: boolean = false;
	export let signup: LinkType;
	export let lostPassword: LinkType;
	let email: string;
	let password: string;
	let error: string;

	let submitClass: string = 'w-full text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center ';

	if (btnSignInColor === 'blue') {
		 submitClass += 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
	} else if (btnSignInColor === 'gray') {
		 submitClass += 'bg-gray-700 hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800';
	} else if (btnSignInColor === 'red') {
		 submitClass += 'bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800';
	} else if (btnSignInColor === 'yellow') {
		 submitClass += 'bg-yellow-700 hover:bg-yellow-800 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800';
	} else if (btnSignInColor === 'green') {
		 submitClass += 'bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800';
	} else if (btnSignInColor === 'indigo') {
		 submitClass += 'bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800';
	} else if (btnSignInColor === 'purple') {
		 submitClass += 'bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800';
	} else if (btnSignInColor === 'pink') {
		 submitClass += 'bg-pink-700 hover:bg-pink-800 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800';
	} else {
		 submitClass += 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
	}
</script>

<div class="p-4 max-w-sm w-full bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
	<form class="space-y-6" on:submit|preventDefault={login}>
		<h3 class="text-xl font-medium text-gray-900 dark:text-white">{title}</h3>
		<div>
			<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
			<input type="email" name="email" id="email" bind:value={email} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
		</div>
		<div>
			<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
			<input type="password" name="password" id="password" placeholder="••••••••" bind:value={password} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
		</div>
		<div class="flex items-start">
			{#if rememberMe}
				<div class="flex items-start">
					<div class="flex items-center h-5">
						<input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
					</div>
					<div class="ml-3 text-sm">
						<label for="remember" class="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
					</div>
				</div>
			{/if}
			{#if lostPassword}
				<a href={lostPassword.href} rel={lostPassword.rel} class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">{lostPassword.name}</a>
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
				Not registered? <a href={signup.href} rel={signup.rel} class="text-blue-700 hover:underline dark:text-blue-500">{signup.name}</a>
			</div>
		{/if}
	</form>
</div>
