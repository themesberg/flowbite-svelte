# Svelte Links - Flowbite


Get started with the link component to enable hyperlinks across pages and external websites applied to elements such as inline text, buttons, cards, inside paragraphs, and more.

Hyperlinks are a great way to reduce bounce rate of the current page and encourage visitors to browse your website and become a returning user.

## Setup

```html
<script lang="ts">
  import { A } from "flowbite-svelte";
</script>
```

## Default link

Use this example to set default styles to an inline link element.

```svelte
<script lang="ts">
  import { A } from "flowbite-svelte";
</script>

<A class="font-medium hover:underline">Read more</A>
```

## A Link as Button

This example can be used to use as a button.

```svelte
<script lang="ts">
  import { A } from "flowbite-svelte";
  let show_full_link = $state(false);
</script>

<A asButton onclick={() => (show_full_link = !show_full_link)}>view full link</A>

{#if show_full_link}
  <p>The full link is now visible.</p>
{/if}
```

## Paragraph

Use this example to set a link inside a paragraph with an underline style.

```svelte
<script lang="ts">
  import { A, P } from "flowbite-svelte";
</script>

<P>
  The free updates that will be provided is based on the <A href="/" class="underline hover:no-underline">roadmap</A> that we have laid out for this project. It is also possible that we will provide extra
  updates outside of the roadmap as well.
</P>
```

## Icon link

This example can be used to set a custom SVG icon inside the hyperlink element.

```svelte
<script lang="ts">
  import { A, P } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<P>
  500,000 people have made over a million apps with Glide.
  <A href="/" color="primary" class="inline-flex items-center font-medium  hover:underline">
    Read their stories
    <ArrowRightOutline class="ms-2 h-6 w-6" />
  </A>
</P>
```

## CTA link

Use this example to set a hyperlink on a CTA element with text and a custom icon.

```svelte
<script lang="ts">
  import { A } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  import Figma from "$icons/Figma.svelte";
</script>

<A
  href="/"
  class="inline-flex items-center justify-center rounded-lg bg-gray-50 p-5 text-base font-medium hover:bg-gray-100 hover:text-gray-900 hover:no-underline dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
>
  <Figma />
  <span class="ms-3 w-full">Get started with our Figma Design System</span>
  <ArrowRightOutline class="ms-2 h-6 w-6" />
</A>
```

## Card link

Use this example to set a hyperlink on a card component.

```svelte
<script lang="ts">
  import { Card } from "flowbite-svelte";
</script>

<Card href="/cards" class="p-4 sm:p-6">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
  <p class="leading-tight font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</Card>
```

## Image link

This example can be used to set a hyperlink on an image inside a card component.

```svelte
<script lang="ts">
  import { Card, Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<Card img="/images/image-1.webp" href="/cards">
  <div class="m-6">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    <p class="mb-3 leading-tight font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <Button>
      Read more <ArrowRightOutline class="ms-2 h-6 w-6" />
    </Button>
  </div>
</Card>
```

## onclick

```svelte
<script lang="ts">
  import { A } from "flowbite-svelte";

  const myaction = () => {
    console.log("Action triggered");
  };
</script>

<A href="/" onclick={myaction}>Read more</A>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References
