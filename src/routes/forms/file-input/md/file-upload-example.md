<script lang="ts">
  ...
  let files: FileList | undefined = $state();
</script>

<Label class="mb-2 space-y-2">
  <span>Upload file</span>
  <Fileupload bind:files />
</Label>