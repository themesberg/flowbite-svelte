<script lang="ts">
  import { BottomNav, BottomNavItem, Card, Listgroup, Avatar, type ListGroupItemType } from "flowbite-svelte";
  import { ClockOutline, UsersGroupOutline, StarOutline } from "flowbite-svelte-icons";
  let list: ListGroupItemType[] = [
    {
      img: { src: "/images/profile-picture-1.webp", alt: "Neil Sims" },
      comment: 'New message from <span class="font-medium text-gray-900 dark:text-white">Jese Leos</span>: "Hey, what\'s up? All set for the presentation?"',
      message: "a few moments ago"
    },
    {
      img: { src: "/images/profile-picture-2.webp", alt: "Bonnie Green" },
      comment: 'Joseph McFall and <span class="font-medium text-gray-900 dark:text-white">5 others</span> started following you.',
      message: "10 minutes ago"
    },
    {
      img: { src: "/images/people/profile-picture-5.jpg", alt: "Leslie Livingston" },
      comment: 'Bonnie Green and <span class="font-medium text-gray-900 dark:text-white">141 others</span> love your story. See it and view more stories.',
      message: "23 minutes ago"
    },
    {
      img: { src: "/images/profile-picture-4.webp", alt: "Robert Brown" },
      comment: 'Leslie Livingston mentioned you in a comment: <span class="font-medium text-primary-600 dark:text-primary-500 hover:underline">@bonnie.green</span> what do you say?',
      message: "23 minutes ago"
    },
    {
      img: { src: "/images/profile-picture-5.webp", alt: "Michael Gough" },
      comment: "Robert Brown</span> posted a new video: Glassmorphism - learn how to implement the new design trend.",
      message: "23 minutes ago"
    }
  ];
</script>

<Card class="relative h-96 overflow-y-scroll rounded-lg border border-gray-100 bg-white dark:border-gray-600 dark:bg-gray-700">
  <Listgroup items={list} class="border-0 dark:bg-transparent!">
    {#snippet children(item)}
      {#if item && typeof item !== "string"}
        <a href="/" class="flex w-full items-center justify-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800">
          <Avatar src={item.img?.src} alt={item.img?.alt} class="me-3 shrink-0" />
          <div>
            <p class="text-sm text-gray-500 dark:text-gray-400">{@html item.comment || ""}</p>
            <span class="text-primary-600 dark:text-primary-500 text-xs">{@html item.message || ""}</span>
          </div>
        </a>
      {/if}
    {/snippet}
  </Listgroup>
  <BottomNav position="sticky" navType="card" classes={{ inner: "grid-cols-3 pt-2 pb-4" }}>
    <BottomNavItem btnName="Latest" id="card-latest">
      <ClockOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
    </BottomNavItem>
    <BottomNavItem btnName="Following" id="card-following">
      <UsersGroupOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
    </BottomNavItem>
    <BottomNavItem btnName="Favorites" id="card-favorites">
      <StarOutline class="group-hover:text-primary-600 dark:group-hover:text-primary-500 mb-1 h-6 w-6 text-gray-500 dark:text-gray-400" />
    </BottomNavItem>
  </BottomNav>
</Card>
