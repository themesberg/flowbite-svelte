<script lang="ts">
  import Button from "../buttons/Button.svelte";
  import Rating from "./Rating.svelte";
  import type { RatingCommentProps } from "$lib/types";

  let { children, evaluation, helpfullink, abuselink, comment }: RatingCommentProps = $props();
</script>

<article>
  <div class="mb-4 flex items-center space-x-4 rtl:space-x-reverse">
    <img class="h-10 w-10 rounded-full" src={comment.user.img.src} alt={comment.user.img.alt} />
    <div class="text-heading space-y-1 font-medium">
      <p>
        {comment.user.name}
        <time datetime="2014-08-16 19:00" class="text-body block text-sm">
          {comment.user.joined}
        </time>
      </p>
    </div>
  </div>
  <div class="mb-1 flex items-center">
    <Rating total={comment.total} rating={comment.rating}>
      {#snippet text()}
        <p class="text-body ms-2 pt-1 text-sm font-medium">
          {comment.rating} out of {comment.total}
        </p>
      {/snippet}
    </Rating>
    {#if comment.heading}
      <h3 class="text-heading ms-2 text-sm font-semibold">
        {comment.heading}
      </h3>
    {/if}
  </div>
  {#if comment.address || comment.datetime}
    <footer class="text-body mb-5 text-sm">
      <p>Reviewed in {comment.address} on {comment.datetime}</p>
    </footer>
  {/if}

  {@render children()}

  <aside>
    <p class="text-body mt-1 text-xs">
      {#if evaluation}
        {@render evaluation()}
      {/if}
    </p>
    {#if helpfullink || abuselink}
      <div class="divide-default mt-3 flex items-center space-x-3 divide-x rtl:space-x-reverse rtl:divide-x-reverse">
        {#if helpfullink}
          <Button size="xs" href="/" color="dark">Helpful</Button>
        {/if}
        {#if abuselink}
          <a href={abuselink} class="text-fg-brand ps-4 text-sm font-medium hover:underline">Report abuse</a>
        {/if}
      </div>
    {/if}
  </aside>
</article>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[RatingCommentProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1252)
## Props
@prop children
@prop evaluation
@prop helpfullink
@prop abuselink
@prop comment
-->
