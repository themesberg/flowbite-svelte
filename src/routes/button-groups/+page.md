---
layout: buttongroupLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Button, ButtonGroup, Breadcrumb, BreadcrumbItem, Badge } from '$lib'
  import { Home, User, Adjustments, CloudDownload } from 'svelte-heros';

  import componentProps from '../props/ButtonGroup.json'

  // Props table
  let items = componentProps.props
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
</ExampleDiv>

The button group component from Flowbite-Svelte can be used to stack together multiple buttons and links inside a single element.

<Htwo label="Setup" />

```html
<script>
  import { ButtonGroup, Button } from 'flowbite-svelte';
  import { User, Adjustments, CloudDownload } from 'svelte-heros';
</script>
```

<Htwo label="Default" />

Use the following code to stack together buttons into a single group.

<ExampleDiv>
  <ButtonGroup>
    <Button>Proflie</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  </ButtonGroup>
</ExampleDiv>

```html
<ButtonGroup>
	<Button>Proflie</Button>
	<Button>Settings</Button>
	<Button>Messages</Button>
</ButtonGroup>
```

<Htwo label="More examples" />

<ExampleDiv>
  <div class="grid grid-cols-2 gap-4 w-fit text-gray-900 dark:text-gray-100">
    <div>Pills</div>
    <ButtonGroup class="space-x-px">
      <Button pill color="purple">Proflie</Button>
      <Button pill color="purple">Settings</Button>
      <Button pill color="purple">Messages</Button>
    </ButtonGroup>
    <div>Standard buttons</div>
    <ButtonGroup>
      <Button color="red">Proflie</Button>
      <Button color="green">Settings</Button>
      <Button color="yellow">Messages</Button>
    </ButtonGroup>
    <div>Outline</div>
    <ButtonGroup>
      <Button outline color="red">Proflie</Button>
      <Button outline color="green">Settings</Button>
      <Button outline color="yellow">Messages</Button>
    </ButtonGroup>
    <div>Gradient with shadows</div>
    <ButtonGroup>
      <Button gradient shadow="green" color="green">Proflie</Button>
      <Button gradient shadow="pink" color="pink">Settings</Button>
      <Button gradient shadow="teal" color="teal">Messages</Button>
    </ButtonGroup>
    <div>Dualtone gradient</div>
    <ButtonGroup class="space-x-px">
      <Button gradient color="purpleToBlue">Profile</Button>
      <Button gradient color="cyanToBlue">Settings</Button>
      <Button gradient color="greenToBlue">Messages</Button>
    </ButtonGroup>
  </div>
</ExampleDiv>

```html
<div class="grid grid-cols-2 gap-4 w-fit text-gray-900 dark:text-gray-100">
  <div>Pills</div>
  <ButtonGroup class="space-x-px">
    <Button pill color="purple">Proflie</Button>
    <Button pill color="purple">Settings</Button>
    <Button pill color="purple">Messages</Button>
  </ButtonGroup>
  <div>Standard buttons</div>
  <ButtonGroup>
    <Button color="red">Proflie</Button>
    <Button color="green">Settings</Button>
    <Button color="yellow">Messages</Button>
  </ButtonGroup>
  <div>Outline</div>
  <ButtonGroup>
    <Button outline color="red">Proflie</Button>
    <Button outline color="green">Settings</Button>
    <Button outline color="yellow">Messages</Button>
  </ButtonGroup>
  <div>Gradient with shadows</div>
  <ButtonGroup>
    <Button gradient shadow="green" color="green">Proflie</Button>
    <Button gradient shadow="pink" color="pink">Settings</Button>
    <Button gradient shadow="teal" color="teal">Messages</Button>
  </ButtonGroup>
  <div>Dualtone gradient</div>
  <ButtonGroup class="space-x-px">
    <Button gradient color="purpleToBlue">Profile</Button>
    <Button gradient color="cyanToBlue">Settings</Button>
    <Button gradient color="greenToBlue">Messages</Button>
  </ButtonGroup>
</div>
```

<Htwo label="Button group as links" />

You can also use the button group component as links.

<ExampleDiv>
	<ButtonGroup>
		<Button href="/">Proflie</Button>
		<Button href="/">Settings</Button>
		<Button href="/">Messages</Button>
	</ButtonGroup>
</ExampleDiv>

```html
<ButtonGroup>
	<Button href="/">Proflie</Button>
	<Button href="/">Settings</Button>
	<Button href="/">Messages</Button>
</ButtonGroup>
```

<Htwo label="Group buttons with icons" />

You can also use SVG icons inside the grouped buttons.

<ExampleDiv>
	<ButtonGroup>
		<Button>
			<User size="18" class="mr-2 text-purple-500 dark:text-green-500" />
			Proflie
		</Button>
		<Button>
			<Adjustments size="18" class="mr-2 text-purple-500 dark:text-green-500" />
			Settings
		</Button>
		<Button>
			<CloudDownload size="18" class="mr-2 text-purple-500 dark:text-green-500" />
			Messages
		</Button>
	</ButtonGroup>
</ExampleDiv>


```html
<ButtonGroup>
	<Button>
		<User size="18" class="mr-2 text-purple-500 dark:text-green-500" />
		Proflie
	</Button>
	<Button>
		<Adjustments size="18" class="mr-2 text-purple-500 dark:text-green-500" />
		Settings
	</Button>
	<Button>
		<CloudDownload size="18" class="mr-2 text-purple-500 dark:text-green-500" />
		Messages
	</Button>
</ButtonGroup>
```

<Htwo label="Outline" />

Group a series of buttons together on a single line or stack them in a vertical column.

<ExampleDiv class="flex flex-col gap-4">
  <ButtonGroup>
    <Button outline color="dark">Proflie</Button>
    <Button outline color="dark">Settings</Button>
    <Button outline color="dark">Messages</Button>
  </ButtonGroup>
</ExampleDiv>

```html
<ButtonGroup>
	<Button outline color="dark">Proflie</Button>
	<Button outline color="dark">Settings</Button>
	<Button outline color="dark">Messages</Button>
</ButtonGroup>
```

<Htwo label="Outline with icon" />

Group a series of buttons together on a single line or stack them in a vertical column.

<ExampleDiv>
  <ButtonGroup>
    <Button outline color="dark">
      <User size="18" class="mr-2 text-blue-500 dark:text-red-500" />
      Proflie
    </Button>
    <Button outline color="dark">
      <Adjustments size="18" class="mr-2 text-blue-500 dark:text-red-500" />
      Settings
    </Button>
    <Button outline color="dark">
      <CloudDownload size="18" class="mr-2 text-blue-500 dark:text-red-500" />
      Messages
    </Button>
  </ButtonGroup>
</ExampleDiv>

```html
<ButtonGroup>
  <Button outline color="dark">
    <User size="18" class="mr-2 text-blue-500 dark:text-red-500" />
    Proflie
  </Button>
  <Button outline color="dark">
    <Adjustments size="18" class="mr-2 text-blue-500 dark:text-red-500" />
    Settings
  </Button>
  <Button outline color="dark">
    <CloudDownload size="18" class="mr-2 text-blue-500 dark:text-red-500" />
    Messages
  </Button>
</ButtonGroup>
```

<Htwo label="Events" />

You can add the `on:click` event to the `Button` component.

<ExampleDiv>
  <ButtonGroup>
    <Button on:click={handleClick}>Click me</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  </ButtonGroup>
</ExampleDiv>

```html
<ButtonGroup>
	<Button on:click={handleClick}>Click me</Button>
	<Button>Settings</Button>
	<Button>Messages</Button>
</ButtonGroup>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types page</a> for type information.

<h3 class='text-xl w-full dark:text-white py-4'>ButtonGroup</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
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