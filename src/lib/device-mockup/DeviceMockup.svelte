<script lang="ts">
  import DefaultMockup from './DefaultMockup.svelte';
  import Ios from './Ios.svelte';
  import Android from './Android.svelte';
  import Tablet from './Tablet.svelte';
  import SmartWatch from './Smartwatch.svelte';

  export let device: 'default' | 'ios' | 'android' | 'tablet' | 'laptop' | 'desktop' | 'smartwatch' =
    'default';

  export let defaultDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]';
  export let defaultSlot: string =
    'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';

  export let iosDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl';
  export let iosSlot: string =
    'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';

  export let androidDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl';
  export let androidSlot: string =
    'rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';

  export let tabletDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]';
  export let tabletSlot: string =
    'rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800';

  export let laptopDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
  export let laptopSlot: string =
    'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800';

  export let destopDiv: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
  export let desktopSlot: string = 'rounded-xl overflow-hidden h-[140px] md:h-[262px]';

  export let smartwatchDiv: string =
    'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]';
  export let smartwatchSlot: string = 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]';

  export let androidTop: string;
  export let androidLeftTop: string;
  export let androidLeftMid: string;
  export let androidLeftBot: string;
  export let androidRight: string;

  export let defaultTop: string;
  export let defaultLeftTop: string;
  export let defaultLeftBot: string;
  export let defaultRight: string;

  export let iosTop: string;
  export let iosLeftTop: string;
  export let iosLeftBot: string;
  export let iosRight: string;

  export let smartRightTop: string;
  export let smartRightBot: string;
  export let smartTop: string =
    'relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]';
  export let smartBot: string =
    'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]';
  export let smartwatchInner: string = 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]';

  export let tabletLeftTop: string;
  export let tabletLeftMid: string;
  export let tabletLeftBot: string;
  export let tabletRight: string;

  export let laptopInner: string =
    'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800';
  export let laptopBot: string =
    'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]';
  export let laptopBotCen: string =
    'absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800';

  export let desktopInner: string = 'rounded-xl overflow-hidden h-[140px] md:h-[262px]';
  export let desktopBot: string =
    'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]';
  export let desktopBotUnder: string =
    'relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]';

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
    <SmartWatch {smartRightTop} {smartRightBot} />
    <div class={smartwatchInner}>
      <slot />
    </div>
  </div>
  <div class={smartBot} />
{/if}
