<script lang="ts">
  import DefaultMockup from './DefaultMockup.svelte';
  import Ios from './Ios.svelte';
  import Android from './Android.svelte';
  import Tablet from './Tablet.svelte';
  import Smartwatch from './Smartwatch.svelte';

  export let device: 'default' | 'ios' | 'android' | 'tablet' | 'laptop' | 'desktop' | 'smartwatch' =
    'default';

  // android
  export let androidDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl';
  export let androidSlot: string =
    'rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
  export let androidTop: string =
    'w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute';
  export let androidLeftTop: string =
    'h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
  export let androidLeftMid: string =
    'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  export let androidLeftBot: string =
    'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  export let androidRight: string =
    'h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';

  // default
  export let defaultDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]';
  export let defaultSlot: string =
    'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
  export let defaultTop: string =
    'h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
  export let defaultLeftTop: string =
    'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  export let defaultLeftBot: string =
    'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  export let defaultRight: string =
    'h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';

  // desktop
  export let desktopInner: string = 'rounded-xl overflow-hidden h-[140px] md:h-[262px]';
  export let desktopBot: string =
    'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]';
  export let desktopBotUnder: string =
    'relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]';
  export let destopDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
  export let desktopSlot: string = 'rounded-xl overflow-hidden h-[140px] md:h-[262px]';

  // ios
  export let iosDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl';
  export let iosSlot: string =
    'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
  export let iosTop: string =
    'w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute';
  export let iosLeftTop: string =
    'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  export let iosLeftBot: string =
    'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  export let iosRight: string =
    'h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';

  // laptop
  export let laptopDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
  export let laptopSlot: string =
    'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800';
  export let laptopInner: string =
    'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800';
  export let laptopBot: string =
    'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]';
  export let laptopBotCen: string =
    'absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800';

  // smartwatch
  export let smartwatchDiv: string =
    'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]';
  export let smartwatchSlot: string = 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]';
  export let smartRightTop: string =
    'h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[40px] rounded-r-lg';
  export let smartRightBot: string =
    'h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[88px] rounded-r-lg';
  export let smartTop: string =
    'relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]';
  export let smartBot: string =
    'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]';
  export let smartwatchInner: string = 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]';

  // tablet
  export let tabletDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]';
  export let tabletSlot: string =
    'rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800';
  export let tabletLeftTop: string =
    'h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
  export let tabletLeftMid: string =
    'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  export let tabletLeftBot: string =
    'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  export let tabletRight: string =
    'h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';

  const divClasses = {
    default: defaultDiv,
    ios: iosDiv,
    android: androidDiv,
    tablet: tabletDiv,
    laptop: laptopDiv,
    desktop: destopDiv,
    smartwatch: smartwatchDiv
  };

  const slotClasses = {
    default: defaultSlot,
    ios: iosSlot,
    android: androidSlot,
    tablet: tabletSlot,
    laptop: laptopSlot,
    desktop: desktopSlot,
    smartwatch: smartwatchSlot
  };
</script>

<div class={divClasses[device]}>
  {#if device === 'default'}
    <DefaultMockup {defaultTop} {defaultLeftTop} {defaultLeftBot} {defaultRight} />
  {:else if device === 'ios'}
    <Ios {iosTop} {iosLeftTop} {iosLeftBot} {iosRight} />
  {:else if device === 'android'}
    <Android {androidTop} {androidLeftTop} {androidLeftMid} {androidLeftBot} {androidRight} />
  {:else if device === 'tablet'}
    <Tablet {tabletLeftTop} {tabletLeftMid} {tabletLeftBot} {tabletRight} />
  {/if}
  {#if device === 'laptop'}
    <div class={laptopInner}>
      <slot />
    </div>
  {:else if device === 'desktop'}
    <div class={desktopInner}>
      <slot />
    </div>
  {:else if device === 'smartwatch'}
    <!-- No code -->
  {:else}
    <div class={slotClasses[device]}>
      <slot />
    </div>
  {/if}
</div>
{#if device === 'laptop'}
  <div class={laptopBot}>
    <div class={laptopBotCen} />
  </div>
{:else if device === 'desktop'}
  <div class={desktopBot} />
  <div class={desktopBotUnder} />
{:else if device === 'smartwatch'}
  <div class={smartTop}>
    <Smartwatch {smartRightTop} {smartRightBot} />
    <div class={smartwatchInner}>
      <slot />
    </div>
  </div>
  <div class={smartBot} />
{/if}

<!--
  @component
  ## Features
  [Go to Device Mockups](https://flowbite-svelte.com/docs/components/device-mockups)
  - Setup
  - Default mockup
  - iPhone 12 mockup (iOS)
  - Google Pixel mockup (Android)
  - Tablet mockup
  - Laptop mockup
  - Desktop mockup
  - Smartwatch mockup
  ## Props
  @prop device: 'default' | 'ios' | 'android' | 'tablet' | 'laptop' | 'desktop' | 'smartwatch' =
    'default';
  ### Android
  @prop androidDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl';
  @prop androidSlot: string =
    'rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
  @prop androidTop: string =
    'w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute';
  @prop androidLeftTop: string =
    'h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
  @prop androidLeftMid: string =
    'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  @prop androidLeftBot: string =
    'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  @prop androidRight: string =
    'h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
  ### Default
  @prop defaultDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]';
  @prop defaultSlot: string =
    'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
  @prop defaultTop: string =
    'h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
  @prop defaultLeftTop: string =
    'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  @prop defaultLeftBot: string =
    'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  @prop defaultRight: string =
    'h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
  ### Desktop
  @prop desktopInner: string = 'rounded-xl overflow-hidden h-[140px] md:h-[262px]';
  @prop desktopBot: string =
    'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]';
  @prop desktopBotUnder: string =
    'relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]';
  @prop destopDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
  @prop desktopSlot: string = 'rounded-xl overflow-hidden h-[140px] md:h-[262px]';
  ### ios
  @prop iosDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl';
  @prop iosSlot: string =
    'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
  @prop iosTop: string =
    'w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute';
  @prop iosLeftTop: string =
    'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  @prop iosLeftBot: string =
    'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  @prop iosRight: string =
    'h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
  ### Laptop    
  @prop laptopDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
  @prop laptopSlot: string =
    'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800';
  @prop laptopInner: string =
    'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800';
  @prop laptopBot: string =
    'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]';
  @prop laptopBotCen: string =
    'absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800';
  ### Smartwatch
  @prop smartwatchDiv: string =
    'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]';
  @prop smartwatchSlot: string = 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]';
  @prop smartRightTop: string =
    'h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[40px] rounded-r-lg';
  @prop smartRightBot: string =
    'h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[88px] rounded-r-lg';
  @prop smartTop: string =
    'relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]';
  @prop smartBot: string =
    'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]';
  @prop smartwatchInner: string = 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]';
  ### Tablet
  @prop tabletDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]';
  @prop tabletSlot: string =
    'rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800';
  @prop tabletLeftTop: string =
    'h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
  @prop tabletLeftMid: string =
    'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  @prop tabletLeftBot: string =
    'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  @prop tabletRight: string =
    'h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
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
