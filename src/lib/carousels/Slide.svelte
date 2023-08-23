<script lang="ts">
  export let image: string = '';
  export let altTag: string = '';
  export let attr: string = '';
  export let slideClass: string = '';
  export let imgClass: string = '';
</script>

<div class={slideClass}>
  {#key image}
    <img src={image} alt={altTag} title={attr} class={imgClass} />
  {/key}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let image: string = '';
@prop export let altTag: string = '';
@prop export let attr: string = '';
@prop export let slideClass: string = '';
@prop export let imgClass: string = '';
-->
