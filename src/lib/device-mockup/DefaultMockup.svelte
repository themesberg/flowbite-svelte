<script lang="ts">
  export let defaultTop: string;
  export let defaultLeftTop: string;
  export let defaultLeftBot: string;
  export let defaultRight: string;
</script>

<div class={defaultTop} />
<div class={defaultLeftTop} />
<div class={defaultLeftBot} />
<div class={defaultRight} />

<!--
  @component
  ## Features
  [Go to Device Mockups](https://flowbite-svelte.com/docs/components/device-mockups)
  ## Props
  @prop defaultTop: string;
  @prop defaultLeftTop: string;
  @prop defaultLeftBot: string;
  @prop defaultRight: string;
  ## Example
  ```
  <script>
    import { DeviceMockup } from 'flowbite-svelte';
  </script>

  <DeviceMockup>
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png"
      class="dark:hidden w-[272px] h-[572px]"
      alt="default example 1" />
    <img
      src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png"
      class="hidden dark:block w-[272px] h-[572px]"
      alt="default example 2" />
  </DeviceMockup>
  ```
-->
