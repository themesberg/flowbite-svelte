<script lang="ts">
  import { Img, img, Radio, Label, type ImgProps } from "flowbite-svelte";

  const effects = Object.keys(img.variants.effect);
  let imgEffect: ImgProps["effect"] = $state(undefined);
</script>

<div class="flex flex-col items-center">
  <Img src="/images/examples/content-gallery-3.png" alt="sample 1" size="md" effect={imgEffect} />
  <div class="mt-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Effect</Label>
    {#each effects as effect}
      <Radio class="my-1" classes={{ label: "w-24" }} name="img_effect" bind:group={imgEffect} value={effect}>{effect}</Radio>
    {/each}
  </div>
</div>
