<script lang="ts">
  import { page } from "$app/state";

  const pathname = page.url.pathname;
  const parts = pathname.split("/").filter(Boolean); 
  const dirName = parts.at(-1);      // "input-field"
  const parentDir = parts.at(-2);    // "forms"
</script>

<ul>
  <li>
    <a href="/llm/{parentDir}/{dirName}.md" target="_blank" class="underline">Open LLM source for this page</a>
  </li>
</ul>