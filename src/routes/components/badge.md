---
layout: componentLayout
title: Svelte Badge - Flowbite
breadcrumb_title: Badge
dir: Components
description: Use Tailwind CSS badges as elements to show counts or labels separately or inside other components
---

<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow, MetaTag } from '../utils'
  
  import { Breadcrumb, BreadcrumbItem, Heading, P, A } from '$lib'
  
  import { props as badgeProps } from '../props/Badge.json'
  // Props table
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

<CompoDescription>{description}</CompoDescription>

<ExampleDiv>
<GitHubSource href="badges/Badge.svelte">Badge</GitHubSource>
</ExampleDiv>

The badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed by since a comment has been made.

Alternatively, badges can also be used as standalone elements that link to a certain page.

<Htwo label="Setup" />

Import a badge component in the script tag.

```html
<script>
	import { Badge } from 'flowbite-svelte';
</script>
```

<Htwo label="Default badge" />

Use the following badge elements to indicate counts or labels inside or outside components.

```svelte example class="flex gap-2" hideScript
<script>
	import { Badge } from 'flowbite-svelte';
</script>
<Badge>Default</Badge>
<Badge color="dark">Dark</Badge>
<Badge color="red">Red</Badge>
<Badge color="green">Green</Badge>
<Badge color="yellow">Yellow</Badge>
<Badge color="indigo">Indigo</Badge>
<Badge color="purple">Purple</Badge>
<Badge color="pink">Pink</Badge>
```

<Htwo label="Large badges" />

Use the `large` prop to create a large variant of the badges.

```svelte example class="flex gap-2" hideScript
<script>
	import { Badge } from 'flowbite-svelte';
</script>
<Badge large>Default</Badge>
<Badge large color="dark">Dark</Badge>
<Badge large color="red">Red</Badge>
<Badge large color="green">Green</Badge>
<Badge large color="yellow">Yellow</Badge>
<Badge large color="indigo">Indigo</Badge>
<Badge large color="purple">Purple</Badge>
<Badge large color="pink">Pink</Badge>
```

<Htwo label="Bordered badge" />

Use the `bordered` prop to add a border accent to the badge component.

```svelte example class="flex gap-2" hideScript
<script>
	import { Badge } from 'flowbite-svelte';
</script>
<Badge bordered>Default</Badge>
<Badge bordered color="dark">Dark</Badge>
<Badge bordered color="red">Red</Badge>
<Badge bordered color="green">Green</Badge>
<Badge bordered color="yellow">Yellow</Badge>
<Badge bordered color="indigo">Indigo</Badge>
<Badge bordered color="purple">Purple</Badge>
<Badge bordered color="pink">Pink</Badge>
```

<Htwo label="Pills badge" />

Use the `rounded` prop to make the corners even more rounded like pills for the badge component.

```svelte example class="flex gap-2" hideScript
<script>
	import { Badge } from 'flowbite-svelte';
</script>
<Badge rounded>Default</Badge>
<Badge rounded color="dark">Dark</Badge>
<Badge rounded color="red">Red</Badge>
<Badge rounded color="green">Green</Badge>
<Badge rounded color="yellow">Yellow</Badge>
<Badge rounded color="indigo">Indigo</Badge>
<Badge rounded color="purple">Purple</Badge>
<Badge rounded color="pink">Pink</Badge>
```

<Htwo label="Badges as links" />

You can also use badges as anchor elements to link to another page.

```svelte example class="flex gap-2" hideScript
<script>
	import { Badge } from 'flowbite-svelte';
</script>
<Badge href="/">Badge link</Badge>
<Badge href="/" large={true}>Badge link</Badge>
<Badge href="/" bordered={true}>Badge link</Badge>
<Badge href="/" rounded={true}>Badge link</Badge>
```

<Htwo label="Badges with icon" />

You can also use SVG icons inside the badge elements.

```svelte example class="flex gap-2" hideScript
<script>
	import { Badge } from 'flowbite-svelte';
</script>
<Badge color="dark" bordered={true}>
  <svg aria-hidden="true" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
  3 days ago
</Badge>
<Badge bordered={true}>
  <svg aria-hidden="true" class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
  2 minutes ago
</Badge>
```

<Htwo label="Notification badge" />

You can also use the badge elements as index. Remember to add the `relative` class to parent element.

```svelte example class="flex gap-4" 
<script>
	import { Badge, Button } from 'flowbite-svelte';
</script>

<Button class="relative" size='sm'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
  <span class="sr-only">Notifications</span>
  <Badge rounded index color="!blue">20</Badge>
</Button>

<Button class="relative" size='sm'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
  <span class="sr-only">Notifications</span>
  <Badge rounded index color="!dark">20</Badge>
</Button>

<Button class="relative" size='sm'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
  <span class="sr-only">Notifications</span>
  <Badge rounded index color="!red">20</Badge>
</Button>

<Button class="relative" size='sm'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
  <span class="sr-only">Notifications</span>
  <Badge rounded index color="!green">20</Badge>
</Button>

<Button class="relative" size='sm'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
  <span class="sr-only">Notifications</span>
  <Badge rounded index color="!yellow">20</Badge>
</Button>

<Button class="relative" size='sm'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
  <span class="sr-only">Notifications</span>
  <Badge rounded index color="!indigo">20</Badge>
</Button>

<Button class="relative" size='sm'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
  <span class="sr-only">Notifications</span>
  <Badge rounded index color="!purple">20</Badge>
</Button>

<Button class="relative" size='sm'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
  <span class="sr-only">Notifications</span>
  <Badge rounded index color="!pink">20</Badge>
</Button>
```

<Htwo label="Button with badge" />

Use this example to add a badge inside a button component for a count indicator.

```svelte example class="flex gap-4"
<script>
	import { Badge, Button } from 'flowbite-svelte';
</script>

<Button>
  Messages
  <Badge rounded class="w-4 h-4 ml-2 !p-0 !font-semibold text-blue-800 bg-blue-200 dark:text-blue-800 dark:bg-blue-200">
    2
  </Badge>
</Button>
```

<Htwo label="Badge with icon only" />

Alternatively you can also use badges which indicate only a SVG icon.

```svelte example hideScript
<script>
	import { Badge } from 'flowbite-svelte';
</script>
<Badge color="dark" rounded large class="!p-1 !font-semibold">
  <svg aria-hidden="true" class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Icon description</span>
</Badge>
<Badge rounded large class="!p-1 !font-semibold">
  <svg aria-hidden="true" class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Icon description</span>
</Badge>
<Badge color="dark" rounded large class="!p-1.5 !font-semibold">
  <svg aria-hidden="true" class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Icon description</span>
</Badge>
<Badge rounded large class="!p-1.5 !font-semibold">
  <svg aria-hidden="true" class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Icon description</span>
</Badge>
```

<Htwo label="Dismissable badges" />

Use the `dimissable` prop to dismiss the current badge.

```svelte example class="gap-4" hideScript
<script>
	import { Badge } from 'flowbite-svelte';
</script>

<Badge dismissable>Default</Badge>
<Badge dismissable color="dark">Dark</Badge>
<Badge dismissable color="red">Red</Badge>
<Badge dismissable color="green">Green</Badge>
<Badge dismissable color="yellow">Yellow</Badge>
<Badge dismissable color="indigo">Indigo</Badge>
<Badge dismissable color="purple">Purple</Badge>
<Badge dismissable color="pink">Pink</Badge>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <A href="/pages/types">types 
 page</A> for type information.

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={badgeProps} rowState='hover' />
</TableProp>

<Htwo label="References" />
		
<P>
  <A href="https://flowbite.com/docs/components/badge/" target="_blank" rel="noreferrer" class="link"
    >Flowbite Badge</A>
</P>
		