<script lang="ts">
  import { setContext } from 'svelte';
  import classNames from 'classnames';
  import type { SizeType } from '$lib/types';

  export let size: SizeType = 'md';
  export let divClass: string = 'inline-flex rounded-lg shadow-sm';

  setContext('group', {size} );

</script>

<div {...$$restProps} class={classNames(divClass, $$props.class)} role="group">
  <slot />
</div>
