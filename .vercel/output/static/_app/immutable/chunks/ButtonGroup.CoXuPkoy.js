import { a as append, t as template } from "./disclose-version.0TX42Q8e.js";
import { p as push, e as setContext, t as template_effect, a as pop, c as child, r as reset, b as get, d as derived } from "./runtime.BkfDdwap.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { a as set_attributes, v as buttonGroup } from "./theme.BtjZjf2R.js";
import { p as prop, r as rest_props } from "./props.B7eOu8hW.js";
var root = template(`<div><!></div>`);
function ButtonGroup($$anchor, $$props) {
  push($$props, true);
  let size = prop($$props, "size", 3, "md"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "size",
    "class"
  ]);
  let groupClass = derived(() => buttonGroup({ size: size(), className: $$props.class }));
  setContext("group", size());
  var div = root();
  let attributes;
  var node = child(div);
  snippet(node, () => $$props.children);
  reset(div);
  template_effect(() => attributes = set_attributes(div, attributes, {
    ...restProps,
    class: get(groupClass),
    role: "group"
  }));
  append($$anchor, div);
  pop();
}
export {
  ButtonGroup as B
};
