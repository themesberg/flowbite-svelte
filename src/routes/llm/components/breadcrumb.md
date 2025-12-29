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

Use the following breadcrumb example to show the hierarchical structure of pages. The default style has a transparent background that works well in most contexts and doesn't distract from the main content.

```svelte
<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
</script>

<Breadcrumb aria-label="Default breadcrumb example">
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
  <BreadcrumbItem href="/">Projects</BreadcrumbItem>
  <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>
```

## Solid Breadcrumb

You can alternatively also use the breadcrumb components with a solid background.

The colored background helps the breadcrumb stand out and can be customized to match your brand colors.

```svelte
<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
</script>

<Breadcrumb aria-label="Solid background breadcrumb example" solid>
  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
  <BreadcrumbItem href="/">Projects</BreadcrumbItem>
  <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>
```

## Icons

Use the `icon` snippet to change icons.

```svelte
<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import { HomeOutline, ChevronDoubleRightOutline } from "flowbite-svelte-icons";
</script>

<Breadcrumb aria-label="Solid background breadcrumb example" solid>
  <BreadcrumbItem href="/" home>
    {#snippet icon()}
      <HomeOutline class="me-2 h-4 w-4" />
    {/snippet}Home
  </BreadcrumbItem>
  <BreadcrumbItem href="/">
    {#snippet icon()}
      <ChevronDoubleRightOutline class="mx-2 h-5 w-5" />
    {/snippet}
    Projects
  </BreadcrumbItem>
  <BreadcrumbItem>
    {#snippet icon()}
      <ChevronDoubleRightOutline class="mx-2 h-5 w-5" />
    {/snippet}
    Flowbite Svelte
  </BreadcrumbItem>
</Breadcrumb>
```

## Accessibility

The Breadcrumb component follows accessibility best practices:

- **Semantic HTML**: Uses `<nav>` and `<ol>` elements for proper structure
- **ARIA Labels**: Includes `aria-label="breadcrumb"` on the navigation element
- **Keyboard Navigation**: All links are keyboard accessible
- **Screen Readers**: The hierarchical structure is properly announced
- **Current Page**: The last item (current page) should not be a link
- **Clear Labels**: Each breadcrumb item should have descriptive text
- **Focus Indicators**: Clear focus states for keyboard users

## See also

- [Navbar](https://flowbite-svelte.com/llm/components/navbar.md)
- [Sidebar](https://flowbite-svelte.com/llm/components/sidebar.md)
- [Pagination](https://flowbite-svelte.com/llm/components/pagination.md)
- [Heading](https://flowbite-svelte.com/llm/typography/heading.md)


## Component data

### Breadcrumb

#### Types

[BreadcrumbProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L305)

#### Props

- children
- solid: false
- class: className
- classes
- ariaLabel: "Breadcrumb"

### BreadcrumbItem

#### Types

[BreadcrumbItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L311)

#### Props

- children
- icon
- home: false
- href
- class: className
- classes


## References

- [Flowbite Breadcrumb](https://flowbite.com/docs/components/breadcrumb/)
