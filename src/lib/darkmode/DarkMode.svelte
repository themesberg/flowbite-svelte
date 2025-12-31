<script lang="ts">
  import { darkmode } from "./theme";
  import clsx from "clsx";
  import type { DarkmodeProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  // const THEME_PREFERENCE_KEY = 'color-theme';
  let { class: className, lightIcon, darkIcon, size = "sm", ariaLabel = "Dark mode", classes, ...restProps }: DarkmodeProps = $props();

  const styling = $derived(classes);
  const theme = $derived(getTheme("darkmode"));
  const { base, icon } = $derived(darkmode({ class: clsx(theme, className) }));

  // const styles = $derived(darkmode({ class: clsx(theme, className) }));

  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };

  const toggleTheme = (ev: MouseEvent) => {
    const target = ev.target as HTMLElement;
    const isDark = target.ownerDocument.documentElement.classList.toggle("dark");
    if (target.ownerDocument === document)
      // we are NOT in the iFrame
      localStorage.setItem("THEME_PREFERENCE_KEY", isDark ? "dark" : "light");
  };
</script>

<svelte:head>
  <script lang="ts">
    if ("THEME_PREFERENCE_KEY" in localStorage) {
      localStorage.getItem("THEME_PREFERENCE_KEY") === "dark" ? window.document.documentElement.classList.add("dark") : window.document.documentElement.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) window.document.documentElement.classList.add("dark");
    }
  </script>
</svelte:head>

<button data-scope="dark-mode" data-part="base" onclick={toggleTheme} aria-label={ariaLabel} type="button" {...restProps} class={base({ class: clsx(theme?.base, className) })} tabindex={0}>
  <span data-part="icon" class={icon({ class: clsx(theme?.icon, styling?.icon, "hidden dark:block") })}>
    {#if lightIcon}
      {@render lightIcon()}
    {:else}
      <svg role="img" aria-label="Light mode" class={sizes[size]} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        ></path>
      </svg>
    {/if}
  </span>
  <span data-part="icon" class={icon({ class: clsx(theme?.icon, styling?.icon, "block dark:hidden") })}>
    {#if darkIcon}
      {@render darkIcon()}
    {:else}
      <svg role="img" aria-label="Dark mode" class={sizes[size]} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
        ></path>
      </svg>
    {/if}
  </span>
</button>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DarkmodeProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L532)
## Props
@prop class: className
@prop lightIcon
@prop darkIcon
@prop size = "sm"
@prop ariaLabel = "Dark mode"
@prop ...restProps
-->
