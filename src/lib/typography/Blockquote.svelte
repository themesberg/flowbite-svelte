<script lang="ts">
  import classNames from 'classnames';

  export let border: boolean = false;
  export let italic: boolean = true;
  export let borderClass: string = 'border-l-4 border-gray-300 dark:border-gray-500';
  export let bgClass: string = 'bg-gray-50 dark:bg-gray-800';
  export let bg: boolean = false;
  export let baseClass: string = 'font-semibold text-gray-900 dark:text-white';
  export let alignment: 'left' | 'center' | 'right' = 'left';
  let alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  export let size:
    | 'xs'
    | 'sm'
    | 'base'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl' = 'lg';
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl'
  };
</script>

<blockquote
  {...$$restProps}
  class={classNames(
    baseClass,
    alignmentClasses[alignment],
    sizes[size],
    bg && bgClass,
    border && borderClass,
    italic && 'italic',
    $$props.class
  )}>
  <slot />
</blockquote>
