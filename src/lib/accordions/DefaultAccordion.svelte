<script>
  import { slide } from "svelte/transition";
  // let isOpen = false
  // const toggle = () => isOpen = !isOpen
  // export let activeClass =
  //   "flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium border border-gray-200 dark:border-gray-700 border-b-0 text-left hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white";
  // export let nonactiveClass =
  //   "flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium border border-gray-200 dark:border-gray-700 border-b-0 text-left hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400";
  let activeitem = undefined;
  let isOpen = false;
  export const handleAccordion = (id) => {
    console.log(id);
    activeitem = id;
    isOpen = !isOpen;
  };
  export let items = [
    {
      id: "accordion-1",
      title: "Title 1",
      content:
        "<p class='mb-2 text-gray-500 dark:text-gray-400'>Lorem ipsum</p>",
      expanded: true,
    },
    {
      id: "accordion-2",
      title: "Title 2",
      content: "Lorem ipsum",
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

<div id="accordion-collapse">
  {#each items as { id, title, content, expanded }}
    <h2 id="{id}-heading">
      <button
        type="button"
        on:click={handleAccordion(id)}
        class:activeClass={activeitem === id}
        class:nonactiveClass={activeitem !== id}
        class="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-5 w-full font-medium text-left border border-gray-200 dark:border-gray-700 border-b-0 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800"
        aria-expanded={expanded}
        aria-controls="{id}-body"
      >
        <span>{title}</span>
        <svg
          class="w-6 h-6 shrink-0 rotate-180"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          /></svg
        >
      </button>
    </h2>
    <div id="{id}-body" class:hidden={isOpen}>
      <div
        class="p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 border-b-0"
      >
        {@html content}
      </div>
    </div>
  {/each}
</div>
