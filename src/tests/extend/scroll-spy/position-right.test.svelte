<script lang="ts">
  import { ScrollSpy } from "$lib";
  import type { ScrollSpyItem } from "$lib/types";

  const items: ScrollSpyItem[] = [
    { id: "section-x", label: "Section X" },
    { id: "section-y", label: "Section Y" }
  ];
</script>

<ScrollSpy {items} position="right" data-testid="right-scrollspy" />

<div id="section-x" data-testid="section-x">Section X Content</div>
<div id="section-y" data-testid="section-y">Section Y Content</div>
