You can access /Users/shinichiokada/Flowbite/flowbite-svelte-local-development.

In a markdown file, for example, src/routes/docs/typography/hr.md, I use the following:


```markdown
## Default HR

```svelte example
{#include Default.svelte}
```
```

The `#include` is coming from `./include-files.js`.  It picks up example svelte code from src/routes/docs-examples directory where component name and file name matches.
I use src/routes/utils/ExampleWrapper.svelte to display rendered output and code string.
I define it in ./mdsvex.config.js.

So far I use import from ``flowbite-svelte`` as the following:

```svelte
<script lang="ts">
  import { Hr, P } from "flowbite-svelte";
</script>
```

I alias `flowbite-svelte` in ./vite.config.ts:

```
 ...
  resolve: {
    alias: {
      "flowbite-svelte": path.resolve(process.cwd(), "./src/lib/index.ts")
    }
  },
```

The problem is that when I update any file in the src/lib directory, I need to run pnpm build, otherwise I get errors on editor and pnpm check.

I'm not sure what I need to change so that when I change code in the lib directory, it automatically reflect on files in src/routes directory.

I may be wrong but if I import from "$lib" as the following:

```svelte
<script lang="ts">
  import { Hr, P } from "flowbite-svelte";
</script>
```

and replace $lib with flowbite-svelte for code string and copy code  in ExampleWrapper.svelte may work???

Do you have any suggestions? Can you fix this problem?