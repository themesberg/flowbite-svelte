import { a as append, t as template } from "./disclose-version.0TX42Q8e.js";
import { p as push, t as template_effect, a as pop } from "./runtime.BkfDdwap.js";
import { e as dropdowndivider, a as set_attributes } from "./theme.BtjZjf2R.js";
import { r as rest_props } from "./props.B7eOu8hW.js";
var root = template(`<div></div>`);
function DropdownDivider($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, ["$$slots", "$$events", "$$legacy", "class"]);
  const base = dropdowndivider({ class: $$props.class });
  var div = root();
  let attributes;
  template_effect(() => attributes = set_attributes(div, attributes, { ...restProps, class: base }));
  append($$anchor, div);
  pop();
}
export {
  DropdownDivider as D
};
