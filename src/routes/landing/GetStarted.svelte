<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import CopyCliboardInput from "../utils/CopyCliboardInput.svelte";
  import ArrowRight from "../utils/icons/ArrowRight.svelte";
  import Section from "./utils/Section.svelte";
</script>

<Section tinted class="lg:py-24">
  <div class="flex flex-col items-center gap-4">
    <div class="flex-start flex flex-col gap-4">
      <h2 class="text-center text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl dark:text-white">Get started</h2>
      <p class="max-w-2xl text-center text-lg">Explore our Svelte UI components – easily create clean, accessible web designs. Begin your journey and enhance your projects today.</p>
    </div>
    <div class="sm:justify-start1 mt-4 w-full justify-center sm:flex md:mt-5">
      <div class="mx-0 flex max-w-2xl flex-col items-center gap-4 sm:flex-row sm:gap-6">
        <CopyCliboardInput class="bg-white md:w-80!" />
        <Button size="lg" class="hover:bg-primary-800 w-full gap-2 whitespace-nowrap sm:max-w-sm md:w-fit" href="/docs/components/accordion">
          See our docs <ArrowRight />
        </Button>
      </div>
    </div>
  </div>
</Section>
