interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
  new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
    $$bindings?: Bindings;
  } & Exports;
  (
    internal: unknown,
    props: {
      $$events?: Events;
      $$slots?: Slots;
    }
  ): Exports;
  z_$$bindings?: Bindings;
}
declare const Nav: $$__sveltets_2_IsomorphicComponent<
  Record<string, never>,
  {
    [evt: string]: CustomEvent<any>;
  },
  {},
  {},
  ''
>;
type Nav = InstanceType<typeof Nav>;
export default Nav;
