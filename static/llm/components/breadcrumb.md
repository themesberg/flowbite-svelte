# Svelte Breadcrumb - Flowbite


The breadcrumb component is an important part of any website or application that can be used to show the current location of a page in a hierarchical structure of pages.

Flowbite includes two styles of breadcrumb elements, one that has a transparent background and a few more that come with a background in different colors.

## Setup

```svelte
<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
</script>
```

## Default Breadcrumb

Use the following breadcrumb example to show the hierarchical structure of pages.

```svelte
{#include Default.svelte}
```

## Solid Breadcrumb

You can alternatively also use the breadcrumb components with a solid background.

```svelte
{#include Solid.svelte}
```

## Icons

Use the `icon` snippet to change icons.

```svelte
{#include Icons.svelte}
```

## Class and olClass

```svelte
{#include Class.svelte}
```

## Component data

### Breadcrumb

#### Types

[BreadcrumbProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L277)

#### Props

- children
- solid: false
- class: className
- classes
- olClass
- ariaLabel: "Breadcrumb"

### BreadcrumbItem

#### Types

[BreadcrumbItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L284)

#### Props

- children
- icon
- home: false
- href
- linkClass
- spanClass
- homeClass
- class: className
- classes


## References

- [Flowbite Breadcrumb](https://flowbite.com/docs/components/breadcrumb/)


