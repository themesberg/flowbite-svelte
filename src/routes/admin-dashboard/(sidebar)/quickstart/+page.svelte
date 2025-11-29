<script lang="ts">
  import { Breadcrumb, BreadcrumbItem, Heading, P } from "flowbite-svelte";
  import { HighlightCompo } from "svelte-rune-highlight";

  const modules = import.meta.glob("./md/*.md", {
    query: "?raw",
    import: "default",
    eager: true
  });
</script>

<main class="h-screen w-full overflow-y-auto bg-white dark:bg-gray-900">
  <div class="p-12">
    <Breadcrumb class="mb-5">
      <BreadcrumbItem home>Home</BreadcrumbItem>
      <BreadcrumbItem>About</BreadcrumbItem>
    </Breadcrumb>
    <Heading tag="h1" class="mb-8 text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Flowbite Svelte Admin Dashboard</Heading>

    <Heading tag="h2" class="my-8 text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Installation</Heading>
    <HighlightCompo class="mb-8" code={modules["./md/installation.md"] as string} />

    <P>If you use SvelteKit and the main css file is `src/routes/layout.css` or `src/app.css`, add one of the following based on the file location:</P>

    <HighlightCompo class="mb-8" code={modules["./md/css.md"] as string} />

    <Heading tag="h2" class="my-8 text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">.env File</Heading>
    <P>
      Create <code>.env</code>
      file and add your image url or directory to
      <code>VITE_IMG_DIR</code>
    </P>
    <HighlightCompo class="mb-8" code={modules["./md/env.md"] as string} />
  </div>
</main>
