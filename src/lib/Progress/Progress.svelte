<script lang="ts">
  import classNames from 'classnames';

  export let progress: number;
  export let color: 'dark' | 'blue' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' = 'blue';
  export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  export let label: string = '';
  export let labelPosition: 'inside' | 'outside' = 'inside';
  export let labelProgress: boolean = false;

  const colorClasses = {
    dark: 'bg-gray-600 dark:bg-gray-300',
    blue: 'bg-blue-600',
    red: 'bg-red-600 dark:bg-red-500',
    green: 'bg-green-600 dark:bg-green-500',
    yellow: 'bg-yellow-400',
    indigo: 'bg-indigo-600 dark:bg-indigo-500',
    purple: 'bg-purple-600 dark:bg-purple-500',
  };
  const sizeClasses = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
    xl: 'h-6',
  };
</script>

<div>
  {#if label && labelPosition === 'outside'}
    <div class="mb-1 flex justify-between">
      <span class="font-medium dark:text-white">{label}</span>
      {#if labelProgress}
        <span class="font-medium dark:text-white">{progress}%</span>
      {/if}
    </div>
  {/if}
  <div class={classNames('w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700', sizeClasses[size])}>
    <div
      class={classNames(
        'flex items-center justify-center rounded-full text-center font-medium leading-none text-blue-100',
        colorClasses[color],
        sizeClasses[size],
        $$props.class
      )}
      style={`width:${progress}%`}
    >
      {#if label && labelPosition === 'inside'}
        {label}
      {/if}
    </div>
  </div>
</div>
