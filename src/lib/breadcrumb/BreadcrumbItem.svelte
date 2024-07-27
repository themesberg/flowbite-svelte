<script lang="ts">
  import {
    type BreadcrumbItemProps as Props,
    breadcrumbIconVariants,
    breadcrumbItemVariants
  } from './index';
  import { twMerge } from 'tailwind-merge';

  let {
    children,
    icon,
    home = false,
    href,
    linkClass,
    spanClass,
    homeClass,
    class: className,
    ...attributes
  }: Props = $props();

  let itemClass = breadcrumbItemVariants({
    home,
    hasHref: !!href,
    class: className
  });
  let iconClass = breadcrumbIconVariants({ home });
</script>

<li class={itemClass} {...attributes}>
  {#if home}
    <a
      class={twMerge(breadcrumbItemVariants({ home: true }), homeClass)}
      {href}
    >
      {#if icon}
        {@render icon()}
      {:else}
        <svg
          class="me-2 h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
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
        class={iconClass}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    {/if}

    {#if href}
      <a
        class={twMerge(
          breadcrumbItemVariants({ home: false, hasHref: true }),
          linkClass
        )}
        {href}
      >
        {@render children()}
      </a>
    {:else}
      <span
        class={twMerge(
          breadcrumbItemVariants({ home: false, hasHref: false }),
          spanClass
        )}
      >
        {@render children()}
      </span>
    {/if}
  {/if}
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop icon
@prop home = false
@prop href
@prop linkClass
@prop spanClass
@prop homeClass
@prop class: className
@prop ...attributes
-->
