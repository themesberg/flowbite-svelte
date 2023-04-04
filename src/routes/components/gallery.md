---
layout: componentLayout
title: Svelte Gallery (Mansonry) - Flowbite
breadcrumb_title: Gallery
dir: Components
description: Use the image gallery component based on a masonry grid layout using flex and grid classes from Tailwind CSS to show multiple pictures based on various styles
---

<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { Htwo, PageHeadSection, TableProp, TableDefaultRow, MetaTag } from '../utils'
  import { Breadcrumb, BreadcrumbItem, Heading, P, A } from '$lib'
  // Props table
  import { props as galleryProps } from '../props/Gallery.json'
  import { props as galleryItemProps } from '../props/GalleryItem.json'
	let propHeader = ['Name', 'Type', 'Default']
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
  // Slots
  let slotHeader = ['Name', 'Description']
  let slotItems = [['default', 'For a button label.']]
  // lib files
  const libFiles = import.meta.glob('../../lib/gallery/*.svelte')
</script>

<PageHeadSection {dir} {breadcrumb_title} {title} {description} {libFiles}/>

The gallery component can be used to show multiple images inside a masonry grid layout styles with the utility-first classes from Tailwind CSS to show a collection of pictures to your users based on various layouts, styles, sizes, and colors.

This component is recommended for usage within marketing UI interfaces and website sections when you want to show pictures of your team members, office pictures, or even case study images.

<Htwo label="Set up" />

Import `Gallery` and `GalleryItem` in the script tag.

```html
<script>
  import { Gallery, GalleryItem } from 'flowbite-svelte';
</script>
```

<Htwo label="Default gallery" />

Use this component to show a collection of images inside a gallery.

Number of rows in the gallery is set by passing the `grid-col-{n}` Tailwind class (including the reactive prefix).
Spacing between images is set by `gap-{n}` class. If you don't set them it behaves like `grid-col-1` and `gap: inherit`.

Example below show a gallery with three pictures on a row.

```svelte example class="flex flex-wrap gap-2"
<script>
  import { Gallery, GalleryItem } from "flowbite-svelte";
  const images = [
    {alt: 'erbology', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'},
    {alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'},
    {alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'},
    {alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'},
    {alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg'},
    {alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg'},
    {alt: 'cream', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg'},
    {alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg'},
    {alt: 'lamp', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg'},
    {alt: 'toiletbag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg'},
    {alt: 'playstation', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg'},
    {alt: 'bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg'}
  ]

</script>

<Gallery items={images} class="gap-4 grid-cols-2 md:grid-cols-3" />
```

<Htwo label="Masonry grid" />

This example can be used to show the images inside a masongry grid layouts with four columns.

```svelte example class="flex flex-wrap gap-2"
<script>
  import { Gallery, GalleryItem } from "flowbite-svelte";
  const images1 = [
    {alt: 'erbology', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg'},
    {alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg'},
    {alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg'},
  ]
   const images2 = [
    {alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg'},
    {alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg'},
    {alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg'},
   ]
   const images3 = [
    {alt: 'cream', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg'},
    {alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg'},
    {alt: 'lamp', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg'},
   ]
   const images4 = [
    {alt: 'toiletbag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg'},
    {alt: 'playstation', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg'},
    {alt: 'bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg'}
  ]

</script>

<Gallery class="gap-4 grid-cols-2 md:grid-cols-4">
  <Gallery items={images1} />
  <Gallery items={images2} />
  <Gallery items={images3} />
  <Gallery items={images4} />
</Gallery>
```

<Htwo label="Feaured image" />

This example can be used to feature the most important image and show a row of five pictures below.

```svelte example class="flex flex-wrap gap-2"
<script>
  import { Gallery, GalleryItem } from "flowbite-svelte";
  const image1 = {alt: 'erbology', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg'}
  const images2 = [
    {alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'},
    {alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'},
    {alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'},
    {alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg'},
    {alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg'},
  ]

</script>

<Gallery class="gap-4">
  <GalleryItem src={image1.src} alt={image1.alt} />
  <Gallery class="gap-4 grid-cols-5" items={images2} />
</Gallery>
```

<Htwo label="Quad gallery" />

Use this example to show four larger images with two items on a row.

```svelte example class="flex flex-wrap gap-2"
<script>
  import { Gallery, GalleryItem } from "flowbite-svelte";

  const images = [
    {alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'},
    {alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'},
    {alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'},
    {alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg'}
  ]
</script>

<Gallery class="gap-2 grid-cols-2" items={images} />
```

<Htwo label="Gallery with slider" />

This example uses the [carousel slider](https://flowbite-svelte.com/components/carousel) functionality to show multiple images inside a slider gallery.

```svelte example class="flex flex-wrap gap-2"
<script>
  import { CarouselTransition } from 'flowbite-svelte'
  let showThumbs=false
  let showCaptions=false
  let showIndicators=false
  const images = [
    {
      id: 0,
      imgurl: '/images/carousel/cosmic-timetraveler-pYyOZ8q7AII-unsplash.webp',
      attribution: 'shoes'
    },
    {
      id: 1,
      imgurl: '/images/carousel/cristina-gottardi-CSpjU6hYo_0-unsplash.webp',
      attribution: 'small bag'
    },
    {
      id: 2,
      imgurl: '/images/carousel/johannes-plenio-RwHv7LgeC7s-unsplash.webp',
      attribution: 'plants'
    },
    {
      id: 3,
      imgurl: '/images/carousel/jonatan-pie-3l3RwQdHRHg-unsplash.webp',
      attribution: 'watch'
    },
    {
      id: 4,
      imgurl: '/images/carousel/mark-harpur-K2s_YE031CA-unsplash.webp',
      attribution: 'watch'
    }
  ]
</script>

<div class="max-w-4xl">
  <CarouselTransition {images} loop {showThumbs} {showCaptions} {showIndicators} transitionType="fly" transitionParams="{{delay: 250, duration: 300, x: 100}}"/>
</div>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <A href="/pages/types">types page</A> for type information.

<h3 class='text-xl w-full dark:text-white py-4'>Gallery</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
<TableDefaultRow items={galleryProps} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>GalleryItem</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
<TableDefaultRow items={galleryItemProps} rowState='hover' />
</TableProp>

<Htwo label="References" />

<P>
  <A href="https://flowbite.com/docs/components/gallery/" target="_blank" rel="noreferrer" class="link"
    >Flowbite Gallery</A>
</P>
