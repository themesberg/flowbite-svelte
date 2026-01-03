<script lang="ts">
  import type { BreadcrumbItemProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import clsx from "clsx";
  import { breadcrumbItem } from "./theme";

  let { children, icon, home = false, href, class: className, classes, ...restProps }: BreadcrumbItemProps = $props();

  const theme = $derived(getTheme("breadcrumbItem"));

  const { base, link, separator, label } = $derived(
    breadcrumbItem({
      home,
      hasHref: !!href
    })
  );
</script>

<li data-scope="breadcrumb-item" data-part="base" {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  {#if home}
    <a data-part="link" class={link({ home: true, class: clsx(theme?.link, classes?.link) })} {href}>
      {#if icon}
        {@render icon()}
      {:else}
        <svg class="me-1.5 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
          />
        </svg>
      {/if}

      {@render children()}
    </a>
  {:else}
    {#if icon}
      {@render icon()}
    {:else}
      <svg
        data-part="separator"
        class={separator({ class: clsx(theme?.separator, classes?.separator) })}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" />
      </svg>
    {/if}

    {#if href}
      <a data-part="link" class={link({ home: false, hasHref: true, class: clsx(theme?.link, classes?.link) })} {href}>
        {@render children()}
      </a>
    {:else}
      <span data-part="label" class={label({ home: false, hasHref: false, class: clsx(theme?.label, classes?.label) })}>
        {@render children()}
      </span>
    {/if}
  {/if}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[BreadcrumbItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L319)
## Props
@prop children
@prop icon
@prop home = false
@prop href
@prop class: className
@prop classes
@prop ...restProps
-->
