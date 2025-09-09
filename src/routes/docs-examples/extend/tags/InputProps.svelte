<script lang="ts">
  import { Tags } from "$lib";
  let tags: string[] = $state([]);
</script>

<Tags 
  bind:value={tags} 
  inputProps={{ id: "my-tags-input" }}
  availableTags={["react", "svelte", "vue"]} 
/>