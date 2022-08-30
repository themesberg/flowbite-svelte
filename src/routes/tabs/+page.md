---
layout: tabLayout
---

<script lang="ts">
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { TabWrapper,
		TabHead,
		TabHeadItem,
		TabContentItem,
		Timeline,
		TimelineItem,
		Button, Breadcrumb, BreadcrumbItem, Badge } from '$lib'
  
  import componentProps from '../props/TabWrapper.json'
	import componentProps2 from '../props/TabHead.json'
  import componentProps3 from '../props/TabHeadItem.json'
	import componentProps4 from '../props/TabContentItem.json'

// Props table
  let items = componentProps.props
	let items2 = componentProps2.props
	let items3 = componentProps3.props
	let items4 = componentProps4.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

	let activeTabValue = 1;
	const handleClick = (tabValue) => () => {
		activeTabValue = tabValue;
	};
	let activeTabValue2 = 1;
	const handleClick2 = (tabValue) => () => {
		activeTabValue2 = tabValue;
	};
	let activeTabValue3 = 1;
	const handleClick3 = (tabValue) => () => {
		activeTabValue3 = tabValue;
	};
	let activeTabValue4 = 1;
	const handleClick4 = (tabValue) => () => {
		activeTabValue4 = tabValue;
	};
	let activeTabValue5 = 1;
	const handleClick5 = (tabValue) => () => {
		activeTabValue5 = tabValue;
	};
	let activeTabValue6 = 1;
	const handleClick6 = (tabValue) => () => {
		activeTabValue6 = tabValue;
	};
	let activeTabValue7 = 1;
	const handleClick7 = (tabValue) => () => {
		activeTabValue7 = tabValue;
	};
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>Tabs</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Tabs</h1>

<CompoDescription>Use these responsive tabs components to create a secondary navigational hierarchy for your website or toggle content inside a container</CompoDescription>

<ExampleDiv>
<GitHubSource href="tabs/TabWrapper.svelte">TabWrapper</GitHubSource>
<GitHubSource href="tabs/TabHead.svelte">TabHead</GitHubSource>
<GitHubSource href="tabs/TabHeadItem.svelte">TabHeadItem</GitHubSource>
<GitHubSource href="tabs/TabContentItem.svelte">TabContentItem</GitHubSource>
</ExampleDiv>

The tabs component can be used either as an extra navigational hierarchy complementing the main navbar or you can also use it to change content inside a container just below the tabs using the data attributes from Flowbite.

<Htwo label="Setup" />

```html
<script>
	import { TabWrapper, TabHead, TabHeadItem, TabContentItem } from '$lib';
	let activeTabValue = 1;
	const handleClick = (tabValue) => () => {
		activeTabValue = tabValue;
	};
</script>
```

If you have more than one tabs, you need to create `activeTabValue` and `handleClick` for each tab.

```js
<script>
	let activeTabValue1 = 1;
	const handleClick1 = (tabValue) => () => {
		activeTabValue1 = tabValue;
	};
	let activeTabValue2 = 1;
	const handleClick2 = (tabValue) => () => {
		activeTabValue2 = tabValue;
	};
	let activeTabValue3 = 1;
	const handleClick3 = (tabValue) => () => {
		activeTabValue3 = tabValue;
	};
...
</script>
```

<Htwo label="Default tabs" />

Use the following default tabs component example to show a list of links that the user can navigate from on your website.

<ExampleDiv>
	<TabWrapper class="mb-4" bind:activeTabValue let:tabStyle let:tabId>
		<TabHead {tabStyle} {tabId}>
			<TabHeadItem id={1} {tabStyle} {activeTabValue} on:click={handleClick(1)}>Profile</TabHeadItem>
			<TabHeadItem id={2} {tabStyle} {activeTabValue} on:click={handleClick(2)}>Dashboard</TabHeadItem>
			<TabHeadItem id={3} {tabStyle} {activeTabValue} on:click={handleClick(3)}>Settings</TabHeadItem>
			<TabHeadItem id={4} {tabStyle} {activeTabValue} on:click={handleClick(4)}>Users</TabHeadItem>
		</TabHead>
		<TabContentItem id={1} {activeTabValue}>
			<p class="text-sm text-gray-500 dark:text-gray-400">
				Tab 1-1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua.
			</p>
		</TabContentItem>
		<TabContentItem id={2} {activeTabValue}>
			<p class="text-sm text-gray-500 dark:text-gray-400">
				Tab 1-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua.
			</p>
		</TabContentItem>
		<TabContentItem id={3} {activeTabValue}>
			<p class="text-sm text-gray-500 dark:text-gray-400">
				Tab 1-3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua.
			</p>
		</TabContentItem>
		<TabContentItem id={4} {activeTabValue}>
			<p class="text-sm text-gray-500 dark:text-gray-400">
				Tab 1-4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua.
			</p>
		</TabContentItem>
	</TabWrapper>
</ExampleDiv>


```html
<TabWrapper class="mb-4" bind:activeTabValue let:tabStyle let:tabId>
	<TabHead {tabStyle} {tabId}>
		<TabHeadItem id={1} {tabStyle} {activeTabValue} on:click={handleClick(1)}>Profile</TabHeadItem>
		<TabHeadItem id={2} {tabStyle} {activeTabValue} on:click={handleClick(2)}
			>Dashboard</TabHeadItem>
		<TabHeadItem id={3} {tabStyle} {activeTabValue} on:click={handleClick(3)}>Settings</TabHeadItem>
		<TabHeadItem id={4} {tabStyle} {activeTabValue} on:click={handleClick(4)}>Users</TabHeadItem>
	</TabHead>
	<TabContentItem id={1} {activeTabValue}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 1-1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={2} {activeTabValue}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 1-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={3} {activeTabValue}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 1-3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={4} {activeTabValue}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 1-4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
</TabWrapper>
```

<Htwo label="Tabs with underline" />

Use this alternative tabs component style with an underline instead of a background when hovering and being active on a certain page.

<ExampleDiv>
	<TabWrapper
	tabStyle="underline"
	class="mb-4"
	bind:activeTabValue={activeTabValue2}
	let:tabStyle
	let:tabId>
	<TabHead {tabStyle} {tabId}>
		<TabHeadItem id={1} {tabStyle} activeTabValue={activeTabValue2} on:click={handleClick2(1)}
			>Profile</TabHeadItem>
		<TabHeadItem id={2} {tabStyle} activeTabValue={activeTabValue2} on:click={handleClick2(2)}
			>Dashboard</TabHeadItem>
		<TabHeadItem id={3} {tabStyle} activeTabValue={activeTabValue2} on:click={handleClick2(3)}
			>Settings</TabHeadItem>
		<TabHeadItem id={4} {tabStyle} activeTabValue={activeTabValue2} on:click={handleClick2(4)}
			>Users</TabHeadItem>
	</TabHead>
	<TabContentItem id={1} activeTabValue={activeTabValue2}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 2-1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={2} activeTabValue={activeTabValue2}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 2-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={3} activeTabValue={activeTabValue2}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 2-3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={4} activeTabValue={activeTabValue2}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 2-4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
</TabWrapper> 
</ExampleDiv>

```html
<TabWrapper
	tabStyle="underline"
	class="mb-4"
	bind:activeTabValue={activeTabValue2}
	let:tabStyle
	let:tabId>
	<TabHead {tabStyle} {tabId}>
		<TabHeadItem id={1} {tabStyle} activeTabValue={activeTabValue2} on:click={handleClick2(1)}
			>Profile</TabHeadItem>
		<TabHeadItem id={2} {tabStyle} activeTabValue={activeTabValue2} on:click={handleClick2(2)}
			>Dashboard</TabHeadItem>
		<TabHeadItem id={3} {tabStyle} activeTabValue={activeTabValue2} on:click={handleClick2(3)}
			>Settings</TabHeadItem>
		<TabHeadItem id={4} {tabStyle} activeTabValue={activeTabValue2} on:click={handleClick2(4)}
			>Users</TabHeadItem>
	</TabHead>
	<TabContentItem id={1} activeTabValue={activeTabValue2}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 2-1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={2} activeTabValue={activeTabValue2}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 2-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={3} activeTabValue={activeTabValue2}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 2-3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={4} activeTabValue={activeTabValue2}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 2-4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
</TabWrapper>
```

<Htwo label="Tabs with icons" />

This is an example of the tabs component where you can also use a SVG powered icon to complement the text within the navigational tabs. 
Use icon components for a simple syntax. See <a href="/icons">Icons</a> for more details.

<ExampleDiv>
	<TabWrapper
	tabStyle="icon"
	class="mb-4"
	bind:activeTabValue={activeTabValue3}
	let:tabStyle
	let:tabId>
	<TabHead {tabStyle} {tabId}>
		<TabHeadItem id={1} {tabStyle} activeTabValue={activeTabValue3} on:click={handleClick3(1)}
			><svg
				aria-hidden="true"
				class="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
					clip-rule="evenodd" /></svg
			>Profile</TabHeadItem>
		<TabHeadItem id={2} {tabStyle} activeTabValue={activeTabValue3} on:click={handleClick3(2)}
			><svg
				aria-hidden="true"
				class="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg
			>Dashboard</TabHeadItem>
		<TabHeadItem id={3} {tabStyle} activeTabValue={activeTabValue3} on:click={handleClick3(3)}
			><svg
				aria-hidden="true"
				class="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" /></svg
			>Settings
		</TabHeadItem>
		<TabHeadItem id={4} {tabStyle} activeTabValue={activeTabValue3} on:click={handleClick3(4)}>
			<svg
				aria-hidden="true"
				class="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path
					fill-rule="evenodd"
					d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
					clip-rule="evenodd" /></svg
			>Contacts
		</TabHeadItem>
	</TabHead>
	<TabContentItem id={1} activeTabValue={activeTabValue3}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 3-1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={2} activeTabValue={activeTabValue3}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 3-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={3} activeTabValue={activeTabValue3}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 3-3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={4} activeTabValue={activeTabValue3}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 3-4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
</TabWrapper>
</ExampleDiv>

```html
<TabWrapper
	tabStyle="icon"
	class="mb-4"
	bind:activeTabValue={activeTabValue3}
	let:tabStyle
	let:tabId>
	<TabHead {tabStyle} {tabId}>
		<TabHeadItem id={1} {tabStyle} activeTabValue={activeTabValue3} on:click={handleClick3(1)}
			><svg
				aria-hidden="true"
				class="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
					clip-rule="evenodd" /></svg
			>Profile</TabHeadItem>
		<TabHeadItem id={2} {tabStyle} activeTabValue={activeTabValue3} on:click={handleClick3(2)}
			><svg
				aria-hidden="true"
				class="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg
			>Dashboard</TabHeadItem>
		<TabHeadItem id={3} {tabStyle} activeTabValue={activeTabValue3} on:click={handleClick3(3)}
			><svg
				aria-hidden="true"
				class="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" /></svg
			>Settings
		</TabHeadItem>
		<TabHeadItem id={4} {tabStyle} activeTabValue={activeTabValue3} on:click={handleClick3(4)}>
			<svg
				aria-hidden="true"
				class="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path
					fill-rule="evenodd"
					d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
					clip-rule="evenodd" /></svg
			>Contacts
		</TabHeadItem>
	</TabHead>
	<TabContentItem id={1} activeTabValue={activeTabValue3}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 3-1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={2} activeTabValue={activeTabValue3}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 3-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={3} activeTabValue={activeTabValue3}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 3-3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={4} activeTabValue={activeTabValue3}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 3-4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
</TabWrapper>
```

<Htwo label="Pills tabs" />

If you want to use pills as a style for the tabs component use `tabStyle="pill"`.

<ExampleDiv>
	<TabWrapper
	tabStyle="pill"
	class="mb-4"
	bind:activeTabValue={activeTabValue4}
	let:tabStyle
	let:tabId>
	<TabHead {tabStyle} {tabId}>
		<TabHeadItem id={1} {tabStyle} activeTabValue={activeTabValue4} on:click={handleClick4(1)}
			>Profile</TabHeadItem>
		<TabHeadItem id={2} {tabStyle} activeTabValue={activeTabValue4} on:click={handleClick4(2)}
			>Dashboard</TabHeadItem>
		<TabHeadItem id={3} {tabStyle} activeTabValue={activeTabValue4} on:click={handleClick4(3)}
			>Settings</TabHeadItem>
		<TabHeadItem id={4} {tabStyle} activeTabValue={activeTabValue4} on:click={handleClick4(4)}
			>Users</TabHeadItem>
	</TabHead>
	<TabContentItem id={1} activeTabValue={activeTabValue4}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 4-1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={2} activeTabValue={activeTabValue4}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 4-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={3} activeTabValue={activeTabValue4}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 4-3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={4} activeTabValue={activeTabValue4}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 4-4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
</TabWrapper>
</ExampleDiv>

```html
<TabWrapper
	tabStyle="pill"
	class="mb-4"
	bind:activeTabValue={activeTabValue4}
	let:tabStyle
	let:tabId>
	<TabHead {tabStyle} {tabId}>
		<TabHeadItem id={1} {tabStyle} activeTabValue={activeTabValue4} on:click={handleClick4(1)}
			>Profile</TabHeadItem>
		<TabHeadItem id={2} {tabStyle} activeTabValue={activeTabValue4} on:click={handleClick4(2)}
			>Dashboard</TabHeadItem>
		<TabHeadItem id={3} {tabStyle} activeTabValue={activeTabValue4} on:click={handleClick4(3)}
			>Settings</TabHeadItem>
		<TabHeadItem id={4} {tabStyle} activeTabValue={activeTabValue4} on:click={handleClick4(4)}
			>Users</TabHeadItem>
	</TabHead>
	<TabContentItem id={1} activeTabValue={activeTabValue4}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 4-1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={2} activeTabValue={activeTabValue4}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 4-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={3} activeTabValue={activeTabValue4}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 4-3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={4} activeTabValue={activeTabValue4}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 4-4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
</TabWrapper>
```

<Htwo label="Full width tabs" />

If you want to show the tabs on the full width relative to the parent element use `tabStype="full"` prop.

<ExampleDiv>
	<TabWrapper
	tabStyle="full"
	class="mb-4"
	bind:activeTabValue={activeTabValue5}
	let:tabStyle
	let:tabId>
	<TabHead {tabStyle} {tabId}>
		<TabHeadItem id={1} {tabStyle} activeTabValue={activeTabValue5} on:click={handleClick5(1)}
			>Profile</TabHeadItem>
		<TabHeadItem id={2} {tabStyle} activeTabValue={activeTabValue5} on:click={handleClick5(2)}
			>Dashboard</TabHeadItem>
		<TabHeadItem id={3} {tabStyle} activeTabValue={activeTabValue5} on:click={handleClick5(3)}
			>Settings</TabHeadItem>
		<TabHeadItem id={4} {tabStyle} activeTabValue={activeTabValue5} on:click={handleClick5(4)}
			>Users</TabHeadItem>
	</TabHead>
	<TabContentItem id={1} activeTabValue={activeTabValue5}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 5-1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={2} activeTabValue={activeTabValue5}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 5-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={3} activeTabValue={activeTabValue5}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 5-3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={4} activeTabValue={activeTabValue5}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 5-4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
</TabWrapper>
</ExampleDiv>

```html
<TabWrapper
	tabStyle="full"
	class="mb-4"
	bind:activeTabValue={activeTabValue5}
	let:tabStyle
	let:tabId>
	<TabHead {tabStyle} {tabId}>
		<TabHeadItem id={1} {tabStyle} activeTabValue={activeTabValue5} on:click={handleClick5(1)}
			>Profile</TabHeadItem>
		<TabHeadItem id={2} {tabStyle} activeTabValue={activeTabValue5} on:click={handleClick5(2)}
			>Dashboard</TabHeadItem>
		<TabHeadItem id={3} {tabStyle} activeTabValue={activeTabValue5} on:click={handleClick5(3)}
			>Settings</TabHeadItem>
		<TabHeadItem id={4} {tabStyle} activeTabValue={activeTabValue5} on:click={handleClick5(4)}
			>Users</TabHeadItem>
	</TabHead>
	<TabContentItem id={1} activeTabValue={activeTabValue5}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 5-1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={2} activeTabValue={activeTabValue5}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 5-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={3} activeTabValue={activeTabValue5}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 5-3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={4} activeTabValue={activeTabValue5}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 5-4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
</TabWrapper>
```

<Htwo label="Disabled tabs" />

To disable a tab, add `disabled` to a `TabHeadItem`.

<ExampleDiv>
	<TabWrapper class="mb-4" bind:activeTabValue={activeTabValue6} let:tabStyle let:tabId>
	<TabHead {tabStyle} {tabId}>
		<TabHeadItem id={1} {tabStyle} activeTabValue={activeTabValue6} on:click={handleClick6(1)}
			>Profile</TabHeadItem>
		<TabHeadItem id={2} {tabStyle} activeTabValue={activeTabValue6} on:click={handleClick6(2)}
			>Dashboard</TabHeadItem>
		<TabHeadItem
			disabled
			id={3}
			{tabStyle}
			activeTabValue={activeTabValue6}
			on:click={handleClick6(3)}>Disabled 1</TabHeadItem>
		<TabHeadItem
			disabled
			id={4}
			{tabStyle}
			activeTabValue={activeTabValue6}
			on:click={handleClick6(4)}>Disabled 2</TabHeadItem>
	</TabHead>
	<TabContentItem id={1} activeTabValue={activeTabValue6}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 6-1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={2} activeTabValue={activeTabValue6}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 6-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={3} activeTabValue={activeTabValue6}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 6-3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={4} activeTabValue={activeTabValue6}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 6-4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
</TabWrapper>
</ExampleDiv>

```html
<TabWrapper class="mb-4" bind:activeTabValue={activeTabValue6} let:tabStyle let:tabId>
	<TabHead {tabStyle} {tabId}>
		<TabHeadItem id={1} {tabStyle} activeTabValue={activeTabValue6} on:click={handleClick6(1)}
			>Profile</TabHeadItem>
		<TabHeadItem id={2} {tabStyle} activeTabValue={activeTabValue6} on:click={handleClick6(2)}
			>Dashboard</TabHeadItem>
		<TabHeadItem
			disabled
			id={3}
			{tabStyle}
			activeTabValue={activeTabValue6}
			on:click={handleClick6(3)}>Disabled 1</TabHeadItem>
		<TabHeadItem
			disabled
			id={4}
			{tabStyle}
			activeTabValue={activeTabValue6}
			on:click={handleClick6(4)}>Disabled 2</TabHeadItem>
	</TabHead>
	<TabContentItem id={1} activeTabValue={activeTabValue6}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 6-1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={2} activeTabValue={activeTabValue6}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 6-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={3} activeTabValue={activeTabValue6}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 6-3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={4} activeTabValue={activeTabValue6}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 6-4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
</TabWrapper>
```

<Htwo label="Components in tab contents" />

You can add other components to the `TabContentItem` component. Here we are adding a timeline component in the tab 1:

<ExampleDiv class="h-auto">
  <TabWrapper class="mb-4" bind:activeTabValue={activeTabValue7} let:tabStyle let:tabId>
	<TabHead {tabStyle} {tabId}>
		<TabHeadItem id={1} {tabStyle} activeTabValue={activeTabValue7} on:click={handleClick7(1)}
			>Profile</TabHeadItem>
		<TabHeadItem id={2} {tabStyle} activeTabValue={activeTabValue7} on:click={handleClick7(2)}
			>Dashboard</TabHeadItem>
		<TabHeadItem id={3} {tabStyle} activeTabValue={activeTabValue7} on:click={handleClick7(3)}
			>Settings</TabHeadItem>
		<TabHeadItem id={4} {tabStyle} activeTabValue={activeTabValue7} on:click={handleClick7(4)}
			>Contact</TabHeadItem>
	</TabHead>
	<TabContentItem id={1} activeTabValue={activeTabValue7}>
		<Timeline>
			<TimelineItem title="Application UI code in Tailwind CSS" date="February 2022">
				<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
					Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar,
					and pre-order E-commerce & Marketing pages.
				</p>
				<Button color="alternative"
					>Learn more<svg
						class="ml-2 w-3 h-3"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
							clip-rule="evenodd" /></svg></Button>
			</TimelineItem>
			<TimelineItem title="Application UI code in Tailwind CSS" date="March 2022">
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">
					All of the pages and components are first designed in Figma and we keep a parity between
					the two versions even as we update the project.
				</p>
			</TimelineItem>
			<TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">
					Get started with dozens of web components and interactive elements built on top of
					Tailwind CSS.
				</p>
			</TimelineItem>
		</Timeline>
	</TabContentItem>
	<TabContentItem id={2} activeTabValue={activeTabValue7}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 7-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={3} activeTabValue={activeTabValue7}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 7-3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={4} activeTabValue={activeTabValue7}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 7-4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
</TabWrapper>
</ExampleDiv>

```html
<TabWrapper class="mb-4" bind:activeTabValue={activeTabValue7} let:tabStyle let:tabId>
	<TabHead {tabStyle} {tabId}>
		<TabHeadItem id={1} {tabStyle} activeTabValue={activeTabValue7} on:click={handleClick7(1)}
			>Profile</TabHeadItem>
		<TabHeadItem id={2} {tabStyle} activeTabValue={activeTabValue7} on:click={handleClick7(2)}
			>Dashboard</TabHeadItem>
		<TabHeadItem id={3} {tabStyle} activeTabValue={activeTabValue7} on:click={handleClick7(3)}
			>Settings</TabHeadItem>
		<TabHeadItem id={4} {tabStyle} activeTabValue={activeTabValue7} on:click={handleClick7(4)}
			>Contact</TabHeadItem>
	</TabHead>
	<TabContentItem id={1} activeTabValue={activeTabValue7}>
		<Timeline>
			<TimelineItem title="Application UI code in Tailwind CSS" date="February 2022">
				<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
					Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar,
					and pre-order E-commerce & Marketing pages.
				</p>
				<Button color="alternative"
					>Learn more<svg
						class="ml-2 w-3 h-3"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
							clip-rule="evenodd" /></svg
					></Button>
			</TimelineItem>
			<TimelineItem title="Application UI code in Tailwind CSS" date="March 2022">
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">
					All of the pages and components are first designed in Figma and we keep a parity between
					the two versions even as we update the project.
				</p>
			</TimelineItem>
			<TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">
					Get started with dozens of web components and interactive elements built on top of
					Tailwind CSS.
				</p>
			</TimelineItem>
		</Timeline>
	</TabContentItem>
	<TabContentItem id={2} activeTabValue={activeTabValue7}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 7-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={3} activeTabValue={activeTabValue7}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 7-3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
	<TabContentItem id={4} activeTabValue={activeTabValue7}>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			Tab 7-4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua.
		</p>
	</TabContentItem>
</TabWrapper>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3 class='text-xl w-full dark:text-white py-4'>TabWrapper</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>TabHead</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>TabHeadItem</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>TabContentItem</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>

<Htwo label="Forwarded Events: TabHeadItem" />

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