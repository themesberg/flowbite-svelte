<script lang="ts">
  import classNames from 'classnames';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';

  export let href: string;
  export let img: string;
  export let imgAlt: string;

  const collapsed = getContext<Writable<boolean>>('collapsed');
</script>

<a {...$$props} class={classNames('mb-5 flex items-center pl-2.5', $$props.class)} {href}>
  <img alt={imgAlt} class="mr-3 h-6 sm:h-7" src={img} />
  <span
    class={classNames(
      $collapsed === true ? 'sr-only' : 'self-center whitespace-nowrap text-xl font-semibold dark:text-white'
    )}
    data-testid="sidebar-logo"
  >
    <slot />
  </span>
</a>
