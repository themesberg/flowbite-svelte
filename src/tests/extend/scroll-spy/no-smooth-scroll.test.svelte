<script lang="ts">
  import { ScrollSpy } from "$lib";
  import type { ScrollSpyItem } from "$lib/types";

  const items: ScrollSpyItem[] = [
    { id: "smooth-section1", label: "Smooth Section 1" },
    { id: "smooth-section2", label: "Smooth Section 2" }
  ];
</script>

<ScrollSpy {items} smoothScroll={false} data-testid="no-smooth-scrollspy" />

<div id="smooth-section1" data-testid="smooth-section-1">Smooth Section 1 Content</div>
<div id="smooth-section2" data-testid="smooth-section-2">Smooth Section 2 Content</div>
