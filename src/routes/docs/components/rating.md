---
layout: componentLayout
title: Svelte Rating - Flowbite
breadcrumb_title: Svelte Rating
component_title: Rating
dir: Components
description: Use the rating component to show reviews and testimonials from your users using stars and scores based on multiple styles and sizes
thumnailSize: w-64
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

Get started with the rating component to show an aggregate of reviews and scores in the forms of stars or numbers.

You can find multiple examples on this page including different styles, sizes, and variants of the rating component and other associated elements such as a comment or card.

## Setup

Let's import all necessary components in the script tag. We import a heart, thumb-up, and smiley icons, but you can use any icons as you like.

```svelte example hideOutput
<script lang="ts">
  import { Rating, AdvancedRating, ScoreRating } from "flowbite-svelte";
</script>
```

## Default rating

The default rating icon is a star. Set the total and rating props. The `id` prop is required. Use a unique name.

```svelte example
{#include Default.svelte}
```

## Stars

You can use the Star component with the `iconIndex` and `fillPercent` props.

```svelte example class="flex"
{#include Stars.svelte}
```

## Rating with text

If you also want to show a text near the stars you can use the `text` snippet to add any text.

```svelte example
{#include Text.svelte}
```

## Rating count

Aggregate more results by using this example to show the amount of reviews and the average score.

```svelte example hideScript
{#include Count.svelte}
```

## Icon and size

The default icon size is `24`. Import your icon and set it in a icon props.

```svelte example
{#include IconAndSize.svelte}
```

```svelte example
{#include IconAndSize2.svelte}
```

## AdvancedRating component

Set the `total`,` rating`, and `ratings` prop for AdvancedRation component. Use the `rating` slot for Rating component with the `total` and `rating` props. Use the `globalText` slot for additional information.

```svelte example
{#include Advanced.svelte}
```

## Different icon

As we describe in the Rating component, you can change an icon in the Rating component.

```svelte example
{#include Different.svelte}
```

## Score rating

```svelte example
{#include Score.svelte}
```

## Rating comment

Use this component to show a single rating comment and its score alongside other components such as the user profile avatar, name, post date, and more.

```svelte example
{#include Comment.svelte}
```

## Review content

Use this component to show the review content from a user alongside the avatar, location, details, and the score inside a card element.

```svelte example
{#include Review.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Rating](https://flowbite.com/docs/components/rating/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
