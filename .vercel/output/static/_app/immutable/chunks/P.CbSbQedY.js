import { a as append, t as template } from "./disclose-version.0TX42Q8e.js";
import { p as push, t as template_effect, a as pop, c as child, r as reset, b as get, d as derived } from "./runtime.BkfDdwap.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { a as set_attributes, p as paragraph } from "./theme.BtjZjf2R.js";
import { p as prop, r as rest_props } from "./props.B7eOu8hW.js";
var root = template(`<p><!></p>`);
function P($$anchor, $$props) {
  push($$props, true);
  let className = prop($$props, "class", 3, "text-gray-900 dark:text-white"), height = prop($$props, "height", 3, "normal"), align = prop($$props, "align", 3, "left"), justify = prop($$props, "justify", 3, false), firstUpper = prop($$props, "firstUpper", 3, false), whitespace = prop($$props, "whitespace", 3, "normal"), size = prop($$props, "size", 3, "base"), space = prop($$props, "space", 3, "normal"), weight = prop($$props, "weight", 3, "normal"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "class",
    "height",
    "align",
    "justify",
    "italic",
    "firstUpper",
    "whitespace",
    "size",
    "space",
    "weight"
  ]);
  let classP = derived(() => paragraph({
    height: height(),
    size: size(),
    weight: weight(),
    space: space(),
    align: align(),
    justify: justify(),
    italic: $$props.italic,
    firstUpper: firstUpper(),
    whitespace: whitespace(),
    className: className()
  }));
  var p = root();
  let attributes;
  var node = child(p);
  snippet(node, () => $$props.children);
  reset(p);
  template_effect(() => attributes = set_attributes(p, attributes, { ...restProps, class: get(classP) }));
  append($$anchor, p);
  pop();
}
export {
  P
};
