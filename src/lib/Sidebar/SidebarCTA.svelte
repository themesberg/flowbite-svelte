<script lang="ts">
  import classNames from 'classnames';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';

  export let color: 'blue' | 'alternative' | 'dark' | 'light' | 'green' | 'red' | 'yellow' | 'purple' = 'blue';

  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-900',
    alternative: 'bg-alternative-50 dark:bg-alternative-900',
    dark: 'bg-dark-50 dark:bg-dark-900',
    light: 'bg-light-50 dark:bg-light-900',
    green: 'bg-green-50 dark:bg-green-900',
    red: 'bg-red-50 dark:bg-red-900',
    yellow: 'bg-yellow-50 dark:bg-yellow-900',
    purple: 'bg-purple-50 dark:bg-purple-900',
  };

  const collapsed = getContext<Writable<boolean>>('collapsed');
</script>

{#if $collapsed === false}
  <div
    {...$$props}
    class={classNames('mt-6 rounded-lg p-4', colorClasses[color], $$props.class)}
    data-testid="sidebar-cta"
  >
    <slot />
  </div>
{/if}
