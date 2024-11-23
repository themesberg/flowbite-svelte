import { a as append, n as ns_template } from "./disclose-version.0TX42Q8e.js";
import { p as push, g as getContext, c as child, r as reset, t as template_effect, s as sibling, n as next, a as pop, b as get, d as derived } from "./runtime.BkfDdwap.js";
import { a as set_text } from "./store.B2xZ3Ft6.js";
import { p as prop, i as if_block, r as rest_props } from "./props.B7eOu8hW.js";
import { s as set_attribute, a as set_attributes, t as twMerge } from "./theme.BtjZjf2R.js";
var root_1 = ns_template(`<title> </title>`);
var root_2 = ns_template(`<desc> </desc>`);
var root = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M8.97 14.316H5.004c-.322 0-.64-.08-.925-.232a2.022 2.022 0 0 1-.717-.645 2.108 2.108 0 0 1-.242-1.883l2.36-7.201C5.769 3.54 5.96 3 7.365 3c2.072 0 4.276.678 6.156 1.256.473.145.925.284 1.35.404h.114v9.862a25.485 25.485 0 0 0-4.238 5.514c-.197.376-.516.67-.901.83a1.74 1.74 0 0 1-1.21.048 1.79 1.79 0 0 1-.96-.757 1.867 1.867 0 0 1-.269-1.211l1.562-4.63ZM19.822 14H17V6a2 2 0 1 1 4 0v6.823c0 .65-.527 1.177-1.177 1.177Z" clip-rule="evenodd"></path></svg>`);
function ThumbsDownSolid($$anchor, $$props) {
  var _a, _b;
  push($$props, true);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "thumbs down solid"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "color",
    "title",
    "desc",
    "class",
    "ariaLabel"
  ]);
  let ariaDescribedby = `${((_a = $$props.title) == null ? void 0 : _a.id) || ""} ${((_b = $$props.desc) == null ? void 0 : _b.id) || ""}`;
  const hasDescription = derived(() => {
    var _a2, _b2;
    return !!(((_a2 = $$props.title) == null ? void 0 : _a2.id) || ((_b2 = $$props.desc) == null ? void 0 : _b2.id));
  });
  var svg = root();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1();
    var text = child(title_1, true);
    reset(title_1);
    template_effect(() => {
      set_attribute(title_1, "id", $$props.title.id);
      set_text(text, $$props.title.title);
    });
    append($$anchor2, title_1);
  });
  var node_1 = sibling(node);
  if_block(node_1, () => {
    var _a2;
    return ((_a2 = $$props.desc) == null ? void 0 : _a2.id) && $$props.desc.desc;
  }, ($$anchor2) => {
    var desc_1 = root_2();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  next();
  reset(svg);
  template_effect(() => attributes = set_attributes(
    svg,
    attributes,
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color(),
      ...restProps,
      class: twMerge("shrink-0", sizes[size()], $$props.class),
      "aria-label": ariaLabel(),
      "aria-describedby": get(hasDescription) ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    true
  ));
  append($$anchor, svg);
  pop();
}
export {
  ThumbsDownSolid as T
};
