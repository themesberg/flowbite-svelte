---
layout: componentLayout
title: Svelte Cards - Flowbite
breadcrumb_title: Svelte Card
component_title: Cards
dir: Components
description: Get started with a large variety of Tailwind CSS card examples for your web project
thumnailSize: w-36
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
  import { P, A } from '$lib'
  const dirName = 'card'
</script>

Use these responsive card components to show data entries and information to your users in multiple forms and contexts such as for your blog, application, user profiles, and more.

## Set up

Import Card in the script tag.

```svelte example hideOutput
<script lang="ts">
  import { Card } from "flowbite-svelte";
</script>
```

## Default card

Use the following simple card component with a title and description. Notice the `href` prop set, as that card is one big `<a/>` element.

```svelte example class="flex justify-center flex-wrap gap-2" hideScript
{#include Default.svelte}
```

## Card with action button

Use the following example of a card element if you also want to have an action button.

```svelte example class="flex justify-center flex-wrap gap-2"
{#include Action.svelte}
```

## Card with link

This example can be used to show a CTA as a link instead of a button inside the card.

```svelte example class="flex justify-center flex-wrap gap-2"
{#include Link.svelte}
```

## Card with image

Use <code>reverse={true}</code> to reverse the position of an image.

You can use the following example of a card element with an image for blog posts, user cards, and many more.

```svelte example class="flex justify-center flex-wrap gap-2"
{#include Image.svelte}
```

## Horizontal card

If you want to spice up your cards you can use the following card which has its child elements aligned horizontally.

```svelte example class="flex justify-center flex-wrap gap-2"
{#include Horizontal.svelte}
```

## User profile card

Use this user profile card example if you want to show a dropdown menu and buttons to enable multiple actions from your user.

```svelte example class="flex justify-center flex-wrap gap-2"
{#include Profile.svelte}
```

## Card with form inputs

Use this card example where you can add form input elements that can be used for authentication actions or any other context where you need to receive information from your users.

```svelte example class="flex justify-center flex-wrap gap-2"
{#include Form.svelte}
```

## E-commerce card

Use this card for your e-commerce websites and show information about the products and enable actions such as adding a review and adding the product to the cart.

```svelte example class="flex justify-center flex-wrap gap-2"
{#include Ecommerce.svelte}
```

## Call to action card

Use this CTA card example to encourage your users to visit a certain page such as downloading the iOS or Android application for your project.

```svelte example class="flex justify-center flex-wrap gap-2"
{#include Action.svelte}
```

## Card with list

Use this card example if you want to show a list of data:

```svelte example class="flex justify-center flex-wrap gap-2"
{#include List.svelte}
```

## Pricing card

Show detailed information to potential customers about your product’s pricing plan, list of features, and a purchase button.

```svelte example class="flex justify-center flex-wrap gap-2"
{#include Pricing.svelte}
```

## Testimonial card

Use this example to split cards into multiple sections such as for testimonials or reviews.

```svelte example class="flex justify-center flex-wrap gap-2"
{#include Testimonial.svelte}
```

## Custom size

Use `class="max-w-[250px]` to create a custom size card.

```svelte example
{#include Size.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Card](https://flowbite.com/docs/components/card/)

## GitHub Links

<GitHubCompoLinks />

## Machine-Readable LLM Files

<LlmLink />
