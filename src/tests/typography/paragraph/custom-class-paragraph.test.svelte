<script lang="ts">
  import P from "$lib/typography/paragraph/P.svelte";
</script>

<P class="custom-paragraph-class" data-testid="custom-paragraph">
  {#snippet children()}
    Custom styled paragraph
  {/snippet}
</P>
