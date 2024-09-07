<script lang="ts">
  import { browser } from '$app/environment';
  import { toUpperSnakeCase } from './helpers';

  interface Props {
    class?: string;
  }

  let { class: className }: Props = $props();
  const stylesImport = import.meta.glob('./highlight/styles/*.css');
  const localStorageName = toUpperSnakeCase(__NAME__) + '_CODE_BLOCK_STYLE';

  // @ts-ignore
  let selected: string = $state(browser && (localStorage.getItem(localStorageName) ?? 'gigavolt'));

  const styles = Object.entries(stylesImport).map(([path, importFn]) => ({
    value: path.slice(path.lastIndexOf('/') + 1, -4),
    name: path.slice(path.lastIndexOf('/') + 1, -4)
  }));

  $effect(() => {
    let link: HTMLLinkElement;
    (async () => {
      const css = await import(`./highlight/styles/${selected}.css?url`);
      link = document.createElement('link');

      link.rel = 'stylesheet';
      link.href = css.default;
      document.head.append(link);
    })();
    if (browser) {
      // get selected style from localStorage
      localStorage.setItem(localStorageName, selected);
    }
    return () => {
      // clean up
      link.remove();
    };
  });
</script>

<select class="w-32 border border-gray-200 p-1 text-gray-800 md:w-36 dark:text-gray-800 {className}" bind:value={selected}>
  {#each styles as theme}
    <option value={theme.value}>{theme.value}</option>
  {/each}
</select>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: 
-->
