<script lang="ts">
  import { Timeline, TimelineItem } from "$lib";
</script>

<Timeline data-testid="basic-timeline">
  <TimelineItem data-testid="timeline-item-1" title="First Event" date="2024-01-15">Description for first event</TimelineItem>
  <TimelineItem data-testid="timeline-item-2" title="Second Event" date="2024-02-20">Description for second event</TimelineItem>
  <TimelineItem data-testid="timeline-item-3" title="Third Event" date="2024-03-25" isLast>Description for third event</TimelineItem>
</Timeline>
