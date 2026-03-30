<script lang="ts">
  import { Activity, ActivityItem } from "flowbite-svelte";
  let activities = [
    {
      id: "activity-1",
      title:
        'Bonnie moved <a href="/" class="font-semibold text-fg-brand hover:underline">Jese Leos</a> to <span class="bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium me-2 px-1.5 py-0.5 rounded">Funny Group</span>',
      date: "just now",
      alt: "image alt here",
      src: "/images/people/profile-picture-2.jpg"
    },
    {
      id: "activity-2",
      title: "We don’t serve their kind here! What? Your droids. ",
      date: "2 hours ago",
      alt: "image alt here",
      src: "/images/people/profile-picture-2.jpg",
      text: "The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. "
    },
    {
      id: "activity-3",
      title: "They’ll have to wait outside. We don’t want them here. ",
      date: "1 day ago",
      alt: "image alt here",
      src: "/images/people/profile-picture-5.jpg"
    }
  ];
</script>

<Activity>
  <ActivityItem {activities} />
</Activity>
