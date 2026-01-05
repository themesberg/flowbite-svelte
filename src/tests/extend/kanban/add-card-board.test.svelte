<script lang="ts" module>
  export const testState = $state({
    addCardCalls: [] as Array<{ columnId: string | number; columnTitle: string }>
  });
</script>

<script lang="ts">
  import { KanbanBoard } from "$lib";
  import type { KanbanColumnType } from "$lib/types";

  let columns: KanbanColumnType[] = $state([
    {
      id: "add-todo",
      title: "To Do",
      cards: [{ id: "add-card-1", title: "Existing Card" }]
    },
    {
      id: "add-progress",
      title: "In Progress",
      cards: []
    }
  ]);

  function handleAddCard(col: KanbanColumnType) {
    testState.addCardCalls.push({
      columnId: col.id,
      columnTitle: col.title
    });
  }
</script>

<KanbanBoard bind:columns onAddCard={handleAddCard} data-testid="add-card-board" />
