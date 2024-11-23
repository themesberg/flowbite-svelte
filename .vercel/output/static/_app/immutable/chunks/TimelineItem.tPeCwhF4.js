import { a as append, t as template, c as comment } from "./disclose-version.0TX42Q8e.js";
import { p as push, e as setContext, c as child, r as reset, t as template_effect, a as pop, b as get, d as derived, g as getContext, s as sibling, f as first_child } from "./runtime.BkfDdwap.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { a as set_attributes, R as timeline, b as set_class, c as set_svg_class, S as timelineitem } from "./theme.BtjZjf2R.js";
import { p as prop, r as rest_props, i as if_block } from "./props.B7eOu8hW.js";
import { a as set_text } from "./store.B2xZ3Ft6.js";
var root$1 = template(`<ol><!></ol>`);
function Timeline($$anchor, $$props) {
  push($$props, true);
  let order = prop($$props, "order", 3, "default"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "order",
    "class"
  ]);
  setContext("order", order());
  const olCls = derived(() => timeline({ order: order(), className: $$props.class }));
  var ol = root$1();
  let attributes;
  var node = child(ol);
  snippet(node, () => $$props.children);
  reset(ol);
  template_effect(() => attributes = set_attributes(ol, attributes, { ...restProps, class: get(olCls) }));
  append($$anchor, ol);
  pop();
}
var root_3 = template(`<svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>`);
var root_5 = template(`<time> </time>`);
var root_6 = template(`<h3> </h3>`);
var root_8 = template(`<time> </time>`);
var root = template(`<li><div></div> <!> <!> <!> <!></li>`);
function TimelineItem($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "orientationSlot",
    "title",
    "date",
    "svgClass",
    "liClass",
    "divClass",
    "timeClass",
    "h3Class"
  ]);
  let order = getContext("order");
  const $$d = derived(() => timelineitem({ order })), li = derived(() => get($$d).li), div = derived(() => get($$d).div), time = derived(() => get($$d).time), h3 = derived(() => get($$d).h3), svg = derived(() => get($$d).svg);
  var li_1 = root();
  let attributes;
  var div_1 = child(li_1);
  const class_derived = derived(() => get(div)({ class: $$props.divClass }));
  var node = sibling(div_1, 2);
  if_block(
    node,
    () => order !== "default",
    ($$anchor2) => {
      var fragment = comment();
      var node_1 = first_child(fragment);
      if_block(
        node_1,
        () => $$props.orientationSlot && (order === "vertical" || order === "horizontal"),
        ($$anchor3) => {
          var fragment_1 = comment();
          var node_2 = first_child(fragment_1);
          snippet(node_2, () => $$props.orientationSlot);
          append($$anchor3, fragment_1);
        },
        ($$anchor3) => {
          var svg_1 = root_3();
          const class_derived_1 = derived(() => get(svg)({ class: $$props.svgClass }));
          template_effect(() => set_svg_class(svg_1, get(class_derived_1)));
          append($$anchor3, svg_1);
        }
      );
      append($$anchor2, fragment);
    },
    ($$anchor2) => {
      var fragment_2 = comment();
      var node_3 = first_child(fragment_2);
      if_block(
        node_3,
        () => $$props.date,
        ($$anchor3) => {
          var time_1 = root_5();
          const class_derived_2 = derived(() => get(time)({ class: $$props.timeClass }));
          var text = child(time_1, true);
          reset(time_1);
          template_effect(() => {
            set_class(time_1, get(class_derived_2));
            set_text(text, $$props.date);
          });
          append($$anchor3, time_1);
        },
        null,
        true
      );
      append($$anchor2, fragment_2);
    }
  );
  var node_4 = sibling(node, 2);
  if_block(node_4, () => $$props.title, ($$anchor2) => {
    var h3_1 = root_6();
    const class_derived_3 = derived(() => get(h3)({ class: $$props.h3Class }));
    var text_1 = child(h3_1, true);
    reset(h3_1);
    template_effect(() => {
      set_class(h3_1, get(class_derived_3));
      set_text(text_1, $$props.title);
    });
    append($$anchor2, h3_1);
  });
  var node_5 = sibling(node_4, 2);
  if_block(node_5, () => order !== "default", ($$anchor2) => {
    var fragment_3 = comment();
    var node_6 = first_child(fragment_3);
    if_block(node_6, () => $$props.date, ($$anchor3) => {
      var time_2 = root_8();
      const class_derived_4 = derived(() => get(time)({ class: $$props.timeClass }));
      var text_2 = child(time_2, true);
      reset(time_2);
      template_effect(() => {
        set_class(time_2, get(class_derived_4));
        set_text(text_2, $$props.date);
      });
      append($$anchor3, time_2);
    });
    append($$anchor2, fragment_3);
  });
  var node_7 = sibling(node_5, 2);
  snippet(node_7, () => $$props.children);
  reset(li_1);
  template_effect(() => {
    attributes = set_attributes(li_1, attributes, {
      ...restProps,
      class: get(li)({ class: $$props.liClass })
    });
    set_class(div_1, get(class_derived));
  });
  append($$anchor, li_1);
  pop();
}
export {
  Timeline as T,
  TimelineItem as a
};
