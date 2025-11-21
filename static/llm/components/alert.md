# Svelte Alert - Flowbite


The alert component can be used to provide important information to your users such as success or error messages, warnings, or highlighted information that complements the normal flow of content on a page. Alerts are perfect for displaying feedback after form submissions, system notifications, or drawing attention to critical information.

It also includes dismissable alerts which can be hidden by users by clicking on the close icon, allowing for a cleaner interface once the message has been acknowledged.

## Set up

Import Alert and set variables in the script tag.

```svelte
<script lang="ts">
  import { Alert } from "flowbite-svelte";
</script>
```

## Default alert

Use the following examples of alert components to show messages as feedback to your users. Each color variant conveys different semantic meanings:

- **Info** (blue): General information or tips
- **Danger** (red): Errors or critical warnings
- **Success** (green): Successful operations or confirmations
- **Warning** (yellow): Caution messages or important notices
- **Dark** (gray): Neutral information or less critical messages

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

You can also include a descriptive icon to complement the message inside the alert component. Icons help users quickly identify the type of message and improve visual scanning, especially useful in applications with multiple alerts.

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

Use this example to add a border accent to the alert component instead of just a plain background. Bordered alerts provide a more subtle appearance while still maintaining clear visual distinction, making them ideal for less intrusive notifications.

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

Use this example to show a list and a description inside an alert component. This is particularly useful for displaying:

- Multiple error messages from form validation
- Step-by-step instructions or requirements
- Lists of affected items or changes
- Grouped information that requires user attention

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

Use the following alert elements that are also dismissable. Dismissable alerts are useful for temporary messages that users can acknowledge and remove from view, such as cookie notices, promotional banners, or one-time tips.

You can attach the `transition` and `params` prop to control the dismissal animation. By default the `fade` Svelte transition function is used. You can customize the animation with different transition types (slide, blur, fly) and parameters (duration, easing).

You can use the `closeIcon` snippet to override the default close button with your own custom icon or element. See the last example below.

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

Use the following alert components with a border accent as an alternative style. The left border accent provides a clean, modern look that draws attention without being overwhelming, perfect for sidebars or embedded notifications.

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

The following alert components can be used if you wish to disclose more information inside the element. This pattern is useful for:

- Expandable help text or documentation
- Detailed error explanations with suggested solutions
- Rich content with links and formatting
- Multi-paragraph announcements or updates

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

Use the `class` prop to add your custom color classes and create alerts that match your brand or design system. You can combine Tailwind CSS background, border, and text color utilities to achieve any desired appearance.

```svelte
<script lang="ts">
  import { Alert } from "flowbite-svelte";
</script>

<Alert class="bg-sky-500 text-white">Your content</Alert>
```

## Events

Use the `onclick` event with the `dismissable` prop to handle user interactions when the alert is dismissed. This allows you to:

- Track which alerts users are dismissing
- Save dismissal state to prevent showing the same alert again
- Trigger other actions when an alert is closed
- Log analytics events

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

## Accessibility

The Alert component follows accessibility best practices:

- **ARIA Roles**: Alerts use appropriate ARIA roles to announce important messages to screen readers
- **Color Independence**: Never rely on color alone to convey meaning; always include text or icons
- **Keyboard Navigation**: Dismissable alerts can be closed using keyboard interactions
- **Focus Management**: When dismissing alerts, focus is properly managed to maintain usability

## Best Practices

When using alerts, consider these guidelines:

- **Be Concise**: Keep alert messages brief and actionable
- **Use Appropriately**: Don't overuse alerts as they can overwhelm users
- **Provide Context**: Include enough information for users to understand and act
- **Allow Dismissal**: For non-critical alerts, enable dismissal to reduce clutter
- **Position Wisely**: Place alerts where they're most relevant to the action or content

## See also

<Seealso links={relatedLinks} />

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
