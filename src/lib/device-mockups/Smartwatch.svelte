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
    const div: string = 'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]';
    const slot: string = 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]';
    const rightTop: string = 'h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[40px] rounded-r-lg';
    const rightBot: string = 'h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[88px] rounded-r-lg';
    const top: string = 'relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]';
    const bot: string = 'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]';
  </script>
  
  <div class={twMerge(div, divclass)} />
  <div class={twMerge(top, div2class)}>
    <div class={twMerge(rightTop, div3class)} />
    <div class={twMerge(rightBot, div4class)} />
    <div class={twMerge(slot, div5class)}>
      {@render children()}
    </div>
  </div>
  <div class={twMerge(bot, div6class)} />
  
  