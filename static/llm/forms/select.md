# Svelte Select - Flowbite


The select input component can be used to gather information from users based on multiple options in the form of a dropdown list and by browsing this page you will find multiple options, styles, sizes, and variants built with the utility classes from Tailwind CSS also available in dark mode.

## Setup

```svelte
<script lang="ts">
  import { Select } from "flowbite-svelte";
</script>
```

## Select input example

Get started with the default example of a select input component to get a single option selection.

```svelte
include Default.svelte}
```

## Clearable

```svelte
include Clearable.svelte}
```

## Event

`onClear` is a `Select`'s prop and `onchange` is Svelte's built-in event handler for the native `<select>` element.

```svelte
include Event.svelte}
```

## Disabled state

Apply the disable state to the select component to disallow the selection of new options.

```svelte
include Disabled.svelte}
```

## Underline select

Use the underline style for the select component as an alternative appearance.

```svelte
include Underline.svelte}
```

## Select with dropdown

Use this example if you want to create a multi-level dropdown and select component combination.

```svelte
include Dropdown.svelte}
```

## Sizes

Get started with the small, default, and large sizes for the select component from the example below.

```svelte
include Sizes.svelte}
```

## Custom options

If you want custom options, put them directly inside the component and leave the `items` prop unset. Furthermore, if the default placeholder is not what you want, set the `placeholder` prop to `""`.

```svelte
include Custom.svelte}
```

## Accessing Select Element with elementRef

```svelte
include ElementRef.svelte}
```

## MultiSelect

```svelte
<script lang="ts">
  import { MultiSelect } from "flowbite-svelte";
</script>
```

### Basic example

Get started with the default toggle component example as a checkbox element to receive a true or false selection from the user.

```svelte
include Multi.svelte}
```

### Placeholder

```svelte
include Placeholder.svelte}
```

### Disabled select

```svelte
include MultiDisabled.svelte}
```

### MultiSelect Disabled Option

```svelte
include MultiOption.svelte}
```

### Pre-select values

```svelte
include Preselect.svelte}
```

### Keyboard Usage

Some keyboard interaction was implemented. Use <Kbd class="p-1.5"><ArrowUpOutline class="inline-block"/></Kbd>/<Kbd class="p-1.5"><ArrowDownOutline class="inline-block"/></Kbd> to highlight an item, then press <Kbd class="p-1.5">Enter</Kbd> or <Kbd class="p-1.5">SpaceBar</Kbd> to toggle the highlighted item. Press <Kbd class="p-1.5">Esc</Kbd> to close the selection pop-up.

### Customization

To customize the look and feel use the `children` snippet to insert inner [`Badge`](/docs/components/badge) component.

Remember to connect the `clear` snippet's prop to trigger option removal.

```svelte
include Customization.svelte}
```

## Component data

### Select

#### Types

[SelectProps<T>](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L862)

#### Props

- children
- items
- value: $bindable()
- elementRef: $bindable()
- underline
- size: "md"
- disabled
- placeholder: "Choose option ..."
- clearable
- clearableColor: "none"
- clearableOnClick
- onClear
- clearableSvgClass
- clearableClass
- selectClass
- class: className
- classes


## References

- [Flowbite Select](https://flowbite.com/docs/forms/select/)

<GitHubCompoLinks {components}/>
