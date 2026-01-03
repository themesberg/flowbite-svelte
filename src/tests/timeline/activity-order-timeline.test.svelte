<script lang="ts">
  import { Timeline, TimelineItem } from "$lib";
</script>

<Timeline order="activity" data-testid="activity-order-timeline">
  <TimelineItem data-testid="activity-item-1" title="Activity Event 1" date="2024-01-15" color="blue">
    Activity order timeline content 1
  </TimelineItem>
  <TimelineItem data-testid="activity-item-2" title="Activity Event 2" date="2024-02-20" color="green">
    Activity order timeline content 2
  </TimelineItem>
  <TimelineItem data-testid="activity-item-3" title="Activity Event 3" date="2024-03-25" color="purple" isLast>
    Activity order timeline content 3
  </TimelineItem>
</Timeline>
