<script lang="ts">
  import { setContext, type ComponentProps } from 'svelte';
  import Frame from '../utils/Frame.svelte';
  import { twMerge } from 'tailwind-merge';
  import NavContainer from './NavContainer.svelte';
  import { writable } from 'svelte/store';

  // propagate props type from underlying Frame
  interface $$Props extends ComponentProps<Frame> {
    fluid?: boolean;
  }

  export let fluid: $$Props['fluid'] = false;

  let hidden = writable(true);
  setContext('navHidden', hidden);

  $: {
    // override default Frame value
    $$restProps.color = $$restProps.color ?? 'navbar';
  }

  let toggle = () => hidden.update((hidden) => !hidden);
</script>

<Frame tag="nav" {...$$restProps} class={twMerge('px-2 sm:px-4 py-2.5 w-full', $$props.class)}>
  <NavContainer {fluid}>
    <slot hidden={$hidden} {toggle} {NavContainer} />
  </NavContainer>
</Frame>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let fluid: $$Props['fluid'] = false;
-->
