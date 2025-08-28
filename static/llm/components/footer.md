# Svelte Footer - Flowbite


The footer is one of the most underestimated sections of a website being located at the very bottom of every page, however, it can be used as a way to try to convince users to stay on your website if they haven’t found the information they’ve been looking for inside the main content area.

## Setup

```svelte
<script>
  import { Footer, FooterBrand, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup } from "flowbite-svelte";
</script>
```

## Default footer

<p>Use this footer component to show a copyright notice and some helpful website links.</p>

```svelte
{#include Default.svelte}
```

## Footer with logo

<p>Use this component to show your brand’s logo, a few website links and the copyright notice on a second row.</p>

```svelte
{#include Logo.svelte}
```

## Social media icons

<p>This footer component can be used to show your brand’s logo, multiple rows of website links, a copyright notice and social media profile icons including Twitter, Facebook, Instagram, and more.</p>

```svelte
{#include Social.svelte}
```

## Sitemap links

<p>If you have a website with many pages you can use this footer component to show a sitemap spanning the entire width of a row followed below by a copyright notice and social media icons.</p>

```svelte
{#include Sitemap.svelte}
```

## Sticky footer

Use this example to set create a sticky footer by using a fixed position to the bottom of the document page as the user scrolls up or down the main content area.

```svelte
{#include Sticky.svelte}
```

## Component data

### Footer

#### Types

[FooterProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L625)

#### Props

- children
- footerType: "default"
- class: className

### FooterBrand

#### Types

[FooterBrandProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L630)

#### Props

- children
- aClass
- spanClass
- imgClass
- href
- src
- alt
- name

### FooterCopyright

#### Types

[FooterCopyrightProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L641)

#### Props

- spanClass
- aClass
- href
- by
- copyrightMessage: "All Rights Reserved."
- year
- bySpanClass
- classes
- class: className

### FooterIcon

#### Types

[FooterIconProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L651)

#### Props

- children
- href
- ariaLabel
- class: className

### FooterLink

#### Types

[FooterLinkProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L661)

#### Props

- children
- liClass
- aClass
- href
- classes
- class: className

### FooterLinkGroup

#### Types

[FooterLinkGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L657)

#### Props

- class: className
- children


## References

- [Flowbite Footer](https://flowbite.com/docs/components/footer/)


