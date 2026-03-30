<script lang="ts">
  import { BottomNav, BottomNavItem, Card, Listgroup, Avatar, type ListGroupItemType } from "flowbite-svelte";
  import { ClockOutline, UsersGroupOutline, StarOutline } from "flowbite-svelte-icons";
  let list: ListGroupItemType[] = [
    {
      img: { src: "/images/people/profile-picture-1.jpg", alt: "Neil Sims" },
      comment: 'New message from <span class="font-medium text-heading">Jese Leos</span>: "Hey, what\'s up? All set for the presentation?"',
      message: "a few moments ago"
    },
    {
      img: { src: "/images/people/profile-picture-2.jpg", alt: "Bonnie Green" },
      comment: 'Joseph McFall and <span class="font-medium text-heading">5 others</span> started following you.',
      message: "10 minutes ago"
    },
    {
      img: { src: "/images/people/profile-picture-5.jpg", alt: "Leslie Livingston" },
      comment: 'Bonnie Green and <span class="font-medium text-heading">141 others</span> love your story. See it and view more stories.',
      message: "23 minutes ago"
    },
    {
      img: { src: "/images/people/profile-picture-4.jpg", alt: "Robert Brown" },
      comment: 'Leslie Livingston mentioned you in a comment: <span class="font-medium text-fg-brand hover:underline">@bonnie.green</span> what do you say?',
      message: "23 minutes ago"
    },
    {
      img: { src: "/images/people/profile-picture-5.jpg", alt: "Michael Gough" },
      comment: "Robert Brown</span> posted a new video: Glassmorphism - learn how to implement the new design trend.",
      message: "23 minutes ago"
    }
  ];
</script>

<Card class="border-default bg-neutral-primary-soft relative h-96 overflow-y-scroll rounded-lg border">
  <Listgroup items={list} class="border-0 dark:bg-transparent!">
    {#snippet children(item)}
      {#if item && typeof item !== "string"}
        <a href="/" class="hover:bg-neutral-tertiary-soft flex w-full items-center justify-center px-4 py-3">
          <Avatar src={item.img?.src} alt={item.img?.alt} class="me-3 shrink-0" />
          <div>
            <p class="text-body text-sm">{@html item.comment || ""}</p>
            <span class="text-fg-brand text-xs">{@html item.message || ""}</span>
          </div>
        </a>
      {/if}
    {/snippet}
  </Listgroup>
  <BottomNav position="sticky" navType="card" classes={{ content: "grid-cols-3 pt-2 pb-4" }}>
    <BottomNavItem btnName="Latest" id="card-latest">
      <ClockOutline class="group-hover:text-fg-brand text-body mb-1 h-6 w-6" />
    </BottomNavItem>
    <BottomNavItem btnName="Following" id="card-following">
      <UsersGroupOutline class="group-hover:text-fg-brand text-body mb-1 h-6 w-6" />
    </BottomNavItem>
    <BottomNavItem btnName="Favorites" id="card-favorites">
      <StarOutline class="group-hover:text-fg-brand text-body mb-1 h-6 w-6" />
    </BottomNavItem>
  </BottomNav>
</Card>
