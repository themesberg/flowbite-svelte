---
layout: buttongroupLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import {ButtonGroup, ButtonGroupItem, Breadcrumb, BreadcrumbItem, Badge } from '$lib'
	import { Home, User, Adjustments, CloudDownload } from 'svelte-heros';
	
  import componentProps from '../props/ButtonGroup.json'
  import componentProps2 from '../props/ButtonGroupItem.json'
  // Props table
  let items = componentProps.props
  let items2 = componentProps2.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

	const handleClick = ()=> {
		alert('Clicked')
	}
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Button groups</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Button group</h1>

<CompoDescription>Button groups are a Tailwind CSS powered set of buttons sticked together in a horizontal line</CompoDescription>

<ExampleDiv>
<GitHubSource href="buttongroups/ButtonGroup.svelte">ButtonGroup</GitHubSource>
<GitHubSource href="buttongroups/ButtonGroupItem.svelte">ButtonGroupItem</GitHubSource>
</ExampleDiv>

The button group component from Flowbite-Svelte can be used to stack together multiple buttons and links inside a single element.

<Htwo label="Setup" />

```html
<script>
  import { ButtonGroup, ButtonGroupItem } from 'flowbite-svelte';
  import { User, Adjustments, CloudDownload } from 'svelte-heros';
</script>
```

<Htwo label="Default" />

Use the following code to stack together buttons into a single group.

<ExampleDiv>
<ButtonGroup>
	<ButtonGroupItem>Proflie</ButtonGroupItem>
	<ButtonGroupItem>Settings</ButtonGroupItem>
	<ButtonGroupItem>Messages</ButtonGroupItem>
</ButtonGroup>
</ExampleDiv>


```html
<ButtonGroup>
	<ButtonGroupItem>Proflie</ButtonGroupItem>
	<ButtonGroupItem>Settings</ButtonGroupItem>
	<ButtonGroupItem>Messages</ButtonGroupItem>
</ButtonGroup>
```

<Htwo label="Button group as links" />

You can also use the button group component as links.

<ExampleDiv>
<ButtonGroup>
	<ButtonGroupItem href="/">Proflie</ButtonGroupItem>
	<ButtonGroupItem href="/">Settings</ButtonGroupItem>
	<ButtonGroupItem href="/">Messages</ButtonGroupItem>
</ButtonGroup>
</ExampleDiv>

```html
<ButtonGroup>
	<ButtonGroupItem href="/">Proflie</ButtonGroupItem>
	<ButtonGroupItem href="/">Settings</ButtonGroupItem>
	<ButtonGroupItem href="/">Messages</ButtonGroupItem>
</ButtonGroup>
```

<Htwo label="Group buttons with icons" />

You can also use SVG icons inside the grouped buttons.

<ExampleDiv>
<ButtonGroup>
	<ButtonGroupItem>
		<User size="18" class="mr-2 text-purple-500 dark:text-green-500" />
		Proflie</ButtonGroupItem
	>
	<ButtonGroupItem>
		<Adjustments size="18" class="mr-2 text-purple-500 dark:text-green-500" />
		Settings</ButtonGroupItem
	>
	<ButtonGroupItem>
		<CloudDownload size="18" class="mr-2 text-purple-500 dark:text-green-500" />
		Messages</ButtonGroupItem
	>
</ButtonGroup>
</ExampleDiv>


```html
<ButtonGroup>
	<ButtonGroupItem>
		<User size="18" class="mr-2 text-purple-500 dark:text-green-500" />
		Proflie</ButtonGroupItem
	>
	<ButtonGroupItem>
		<Adjustments size="18" class="mr-2 text-purple-500 dark:text-green-500" />
		Settings</ButtonGroupItem
	>
	<ButtonGroupItem>
		<CloudDownload size="18" class="mr-2 text-purple-500 dark:text-green-500" />
		Messages</ButtonGroupItem
	>
</ButtonGroup>
```

<Htwo label="Outline" />

Group a series of buttons together on a single line or stack them in a vertical column.

<ExampleDiv>
<ButtonGroup>
	<ButtonGroupItem outline>Proflie</ButtonGroupItem>
	<ButtonGroupItem outline>Settings</ButtonGroupItem>
	<ButtonGroupItem outline>Messages</ButtonGroupItem>
</ButtonGroup>
</ExampleDiv>

```html
<ButtonGroup>
	<ButtonGroupItem outline>Proflie</ButtonGroupItem>
	<ButtonGroupItem outline>Settings</ButtonGroupItem>
	<ButtonGroupItem outline>Messages</ButtonGroupItem>
</ButtonGroup>
```

<Htwo label="Outline with icon" />

Group a series of buttons together on a single line or stack them in a vertical column.

<ExampleDiv>
<ButtonGroup>
	<ButtonGroupItem outline>
		<User size="18" class="mr-2 text-blue-500 dark:text-red-500" />
		Proflie</ButtonGroupItem
	>
	<ButtonGroupItem outline>
		<Adjustments size="18" class="mr-2 text-blue-500 dark:text-red-500" />
		Settings</ButtonGroupItem
	>
	<ButtonGroupItem outline>
		<CloudDownload size="18" class="mr-2 text-blue-500 dark:text-red-500" />
		Messages</ButtonGroupItem
	>
</ButtonGroup>
</ExampleDiv>

```html
<ButtonGroup>
	<ButtonGroupItem outline>
		<User size="18" class="mr-2 text-blue-500 dark:text-red-500" />
		Proflie</ButtonGroupItem
	>
	<ButtonGroupItem outline>
		<Adjustments size="18" class="mr-2 text-blue-500 dark:text-red-500" />
		Settings</ButtonGroupItem
	>
	<ButtonGroupItem outline>
		<CloudDownload size="18" class="mr-2 text-blue-500 dark:text-red-500" />
		Messages</ButtonGroupItem
	>
</ButtonGroup>
```

<Htwo label="Events" />

You can add the `on:click` event to the `ButtonGroupItem` component.

<ExampleDiv>
<ButtonGroup>
	<ButtonGroupItem on:click={handleClick}>Click me</ButtonGroupItem>
	<ButtonGroupItem>Settings</ButtonGroupItem>
	<ButtonGroupItem>Messages</ButtonGroupItem>
</ButtonGroup>
</ExampleDiv>

```html
<ButtonGroup>
	<ButtonGroupItem on:click={handleClick}>Click me</ButtonGroupItem>
	<ButtonGroupItem>Settings</ButtonGroupItem>
	<ButtonGroupItem>Messages</ButtonGroupItem>
</ButtonGroup>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types page</a> for type information.

<h3 class='text-xl w-full dark:text-white py-4'>ButtonGroup</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>ButtonGroupItem</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>


<Htwo label="Forwarded Events" />

<div class="flex flex-wrap gap-2">
<Badge large={true}>on:click</Badge>
<Badge large={true}>on:change</Badge>
<Badge large={true}>on:keydown</Badge>
<Badge large={true}>on:keyup</Badge>
<Badge large={true}>on:focus</Badge>
<Badge large={true}>on:blur</Badge>
<Badge large={true}>on:mouseenter</Badge>
<Badge large={true}>on:mouseleave</Badge>
</div>