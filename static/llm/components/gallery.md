# Svelte Gallery (Mansonry) - Flowbite


The gallery component can be used to show multiple images inside a masonry grid layout styles with the utility-first classes from Tailwind CSS to show a collection of pictures to your users based on various layouts, styles, sizes, and colors.

This component is recommended for usage within marketing UI interfaces and website sections when you want to show pictures of your team members, office pictures, or even case study images.

## Set up

Import `Gallery` in the script tag.

```svelte
<script lang="ts">
  import { Gallery } from "flowbite-svelte";
</script>
```

## Default gallery

Use this component to show a collection of images inside a gallery.

Number of rows in the gallery is set by passing the `grid-cols-{n}` Tailwind class (including the reactive prefix). Spacing between images is set by `gap-{n}` class. If you don't set them it behaves like `grid-cols-1` and `gap:inherit`.

Example below show a gallery with three pictures on a row.

```svelte
<script lang="ts">
  import { Gallery } from "flowbite-svelte";
  const images = [
    { alt: "erbology", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" },
    { alt: "shoes", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
    { alt: "small bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" },
    { alt: "plants", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" },
    { alt: "watch", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" },
    { alt: "shoe", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" },
    { alt: "cream", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" },
    { alt: "small bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" },
    { alt: "lamp", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" },
    { alt: "toiletbag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" },
    { alt: "playstation", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" },
    { alt: "bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" }
  ];
</script>

<Gallery items={images} class="grid-cols-2 gap-4 md:grid-cols-3" />
```

## Masonry grid

This example can be used to show the images inside a masongry grid layouts with four columns.

```svelte
<script lang="ts">
  import { Gallery } from "flowbite-svelte";
  const images1 = [
    { alt: "erbology", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" },
    { alt: "shoes", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" },
    { alt: "small bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" }
  ];
  const images2 = [
    { alt: "plants", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" },
    { alt: "watch", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" },
    { alt: "shoe", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" }
  ];
  const images3 = [
    { alt: "cream", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" },
    { alt: "small bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" },
    { alt: "lamp", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" }
  ];
  const images4 = [
    { alt: "toiletbag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" },
    { alt: "playstation", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" },
    { alt: "bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" }
  ];
</script>

<Gallery class="grid-cols-2 gap-4 md:grid-cols-4">
  <Gallery items={images1} />
  <Gallery items={images2} />
  <Gallery items={images3} />
  <Gallery items={images4} />
</Gallery>
```

## Featured image

This example can be used to feature the most important image and show a row of five pictures below.

```svelte
<script lang="ts">
  import { Gallery } from "flowbite-svelte";
  const image1 = {
    alt: "erbology",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
  };
  const images2 = [
    { alt: "shoes", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
    { alt: "small bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" },
    { alt: "plants", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" },
    { alt: "watch", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" },
    { alt: "shoe", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" }
  ];
</script>

<Gallery class="gap-4">
  <img src={image1.src} alt={image1.alt} class="h-auto max-w-full rounded-lg" />
  <Gallery class="grid-cols-5" items={images2} />
</Gallery>
```

## Quad gallery

Use this example to show four larger images with two items on a row.

```svelte
<script lang="ts">
  import { Gallery } from "flowbite-svelte";

  const images = [
    { alt: "shoes", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
    { alt: "small bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" },
    { alt: "plants", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" },
    { alt: "watch", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" }
  ];
</script>

<Gallery class="grid-cols-2 gap-2" items={images} />
```

## Gallery with tag filters

Use this example to show a list of tags and filter the images below based on the activately selected tag.

```svelte
<script lang="ts">
  import { Gallery, Button } from "flowbite-svelte";
  const images = [
    { alt: "erbology", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" },
    { alt: "shoes", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
    { alt: "small bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" },
    { alt: "plants", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" },
    { alt: "watch", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" },
    { alt: "shoe", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" },
    { alt: "cream", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg" },
    { alt: "small bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg" },
    { alt: "lamp", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg" },
    { alt: "toiletbag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg" },
    { alt: "playstation", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg" },
    { alt: "bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg" }
  ];
</script>

<div class="mx-auto mb-3 flex flex-wrap items-center justify-center gap-3 py-4 md:py-8">
  <Button pill size="xl" outline>All categories</Button>
  <Button pill size="xl" color="alternative">Shoes</Button>
  <Button pill size="xl" color="alternative">Bags</Button>
  <Button pill size="xl" color="alternative">Electronics</Button>
  <Button pill size="xl" color="alternative">Gaming</Button>
</div>

<Gallery items={images} class="grid-cols-2 gap-4 md:grid-cols-3" />
```

## Heterogeneous gallery

Gallery items don't have to be all the same but then you need to list them manually - don't set the `items` property.

```svelte
<script lang="ts">
  import { Gallery } from "flowbite-svelte";
</script>

<Gallery class="grid-cols-2 gap-4">
  <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="shoas" class="max-w- h-auto rounded-lg" />
  <div class="max-w- flex h-auto items-center justify-center rounded-lg bg-red-300 text-6xl font-extrabold">Sale</div>
  <div class="max-w- flex h-auto items-center justify-center rounded-lg bg-blue-300 text-6xl font-extrabold">Sale</div>
  <img alt="plants" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" class="max-w- h-auto rounded-lg" />
</Gallery>
```

## Custom image rendering

This example shows how to get a complete control over the gallery images look and feel.

```svelte
<script lang="ts">
  import { Gallery } from "flowbite-svelte";
  const images = [
    { alt: "shoes", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" },
    { alt: "small bag", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" },
    { alt: "plants", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" },
    { alt: "watch", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg" },
    { alt: "shoe", src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg" }
  ];
</script>

<Gallery class="grid-cols-3 gap-4" items={images}>
  {#snippet figure(item)}
    <div class="p-1 ring-4 ring-red-600 dark:ring-red-400">
      <img src={item.src} alt={item.alt} class="h-auto max-w-full" />
    </div>
  {/snippet}
</Gallery>
```

## Component data

### Gallery

#### Types

[GalleryProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1025)

#### Props

- children
- figure
- items: []
- imgClass
- class: className
- classes


## References

- [Flowbite Gallery](https://flowbite.com/docs/components/gallery/)
