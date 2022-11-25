<script lang="ts">
  export let image: string = '';
  export let altTag: string = '';
  export let attr: string = '';
  export let slideClass: string = '';
  export let slideDivClass: sting = '';
</script>

<div class={slideDivClass}>
  <img class={slideClass} src={image} alt={altTag} title={attr} />
</div>
