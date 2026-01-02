<script lang="ts">
  import clsx from "clsx";
  import type { KanbanCardProps } from "$lib/types";
  import { kanbanCard } from "./theme";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { card, isDragging = false, onDragStart, onDragEnd, class:className, classes, ...restProps }: KanbanCardProps = $props();

  const styling = $derived(classes);
  const theme = $derived(getTheme("kanbanCard"));
  // Rename destructured values to avoid naming conflicts with props
  const { base: basePart, title: titlePart, description: descriptionPart, tags: tagsPart, tag: tagPart } = kanbanCard();
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<article
  role="listitem"
  draggable="true"
  {...restProps}
  ondragstart={(ev) => onDragStart?.(card, ev)}
  ondragend={(ev) => onDragEnd?.(ev)}
  tabindex="0"
  aria-grabbed={isDragging}
  aria-label={card.title}
  data-scope="kanban-card"
  data-part="base"
  class={basePart({ isDragging, class: clsx(theme?.base, className) })}
>
  <p data-part="title" class={titlePart({ class: clsx(theme?.title, styling?.title) })}>
    {card.title}
  </p>

  {#if card.description}
    <p data-part="description" class={descriptionPart({ class: clsx(theme?.description, styling?.description) })}>
      {card.description}
    </p>
  {/if}

  {#if card.tags?.length}
    <div data-part="tags" class={tagsPart({ class: clsx(theme?.tags, styling?.tags) })}>
      {#each card.tags as tag, i (i)}
        <span data-part="tag" class={tagPart({ class: clsx(theme?.tag, styling?.tag) })}>
          {tag}
        </span>
      {/each}
    </div>
  {/if}
</article>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[KanbanCardProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2048)
## Props
@prop card
@prop isDragging = false
@prop onDragStart
@prop onDragEnd
@prop classes
@prop ...restProps
-->
