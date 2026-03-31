<script lang="ts">
  import { A } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
  import Figma from "$icons/Figma.svelte";
</script>

<A
  href="/"
  class="inline-flex items-center justify-center p-5 text-base font-medium border border-default text-body rounded-lg bg-neutral-secondary-soft hover:text-heading hover:bg-neutral-tertiary"
>
  <Figma />
  <span class="ms-3 w-full">Get started with our Figma Design System</span>
  <ArrowRightOutline class="ms-2 h-6 w-6" />
</A>
