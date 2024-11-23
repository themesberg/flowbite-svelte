import { c as comment, a as append, t as template } from "./disclose-version.0TX42Q8e.js";
import { p as push, f as first_child, t as template_effect, a as pop, s as sibling, b as get, N as NAMESPACE_SVG, d as derived } from "./runtime.BkfDdwap.js";
import { r as replay_events } from "./store.B2xZ3Ft6.js";
import { p as prop, i as if_block, s as spread_props, r as rest_props } from "./props.B7eOu8hW.js";
import { s as snippet } from "./snippet.BDfn85k4.js";
import { e as element } from "./H1.DunGd_Oq.js";
import { j as handle_lazy_img, a as set_attributes, s as set_attribute, b as set_class, c as set_svg_class, k as avatar } from "./theme.BtjZjf2R.js";
import { I as Indicator } from "./Indicator.BIdmiP_T.js";
var root_3 = template(`<img>`);
var root_6 = template(`<svg fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>`);
var root_2 = template(`<!> <!>`, 1);
var root_8 = template(`<img>`);
function Avatar($$anchor, $$props) {
  push($$props, true);
  let cornerStyle = prop($$props, "cornerStyle", 3, "circular"), border = prop($$props, "border", 3, false), stacked = prop($$props, "stacked", 3, false), dot = prop($$props, "dot", 7), size = prop($$props, "size", 3, "md"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "src",
    "href",
    "target",
    "cornerStyle",
    "border",
    "stacked",
    "dot",
    "class",
    "alt",
    "size",
    "onclick"
  ]);
  dot(dot() && {
    placement: "top-right",
    color: "gray",
    size: "lg",
    ...dot()
  });
  let avatarClass = derived(() => avatar({
    cornerStyle: cornerStyle(),
    border: border(),
    stacked: stacked(),
    size: size(),
    className: $$props.class
  }));
  var fragment = comment();
  var node = first_child(fragment);
  if_block(
    node,
    () => !$$props.src || !!$$props.href || $$props.children || dot(),
    ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      element(node_1, () => $$props.href ? "a" : "div", false, ($$element, $$anchor3) => {
        let attributes;
        template_effect(() => attributes = set_attributes(
          $$element,
          attributes,
          {
            role: $$props.href ? "link" : "img",
            onclick: $$props.onclick,
            href: $$props.href,
            target: $$props.target,
            ...restProps,
            class: get(avatarClass)
          },
          void 0,
          $$element.namespaceURI === NAMESPACE_SVG,
          $$element.nodeName.includes("-")
        ));
        var fragment_2 = root_2();
        var node_2 = first_child(fragment_2);
        if_block(
          node_2,
          () => $$props.src,
          ($$anchor4) => {
            var img = root_3();
            template_effect(() => {
              set_attribute(img, "alt", $$props.alt);
              set_attribute(img, "src", $$props.src);
              set_class(img, cornerStyle() === "circular" ? "rounded-full" : "rounded");
            });
            append($$anchor4, img);
          },
          ($$anchor4) => {
            var fragment_3 = comment();
            var node_3 = first_child(fragment_3);
            if_block(
              node_3,
              () => $$props.children,
              ($$anchor5) => {
                var fragment_4 = comment();
                var node_4 = first_child(fragment_4);
                snippet(node_4, () => $$props.children);
                append($$anchor5, fragment_4);
              },
              ($$anchor5) => {
                var svg = root_6();
                template_effect(() => set_svg_class(svg, `h-full w-full ${(cornerStyle() === "circular" ? "rounded-full" : "rounded") ?? ""}`));
                append($$anchor5, svg);
              },
              true
            );
            append($$anchor4, fragment_3);
          }
        );
        var node_5 = sibling(node_2, 2);
        if_block(node_5, dot, ($$anchor4) => {
          var offset = derived(() => cornerStyle() === "circular" ? true : false);
          Indicator($$anchor4, spread_props(
            {
              border: true,
              get offset() {
                return get(offset);
              }
            },
            dot
          ));
        });
        append($$anchor3, fragment_2);
      });
      append($$anchor2, fragment_1);
    },
    ($$anchor2) => {
      var img_1 = root_8();
      let attributes_1;
      template_effect(() => attributes_1 = set_attributes(img_1, attributes_1, {
        alt: $$props.alt,
        src: $$props.src,
        ...restProps,
        class: get(avatarClass)
      }));
      handle_lazy_img(img_1);
      replay_events(img_1);
      append($$anchor2, img_1);
    }
  );
  append($$anchor, fragment);
  pop();
}
export {
  Avatar as A
};
