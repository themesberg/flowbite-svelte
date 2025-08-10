<script lang="ts">
  // import '../app.css';
  import { page } from '$app/state';
  import { NotFound, Maintenance, ServerError } from 'flowbite-svelte-admin-dashboard';

  const pages = {
    400: Maintenance,
    404: NotFound,
    500: ServerError
  } as const;

  type ErrorCode = keyof typeof pages;

  const status = +page.status;
  const index = Object.keys(pages)
    .map((x) => +x)
    .reduce((p, c) => (p < status ? c : p)) as ErrorCode;
  const component = pages[index];

  import MetaTag from './utils/MetaTag.svelte';

  const path: string = `/errors/${index}`;
  const description: string = `${index} - Flowbite Svelte Admin Dashboard`;
  const title: string = `Flowbite Svelte Admin Dashboard - ${index} page`;
  const subtitle: string = `${index} page`;
</script>

<MetaTag {path} {description} {title} {subtitle} />

<svelte:component this={component} />
