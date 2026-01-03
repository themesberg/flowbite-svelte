<script lang="ts">
  import { Group, GroupItem } from "$lib";
  import type { GroupTimelineType } from "$lib/types";

  const repositories: GroupTimelineType[] = [
    {
      id: "repo-1",
      name: "Repository One",
      src: "/images/repo1.jpg",
      alt: "Repo 1",
      href: "/repo1",
      isPrivate: false,
      comment: "Public repository"
    },
    {
      id: "repo-2",
      name: "Repository Two",
      src: "/images/repo2.jpg",
      alt: "Repo 2",
      href: "/repo2",
      isPrivate: true,
      comment: "Private repository"
    }
  ];

  const projects: GroupTimelineType[] = [
    {
      id: "project-1",
      name: "Project Alpha",
      src: "/images/project1.jpg",
      alt: "Project 1",
      href: "/project1",
      isPrivate: false
    }
  ];
</script>

<div data-testid="group-timeline-container">
  <Group date="January 2024" data-testid="group-1">
    <GroupItem data-testid="group-items-1" timelines={repositories} />
  </Group>

  <Group date="February 2024" data-testid="group-2">
    <GroupItem data-testid="group-items-2" timelines={projects} />
  </Group>
</div>
