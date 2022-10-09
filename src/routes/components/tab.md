---
layout: componentLayout
title: Svelte Tabs - Flowbite
breadcrumb_title: Tabs
dir: Components
---

<script lang="ts">
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Breadcrumb, BreadcrumbItem, Badge, Heading, P, A } from '$lib'
  import { props as items }  from '../props/Tabs.json'
  import { props as items2 }  from '../props/TabHead.json'
  import { props as items3 }  from '../props/TabHeadItem.json'
  import { props as items4 }  from '../props/TabItem.json'
  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb class="pt-16 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>Use these responsive tabs components to create a secondary navigational hierarchy for your website or toggle content inside a container</CompoDescription>

<ExampleDiv>
<GitHubSource href="tabs/Tabs.svelte">Tabs</GitHubSource>
<GitHubSource href="tabs/TabHead.svelte">TabHead</GitHubSource>
<GitHubSource href="tabs/TabHeadItem.svelte">TabHeadItem</GitHubSource>
<GitHubSource href="tabs/TabItem.svelte">TabItem</GitHubSource>
</ExampleDiv>

The tabs component can be used either as an extra navigational hierarchy complementing the main navbar or you can also use it to change content inside a container just below the tabs using the data attributes from Flowbite.

<Htwo label="Setup" />

```html
<script>
  import { Tabs, TabHead, TabHeadItem, TabItem } from 'flowbite-svelte';
</script>
```


<Htwo label="Default tabs" />

Use the following default tabs component example to show a list of links that the user can navigate from on your website.

```svelte example
<script>
  import { Tabs, TabHead, TabHeadItem, TabItem } from 'flowbite-svelte';
</script>

<Tabs underline>
  <TabItem open>
    <span slot="header">Profile</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      Tab 1-1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    <span slot="header">Settings</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      Tab 1-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    <span slot="header">Users</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      Tab 1-3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
  <TabItem>
    <span slot="header">Dashboard</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      Tab 1-4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </p>
  </TabItem>
</Tabs>
```

<Htwo label="Tabs with underline" />

Use this alternative tabs component style with an underline instead of a background when hovering and being active on a certain page.

```svelte example
<script>
  import { Tabs, TabHead, TabHeadItem, TabItem } from 'flowbite-svelte';
</script>

<Tabs  tabStyle="underline" underline>
  <TabItem open>
    <span slot="header">Profile</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">Tab 2-1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
  <TabItem>
    <span slot="header">Dashboard</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">Tab 2-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
  <TabItem>
    <span slot="header">Settings</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">Tab 2-3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
  <TabItem>
    <span slot="header">Users</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">Tab 2-4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
</Tabs>
```

<Htwo label="Tabs with icons" />

This is an example of the tabs component where you can also use a SVG powered icon to complement the text within the navigational tabs. 
Use icon components for a simple syntax. See <a href="/icons">Icons</a> for more details.

```svelte example
<script>
  import { Tabs, TabHead, TabHeadItem, TabItem } from 'flowbite-svelte';
</script>

<Tabs tabStyle="underline" underline class="-mb-px">
  <TabItem open>
  <div slot="header" class="flex items-center gap-2">
    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" /></svg>
    Profile
  </div>
  <p class="text-sm text-gray-500 dark:text-gray-400">Tab 3-1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
  <TabItem>
    <div slot="header" class="flex items-center gap-2">
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
      Dashboard
    </div>
    <p class="text-sm text-gray-500 dark:text-gray-400">Tab 3-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
  <TabItem>
    <div slot="header" class="flex items-center gap-2">
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" /></svg>
      Settings
    </div>
    <p class="text-sm text-gray-500 dark:text-gray-400">Tab 3-3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
  <TabItem>
    <div slot="header" class="flex items-center gap-2">
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" /></svg>
      Contacts
    </div>
    <p class="text-sm text-gray-500 dark:text-gray-400">Tab 3-4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
</Tabs>
```

<Htwo label="Pills tabs" />

If you want to use pills as a style for the tabs component use `tabStyle="pill"`.

```svelte example
<script>
  import { Tabs, TabHead, TabHeadItem, TabItem } from 'flowbite-svelte';
</script>

<Tabs tabStyle="pill">
  <TabItem open>
    <span slot="header">Profile</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">Tab 4-1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
  <TabItem>
    <span slot="header">Dashboard</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">Tab 4-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
  <TabItem>
    <span slot="header">Settings</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">Tab 4-3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
  <TabItem>
    <span slot="header">Users</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">Tab 4-4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
</Tabs>
```

<Htwo label="Full width tabs" />

If you want to show the tabs on the full width relative to the parent element use `tabStype="full"` prop.

```svelte example
<script>
  import { Tabs, TabHead, TabHeadItem, TabItem } from 'flowbite-svelte';
</script>

<Tabs tabStyle="full" full>
  <TabItem open>
    <span slot="header">Profile</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">Tab 5-1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
  <TabItem>
    <span slot="header">Dashboard</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">Tab 5-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
  <TabItem>
    <span slot="header">Settings</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">Tab 5-3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
  <TabItem>
    <span slot="header">Users</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">Tab 5-4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
</Tabs>
```

<Htwo label="Disabled tabs" />

To disable a tab, add `disabled` to a `TabHeadItem`.

```svelte example
<script>
  import { Tabs, TabHead, TabHeadItem, TabItem } from 'flowbite-svelte';
  let activeTabValue6 = 1;
  const handleClick6 = (tabValue) => () => {
    alert(`Tab ${tabValue} clicked`);
  };
</script>

<Tabs underline>
  <TabItem on:click={handleClick6(1)} open>
    <span slot="header">Profile</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">Tab 6-1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
  <TabItem on:click={handleClick6(2)} open>
    <span slot="header">Dashboard</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">Tab 6-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
  <TabItem on:click={handleClick6(3)} disabled>
    <span slot="header">Settings (disabled)</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">Tab 6-3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
  <TabItem on:click={handleClick6(4)} disabled>
    <span slot="header">Users (disabled)</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">Tab 6-4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
</Tabs>
```

<Htwo label="Components in tab contents" />

You can add other components to the `TabItem` component. Here we are adding a timeline component in the tab 1:

```svelte example class="h-auto"
<script>
  import { Tabs, TabHead, TabHeadItem, TabItem, Timeline, TimelineItem, Button } from 'flowbite-svelte';
</script>

<Tabs >
  <TabItem open>
    <span slot="header">Profile</span>
    <Timeline>
      <TimelineItem title="Application UI code in Tailwind CSS" date="February 2022">
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar,
          and pre-order E-commerce & Marketing pages.
        </p>
        <Button color="alternative">Learn more
          <svg class="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
        </Button>
      </TimelineItem>
      <TimelineItem title="Application UI code in Tailwind CSS" date="March 2022">
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
      </TimelineItem>
      <TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
      </TimelineItem>
    </Timeline>
  </TabItem>
  <TabItem>
    <span slot="header">Dashboard</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">Tab 7-2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
  <TabItem>
    <span slot="header">Settings</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">Tab 7-3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
  <TabItem>
    <span slot="header">Users</span>
    <p class="text-sm text-gray-500 dark:text-gray-400">Tab 7-4: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </TabItem>
</Tabs>
```

<Htwo label="Custom style" />

For TabHead component, set `tabStyle='custom'`, and your style in `customUlClass='your-css'`, and `customDivClass='your-css'`.

For TabHeadItem component, set `tabStyle='custom'`, and your style in `customActiveClass='your-css'`, and `customInActiveClass='your-css'`.

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <A href="/pages/types">types 
 page</A> for type information.</p>

<h3 class='text-xl w-full dark:text-white py-4'>Tabs</h3>

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

<h3 class='text-xl w-full dark:text-white py-4'>TabItem</h3>

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

<Htwo label="References" />

<P>
  <A href="https://flowbite.com/docs/components/tabs/" target="_blank" class="link"
    >Flowbite Tabs</A>
</P>
    