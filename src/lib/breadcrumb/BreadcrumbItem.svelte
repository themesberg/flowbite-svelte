<script lang="ts">
  import { breadcrumb } from "./index";
  import { type BreadcrumbItemProps, cn } from "$lib";

  let { children, icon, home = false, href, linkClass, spanClass, homeClass, class: className, ...restProps }: BreadcrumbItemProps = $props();

  const { item, icon: breacrumbIcon } = $derived(
    breadcrumb({
      home,
      hasHref: !!href
    })
  );
</script>

<li {...restProps} class={cn(item(), className)}>
  {#if home}
    <a class={cn(item({ home: true }), homeClass)} {href}>
      {#if icon}
        {@render icon()}
      {:else}
        <svg class="me-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      {/if}

      {@render children()}
    </a>
  {:else}
    {#if icon}
      {@render icon()}
    {:else}
      <svg class={breacrumbIcon()} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    {/if}

    {#if href}
      <a class={cn(item({ home: false, hasHref: true }), linkClass)} {href}>
        {@render children()}
      </a>
    {:else}
      <span class={cn(item({ home: false, hasHref: false }), spanClass)}>
        {@render children()}
      </span>
    {/if}
  {/if}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BreadcrumbItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L321)
## Props
@prop children
@prop icon
@prop home = false
@prop href
@prop linkClass
@prop spanClass
@prop homeClass
@prop class: className
@prop ...restProps
-->
