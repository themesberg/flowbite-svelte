<script lang="ts">
  import { Activity, ActivityItem } from "$lib";
  import type { ActivityType } from "$lib/types";

  const activities: ActivityType[] = [
    {
      id: "activity-1",
      title: "User Activity 1",
      date: "2024-01-15",
      src: "/images/user1.jpg",
      alt: "User 1",
      text: "Activity description 1"
    },
    {
      id: "activity-2",
      title: "User Activity 2",
      date: "2024-02-20",
      src: "/images/user2.jpg",
      alt: "User 2",
      text: "Activity description 2"
    },
    {
      id: "activity-3",
      title: "User Activity 3",
      date: "2024-03-25",
      src: "/images/user3.jpg",
      alt: "User 3"
    }
  ];
</script>

<Activity data-testid="activity-timeline">
  <ActivityItem data-testid="activity-items" {activities} />
</Activity>
