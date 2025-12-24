# Svelte Button Group - Flowbite


The button group component from flowbite-svelte can be used to stack together multiple buttons and links inside a single element.

## Setup

```svelte
<script lang="ts">
  import { ButtonGroup, Button } from "flowbite-svelte";
</script>
```

## Default

Use the following code to stack together buttons into a single group. Grouped buttons provide visual cohesion and make it clear that actions are related. The first and last buttons have rounded corners while middle buttons have square edges, creating a unified appearance.

```svelte
<script lang="ts">
  import { ButtonGroup, Button } from "flowbite-svelte";
</script>

<ButtonGroup class="*:ring-primary-700!">
  <Button>Profile</Button>
  <Button>Settings</Button>
  <Button>Messages</Button>
</ButtonGroup>
```

## Disabled

Disable individual buttons within a group to indicate unavailable actions while maintaining the group's visual integrity. 

Disabled buttons should remain visible to maintain predictable UI layout and help users understand all available options, even if temporarily unavailable.

```svelte
<script lang="ts">
  import { ButtonGroup, Button } from "flowbite-svelte";
</script>

<div class="flex flex-col gap-4">
  <ButtonGroup>
    <Button disabled>Profile</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  </ButtonGroup>

  <ButtonGroup disabled>
    <Button>Profile</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  </ButtonGroup>
</div>
```

## More examples

Multiple button group variations demonstrating different color schemes and styles.

Choose color combinations that maintain sufficient contrast and clearly communicate the relationship between grouped buttons.

```svelte
<script lang="ts">
  import { ButtonGroup, Button, GradientButton } from "flowbite-svelte";
</script>

<div class="text-gray-900 dark:text-gray-100">
  <div class="py-4">Pills</div>
  <ButtonGroup class="space-x-px">
    <Button pill color="purple">Profile</Button>
    <Button pill color="purple">Settings</Button>
    <Button pill color="purple">Messages</Button>
  </ButtonGroup>
  <div class="py-4">Standard buttons</div>
  <ButtonGroup>
    <Button color="red">Profile</Button>
    <Button color="green">Settings</Button>
    <Button color="yellow">Messages</Button>
  </ButtonGroup>
  <div class="py-4">Outline</div>
  <ButtonGroup>
    <Button outline color="red">Profile</Button>
    <Button outline color="green">Settings</Button>
    <Button outline color="yellow">Messages</Button>
  </ButtonGroup>
  <div class="py-4">Gradient with shadows</div>
  <ButtonGroup>
    <GradientButton shadow color="green">Profile</GradientButton>
    <GradientButton shadow color="pink">Settings</GradientButton>
    <GradientButton shadow color="teal">Messages</GradientButton>
  </ButtonGroup>
  <div class="py-4">Dualtone gradient</div>
  <ButtonGroup class="space-x-px">
    <GradientButton color="purpleToBlue">Profile</GradientButton>
    <GradientButton color="cyanToBlue">Settings</GradientButton>
    <GradientButton color="greenToBlue">Messages</GradientButton>
  </ButtonGroup>
  <div class="py-4">Dualtone gradient pill</div>
  <ButtonGroup class="space-x-px">
    <GradientButton pill color="purpleToBlue">Profile</GradientButton>
    <GradientButton pill color="cyanToBlue">Settings</GradientButton>
    <GradientButton pill color="greenToBlue">Messages</GradientButton>
  </ButtonGroup>
</div>
```

## Button group as links

You can also use the button group component as links.

Using semantic `<a>` tags instead of buttons improves SEO and provides native browser navigation features like "open in new tab" and proper link handling.

```svelte
<script lang="ts">
  import { ButtonGroup, Button } from "flowbite-svelte";
</script>

<ButtonGroup class="*:ring-primary-700!">
  <Button href="/">Profile</Button>
  <Button href="/">Settings</Button>
  <Button href="/">Messages</Button>
</ButtonGroup>
```

## Group buttons with icons

You can also use SVG icons inside the grouped buttons.

```svelte
<script lang="ts">
  import { ButtonGroup, Button } from "flowbite-svelte";
  import { UserCircleSolid, AdjustmentsVerticalOutline, DownloadSolid } from "flowbite-svelte-icons";
</script>

<ButtonGroup class="*:ring-primary-700!">
  <Button>
    <UserCircleSolid class="me-2 h-4 w-4" />
    Profile
  </Button>
  <Button>
    <AdjustmentsVerticalOutline class="me-2 h-4 w-4" />
    Settings
  </Button>
  <Button>
    <DownloadSolid class="me-2 h-4 w-4" />
    Download
  </Button>
</ButtonGroup>
```

## Outline

Group a series of buttons together on a single line or stack them in a vertical column.

Outline style maintains button hierarchy while keeping the interface feeling lighter and less cluttered.

```svelte
<script lang="ts">
  import { ButtonGroup, Button } from "flowbite-svelte";
</script>

<ButtonGroup>
  <Button outline color="dark">Profile</Button>
  <Button outline color="dark">Settings</Button>
  <Button outline color="dark">Messages</Button>
</ButtonGroup>
```

## Outline with icon

Combine outline styling with icons for a refined, modern appearance. 

The outline style with icons strikes a balance between clarity and subtlety, making it ideal for frequently accessed controls that shouldn't dominate the interface.

```svelte
<script lang="ts">
  import { ButtonGroup, Button } from "flowbite-svelte";
  import { UserCircleSolid, AdjustmentsVerticalOutline, DownloadSolid } from "flowbite-svelte-icons";
</script>

<ButtonGroup>
  <Button outline color="dark">
    <UserCircleSolid class="me-2 h-4 w-4" />
    Profile
  </Button>
  <Button outline color="dark">
    <AdjustmentsVerticalOutline class="me-2 h-4 w-4" />
    Settings
  </Button>
  <Button outline color="dark">
    <DownloadSolid class="me-2 h-4 w-4" />
    Download
  </Button>
</ButtonGroup>
```

## Events

You can add the `onclick` event to the `Button` component.

Each button in a group can have its own event handler, enabling sophisticated interaction patterns while maintaining visual cohesion.

```svelte
<script lang="ts">
  import { ButtonGroup, Button } from "flowbite-svelte";
  const handleClick = () => {
    alert("Clicked");
  };
</script>

<ButtonGroup class="*:ring-primary-700!">
  <Button onclick={handleClick}>Click me</Button>
  <Button>Settings</Button>
  <Button>Messages</Button>
</ButtonGroup>
```

## Accessibility

The Button Group component follows accessibility best practices:

- **Keyboard Navigation**: All buttons are keyboard accessible using Tab and Enter/Space
- **Focus Indicators**: Clear focus states show which button is selected
- **ARIA Roles**: Use appropriate ARIA roles for button groups (like `role="group"`)
- **Label Association**: Ensure all buttons have clear, descriptive labels
- **Touch Targets**: Maintain minimum 44x44px target size for mobile
- **Semantic HTML**: Use `<button>` for actions, `<a>` for navigation
- **Screen Readers**: Button text or aria-labels are properly announced

## See also

- [Button toggle](https://flowbite-svelte.com/llm/extend/button-toggle.md)
- [Buttons](https://flowbite-svelte.com/llm/components/buttons.md)
- [List group](https://flowbite-svelte.com/llm/components/list-group.md)
- [Radio](https://flowbite-svelte.com/llm/forms/radio.md)
- [Checkbox](https://flowbite-svelte.com/llm/forms/checkbox.md)


## Component data

### ButtonGroup

#### Types

[ButtonGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L318)

#### Props

- children
- size: "md"
- disabled
- class: className


## References

- [Flowbite Button Group](https://flowbite.com/docs/components/button-group/)
