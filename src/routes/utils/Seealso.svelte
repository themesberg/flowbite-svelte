<script lang="ts">
  import { twMerge } from 'tailwind-merge'; 
  import { tv } from 'tailwind-variants';

  // Define the component's types
  type Link = {
    title: string;
    url: string;
    description?: string;
  };

  type SeeAlsoProps = {
    links?: Link[];
    sectionTitle?: string;
    showDescriptions?: boolean;
    class?: string;
  };

  // Use $props() rune instead of export let
  let { 
    links = [], 
    showDescriptions = true, 
    class: className = ""
  }: SeeAlsoProps = $props();

  let expanded = $state(false);
  
  function toggleExpanded() {
    expanded = !expanded;
  }

  // Define variants with tailwind-variants
  const seeAlso = tv({
    slots: {
      base: "my-8 p-4 rounded border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-800",
      span: "text-xl font-semibold mb-3 flex justify-between items-center dark:text-white",
      toggleButton: "text-sm text-blue-500 bg-transparent border-none cursor-pointer underline p-0",
      list: "list-none p-0 m-0",
      item: "mb-3 last:mb-0",
      linkcls: "text-blue-500 no-underline font-medium hover:underline hover:text-primary-700",
      description: "text-sm text-gray-500 dark:text-gray-50 mt-1 m-0"
    }
  });

  const { base, span, toggleButton, list, item, linkcls, description } = seeAlso();
 
  // const visibleLinks = $derived(expanded ? links : links.slice(0, 3));

</script>

{#if links.length > 0}
  <section class={twMerge(base(), className)}>
    {#if links.length > 3}
    <span class={span()}>
        <button 
          class={toggleButton()}
          onclick={toggleExpanded}
          aria-expanded={expanded}
        >
          {expanded ? 'Show less' : `Show all (${links.length})`}
        </button>
      </span>
    {/if}
    
    <ul class={list()}>
      {#each expanded ? links : links.slice(0, 3) as link}
        <li class={item()}>
          <a href={link.url} class={linkcls()}>
            {link.title}
          </a>
          {#if showDescriptions && link.description}
            <p class={description()}>{link.description}</p>
          {/if}
        </li>
      {/each}
    </ul>
  </section>
{/if}