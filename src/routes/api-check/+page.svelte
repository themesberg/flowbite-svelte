<script lang="ts">
  import { List, Li, P, A } from "$lib";
  let { data } = $props();

  function convertString(path: string): string {
    return path.replace(/^\/(\w)(\w*)/, (match, firstChar, restOfString) => {
      return firstChar.toUpperCase() + restOfString;
    });
  }
</script>

<h1 class="my-4 text-3xl">API check</h1>

<P>Our main documentation is written in .md files, which means editors can’t provide real-time feedback such as syntax errors, type errors, or other code issues.</P>

<P>The api-check directory uses .svelte files instead, allowing you to verify that the code is valid and type-safe directly in your editor. This ensures that any examples included in the documentation remain accurate and functional.</P>

<List class="my-8 space-y-1 text-gray-500 dark:text-gray-400">
  {#each Object.entries(data.posts.apicheck) as [key, values] (key)}
    <List class="text-2xl">{key}</List>
    {#each values as Array<{ path: string }> as item (item.path)}
      {@const href = `/api-check/${key}${item.path}`}
      {@const linkLabel = convertString(item.path)}
      <Li>
        <A {href}>
          {linkLabel}
        </A>
      </Li>
    {/each}
  {/each}
</List>
