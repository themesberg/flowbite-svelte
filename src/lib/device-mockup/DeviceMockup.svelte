<script lang="ts">
  import Android from './Android.svelte';
  import DefaultMockup from './DefaultMockup.svelte';
  import Desktop from './Desktop.svelte';
  import Ios from './Ios.svelte';
  import Laptop from './Laptop.svelte';
  import Smartwatch from './Smartwatch.svelte';
  import Tablet from './Tablet.svelte';

  export let device: 'default' | 'ios' | 'android' | 'tablet' | 'laptop' | 'desktop' | 'smartwatch' = 'default';

</script>

{#if device === 'android'}
  <Android><slot /></Android>
{:else if device === 'ios'}
  <Ios><slot/></Ios>
{:else if device === 'tablet'}
  <Tablet><slot/></Tablet>
{:else if device === 'default'}
  <DefaultMockup><slot/></DefaultMockup>
{:else if device === 'smartwatch'}
  <Smartwatch><slot/></Smartwatch>
{:else if device === 'laptop'}
  <Laptop><slot/></Laptop>
{:else if device === 'desktop'}
  <Desktop><slot/></Desktop>
{:else}
  <div class="border p-3 text-xl">Unknow device</div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let device: 'default' | 'ios' | 'android' | 'tablet' | 'laptop' | 'desktop' | 'smartwatch' = 'default';
@prop export let androidDiv: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl';
@prop export let androidSlot: string = 'rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
@prop export let androidTop: string = 'w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute';
@prop export let androidLeftTop: string = 'h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
@prop export let androidLeftMid: string = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
@prop export let androidLeftBot: string = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
@prop export let androidRight: string = 'h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
@prop export let defaultDiv: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]';
@prop export let defaultSlot: string = 'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
@prop export let defaultTop: string = 'h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
@prop export let defaultLeftTop: string = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
@prop export let defaultLeftBot: string = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
@prop export let defaultRight: string = 'h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
@prop export let desktopInner: string = 'rounded-xl overflow-hidden h-[140px] md:h-[262px]';
@prop export let desktopBot: string = 'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]';
@prop export let desktopBotUnder: string = 'relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]';
@prop export let destopDiv: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
@prop export let desktopSlot: string = 'rounded-xl overflow-hidden h-[140px] md:h-[262px]';
@prop export let iosDiv: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl';
@prop export let iosSlot: string = 'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
@prop export let iosTop: string = 'w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute';
@prop export let iosLeftTop: string = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
@prop export let iosLeftBot: string = 'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
@prop export let iosRight: string = 'h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
@prop export let laptopDiv: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
@prop export let laptopSlot: string = 'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800';
@prop export let laptopInner: string = 'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800';
@prop export let laptopBot: string = 'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]';
@prop export let laptopBotCen: string = 'absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800';
@prop export let smartwatchDiv: string = 'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]';
@prop export let smartwatchSlot: string = 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]';
@prop export let smartRightTop: string = 'h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[40px] rounded-r-lg';
@prop export let smartRightBot: string = 'h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[88px] rounded-r-lg';
@prop export let smartTop: string = 'relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]';
@prop export let smartBot: string = 'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]';
@prop export let smartwatchInner: string = 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]';
@prop export let tabletDiv: string = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]';
@prop export let tabletSlot: string = 'rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800';
@prop export let tabletLeftTop: string = 'h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
@prop export let tabletLeftMid: string = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
@prop export let tabletLeftBot: string = 'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
@prop export let tabletRight: string = 'h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
-->
