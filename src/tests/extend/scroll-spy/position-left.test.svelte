<script lang="ts">
  import { ScrollSpy } from "$lib";
  import type { ScrollSpyItem } from "$lib/types";

  const items: ScrollSpyItem[] = [
    { id: "section-a", label: "Section A" },
    { id: "section-b", label: "Section B" }
  ];
</script>

<ScrollSpy {items} position="left" data-testid="left-scrollspy" />

<div id="section-a" data-testid="section-a">Section A Content</div>
<div id="section-b" data-testid="section-b">Section B Content</div>
