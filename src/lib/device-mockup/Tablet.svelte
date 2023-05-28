<script lang="ts">
  export let tabletLeftTop: string;
  export let tabletLeftMid: string;
  export let tabletLeftBot: string;
  export let tabletRight: string;
</script>

<div class={tabletLeftTop} />
<div class={tabletLeftMid} />
<div class={tabletLeftBot} />
<div class={tabletRight} />

<!--
  @component
  ## Features
  [Go to Device Mockups](https://flowbite-svelte.com/docs/components/device-mockups)
  ## Props
  @prop tabletLeftTop: string;
  @prop tabletLeftMid: string;
  @prop tabletLeftBot: string;
  @prop tabletRight: string;
  ## Example
  ```
  <script>
    import { DeviceMockup } from 'flowbite-svelte';
  </script>

  <DeviceMockup device="tablet">
    <img
      src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png"
      class="dark:hidden h-[426px] md:h-[654px]"
      alt="tablet example 1" />
    <img
      src="https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png"
      class="hidden dark:block h-[426px] md:h-[654px]"
      alt="tablet example 2" />
  </DeviceMockup>
  ```
-->
