<script lang="ts">
  export let caption: string = '';
  export let captionClass: string = '';
  export let captionTextClass: string = 'text-gray-900 dark:text-white';
</script>

<div class={captionClass}>
  <p id="caption" class={captionTextClass}>{caption}</p>
</div>

<!--
  @component
  ## Features
  [Go to Carousel](https://flowbite-svelte.com/docs/components/carousel)

  ## Props
  @prop caption: string = '';
  @prop captionClass: string = '';
  
-->
