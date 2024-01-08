import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        children: any;
        closeNav: () => void;
        href?: string | undefined;
        linkClass?: string | undefined;
        activeClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NavLiProps = typeof __propDef.props;
export type NavLiEvents = typeof __propDef.events;
export type NavLiSlots = typeof __propDef.slots;
export default class NavLi extends SvelteComponentTyped<NavLiProps, NavLiEvents, NavLiSlots> {
}
export {};
