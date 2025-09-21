<script lang="ts">
  import type { LayoutProps } from "./$types";
  import modeobserver from "./utils/modeobserver";
  import { onMount } from "svelte";

  let { children, data }: LayoutProps = $props();

  console.log('data', data);

  onMount(modeobserver);
</script>

{@render children()}
