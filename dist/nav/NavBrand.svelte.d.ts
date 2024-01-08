/** @typedef {typeof __propDef.props}  NavBrandProps */
/** @typedef {typeof __propDef.events}  NavBrandEvents */
/** @typedef {typeof __propDef.slots}  NavBrandSlots */
export default class NavBrand extends SvelteComponentTyped<{
    siteName: unknown;
    closeNav: unknown;
    aClass?: string | undefined;
    spanClass?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type NavBrandProps = typeof __propDef.props;
export type NavBrandEvents = typeof __propDef.events;
export type NavBrandSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        siteName: unknown;
        closeNav: unknown;
        aClass?: string | undefined;
        spanClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
