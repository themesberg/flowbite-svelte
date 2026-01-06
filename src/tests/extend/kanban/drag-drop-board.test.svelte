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
