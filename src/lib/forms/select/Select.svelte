<script lang="ts">
  import { type SelectProps as Props, select as selectCls } from '.';

  let { children, items, value = $bindable(), underline, size = 'md', selectClass, underlineClass, placeholder = 'Choose option ...', ...restProps }: Props = $props();

  const selectStyle = $derived(selectCls({ underline, size, class: selectClass }));
</script>

<select {...restProps} bind:value class={selectStyle}>
  {#if placeholder}
    <option disabled selected value="">{placeholder}</option>
  {/if}

  {#if items}
    {#each items as { value, name }}
      <option {value}>{name}</option>
    {/each}
  {/if}

  {#if children}
    {@render children()}
  {/if}
</select>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop items
@prop value = $bindable()
@prop underline
@prop size = 'md'
@prop selectClass
@prop underlineClass
@prop placeholder = 'Choose option ...'
@prop ...restProps
-->
