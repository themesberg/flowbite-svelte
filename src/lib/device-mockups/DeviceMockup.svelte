<script lang="ts">
  import type { Component } from "svelte";
  import Android from "./Android.svelte";
  import DefaultMockup from "./DefaultMockup.svelte";
  import Desktop from "./Desktop.svelte";
  import Ios from "./Ios.svelte";
  import Laptop from "./Laptop.svelte";
  import Smartwatch from "./Smartwatch.svelte";
  import Tablet from "./Tablet.svelte";
  import type { DeviceMockupProps } from "$lib/types";

  let { children, device = "default" }: DeviceMockupProps = $props();

  const componets = {
    android: Android,
    ios: Ios,
    tablet: Tablet,
    default: DefaultMockup,
    smartwatch: Smartwatch,
    laptop: Laptop,
    desktop: Desktop
  };

  let DeviceComponent: Component = $derived(componets[device]);
</script>

<DeviceComponent>
  {@render children()}
</DeviceComponent>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DeviceMockupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L481)
## Props
@prop children
@prop device = "default"
-->
