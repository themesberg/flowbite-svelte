<script lang="ts">
  import { Timeline, TimelineItem } from "$lib";
</script>

<Timeline data-testid="date-prefix-timeline">
  <TimelineItem data-testid="prefix-item-1" title="Event with Prefix" date="2024-01-15" datePrefix="Released on ">Timeline item with date prefix</TimelineItem>
  <TimelineItem data-testid="prefix-item-2" title="Another Event" date="2024-02-20" datePrefix="Started: " isLast>Another timeline item with prefix</TimelineItem>
</Timeline>
