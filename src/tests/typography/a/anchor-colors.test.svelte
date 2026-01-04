<script lang="ts">
  import A from "$lib/typography/a/A.svelte";
</script>

<A href="#" color="primary" data-testid="color-primary" onclick={(e) => e.preventDefault()}>Primary</A>
<A href="/secondary" color="secondary" data-testid="color-secondary" onclick={(e) => e.preventDefault()}>Secondary</A>
<A href="/gray" color="gray" data-testid="color-gray" onclick={(e) => e.preventDefault()}>Gray</A>
