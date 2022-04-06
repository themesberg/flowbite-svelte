---
layout: tabLayout
---

<script>
  import { InteractiveTabHead, TabContent, Card, Timeline,
		TimelineItem, }from '$lib/index';
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

<h1 class="text-3xl w-full dark:text-white py-8">Interactive Tabs 2: Adding other components</h1>

<h2 class="text-2xl mt-8 dark:text-white py-8">Examples</h2>

<p class="dark:text-white py-4 text-lg">It is possible to add other components to the `InteractiveTabs` component but using `InteractiveTabHead` and `TabContent` make it easy to add other components to tabs. Here we are adding a timeline component in the tab 1 and a card component in the tab 3:</p>

<div class="container rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <InteractiveTabHead tabs={tabhead}>
    <TabContent tab={tab1}>
      <Timeline>
        <TimelineItem {timelineItems} />
      </Timeline>
    </TabContent>
	<TabContent tab={tab2}>
    <p class="dark:text-white py-4 text-lg">Test 2 content here</p>
  </TabContent>
	<TabContent tab={tab3}>
    <Card header="Card in a tab">
      <span slot="paragraph">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio.
      </span>
    </Card>
  </TabContent>
</InteractiveTabHead>
</div>

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
    <p class="dark:text-white py-4 text-lg">Test 2 content here</p>
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


<h2 class="text-2xl mt-8 dark:text-white pt-16 pb-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
// InteractiveTabHead
interface TabHeadType {
    name: string;
    id: number;
}
let tabs: TabHeadType[];
let tabId = 'myTab';
let activeTabValue = 1;

// TabContent
let divClass = 'p-4 rounded-lg dark:bg-gray-800';
let tab: TabHeadType;
```