<script lang="ts">
  export let image: string = '';
  export let altTag: string = '';
  export let attr: string = '';
  export let slideClass: string = '';
</script>

<div class={slideClass}>
  <img src={image} alt={altTag} title={attr} />
</div>

<!--
  @component
  ## Features
  [Go to Carousel](https://flowbite-svelte.com/docs/components/carousel)
  ## Props
  @prop image: string = '';
  @prop altTag: string = '';
  @prop attr: string = '';
  @prop slideClass: string = '';
-->
