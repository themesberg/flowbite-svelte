/** @typedef {typeof __propDef.props}  NavbarProps */
/** @typedef {typeof __propDef.events}  NavbarEvents */
/** @typedef {typeof __propDef.slots}  NavbarSlots */
export default class Navbar extends SvelteComponentTyped<{
    children: unknown;
    toggleNav: unknown;
    closeNav: unknown;
    navStatus: unknown;
    brand: unknown;
    navClass?: string | undefined;
    divClass?: string | undefined;
    btnClass?: string | undefined;
    divChildrenClass?: string | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type NavbarProps = typeof __propDef.props;
export type NavbarEvents = typeof __propDef.events;
export type NavbarSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        children: unknown;
        toggleNav: unknown;
        closeNav: unknown;
        navStatus: unknown;
        brand: unknown;
        navClass?: string | undefined;
        divClass?: string | undefined;
        btnClass?: string | undefined;
        divChildrenClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
