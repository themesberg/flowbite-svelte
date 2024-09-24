<script lang="ts">
  import { Search, Button } from '$lib';
  import { SearchOutline, MicrophoneSolid } from 'flowbite-svelte-icons';
  function handleVoiceBtn() {
    alert('You clicked voice button');
  }
</script>

<form class="flex gap-2">
  <Search size="md" class="flex gap-2 items-center" placeholder="Search Mockups, Logos, Design Templates...">
    <button type="button" onclick={handleVoiceBtn} class="outline-none">
      <MicrophoneSolid class="w-5 h-5 me-2" />
    </button>
  </Search>
  <Button size="sm">
    <SearchOutline class="w-6 h-6 me-2 -ms-1" />
    Search
  </Button>
</form>
