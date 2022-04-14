<script lang="ts">
  export let image: string = '';
  export let altTag: string = '';
  export let attr: string = '';
</script>

<div class="duration-700 ease-in-out">
  <img src={image} alt={altTag} title={attr} />
</div>
