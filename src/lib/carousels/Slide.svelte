<script lang="ts">
  export let image: string = '';
  export let altTag: string = '';
  export let attr: string = '';
  export let slideClass: string = '';
</script>

<!--
  @component
  @see https://flowbite-svelte.com/docs/components/
  
  @example
  ```

  ```
-->

<div class={slideClass}>
  <img src={image} alt={altTag} title={attr} />
</div>
