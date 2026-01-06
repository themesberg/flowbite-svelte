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
