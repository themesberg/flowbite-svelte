import { Q as push, a0 as spread_attributes, S as pop } from "./index.js";
import { G as indicator } from "./theme.js";
function Indicator($$payload, $$props) {
  push();
  let {
    children,
    color = "primary",
    cornerStyle = "circular",
    size = "md",
    border = false,
    placement,
    offset = true,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let hasChildren = !!children;
  const { base } = indicator({
    color,
    size,
    cornerStyle,
    border,
    placement,
    offset,
    hasChildren
  });
  $$payload.out += `<div${spread_attributes({
    ...restProps,
    class: base({ className })
  })}>`;
  if (children) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  Indicator as I
};
