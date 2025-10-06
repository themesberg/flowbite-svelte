<script lang="ts">
  import { Img, img, Radio, Label, type ImgProps } from "flowbite-svelte";

  const sizes = Object.keys(img.variants.size);
  let imgSize: ImgProps["size"] = $state("md");
</script>

<div class="flex flex-col items-center">
  <div class="md:h-[500px]">
    <Img src="/images/examples/image-1@2x.jpg" size={imgSize} class="mx-auto" alt="sample 1" />
  </div>
  <div class="mt-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Size</Label>
    {#each sizes as option}
      <Radio class="my-1" classes={{ label: "w-16" }} name="img_size" bind:group={imgSize} value={option}>{option}</Radio>
    {/each}
  </div>
</div>
