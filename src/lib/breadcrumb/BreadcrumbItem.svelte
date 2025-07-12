<script lang="ts">
  import { breadcrumbItem } from "./index";
  import { type BreadcrumbItemProps, cn, type BreadcrumbItemTheme } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, icon, home = false, href, linkClass, spanClass, homeClass, class: className, ...restProps }: BreadcrumbItemProps = $props();

  const theme = getTheme("breadcrumbItem");

  const { base, separator } = $derived(
    breadcrumbItem({
      home,
      hasHref: !!href
    })
  );
</script>

<li {...restProps} class={cn(base(), className, (theme as BreadcrumbItemTheme)?.base)}>
  {#if home}
    <a class={cn(base({ home: true }), homeClass, (theme as BreadcrumbItemTheme)?.base)} {href}>
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
      <svg class={cn(separator(), (theme as BreadcrumbItemTheme)?.separator)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    {/if}

    {#if href}
      <a class={cn(base({ home: false, hasHref: true }), linkClass, (theme as BreadcrumbItemTheme)?.base)} {href}>
        {@render children()}
      </a>
    {:else}
      <span class={cn(base({ home: false, hasHref: false }), spanClass, (theme as BreadcrumbItemTheme)?.base)}>
        {@render children()}
      </span>
    {/if}
  {/if}
</li>