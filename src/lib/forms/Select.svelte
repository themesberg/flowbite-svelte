<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLSelectAttributes } from 'svelte/elements';

  type SelectOptionType<T> = {
    name: string | number;
    value: T;
  };
  interface Props extends HTMLSelectAttributes{
    children?: Snippet;
    items: SelectOptionType<any>[];
    value?: any;
    underline?: boolean;
    selectSize?: 'sm' | 'md' | 'lg';
    selectClass?: string | undefined;
    underlineClass?: string | undefined;
    onchange?: () => void;
    oninput?: () => void;
    oncontextmenu?: () => void;
    placeholder?: string | undefined | null;
  }

  let {
    children,
    items,
    value = $bindable(),
    underline,
    selectSize = 'md',
    selectClass,
    underlineClass,
    onchange,
    oninput,
    oncontextmenu,
    placeholder = 'Choose option ...',
    ...attributes
  }: Props = $props();
  let defaultCls: string =
    'text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500';

  let underlineCls: string = twMerge(
    'text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer',
    underlineClass
  );

  const common = 'block w-full';
  const sizes = {
    sm: 'text-sm p-2',
    md: 'text-sm p-2.5',
    lg: 'text-base py-3 px-4'
  };

  let selectCls: string = $state(
    twMerge(
      common,
      underline ? underlineCls : defaultCls,
      sizes[selectSize],
      underline && '!px-0',
      selectClass
    )
  );
</script>

<select
  {...attributes}
  bind:value
  class={selectCls}
  onchange={onchange}
  oncontextmenu={oncontextmenu}
  oninput={oninput}
>
  {#if placeholder}
    <option disabled selected value="">{placeholder}</option>
  {/if}

  {#each items as { value, name }}
    <option {value}>{name}</option>
  {:else}
    {#if children}
      {@render children()}
    {/if}
  {/each}
</select>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop items
@prop value = $bindable()
@prop underline
@prop selectSize = 'md'
@prop selectClass
@prop underlineClass
@prop onchange
@prop oninput
@prop oncontextmenu
@prop placeholder = 'Choose option ...'
@prop ...attributes
-->
