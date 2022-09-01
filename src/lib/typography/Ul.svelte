<script lang="ts">
  import classNames from 'classnames';
  export let ulClass: string =
    'space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400';
  let classUl = classNames(ulClass, $$props.class);
</script>

<ul class={classUl}>
  <slot />
</ul>
