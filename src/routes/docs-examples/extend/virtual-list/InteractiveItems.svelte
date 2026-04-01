<script lang="ts">
  import { VirtualList, Button, Checkbox } from "flowbite-svelte";
  import { TrashBinSolid } from "flowbite-svelte-icons";

  interface Task {
    id: number;
    text: string;
    completed: boolean;
  }

  let items = $state<Task[]>(
    Array.from({ length: 2000 }, (_, i) => ({
      id: i + 1,
      text: `Task ${i + 1}`,
      completed: false
    }))
  );

  let selectedCount = $derived(items.filter((item) => item.completed).length);

  function toggleItem(id: number) {
    const item = items.find((i) => i.id === id);
    if (item) item.completed = !item.completed;
  }

  function deleteItem(id: number) {
    items = items.filter((item) => item.id !== id);
  }

  function clearCompleted() {
    items = items.filter((item) => !item.completed);
  }
</script>

<div class="space-y-4">
  <div class="flex items-center justify-between">
    <span class="text-body text-sm">
      {selectedCount} of {items.length} completed
    </span>
    {#if selectedCount > 0}
      <Button size="xs" onclick={clearCompleted}>Clear Completed</Button>
    {/if}
  </div>

  <VirtualList {items} minItemHeight={50} height={400} class="rounded-lg border">
    {#snippet children(item, _index)}
      {@const task = item as Task}
      <div class="hover:bg-neutral-secondary-soft flex items-center gap-3 border-b p-3" style="height:50px">
        <Checkbox checked={task.completed} onchange={() => toggleItem(task.id)} />
        <span class="flex-1 {task.completed ? 'text-fg-disabled line-through' : 'text-heading'}">
          {task.text}
        </span>
        <Button size="xs" class="!p-2" onclick={() => deleteItem(task.id)}>
          <TrashBinSolid class="h-3 w-3" />
        </Button>
      </div>
    {/snippet}
  </VirtualList>
</div>
