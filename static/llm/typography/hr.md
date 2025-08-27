# Svelte Horizontal Line (HR) - Flowbite


The `Hr` component can be used to separate content using a horizontal line by adding space between elements based on multiple styles, variants, and layouts.

## Setup

```html
<script>
  import { Hr } from "flowbite-svelte";
</script>
```

## Default HR

```svelte
{@include Default.svelte}
```

## Trimmed

Use this example to show a shorter version of the horizontal line.

```svelte
{@include Trimmed.svelte}
```

## Icon HR

This example can be used to set a custom SVG icon in the middle of the HR element.

```svelte
{@include Icon.svelte}
```

## HR with text

Use this example to add a text in the middle of the HR component.

```svelte
{@include Text.svelte}
```

## HR shape

This example can be used to separate content with a HR tag as a shape instead of a line.

```svelte
{@include Shape.svelte}
```

## Component data

### Hr

#### Types

[HrProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1899)

#### Props

- children
- divClass
- innerDivClass
- class: className
- classes


## References

<GitHubCompoLinks {components}/>
