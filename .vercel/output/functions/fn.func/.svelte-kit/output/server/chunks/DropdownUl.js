import { Q as push, R as setContext, a0 as spread_attributes, W as attr, a2 as bind_props, S as pop } from "./index.js";
import { f as fly } from "./index3.js";
import { w as writable } from "./index2.js";
import { a1 as dropdown, a2 as dropdownul } from "./theme.js";
function Dropdown($$payload, $$props) {
  push();
  let {
    children,
    dropdownStatus = void 0,
    closeDropdown,
    class: className,
    backdropClass,
    params,
    transition = fly,
    activeUrl = "",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, backdrop } = dropdown();
  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);
  if (dropdownStatus) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes({
      ...restProps,
      class: base({ class: className })
    })}>`;
    children($$payload);
    $$payload.out += `<!----></div> <div role="presentation"${attr("class", backdrop({ class: backdropClass }))}></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { dropdownStatus });
  pop();
}
function DropdownUl($$payload, $$props) {
  push();
  let {
    children,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const ulCls = dropdownul({ class: className });
  $$payload.out += `<ul${spread_attributes({ ...restProps, class: ulCls })}>`;
  children($$payload);
  $$payload.out += `<!----></ul>`;
  pop();
}
export {
  Dropdown as D,
  DropdownUl as a
};
