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
  <Avatar src="/images/people/profile-picture-5.jpg" />
  <Avatar src="/images/people/profile-picture-5.jpg" cornerStyle="rounded" />
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

<Avatar src="/images/people/profile-picture-5.jpg">
  {#snippet indicator()}
    <Indicator color="purple" border size="xl" placement="top-right">
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

<Avatar src="/images/people/profile-picture-5.jpg" border />
<Avatar src="/images/people/profile-picture-5.jpg" border class="ring-red-400 dark:ring-red-300" />
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

<Avatar data-name="Jese Leos" src="/images/people/profile-picture-5.jpg" />
<Tooltip>Jese Leos</Tooltip>
<Avatar data-name="Robert Gouth" src="/images/people/profile-picture-4.jpg" />
<Tooltip>Robert Gouth</Tooltip>
<Avatar data-name="Bonnie Green" src="/images/people/profile-picture-3.jpg" />
<Tooltip>Bonnie Green</Tooltip>
```

## Dot indicator

Use a dot element relative to the avatar component as an indicator for the user's status (e.g., online, offline, busy, away). Status indicators help users understand availability in real-time communication tools, collaboration platforms, and social applications.

```svelte
<script lang="ts">
  import { Avatar } from "flowbite-svelte";
</script>

<Avatar src="/images/people/profile-picture-5.jpg" dot={{ color: "danger" }} />
<Avatar src="/images/people/profile-picture-5.jpg" dot={{ placement: "top-right", color: "warning" }} cornerStyle="rounded" />
<Avatar src="/images/people/profile-picture-5.jpg" dot={{ placement: "bottom-right", color: "success" }} />
<Avatar src="/images/people/profile-picture-5.jpg" dot={{ placement: "bottom-right" }} cornerStyle="rounded" />

<Avatar dot={{}} />
```

## Stacked

Use this example if you want to stack a group of users by overlapping the avatar components. 

This pattern saves space while still providing visual representation of all involved users. Include a count indicator when there are more users than can be displayed.

```svelte
<script lang="ts">
  import { Avatar } from "flowbite-svelte";
</script>

<div class="mb-5 flex">
  <Avatar src="/images/people/profile-picture-5.jpg" stacked />
  <Avatar src="/images/people/profile-picture-2.jpg" stacked />
  <Avatar src="/images/people/profile-picture-3.jpg" stacked />
  <Avatar src="/images/people/profile-picture-4.jpg" stacked />
</div>
<div class="flex">
  <Avatar src="/images/people/profile-picture-5.jpg" stacked />
  <Avatar src="/images/people/profile-picture-2.jpg" stacked />
  <Avatar src="/images/people/profile-picture-3.jpg" stacked />
  <Avatar stacked href="/" class="bg-gray-700 text-sm text-white hover:bg-gray-600">+99</Avatar>
</div>
```

## Avatar text

Display additional information alongside avatars, such as the user's name and join date.

```svelte
<script lang="ts">
  import { Avatar } from "flowbite-svelte";
</script>

<div class="flex items-center space-x-4 rtl:space-x-reverse">
  <Avatar src="/images/people/profile-picture-5.jpg" cornerStyle="rounded" />
  <div class="space-y-1 font-medium dark:text-white">
    <div>Jese Leos</div>
    <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
  </div>
</div>
```

## User dropdown

Enable interactive dropdown menus triggered by clicking the avatar component.

```svelte
<script lang="ts">
  import { Avatar, Dropdown, DropdownHeader, DropdownItem, DropdownGroup } from "flowbite-svelte";
</script>

<Avatar id="user-drop" src="/images/people/profile-picture-5.jpg" class="cursor-pointer" dot={{ color: "success" }} />
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
  <Avatar src="/images/people/profile-picture-5.jpg" size="xs" />
  <Avatar src="/images/people/profile-picture-5.jpg" size="sm" />
  <Avatar src="/images/people/profile-picture-5.jpg" size="md" />
  <Avatar src="/images/people/profile-picture-5.jpg" size="lg" />
  <Avatar src="/images/people/profile-picture-5.jpg" size="xl" />
  <Avatar src="/images/people/profile-picture-5.jpg" class="h-28 w-28" />
</div>
```

## Accessibility

The Avatar component is built with accessibility in mind:

- **Alt Text**: Always provide descriptive alt text for profile images
- **Semantic HTML**: Uses appropriate HTML elements for proper structure
- **Keyboard Navigation**: Interactive avatars (with dropdowns/tooltips) are fully keyboard accessible
- **Screen Reader Support**: Status indicators and additional information are announced to screen readers
- **Color Contrast**: Status dots and text meet WCAG contrast requirements

## See also

- [Badge](https://flowbite-svelte.com/llm/components/badge.md)
- [Dropdown](https://flowbite-svelte.com/llm/components/dropdown.md)
- [Tooltip](https://flowbite-svelte.com/llm/components/tooltip.md)
- [Indicators](https://flowbite-svelte.com/llm/components/indicators.md)


## Component data

### Avatar

#### Types

[AvatarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L238)

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
