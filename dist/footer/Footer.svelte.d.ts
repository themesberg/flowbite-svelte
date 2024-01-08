import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        children: any;
        footerType?: 'sitemap' | 'default' | 'logo' | 'socialmedia' | undefined;
        footerClass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FooterProps = typeof __propDef.props;
export type FooterEvents = typeof __propDef.events;
export type FooterSlots = typeof __propDef.slots;
export default class Footer extends SvelteComponentTyped<FooterProps, FooterEvents, FooterSlots> {
}
export {};
