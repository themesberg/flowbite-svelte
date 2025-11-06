<script>
  import { ScrollSpy } from 'flowbite-svelte';
  
  const items = [
    { id: 'section-1', label: 'Section 1' },
    { id: 'section-2', label: 'Section 2' },
    { id: 'section-3', label: 'Section 3' }
  ];
</script>

<ScrollSpy {items} offset={80} />

<section id="section-1">...</section>
<section id="section-2">...</section>
<section id="section-3">...</section>