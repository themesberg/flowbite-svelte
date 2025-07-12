<script lang="ts">
  import { controlButton } from "./theme";
  import { type ControlButtonProps, cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, forward, name, class: className, spanClass, ...restProps }: ControlButtonProps = $props();

  const theme = getTheme("carouselButton");
</script>

<button type="button" class={cn(controlButton({ forward }), className, theme)} {...restProps}>
  {#if children}
    {@render children()}
  {:else}
    <span class={cn("inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-hidden sm:h-10 sm:w-10 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70", spanClass)}>
      {#if forward}
        <svg aria-hidden="true" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      {:else}
        <svg aria-hidden="true" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      {/if}
      {#if name}
        <span class="sr-only">{name}</span>
      {/if}
    </span>
  {/if}
</button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ControlButtonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L433)
## Props
@prop children
@prop forward
@prop name
@prop class: className
@prop spanClass
@prop ...restProps
-->
