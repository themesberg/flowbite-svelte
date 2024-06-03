<script lang="ts">
  import type { Snippet } from 'svelte';
  interface Props {
    children?: Snippet;
    color?: IndicatorColorType;
    rounded?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    border?: boolean;
    placement?: IndicatorPlacementType | undefined;
    divclass?: string | undefined;
    offset?: boolean;
  }
  import type { IndicatorPlacementType } from '$lib/types';
  import { twMerge } from 'tailwind-merge';

  let {
    children,
    color = 'gray',
    rounded = false,
    size = 'md',
    border = false,
    placement,
    offset = true,
    divclass
  }: Props = $props();

  const colors = {
    gray: 'bg-gray-200',
    dark: 'bg-gray-900 dark:bg-gray-700',
    blue: 'bg-blue-600',
    orange: 'bg-orange-600',
    green: 'bg-green-500',
    red: 'bg-red-500',
    purple: 'bg-purple-500',
    indigo: 'bg-indigo-500',
    yellow: 'bg-yellow-300',
    teal: 'bg-teal-500',
    none: ''
  };

  type IndicatorColorType = keyof typeof colors;

  const sizes = {
    xs: 'w-2 h-2',
    sm: 'w-2.5 h-2.5',
    md: 'w-3 h-3',
    lg: 'w-3.5 h-3.5',
    xl: 'w-6 h-6'
  };

  const placements = {
    // top
    'top-left': 'top-0 start-0',
    'top-center':
      'top-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2',
    'top-right': 'top-0 end-0',

    // center
    'center-left': 'top-1/2 -translate-y-1/2 start-0',
    center:
      'top-1/2 -translate-y-1/2 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2',
    'center-right': 'top-1/2 -translate-y-1/2 end-0',

    // bottom
    'bottom-left': 'bottom-0 start-0',
    'bottom-center':
      'bottom-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2',
    'bottom-right': 'bottom-0 end-0'
  };

  const offsets = {
    // top
    'top-left': '-translate-x-1/3 rtl:translate-x-1/3 -translate-y-1/3',
    'top-center': '-translate-y-1/3',
    'top-right': 'translate-x-1/3 rtl:-translate-x-1/3 -translate-y-1/3',

    // center
    'center-left': '-translate-x-1/3 rtl:translate-x-1/3',
    center: '',
    'center-right': 'translate-x-1/3 rtl:-translate-x-1/3',

    // bottom
    'bottom-left': '-translate-x-1/3 rtl:translate-x-1/3 translate-y-1/3',
    'bottom-center': 'translate-y-1/3',
    'bottom-right': 'translate-x-1/3 rtl:-translate-x-1/3 translate-y-1/3'
  };

  let dotClass: string = twMerge(
    'flex-shrink-0',
    rounded ? 'rounded' : 'rounded-full',
    border && 'border-2 border-white dark:border-gray-800',
    sizes[size],
    colors[color],
    children && 'inline-flex items-center justify-center',
    placement && 'absolute ' + placements[placement],
    placement && offset && offsets[placement],
    divclass
  );
</script>

<div class={dotClass}>
  {#if children}
    {@render children()}
  {/if}
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop color = 'gray'
@prop rounded = false
@prop size = 'md'
@prop border = false
@prop placement
@prop offset = true
@prop divclass
-->
