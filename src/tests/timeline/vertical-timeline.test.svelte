<script lang="ts">
  import { Timeline, TimelineItem } from "$lib";
</script>

<Timeline order="vertical" data-testid="vertical-timeline">
  <TimelineItem data-testid="vertical-item-1" title="Vertical Event 1" date="2024-01-15" color="primary">Vertical timeline content 1</TimelineItem>
  <TimelineItem data-testid="vertical-item-2" title="Vertical Event 2" date="2024-02-20" color="green">Vertical timeline content 2</TimelineItem>
  <TimelineItem data-testid="vertical-item-3" title="Vertical Event 3" date="2024-03-25" color="red" isLast>Vertical timeline content 3</TimelineItem>
</Timeline>
