<script lang="ts">
  import { ScrollSpy } from "$lib";
  import type { ScrollSpyItem } from "$lib/types";

  const items: ScrollSpyItem[] = [
    { id: "href-section1", label: "Href Section 1", href: "#custom-href-1" },
    { id: "href-section2", label: "Href Section 2", href: "#custom-href-2" }
  ];
</script>

<ScrollSpy {items} data-testid="custom-href-scrollspy" />

<div id="custom-href-1" data-testid="href-section-1">Href Section 1 Content</div>
<div id="custom-href-2" data-testid="href-section-2">Href Section 2 Content</div>
