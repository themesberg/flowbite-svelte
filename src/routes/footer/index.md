---
layout: footerLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Footer, FooterBrand, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, Breadcrumb, BreadcrumbItem } from "$lib/index"
  import Facebook from '../utils/icons/Facebook.svelte'
  import Github from '../utils/icons/Github.svelte'
  import Twitter from '../utils/icons/Twitter.svelte'
  import Instagram from '../utils/icons/Instagram.svelte'
  import { Home } from 'svelte-heros'
  import componentProps from '../props/Footer.json'
  import componentProps2 from '../props/FooterBrand.json'
  import componentProps3 from '../props/FooterCopyright.json'
  import componentProps4 from '../props/FooterIcon.json'
  import componentProps5 from '../props/FooterLink.json'
  import componentProps6 from '../props/FooterLinkGroup.json'
  // Props table
  let items = componentProps.props
  let items2 = componentProps2.props
  let items3 = componentProps3.props
  let items4 = componentProps4.props
  let items5 = componentProps5.props
  let items6 = componentProps6.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Footer</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Footer</h1>

<Htwo label="Default footer" />

<p>Use this footer component to show a copyright notice and some helpful website links.</p>

<ExampleDiv>
<Footer>
  <FooterCopyright href="/" by="Flowbite™" year={2022} />
  <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
    <FooterLink href="/">About</FooterLink>
    <FooterLink href="/">Privacy Policy</FooterLink>
    <FooterLink href="/">Licensing</FooterLink>
    <FooterLink href="/">Contact</FooterLink>
  </FooterLinkGroup>
</Footer>
</ExampleDiv>

```html
<script>
 import { Footer, FooterBrand, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup } from 'flowbite-svelte'
</script>

<Footer>
  <FooterCopyright href="/" by="Flowbite™" />
  <FooterLinkGroup ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
    <FooterLink href="/">About</FooterLink>
    <FooterLink href="/">Privacy Policy</FooterLink>
    <FooterLink href="/">Licensing</FooterLink>
    <FooterLink href="/">Contact</FooterLink>
  </FooterLinkGroup>
</Footer>
```

<Htwo label="Footer with logo" />

<p>Use this component to show your brand’s logo, a few website links and the copyright notice on a second row.</p>

<ExampleDiv>
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
</ExampleDiv>

```html
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

<Htwo label="Social media icons" />

<p>This footer component can be used to show your brand’s logo, multiple rows of website links, a copyright notice and social media profile icons including Twitter, Facebook, Instagram, and more.</p>

<ExampleDiv>
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
          <FooterLink liClass="mb-4" href="/">Gihub</FooterLink>
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
      <FooterIcon href="/" class="text-gray-400 hover:text-gray-900" icon={Facebook} />
      <FooterIcon href="/" class="text-gray-400 hover:text-gray-900" icon={Instagram} />
      <FooterIcon href="/" class="text-gray-400 hover:text-gray-900" icon={Twitter} />
      <FooterIcon href="/" class="text-gray-400 hover:text-gray-900" icon={Github} />
    </div>
  </div>
</Footer>
</ExampleDiv>

```html
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
          <FooterLink liClass="mb-4" href="/">Gihub</FooterLink>
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
      <FooterIcon href="/" class="text-gray-400 hover:text-gray-900" icon={Facebook} />
      <FooterIcon href="/" class="text-gray-400 hover:text-gray-900" icon={Instagram} />
      <FooterIcon href="/" class="text-gray-400 hover:text-gray-900" icon={Twitter} />
      <FooterIcon href="/" class="text-gray-400 hover:text-gray-900" icon={Github} />
    </div>
  </div>
</Footer>
```

<Htwo label="Sitemap links" />

<p>If you have a website with many pages you can use this footer component to show a sitemap spanning the entire width of a row followed below by a copyright notice and social media icons.</p>

<ExampleDiv>
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
      <FooterIcon href="/" class="text-gray-400 hover:text-white" icon={Facebook} />
      <FooterIcon href="/" class="text-gray-400 hover:text-white" icon={Instagram} />
      <FooterIcon href="/" class="text-gray-400 hover:text-white" icon={Github} />
  </div>
</Footer>
</ExampleDiv>

```html
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
      <FooterIcon href="/" class="text-gray-400 hover:text-white" icon={Facebook} />
      <FooterIcon href="/" class="text-gray-400 hover:text-white" icon={Instagram} />
      <FooterIcon href="/" class="text-gray-400 hover:text-white" icon={Github} />
  </div>
</Footer>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3>Footer</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<h3>Footer</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<h3>FooterCopyright</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

<h3>FooterIcon</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>

<h3>FooterLink</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items5} rowState='hover' />
</TableProp>

<h3>FooterLinkGroup</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items6} rowState='hover' />
</TableProp>
