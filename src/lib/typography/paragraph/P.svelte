<script lang="ts">
  import { type ParagraphProps as Props, paragraph } from './index';

  let { children, class: className = 'text-gray-900 dark:text-white', height = 'normal', align = 'left', justify = false, italic, firstUpper = false, whitespace = 'normal', size = 'base', space = 'normal', weight = 'normal', ...restProps }: Props = $props();

  let classP = $derived(paragraph({ height, size, weight, space, align, justify, italic, firstUpper, whitespace, className }));
</script>

<p {...restProps} class={classP}>
  {@render children()}
</p>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: className = 'text-gray-900 dark:text-white'
@prop height = 'normal'
@prop align = 'left'
@prop justify = false
@prop italic
@prop firstUpper = false
@prop whitespace = 'normal'
@prop size = 'base'
@prop space = 'normal'
@prop weight = 'normal'
@prop ...restProps
-->
