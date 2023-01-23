<script lang="ts">
  import classNames from 'classnames';

  export let color:
    | 'gray'
    | 'dark'
    | 'blue'
    | 'green'
    | 'red'
    | 'purple'
    | 'indigo'
    | 'yellow'
    | 'teal'
    | 'none' = 'gray';
  export let rounded: boolean = false;
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  export let border: boolean = false;
  export let placement:
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'center-left'
    | 'center'
    | 'center-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | undefined = undefined;
  export let offset: boolean = true;

  const colors = {
    gray: 'bg-gray-200',
    dark: 'bg-gray-900 dark:bg-gray-700',
    blue: 'bg-blue-600',
    green: 'bg-green-500',
    red: 'bg-red-500',
    purple: 'bg-purple-500',
    indigo: 'bg-indigo-500',
    yellow: 'bg-yellow-300',
    teal: 'bg-teal-500',
    none: ''
  };

  const sizes = {
    xs: 'w-2 h-2',
    sm: 'w-2.5 h-2.5',
    md: 'w-3 h-3',
    lg: 'w-3.5 h-3.5',
    xl: 'w-6 h-6'
  };

  const placements = {
    // top
    'top-left': 'top-0 left-0',
    'top-center': 'top-0 left-1/2 -translate-x-1/2',
    'top-right': 'top-0 right-0',

    // center
    'center-left': 'top-1/2 -translate-y-1/2 left-0',
    center: 'top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2',
    'center-right': 'top-1/2 -translate-y-1/2 right-0',

    // bottom
    'bottom-left': 'bottom-0 left-0',
    'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
    'bottom-right': 'bottom-0 right-0'
  };

  const offsets = {
    // top
    'top-left': '-translate-x-1/3 -translate-y-1/3',
    'top-center': '-translate-y-1/3',
    'top-right': 'translate-x-1/3 -translate-y-1/3',

    // center
    'center-left': '-translate-x-1/3',
    center: '',
    'center-right': 'translate-x-1/3',

    // bottom
    'bottom-left': '-translate-x-1/3 translate-y-1/3',
    'bottom-center': 'translate-y-1/3',
    'bottom-right': 'translate-x-1/3 translate-y-1/3'
  };

  let dotClass: string;
  $: dotClass = classNames(
    'flex-shrink-0',
    rounded ? 'rounded' : 'rounded-full',
    border && 'border-2 border-white dark:border-gray-800',
    sizes[size],
    colors[color],
    $$slots.default && 'inline-flex items-center justify-center',
    placement && 'absolute ' + placements[placement],
    placement && offset && offsets[placement],
    $$props.class
  );
</script>

<div class={dotClass}><slot /></div>
