<script lang="ts">
  import { Fileupload } from "$lib";

  let files = $state<FileList | undefined>();
  let elementRef = $state<HTMLInputElement>();
</script>

<Fileupload bind:files bind:elementRef clearable />
