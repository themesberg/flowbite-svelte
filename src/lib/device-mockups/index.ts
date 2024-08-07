import Android from './Android.svelte';
import DefaultMockup from './DefaultMockup.svelte';
import Desktop from './Desktop.svelte';
import DeviceMockup from './DeviceMockup.svelte';
import Ios from './Ios.svelte';
import Laptop from './Laptop.svelte';
import Smartwatch from './Smartwatch.svelte';
import Tablet from './Tablet.svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { android, defaultMockup, desktop, ios, laptop, smartwatch, tablet } from './theme';

interface MockupBaseProps extends HTMLAttributes<HTMLElement> {
  children?: Snippet;
  divClass?: string | undefined | null;
  div2Class?: string | undefined | null;
  div3Class?: string | undefined | null;
  div4Class?: string | undefined | null;
}

interface AndroidProps extends MockupBaseProps {
  div5Class?: string | undefined | null;
  div6Class?: string | undefined | null;
  div7Class?: string | undefined | null;
}

interface DefaultMockupProps extends MockupBaseProps {
  div5Class?: string | undefined | null;
  div6Class?: string | undefined | null;
}

interface DesktopProps extends MockupBaseProps {}

interface IosProps extends MockupBaseProps {
  div5Class?: string | undefined | null;
  div6Class?: string | undefined | null;
}

interface LaptopProps extends MockupBaseProps {}

interface SmartwatchProps extends MockupBaseProps {
  div5Class?: string | undefined | null;
  div6Class?: string | undefined | null;
}

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
  android,
  defaultMockup,
  desktop,
  ios,
  laptop,
  smartwatch,
  tablet,
  type AndroidProps,
  type DefaultMockupProps,
  type DesktopProps,
  type IosProps,
  type LaptopProps,
  type SmartwatchProps,
  type TabletProps
};
