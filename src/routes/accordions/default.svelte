<script>
  import { DefaultAccordion } from "$lib/index";
  import Content from "./Content.svelte";
  let items = [
    {
      id: "accordion-1",
      title: "Title 1",
      content:
        "<p class='mb-2 text-gray-500 dark:text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla debitis reiciendis soluta fugit excepturi, dolore hic nemo cupiditate amet mollitia aliquid, temporibus, est ipsa voluptatum eaque necessitatibus a! Minus, temporibus!</p>",
      expanded: true,
    },
    {
      id: "accordion-2",
      title: "Title 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis blanditiis nisi ab magnam inventore error amet, vero voluptatem voluptas labore culpa! Rem magni impedit nihil quaerat, natus libero obcaecati aliquam.",
      expanded: false,
    },
    {
      id: "accordion-3",
      title: "Title 3",
      content: "Lorem ipsum",
      expanded: false,
    },
  ];
</script>

<DefaultAccordion {items} />
