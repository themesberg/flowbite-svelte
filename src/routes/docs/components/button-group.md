---
layout: componentLayout
title: Svelte Button Group - Flowbite
breadcrumb_title: Svelte Button Group
component_title: Button group
dir: Components
description: Button groups are a Tailwind CSS powered set of buttons sticked together in a horizontal line
---

<script>
  import { TableProp, TableDefaultRow, DocBadgeList } from '../../utils'
  import { Badge, P, A } from '$lib'
  import { props as buttonGroupProps} from '../../props/ButtonGroup.json'

  const events = ["on:click","on:change","on:keydown","on:keyup","on:focus","on:blur","on:mouseenter","on:mouseleave"];
</script>



The button group component from Flowbite-Svelte can be used to stack together multiple buttons and links inside a single element.

## Setup

```svelte example hideOutput
<script>
  import { ButtonGroup, Button } from 'flowbite-svelte';
</script>
```

## Default

Use the following code to stack together buttons into a single group.

```svelte example hideScript
<script>
  import { ButtonGroup, Button } from 'flowbite-svelte';
</script>
<ButtonGroup>
  <Button>Profile</Button>
  <Button>Settings</Button>
  <Button>Messages</Button>
</ButtonGroup>
```

## More examples

```svelte example hideScript class="flex flex-col flex-wrap gap-4"
<script>
  import { ButtonGroup, Button } from 'flowbite-svelte';
</script>
<div class="text-gray-900 dark:text-gray-100">
  <div class="py-4">Pills</div>
  <ButtonGroup class="space-x-px">
    <Button pill color="purple">Profile</Button>
    <Button pill color="purple">Settings</Button>
    <Button pill color="purple">Messages</Button>
  </ButtonGroup>
  <div class="py-4">Standard buttons</div>
  <ButtonGroup>
    <Button color="red">Profile</Button>
    <Button color="green">Settings</Button>
    <Button color="yellow">Messages</Button>
  </ButtonGroup>
  <div class="py-4">Outline</div>
  <ButtonGroup>
    <Button outline color="red">Profile</Button>
    <Button outline color="green">Settings</Button>
    <Button outline color="yellow">Messages</Button>
  </ButtonGroup>
  <div class="py-4">Gradient with shadows</div>
  <ButtonGroup>
    <Button gradient shadow="green" color="green">Profile</Button>
    <Button gradient shadow="pink" color="pink">Settings</Button>
    <Button gradient shadow="teal" color="teal">Messages</Button>
  </ButtonGroup>
  <div class="py-4">Dualtone gradient</div>
  <ButtonGroup class="space-x-px">
    <Button gradient color="purpleToBlue">Profile</Button>
    <Button gradient color="cyanToBlue">Settings</Button>
    <Button gradient color="greenToBlue">Messages</Button>
  </ButtonGroup>
</div>
```

## Button group as links

You can also use the button group component as links.

```svelte example hideScript
<script>
  import { ButtonGroup, Button } from 'flowbite-svelte';
</script>
<ButtonGroup>
  <Button href="/">Profile</Button>
  <Button href="/">Settings</Button>
  <Button href="/">Messages</Button>
</ButtonGroup>
```

## Group buttons with icons

You can also use SVG icons inside the grouped buttons.

```svelte example hideScript
<script>
  import { ButtonGroup, Button } from 'flowbite-svelte';
</script>
<ButtonGroup>
  <Button>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-purple-500 dark:text-green-500"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
    Profile
  </Button>
  <Button>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-purple-500 dark:text-green-500"><path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" /></svg>
    Settings
  </Button>
  <Button>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-purple-500 dark:text-green-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" /></svg>
    Messages
  </Button>
</ButtonGroup>
```

## Outline

Group a series of buttons together on a single line or stack them in a vertical column.

```svelte example hideScript
<script>
  import { ButtonGroup, Button } from 'flowbite-svelte';
</script>
<ButtonGroup>
  <Button outline color="dark">Profile</Button>
  <Button outline color="dark">Settings</Button>
  <Button outline color="dark">Messages</Button>
</ButtonGroup>
```

## Outline with icon

Group a series of buttons together on a single line or stack them in a vertical column.

```svelte example hideScript
<script>
  import { ButtonGroup, Button } from 'flowbite-svelte';
</script>
<ButtonGroup>
  <Button outline color="dark">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-blue-500 dark:text-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
    Profile
  </Button>
  <Button outline color="dark">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-blue-500 dark:text-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" /></svg>
    Settings
  </Button>
  <Button outline color="dark">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2 text-blue-500 dark:text-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" /></svg>
    Messages
  </Button>
</ButtonGroup>
```

## Events

You can add the `on:click` event to the `Button` component.

```svelte example
<script>
  import { ButtonGroup, Button } from 'flowbite-svelte';
  	const handleClick = ()=> {
		alert('Clicked')
	}
</script>
<ButtonGroup>
  <Button on:click={handleClick}>Click me</Button>
  <Button>Settings</Button>
  <Button>Messages</Button>
</ButtonGroup>
```

## Props

The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types page</A> for type information.

### ButtonGroup

<TableProp>
  <TableDefaultRow items={buttonGroupProps} rowState='hover' />
</TableProp>

## Forwarded Events

<DocBadgeList items={events} />


## References

<P>
  <A href="https://flowbite.com/docs/components/button-group/" target="_blank" rel="noreferrer" class="link"
    >Flowbite Button Group</A
  >
</P>