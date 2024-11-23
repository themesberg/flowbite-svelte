import { a as append, t as template, c as comment } from "./disclose-version.0TX42Q8e.js";
import { p as push, t as template_effect, a as pop, c as child, r as reset, b as get, d as derived, f as first_child, s as sibling } from "./runtime.BkfDdwap.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { a as set_attributes, a3 as footer, s as set_attribute, b as set_class, a4 as footerBrand, a5 as footerLi, a6 as footerUl } from "./theme.BtjZjf2R.js";
import { p as prop, r as rest_props, i as if_block } from "./props.B7eOu8hW.js";
import { a as set_text } from "./store.B2xZ3Ft6.js";
var root$2 = template(`<footer><!></footer>`);
function Footer($$anchor, $$props) {
  push($$props, true);
  let footerType = prop($$props, "footerType", 3, "default"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "footerType",
    "class"
  ]);
  const footerCls = derived(() => footer({
    footerType: footerType(),
    className: $$props.class
  }));
  var footer_1 = root$2();
  let attributes;
  var node = child(footer_1);
  snippet(node, () => $$props.children);
  reset(footer_1);
  template_effect(() => attributes = set_attributes(footer_1, attributes, { ...restProps, class: get(footerCls) }));
  append($$anchor, footer_1);
  pop();
}
var root_2 = template(`<img>`);
var root_3 = template(`<span> </span>`);
var root_1 = template(`<a><!> <!> <!></a>`);
var root_5 = template(`<img>`);
function FooterBrand($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "aClass",
    "spanClass",
    "imgClass",
    "href",
    "src",
    "alt",
    "name"
  ]);
  const $$d = derived(footerBrand), base = derived(() => get($$d).base), span = derived(() => get($$d).span), img = derived(() => get($$d).img);
  var fragment = comment();
  var node = first_child(fragment);
  if_block(
    node,
    () => $$props.href,
    ($$anchor2) => {
      var a = root_1();
      let attributes;
      var node_1 = child(a);
      if_block(node_1, () => $$props.src, ($$anchor3) => {
        var img_1 = root_2();
        const class_derived = derived(() => get(img)({ class: $$props.imgClass }));
        template_effect(() => {
          set_attribute(img_1, "src", $$props.src);
          set_class(img_1, get(class_derived));
          set_attribute(img_1, "alt", $$props.alt);
        });
        append($$anchor3, img_1);
      });
      var node_2 = sibling(node_1, 2);
      if_block(node_2, () => $$props.name, ($$anchor3) => {
        var span_1 = root_3();
        const class_derived_1 = derived(() => get(span)({ class: $$props.spanClass }));
        var text = child(span_1, true);
        reset(span_1);
        template_effect(() => {
          set_class(span_1, get(class_derived_1));
          set_text(text, $$props.name);
        });
        append($$anchor3, span_1);
      });
      var node_3 = sibling(node_2, 2);
      if_block(node_3, () => $$props.children, ($$anchor3) => {
        var fragment_1 = comment();
        var node_4 = first_child(fragment_1);
        snippet(node_4, () => $$props.children);
        append($$anchor3, fragment_1);
      });
      reset(a);
      template_effect(() => attributes = set_attributes(a, attributes, {
        ...restProps,
        href: $$props.href,
        class: get(base)({ class: $$props.aClass })
      }));
      append($$anchor2, a);
    },
    ($$anchor2) => {
      var img_2 = root_5();
      const class_derived_2 = derived(() => get(img)({ class: $$props.imgClass }));
      template_effect(() => {
        set_attribute(img_2, "src", $$props.src);
        set_class(img_2, get(class_derived_2));
        set_attribute(img_2, "alt", $$props.alt);
      });
      append($$anchor2, img_2);
    }
  );
  append($$anchor, fragment);
  pop();
}
var root$1 = template(`<li><a><!></a></li>`);
function FooterLi($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "liClass",
    "aClass",
    "href"
  ]);
  const $$d = derived(footerLi), base = derived(() => get($$d).base), link = derived(() => get($$d).link);
  var li = root$1();
  const class_derived = derived(() => get(base)({ class: $$props.liClass }));
  var a = child(li);
  let attributes;
  var node = child(a);
  snippet(node, () => $$props.children);
  reset(a);
  reset(li);
  template_effect(() => {
    set_class(li, get(class_derived));
    attributes = set_attributes(a, attributes, {
      ...restProps,
      href: $$props.href,
      class: get(link)({ class: $$props.aClass })
    });
  });
  append($$anchor, li);
  pop();
}
var root = template(`<ul><!></ul>`);
function FooterUl($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "class",
    "children"
  ]);
  const base = derived(() => footerUl({ class: $$props.class }));
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
  Footer as F,
  FooterBrand as a,
  FooterUl as b,
  FooterLi as c
};
