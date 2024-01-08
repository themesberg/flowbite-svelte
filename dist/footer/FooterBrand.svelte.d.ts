import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        children?: any;
        aClass?: string | undefined;
        spanClass?: string | undefined;
        imgClass?: string | undefined;
        href?: string | undefined;
        src?: string | undefined;
        alt?: string | undefined;
        name?: string | undefined;
        target?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FooterBrandProps = typeof __propDef.props;
export type FooterBrandEvents = typeof __propDef.events;
export type FooterBrandSlots = typeof __propDef.slots;
export default class FooterBrand extends SvelteComponentTyped<FooterBrandProps, FooterBrandEvents, FooterBrandSlots> {
}
export {};
