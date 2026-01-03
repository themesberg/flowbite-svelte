<script lang="ts">
  import type { KanbanBoardProps, KanbanCardType, KanbanColumnType } from "$lib/types";
  import clsx from "clsx";
  import { kanbanBoard } from "./theme";
  import { getTheme } from "$lib/theme-provider/themeUtils";
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

  const styling = $derived(classes);
  const theme = $derived(getTheme("kanbanBoard"));

  // Changed from KanbanCard to KanbanCardType
  let draggedCard = $state<KanbanCardType | null>(null);
  let sourceColumnId = $state<string | number | null>(null);
  let dragOverColumnId = $state<string | number | null>(null);

  const { base, column, title, list, button } = kanbanBoard();

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

<div {...restProps} data-scope="kanban-board" data-part="base" class={base({ class: clsx(theme?.base, className) })}>
  {#each columns as col (col.id)}
    <div
      role="group"
      data-part="column"
      aria-label={`${col.title} column drop zone`}
      class={column({ isDragOver: dragOverColumnId === col.id, class: clsx(theme?.column, styling?.column) })}
      ondragover={(e) => handleDragOver(e, col.id)}
      ondragleave={(e) => handleDragLeave(e)}
      ondrop={(e) => handleDrop(e, col.id)}
      style={col.color ? `border-top: 4px solid ${col.color}` : ""}
    >
      <h2 data-part="title" class={title({ class: clsx(theme?.title, styling?.title) })}>{col.title}</h2>

      <div data-part="list" class={list({ class: clsx(theme?.list, styling?.list) })} role="list" aria-label={`${col.title} cards`}>
        {#each col.cards as card (card.id)}
          <KanbanCard {card} {...cardProps} isDragging={draggedCard?.id === card.id} onDragStart={() => handleDragStart(card, col.id)} onDragEnd={handleDragEnd} />
        {/each}
      </div>

      <button data-part="button" class={button({ class: clsx(theme?.button, styling?.button) })} onclick={() => onAddCard(col)} aria-label={`Add card to ${col.title}`}>+ Add card</button>
    </div>
  {/each}
</div>
