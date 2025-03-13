<script>
	import {
		BottomNav,
		BottomNavItem,
		BottomNavHeader,
		BottomNavHeaderItem,
		Skeleton,
		ImagePlaceholder,
		Tooltip
	} from '$lib';
	import {
		HomeSolid,
		BookmarkSolid,
		PlusOutline,
		SearchOutline,
		AdjustmentsVerticalOutline
	} from 'flowbite-svelte-icons';
</script>

<div class="relative flex flex-col p-6">
	<Skeleton class="py-4" />
	<ImagePlaceholder class="pb-28" />

	<BottomNav position="absolute" navType="group" innerClass="grid-cols-5">
		{#snippet header()}
			<BottomNavHeader>
				<BottomNavHeaderItem itemName="New" />
				<BottomNavHeaderItem itemName="Popular" active={true} />
				<BottomNavHeaderItem itemName="Following" />
			</BottomNavHeader>
		{/snippet}
		<BottomNavItem btnName="Home">
			<HomeSolid
				id="home"
				class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400"
			/>
			<Tooltip arrow={false} triggeredBy="#home">Home</Tooltip>
		</BottomNavItem>
		<BottomNavItem btnName="Bookmark">
			<BookmarkSolid
				id="bookmark"
				class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400"
			/>
			<Tooltip arrow={false} triggeredBy="#bookmark">Bookmark</Tooltip>
		</BottomNavItem>
		<BottomNavItem btnName="New post">
			<PlusOutline
				id="create"
				class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400"
			/>
			<Tooltip arrow={false} triggeredBy="#create">New post</Tooltip>
		</BottomNavItem>
		<BottomNavItem btnName="Search">
			<SearchOutline
				id="search"
				class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400"
			/>
			<Tooltip arrow={false} triggeredBy="#search">Search</Tooltip>
		</BottomNavItem>
		<BottomNavItem btnName="Settings">
			<AdjustmentsVerticalOutline
				id="settings"
				class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400"
			/>
			<Tooltip arrow={false} triggeredBy="#settings">Settings</Tooltip>
		</BottomNavItem>
	</BottomNav>
</div>
