import { c as comment, a as append, t as template } from "./disclose-version.0TX42Q8e.js";
import { p as push, g as getContext, f as first_child, b as get, t as template_effect, a as pop, d as derived, c as child, r as reset } from "./runtime.BkfDdwap.js";
import { p as prop, i as if_block, s as spread_props, r as rest_props } from "./props.B7eOu8hW.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { b as set_class, g as gradientButton } from "./theme.BtjZjf2R.js";
import { B as Button } from "./markdown.Ba9FtS5g.js";
var root_1 = template(`<div><!></div>`);
function GradientButton($$anchor, $$props) {
  push($$props, true);
  const group = getContext("group");
  let color = prop($$props, "color", 3, "blue"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "outline",
    "pill",
    "color",
    "shadow",
    "class",
    "href",
    "disabled",
    "size"
  ]);
  const $$d = derived(() => gradientButton({
    color: color(),
    outline: $$props.outline,
    pill: $$props.pill,
    shadow: $$props.shadow,
    disabled: $$props.disabled,
    group: !!group
  })), base = derived(() => get($$d).base), outlineWrapper = derived(() => get($$d).outlineWrapper);
  var fragment = comment();
  var node = first_child(fragment);
  if_block(
    node,
    () => $$props.outline,
    ($$anchor2) => {
      var div = root_1();
      const class_derived = derived(() => get(base)({ className: $$props.class }));
      var node_1 = child(div);
      var class_1 = derived(() => get(outlineWrapper)());
      Button(node_1, spread_props(() => restProps, {
        get class() {
          return get(class_1);
        },
        get disabled() {
          return $$props.disabled;
        },
        get href() {
          return $$props.href;
        },
        get size() {
          return $$props.size;
        },
        children: ($$anchor3, $$slotProps) => {
          var fragment_1 = comment();
          var node_2 = first_child(fragment_1);
          snippet(node_2, () => $$props.children);
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      }));
      reset(div);
      template_effect(() => set_class(div, get(class_derived)));
      append($$anchor2, div);
    },
    ($$anchor2) => {
      var class_2 = derived(() => get(base)({ className: $$props.class }));
      Button($$anchor2, spread_props(() => restProps, {
        get class() {
          return get(class_2);
        },
        get disabled() {
          return $$props.disabled;
        },
        get href() {
          return $$props.href;
        },
        get size() {
          return $$props.size;
        },
        children: ($$anchor3, $$slotProps) => {
          var fragment_3 = comment();
          var node_3 = first_child(fragment_3);
          snippet(node_3, () => $$props.children);
          append($$anchor3, fragment_3);
        },
        $$slots: { default: true }
      }));
    }
  );
  append($$anchor, fragment);
  pop();
}
export {
  GradientButton as G
};
