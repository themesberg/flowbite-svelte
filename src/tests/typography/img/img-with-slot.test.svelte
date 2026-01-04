<script lang="ts">
  import Img from "$lib/typography/img/Img.svelte";
  import { TEST_IMAGE_SVG } from "../../fixtures/test-images";
</script>

<Img alt="Image with custom slot" data-testid="img-with-slot">
  {#snippet children({ class: imgClass, restProps })}
    <img {...restProps} class={imgClass} src={TEST_IMAGE_SVG} data-testid="custom-img-element" />
  {/snippet}
</Img>

<Img alt="Image with slot and caption" caption="Custom slot with caption" data-testid="img-slot-caption">
  {#snippet children({ class: imgClass, restProps })}
    <img {...restProps} class={imgClass} src={TEST_IMAGE_SVG} data-testid="custom-img-with-caption" />
  {/snippet}
</Img>
