<script lang="ts">
  import { DeviceMockup, Label, Radio } from '$lib';
  import type { DeviceVariantType } from '$lib/types';
  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  // for Props table
  import CompoAttributesViewer from '../../utils/CompoAttributesViewer.svelte';
  const dirName = 'device-mockup';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  const devices = [
    {
      name: 'Default',
      device: 'default',
      lightimage: {
        src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png',
        class: 'dark:hidden w-[272px] h-[572px]',
        alt: 'default example 1'
      },
      darkimage: {
        src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png',
        class: 'hidden dark:block w-[272px] h-[572px]',
        alt: 'default example 2'
      }
    },
    {
      name: 'Ios',
      device: 'ios',
      lightimage: {
        src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png',
        class: 'dark:hidden w-[272px] h-[572px]',
        alt: 'ios example 1'
      },
      darkimage: {
        src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png',
        class: 'hidden dark:block w-[272px] h-[572px]',
        alt: 'ios example 2'
      }
    },
    {
      name: 'Android',
      device: 'android',
      lightimage: {
        src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png',
        class: 'dark:hidden w-[272px] h-[572px]',
        alt: 'android example 1'
      },
      darkimage: {
        src: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png',
        class: 'hidden dark:block w-[272px] h-[572px]',
        alt: 'android example 2'
      }
    },
    {
      name: 'Tablet',
      device: 'tablet',
      lightimage: {
        src: 'https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png',
        class: 'dark:hidden w-[426px] h-[654px]',
        alt: 'tablet example 1'
      },
      darkimage: {
        src: 'https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png',
        class: 'hidden dark:block w-[426px] h-[654px]',
        alt: 'tablet example 2'
      }
    },
    {
      name: 'Laptop',
      device: 'laptop',
      lightimage: {
        src: 'https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png',
        class: 'dark:hidden h-[156px] md:h-[278px] w-full rounded-xl',
        alt: 'laptop example 1'
      },
      darkimage: {
        src: 'https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png',
        class: 'hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg',
        alt: 'laptop example 2'
      }
    },
    {
      name: 'Desktop',
      device: 'desktop',
      lightimage: {
        src: 'https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png',
        class: 'dark:hidden h-[140px] md:h-[262px] w-full rounded-xl',
        alt: 'desktop example 1'
      },
      darkimage: {
        src: 'https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png',
        class: 'hidden dark:block h-[140px] md:h-[262px] w-full rounded-xl',
        alt: 'desktop example 2'
      }
    },
    {
      name: 'Smartwatch',
      device: 'smartwatch',
      lightimage: {
        src: 'https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image.png',
        class: 'dark:hidden h-[193px] w-[188px',
        alt: 'smartwatch example 1'
      },
      darkimage: {
        src: 'https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image-dark.png',
        class: 'hidden dark:block h-[193px] w-[188px]',
        alt: 'smartwatch example 2'
      }
    }
  ];
  const deviceNames = devices.map((device) => device.name);
  let selectedDevice = $state('Default');
  let currentDevice = $derived(devices.find((d) => d.name === selectedDevice) || devices[0]);
  // code generator
  let generatedCode = $derived(
    (() => {
      let props = [];
      if (currentDevice.device !== 'default') props.push(` device="${currentDevice.device}"`);

      return `<DeviceMockup${props.join('')}>
  <img src="${currentDevice.lightimage.src}" class="${currentDevice.lightimage.class}" alt="${currentDevice.lightimage.alt}" />
  <img src="${currentDevice.darkimage.src}" class="${currentDevice.darkimage.class}" alt="${currentDevice.darkimage.alt}" />
</DeviceMockup>`;
    })()
  );
</script>

<H1>Device mockup</H1>

<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />

<H2>Interactive Device Mockup Builder</H2>

<CodeWrapper innerClass="overflow-scroll">
  <div class="mb-8 flex flex-wrap space-x-2">
    <Label class="mb-4 w-full font-bold">Device</Label>
    {#each deviceNames as device}
      <Radio labelClass="w-24 my-1" name="alert_reactive" bind:group={selectedDevice} value={device}>{device}</Radio>
    {/each}
  </div>
  <DeviceMockup device={currentDevice.device as DeviceVariantType}>
    <img src={currentDevice.lightimage.src} class={currentDevice.lightimage.class} alt={currentDevice.lightimage.alt} />
    <img src={currentDevice.darkimage.src} class={currentDevice.darkimage.class} alt={currentDevice.darkimage.alt} />
  </DeviceMockup>
  {#snippet codeblock()}
    <HighlightCompo code={generatedCode} />
  {/snippet}
</CodeWrapper>

<H2>Component data</H2>
<CompoAttributesViewer {dirName} />
