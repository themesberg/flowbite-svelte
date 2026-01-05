<script lang="ts">
  import { KanbanBoard } from "$lib";
  import type { KanbanColumnType } from "$lib/types";

  let columns: KanbanColumnType[] = $state([
    {
      id: "todo",
      title: "To Do",
      cards: [
        {
          id: "card-1",
          title: "Task 1",
          description: "Description for task 1",
          tags: ["urgent", "frontend"]
        },
        {
          id: "card-2",
          title: "Task 2",
          description: "Description for task 2",
          tags: ["backend"]
        }
      ]
    },
    {
      id: "in-progress",
      title: "In Progress",
      cards: [
        {
          id: "card-3",
          title: "Task 3",
          description: "Description for task 3"
        }
      ]
    },
    {
      id: "done",
      title: "Done",
      cards: [
        {
          id: "card-4",
          title: "Task 4",
          description: "Description for task 4",
          tags: ["completed"]
        }
      ]
    }
  ]);
</script>

<KanbanBoard bind:columns data-testid="kanban-board" />
