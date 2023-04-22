<script lang="ts">
  import classNames from 'classnames';
  export let divClass: string = 'max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6';
  export let dlClass: string =
    'grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white';
</script>

<div class={classNames(divClass, $$props.classDiv)}>
  <dl class={classNames(dlClass, $$props.classDl)}>
    <slot />
  </dl>
</div>
