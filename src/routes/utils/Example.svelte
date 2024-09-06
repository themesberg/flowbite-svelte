<script lang="ts">
  import type { Component, Snippet } from "svelte";

  interface Props{
    src: string;
    example: string;
  }
  let { src, example }: Props = $props();
</script>

