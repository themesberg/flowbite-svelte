<script lang="ts">
  import type { ImgType } from '$lib/types';
  import classNames from 'classnames';

  export let items: ImgType[] = [];

  $: divClass = classNames('grid', $$props.class);

  function init(node: HTMLElement) {
    if (getComputedStyle(node).gap === 'normal') node.style.gap = 'inherit';
  }
</script>

<div {...$$restProps} class={divClass} use:init>
  {#each items as item}
    <slot {item}>
      <div><img src={item.src} alt={item.alt} class='h-auto max-w-full rounded-lg' /></div>
    </slot>  
  {:else}
    <slot />
  {/each}
</div>
