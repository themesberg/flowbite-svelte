<script lang="ts">
  import { Search, Button } from "$lib";
  import { SearchOutline, MicrophoneSolid } from "flowbite-svelte-icons";
  function handleVoiceBtn() {
    alert("You clicked voice button");
  }
</script>

<form class="flex gap-2">
  <Search size="md" class="flex items-center gap-2" placeholder="Search Mockups, Logos, Design Templates...">
    <button type="button" onclick={handleVoiceBtn} class="outline-hidden">
      <MicrophoneSolid class="me-2 h-5 w-5" />
    </button>
  </Search>
  <Button size="sm">
    <SearchOutline class="-ms-1 me-2 h-6 w-6" />
    Search
  </Button>
</form>
