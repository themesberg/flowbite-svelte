import { c as comment, a as append, t as template } from "./disclose-version.0TX42Q8e.js";
import { p as push, g as getContext, f as first_child, a as pop, t as template_effect, c as child, r as reset, s as sibling, b as get, a8 as derived_safe_equal, d as derived } from "./runtime.BkfDdwap.js";
import { p as prop, i as if_block, r as rest_props } from "./props.B7eOu8hW.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { x as remove_input_defaults, z as bind_value, N as CloseButton, b as set_class, a as set_attributes, O as input } from "./theme.BtjZjf2R.js";
var root_2 = template(`<div><!></div>`);
var root_4 = template(`<input>`);
var root_5 = template(`<div><!></div>`);
var root_1 = template(`<!> <!> <!> <!>`, 1);
var root_9 = template(`<div><!></div>`);
function Input($$anchor, $$props) {
  push($$props, true);
  const inputContent = ($$anchor2) => {
    var fragment = root_1();
    var node = first_child(fragment);
    if_block(node, () => $$props.left, ($$anchor3) => {
      var div = root_2();
      const class_derived = derived(() => get(leftCls)({ class: $$props.classLeft }));
      var node_1 = child(div);
      snippet(node_1, () => $$props.left);
      reset(div);
      template_effect(() => set_class(div, get(class_derived)));
      append($$anchor3, div);
    });
    var node_2 = sibling(node, 2);
    if_block(
      node_2,
      () => $$props.children,
      ($$anchor3) => {
        var fragment_1 = comment();
        var node_3 = first_child(fragment_1);
        var render_arg = derived_safe_equal(() => ({
          ...restProps,
          class: get(inputCls)()
        }));
        snippet(node_3, () => $$props.children, () => get(render_arg));
        append($$anchor3, fragment_1);
      },
      ($$anchor3) => {
        var input_1 = root_4();
        remove_input_defaults(input_1);
        let attributes;
        template_effect(() => attributes = set_attributes(input_1, attributes, {
          ...restProps,
          class: get(inputCls)({ class: $$props.class })
        }));
        bind_value(input_1, value);
        append($$anchor3, input_1);
      }
    );
    var node_4 = sibling(node_2, 2);
    if_block(node_4, () => $$props.right, ($$anchor3) => {
      var div_1 = root_5();
      const class_derived_1 = derived(() => get(rightCls)({ class: $$props.classRight }));
      var node_5 = child(div_1);
      snippet(node_5, () => $$props.right);
      reset(div_1);
      template_effect(() => set_class(div_1, get(class_derived_1)));
      append($$anchor3, div_1);
    });
    var node_6 = sibling(node_4, 2);
    if_block(node_6, () => clearable() && value() && `${value()}`.length > 0, ($$anchor3) => {
      var class_1 = derived(() => get(rightCls)({ class: $$props.classRight }));
      CloseButton($$anchor3, {
        get size() {
          return $$props.size;
        },
        onclick: clearAll,
        get class() {
          return get(class_1);
        }
      });
    });
    append($$anchor2, fragment);
  };
  let value = prop($$props, "value", 15), clearable = prop($$props, "clearable", 3, false), color = prop($$props, "color", 3, "default"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "left",
    "right",
    "value",
    "clearable",
    "size",
    "color",
    "class",
    "classLeft",
    "classRight",
    "divClass"
  ]);
  let background = getContext("background");
  let group = getContext("group");
  let isGroup = !!group;
  let _size = derived(() => $$props.size || clampSize(group == null ? void 0 : group.size) || "md");
  const _color = derived(() => color() === "default" && background ? "tinted" : color());
  const $$d = derived(() => input({
    size: get(_size),
    color: get(_color),
    group: isGroup,
    class: $$props.class
  })), base = derived(() => get($$d).base), inputCls = derived(() => get($$d).input), leftCls = derived(() => get($$d).left), rightCls = derived(() => get($$d).right);
  const clearAll = () => {
    value(void 0);
  };
  var fragment_3 = comment();
  var node_7 = first_child(fragment_3);
  if_block(
    node_7,
    () => group,
    ($$anchor2) => {
      inputContent($$anchor2);
    },
    ($$anchor2) => {
      var fragment_5 = comment();
      var node_8 = first_child(fragment_5);
      if_block(
        node_8,
        () => $$props.right || $$props.left,
        ($$anchor3) => {
          var div_2 = root_9();
          const class_derived_2 = derived(() => get(base)({ class: $$props.divClass }));
          var node_9 = child(div_2);
          inputContent(node_9);
          reset(div_2);
          template_effect(() => set_class(div_2, get(class_derived_2)));
          append($$anchor3, div_2);
        },
        ($$anchor3) => {
          inputContent($$anchor3);
        },
        true
      );
      append($$anchor2, fragment_5);
    }
  );
  append($$anchor, fragment_3);
  pop();
}
function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
export {
  Input as I,
  clampSize as c
};
