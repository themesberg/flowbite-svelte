import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        spanClass?: string | undefined;
        aClass?: string | undefined;
        href?: string | undefined;
        by?: string | undefined;
        target?: string | undefined;
        copyrightMessage?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FooterCopyrightProps = typeof __propDef.props;
export type FooterCopyrightEvents = typeof __propDef.events;
export type FooterCopyrightSlots = typeof __propDef.slots;
export default class FooterCopyright extends SvelteComponentTyped<FooterCopyrightProps, FooterCopyrightEvents, FooterCopyrightSlots> {
}
export {};
