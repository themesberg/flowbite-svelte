<script lang="ts">
  import { Listgroup } from '$lib';
  let simpleList = ['Profile', 'Settings', 'Messages', 'Download'];
</script>

<div class="flex justify-center">
  <Listgroup items={simpleList} class="w-48" />
</div>
