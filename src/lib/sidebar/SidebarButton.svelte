<script lang="ts">
  import { type SidebarButtonProps as Props, sidebarbutton } from '.';
  let { breakpoint = 'md', class: className, ...restProps }: Props = $props();

  const base = $derived(sidebarbutton({ breakpoint, className }));
</script>

<button {...restProps} type="button" class={base}>
  <span class="sr-only">Open sidebar</span>
  <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
  </svg>
</button>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop breakpoint = 'md'
@prop class: className
@prop ...restProps
-->
