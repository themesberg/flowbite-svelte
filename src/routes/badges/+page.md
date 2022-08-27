---
layout: badgeLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Badge, Button, Breadcrumb, BreadcrumbItem } from '$lib'
  import { Home, Clock, Check, Mail } from 'svelte-heros';
  
  import componentProps from '../props/Badge.json'
  // Props table
  let items = componentProps.props
  let propHeader = ['Name', 'Type', 'Default']

	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>Badges</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Badges</h1>

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

<ExampleDiv class="flex gap-2 text-white">
<Badge>Default</Badge>
<Badge color="dark">Dark</Badge>
<Badge color="red">Red</Badge>
<Badge color="green">Green</Badge>
<Badge color="yellow">Yellow</Badge>
<Badge color="indigo">Indigo</Badge>
<Badge color="purple">Purple</Badge>
<Badge color="pink">Pink</Badge>
</ExampleDiv>


```html
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

<ExampleDiv class="flex gap-2">
<Badge large={true}>Default</Badge>
<Badge large={true} color="dark">Dark</Badge>
<Badge large={true} color="red">Red</Badge>
<Badge large={true} color="green">Green</Badge>
<Badge large={true} color="yellow">Yellow</Badge>
<Badge large={true} color="indigo">Indigo</Badge>
<Badge large={true} color="purple">Purple</Badge>
<Badge large={true} color="pink">Pink</Badge>
</ExampleDiv>

```html
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

<ExampleDiv> <!-- Don't use flex. You won't see the size difference -->
<Badge href="/" class="mr-2">Badge link</Badge>
<Badge href="/" large={true}>Badge link</Badge>
</ExampleDiv>


```html
<Badge href="/">Badge link</Badge>
<Badge href="/" large={true}>Badge link</Badge>
```

<Htwo label="Badges with icon" />

You can also use SVG icons inside the badge elements.

<ExampleDiv> <!-- Don't use flex. You won't see the size difference -->
<Badge color="dark" class="mr-2"><Clock class="mr-1 w-3 h-3"/>3 days ago</Badge>
<Badge large={true}><Clock class="mr-1 w-4 h-4"/>2 minutes ago</Badge>
</ExampleDiv>

```html
<Badge color="dark"><Clock class="mr-1 w-3 h-3"/>3 days ago</Badge>
<Badge large={true}><Clock class="mr-1 w-4 h-4"/>2 minutes ago</Badge>
```

<Htwo label="Notification badge" />

You can also use the badge elements as index. Remember to add the `relative` class to parent element.

<ExampleDiv class="flex gap-4">
<Button class="relative" size='sm'>
  <Mail class="w-7 h-7" />
  <span class="sr-only">Notifications</span>
  <Badge rounded index color="!red">20</Badge>
</Button>

<Button class="relative" size='sm'>
  <Mail class="w-7 h-7" />
  <span class="sr-only">Notifications</span>
  <Badge large rounded index color="!green">20</Badge>
</Button>
</ExampleDiv>

```html
<Button class="relative" size='sm'>
  <Mail class="w-7 h-7" />
  <span class="sr-only">Notifications</span>
  <Badge rounded index color="!red">20</Badge>
</Button>

<Button class="relative" size='sm'>
  <Mail class="w-7 h-7" />
  <span class="sr-only">Notifications</span>
  <Badge large rounded index color="!green">20</Badge>
</Button>
```

<Htwo label="Button with badge" />

Use this example to add a badge inside a button component for a count indicator.

<ExampleDiv>
  <Button>
    Messages<Badge rounded class="ml-2 w-5 h-5">2</Badge>
  </Button>
</ExampleDiv>

```html
<Button>
  Messages<Badge rounded class="ml-2 w-5 h-5">2</Badge>
</Button>
```

<Htwo label="Badge with icon only" />

Alternatively you can also use badges which indicate only a SVG icon.

<ExampleDiv> <!-- Don't use flex. You won't see the size difference -->
<Badge rounded ><Check class="w-3 h-3"/></Badge>
<Badge rounded color="dark" ><Check class="w-3 h-3"/></Badge>
<Badge rounded large ><Check class="w-4 h-4"/></Badge>
<Badge rounded large color="dark" ><Check class="w-4 h-4"/></Badge>
</ExampleDiv>

```html
<Badge rounded ><Check class="w-3 h-3"/></Badge>
<Badge rounded color="dark" ><Check class="w-3 h-3"/></Badge>
<Badge rounded large ><Check class="w-4 h-4"/></Badge>
<Badge rounded large color="dark" ><Check class="w-4 h-4"/></Badge>
```

<Htwo label="Dismissable badges" />

Use the `dimissable` attribute to dismiss the current badge.

<ExampleDiv> <!-- Don't use flex. You won't see the size difference -->
<Badge dismissable >Dismissable</Badge>
<Badge dismissable large color="red">Dismissable</Badge>
</ExampleDiv>

```html
<Badge dismissable >Dismissable</Badge>
<Badge dismissable large color="red">Dismissable</Badge>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>