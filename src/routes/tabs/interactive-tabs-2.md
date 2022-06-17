---
layout: tabLayout
---

<script>
	import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
	import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { InteractiveTabHead, TabContent, Card, Timeline,
		TimelineItem, Breadcrumb } from '$lib/index';
	import componentProps1 from '../props/InteractiveTabHead.json'
  import componentProps2 from '../props/TabContent.json'
  let items1 = componentProps1.props
  let items2 = componentProps2.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

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
      label:'Interactive tabs 2',
      href:'/tabs/interactive-tabs-2'
    },
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">Interactive Tabs 2: Adding other components</h1>

<Htwo label="Examples" />

<p>It is possible to add other components to the `InteractiveTabs` component but using `InteractiveTabHead` and `TabContent` make it easy to add other components to tabs. Here we are adding a timeline component in the tab 1 and a card component in the tab 3:</p>

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
    <Card header="Card in a tab">
      <span slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </span>
    </Card>
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
    <Card header="Card in a tab">
      <span slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </span>
    </Card>
  </TabContent>
</InteractiveTabHead>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3>InteractiveTabHead</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>

<h3>TabContent</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>