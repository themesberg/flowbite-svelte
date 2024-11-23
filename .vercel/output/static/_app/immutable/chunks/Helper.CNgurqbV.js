import { a as append, t as template } from "./disclose-version.0TX42Q8e.js";
import { p as push, c as child, r as reset, t as template_effect, a as pop, b as get, d as derived } from "./runtime.BkfDdwap.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { a as set_attributes, F as helper } from "./theme.BtjZjf2R.js";
import { p as prop, r as rest_props } from "./props.B7eOu8hW.js";
var root = template(`<p><!></p>`);
function Helper($$anchor, $$props) {
  push($$props, true);
  let color = prop($$props, "color", 3, "gray"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "class",
    "color"
  ]);
  const base = derived(() => helper({ color: color(), className: $$props.class }));
  var p = root();
  let attributes;
  var node = child(p);
  snippet(node, () => $$props.children);
  reset(p);
  template_effect(() => attributes = set_attributes(p, attributes, { ...restProps, class: get(base) }));
  append($$anchor, p);
  pop();
}
export {
  Helper as H
};
