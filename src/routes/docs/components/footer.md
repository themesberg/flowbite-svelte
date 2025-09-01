---
layout: componentLayout
title: Svelte Footer - Flowbite
breadcrumb_title: Svelte Footer
component_title: Footer
dir: Components
description: Use the footer section at the bottom of every page to show valuable information to your users, such as sitemap links, a copyright notice, and a logo
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
  import { P, A, Footer } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The footer is one of the most underestimated sections of a website being located at the very bottom of every page, however, it can be used as a way to try to convince users to stay on your website if they haven’t found the information they’ve been looking for inside the main content area.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { Footer, FooterBrand, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup } from "flowbite-svelte";
</script>
```

## Default footer

<p>Use this footer component to show a copyright notice and some helpful website links.</p>

```svelte example
{#include Default.svelte}
```

## Footer with logo

<p>Use this component to show your brand’s logo, a few website links and the copyright notice on a second row.</p>

```svelte example
{#include Logo.svelte}
```

## Social media icons

<p>This footer component can be used to show your brand’s logo, multiple rows of website links, a copyright notice and social media profile icons including Twitter, Facebook, Instagram, and more.</p>

```svelte example
{#include Social.svelte}
```

## Sitemap links

<p>If you have a website with many pages you can use this footer component to show a sitemap spanning the entire width of a row followed below by a copyright notice and social media icons.</p>

```svelte example
{#include Sitemap.svelte}
```

## Sticky footer

Use this example to set create a sticky footer by using a fixed position to the bottom of the document page as the user scrolls up or down the main content area.

```svelte example class="relative"
{#include Sticky.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Footer](https://flowbite.com/docs/components/footer/)

## GitHub Links

<GitHubCompoLinks />

## Machine-Readable LLM Files

<LlmLink />
