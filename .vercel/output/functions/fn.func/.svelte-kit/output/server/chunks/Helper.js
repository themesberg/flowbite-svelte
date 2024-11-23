import { Q as push, a0 as spread_attributes, S as pop } from "./index.js";
import { af as helper } from "./theme.js";
function Helper($$payload, $$props) {
  push();
  let {
    children,
    class: className,
    color = "gray",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const base = helper({ color, className });
  $$payload.out += `<p${spread_attributes({ ...restProps, class: base })}>`;
  children($$payload);
  $$payload.out += `<!----></p>`;
  pop();
}
export {
  Helper as H
};
