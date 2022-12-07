<script lang="ts">
  import classNames from 'classnames';

  export let value: string = '';
  export let files: FileList | undefined = undefined;
  export let defaultClass: string =
    'flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600';

  let input: HTMLInputElement;

  function keydown(ev: KeyboardEvent) {
    if ([' ', 'Enter'].includes(ev.key)) {
      ev.preventDefault();
      input.click();
    }
  }
</script>

<label
  class={classNames(defaultClass, $$props.class)}
  tabIndex="0"
  on:keydown={keydown}
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:dragenter
  on:dragleave
  on:dragover
  on:drop>
  <slot />
  <input {...$$restProps} bind:value bind:files bind:this={input} type="file" class="hidden" on:change on:click />
</label>
