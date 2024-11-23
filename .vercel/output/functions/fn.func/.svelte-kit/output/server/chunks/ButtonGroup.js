import { Q as push, R as setContext, a0 as spread_attributes, S as pop } from "./index.js";
import { m as buttonGroup } from "./theme.js";
function ButtonGroup($$payload, $$props) {
  push();
  let {
    children,
    size = "md",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let groupClass = buttonGroup({ size, className });
  setContext("group", size);
  $$payload.out += `<div${spread_attributes({
    ...restProps,
    class: groupClass,
    role: "group"
  })}>`;
  children($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  ButtonGroup as B
};
