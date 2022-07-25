<script lang="ts">
	import type { AuthFunctionType, LinkType, Colors } from '../types';
	import Alert from '$lib/alerts/Alert.svelte';
	import Button from '$lib/buttons/Button.svelte';
	import Input from '$lib/forms/Input.svelte';
	import Card from './Card.svelte';
	import Label from '$lib/forms/Label.svelte';
	import Checkbox from '$lib/forms/Checkbox.svelte';

	export let login: AuthFunctionType;
	export let title: string = 'Sign in';
	export let btnSignInColor: Colors = 'blue';
	export let rememberMe: boolean = false;
	export let signup: LinkType;
	export let lostPassword: LinkType;

	let email: string;
	let password: string;
	let error: string;
</script>

<Card class="w-full">
	<form class="flex flex-col space-y-6" on:submit|preventDefault={login}>
		<h3 class="text-xl font-medium text-gray-900 dark:text-white">{title}</h3>
		<div>
			<Label for="email" class="mb-2">Email</Label>
			<Input
				type="email"
				name="email"
				id="email"
				bind:value={email}
				placeholder="name@company.com"
				required
			/>
		</div>
		<div>
			<Label for="password" class="mb-2">Your password</Label>
			<Input
				type="password"
				name="password"
				id="password"
				placeholder="••••••••"
				bind:value={password}
				required
			/>
		</div>
		<div class="flex items-start">
			{#if rememberMe}
				<Checkbox>Remember me</Checkbox>
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
		<Button type="submit" color={btnSignInColor} class="w-full1">Login to your account</Button>
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
</Card>
