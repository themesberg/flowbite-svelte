<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let ulClass: string = 'space-y-2';
  export let borderClass: string = 'pt-4 mt-4 border-t border-gray-200 dark:border-gray-700';
  export let border: boolean = false;

  if (border) {
    ulClass += ' ' + borderClass;
  }
</script>

<ul {...$$restProps} class={twMerge(ulClass, $$props.class)}>
  <slot />
</ul>

<!--
  @component
  ## Features
  [Go to Sidebar](https://flowbite-svelte.com/docs/components/sidebar)
  ## Props
  @prop ulClass: string = 'space-y-2';
  @prop borderClass: string = 'pt-4 mt-4 border-t border-gray-200 dark:border-gray-700';
  @prop border: boolean = false;

  ## Example
  ```
  <script>
    import { page } from '$app/stores';
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownWrapper, SidebarDropdownItem } from 'flowbite-svelte';
    let spanClass = 'flex-1 ml-3 whitespace-nowrap';
    $: activeUrl = $page.url.pathname
    $: containPath = ()=>{
      // add your logic here
      true
    }
  </script>

  <Sidebar>
    <SidebarWrapper>
      <SidebarGroup>
        <SidebarItem label="Dashboard" active={activeUrl === '/dashboard'} />
        <SidebarDropdownWrapper label="E-commerce" isOpen={containPath}>
          <SidebarDropdownItem label="Products" href='/components/products' active={activeUrl === '/components/products'} />
          <SidebarDropdownItem label="Sidebar" href='/docs/components/sidebar' active={activeUrl === '/docs/components/sidebar'}/>
        </SidebarDropdownWrapper>
        <SidebarDropdownWrapper label="Items">
          <SidebarDropdownItem label="Item 1" href='/components/item1' active={activeUrl === '/components/item'} />
          <SidebarDropdownItem label="Item 2" href='/components/item2' active={activeUrl === '/components/billing'} />
        </SidebarDropdownWrapper>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
  ```
  
-->
