<script lang="ts" module>
  export const testState = $state({
    moves: [] as Array<{ cardId: string | number; fromColumnId: string | number; toColumnId: string | number }>
  });
</script>

<script lang="ts">
  import { KanbanBoard } from "$lib";
  import type { KanbanColumnType, KanbanCardType } from "$lib/types";

  let columns: KanbanColumnType[] = $state([
    {
      id: "todo",
      title: "To Do",
      cards: [
        { id: "drag-card-1", title: "Draggable Task 1" },
        { id: "drag-card-2", title: "Draggable Task 2" }
      ]
    },
    {
      id: "in-progress",
      title: "In Progress",
      cards: [{ id: "drag-card-3", title: "Draggable Task 3" }]
    }
  ]);

  function handleMove(card: KanbanCardType, from: KanbanColumnType, to: KanbanColumnType) {
    testState.moves.push({
      cardId: card.id,
      fromColumnId: from.id,
      toColumnId: to.id
    });
  }
</script>

<KanbanBoard bind:columns onMove={handleMove} data-testid="drag-drop-board" />

{#each columns as column (column.id)}
  <div data-testid={`column-${column.id}`} data-part="column" role="group" aria-label={`${column.title} column drop zone`}>
    <h2 data-testid={`column-title-${column.id}`} data-part="title">{column.title}</h2>
    <div data-testid={`card-list-${column.id}`} data-part="list" role="list" aria-label={`${column.title} cards`}>
      {#each column.cards as card (card.id)}
        <article data-testid={`card-${card.id}`} data-scope="kanban-card" data-part="base" role="listitem" draggable="true" aria-grabbed="false" aria-label={card.title}>
          <p data-testid={`card-${card.id}-title`} data-part="title">{card.title}</p>
        </article>
      {/each}
    </div>
    <button data-testid={`add-card-btn-${column.id}`} data-part="button" aria-label={`Add card to ${column.title}`}>+ Add card</button>
  </div>
{/each}
