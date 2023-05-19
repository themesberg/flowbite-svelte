<script lang="ts">
  import Default from './Default.svelte';
  import Ios from './Ios.svelte';
  import Android from './Android.svelte';
  import Tablet from './Tablet.svelte';
  import SmartWatch from './SmartWatch.svelte';

  export let device: 'default' | 'ios' | 'android' | 'tablet' | 'laptop' | 'desktop' | 'smartwatch' = 'default';

  const divClasses = {
    default: 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]',
    ios: 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl',
    android: 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl',
    tablet: 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]',
    laptop: 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]',
    desktop: 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]',
    smartwatch: 'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]'
  }

  const slotClasses = {
    default: 'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800',
    ios: 'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800',
    android: 'rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800',
    tablet: 'rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800',
    laptop: 'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800',
    desktop: 'rounded-xl overflow-hidden h-[140px] md:h-[262px]',
    smartwatch: 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]'
  }

</script>


<div class="{divClasses[device]}">
  {#if device === 'default'}
    <Default />
  {:else if device === 'ios'}
    <Ios />
  {:else if device === 'android'}
    <Android />
  {:else if device === 'tablet'}
    <Tablet />
  {/if}
  {#if device === 'laptop' }
  <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
    <slot />
  </div>
  {:else if device === 'desktop'}
  <div class="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
    <slot />
  </div>
  {:else if device === 'smartwatch'}
  <!-- No code -->
  {:else}
  <div class="{slotClasses[device]}">
    <slot />
  </div>
  {/if}
</div>
{#if device === 'laptop' }
<div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
  <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
</div>
{:else if device === 'desktop'}
<div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
<div class="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
{:else if device === 'smartwatch'}
<div class="relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]">
  <SmartWatch />
  <div class="rounded-[2rem] overflow-hidden h-[193px] w-[188px]">
      <slot />
  </div>
</div>
<div class="relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]"></div>
{/if}
