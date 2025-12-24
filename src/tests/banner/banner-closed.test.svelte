<script lang="ts">
  import Banner from "$lib/banner/Banner.svelte";

  let open = $state(false);
</script>

<Banner bind:open>This banner is initially closed.</Banner>
