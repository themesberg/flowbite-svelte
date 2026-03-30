<script lang="ts">
  import { Popover } from "flowbite-svelte";
  import { QuestionCircleSolid, ChevronRightOutline } from "flowbite-svelte-icons";
</script>

<div class="text-body flex items-center text-sm">
  This is just some informational text
  <button id="b3">
    <QuestionCircleSolid class="ms-1.5 h-5 w-5" />
    <span class="sr-only">Show information</span>
  </button>
</div>
<Popover triggeredBy="#b3" class="w-72 text-sm" placement="bottom-start">
  <div class="space-y-2 p-3">
    <h3 class="text-heading font-semibold">Activity growth - Incremental</h3>
    Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend.
    <span class="text-heading font-semibold">Calculation</span>
    For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n.
    <a href="/" class="text-fg-brand flex items-center font-medium hover:underline">
      Read more <ChevronRightOutline class="text-fg-brand ms-1.5 h-4 w-4" />
    </a>
  </div>
</Popover>
