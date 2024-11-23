import { Q as push, a0 as spread_attributes, S as pop } from "./index.js";
import { a4 as dropdownHeader } from "./theme.js";
function DropdownHeader($$payload, $$props) {
  push();
  let {
    children,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let headerClass = dropdownHeader({ class: className });
  $$payload.out += `<div${spread_attributes({ ...restProps, class: headerClass })}>`;
  children($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  DropdownHeader as D
};
