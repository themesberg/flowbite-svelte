import { a as append, t as template } from "./disclose-version.0TX42Q8e.js";
import { p as push, a7 as set, t as template_effect, a as pop, c as child, r as reset, s as sibling, a6 as state, b as get, d as derived } from "./runtime.BkfDdwap.js";
import { c as remove_textarea_child } from "./store.B2xZ3Ft6.js";
import { p as prop, i as if_block, r as rest_props } from "./props.B7eOu8hW.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { z as bind_value, b as set_class, a as set_attributes, A as textarea } from "./theme.BtjZjf2R.js";
var root_1 = template(`<div><!></div>`);
var root_2 = template(`<div><!></div>`);
var root = template(`<div><!> <div><textarea></textarea></div> <!></div>`);
function Textarea($$anchor, $$props) {
  push($$props, true);
  let value = prop($$props, "value", 15), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "header",
    "footer",
    "value",
    "divClass",
    "innerClass",
    "headerClass",
    "footerClass",
    "disabled",
    "class",
    "cols"
  ]);
  let hasHeader = !!$$props.header;
  let hasFooter = !!$$props.footer;
  let wrapped = state(false);
  if ($$props.header || $$props.footer) {
    set(wrapped, true);
  } else {
    set(wrapped, false);
  }
  const $$d = derived(() => textarea({
    wrapped: get(wrapped),
    hasHeader,
    hasFooter,
    cols: !!$$props.cols
  })), base = derived(() => get($$d).base), wrapper = derived(() => get($$d).wrapper), innerWrapper = derived(() => get($$d).innerWrapper), headerCls = derived(() => get($$d).headerCls), footerCls = derived(() => get($$d).footerCls);
  var div = root();
  const class_derived = derived(() => get(wrapper)({ class: $$props.divClass }));
  var node = child(div);
  if_block(node, () => $$props.header, ($$anchor2) => {
    var div_1 = root_1();
    const class_derived_1 = derived(() => get(headerCls)({ class: $$props.headerClass }));
    var node_1 = child(div_1);
    snippet(node_1, () => $$props.header);
    reset(div_1);
    template_effect(() => set_class(div_1, get(class_derived_1)));
    append($$anchor2, div_1);
  });
  var div_2 = sibling(node, 2);
  const class_derived_2 = derived(() => get(innerWrapper)({ class: $$props.innerClass }));
  var textarea_1 = child(div_2);
  remove_textarea_child(textarea_1);
  let attributes;
  reset(div_2);
  var node_2 = sibling(div_2, 2);
  if_block(node_2, () => $$props.footer, ($$anchor2) => {
    var div_3 = root_2();
    const class_derived_3 = derived(() => get(footerCls)({ class: $$props.footerClass }));
    var node_3 = child(div_3);
    snippet(node_3, () => $$props.footer);
    reset(div_3);
    template_effect(() => set_class(div_3, get(class_derived_3)));
    append($$anchor2, div_3);
  });
  reset(div);
  template_effect(() => {
    set_class(div, get(class_derived));
    set_class(div_2, get(class_derived_2));
    attributes = set_attributes(textarea_1, attributes, {
      disabled: $$props.disabled,
      ...restProps,
      class: get(base)({ className: $$props.class })
    });
  });
  bind_value(textarea_1, value);
  append($$anchor, div);
  pop();
}
export {
  Textarea as T
};
