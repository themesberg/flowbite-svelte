<script lang="ts">
  import { List, Li, Span } from "flowbite-svelte";
  import { CheckOutline } from "flowbite-svelte-icons";
</script>

<List tag="ul" class="mb-8 space-y-4">
  <Li icon class="gap-3">
    <CheckOutline class="text-fg-success h-5 w-5" />
    Individual configuration
  </Li>
  <Li icon class="gap-3">
    <CheckOutline class="text-fg-success h-5 w-5" />
    No setup, or hidden fees
  </Li>
  <Li icon class="gap-3">
    <CheckOutline class="text-fg-success h-5 w-5" />
    <span>Team size: <Span>1 developer</Span></span>
  </Li>
  <Li icon class="gap-3">
    <CheckOutline class="text-fg-success h-5 w-5" />
    <span>Premium support: <Span>6 months</Span></span>
  </Li>
  <Li icon class="gap-3">
    <CheckOutline class="text-fg-success h-5 w-5" />
    <span>Free updates: <Span>6 months</Span></span>
  </Li>
</List>
