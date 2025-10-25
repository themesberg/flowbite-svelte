<script lang="ts">
  import { VirtualList, Button, Checkbox } from "flowbite-svelte";
  import { TrashBinSolid } from "flowbite-svelte-icons";

  interface Task {
    id: number;
    text: string;
    completed: boolean;
  }

  let items = $state<Task[]>(Array.from({ length: 2000 }, (_, i) => ({
    id: i + 1,
    text: `Task ${i + 1}`,
    completed: false
  })));

  let selectedCount = $derived(items.filter(item => item.completed).length);

  function toggleItem(id: number) {
    const item = items.find(i => i.id === id);
    if (item) item.completed = !item.completed;
  }

  function deleteItem(id: number) {
    items = items.filter(item => item.id !== id);
  }

  function clearCompleted() {
    items = items.filter(item => !item.completed);
  }
</script>

<div class="space-y-4">
  <div class="flex items-center justify-between">
    <span class="text-sm text-gray-600 dark:text-gray-400">
      {selectedCount} of {items.length} completed
    </span>
    {#if selectedCount > 0}
      <Button size="xs" color="red" onclick={clearCompleted}>
        Clear Completed
      </Button>
    {/if}
  </div>

  <VirtualList {items} minItemHeight={50} height={400} class="border rounded-lg">
    {#snippet children(item, index)}
      {@const task = item as Task}
      <div 
        class="flex items-center gap-3 p-3 border-b hover:bg-gray-50 dark:hover:bg-gray-800"
        style="height:50px"
      >
        <Checkbox 
          checked={task.completed}
          onchange={() => toggleItem(task.id)}
        />
        <span 
          class="flex-1 {task.completed ? 'line-through text-gray-400' : 'text-gray-900 dark:text-white'}"
        >
          {task.text}
        </span>
        <Button 
          size="xs" 
          color="red" 
          class="!p-2"
          onclick={() => deleteItem(task.id)}
        >
          <TrashBinSolid class="w-3 h-3" />
        </Button>
      </div>
    {/snippet}
  </VirtualList>
</div>