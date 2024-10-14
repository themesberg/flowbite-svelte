import Android from "./Android.svelte";
import DefaultMockup from "./DefaultMockup.svelte";
import Desktop from "./Desktop.svelte";
import DeviceMockup from "./DeviceMockup.svelte";
import Ios from "./Ios.svelte";
import Laptop from "./Laptop.svelte";
import Smartwatch from "./Smartwatch.svelte";
import Tablet from "./Tablet.svelte";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import { android, defaultMockup, desktop, ios, laptop, smartwatch, tablet } from "./theme";
import type { DeviceVariantType } from "$lib/types";

interface DeviceMockupProps {
  children: Snippet;
  device?: DeviceVariantType;
}

interface MockupBaseProps extends HTMLAttributes<HTMLElement> {
  children?: Snippet;
  divClass?: string;
  div2Class?: string;
  div3Class?: string;
  div4Class?: string;
}

interface AndroidProps {
  children?: Snippet;
  divClass?: string;
  div2Class?: string;
  div3Class?: string;
  div4Class?: string;
  div5Class?: string;
  div6Class?: string;
  div7Class?: string;
}

interface DefaultMockupProps {
  children?: Snippet;
  divClass?: string;
  div2Class?: string;
  div3Class?: string;
  div4Class?: string;
  div5Class?: string;
  div6Class?: string;
}

interface IosProps {
  children?: Snippet;
  divClass?: string;
  div2Class?: string;
  div3Class?: string;
  div4Class?: string;
  div5Class?: string;
  div6Class?: string;
}

interface SmartwatchProps {
  children?: Snippet;
  divClass?: string;
  div2Class?: string;
  div3Class?: string;
  div4Class?: string;
  div5Class?: string;
  div6Class?: string;
}

interface TabletProps {
  children?: Snippet;
  divClass?: string;
  div2Class?: string;
  div3Class?: string;
  div4Class?: string;
  div5Class?: string;
  div6Class?: string;
}

export { Android, DefaultMockup, Desktop, DeviceMockup, type DeviceMockupProps, Ios, Laptop, Smartwatch, Tablet, android, defaultMockup, desktop, ios, laptop, smartwatch, tablet, type AndroidProps, type DefaultMockupProps, type IosProps, type SmartwatchProps, type TabletProps, type MockupBaseProps };
