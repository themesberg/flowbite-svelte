<script lang="ts">
  import Frame from '../utils/Frame.svelte';
  import classNames from 'classnames';

  export let navClass: string = 'px-2 sm:px-4 py-2.5 w-full';
  export let navDivClass: string = 'mx-auto flex flex-wrap justify-between items-center ';
  export let fluid: boolean = false;
  export let color:
    | 'gray'
    | 'red'
    | 'yellow'
    | 'green'
    | 'indigo'
    | 'default'
    | 'purple'
    | 'pink'
    | 'blue'
    | 'light'
    | 'dark'
    | 'dropdown'
    | 'navbar'
    | 'navbarUl'
    | 'form'
    | 'none' = 'navbar';

  let hidden = true;
  let toggle = () => {
    hidden = !hidden;
  };
</script>

<Frame tag="nav" {color} {...$$restProps} class={classNames(navClass, $$props.class)}>
  <div class={classNames(navDivClass, (fluid && 'w-full') || 'container')}>
    <slot {hidden} {toggle} />
  </div>
</Frame>
