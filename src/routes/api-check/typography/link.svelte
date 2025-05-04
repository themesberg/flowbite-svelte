<script lang="ts">
  import { A, Button, P, Card } from "$lib";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  import Figma from "../../utils/icons/Figma.svelte";

  const myaction = () => {
    console.log("Action triggered");
  };
  const components = "A";
</script>

<h1 class="text-3xl my-4">Link</h1>

<h2 class="text-2xl">Default link</h2>
 Use this example to set default styles to an inline link element.

<div class="m-8">
  <A class="font-medium hover:underline">Read more</A>
</div>

<h2 class="text-2xl">Button</h2>
 This example can be used to set a hyperlink on a button component.

<div class="m-8">
  <Button href="/">Read more</Button>
</div>

<h2 class="text-2xl">Paragraph</h2>
 Use this example to set a link inside a paragraph with an underline style.

<div class="m-8">
  <P>
    The free updates that will be provided is based on the <A href="/" class="underline hover:no-underline">roadmap</A> that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.
  </P>
</div>

<h2 class="text-2xl">Icon link</h2>
 This example can be used to set a custom SVG icon inside the hyperlink element.

<div class="m-8">
  <P>
    500,000 people have made over a million apps with Glide.
    <A href="/" color="primary" class="inline-flex items-center font-medium  hover:underline">
      Read their stories
      <ArrowRightOutline class="ms-2 h-6 w-6" />
    </A>
  </P>
</div>

<h2 class="text-2xl">CTA link</h2>
 Use this example to set a hyperlink on a CTA element with text and a custom icon.

<div class="m-8">
  <A href="/" class="inline-flex items-center justify-center rounded-lg bg-gray-50 p-5 text-base font-medium hover:bg-gray-100 hover:text-gray-900 hover:no-underline dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
    <Figma />
    <span class="ms-3 w-full">Get started with our Figma Design System</span>
    <ArrowRightOutline class="ms-2 h-6 w-6" />
  </A>
</div>

<h2 class="text-2xl">Card link</h2>
 Use this example to set a hyperlink on a card component.

<div class="m-8">
  <Card href="/cards" class="p-4 sm:p-6">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="leading-tight font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  </Card>
</div>

<h2 class="text-2xl">Image link</h2>
 This example can be used to set a hyperlink on an image inside a card component.

<div class="m-8">
  <Card img="/images/image-1.webp" href="/cards">
    <div class="m-6">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      <Button>
        Read more <ArrowRightOutline class="ms-2 h-6 w-6" />
      </Button>
    </div>
  </Card>
</div>

<h2 class="text-2xl">onclick</h2>

<div class="m-8">
  <A href="/" onclick={myaction}>Read more</A>
</div>
