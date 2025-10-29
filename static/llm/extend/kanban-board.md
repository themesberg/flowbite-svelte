# Svelte Kanban Board


## Setup

```svelte
<script lang="ts">
  import { type KanbanCardType, type KanbanColumnType, KanbanBoard } from  'flowbite-svelte';
</script>
```
## Default Kanban Board
Pass columns array with bindable prop, handle onMove and onAddCard callbacks. Supports drag-and-drop between columns with visual feedback.

```svelte
<script lang="ts">
  import { type KanbanCardType, type KanbanColumnType, KanbanBoard } from "flowbite-svelte";

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

    // The KanbanBoard component already mutated the columns.
    // We just need to trigger reactivity by creating a new reference
    columns = [...columns];

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

<div class="bg-gray-100 py-4 md:py-8">
  <div class="mx-auto max-w-7xl px-2 sm:px-4">
    <div class="mb-4 md:mb-6">
      <h1 class="text-2xl font-bold text-gray-900 md:text-3xl">Project Kanban Board</h1>
      <p class="mt-1 text-sm text-gray-600 md:mt-2 md:text-base">Drag cards between columns to update their status</p>
    </div>

    <KanbanBoard bind:columns onMove={handleMove} onAddCard={handleAddCard} />

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
```

## Custom Styling

```svelte
<script lang="ts">
  import { type KanbanColumnType, KanbanBoard } from "flowbite-svelte";

  let columns = $state<KanbanColumnType[]>([
    {
      id: "backlog",
      title: "Backlog",
      color: "#6b7280",
      cards: [{ id: 1, title: "Research user feedback", tags: ["research"] }]
    },
    {
      id: "active",
      title: "Active Sprint",
      color: "#3b82f6",
      cards: [{ id: 2, title: "Build feature X", description: "Sprint 24", tags: ["dev", "high-priority"] }]
    },
    {
      id: "done",
      title: "Completed",
      color: "#22c55e",
      cards: []
    }
  ]);

  function handleMove() {
    columns = [...columns];
  }

  function handleAddCard(col: KanbanColumnType) {
    const title = prompt(`Add card to ${col.title}:`);
    if (!title?.trim()) return;

    columns = columns.map((column) => (column.id === col.id ? { ...column, cards: [...column.cards, { id: crypto.randomUUID(), title: title.trim() }] } : column));
  }
</script>

<KanbanBoard
  bind:columns
  onMove={handleMove}
  onAddCard={handleAddCard}
  classes={{
    column: "bg-white shadow-lg",
    card: "hover:shadow-xl transition-shadow",
    cardTitle: "text-blue-600 font-bold",
    addButton: "bg-blue-500 hover:bg-blue-600 text-white"
  }}
/>
```

## Using LocalStorage

```svelte
<script lang="ts">
  import { type KanbanCardType, type KanbanColumnType, KanbanBoard } from "flowbite-svelte";
  import { onMount } from "svelte";

  const STORAGE_KEY = "my-kanban-board";

  let columns = $state<KanbanColumnType[]>([
    { id: "todo", title: "To Do", color: "#ef4444", cards: [] },
    { id: "doing", title: "Doing", color: "#f59e0b", cards: [] },
    { id: "done", title: "Done", color: "#10b981", cards: [] }
  ]);

  // Load from localStorage on mount
  onMount(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        columns = JSON.parse(saved);
      } catch (e) {
        console.error("Failed to load saved board:", e);
      }
    }
  });

  // Save to localStorage whenever columns change
  $effect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(columns));
  });

  function handleMove(card: KanbanCardType, from: KanbanColumnType, to: KanbanColumnType) {
    console.log(`Moved "${card.title}" from "${from.title}" to "${to.title}"`);
    columns = [...columns]; // Trigger reactivity and persistence (card already moved by component)
  }

  function handleAddCard(col: KanbanColumnType) {
    const title = prompt(`New task for ${col.title}:`);
    if (!title?.trim()) return;

    columns = columns.map((column) =>
      column.id === col.id
        ? {
            ...column,
            cards: [
              ...column.cards,
              {
                id: Date.now(),
                title: title.trim(),
                tags: ["new"]
              }
            ]
          }
        : column
    );
  }

  function clearBoard() {
    if (confirm("Clear all cards? This cannot be undone.")) {
      columns = columns.map((col) => ({ ...col, cards: [] }));
    }
  }
</script>

<div class="p-4">
  <div class="mb-4 flex items-center justify-between">
    <h1 class="text-2xl font-bold">My Tasks</h1>
    <button onclick={clearBoard} class="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600">Clear Board</button>
  </div>

  <KanbanBoard bind:columns onMove={handleMove} onAddCard={handleAddCard} />
</div>
```

## With API Integration (Demo Only)

**⚠️ Note:** The API endpoints in this example use simple in-memory storage for demonstration purposes. This is **not suitable for production** as it has limitations:
- Data resets on server restart
- Not safe for concurrent requests
- Doesn't scale across multiple server instances

For production, use a proper database (PostgreSQL, MongoDB, Supabase, etc.) with proper transaction handling.


```svelte
<script lang="ts">
  import { type KanbanCardType, type KanbanColumnType, KanbanBoard } from "flowbite-svelte";
  import { onMount } from "svelte";

  let columns = $state<KanbanColumnType[]>([]);
  let loading = $state(true);
  let error = $state<string | null>(null);

  onMount(async () => {
    try {
      const response = await fetch("/api/kanban/columns");
      if (!response.ok) throw new Error("Failed to load board");
      columns = await response.json();
    } catch (e) {
      error = e instanceof Error ? e.message : "Unknown error";
    } finally {
      loading = false;
    }
  });

  async function handleMove(card: KanbanCardType, from: KanbanColumnType, to: KanbanColumnType) {
    // Trigger reactivity to reflect the card move performed by KanbanBoard
    columns = [...columns];

    try {
      const response = await fetch("/api/kanban/move", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cardId: card.id,
          fromColumnId: from.id,
          toColumnId: to.id
        })
      });

      if (!response.ok) throw new Error("Failed to move card");
    } catch (e) {
      // Rollback on error
      alert("Failed to move card. Please try again.");
      // Reload from server
      const response = await fetch("/api/kanban/columns");
      columns = await response.json();
    }
  }

  async function handleAddCard(col: KanbanColumnType) {
    const title = prompt(`Add card to ${col.title}:`);
    if (!title?.trim()) return;

    try {
      const response = await fetch("/api/kanban/cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          columnId: col.id
        })
      });

      if (!response.ok) throw new Error("Failed to create card");

      const newCard = await response.json();

      columns = columns.map((column) => (column.id === col.id ? { ...column, cards: [...column.cards, newCard] } : column));
    } catch (e) {
      alert("Failed to create card. Please try again.");
    }
  }
</script>

{#if loading}
  <div class="flex h-64 items-center justify-center">
    <div class="text-gray-600">Loading board...</div>
  </div>
{:else if error}
  <div class="rounded border border-red-200 bg-red-50 p-4 text-red-800">
    Error: {error}
  </div>
{:else}
  <KanbanBoard bind:columns onMove={handleMove} onAddCard={handleAddCard} />
{/if}
```
