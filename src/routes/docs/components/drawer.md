---
layout: componentLayout
title: Svelte Drawer (Off-canvas) - Flowbite
breadcrumb_title: Svelte Drawer
component_title: Drawer
dir: Components
description: The Drawer component can be used as a hidden off-canvas sidebar for navigation and to show other information based on multiple styles and placements
---

<script>
  import { TableProp, TableDefaultRow, } from '../../utils'
  import { Heading, P, A } from '$lib';
  import { props as items} from '../../props/Drawer.json'
</script>



Use the Drawer component (or “off-canvas”) to show a fixed element relative to the document page from any side for navigation, contact forms, informational purposes or other user actions.

## Set up

```svelte example hideOutput
<script>
  import { Drawer, Button, CloseButton } from 'flowbite-svelte';
  import { sineIn } from 'svelte/easing';
</script>
```

## Default drawer

To initiate the drawer component you need to set the `let hidden=true`, `width` props to the drawer component itself.

For accessibility you should also set the `id` prop to the element. This will add the drawer `aria-labelledby=id` and `aria-controls=id` to the drawer component.

```svelte example
<script>
  import { Drawer, Button, CloseButton } from 'flowbite-svelte';
  import { sineIn } from 'svelte/easing';
  let hidden1 = true; 
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
</script>

<div class="text-center">
  <Button on:click={() => (hidden1 = false)}>Show drawer</Button>
</div>

<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden1} id='sidebar1'>
<div class='flex items-center'>
  <h5
    id="drawer-label"
    class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
    <svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>Info
  </h5>
  <CloseButton on:click={() => (hidden1 = true)} class='mb-4 dark:text-white'/>
    </div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a
      href="/"
      class="text-blue-600 underline dark:text-blue-500 hover:no-underline">limited-time sale</a> for
    Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design
    job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" >Get access <svg class="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></Button>
  </div>
</Drawer>
```

## Drawer navigation

Use this example to show a navigational sidebar inside the drawer component.

```svelte example
<script>
  import { Drawer, Button, CloseButton, Sidebar, SidebarBrand, SidebarCta, SidebarDropdownItem, SidebarDropdownWrapper, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
  import { sineIn } from 'svelte/easing';
  let hidden2 = true;
  let spanClass = 'flex-1 ml-3 whitespace-nowrap';
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
</script>
<div class="text-center">
  <Button on:click={() => (hidden2 = false)}>Show navigation</Button>
</div>
<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden2} id='sidebar2'>
<div class='flex items-center'>
  <h5 id="drawer-navigation-label-3" class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
  <CloseButton on:click={() => (hidden2 = true)} class='mb-4 dark:text-white'/>
</div>
  <Sidebar>
    <SidebarWrapper divClass='overflow-y-auto py-4 px-3 rounded dark:bg-gray-800'>
      <SidebarGroup>
        <SidebarItem label="Dashboard">
          <svelte:fragment slot="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>
          </svelte:fragment>
        </SidebarItem>
        <SidebarDropdownWrapper label="E-commerce">
          <svelte:fragment slot="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
          </svelte:fragment>
          <SidebarDropdownItem label="Products" />
          <SidebarDropdownItem label="Billing" />
          <SidebarDropdownItem label="Invoice" />
        </SidebarDropdownWrapper>
        <SidebarItem label="Kanban" {spanClass}>
          <svelte:fragment slot="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>
          </svelte:fragment>
          <svelte:fragment slot="subtext">
            <span
              class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
              >Pro</span>
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Inbox" {spanClass}>
          <svelte:fragment slot="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3" /></svg>
          </svelte:fragment>
          <svelte:fragment slot="subtext">
            <span
              class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
              >3</span>
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Users">
          <svelte:fragment slot="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Sign In">
          <svelte:fragment slot="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" /></svg>
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Sign Up">
          <svelte:fragment slot="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" /></svg>
          </svelte:fragment>
        </SidebarItem>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
</Drawer>
```

## Contact form

Use this example to show a contact form inside the drawer component.

```svelte example
<script>
  import { Drawer, Button, CloseButton, Label, Input, Textarea, P, A, Checkbox } from 'flowbite-svelte'
  import { sineIn } from 'svelte/easing';

  let hidden3 = true;
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
</script>

<div class="text-center">
  <Button on:click={() => (hidden3 = false)}>Show contact form</Button>
</div>
<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden3} id='sidebar3'>
<div class='flex items-center'>
  <h5 id="drawer-label" class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"><svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>Contact us</h5>
  <CloseButton on:click={() => (hidden3 = true)} class='mb-4 dark:text-white'/>
</div>
   <form action="#" class="mb-6">
      <div class="mb-6">
        <Label for='email' class='block mb-2'>Your email</Label>
        <Input id='email' name='email' required placeholder="name@company.com" />
      </div>
       <div class="mb-6">
        <Label for='subject' class='block mb-2'>Subject</Label>
        <Input id='subject' name='subject' required placeholder="Let us know how we can help you" />
      </div>
      <div class="mb-6">
        <Label for="message" class="mb-2">Your message</Label>
        <Textarea id="message" placeholder="Your message..." rows="4" name="message"/>
      </div>
      <Button type="submit" class='w-full'>Send message</Button>
   </form>
   <P class="mb-2 text-sm text-gray-500 dark:text-gray-400">
      <A href='/' class="hover:underline">info@company.com</A>
   </P>
   <P class="text-sm text-gray-500 dark:text-gray-400">
      <A href='/' class="hover:underline">212-456-7890</A>
   </P>
</Drawer>
```

## Form elements

Use this example if you want to add form elements inside the drawer component including datepickers.

```svelte example
<script>
  import { Drawer, Button, CloseButton, Label, Input, Textarea } from 'flowbite-svelte'
  import { sineIn } from 'svelte/easing';

  let hidden4 = true;
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
</script>

<div class="text-center">
  <Button on:click={() => (hidden4 = false)}>Show drawer form</Button>
</div>
<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden4} id='sidebar4'>
  <div class='flex items-center'>
    <h5 id="drawer-label" class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"><svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>New event</h5>
    <CloseButton on:click={() => (hidden4 = true)} class='mb-4 dark:text-white'/>
  </div>
   <form action="#" class="mb-6">
    <div class="mb-6">
      <Label for='title' class='block mb-2'>Title</Label>
      <Input id='title' name='title' required placeholder="Apple Keynote" />
    </div>
    <div class="mb-6">
      <Label for="description" class="mb-2">Description</Label>
      <Textarea id="message" placeholder="Write event description..." rows="4" name="message"/>
    </div>
    <div class="mb-6">
      <Input id='date' name='date' required type='date' />
    </div>
    <div class='mb-4'>
      <div class="relative">
        <Input noBorder id="search" placeholder="Add guest email" class="p-3">
        </Input>
        <Button textSize="text-sm" class="absolute inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-blue-700 rounded-lg right-2 bottom-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit"><svg class="w-4 h-4 mr-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>Add</Button>
      </div>
    </div>
      <div class="flex mb-4 -space-x-4">
         <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/images/profile-picture-1.webp" alt="">
         <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/images/profile-picture-2.webp" alt="">
         <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/images/profile-picture-3.webp" alt="">
         <img class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="/images/profile-picture-4.webp" alt="">
      </div>
      <Button type="submit" class="w-full"><svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg> Create event</Button>
   </form>
</Drawer>
```

## Placement

Use the placement prop to position the drawer component either on the top, right, bottom, or left side of the document page. This can be done using the `placement='left|right|top|bottom'` where the default value is “left”.

<Heading tag="h3" customSize="text-xl font-semibold" class='my-4'>Left drawer</Heading>

```svelte example
<script>
  import { Drawer, Button, CloseButton, Label, Input, Textarea } from 'flowbite-svelte'
  import { sineIn } from 'svelte/easing';

  let hidden5 = true;
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
</script>

<div class="text-center">
  <Button on:click={() => (hidden5 = false)}>Show drawer</Button>
</div>

<Drawer placement='left' transitionType="fly" {transitionParams} bind:hidden={hidden5} id='sidebar5'>
<div class='flex items-center'>
  <h5
    id="drawer-label"
    class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
    <svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>Info
  </h5>
  <CloseButton on:click={() => (hidden5 = true)} class='mb-4 dark:text-white'/>
    </div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a
      href="/"
      class="text-blue-600 underline dark:text-blue-500 hover:no-underline">limited-time sale</a> for
    Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design
    job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" >Get access <svg class="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></Button>
  </div>
</Drawer>
```

<Heading tag="h3" customSize="text-xl font-semibold" class='my-4'>Right drawer</Heading>

Use this example to show the drawer component on the right side of the page.

Set the `transitionParams` variable to new variables.

```svelte example
<script>
  import { Drawer, Button, CloseButton } from 'flowbite-svelte'
  import { sineIn } from 'svelte/easing';

  let hidden6 = true;
  let transitionParamsRight = {
    x: 320,
    duration: 200,
    easing: sineIn
  };
</script>

<div class="text-center">
  <Button on:click={() => (hidden6 = false)}>Show drawer</Button>
</div>

<Drawer placement='right' transitionType="fly" transitionParams={transitionParamsRight} bind:hidden={hidden6} id='sidebar6'>
<div class='flex items-center'>
  <h5
    id="drawer-label"
    class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
    <svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>Info
  </h5>
  <CloseButton on:click={() => (hidden6 = true)} class='mb-4 dark:text-white'/>
    </div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a
      href="/"
      class="text-blue-600 underline dark:text-blue-500 hover:no-underline">limited-time sale</a> for
    Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design
    job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" >Get access <svg class="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></Button>
  </div>
</Drawer>
```

<Heading tag="h3" customSize="text-xl font-semibold" class='my-4'>Top drawer</Heading>

Use this example to show the drawer on the top side of the page.

```svelte example
<script>
  import { Drawer, Button, CloseButton, A } from 'flowbite-svelte'
  import { sineIn } from 'svelte/easing';

  let hidden7 = true;
  let transitionParamsTop = {
    y: -320,
    duration: 200,
    easing: sineIn
  };
</script>

<div class="text-center">
  <Button on:click={() => (hidden7 = false)}>Show drawer</Button>
</div>

<Drawer placement='top' width='w-full' transitionType="fly" transitionParams={transitionParamsTop} bind:hidden={hidden7} id='sidebar7'>
<div class='flex items-center'>
  <h5
    id="drawer-label"
    class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
    <svg
      class="mr-2 w-5 h-5"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clip-rule="evenodd" /></svg
    >Top drawer
  </h5>
  <CloseButton on:click={() => (hidden7 = true)} class='mb-4 dark:text-white'/>
    </div>
  <p class="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <A
      href="/" >limited-time sale</A> for
    Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design
    job board.
  </p>
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" class='ml-2' >Get access <svg class="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></Button>
</Drawer>
```

<Heading tag="h3" customSize="text-xl font-semibold" class='my-4'>Bottom drawer</Heading>

Use this example to show the drawer on the bottom side of the page.

```svelte example
<script>
  import { Drawer, Button, CloseButton, A } from 'flowbite-svelte'
  import { sineIn } from 'svelte/easing';

  let hidden8 = true;
  let transitionParamsBottom = {
    y: 320,
    duration: 200,
    easing: sineIn
  };
</script>

<div class="text-center">
  <Button on:click={() => (hidden8 = false)}>Show drawer</Button>
</div>

<Drawer placement='bottom' width='w-full' transitionType="fly" transitionParams={transitionParamsBottom} bind:hidden={hidden8} id='sidebar8'>
<div class='flex items-center'>
  <h5
    id="drawer-label"
    class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
    <svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>Info
  </h5>
  <CloseButton on:click={() => (hidden8 = true)} class='mb-4 dark:text-white'/>
    </div>
  <p class="max-w-lg mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a
      href="/"
      class="text-blue-600 underline dark:text-blue-500 hover:no-underline">limited-time sale</a> for
    Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design
    job board.
  </p>
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" class='ml-2'>Get access <svg class="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></Button>
</Drawer>
```

## Backdrop

The backdrop element can be used to dim out the background elements when the drawer is visible and also automatically hide the component when clicking outside of it.

Use the `backdrop="false|true"` prop where you can disable or enable the backdrop element.

<Heading tag="h3" customSize="text-xl font-semibold" class='my-4'>Enabled (default)</Heading>

Use this example to enable the backdrop element by default.

```svelte example
<script>
  import { Drawer, Button, CloseButton, A } from 'flowbite-svelte'
  import { sineIn } from 'svelte/easing';

  let hiddenBackdropTrue = true;
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
</script>

<div class="text-center">
  <Button on:click={() => (hiddenBackdropTrue = false)}>Show drawer</Button>
</div>

<Drawer backdrop={true} transitionType="fly" {transitionParams} bind:hidden={hiddenBackdropTrue} id='sidebar1'>
<div class='flex items-center'>
  <h5
    id="drawer-label"
    class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
    <svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>Info
  </h5>
  <CloseButton on:click={() => (hiddenBackdropTrue = true)} class='mb-4 dark:text-white'/>
    </div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a
      href="/"
      class="text-blue-600 underline dark:text-blue-500 hover:no-underline">limited-time sale</a> for
    Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design
    job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" >Get access <svg class="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></Button>
  </div>
</Drawer>
```

<Heading tag="h3" customSize="text-xl font-semibold" class='my-4'>Disabled</Heading>

Use the `backdrop={false}` prop to disable the backdrop element when the drawer is shown.

```svelte example
<script>
  import { Drawer, Button, CloseButton, A } from 'flowbite-svelte'
  import { sineIn } from 'svelte/easing';

  let hiddenBackdropFalse = true;
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
</script>

<div class="text-center">
  <Button on:click={() => (hiddenBackdropFalse = false)}>Show drawer</Button>
</div>

<Drawer backdrop={false} transitionType="fly" {transitionParams} bind:hidden={hiddenBackdropFalse} id='sidebar1'>
<div class='flex items-center'>
  <h5
    id="drawer-label"
    class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
    <svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>Info
  </h5>
  <CloseButton on:click={() => (hiddenBackdropFalse = true)} class='mb-4 dark:text-white'/>
    </div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a
      href="/"
      class="text-blue-600 underline dark:text-blue-500 hover:no-underline">limited-time sale</a> for
    Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design
    job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" >Get access <svg class="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></Button>
  </div>
</Drawer>
```

## Position

Use `leftOffset|rightOffset|topOffset|bottomOffset` prop to change the position of the drawer.

```svelte example
<script>
  import { Drawer, Button, CloseButton, A } from 'flowbite-svelte'
  import { sineIn } from 'svelte/easing';

  let hidden9 = true;
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
</script>

<div class="text-center">
  <Button on:click={() => (hidden9 = false)}>Show drawer</Button>
</div>

<Drawer
  leftOffset="top-16 h-screen left-0"
  transitionType="fly"
  {transitionParams}
  bind:hidden={hidden9}
  id="sidebar9">
  <div class="flex items-center">
    <h5
      id="drawer-label"
      class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
      <svg
        class="w-5 h-5 mr-2"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd" /></svg
      >Info
    </h5>
    <CloseButton on:click={() => (hidden9 = true)} class="mb-4 dark:text-white" />
  </div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a
      href="/"
      class="text-blue-600 underline dark:text-blue-500 hover:no-underline">limited-time sale</a> for
    Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design
    job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/"
      >Get access <svg
        class="w-4 h-4 ml-1"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
          clip-rule="evenodd" /></svg
      ></Button>
  </div>
</Drawer>
```

## Disabling outside click and backdrop

As the default, the drawer closes when you click the outside of the drawer.
However sometimes you don't want that. Set `activateClickOutside` to false to disable it.

```svelte example
<script>
  import { Drawer, Button, CloseButton } from 'flowbite-svelte';
  import { sineIn } from 'svelte/easing';
  let hidden10 = true; 
  let activateClickOutside = false
  let backdrop = false
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
</script>

<div class="text-center">
  <Button on:click={() => (hidden10 = false)}>Show drawer</Button>
</div>

<Drawer {activateClickOutside} {backdrop} transitionType="fly" {transitionParams} bind:hidden={hidden10} id='sidebar10'>
<div class='flex items-center'>
  <h5
    id="drawer-label"
    class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
    <svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>Info
  </h5>
  <CloseButton on:click={() => (hidden10 = true)} class='mb-4 dark:text-white'/>
</div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a
      href="/"
      class="text-blue-600 underline dark:text-blue-500 hover:no-underline">limited-time sale</a> for
    Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design
    job board.
  </p>
</Drawer>
```

## Disabling only outside click

```svelte example
<script>
  import { Drawer, Button, CloseButton, A } from 'flowbite-svelte'
  import { sineIn } from 'svelte/easing';

  let hiddenBackdropFalse = true;
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn
  };
</script>

<div class="text-center">
  <Button on:click={() => (hiddenBackdropFalse = false)}>Show drawer</Button>
</div>

<Drawer activateClickOutside={false} transitionType="fly" {transitionParams} bind:hidden={hiddenBackdropFalse} id='sidebar1'>
<div class='flex items-center'>
  <h5
    id="drawer-label"
    class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
    <svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>Info
  </h5>
  <CloseButton on:click={() => (hiddenBackdropFalse = true)} class='mb-4 dark:text-white'/>
    </div>
  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
    Supercharge your hiring by taking advantage of our <a
      href="/"
      class="text-blue-600 underline dark:text-blue-500 hover:no-underline">limited-time sale</a> for
    Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design
    job board.
  </p>
  <div class="grid grid-cols-2 gap-4">
    <Button color="light" href="/">Learn more</Button>
    <Button href="/" >Get access <svg class="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></Button>
  </div>
</Drawer>
```

## Props

The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types 
 page</A> for type information.

<TableProp>
<TableDefaultRow {items} rowState='hover' />
</TableProp>

## References

<P>
  <A href="https://flowbite.com/docs/components/drawer/" target="_blank" rel="noreferrer" class="link"
    >Flowbite drawer</A
  >
</P>