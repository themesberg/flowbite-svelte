<script lang="ts">
  import { ScrollSpy } from "$lib";
  import type { ScrollSpyItem } from "$lib/types";

  const items: ScrollSpyItem[] = [
    { id: "styled-section1", label: "Styled Section 1" },
    { id: "styled-section2", label: "Styled Section 2" }
  ];
</script>

<ScrollSpy {items} activeClass="custom-active-class" inactiveClass="custom-inactive-class" class="custom-base-class" data-testid="custom-class-scrollspy" />

<div id="styled-section1" data-testid="styled-section-1">Styled Section 1 Content</div>
<div id="styled-section2" data-testid="styled-section-2">Styled Section 2 Content</div>
