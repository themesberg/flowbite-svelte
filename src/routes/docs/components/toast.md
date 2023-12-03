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
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
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

```svelte example class="flex justify-center"
<script>
  import { Toast } from 'flowbite-svelte';
  import { FireOutline } from 'flowbite-svelte-icons';
</script>

<Toast>
  <FireOutline slot="icon" class="w-5 h-5 text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200" />
  Set yourself free.
</Toast>
```

## Colors

Use the `color` prop to easily change the colors of the icons. Set the `color` prop to `none` and use the `extraIconClass` prop to customize your desired icon styles.

Usually, green, red, and orange are used to show success, danger, or warning alert messages to your users. See the first three examples below.

```svelte example class="flex flex-col items-center gap-4"
<script>
  import { Toast } from 'flowbite-svelte';
  import { CheckCircleSolid, ExclamationCircleSolid, FireOutline, CloseCircleSolid } from 'flowbite-svelte-icons';
</script>

<Toast color="green">
  <svelte:fragment slot="icon">
    <CheckCircleSolid class="w-5 h-5" />
    <span class="sr-only">Check icon</span>
  </svelte:fragment>
  Item moved successfully.
</Toast>

<Toast color="red">
  <svelte:fragment slot="icon">
    <CloseCircleSolid class="w-5 h-5" />
    <span class="sr-only">Error icon</span>
  </svelte:fragment>
  Item has been deleted.
</Toast>

<Toast color="orange">
  <svelte:fragment slot="icon">
    <ExclamationCircleSolid class="w-5 h-5" />
    <span class="sr-only">Warning icon</span>
  </svelte:fragment>
  Improve password difficulty.
</Toast>

<Toast color="gray">
  <FireOutline slot="icon" class="w-5 h-5" />
  Gray
</Toast>

<Toast color="yellow">
  <FireOutline slot="icon" class="w-5 h-5" />
  Yellow
</Toast>

<Toast color="blue">
  <FireOutline slot="icon" class="w-5 h-5" />
  Blue
</Toast>

<Toast color="indigo">
  <FireOutline slot="icon" class="w-5 h-5" />
  Indigo
</Toast>

<Toast color="purple">
  <FireOutline slot="icon" class="w-5 h-5" />
  Purple
</Toast>

<Toast color="none" defaultIconClass="w-8 h-8 text-pink-500 bg-pink-100 dark:bg-pink-800 dark:text-pink-200">
  <FireOutline slot="icon" class="w-5 h-5" />
  Customize your colors.
</Toast>
```

## Simple toast

This component can be used to show simple messages and notifications without the use of a close button.

```svelte example class="flex justify-center"
<script>
  import { Toast } from 'flowbite-svelte';
  import { PapperPlaneOutline } from 'flowbite-svelte-icons';
</script>

<Toast dismissable={false} contentClass="flex space-x-4 rtl:space-x-reverse divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-700">
  <PapperPlaneOutline class="w-5 h-5 text-primary-600 dark:text-primary-500 rotate-45" />
  <div class="ps-4 text-sm font-normal">Message sent successfully.</div>
</Toast>
```

## Icons

For the right positioning of the icon use: `slot="icon"`.

You can use any [icon components](/icons).

```svelte example class="flex flex-col items-center gap-4"
<script>
  import { Toast } from 'flowbite-svelte';
  import { ImageOutline } from 'flowbite-svelte-icons';
</script>

<Toast>
  <ImageOutline slot="icon" class="w-6 h-6" />
  There is a box icon.
</Toast>

<Toast>No icon at all.</Toast>
```

## Autohide example

```svelte example class="flex justify-center"
<script>
  import { Toast, Button } from 'flowbite-svelte';
  import { slide } from 'svelte/transition';
  import { CheckCircleSolid } from 'flowbite-svelte-icons';

  let open = true;
  let counter = 6;

  function trigger() {
    open = true;
    counter = 6;
    timeout();
  }

  function timeout() {
    if (--counter > 0) return setTimeout(timeout, 1000);
    open = false;
  }
</script>

<div class="flex gap-10">
  <Button on:click={trigger} class="my-3">Restart</Button>
  <Toast dismissable={false} transition={slide} bind:open>
    <CheckCircleSolid slot="icon" class="w-4 h-4" />
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
  import { CheckCircleSolid } from 'flowbite-svelte-icons';
</script>

<Toast transition={slide} class="mb-4">
  <CheckCircleSolid slot="icon" class="w-5 h-5" />
  Transition type: slide
</Toast>

<Toast transition={slide} params={{ delay: 250, duration: 300, easing: quintOut }} class="mb-4">
  <CheckCircleSolid slot="icon" class="w-5 h-5" />
  Transition type: slide, delay: 250, duration: 300, easing: quintOut
</Toast>

<Toast transition={slide} params={{ delay: 250, duration: 2000, easing: elasticOut }}>
  <CheckCircleSolid slot="icon" class="w-5 h-5" />
  Transition type: slide, delay: 250, duration: 2000, easing: elasticOut
</Toast>
```

### Blur examples

```svelte example class="flex flex-col items-center"
<script>
  import { Toast } from 'flowbite-svelte';
  import { blur } from 'svelte/transition';
  import { BellOutline } from 'flowbite-svelte-icons';
</script>

<Toast transition={blur} color="purple" params={{ amount: 10 }} class="mb-4">
  <BellOutline slot="icon" class="w-5 h-5" />
  Transition type: blur, amount: 10
</Toast>

<Toast transition={blur} color="purple" params={{ amount: 50, delay: 1000 }}>
  <BellOutline slot="icon" class="w-5 h-5" />
  Transition type: blur, amount: 50, delay 1000
</Toast>
```

### Fly examples

```svelte example class="flex flex-col items-center"
<script>
  import { Toast } from 'flowbite-svelte';
  import { fly } from 'svelte/transition';
  import { DownloadOutline } from 'flowbite-svelte-icons';
</script>

<Toast transition={fly} params={{ x: 200 }} color="green" class="mb-4">
  <DownloadOutline slot="icon" class="w-5 h-5" />
  Transition type: fly right
</Toast>

<Toast transition={fly} params={{ y: 200 }} color="green">
  <DownloadOutline slot="icon" class="w-5 h-5" />
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
  <a class="ms-auto font-medium text-primary-600 p-1.5 hover:bg-primary-100 rounded-lg dark:text-primary-500 dark:hover:bg-gray-700" href="/"> Undo </a>
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
  <Avatar slot="icon" src="/images/profile-picture-1.webp" />
  <div class="ms-3 text-sm font-normal">
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
    <Avatar src="/images/profile-picture-3.webp" />
    <div class="ms-3">
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
  import { CameraFotoOutline } from 'flowbite-svelte-icons';
</script>

<Toast align={false}>
  <CameraFotoOutline slot="icon" class="w-5 h-5" />

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
  <Toast dismissable={false} position="top-left">Top left positioning.</Toast>
  <Toast dismissable={false} position="top-right">Top right positioning.</Toast>
  <Toast dismissable={false} position="bottom-left">Bottom left positioning.</Toast>
  <Toast dismissable={false} position="bottom-right">Bottom right positioning.</Toast>
</div>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Toast styling

- Use the `class` prop to overwrite `divClass`.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Toast](https://flowbite.com/docs/components/toast/)

<GitHubCompoLinks />
