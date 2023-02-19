<script>
  import { link } from "svelte-spa-router";
  import urlSlug from "url-slug";
  export let title, description, image, publishDate;
</script>

<div class="flex py-8 px-4">
  <img src={image} alt="img" class="rounded-md max-w-xs mr-4" />

  <div>
    <h2 class="mb-2 text-2xl font-medium dark:text-white">
      <a href={`/article/${urlSlug(title)}`} use:link>{title}</a>
    </h2>
    <p class="my-2 text-lg dark:text-white">
      {description.substring(0, 180)}...
    </p>
    {#if publishDate}
      <p class="text-lg dark:text-white">Published: {publishDate}</p>
    {/if}
  </div>
</div>
