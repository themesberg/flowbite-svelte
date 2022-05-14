<script lang="ts">
  import classNames from 'classnames';

  import TextInput from './TextInput.svelte';
</script>

<TextInput {...$$props} class={classNames('!p-0', $$props.class)} type="file" />
