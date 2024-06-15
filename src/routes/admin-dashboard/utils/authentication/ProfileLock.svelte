<script lang="ts">
	import { Button, Card, Checkbox, P } from 'flowbite-svelte';
	import { LockOpenSolid } from 'flowbite-svelte-icons';
	export let site = {
		name: 'Flowbite',
		img: '/images/flowbite-svelte-icon-logo.svg',
		link: '/',
		imgAlt: 'FlowBite Logo'
	};
	export let user = {
		name: 'Bonnie Green',
		img: '/images/users/bonnie-green.png',
		imgAlt: 'Bonnie Green'
	};
	export let btnTitle = 'Unlock';
	export let pageDescription = 'Better to be safe than sorry.';
	export let mainClass = 'bg-gray-50 dark:bg-gray-900 w-full';
	export let mainDivClass =
		'flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900';
	export let siteLinkClass =
		'flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white';
	export let siteImgClass = 'mr-4 h-11';
	export let cardH1Class = 'mb-3 text-2xl font-bold text-gray-900 dark:text-white';
	export let cardDiv3Class = 'flex space-x-4';
	export let userImgClass = 'w-8 h-8 rounded-full';

	export let acceptTerms: boolean = true;
	export let termsLink = '/';
	export let termsLinkClass = 'text-primary-700 hover:underline dark:text-primary-500';
</script>

<main class={mainClass}>
	<div class={mainDivClass}>
		<a href={site.link} class={siteLinkClass}>
			<img src={site.img} class={siteImgClass} alt={site.imgAlt} />
			<span>{site.name}</span>
		</a>
		<!-- Card -->
		<Card class="w-full max-w-md" border={false}>
			<div class={cardDiv3Class}>
				<img class={userImgClass} src={user.img} alt={user.imgAlt} />
				<h1 class={cardH1Class}>{user.name}</h1>
			</div>
			<P class="text-base font-normal text-gray-500 dark:text-gray-400">
				{pageDescription}
			</P>
			<form class="mt-8 space-y-6" on:submit|preventDefault>
				<slot />
				{#if acceptTerms}
					<Checkbox class="accent-primary-600">
						<span>
							I accept the <a href={termsLink} class={termsLinkClass}>Terms and Conditions</a>
						</span>
					</Checkbox>
				{/if}
				<Button size="lg" type="submit">
					<LockOpenSolid size="lg" class="mr-2" />
					{btnTitle}
				</Button>
			</form>
		</Card>
	</div>
</main>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Props
@prop export let site = {
		name: 'Flowbite',
		img: '/images/flowbite-svelte-icon-logo.svg',
		link: '/',
		imgAlt: 'FlowBite Logo'
	};
@prop export let user = {
		name: 'Bonnie Green',
		img: '/images/users/bonnie-green.png',
		imgAlt: 'Bonnie Green'
	};
@prop export let btnTitle = 'Reset password';
@prop export let pageDescription = 'Better to be safe than sorry.';
@prop export let mainClass = 'bg-gray-50 dark:bg-gray-900 w-full';
@prop export let mainDivClass =
		'flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900';
@prop export let siteLinkClass =
		'flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white';
@prop export let siteImgClass = 'mr-4 h-11';
@prop export let cardH1Class = 'mb-3 text-2xl font-bold text-gray-900 dark:text-white';
@prop export let cardDiv3Class = 'flex space-x-4';
@prop export let userImgClass = 'w-8 h-8 rounded-full';
-->
