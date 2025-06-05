# Svelte Toasts - Flowbite


The toast component can be used to enhance your website’s interactivity by pushing notifications to your visitors. You can choose from multiple styles, colors, sizes, and positions and even dismiss the component.

## Setup

```svelte
<script>
  import { Toast } from "flowbite-svelte";
</script>
```

## Default toast

Use this simple toast component with an icon, message, and dismissable close button to show alert messages to your website visitors.

```svelte
<script>
  import { Toast } from "flowbite-svelte";
  import { FireOutline } from "flowbite-svelte-icons";
</script>

<Toast>
  {#snippet icon()}
    <FireOutline class="text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200 h-6 w-6" />
  {/snippet}
  Set yourself free.
</Toast>
```

## Colors

Use the `color` prop to easily change the colors of the icons. Set the `color` prop to `undefined` and use the `class` prop to customize your desired icon styles.

Usually, green, red, and orange are used to show success, danger, or warning alert messages to your users. See the first three examples below.

```svelte
<script>
  import { Toast } from "flowbite-svelte";
  import { CheckCircleSolid, ExclamationCircleSolid, FireOutline, CloseCircleSolid } from "flowbite-svelte-icons";
</script>

<Toast color="green">
  {#snippet icon()}
    <CheckCircleSolid class="h-5 w-5" />
    <span class="sr-only">Check icon</span>
  {/snippet}
  Item moved successfully.
</Toast>

<Toast color="red">
  {#snippet icon()}
    <CloseCircleSolid class="h-5 w-5" />
    <span class="sr-only">Error icon</span>
  {/snippet}
  Item has been deleted.
</Toast>

<Toast color="red">
  {#snippet icon()}
    <ExclamationCircleSolid class="h-5 w-5" />
    <span class="sr-only">Warning icon</span>
  {/snippet}
  Improve password difficulty.
</Toast>

<Toast color="gray">
  {#snippet icon()}
    <FireOutline class="h-6 w-6" />
  {/snippet}
  Gray
</Toast>

<Toast color="yellow">
  {#snippet icon()}
    <FireOutline class="h-6 w-6" />
  {/snippet}
  Yellow
</Toast>

<Toast color="blue">
  {#snippet icon()}
    <FireOutline class="h-6 w-6" />
  {/snippet}
  Blue
</Toast>

<Toast color="indigo">
  {#snippet icon()}
    <FireOutline class="h-6 w-6" />
  {/snippet}
  Indigo
</Toast>

<Toast color="purple">
  {#snippet icon()}
    <FireOutline class="h-6 w-6" />
  {/snippet}
  Purple
</Toast>

<Toast color={undefined} class="h-8 w-8 bg-pink-100 text-pink-500 dark:bg-pink-800 dark:text-pink-200">
  {#snippet icon()}
    <FireOutline class="h-6 w-6" />
  {/snippet}
  Customize your colors.
</Toast>
```

## Simple toast

This component can be used to show simple messages and notifications without the use of a close button.

```svelte
<script>
  import { Toast } from "flowbite-svelte";
  import { PaperPlaneOutline } from "flowbite-svelte-icons";
</script>

<Toast dismissable={false} contentClass="flex space-x-4 rtl:space-x-reverse divide-x rtl:divide-x-reverse divide-gray-200 dark:divide-gray-700">
  {#snippet icon()}
    <PaperPlaneOutline class="text-primary-600 dark:text-primary-500 h-5 w-5 rotate-45" />
  {/snippet}
  <div class="ps-4 text-sm font-normal">Message sent successfully.</div>
</Toast>
```

## Icons

For the right positioning of the icon use: `{#snippet icon()}...{/snippet}`.

You can use any [icon components](/icons).

```svelte
<script>
  import { Toast } from "flowbite-svelte";
  import { ImageOutline } from "flowbite-svelte-icons";
</script>

<Toast>
  {#snippet icon()}
    <ImageOutline class="h-6 w-6" />
  {/snippet}
  There is a box icon.
</Toast>

<Toast>No icon at all.</Toast>
```

## Autohide example

```svelte
<script>
  import { Toast, Button } from "flowbite-svelte";
  import { slide } from "svelte/transition";
  import { CheckCircleSolid } from "flowbite-svelte-icons";

  let toastStatus = true;
  let counter = 6;

  function trigger() {
    toastStatus = true;
    counter = 6;
    timeout();
  }

  function timeout() {
    if (--counter > 0) return setTimeout(timeout, 1000);
    toastStatus = false;
  }
</script>

<div class="flex gap-10">
  <Button onclick={trigger} class="my-3">Restart</Button>
  <Toast dismissable={false} transition={slide} bind:toastStatus>
    {#snippet icon()}
      <CheckCircleSolid class="h-5 w-5" />
    {/snippet}
    Autohide in {counter}s.
  </Toast>
</div>
```

## Transitions

You can use one of <A href="https://svelte.dev/docs#run-time-svelte-easing" target="_blank" rel="noreferrer" >Svelte/easing</A>.

```svelte
<script>
  import { Toast } from "flowbite-svelte";
  import { slide, scale } from "svelte/transition";
  import { quintOut, elasticOut } from "svelte/easing";
  import { CheckCircleSolid } from "flowbite-svelte-icons";
</script>

<Toast transition={slide}>
  {#snippet icon()}
    <CheckCircleSolid class="h-6 w-6" />
  {/snippet}
  Transition type: slide
</Toast>

<Toast transition={scale} params={{ delay: 250, duration: 300, easing: quintOut }}>
  {#snippet icon()}
    <CheckCircleSolid class="h-6 w-6" />
  {/snippet}
  Transition type: scale, delay: 250, duration: 300, easing: quintOut
</Toast>

<Toast params={{ delay: 250, duration: 1000 }}>
  {#snippet icon()}
    <CheckCircleSolid class="h-6 w-6" />
  {/snippet}
  Transition type: fade, delay: 250, duration: 1000
</Toast>
```

### Blur examples

```svelte
<script>
  import { Toast } from "flowbite-svelte";
  import { blur } from "svelte/transition";
  import { BellOutline } from "flowbite-svelte-icons";
</script>

<Toast transition={blur} color="purple" params={{ amount: 10 }} class="mb-4">
  {#snippet icon()}
    <BellOutline class="h-6 w-6" />
  {/snippet}
  Transition type: blur, amount: 10
</Toast>

<Toast transition={blur} color="purple" params={{ amount: 50, delay: 1000 }}>
  {#snippet icon()}
    <BellOutline class="h-6 w-6" />
  {/snippet}
  Transition type: blur, amount: 50, delay 1000
</Toast>
```

### Fly examples

```svelte
<script>
  import { Toast } from "flowbite-svelte";
  import { fly } from "svelte/transition";
  import { DownloadOutline } from "flowbite-svelte-icons";
</script>

<Toast transition={fly} params={{ x: 200 }} color="green" class="mb-4">
  {#snippet icon()}
    <DownloadOutline class="h-6 w-6" />
  {/snippet}
  Transition type: fly right
</Toast>

<Toast transition={fly} params={{ y: 200 }} color="green">
  {#snippet icon()}
    <DownloadOutline class="h-6 w-6" />
  {/snippet}
  Transition type: fly down
</Toast>
```

## Undo button

Use this toast component to also show an “undo” button to reverse the action of the user.

```svelte
<script>
  import { Toast } from "flowbite-svelte";
</script>

<Toast contentClass="w-full text-sm font-normal flex items-center justify-between">
  Conversation archived.
  <a class="text-primary-600 hover:bg-primary-100 dark:text-primary-500 ms-auto rounded-lg p-1.5 font-medium dark:hover:bg-gray-700" href="/">Undo</a>
</Toast>
```

## Advanced examples

If the toast content grows to multiple lines we need to switch off the `items-center` alignment. Notice how the examples below achieve that by setting `align={flase}` property.

### Toast message

This component can be used to show messages and a CTA button when receiving chat messages, comment notifications, and other use cases.

```svelte
<script>
  import { Toast, Avatar, Button } from "flowbite-svelte";
</script>

<Toast align={false} color={undefined}>
  {#snippet icon()}
    <Avatar src="/images/profile-picture-1.webp" class="h-8" />
  {/snippet}
  <div class="ms-3 text-sm font-normal">
    <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
    <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>
    <Button size="xs">Reply</Button>
  </div>
</Toast>
```

### Push notification

This component can be used to show notifications for an action from another user such as posting a comment, receiving a like, being tagged. You can show an avatar, icon, message, and the time of the notification.

```svelte
<script>
  import { Toast, Avatar } from "flowbite-svelte";
</script>

<Toast align={false}>
  <span class="font-semibold text-gray-900 dark:text-white">New notification</span>
  <div class="mt-3 flex items-center">
    <Avatar src="/images/profile-picture-3.webp" />
    <div class="ms-3">
      <h4 class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</h4>
      <div class="text-sm font-normal">commented on your photo</div>
      <span class="text-primary-600 dark:text-primary-500 text-xs font-medium">a few seconds ago</span>
    </div>
  </div>
</Toast>
```

### Interactive toast

Use this interactive toast component to encourage users to make a certain action such as updating to the latest software version. You can set an icon, message, and two CTA buttons.

<p class="italic">This is an example with the icon and extra content at the same time.</p>

```svelte
<script>
  import { Toast, Button } from "flowbite-svelte";
  import { CameraPhotoOutline } from "flowbite-svelte-icons";
</script>

<Toast align={false}>
  {#snippet icon()}
    <CameraPhotoOutline class="h-6 w-6" />
  {/snippet}

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

```svelte
<script>
  import { Toast } from "flowbite-svelte";
</script>

<div class="relative h-56">
  <Toast dismissable={false} position="top-left">Top left positioning.</Toast>
  <Toast dismissable={false} position="top-right">Top right positioning.</Toast>
  <Toast dismissable={false} position="bottom-left">Bottom left positioning.</Toast>
  <Toast dismissable={false} position="bottom-right">Bottom right positioning.</Toast>
</div>
```

## Events

You can use `onclose` to execute custom logic when the toast is closed.

```svelte
<script>
  import { Toast } from "flowbite-svelte";
</script>

<div class="relative h-56">
  <Toast onclick={() => alert("Toast closed")}>Click the close button to see the event.</Toast>
</div>
```

## Component data

### Toast

#### Types

[ToastProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1705)

#### Props

- children
- icon
- toastStatus: $bindable(true)
- dismissable: true
- color: "primary"
- position
- iconClass
- contentClass
- align: true
- params
- transition: fly
- class: className


## References

- [Flowbite Toast](https://flowbite.com/docs/components/toast/)


