<script lang="ts">
  import type { Component } from 'svelte';
  import Android from './Android.svelte';
  import DefaultMockup from './DefaultMockup.svelte';
  import Desktop from './Desktop.svelte';
  import Ios from './Ios.svelte';
  import Laptop from './Laptop.svelte';
  import Smartwatch from './Smartwatch.svelte';
  import Tablet from './Tablet.svelte';
  import { type DeviceMockupProps as Props } from '.'

  let { children, device = 'default' }: Props = $props();

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
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:device: DeviceVariantType = 'default';
-->
