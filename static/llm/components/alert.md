# Svelte Alert - Flowbite


The alert component can be used to provide information to your users such as success or error messages, but also highlighted information complementing the normal flow of paragraphs and headers on a page. Flowbite also includes dismissable alerts which can be hidden by the users by clicking on the close icon.

## Set up

Import Alert and set variables in the script tag.

```svelte
<script lang="ts">
  import { Alert } from "flowbite-svelte";
</script>
```

## Default alert

Use the following examples of alert components to show messages as feedback to your users.

```svelte
<script lang="ts">
  import { Alert } from "flowbite-svelte";
</script>

<Alert>
  <span class="font-medium">Default alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="blue">
  <span class="font-medium">Info alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="red">
  <span class="font-medium">Danger alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="green">
  <span class="font-medium">Success alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="yellow">
  <span class="font-medium">Warning alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="secondary">
  <span class="font-medium">Dark alert!</span>
  Change a few things up and try submitting again.
</Alert>
```

## Alerts with icon

You can also include a descriptive icon to complement the message inside the alert component with the following example.

```svelte
<script lang="ts">
  import { Alert } from "flowbite-svelte";
  import { InfoCircleSolid } from "flowbite-svelte-icons";
</script>

<Alert>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Default alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="blue">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Info alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="red">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Danger alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="green">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Success alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="yellow">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Warning alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="secondary">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Dark alert!</span>
  Change a few things up and try submitting again.
</Alert>
```

## Bordered alerts

Use this example to add a border accent to the alert component instead of just a plain background.

```svelte
<script lang="ts">
  import { Alert } from "flowbite-svelte";
  import { InfoCircleSolid } from "flowbite-svelte-icons";
</script>

<Alert border>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Default alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert border color="blue">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Info alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert border color="red">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Danger alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert border color="green">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Success alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert border color="yellow">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Warning alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert border color="secondary">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Dark alert!</span>
  Change a few things up and try submitting again.
</Alert>
```

## Alerts with list

Use this example to show a list and a description inside an alert component.

```svelte
<script lang="ts">
  import { Alert, Li, List } from "flowbite-svelte";
  import { InfoCircleSolid } from "flowbite-svelte-icons";
</script>

<Alert class="items-start!">
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
<Alert color="blue" class="items-start!">
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

Use the following alert elements that are also dismissable.

You can attach the `transition` and `params` prop to control the dissimal animation. By default `fade` svelte function is used. See the example below.

You can use `closeIcon` prop to override the default close button. See the last example.

```svelte
<script lang="ts">
  import { Alert } from "flowbite-svelte";
  import { InfoCircleSolid, EnvelopeSolid } from "flowbite-svelte-icons";
  import { fly } from "svelte/transition";
</script>

<Alert dismissable>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  A simple default alert with an
  <a href="/" class="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900">example link</a>
  . Give it a click if you like.
</Alert>
<Alert color="blue" dismissable>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  A simple info alert with an
  <a href="/" class="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900">example link</a>
  . Give it a click if you like.
</Alert>
<Alert color="red" dismissable>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  A simple info alert with an
  <a href="/" class="font-semibold underline hover:text-red-800 dark:hover:text-red-900">example link</a>
  . Give it a click if you like.
</Alert>
<Alert color="green" dismissable>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  A simple info alert with an
  <a href="/" class="font-semibold underline hover:text-green-800 dark:hover:text-green-900">example link</a>
  . Give it a click if you like.
</Alert>
<Alert color="yellow" dismissable transition={fly} params={{ x: 200 }}>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  An alert with non default animation - fly away.
</Alert>
<Alert color="purple" dismissable closeIcon={EnvelopeSolid}>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  An alert with the custom dismissal button. slot
</Alert>
```

## Border accent

Use the following alert components with a border accent as an alternative style.

```svelte
<script lang="ts">
  import { Alert } from "flowbite-svelte";
  import { InfoCircleSolid } from "flowbite-svelte-icons";
</script>

<Alert rounded={false} class="border-t-4">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Info alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="red" rounded={false} class="border-t-4">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Danger alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="green" rounded={false} class="border-t-4">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Success alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="yellow" rounded={false} class="border-t-4">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Warning alert!</span>
  Change a few things up and try submitting again.
</Alert>
<Alert color="secondary" rounded={false} class="flex-row-reverse border-t-4">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Dark alert!</span>
  Change a few things up and try submitting again.
</Alert>
```

## Additional content

The following alert components can be used if you wish to disclose more information inside the element.

```svelte
<script lang="ts">
  import { Alert, Button } from "flowbite-svelte";
  import { InfoCircleSolid, EyeSolid } from "flowbite-svelte-icons";
</script>

<Alert>
  <div class="flex items-center gap-3">
    <InfoCircleSolid class="h-5 w-5" />
    <span class="text-lg font-medium">This is a info alert</span>
  </div>
  <p class="mt-2 mb-4 text-sm">
    More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
  </p>
  <div class="flex gap-2">
    <Button size="xs"><EyeSolid class="me-2 h-4 w-4" />View more</Button>
    <Button size="xs" outline>Go to Home</Button>
  </div>
</Alert>
<Alert color="green">
  <div class="flex items-center gap-3">
    <InfoCircleSolid class="h-5 w-5" />
    <span class="text-lg font-medium">This is a info alert</span>
  </div>
  <p class="mt-2 mb-4 text-sm">
    More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
  </p>
  <div class="flex gap-2">
    <Button size="xs" color="green"><EyeSolid class="me-2 h-4 w-4" />View more</Button>
    <Button size="xs" outline color="green">Go to Home</Button>
  </div>
</Alert>
```

## Custom color

Use `class` to add your custom colors classes.

```svelte
<script lang="ts">
  import { Alert } from "flowbite-svelte";
</script>

<Alert class="bg-sky-500 text-white">Your content</Alert>
```

## Events

Use the `onclick` event with `dismissable` prop.

```svelte
<script lang="ts">
  import { Alert } from "flowbite-svelte";
  let alertStatus = $state(true);
  const closeAlert = () => {
    alert("Clicked closeAlert.");
    alertStatus = !alertStatus;
  };
</script>

<Alert dismissable onclick={closeAlert} bind:alertStatus>Close me</Alert>
```

## Component data

### Alert

#### Types

[AlertProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L229)

#### Props

- children
- icon
- alertStatus: $bindable(true)
- closeIcon: CloseIcon
- color: "primary"
- rounded: true
- border
- class: className
- dismissable
- transition: fade
- params


## References

- [Flowbite Alerts](https://flowbite.com/docs/components/alerts/)
