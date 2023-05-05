<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import Frame from '../utils/Frame.svelte';
  import classNames from 'classnames';

  // propagate props type from underlying Frame
  interface $$Props extends ComponentProps<Frame> {
    navClass?: string;
    navDivClass?: string;
    fluid?: boolean;
  }

  export let navClass: string = 'px-2 sm:px-4 py-2.5 w-full';
  export let navDivClass: string = 'mx-auto flex flex-wrap justify-between items-center ';
  export let fluid: boolean = false;

  $: {
    // override default Frame value
    $$restProps.color = $$restProps.color ?? 'navbar';
  }

  let hidden = true;
  let toggle = () => {
    hidden = !hidden;
  };
</script>

<Frame tag="nav" {...$$restProps} class={classNames(navClass, $$props.class)}>
  <div class={classNames(navDivClass, (fluid && 'w-full') || 'container')}>
    <slot {hidden} {toggle} />
  </div>
</Frame>
