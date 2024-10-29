<script lang="ts">
  import { P } from "$lib";
  import HighlightCompo from "./utils/HighlightCompo.svelte";
  import H1 from "./utils/H1.svelte";
  import H2 from "./utils/H2.svelte";
  import H3 from "./utils/H3.svelte";
  const modules = import.meta.glob("./md/*.md", {
    query: "?raw",
    import: "default",
    eager: true
  });

  import { removeHyphensAndCapitalize } from "./utils/helpers";
  /*eslint no-undef: "off"*/
  const name = __NAME__;
  const version = __VERSION__;
  const githuburl = __GITHUBURL__;
</script>

<H1><a class="hover:underline dark:text-primary-500" href={githuburl}>{removeHyphensAndCapitalize(name)}: v{version}</a></H1>

<P>Svelte 5 UI Lib is a UI library built from the ground up for Svelte 5's pure runes mode. It uses Svelte 5's runes system to create smooth, reactive UI components. Each component and utility is built from scratch to work naturally with Svelte 5's approach.</P>

<H2>Installation</H2>

<H3>Svelte 5 Runes</H3>
<P>Installing Svelte 5:</P>

<HighlightCompo class="mb-8" codeLang="js" code={modules["./md/install-svelte.md"] as string} />

<H3>Installing Svelte-5-Ui-Lib</H3>
<P>Install `svelte-5-ui-lib` and update dependencies:</P>

<HighlightCompo class="mb-8" codeLang="sh" code={modules["./md/svelte-5-ui-lib.md"] as string} />

<H3>Tailwind</H3>
<P>Add the following to tailwind.config.js:</P>

<HighlightCompo class="mb-8" codeLang="json" code={modules["./md/tailwind-config.md"] as string} />
