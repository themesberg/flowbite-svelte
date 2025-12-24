<script lang="ts">
  import { Activity, ActivityItem } from "flowbite-svelte";
  let activities = [
    {
      id: "activity-1",
      title:
        'Bonnie moved <a href="/" class="font-semibold text-primary-600 dark:text-primary-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-600 dark:text-gray-300">Funny Group</span>',
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
