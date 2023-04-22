<script lang="ts">
  import classNames from 'classnames';
  export let divClass: string =
    'space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0';
</script>

<div class={classNames(divClass, $$props.class)}>
  <slot />
</div>
