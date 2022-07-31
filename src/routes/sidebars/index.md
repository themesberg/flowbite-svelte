---
layout: sidebarLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import GitHubSource from '../utils/GitHubSource.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Sidebar, SidebarBrand, SidebarCta,	SidebarDropdownItem, SidebarDropdownWrapper, SidebarGroup,	SidebarItem, SidebarWrapper, Breadcrumb, BreadcrumbItem } from '$lib/index'
  import {
    Home,
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

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Sidebars</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Sidebar</h1>

<p>Use the sidebar components to show a list of menu items and multi-level dropdown items on either side of the page to navigate on your website</p>

<Htwo label="Default sidebar" />

<p>Use this example to show a responsive list of menu items inside the sidebar with icons and labels.</p>

<ExampleDiv>
	<Sidebar>
		<SidebarWrapper>
			<SidebarGroup>
				<SidebarItem label="Dashboard" icon={{ name: ChartPie }} />
				<SidebarItem label="Kanban" {spanClass} icon={{ name: ViewGrid }}>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
							>Pro</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Inbox" {spanClass} icon={{ name: InboxIn }}>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
							>3</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Users" icon={{ name: User }} />
				<SidebarItem label="Sign In" icon={{ name: Login }} />
				<SidebarItem label="Sign Up" icon={{ name: Cog }} />
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</ExampleDiv>

```html
<Sidebar>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard" icon={{ name: ChartPie }} />
      <SidebarItem label="Kanban" {spanClass} icon={{ name: ViewGrid }}>
        <svelte:fragment slot="subtext">
          <span
            class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
            >Pro</span
          >
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass} icon={{ name: InboxIn }}>
        <svelte:fragment slot="subtext">
          <span
            class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
            >3</span
          >
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Users" icon={{ name: User }} />
      <SidebarItem label="Sign In" icon={{ name: Login }} />
      <SidebarItem label="Sign Up" icon={{ name: Cog }} />
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

<Htwo label="Multi-level dropdown" />

<p>Use this sidebar example to create multi-level menu items by using the dSidebarDropdownWrapper and SidebarDropdownItem components.</p>

<ExampleDiv>
	<Sidebar>
		<SidebarWrapper>
			<SidebarGroup>
				<SidebarItem label="Dashboard" icon={{ name: ChartPie }} />
				<SidebarDropdownWrapper label="E-commerce" icon={{ name: ShoppingCart }}>
					<SidebarDropdownItem label="Products" />
					<SidebarDropdownItem label="Billing" />
					<SidebarDropdownItem label="Invoice" />
				</SidebarDropdownWrapper>

				<SidebarItem label="Kanban" {spanClass} icon={{ name: ViewGrid }}>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
							>Pro</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Inbox" {spanClass} icon={{ name: InboxIn }}>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
							>3</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Users" icon={{ name: User }} />
				<SidebarItem label="Sign In" icon={{ name: Login }} />
				<SidebarItem label="Sign Up" icon={{ name: Cog }} />
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</ExampleDiv>

```html
<Sidebar>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard" icon={{ name: ChartPie }} />
      <SidebarDropdownWrapper label="E-commerce" icon={{ name: ShoppingCart }}>
        <SidebarDropdownItem label="Products" />
        <SidebarDropdownItem label="Billing" />
        <SidebarDropdownItem label="Invoice" />
      </SidebarDropdownWrapper>

      <SidebarItem label="Kanban" {spanClass} icon={{ name: ViewGrid }}>
        <svelte:fragment slot="subtext">
          <span
            class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
            >Pro</span
          >
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass} icon={{ name: InboxIn }}>
        <svelte:fragment slot="subtext">
          <span
            class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
            >3</span
          >
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Users" icon={{ name: User }} />
      <SidebarItem label="Sign In" icon={{ name: Login }} />
      <SidebarItem label="Sign Up" icon={{ name: Cog }} />
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

<Htwo label="Content separator" />

<p>Separate the content inside the sidebar component by applying a border separator to the SidebarGroup component.</p>

<ExampleDiv>
	<Sidebar>
		<SidebarWrapper>
			<SidebarGroup>
				<SidebarItem label="Dashboard" icon={{ name: ChartPie }} />
				<SidebarItem label="Kanban" {spanClass} icon={{ name: ViewGrid }}>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
							>Pro</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Inbox" {spanClass} icon={{ name: InboxIn }}>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
							>3</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Users" icon={{ name: User }} />
				<SidebarItem label="Sign In" icon={{ name: Login }} />
				<SidebarItem label="Sign Up" icon={{ name: Cog }} />
			</SidebarGroup>
			<SidebarGroup border>
				<SidebarItem label="Upgrade to Pro" icon={{ name: Star }} />
				<SidebarItem label="Documentation" icon={{ name: ClipboardList }} />
				<SidebarItem label="Components" icon={{ name: Collection }} />
				<SidebarItem label="Help" icon={{ name: Support }} />
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</ExampleDiv>

```html
<Sidebar>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard" icon={{ name: ChartPie }} />
      <SidebarItem label="Kanban" {spanClass} icon={{ name: ViewGrid }}>
        <svelte:fragment slot="subtext">
          <span
            class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
            >Pro</span
          >
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass} icon={{ name: InboxIn }}>
        <svelte:fragment slot="subtext">
          <span
            class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
            >3</span
          >
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Users" icon={{ name: User }} />
      <SidebarItem label="Sign In" icon={{ name: Login }} />
      <SidebarItem label="Sign Up" icon={{ name: Cog }} />
    </SidebarGroup>
    <SidebarGroup border>
      <SidebarItem label="Upgrade to Pro" icon={{ name: Star }} />
      <SidebarItem label="Documentation" icon={{ name: ClipboardList }} />
      <SidebarItem label="Components" icon={{ name: Collection }} />
      <SidebarItem label="Help" icon={{ name: Support }} />
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

<Htwo label="CTA button" />

<p>Use this example to add a CTA button inside the sidebar component and encourage your users to visit the dedicated page.</p>


<ExampleDiv>
	<Sidebar>
		<SidebarWrapper>
			<SidebarGroup>
				<SidebarItem label="Dashboard" icon={{ name: ChartPie }} />
				<SidebarItem label="Kanban" {spanClass} icon={{ name: ViewGrid }}>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
							>Pro</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Inbox" {spanClass} icon={{ name: InboxIn }}>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
							>3</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Users" icon={{ name: User }} />
				<SidebarItem label="Sign In" icon={{ name: Login }} />
				<SidebarItem label="Sign Up" icon={{ name: Cog }} />
				<SidebarCta label="Beta">
					<svelte:fragment slot="icon">
						<button
							type="button"
							class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
							data-collapse-toggle="dropdown-cta"
							aria-label="Close"
						>
							<span class="sr-only">Close</span>
							<X />
						</button>
					</svelte:fragment>
					<p class="mb-3 text-sm text-blue-900 dark:text-blue-400">
						Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a
						limited time in your profile.
					</p>
					<a
						class="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
						href="/">Turn new navigation off</a
					>
				</SidebarCta>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</ExampleDiv>

```html
<Sidebar>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarItem label="Dashboard" icon={{ name: ChartPie }} />
      <SidebarItem label="Kanban" {spanClass} icon={{ name: ViewGrid }}>
        <svelte:fragment slot="subtext">
          <span
            class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
            >Pro</span
          >
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass} icon={{ name: InboxIn }}>
        <svelte:fragment slot="subtext">
          <span
            class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
            >3</span
          >
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Users" icon={{ name: User }} />
      <SidebarItem label="Sign In" icon={{ name: Login }} />
      <SidebarItem label="Sign Up" icon={{ name: Cog }} />
      <SidebarCta label="Beta">
        <svelte:fragment slot="icon">
          <button
            type="button"
            class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
            data-collapse-toggle="dropdown-cta"
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <X />
          </button>
        </svelte:fragment>
        <p class="mb-3 text-sm text-blue-900 dark:text-blue-400">
          Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a
          limited time in your profile.
        </p>
        <a
          class="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          href="/">Turn new navigation off</a
        >
      </SidebarCta>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

<Htwo label="Logo branding" />

<p>Show the logo of your brand and link back to the homepage from the top part of the sidebar.</p>


<ExampleDiv>
	<Sidebar>
		<SidebarWrapper>
			<SidebarGroup>
				<SidebarBrand {site} />
				<SidebarItem label="Dashboard" icon={{ name: ChartPie }} />
				<SidebarItem label="Kanban" {spanClass} icon={{ name: ViewGrid }}>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
							>Pro</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Inbox" {spanClass} icon={{ name: InboxIn }}>
					<svelte:fragment slot="subtext">
						<span
							class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
							>3</span
						>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Users" icon={{ name: User }} />
				<SidebarItem label="Sign In" icon={{ name: Login }} />
				<SidebarItem label="Sign Up" icon={{ name: Cog }} />
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
</ExampleDiv>

```html
<script>
  import { Sidebar, SidebarWrapper, SidebarBrand, SidebarItem }
  let site = {
    name: 'Flowbite-Svelte',
    href: '/',
    img: '/images/flowbite-svelte-icon-logo.svg'
  };
<script>

<Sidebar>
  <SidebarWrapper>
    <SidebarGroup>
      <SidebarBrand {site} />
      <SidebarItem label="Dashboard" icon={{ name: ChartPie }} />
      <SidebarItem label="Kanban" {spanClass} icon={{ name: ViewGrid }}>
        <svelte:fragment slot="subtext">
          <span
            class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
            >Pro</span
          >
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass} icon={{ name: InboxIn }}>
        <svelte:fragment slot="subtext">
          <span
            class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
            >3</span
          >
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Users" icon={{ name: User }} />
      <SidebarItem label="Sign In" icon={{ name: Login }} />
      <SidebarItem label="Sign Up" icon={{ name: Cog }} />
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3>Sidebar</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<h3>SidebarBrand</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<h3>SidebarCta</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

<h3>SidebarDropdownItem</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>

<h3>SidebarDropdownWrapper</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items5} rowState='hover' />
</TableProp>

<h3>SidebarGroup</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items6} rowState='hover' />
</TableProp>

<h3>SidebarItem</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items7} rowState='hover' />
</TableProp>

<h3>SidebarWrapper</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items8} rowState='hover' />
</TableProp>
