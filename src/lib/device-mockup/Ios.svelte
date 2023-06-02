<script lang="ts">
  export let iosTop: string;
  export let iosLeftTop: string;
  export let iosLeftBot: string;
  export let iosRight: string;
</script>

<div class={iosTop} />
<div class={iosLeftTop} />
<div class={iosLeftBot} />
<div class={iosRight} />

<!--
  @component
  ## Features
  [Go to Device Mockups](https://flowbite-svelte.com/docs/components/device-mockups)
  ## Props
  @prop iosTop: string;
  @prop iosLeftTop: string;
  @prop iosLeftBot: string;
  @prop iosRight: string;
  ## Example
  ```
  <script>
    import { DeviceMockup } from 'flowbite-svelte';
  </script>

  <DeviceMockup device="ios">
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png"
      class="dark:hidden w-[272px] h-[572px]"
      alt="ios example 1" />
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"
      class="hidden dark:block w-[272px] h-[572px]"
      alt="ios example 2" />
  </DeviceMockup>
  ```
-->
