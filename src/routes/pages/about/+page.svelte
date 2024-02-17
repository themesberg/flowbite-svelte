<script>
  import { Heading, P, A, List, Li } from '$lib';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const svelte5uilibVersion = __SVELTE5UILIBVERSION__;
  const svelteVersion = __SVELTEVERSION__;
  const svelteKitVersion = __SVELTEKITVERSION__;
  const viteVersion = __VITEVERSION__;
</script>

<div class="p-4">
  <H1>About</H1>

  <P>Svelte 5 UI Lib – a UI library for Svelte 5 and built upon Flowbite/Flowbite-Svelte.</P>

  <H2>Other Flowbite-Svelte</H2>
  <List>
    <Li><A href="https://flowbite-svelte.com/">Flowbite-Svelte</A></Li>
    <Li><A href="https://flowbite-svelte-icons.vercel.app/">Flowbite-Svelte-Icons</A></Li>
    <Li><A href="https://flowbite-svelte-blocks.vercel.app/">Flowbite-Svelte-Blocks</A></Li>
    <Li
      ><A href="https://flowbite-svelte-admin-dashboard.vercel.app/">Flowbite-Svelte-Dashboard</A
      ></Li
    >
  </List>

  <H2>Techinical info</H2>
  <List>
    <Li><A href="https://svelte-5-ui-lib.vercel.app/">Svelte 5 UI Lib: {svelte5uilibVersion}</A></Li
    >
    <Li
      ><A href="https://svelte-5-preview.vercel.app/docs/introduction">Svelte 5: {svelteVersion}</A
      ></Li
    >
    <Li><A href="https://kit.svelte.dev/">Svelte Kit: {svelteKitVersion}</A></Li>
    <Li><A href="https://vitejs.dev/">Vite: {viteVersion}</A></Li>
  </List>

  <H2>Repo</H2>
  <List>
    <Li><A href="https://github.com/shinokada/svelte-5-ui-lib">GitHub</A></Li>
    <Li><A href="https://github.com/shinokada">Author</A></Li>
  </List>
</div>
