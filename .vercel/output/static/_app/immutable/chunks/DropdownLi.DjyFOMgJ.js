import { c as comment, a as append, t as template } from "./disclose-version.0TX42Q8e.js";
import { p as push, g as getContext, a7 as set, u as user_effect, f as first_child, t as template_effect, a as pop, a6 as state, b as get, c as child, r as reset, d as derived } from "./runtime.BkfDdwap.js";
import { b as proxy, i as if_block, r as rest_props } from "./props.B7eOu8hW.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { a as set_attributes, b as set_class, o as dropdownli } from "./theme.BtjZjf2R.js";
var root_1 = template(`<a><!></a>`);
var root = template(`<li><!></li>`);
function DropdownLi($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "aClass",
    "children",
    "href",
    "activeClass",
    "liClass"
  ]);
  const activeUrlStore = getContext("activeUrl");
  let sidebarUrl = state("");
  activeUrlStore.subscribe((value) => {
    set(sidebarUrl, proxy(value));
  });
  let active = state(false);
  user_effect(() => {
    set(active, proxy(get(sidebarUrl) ? $$props.href === get(sidebarUrl) : false));
  });
  const $$d = derived(dropdownli), anchor = derived(() => get($$d).anchor), activeAnchor = derived(() => get($$d).activeAnchor);
  var li = root();
  var node = child(li);
  if_block(
    node,
    () => $$props.href,
    ($$anchor2) => {
      var a = root_1();
      let attributes;
      var node_1 = child(a);
      snippet(node_1, () => $$props.children);
      reset(a);
      template_effect(() => attributes = set_attributes(a, attributes, {
        href: $$props.href,
        ...restProps,
        class: get(active) ? get(activeAnchor)({ class: $$props.activeClass }) : get(anchor)({ class: $$props.aClass })
      }));
      append($$anchor2, a);
    },
    ($$anchor2) => {
      var fragment = comment();
      var node_2 = first_child(fragment);
      snippet(node_2, () => $$props.children);
      append($$anchor2, fragment);
    }
  );
  reset(li);
  template_effect(() => set_class(li, $$props.liClass));
  append($$anchor, li);
  pop();
}
export {
  DropdownLi as D
};
