<script lang="ts">
  import { Activity, ActivityItem } from '$lib';
  const activities = [
    {
      name: 'Bonnie moved <a href="/" class="font-semibold text-primary-600 dark:text-primary-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span>',
      date: 'just now',
      alt: 'image alt here',
      src: '/images/profile-picture-2.webp'
    },
    {
      name: 'We don’t serve their kind here! What? Your droids. ',
      date: '2 hours ago',
      alt: 'image alt here',
      src: '/images/profile-picture-2.webp',
      activity: 'The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. '
    },
    {
      name: 'They’ll have to wait outside. We don’t want them here. ',
      date: '1 day ago',
      alt: 'image alt here',
      src: '/images/profile-picture-3.webp'
    }
  ];
</script>

<Activity>
  <ActivityItem {activities} />
</Activity>
