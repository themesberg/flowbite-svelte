<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let solid: boolean = false;
  export let navClass: string = 'flex';
  export let solidClass: string =
    'flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700';
  export let olClass: string = 'inline-flex items-center space-x-1 md:space-x-3';
  let classNav: string = solid ? solidClass : navClass;
</script>

<nav aria-label="Breadcrumb" {...$$restProps} class={twMerge(classNav, $$props.class)}>
  <ol class={twMerge(olClass, $$props.classOl)}>
    <slot />
  </ol>
</nav>

<!--
  @component
  ## Features
  [Go to Breadcrumb](https://flowbite-svelte.com/docs/components/breadcrumb)
  - Setup
  - Default Breadcrumb
  - Solid Breadcrumb
  - Icons
  ## Props
  @prop solid: boolean = false;
  @prop navClass: string = 'flex';
  @prop solidClass: string = 'flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700';
  @prop olClass: string = 'inline-flex items-center space-x-1 md:space-x-3'; 
  ## Example
  ```
  <script>
    import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  </script>
  
  <Breadcrumb aria-label="Default breadcrumb example">
    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
    <BreadcrumbItem href="/">Projects</BreadcrumbItem>
    <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
  </Breadcrumb>
  ```
-->
