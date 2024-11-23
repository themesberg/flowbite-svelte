import { Q as push, a0 as spread_attributes, S as pop } from "./index.js";
import { y as dropdowndivider } from "./theme.js";
function DropdownDivider($$payload, $$props) {
  push();
  let {
    class: divClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const base = dropdowndivider({ class: divClass });
  $$payload.out += `<div${spread_attributes({ ...restProps, class: base })}></div>`;
  pop();
}
export {
  DropdownDivider as D
};
