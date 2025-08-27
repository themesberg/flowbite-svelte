<script lang="ts">
  import { Fileupload, Helper } from "flowbite-svelte";
  let selectedFiles = $state<FileList | null>(null);
  let fileNames = $derived(
    selectedFiles
      ? Array.from(selectedFiles)
          .map((file) => file.name)
          .join(", ")
      : "No files selected"
  );
</script>

<Fileupload clearable bind:files={selectedFiles} multiple />
<Helper color="emerald" class="mt-2">Selected files: {fileNames}</Helper>
