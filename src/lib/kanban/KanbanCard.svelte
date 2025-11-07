<script lang="ts">
  import clsx from "clsx";
  import type { KanbanCardProps } from "$lib/types";
  import { kanbanCard } from "./theme";
  import { getTheme } from "$lib/theme/themeUtils";

  let { card, isDragging = false, onDragStart, onDragEnd, classes, ...restProps }: KanbanCardProps = $props();

  const theme = getTheme("kanbanCard");
  const styles = kanbanCard();
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
  class={styles.card({ isDragging, class: clsx(theme?.card, classes?.card) })}
>
  <p class={styles.cardTitle({ class: clsx(theme?.cardTitle, classes?.cardTitle) })}>
    {card.title}
  </p>

  {#if card.description}
    <p class={styles.cardDescription({ class: clsx(theme?.cardDescription, classes?.cardDescription) })}>
      {card.description}
    </p>
  {/if}

  {#if card.tags?.length}
    <div class={styles.cardTags({ class: clsx(theme?.cardTags, classes?.cardTags) })}>
      {#each card.tags as tag, i (i)}
        <span class={styles.cardTag({ class: clsx(theme?.cardTag, classes?.cardTag) })}>
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
[KanbanCardProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2119)
## Props
@prop card
@prop isDragging = false
@prop onDragStart
@prop onDragEnd
@prop classes
@prop ...restProps
-->
