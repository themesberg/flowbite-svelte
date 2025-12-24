<script lang="ts">
  import { Dropzone } from "$lib";

  let files = $state<FileList | null>(null);
</script>

<Dropzone bind:files>
  <div class="dropzone-content">
    <p>Drop files here or click to upload</p>
  </div>
</Dropzone>
