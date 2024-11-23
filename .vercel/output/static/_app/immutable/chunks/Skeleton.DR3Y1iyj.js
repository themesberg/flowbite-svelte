import { a as append, t as template } from "./disclose-version.0TX42Q8e.js";
import { p as push, t as template_effect, a as pop, c as child, r as reset, s as sibling, n as next, b as get, d as derived } from "./runtime.BkfDdwap.js";
import { a as set_attributes, b as set_class, c as set_svg_class, J as imagePlaceholder, K as skeleton } from "./theme.BtjZjf2R.js";
import { p as prop, r as rest_props } from "./props.B7eOu8hW.js";
var root$1 = template(`<div><div><svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path></svg></div> <div><div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div></div> <span class="sr-only">Loading...</span></div>`);
function ImagePlaceholder($$anchor, $$props) {
  push($$props, true);
  let size = prop($$props, "size", 3, "md"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "rounded",
    "class"
  ]);
  const $$d = derived(() => imagePlaceholder({ size: size(), rounded: $$props.rounded })), base = derived(() => get($$d).base), image = derived(() => get($$d).image), svg = derived(() => get($$d).svg), content = derived(() => get($$d).content), line = derived(() => get($$d).line);
  var div = root$1();
  let attributes;
  var div_1 = child(div);
  const class_derived = derived(() => get(image)());
  var svg_1 = child(div_1);
  const class_derived_1 = derived(() => get(svg)());
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  const class_derived_2 = derived(() => get(content)());
  var div_3 = child(div_2);
  const class_derived_3 = derived(() => get(line)({ class: "mb-4 h-2.5 w-1/2" }));
  var div_4 = sibling(div_3, 2);
  const class_derived_4 = derived(() => get(line)({ class: "mb-2.5 h-2 w-9/12" }));
  var div_5 = sibling(div_4, 2);
  const class_derived_5 = derived(() => get(line)({ class: "mb-2.5 h-2" }));
  var div_6 = sibling(div_5, 2);
  const class_derived_6 = derived(() => get(line)({ class: "mb-2.5 h-2" }));
  var div_7 = sibling(div_6, 2);
  const class_derived_7 = derived(() => get(line)({ class: "mb-2.5 h-2 w-10/12" }));
  var div_8 = sibling(div_7, 2);
  const class_derived_8 = derived(() => get(line)({ class: "mb-2.5 h-2 w-11/12" }));
  var div_9 = sibling(div_8, 2);
  const class_derived_9 = derived(() => get(line)({ class: "h-2 w-9/12" }));
  reset(div_2);
  next(2);
  reset(div);
  template_effect(() => {
    attributes = set_attributes(div, attributes, {
      role: "status",
      ...restProps,
      class: get(base)({ className: $$props.class })
    });
    set_class(div_1, get(class_derived));
    set_svg_class(svg_1, get(class_derived_1));
    set_class(div_2, get(class_derived_2));
    set_class(div_3, get(class_derived_3));
    set_class(div_4, get(class_derived_4));
    set_class(div_5, get(class_derived_5));
    set_class(div_6, get(class_derived_6));
    set_class(div_7, get(class_derived_7));
    set_class(div_8, get(class_derived_8));
    set_class(div_9, get(class_derived_9));
  });
  append($$anchor, div);
  pop();
}
var root = template(`<div><div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <span class="sr-only">Loading...</span></div>`);
function Skeleton($$anchor, $$props) {
  push($$props, true);
  let size = prop($$props, "size", 3, "sm"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "class"
  ]);
  const $$d = derived(() => skeleton({ size: size() })), wrapper = derived(() => get($$d).wrapper), line = derived(() => get($$d).line);
  var div = root();
  let attributes;
  var div_1 = child(div);
  const class_derived = derived(() => get(line)({ class: "mb-4 h-2.5 w-1/2" }));
  var div_2 = sibling(div_1, 2);
  const class_derived_1 = derived(() => get(line)({ class: "mb-2.5 h-2 w-9/12" }));
  var div_3 = sibling(div_2, 2);
  const class_derived_2 = derived(() => get(line)({ class: "mb-2.5 h-2" }));
  var div_4 = sibling(div_3, 2);
  const class_derived_3 = derived(() => get(line)({ class: "mb-2.5 h-2" }));
  var div_5 = sibling(div_4, 2);
  const class_derived_4 = derived(() => get(line)({ class: "mb-2.5 h-2 w-10/12" }));
  var div_6 = sibling(div_5, 2);
  const class_derived_5 = derived(() => get(line)({ class: "mb-2.5 h-2 w-11/12" }));
  var div_7 = sibling(div_6, 2);
  const class_derived_6 = derived(() => get(line)({ class: "h-2 w-9/12" }));
  next(2);
  reset(div);
  template_effect(() => {
    attributes = set_attributes(div, attributes, {
      role: "status",
      ...restProps,
      class: get(wrapper)({ className: $$props.class })
    });
    set_class(div_1, get(class_derived));
    set_class(div_2, get(class_derived_1));
    set_class(div_3, get(class_derived_2));
    set_class(div_4, get(class_derived_3));
    set_class(div_5, get(class_derived_4));
    set_class(div_6, get(class_derived_5));
    set_class(div_7, get(class_derived_6));
  });
  append($$anchor, div);
  pop();
}
export {
  ImagePlaceholder as I,
  Skeleton as S
};
