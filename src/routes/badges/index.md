---
layout: badgeLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Badge, Card, Breadcrumb, BreadcrumbItem } from '$lib/index'
  import { Home, Clock } from 'svelte-heros';
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

<h1 class="text-3xl w-full dark:text-white py-8">Badges</h1>

```html
<script>
  import { Badge } from 'flowbite-svelte'
</script>
```

<Htwo label="Default badge" />
<p>Use the following badge elements to indicate counts or labels inside or outside components.</p>

<ExampleDiv class="justify-start gap-2">
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

<Htwo label="Larger badges" />

<p>Use the <code>large={true}</code> to create a large variant of the badges.</p>

<ExampleDiv class="justify-start gap-2">
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

<ExampleDiv class="justify-start gap-2">
<Badge href="/" >Default</Badge>
<Badge href="/" large={true}>Default</Badge>
</ExampleDiv>


```html
<Badge href="/">Default</Badge>
<Badge href="/" large={true}>Default</Badge>
```

<Htwo label="Badges with icon" />
<p>You can also use SVG icons inside the badge elements.</p>

<ExampleDiv class="justify-start gap-2">
<Badge color="dark" ><Clock class="mr-1 w-3 h-3"/>3 days ago</Badge>
<Badge large={true}><Clock class="mr-1 w-4 h-4"/>2 minutes ago</Badge>
</ExampleDiv>



```html
<script>
  import { Clock } from 'svelte-heros'
</script>

<Badge color="dark"><Clock class="mr-1 w-3 h-3"/>3 days ago</Badge>
<Badge large={true}><Clock class="mr-1 w-4 h-4"/>2 minutes ago</Badge>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>


<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>