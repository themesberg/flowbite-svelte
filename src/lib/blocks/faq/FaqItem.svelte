<script lang="ts">
  import classNames from 'classnames';
  import { QuestionMarkCircle } from 'svelte-heros';
  export let divClass: string = 'mb-10';
  export let h3Class: string =
    'flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white';
</script>

<div class={classNames(divClass, $$props.class)}>
  <h3 class={classNames(h3Class, $$props.classH3)}>
    <QuestionMarkCircle variation="solid" size="20" class="mr-2" />
    <slot name="h3" />
  </h3>
  <slot />
</div>
