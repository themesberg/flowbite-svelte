<script lang="ts">
  export let image: string = '';
  export let altTag: string = '';
  export let attr: string = '';
  export let slideClass: string = '';
</script>

<div class={slideClass}>
  <img src={image} alt={altTag} title={attr} />
</div>
