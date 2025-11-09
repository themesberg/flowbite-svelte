<script lang="ts">
  import { type KanbanCardType, type KanbanColumnType, KanbanBoard, Heading, P } from "flowbite-svelte";

  let columns = $state<KanbanColumnType[]>([
    {
      id: "todo",
      title: "To Do",
      color: "#ef4444",
      cards: [
        {
          id: 1,
          title: "Design new landing page",
          description: "Create mockups for the homepage redesign",
          tags: ["design", "urgent"]
        },
        {
          id: 2,
          title: "Update documentation",
          description: "Add API examples to the docs",
          tags: ["docs"]
        }
      ]
    },
    {
      id: "in-progress",
      title: "In Progress",
      color: "#f59e0b",
      cards: [
        {
          id: 3,
          title: "Implement authentication",
          description: "Add JWT-based auth system",
          tags: ["backend", "security"]
        }
      ]
    },
    {
      id: "review",
      title: "Review",
      color: "#8b5cf6",
      cards: [
        {
          id: 4,
          title: "Code review: Payment flow",
          tags: ["review"]
        }
      ]
    },
    {
      id: "done",
      title: "Done",
      color: "#10b981",
      cards: [
        {
          id: 5,
          title: "Setup CI/CD pipeline",
          description: "Configure GitHub Actions",
          tags: ["devops"]
        },
        {
          id: 6,
          title: "Database migration",
          tags: ["backend", "completed"]
        }
      ]
    }
  ]);

  function handleMove(card: KanbanCardType, from: KanbanColumnType, to: KanbanColumnType) {
    console.log(`Moved "${card.title}" from "${from.title}" to "${to.title}"`);

    // Here you could make an API call to persist the change
    // await fetch('/api/cards/move', { method: 'POST', body: JSON.stringify({ cardId: card.id, fromId: from.id, toId: to.id }) })
  }

  function handleAddCard(col: KanbanColumnType) {
    // Note: Using prompt() for demo - use proper form UI in production
    const cardTitle = prompt(`Add a new card to "${col.title}":`);
    if (!cardTitle?.trim()) return;

    const newCard: KanbanCardType = {
      // Note: Using timestamp for demo - use proper ID generation in production
      id: Date.now(),
      title: cardTitle.trim(),
      tags: ["new"]
    };

    columns = columns.map((column) => (column.id === col.id ? { ...column, cards: [...column.cards, newCard] } : column));

    // Here you could make an API call to persist the new card
    // await fetch('/api/cards', { method: 'POST', body: JSON.stringify(newCard) })
  }
</script>

<div class="bg-gray-100 dark:bg-gray-800 py-4 md:py-8">
  <div class="mx-auto max-w-7xl px-2 sm:px-4">
    <div class="mb-4 md:mb-6">
      <Heading tag="h1" class="text-2xl md:text-3xl">Project Kanban Board</Heading>
      <P class="mt-1 text-sm text-gray-600 md:mt-2 md:text-base">Drag cards between columns to update their status</P>
    </div>

    <KanbanBoard 
      bind:columns 
      onMove={handleMove} 
      onAddCard={handleAddCard}
    />

    <!-- Optional: Show stats -->
    <div class="mt-6 grid grid-cols-2 gap-3 md:mt-8 md:grid-cols-4 md:gap-4">
      {#each columns as col (col.id)}
        <div class="rounded-lg bg-white p-3 shadow-sm md:p-4">
          <div class="text-xs text-gray-600 md:text-sm">{col.title}</div>
          <div class="mt-1 text-xl font-bold text-gray-900 md:text-2xl">{col.cards.length}</div>
        </div>
      {/each}
    </div>
  </div>
</div>
