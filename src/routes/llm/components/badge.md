# Svelte Badge - Flowbite


The badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed since a comment has been made.

Alternatively, badges can also be used as standalone elements that link to a certain page, functioning as interactive tags or category filters.

## Setup

Import a badge component in the script tag.

```svelte
<script lang="ts">
  import { Badge } from "flowbite-svelte";
</script>
```

## Default badge

Use the following badge elements to indicate counts or labels inside or outside components.

```svelte
<script lang="ts">
  import { Badge } from "flowbite-svelte";
</script>

<Badge>Brand</Badge>
<Badge color="alternative">Alternative</Badge>
<Badge color="gray">Gray</Badge>
<Badge color="danger">Danger</Badge>
<Badge color="success">Success</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="purple">Purple</Badge>
<Badge color="pink">Pink</Badge>
```

## Large badges

Use the `large` prop to create a large variant of the badges.

```svelte
<script lang="ts">
  import { Badge } from "flowbite-svelte";
</script>

<Badge large>Brand</Badge>
<Badge large color="alternative">Alternative</Badge>
<Badge large color="gray">Gray</Badge>
<Badge large color="danger">Danger</Badge>
<Badge large color="success">Success</Badge>
<Badge large color="warning">Warning</Badge>
<Badge large color="purple">Purple</Badge>
<Badge large color="pink">Pink</Badge>
```

## Bordered badge

Use the `border` prop to add a border accent to the badge component. 

```svelte
<script lang="ts">
  import { Badge } from "flowbite-svelte";
</script>

<div class="flex flex-wrap gap-2">
  <Badge border>Brand</Badge>
  <Badge border color="alternative">Alternative</Badge>
  <Badge border color="gray">Gray</Badge>
  <Badge border color="danger">Danger</Badge>
  <Badge border color="success">Success</Badge>
  <Badge border color="warning">Warning</Badge>
  <Badge border color="purple">Purple</Badge>
  <Badge border color="pink">Pink</Badge>
</div>
<div class="flex flex-wrap gap-2">
  <Badge border large>Brand</Badge>
  <Badge border large color="alternative">Alternative</Badge>
  <Badge border large color="gray">Gray</Badge>
  <Badge border large color="danger">Danger</Badge>
  <Badge border large color="success">Success</Badge>
  <Badge border large color="warning">Warning</Badge>
  <Badge border large color="purple">Purple</Badge>
  <Badge border large color="pink">Pink</Badge>
</div>
```

## Pills badge

Use the `rounded` prop to make the corners even more rounded like pills for the badge component.

```svelte
<script lang="ts">
  import { Badge } from "flowbite-svelte";
</script>

<Badge rounded>Brand</Badge>
<Badge rounded color="alternative">Alternative</Badge>
<Badge rounded color="gray">Gray</Badge>
<Badge rounded color="danger">Danger</Badge>
<Badge rounded color="success">Success</Badge>
<Badge rounded color="warning">Warning</Badge>
<Badge rounded color="purple">Purple</Badge>
<Badge rounded color="pink">Pink</Badge>
```

## Badges as links

You can also use badges as anchor elements to link to another page. 

Make sure linked badges have appropriate hover states and are keyboard accessible.

```svelte
<script lang="ts">
  import { Badge } from "flowbite-svelte";
</script>

<Badge href="/">Badge link</Badge>
<Badge href="/" large>Badge link</Badge>
<Badge href="/" border>Badge link</Badge>
<Badge href="/" rounded>Badge link</Badge>
```

## Badges with icon

You can also use SVG icons inside the badge elements.

```svelte
<script lang="ts">
  import { Badge } from "flowbite-svelte";
  import { ClockSolid } from "flowbite-svelte-icons";
</script>

<Badge color="gray" border>
  <ClockSolid class="me-1.5 h-2.5 w-2.5" />
  3 days ago
</Badge>
<Badge border>
  <ClockSolid class="text-primary-800 dark:text-primary-400 me-1.5 h-2.5 w-2.5" />
  2 minutes ago
</Badge>
```

## Notification badge

To achieve the functionality of the notification badge, use the sibling [`Indicator`](/docs/components/indicators) component. Remember to add the `relative` class to the parent element.

```svelte
<script lang="ts">
  import { Button, Indicator } from "flowbite-svelte";
  import { EnvelopeSolid } from "flowbite-svelte-icons";
</script>

<Button class="relative" size="sm">
  <EnvelopeSolid class="text-white dark:text-white" />
  <span class="sr-only">Notifications</span>
  <Indicator border size="xl" placement="top-right" class="bg-blue-500 text-xs font-bold">18</Indicator>
</Button>

<Button class="relative" size="sm">
  <EnvelopeSolid class="text-white dark:text-white" />
  <span class="sr-only">Notifications</span>
  <Indicator color="danger" border size="xl" placement="top-right" class="text-xs font-bold">20</Indicator>
</Button>

<Button class="relative" size="sm">
  <EnvelopeSolid class="text-white dark:text-white" />
  <span class="sr-only">Notifications</span>
  <Indicator color="dark" border size="xl" placement="bottom-right" class="text-xs font-bold">20</Indicator>
</Button>
```

## Button with badge

Use this example to add a badge inside a button component for a count indicator.

```svelte
<script lang="ts">
  import { Badge, Button } from "flowbite-svelte";
</script>

<Button>
  Messages
  <Badge rounded class="text-primary-800 dark:text-primary-800 ms-2 h-4 w-4 bg-white p-0 font-semibold dark:bg-white">2</Badge>
</Button>
```

## Badge with icon only

Alternatively you can also use badges which indicate only a SVG icon. 

```svelte
<script lang="ts">
  import { Badge } from "flowbite-svelte";
  import { CheckOutline } from "flowbite-svelte-icons";
</script>

<Badge color="gray" large class="p-1! font-semibold!">
  <CheckOutline class="h-3 w-3" />
  <span class="sr-only">Icon description</span>
</Badge>
<Badge rounded large class="p-1! font-semibold!">
  <CheckOutline class="text-primary-800 dark:text-primary-400 h-3 w-3" />
  <span class="sr-only">Icon description</span>
</Badge>
```

## Dismissable badges

Use the `dismissable` prop to dismiss the current badge.

```svelte
<script lang="ts">
  import { Badge } from "flowbite-svelte";
</script>

<Badge dismissable border>Brand</Badge>
<Badge dismissable border color="alternative">Alternative</Badge>
<Badge dismissable border color="gray">Gray</Badge>
<Badge dismissable border color="danger">Danger</Badge>
<Badge dismissable border color="success">Success</Badge>
<Badge dismissable border color="warning">Warning</Badge>
<Badge dismissable border color="purple">Purple</Badge>
<Badge dismissable border color="pink">Pink</Badge>
```

Use the `icon` snippet to add your desired custom close button icon.

```svelte
<script lang="ts">
  import { Badge } from "flowbite-svelte";
  import { CloseCircleSolid } from "flowbite-svelte-icons";
</script>

<Badge dismissable large>
  Default
  {#snippet icon()}
    <button
      type="button"
      class="bg-primary-500 dark:bg-primary-400 dark:text-primary-800 hover:bg-primary-900 my-0.5 ms-1.5 -me-1.5 inline-flex items-center rounded-full p-0.5 text-sm text-white hover:text-white dark:hover:bg-red-900 dark:hover:text-yellow-300"
      aria-label="Remove"
    >
      <CloseCircleSolid class="h-4 w-4" />
      <span class="sr-only">Remove badge</span>
    </button>
  {/snippet}
</Badge>
```

A `onclose` callback will be dispatched during the dismissal, listen to it if needed.

```svelte
<script lang="ts">
  import { Badge } from "flowbite-svelte";

  function handleClose(event: Event) {
    event.preventDefault();
    alert("Badge dismissed");
  }
</script>

<Badge dismissable large onclose={handleClose}>Default</Badge>
```

## Dynamic color

The color can be changed dynamically based on application state or user interactions.

```svelte
<script lang="ts">
  import { Badge, type BadgeProps } from "flowbite-svelte";

  setInterval(handleHover, 500);

  let color: BadgeProps["color"] = $state("brand");
  function handleHover() {
    color = color === "brand" ? "alternative" : "brand";
  }
</script>

<Badge large {color}>Blinking badge</Badge>
```

## Opening badge

This example demonstrates badges with transition effects, creating a smooth animation when badges appear or change state.

```svelte
<script lang="ts">
  import { Badge, Button } from "flowbite-svelte";
  let openBadgeStatus = $state(false);
  function openBadge() {
    openBadgeStatus = true;
  }
</script>

<Button onclick={openBadge}>Open badge</Button>
<Badge class="ml-4" color="blue" dismissable large bind:badgeStatus={openBadgeStatus}>Default</Badge>
```

## Persistent Dismissible Badge with Reset (localStorage)
This example shows how to make a Flowbite-Svelte `<Badge>` stay hidden after dismissal using localStorage. When the user clicks the dismiss (×) button, the badge is hidden across page reloads. A Reset button is provided to clear the stored state and show the badge again. Suitable for announcements, notifications, or one-time hints.

```svelte
<script lang="ts">
  import { Badge } from "$lib";
  import { Button } from "flowbite-svelte";
  import { onMount } from "svelte";

  const STORAGE_KEY = "example-badge-hidden";

  let badgeVisible = $state(true);
  let hasSeen = $state(false);

  onMount(() => {
    const exists = localStorage.getItem(STORAGE_KEY);
    hasSeen = Boolean(exists);
    badgeVisible = !exists; // hide if localStorage says so
  });

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "true");
    badgeVisible = false;
    hasSeen = true;
  }

  function reset() {
    localStorage.removeItem(STORAGE_KEY);
    badgeVisible = true;
    hasSeen = false;
  }
</script>

{#if hasSeen}
  <div class="mb-3 flex items-center gap-3 text-sm text-gray-600">
    <span>
      Badge is hidden because you dismissed it earlier. Remove <code>{STORAGE_KEY}</code>
      from localStorage or click Reset:
    </span>
    <Button size="xs" onclick={reset}>Reset</Button>
  </div>
{/if}

{#if badgeVisible}
  <Badge dismissable onclose={dismiss} class="cursor-pointer">Example badge (click × to dismiss)</Badge>
{/if}
```

## Accessibility

The Badge component follows accessibility best practices:

- **Semantic HTML**: Uses appropriate HTML elements for different badge types (links, buttons, spans)
- **Color Independence**: Don't rely solely on color to convey meaning; include text or icons
- **Keyboard Navigation**: Interactive badges are fully keyboard accessible
- **Focus Indicators**: Clear focus states for keyboard users
- **ARIA Labels**: Consider adding ARIA labels for icon-only badges

## See also

- [Avatar](https://flowbite-svelte.com/llm/components/avatar.md)
- [Buttons](https://flowbite-svelte.com/llm/components/buttons.md)
- [Indicators](https://flowbite-svelte.com/llm/components/indicators.md)
- [Alert](https://flowbite-svelte.com/llm/components/alert.md)


## Component data

### Badge

#### Types

[BadgeProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L251)

#### Props

- children
- icon
- badgeStatus: $bindable(true)
- color: "brand"
- large: false
- dismissable: false
- class: className
- classes
- border
- href
- target
- rounded
- transition: fade
- params
- closeBtnColor: "gray"


## References

- [Flowbite Badge](https://flowbite.com/docs/components/badge/)
