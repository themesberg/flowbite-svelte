import { c as comment, a as append, t as template } from "./disclose-version.0TX42Q8e.js";
import { p as push, g as getContext, u as user_effect, f as first_child, t as template_effect, a as pop, c as child, s as sibling, r as reset, b as get, d as derived, a7 as set, a6 as state } from "./runtime.BkfDdwap.js";
import { s as setup_stores, b as store_get, a as set_text } from "./store.B2xZ3Ft6.js";
import { p as prop, i as if_block, r as rest_props, b as proxy } from "./props.B7eOu8hW.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { Z as slide, V as uiHelpers, _ as transition, c as set_svg_class, b as set_class, a as set_attributes, $ as sidebardropdownwrapper, t as twMerge } from "./theme.BtjZjf2R.js";
import { w as writable } from "./index.IFFPp5_U.js";
var root_4 = template(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg>`);
var root_7 = template(`<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg>`);
var root_8 = template(`<ul><!></ul>`);
var root$2 = template(`<li><button><!> <span> </span> <!></button> <!></li>`);
function SidebarDropdownWrapper($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $selected = () => store_get(selected, "$selected", $$stores);
  let isOpen = prop($$props, "isOpen", 7, false), transition$1 = prop($$props, "transition", 3, slide), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "arrowup",
    "arrowdown",
    "iconSlot",
    "isOpen",
    "btnClass",
    "label",
    "spanClass",
    "ulClass",
    "transition",
    "params",
    "svgClass",
    "class",
    "onclick"
  ]);
  const $$d = derived(sidebardropdownwrapper), base = derived(() => get($$d).base), btn = derived(() => get($$d).btn), span = derived(() => get($$d).span), svg = derived(() => get($$d).svg), ul = derived(() => get($$d).ul);
  let sidebarDropdown = uiHelpers();
  sidebarDropdown.isOpen = isOpen();
  let ctx = getContext("sidebarContext") || { isSingle: false };
  let self = {};
  if (ctx.isSingle && !ctx.selected) {
    ctx.selected = writable(null);
  }
  let selected = ctx.isSingle ? ctx.selected : writable(self);
  user_effect(() => {
    if (ctx.isSingle) {
      isOpen($selected() === self);
    } else {
      isOpen(sidebarDropdown.isOpen);
    }
  });
  function handleDropdown() {
    if (ctx.isSingle) {
      selected.update((current) => current === self ? null : self);
    } else {
      sidebarDropdown.toggle();
    }
    if ($$props.onclick) $$props.onclick();
  }
  var li = root$2();
  const class_derived = derived(() => get(base)({ className: $$props.class }));
  var button = child(li);
  let attributes;
  var node = child(button);
  if_block(node, () => $$props.iconSlot, ($$anchor2) => {
    var fragment = comment();
    var node_1 = first_child(fragment);
    snippet(node_1, () => $$props.iconSlot);
    append($$anchor2, fragment);
  });
  var span_1 = sibling(node, 2);
  const class_derived_1 = derived(() => get(span)({ class: $$props.spanClass }));
  var text = child(span_1, true);
  reset(span_1);
  var node_2 = sibling(span_1, 2);
  if_block(
    node_2,
    isOpen,
    ($$anchor2) => {
      var fragment_1 = comment();
      var node_3 = first_child(fragment_1);
      if_block(
        node_3,
        () => $$props.arrowup,
        ($$anchor3) => {
          var fragment_2 = comment();
          var node_4 = first_child(fragment_2);
          snippet(node_4, () => $$props.arrowup);
          append($$anchor3, fragment_2);
        },
        ($$anchor3) => {
          var svg_1 = root_4();
          const class_derived_2 = derived(() => get(svg)({ class: $$props.svgClass }));
          template_effect(() => set_svg_class(svg_1, get(class_derived_2)));
          append($$anchor3, svg_1);
        }
      );
      append($$anchor2, fragment_1);
    },
    ($$anchor2) => {
      var fragment_3 = comment();
      var node_5 = first_child(fragment_3);
      if_block(
        node_5,
        () => $$props.arrowdown,
        ($$anchor3) => {
          var fragment_4 = comment();
          var node_6 = first_child(fragment_4);
          snippet(node_6, () => $$props.arrowdown);
          append($$anchor3, fragment_4);
        },
        ($$anchor3) => {
          var svg_2 = root_7();
          const class_derived_3 = derived(() => get(svg)({ class: $$props.svgClass }));
          template_effect(() => set_svg_class(svg_2, get(class_derived_3)));
          append($$anchor3, svg_2);
        },
        true
      );
      append($$anchor2, fragment_3);
    }
  );
  reset(button);
  var node_7 = sibling(button, 2);
  if_block(node_7, isOpen, ($$anchor2) => {
    var ul_1 = root_8();
    const class_derived_4 = derived(() => get(ul)({ class: $$props.ulClass }));
    var node_8 = child(ul_1);
    snippet(node_8, () => $$props.children);
    reset(ul_1);
    template_effect(() => set_class(ul_1, get(class_derived_4)));
    transition(3, ul_1, transition$1, () => $$props.params);
    append($$anchor2, ul_1);
  });
  reset(li);
  template_effect(() => {
    set_class(li, get(class_derived));
    attributes = set_attributes(button, attributes, {
      ...restProps,
      onclick: handleDropdown,
      type: "button",
      class: get(btn)({ class: $$props.btnClass }),
      "aria-controls": "sidebar-dropdown"
    });
    set_class(span_1, get(class_derived_1));
    set_text(text, $$props.label);
  });
  append($$anchor, li);
  pop();
}
var root$1 = template(`<ul><!></ul>`);
function SidebarGroup($$anchor, $$props) {
  push($$props, true);
  let className = prop($$props, "class", 3, "space-y-2"), borderClass = prop($$props, "borderClass", 3, "pt-4 mt-4 border-t border-gray-200 dark:border-gray-700"), border = prop($$props, "border", 3, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "class",
    "borderClass",
    "border"
  ]);
  var ul = root$1();
  let attributes;
  var node = child(ul);
  snippet(node, () => $$props.children);
  reset(ul);
  template_effect(() => attributes = set_attributes(ul, attributes, {
    ...restProps,
    class: border() ? borderClass() : className()
  }));
  append($$anchor, ul);
  pop();
}
var root = template(`<li><a><!> <span> </span> <!></a></li>`);
function SidebarItem($$anchor, $$props) {
  push($$props, true);
  let spanClass = prop($$props, "spanClass", 3, "ms-3"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "iconSlot",
    "subtext",
    "href",
    "label",
    "spanClass",
    "activeClass",
    "nonActiveClass",
    "aClass",
    "active",
    "class"
  ]);
  const context = getContext("sidebarContext") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let sidebarUrl = state("");
  activeUrlStore.subscribe((value) => {
    set(sidebarUrl, proxy(value));
  });
  let activeItem = state(void 0);
  user_effect(() => {
    set(activeItem, proxy($$props.active !== void 0 ? $$props.active : get(sidebarUrl) ? $$props.href === get(sidebarUrl) : false));
  });
  let aCls = derived(() => get(activeItem) ?? get(sidebarUrl) === $$props.href ? $$props.activeClass ?? context.activeClass : $$props.nonActiveClass ?? context.nonActiveClass);
  var li = root();
  var a = child(li);
  let attributes;
  var node = child(a);
  if_block(node, () => $$props.iconSlot, ($$anchor2) => {
    var fragment = comment();
    var node_1 = first_child(fragment);
    snippet(node_1, () => $$props.iconSlot);
    append($$anchor2, fragment);
  });
  var span = sibling(node, 2);
  var text = child(span, true);
  reset(span);
  var node_2 = sibling(span, 2);
  if_block(node_2, () => $$props.subtext, ($$anchor2) => {
    var fragment_1 = comment();
    var node_3 = first_child(fragment_1);
    snippet(node_3, () => $$props.subtext);
    append($$anchor2, fragment_1);
  });
  reset(a);
  reset(li);
  template_effect(() => {
    set_class(li, $$props.class);
    attributes = set_attributes(a, attributes, {
      onclick: context.closeSidebar,
      ...restProps,
      href: $$props.href,
      "aria-current": get(activeItem) ?? get(sidebarUrl) === $$props.href ? "page" : void 0,
      class: twMerge(get(aCls), $$props.aClass)
    });
    set_class(span, spanClass());
    set_text(text, $$props.label);
  });
  append($$anchor, li);
  pop();
}
export {
  SidebarGroup as S,
  SidebarDropdownWrapper as a,
  SidebarItem as b
};
