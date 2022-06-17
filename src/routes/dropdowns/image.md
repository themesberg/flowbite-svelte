---
layout: dropdownLayout
---

<script lang="ts">
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { ImgDropdown, Avatar, Breadcrumb } from '$lib/index';
  import componentProps from '../props/ImgDropdown.json'
  // Props table
  export let dropdownItems = componentProps.props
  let propHeader = ['Name', 'Type', 'Default']
  
 let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
  let avatar = {
    src: '/images/profile-picture-1.webp',
    alt: 'My avatar',
    size: 12,
    border: true,
    round: true
  };
  let items = [
    {
      href: '/',
      name: 'Dashboard'
    },
    {
      href: '/',
      name: 'Settings'
    },
    {
      href: '/',
      name: 'Sign out'
    }
  ];
  let items2 = [
    {
      href: '/',
      name: 'Dashboard',
      divider:true
    },
    {
      href: '/',
      name: 'Settings'
    },
    {
      href: '/',
      name: 'Sign out'
    }
  ];
  let dropdownClass =
    'hidden absolute top-14 z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700';
  let dropdownClass2 =
    'absolute top-14 z-10 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700';
  
  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Dropdown',
      href:'/dropdowns/'
    },
    {
      label:'Image dropdown',
      href:'/dropdowns/image'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Dropdown with Image</h1>

<p>You can use an image or Avatar component with `ImgDropdown`.</p>

<Htwo label="Examples" />

<ExampleDiv>
<ImgDropdown {items}>
  <Avatar {avatar} />
</ImgDropdown>
</ExampleDiv>

```html
<script>
  import { ImgDropdown, Avatar } from 'flowbite-svelte';
  
  let avatar = {
    src: '/images/profile-picture-1.webp',
    alt: 'My avatar',
    size: 12,
    border: true,
    round: true
  };
  let items = [
    {
      href: '/',
      name: 'Dashboard'
    },
    {
      href: '/',
      name: 'Settings'
    },
    {
      href: '/',
      name: 'Sign out'
    }
  ];
  
</script>
```

<Htwo label="Dropdown position right" />

<p>You can change the dropdown position to the right by adjusting the `dropdownClass` and add a divider.</p>

<ExampleDiv>
  <ImgDropdown items={items2} {dropdownClass} >
    <Avatar {avatar} />
  </ImgDropdown>
</ExampleDiv>

```html
<script>
  ...
  let items2 = [
    {
      href: '/',
      name: 'Dashboard',
      divider:true
    },
    {
      href: '/',
      name: 'Settings'
    },
    {
      href: '/',
      name: 'Sign out'
    }
  ];
  let dropdownClass = 'hidden absolute left-10 top-14 z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700';
</script>

<ImgDropdown items={items2} {dropdownClass}>
  <Avatar {avatar} />
</ImgDropdown>
```

<Htwo label="Dropdown position left" />

<p>Let's move the dropdown to left and add a header.</p>

<ExampleDiv>
  <ImgDropdown {items} divClass="relative flex justify-end" dropdownClass={dropdownClass2}>
    <div slot="header">
      <span class="block text-sm">Bonnie Green</span>
      <span class="block text-sm font-medium truncat">name@flowbite.com</span>
    </div>
    <Avatar {avatar} />
  </ImgDropdown>
</ExampleDiv>

```html
<script>
  let dropdownClass2 ='absolute top-14 z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700';
</script>

  <ImgDropdown {items} divClass="relative flex justify-end" >
    <div slot="header">
      <span class="block text-sm">Bonnie Green</span>
      <span class="block text-sm font-medium truncat">name@flowbite.com</span>
    </div>
    <Avatar {avatar} />
  </ImgDropdown>
```

<p>You can use an image.</p>

<ExampleDiv>
  <ImgDropdown {items}>
    <img src="/images/profile-picture-3.webp" width='50' alt="something" />
  </ImgDropdown>
</ExampleDiv>

```html
<ImgDropdown {items}>
  <img src="/images/profile-picture-3.webp" width='50' alt="something"/>
</ImgDropdown>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={dropdownItems} rowState='hover' />
</TableProp>
