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
               {user.status === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : user.status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}"
      >
        {user.status}
      </span>
    </div>
  {/snippet}
</VirtualList>
