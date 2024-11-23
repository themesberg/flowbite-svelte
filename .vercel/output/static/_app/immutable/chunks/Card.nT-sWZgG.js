import { c as comment, a as append, t as template } from "./disclose-version.0TX42Q8e.js";
import { p as push, f as first_child, t as template_effect, a as pop, c as child, r as reset, s as sibling, b as get, d as derived } from "./runtime.BkfDdwap.js";
import { p as prop, i as if_block, r as rest_props } from "./props.B7eOu8hW.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { b as set_class, s as set_attribute, a as set_attributes, r as card } from "./theme.BtjZjf2R.js";
var root_2 = template(`<img> <div><!></div>`, 1);
var root_3 = template(`<div><!></div>`);
var root_4 = template(`<a><!></a>`);
var root_5 = template(`<div><!></div>`);
function Card($$anchor, $$props) {
  push($$props, true);
  const childSlot = ($$anchor2) => {
    var fragment = comment();
    var node = first_child(fragment);
    if_block(
      node,
      () => $$props.img,
      ($$anchor3) => {
        var fragment_1 = root_2();
        var img_1 = first_child(fragment_1);
        const class_derived = derived(() => get(image)({ class: $$props.imgClass }));
        var div = sibling(img_1, 2);
        const class_derived_1 = derived(() => get(content)({ class: $$props.contentClass }));
        var node_1 = child(div);
        snippet(node_1, () => $$props.children);
        reset(div);
        template_effect(() => {
          set_class(img_1, get(class_derived));
          set_attribute(img_1, "src", $$props.img.src);
          set_attribute(img_1, "alt", $$props.img.alt);
          set_class(div, get(class_derived_1));
        });
        append($$anchor3, fragment_1);
      },
      ($$anchor3) => {
        var div_1 = root_3();
        const class_derived_2 = derived(() => get(content)({ class: $$props.contentClass }));
        var node_2 = child(div_1);
        snippet(node_2, () => $$props.children);
        reset(div_1);
        template_effect(() => set_class(div_1, get(class_derived_2)));
        append($$anchor3, div_1);
      }
    );
    append($$anchor2, fragment);
  };
  let color = prop($$props, "color", 3, "gray"), horizontal = prop($$props, "horizontal", 3, false), shadow = prop($$props, "shadow", 3, "md"), reverse = prop($$props, "reverse", 3, false), padding = prop($$props, "padding", 3, "lg"), size = prop($$props, "size", 3, "sm"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "href",
    "color",
    "horizontal",
    "shadow",
    "reverse",
    "img",
    "padding",
    "size",
    "class",
    "imgClass",
    "contentClass"
  ]);
  const $$d = derived(() => card({
    size: size(),
    color: color(),
    shadow: shadow(),
    padding: padding(),
    horizontal: horizontal(),
    reverse: reverse(),
    href: !!$$props.href
  })), base = derived(() => get($$d).base), image = derived(() => get($$d).image), content = derived(() => get($$d).content);
  const commonProps = derived(() => ({
    class: get(base)({ class: $$props.class }),
    ...restProps
  }));
  const anchorProps = derived(() => ({ ...get(commonProps), href: $$props.href }));
  const divProps = derived(() => ({
    ...get(commonProps),
    type: "presentation"
  }));
  var fragment_2 = comment();
  var node_3 = first_child(fragment_2);
  if_block(
    node_3,
    () => $$props.href,
    ($$anchor2) => {
      var a = root_4();
      let attributes;
      var node_4 = child(a);
      childSlot(node_4);
      reset(a);
      template_effect(() => attributes = set_attributes(a, attributes, { ...get(anchorProps) }));
      append($$anchor2, a);
    },
    ($$anchor2) => {
      var div_2 = root_5();
      let attributes_1;
      var node_5 = child(div_2);
      childSlot(node_5);
      reset(div_2);
      template_effect(() => attributes_1 = set_attributes(div_2, attributes_1, { ...get(divProps) }));
      append($$anchor2, div_2);
    }
  );
  append($$anchor, fragment_2);
  pop();
}
export {
  Card as C
};
