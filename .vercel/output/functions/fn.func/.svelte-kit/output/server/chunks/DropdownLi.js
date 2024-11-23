import { Q as push, a1 as getContext, W as attr, a0 as spread_attributes, S as pop } from "./index.js";
import { a3 as dropdownli } from "./theme.js";
function DropdownLi($$payload, $$props) {
  push();
  let {
    aClass,
    children,
    href,
    activeClass,
    liClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const activeUrlStore = getContext("activeUrl");
  activeUrlStore.subscribe((value) => {
  });
  const { anchor, activeAnchor } = dropdownli();
  $$payload.out += `<li${attr("class", liClass)}>`;
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({
      href,
      ...restProps,
      class: anchor({ class: aClass })
    })}>`;
    children($$payload);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    children($$payload);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--></li>`;
  pop();
}
export {
  DropdownLi as D
};
