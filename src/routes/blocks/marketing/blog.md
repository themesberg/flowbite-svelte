---
layout: componentLayout
title: Svelte Blog Sections - Flowbite Svelte Blocks
breadcrumb_title: Blog Sections
no_of_components: 1 free component
dir: marketing
pkg: Flowbite Svelte Blocks
description: Get started with a collection of website sections related to the blog area of your website including blog posts, article pages, comments, categories, and more.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  const components = 'ArticleAuthor, ArticleBody, ArticleHead, ArticleWrapper, BlogHead, BlogBodyWrapper, Section'
</script>

## Default blog card

Use this example to show a preview of a blog post including the title, description, category, author, publication date, and CTA link.

```svelte example
<script>
  import { Section, ArticleAuthor, ArticleBody, ArticleHead, ArticleWrapper, BlogHead, BlogBodyWrapper } from "flowbite-svelte-blocks";
  import { VideoCameraSolid, ArrowRightOutline, NewspaperSolid } from "flowbite-svelte-icons";
</script>

<Section name="blog">
  <BlogHead>
    {#snippet h2()}Our Blog{/snippet}
    <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
  </BlogHead>
  <BlogBodyWrapper>
    <ArticleWrapper>
      <ArticleHead>
        <span class="bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-800 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium">
          <VideoCameraSolid size="xs" class="mr-1" />
          Tutorial
        </span>
        <span class="text-sm">14 days ago</span>
      </ArticleHead>
      <ArticleBody>
        {#snippet h2()}<a href="/">How to quickly deploy a static website</a>{/snippet}
        {#snippet paragraph()}
          <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
        {/snippet}
      </ArticleBody>
      <ArticleAuthor>
        {#snippet author()}
          <img class="h-7 w-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese Leos avatar" />
          <span class="font-medium dark:text-white">Jese Leos</span>
        {/snippet}
        <a href="/" class="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium hover:underline">
          Read more
          <ArrowRightOutline size="sm" class="ml-2" />
        </a>
      </ArticleAuthor>
    </ArticleWrapper>

    <ArticleWrapper>
      <ArticleHead>
        <span class="bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-800 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium">
          <NewspaperSolid size="xs" class="mr-1" />
          Article
        </span>
        <span class="text-sm">14 days ago</span>
      </ArticleHead>
      <ArticleBody>
        {#snippet h2()}<a href="/">Our first project with React</a>{/snippet}
        {#snippet paragraph()}
          <p class="mb-5 font-light text-gray-500 dark:text-gray-400">Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.</p>
        {/snippet}
      </ArticleBody>
      <ArticleAuthor>
        {#snippet author()}
          <img class="h-7 w-7 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green avatar" />
          <span class="font-medium dark:text-white">Bonnie Green</span>
        {/snippet}
        <a href="/" class="text-primary-600 dark:text-primary-500 inline-flex items-center font-medium hover:underline">
          Read more
          <ArrowRightOutline size="sm" class="ml-2" />
        </a>
      </ArticleAuthor>
    </ArticleWrapper>
  </BlogBodyWrapper>
</Section>
```

<CompoAttributesViewer {components}/>
