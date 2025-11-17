# Svelte Virtual List


## Setup

```svelte
<script lang="ts">
  import { VirtualList } from "flowbite-svelte";
</script>
```

## Default single and multiple
Basic virtual list displaying 5,000 items with variable text lengths. Only visible items are rendered for optimal performance.

```svelte
<script lang="ts">
  import { VirtualList } from "flowbite-svelte";

  function getRandomLorem(minWords: number, maxWords: number) {
    const lorem = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua".split(" ");
    const wordCount = Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords;
    let result = [];
    for (let i = 0; i < wordCount; i++) {
      const word = lorem[Math.floor(Math.random() * lorem.length)];
      result.push(word);
    }
    return result.join(" ");
  }

  const items = Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}: ${getRandomLorem(10, 70)}`);
</script>

<VirtualList {items} minItemHeight={40} height={400}>
  {#snippet children(item, index)}
    <div class="border-b p-2 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">
      {index + 1}: {item}
    </div>
  {/snippet}
</VirtualList>
```

## Jump to item
Demonstrates programmatic scrolling with buttons to jump to specific items by index.

```svelte
<script lang="ts">
  import { VirtualList, Button } from "flowbite-svelte";

  const items = Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}`);
  let scrollToFn: ((index: number) => void) | undefined;

  function jumpToItem(index: number) {
    scrollToFn?.(index);
  }
</script>

<div class="space-y-4">
  <Button onclick={() => jumpToItem(2499)}>Jump to item 2500</Button>
  <Button onclick={() => jumpToItem(0)}>Jump to top item</Button>
  <VirtualList {items} minItemHeight={40} height={400} scrollToIndex={(fn) => (scrollToFn = fn)}>
    {#snippet children(item, index)}
      <div class="h-[40px] border-b p-2 leading-[40px] text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">
        {index + 1}: {item}
      </div>
    {/snippet}
  </VirtualList>
</div>
```

## Variable Item Heights

Dynamically adjust item heights based on content using the `getItemHeight` prop.

```svelte
<!-- VariableHeights.svelte -->
<script lang="ts">
  import { VirtualList } from "flowbite-svelte";

  interface Item {
    title: string;
    description: string;
    type: "small" | "medium" | "large";
  }

  const items: Item[] = Array.from({ length: 1000 }, (_, i) => {
    const types: Array<"small" | "medium" | "large"> = ["small", "medium", "large"];
    const type = types[i % 3];
    return {
      title: `Item ${i + 1}`,
      description:
        type === "small"
          ? "Short description"
          : type === "medium"
            ? "Medium length description with more details about this item"
            : "Large description with lots of content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. This item has much more information to display and takes up more vertical space.",
      type
    };
  });

  function getItemHeight(item: unknown): number {
    const typedItem = item as Item;
    return typedItem.type === "small" ? 100 : typedItem.type === "medium" ? 90 : 130;
  }
</script>

<VirtualList {items} minItemHeight={100} {getItemHeight} height={400}>
  {#snippet children(item, _index)}
    {@const typedItem = item as Item}
    <div class="border-b p-3 hover:bg-gray-50 dark:hover:bg-gray-800" style="height:{getItemHeight(typedItem)}px">
      <div class="font-semibold text-gray-900 dark:text-white">{typedItem.title}</div>
      <div class="mt-1 text-sm text-gray-600 dark:text-gray-400">{typedItem.description}</div>
      <div class="mt-1 text-xs text-gray-500">Height: {getItemHeight(typedItem)}px</div>
    </div>
  {/snippet}
</VirtualList>
```

## Custom Styling

Apply custom styles, alternating row colors, and hover effects for enhanced visual design.

```svelte
<!-- CustomStyling.svelte -->
<script lang="ts">
  import { VirtualList } from "flowbite-svelte";

  interface User {
    id: number;
    name: string;
    email: string;
    status: "active" | "pending" | "inactive";
  }

  const items: User[] = Array.from({ length: 2000 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    status: (i % 3 === 0 ? "active" : i % 3 === 1 ? "pending" : "inactive") as "active" | "pending" | "inactive"
  }));
</script>

<VirtualList {items} minItemHeight={70} height={400} class="rounded-lg border">
  {#snippet children(item, index)}
    {@const user = item as User}
    <div
      class="flex items-center justify-between border-b p-4 transition-colors
             {index % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}
             hover:bg-blue-50 dark:hover:bg-blue-900/20"
      style="height:70px"
    >
      <div class="flex-1">
        <div class="font-medium text-gray-900 dark:text-white">{user.name}</div>
        <div class="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
      </div>
      <span
        class="rounded-full px-3 py-1 text-xs font-semibold
               {user.status === 'active'
          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
          : user.status === 'pending'
            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}"
      >
        {user.status}
      </span>
    </div>
  {/snippet}
</VirtualList>
```

## Loading State

Handle empty states and loading indicators while data is being fetched.

```svelte
<script lang="ts">
  import { VirtualList, Button, Spinner } from "flowbite-svelte";

  let items: string[] = $state([]);
  let isLoading = $state(false);

  async function loadItems() {
    isLoading = true;
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    items = Array.from({ length: 3000 }, (_, i) => `Item ${i + 1}`);
    isLoading = false;
  }
</script>

<div class="space-y-4">
  <Button onclick={loadItems} disabled={isLoading}>
    {#if isLoading}
      <Spinner class="mr-2" size="4" />
      Loading...
    {:else}
      Load Items
    {/if}
  </Button>

  {#if items.length === 0 && !isLoading}
    <div class="rounded-lg border p-8 text-center text-gray-500 dark:text-gray-400" style="height:400px">
      <div class="mb-4 text-6xl">📋</div>
      <p class="text-lg font-medium">No items yet</p>
      <p class="text-sm">Click the button above to load items</p>
    </div>
  {:else if isLoading}
    <div class="flex items-center justify-center rounded-lg border p-8" style="height:400px">
      <div class="text-center">
        <Spinner size="12" />
        <p class="mt-4 text-gray-600 dark:text-gray-400">Loading items...</p>
      </div>
    </div>
  {:else}
    <VirtualList {items} minItemHeight={40} height={400} class="rounded-lg border">
      {#snippet children(item, index)}
        <div class="border-b p-2 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">
          {index + 1}: {item}
        </div>
      {/snippet}
    </VirtualList>
  {/if}
</div>
```

## Interactive Items

Add checkboxes, buttons, and other interactive elements to virtual list items.

```svelte
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
    <span class="text-sm text-gray-600 dark:text-gray-400">
      {selectedCount} of {items.length} completed
    </span>
    {#if selectedCount > 0}
      <Button size="xs" color="red" onclick={clearCompleted}>Clear Completed</Button>
    {/if}
  </div>

  <VirtualList {items} minItemHeight={50} height={400} class="rounded-lg border">
    {#snippet children(item, _index)}
      {@const task = item as Task}
      <div class="flex items-center gap-3 border-b p-3 hover:bg-gray-50 dark:hover:bg-gray-800" style="height:50px">
        <Checkbox checked={task.completed} onchange={() => toggleItem(task.id)} />
        <span class="flex-1 {task.completed ? 'text-gray-400 line-through' : 'text-gray-900 dark:text-white'}">
          {task.text}
        </span>
        <Button size="xs" color="red" class="!p-2" onclick={() => deleteItem(task.id)}>
          <TrashBinSolid class="h-3 w-3" />
        </Button>
      </div>
    {/snippet}
  </VirtualList>
</div>
```

## Large Dataset Performance

Demonstrates smooth scrolling and rendering performance with 100,000 items.

```svelte
<!-- LargeDataset.svelte -->
<script lang="ts">
  import { VirtualList, Badge } from "flowbite-svelte";

  interface Record {
    id: number;
    title: string;
    value: number;
  }

  const ITEM_COUNT = 100000;
  const items: Record[] = Array.from({ length: ITEM_COUNT }, (_, i) => ({
    id: i + 1,
    title: `Record ${i + 1}`,
    value: Math.floor(Math.random() * 10000)
  }));

  let renderTime = $state(0);
  let startTime: number;

  function measureRenderStart() {
    startTime = performance.now();
  }

  function measureRenderEnd() {
    renderTime = performance.now() - startTime;
  }

  $effect(() => {
    measureRenderStart();
    return () => measureRenderEnd();
  });
</script>

<div class="space-y-4">
  <div class="flex items-center gap-4 text-sm">
    <Badge large color="blue">
      {ITEM_COUNT.toLocaleString()} items
    </Badge>
    {#if renderTime > 0}
      <span class="text-gray-600 dark:text-gray-400">
        Rendered in {renderTime.toFixed(2)}ms
      </span>
    {/if}
  </div>

  <VirtualList {items} minItemHeight={45} height={500} class="rounded-lg border">
    {#snippet children(item, _index)}
      {@const record = item as Record}
      <div class="flex items-center justify-between border-b p-3 hover:bg-gray-50 dark:hover:bg-gray-800" style="height:45px">
        <span class="text-gray-900 dark:text-white">{record.title}</span>
        <span class="font-mono text-sm text-gray-600 dark:text-gray-400">
          ${record.value.toLocaleString()}
        </span>
      </div>
    {/snippet}
  </VirtualList>

  <p class="text-xs text-gray-500 dark:text-gray-400">💡 Try scrolling through 100,000 items - notice how smooth it remains!</p>
</div>
```

## CSS containment to allow better optimization
CSS containment tells the browser that an element's internal layout is independent from the rest of the page, allowing better optimization and prevents layout thrashing when items are added/removed from the virtualized viewport. The browser can skip rendering work for contained elements that are off-screen.

### No containment

```svelte
<script lang="ts">
  import { VirtualList } from "flowbite-svelte";
  const items = Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}`);
</script>

<VirtualList {items}>
  {#snippet children(item, index)}
    <div class="border-b p-3 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">{index + 1}: {item}</div>
  {/snippet}
</VirtualList>
```

### With containment

Note: Containment may change behavior of position: sticky, overflow, and z-index stacking contexts inside items. 

Enable with `<VirtualList contained …>` or override via `classes.item`. 

```svelte
<script lang="ts">
  import { VirtualList } from "flowbite-svelte";
  interface Article {
    id: number;
    thumbnail: string;
    title: string;
    description: string;
    author: string;
    date: string;
  }

  const items: Article[] = Array.from({ length: 5000 }, (_, i) => ({
    id: i + 1,
    thumbnail: `https://picsum.photos/seed/${i}/400/300`,
    title: `Article ${i + 1}: ${["Tech Innovations", "Design Trends", "Web Development", "AI Insights", "Product Updates"][i % 5]}`,
    description: `This is a detailed description for article ${i + 1}. It contains interesting information about the topic and provides valuable insights for readers.`,
    author: ["Alice Johnson", "Bob Smith", "Carol Williams", "David Brown", "Emma Davis"][i % 5],
    date: new Date(2024, 0, 1 + (i % 365)).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    })
  }));
</script>

<VirtualList {items} contained minItemHeight={200} height={600}>
  {#snippet children(item: Article, _i)}
    <div class="card mb-4 rounded-lg border bg-white p-4 shadow-sm">
      <img src={item.thumbnail} alt={item.title} loading="lazy" decoding="async" class="mb-3 h-48 w-full rounded-md object-cover" />
      <h3 class="mb-2 text-xl font-bold">{item.title}</h3>
      <p class="mb-4 text-gray-600">{item.description}</p>
      <div class="metadata flex items-center justify-between text-sm text-gray-500">
        <span class="font-medium">{item.author}</span>
        <span>{item.date}</span>
      </div>
      <button class="mt-3 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">View More</button>
    </div>
  {/snippet}
</VirtualList>
```

### Override via classes

```svelte
<script lang="ts">
  import { VirtualList } from "flowbite-svelte";
  const items = Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}`);
</script>

<VirtualList {items} classes={{ item: "[contain:layout_style_paint] h-12" }}>
  {#snippet children(item, index)}
    <div class="p-3 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">
      {index + 1}: {item}
    </div>
  {/snippet}
</VirtualList>
```


## Component data

### VirtualList

#### Types

[VirtualListProps<T>](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2092)

#### Props

- items: []
- minItemHeight: 50
- height: 400
- overscan: 5
- getItemHeight
- scrollToIndex
- children
- ariaLabel: "Virtual scrolling list"
- class: className
- classes
- contained: false

