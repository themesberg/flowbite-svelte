<script lang="ts">
  import { type SidebarGroupProps as Props } from ".";

  let { children, class: className = "space-y-2", borderClass = "pt-4 mt-4 border-t border-gray-200 dark:border-gray-700", border = false, ...restProps }: Props = $props();
</script>

<ul {...restProps} class={border ? borderClass : className}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:class: string = 'space-y-2';
@props:borderClass: string = 'pt-4 mt-4 border-t border-gray-200 dark:border-gray-700';
@props:border: boolean = false;
-->
