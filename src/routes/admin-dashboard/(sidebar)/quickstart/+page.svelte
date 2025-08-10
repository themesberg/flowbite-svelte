<script lang="ts">
  import { Breadcrumb, BreadcrumbItem, Heading, List, Li } from 'flowbite-svelte';
  import { CheckCircleSolid } from 'flowbite-svelte-icons';
  import { HighlightCompo } from '../../utils';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<main class="h-screen w-full overflow-y-auto bg-white dark:bg-gray-800">
  <div class="p-12">
    <Breadcrumb class="mb-5">
      <BreadcrumbItem home>Home</BreadcrumbItem>
      <BreadcrumbItem>About</BreadcrumbItem>
    </Breadcrumb>
    <Heading tag="h1" class="mb-8 text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Flowbite Svelte Admin Dashboard</Heading>
    
    <Heading tag="h2" class="my-8 text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">Installation</Heading>
    <HighlightCompo class="mb-8" codeLang="js" code={modules['./md/installation.md'] as string} />
  </div>
</main>
