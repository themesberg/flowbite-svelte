<script lang="ts">
  import { Img, img, Radio, Label, type ImgProps } from "$lib";

  const alignments = Object.keys(img.variants.align);
  let imgAlign: ImgProps["align"] = $state(undefined);
</script>

<div class="flex flex-col">
  <Img src="/images/examples/image-1@2x.jpg" size="sm" align={imgAlign} alt="sample 1" />

  <div class="mt-4 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Alignment</Label>
    {#each alignments as option}
      <Radio class="my-1" classes={{ label: "w-16" }} name="alignment" bind:group={imgAlign} value={option}>{option}</Radio>
    {/each}
  </div>
</div>
