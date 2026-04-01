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
             {index % 2 === 0 ? 'bg-neutral-primary-soft' : 'bg-neutral-secondary-soft'}
             hover:bg-brand-softer"
      style="height:70px"
    >
      <div class="flex-1">
        <div class="text-heading font-medium">{user.name}</div>
        <div class="text-body text-sm">{user.email}</div>
      </div>
      <span
        class="rounded-full px-3 py-1 text-xs font-semibold
               {user.status === 'active'
          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
          : user.status === 'pending'
            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
            : 'bg-neutral-tertiary text-heading'}"
      >
        {user.status}
      </span>
    </div>
  {/snippet}
</VirtualList>
