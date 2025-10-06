<script lang="ts">
  import { Img, img, Radio, Label, type ImgProps } from "flowbite-svelte";

  const effects = Object.keys(img.variants.effect);
  const sizes = Object.keys(img.variants.size);
  const aligns = Object.keys(img.variants.align);
  let imgEffect: ImgProps["effect"] = $state("grayscale");
  let imgSize: ImgProps["size"] = $state("md");
  let imgAlign: ImgProps["align"] = $state("center");
</script>

<div class="flex flex-col">
  <div class="md:h-[500px]">
  <Img caption="Effect with enhanced image" size={imgSize} align={imgAlign} effect={imgEffect} >
    {#snippet children({ class: imgClass, restProps })}
      <enhanced:img src="/src/images/content-gallery-3.png"  alt="Sepia effect with enhanced" class={imgClass} {...restProps} />
    {/snippet}
  </Img>
</div>
  <div class="mt-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Effect</Label>
    {#each effects as effect}
      <Radio class="my-1" classes={{ label: "w-24" }} name="img_effect" bind:group={imgEffect} value={effect}>{effect}</Radio>
    {/each}
  </div>
  <div class="mt-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Size</Label>
    {#each sizes as option}
      <Radio class="my-1" classes={{ label: "w-16" }} name="img_size" bind:group={imgSize} value={option}>{option}</Radio>
    {/each}
  </div>
  <div class="mt-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Alignment</Label>
    {#each aligns as option}
      <Radio class="my-1" classes={{ label: "w-16" }} name="alignment" bind:group={imgAlign} value={option}>{option}</Radio>
    {/each}
  </div>
</div>
