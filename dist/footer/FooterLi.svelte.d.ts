import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        children?: any;
        liClass?: string | undefined;
        aClass?: string | undefined;
        href?: string | undefined;
        target?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FooterLiProps = typeof __propDef.props;
export type FooterLiEvents = typeof __propDef.events;
export type FooterLiSlots = typeof __propDef.slots;
export default class FooterLi extends SvelteComponentTyped<FooterLiProps, FooterLiEvents, FooterLiSlots> {
}
export {};
