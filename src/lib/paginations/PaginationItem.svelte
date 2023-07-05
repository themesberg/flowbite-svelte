<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';

  export let href: string | undefined = undefined;
  export let active: boolean = false;
  export let activeClass: string =
    'text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white';
  export let normalClass: string =
    'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
  export let large: boolean = false;

  const group = getContext<boolean>('group');
  const table = getContext<boolean>('table');

  let defaultClass: string;
  $: defaultClass = twMerge(
    'flex items-center font-medium',
    large ? 'h-10 px-4 text-base' : 'h-8 px-3 text-sm',
    group ? '' : table ? 'rounded' : 'rounded-lg',
    // table || 'border border-gray-300 dark:border-gray-700 dark:bg-gray-800',
    table ? '' : 'border',
    active ? activeClass : normalClass,
    $$props.class
  );
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<svelte:element
  this={href ? 'a' : 'button'}
  {href}
  class={defaultClass}
  on:blur
  on:change
  on:click
  on:focus
  on:keydown
  on:keypress
  on:keyup
  on:mouseenter
  on:mouseleave
  on:mouseover
  role={href ? 'button' : undefined}>
  <slot />
</svelte:element>

<!--
  @component
  ## Features
  [Go to Pagination](https://flowbite-svelte.com/docs/components/pagination)
  ## Props
  @prop href: string | undefined = undefined;
  @prop active: boolean = false;
  @prop activeClass: string = '';
  @prop normalClass: string = 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white';
  ## Event
  - on:blur
  - on:change
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
    import { Pagination } from 'flowbite-svelte'

    $: activeUrl = $page.url.searchParams.get('page')
    let pages = [
      { name: 1, href: '/components/pagination?page=1'},
      { name: 2, href: '/components/pagination?page=2'},
      { name: 3, href: '/components/pagination?page=3'},
      { name: 4, href: '/components/pagination?page=4'},
      { name: 5, href: '/components/pagination?page=5'}
    ];

    $:{ 
        pages.forEach((page)=>{
        let splitUrl = page.href.split('?');
        let queryString = splitUrl.slice(1).join('?');
        const hrefParams = new URLSearchParams(queryString);
        let hrefValue = hrefParams.get('page');
        if ( hrefValue === activeUrl){
          page.active=true
        }else{
          page.active=false
        }
      })
        pages=pages
    }

    const previous = () => {
      alert('Previous btn clicked. Make a call to your server to fetch data.');
    };
    const next = () => {
      alert('Next btn clicked. Make a call to your server to fetch data.');
    };
  </script>

  <Pagination {pages} on:previous={previous} on:next={next} />
  ```
-->
