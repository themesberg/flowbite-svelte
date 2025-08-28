<script lang="ts">
  import { Card, Listgroup, Avatar } from "flowbite-svelte";
  let list = [
    {
      img: { src: "/images/profile-picture-1.webp", alt: "Neil Sims" },
      name: "Neil Sims",
      email: "email@windster.com",
      value: "$320"
    },
    {
      img: { src: "/images/profile-picture-2.webp", alt: "Bonnie Green" },
      name: "Bonnie Green",
      email: "email@windster.com",
      value: "$3467"
    },
    {
      img: { src: "/images/profile-picture-3.webp", alt: "Michael Gough" },
      name: "Michael Gough",
      email: "email@windster.com",
      value: "$67"
    }
  ];
</script>

<Card class="p-4 sm:p-8 md:p-10" size="md">
  <div class="mb-4 flex items-center justify-between">
    <h5 class="text-xl leading-none font-bold text-gray-900 dark:text-white">Latest Customers</h5>
    <a href="/" class="text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline">View all</a>
  </div>
  <Listgroup items={list} class="border-0 dark:bg-transparent!">
    {#snippet children(item)}
      <div class="flex items-center space-x-4 py-2 rtl:space-x-reverse">
        {#if typeof item === "object" && item.img}
          <Avatar src={item.img.src} alt={item.img.alt} class="shrink-0" />
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-medium text-gray-900 dark:text-white">
              {item.name}
            </p>
            <p class="truncate text-sm text-gray-500 dark:text-gray-400">
              {item.email}
            </p>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {item.value}
          </div>
        {/if}
      </div>
    {/snippet}
  </Listgroup>
</Card>
