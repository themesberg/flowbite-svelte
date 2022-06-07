---
layout: sidebarLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { Sidebar, SidebarBrand, SidebarCta,	SidebarDropdownItem, SidebarDropdownWrapper,	SidebarGroup,	SidebarItem, SidebarWrapper, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import {
    ChartPie,
    InboxIn,
    User,
    Login,
    Cog,
    ShoppingCart,
    ClipboardList,
    Collection,
    Support,
    ViewGrid,
    Star,
    X
  } from 'svelte-heros';
  import componentProps from '../props/Sidebar.json'
  import componentProps2 from '../props/SidebarBrand.json'
  import componentProps3 from '../props/SidebarCta.json'
  import componentProps4 from '../props/SidebarDropdownItem.json'
  import componentProps5 from '../props/SidebarDropdownWrapper.json'
  import componentProps6 from '../props/SidebarGroup.json'
  import componentProps7 from '../props/SidebarItem.json'
  import componentProps8 from '../props/SidebarWrapper.json'
  // Props table
  let items = componentProps.props
  let items2 = componentProps2.props
  let items3 = componentProps3.props
  let items4 = componentProps4.props
  let items5 = componentProps5.props
  let items6 = componentProps6.props
  let items7 = componentProps7.props
  let items8 = componentProps8.props

  let propHeader = ['Name', 'Type', 'Default']
  
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let site = {
    name: 'Flowbite-Svelte',
    href: '/',
    img: '/images/flowbite-svelte-icon-logo.svg'
  };

  let spanClass = 'flex-1 ml-3 whitespace-nowrap';
  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Sidebar',
      href:'/sidebars/'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Sidebar Components</h1>

<Htwo label="Default sidebar" />

<ExampleDiv>
	<Sidebar>
		<SidebarWrapper>
			<SidebarGroup>
				<SidebarItem label="Dashboard">
					<svelte:fragment slot="icon">
						<ChartPie />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Kanban" {spanClass}>
					<svelte:fragment slot="icon">
						<ViewGrid />
					</svelte:fragment>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
							>Pro</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Inbox" {spanClass}>
					<svelte:fragment slot="icon">
						<InboxIn />
					</svelte:fragment>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
							>3</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Users">
					<svelte:fragment slot="icon">
						<User />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Sign In">
					<svelte:fragment slot="icon">
						<Login />
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Sign Up">
					<svelte:fragment slot="icon">
						<Cog />
					</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</ExampleDiv>

```html
<Sidebar>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard">
        <svelte:fragment slot="icon">
          <ChartPie />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Kanban" {spanClass}>
        <svelte:fragment slot="icon">
          <ViewGrid />
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span
            class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
            >Pro</span
          >
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass}>
        <svelte:fragment slot="icon">
          <InboxIn />
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span
            class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
            >3</span
          >
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Users">
        <svelte:fragment slot="icon">
          <User />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign In">
        <svelte:fragment slot="icon">
          <Login />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign Up">
        <svelte:fragment slot="icon">
          <Cog />
        </svelte:fragment>
      </SidebarItem>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```