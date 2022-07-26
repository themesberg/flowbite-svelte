---
layout: tabLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { DefaultTabs, UnderlineTabs, IconTabs, PillTabs, FullWidthTabs, InteractiveTabs, InteractiveTabHead, TabContent, Timeline, TimelineItem, Breadcrumb, BreadcrumbItem } from '$lib/index'
  import {
		Home,
		UserCircle,
		ViewGrid,
		Adjustments,
		ClipboardList
	} from 'svelte-heros';
  import componentProps from '../props/DefaultTabs.json'
	import componentProps2 from '../props/UnderlineTabs.json'
	import componentProps3 from '../props/IconTabs.json'
	import componentProps4 from '../props/PillTabs.json'
	import componentProps5 from '../props/FullWidthTabs.json'
	import componentProps6 from '../props/InteractiveTabs.json'
	import componentProps7 from '../props/InteractiveTabHead.json'
  import componentProps8 from '../props/TabContent.json'
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

  export let tabs = [
    {
      name: "Profile",
      active: true,
      href: "/#",
      rel: undefined,
    },
    {
      name: "Dashboard",
      active: false,
      href: "/#",
      rel: undefined,
    },
    {
      name: "Settings",
      active: false,
      href: "/#",
      rel: undefined,
    },
    {
      name: "Contacts",
      active: false,
      href: "/#",
      rel: undefined,
    },
  ];

	let iconTabs = [
		{
			name: 'Profile',
			active: true,
			href: '/',
			icon: UserCircle,
			iconSize: 18,
		},
		{
			name: 'Dashboard',
			active: false,
			href: '/',
			icon: ViewGrid,
			iconSize: 18,
		},
		{
			name: 'Settings',
			active: false,
			href: '/',
			icon: Adjustments,
			iconSize: 18,
		},
		{
			name: 'Contacts',
			active: false,
			href: '/',
			icon: ClipboardList,
			iconSize: 18,
		}
	];

  let pillsTabs = [
    {
      name: "Profile",
      selected: true,
      href: "/profile",
    },
    {
      name: "Dashboard",
      selected: false,
      href: "/dashboard",
    },
    {
      name: "Settings",
      selected: false,
      href: "/settings",
    },
    {
      name: "Contact",
      selected: false,
      href: "/contact",
    },
  ];

	let tabLabel = 'Select a target'
	let tabs1 = [
    {
      name: "Profile-1",
      id: 1,
      content:
        "1-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      name: "Dashboard-1",
      id: 2,
      content:
        "1-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      name: "Settings-1",
      id: 3,
      content:
        "1-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      name: "Contacts-1",
      id: 4,
      content:
        "1-4Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ];



  let itabs1 = [
    {
      name: "Profile-1",
      id: 1,
      content:
        "1-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      name: "Dashboard-1",
      id: 2,
      content:
        "1-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      name: "Settings-1",
      id: 3,
      content:
        "1-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      name: "Contacts-1",
      id: 4,
      content:
        "1-4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
  ];
  let itabs2 = [
    {
      name: "Profile-2",
      id: 1,
      content:
        "2-1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      name: "Dashboard-2",
      id: 2,
      content:
        "2-2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      name: "Settings-2",
      id: 3,
      content:
        "2-3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      name: "Contacts-2",
      id: 4,
      content:
        "2-4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
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

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Tabs',
      href:'/tabs/'
    },
    {
      label:'Tabs default',
      href:'/tabs/default'
    },
  ]
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Tabs</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Default Tabs</h1>

<Htwo label="Examples" />

<ExampleDiv>
  <DefaultTabs {tabs} />
</ExampleDiv>

```html
<script>
  import { DefaultTabs } from "flowbite-svelte";
  export let tabs = [
    {
      name: "Profile",
      active: true,
      href: "/#",
      rel: undefined,
    },
    {
      name: "Dashboard",
      active: false,
      href: "/#",
      rel: undefined,
    },
    {
      name: "Settings",
      active: false,
      href: "/#",
      rel: undefined,
    },
    {
      name: "Contacts",
      active: false,
      href: "/#",
      rel: undefined,
    },
  ];
</script>

<DefaultTabs {tabs} />
```

<Htwo label="Tabs with underline" />

<ExampleDiv>
  <UnderlineTabs {tabs} />
</ExampleDiv>

```html
<script>
import { UnderlineTabs }from 'flowbite-svelte';
let tabs = [
  {
    name: "Profile",
    active: true,
    href: "/#",
    rel: undefined,
  },
  {
    name: "Dashboard",
    active: false,
    href: "/#",
    rel: undefined,
  },
  {
    name: "Settings",
    active: false,
    href: "/#",
    rel: undefined,
  },
  {
    name: "Contacts",
    active: false,
    href: "/#",
    rel: undefined,
  },
];
</script>

<UnderlineTabs {tabs} />
```


<Htwo label="Tabs with icons" />

<ExampleDiv>
	<IconTabs tabs={iconTabs} />
</ExampleDiv>

```html
<script>
	import { IconTabs } from 'flowbite-svelte';
	import {
		UserCircle,
		ViewGrid,
		Adjustments,
		ClipboardList
	} from 'svelte-heros';

	let iconTabs = [
		{
			name: 'Profile',
			active: true,
			href: '/',
			icon: UserCircle,
			iconSize: 18,
		},
		{
			name: 'Dashboard',
			active: false,
			href: '/',
			icon: ViewGrid,
			iconSize: 18,
		},
		{
			name: 'Settings',
			active: false,
			href: '/',
			icon: Adjustments,
			iconSize: 18,
		},
		{
			name: 'Contacts',
			active: false,
			href: '/',
			icon: ClipboardList,
			iconSize: 18,
		}
	];
</script>

<IconTabs tabs={iconTabs} />
```

<Htwo label="Pills tabs" />

<ExampleDiv>
   <PillTabs tabs={pillsTabs} />
</ExampleDiv>

```html
<script>
  import { PillTabs } from "flowbite-svelte";
  let pillsTabs = [
    {
      name: "Profile",
      selected: true,
      href: "/profile",
    },
    {
      name: "Dashboard",
      selected: false,
      href: "/dashboard",
    },
    {
      name: "Settings",
      selected: false,
      href: "/settings",
    },
    {
      name: "Contact",
      selected: false,
      href: "/contact",
    },
  ];
</script>

<PillTabs tabs={pillsTabs} />
```

<Htwo label="Full width tabs" />

<ExampleDiv>
<FullWidthTabs {tabs} {tabLabel} />
</ExampleDiv>

```html
<script>
  import { FullWidthTabs } from 'flowbite-svelte'
  let tabLabel = 'Select a target'
  let tabs = [
  {
    name: "Profile",
    active: true,
    href: "/#",
    rel: undefined,
  },
  {
    name: "Dashboard",
    active: false,
    href: "/",
  },
  {
    name: "Settings",
    active: false,
    href: "/",
  },
  {
    name: "Contacts",
    active: false,
    href: "/",
  },
];
</script>

<FullWidthTabs {tabs} {tabLabel}/>
```

<Htwo label="Interactive tabs" />

<ExampleDiv>
  <InteractiveTabs tabId="myTab1" tabs={tabs1} />
</ExampleDiv>

```html
<script>
  import { InteractiveTabs } from "flowbite-svelte";
  let tabs1 = [
    {
      name: "Profile-1",
      id: 1,
      content:
        "1-1 Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
    {
      name: "Dashboard-1",
      id: 2,
      content:
        "1-2 Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
    {
      name: "Settings-1",
      id: 3,
      content:
        "1-3 Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
    {
      name: "Contacts-1",
      id: 4,
      content:
        "1-4Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
  ];
</script>

<InteractiveTabs tabId="myTab1" tabs={tabs1} />
```

<Htwo label="Interactive tabs 2" />

<p>It is possible to add other components to the `InteractiveTabs` component but using `InteractiveTabHead` and `TabContent` make it easy to add other components to tabs. Here we are adding a timeline component in the tab 1:</p>

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


<h1 class="text-3xl w-full dark:text-white py-8">Multiple Interactive Tabs</h1>

<Htwo label="Examples" />

<ExampleDiv>
  <InteractiveTabs tabId="myTab1" tabs={itabs1} />
</ExampleDiv>

<ExampleDiv>
  <InteractiveTabs tabId="myTab2" tabs={itabs2} />
</ExampleDiv>

```html
<script>
  import { InteractiveTabs } from "flowbite-svelte";

  let tabs1 = [
    {
      name: "Profile-1",
      id: 1,
      content:
        "1-1 Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
    {
      name: "Dashboard-1",
      id: 2,
      content:
        "1-2 Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
    {
      name: "Settings-1",
      id: 3,
      content:
        "1-3 Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
    {
      name: "Contacts-1",
      id: 4,
      content:
        "1-4 Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
  ];
  let tabs2 = [
    {
      name: "Profile-2",
      id: 1,
      content:
        "2-1 Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
    {
      name: "Dashboard-2",
      id: 2,
      content:
        "2-2 Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
    {
      name: "Settings-2",
      id: 3,
      content:
        "2-3 Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
    {
      name: "Contacts-2",
      id: 4,
      content:
        "2-4 Lorem ipsum dolor sit amet, consectetur adipiscing ... ",
    },
  ];
</script>

<InteractiveTabs tabId="myTab1" tabs={tabs1} />
<InteractiveTabs tabId="myTab2" tabs={tabs2} />
```



<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3>DefaultTabs</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<h3>UnderlineTabs</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<h3>IconTabs</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

<h3>PillTabs</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>

<h3>FullWidthTabs</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items5} rowState='hover' />
</TableProp>

<h3>InteractiveTabs</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items6} rowState='hover' />
</TableProp>

<h3>InteractiveTabHead</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items7} rowState='hover' />
</TableProp>

<h3>TabContent</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items8} rowState='hover' />
</TableProp>
