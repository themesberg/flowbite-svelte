import { a as append, t as template, c as comment } from "./disclose-version.0TX42Q8e.js";
import { p as push, b as get, f as first_child, t as template_effect, a as pop, d as derived, s as sibling } from "./runtime.BkfDdwap.js";
import { p as prop, i as if_block, r as rest_props } from "./props.B7eOu8hW.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { w as bind_checked, x as remove_input_defaults, a as set_attributes, b as set_class, y as toggle } from "./theme.BtjZjf2R.js";
import { L as Label } from "./CompoAttributesViewer.HsPJjrMu.js";
var root_1 = template(`<!> <input> <span></span> <!>`, 1);
function Toggle($$anchor, $$props) {
  push($$props, true);
  let toggleSize = prop($$props, "toggleSize", 3, "default"), checked = prop($$props, "checked", 15), color = prop($$props, "color", 3, "primary"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "toggleSize",
    "value",
    "checked",
    "disabled",
    "color",
    "aria_describedby",
    "labelClass",
    "inputClass",
    "spanClass",
    "leftLabel"
  ]);
  const $$d = derived(() => toggle({
    color: color(),
    checked: checked(),
    size: toggleSize(),
    disabled: $$props.disabled
  })), input = derived(() => get($$d).input), label = derived(() => get($$d).label), span = derived(() => get($$d).span);
  var class_1 = derived(() => get(label)({ class: $$props.labelClass }));
  Label($$anchor, {
    get class() {
      return get(class_1);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1();
      var node = first_child(fragment_1);
      if_block(node, () => $$props.leftLabel, ($$anchor3) => {
        var fragment_2 = comment();
        var node_1 = first_child(fragment_2);
        snippet(node_1, () => $$props.leftLabel);
        append($$anchor3, fragment_2);
      });
      var input_1 = sibling(node, 2);
      remove_input_defaults(input_1);
      let attributes;
      var span_1 = sibling(input_1, 2);
      const class_derived = derived(() => get(span)({ class: $$props.spanClass }));
      var node_2 = sibling(span_1, 2);
      if_block(node_2, () => $$props.children, ($$anchor3) => {
        var fragment_3 = comment();
        var node_3 = first_child(fragment_3);
        snippet(node_3, () => $$props.children);
        append($$anchor3, fragment_3);
      });
      template_effect(() => {
        attributes = set_attributes(input_1, attributes, {
          type: "checkbox",
          value: $$props.value,
          "aria-describedby": $$props.aria_describedby,
          ...restProps,
          disabled: $$props.disabled,
          class: get(input)({ class: $$props.inputClass })
        });
        set_class(span_1, get(class_derived));
      });
      bind_checked(input_1, checked);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  pop();
}
export {
  Toggle as T
};
