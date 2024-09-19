<script lang="ts">
  import { setContext } from 'svelte';
  import { fly } from 'svelte/transition';
  import { sineIn } from 'svelte/easing';
  import { type SidebarProps as Props, sidebar, type SidebarCtxType } from '.';

  let { children, isOpen = false, closeSidebar, breakpoint = 'md', position = 'fixed', activateClickOutside = true, backdrop = true, backdropClass, transition = fly, params, divClass, ariaLabel, nonActiveClass, activeClass, class: className, ...restProps }: Props = $props();

  const breakpointValues = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  };

  let isLargeScreen = $state(false);

  function checkScreenSize() {
    isLargeScreen = window.innerWidth >= breakpointValues[breakpoint];
  }

  const { base, active, nonactive, div, backdrop: backdropCls } = $derived(sidebar({ isOpen, breakpoint, position, backdrop }));

  let sidebarCtx: SidebarCtxType = {
    get closeSidebar() {
      return closeSidebar;
    },
    get activeClass() {
      return active({ class: activeClass });
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
  {#if isOpen}
    {#if backdrop && activateClickOutside}
      <div role="presentation" class={backdropCls({ class: backdropClass })} onclick={closeSidebar}></div>
    {:else if backdrop && !activateClickOutside}
      <div role="presentation" class={backdropCls({ class: backdropClass })}></div>
    {:else if !backdrop && activateClickOutside}
      <div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full" onclick={closeSidebar}></div>
    {:else if !backdrop && !activateClickOutside}
      <div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full"></div>
    {/if}
  {/if}
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
@prop isOpen = false
@prop closeSidebar
@prop breakpoint = 'md'
@prop position = 'fixed'
@prop activateClickOutside = true
@prop backdrop = true
@prop backdropClass
@prop transition = fly
@prop params
@prop divClass
@prop ariaLabel
@prop nonActiveClass
@prop activeClass
@prop class: className
@prop ...restProps
-->
