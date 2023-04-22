<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import classNames from 'classnames';
  export let liClass: string = 'flex items-center space-x-3';
  import { Check } from 'svelte-heros';
  export let Icon: typeof SvelteComponent = Check;
  export let iconSize = 14;
  export let iconClass: string = '';
</script>

<li class={classNames(liClass, $$props.class)}>
  <svelte:component this={Icon} size={iconSize} class={classNames('ml-2', iconClass)} />
  <slot />
</li>
