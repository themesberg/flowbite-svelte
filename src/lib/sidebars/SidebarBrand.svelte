<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { SiteType } from '../types';

  export let site: SiteType;
  export let aClass: string = 'flex items-center pl-2.5 mb-5';
  export let imgClass: string = 'h-6 mr-3 sm:h-7';
  export let spanClass: string = 'self-center text-xl font-semibold whitespace-nowrap dark:text-white';
</script>

<a {...$$restProps} href={site.href} class={twMerge(aClass, $$props.class)}>
  <img src={site.img} class={imgClass} alt={site.name} />
  <span class={spanClass}>{site.name}</span>
</a>

<!--
  @component
  ## Features
  [Go to Sidebar](https://flowbite-svelte.com/docs/components/sidebar)
  ## Props
  @prop site: SiteType;
  @prop aClass: string = 'flex items-center pl-2.5 mb-5';
  @prop imgClass: string = 'h-6 mr-3 sm:h-7';
  @prop spanClass: string = 'self-center text-xl font-semibold whitespace-nowrap dark:text-white';
  ## Example
  ```
  <script>
    import { SidebarBrand } from 'flowbite-svelte'

    let site = {
      name: 'Flowbite-Svelte',
      href: '/',
      img: '/images/flowbite-svelte-icon-logo.svg'
    };
  </script>
  <SidebarBrand {site} />
  ```
  
-->
