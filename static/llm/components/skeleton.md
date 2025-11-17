# Svelte Skeleton - Flowbite


Use the skeleton component to indicate a loading status with placeholder elements that look very similar to the type of content that is being loaded such as paragraphs, images, videos, and more.

## Setup

```svelte
<script lang="ts">
  import { CardPlaceholder, ImagePlaceholder, ListPlaceholder, Skeleton, TestimonialPlaceholder, TextPlaceholder, VideoPlaceholder, WidgetPlaceholder } from "flowbite-svelte";
</script>
```

## Default skeleton

```svelte
<script lang="ts">
  import { Skeleton } from "flowbite-svelte";
</script>

<Skeleton size="sm" class="my-8" />
<Skeleton size="md" class="my-8" />
<Skeleton size="lg" class="my-8" />
<Skeleton size="xl" class="my-8" />
<Skeleton size="2xl" class="mt-8 mb-2.5" />
```

## Image placeholder

To display image placeholder without text, use `imgOnly` prop as seen in the following examples.

```svelte
<script lang="ts">
  import { ImagePlaceholder } from "flowbite-svelte";
</script>

<ImagePlaceholder size="sm" />
<ImagePlaceholder imgOnly />
<ImagePlaceholder size="md" />
<ImagePlaceholder size="lg" />
```

## Video placeholder

```svelte
<script lang="ts">
  import { VideoPlaceholder } from "flowbite-svelte";
</script>

<VideoPlaceholder />
<VideoPlaceholder size="md" class="mt-8" />
<VideoPlaceholder size="lg" class="mt-8" />
<VideoPlaceholder size="xl" class="mt-8" />
<VideoPlaceholder size="2xl" class="mt-8" />
```

## Text placeholder

```svelte
<script lang="ts">
  import { TextPlaceholder } from "flowbite-svelte";
</script>

<TextPlaceholder />
<TextPlaceholder size="md" class="mt-8" />
<TextPlaceholder size="lg" class="mt-8" />
<TextPlaceholder size="xl" class="mt-8" />
<TextPlaceholder size="2xl" class="mt-8" />
```

## Card placeholder

```svelte
<script lang="ts">
  import { CardPlaceholder } from "flowbite-svelte";
</script>

<CardPlaceholder />
<CardPlaceholder size="md" class="mt-8" />
<CardPlaceholder size="lg" class="mt-8" />
<CardPlaceholder size="xl" class="mt-8" />
<CardPlaceholder size="2xl" class="mt-8" />
```

## Widget placeholder

```svelte
<script lang="ts">
  import { WidgetPlaceholder } from "flowbite-svelte";
</script>

<WidgetPlaceholder />
```

## List placeholder

```svelte
<script lang="ts">
  import { ListPlaceholder } from "flowbite-svelte";
</script>

<ListPlaceholder />
```

## Testimonial placeholder

```svelte
<script lang="ts">
  import { TestimonialPlaceholder } from "flowbite-svelte";
</script>

<TestimonialPlaceholder />
```

## Component data

### CardPlaceholder

#### Types

[CardPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1468)

#### Props

- size: "sm"
- class: className
- classes

### ImagePlaceholder

#### Types

[ImagePlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1472)

#### Props

- size: "md"
- rounded
- imgOnly: false
- class: className
- classes

### ListPlaceholder

#### Types

[ListPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1478)

#### Props

- itemNumber: 5
- size: "md"
- rounded
- class: className
- classes

### Skeleton

#### Types

[SkeletonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1484)

#### Props

- size: "sm"
- class: className
- classes

### TestimonialPlaceholder

#### Types

[TestimonialPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1488)

#### Props

- class: className
- classes

### TextPlaceholder

#### Types

[TextPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1490)

#### Props

- size: "sm"
- class: className
- classes

### VideoPlaceholder

#### Types

[VideoPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1494)

#### Props

- size: "sm"
- class: className

### WidgetPlaceholder

#### Types

[WidgetPlaceholderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1498)

#### Props

- class: className
- classes


## References

- [Flowbite Skeleton](https://flowbite.com/docs/components/sidebar/)
