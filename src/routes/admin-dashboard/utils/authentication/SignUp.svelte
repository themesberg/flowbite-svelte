<script lang="ts">
	import { A, Checkbox, Button, Card } from 'flowbite-svelte';
	export let title = 'Create a Free Account';
	export let site = {
		name: 'Flowbite1',
		img: '/images/flowbite-svelte-icon-logo.svg',
		link: '/',
		imgAlt: 'FlowBite Logo1'
	};
	export let acceptTerms: boolean = true;
	export let haveAccount: boolean = true;
	export let btnTitle = 'Create account';
	export let termsLink = '/';
	export let loginLink = '/';
	export let mainClass = 'bg-gray-50 dark:bg-gray-900 w-full';
	export let mainDivClass =
		'flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900';
	export let siteLinkClass =
		'flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white';
	export let siteImgClass = 'mr-4 h-11';
	export let cardH1Class = 'text-2xl font-bold text-gray-900 dark:text-white';
	export let haveAccountDivClass = 'text-sm font-medium text-gray-500 dark:text-gray-400';
</script>

<main class={mainClass}>
	<div class={mainDivClass}>
		<a href={site.link} class={siteLinkClass}>
			<img src={site.img} class={siteImgClass} alt={site.imgAlt} />
			<span>{site.name}</span>
		</a>
		<!-- Card -->
		<Card class="w-full" size="md" border={false}>
			<h1 class={cardH1Class}>
				{title}
			</h1>
			<form class="mt-8 space-y-6" on:submit|preventDefault>
				<slot />
				{#if acceptTerms}
					<Checkbox class="pt-1" name="accept">
						<span>
							I accept the <A href={termsLink}>Terms and Conditions</A>
						</span>
					</Checkbox>
				{/if}
				<Button type="submit" size="lg">{btnTitle}</Button>
				{#if haveAccount}
					<div class={haveAccountDivClass}>
						Already have an account? <A href={loginLink}>Login here</A>
					</div>
				{/if}
			</form>
		</Card>
	</div>
</main>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Props
@prop export let title = 'Create a Free Account';
@prop export let site = {
		name: 'Flowbite1',
		img: '/images/flowbite-svelte-icon-logo.svg',
		link: '/',
		imgAlt: 'FlowBite Logo1'
	};
@prop export let acceptTerms: boolean = true;
@prop export let haveAccount: boolean = true;
@prop export let btnTitle = 'Create account';
@prop export let termsLink = '/';
@prop export let loginLink = '/';
@prop export let mainClass = 'bg-gray-50 dark:bg-gray-900 w-full';
@prop export let mainDivClass =
		'flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900';
@prop export let siteLinkClass =
		'flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white';
@prop export let siteImgClass = 'mr-4 h-11';
@prop export let cardH1Class = 'text-2xl font-bold text-gray-900 dark:text-white';
@prop export let haveAccountDivClass = 'text-sm font-medium text-gray-500 dark:text-gray-400';
-->
