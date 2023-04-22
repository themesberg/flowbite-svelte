<script lang="ts">
  import classNames from 'classnames';
  export let outerDivClass: string = 'overflow-y-auto overflow-x-hidden z-50 md:inset-0 md:h-full';
  export let innerDivClass: string = 'relative p-4 w-full max-w-lg h-full md:h-auto';
  export let contentDivClass: string =
    'relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8';
</script>

<div id="info-popup" tabindex="-1" class={classNames(outerDivClass, $$props.class)}>
  <div class={innerDivClass}>
    <div class={contentDivClass}>
      <slot />
    </div>
  </div>
</div>
