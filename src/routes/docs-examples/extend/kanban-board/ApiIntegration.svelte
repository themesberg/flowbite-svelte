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
