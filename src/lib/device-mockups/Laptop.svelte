<script lang="ts">
  import { twMerge } from 'tailwind-merge';

  interface $$Props {
    div?: string;
    inner?: string;
    bot?: string;
    botCen?: string;
    classInner?: string;
    classBot?: string;
    classBotCen?: string;
  }
  export let div: $$Props['div'] = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
  export let inner: $$Props['inner'] = 'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800';
  export let bot: $$Props['bot'] = 'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]';
  export let botCen: $$Props['botCen'] = 'absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800';
  export let classInner: $$Props['classInner'] = '';
  export let classBot: $$Props['classBot'] = '';
  export let classBotCen: $$Props['classBotCen'] = '';
</script>

<div class={twMerge(div, $$props.class)}>
  <div class={twMerge(inner, classInner)}>
    <slot></slot>
  </div>
</div>

<div class={twMerge(bot, classBot)}>
  <div class={twMerge(botCen, classBotCen)}></div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let div: $$Props['div'] = 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
@prop export let inner: $$Props['inner'] = 'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800';
@prop export let bot: $$Props['bot'] = 'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]';
@prop export let botCen: $$Props['botCen'] = 'absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800';
@prop export let classInner: $$Props['classInner'] = '';
@prop export let classBot: $$Props['classBot'] = '';
@prop export let classBotCen: $$Props['classBotCen'] = '';
-->
