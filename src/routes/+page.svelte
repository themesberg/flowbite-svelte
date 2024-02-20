<script>
  import HighlightCompo from './utils/HighlightCompo.svelte';
  import H1 from './utils/H1.svelte';
  import H2 from './utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });

  import { removeHyphensAndCapitalize } from './utils/helpers';
  const name = __NAME__;
  const version = __VERSION__;
  const githuburl = __GITHUBURL__;
  const svelteVersion = __SVELTEVERSION__;
  const svelteKitVersion = __SVELTEKITVERSION__;
  const viteVersion = __VITEVERSION__;
  const tailwindcssVersion = __TAILWINDCSSVERSION__;
</script>

<H1><a class='hover:underline' href={githuburl}>{removeHyphensAndCapitalize(name)}: v{version}</H1>

<p>
  Svelte 5 UI Lib is a UI library crafted for Svelte 5. Explore our collection featuring over 36 components.
</p>

<H2>Dependency info</H2>
<ul>
  <li>Svelte: {svelteVersion}</li>
  <li>SvelteKit: {svelteKitVersion}</li>
  <li>TailwindCSS: {tailwindcssVersion}</li>
</ul>

<H2>Credits</H2>

<ul>
  <li>Flowbite</li>
  <li>Flowbite-Svelte</li>
</ul>

<H2>Installation</H2>

<HighlightCompo codeLang="md" code={modules['./md/installation.md']} />
