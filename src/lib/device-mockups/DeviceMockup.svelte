<script lang="ts">
  import type { ComponentType } from 'svelte';
  import Android from './Android.svelte';
  import DefaultMockup from './DefaultMockup.svelte';
  import Desktop from './Desktop.svelte';
  import Ios from './Ios.svelte';
  import Laptop from './Laptop.svelte';
  import Smartwatch from './Smartwatch.svelte';
  import Tablet from './Tablet.svelte';

  interface $$Props {
    device?: 'default' | 'ios' | 'android' | 'tablet' | 'laptop' | 'desktop' | 'smartwatch';
  }

  export let device: NonNullable<$$Props['device']> = 'default';

  const componets = {
    android: Android,
    ios: Ios,
    tablet: Tablet,
    default: DefaultMockup,
    smartwatch: Smartwatch,
    laptop: Laptop,
    desktop: Desktop
  };

  let component: ComponentType;
  $: component = componets[device];
</script>

{#if component}
  <svelte:component this={component}><slot /></svelte:component>
{:else}
  <div class="border p-3 text-xl">Unknow device</div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let device: NonNullable<$$Props['device']> = 'default';
-->
