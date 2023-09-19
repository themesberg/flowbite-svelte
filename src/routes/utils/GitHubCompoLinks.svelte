<script lang="ts">

  import { page } from '$app/stores';
  // export let dirName: string = '';
  const pathname = $page.url.pathname;
  const dirName = pathname.split('/').pop();
  import {getFilteredFileNames} from './index'

  export let components;

  const github: string = 'https://github.com/themesberg/flowbite-svelte/blob/main/src/lib'
  
  // default for docs/components 
  let fileNames = getFilteredFileNames(dirName);
  // if components are given in docs/forms, typography etc use it
  if (components) {
    // Split the components into an array
    const componentArray = components.split(', ');
    fileNames = componentArray;
  }
  // console.log('fileNames: ', fileNames)
</script>

<ul>
  {#each fileNames as compo}
  <li>
    <a target="_blank" href="{github}/{dirName}/{compo}.svelte">{compo} component on GitHub</a>
  </li>
{/each}
</ul>