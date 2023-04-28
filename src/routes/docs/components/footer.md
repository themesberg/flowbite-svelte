---
layout: componentLayout
title: Svelte Footer - Flowbite
breadcrumb_title: Svelte Footer
component_title: Footer
dir: Components
description: Use the footer section at the bottom of every page to show valuable information to your users, such as sitemap links, a copyright notice, and a logo
---

<script>
  import { TableProp, TableDefaultRow, } from '../../utils'
  import { P, A } from '$lib'

  import { props as items } from '../../props/Footer.json'
  import { props as items2 } from '../../props/FooterBrand.json'
  import { props as items3 } from '../../props/FooterCopyright.json'
  import { props as items4 } from '../../props/FooterIcon.json'
  import { props as items5 } from '../../props/FooterLink.json'
  import { props as items6 } from '../../props/FooterLinkGroup.json'
</script>



The footer is one of the most underestimated sections of a website being located at the very bottom of every page, however, it can be used as a way to try to convince users to stay on your website if they haven’t found the information they’ve been looking for inside the main content area.

## Setup

```svelte example hideOutput
<script>
  import { Footer, FooterBrand, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup } from "flowbite-svelte"
</script>
```

## Default footer

<p>Use this footer component to show a copyright notice and some helpful website links.</p>

```svelte example
<script>
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink } from 'flowbite-svelte'
</script>

<Footer>
  <FooterCopyright href="/" by="Flowbite™" year={2022} />
  <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
    <FooterLink href="/">About</FooterLink>
    <FooterLink href="/">Privacy Policy</FooterLink>
    <FooterLink href="/">Licensing</FooterLink>
    <FooterLink href="/">Contact</FooterLink>
  </FooterLinkGroup>
</Footer>
```

## Footer with logo

<p>Use this component to show your brand’s logo, a few website links and the copyright notice on a second row.</p>

```svelte example
<script>
  import { Footer, FooterCopyright, FooterLinkGroup, FooterBrand, FooterLink } from 'flowbite-svelte'
</script>

<Footer footerType="logo">
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterBrand
      href="https://flowbite.com"
      src="https://flowbite.com/docs/images/logo.svg"
      alt="Flowbite Logo"
      name="Flowbite"
    />
    <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
      <FooterLink href="/">About</FooterLink>
      <FooterLink href="/">Privacy Policy</FooterLink>
      <FooterLink href="/">Licensing</FooterLink>
      <FooterLink href="/">Contact</FooterLink>
    </FooterLinkGroup>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <FooterCopyright href="/" by="Flowbite™" />
</Footer>
```

## Social media icons

<p>This footer component can be used to show your brand’s logo, multiple rows of website links, a copyright notice and social media profile icons including Twitter, Facebook, Instagram, and more.</p>

```svelte example
<script>
  import { Footer, FooterCopyright, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon } from 'flowbite-svelte'
</script>

<Footer footerType="socialmedia">
  <div class="md:flex md:justify-between">
    <div class="mb-6 md:mb-0">
      <FooterBrand
        href="https://flowbite.com"
        src="https://flowbite.com/docs/images/logo.svg"
        alt="Flowbite Logo"
        name="Flowbite"
      />
    </div>
    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
        <FooterLinkGroup>
          <FooterLink liClass="mb-4" href="/">Flowbite</FooterLink>
          <FooterLink liClass="mb-4" href="/">Tailwind CSS</FooterLink>
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>
        <FooterLinkGroup>
          <FooterLink liClass="mb-4" href="/">GitHub</FooterLink>
          <FooterLink liClass="mb-4" href="/">Discord</FooterLink>
        </FooterLinkGroup>
      </div>
      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
        <FooterLinkGroup>
          <FooterLink liClass="mb-4" href="/">Privacy Policy</FooterLink>
          <FooterLink liClass="mb-4" href="/">Terms & Conditions</FooterLink>
        </FooterLinkGroup>
      </div>
    </div>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <div class="sm:flex sm:items-center sm:justify-between">
    <FooterCopyright href="/" by="Flowbite™" />
    <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
      <FooterIcon href="/" class="text-gray-400 hover:text-gray-900">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
      </FooterIcon>
      <FooterIcon href="/" class="text-gray-400 hover:text-gray-900">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
      </FooterIcon>
      <FooterIcon href="/" class="text-gray-400 hover:text-gray-900">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
      </FooterIcon>
      <FooterIcon href="/" class="text-gray-400 hover:text-gray-900">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
      </FooterIcon>
    </div>
  </div>
</Footer>
```

## Sitemap links

<p>If you have a website with many pages you can use this footer component to show a sitemap spanning the entire width of a row followed below by a copyright notice and social media icons.</p>

```svelte example
<script>
  import { Footer, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon, FooterCopyright } from 'flowbite-svelte'
</script>

<Footer footerType="sitemap">
  <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
    <div>
      <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
      <FooterLinkGroup ulClass="text-gray-300">
        <FooterLink liClass="mb-4" href="/">About</FooterLink>
        <FooterLink liClass="mb-4" href="/">Careers</FooterLink>
        <FooterLink liClass="mb-4" href="/">Brand Center</FooterLink>
        <FooterLink liClass="mb-4" href="/">Blog</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Download</h2>
      <FooterLinkGroup ulClass="text-gray-300">
        <FooterLink liClass="mb-4" href="/">Discord Server</FooterLink>
        <FooterLink liClass="mb-4" href="/">Twitter</FooterLink>
        <FooterLink liClass="mb-4" href="/">Facebook</FooterLink>
        <FooterLink liClass="mb-4" href="/">Contact Us</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Legal</h2>
      <FooterLinkGroup ulClass="text-gray-300">
        <FooterLink liClass="mb-4" href="/">Privacy Policy</FooterLink>
        <FooterLink liClass="mb-4" href="/">Licensing</FooterLink>
        <FooterLink liClass="mb-4" href="/">Terms & Conditions</FooterLink>
      </FooterLinkGroup>
    </div>
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Download</h2>
      <FooterLinkGroup ulClass="text-gray-300">
        <FooterLink liClass="mb-4" href="/">iOS</FooterLink>
        <FooterLink liClass="mb-4" href="/">Android</FooterLink>
        <FooterLink liClass="mb-4" href="/">Windows</FooterLink>
        <FooterLink liClass="mb-4" href="/">MacOS</FooterLink>
      </FooterLinkGroup>
    </div>
  </div>
  <div class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
    <FooterCopyright spanClass="text-sm text-gray-300 sm:text-center" href="/" by="Flowbite™" />
    <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
      <FooterIcon href="/" class="text-gray-400 hover:text-white">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
      </FooterIcon>
      <FooterIcon href="/" class="text-gray-400 hover:text-white">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
      </FooterIcon>
      <FooterIcon href="/" class="text-gray-400 hover:text-white">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
      </FooterIcon>
  </div>
</Footer>
```

## Sticky footer 

Use this example to set create a sticky footer by using a fixed position to the bottom of the document page as the user scrolls up or down the main content area.

```svelte example class="relative"
<script>
  import { Footer, FooterLinkGroup, FooterLink, ImagePlaceholder, TextPlaceholder, Skeleton, FooterCopyright } from 'flowbite-svelte'
</script>

<div style="height:300px;" class="overflow-scroll pb-16">
  <Skeleton class="my-8" />
  <ImagePlaceholder class="my-8" />
  <TextPlaceholder class="my-8" />
</div>
<Footer class="absolute bottom-0 left-0 z-20 w-full">
  <FooterCopyright href="/" by="Flowbite™" year={2022} />
  <FooterLinkGroup
    ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
  >
    <FooterLink href="/">About</FooterLink>
    <FooterLink href="/">Privacy Policy</FooterLink>
    <FooterLink href="/">Licensing</FooterLink>
    <FooterLink href="/">Contact</FooterLink>
  </FooterLinkGroup>
</Footer>
````

## Props

<p>The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types 
 page</A> for type information.</p>

### Footer

<TableProp>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

### FooterBrand

<TableProp>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

### FooterCopyright

<TableProp>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

### FooterIcon

<TableProp>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>

### FooterLink

<TableProp>
  <TableDefaultRow items={items5} rowState='hover' />
</TableProp>

### FooterLinkGroup

<TableProp>
  <TableDefaultRow items={items6} rowState='hover' />
</TableProp>

## References

<P>
  <A href="https://flowbite.com/docs/components/footer/" target="_blank" rel="noreferrer" class="link"
    >Flowbite Footer</A
  >
</P>