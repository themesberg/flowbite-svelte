import { Q as push, a0 as spread_attributes, S as pop } from "./index.js";
import { N as dropdownFooter } from "./theme.js";
function DropdownFooter($$payload, $$props) {
  push();
  let {
    children,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let footerClass = dropdownFooter({ class: className });
  $$payload.out += `<div${spread_attributes({ ...restProps, class: footerClass })}>`;
  children($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  DropdownFooter as D
};
