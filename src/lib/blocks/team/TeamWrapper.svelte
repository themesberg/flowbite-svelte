<script lang="ts">
  import classNames from 'classnames';
  export let divClass: string = 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6';
</script>

<div class={classNames(divClass, $$props.class)}>
  <slot />
</div>
