import { a as append, t as template, c as comment } from "./disclose-version.0TX42Q8e.js";
import { p as push, t as template_effect, a as pop, c as child, f as first_child, r as reset, b as get, d as derived } from "./runtime.BkfDdwap.js";
import { p as prop, i as if_block, r as rest_props } from "./props.B7eOu8hW.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { a as set_attributes, m as indicator } from "./theme.BtjZjf2R.js";
var root = template(`<div><!></div>`);
function Indicator($$anchor, $$props) {
  push($$props, true);
  let color = prop($$props, "color", 3, "primary"), cornerStyle = prop($$props, "cornerStyle", 3, "circular"), size = prop($$props, "size", 3, "md"), border = prop($$props, "border", 3, false), offset = prop($$props, "offset", 3, true), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "color",
    "cornerStyle",
    "size",
    "border",
    "placement",
    "offset",
    "class"
  ]);
  let hasChildren = !!$$props.children;
  const $$d = derived(() => indicator({
    color: color(),
    size: size(),
    cornerStyle: cornerStyle(),
    border: border(),
    placement: $$props.placement,
    offset: offset(),
    hasChildren
  })), base = derived(() => get($$d).base);
  var div = root();
  let attributes;
  var node = child(div);
  if_block(node, () => $$props.children, ($$anchor2) => {
    var fragment = comment();
    var node_1 = first_child(fragment);
    snippet(node_1, () => $$props.children);
    append($$anchor2, fragment);
  });
  reset(div);
  template_effect(() => attributes = set_attributes(div, attributes, {
    ...restProps,
    class: get(base)({ className: $$props.class })
  }));
  append($$anchor, div);
  pop();
}
export {
  Indicator as I
};
