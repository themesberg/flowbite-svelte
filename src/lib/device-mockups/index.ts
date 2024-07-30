import Android from './Android.svelte';
import DefaultMockup from './DefaultMockup.svelte';
import Desktop from './Desktop.svelte';
import DeviceMockup from './DeviceMockup.svelte';
import Ios from './Ios.svelte';
import Laptop from './Laptop.svelte';
import Smartwatch from './Smartwatch.svelte';
import Tablet from './Tablet.svelte';
import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

interface MockupBaseProps extends HTMLAttributes<HTMLElement> {
  children?: Snippet;
  divClass?: string | undefined | null;
  div2Class?: string | undefined | null;
  div3Class?: string | undefined | null;
  div4Class?: string | undefined | null;
}

// Android
const androidVariants = tv({
  slots: {
    div: 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl',
    slot: 'rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800',
    top: 'w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute',
    leftTop:
      'h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg',
    leftMid:
      'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg',
    leftBot:
      'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg',
    right:
      'h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg'
  }
});

interface AndroidProps extends MockupBaseProps {
  div5Class?: string | undefined | null;
  div6Class?: string | undefined | null;
  div7Class?: string | undefined | null;
}

// DefaultMockup
const defaultMockupVariants = tv({
  slots: {
    div: 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]',
    slot: 'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800',
    top: 'h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg',
    leftTop:
      'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg',
    leftBot:
      'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg',
    right:
      'h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg'
  }
});

interface DefaultMockupProps extends MockupBaseProps {
  div5Class?: string | undefined | null;
  div6Class?: string | undefined | null;
}

// Desktop
const desktopVariants = tv({
  slots: {
    inner: 'rounded-xl overflow-hidden h-[140px] md:h-[262px]',
    bot: 'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]',
    botUnder:
      'relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]',
    div: 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]'
  }
});

interface DesktopProps extends MockupBaseProps {}

// ios
const iosVariants = tv({
  slots: {
    div: 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl',
    slot: 'rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800',
    top: 'w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute',
    leftTop:
      'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg',
    leftBot:
      'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg',
    right:
      'h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg'
  }
});

interface IosProps extends MockupBaseProps {
  div5Class?: string | undefined | null;
  div6Class?: string | undefined | null;
}

// laptop
const laptopVariants = tv({
  slots: {
    div: 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]',
    inner:
      'rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800',
    bot: 'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]',
    botCen:
      'absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800'
  }
});

interface LaptopProps extends MockupBaseProps {}

// smartwatch
const smartwatchVariants = tv({
  slots: {
    div: 'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]',
    slot: 'rounded-[2rem] overflow-hidden h-[193px] w-[188px]',
    rightTop:
      'h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[40px] rounded-r-lg',
    rightBot:
      'h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[88px] rounded-r-lg',
    top: 'relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]',
    bot: 'relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]'
  }
});

interface SmartwatchProps extends MockupBaseProps {
  div5Class?: string | undefined | null;
  div6Class?: string | undefined | null;
}

// tablet
const tabletVariants = tv({
  slots: {
    div: 'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]',
    slot: 'rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800',
    leftTop:
      'h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg',
    leftMid:
      'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg',
    leftBot:
      'h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg',
    right:
      'h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg'
  }
});

interface TabletProps extends MockupBaseProps {
  div5Class?: string | undefined | null;
  div6Class?: string | undefined | null;
}

export {
  Android,
  DefaultMockup,
  Desktop,
  DeviceMockup,
  Ios,
  Laptop,
  Smartwatch,
  Tablet,
  androidVariants,
  defaultMockupVariants,
  desktopVariants,
  iosVariants,
  laptopVariants,
  smartwatchVariants,
  tabletVariants,
  type AndroidProps,
  type DefaultMockupProps,
  type DesktopProps,
  type IosProps,
  type LaptopProps,
  type SmartwatchProps,
  type TabletProps
};
