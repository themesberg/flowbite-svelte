<script lang="ts">
  import { setContext } from 'svelte';
  import { fly } from 'svelte/transition';
  import { sineIn } from 'svelte/easing';
  import { type SidebarProps as Props, sidebar, type SidebarCtxType } from '.';

  let { children, isOpen = false, closeSidebar, breakpoint = 'md', position = 'fixed', transition = fly, params, divClass, asideClass, ariaLabel, nonActiveClass, activeClass, class: className, ...restProps }: Props = $props();
  
  const breakpointValues = {
    'sm': 640,
    'md': 768,
    'lg': 1024,
    'xl': 1280,
    '2xl': 1536
  };
  
  let isLargeScreen = $state(false);

  function checkScreenSize() {
    isLargeScreen = window.innerWidth >= breakpointValues[breakpoint];
  }

  const { base, active, nonactive, div } = $derived(sidebar({ isOpen, breakpoint, position }))

  let sidebarCtx: SidebarCtxType = {
    get closeSidebar() {
      return closeSidebar;
    },
    get activeClass() {
      return active({  class: activeClass });
    },
    get nonActiveClass() {
      return nonactive({ class: nonActiveClass });
    }
  };

  let transitionParams = params ? params : { x: -320, duration: 200, easing: sineIn };

  setContext('sidebarContext', sidebarCtx);
  $effect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  });
</script>

{#if isOpen || isLargeScreen}
  <aside transition:transition={transitionParams} {...restProps} class={base({ className })} aria-label={ariaLabel}>
    <div class={div({ class: divClass })}>
      {@render children()}
    </div>
  </aside>
{/if}


<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop divClass
@prop asideClass
@prop ariaLabel
@prop nonActiveClass = ''
@prop activeClass = ''
@prop class: className
@prop ...restProps
-->
