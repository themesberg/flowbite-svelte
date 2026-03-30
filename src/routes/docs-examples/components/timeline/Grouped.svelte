<script lang="ts">
  import { Group, GroupItem } from "flowbite-svelte";
  let groupTimelines = [
    {
      id: "group-1",
      name: '<span class="font-medium">Laura Romeros</span> likes <span class="font-medium">Bonnie Green\'s</span> post in <span class="font-medium"> How to start with Flowbite library</span>',
      title:
        '<span class="font-medium text-heading">Jese Leos</span> likes <span class="font-medium text-heading">Bonnie Green\'s</span> post in <span class="font-medium text-heading"> How to start with Flowbite library</span>',
      src: "/images/people/profile-picture-1.jpg",
      alt: "alt here",
      href: "/",
      isPrivate: true,
      comment: '"I wanted to share a webinar zeroheight."'
    },
    {
      id: "group-2",
      name: '<span class="font-medium">Jese Leos</span> likes <span class="font-medium">Bonnie Green\'s</span> post in <span class="font-medium"> How to start with Flowbite library</span>',
      title: '<span class="font-medium text-heading">Bonnie Green</span> react to <span class="font-medium text-heading">Thomas Lean\'s</span> comment',
      src: "/images/people/profile-picture-2.jpg",
      alt: "alt here",
      href: "/",
      isPrivate: true,
      comment: '"I wanted to share a webinar zeroheight."'
    }
  ];
</script>

<Group date="January 13th, 2022">
  <GroupItem timelines={groupTimelines} />
</Group>
