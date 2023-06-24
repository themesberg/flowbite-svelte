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
  <svg slot="icon" aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>
  Set yourself free.
</Toast>
```

## Colors

Use the `color` prop to easily change the colors of the icons. Set the `color` prop to `none` and use the `extraIconClass` prop to customize your desired icon styles.

Usually, green, red, and orange are used to show success, danger, or warning alert messages to your users. See the first three examples below.

```svelte example class="flex flex-col items-center gap-4" hideScript
<script>
  import { Toast } from 'flowbite-svelte';
</script>

<Toast color="green">
  <svelte:fragment slot="icon">
    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
    <span class="sr-only">Check icon</span>
  </svelte:fragment>
  Item moved successfully.
</Toast>

<Toast color="red">
  <svelte:fragment slot="icon">
    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    <span class="sr-only">Error icon</span>
  </svelte:fragment>
  Item has been deleted.
</Toast>

<Toast color="orange">
  <svelte:fragment slot="icon">
    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
    <span class="sr-only">Warning icon</span>
  </svelte:fragment>
  Improve password difficulty.
</Toast>

<Toast color="gray">
  <svg slot="icon" aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>
  Gray
</Toast>

<Toast color="yellow">
  <svg slot="icon" aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>
  Yellow
</Toast>

<Toast color="blue">
  <svg slot="icon" aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>
  Blue
</Toast>

<Toast color="indigo">
  <svg slot="icon" aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>
  Indigo
</Toast>

<Toast color="purple">
  <svg slot="icon" aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>
  Purple
</Toast>

<Toast color="none" defaultIconClass="w-8 h-8 text-pink-500 bg-pink-100 dark:bg-pink-800 dark:text-pink-200">
  <svg slot="icon" aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>
  Customize your colors.
</Toast>
```

## Simple toast

This component can be used to show simple messages and notifications without the use of a close button.

```svelte example class="flex justify-center" hideScript
<script>
  import { Toast } from 'flowbite-svelte';
</script>

<Toast simple contentClass="flex space-x-4 divide-x divide-gray-200 dark:divide-gray-700">
  <svg aria-hidden="true" class="w-5 h-5 text-primary-600 dark:text-primary-500" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z"></path></svg>
  <div class="pl-4 text-sm font-normal">Message sent successfully.</div>
</Toast>
```

## Icons

For the right positioning of the icon use: `slot="icon"`.

You can use any [icon components](/icons).

```svelte example class="flex flex-col items-center gap-4" hideScript
<script>
  import { Toast } from 'flowbite-svelte';
</script>

<Toast>
  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
  There is a box icon.
</Toast>

<Toast>
  No icon at all.
</Toast>
```

## Autohide example

```svelte example class="flex justify-center"
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
    <svg slot="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    Autohide in {counter}s.
  </Toast>
</div>
```

## Transitions

You can use one of <A href="https://svelte.dev/docs#run-time-svelte-easing" target="_blank" rel="noreferrer" >Svelte/easing</A>.

```svelte example class="flex flex-col items-center"
<script>
  import { Toast } from 'flowbite-svelte';
  import { slide } from 'svelte/transition';
  import { quintOut, elasticOut } from 'svelte/easing';
</script>

<Toast transition={slide} class="mb-4">
  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  Transition type: slide
</Toast>

<Toast transition={slide} params="{{delay: 250, duration: 300, easing: quintOut}}" class="mb-4">
  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  Transition type: slide, delay: 250, duration: 300, easing: quintOut
</Toast>

<Toast transition={slide} params="{{delay: 250, duration: 2000, easing: elasticOut}}">
  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  Transition type: slide, delay: 250, duration: 2000, easing: elasticOut
</Toast>
```

### Blur examples

```svelte example class="flex flex-col items-center"
<script>
  import { Toast } from 'flowbite-svelte';
  import { blur } from 'svelte/transition';
</script>

<Toast transition={blur} color='purple' params="{{amount: 10}}" class="mb-4">
  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  Transition type: blur, amount: 10
</Toast>

<Toast transition={blur} color='purple' params="{{amount: 50, delay: 1000}}">
  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  Transition type: blur, amount: 50, delay 1000
</Toast>
```

### Fly examples

```svelte example class="flex flex-col items-center"
<script>
  import { Toast } from 'flowbite-svelte';
  import { fly } from 'svelte/transition';
</script>

<Toast transition={fly} params="{{x: 200}}" color="green" class="mb-4">
  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
  Transition type: fly right
</Toast>

<Toast transition={fly} params="{{y: 200}}" color="green">
  <svg slot="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
  Transition type: fly down
</Toast>
```

## Undo button

Use this toast component to also show an “undo” button to reverse the action of the user.

```svelte example class="flex justify-center" hideScript
<script>
  import { Toast } from 'flowbite-svelte';
</script>

<Toast contentClass="w-full text-sm font-normal flex items-center justify-between">
  Conversation archived.
  <a class="ml-auto font-medium text-primary-600 p-1.5 hover:bg-primary-100 rounded-lg dark:text-primary-500 dark:hover:bg-gray-700" href="/">Undo</a>
</Toast>
```

## Advanced examples

If the toast content grows to multiple lines we need to switch off the `items-center` alignment. Notice how the examples below achieve that by setting `align={flase}` property.

### Toast message

This component can be used to show messages and a CTA button when receiving chat messages, comment notifications, and other use cases.

```svelte example class="flex justify-center"
<script>
  import { Toast, Avatar, Button } from 'flowbite-svelte';
</script>

<Toast align={false} color="none" defaultIconClass="">
  <Avatar slot="icon" src='/images/profile-picture-1.webp' />
  <div class="ml-3 text-sm font-normal">
      <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
      <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
      <Button size="xs">Reply</Button>
  </div>
</Toast>
```

### Push notification

This component can be used to show notifications for an action from another user such as posting a comment, receiving a like, being tagged. You can show an avatar, icon, message, and the time of the notification.

```svelte example class="flex justify-center"
<script>
  import { Toast, Avatar } from 'flowbite-svelte';
</script>

<Toast align={false}>
  <span class="font-semibold text-gray-900 dark:text-white">New notification</span>
  <div class="flex items-center mt-3">
    <Avatar src='/images/profile-picture-3.webp'/>
    <div class="ml-3">
      <h4 class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</h4>
      <div class="text-sm font-normal">commented on your photo</div>
      <span class="text-xs font-medium text-primary-600 dark:text-primary-500">a few seconds ago</span>
    </div>
  </div>
</Toast>
```

### Interactive toast

Use this interactive toast component to encourage users to make a certain action such as updating to the latest software version. You can set an icon, message, and two CTA buttons.

<p class="italic">This is an example with the icon and extra content at the same time.</p>

```svelte example class="flex justify-center"
<script>
  import { Toast, Button } from 'flowbite-svelte';
</script>

<Toast align={false}>  
  <svg slot="icon" aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"></path></svg>

  <span class="font-semibold text-gray-900 dark:text-white">Update available</span>
  <div class="mt-3">
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

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

- Use the `class` prop to overwrite `divClass`.

<TableProp>
<TableDefaultRow {items} rowState='hover' />
</TableProp>

## References

- [Flowbite Toast](https://flowbite.com/docs/components/toast/)
