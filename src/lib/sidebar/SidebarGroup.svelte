<script lang="ts">
  import { type SidebarGroupProps as Props } from ".";

  let { children, class: className = "space-y-2", borderClass = "pt-4 mt-4 border-t border-gray-200 dark:border-gray-700", border = false, ...restProps }: Props = $props();
</script>

<ul {...restProps} class={border ? borderClass : className}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:class: string = "space-y-2";
@props:borderClass: any = "pt-4 mt-4 border-t border-gray-200 dark:border-gray-700";
@props:border: any = false;
-->
