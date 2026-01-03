<script lang="ts">
  import { Timeline, TimelineItem } from "$lib";
</script>

<Timeline data-testid="date-format-timeline">
  <TimelineItem data-testid="year-format" title="Year Format" date="2024-01-15" dateFormat="year">
    Displaying year only
  </TimelineItem>
  <TimelineItem data-testid="month-year-format" title="Month-Year Format" date="2024-02-20" dateFormat="month-year">
    Displaying month and year
  </TimelineItem>
  <TimelineItem data-testid="full-date-format" title="Full Date Format" date="2024-03-25" dateFormat="full-date" isLast>
    Displaying full date
  </TimelineItem>
</Timeline>
