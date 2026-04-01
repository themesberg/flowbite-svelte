<script lang="ts">
  import { CloseButton } from "flowbite-svelte";
  let visible = $state(true);
</script>

{#if visible}
  <div id="banner" tabindex="-1" class="border-default bg-neutral-secondary-soft z-50 flex w-full items-start justify-between gap-8 border px-4 py-3 sm:items-center lg:py-4">
    <p class="text-body text-sm font-light">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, ipsa culpa ea laudantium earum quis? Neque unde aliquam enim, distinctio repellendus delectus? Illo numquam ex fugit dolor
      esse, cumque nesciunt?
    </p>
    <CloseButton onclick={() => (visible = false)} />
  </div>
{/if}
