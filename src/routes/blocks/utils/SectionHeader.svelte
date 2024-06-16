<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
  export let home: string = 'Blocks';
  export let category: string = '';
  export let title: string = '';
  export let description: string = '';
  export let breadcrumb_title: string = '';
  // export let divClass = category ? '' : 'mx-auto max-w-8xl pt-8 px-4 lg:px-20 mx-auto max-w-8xl';
  export let headerClass = breadcrumb_title ? '' : 'mx-auto max-w-8xl pt-8 px-4 lg:px-20 mx-auto max-w-8xl col-span-2 mb-2 lg:mb-0';
  const [first, ...rest] = category;
  const capitalized = `${first.toUpperCase()}${rest.join('')}`;
  const allowedDirs = ['application', 'marketing', 'publisher'];
</script>

<section>
  <div class={headerClass}>
    <Breadcrumb navClass="flex mb-3">
      <BreadcrumbItem href="/blocks" home>{home}</BreadcrumbItem>
      {#if allowedDirs.includes(category)}
      <BreadcrumbItem>{capitalized} UI</BreadcrumbItem>
      {/if}
      {#if breadcrumb_title}
        <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
      {/if}
    </Breadcrumb>
    <h1 class="inline-block mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
      {title}
    </h1>
    <p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400">
      {description}
    </p>
  </div>
</section>
