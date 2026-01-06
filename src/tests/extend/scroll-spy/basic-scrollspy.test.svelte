<script lang="ts">
  import { ScrollSpy } from "$lib";
  import type { ScrollSpyItem } from "$lib/types";

  const items: ScrollSpyItem[] = [
    { id: "section1", label: "Section 1" },
    { id: "section2", label: "Section 2" },
    { id: "section3", label: "Section 3" }
  ];
</script>

<ScrollSpy {items} data-testid="basic-scrollspy" />

<div id="section1" data-testid="section-1">Section 1 Content</div>
<div id="section2" data-testid="section-2">Section 2 Content</div>
<div id="section3" data-testid="section-3">Section 3 Content</div>
