# Svelte Badge - Flowbite


The badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed by since a comment has been made.

Alternatively, badges can also be used as standalone elements that link to a certain page.

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

<Badge>Default</Badge>
<Badge color="gray">Gray</Badge>
<Badge color="red">Red</Badge>
<Badge color="green">Green</Badge>
<Badge color="yellow">Yellow</Badge>
<Badge color="indigo">Indigo</Badge>
<Badge color="purple">Purple</Badge>
<Badge color="pink">Pink</Badge>
```

## Large badges

Use the `large` prop to create a large variant of the badges.

```svelte
<script lang="ts">
  import { Badge } from "flowbite-svelte";
</script>

<Badge large>Default</Badge>
<Badge large color="gray">Gray</Badge>
<Badge large color="red">Red</Badge>
<Badge large color="green">Green</Badge>
<Badge large color="yellow">Yellow</Badge>
<Badge large color="indigo">Indigo</Badge>
<Badge large color="purple">Purple</Badge>
<Badge large color="pink">Pink</Badge>
```

## Bordered badge

Use the `border` prop to add a border accent to the badge component.

```svelte
<script lang="ts">
  import { Badge } from "flowbite-svelte";
</script>

<Badge border>Default</Badge>
<Badge border color="gray">Gray</Badge>
<Badge border color="red">Red</Badge>
<Badge border color="green">Green</Badge>
<Badge border color="yellow">Yellow</Badge>
<Badge border color="indigo">Indigo</Badge>
<Badge border color="purple">Purple</Badge>
<Badge border color="pink">Pink</Badge>
```

## Pills badge

Use the `rounded` prop to make the corners even more rounded like pills for the badge component.

```svelte
<script lang="ts">
  import { Badge } from "flowbite-svelte";
</script>

<Badge rounded>Default</Badge>
<Badge rounded color="gray">Gray</Badge>
<Badge rounded color="red">Red</Badge>
<Badge rounded color="green">Green</Badge>
<Badge rounded color="yellow">Yellow</Badge>
<Badge rounded color="indigo">Indigo</Badge>
<Badge rounded color="purple">Purple</Badge>
<Badge rounded color="pink">Pink</Badge>
```

## Badges as links

You can also use badges as anchor elements to link to another page.

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

To achive the functionality of the notification badge, use the sibling [`Indicator`](/docs/components/indicators) component. Remember to add the `relative` class to parent element.

```svelte
<script lang="ts">
  import { Button, Indicator } from "flowbite-svelte";
  import { EnvelopeSolid } from "flowbite-svelte-icons";
</script>

<Button class="relative" size="sm">
  <EnvelopeSolid class="text-white dark:text-white" />
  <span class="sr-only">Notifications</span>
  <Indicator color="blue" border size="xl" placement="top-right" class="text-xs font-bold">18</Indicator>
</Button>

<Button class="relative" size="sm">
  <EnvelopeSolid class="text-white dark:text-white" />
  <span class="sr-only">Notifications</span>
  <Indicator color="red" border size="xl" placement="top-right" class="text-xs font-bold">20</Indicator>
</Button>

<Button class="relative" size="sm">
  <EnvelopeSolid class="text-white dark:text-white" />
  <span class="sr-only">Notifications</span>
  <Indicator color="gray" border size="xl" placement="bottom-right" class="text-xs font-bold">20</Indicator>
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

Use the `dimissable` prop to dismiss the current badge.

```svelte
<script lang="ts">
  import { Badge } from "flowbite-svelte";
</script>

<Badge dismissable large>Default</Badge>
<Badge dismissable large color="gray">Gray</Badge>
<Badge dismissable large color="red">Red</Badge>
<Badge dismissable large color="green">Green</Badge>
<Badge dismissable large color="yellow">Yellow</Badge>
<Badge dismissable large color="indigo">Indigo</Badge>
<Badge dismissable large color="purple">Purple</Badge>
<Badge dismissable large color="pink">Pink</Badge>
```

Use the `icon` snippet to add your desired button.

```svelte
<script lang="ts">
  import { Badge } from "flowbite-svelte";
  import { CloseCircleSolid } from "flowbite-svelte-icons";
</script>

<Badge dismissable>
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

The color can be changed dynamically.

```svelte
<script lang="ts">
  import { Badge, type BadgeProps } from "flowbite-svelte";

  setInterval(handleHover, 500);

  let color: BadgeProps["color"] = $state("primary");
  function handleHover() {
    color = color === "primary" ? "secondary" : "primary";
  }
</script>

<Badge large {color}>Blinking badge</Badge>
```

## Opening badge

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

## Component data

### Badge

#### Types

[BadgeProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L252)

#### Props

- children
- icon
- badgeStatus: $bindable(true)
- color: "primary"
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
- aClass


## References

- [Flowbite Badge](https://flowbite.com/docs/components/badge/)
