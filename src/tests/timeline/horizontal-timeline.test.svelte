<script lang="ts">
  import { Timeline, TimelineItem } from "$lib";
</script>

<Timeline order="horizontal" data-testid="horizontal-timeline">
  <TimelineItem data-testid="horizontal-item-1" title="Step 1" date="2024-01-15">
    First step content
  </TimelineItem>
  <TimelineItem data-testid="horizontal-item-2" title="Step 2" date="2024-02-20">
    Second step content
  </TimelineItem>
  <TimelineItem data-testid="horizontal-item-3" title="Step 3" date="2024-03-25" isLast>
    Final step content
  </TimelineItem>
</Timeline>
