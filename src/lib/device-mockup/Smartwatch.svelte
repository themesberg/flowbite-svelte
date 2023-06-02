<script lang="ts">
  export let smartRightTop: string;
  export let smartRightBot: string;
</script>

<div class={smartRightTop} />
<div class={smartRightBot} />

<!--
  @component
  ## Features
  [Go to Device Mockups](https://flowbite-svelte.com/docs/components/device-mockups)
  ## Props
  @prop smartRightTop: string;
  @prop smartRightBot: string;
  ## Example
  ```
  <script>
    import { DeviceMockup } from 'flowbite-svelte';
  </script>

  <DeviceMockup device="smartwatch">
    <img
      src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image.png"
      class="dark:hidden h-[193px] w-[188px"
      alt="smartwatch example 1" />
    <img
      src="https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image-dark.png"
      class="hidden dark:block h-[193px] w-[188px]"
      alt="smartwatch example 2" />
  </DeviceMockup>
  ```
-->
