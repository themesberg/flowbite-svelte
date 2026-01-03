<script lang="ts">
  import { Timeline, TimelineItem } from "$lib";
</script>

<Timeline order="vertical" data-testid="color-timeline">
  <TimelineItem data-testid="item-primary" title="Primary Event" date="2024-01-15" color="primary">Primary color timeline item</TimelineItem>
  <TimelineItem data-testid="item-green" title="Green Event" date="2024-02-15" color="green">Green color timeline item</TimelineItem>
  <TimelineItem data-testid="item-orange" title="Orange Event" date="2024-03-15" color="orange">Orange color timeline item</TimelineItem>
  <TimelineItem data-testid="item-red" title="Red Event" date="2024-04-15" color="red">Red color timeline item</TimelineItem>
  <TimelineItem data-testid="item-blue" title="Blue Event" date="2024-05-15" color="blue">Blue color timeline item</TimelineItem>
  <TimelineItem data-testid="item-purple" title="Purple Event" date="2024-06-15" color="purple">Purple color timeline item</TimelineItem>
  <TimelineItem data-testid="item-gray" title="Gray Event" date="2024-07-15" color="gray" isLast>Gray color timeline item</TimelineItem>
</Timeline>
