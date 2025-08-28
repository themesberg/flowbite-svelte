<script lang="ts">
  import { Label, Fileupload } from "flowbite-svelte";

  let fileuploadprops = {
    id: "user_avatar"
  };
</script>

<Label class="pb-2">Upload file</Label>
<Fileupload {...fileuploadprops} />
