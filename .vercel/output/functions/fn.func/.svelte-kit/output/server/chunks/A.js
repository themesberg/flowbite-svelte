import { Q as push, a0 as spread_attributes, S as pop } from "./index.js";
import { ad as anchor } from "./theme.js";
function A($$payload, $$props) {
  push();
  let {
    children,
    color = "primary",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let linkClass = anchor({ color, className });
  $$payload.out += `<a${spread_attributes({ ...restProps, class: linkClass })}>`;
  children($$payload);
  $$payload.out += `<!----></a>`;
  pop();
}
export {
  A
};
