<script lang="ts">
  import classNames from 'classnames';
  export let divClass: string = 'grid gap-8 mb-6 lg:mb-16 md:grid-cols-2';
</script>

<div class={classNames(divClass, $$props.class)}>
  <slot />
</div>
