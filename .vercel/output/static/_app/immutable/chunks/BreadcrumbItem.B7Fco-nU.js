import { a as append, t as template, c as comment } from "./disclose-version.0TX42Q8e.js";
import { p as push, t as template_effect, a as pop, c as child, r as reset, b as get, d as derived, f as first_child, s as sibling } from "./runtime.BkfDdwap.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { M as breadcrumb, a as set_attributes, b as set_class, c as set_svg_class, s as set_attribute, t as twMerge } from "./theme.BtjZjf2R.js";
import { p as prop, r as rest_props, i as if_block } from "./props.B7eOu8hW.js";
var root$1 = template(`<nav><ol><!></ol></nav>`);
function Breadcrumb($$anchor, $$props) {
  push($$props, true);
  let solid = prop($$props, "solid", 3, false), ariaLabel = prop($$props, "ariaLabel", 3, "Breadcrumb"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "solid",
    "navClass",
    "olClass",
    "ariaLabel"
  ]);
  const { base, list } = breadcrumb({ solid: solid() });
  let classNav = derived(() => base({ class: $$props.navClass }));
  let classList = derived(() => list({ class: $$props.olClass }));
  var nav = root$1();
  let attributes;
  var ol = child(nav);
  var node = child(ol);
  snippet(node, () => $$props.children);
  reset(ol);
  reset(nav);
  template_effect(() => {
    attributes = set_attributes(nav, attributes, {
      "aria-label": ariaLabel(),
      ...restProps,
      class: get(classNav)
    });
    set_class(ol, get(classList));
  });
  append($$anchor, nav);
  pop();
}
var root_3 = template(`<svg class="me-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>`);
var root_1 = template(`<a><!> <!></a>`);
var root_6 = template(`<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>`);
var root_7 = template(`<a><!></a>`);
var root_8 = template(`<span><!></span>`);
var root_4 = template(`<!> <!>`, 1);
var root = template(`<li><!></li>`);
function BreadcrumbItem($$anchor, $$props) {
  push($$props, true);
  let home = prop($$props, "home", 3, false), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "icon",
    "home",
    "href",
    "linkClass",
    "spanClass",
    "homeClass",
    "class"
  ]);
  const { item, icon: breacrumbIcon } = breadcrumb({
    home: home(),
    hasHref: !!$$props.href,
    class: $$props.class
  });
  var li = root();
  let attributes;
  var node = child(li);
  if_block(
    node,
    home,
    ($$anchor2) => {
      var a = root_1();
      const class_derived = derived(() => item({ home: true, class: $$props.homeClass }));
      var node_1 = child(a);
      if_block(
        node_1,
        () => $$props.icon,
        ($$anchor3) => {
          var fragment = comment();
          var node_2 = first_child(fragment);
          snippet(node_2, () => $$props.icon);
          append($$anchor3, fragment);
        },
        ($$anchor3) => {
          var svg = root_3();
          append($$anchor3, svg);
        }
      );
      var node_3 = sibling(node_1, 2);
      snippet(node_3, () => $$props.children);
      reset(a);
      template_effect(() => {
        set_class(a, get(class_derived));
        set_attribute(a, "href", $$props.href);
      });
      append($$anchor2, a);
    },
    ($$anchor2) => {
      var fragment_1 = root_4();
      var node_4 = first_child(fragment_1);
      if_block(
        node_4,
        () => $$props.icon,
        ($$anchor3) => {
          var fragment_2 = comment();
          var node_5 = first_child(fragment_2);
          snippet(node_5, () => $$props.icon);
          append($$anchor3, fragment_2);
        },
        ($$anchor3) => {
          var svg_1 = root_6();
          const class_derived_1 = derived(breacrumbIcon);
          template_effect(() => set_svg_class(svg_1, get(class_derived_1)));
          append($$anchor3, svg_1);
        }
      );
      var node_6 = sibling(node_4, 2);
      if_block(
        node_6,
        () => $$props.href,
        ($$anchor3) => {
          var a_1 = root_7();
          const class_derived_2 = derived(() => twMerge(item({ home: false, hasHref: true }), $$props.linkClass));
          var node_7 = child(a_1);
          snippet(node_7, () => $$props.children);
          reset(a_1);
          template_effect(() => {
            set_class(a_1, get(class_derived_2));
            set_attribute(a_1, "href", $$props.href);
          });
          append($$anchor3, a_1);
        },
        ($$anchor3) => {
          var span = root_8();
          const class_derived_3 = derived(() => twMerge(item({ home: false, hasHref: false }), $$props.spanClass));
          var node_8 = child(span);
          snippet(node_8, () => $$props.children);
          reset(span);
          template_effect(() => set_class(span, get(class_derived_3)));
          append($$anchor3, span);
        }
      );
      append($$anchor2, fragment_1);
    }
  );
  reset(li);
  template_effect(() => attributes = set_attributes(li, attributes, { ...restProps, class: item() }));
  append($$anchor, li);
  pop();
}
export {
  Breadcrumb as B,
  BreadcrumbItem as a
};
