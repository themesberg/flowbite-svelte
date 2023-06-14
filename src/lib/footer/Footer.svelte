<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let footerType: 'sitemap' | 'default' | 'logo' | 'socialmedia' = 'default';

  let footerClass = twMerge(
    footerType === 'sitemap' && 'bg-gray-800',
    footerType === 'socialmedia' && 'p-4 bg-white sm:p-6 dark:bg-gray-800',
    footerType === 'logo' && 'p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800',
    footerType === 'default' &&
      'p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800',
    $$props.class
  );
</script>

<footer {...$$restProps} class={footerClass}>
  <slot />
</footer>

<!--
  @component
  ## Feature
  [Go to Footer](https://flowbite-svelte.com/docs/components/footer)
  - Setup
  - Default footer
  - Footer with logo
  - Social media icons
  - Sitemap links
  - Sticky footer
  ## Props
  @prop customClass: string = '';
  @prop footerType: 'custom' | 'sitemap' | 'default' | 'logo' | 'socialmedia' = 'default';
  ## Example
  ```
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
-->
