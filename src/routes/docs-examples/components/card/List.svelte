<script lang="ts">
  import { Card, Listgroup, Avatar } from "flowbite-svelte";
  let list = [
    {
      img: { src: "/images/people/profile-picture-1.jpg", alt: "Neil Sims" },
      name: "Neil Sims",
      email: "email@windster.com",
      value: "$320"
    },
    {
      img: { src: "/images/people/profile-picture-2.jpg", alt: "Bonnie Green" },
      name: "Bonnie Green",
      email: "email@windster.com",
      value: "$3467"
    },
    {
      img: { src: "/images/people/profile-picture-5.jpg", alt: "Michael Gough" },
      name: "Michael Gough",
      email: "email@windster.com",
      value: "$67"
    }
  ];
</script>

<Card class="p-4 sm:p-8 md:p-10" size="md">
  <div class="mb-4 flex items-center justify-between">
    <h5 class="text-heading text-xl leading-none font-bold">Latest Customers</h5>
    <a href="/" class="text-fg-brand text-sm font-medium hover:underline">View all</a>
  </div>
  <Listgroup items={list} class="border-0 dark:bg-transparent!">
    {#snippet children(item)}
      <div class="flex items-center space-x-4 py-2 rtl:space-x-reverse">
        {#if typeof item === "object" && item.img}
          <Avatar src={item.img.src} alt={item.img.alt} class="shrink-0" />
          <div class="min-w-0 flex-1">
            <p class="text-heading truncate text-sm font-medium">
              {item.name}
            </p>
            <p class="text-body truncate text-sm">
              {item.email}
            </p>
          </div>
          <div class="text-heading inline-flex items-center text-base font-semibold">
            {item.value}
          </div>
        {/if}
      </div>
    {/snippet}
  </Listgroup>
</Card>
