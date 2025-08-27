<script>
  import { Toast } from "flowbite-svelte";
</script>

<div class="relative h-56">
  <Toast onclick={() => alert("Toast closed")}>Click the close button to see the event.</Toast>
</div>
