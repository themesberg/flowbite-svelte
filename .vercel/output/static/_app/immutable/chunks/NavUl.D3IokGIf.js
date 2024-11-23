import { a as append, t as template, c as comment } from "./disclose-version.0TX42Q8e.js";
import { p as push, g as getContext, t as template_effect, a as pop, c as child, f as first_child, s as sibling, r as reset, b as get, d as derived, a7 as set, u as user_effect, a6 as state, e as setContext } from "./runtime.BkfDdwap.js";
import { a as set_text } from "./store.B2xZ3Ft6.js";
import { p as prop, i as if_block, r as rest_props, b as proxy } from "./props.B7eOu8hW.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { b as set_class, a as set_attributes, W as navbrand, X as navLi, Y as navUl } from "./theme.BtjZjf2R.js";
import { w as writable } from "./index.IFFPp5_U.js";
var root_2 = template(`<span> </span>`);
var root$2 = template(`<a><!> <!></a>`);
function NavBrand($$anchor, $$props) {
  push($$props, true);
  let closeNav = prop($$props, "closeNav", 7), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "siteName",
    "closeNav",
    "aClass",
    "spanClass"
  ]);
  const context = getContext("navbarContext");
  closeNav(context.closeNav ?? closeNav());
  const $$d = derived(navbrand), base = derived(() => get($$d).base), span = derived(() => get($$d).span);
  var a = root$2();
  let attributes;
  var node = child(a);
  if_block(node, () => $$props.children, ($$anchor2) => {
    var fragment = comment();
    var node_1 = first_child(fragment);
    snippet(node_1, () => $$props.children);
    append($$anchor2, fragment);
  });
  var node_2 = sibling(node, 2);
  if_block(node_2, () => $$props.siteName, ($$anchor2) => {
    var span_1 = root_2();
    const class_derived = derived(() => get(span)({ class: $$props.spanClass }));
    var text = child(span_1, true);
    reset(span_1);
    template_effect(() => {
      set_class(span_1, get(class_derived));
      set_text(text, $$props.siteName);
    });
    append($$anchor2, span_1);
  });
  reset(a);
  template_effect(() => attributes = set_attributes(a, attributes, {
    href: "/",
    onclick: closeNav(),
    ...restProps,
    class: get(base)({ class: $$props.aClass })
  }));
  append($$anchor, a);
  pop();
}
var root$1 = template(`<li><a><!></a></li>`);
function NavLi($$anchor, $$props) {
  push($$props, true);
  let closeNav = prop($$props, "closeNav", 7), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "closeNav",
    "href",
    "children",
    "aClass",
    "class"
  ]);
  let breakPoint;
  const context = getContext("navbarContext");
  breakPoint = context.breakPoint ?? "md";
  closeNav(context.closeNav ?? closeNav());
  const activeUrlStore = getContext("activeUrl");
  let navUrl = state("");
  activeUrlStore.subscribe((value) => {
    set(navUrl, proxy(value));
  });
  let isActive = derived(() => get(navUrl) ? $$props.href === get(navUrl) : false);
  user_effect(() => {
  });
  const $$d = derived(() => navLi({ active: get(isActive), breakPoint })), base = derived(() => get($$d).base), link = derived(() => get($$d).link);
  var li = root$1();
  const class_derived = derived(() => get(base)({ class: $$props.class }));
  var a = child(li);
  let attributes;
  var node = child(a);
  snippet(node, () => $$props.children);
  reset(a);
  reset(li);
  template_effect(() => {
    set_class(li, get(class_derived));
    attributes = set_attributes(a, attributes, {
      href: $$props.href,
      onclick: closeNav(),
      ...restProps,
      "aria-current": get(isActive),
      class: get(link)({ class: $$props.aClass })
    });
  });
  append($$anchor, li);
  pop();
}
var root = template(`<ul><!></ul>`);
function NavUl($$anchor, $$props) {
  push($$props, true);
  let activeUrl = prop($$props, "activeUrl", 3, ""), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "activeUrl",
    "class"
  ]);
  let breakPoint;
  const context = getContext("navbarContext");
  breakPoint = context.breakPoint ?? "md";
  const base = derived(() => navUl({ breakPoint, className: $$props.class }));
  const activeUrlStore = writable("");
  user_effect(() => {
    activeUrlStore.set(activeUrl());
  });
  setContext("activeUrl", activeUrlStore);
  var ul = root();
  let attributes;
  var node = child(ul);
  snippet(node, () => $$props.children);
  reset(ul);
  template_effect(() => attributes = set_attributes(ul, attributes, { ...restProps, class: get(base) }));
  append($$anchor, ul);
  pop();
}
export {
  NavUl as N,
  NavLi as a,
  NavBrand as b
};
