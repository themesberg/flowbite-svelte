<script lang="ts">
  import { ScrollSpy } from "$lib";
  import type { ScrollSpyItem } from "$lib/types";

  const items: ScrollSpyItem[] = [
    { id: "offset-section1", label: "Offset Section 1" },
    { id: "offset-section2", label: "Offset Section 2" }
  ];
</script>

<ScrollSpy {items} offset={100} data-testid="offset-scrollspy" />

<div id="offset-section1" data-testid="offset-section-1">Offset Section 1 Content</div>
<div id="offset-section2" data-testid="offset-section-2">Offset Section 2 Content</div>
