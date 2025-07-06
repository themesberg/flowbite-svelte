# Svelte Blockquote - Flowbite


Get started with Blockquote component when quoting external sources such as quotes inside an article, user reviews, and testimonials based on multiple examples of layouts, styles, and contexts.

## Default blockquote

Use this example to quote an external source inside a blockquote element.

```svelte
<script>
  import { Blockquote } from "flowbite-svelte";
</script>

<Blockquote size="xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
```

## Solid background

This example can be used as an alternative style to the default one by applying a solid background color.

```svelte
<script>
  import { Blockquote, P } from "flowbite-svelte";
</script>

<P color="text-gray-500 dark:text-gray-400">Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live.</P>
<Blockquote border bg class="my-4 p-4">
  <P size="xl" height="relaxed">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</P>
</Blockquote>
<P color="text-gray-500 dark:text-gray-400">First of all you need to understand how Flowbite works. This library is not another framework. Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the documentation.</P>
```

## Blockquote icon

Use this example to show an icon above the blockquote text content.

```svelte
<script>
  import { Blockquote } from "flowbite-svelte";
  import { QuoteSolid } from "flowbite-svelte-icons";
</script>

<Blockquote size="xl">
  <QuoteSolid class="h-10 w-10 text-gray-400 dark:text-gray-600" />
  "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
</Blockquote>
```

## Paragraph context

Use this example to show a blockquote component between multiple paragraph elements.

```svelte
<script>
  import { Blockquote, P } from "flowbite-svelte";
</script>

<P class="mb-3" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
<div class="grid grid-cols-1 md:grid-cols-2 md:gap-6">
  <P class="mb-3" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>
  <Blockquote class="mb-3" size="xl">" Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application. "</Blockquote>
</div>
<P class="mb-3" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
```

## User testimonial

This example can be used for user testimonials by mentioning the author and occupation of the author.

```svelte
<script>
  import { Blockquote } from "flowbite-svelte";
  import { QuoteSolid } from "flowbite-svelte-icons";
</script>

<figure class="mx-auto max-w-(--breakpoint-md) text-center">
  <QuoteSolid class="mx-auto mb-3 h-12 w-12 text-gray-400 dark:text-gray-600" />
  <Blockquote alignment="center" size="2xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
  <figcaption class="mt-6 flex items-center justify-center space-x-3 rtl:space-x-reverse">
    <img class="h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Micheal Gough profile" />
    <div class="flex items-center divide-x-2 divide-gray-500 rtl:divide-x-reverse dark:divide-gray-700">
      <cite class="pe-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>
      <cite class="ps-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</cite>
    </div>
  </figcaption>
</figure>
```

## User Review

Use this example to show a user review with rating stars and the name and occupation of the author.

```svelte
<script>
  import { Blockquote, Rating } from "flowbite-svelte";
</script>

<figure class="max-w-(--breakpoint-md)">
  <div class="mb-4 flex items-center text-yellow-300">
    <Rating total={5} rating={4.66} size={24} />
  </div>
  <Blockquote italic={false} size="2xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
  <figcaption class="mt-6 flex items-center space-x-3 rtl:space-x-reverse">
    <img class="h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green profile" />
    <div class="flex items-center divide-x-2 divide-gray-300 rtl:divide-x-reverse dark:divide-gray-700">
      <cite class="pe-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>
      <cite class="ps-3 text-sm font-light text-gray-500 dark:text-gray-400">CTO at Flowbite</cite>
    </div>
  </figcaption>
</figure>
```

## Alignment

Choose from the following examples the blockquote text alignment from starting from left, center to right based on the utility classes from Tailwind CSS.

### Left

The default alignment of the blockquote text content is the left side of the document.

```svelte
<script>
  import { Blockquote } from "flowbite-svelte";
</script>

<Blockquote size="xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
```

### Center

Use the `alignment="center"` prop to align the text content inside the blockquote to the center.

```svelte
<script>
  import { Blockquote } from "flowbite-svelte";
</script>

<Blockquote alignment="center" size="xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
```

### Right

Use the `alignment="right"` prop to align the blockquote text content to the right side of the page.

```svelte
<script>
  import { Blockquote } from "flowbite-svelte";
</script>

<Blockquote alignment="right" size="xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
```

## Sizes

### Small

Use the `size="lg"` prop to apply the small size for the blockquote component. You can use any size from `xs` to `9xl`. See more details in the Prop section below.

```svelte
<script>
  import { Blockquote } from "flowbite-svelte";
</script>

<Blockquote size="lg">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
```

### Medium

Use the `size="xl"` to set the default size for the blockquote element.

```svelte
<script>
  import { Blockquote } from "flowbite-svelte";
</script>

<Blockquote size="xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
```

### Large

The `size="2xl"` prop can be used to set a large size for the blockquote component.

```svelte
<script>
  import { Blockquote } from "flowbite-svelte";
</script>

<Blockquote size="2xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>
```

## See also

- [Heading](https://flowbite-svelte.com/llm/typography/heading.md)
- [Paragraph](https://flowbite-svelte.com/llm/typography/paragraph.md)
- [Link](https://flowbite-svelte.com/llm/typography/link.md)
- [List](https://flowbite-svelte.com/llm/typography/list.md)

## Component data

### Blockquote

#### Types

[BlockquoteProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1879)

#### Props

- children
- class: className
- border
- italic: true
- bg
- alignment: "left"
- size: "lg"


## References

<GitHubCompoLinks {components}/>
