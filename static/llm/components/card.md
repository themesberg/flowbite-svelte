# Svelte Cards - Flowbite


Use these responsive card components to show data entries and information to your users in multiple forms and contexts such as for your blog, application, user profiles, and more.

## Set up

Import Card in the script tag.

```svelte
<script lang="ts">
  import { Card } from "flowbite-svelte";
</script>
```

## Default card

Use the following simple card component with a title and description. Notice the `href` prop set, as that card is one big `<a/>` element.

```svelte
<script lang="ts">
  import { Card } from "flowbite-svelte";
</script>

<Card href="/cards" class="p-4 sm:p-6 md:p-8">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
  <p class="leading-tight font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</Card>
```

## Card with action button

Use the following example of a card element if you also want to have an action button.

```svelte
<script lang="ts">
  import { Card, Button } from "flowbite-svelte";
</script>

<Card size="lg" class="p-4 text-center sm:p-8 md:p-10">
  <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5>
  <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.</p>
  <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
    <Button>Download it</Button>
    <Button>Get it on</Button>
  </div>
</Card>
```

## Card with link

This example can be used to show a CTA as a link instead of a button inside the card.

```svelte
<script lang="ts">
  import { Card } from "flowbite-svelte";
  import { GiftBoxSolid, ArrowUpRightFromSquareOutline } from "flowbite-svelte-icons";
</script>

<Card class="p-4 sm:p-6 md:p-8">
  <GiftBoxSolid class="mb-3 h-8 w-8 text-gray-500 dark:text-gray-400" />
  <a href="/">
    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Need a help in Claim?</h5>
  </a>
  <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
  <a href="/" class="text-primary-600 inline-flex items-center hover:underline">
    See our guideline
    <ArrowUpRightFromSquareOutline class="ms-2.5 h-4 w-4" />
  </a>
</Card>
```

## Card with image

Use <code>reverse={true}</code> to reverse the position of an image.

You can use the following example of a card element with an image for blog posts, user cards, and many more.

```svelte
<script lang="ts">
  import { Card, Button, Toggle } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  let vCard = false;
</script>

<div class="space-y-4">
  <Card img="/images/image-1.webp" reverse={vCard}>
    <div class="m-6">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      <Button class="w-40">
        Read more <ArrowRightOutline class="ms-2 h-6 w-6 text-white" />
      </Button>
    </div>
  </Card>
  <Toggle bind:checked={vCard} class="italic dark:text-gray-500">Reverse</Toggle>
</div>
```

## Horizontal card

If you want to spice up your cards you can use the following card which has its child elements aligned horizontally.

```svelte
<script lang="ts">
  import { Card, Toggle } from "flowbite-svelte";
  let hCard = false;
</script>

<div class="space-y-4">
  <Card img="/images/image-1.webp" href="/" horizontal size="md" reverse={hCard}>
    <div class="m-6">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
  </Card>
  <Toggle bind:checked={hCard} class="italic dark:text-gray-500">Reverse</Toggle>
</div>
```

## User profile card

Use this user profile card example if you want to show a dropdown menu and buttons to enable multiple actions from your user.

```svelte
<script lang="ts">
  import { Card, Dropdown, DropdownItem, Avatar, Button } from "flowbite-svelte";
  import { DotsHorizontalOutline } from "flowbite-svelte-icons";
</script>

<Card class="p-4 sm:p-5 md:p-7">
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
    <div class="mt-4 flex space-x-3 lg:mt-6 rtl:space-x-reverse">
      <Button>Add friend</Button>
      <Button color="light" class="dark:text-white">Message</Button>
    </div>
  </div>
</Card>
```

## Card with form inputs

Use this card example where you can add form input elements that can be used for authentication actions or any other context where you need to receive information from your users.

```svelte
<script lang="ts">
  import { Card, Button, Label, Input, Checkbox } from "flowbite-svelte";
</script>

<Card class="p-4 sm:p-6 md:p-8">
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
      <a href="/" class="text-primary-700 dark:text-primary-500 ms-auto text-sm hover:underline">Lost password?</a>
    </div>
    <Button type="submit" class="w-full">Login to your account</Button>
    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
      Not registered? <a href="/" class="text-primary-700 dark:text-primary-500 hover:underline">Create account</a>
    </div>
  </form>
</Card>
```

## E-commerce card

Use this card for your e-commerce websites and show information about the products and enable actions such as adding a review and adding the product to the cart.

```svelte
<script lang="ts">
  import { Card, Button, Rating, Badge } from "flowbite-svelte";
</script>

<Card class="p-0">
  <a href="/">
    <img class="rounded-t-lg p-8" src="/images/product-1.webp" alt="product 1" />
  </a>
  <div class="px-5 pb-5">
    <a href="/">
      <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
    </a>
    <Rating rating={4} size={24} class="mt-2.5 mb-5">
      {#snippet text()}
        <Badge class="ms-3">4</Badge>
      {/snippet}
    </Rating>
    <div class="flex items-center justify-between">
      <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
      <Button href="/">Buy now</Button>
    </div>
  </div>
</Card>
```

## Call to action card

Use this CTA card example to encourage your users to visit a certain page such as downloading the iOS or Android application for your project.

```svelte
<script lang="ts">
  import { Card, Button } from "flowbite-svelte";
</script>

<Card size="lg" class="p-4 text-center sm:p-8 md:p-10">
  <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5>
  <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.</p>
  <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
    <Button>Download it</Button>
    <Button>Get it on</Button>
  </div>
</Card>
```

## Card with list

Use this card example if you want to show a list of data:

```svelte
<script lang="ts">
  import { Card, Listgroup, Avatar } from "flowbite-svelte";
  let list = [
    {
      img: { src: "/images/profile-picture-1.webp", alt: "Neil Sims" },
      name: "Neil Sims",
      email: "email@windster.com",
      value: "$320"
    },
    {
      img: { src: "/images/profile-picture-2.webp", alt: "Bonnie Green" },
      name: "Bonnie Green",
      email: "email@windster.com",
      value: "$3467"
    },
    {
      img: { src: "/images/profile-picture-3.webp", alt: "Michael Gough" },
      name: "Michael Gough",
      email: "email@windster.com",
      value: "$67"
    }
  ];
</script>

<Card class="p-4 sm:p-8 md:p-10" size="md">
  <div class="mb-4 flex items-center justify-between">
    <h5 class="text-xl leading-none font-bold text-gray-900 dark:text-white">Latest Customers</h5>
    <a href="/" class="text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline">View all</a>
  </div>
  <Listgroup items={list} class="border-0 dark:bg-transparent!">
    {#snippet children(item)}
      <div class="flex items-center space-x-4 py-2 rtl:space-x-reverse">
        {#if typeof item === "object" && item.img}
          <Avatar src={item.img.src} alt={item.img.alt} class="shrink-0" />
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium text-gray-900 dark:text-white">
              {item.name}
            </p>
            <p class="truncate text-sm text-gray-500 dark:text-gray-400">
              {item.email}
            </p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {item.value}
          </div>
        {/if}
      </div>
    {/snippet}
  </Listgroup>
</Card>
```

## Pricing card

Show detailed information to potential customers about your product’s pricing plan, list of features, and a purchase button.

```svelte
<script lang="ts">
  import { Card, Button } from "flowbite-svelte";
  import { CheckCircleSolid } from "flowbite-svelte-icons";
</script>

<Card class="p-4 sm:p-8 md:p-10">
  <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
  <div class="flex items-baseline text-gray-900 dark:text-white">
    <span class="text-3xl font-semibold">$</span>
    <span class="text-5xl font-extrabold tracking-tight">49</span>
    <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
  </div>
  <!-- List -->
  <ul class="my-7 space-y-4">
    <li class="flex space-x-2 rtl:space-x-reverse">
      <CheckCircleSolid class="text-primary-600 dark:text-primary-500 h-4 w-4" />
      <span class="text-base leading-tight font-normal text-gray-500 dark:text-gray-400">2 team members</span>
    </li>
    <li class="flex space-x-2 rtl:space-x-reverse">
      <CheckCircleSolid class="text-primary-600 dark:text-primary-500 h-4 w-4" />
      <span class="text-base leading-tight font-normal text-gray-500 dark:text-gray-400">20GB Cloud storage</span>
    </li>
    <li class="flex space-x-2 rtl:space-x-reverse">
      <CheckCircleSolid class="text-primary-600 dark:text-primary-500 h-4 w-4" />
      <span class="text-base leading-tight font-normal text-gray-500 dark:text-gray-400">Integration help</span>
    </li>
    <li class="flex space-x-2 line-through decoration-gray-500 rtl:space-x-reverse">
      <CheckCircleSolid class="h-4 w-4 text-gray-400 dark:text-gray-500" />
      <span class="text-base leading-tight font-normal text-gray-500">Sketch Files</span>
    </li>
    <li class="flex space-x-2 line-through decoration-gray-500 rtl:space-x-reverse">
      <CheckCircleSolid class="h-4 w-4 text-gray-400 dark:text-gray-500" />
      <span class="text-base leading-tight font-normal text-gray-500">API Access</span>
    </li>
    <li class="flex space-x-2 line-through decoration-gray-500 rtl:space-x-reverse">
      <CheckCircleSolid class="h-4 w-4 text-gray-400 dark:text-gray-500" />
      <span class="text-base leading-tight font-normal text-gray-500">Complete documentation</span>
    </li>
    <li class="flex space-x-2 line-through decoration-gray-500 rtl:space-x-reverse">
      <CheckCircleSolid class="h-4 w-4 text-gray-400 dark:text-gray-500" />
      <span class="text-base leading-tight font-normal text-gray-500">24×7 phone & email support</span>
    </li>
  </ul>
  <Button class="w-full">Choose plan</Button>
</Card>
```

## Testimonial card

Use this example to split cards into multiple sections such as for testimonials or reviews.

```svelte
<script lang="ts">
  import { Card } from "flowbite-svelte";
</script>

<Card size="xl" class="grid md:grid-cols-2">
  <figure
    class="flex flex-col items-center justify-center rounded-t-lg border-b border-gray-200 bg-white p-8 text-center md:rounded-t-none md:rounded-tl-lg md:border-e dark:border-gray-700 dark:bg-gray-800"
  >
    <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
      <p class="my-4 font-light">If you care for your time, I hands down would go with this."</p>
    </blockquote>
    <figcaption class="flex items-center justify-center space-x-3 rtl:space-x-reverse">
      <img class="h-9 w-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="Karen profile" />
      <div class="space-y-0.5 text-left font-medium dark:text-white">
        <div>Bonnie Green</div>
        <div class="text-sm font-light text-gray-500 dark:text-gray-400">Developer at Open AI</div>
      </div>
    </figcaption>
  </figure>
  <figure class="flex flex-col items-center justify-center rounded-tr-lg border-b border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800">
    <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
      <p class="my-4 font-light">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
    </blockquote>
    <figcaption class="flex items-center justify-center space-x-3 rtl:space-x-reverse">
      <img class="h-9 w-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="Robert profile" />
      <div class="space-y-0.5 text-left font-medium dark:text-white">
        <div>Roberta Casas</div>
        <div class="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
      </div>
    </figcaption>
  </figure>
  <figure class="flex flex-col items-center justify-center rounded-bl-lg border-b border-gray-200 bg-white p-8 text-center md:border-e md:border-b-0 dark:border-gray-700 dark:bg-gray-800">
    <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3>
      <p class="my-4 font-light">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
    </blockquote>
    <figcaption class="flex items-center justify-center space-x-3 rtl:space-x-reverse">
      <img class="h-9 w-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese profile" />
      <div class="space-y-0.5 text-left font-medium dark:text-white">
        <div>Jese Leos</div>
        <div class="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at Facebook</div>
      </div>
    </figcaption>
  </figure>
  <figure class="flex flex-col items-center justify-center rounded-b-lg border-gray-200 bg-white p-8 text-center md:rounded-br-lg dark:border-gray-700 dark:bg-gray-800">
    <blockquote class="mx-auto mb-4 max-w-2xl text-gray-500 dark:text-gray-400">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
      <p class="my-4 font-light">You have many examples that can be used to create a fast prototype for your team."</p>
    </blockquote>
    <figcaption class="flex items-center justify-center space-x-3 rtl:space-x-reverse">
      <img class="h-9 w-9 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="joseph profile" />
      <div class="space-y-0.5 text-left font-medium dark:text-white">
        <div>Joseph McFall</div>
        <div class="text-sm font-light text-gray-500 dark:text-gray-400">CTO at Google</div>
      </div>
    </figcaption>
  </figure>
</Card>
```

## Custom size

Use `class="max-w-[250px]` to create a custom size card.

```svelte
<script lang="ts">
  import { Card } from "flowbite-svelte";
</script>

<div class="flex justify-center">
  <Card class="max-w-[250px] p-6">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Technology acquisitions</h5>
    <p class="leading-tight font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions.</p>
  </Card>
</div>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Card](https://flowbite.com/docs/components/card/)
