import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        children: any;
        ulClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NavUlProps = typeof __propDef.props;
export type NavUlEvents = typeof __propDef.events;
export type NavUlSlots = typeof __propDef.slots;
export default class NavUl extends SvelteComponentTyped<NavUlProps, NavUlEvents, NavUlSlots> {
}
export {};
