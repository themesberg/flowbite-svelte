<script lang="ts">
  import { Fileupload } from "$lib";

  let files = $state<FileList | undefined>();
</script>

<Fileupload bind:files size="sm" />
<Fileupload bind:files size="md" />
<Fileupload bind:files size="lg" />
