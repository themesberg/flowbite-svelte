<script lang="ts">
  import classNames from 'classnames';
  export let outerDivClass: string = 'grid gap-4';
  export let colClass: string = 'grid-cols-2 md:grid-cols-3';
  const divClass = classNames(
    outerDivClass,
    colClass
  )
</script>

<div class="{divClass}">
  <slot />
</div>