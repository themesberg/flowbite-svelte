<script lang="ts">
  import { page } from "$app/state";
  let { link } = $props();

  const pathname = page.url.pathname;
  const parts = pathname.split("/").filter(Boolean); 
  const dirName = parts.at(-1);      // "input-field"
  const parentDir = parts.at(-2);    // "forms"
</script>

<ul>
  <li>
    {#if link}
      <a href="/llm/{link}.md" target="_blank" class="underline">Open LLM source for this page</a>
    {:else}
      <a href="/llm/{parentDir}/{dirName}.md" target="_blank" class="underline">Open LLM source for this page</a>
    {/if}
  </li>
</ul>