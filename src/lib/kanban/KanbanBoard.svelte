<script lang="ts">
  import type { KanbanBoardProps, KanbanCardType, KanbanColumnType } from "$lib/types";
  import clsx from "clsx";
  import { kanbanBoard } from "./theme";
  import { getTheme } from "$lib/theme/themeUtils";
  import KanbanCard from "./KanbanCard.svelte";

  let {
    columns = $bindable([]),
    onMove = (_card: KanbanCardType, _from: KanbanColumnType, _to: KanbanColumnType) => {},
    onAddCard = (_col: KanbanColumnType) => {},
    cardProps,
    class: className,
    classes,
    ...restProps
  }: KanbanBoardProps = $props();

  const theme = getTheme("kanbanBoard");

  // Changed from KanbanCard to KanbanCardType
  let draggedCard = $state<KanbanCardType | null>(null);
  let sourceColumnId = $state<string | number | null>(null);
  let dragOverColumnId = $state<string | number | null>(null);

  const styles = kanbanBoard();

  // Changed parameter type from KanbanCard to KanbanCardType
  function handleDragStart(card: KanbanCardType, colId: string | number) {
    draggedCard = card;
    sourceColumnId = colId;
  }

  function handleDragOver(e: DragEvent, colId: string | number) {
    e.preventDefault();
    dragOverColumnId = colId;
  }

  function handleDragLeave(e: DragEvent) {
    const currentTarget = e.currentTarget as HTMLElement;
    const relatedTarget = e.relatedTarget as Node | null;
    if (!relatedTarget || !currentTarget.contains(relatedTarget)) {
      dragOverColumnId = null;
    }
  }

  function handleDrop(e: DragEvent, targetColId: string | number) {
    e.preventDefault();
    dragOverColumnId = null;

    if (draggedCard === null || sourceColumnId === null) return;
    if (sourceColumnId === targetColId) {
      draggedCard = null;
      sourceColumnId = null;
      return;
    }

    const fromCol = columns.find((c) => c.id === sourceColumnId);
    const toCol = columns.find((c) => c.id === targetColId);
    if (!fromCol || !toCol) return;

    fromCol.cards = fromCol.cards.filter((c) => c.id !== draggedCard!.id);
    toCol.cards = [...toCol.cards, draggedCard!];

    onMove(draggedCard, fromCol, toCol);

    draggedCard = null;
    sourceColumnId = null;
  }

  function handleDragEnd() {
    draggedCard = null;
    sourceColumnId = null;
    dragOverColumnId = null;
  }
</script>

<div {...restProps} class={styles.container({ class: clsx(theme?.container, className) })}>
  {#each columns as col (col.id)}
    <div
      role="group"
      aria-label={`${col.title} column drop zone`}
      class={styles.column({ isDragOver: dragOverColumnId === col.id, class: clsx(theme?.column, classes?.column) })}
      ondragover={(e) => handleDragOver(e, col.id)}
      ondragleave={(e) => handleDragLeave(e)}
      ondrop={(e) => handleDrop(e, col.id)}
      style={col.color ? `border-top: 4px solid ${col.color}` : ""}
    >
      <h2 class={styles.columnTitle({ class: clsx(theme?.columnTitle, classes?.columnTitle) })}>{col.title}</h2>

      <div class={styles.cardList({ class: clsx(theme?.cardList, classes?.cardList) })} role="list" aria-label={`${col.title} cards`}>
        {#each col.cards as card (card.id)}
          <KanbanCard {card} {classes} {...cardProps} isDragging={draggedCard?.id === card.id} onDragStart={() => handleDragStart(card, col.id)} onDragEnd={handleDragEnd} />
        {/each}
      </div>

      <button class={styles.addButton({ class: clsx(theme?.addButton, classes?.addButton) })} onclick={() => onAddCard(col)} aria-label={`Add card to ${col.title}`}>+ Add card</button>
    </div>
  {/each}
</div>
