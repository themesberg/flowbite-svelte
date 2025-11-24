<script lang="ts">
  import { onMount } from "svelte";
  import { twMerge } from "tailwind-merge";
  import { tv } from "tailwind-variants";

  type Link = {
    title: string;
    url: string;
    description?: string;
  };

  type SeeAlsoProps = {
    links: string[];
    sectionTitle?: string;
    showDescriptions?: boolean;
    class?: string;
  };

  let { links = [], showDescriptions = true, class: className = "" }: SeeAlsoProps = $props();

  let expanded = $state(false);
  let processedLinks = $state<Link[]>([]);
  let loading = $state(true);

  function toggleExpanded() {
    expanded = !expanded;
  }

  const seeAlso = tv({
    slots: {
      base: "my-8 p-4 rounded border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-800",
      span: "text-xl font-semibold mb-3 flex justify-between items-center dark:text-white",
      toggleButton: "text-sm text-blue-500 bg-transparent border-none cursor-pointer underline p-0",
      list: "list-none p-0 m-0",
      item: "mb-3 last:mb-0",
      linkcls: "text-blue-500 no-underline font-medium hover:underline hover:text-primary-700",
      description: "text-sm text-gray-500 dark:text-gray-400 mt-1 m-0"
    }
  });

  const { base, span, toggleButton, list, item, linkcls, description } = seeAlso();

  const modules = import.meta.glob("../docs/**/*.md", { query: "?raw", import: "default" });

  function extractFrontmatter(content: string) {
    const match = content.match(/^---\s*\n([\s\S]*?)\n---/);
    if (!match || !match[1]) return null;

    const frontmatter: Record<string, string> = {};
    const lines = match[1].split("\n");

    for (const line of lines) {
      const colonIndex = line.indexOf(":");
      if (colonIndex > 0) {
        const key = line.slice(0, colonIndex).trim();
        let value = line.slice(colonIndex + 1).trim();
        value = value.replace(/^['"](.*)['"]$/, "$1");
        if (value) frontmatter[key] = value;
      }
    }

    return frontmatter;
  }

  async function processUrlArray(urlList: string[]): Promise<Link[]> {
    return await Promise.all(
      urlList.map(async (url) => {
        let filePath = url.startsWith("/") ? url.substring(1) : url;
        if (!filePath.endsWith(".md")) filePath += ".md";
        const fullPath = `../${filePath}`;

        const loader = modules[fullPath];
        if (loader) {
          try {
            const raw = (await loader()) as string;
            const frontmatter = extractFrontmatter(raw);
            const desc = frontmatter?.description || "";
            return {
              title: frontmatter?.component_title || frontmatter?.title || url,
              url,
              description: desc.length > 100 ? `${desc.slice(0, 100)}...` : desc
            };
          } catch (e) {
            console.error(`Error loading ${fullPath}`, e);
          }
        }

        const fallbackTitle =
          url
            .split("/")
            .pop()
            ?.replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase()) || url;
        return { title: fallbackTitle, url };
      })
    );
  }

  onMount(async () => {
    processedLinks = await processUrlArray(links);
    loading = false;
  });

  let visibleLinks = $derived(expanded ? processedLinks : processedLinks.slice(0, 3));
</script>

{#if loading}
  <div class={base()}>Loading related links...</div>
{:else if processedLinks.length > 0}
  <section class={twMerge(base(), className)}>
    {#if processedLinks.length > 3}
      <span class={span()}>
        <button class={toggleButton()} onclick={toggleExpanded} aria-expanded={expanded}>
          {expanded ? "Show less" : `Show all (${processedLinks.length})`}
        </button>
      </span>
    {/if}

    <ul class={list()}>
      {#each visibleLinks as link (link.url)}
        <li class={item()}>
          <a href={link.url} class={linkcls()}>{link.title}</a>
          {#if showDescriptions && link.description}
            <p class={description()}>{link.description}</p>
          {/if}
        </li>
      {/each}
    </ul>
  </section>
{/if}
