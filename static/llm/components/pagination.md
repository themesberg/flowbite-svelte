# Svelte Pagination - Flowbite


<script lang="ts">
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase } from '../../utils'
  import { Badge, Heading, P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The pagination component can be used to navigate across a series of content and data sets for various pages such as blog posts, products, and more. You can use multiple variants of this component with or without icons and even for paginating table data entries.

## Setup

```svelte
<script lang="ts">
  import { PaginationNav, Pagination, PaginationItem } from "flowbite-svelte";
</script>
```

## Default pagination

Use the following list of pagination items to indicate a series of content for your website.

### PaginationNav

```svelte
{#include Default.svelte}
```

### Pagination, PaginationItem

```svelte
{#include Default2.svelte}
```

## Pagination with icons

The following pagination component example shows how you can use SVG icons instead of text to show the previous and next pages.

### PaginationNav

```svelte
{#include Icons.svelte}
```

### Pagination, PaginationItem

```svelte
{#include Icons2.svelte}
```

## Previous and next

Use the following markup to show simple previous and next elements.

### PaginationNav

```svelte
{#include PreviousNext.svelte}
```

### Pagination, PaginationItem

```svelte
{#include PreviousNext2.svelte}
```

## Previous and next with icons

Use the following code to show simple previous and next elements with icons.

### PaginationNav

```svelte
{#include PreviousNextIcons.svelte}
```

### Pagination, PaginationItem

```svelte
{#include PreviousNextIcons2.svelte}
```

## Table data pagination

You can use the following markup to show the number of data shown inside a table element and also the previous and next action buttons.

### PaginationNav

```svelte
{#include TableData.svelte}
```

### Pagination, PaginationItem

```svelte
{#include TableData2.svelte}
```

## Table data pagination with icons

You can use the following code to show the number of data shown inside a table element and also the previous and next action buttons coupled with icons.

### PaginationNav

```svelte
{#include TableDataIcons.svelte}
```

### Pagination, PaginationItem

```svelte
{#include TableDataIcons2.svelte}
```

## Component data

### Pagination

#### Types

[PaginationProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1188)

#### Props

- pages: []
- previous
- next
- prevContent
- nextContent
- table
- size
- ariaLabel

### PaginationButton

#### Types

[PaginationButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1159)

#### Props

- children
- size
- onclick
- disabled: false
- class: className
- href
- active: false

### PaginationItem

#### Types

[PaginationItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1184)

#### Props

- children
- size
- class: className
- href
- active

### PaginationNav

#### Types

[PaginationNavProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1165)

#### Props

- currentPage: 1
- totalPages: 1
- visiblePages: 5
- // New prop to control visible pages
    onPageChange
- prevContent
- nextContent
- prevClass
- nextClass
- layout: "pagination"
- nextLabel: "Next"
- previousLabel: "Previous"
- ariaLabel: "Page navigation"
- size: "default"
- class: className
- classes
- spanClass
- tableDivClass


## References

- [Flowbite Pagination](https://flowbite.com/docs/components/pagination/)


