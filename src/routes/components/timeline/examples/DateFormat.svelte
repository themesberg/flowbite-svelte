<script lang="ts">
  import { Timeline, TimelineItem } from "$lib";
</script>

<Timeline>
  <!-- Only year -->
  <TimelineItem title="Year only" date="2022-02-15" dateFormat="year">
    <p>Will display as "2022"</p>
  </TimelineItem>

  <!-- Month and year (default) -->
  <TimelineItem title="Month and year" date="2022-02-15" dateFormat="month-year">
    <p>Will display as "February 2022"</p>
  </TimelineItem>

  <!-- Full date -->
  <TimelineItem title="Full date" date="2022-02-15" dateFormat="full-date">
    <p>Will display as "February 15, 2022"</p>
  </TimelineItem>

  <!-- Using default format (month-year) -->
  <TimelineItem title="Default format" date="2022-02-15">
    <p>Will display as "February 2022"</p>
  </TimelineItem>
</Timeline>
