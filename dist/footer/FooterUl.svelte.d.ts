import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        children?: any;
        ulClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FooterUlProps = typeof __propDef.props;
export type FooterUlEvents = typeof __propDef.events;
export type FooterUlSlots = typeof __propDef.slots;
export default class FooterUl extends SvelteComponentTyped<FooterUlProps, FooterUlEvents, FooterUlSlots> {
}
export {};
