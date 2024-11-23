import { c as comment, a as append, b as text } from "./disclose-version.0TX42Q8e.js";
import { p as push, e as setContext, f as first_child, t as template_effect, b as get, n as next, a as pop, N as NAMESPACE_SVG, d as derived } from "./runtime.BkfDdwap.js";
import { a as set_text } from "./store.B2xZ3Ft6.js";
import { p as prop, i as if_block, s as spread_props, r as rest_props } from "./props.B7eOu8hW.js";
import { e as each, i as index } from "./each.CtHIoDcm.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { e as element } from "./H1.DunGd_Oq.js";
import { L as ListgroupItem, a as set_attributes, l as listGroup } from "./theme.BtjZjf2R.js";
function Listgroup($$anchor, $$props) {
  push($$props, true);
  let rounded = prop($$props, "rounded", 3, true), border = prop($$props, "border", 3, true), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "items",
    "active",
    "onclick",
    "rounded",
    "border",
    "class"
  ]);
  const base = derived(() => listGroup({
    rounded: rounded(),
    border: border(),
    className: $$props.class
  }));
  let tag = $$props.active ? "div" : "ul";
  setContext("active", $$props.active);
  var fragment = comment();
  var node = first_child(fragment);
  element(node, () => tag, false, ($$element, $$anchor2) => {
    let attributes;
    template_effect(() => attributes = set_attributes($$element, attributes, { ...restProps, class: get(base) }, void 0, $$element.namespaceURI === NAMESPACE_SVG, $$element.nodeName.includes("-")));
    var fragment_1 = comment();
    var node_1 = first_child(fragment_1);
    if_block(
      node_1,
      () => $$props.items,
      ($$anchor3) => {
        var fragment_2 = comment();
        var node_2 = first_child(fragment_2);
        each(node_2, 17, () => $$props.items, index, ($$anchor4, item) => {
          var fragment_3 = comment();
          var node_3 = first_child(fragment_3);
          if_block(
            node_3,
            () => typeof get(item) === "string",
            ($$anchor5) => {
              ListgroupItem($$anchor5, {
                get active() {
                  return $$props.active;
                },
                get onclick() {
                  return $$props.onclick;
                },
                children: ($$anchor6, $$slotProps) => {
                  next();
                  var text$1 = text();
                  template_effect(() => set_text(text$1, get(item)));
                  append($$anchor6, text$1);
                },
                $$slots: { default: true }
              });
            },
            ($$anchor5) => {
              var onclick_1 = derived(() => get(item).onclick ? get(item).onclick : $$props.onclick);
              ListgroupItem($$anchor5, spread_props(
                {
                  get active() {
                    return $$props.active;
                  }
                },
                () => get(item),
                {
                  get onclick() {
                    return get(onclick_1);
                  },
                  children: ($$anchor6, $$slotProps) => {
                    next();
                    var text_1 = text();
                    template_effect(() => set_text(text_1, get(item)));
                    append($$anchor6, text_1);
                  },
                  $$slots: { default: true }
                }
              ));
            }
          );
          append($$anchor4, fragment_3);
        });
        append($$anchor3, fragment_2);
      },
      ($$anchor3) => {
        var fragment_8 = comment();
        var node_4 = first_child(fragment_8);
        if_block(
          node_4,
          () => $$props.children,
          ($$anchor4) => {
            var fragment_9 = comment();
            var node_5 = first_child(fragment_9);
            snippet(node_5, () => $$props.children);
            append($$anchor4, fragment_9);
          },
          null,
          true
        );
        append($$anchor3, fragment_8);
      }
    );
    append($$anchor2, fragment_1);
  });
  append($$anchor, fragment);
  pop();
}
export {
  Listgroup as L
};
