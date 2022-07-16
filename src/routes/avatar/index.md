---
layout: avatarLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Avatar, Breadcrumb, BreadcrumbItem } from "$lib/index"
  import { Home } from 'svelte-heros'
  import alertProp from '../props/Avatar.json'
  // Props table
  export let items = alertProp.props
	let propHeader = ['Name', 'Type', 'Default']

	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Avatar</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Avatar</h1>

<Htwo label="Default avatar" />

<p>Use this example to create a circle and rounded avatar on an image element.</p>

<ExampleDiv>
<div class="flex space-x-4">
<Avatar src="/images/profile-picture-2.webp"/>
<Avatar src="/images/profile-picture-2.webp" rounded/>
</div>
</ExampleDiv>

```html
<script>
	import { Avatar } from 'flowbite-svelte';
</script>

	 <Avatar src="/images/profile-picture-2.webp"/>
	 <Avatar src="/images/profile-picture-2.webp" rounded/>
```

<Htwo label="Bordered" />

<p>You can apply a border around the avatar component</p>
<p>If you can use the ring-&#123;color&#125; class from Tailwind CSS to modify ring color.</p>

<ExampleDiv>
<div class="flex space-x-4">
<Avatar src="/images/profile-picture-2.webp" border/>
<Avatar src="/images/profile-picture-2.webp" border class="ring-red-400 dark:ring-red-300"/>
</div>
</ExampleDiv>

```html
<Avatar src="/images/profile-picture-2.webp" border />
<Avatar src="/images/profile-picture-2.webp" border class="ring-red-400 dark:ring-red-300" />
```

<Htwo label="Placeholder" />

<p>When there is no custom image available a placehoder is displayed.</p>

<ExampleDiv>
<div class="flex space-x-4">
  <Avatar />
  <Avatar rounded />
  <Avatar border />
  <Avatar rounded border />
</div>
</ExampleDiv>

```html
<Avatar />
<Avatar rounded />
<Avatar border />
<Avatar rounded border />
```

<Htwo label="Dot indicator" />

<p>Use a dot element relative to the avatar component as an indicator for the user (eg. online or offline status).</p>

<ExampleDiv>
<div class="flex space-x-4 flex-wrap">
  <Avatar src="/images/profile-picture-3.webp" dot={{top:true, color:"bg-red-400"}}/>
  <Avatar src="/images/profile-picture-3.webp" dot={{top:true, color:"bg-red-400"}} rounded />
  <Avatar src="/images/profile-picture-3.webp" dot={{color:"bg-green-400"}}/>
  <Avatar src="/images/profile-picture-3.webp" dot={{color:"bg-green-400"}} rounded/>
  <!-- for positioning tests purpose
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-red-400" border />
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="sm"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" rounded size="sm"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="sm"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="sm" dotTop/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" rounded dotTop size="sm"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="xs"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" rounded size="xs"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="xs"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="xs" dotTop/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" rounded dotTop size="xs"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="lg"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" rounded size="lg"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="lg"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="lg" dotTop/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" rounded dotTop size="lg"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="xl"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" rounded size="xl"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="xl"/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" size="xl" dotTop/>
  <Avatar src="/images/profile-picture-3.webp" dotColor="bg-green-400" rounded dotTop size="xl"/>
  -->
</div>
</ExampleDiv>

```html
<script>
	<Avatar src="/images/profile-picture-3.webp" dot={{top:true, color:"bg-red-400"}}/>
	<Avatar	src="/images/profile-picture-3.webp" dot={{top:true, color:"bg-red-400"}} rounded />
	<Avatar	src="/images/profile-picture-3.webp" dot={{color:"bg-green-400"}}/>
	<Avatar	src="/images/profile-picture-3.webp" dot={{color:"bg-green-400"}} rounded/>
</script>
```

<Htwo label="Stacked" />

<p>Use this example if you want to stack a group of users by overlapping the avatar components.</p>

<ExampleDiv>
<div class="flex mb-5">
<Avatar src="/images/profile-picture-1.webp" stacked/>
<Avatar src="/images/profile-picture-2.webp" stacked />
<Avatar src="/images/profile-picture-3.webp" stacked />
<Avatar stacked />
</div>
<div class="flex">
<Avatar src="/images/profile-picture-1.webp" stacked />
<Avatar src="/images/profile-picture-2.webp" stacked />
<Avatar src="/images/profile-picture-3.webp" stacked />
<Avatar stacked href="/">+99</Avatar>
</div>
</ExampleDiv>

```html
<div class="flex mb-5">
	<Avatar src="/images/profile-picture-1.webp" stacked />
	<Avatar src="/images/profile-picture-2.webp" stacked />
	<Avatar src="/images/profile-picture-3.webp" stacked />
	<Avatar stacked />
</div>
<div class="flex">
	<Avatar src="/images/profile-picture-1.webp" stacked />
	<Avatar src="/images/profile-picture-2.webp" stacked />
	<Avatar src="/images/profile-picture-3.webp" stacked />
	<Avatar stacked href="/">+99</Avatar>
</div>
```

<Htwo label="Avatar text" />

<p>This example can be used if you want to show additional information in the form of text elements such as the user’s name and join date.</p>

<ExampleDiv>
<div class="flex items-center space-x-4">
    <Avatar src="/images/profile-picture-1.webp" rounded/>
    <div class="space-y-1 font-medium dark:text-white">
        <div>Jese Leos</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
    </div>
</div>
</ExampleDiv>

```html
<div class="flex items-center space-x-4">
	<Avatar src="/images/profile-picture-1.webp" rounded />
	<div class="space-y-1 font-medium dark:text-white">
		<div>Jese Leos</div>
		<div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
	</div>
</div>
```

<Htwo label="Sizes" />

<p>Select size from  xs | sm | md | lg | xl.</p>

<ExampleDiv>
<div class=" flex flex-wrap justify-center space-x-4">
<Avatar src="/images/profile-picture-3.webp" rounded size="xs" />
<Avatar src="/images/profile-picture-3.webp" rounded size="sm" />
<Avatar src="/images/profile-picture-3.webp" rounded size="md" />
<Avatar src="/images/profile-picture-3.webp" rounded size="lg" />
<Avatar src="/images/profile-picture-3.webp" rounded size="xl" />
</div>
</ExampleDiv>

```html
<Avatar src="/images/profile-picture-3.webp" rounded size="xs" />
<Avatar src="/images/profile-picture-3.webp" rounded size="sm" />
<Avatar src="/images/profile-picture-3.webp" rounded size="md" />
<Avatar src="/images/profile-picture-3.webp" rounded size="lg" />
<Avatar src="/images/profile-picture-3.webp" rounded size="xl" />
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
<TableDefaultRow {items} rowState='hover' />
</TableProp>
