<Sidebar>
	<SidebarGroup>
		<SidebarItem label="Dashboard">
			{#snippet icon()}
				<ChartPieSolid
					class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
				/>
			{/snippet}
		</SidebarItem>
		<SidebarDropdownWrapper label="E-commerce">
			{#snippet icon()}
				<ShoppingCartSolid
					class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
				/>
			{/snippet}
			<SidebarDropdownItem label="Sidebar" href="/sidebar"/>
			<SidebarDropdownItem label="Billing"/>
			<SidebarDropdownItem label="Invoice"/>
		</SidebarDropdownWrapper>
		<SidebarItem label="Kanban" {spanclass}>
			{#snippet icon()}
				<GridSolid
					class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
				/>
			{/snippet}
			{#snippet subtext()}
				<span
					class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"
				>
					Pro
				</span>
			{/snippet}
		</SidebarItem>
		<SidebarItem label="Inbox" {spanclass}>
			{#snippet icon()}
				<MailBoxSolid
					class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
				/>
			{/snippet}
			{#snippet subtext()}
				<span
					class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200"
				>
					3
				</span>
			{/snippet}
		</SidebarItem>
		<SidebarItem label="Users">
			{#snippet icon()}
				<UserSolid
					class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
				/>
			{/snippet}
		</SidebarItem>
		<SidebarItem label="Sign In">
			{#snippet icon()}
				<ArrowRightToBracketSolid
					class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
				/>
			{/snippet}
		</SidebarItem>
		<SidebarItem label="Sign Up">
			{#snippet icon()}
				<FileEditSolid
					class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
				/>
			{/snippet}
		</SidebarItem>
	</SidebarGroup>
</Sidebar>