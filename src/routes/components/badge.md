---
layout: componentLayout
title: Svelte Badge - Flowbite
breadcrumb_title: Badge
dir: Components
---


<MetaTags
  title={breadcrumb_title}
  titleTemplate="%s | Flowbite-Svelte"
  description={title}
  facebook={{
  appId: '453670756870545'
}}
openGraph={{
  type: 'website',
  url:`https://flowbite-svelte.com/${dir.toLowerCase()}/${breadcrumb_title.toLowerCase().replaceAll(' ', '-')}`,
    title: `${title}`,
    description: `${title}`,
    images: [
      {
        url: `https://open-graph-vercel.vercel.app/api/flowbite-svelte?title=${breadcrumb_title}`,
        width: 800,
        height: 600,
        alt: `${title}`
      }
    ],
    site_name: 'Flowbite-Svelte'
  }}
  twitter={{
    handle: '@shinokada',
    cardType: 'summary_large_image',
    title: `${title}`,
    description: `${title}`,
    image: `https://open-graph-vercel.vercel.app/api/flowbite-svelte?title=${breadcrumb_title}`,
    imageAlt: `${title}`
  }}
/>

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
import { MetaTags } from 'svelte-meta-tags';
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

<CompoDescription>Use Tailwind CSS badges as elements to show counts or labels separately or inside other components</CompoDescription>

<ExampleDiv>
<GitHubSource href="badges/Badge.svelte">Badge</GitHubSource>
</ExampleDiv>

The badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed by since a comment has been made.

Alternatively, badges can also be used as standalone elements that link to a certain page.

<Htwo label="Setup" />

Import a button component in the script tag.

```html
<script>
	import { Badge } from 'flowbite-svelte';
</script>
```

<Htwo label="Default badge" />

Use the following badge elements to indicate counts or labels inside or outside components.

```svelte example class="flex gap-1" hideScript
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

Use the `large={true}` to create a large variant of the badges.

```svelte example class="flex gap-1" hideScript
<script>
	import { Badge } from 'flowbite-svelte';
</script>
<Badge large={true}>Default</Badge>
<Badge large={true} color="dark">Dark</Badge>
<Badge large={true} color="red">Red</Badge>
<Badge large={true} color="green">Green</Badge>
<Badge large={true} color="yellow">Yellow</Badge>
<Badge large={true} color="indigo">Indigo</Badge>
<Badge large={true} color="purple">Purple</Badge>
<Badge large={true} color="pink">Pink</Badge>
```

<Htwo label="Badges as links" />

You can also use badges as anchor elements to link to another page.

```svelte example hideScript
<script>
	import { Badge } from 'flowbite-svelte';
</script>
<Badge href="/" class="mr-2">Badge link</Badge>
<Badge href="/" large>Badge link</Badge>
```

<Htwo label="Badges with icon" />

You can also use SVG icons inside the badge elements.

```svelte example hideScript
<script>
	import { Badge } from 'flowbite-svelte';
</script>
<Badge color="dark" class="mr-2">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1 w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>3 days ago</Badge>
<Badge large={true}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1 w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>2 minutes ago</Badge>
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
  <Badge rounded index color="!red">20</Badge>
</Button>

<Button class="relative" size='sm'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
  <span class="sr-only">Notifications</span>
  <Badge large rounded index color="!green">20</Badge>
</Button>
```

<Htwo label="Button with badge" />

Use this example to add a badge inside a button component for a count indicator.

```svelte example class="flex gap-4"
<script>
	import { Badge, Button } from 'flowbite-svelte';
</script>

<Button>
  Messages<Badge rounded class="ml-2 w-5 h-5">2</Badge>
</Button>
```

<Htwo label="Badge with icon only" />

Alternatively you can also use badges which indicate only a SVG icon.

```svelte example class="gap-4" hideScript
<script>
	import { Badge } from 'flowbite-svelte';
</script>
<Badge rounded ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></Badge>
<Badge rounded color="dark" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></Badge>
<Badge rounded large ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></Badge>
<Badge rounded large color="dark" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></Badge>
```

<Htwo label="Dismissable badges" />

Use the `dimissable` attribute to dismiss the current badge.

```svelte example class="gap-4" hideScript
<script>
	import { Badge } from 'flowbite-svelte';
</script>

<Badge dismissable >Dismissable</Badge>
<Badge dismissable large color="red">Dismissable</Badge>
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
		