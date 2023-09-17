<script lang="ts">
  import { page } from '$app/stores';
  export let components: string;
  export let dirName: string;

  const github: string = 'https://github.com/themesberg/flowbite-svelte/blob/main/src/lib'

  $: pathname = $page.url.pathname;
  $: lastPart = dirName || pathname.split('/').pop();
  // Split the components string into an array
  $: componentArray = components.split(', ').map(comp => comp.trim()); 
</script>

<ul>
{#each componentArray as compo}
<li><a href="{github}/{lastPart}/{compo}.svelte">{compo} component on GitHub</a></li>
{/each}
</ul>