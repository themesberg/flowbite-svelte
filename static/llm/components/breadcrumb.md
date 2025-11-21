# Svelte Breadcrumb - Flowbite


The breadcrumb component is an important part of any website or application that can be used to show the current location of a page in a hierarchical structure of pages.

Breadcrumbs are essential for:
- **User orientation** - helping users understand where they are in the site structure
- **Navigation efficiency** - allowing users to quickly jump back to parent pages
- **SEO benefits** - search engines use breadcrumbs to understand site structure
- **Reduced bounce rate** - providing multiple navigation paths keeps users engaged
- **Mobile navigation** - offering compact navigation on small screens
- **E-commerce sites** - showing product category hierarchy
- **Documentation sites** - displaying content organization
- **Multi-level applications** - navigating through complex hierarchies

Flowbite includes two styles of breadcrumb elements, one that has a transparent background and a few more that come with a background in different colors.

## Setup

```svelte
<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
</script>
```

## Default Breadcrumb

Use the following breadcrumb example to show the hierarchical structure of pages. The default style has a transparent background that works well in most contexts and doesn't distract from the main content.

Best practices for default breadcrumbs:
- Start with the home page or root level
- Display the full path to the current page
- Make all parent levels clickable except the current page
- Use clear, concise labels that match page titles
- Consider truncating very long paths on mobile

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

You can alternatively also use the breadcrumb components with a solid background. Solid breadcrumbs are useful when:
- You need more visual separation from page content
- Working with busy backgrounds or images
- Creating a distinct header section
- Matching a specific design system
- Improving contrast for accessibility

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

Use the `icon` snippet to change icons. Custom icons can:
- **Match your brand** identity and design system
- **Improve recognition** with familiar symbols
- **Add visual interest** to the navigation
- **Clarify hierarchy** with directional or category icons
- **Support internationalization** by providing visual cues beyond text

Common icon patterns:
- Home icon for the first item
- Chevrons or arrows between items
- Category-specific icons (shopping cart, document, folder)
- Custom brand icons

```svelte
<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import { HomeOutline, ChevronDoubleRightOutline } from "flowbite-svelte-icons";
</script>

<Breadcrumb aria-label="Solid background breadcrumb example" class="bg-gray-50 px-5 py-3 dark:bg-gray-900">
  <BreadcrumbItem href="/" home>
    {#snippet icon()}
      <HomeOutline class="me-2 h-4 w-4" />
    {/snippet}Home
  </BreadcrumbItem>
  <BreadcrumbItem href="/">
    {#snippet icon()}
      <ChevronDoubleRightOutline class="mx-2 h-5 w-5 dark:text-white" />
    {/snippet}
    Projects
  </BreadcrumbItem>
  <BreadcrumbItem>
    {#snippet icon()}
      <ChevronDoubleRightOutline class="mx-2 h-5 w-5 dark:text-white" />
    {/snippet}
    Flowbite Svelte
  </BreadcrumbItem>
</Breadcrumb>
```

## Class and olClass

This example demonstrates customizing the breadcrumb styling using the `class` prop for the container and `olClass` for the ordered list element. Customization allows you to:
- Adjust spacing and padding
- Change colors and backgrounds
- Modify typography (font size, weight)
- Add borders or shadows
- Create responsive layouts
- Match your design system

The ordered list (`<ol>`) element provides semantic HTML structure that's beneficial for accessibility and SEO.

```svelte
<script lang="ts">
  import { Breadcrumb, BreadcrumbItem, Button, type BreadcrumbProps } from "flowbite-svelte";
  let navClass: BreadcrumbProps["class"] = $state("");
  const changeNavClass = () => {
    navClass = navClass === "" ? "border border-red-500 p-2" : "";
  };
  let olClass: BreadcrumbProps["olClass"] = $state("");
  const changeOlClass = () => {
    olClass = olClass === "" ? "border border-blue-500 p-2" : "";
  };
</script>

<div class="h-20">
  <Breadcrumb class={navClass} {olClass}>
    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
    <BreadcrumbItem href="/">Projects</BreadcrumbItem>
    <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
  </Breadcrumb>
</div>
<div class="flex flex-wrap justify-center gap-2 md:justify-start">
  <Button class="w-48" onclick={changeNavClass}>{navClass ? "Remove navClass" : "Add navClass"}</Button>
  <Button class="w-48" color="green" onclick={changeOlClass}>{olClass ? "Remove olClass" : "Add olClass"}</Button>
</div>
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

## Best Practices

When implementing breadcrumbs, consider these guidelines:

- **Placement**: Position breadcrumbs near the top of the page, below the main navigation
- **Hierarchy**: Reflect the true information architecture of your site
- **Consistency**: Use breadcrumbs on all pages where they add value
- **Length**: Keep labels concise (1-3 words ideal)
- **Current Page**: The last item should not be clickable
- **Home Link**: Start with "Home" or your site name
- **Separator**: Use clear separators (arrows, chevrons, slashes)
- **Mobile**: Consider abbreviating or hiding middle items on small screens
- **Categories**: For e-commerce, show category hierarchy clearly
- **Don't Replace**: Breadcrumbs supplement, not replace, primary navigation

## When to Use Breadcrumbs

**Good Use Cases:**
- E-commerce product pages
- Documentation sites with deep hierarchies
- Content management systems
- Multi-step processes or workflows
- Large websites with complex structure
- Enterprise applications

**When to Avoid:**
- Single-level websites or apps
- Linear flows where back button suffices
- Apps with flat navigation structure
- When the hierarchy is unclear or confusing

## SEO Benefits

Breadcrumbs provide significant SEO advantages:
- **Rich Snippets**: Search engines display breadcrumbs in search results
- **Internal Linking**: Improves site crawlability and link equity distribution
- **Keyword Context**: Provides additional keyword context for pages
- **User Experience Signals**: Lower bounce rates and better engagement
- **Schema Markup**: Can be enhanced with structured data (JSON-LD)

Consider implementing schema.org breadcrumb markup for maximum SEO benefit.

## Responsive Design

For mobile devices, consider these patterns:
- **Truncation**: Show only "Home > ... > Current Page" for very long paths
- **Horizontal Scroll**: Allow scrolling for paths that don't fit
- **Collapse Middle Items**: Hide intermediate levels with an ellipsis
- **Vertical Stack**: Stack breadcrumb items vertically if appropriate
- **Icon Only**: Use just a home icon and back arrow on narrow screens

## Component data

### Breadcrumb

#### Types

[BreadcrumbProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L316)

#### Props

- children
- solid: false
- class: className
- classes
- olClass
- ariaLabel: "Breadcrumb"

### BreadcrumbItem

#### Types

[BreadcrumbItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L323)

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
