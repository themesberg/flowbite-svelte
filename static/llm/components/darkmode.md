# Svelte Dark Mode - Flowbite


In flowbite-svelte, the `class` strategy is used to support toggling dark mode manually, so you should explicitly configure it in Tailwind CSS:

```js example
// app.css
@custom-variant dark (&:where(.dark, .dark *));
```

Then you can use `dark:` prefixed classes to configure the styles applied when dark mode is enabled. For example, if you want to change the body background color from `bg-white` when dark mode is disabled to `bg-gray-800` when dark mode is enabled:

```svelte
<!-- src/app.html -->
<body class="bg-white dark:bg-gray-800">
  <div>%svelte.body%</div>
</body>
```

Finally, use the dark mode component to display a switcher (that is a button) for users to toggle dark mode manually. The best place to put this component is in the root layout:

```svelte
<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { DarkMode } from "flowbite-svelte";
</script>

<DarkMode />
```

## Initial theme

Use `class="dark"` to set the initial theme to the dark mode. The default mode is `light`.

```html
<html class="dark" lang="en"></html>
```

## Switcher style

Use `class` attribute to append classes to the default classes:

```svelte
<script lang="ts">
  import { DarkMode } from "flowbite-svelte";
</script>

<DarkMode class="text-primary-500 dark:text-primary-600 border dark:border-gray-800" />
```

## Mode icon

Use the `lightIcon` and `darkIcon` slots to change icons:

```svelte
<script lang="ts">
  import { DarkMode } from "flowbite-svelte";
  import { ThumbsUpSolid, ThumbsDownSolid } from "flowbite-svelte-icons";
</script>

<DarkMode class="text-lg">
  {#snippet lightIcon()}
    <ThumbsUpSolid color="red" />
  {/snippet}
  {#snippet darkIcon()}
    <ThumbsDownSolid color="green" />
  {/snippet}
</DarkMode>
```

## Component data

### DarkMode

#### Types

[DarkmodeProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L479)

#### Props

- class: className
- lightIcon
- darkIcon
- size: "md"
- ariaLabel: "Dark mode"


## References

- [Flowbite Dark Mode](https://flowbite.com/docs/customize/dark-mode/)
