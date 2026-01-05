<script lang="ts">
  import { KanbanBoard } from "$lib";
  import type { KanbanColumnType } from "$lib/types";

  let columns: KanbanColumnType[] = $state([
    {
      id: "color-todo",
      title: "To Do",
      color: "#3b82f6",
      cards: [{ id: "color-card-1", title: "Blue Column Task" }]
    },
    {
      id: "color-progress",
      title: "In Progress",
      color: "#f59e0b",
      cards: [{ id: "color-card-2", title: "Orange Column Task" }]
    },
    {
      id: "color-done",
      title: "Done",
      color: "#10b981",
      cards: [{ id: "color-card-3", title: "Green Column Task" }]
    }
  ]);
</script>

<KanbanBoard bind:columns data-testid="colored-columns-board" />

{#each columns as column (column.id)}
  <div data-testid={`column-${column.id}`} data-part="column" role="group" aria-label={`${column.title} column drop zone`} style={column.color ? `border-top: 4px solid ${column.color}` : ""}>
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
