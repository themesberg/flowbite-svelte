<script lang="ts" module>
  import type { KanbanColumnType, KanbanCardType } from "$lib/types";

  // Define specific types for the call logs instead of using 'any'
  interface MoveCall {
    card: KanbanCardType;
    from: KanbanColumnType;
    to: KanbanColumnType;
  }

  interface AddCardCall {
    column: KanbanColumnType;
  }

  export const testState = $state({
    onMoveCalls: [] as MoveCall[],
    onAddCardCalls: [] as AddCardCall[]
  });
</script>

<script lang="ts">
  import { KanbanBoard } from "$lib";

  let columns: KanbanColumnType[] = $state([
    {
      id: "col-1",
      title: "Column 1",
      cards: [{ id: "cb-card-1", title: "Callback Test Card 1" }]
    },
    {
      id: "col-2",
      title: "Column 2",
      cards: []
    }
  ]);

  function handleMove(card: KanbanCardType, from: KanbanColumnType, to: KanbanColumnType) {
    testState.onMoveCalls.push({ card, from, to });
  }

  function handleAddCard(col: KanbanColumnType) {
    testState.onAddCardCalls.push({ column: col });
  }
</script>

<KanbanBoard bind:columns onMove={handleMove} onAddCard={handleAddCard} data-testid="callbacks-board" />

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
