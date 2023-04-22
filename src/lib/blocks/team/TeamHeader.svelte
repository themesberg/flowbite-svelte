<script lang="ts">
  import classNames from 'classnames';
  export let divClass: string = 'mx-auto max-w-screen-sm text-center mb-8 lg:mb-16';
</script>

<div class={classNames(divClass, $$props.classDiv)}>
  <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
    <slot name="label" />
  </h2>
  <slot />
</div>
