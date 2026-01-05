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

{#each columns as column (column.id)}
  <div data-testid={`column-${column.id}`} data-part="column" role="group" aria-label={`${column.title} column drop zone`}>
    <h2 data-testid={`column-title-${column.id}`} data-part="title">{column.title}</h2>
    <div data-testid={`card-list-${column.id}`} data-part="list" role="list" aria-label={`${column.title} cards`}>
      {#each column.cards as card (card.id)}
        <article data-testid={`card-${card.id}`} data-scope="kanban-card" data-part="base" role="listitem" draggable="true" aria-grabbed="false" aria-label={card.title}>
          <p data-testid={`card-${card.id}-title`} data-part="title">{card.title}</p>
          {#if card.description}
            <p data-testid={`card-${card.id}-description`} data-part="description">{card.description}</p>
          {/if}
          {#if card.tags && card.tags.length > 0}
            <div data-testid={`card-${card.id}-tags`} data-part="tags">
              {#each card.tags as tag, i (i)}
                <span data-testid={`card-${card.id}-tag-${i}`} data-part="tag">{tag}</span>
              {/each}
            </div>
          {/if}
        </article>
      {/each}
    </div>
    <button data-testid={`add-card-btn-${column.id}`} data-part="button" aria-label={`Add card to ${column.title}`}>+ Add card</button>
  </div>
{/each}
