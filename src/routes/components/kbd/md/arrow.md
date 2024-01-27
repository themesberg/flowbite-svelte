<script>
    import { Kbd } from '$lib';
    import { CaretDownSolid, CaretRightSolid, CaretLeftSolid, CaretUpSolid } from 'flowbite-svelte-icons';
</script>

<Kbd kbdclass="inline-flex items-center me-1 px-2 py-1.5">
    <CaretUpSolid size="xs"/>
    <span class="sr-only">Arrow key up</span>
</Kbd>
<Kbd kbdclass="inline-flex items-center me-1 px-2 py-1.5">
    <CaretDownSolid  size="xs"/>
    <span class="sr-only">Arrow key down</span>
</Kbd>
<Kbd kbdclass="inline-flex items-center me-1 px-2 py-1.5">
    <CaretLeftSolid  size="xs"/>
    <span class="sr-only">Arrow key left</span>
</Kbd>
<Kbd kbdclass="inline-flex items-center me-1 px-2 py-1.5">
    <CaretRightSolid  size="xs"/>
    <span class="sr-only">Arrow key right</span>
</Kbd>