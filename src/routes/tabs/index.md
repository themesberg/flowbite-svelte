---
layout: tabLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Tabs, InteractiveTabHead, TabContent, Timeline, TimelineItem, Breadcrumb, BreadcrumbItem, Badge } from '$lib'
  import { Home, UserCircle, ViewGrid, Adjustments, ClipboardList } from 'svelte-heros';
  
  import componentProps from '../props/Tabs.json'
	import componentProps2 from '../props/InteractiveTabHead.json'
  import componentProps3 from '../props/TabContent.json'
  // Props table
  let items = componentProps.props
	let items2 = componentProps2.props
	let items3 = componentProps3.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

	let iconTabs = [
		{
			id: 1,
			name: 'Profile',
			active: true,
			icon: UserCircle,
			iconSize: 18,
			content:
				'1-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			id: 2,
			name: 'Dashboard',
			icon: ViewGrid,
			iconSize: 18,
			content:
				'1-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			id: 3,
			name: 'Settings',
			icon: Adjustments,
			iconSize: 18,
			content:
				'1-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		},
		{
			id: 4,
			name: 'Contacts',
			icon: ClipboardList,
			iconSize: 18,
			content:
				'1-4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
		}
	];

	let tabs1 = [
		{
			name: 'Profile',
			id: 1,
			content:
				'1-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
		},
		{
			name: 'Dashboard',
			id: 2,
			content:
				'1-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
		},
		{
			name: 'Settings',
			id: 3,
			content:
				'1-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
		},
		{
			name: 'Users',
			id: 4,
			content:
				'1-4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
		}
	];

	let tab1 = { name: 'Tab1', id: 1 };
	let tab2 = { name: 'Tab2', id: 2 };
	let tab3 = { name: 'Tab3', id: 3 };
	let tabhead = [tab1, tab2, tab3];
	let timelineItems = [
		{
			date: 'February 2022',
			title: 'Lorem ipsum dolor sit amet',
			href: '/',
			linkname: 'Learn more',
			text: 'Consectetur adipiscing elit...'
		},
		{
			date: 'March 2022',
			title: 'Lorem ipsum dolor sit amet',
			text: 'Consectetur adipiscing elit...'
		},
		{
			date: 'February 2022',
			title: 'Lorem ipsum dolor sit amet',
			text: 'Consectetur adipiscing elit...'
		}
	];
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Tabs</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Tabs</h1>

<CompoDescription>Use these responsive tabs components to create a secondary navigational hierarchy for your website or toggle content inside a container</CompoDescription>

<ExampleDiv>
<GitHubSource href="tabs/DefaultTabs.svelte">Tabs</GitHubSource>
<GitHubSource href="tabs/TabContent.svelte">TabContent</GitHubSource>
<GitHubSource href="tabs/UnderlineTabs.svelte">UnderlineTabs</GitHubSource>
</ExampleDiv>

The tabs component can be used either as an extra navigational hierarchy complementing the main navbar or you can also use it to change content inside a container just below the tabs using the data attributes from Flowbite.

<Htwo label="Setup" />

```html
<script>
	import { Tabs, InteractiveTabHead, TabContent } from 'flowbite-svelte';
</script>
```

<Htwo label="Default tabs" />

Use the following default tabs component example to show a list of links that the user can navigate from on your website.

<ExampleDiv>
	<Tabs tabId="defaultTab" tabs={tabs1} />
</ExampleDiv>


```html
<script>
  import { DefaultTabs } from "flowbite-svelte";
  let tabs1 = [
		{
			name: 'Profile-1',
			id: 1,
			content:
				'1-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
		},
		{
			name: 'Dashboard-1',
			id: 2,
			content:
				'1-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
		},
		{
			name: 'Settings-1',
			id: 3,
			content:
				'1-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
		},
		{
			name: 'Disabled',
			id: 4,
			disabled: true,
			content:
				'1-4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
		}
	];
</script>

<Tabs tabId="defaultTab" tabs={tabs1} />
```

<Htwo label="Tabs with underline" />

Use this alternative tabs component style with an underline instead of a background when hovering and being active on a certain page.

<ExampleDiv>
	<Tabs tabId="underlineTab" tabs={tabs1} tabStyle="underline" />
</ExampleDiv>

```html
<Tabs tabId="underlineTab" tabs={tabs1} tabStyle="underline" />
```

<Htwo label="Tabs with icons" />

This is an example of the tabs component where you can also use a SVG powered icon to complement the text within the navigational tabs.

<ExampleDiv>
	<Tabs tabId="iconTab" tabs={iconTabs} tabStyle="icon" />
</ExampleDiv>

```html
<Tabs tabId="iconTab" tabs={iconTabs} tabStyle="icon" />
```

<Htwo label="Pills tabs" />

If you want to use pills as a style for the tabs component you can do so by using this example.

<ExampleDiv>
	<Tabs tabId="pillTab" tabs={tabs1} tabStyle="pill" />
</ExampleDiv>

```html
<Tabs tabId="pillTab" tabs={tabs1} tabStyle="pill" />
```

<Htwo label="Full width tabs" />

If you want to show the tabs on the full width relative to the parent element you can do so by using the full width tabs component example.

<ExampleDiv>
	<Tabs tabId="fullTab" tabs={tabs1} tabStyle="full" />
</ExampleDiv>

```html
<Tabs tabId="fullTab" tabs={tabs1} tabStyle="full" />
```

<Htwo label="Components in tab contents" />

By using `InteractiveTabHead` and `TabContent` you can add other components to the `InteractiveTabs` component. Here we are adding a timeline component in the tab 1:

<ExampleDiv>
  <InteractiveTabHead tabs={tabhead}>
    <TabContent tab={tab1}>
      <Timeline>
        <TimelineItem {timelineItems} />
      </Timeline>
    </TabContent>
    <TabContent tab={tab2}>
      <p>Test 2 content here</p>
    </TabContent>
    <TabContent tab={tab3}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.</p>
    </TabContent>
</InteractiveTabHead>
</ExampleDiv>

```html
<script>
import { InteractiveTabHead, TabContent, Card, Timeline,
		TimelineItem, }from 'flowbite-svelte';
	let tab1 = { name: 'Tab1', id: 1 };
	let tab2 = { name: 'Tab2', id: 2 };
	let tab3 = { name: 'Tab3', id: 3 };
	let tabhead = [tab1, tab2, tab3];
  let timelineItems = [
		{
			date: 'February 2022',
			title: 'Lorem ipsum dolor sit amet',
			href: '/',
			linkname: 'Learn more',
			text: 'Consectetur adipiscing elit...'
		},
		{
			date: 'March 2022',
			title: 'Lorem ipsum dolor sit amet',
			text: 'Consectetur adipiscing elit...'
		},
		{
			date: 'February 2022',
			title: 'Lorem ipsum dolor sit amet',
			text: 'Consectetur adipiscing elit...'
		}
	];
</script>

<InteractiveTabHead tabs={tabhead}>
  <TabContent tab={tab1}>
    <Timeline>
      <TimelineItem {timelineItems} />
    </Timeline>
  </TabContent>
	<TabContent tab={tab2}>
    <p>Test 2 content here</p>
  </TabContent>
	<TabContent tab={tab3}>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.</p>
  </TabContent>
</InteractiveTabHead>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3 class='text-xl w-full dark:text-white py-4'>Tabs</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>InteractiveTabHead</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>TabContent</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>




<Htwo label="Forwarded Events: Tabs, InteractiveTabHead" />

<div class="flex flex-wrap gap-2">
<Badge large={true}>on:blur</Badge>
<Badge large={true}>on:click</Badge>
<Badge large={true}>on:focus</Badge>
<Badge large={true}>on:keydown</Badge>
<Badge large={true}>on:keypress</Badge>
<Badge large={true}>on:keyup</Badge>
<Badge large={true}>on:mouseenter</Badge>
<Badge large={true}>on:mouseleave</Badge>
<Badge large={true}>on:mouseover</Badge>
</div>