# Svelte Avatar - Flowbite


The avatar component can be used as a visual identifier for a user profile on your website. Avatars help users quickly recognize individuals in lists, comments, navigation, and throughout your application. You can use the examples to modify the styles and sizes of these components using the utility classes from Tailwind CSS.

Common use cases include user profile headers, comment sections, team member displays, chat interfaces, and navigation menus.

## Setup

Import `Avatar`. If you are using the user dropdown, import `Dropdown`, `DropdownHeader`, `DropdownItem`. If you are using tooltip for avatar import `Tooltip`.

```svelte
<script lang="ts">
  import { Avatar, Dropdown, DropdownHeader, DropdownItem, Tooltip } from "flowbite-svelte";
</script>
```

## Default avatar

Use this example to create circle and rounded avatar on an image element. The rounded style provides a softer, more modern appearance, while the circular style is the most common and recognizable avatar format.

```svelte
<script lang="ts">
  import { Avatar } from "flowbite-svelte";
</script>

<div class="flex space-x-4 rtl:space-x-reverse">
  <Avatar src="/images/profile-picture-2.webp" />
  <Avatar src="/images/profile-picture-2.webp" cornerStyle="rounded" />
</div>
```

## Icon avatar

When no user image is available, you can use an icon as a placeholder. This provides a consistent fallback that maintains visual balance in your UI while still being recognizable as a user avatar.

```svelte
<script lang="ts">
  import { Avatar } from "flowbite-svelte";
  import { BugOutline } from "flowbite-svelte-icons";
</script>

<Avatar>
  <BugOutline />
</Avatar>
```

## Custom dot

Customize the status indicator dot to match your design requirements. You can change colors, sizes, and positioning to indicate different states like online, offline, busy, away, or custom statuses specific to your application.

```svelte
<script lang="ts">
  import { Avatar, Indicator } from "flowbite-svelte";
  import { BugOutline } from "flowbite-svelte-icons";
</script>

<Avatar src="/images/profile-picture-3.webp">
  {#snippet indicator()}
    <Indicator color="gray" border size="xl" placement="top-right">
      <BugOutline />
    </Indicator>
  {/snippet}
</Avatar>
```

## Bordered

You can apply a border around the avatar component to create visual separation and emphasis. This is particularly useful when avatars are placed on colored backgrounds or need to stand out more prominently.

You can use the `ring-&#123;color&#125;` class from Tailwind CSS to modify the ring color and match your brand or UI theme.

```svelte
<script lang="ts">
  import { Avatar } from "flowbite-svelte";
</script>

<Avatar src="/images/profile-picture-2.webp" border />
<Avatar src="/images/profile-picture-2.webp" border class="ring-red-400 dark:ring-red-300" />
```

## Placeholder

When there is no custom image available, a placeholder is displayed. Placeholders ensure your layout remains consistent and professional even when user profile images haven't been uploaded yet.

```svelte
<script lang="ts">
  import { Avatar } from "flowbite-svelte";
</script>

<Avatar />
<Avatar cornerStyle="rounded" />
<Avatar border />
<Avatar cornerStyle="rounded" border />
```

## Placeholder initials

This example can be used to show the initials of the user's first and last name as a placeholder when no profile picture is available. This creates a more personalized experience than generic icons and helps users identify individuals even without photos.

Initial-based avatars are particularly useful in:
- Business applications where photos may not be required
- Team directories with many members
- Comment sections or collaborative tools
- Administrative interfaces

```svelte
<script lang="ts">
  import { Avatar } from "flowbite-svelte";
</script>

<Avatar>JL</Avatar>
```

## Avatar tooltip

Use this example to show a tooltip when hovering over the avatar. Tooltips can display additional information such as full names, job titles, status messages, or other relevant user details without cluttering the interface.

```svelte
<script lang="ts">
  import { Avatar, Tooltip } from "flowbite-svelte";
</script>

<Avatar data-name="Jese Leos" src="/images/profile-picture-1.webp" />
<Tooltip>Jese Leos</Tooltip>
<Avatar data-name="Robert Gouth" src="/images/profile-picture-2.webp" />
<Tooltip>Robert Gouth</Tooltip>
<Avatar data-name="Bonnie Green" src="/images/profile-picture-3.webp" />
<Tooltip>Bonnie Green</Tooltip>
```

## Dot indicator

Use a dot element relative to the avatar component as an indicator for the user's status (e.g., online, offline, busy, away). Status indicators help users understand availability in real-time communication tools, collaboration platforms, and social applications.

Different colors typically represent:
- **Green**: Online/Available
- **Yellow/Orange**: Away/Idle
- **Red**: Busy/Do Not Disturb
- **Gray**: Offline

```svelte
<script lang="ts">
  import { Avatar } from "flowbite-svelte";
</script>

<Avatar src="/images/profile-picture-3.webp" dot={{ color: "red" }} />
<Avatar src="/images/profile-picture-3.webp" dot={{ placement: "top-right", color: "red" }} cornerStyle="rounded" />
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: "bottom-right", color: "green" }} />
<Avatar src="/images/profile-picture-5.webp" dot={{ placement: "bottom-right" }} cornerStyle="rounded" />

<Avatar dot={{}} />
```

## Stacked

Use this example if you want to stack a group of users by overlapping the avatar components. Stacked avatars are perfect for showing:

- Team members on a project
- Participants in a meeting or chat
- Contributors to a document or task
- Multiple assignees without taking up excessive space

This pattern saves space while still providing visual representation of all involved users. Include a count indicator when there are more users than can be displayed.

```svelte
<script lang="ts">
  import { Avatar } from "flowbite-svelte";
</script>

<div class="mb-5 flex">
  <Avatar src="/images/profile-picture-1.webp" stacked />
  <Avatar src="/images/profile-picture-2.webp" stacked />
  <Avatar src="/images/profile-picture-3.webp" stacked />
  <Avatar stacked />
</div>
<div class="flex">
  <Avatar src="/images/profile-picture-1.webp" stacked />
  <Avatar src="/images/profile-picture-2.webp" stacked />
  <Avatar src="/images/profile-picture-3.webp" stacked />
  <Avatar stacked href="/" class="bg-gray-700 text-sm text-white hover:bg-gray-600">+99</Avatar>
</div>
```

## Avatar text

This example can be used if you want to show additional information in the form of text elements such as the user's name and join date. Combining avatars with descriptive text provides full context about the user, making it ideal for:

- User profile cards
- Directory listings
- Comment headers
- Team member displays
- Author bylines

```svelte
<script lang="ts">
  import { Avatar } from "flowbite-svelte";
</script>

<div class="flex items-center space-x-4 rtl:space-x-reverse">
  <Avatar src="/images/profile-picture-1.webp" cornerStyle="rounded" />
  <div class="space-y-1 font-medium dark:text-white">
    <div>Jese Leos</div>
    <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
  </div>
</div>
```

## User dropdown

Use this example if you want to show a dropdown menu when clicking on the avatar component. Avatar dropdowns are commonly used in navigation headers for:

- Quick access to profile settings
- Account management options
- User-specific actions (sign out, preferences, etc.)
- Status changes
- Switching between accounts or workspaces

```svelte
<script lang="ts">
  import { Avatar, Dropdown, DropdownHeader, DropdownItem, DropdownGroup } from "flowbite-svelte";
</script>

<Avatar id="user-drop" src="/images/profile-picture-3.webp" class="cursor-pointer" dot={{ color: "green" }} />
<Dropdown triggeredBy="#user-drop">
  <DropdownHeader>
    <span class="block text-sm">Bonnie Green</span>
    <span class="block truncate text-sm font-medium">name@flowbite.com</span>
  </DropdownHeader>
  <DropdownGroup>
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
  </DropdownGroup>
  <DropdownGroup>
    <DropdownItem>Sign out</DropdownItem>
  </DropdownGroup>
</Dropdown>
```

## Sizes

You can set the `size` property to preset values of `xs | sm | md | lg | xl`. Custom sizes can be achieved by adding any of the Tailwind CSS size classes like `w-[x] h-[x]`.

Choose the appropriate size based on context:
- **xs/sm**: Compact lists, inline mentions, small UI elements
- **md**: Default size for most use cases, comment avatars
- **lg**: Profile cards, team pages, prominent displays
- **xl**: Profile headers, feature sections, landing pages

Preset values are equivalents of:

| Size  |     |   Classes   |
| :---: | --- | :---------: |
|  xs   |     |  `w-6 h-6`  |
|  sm   |     |  `w-8 h-8`  |
|  md   |     | `w-10 h-10` |
|  lg   |     | `w-20 h-20` |
|  xl   |     | `w-36 h-36` |

```svelte
<script lang="ts">
  import { Avatar } from "flowbite-svelte";
</script>

<div class=" flex flex-wrap justify-center space-x-4 rtl:space-x-reverse">
  <Avatar src="/images/profile-picture-3.webp" size="xs" />
  <Avatar src="/images/profile-picture-3.webp" size="sm" />
  <Avatar src="/images/profile-picture-3.webp" size="md" />
  <Avatar src="/images/profile-picture-3.webp" size="lg" />
  <Avatar src="/images/profile-picture-3.webp" size="xl" />
  <Avatar src="/images/profile-picture-3.webp" class="h-28 w-28" />
</div>
```

## Accessibility

The Avatar component is built with accessibility in mind:

- **Alt Text**: Always provide descriptive alt text for profile images
- **Semantic HTML**: Uses appropriate HTML elements for proper structure
- **Keyboard Navigation**: Interactive avatars (with dropdowns/tooltips) are fully keyboard accessible
- **Screen Reader Support**: Status indicators and additional information are announced to screen readers
- **Color Contrast**: Status dots and text meet WCAG contrast requirements

## Best Practices

When implementing avatars, consider these guidelines:

- **Image Optimization**: Use appropriately sized images to avoid unnecessary bandwidth
- **Fallback Strategy**: Always provide fallbacks (initials or icons) for missing images
- **Consistent Sizing**: Use consistent avatar sizes within the same context
- **Loading States**: Show loading indicators for slowly loading images
- **Clickable Areas**: Ensure clickable avatars have adequate touch targets (minimum 44x44px)
- **Privacy**: Consider user privacy preferences when displaying profile pictures

## Component data

### Avatar

#### Types

[AvatarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L240)

#### Props

- children
- indicator
- src
- href
- target
- cornerStyle: "circular"
- border: false
- stacked: false
- dot
- class: className
- alt
- size: "md"
- onclick


## References

- [Flowbite Avatar](https://flowbite.com/docs/components/avatar/)
