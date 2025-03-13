<script lang="ts">
	import { Skeleton, ImagePlaceholder, BottomNav, BottomNavItem } from '$lib';
	import {
		AdjustmentsVerticalSolid,
		HomeSolid,
		WalletSolid,
		UserCircleSolid
	} from 'flowbite-svelte-icons';
</script>

<div class="relative flex flex-col p-6">
	<Skeleton class="py-4" />
	<ImagePlaceholder class="pb-20" />

	<BottomNav position="absolute" innerClass="grid-cols-4">
		<BottomNavItem btnName="Home">
			<HomeSolid
				class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-5 w-5 text-gray-500 dark:text-gray-400"
			/>
		</BottomNavItem>
		<BottomNavItem btnName="Wallet">
			<WalletSolid
				class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-5 w-5 text-gray-500 dark:text-gray-400"
			/>
		</BottomNavItem>
		<BottomNavItem btnName="Settings">
			<AdjustmentsVerticalSolid
				class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-5 w-5 text-gray-500 dark:text-gray-400"
			/>
		</BottomNavItem>
		<BottomNavItem btnName="Profile">
			<UserCircleSolid
				class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-5 w-5 text-gray-500 dark:text-gray-400"
			/>
		</BottomNavItem>
	</BottomNav>
</div>
