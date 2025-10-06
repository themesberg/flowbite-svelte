<script lang="ts">
  import { Img } from "flowbite-svelte"
  import imagePicture from '/src/images/content-gallery-3.png?enhanced';
</script>

<div class="space-y-4 flex flex-col items-center">
<Img caption="Default enhanced image" size="md">
  <enhanced:img src={imagePicture} alt="Default enhanced example" />
</Img>

<Img caption="Sepia effect with enhanced image" size="md" effect="sepia">
  {#snippet children({ class: imgClass, restProps })}
    <enhanced:img src={imagePicture} alt="Sepia effect with enhanced" class={imgClass} {...restProps} />
  {/snippet}
</Img>
</div>