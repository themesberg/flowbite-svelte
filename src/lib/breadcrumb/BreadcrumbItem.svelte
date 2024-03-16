<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children: Snippet;
    icon?: Snippet;
    home?: boolean;
    href?: string | undefined;
    a2class?: string | undefined;
    spanclass?: string | undefined;
    aclass?: string | undefined;
    class?: string | undefined;
  }

  let {
    children,
    icon,
    home = false,
    href,
    a2class,
    spanclass,
    aclass,
    class: classname,
    ...attributes
  }: Props = $props();

  let a2Cls: string = twMerge(
    'ms-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ms-2 dark:text-gray-400 dark:hover:text-white',
    a2class
  );
  let spanCls: string = twMerge(
    'ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400',
    spanclass
  );
  let aCls: string = twMerge(
    'inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
    aclass
  );
</script>

<li class={twMerge('inline-flex items-center', classname)} {...attributes}>
  {#if home}
    <a class={aCls} {href}>
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
        class="h-6 w-6 text-gray-400 rtl:-scale-x-100"
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
        <a class={a2Cls} {href}>
          {@render children()}
        </a>
      {:else}
        <span class={spanCls}>
          {@render children()}
        </span>
      {/if}
    
  {/if}
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:icon?: Snippet;
@props:home?:  boolean; = false;
@props:href?: string | undefined;
@props:a2class?: string | undefined;
@props:spanclass?: string | undefined;
@props:aclass?: string | undefined;
@props:class?: string | undefined;
-->
