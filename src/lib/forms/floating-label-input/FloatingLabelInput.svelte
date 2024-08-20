<script lang="ts">
  import { idGenerator } from '../../uiHelpers.svelte';
  import { type FloatingLabelInputProps as Props, floatingLabelInput } from '.';

  let { children, id = idGenerator(), aria_describedby, style = 'standard', size = 'default', color = 'default', divClass, inputClass, labelClass, ...restProps }: Props = $props();

  const { base, input, label } = $derived(floatingLabelInput({ style, size, color }));
</script>

<div class={base({ class: divClass })}>
  <input {id} placeholder=" " {...restProps} aria-describedby={aria_describedby} class={input({ class: inputClass })} />

  <label for={id} class={label({ class: labelClass })}>
    {@render children()}
  </label>
</div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop id = idGenerator()
@prop aria_describedby
@prop style = 'standard'
@prop size = 'default'
@prop color = 'default'
@prop divClass
@prop inputClass
@prop labelClass
@prop ...restProps
-->
