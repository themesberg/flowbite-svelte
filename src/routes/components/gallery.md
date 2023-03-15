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
  import { props as cardProps } from '../props/Card.json'
  import { props as frameProps } from '../props/Frame.json'
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

<Htwo label="User profile card" />

Use this user profile card example if you want to show a dropdown menu and buttons to enable multiple actions from your user.

```svelte example class="flex flex-wrap gap-2"
<script>
  import { Card, MenuButton, Dropdown, DropdownItem, Avatar, Button } from "flowbite-svelte";
</script>
<Card padding='sm'>
  <div class="flex justify-end">
    <MenuButton />
    <Dropdown class="w-36">
      <DropdownItem>Edit</DropdownItem>
      <DropdownItem>Export data</DropdownItem>
      <DropdownItem>Delete</DropdownItem>
    </Dropdown>
  </div>
  <div class="flex flex-col items-center pb-4">
    <Avatar size="lg" src="/images/profile-picture-3.webp" />
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
      <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
      <div class="flex mt-4 space-x-3 lg:mt-6">
        <Button>Add friend</Button>
        <Button color="light" class="dark:text-white">Message</Button>
      </div>
  </div>
</Card>
```

<Htwo label="Card with form inputs" />

Use this card example where you can add form input elements that can be used for authentication actions or any other context where you need to receive information from your users.

```svelte example
<script>
  import { Card, Button, Label, Input, Checkbox } from "flowbite-svelte";
</script>
<Card>
	<form class="flex flex-col space-y-6" action="/">
		<h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Sign in to our platform</h3>
		<Label class="space-y-2">
			<span>Email</span>
			<Input type="email" name="email" placeholder="name@company.com" required />
		</Label>
		<Label class="space-y-2">
			<span>Your password</span>
			<Input type="password" name="password" placeholder="•••••" required />
		</Label>
		<div class="flex items-start">
				<Checkbox>Remember me</Checkbox>
				<a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost password?</a>
		</div>
		<Button type="submit" class="w-full">Login to your account</Button>
			<div class="text-sm font-medium text-gray-500 dark:text-gray-300">
				Not registered? <a href="/" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
			</div>
	</form>
</Card>
```


<Htwo label="E-commerce card" />

Use this card for your e-commerce websites and show information about the products and enable actions such as adding a review and adding the product to the cart.

```svelte example
<script>
  import { Card, Button, Rating, Badge } from "flowbite-svelte";
</script>
<Card padding="none">
	<a href="/">
		<img class="p-8 rounded-t-lg" src="/images/product-1.webp" alt="product 1" />
	</a>
  <div class="px-5 pb-5">
    <a href="/">
      <h5 class='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
      </h5>
    </a>
    <Rating rating="4" size="18" class="mt-2.5 mb-5">
      <Badge slot="text" class="ml-3">4</Badge>
    </Rating>
    <div class="flex justify-between items-center">
      <span class="text-3xl font-bold text-gray-900 dark:text-white">$543</span>
      <Button href="/">Buy now</Button>
    </div>
  </div>
</Card>
```

<Htwo label="Call to action card" />

Use this CTA card example to encourage your users to visit a certain page such as downloading the iOS or Android application for your project.

```svelte example
<script>
  import { Card, Button } from "flowbite-svelte";
</script>
<Card class="text-center" size="lg" padding='xl'>
  <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5>
  <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
    Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.
  </p>
  <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
    <Button>Download it</Button>
    <Button>Get it on</Button>
  </div>
</Card>
```

<Htwo label="Card with list" />

Use this card example if you want to show a list of data:

```svelte example
<script>
  import { Card, Listgroup, Avatar } from "flowbite-svelte";
   let list = [
    { img: { src: "/images/profile-picture-1.webp", alt: "Neil Sims",},
      name: "Neil Sims", email: "email@windster.com", value: "$320"
    },
    { img: { src: "/images/profile-picture-2.webp", alt: "Bonnie Green" },
      name: "Bonnie Green", email: "email@windster.com", value: "$3467"
    },
    { img: { src: "/images/profile-picture-3.webp", alt: "Michael Gough" },
      name: "Michael Gough", email: "email@windster.com", value: "$67"
    },
  ];
</script>
<Card padding="xl" size="md">
  <div class="flex justify-between items-center mb-4">
      <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
      <a href="/" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          View all
      </a>
  </div>
  <Listgroup items={list} let:item class="border-0 dark:!bg-transparent">
    <div class="flex items-center space-x-4">
      <Avatar src={item.img.src} alt={item.img.alt} class="flex-shrink-0"/>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
          {item.name}
        </p>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
          {item.email}
        </p>
      </div>
      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          {item.value}
      </div>
    </div>
  </Listgroup>
</Card>
```

<Htwo label="Pricing card" />

Show detailed information to potential customers about your product’s pricing plan, list of features, and a purchase button.

```svelte example
<script>
  import { Card, Button } from "flowbite-svelte";
</script>
<Card padding="xl">
  <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
  <div class="flex items-baseline text-gray-900 dark:text-white">
      <span class="text-3xl font-semibold">$</span>
      <span class="text-5xl font-extrabold tracking-tight">49</span>
      <span class="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
  </div>
  <!-- List -->
  <ul class="my-7 space-y-4">
      <li class="flex space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 team members</span>
      </li>
      <li class="flex space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">20GB Cloud storage</span>
      </li>
      <li class="flex space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Integration help</span>
      </li>
      <li class="flex space-x-2 line-through decoration-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
      </li>
      <li class="flex space-x-2 line-through decoration-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span class="text-base font-normal leading-tight text-gray-500">API Access</span>
      </li>
      <li class="flex space-x-2 line-through decoration-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span class="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
      </li>
      <li class="flex space-x-2 line-through decoration-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-blue-600 dark:text-blue-500"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span class="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
      </li>
  </ul>
  <Button class="w-full">Choose plan</Button>
</Card>
```

<Htwo label="Testimonial card" />

Use this example to split cards into multiple sections such as for testimonials or reviews.

```svelte example hideScript
<script>
  import { Card } from "flowbite-svelte";
</script>
<Card padding="none" size="xl" class="grid md:grid-cols-2">
  <figure class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
  <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
    <h3 class="p-0 text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
    <p class="my-4 font-light">If you care for your time, I hands down would go with this."</p>
  </blockquote>
  <figcaption class="flex justify-center items-center space-x-3">
    <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="Karen profile">
    <div class="space-y-0.5 font-medium dark:text-white text-left">
      <div>Bonnie Green</div>
      <div class="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
    </div>
  </figcaption>
  </figure>
  <figure class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
      <h3 class="p-0 text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
    <p class="my-4 font-light">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
    </blockquote>
    <figcaption class="flex justify-center items-center space-x-3">
      <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="Robert profile">
      <div class="space-y-0.5 font-medium dark:text-white text-left">
        <div>Roberta Casas</div>
        <div class="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
      </div>
      </figcaption>
  </figure>
  <figure class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
    <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
      <h3 class="p-0 text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3>
      <p class="my-4 font-light">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
    </blockquote>
    <figcaption class="flex justify-center items-center space-x-3">
      <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese profile">
      <div class="space-y-0.5 font-medium dark:text-white text-left">
        <div>Jese Leos</div>
        <div class="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
      </div>
    </figcaption>
  </figure>
  <figure class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
    <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
      <h3 class="p-0 text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
      <p class="my-4 font-light">You have many examples that can be used to create a fast prototype for your team."</p>
    </blockquote>
    <figcaption class="flex justify-center items-center space-x-3">
      <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="joseph profile">
      <div class="space-y-0.5 font-medium dark:text-white text-left">
        <div>Joseph McFall</div>
        <div class="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
      </div>
      </figcaption>
  </figure>
</Card>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <A href="/pages/types">types page</A> for type information.

<h3 class='text-xl w-full dark:text-white py-4'>Card</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={cardProps} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>Frame</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={frameProps} rowState='hover' />
</TableProp>

<Htwo label="Slots" />

<h3 class='text-xl w-full dark:text-white py-4'>Card</h3>

<TableProp header={slotHeader} {divClass} {theadClass}>
  <TableDefaultRow items={slotItems} rowState='hover' />
</TableProp>

<Htwo label="References" />

<P>
  <A href="https://flowbite.com/docs/components/card/" target="_blank" rel="noreferrer" class="link"
    >Flowbite Card</A>
</P>
