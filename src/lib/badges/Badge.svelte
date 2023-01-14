<script lang="ts">
  import classNames from 'classnames';

  export let color: 'blue' | 'dark' | 'red' | 'green' | 'yellow' | 'indigo' | 'purple' | 'pink' = 'blue';
  export let large: boolean = false;
  export let bordered: boolean = false;
  export let href: string | undefined = undefined;
  export let rounded: boolean = false;
  export let index: boolean = false;
  export let dismissable: boolean = false;
  export let baseClass: string = 'font-medium inline-flex items-center justify-center px-2.5 py-0.5';

  const colors = {
    blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    dark: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
    purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    pink: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
    ['!blue']: 'bg-blue-500 text-blue-100',
    ['!dark']: 'bg-gray-500 text-gray-100',
    ['!red']: 'bg-red-500 text-white',
    ['!green']: 'bg-green-500 text-green-100',
    ['!yellow']: 'bg-yellow-300 text-yellow-800',
    ['!indigo']: 'bg-indigo-500 text-indigo-100',
    ['!purple']: 'bg-purple-500 text-purple-100',
    ['!pink']: 'bg-pink-500 text-pink-100'
  };

  const borderedColors = {
    blue: 'bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400 border-blue-400',
    dark: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border-gray-500',
    red: 'bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400 border-red-400',
    green: 'bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border-green-400',
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300 border-yellow-300',
    indigo: 'bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border-indigo-400',
    purple: 'bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400 border-purple-400',
    pink: 'bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400 border-pink-400'
  };

  const hoverColors = {
    blue: 'hover:bg-blue-200',
    dark: 'hover:bg-gray-200',
    red: 'hover:bg-red-200',
    green: 'hover:bg-green-200',
    yellow: 'hover:bg-yellow-200',
    indigo: 'hover:bg-indigo-200',
    purple: 'hover:bg-purple-200',
    pink: 'hover:bg-pink-200'
  };

  let badgeClass: string;
  $: badgeClass = classNames(
    baseClass,
    large ? 'text-sm' : 'text-xs',
    bordered ? `border ${borderedColors[color]}` : colors[color],
    href && hoverColors[color],
    rounded ? 'rounded-full' : 'rounded',
    index && 'absolute font-bold border-2 border-white dark:border-gray-900',
    index && (large ? 'w-7 h-7 -top-3 -right-3' : 'w-6 h-6 -top-2 -right-2'),
    $$props.class
  );

  const closeBtnBaseClass = 'inline-flex items-center p-0.5 ml-2 text-sm bg-transparent rounded-sm';

  const closeBtnColors = {
    blue: 'text-blue-400 hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300',
    dark: 'text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300',
    red: 'text-red-400 hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-800 dark:hover:text-red-300',
    green: 'text-green-400 hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300',
    yellow: 'text-yellow-400 hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-300',
    indigo: 'text-indigo-400 hover:bg-indigo-200 hover:text-indigo-900 dark:hover:bg-indigo-800 dark:hover:text-indigo-300',
    purple: 'text-purple-400 hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-800 dark:hover:text-purple-300',
    pink: 'text-pink-400 hover:bg-pink-200 hover:text-pink-900 dark:hover:bg-pink-800 dark:hover:text-pink-300'
  };

  let animation = false;
  let hidden = false;
  
  const handleHide = () => {
    animation = true;
    setTimeout(() => {
      hidden = true;
    }, 300);
  };
</script>

<svelte:element this={href ? 'a' : 'span'} {href} {...$$restProps} class={badgeClass} class:transition-opacity={animation} class:duration-300={animation} class:ease-out={animation} class:opacity-0={animation} class:hidden>
  <slot />
  {#if dismissable}
    <button on:click={handleHide} type="button" class={`${closeBtnBaseClass} ${closeBtnColors[color]}`} aria-label="Remove">
      <svg aria-hidden="true" class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      <span class="sr-only">Remove badge</span>
    </button>
    {/if}
</svelte:element>
