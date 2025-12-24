# Svelte Alert - Flowbite


The alert component provides contextual feedback messages for user actions. Use alerts for success messages, errors, warnings, and informational content.

## Set up

```svelte
<script lang="ts">
  import { Alert } from "flowbite-svelte";
</script>
```

## Default alert

Use semantic color variants to convey meaning:

- **brand**: General information or tips
- **danger**: Errors or critical warnings  
- **success**: Successful operations
- **warning**: Caution messages
- **dark**: Neutral information

```svelte
<script lang="ts">
  import { Alert } from "flowbite-svelte";
</script>

<Alert color="brand">
  <span class="font-medium">Info alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="danger">
  <span class="font-medium">Danger alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="success">
  <span class="font-medium">Success alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="warning">
  <span class="font-medium">Warning alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="dark">
  <span class="font-medium">Dark alert!</span>
  Change a few things up and try submitting again.
</Alert>
```

## Alerts with icon

Include descriptive icons to improve visual scanning and quick identification.

```svelte
<script lang="ts">
  import { Alert } from "flowbite-svelte";
  import { InfoCircleSolid } from "flowbite-svelte-icons";
</script>

<Alert color="brand">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Info alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="danger">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Danger alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="success">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Success alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="warning">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Warning alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="dark">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Dark alert!</span>
  Change a few things up and try submitting again.
</Alert>
```

## Bordered alerts

Add border accents for a more subtle appearance while maintaining visual distinction.

```svelte
<script lang="ts">
  import { Alert } from "flowbite-svelte";
  import { InfoCircleSolid } from "flowbite-svelte-icons";
</script>

<Alert border color="brand">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Info alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert border color="danger">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Danger alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert border color="success">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Success alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert border color="warning">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Warning alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert border color="dark">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Dark alert!</span>
  Change a few things up and try submitting again.
</Alert>
```

## Alerts with list

Display lists for multiple error messages, instructions, or grouped information.

```svelte
<script lang="ts">
  import { Alert, Li, List } from "flowbite-svelte";
  import { InfoCircleSolid } from "flowbite-svelte-icons";
</script>

<Alert color="brand" listContent class="items-start!">
  {#snippet icon()}<span>
      <InfoCircleSolid class="h-5 w-5" />
      <span class="sr-only">Info</span>
    </span>
  {/snippet}
  <p class="font-medium">Ensure that these requirements are met:</p>
  <ul class="ms-4 mt-1.5 list-inside list-disc">
    <li>At least 10 characters (and up to 100 characters)</li>
    <li>At least one lowercase character</li>
    <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
  </ul>
</Alert>
<Alert color="danger" listContent class="items-start!">
  {#snippet icon()}<span>
      <InfoCircleSolid class="h-5 w-5" />
      <span class="sr-only">Info</span>
    </span>
  {/snippet}
  <p class="font-medium">Ensure that these requirements are met:</p>
  <List class="ms-4 mt-1.5">
    <Li>At least 10 characters (and up to 100 characters)</Li>
    <Li>At least one lowercase character</Li>
    <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
  </List>
</Alert>
```

## Dismissable alerts

Enable dismissal for temporary messages like notices or one-time tips. Customize the animation using the `transition` and `params` props. Use the `closeIcon` snippet to override the default close button.

```svelte
<script lang="ts">
  import { Alert } from "flowbite-svelte";
  import { InfoCircleSolid, EnvelopeSolid } from "flowbite-svelte-icons";
  import { fly } from "svelte/transition";
</script>

<Alert color="brand" dismissable>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  A simple info alert with an
  <a href="/" class="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900">example link</a>
  . Give it a click if you like.
</Alert>
<Alert color="danger" dismissable>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  A simple danger alert with an
  <a href="/" class="font-semibold underline hover:text-red-800 dark:hover:text-red-900">example link</a>
  . Give it a click if you like.
</Alert>
<Alert color="success" dismissable>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  A simple success alert with an
  <a href="/" class="font-semibold underline hover:text-green-800 dark:hover:text-green-900">example link</a>
  . Give it a click if you like.
</Alert>
<Alert color="warning" dismissable transition={fly} params={{ x: 200 }}>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  An alert with non default animation - fly away.
</Alert>
<Alert color="dark" dismissable closeIcon={EnvelopeSolid}>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  An alert with the custom dismissal button.
</Alert>
```

## Border accent

Use left border accents for a clean, modern look ideal for sidebars or embedded notifications.

```svelte
<script lang="ts">
  import { Alert } from "flowbite-svelte";
  import { InfoCircleSolid } from "flowbite-svelte-icons";
</script>

<Alert color="brand" borderAccent rounded={false}>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Info alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="danger" borderAccent rounded={false}>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Danger alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="success" borderAccent rounded={false}>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Success alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="warning" borderAccent rounded={false}>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Warning alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="dark" borderAccent rounded={false}>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Dark alert!</span>
  Change a few things up and try submitting again.
</Alert>
```

## Additional content

Include expandable content for help text, detailed explanations, or rich content with links.

```svelte
<script lang="ts">
  import { Alert, Button } from "flowbite-svelte";
  import { InfoCircleSolid, EyeSolid } from "flowbite-svelte-icons";
</script>

<Alert listContent color="brand" class="block">
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <InfoCircleSolid class="h-5 w-5" />
      <span class="text-lg font-medium">This is an info alert</span>
    </div>
  </div>
  <p class="mt-2 mb-4">More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
  <Button size="xs"><EyeSolid class="me-2 h-4 w-4" />View more</Button>
</Alert>
<Alert listContent color="success" class="block">
  <div class="flex items-center gap-3">
    <InfoCircleSolid class="h-5 w-5" />
    <span class="text-lg font-medium">This is a success alert</span>
  </div>
  <p class="mt-2 mb-4 text-sm">
    More info about this success alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
  </p>
  <Button size="xs" color="green"><EyeSolid class="me-2 h-4 w-4" />View more</Button>
</Alert>
```

## Custom color

Use the `class` prop with `color="none"` to create fully custom-styled alerts. The `closeColor` prop allows independent control of the close button styling, letting you mix custom alert colors with predefined close button colors or use `closeColor="none"` for complete customization.

```svelte
<script lang="ts">
  import { Alert } from "flowbite-svelte";
  import { InfoCircleSolid } from "flowbite-svelte-icons";
</script>

<!-- Simple custom color override -->
<Alert class="bg-sky-500 text-white">Simple custom colored alert</Alert>

<!-- Custom color with icon -->
<Alert class="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Custom purple alert!</span>
  With icon and custom styling.
</Alert>

<!-- Custom color with border -->
<Alert border class="border-teal-300 bg-teal-50 text-teal-900 dark:border-teal-700 dark:bg-teal-900 dark:text-teal-100">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Custom teal alert!</span>
  With border styling.
</Alert>

<!-- Dismissable with color="none" for full custom control -->
<Alert dismissable color="none" closeColor="none" class="bg-indigo-100 text-indigo-900 dark:bg-indigo-900 dark:text-indigo-100">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Custom dismissable!</span>
  Use color="none" and closeColor="none" for full control.
</Alert>

<!-- Dismissable with predefined closeColor -->
<Alert dismissable color="none" closeColor="danger" class="bg-pink-100 text-pink-900 dark:bg-pink-900 dark:text-pink-100">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Custom alert with danger close button!</span>
  Mix custom colors with predefined closeColor.
</Alert>
```

## Events

Handle dismissal interactions with the `onclick` event to track dismissals, save state, or trigger actions.

```svelte
<script lang="ts">
  import { Alert, Button } from "flowbite-svelte";
  let alertStatus = $state(true);

  const closeAlert = () => {
    alertStatus = false;
  };

  const showAlert = () => {
    alertStatus = true;
  };
</script>

{#if alertStatus}
  <Alert dismissable onclick={closeAlert}>
    <span class="font-medium">Info alert!</span>
    You can close this alert by clicking the close button.
  </Alert>
{:else}
  <div class="mt-4">
    <Button onclick={showAlert}>Show Alert Again</Button>
  </div>
{/if}
```

## Accessibility

- Uses ARIA roles to announce messages to screen readers
- Never relies on color alone—always includes text or icons
- Dismissable alerts support keyboard interactions
- Proper focus management when dismissing

## See also

- [Toast](https://flowbite-svelte.com/llm/components/toast.md)
- [Modal](https://flowbite-svelte.com/llm/components/modal.md)
- [Banner](https://flowbite-svelte.com/llm/components/banner.md)
- [Badge](https://flowbite-svelte.com/llm/components/badge.md)


## Component data

### Alert

#### Types

[AlertProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L224)

#### Props

- children
- icon
- alertStatus: $bindable(true)
- closeIcon: CloseIcon
- color: "brand"
- closeColor
- rounded: true
- border
- class: className
- dismissable
- transition: fade
- params
- listContent
- borderAccent


## References

- [Flowbite Alerts](https://flowbite.com/docs/components/alerts/)
