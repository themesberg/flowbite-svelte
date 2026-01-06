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
