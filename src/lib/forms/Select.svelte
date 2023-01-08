<script lang="ts">
  import classNames from 'classnames';
  import type { SelectOptionType } from '../types';

  export let items: SelectOptionType[] = [];
  export let value: string | number;
  export let placeholder: string = 'Choose option ...';
  export let underline: boolean = false;
  export let size: 'sm' | 'md' | 'lg' = 'md';

  export let defaultClass: string =
    'text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

  export let underlineClass: string =
    'text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer';

  const common = 'block w-full';
  const sizes = {
    sm: 'text-sm p-2',
    md: 'text-sm p-2.5',
    lg: 'text-base py-3 px-4'
  };

  let selectClass: string;
  $: selectClass = classNames(
    common,
    underline ? underlineClass : defaultClass,
    sizes[size],
    underline && '!px-0',
    $$restProps.class
  );
</script>

<select {...$$restProps} bind:value class={selectClass} on:change on:contextmenu on:input>
  {#if placeholder}
    <option disabled selected value="">{placeholder}</option>
  {/if}

  {#each items as { value, name }}
    <option {value}>{name}</option>
  {:else}
    <slot />
  {/each}
</select>
