import { a as append, n as ns_template, c as comment, t as template } from "./disclose-version.0TX42Q8e.js";
import { p as push, c as child, f as first_child, s as sibling, t as template_effect, n as next, r as reset, a as pop, b as get, d as derived } from "./runtime.BkfDdwap.js";
import { a as set_text } from "./store.B2xZ3Ft6.js";
import { p as prop, i as if_block, r as rest_props, c as component } from "./props.B7eOu8hW.js";
import { e as each, i as index } from "./each.CtHIoDcm.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { P as idGenerator, s as set_attribute, a as set_attributes, b as set_class, Q as rating } from "./theme.BtjZjf2R.js";
var root_1$1 = ns_template(`<stop offset="0%"></stop><stop></stop><stop stop-color="transparent"></stop><stop offset="100%" stop-color="transparent"></stop>`, 1);
var root_2$1 = ns_template(`<stop offset="0%"></stop><stop offset="100%"></stop>`, 1);
var root$1 = ns_template(`<svg><defs><linearGradient><!></linearGradient></defs><g stroke-width="2"><polygon points="165.000, 185.000, 188.511, 197.361, 184.021, 171.180, 
      203.042, 152.639, 176.756, 148.820, 165.000, 125.000, 
      153.244, 148.820, 126.958, 152.639, 145.979, 171.180,
      141.489, 197.361, 165.000, 185.000"></polygon></g></svg>`);
function Star($$anchor, $$props) {
  push($$props, true);
  let fillPercent = prop($$props, "fillPercent", 3, 100), fillColor = prop($$props, "fillColor", 3, "#F5CA14"), strokeColor = prop($$props, "strokeColor", 3, "#F5CA14"), size = prop($$props, "size", 3, 24), ariaLabel = prop($$props, "ariaLabel", 3, "star"), id = prop($$props, "id", 19, idGenerator), role = prop($$props, "role", 3, "img"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "fillPercent",
    "fillColor",
    "strokeColor",
    "size",
    "ariaLabel",
    "id",
    "role",
    "svgClass"
  ]);
  var svg = root$1();
  let attributes;
  var defs = child(svg);
  var linearGradient = child(defs);
  var node = child(linearGradient);
  if_block(
    node,
    () => fillPercent() !== 100,
    ($$anchor2) => {
      var fragment = root_1$1();
      var stop = first_child(fragment);
      var stop_1 = sibling(stop);
      var stop_2 = sibling(stop_1);
      next();
      template_effect(() => {
        set_attribute(stop, "stop-color", fillColor());
        set_attribute(stop_1, "offset", `${fillPercent() ?? ""}%`);
        set_attribute(stop_1, "stop-color", fillColor());
        set_attribute(stop_2, "offset", `${fillPercent() ?? ""}%`);
      });
      append($$anchor2, fragment);
    },
    ($$anchor2) => {
      var fragment_1 = root_2$1();
      var stop_3 = first_child(fragment_1);
      var stop_4 = sibling(stop_3);
      template_effect(() => {
        set_attribute(stop_3, "stop-color", fillColor());
        set_attribute(stop_4, "stop-color", fillColor());
      });
      append($$anchor2, fragment_1);
    }
  );
  reset(linearGradient);
  reset(defs);
  var g = sibling(defs);
  reset(svg);
  template_effect(() => {
    attributes = set_attributes(
      svg,
      attributes,
      {
        width: size(),
        height: size(),
        ...restProps,
        class: $$props.svgClass,
        "aria-label": ariaLabel(),
        viewBox: "100 100 120 120",
        role: role()
      },
      void 0,
      true
    );
    set_attribute(linearGradient, "id", id());
    set_attribute(g, "fill", `url(#${id() ?? ""})`);
    set_attribute(g, "stroke", strokeColor());
  });
  append($$anchor, svg);
  pop();
}
var root_1 = template(`<!> <p> </p> <!>`, 1);
var root_2 = template(`<!> <!> <!> <!>`, 1);
var root = template(`<div><!></div>`);
function Rating($$anchor, $$props) {
  push($$props, true);
  let size = prop($$props, "size", 3, 24), total = prop($$props, "total", 3, 5), rating$1 = prop($$props, "rating", 3, 4), partialId = prop($$props, "partialId", 19, () => "partialStar" + idGenerator()), Icon = prop($$props, "Icon", 3, Star), count = prop($$props, "count", 3, false);
  const $$d = derived(rating), base = derived(() => get($$d).base), p = derived(() => get($$d).p);
  const fullStarId = idGenerator();
  const grayStarId = idGenerator();
  let fullStars = Math.floor(rating$1());
  let rateDiffence = rating$1() - fullStars;
  let percentRating = Math.round(rateDiffence * 100);
  let grayStars = total() - (fullStars + Math.ceil(rateDiffence));
  var div = root();
  const class_derived = derived(() => get(base)({ class: $$props.divClass }));
  var node = child(div);
  if_block(
    node,
    () => count() && $$props.children,
    ($$anchor2) => {
      var fragment = root_1();
      var node_1 = first_child(fragment);
      component(node_1, Icon, ($$anchor3, $$component) => {
        $$component($$anchor3, {
          fillPercent: 100,
          get size() {
            return size();
          }
        });
      });
      var p_1 = sibling(node_1, 2);
      const class_derived_1 = derived(() => get(p)({ class: $$props.pClass }));
      var text_1 = child(p_1, true);
      reset(p_1);
      var node_2 = sibling(p_1, 2);
      snippet(node_2, () => $$props.children);
      template_effect(() => {
        set_class(p_1, get(class_derived_1));
        set_text(text_1, rating$1());
      });
      append($$anchor2, fragment);
    },
    ($$anchor2) => {
      var fragment_1 = root_2();
      var node_3 = first_child(fragment_1);
      each(node_3, 17, () => Array(fullStars), index, ($$anchor3, _) => {
        var fragment_2 = comment();
        var node_4 = first_child(fragment_2);
        component(node_4, Icon, ($$anchor4, $$component) => {
          $$component($$anchor4, {
            get size() {
              return size();
            },
            fillPercent: 100,
            id: fullStarId
          });
        });
        append($$anchor3, fragment_2);
      });
      var node_5 = sibling(node_3, 2);
      if_block(node_5, () => percentRating, ($$anchor3) => {
        var fragment_3 = comment();
        var node_6 = first_child(fragment_3);
        component(node_6, Icon, ($$anchor4, $$component) => {
          $$component($$anchor4, {
            get size() {
              return size();
            },
            fillPercent: percentRating,
            get id() {
              return partialId();
            }
          });
        });
        append($$anchor3, fragment_3);
      });
      var node_7 = sibling(node_5, 2);
      each(node_7, 17, () => Array(grayStars), index, ($$anchor3, _) => {
        var fragment_4 = comment();
        var node_8 = first_child(fragment_4);
        component(node_8, Icon, ($$anchor4, $$component) => {
          $$component($$anchor4, {
            get size() {
              return size();
            },
            fillPercent: 0,
            id: grayStarId
          });
        });
        append($$anchor3, fragment_4);
      });
      var node_9 = sibling(node_7, 2);
      if_block(node_9, () => $$props.text, ($$anchor3) => {
        var fragment_5 = comment();
        var node_10 = first_child(fragment_5);
        snippet(node_10, () => $$props.text);
        append($$anchor3, fragment_5);
      });
      append($$anchor2, fragment_1);
    }
  );
  reset(div);
  template_effect(() => set_class(div, get(class_derived)));
  append($$anchor, div);
  pop();
}
export {
  Rating as R,
  Star as S
};
