<script>
  import { Fileupload } from "flowbite-svelte";
</script>

<Fileupload
  id="event"
  clearable
  clearableOnClick={() => {
    alert("Clicked close button!");
  }}
/>