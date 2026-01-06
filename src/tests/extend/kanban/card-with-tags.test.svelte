<script lang="ts">
  import { KanbanBoard } from "$lib";
  import type { KanbanColumnType } from "$lib/types";

  let columns: KanbanColumnType[] = $state([
    {
      id: "tags-todo",
      title: "To Do",
      cards: [
        {
          id: "tags-card-1",
          title: "Frontend Task",
          description: "Build user interface",
          tags: ["urgent", "frontend", "ui"]
        },
        {
          id: "tags-card-2",
          title: "Backend API",
          description: "Create REST endpoints",
          tags: ["backend", "api", "database"]
        }
      ]
    },
    {
      id: "tags-progress",
      title: "In Progress",
      cards: [
        {
          id: "tags-card-3",
          title: "Testing",
          description: "Write unit tests",
          tags: ["testing", "quality"]
        }
      ]
    }
  ]);
</script>

<KanbanBoard bind:columns data-testid="card-with-tags-board" />
