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
