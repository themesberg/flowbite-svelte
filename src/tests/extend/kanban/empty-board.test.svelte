<script lang="ts">
  import { KanbanBoard } from "$lib";
  import type { KanbanColumnType } from "$lib/types";

  let columns: KanbanColumnType[] = $state([
    {
      id: "backlog",
      title: "Backlog",
      cards: []
    },
    {
      id: "todo",
      title: "To Do",
      cards: []
    },
    {
      id: "done",
      title: "Done",
      cards: []
    }
  ]);
</script>

<KanbanBoard bind:columns data-testid="empty-kanban-board" />

{#each columns as column (column.id)}
  <div data-testid={`column-${column.id}`} data-part="column" role="group" aria-label={`${column.title} column drop zone`}>
    <h2 data-testid={`column-title-${column.id}`} data-part="title">{column.title}</h2>
    <div data-testid={`card-list-${column.id}`} data-part="list" role="list" aria-label={`${column.title} cards`}>
      <!-- Empty list -->
    </div>
    <button data-testid={`add-card-btn-${column.id}`} data-part="button" aria-label={`Add card to ${column.title}`}>+ Add card</button>
  </div>
{/each}
