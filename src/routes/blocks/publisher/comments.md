---
layout: blockComponentLayout
title: Svelte Comments Sections - Flowbite Svelte Blocks
breadcrumb_title: Comments Sections
no_of_components: 1 free component
dir: publisher
description: Get started with a collection of comments sections coded with Tailwind CSS to show a list of comments for blog posts with features like a reply, like, and more.
---

## Default comments list

Use this example of a free comments box to show a submission form and a list of comments with the settings and reply feature.

```svelte example
<script>
  import { Section, Comment, CommentItem } from 'flowbite-svelte-blocks';
  import { Button, Textarea, Label, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { DotsHorizontalOutline } from 'flowbite-svelte-icons';
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

<Section name='comment' classSection='bg-white dark:bg-gray-900'>
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
      <CommentItem {comment} articleClass ={ i !== 0 ? 'border-t border-gray-200 dark:border-gray-700 rounded-none':''}>
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
```
