---
layout: badgeLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Badge, Button, Breadcrumb, BreadcrumbItem } from '$lib/index'
  import Dot from '$lib/avatar/Dot.svelte';
  import { Home, Clock, Check, Mail } from 'svelte-heros';
  import componentProps from '../props/Badge.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
	let divClass = 'max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';

</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Badges</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Badges</h1>

```html
<script>
  import { Badge } from 'flowbite-svelte'
  import { Clock, Check } from 'svelte-heros'
</script>
```

<Htwo label="Default badge" />
<p>Use the following badge elements to indicate counts or labels inside or outside components.</p>

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

<p>Use the <code>large={true}</code> to create a large variant of the badges.</p>

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
<p>You can also use badges as anchor elements to link to another page.</p>

<ExampleDiv> <!-- Don't use flex. You won't see the size difference -->
<Badge href="/" class="mr-2">Badge link</Badge>
<Badge href="/" large={true}>Badge link</Badge>
</ExampleDiv>


```html
<Badge href="/">Badge link</Badge>
<Badge href="/" large={true}>Badge link</Badge>
```

<Htwo label="Badges with icon" />
<p>You can also use SVG icons inside the badge elements.</p>

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

<p>Alternatively you can also use badges which indicate only a SVG icon.</p>

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

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>


<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>