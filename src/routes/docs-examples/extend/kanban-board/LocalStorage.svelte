<script lang="ts">
  import { type KanbanCardType, type KanbanColumnType, KanbanBoard, Button } from "flowbite-svelte";
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
    <h1 class="text-2xl font-bold dark:text-white">My Tasks</h1>
    <Button onclick={clearBoard} >Clear Board</Button>
  </div>

  <KanbanBoard bind:columns onMove={handleMove} onAddCard={handleAddCard} 
    classes={{
    column: "dark:bg-gray-800 shadow-lg",
    card: "hover:shadow-xl transition-shadow",
    cardTitle: "dark:text-white font-bold",
    addButton: "bg-primary-500 hover:bg-primary-600 text-white dark:text-white"
  }}
  />
</div>
