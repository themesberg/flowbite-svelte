<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  interface Props {
    children?: any;
    divclass?: string;
    div2class?: string;
    div3class?: string;
    div4class?: string;
    div5class?: string;
    div6class?: string;
  }
  let { children, divclass, div2class, div3class, div4class, div5class, div6class } =
    $props<Props>();

  const div: string =
    'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]';
  const slot: string =
    'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800';
  const top: string =
    'h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg';
  const leftTop: string =
    'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  const leftBot: string =
    'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  const right: string =
    'h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
</script>

<div class={twMerge(div, divclass)}>
  <div class={twMerge(top, div2class)} />
  <div class={twMerge(leftTop, div3class)} />
  <div class={twMerge(leftBot, div4class)} />
  <div class={twMerge(right, div5class)} />
  <div class={twMerge(slot, div6class)}>
    {@render children()}
  </div>
</div>
