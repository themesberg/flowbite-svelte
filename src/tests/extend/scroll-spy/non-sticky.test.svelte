<script lang="ts">
  import { ScrollSpy } from "$lib";
  import type { ScrollSpyItem } from "$lib/types";

  const items: ScrollSpyItem[] = [
    { id: "section-top", label: "Section Top" },
    { id: "section-middle", label: "Section Middle" }
  ];
</script>

<ScrollSpy {items} position="top" sticky={false} data-testid="non-sticky-scrollspy" />

<div id="section-top" data-testid="section-top">Section Top Content</div>
<div id="section-middle" data-testid="section-middle">Section Middle Content</div>
