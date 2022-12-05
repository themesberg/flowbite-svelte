<script lang="ts">
  import classNames from 'classnames';

  export let value: string = '';
  export let files: FileList | undefined = undefined;
  export let defaultClass: string =
    'flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600';
</script>

<label class={classNames(defaultClass, $$props.class)}>
  <slot />
  <input
    {...$$restProps}
    bind:value
    bind:files
    type="file"
    class="hidden"
    on:click
    on:change
    on:focus
    on:blur
    on:mouseenter
    on:mouseleave
    on:mouseover />
</label>
