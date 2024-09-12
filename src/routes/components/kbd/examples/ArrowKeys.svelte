<script lang="ts">
  import { Kbd } from '$lib';
  import { CaretDownSolid, CaretLeftSolid, CaretRightSolid, CaretUpSolid } from 'flowbite-svelte-icons';
</script>

<div class="flex flex-wrap justify-center">
  <Kbd class="me-1 inline-flex items-center px-2 py-1.5">
    <CaretUpSolid size="xs" />
    <span class="sr-only">Arrow key up</span>
  </Kbd>
  <Kbd class="me-1 inline-flex items-center px-2 py-1.5">
    <CaretDownSolid size="xs" />
    <span class="sr-only">Arrow key down</span>
  </Kbd>
  <Kbd class="me-1 inline-flex items-center px-2 py-1.5">
    <CaretLeftSolid size="xs" />
    <span class="sr-only">Arrow key left</span>
  </Kbd>
  <Kbd class="me-1 inline-flex items-center px-2 py-1.5">
    <CaretRightSolid size="xs" />
    <span class="sr-only">Arrow key right</span>
  </Kbd>
</div>
