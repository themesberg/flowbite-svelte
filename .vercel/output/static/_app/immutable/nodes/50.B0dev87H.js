import { c as comment, a as append, t as template, n as ns_template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, e as setContext, c as child, r as reset, s as sibling, f as first_child, t as template_effect, b as get, a as pop, d as derived, g as getContext, n as next, a6 as state, u as user_effect, a7 as set } from "../chunks/runtime.BkfDdwap.js";
import { s as setup_stores, b as store_get, a as set_text, j as store_set } from "../chunks/store.B2xZ3Ft6.js";
import { p as prop, i as if_block, r as rest_props, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { a as set_attributes, b as set_class, b5 as toolbar, b6 as toolbarButton, b7 as toolbarGroup, s as set_attribute, t as twMerge, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { L as Label, C as CompoAttributesViewer, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { H as Helper } from "../chunks/Helper.CNgurqbV.js";
import { T as Textarea } from "../chunks/Textarea.Cu_cE7Hq.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { w as writable } from "../chunks/index.IFFPp5_U.js";
var root$b = template(`<div><div><!></div> <!></div>`);
function Toolbar($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $separators = () => store_get(separators, "$separators", $$stores);
  let color = prop($$props, "color", 3, "default"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "end",
    "color",
    "embedded",
    "class"
  ]);
  const separators = writable(false);
  setContext("toolbar", separators);
  let frameColor = derived(() => $$props.embedded ? "default" : color());
  let $$d = derived(() => toolbar({
    color: get(frameColor),
    embedded: $$props.embedded,
    separators: $separators()
  })), base = derived(() => get($$d).base), content = derived(() => get($$d).content);
  var div = root$b();
  let attributes;
  var div_1 = child(div);
  const class_derived = derived(() => get(content)());
  var node = child(div_1);
  snippet(node, () => $$props.children);
  reset(div_1);
  var node_1 = sibling(div_1, 2);
  if_block(node_1, () => $$props.end, ($$anchor2) => {
    var fragment = comment();
    var node_2 = first_child(fragment);
    snippet(node_2, () => $$props.end);
    append($$anchor2, fragment);
  });
  reset(div);
  template_effect(() => {
    attributes = set_attributes(div, attributes, {
      ...restProps,
      class: get(base)({ className: $$props.class })
    });
    set_class(div_1, get(class_derived));
  });
  append($$anchor, div);
  pop();
}
var root_2$7 = template(`<span class="sr-only"> </span>`);
var root_1$8 = template(`<a><!> <!></a>`);
var root_4$1 = template(`<span class="sr-only"> </span>`);
var root_3$2 = template(`<button><!> <!></button>`);
function ToolbarButton($$anchor, $$props) {
  push($$props, true);
  const background = getContext("background");
  let color = prop($$props, "color", 3, "default"), size = prop($$props, "size", 3, "md"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "color",
    "name",
    "ariaLabel",
    "size",
    "href",
    "class",
    "onclick"
  ]);
  const buttonClass = derived(() => toolbarButton({
    color: color(),
    size: size(),
    background: !!background,
    class: $$props.class
  }));
  var fragment = comment();
  var node = first_child(fragment);
  if_block(
    node,
    () => $$props.href,
    ($$anchor2) => {
      var a = root_1$8();
      let attributes;
      var node_1 = child(a);
      if_block(node_1, () => $$props.name, ($$anchor3) => {
        var span = root_2$7();
        var text2 = child(span, true);
        reset(span);
        template_effect(() => set_text(text2, $$props.name));
        append($$anchor3, span);
      });
      var node_2 = sibling(node_1, 2);
      snippet(node_2, () => $$props.children);
      reset(a);
      template_effect(() => attributes = set_attributes(a, attributes, {
        href: $$props.href,
        ...restProps,
        class: get(buttonClass),
        "aria-label": $$props.ariaLabel ?? $$props.name
      }));
      append($$anchor2, a);
    },
    ($$anchor2) => {
      var button = root_3$2();
      let attributes_1;
      var node_3 = child(button);
      if_block(node_3, () => $$props.name, ($$anchor3) => {
        var span_1 = root_4$1();
        var text_1 = child(span_1, true);
        reset(span_1);
        template_effect(() => set_text(text_1, $$props.name));
        append($$anchor3, span_1);
      });
      var node_4 = sibling(node_3, 2);
      snippet(node_4, () => $$props.children);
      reset(button);
      template_effect(() => attributes_1 = set_attributes(button, attributes_1, {
        onclick: $$props.onclick,
        type: "button",
        ...restProps,
        class: get(buttonClass),
        "aria-label": $$props.ariaLabel ?? $$props.name
      }));
      append($$anchor2, button);
    }
  );
  append($$anchor, fragment);
  pop();
}
var root$a = template(`<div><!></div>`);
function ToolbarGroup($$anchor, $$props) {
  push($$props, true);
  setup_stores();
  let spacing = prop($$props, "spacing", 3, "default"), padding = prop($$props, "padding", 3, "default"), position = prop($$props, "position", 3, "middle"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "spacing",
    "padding",
    "position",
    "class"
  ]);
  const groupClass = derived(() => toolbarGroup({
    spacing: spacing(),
    padding: padding(),
    position: position(),
    class: $$props.class
  }));
  const options = getContext("toolbar");
  if (options) store_set(options, true);
  var div = root$a();
  let attributes;
  var node = child(div);
  snippet(node, () => $$props.children);
  reset(div);
  template_effect(() => attributes = set_attributes(div, attributes, { ...restProps, class: get(groupClass) }));
  append($$anchor, div);
  pop();
}
var root_1$7 = ns_template(`<title> </title>`);
var root_2$6 = ns_template(`<desc> </desc>`);
var root$9 = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"></path></svg>`);
function CodeOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "code outline"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "color",
    "title",
    "strokeWidth",
    "desc",
    "class",
    "ariaLabel"
  ]);
  let ariaDescribedby = `${((_a = $$props.title) == null ? void 0 : _a.id) || ""} ${((_b = $$props.desc) == null ? void 0 : _b.id) || ""}`;
  const hasDescription = derived(() => {
    var _a2, _b2;
    return !!(((_a2 = $$props.title) == null ? void 0 : _a2.id) || ((_b2 = $$props.desc) == null ? void 0 : _b2.id));
  });
  var svg = root$9();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$7();
    var text2 = child(title_1, true);
    reset(title_1);
    template_effect(() => {
      set_attribute(title_1, "id", $$props.title.id);
      set_text(text2, $$props.title.title);
    });
    append($$anchor2, title_1);
  });
  var node_1 = sibling(node);
  if_block(node_1, () => {
    var _a2;
    return ((_a2 = $$props.desc) == null ? void 0 : _a2.id) && $$props.desc.desc;
  }, ($$anchor2) => {
    var desc_1 = root_2$6();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  var path = sibling(node_1);
  reset(svg);
  template_effect(() => {
    attributes = set_attributes(
      svg,
      attributes,
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        color: color(),
        ...restProps,
        class: twMerge("shrink-0", sizes[size()], $$props.class),
        "aria-label": ariaLabel(),
        "aria-describedby": get(hasDescription) ? ariaDescribedby : void 0,
        viewBox: "0 0 24 24"
      },
      void 0,
      true
    );
    set_attribute(path, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
  pop();
}
var root_1$6 = ns_template(`<title> </title>`);
var root_2$5 = ns_template(`<desc> </desc>`);
var root$8 = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.99 9H15M8.99 9H9m12 3a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM7 13c0 1 .507 2.397 1.494 3.216a5.5 5.5 0 0 0 7.022 0C16.503 15.397 17 14 17 13c0 0-1.99 1-4.995 1S7 13 7 13Z"></path></svg>`);
function FaceGrinOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "face grin outline"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "color",
    "title",
    "strokeWidth",
    "desc",
    "class",
    "ariaLabel"
  ]);
  let ariaDescribedby = `${((_a = $$props.title) == null ? void 0 : _a.id) || ""} ${((_b = $$props.desc) == null ? void 0 : _b.id) || ""}`;
  const hasDescription = derived(() => {
    var _a2, _b2;
    return !!(((_a2 = $$props.title) == null ? void 0 : _a2.id) || ((_b2 = $$props.desc) == null ? void 0 : _b2.id));
  });
  var svg = root$8();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$6();
    var text2 = child(title_1, true);
    reset(title_1);
    template_effect(() => {
      set_attribute(title_1, "id", $$props.title.id);
      set_text(text2, $$props.title.title);
    });
    append($$anchor2, title_1);
  });
  var node_1 = sibling(node);
  if_block(node_1, () => {
    var _a2;
    return ((_a2 = $$props.desc) == null ? void 0 : _a2.id) && $$props.desc.desc;
  }, ($$anchor2) => {
    var desc_1 = root_2$5();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  var path = sibling(node_1);
  reset(svg);
  template_effect(() => {
    attributes = set_attributes(
      svg,
      attributes,
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        color: color(),
        ...restProps,
        class: twMerge("shrink-0", sizes[size()], $$props.class),
        "aria-label": ariaLabel(),
        "aria-describedby": get(hasDescription) ? ariaDescribedby : void 0,
        viewBox: "0 0 24 24"
      },
      void 0,
      true
    );
    set_attribute(path, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
  pop();
}
var root_1$5 = ns_template(`<title> </title>`);
var root_2$4 = ns_template(`<desc> </desc>`);
var root$7 = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"></path></svg>`);
function ImageOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "image outline"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "color",
    "title",
    "strokeWidth",
    "desc",
    "class",
    "ariaLabel"
  ]);
  let ariaDescribedby = `${((_a = $$props.title) == null ? void 0 : _a.id) || ""} ${((_b = $$props.desc) == null ? void 0 : _b.id) || ""}`;
  const hasDescription = derived(() => {
    var _a2, _b2;
    return !!(((_a2 = $$props.title) == null ? void 0 : _a2.id) || ((_b2 = $$props.desc) == null ? void 0 : _b2.id));
  });
  var svg = root$7();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$5();
    var text2 = child(title_1, true);
    reset(title_1);
    template_effect(() => {
      set_attribute(title_1, "id", $$props.title.id);
      set_text(text2, $$props.title.title);
    });
    append($$anchor2, title_1);
  });
  var node_1 = sibling(node);
  if_block(node_1, () => {
    var _a2;
    return ((_a2 = $$props.desc) == null ? void 0 : _a2.id) && $$props.desc.desc;
  }, ($$anchor2) => {
    var desc_1 = root_2$4();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  var path = sibling(node_1);
  reset(svg);
  template_effect(() => {
    attributes = set_attributes(
      svg,
      attributes,
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        color: color(),
        ...restProps,
        class: twMerge("shrink-0", sizes[size()], $$props.class),
        "aria-label": ariaLabel(),
        "aria-describedby": get(hasDescription) ? ariaDescribedby : void 0,
        viewBox: "0 0 24 24"
      },
      void 0,
      true
    );
    set_attribute(path, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
  pop();
}
var root_1$4 = ns_template(`<title> </title>`);
var root_2$3 = ns_template(`<desc> </desc>`);
var root$6 = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z" clip-rule="evenodd"></path></svg>`);
function MapPinAltSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "map pin alt solid"), restProps = rest_props($$props, [
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
  var svg = root$6();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$4();
    var text2 = child(title_1, true);
    reset(title_1);
    template_effect(() => {
      set_attribute(title_1, "id", $$props.title.id);
      set_text(text2, $$props.title.title);
    });
    append($$anchor2, title_1);
  });
  var node_1 = sibling(node);
  if_block(node_1, () => {
    var _a2;
    return ((_a2 = $$props.desc) == null ? void 0 : _a2.id) && $$props.desc.desc;
  }, ($$anchor2) => {
    var desc_1 = root_2$3();
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
var root_1$3 = ns_template(`<title> </title>`);
var root_2$2 = ns_template(`<desc> </desc>`);
var root$5 = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8"></path></svg>`);
function PaperClipOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "paper clip outline"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "color",
    "title",
    "strokeWidth",
    "desc",
    "class",
    "ariaLabel"
  ]);
  let ariaDescribedby = `${((_a = $$props.title) == null ? void 0 : _a.id) || ""} ${((_b = $$props.desc) == null ? void 0 : _b.id) || ""}`;
  const hasDescription = derived(() => {
    var _a2, _b2;
    return !!(((_a2 = $$props.title) == null ? void 0 : _a2.id) || ((_b2 = $$props.desc) == null ? void 0 : _b2.id));
  });
  var svg = root$5();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$3();
    var text2 = child(title_1, true);
    reset(title_1);
    template_effect(() => {
      set_attribute(title_1, "id", $$props.title.id);
      set_text(text2, $$props.title.title);
    });
    append($$anchor2, title_1);
  });
  var node_1 = sibling(node);
  if_block(node_1, () => {
    var _a2;
    return ((_a2 = $$props.desc) == null ? void 0 : _a2.id) && $$props.desc.desc;
  }, ($$anchor2) => {
    var desc_1 = root_2$2();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  var path = sibling(node_1);
  reset(svg);
  template_effect(() => {
    attributes = set_attributes(
      svg,
      attributes,
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        color: color(),
        ...restProps,
        class: twMerge("shrink-0", sizes[size()], $$props.class),
        "aria-label": ariaLabel(),
        "aria-describedby": get(hasDescription) ? ariaDescribedby : void 0,
        viewBox: "0 0 24 24"
      },
      void 0,
      true
    );
    set_attribute(path, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
  pop();
}
var root_1$2 = ns_template(`<title> </title>`);
var root_2$1 = ns_template(`<desc> </desc>`);
var root$4 = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12 18-7 3 7-18 7 18-7-3Zm0 0v-5"></path></svg>`);
function PaperPlaneOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "paper plane outline"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "color",
    "title",
    "strokeWidth",
    "desc",
    "class",
    "ariaLabel"
  ]);
  let ariaDescribedby = `${((_a = $$props.title) == null ? void 0 : _a.id) || ""} ${((_b = $$props.desc) == null ? void 0 : _b.id) || ""}`;
  const hasDescription = derived(() => {
    var _a2, _b2;
    return !!(((_a2 = $$props.title) == null ? void 0 : _a2.id) || ((_b2 = $$props.desc) == null ? void 0 : _b2.id));
  });
  var svg = root$4();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$2();
    var text2 = child(title_1, true);
    reset(title_1);
    template_effect(() => {
      set_attribute(title_1, "id", $$props.title.id);
      set_text(text2, $$props.title.title);
    });
    append($$anchor2, title_1);
  });
  var node_1 = sibling(node);
  if_block(node_1, () => {
    var _a2;
    return ((_a2 = $$props.desc) == null ? void 0 : _a2.id) && $$props.desc.desc;
  }, ($$anchor2) => {
    var desc_1 = root_2$1();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  var path = sibling(node_1);
  reset(svg);
  template_effect(() => {
    attributes = set_attributes(
      svg,
      attributes,
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        color: color(),
        ...restProps,
        class: twMerge("shrink-0", sizes[size()], $$props.class),
        "aria-label": ariaLabel(),
        "aria-describedby": get(hasDescription) ? ariaDescribedby : void 0,
        viewBox: "0 0 24 24"
      },
      void 0,
      true
    );
    set_attribute(path, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Textarea, ToolbarButton } from "$lib";\n  import { ImageOutline, FaceGrinOutline, PaperPlaneOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<form>\n  <label for="chat" class="sr-only">Your message</label>\n  <div class="flex items-center rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-700">\n    <ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">\n      <ImageOutline class="h-6 w-6" />\n      <span class="sr-only">Upload image</span>\n    </ToolbarButton>\n    <ToolbarButton color="dark" class="text-gray-500 dark:text-gray-400">\n      <FaceGrinOutline class="h-6 w-6" />\n      <span class="sr-only">Add emoji</span>\n    </ToolbarButton>\n    <Textarea id="chat" class="mx-4 bg-white dark:bg-gray-800" rows={1} placeholder="Your message..." />\n    <ToolbarButton color="blue" class="rounded-full text-primary-600 dark:text-primary-500">\n      <PaperPlaneOutline class="h-6 w-6 rotate-45" />\n      <span class="sr-only">Send message</span>\n    </ToolbarButton>\n  </div>\n</form>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Textarea, Toolbar, ToolbarButton, Button, Helper } from "$lib";\n  import { PaperClipOutline, MapPinAltSolid, ImageOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<form>\n  <Textarea class="mb-4" placeholder="Write a comment">\n    {#snippet footer()}\n      <div class="flex items-center justify-between">\n        <Button type="submit">Post comment</Button>\n        <Toolbar embedded>\n          <ToolbarButton name="Attach file"><PaperClipOutline class="h-6 w-6" /></ToolbarButton>\n          <ToolbarButton name="Set location"><MapPinAltSolid class="h-6 w-6" /></ToolbarButton>\n          <ToolbarButton name="Upload image"><ImageOutline class="h-6 w-6" /></ToolbarButton>\n        </Toolbar>\n      </div>\n    {/snippet}\n  </Textarea>\n</form>\n<Helper class="mt-4">\n  Remember, contributions to this topic should follow our <a href="/" class="text-primary-600 hover:underline dark:text-primary-500">Community Guidelines</a>\n  .\n</Helper>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Textarea, Label } from "$lib";\n<\/script>\n\n<Label for="textarea-id" class="mb-2">Your message</Label>\n<Textarea id="textarea-id" placeholder="Your message" rows={4} name="message" />\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Textarea, Toolbar, ToolbarButton, ToolbarGroup, Label, Button } from "$lib";\n  import { PaperClipOutline, MapPinAltSolid, ImageOutline, CodeOutline, FaceGrinOutline, PaperPlaneOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<form>\n  <Label for="editor" class="sr-only">Publish post</Label>\n  <Textarea id="editor" rows={8} class="mb-4" placeholder="Write a comment">\n    {#snippet header()}\n      <Toolbar embedded>\n        <ToolbarGroup>\n          <ToolbarButton name="Attach file"><PaperClipOutline class="h-6 w-6 rotate-45" /></ToolbarButton>\n          <ToolbarButton name="Embed map"><MapPinAltSolid class="h-6 w-6" /></ToolbarButton>\n          <ToolbarButton name="Upload image"><ImageOutline class="h-6 w-6" /></ToolbarButton>\n        </ToolbarGroup>\n        <ToolbarGroup>\n          <ToolbarButton name="Format code"><CodeOutline class="h-6 w-6" /></ToolbarButton>\n          <ToolbarButton name="Add emoji"><FaceGrinOutline class="h-6 w-6" /></ToolbarButton>\n        </ToolbarGroup>\n        {#snippet end()}\n          <ToolbarButton name="Send"><PaperPlaneOutline class="h-6 w-6 rotate-45" /></ToolbarButton>\n        {/snippet}\n      </Toolbar>\n    {/snippet}\n  </Textarea>\n  <Button class="mt-4">Publish post</Button>\n</form>\n';
var root_6 = template(`<!> <!> <!>`, 1);
var root_10 = template(`<!> <!>`, 1);
var root_5$1 = template(`<!> <!>`, 1);
var root$3 = template(`<form><!> <!> <!></form>`);
function WysiwygEditor($$anchor) {
  var form = root$3();
  var node = child(form);
  Label(node, {
    for: "editor",
    class: "sr-only",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Publish post");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  {
    const header = ($$anchor2) => {
      {
        const end = ($$anchor3) => {
          ToolbarButton($$anchor3, {
            name: "Send",
            children: ($$anchor4, $$slotProps) => {
              PaperPlaneOutline($$anchor4, { class: "h-6 w-6 rotate-45" });
            },
            $$slots: { default: true }
          });
        };
        Toolbar($$anchor2, {
          embedded: true,
          end,
          children: ($$anchor3, $$slotProps) => {
            var fragment_3 = root_5$1();
            var node_2 = first_child(fragment_3);
            ToolbarGroup(node_2, {
              children: ($$anchor4, $$slotProps2) => {
                var fragment_4 = root_6();
                var node_3 = first_child(fragment_4);
                ToolbarButton(node_3, {
                  name: "Attach file",
                  children: ($$anchor5, $$slotProps3) => {
                    PaperClipOutline($$anchor5, { class: "h-6 w-6 rotate-45" });
                  },
                  $$slots: { default: true }
                });
                var node_4 = sibling(node_3, 2);
                ToolbarButton(node_4, {
                  name: "Embed map",
                  children: ($$anchor5, $$slotProps3) => {
                    MapPinAltSolid($$anchor5, { class: "h-6 w-6" });
                  },
                  $$slots: { default: true }
                });
                var node_5 = sibling(node_4, 2);
                ToolbarButton(node_5, {
                  name: "Upload image",
                  children: ($$anchor5, $$slotProps3) => {
                    ImageOutline($$anchor5, { class: "h-6 w-6" });
                  },
                  $$slots: { default: true }
                });
                append($$anchor4, fragment_4);
              },
              $$slots: { default: true }
            });
            var node_6 = sibling(node_2, 2);
            ToolbarGroup(node_6, {
              children: ($$anchor4, $$slotProps2) => {
                var fragment_8 = root_10();
                var node_7 = first_child(fragment_8);
                ToolbarButton(node_7, {
                  name: "Format code",
                  children: ($$anchor5, $$slotProps3) => {
                    CodeOutline($$anchor5, { class: "h-6 w-6" });
                  },
                  $$slots: { default: true }
                });
                var node_8 = sibling(node_7, 2);
                ToolbarButton(node_8, {
                  name: "Add emoji",
                  children: ($$anchor5, $$slotProps3) => {
                    FaceGrinOutline($$anchor5, { class: "h-6 w-6" });
                  },
                  $$slots: { default: true }
                });
                append($$anchor4, fragment_8);
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_3);
          },
          $$slots: { end: true, default: true }
        });
      }
    };
    Textarea(node_1, {
      id: "editor",
      rows: 8,
      class: "mb-4",
      placeholder: "Write a comment",
      header,
      $$slots: { header: true }
    });
  }
  var node_9 = sibling(node_1, 2);
  Button(node_9, {
    class: "mt-4",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Publish post");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  reset(form);
  append($$anchor, form);
}
var root_3$1 = template(`<!> <!> <!>`, 1);
var root_1$1 = template(`<div class="flex items-center justify-between"><!> <!></div>`);
var root_7 = template(`Remember, contributions to this topic should follow our <a href="/" class="text-primary-600 hover:underline dark:text-primary-500">Community Guidelines</a> .`, 1);
var root$2 = template(`<form><!></form> <!>`, 1);
function CommentBox($$anchor) {
  var fragment = root$2();
  var form = first_child(fragment);
  var node = child(form);
  {
    const footer = ($$anchor2) => {
      var div = root_1$1();
      var node_1 = child(div);
      Button(node_1, {
        type: "submit",
        children: ($$anchor3, $$slotProps) => {
          next();
          var text$1 = text("Post comment");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node_1, 2);
      Toolbar(node_2, {
        embedded: true,
        children: ($$anchor3, $$slotProps) => {
          var fragment_1 = root_3$1();
          var node_3 = first_child(fragment_1);
          ToolbarButton(node_3, {
            name: "Attach file",
            children: ($$anchor4, $$slotProps2) => {
              PaperClipOutline($$anchor4, { class: "h-6 w-6" });
            },
            $$slots: { default: true }
          });
          var node_4 = sibling(node_3, 2);
          ToolbarButton(node_4, {
            name: "Set location",
            children: ($$anchor4, $$slotProps2) => {
              MapPinAltSolid($$anchor4, { class: "h-6 w-6" });
            },
            $$slots: { default: true }
          });
          var node_5 = sibling(node_4, 2);
          ToolbarButton(node_5, {
            name: "Upload image",
            children: ($$anchor4, $$slotProps2) => {
              ImageOutline($$anchor4, { class: "h-6 w-6" });
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
      reset(div);
      append($$anchor2, div);
    };
    Textarea(node, {
      class: "mb-4",
      placeholder: "Write a comment",
      footer,
      $$slots: { footer: true }
    });
  }
  reset(form);
  var node_6 = sibling(form, 2);
  Helper(node_6, {
    class: "mt-4",
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment_5 = root_7();
      next(2);
      append($$anchor2, fragment_5);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
}
var root_1 = template(`<!> <span class="sr-only">Upload image</span>`, 1);
var root_2 = template(`<!> <span class="sr-only">Add emoji</span>`, 1);
var root_3 = template(`<!> <span class="sr-only">Send message</span>`, 1);
var root$1 = template(`<form><label for="chat" class="sr-only">Your message</label> <div class="flex items-center rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-700"><!> <!> <!> <!></div></form>`);
function ChatroomInput($$anchor) {
  var form = root$1();
  var div = sibling(child(form), 2);
  var node = child(div);
  ToolbarButton(node, {
    color: "dark",
    class: "text-gray-500 dark:text-gray-400",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1();
      var node_1 = first_child(fragment);
      ImageOutline(node_1, { class: "h-6 w-6" });
      next(2);
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node, 2);
  ToolbarButton(node_2, {
    color: "dark",
    class: "text-gray-500 dark:text-gray-400",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_2();
      var node_3 = first_child(fragment_1);
      FaceGrinOutline(node_3, { class: "h-6 w-6" });
      next(2);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_2, 2);
  Textarea(node_4, {
    id: "chat",
    class: "mx-4 bg-white dark:bg-gray-800",
    rows: 1,
    placeholder: "Your message..."
  });
  var node_5 = sibling(node_4, 2);
  ToolbarButton(node_5, {
    color: "blue",
    class: "rounded-full text-primary-600 dark:text-primary-500",
    children: ($$anchor2, $$slotProps) => {
      var fragment_2 = root_3();
      var node_6 = first_child(fragment_2);
      PaperPlaneOutline(node_6, { class: "h-6 w-6 rotate-45" });
      next(2);
      append($$anchor2, fragment_2);
    },
    $$slots: { default: true }
  });
  reset(div);
  reset(form);
  append($$anchor, form);
}
var root_5 = template(`Your message <!>`, 1);
var root_4 = template(`<div class="mb-4 h-64"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!> <!> <!> <!> <!> <!></div>`, 1);
var root_17 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "forms/textarea";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/ChatroomInput.svelte": __vite_glob_0_0,
    "./examples/CommentBox.svelte": __vite_glob_0_1,
    "./examples/Default.svelte": __vite_glob_0_2,
    "./examples/WysiwygEditor.svelte": __vite_glob_0_3
  });
  const exampleArr = [
    // { name: 'Default', component: ExampleComponents.Default },
    {
      name: "Wysiwyg editor",
      component: WysiwygEditor
    },
    {
      name: "Comment box",
      component: CommentBox
    },
    {
      name: "Chatroom input",
      component: ChatroomInput
    }
  ];
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  let value = state("");
  const changeValue = () => {
    set(value, proxy(get(value) !== "" ? "" : "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));
  };
  let disabled = state(false);
  const changeDisabled = () => {
    set(disabled, !get(disabled));
  };
  let required = state(false);
  const changeRequired = () => {
    set(required, !get(required));
  };
  let placeholder = state("");
  const changePlaceholder = () => {
    set(placeholder, proxy(get(placeholder) !== "" ? "" : "Your message"));
    set(value, proxy(get(placeholder) !== "" ? "" : "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));
  };
  let rows = state(void 0);
  const changeRows = () => {
    set(rows, proxy(get(rows) !== void 0 ? void 0 : 5));
  };
  let maxlength = state(void 0);
  const changeMaxlength = () => {
    set(maxlength, proxy(get(maxlength) !== void 0 ? void 0 : 20));
    set(value, proxy(get(maxlength) === 20 ? "" : "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."));
  };
  let textAreaClass = state("");
  const changeClass = () => {
    set(textAreaClass, proxy(get(textAreaClass) === "" ? "w-48" : ""));
  };
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(required)) props.push(`required`);
    if (get(placeholder)) props.push(`placeholder="${get(placeholder)}"`);
    if (get(rows) !== void 0) props.push(`rows="${get(rows)}"`);
    if (get(maxlength)) props.push(`maxlength="${get(maxlength)}"`);
    if (get(textAreaClass)) props.push(`class="${get(textAreaClass)}"`);
    if (get(disabled)) props.push(`disabled`);
    if (get(value)) props.push(`value="${get(value)}"`);
    const propsString = props.length > 0 ? props.map((prop2) => `
  ${prop2}`).join("") + "\n" : "";
    return `<Textarea${propsString} />`;
  })());
  let builder = uiHelpers();
  let builderExpand = state(false);
  let showBuilderExpandButton = derived(() => isGeneratedCodeOverflow(get(generatedCode)));
  const handleBuilderExpandClick = () => {
    set(builderExpand, !get(builderExpand));
  };
  let codeBlock = uiHelpers();
  let exampleExpand = state(false);
  let showExpandButton = derived(() => isSvelteOverflow(get(svelteCode), exampleModules));
  const handleExpandClick = () => {
    set(exampleExpand, !get(exampleExpand));
  };
  user_effect(() => {
    set(exampleExpand, proxy(codeBlock.isOpen));
    set(builderExpand, proxy(builder.isOpen));
  });
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Textarea");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  H2(node_1, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Interactive Textarea Bilder");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  {
    const codeblock = ($$anchor2) => {
      DynamicCodeBlockHighlight($$anchor2, {
        handleExpandClick: handleBuilderExpandClick,
        get expand() {
          return get(builderExpand);
        },
        get showExpandButton() {
          return get(showBuilderExpandButton);
        },
        get code() {
          return get(generatedCode);
        }
      });
    };
    CodeWrapper(node_2, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_2 = root_4();
        var div = first_child(fragment_2);
        var node_3 = child(div);
        Label(node_3, {
          for: "textarea-id",
          class: "mb-2",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var fragment_3 = root_5();
            var node_4 = sibling(first_child(fragment_3));
            if_block(node_4, () => get(required), ($$anchor4) => {
              Helper($$anchor4, {
                color: "red",
                class: "inline",
                children: ($$anchor5, $$slotProps3) => {
                  next();
                  var text_2 = text("* Required");
                  append($$anchor5, text_2);
                },
                $$slots: { default: true }
              });
            });
            append($$anchor3, fragment_3);
          },
          $$slots: { default: true }
        });
        var node_5 = sibling(node_3, 2);
        Textarea(node_5, {
          id: "textarea-id",
          name: "message",
          get value() {
            return get(value);
          },
          get required() {
            return get(required);
          },
          get rows() {
            return get(rows);
          },
          get maxlength() {
            return get(maxlength);
          },
          get placeholder() {
            return get(placeholder);
          },
          get divClass() {
            return get(textAreaClass);
          },
          get disabled() {
            return get(disabled);
          }
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var node_6 = child(div_1);
        Button(node_6, {
          class: "w-48",
          color: "blue",
          onclick: changeRequired,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text();
            template_effect(() => set_text(text_3, get(required) ? "Remove required" : "Add required"));
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        var node_7 = sibling(node_6, 2);
        Button(node_7, {
          class: "w-48",
          color: "red",
          onclick: changePlaceholder,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_4 = text();
            template_effect(() => set_text(text_4, get(placeholder) ? "Remove placeholder" : "Add placeholder"));
            append($$anchor3, text_4);
          },
          $$slots: { default: true }
        });
        var node_8 = sibling(node_7, 2);
        Button(node_8, {
          class: "w-48",
          color: "yellow",
          onclick: changeRows,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_5 = text();
            template_effect(() => set_text(text_5, get(rows) !== void 0 ? "Remove rows" : "Add rows"));
            append($$anchor3, text_5);
          },
          $$slots: { default: true }
        });
        var node_9 = sibling(node_8, 2);
        Button(node_9, {
          class: "w-48",
          color: "green",
          onclick: changeMaxlength,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_6 = text();
            template_effect(() => set_text(text_6, get(maxlength) ? "Remove maxlength" : "Add maxlength"));
            append($$anchor3, text_6);
          },
          $$slots: { default: true }
        });
        var node_10 = sibling(node_9, 2);
        Button(node_10, {
          class: "w-48",
          color: "pink",
          onclick: changeClass,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_7 = text();
            template_effect(() => set_text(text_7, get(textAreaClass) !== "" ? "Remove class" : "Add class"));
            append($$anchor3, text_7);
          },
          $$slots: { default: true }
        });
        var node_11 = sibling(node_10, 2);
        Button(node_11, {
          class: "w-48",
          color: "purple",
          onclick: changeDisabled,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_8 = text();
            template_effect(() => set_text(text_8, get(disabled) ? "Remove disabled" : "Add disabled"));
            append($$anchor3, text_8);
          },
          $$slots: { default: true }
        });
        var node_12 = sibling(node_11, 2);
        Button(node_12, {
          class: "w-48",
          color: "orange",
          onclick: changeValue,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text();
            template_effect(() => set_text(text_9, get(value) ? "Remove value" : "Add value"));
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        reset(div_1);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_13 = sibling(node_2, 2);
  H2(node_13, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_10 = text("Examples");
      append($$anchor2, text_10);
    },
    $$slots: { default: true }
  });
  var node_14 = sibling(node_13, 2);
  {
    const codeblock = ($$anchor2) => {
      DynamicCodeBlockHighlight($$anchor2, {
        replaceLib: true,
        handleExpandClick,
        get expand() {
          return get(exampleExpand);
        },
        get showExpandButton() {
          return get(showExpandButton);
        },
        get code() {
          return exampleModules[`./examples/${get(svelteCode)}`];
        }
      });
    };
    CodeWrapper(node_14, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_13 = root_17();
        var div_2 = first_child(fragment_13);
        var node_15 = child(div_2);
        Label(node_15, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_11 = text("Example");
            append($$anchor3, text_11);
          },
          $$slots: { default: true }
        });
        var node_16 = sibling(node_15, 2);
        each(node_16, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-40 my-1",
            onclick: () => set(exampleExpand, false),
            name: "block_style",
            get group() {
              return get(selectedExample);
            },
            set group($$value) {
              set(selectedExample, proxy($$value));
            },
            get value() {
              return get(style).name;
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_12 = text();
              template_effect(() => set_text(text_12, get(style).name));
              append($$anchor4, text_12);
            },
            $$slots: { default: true }
          });
        });
        reset(div_2);
        var node_17 = sibling(div_2, 2);
        component(node_17, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_13);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_18 = sibling(node_14, 2);
  H2(node_18, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_13 = text("Component data");
      append($$anchor2, text_13);
    },
    $$slots: { default: true }
  });
  var node_19 = sibling(node_18, 2);
  CompoAttributesViewer(node_19, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
