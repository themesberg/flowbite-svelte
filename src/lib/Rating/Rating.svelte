<script lang="ts">
  import classNames from 'classnames';
  import { setContext } from 'svelte';

  export let size: 'sm' | 'md' | 'lg' = 'md';
  setContext('size', size);
</script>

<div class={classNames('flex items-center', $$props.class)}>
  <slot />
</div>
