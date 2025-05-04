<script lang="ts" module>
  import type { LinkType } from "$lib/types";

  const getText = (node: Node) => {
    const text = [...node.childNodes].find((child) => child.nodeType === Node.TEXT_NODE);
    return (text && text.textContent?.trim()) || "";
  };

  export function extract(x: HTMLElement): LinkType {
    if (x.firstElementChild) return { rel: x.tagName, href: "#" + x.firstElementChild?.id, name: getText(x) };
    return { name: "" };
  }
</script>

<script lang="ts">
  import { twMerge } from "tailwind-merge";

  let { children, tag, class: className, ...restProps } = $props();

  let content: string = $state("");
  let slug: string = $state("");

  function init(node: HTMLElement) {
    content = getText(node);
    slug = content.replace(/\s/g, "-").toLocaleLowerCase();
  }

  let elemClass = $derived(twMerge("relative group", className));
</script>

<svelte:element this={tag} {...restProps} class={elemClass} use:init>
  {@render children()}
  <span id={slug} class="absolute -top-[140px]"></span>
  <a class="text-primary-700 dark:text-primary-700 ms-2 opacity-0 transition-opacity group-hover:opacity-100" href="#{slug}" aria-label="Link to this section: {content}">#</a>
</svelte:element>
