<script lang="ts">
  import { Group, GroupItem } from '$lib';
  const groupTimelines = [
    {
      name: '<span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green\'s</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span>',
      src: '/images/profile-picture-1.webp',
      alt: 'alt here',
      href: '/',
      isPrivate: true,
      comment: '"I wanted to share a webinar zeroheight."'
    },
    {
      name: '<span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span> react to <span class="font-medium text-gray-900 dark:text-white">Thomas Lean\'s</span> comment',
      src: '/images/profile-picture-2.webp',
      alt: 'alt here',
      href: '/',
      isPrivate: true,
      comment: '"I wanted to share a webinar zeroheight."'
    }
  ];
</script>

<Group date="January 13th, 2022">
  <GroupItem timelines={groupTimelines} />
</Group>
