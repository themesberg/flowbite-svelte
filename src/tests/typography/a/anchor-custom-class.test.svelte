<script lang="ts">
  import A from "$lib/typography/a/A.svelte";
</script>

<A href="https://example.com" class="custom-anchor-class" onclick={(e) => e.preventDefault()} data-sveltekit-preload-data="off" data-testid="custom-class">Custom class</A>
