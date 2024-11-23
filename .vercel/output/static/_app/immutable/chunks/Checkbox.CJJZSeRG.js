import { c as comment, a as append, t as template } from "./disclose-version.0TX42Q8e.js";
import { p as push, f as first_child, b as get, t as template_effect, a as pop, d as derived, s as sibling, n as next } from "./runtime.BkfDdwap.js";
import { a as set_text } from "./store.B2xZ3Ft6.js";
import { p as prop, b as proxy, i as if_block, r as rest_props } from "./props.B7eOu8hW.js";
import { e as each, i as index } from "./each.CtHIoDcm.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { w as bind_checked, x as remove_input_defaults, D as bind_group, a as set_attributes, E as checkbox } from "./theme.BtjZjf2R.js";
import { L as Label } from "./CompoAttributesViewer.HsPJjrMu.js";
var root_3 = template(` <input> <!>`, 1);
var root_6 = template(`<input> <!>`, 1);
function Checkbox($$anchor, $$props) {
  push($$props, true);
  const binding_group = [];
  let color = prop($$props, "color", 3, "primary"), group = prop($$props, "group", 31, () => proxy([])), choices = prop($$props, "choices", 19, () => []), checked = prop($$props, "checked", 15, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "aria_describedby",
    "color",
    "custom",
    "inline",
    "tinted",
    "rounded",
    "group",
    "choices",
    "checked",
    "classLabel",
    "indeterminate",
    "class"
  ]);
  const $$d = derived(() => checkbox({
    color: color(),
    tinted: $$props.tinted,
    custom: $$props.custom,
    rounded: $$props.rounded,
    inline: $$props.inline
  })), base = derived(() => get($$d).base), label = derived(() => get($$d).label);
  var fragment = comment();
  var node = first_child(fragment);
  if_block(
    node,
    () => choices().length > 0,
    ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      each(node_1, 17, choices, index, ($$anchor3, $$item, i) => {
        let value = () => get($$item).value;
        let checkboxLabel = () => get($$item).checkboxLabel;
        var class_1 = derived(() => get(label)({ class: $$props.classLabel }));
        Label($$anchor3, {
          get class() {
            return get(class_1);
          },
          for: `checkbox-${i}`,
          children: ($$anchor4, $$slotProps) => {
            next();
            var fragment_3 = root_3();
            var text = first_child(fragment_3);
            var input = sibling(text);
            remove_input_defaults(input);
            let attributes;
            var node_2 = sibling(input, 2);
            if_block(node_2, () => $$props.children, ($$anchor5) => {
              var fragment_4 = comment();
              var node_3 = first_child(fragment_4);
              snippet(node_3, () => $$props.children);
              append($$anchor5, fragment_4);
            });
            template_effect(() => {
              set_text(text, `${checkboxLabel() ?? ""} `);
              attributes = set_attributes(input, attributes, {
                id: `checkbox-${i}`,
                type: "checkbox",
                value: value(),
                ...restProps,
                class: get(base)({ class: $$props.class })
              });
            });
            bind_group(
              binding_group,
              [],
              input,
              () => {
                value();
                return group();
              },
              group
            );
            append($$anchor4, fragment_3);
          },
          $$slots: { default: true }
        });
      });
      append($$anchor2, fragment_1);
    },
    ($$anchor2) => {
      var class_2 = derived(() => get(label)({ class: $$props.classLabel }));
      Label($$anchor2, {
        get class() {
          return get(class_2);
        },
        children: ($$anchor3, $$slotProps) => {
          var fragment_6 = root_6();
          var input_1 = first_child(fragment_6);
          remove_input_defaults(input_1);
          let attributes_1;
          var node_4 = sibling(input_1, 2);
          if_block(node_4, () => $$props.children, ($$anchor4) => {
            var fragment_7 = comment();
            var node_5 = first_child(fragment_7);
            snippet(node_5, () => $$props.children);
            append($$anchor4, fragment_7);
          });
          template_effect(() => attributes_1 = set_attributes(input_1, attributes_1, {
            type: "checkbox",
            "aria-describedby": $$props.aria_describedby,
            indeterminate: $$props.indeterminate,
            ...restProps,
            class: get(base)({ class: $$props.class })
          }));
          bind_checked(input_1, checked);
          append($$anchor3, fragment_6);
        },
        $$slots: { default: true }
      });
    }
  );
  append($$anchor, fragment);
  pop();
}
export {
  Checkbox as C
};
