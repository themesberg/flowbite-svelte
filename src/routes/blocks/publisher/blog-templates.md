---
layout: blockComponentLayout
title: Svelte Blog Templates - Flowbite Svelte Blocks
breadcrumb_title: Blog Templates
no_of_components: 1 free component
dir: publisher
description: Get started with a collection of Tailwind CSS blog templates, themes, and article layouts to publish content crafted with built-in SEO optimization.
---

## Default blog template

Use this free blog template to show the content of an article using the Flowbite Typography plugin including the author, post date, and a comments section.

```svelte example
<script>
  import { Section, BlogTemplate, Comment, CommentItem } from 'flowbite-svelte-blocks';
  import { Button, Textarea, Label, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { DotsHorizontalOutline } from 'flowbite-svelte-icons';
  import blog from './blog-example.json';
  const comments = [
    {
      id: "comment1",
      commenter: {
        name: "Michael Gough",
        profilePicture: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
      },
      date: "Feb. 8, 2022",
      content: "Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.",
      replies: [
        {
          id: "reply1",
          commenter: {
            name: "Jese Leos",
            profilePicture: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
          },
          date: "Feb. 12, 2022",
          content: "Much appreciated! Glad you liked it ☺️",
        },
      ],
    },
    {
      id: "comment2",
      commenter: {
        name: "Bonnie Green",
        profilePicture: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
      },
      date: "Mar. 12, 2022",
      content: "The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.",
      replies: [],
    },
    {
      id: "comment3",
      commenter: {
        name: "Helene Engels",
        profilePicture: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
      },
      date: "Jun. 23, 2022",
      content: "Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.",
      replies: [],
    },
    // Add more comments and replies here
  ];

</script>

<Section name='blogTemplate' classSection='pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900'>
  <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
    <BlogTemplate {blog} classArticle='dark:text-white'/>

    <Section name='comment' classSection='not-format' classDiv="px-0">
      <Comment title="Discussion (20)">
        <form class="mb-6">
          <Label for="comment" class="sr-only">Your comment</Label>
          <Textarea id="comment" rows="6" class="mb-4"
              placeholder="Write a comment..." required>
          </Textarea>
          <Button type="submit" class="px-4 text-xs font-medium">
            Post comment
          </Button>
        </form>
        {#each comments as comment, i}
          <CommentItem {comment} articleClass ={ i !== 0 ? 'border-t':''}>
            <svelte:fragment slot="dropdownMenu">
          <DotsHorizontalOutline class="dots-menu dark:text-white" />
          <Dropdown triggeredBy=".dots-menu">
            <DropdownItem>Edit</DropdownItem>
            <DropdownItem>Remove</DropdownItem>
            <DropdownItem>Report</DropdownItem>
          </Dropdown>
        </svelte:fragment>
          </CommentItem>
        {/each}
      </Comment>
    </Section>
  </article>
</Section>
```
