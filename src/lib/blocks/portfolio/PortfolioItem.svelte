<script lang="ts">
  export let divClass: string = 'space-y-4';
  export let customerClass: string =
    'bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300';
  export let titleClass: string = 'text-2xl font-bold leading-tight text-gray-900 dark:text-white';
  export let descriptionClass: string = 'text-lg font-normal text-gray-500 dark:text-gray-400';
  export let linkClass: string =
    'text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800';
  export let item = {
    customer: '',
    title: '',
    description: '',
    href: '',
    linkTitle: ''
  };
</script>

<div class={divClass}>
  {#if item.customer}
    <span class={customerClass}>
      {item.customer}
    </span>
  {/if}
  {#if item.title}
    <h3 class={titleClass}>
      {item.title}
    </h3>
  {/if}
  {#if item.description}
    <p class={descriptionClass}>
      {item.description}
    </p>
  {/if}

  <a href={item.href} title="" class={linkClass} role="button">
    {item.linkTitle}
    <svg
      aria-hidden="true"
      class="w-5 h-5 ml-2 -mr-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </a>
  <slot />
</div>
