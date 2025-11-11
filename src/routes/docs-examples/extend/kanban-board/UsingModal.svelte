<script lang="ts">
  import { type KanbanColumnType, KanbanBoard, Modal, Label, Input, Textarea, Button } from "flowbite-svelte";

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

  let formModal = $state(false);
  let currentColumn = $state<KanbanColumnType | null>(null);
  let error = $state("");

  function handleMove() {
    columns = [...columns];
  }

  function handleAddCard(col: KanbanColumnType) {
    currentColumn = col;
    formModal = true;
    error = "";
  }

  function onaction({ action, data }: { action: string; data: FormData }) {
    error = "";

    if (action === "addCard") {
      const title = data.get("title") as string;
      const description = data.get("description") as string;
      const tagsInput = data.get("tags") as string;

      // Validate title
      if (!title?.trim()) {
        error = "Title is required";
        return false;
      }

      // Parse tags
      const tags = tagsInput?.trim()
        ? tagsInput
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
        : undefined;

      // Add card to column
      if (currentColumn) {
        columns = columns.map((column) =>
          column.id === currentColumn!.id
            ? {
                ...column,
                cards: [
                  ...column.cards,
                  {
                    id: crypto.randomUUID(),
                    title: title.trim(),
                    description: description?.trim() || undefined,
                    tags
                  }
                ]
              }
            : column
        );
      }

      // Reset current column
      currentColumn = null;
    }
  }
</script>

<KanbanBoard
  bind:columns
  onMove={handleMove}
  onAddCard={handleAddCard}
  classes={{
    column: "dark:bg-gray-800 shadow-lg",
    card: "hover:shadow-xl transition-shadow",
    cardTitle: "text-blue-600 font-bold",
    addButton: "bg-blue-500 hover:bg-blue-600 text-white dark:text-white",
    cardTags: "text-gray-900"
  }}
/>

<Modal form bind:open={formModal} size="sm" {onaction}>
  <div class="flex flex-col space-y-6">
    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
      Add Card to {currentColumn?.title}
    </h3>

    {#if error}
      <Label color="red">{error}</Label>
    {/if}

    <Label class="space-y-2">
      <span>Title *</span>
      <Input type="text" name="title" placeholder="Enter card title" required />
    </Label>

    <Label class="space-y-2">
      <span>Description</span>
      <Textarea name="description" placeholder="Enter description (optional)" rows={3} class="w-full" />
    </Label>

    <Label class="space-y-2">
      <span>Tags</span>
      <Input type="text" name="tags" placeholder="tag1, tag2, tag3" />
      <p class="text-sm text-gray-500 dark:text-gray-400">Separate tags with commas</p>
    </Label>

    <Button type="submit" value="addCard" class="w-full">Add Card</Button>
  </div>
</Modal>
