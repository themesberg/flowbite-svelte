<script>
  export let lists = [
    {
      img: {
        src: "/images/profile-picture-1.jpeg",
        alt: "Neil Sims",
      },
      field1: "Neil Sims",
      field2: "email@windster.com",
      field3: "Advisor",
    },
    {
      img: {
        src: "/images/profile-picture-2.jpeg",
        alt: "Bonnie Green",
      },
      field1: "Bonnie Green",
      field2: "email@windster.com",
      field3: "Developer",
    },
    {
      img: {
        src: "/images/profile-picture-3.jpeg",
        alt: "Michael Gough",
      },
      field1: "Michael Gough",
      field2: "email@windster.com",
      field3: "Marketing",
    },
  ];
  export let title = "Latest Customers";
  export let action = {
    link: "/#",
    title: "View all",
    rel: "",
  };
</script>

<div
  class="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
>
  <div class="flex justify-between items-center mb-4">
    <h3 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
      {title}
    </h3>
    <a
      href={action.link}
      rel={action.rel}
      class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
    >
      {action.title}
    </a>
  </div>
  <div class="flow-root">
    <ul class="divide-y divide-gray-200 dark:divide-gray-700">
      {#each lists as { img, field1, field2, field3 }}
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img class="w-8 h-8 rounded-full" src={img.src} alt={img.alt} />
            </div>
            <div class="flex-1 min-w-0">
              <p
                class="text-sm font-medium text-gray-900 truncate dark:text-white"
              >
                {field1}
              </p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                {field2}
              </p>
            </div>
            <div
              class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
            >
              {field3}
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</div>
