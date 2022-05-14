<script lang="ts">
  import classNames from 'classnames';

  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  export let rounded: boolean = false;
  export let bordered: boolean = false;
  export let img: string = '';
  export let status: 'offline' | 'online' | 'away' | 'busy' | null = null;
  export let statusPosition: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left' = 'top-right';
  export let stacked: boolean = false;

  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-20 h-20',
    xl: 'w-36 h-36',
  };

  const statusClasses = {
    offline: 'bg-gray-400',
    online: 'bg-green-400',
    away: 'bg-yellow-400',
    busy: 'bg-red-400',
  };

  const statusPositionClasses = {
    'top-left': '-top-1 -right-1',
    'top-right': '-top-1 -left-1',
    'bottom-left': '-bottom-1 -right-1',
    'bottom-right': '-bottom-1 -left-1',
  };
</script>

<div class="flex items-center space-x-4">
  <div class="relative">
    {#if img}
      <img
        class={classNames(sizeClasses[size], {
          rounded: !rounded,
          'rounded-full': rounded,
          'ring-2 ring-gray-300 dark:ring-gray-500': bordered || stacked,
          'p-1': bordered,
        })}
        src={img}
        alt={$$props.alt}
      />
    {:else}
      <div
        class={classNames(`relative overflow-hidden bg-gray-100 dark:bg-gray-600`, sizeClasses[size], {
          rounded: !rounded,
          'rounded-full': rounded,
          'ring-2 ring-gray-300 dark:ring-gray-500': bordered || stacked,
          'p-1': bordered,
        })}
      >
        <svg
          class="absolute -bottom-1 h-auto w-auto text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
        </svg>
      </div>
    {/if}
    {#if status}
      <span
        class={classNames(
          'absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800',
          statusClasses[status],
          statusPositionClasses[statusPosition]
        )}
      />
    {/if}
  </div>
  <slot />
</div>
