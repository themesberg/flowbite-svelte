---
layout: componentLayout
title: Svelte Toasts - Flowbite
breadcrumb_title: Svelte Toast Notification
component_title: Toast
dir: Components
description: Push notifications to your users using the toast component and choose from multiple sizes, colors, styles, and positions
thumnailSize: w-64
---

<script>
  import { TableProp, TableDefaultRow, } from '../../utils'
  import { P, A } from '$lib'
  import { props as items }  from '../../props/Toast.json'
</script>



The toast component can be used to enhance your website’s interactivity by pushing notifications to your visitors. You can choose from multiple styles, colors, sizes, and positions and even dismiss the component.

## Setup

```svelte example hideOutput
<script>
  import { Toast } from 'flowbite-svelte';
</script>
```

## Default toast

Use this simple toast component with an icon, message, and dismissable close button to show alert messages to your website visitors.

```svelte example class="flex justify-center" hideScript
<script>
  import { Toast } from 'flowbite-svelte';
</script>

<Toast>
  <svelte:fragment slot="icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
    </svg>
  </svelte:fragment>
  Dismissable user notification.
</Toast>
```

## Simple toast

This component can be used to show simple messages and notifications without the use of a close button.

```svelte example class="flex justify-center" hideScript
<script>
  import { Toast } from 'flowbite-svelte';
</script>

<Toast simple={true}>
  <svelte:fragment slot="icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
  </svelte:fragment>
  New message arrived.
</Toast>
```

## Colors

Use these contextual toast components to show success, danger, or warning alert messages to your users.

```svelte example hideScript
<script>
  import { Toast } from 'flowbite-svelte';
</script>

<Toast color="green" class="mb-2">
  <svelte:fragment slot="icon">
    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
    <span class="sr-only">Check icon</span>
  </svelte:fragment>
    Item moved successfully.
</Toast>
<Toast color="red" class="mb-2">
  <svelte:fragment slot="icon">
    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    <span class="sr-only">Error icon</span>
  </svelte:fragment>
  Color set to green.
</Toast>
<Toast color="pink">
  <svelte:fragment slot="icon">
    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
    <span class="sr-only">Warning icon</span>
    </svelte:fragment>
  Improve password difficulty.
</Toast>
```

## Icons

For the right positioning of the icon use: <span class="font-mono italic">slot="icon"</span>.

Icons are wrapped with blue background by default. Set the color name property to change it. Note, that if you want no color at all set property to empty string.

You can use any <A href="/icons">icon components.</A>

```svelte example hideScript
<script>
  import { Toast } from 'flowbite-svelte';
</script>

<Toast class="mb-2">
  <svelte:fragment slot="icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
  </svelte:fragment>
  Default color is blue.
</Toast>
<Toast color="green" class="mb-2">
  <svelte:fragment slot="icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
  </svelte:fragment>
  Color set to green.
</Toast>
<Toast  color="" class="mb-2">
  <svelte:fragment slot="icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
  </svelte:fragment>
  No color set.
</Toast>
<Toast>
  No icon at all.
</Toast>
```

## Autohide example

```svelte example
<script>
  import { Toast, Button } from 'flowbite-svelte';
  import { slide } from 'svelte/transition';

  let show = true;
  let counter = 6;

  function trigger() {
    show = true;
    counter = 6;
    timeout();
  }

  function timeout() {
    if (--counter > 0)
      return setTimeout(timeout, 1000);
    show = false;
  }
</script>

<div class="flex gap-10">
  <Button on:click={trigger} class="my-3">Restart</Button>
  <Toast simple transition={slide} bind:open={show}>
    <svelte:fragment slot="icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </svelte:fragment>
    Autohide in {counter}s.
  </Toast>
</div>
```

## Transitions

You can use one of <A href="https://svelte.dev/docs#run-time-svelte-easing" target="_blank" rel="noreferrer" >Svelte/easing</A>.

```svelte example
<script>
  import { Toast } from 'flowbite-svelte';
  import { slide } from 'svelte/transition';
  import { quintOut, elasticOut } from 'svelte/easing';
</script>

<Toast transition={slide} class="my-2">
  <svelte:fragment slot="icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </svelte:fragment>
  Transition type: slide
</Toast>
<Toast transition={slide} params="{{delay: 250, duration: 300, easing: quintOut}}" class="my-2">
  <svelte:fragment slot="icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  </svelte:fragment>
  Transition type: slide, delay: 250, duration: 300, easing: quintOut
</Toast>
<Toast transition={slide} params="{{delay: 250, duration: 2000, easing: elasticOut}}">
  <svelte:fragment slot="icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  </svelte:fragment>
  Transition type: slide, delay: 250, duration: 2000, easing: elasticOut
</Toast>
```

### Blur examples

```svelte example
<script>
  import { Toast } from 'flowbite-svelte';
  import { blur } from 'svelte/transition';
</script>

<Toast transition={blur} color='purple' params="{{amount: 10}}" class="my-2">
  <svelte:fragment slot="icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  </svelte:fragment>
  Transition type: blur, amount: 10
</Toast>
<Toast transition={blur} color='purple' params="{{amount: 50, delay: 1000}}">
  <svelte:fragment slot="icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  </svelte:fragment>
  Transition type: blur, amount: 50, delay 1000
</Toast>
```

### Fly examples

```svelte example
<script>
  import { Toast } from 'flowbite-svelte';
  import { fly } from 'svelte/transition';
</script>

<Toast transition={fly} params="{{x: 200}}" color="green" class="mb-2">
  <svelte:fragment slot="icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
  </svelte:fragment>
  Transition type: fly right
</Toast>

<Toast transition={fly} params="{{y: 200}}" color="green">
  <svelte:fragment slot="icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
  </svelte:fragment>
  Transition type: fly down
</Toast>
```

## Undo button

Use this toast component to also show an “undo” button to reverse the action of the user.

```svelte example hideScript
<script>
  import { Toast } from 'flowbite-svelte';
</script>

<Toast>
  <div class="inline-flex justify-between items-center w-full">
  Conversation archived.
  <a class="text-sm font-medium text-blue-600 p-1.5 hover:bg-blue-100 rounded-lg dark:text-blue-500 dark:hover:bg-gray-700" href="/">Undo</a>
  </div>
</Toast>
```

## Extra content

Use the `slot="extra` to add some more arbitrary content in the toast.

### Toast message

This component can be used to show messages and a CTA button when receiving chat messages, comment notifications, and other use cases.

```svelte example
<script>
  import { Toast, Avatar, Button } from 'flowbite-svelte';
</script>

<Toast>
    <div class="flex" slot="extra">
      <Avatar src='/images/profile-picture-1.webp' />
      <div class="ml-3 text-sm font-normal">
          <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
          <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
          <Button size="xs">Replay</Button>
      </div>
  </div>
</Toast>
```

### Push notification

This component can be used to show notifications for an action from another user such as posting a comment, receiving a like, being tagged. You can show an avatar, icon, message, and the time of the notification.

```svelte example
<script>
  import { Toast, Avatar } from 'flowbite-svelte';
</script>

<Toast>
  <span class="font-semibold text-gray-900 dark:text-white">New notification</span>
  <div class="flex items-center mt-3" slot="extra">
    <Avatar src='/images/profile-picture-3.webp'/>
    <div class="ml-3">
      <h4 class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</h4>
      <div class="text-sm font-normal">commented on your photo</div>
      <span class="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>
    </div>
  </div>
</Toast>
```

### Interactive toast

Use this interactive toast component to encourage users to make a certain action such as updating to the latest software version. You can set an icon, message, and two CTA buttons.

<p class="italic">This is an example with the icon and extra content at the same time.</p>

```svelte example
<script>
  import { Toast, Button } from 'flowbite-svelte';
</script>

<Toast>
  <svelte:fragment slot="icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3" /></svg>
  </svelte:fragment>
  <span class="font-semibold text-gray-900 dark:text-white">Update available</span>
  <div class="mt-3" slot="extra">
      <div class="mb-2 text-sm font-normal">A new software version is available for download.</div>
      <div class="grid grid-cols-2 gap-2">
          <Button size="xs" class="w-full">Update</Button>
          <Button size="xs" class="w-full" color="dark">Not now</Button>
      </div>
  </div>
</Toast>
```

## Positioning

Use the position property to position these toast components relative to the main content wrapper element from your document.

```svelte example hideScript
<script>
  import { Toast } from 'flowbite-svelte';
</script>

<div class="relative h-56">
  <Toast simple position="top-left">Top left positioning.</Toast>
  <Toast simple position="top-right">Top right positioning.</Toast>
  <Toast simple position="bottom-left">Bottom left positioning.</Toast>
  <Toast simple position="bottom-right">Bottom right positioning.</Toast>
</div>
```

## Props

The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types page</A> for type information.

<TableProp>
<TableDefaultRow {items} rowState='hover' />
</TableProp>

## References

<P>
  <A href="https://flowbite.com/docs/components/toast/" target="_blank" rel="noreferrer" class="link"
    >Flowbite Toast</A
  >
</P>
