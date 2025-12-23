<script lang="ts">
  import { Fileupload } from "$lib";

  let files = $state<FileList | undefined>();
</script>

<Fileupload bind:files multiple />
