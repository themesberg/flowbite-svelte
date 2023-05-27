<script lang="ts">
  export let caption: string = '';
  export let captionClass: string = '';
</script>

<div class={captionClass}>
  <p id="caption" class="text-gray-900 dark:text-white">{caption}</p>
</div>


<!--
  @component
  @see https://flowbite-svelte.com/docs/components/carousel
  
  @prop caption: string = '';
  @prop captionClass: string = '';
  
-->
