<script lang="ts">
  import classNames from 'classnames';
  export let ulClass: string = 'mb-8 space-y-4 text-left';
</script>

<ul class={classNames(ulClass, $$props.classUl)}>
  <slot />
</ul>
{#if $$slots.btn}
  <slot name="btn" />
{/if}
