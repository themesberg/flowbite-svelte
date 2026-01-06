<script lang="ts">
  import { ScrollSpy } from "$lib";
  import type { ScrollSpyItem } from "$lib/types";

  const items: ScrollSpyItem[] = [
    { id: "classes-section1", label: "Classes Section 1" },
    { id: "classes-section2", label: "Classes Section 2" }
  ];

  const customClasses = {
    container: "custom-container-class",
    list: "custom-list-class",
    item: "custom-item-class",
    link: "custom-link-class"
  };
</script>

<ScrollSpy {items} classes={customClasses} data-testid="classes-scrollspy" />

<div id="classes-section1" data-testid="classes-section-1">Classes Section 1 Content</div>
<div id="classes-section2" data-testid="classes-section-2">Classes Section 2 Content</div>
