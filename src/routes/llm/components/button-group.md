# Svelte Button Group - Flowbite


The button group component from flowbite-svelte can be used to stack together multiple buttons and links inside a single element.

Button groups are perfect for:
- **Segmented controls** - choosing between mutually exclusive options
- **Toolbars** - grouping related actions (text formatting, alignment)
- **View switchers** - toggling between list, grid, or table views
- **Social sharing** - organizing share buttons for different platforms
- **Pagination controls** - previous, numbers, next buttons together
- **Filter groups** - related filter options in a cohesive unit
- **Action menus** - primary and secondary actions grouped logically
- **Navigation tabs** - compact tab navigation for smaller spaces

## Setup

```svelte
<script lang="ts">
  import { ButtonGroup, Button } from "flowbite-svelte";
</script>
```

## Default

Use the following code to stack together buttons into a single group. Grouped buttons provide visual cohesion and make it clear that actions are related. The first and last buttons have rounded corners while middle buttons have square edges, creating a unified appearance.

This pattern is especially effective for:
- Creating a visual hierarchy of related actions
- Saving space by removing gaps between buttons
- Improving scannability of available options
- Reducing visual clutter in dense interfaces

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

Disable individual buttons within a group to indicate unavailable actions while maintaining the group's visual integrity. This is useful for:
- **Conditional actions** - showing options that aren't currently available
- **Progressive disclosure** - revealing actions as prerequisites are met
- **Permission-based UI** - displaying actions user lacks permission for
- **State-dependent controls** - disabling actions based on current state

Disabled buttons should remain visible to maintain predictable UI layout and help users understand all available options, even if temporarily unavailable.

```svelte
<script lang="ts">
  import { ButtonGroup, Button } from "flowbite-svelte";
</script>

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
```

## More examples

Multiple button group variations demonstrating different color schemes and styles. Different visual treatments can:
- **Distinguish groups** by purpose or importance
- **Match brand colors** and design systems
- **Provide visual hierarchy** between primary and secondary groups
- **Create emphasis** for critical action groups
- **Support theming** across light and dark modes

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

You can also use the button group component as links. Link-based button groups are ideal for:
- **Navigation menus** - related navigation options
- **Category filters** - linking to different filtered views
- **Language switchers** - switching between locale versions
- **Tab navigation** - navigating between different sections
- **Breadcrumb alternatives** - showing hierarchical navigation paths

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

You can also use SVG icons inside the grouped buttons. Icons enhance button groups by:
- **Improving recognition** - visual symbols are processed faster than text
- **Saving space** - icons can replace or supplement text labels
- **Supporting internationalization** - reducing text translation needs
- **Creating visual patterns** - consistent icons help users scan quickly
- **Adding personality** - unique icons reinforce brand identity

Best practices:
- Use consistent icon style (outlined or filled)
- Ensure icons clearly represent their actions
- Combine with text labels when meaning isn't obvious
- Maintain adequate touch target size (minimum 44x44px)

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

Group a series of buttons together on a single line or stack them in a vertical column. Outline buttons provide a more subtle appearance that works well for:
- **Secondary actions** - less emphasis than filled buttons
- **Dense interfaces** - reducing visual weight
- **Light backgrounds** - maintaining contrast without heavy fills
- **Multiple groups** - distinguishing from primary action groups
- **Hover states** - providing clear interactive feedback

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

Combine outline styling with icons for a refined, modern appearance. This combination is particularly effective in:
- **Toolbars** - professional software interfaces
- **Media controls** - playback, volume, settings
- **Text editors** - formatting and editing tools
- **Dashboard controls** - filtering and view options
- **Settings panels** - configuration toggles

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

You can add the `onclick` event to the `Button` component. Event handling allows you to:
- **Track interactions** for analytics and metrics
- **Trigger actions** like API calls or state updates
- **Provide feedback** through toast notifications or modals
- **Implement toggles** for segmented controls
- **Manage selections** in button toggle groups

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

## Best Practices

When implementing button groups, consider these guidelines:

- **Limit Group Size**: Keep groups to 3-5 buttons for optimal usability
- **Consistent Sizing**: All buttons in a group should have the same height
- **Clear Labels**: Use concise, action-oriented labels (1-3 words)
- **Logical Order**: Arrange buttons in order of importance or workflow
- **Visual Separation**: Use button groups to separate distinct action sets
- **Responsive Design**: Consider stacking buttons vertically on mobile
- **Single Action**: Only one button should trigger per click
- **Avoid Mixing**: Don't mix buttons and links in the same group
- **Color Consistency**: Use consistent colors within each group
- **Active States**: Clearly indicate which button is currently selected (for toggles)

## Common Patterns

**Segmented Control**: Single-select toggle where one button is always active
- Text alignment (left, center, right)
- View modes (list, grid, map)
- Time ranges (day, week, month, year)

**Toolbar**: Multiple independent actions grouped together
- Text formatting (bold, italic, underline)
- Undo/redo controls
- Zoom controls

**Pagination**: Sequential navigation controls
- Previous, page numbers, next
- First, previous, next, last
- Load more patterns

**Social Sharing**: Multiple sharing options
- Share to different platforms
- Copy link, email, print options

## Design Considerations

- **Spacing**: Buttons share borders, creating seamless appearance
- **Corner Radius**: First and last buttons maintain rounded corners
- **Hover States**: Individual buttons should respond to hover
- **Active States**: Selected buttons need distinct visual treatment
- **Dividers**: Consider adding subtle dividers between buttons
- **Orientation**: Support both horizontal and vertical layouts
- **Responsive**: Adapt layout for different screen sizes
- **Z-index**: Manage layering for hover/focus states

## See also

- [Button toggle](https://flowbite-svelte.com/llm/extend/button-toggle.md)
- [Buttons](https://flowbite-svelte.com/llm/components/buttons.md)
- [List group](https://flowbite-svelte.com/llm/components/list-group.md)
- [Radio](https://flowbite-svelte.com/llm/forms/radio.md)
- [Checkbox](https://flowbite-svelte.com/llm/forms/checkbox.md)


## Component data

### ButtonGroup

#### Types

[ButtonGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L333)

#### Props

- children
- size: "md"
- disabled
- class: className


## References

- [Flowbite Button Group](https://flowbite.com/docs/components/button-group/)
