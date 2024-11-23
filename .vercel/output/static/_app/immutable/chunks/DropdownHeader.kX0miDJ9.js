import { a as append, t as template } from "./disclose-version.0TX42Q8e.js";
import { p as push, c as child, r as reset, t as template_effect, a as pop, b as get, d as derived } from "./runtime.BkfDdwap.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { a as set_attributes, q as dropdownHeader } from "./theme.BtjZjf2R.js";
import { r as rest_props } from "./props.B7eOu8hW.js";
var root = template(`<div><!></div>`);
function DropdownHeader($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "class"
  ]);
  let headerClass = derived(() => dropdownHeader({ class: $$props.class }));
  var div = root();
  let attributes;
  var node = child(div);
  snippet(node, () => $$props.children);
  reset(div);
  template_effect(() => attributes = set_attributes(div, attributes, { ...restProps, class: get(headerClass) }));
  append($$anchor, div);
  pop();
}
export {
  DropdownHeader as D
};
