<script lang="ts">
  import { ScrollSpy } from "$lib";
  import type { ScrollSpyItem } from "$lib/types";

  const items: ScrollSpyItem[] = [
    { id: "prop-section1", label: "Prop Section 1" },
    { id: "prop-section2", label: "Prop Section 2" }
  ];
</script>

<ScrollSpy {items} data-testid="rest-props-scrollspy" id="custom-id" role="navigation" aria-describedby="scroll-spy-description" />

<div id="prop-section1" data-testid="prop-section-1">Prop Section 1 Content</div>
<div id="prop-section2" data-testid="prop-section-2">Prop Section 2 Content</div>
