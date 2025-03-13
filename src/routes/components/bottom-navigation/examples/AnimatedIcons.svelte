<script lang="ts">
	import { Skeleton, ImagePlaceholder, BottomNav, BottomNavItem } from '$lib';
	import {
		AdjustmentsVerticalFlowbite,
		HomeFlowbite,
		WalletFlowbite,
		UserCircleFlowbite
	} from 'svelte-animated-icons';
</script>

<div class="relative flex flex-col p-6">
	<Skeleton class="py-4" />
	<ImagePlaceholder class="pb-20" />

	<BottomNav position="absolute" innerClass="grid-cols-4">
		<BottomNavItem btnName="Home">
			<HomeFlowbite
				class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-5 w-5 text-gray-500 dark:text-gray-400"
			/>
		</BottomNavItem>
		<BottomNavItem btnName="Wallet">
			<WalletFlowbite
				class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-5 w-5 text-gray-500 dark:text-gray-400"
			/>
		</BottomNavItem>
		<BottomNavItem btnName="Settings">
			<AdjustmentsVerticalFlowbite
				class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-5 w-5 text-gray-500 dark:text-gray-400"
			/>
		</BottomNavItem>
		<BottomNavItem btnName="Profile">
			<UserCircleFlowbite
				class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-5 w-5 text-gray-500 dark:text-gray-400"
			/>
		</BottomNavItem>
	</BottomNav>
</div>
