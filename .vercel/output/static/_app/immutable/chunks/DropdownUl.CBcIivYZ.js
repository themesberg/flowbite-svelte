import { a as append, t as template } from "./disclose-version.0TX42Q8e.js";
import { p as push, t as template_effect, a as pop, c as child, r as reset, b as get, d as derived } from "./runtime.BkfDdwap.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { a as set_attributes, n as dropdownul } from "./theme.BtjZjf2R.js";
import { r as rest_props } from "./props.B7eOu8hW.js";
var root = template(`<ul><!></ul>`);
function DropdownUl($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "class"
  ]);
  const ulCls = derived(() => dropdownul({ class: $$props.class }));
  var ul = root();
  let attributes;
  var node = child(ul);
  snippet(node, () => $$props.children);
  reset(ul);
  template_effect(() => attributes = set_attributes(ul, attributes, { ...restProps, class: get(ulCls) }));
  append($$anchor, ul);
  pop();
}
export {
  DropdownUl as D
};
