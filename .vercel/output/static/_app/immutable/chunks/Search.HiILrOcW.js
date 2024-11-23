import { a as append, t as template } from "./disclose-version.0TX42Q8e.js";
import { p as push, c as child, r as reset, s as sibling, t as template_effect, a as pop, b as get, d as derived } from "./runtime.BkfDdwap.js";
import { p as prop, i as if_block, r as rest_props } from "./props.B7eOu8hW.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { x as remove_input_defaults, z as bind_value, b as set_class, c as set_svg_class, a as set_attributes, G as search } from "./theme.BtjZjf2R.js";
var root_1 = template(`<div><!></div>`);
var root = template(`<div><div><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg></div> <input> <!></div>`);
function Search($$anchor, $$props) {
  push($$props, true);
  let size = prop($$props, "size", 3, "md"), placeholder = prop($$props, "placeholder", 3, "Search"), value = prop($$props, "value", 15), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "inputClass",
    "size",
    "placeholder",
    "value"
  ]);
  const $$d = derived(() => search({ size: size() })), base = derived(() => get($$d).base), content = derived(() => get($$d).content), icon = derived(() => get($$d).icon), inputCls = derived(() => get($$d).input), leftDiv = derived(() => get($$d).leftDiv);
  var div = root();
  const class_derived = derived(() => get(base)());
  var div_1 = child(div);
  const class_derived_1 = derived(() => get(leftDiv)());
  var svg = child(div_1);
  const class_derived_2 = derived(() => get(icon)());
  reset(div_1);
  var input = sibling(div_1, 2);
  remove_input_defaults(input);
  let attributes;
  var node = sibling(input, 2);
  if_block(node, () => $$props.children, ($$anchor2) => {
    var div_2 = root_1();
    const class_derived_3 = derived(() => get(content)());
    var node_1 = child(div_2);
    snippet(node_1, () => $$props.children);
    reset(div_2);
    template_effect(() => set_class(div_2, get(class_derived_3)));
    append($$anchor2, div_2);
  });
  reset(div);
  template_effect(() => {
    set_class(div, get(class_derived));
    set_class(div_1, get(class_derived_1));
    set_svg_class(svg, get(class_derived_2));
    attributes = set_attributes(input, attributes, {
      type: "search",
      class: get(inputCls)({ class: $$props.inputClass }),
      placeholder: placeholder(),
      required: true,
      ...restProps
    });
  });
  bind_value(input, value);
  append($$anchor, div);
  pop();
}
export {
  Search as S
};
