# Svelte Skeleton - Flowbite


<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

Use the skeleton component to indicate a loading status with placeholder elements that look very similar to the type of content that is being loaded such as paragraphs, images, videos, and more.

## Setup

```svelte
<script lang="ts">
  import { CardPlaceholder, ImagePlaceholder, ListPlaceholder, Skeleton, TestimonialPlaceholder, TextPlaceholder, VideoPlaceholder, WidgetPlaceholder } from "flowbite-svelte";
</script>
```

## Default skeleton

```svelte
{#include Default.svelte}
```

## Image placeholder

To display image placeholder without text, use `imgOnly` prop as seen in the following examples.

```svelte
{#include Image.svelte}
```

## Video placeholder

```svelte
{#include Video.svelte}
```

## Text placeholder

```svelte
{#include Text.svelte}
```

## Card placeholder

```svelte
{#include Card.svelte}
```

## Widget placeholder

```svelte
{#include Widget.svelte}
```

## List placeholder

```svelte
{#include List.svelte}
```

## Testimonial placeholder

```svelte
{#include Testimonial.svelte}
```

## Component data

### CardPlaceholder

#### Types

[CardPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1423)

#### Props

- size: "sm"
- class: className
- classes

### ImagePlaceholder

#### Types

[ImagePlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1427)

#### Props

- size: "md"
- rounded
- imgOnly: false
- class: className
- classes

### ListPlaceholder

#### Types

[ListPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1433)

#### Props

- itemNumber: 5
- size: "md"
- rounded
- class: className
- classes

### Skeleton

#### Types

[SkeletonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1439)

#### Props

- size: "sm"
- class: className
- classes

### TestimonialPlaceholder

#### Types

[TestimonialPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1443)

#### Props

- class: className
- classes

### TextPlaceholder

#### Types

[TextPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1445)

#### Props

- size: "sm"
- class: className
- classes

### VideoPlaceholder

#### Types

[VideoPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1449)

#### Props

- size: "sm"
- class: className

### WidgetPlaceholder

#### Types

[WidgetPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1453)

#### Props

- class: className
- classes


## References

- [Flowbite Skeleton](https://flowbite.com/docs/components/sidebar/)


