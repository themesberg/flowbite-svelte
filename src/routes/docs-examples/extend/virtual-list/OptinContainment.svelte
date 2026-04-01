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
    <div class="card bg-neutral-primary-soft mb-4 rounded-lg border p-4 shadow-sm">
      <img src={item.thumbnail} alt={item.title} loading="lazy" decoding="async" class="mb-3 h-48 w-full rounded-md object-cover" />
      <h3 class="mb-2 text-xl font-bold">{item.title}</h3>
      <p class="text-body mb-4">{item.description}</p>
      <div class="metadata text-body flex items-center justify-between text-sm">
        <span class="font-medium">{item.author}</span>
        <span>{item.date}</span>
      </div>
      <button class="bg-brand hover:bg-brand-strong mt-3 rounded px-4 py-2 text-white">View More</button>
    </div>
  {/snippet}
</VirtualList>
