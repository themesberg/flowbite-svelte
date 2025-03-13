<script lang="ts">
	import { Skeleton, ImagePlaceholder, BottomNav, BottomNavItem } from '$lib';
	import {
		AdjustmentsVerticalSolid,
		HomeSolid,
		WalletSolid,
		UserCircleSolid
	} from 'flowbite-svelte-icons';
	import { page } from '$app/stores';

	let activeUrl = $state($page.url.pathname);
	$effect(() => {
		activeUrl = $page.url.pathname;
	});
</script>

<div class="relative flex flex-col p-6">
	<Skeleton class="py-4" />
	<ImagePlaceholder class="pb-20" />

	<BottomNav
		{activeUrl}
		position="absolute"
		innerClass="grid-cols-4"
		activeClass="font-bold text-green-500 hover:text-green-900 dark:hover:text-green-700 dark:text-green-300"
	>
		<BottomNavItem btnName="Home" href="/">
			<HomeSolid />
		</BottomNavItem>
		<BottomNavItem btnName="Quickstart" href="/pages/quickstart">
			<WalletSolid />
		</BottomNavItem>
		<BottomNavItem btnName="BottomNav" href="/components/bottom-navigation">
			<AdjustmentsVerticalSolid />
		</BottomNavItem>
		<BottomNavItem btnName="Accordion" href="/components/accordion">
			<UserCircleSolid />
		</BottomNavItem>
	</BottomNav>
</div>
