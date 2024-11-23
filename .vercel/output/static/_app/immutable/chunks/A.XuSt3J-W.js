import { a as append, t as template } from "./disclose-version.0TX42Q8e.js";
import { p as push, t as template_effect, a as pop, c as child, r as reset, b as get, d as derived } from "./runtime.BkfDdwap.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { a as set_attributes, C as anchor } from "./theme.BtjZjf2R.js";
import { p as prop, r as rest_props } from "./props.B7eOu8hW.js";
var root = template(`<a><!></a>`);
function A($$anchor, $$props) {
  push($$props, true);
  let color = prop($$props, "color", 3, "primary"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "color",
    "class"
  ]);
  let linkClass = derived(() => anchor({ color: color(), className: $$props.class }));
  var a = root();
  let attributes;
  var node = child(a);
  snippet(node, () => $$props.children);
  reset(a);
  template_effect(() => attributes = set_attributes(a, attributes, { ...restProps, class: get(linkClass) }));
  append($$anchor, a);
  pop();
}
export {
  A
};
