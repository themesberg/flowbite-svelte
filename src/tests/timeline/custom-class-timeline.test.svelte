<script lang="ts">
  import { Timeline, TimelineItem } from "$lib";
</script>

<Timeline
  order="vertical"
  class="custom-timeline-class"
  data-testid="custom-class-timeline"
>
  <TimelineItem
    data-testid="custom-class-item"
    title="Custom Event"
    date="2024-01-15"
    class="custom-item-class"
    classes={{
      title: "custom-title-class",
      time: "custom-time-class",
      indicator: "custom-indicator-class"
    }}
    isLast
  >
    Custom styled timeline item
  </TimelineItem>
</Timeline>

