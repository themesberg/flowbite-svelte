---
layout: componentLayout
title: Svelte Gallery (Mansonry) - Flowbite
breadcrumb_title: Gallery
dir: Components
description: Use the image gallery component based on a masonry grid layout using flex and grid classes from Tailwind CSS to show multiple pictures based on various styles
---

<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow, MetaTag } from '../utils'
  
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
</script>

<Breadcrumb class="pt-16 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>{description}</CompoDescription>

<ExampleDiv>
<GitHubSource href="gallery/Gallery.svelte">Gallery</GitHubSource>
<GitHubSource href="gallery/GalleryItem.svelte">GalleryItem</GitHubSource>
</ExampleDiv>

The gallery component can be used to show multiple images inside a masonry grid layout styles with the utility-first classes from Tailwind CSS to show a collection of pictures to your users based on various layouts, styles, sizes, and colors.

This component is recommended for usage within marketing UI interfaces and website sections when you want to show pictures of your team members, office pictures, or even case study images.

<Htwo label="Set up" />

Import `Gallery` and `GalleryItem` in the script tag.

```html
<script>
  import { Gallery, GalleryItem } from "flowbite-svelte";
</script>
```

<Htwo label="Default gallery" />

Use this component to show a collection of images inside a gallery with three pictures on a row.

```svelte example class="flex flex-wrap gap-2"
<script>
  import { Gallery, GalleryItem } from "flowbite-svelte";
  const images = [
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg',
      alt: 'erbology'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      alt: 'shoes'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
      alt: 'small bag'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
      alt: 'plants'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
      alt: 'watch'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
      alt: 'shoe'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
      alt: 'cream'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg',
      alt: 'small bag'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
      alt: 'lamp'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg',
      alt: 'toiletbag'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg',
      alt: 'playstation'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg',
      alt: 'bag'
    }
  ]

</script>
<Gallery>
  {#each images as {src, alt}}
    <GalleryItem {src} {alt} />
  {/each}
</Gallery>
```

<Htwo label="Masonry grid" />

This example can be used to show the images inside a masongry grid layouts with four columns.

```svelte example class="flex flex-wrap gap-2"
<script>
  import { Gallery, GalleryItem } from "flowbite-svelte";
  const images1 = [
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
      alt: 'erbology'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg',
      alt: 'shoes'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg',
      alt: 'small bag'
    },
  ]
   const images2 = [ 
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg',
      alt: 'plants'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg',
      alt: 'watch'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg',
      alt: 'shoe'
    },
   ]
   const images3 = [
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg',
      alt: 'cream'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg',
      alt: 'small bag'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg',
      alt: 'lamp'
    },
   ]
   const images4 = [
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg',
      alt: 'toiletbag'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg',
      alt: 'playstation'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg',
      alt: 'bag'
    }
  ]

</script>
<Gallery colClass="grid-cols-2 md:grid-cols-4">
  <div class="grid gap-4">
  {#each images1 as {src, alt}}
    <GalleryItem {src} {alt} />
  {/each}
  </div>
    <div class="grid gap-4">
  {#each images2 as {src, alt}}
    <GalleryItem {src} {alt} />
  {/each}
  </div>
  <div class="grid gap-4">
  {#each images3 as {src, alt}}
    <GalleryItem {src} {alt} />
  {/each}
  </div>
    <div class="grid gap-4">
  {#each images4 as {src, alt}}
    <GalleryItem {src} {alt} />
  {/each}
  </div>
</Gallery>
```

<Htwo label="Featured image" />

This example can be used to feature the most important image and show a row of five pictures below.

```svelte example class="flex flex-wrap gap-2"
<script>
  import { Gallery, GalleryItem } from "flowbite-svelte";
  const image1 = {
    src: 'https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg',
    alt: 'erbology'
  }
  const images2 = [
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      alt: 'shoes'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
      alt: 'small bag'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
      alt: 'plants'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
      alt: 'watch'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
      alt: 'shoe'
    },
  ]

</script>

<div class="grid gap-4">
  <GalleryItem src={image1.src} alt={image1.alt} />
<Gallery colClass="grid-cols-5">
  {#each images2 as {src, alt}}
    <GalleryItem {src} {alt} />
  {/each}
</Gallery>
</div>
```

<Htwo label="Quad gallery" />

Use this example to show four larger images with two items on a row.

```svelte example class="flex flex-wrap gap-2"
<script>
  import { Gallery, GalleryItem } from "flowbite-svelte";

  const images = [
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
      alt: 'shoes'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
      alt: 'small bag'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
      alt: 'plants'
    },
    {
      src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
      alt: 'watch'
    }
  ]
</script>

<Gallery colClass="grid-cols-2" outerDivClass="grid gap-2">
  {#each images as {src, alt}}
    <GalleryItem {src} {alt} />
  {/each}
</Gallery>
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
