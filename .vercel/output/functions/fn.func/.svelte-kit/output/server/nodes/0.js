import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.SOjfxcj_.js","_app/immutable/chunks/disclose-version.0TX42Q8e.js","_app/immutable/chunks/runtime.BkfDdwap.js","_app/immutable/chunks/store.B2xZ3Ft6.js","_app/immutable/chunks/snippet.BDfn85k4.js","_app/immutable/chunks/theme.BtjZjf2R.js","_app/immutable/chunks/props.B7eOu8hW.js","_app/immutable/chunks/index.IFFPp5_U.js","_app/immutable/chunks/stores.CC5X2N5j.js","_app/immutable/chunks/entry.Co0wkGrN.js","_app/immutable/chunks/legacy.DvF4DOPZ.js","_app/immutable/chunks/FooterUl.rLmcpaBi.js","_app/immutable/chunks/Darkmode.RvBN8W-9.js","_app/immutable/chunks/NavUl.D3IokGIf.js","_app/immutable/chunks/SidebarItem.D09pRQzo.js","_app/immutable/chunks/preload-helper.CQrtv1eE.js","_app/immutable/chunks/dynamic-import-helper.iPLCq9A2.js","_app/immutable/chunks/each.CtHIoDcm.js","_app/immutable/chunks/select.Ce8st8ek.js","_app/immutable/chunks/helpers.B9KbZW0W.js"];
export const stylesheets = ["_app/immutable/assets/0.C7HCLKsc.css","_app/immutable/assets/theme.C10J5-xP.css"];
export const fonts = [];
