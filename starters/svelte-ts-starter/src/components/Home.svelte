<script>
  import { format } from "timeago.js";
  import Card from "./Card.svelte";
  import { blogs } from "../data";
</script>

<h1 class="text-3xl dark:text-white">Svelte TS Starter</h1>
<p class="text-xl dark:text-white">Svelte + Vite + Typescript + TailwindCSS + Flowbite-Svelte + Svelte-Spa-Router</p>
{#each blogs as blog, i}
  <Card
    title={blog.title}
    description={blog.content}
    image={blog.image}
    publishDate={format(blog.publishDate)}
  />
{/each}
