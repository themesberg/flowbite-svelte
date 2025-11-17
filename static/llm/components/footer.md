# Svelte Footer - Flowbite


The footer is one of the most underestimated sections of a website being located at the very bottom of every page, however, it can be used as a way to try to convince users to stay on your website if they haven’t found the information they’ve been looking for inside the main content area.

## Setup

```svelte
<script lang="ts">
  import { Footer, FooterBrand, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup } from "flowbite-svelte";
</script>
```

## Default footer

<p>Use this footer component to show a copyright notice and some helpful website links.</p>

```svelte
<script lang="ts">
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from "flowbite-svelte";
</script>

<Footer>
  <FooterCopyright href="/" by="Flowbite™" year={2022} />
  <FooterLinkGroup class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
    <FooterLink href="/">About</FooterLink>
    <FooterLink href="/">Privacy Policy</FooterLink>
    <FooterLink href="/">Licensing</FooterLink>
    <FooterLink href="/">Contact</FooterLink>
  </FooterLinkGroup>
</Footer>
```

## Footer with logo

<p>Use this component to show your brand’s logo, a few website links and the copyright notice on a second row.</p>

```svelte
<script lang="ts">
  import { Footer, FooterCopyright, FooterLinkGroup, FooterBrand, FooterLink } from "flowbite-svelte";
</script>

<Footer footerType="logo">
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterBrand href="https://flowbite.com" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite Logo" name="Flowbite" />
    <FooterLinkGroup class="mb-6 flex flex-wrap items-center text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
      <FooterLink href="/">About</FooterLink>
      <FooterLink href="/">Privacy Policy</FooterLink>
      <FooterLink href="/">Licensing</FooterLink>
      <FooterLink href="/">Contact</FooterLink>
    </FooterLinkGroup>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
  <FooterCopyright href="/" by="Flowbite™" />
</Footer>
```

## Social media icons

<p>This footer component can be used to show your brand’s logo, multiple rows of website links, a copyright notice and social media profile icons including Twitter, Facebook, Instagram, and more.</p>

```svelte
<script lang="ts">
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from "flowbite-svelte";
  import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from "flowbite-svelte-icons";
  import Dribble from "$icons/Dribble.svelte";
</script>

<Footer footerType="socialmedia">
  <div class="md:flex md:justify-between">
    <div class="mb-6 md:mb-0">
      <FooterBrand href="https://flowbite.com" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite Logo" name="Flowbite" />
    </div>
    <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
        <FooterLinkGroup>
          <FooterLink class="mb-4" href="/">Flowbite</FooterLink>
          <FooterLink class="mb-4" href="/">Tailwind CSS</FooterLink>
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
        <FooterLinkGroup>
          <FooterLink class="mb-4" href="/">GitHub</FooterLink>
          <FooterLink class="mb-4" href="/">Discord</FooterLink>
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
        <FooterLinkGroup>
          <FooterLink class="mb-4" href="/">Privacy Policy</FooterLink>
          <FooterLink class="mb-4" href="/">Terms & Conditions</FooterLink>
        </FooterLinkGroup>
      </div>
    </div>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterCopyright href="/" by="Flowbite™" />
    <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center rtl:space-x-reverse">
      <FooterIcon href="/">
        <FacebookSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="/">
        <DiscordSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="/">
        <TwitterSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="/">
        <GithubSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="/">
        <Dribble />
      </FooterIcon>
    </div>
  </div>
</Footer>
```

## Sitemap links

<p>If you have a website with many pages you can use this footer component to show a sitemap spanning the entire width of a row followed below by a copyright notice and social media icons.</p>

```svelte
<script lang="ts">
  import { Footer, FooterLinkGroup, FooterLink, FooterIcon, FooterCopyright } from "flowbite-svelte";
  import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from "flowbite-svelte-icons";
  import Dribble from "$icons/Dribble.svelte";
</script>

<Footer footerType="sitemap">
  <div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
      <FooterLinkGroup class="text-gray-900 dark:text-gray-200">
        <FooterLink class="mb-4" href="/">About</FooterLink>
        <FooterLink class="mb-4" href="/">Careers</FooterLink>
        <FooterLink class="mb-4" href="/">Brand Center</FooterLink>
        <FooterLink class="mb-4" href="/">Blog</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Download</h2>
      <FooterLinkGroup class="text-gray-900 dark:text-gray-200">
        <FooterLink class="mb-4" href="/">Discord Server</FooterLink>
        <FooterLink class="mb-4" href="/">Twitter</FooterLink>
        <FooterLink class="mb-4" href="/">Facebook</FooterLink>
        <FooterLink class="mb-4" href="/">Contact Us</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Legal</h2>
      <FooterLinkGroup class="text-gray-900 dark:text-gray-200">
        <FooterLink class="mb-4" href="/">Privacy Policy</FooterLink>
        <FooterLink class="mb-4" href="/">Licensing</FooterLink>
        <FooterLink class="mb-4" href="/">Terms & Conditions</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Download</h2>
      <FooterLinkGroup class="text-gray-900 dark:text-gray-200">
        <FooterLink class="mb-4" href="/">iOS</FooterLink>
        <FooterLink class="mb-4" href="/">Android</FooterLink>
        <FooterLink class="mb-4" href="/">Windows</FooterLink>
        <FooterLink class="mb-4" href="/">MacOS</FooterLink>
      </FooterLinkGroup>
    </div>
  </div>
  <div class="bg-gray-100 px-4 py-6 md:flex md:items-center md:justify-between dark:bg-gray-700">
    <FooterCopyright class="text-sm text-gray-900 sm:text-center dark:text-gray-200" href="/" by="Flowbite™" />
    <div class="mt-4 flex space-x-6 sm:justify-center md:mt-0 rtl:space-x-reverse">
      <FooterIcon href="/">
        <FacebookSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="/">
        <DiscordSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="/">
        <TwitterSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="/">
        <GithubSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />
      </FooterIcon>
      <FooterIcon href="/">
        <Dribble />
      </FooterIcon>
    </div>
  </div>
</Footer>
```

## Sticky footer

Use this example to set create a sticky footer by using a fixed position to the bottom of the document page as the user scrolls up or down the main content area.

```svelte
<script lang="ts">
  import { Footer, FooterLinkGroup, FooterLink, ImagePlaceholder, TextPlaceholder, Skeleton, FooterCopyright } from "flowbite-svelte";
</script>

<div style="height:300px;" class="overflow-scroll pb-16">
  <Skeleton class="my-8" />
  <ImagePlaceholder class="my-8" />
  <TextPlaceholder class="my-8" />
</div>
<Footer class="absolute start-0 bottom-0 z-20 w-full border-t border-gray-200 bg-white p-4 shadow-sm md:flex md:items-center md:justify-between md:p-6 dark:border-gray-600 dark:bg-gray-800">
  <FooterCopyright href="/" by="Flowbite™" year={2022} />
  <FooterLinkGroup class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
    <FooterLink href="/">About</FooterLink>
    <FooterLink href="/">Privacy Policy</FooterLink>
    <FooterLink href="/">Licensing</FooterLink>
    <FooterLink href="/">Contact</FooterLink>
  </FooterLinkGroup>
</Footer>
```

## Component data

### Footer

#### Types

[FooterProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L665)

#### Props

- children
- footerType: "default"
- class: className

### FooterBrand

#### Types

[FooterBrandProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L670)

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

[FooterCopyrightProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L681)

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

[FooterIconProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L691)

#### Props

- children
- href
- ariaLabel
- class: className

### FooterLink

#### Types

[FooterLinkProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L701)

#### Props

- children
- liClass
- aClass
- href
- classes
- class: className

### FooterLinkGroup

#### Types

[FooterLinkGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L697)

#### Props

- class: className
- children


## References

- [Flowbite Footer](https://flowbite.com/docs/components/footer/)
