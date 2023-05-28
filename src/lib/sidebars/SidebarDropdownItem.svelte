<script lang="ts">
  import classNames from 'classnames';

  export let aClass: string =
    'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700';
  export let href: string = '';
  export let label: string = '';
  export let activeClass: string =
    'flex items-center p-2 pl-11 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';
  export let active: boolean = false;
</script>

<li>
  <a
    {...$$restProps}
    {href}
    on:blur
    on:click
    on:focus
    on:keydown
    on:keypress
    on:keyup
    on:mouseenter
    on:mouseleave
    on:mouseover
    class={classNames(active ? activeClass : aClass, $$props.class)}>{label}</a>
</li>

<!--
  @component
  ## Features
  [Go to Sidebar](https://flowbite-svelte.com/docs/components/sidebar)
  ## Props
  @prop aClass: string = 'flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700';
  @prop href: string = '';
  @prop label: string = '';
  @prop activeClass: string = 'flex items-center p-2 pl-11 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';
  @prop active: boolean = false;
  ## Event
  - on:blur
  - on:click
  - on:focus
  - on:keydown
  - on:keypress
  - on:keyup
  - on:mouseenter
  - on:mouseleave
  - on:mouseover
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
