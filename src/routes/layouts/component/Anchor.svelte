<script lang="ts" context="module">
  import type { LinkType } from '$lib/types';

  export function extract(x: HTMLElement): LinkType {
    if (x.firstElementChild) return { rel: x.tagName, href: '#' + x.firstElementChild?.id, name: x?.firstChild?.nodeValue ?? '' };
    return { name: '' };
  }
</script>

<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  export let tag: string;

  let content: string, slug: string;

  function init(node: HTMLElement) {
    content = node.firstChild?.nodeValue ?? '';
    slug = content.replace(/\s/g, '_');
  }

  $: elemClass = twMerge('relative group', $$props.class);
</script>

<svelte:element this={tag} {...$$restProps} class={elemClass} use:init>
  <slot />
  <span id={slug} class="absolute -top-[140px]" />
  <a class="ms-2 text-primary-700 opacity-0 transition-opacity dark:text-primary-700 group-hover:opacity-100" href="#{slug}" aria-label="Link to this section: {content}"> # </a>
</svelte:element>
