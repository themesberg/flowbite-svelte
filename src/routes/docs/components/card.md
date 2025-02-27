---
layout: componentLayout
title: Svelte Cards - Flowbite
breadcrumb_title: Svelte Card
component_title: Cards
dir: Components
description: Get started with a large variety of Tailwind CSS card examples for your web project
thumnailSize: w-36
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

Use these responsive card components to show data entries and information to your users in multiple forms and contexts such as for your blog, application, user profiles, and more.

## Set up

Import Card in the script tag.

```svelte example hideOutput
<script>
  import { Card } from 'flowbite-svelte';
</script>
```

## Default card

Use the following simple card component with a title and description. Notice the `href` prop set, as that card is one big `<a/>` element.

```svelte example class="flex justify-center flex-wrap gap-2" hideScript
<script>
  import { Card } from 'flowbite-svelte';
</script>

<Card href="/cards">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</Card>
```

## Card with action button

Use the following example of a card element if you also want to have an action button.

```svelte example class="flex justify-center flex-wrap gap-2"
<script>
  import { Card, Button } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<Card>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  <Button class="w-fit">
    Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
  </Button>
</Card>
```

## Card with link

This example can be used to show a CTA as a link instead of a button inside the card.

```svelte example class="flex justify-center flex-wrap gap-2"
<script>
  import { Card } from 'flowbite-svelte';
  import { GiftBoxSolid, ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';
</script>

<Card>
  <GiftBoxSolid class="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400" />
  <a href="/">
    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
  </a>
  <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
  <a href="/" class="inline-flex items-center text-primary-600 hover:underline">
    See our guideline
    <ArrowUpRightFromSquareOutline class="w-4 h-4 ms-2.5" />
  </a>
</Card>
```

## Card with image

Use <code>reverse={true}</code> to reverse the position of an image.

You can use the following example of a card element with an image for blog posts, user cards, and many more.

```svelte example class="flex justify-center flex-wrap gap-2"
<script>
  import { Card, Button, Toggle } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  let vCard = false;
</script>

<div  class="space-y-4">
  <Card img="/images/image-1.webp" reverse={vCard}>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <Button>
      Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
    </Button>
  </Card>
  <Toggle bind:checked={vCard} class="italic dark:text-gray-500">Reverse</Toggle>
</div>
```

## Horizontal card

If you want to spice up your cards you can use the following card which has its child elements aligned horizontally.

```svelte example class="flex justify-center flex-wrap gap-2"
<script>
  import { Card, Button, Toggle } from 'flowbite-svelte';
  let hCard = false;
</script>

<div class="space-y-4">
  <Card img="/images/image-1.webp" href="/" horizontal size="md" reverse={hCard}>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  </Card>
  <Toggle bind:checked={hCard} class="italic dark:text-gray-500">Reverse</Toggle>
</div>
```

## User profile card

Use this user profile card example if you want to show a dropdown menu and buttons to enable multiple actions from your user.

```svelte example class="flex justify-center flex-wrap gap-2"
<script>
  import { Card, Dropdown, DropdownItem, Avatar, Button } from 'flowbite-svelte';
  import { DotsHorizontalOutline } from 'flowbite-svelte-icons';
</script>

<Card padding="md">
  <div class="flex justify-end">
    <DotsHorizontalOutline />
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
    <div class="flex mt-4 space-x-3 rtl:space-x-reverse lg:mt-6">
      <Button>Add friend</Button>
      <Button color="light" class="dark:text-white">Message</Button>
    </div>
  </div>
</Card>
```

## Card with form inputs

Use this card example where you can add form input elements that can be used for authentication actions or any other context where you need to receive information from your users.

```svelte example class="flex justify-center flex-wrap gap-2"
<script>
  import { Card, Button, Label, Input, Checkbox } from 'flowbite-svelte';
</script>

<Card>
  <form class="flex flex-col space-y-6" action="/">
    <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
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
      <a href="/" class="ms-auto text-sm text-primary-700 hover:underline dark:text-primary-500"> Lost password? </a>
    </div>
    <Button type="submit" class="w-full">Login to your account</Button>
    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
      Not registered? <a href="/" class="text-primary-700 hover:underline dark:text-primary-500"> Create account </a>
    </div>
  </form>
</Card>
```

## E-commerce card

Use this card for your e-commerce websites and show information about the products and enable actions such as adding a review and adding the product to the cart.

```svelte example class="flex justify-center flex-wrap gap-2"
<script>
  import { Card, Button, Rating, Badge } from 'flowbite-svelte';
</script>

<Card padding="none">
  <a href="/">
    <img class="p-8 rounded-t-lg" src="/images/product-1.webp" alt="product 1" />
  </a>
  <div class="px-5 pb-5">
    <a href="/">
      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
    </a>
    <Rating rating={4} size={24} class="mt-2.5 mb-5">
      <Badge slot="text" class="ms-3">4</Badge>
    </Rating>
    <div class="flex justify-between items-center">
      <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
      <Button href="/">Buy now</Button>
    </div>
  </div>
</Card>
```

## Call to action card

Use this CTA card example to encourage your users to visit a certain page such as downloading the iOS or Android application for your project.

```svelte example class="flex justify-center flex-wrap gap-2"
<script>
  import { Card, Button } from 'flowbite-svelte';
</script>

<Card class="text-center" size="lg" padding="xl">
  <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5>
  <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.</p>
  <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
    <Button>Download it</Button>
    <Button>Get it on</Button>
  </div>
</Card>
```

## Card with list

Use this card example if you want to show a list of data:

```svelte example class="flex justify-center flex-wrap gap-2"
<script>
  import { Card, Listgroup, Avatar } from 'flowbite-svelte';
  let list = [
    {
      img: { src: '/images/profile-picture-1.webp', alt: 'Neil Sims' },
      name: 'Neil Sims',
      email: 'email@windster.com',
      value: '$320'
    },
    {
      img: { src: '/images/profile-picture-2.webp', alt: 'Bonnie Green' },
      name: 'Bonnie Green',
      email: 'email@windster.com',
      value: '$3467'
    },
    {
      img: { src: '/images/profile-picture-3.webp', alt: 'Michael Gough' },
      name: 'Michael Gough',
      email: 'email@windster.com',
      value: '$67'
    }
  ];
</script>

<Card padding="xl" size="md">
  <div class="flex justify-between items-center mb-4">
    <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
    <a href="/" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"> View all </a>
  </div>
  <Listgroup items={list} let:item class="border-0 dark:bg-transparent!">
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <Avatar src={item.img.src} alt={item.img.alt} class="shrink-0" />
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

## Pricing card

Show detailed information to potential customers about your product’s pricing plan, list of features, and a purchase button.

```svelte example class="flex justify-center flex-wrap gap-2"
<script>
  import { Card, Button } from 'flowbite-svelte';
  import { CheckCircleSolid } from 'flowbite-svelte-icons';
</script>

<Card padding="xl">
  <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
  <div class="flex items-baseline text-gray-900 dark:text-white">
    <span class="text-3xl font-semibold">$</span>
    <span class="text-5xl font-extrabold tracking-tight">49</span>
    <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
  </div>
  <!-- List -->
  <ul class="my-7 space-y-4">
    <li class="flex space-x-2 rtl:space-x-reverse">
      <CheckCircleSolid class="w-4 h-4 text-primary-600 dark:text-primary-500" />
      <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> 2 team members </span>
    </li>
    <li class="flex space-x-2 rtl:space-x-reverse">
      <CheckCircleSolid class="w-4 h-4 text-primary-600 dark:text-primary-500" />
      <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> 20GB Cloud storage </span>
    </li>
    <li class="flex space-x-2 rtl:space-x-reverse">
      <CheckCircleSolid class="w-4 h-4 text-primary-600 dark:text-primary-500" />
      <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> Integration help </span>
    </li>
    <li class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500">
      <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
      <span class="text-base font-normal leading-tight text-gray-500">Sketch Files</span>
    </li>
    <li class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500">
      <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
      <span class="text-base font-normal leading-tight text-gray-500">API Access</span>
    </li>
    <li class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500">
      <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
      <span class="text-base font-normal leading-tight text-gray-500">Complete documentation</span>
    </li>
    <li class="flex space-x-2 rtl:space-x-reverse line-through decoration-gray-500">
      <CheckCircleSolid class="w-4 h-4 text-gray-400 dark:text-gray-500" />
      <span class="text-base font-normal leading-tight text-gray-500">24×7 phone & email support</span>
    </li>
  </ul>
  <Button class="w-full">Choose plan</Button>
</Card>
```

## Testimonial card

Use this example to split cards into multiple sections such as for testimonials or reviews.

```svelte example class="flex justify-center flex-wrap gap-2"
<script>
  import { Card } from 'flowbite-svelte';
</script>

<Card padding="none" size="xl" class="grid md:grid-cols-2">
  <figure class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
    <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
      <p class="my-4 font-light">If you care for your time, I hands down would go with this."</p>
    </blockquote>
    <figcaption class="flex justify-center items-center space-x-3 rtl:space-x-reverse">
      <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="Karen profile" />
      <div class="space-y-0.5 font-medium dark:text-white text-left">
        <div>Bonnie Green</div>
        <div class="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
      </div>
    </figcaption>
  </figure>
  <figure class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
      <p class="my-4 font-light">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
    </blockquote>
    <figcaption class="flex justify-center items-center space-x-3 rtl:space-x-reverse">
      <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="Robert profile" />
      <div class="space-y-0.5 font-medium dark:text-white text-left">
        <div>Roberta Casas</div>
        <div class="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
      </div>
    </figcaption>
  </figure>
  <figure class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
    <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3>
      <p class="my-4 font-light">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
    </blockquote>
    <figcaption class="flex justify-center items-center space-x-3 rtl:space-x-reverse">
      <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese profile" />
      <div class="space-y-0.5 font-medium dark:text-white text-left">
        <div>Jese Leos</div>
        <div class="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
      </div>
    </figcaption>
  </figure>
  <figure class="flex flex-col justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
    <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
      <p class="my-4 font-light">You have many examples that can be used to create a fast prototype for your team."</p>
    </blockquote>
    <figcaption class="flex justify-center items-center space-x-3 rtl:space-x-reverse">
      <img class="w-9 h-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="joseph profile" />
      <div class="space-y-0.5 font-medium dark:text-white text-left">
        <div>Joseph McFall</div>
        <div class="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
      </div>
    </figcaption>
  </figure>
</Card>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Card styling

- The Card component uses the Frame component. Use the `class` property to overwrite the default Frame class. The Frame component tag can be either an anchor tag or a div tag depending on the value of the href prop.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Card](https://flowbite.com/docs/components/card/)

<GitHubCompoLinks />
