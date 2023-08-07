<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { LinkType } from '../types';
  import Popper from '../utils/Popper.svelte';
  import type { ComponentProps } from 'svelte';

  interface $$Props extends ComponentProps<Popper> {
    items: LinkTypeLike[];
    full: boolean;
    ulClass: string;
  }

  export let items: LinkTypeLike[] = [];
  export let full: boolean = false;
  export let open: boolean = false;
  export let ulClass: string = 'grid grid-flow-row gap-y-4 md:gap-x-0 auto-col-max auto-row-max';

  interface LinkTypeLike extends LinkType {
    [propName: string]: any;
  }

  let wrapperClass: string;
  $: wrapperClass = twMerge(full && 'border-y w-full', $$props.class);

  let ulCls: string;
  $: ulCls = twMerge(
    ulClass,
    full && $$slots.extra ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3',
    'text-sm font-medium',
    full && $$slots.extra && 'md:w-2/3',
    $$props.classUl
  );
</script>

<Popper
  color={full ? 'default' : 'dropdown'}
  border={!full}
  rounded={!full}
  activeContent
  arrow={false}
  trigger="click"
  placement="bottom"
  yOnly={full}
  {...$$restProps}
  class={wrapperClass}
  on:show
  bind:open>
  <div class="flex flex-col md:flex-row p-4 max-w-screen-md justify-center mx-auto mt-2">
    <ul class={ulCls}>
      {#each items as item, index}
        <li>
          <slot {item} {index} />
        </li>
      {:else}
        <slot item={items[0]} />
      {/each}
    </ul>
    {#if full && $$slots.extra}<div class="md:w-1/3 mt-4 md:mt-0"><slot name="extra" /></div>{/if}
  </div>
</Popper>

<!--
  @component
  ## Feature
  [Go to Mega Menu](https://flowbite-svelte.com/docs/components/mega-menu)
  - Setup
  - Default mega menu
  - Mega menu with icons
  - Full width dropdown
  - Full width with CTA
  - Full width with image
  ## Props
  @prop items: LinkTypeLike[] = [];
  @prop full: boolean = false;
  @prop open: boolean = false;  
  ## Example
  ```
  <script>
    import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, Chevron, MegaMenu } from 'flowbite-svelte'
    let menu = [
      {name: 'About us', href: '/about'},
      {name: 'Blog', href: '/blog'},
      {name: 'Contact us', href: '/contact'},
      {name: 'Library', href: '/library'},
      {name: 'Newsletter', href: '/news'},
      {name: 'Support Center', href: '/support'},
      {name: 'Resources', href: '/resource'},
      {name: 'Playground', href: '/play'},
      {name: 'Terms', href: '/terms'},
      {name: 'Pro Version', href: '/pro'},
      {name: 'License', href: '/license'},
    ];
  </script>
  
  <Navbar let:hidden let:toggle>
    <NavBrand href="/">
      <img src="/images/flowbite-svelte-icon-logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/">Home</NavLi>
      <NavLi><Chevron aligned>Mega menu</Chevron></NavLi>
      <MegaMenu items={menu} let:item>
        <a href={item.href} class="hover:text-blue-600 dark:hover:text-blue-500">{item.name}</a>
      </MegaMenu>
      <NavLi href="/services">Services</NavLi>
      <NavLi href="/services">Products</NavLi>
      <NavLi href="/services">Contact</NavLi>
    </NavUl>
  </Navbar>
  ```
-->
