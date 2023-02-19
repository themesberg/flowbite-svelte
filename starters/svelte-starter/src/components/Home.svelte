<script>
  import { format } from "timeago.js";
  import Card from "./Card.svelte";
  import { blogs } from "../data.js";
</script>

<h1 class="text-3xl dark:text-white mb-4">Svelte Starter</h1>
<p class="text-xl dark:text-white">Svelte + Vite + TailwindCSS + Flowbite-Svelte + Svelte-Spa-Router</p>
{#each blogs as blog, i}
  <Card
    title={blog.title}
    description={blog.content}
    image={blog.image}
    publishDate={format(blog.publishDate)}
  />
{/each}

