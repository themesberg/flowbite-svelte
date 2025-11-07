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
