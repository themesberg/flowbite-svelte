import { a as append, t as template, c as comment } from "./disclose-version.0TX42Q8e.js";
import { p as push, t as template_effect, a as pop, c as child, f as first_child, r as reset, b as get, d as derived } from "./runtime.BkfDdwap.js";
import { i as if_block, r as rest_props } from "./props.B7eOu8hW.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { a as set_attributes, I as span } from "./theme.BtjZjf2R.js";
var root = template(`<span><!></span>`);
function Span($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "class",
    "italic",
    "underline",
    "linethrough",
    "uppercase",
    "gradient",
    "highlight",
    "decoration",
    "decorationColor",
    "decorationThickness"
  ]);
  let classSpan = derived(() => span({
    italic: $$props.italic,
    underline: $$props.underline,
    linethrough: $$props.linethrough,
    uppercase: $$props.uppercase,
    gradient: $$props.gradient,
    highlight: $$props.highlight,
    decoration: $$props.decoration,
    decorationColor: $$props.decorationColor,
    decorationThickness: $$props.decorationThickness,
    className: $$props.class
  }));
  var span_1 = root();
  let attributes;
  var node = child(span_1);
  if_block(node, () => $$props.children, ($$anchor2) => {
    var fragment = comment();
    var node_1 = first_child(fragment);
    snippet(node_1, () => $$props.children);
    append($$anchor2, fragment);
  });
  reset(span_1);
  template_effect(() => attributes = set_attributes(span_1, attributes, { ...restProps, class: get(classSpan) }));
  append($$anchor, span_1);
  pop();
}
export {
  Span as S
};
