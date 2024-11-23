import { c as comment, a as append, t as template, n as ns_template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, e as setContext, u as user_effect, c as child, f as first_child, s as sibling, r as reset, t as template_effect, a as pop, b as get, d as derived, g as getContext, a7 as set, a6 as state, n as next } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text, s as setup_stores, b as store_get } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { p as prop, i as if_block, r as rest_props, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { t as twMerge, bn as bottomNav, a as set_attributes, b as set_class, bo as bottomNavItem, bp as bottomnavheaderitem, bq as bottomnavheader, s as set_attribute, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { w as writable } from "../chunks/index.IFFPp5_U.js";
import { S as Skeleton, I as ImagePlaceholder } from "../chunks/Skeleton.DR3Y1iyj.js";
import { A as AdjustmentsVerticalSolid } from "../chunks/AdjustmentsVerticalSolid.CkK8xNkY.js";
import { U as UserCircleSolid } from "../chunks/UserCircleSolid.C5EoQM_S.js";
import { p as page } from "../chunks/stores.CC5X2N5j.js";
import { T as Tooltip } from "../chunks/Tooltip.DS4jm7dQ.js";
import { S as SearchOutline } from "../chunks/SearchOutline.CyH-RaHz.js";
import { h as html } from "../chunks/markdown.Ba9FtS5g.js";
import { A as Avatar } from "../chunks/Avatar.BvpffrdL.js";
import { C as Card } from "../chunks/Card.nT-sWZgG.js";
import { L as Listgroup } from "../chunks/Listgroup.2O2zmFyz.js";
import { C as ClockSolid } from "../chunks/ClockSolid.BKM18pYA.js";
import { U as UsersGroupOutline } from "../chunks/UsersGroupOutline.BgX7qJie.js";
var root$l = template(`<div><!> <div><!></div></div>`);
function BottomNav($$anchor, $$props) {
  push($$props, true);
  let position = prop($$props, "position", 3, "fixed"), navType = prop($$props, "navType", 3, "default"), activeUrl = prop($$props, "activeUrl", 3, ""), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "header",
    "position",
    "navType",
    "outerClass",
    "innerClass",
    "activeClass",
    "activeUrl"
  ]);
  const activeCls = twMerge("text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900", $$props.activeClass);
  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);
  setContext("navType", navType());
  setContext("bottomNavType", { activeClass: activeCls });
  const { outer, inner } = bottomNav({
    position: position(),
    navType: navType()
  });
  const outerCls = derived(() => outer({ class: $$props.outerClass }));
  const innerCls = derived(() => inner({ class: $$props.innerClass }));
  user_effect(() => {
    activeUrlStore.set(activeUrl());
  });
  var div = root$l();
  let attributes;
  var node = child(div);
  if_block(node, () => $$props.header, ($$anchor2) => {
    var fragment = comment();
    var node_1 = first_child(fragment);
    snippet(node_1, () => $$props.header);
    append($$anchor2, fragment);
  });
  var div_1 = sibling(node, 2);
  var node_2 = child(div_1);
  snippet(node_2, () => $$props.children);
  reset(div_1);
  reset(div);
  template_effect(() => {
    attributes = set_attributes(div, attributes, { ...restProps, class: get(outerCls) });
    set_class(div_1, get(innerCls));
  });
  append($$anchor, div);
  pop();
}
var root_1$h = template(`<a><!> <span> </span></a>`);
var root_2$c = template(`<button><!> <span> </span></button>`);
function BottomNavItem($$anchor, $$props) {
  push($$props, true);
  let appBtnPosition = prop($$props, "appBtnPosition", 3, "middle"), href = prop($$props, "href", 3, ""), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "btnName",
    "appBtnPosition",
    "target",
    "activeClass",
    "href",
    "btnClass",
    "spanClass"
  ]);
  const navType = getContext("navType");
  const context = getContext("bottomNavType") ?? {};
  let active = state(false);
  const activeUrlStore = getContext("activeUrl");
  let navUrl = state("");
  activeUrlStore.subscribe((value) => {
    set(navUrl, proxy(value));
  });
  const { base, span } = bottomNavItem({ navType, appBtnPosition: appBtnPosition() });
  user_effect(() => {
    set(active, proxy(get(navUrl) ? href() === get(navUrl) : get(navUrl) ? get(navUrl).startsWith(href()) : false));
  });
  function getCommonClass() {
    return twMerge(base({ class: $$props.btnClass }), get(active) && ($$props.activeClass ?? context.activeClass));
  }
  function getSpanClass() {
    return twMerge(span({ class: $$props.spanClass }), get(active) && ($$props.activeClass ?? context.activeClass));
  }
  const commonProps = derived(() => ({
    "aria-label": $$props.btnName,
    class: getCommonClass(),
    ...restProps
  }));
  const anchorProps = derived(() => ({
    ...get(commonProps),
    href: href(),
    target: $$props.target
  }));
  const buttonProps = derived(() => ({ ...get(commonProps), type: "button" }));
  user_effect(() => {
    console.log("commonProps: ", get(commonProps));
  });
  var fragment = comment();
  var node = first_child(fragment);
  if_block(
    node,
    href,
    ($$anchor2) => {
      var a = root_1$h();
      let attributes;
      var node_1 = child(a);
      snippet(node_1, () => $$props.children);
      var span_1 = sibling(node_1, 2);
      const class_derived = derived(getSpanClass);
      var text2 = child(span_1, true);
      reset(span_1);
      reset(a);
      template_effect(() => {
        attributes = set_attributes(a, attributes, { ...get(anchorProps) });
        set_class(span_1, get(class_derived));
        set_text(text2, $$props.btnName);
      });
      append($$anchor2, a);
    },
    ($$anchor2) => {
      var button = root_2$c();
      let attributes_1;
      var node_2 = child(button);
      snippet(node_2, () => $$props.children);
      var span_2 = sibling(node_2, 2);
      const class_derived_1 = derived(getSpanClass);
      var text_1 = child(span_2, true);
      reset(span_2);
      reset(button);
      template_effect(() => {
        attributes_1 = set_attributes(button, attributes_1, { ...get(buttonProps) });
        set_class(span_2, get(class_derived_1));
        set_text(text_1, $$props.btnName);
      });
      append($$anchor2, button);
    }
  );
  append($$anchor, fragment);
  pop();
}
var root$k = template(`<button> </button>`);
function BottomNavHeaderItem($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "itemName",
    "active",
    "class"
  ]);
  let base = derived(() => bottomnavheaderitem({
    active: $$props.active,
    className: $$props.class
  }));
  var button = root$k();
  let attributes;
  var text2 = child(button, true);
  reset(button);
  template_effect(() => {
    attributes = set_attributes(button, attributes, { ...restProps, class: get(base) });
    set_text(text2, $$props.itemName);
  });
  append($$anchor, button);
  pop();
}
var root$j = template(`<div><div role="group"><!></div></div>`);
function BottomNavHeader($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "outerClass",
    "innerClass"
  ]);
  const $$d = derived(bottomnavheader), innerDiv = derived(() => get($$d).innerDiv), outerDiv = derived(() => get($$d).outerDiv);
  var div = root$j();
  let attributes;
  var div_1 = child(div);
  const class_derived = derived(() => get(innerDiv)({ class: $$props.innerClass }));
  var node = child(div_1);
  snippet(node, () => $$props.children);
  reset(div_1);
  reset(div);
  template_effect(() => {
    attributes = set_attributes(div, attributes, {
      ...restProps,
      class: get(outerDiv)({ class: $$props.outerClass })
    });
    set_class(div_1, get(class_derived));
  });
  append($$anchor, div);
  pop();
}
var root_1$g = ns_template(`<title> </title>`);
var root_2$b = ns_template(`<desc> </desc>`);
var root$i = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2"></path></svg>`);
function AdjustmentsVerticalOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "adjustments vertical outline"), restProps = rest_props($$props, [
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
  var svg = root$i();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$g();
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
    var desc_1 = root_2$b();
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
var root_1$f = ns_template(`<title> </title>`);
var root_2$a = ns_template(`<desc> </desc>`);
var root$h = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15 19-7-7 7-7"></path></svg>`);
function AngleLeftOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "angle left outline"), restProps = rest_props($$props, [
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
  var svg = root$h();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$f();
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
    var desc_1 = root_2$a();
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
var root_1$e = ns_template(`<title> </title>`);
var root_2$9 = ns_template(`<desc> </desc>`);
var root$g = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9 5 7 7-7 7"></path></svg>`);
function AngleRightOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "angle right outline"), restProps = rest_props($$props, [
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
  var svg = root$g();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$e();
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
    var desc_1 = root_2$9();
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
var root_1$d = ns_template(`<title> </title>`);
var root_2$8 = ns_template(`<desc> </desc>`);
var root$f = ns_template(`<svg><!><!><path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z"></path></svg>`);
function BookmarkSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "bookmark solid"), restProps = rest_props($$props, [
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
  var svg = root$f();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$d();
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
    var desc_1 = root_2$8();
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
var root_1$c = ns_template(`<title> </title>`);
var root_2$7 = ns_template(`<desc> </desc>`);
var root$e = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18 9V4a1 1 0 0 0-1-1H8.914a1 1 0 0 0-.707.293L4.293 7.207A1 1 0 0 0 4 7.914V20a1 1 0 0 0 1 1h4M9 3v4a1 1 0 0 1-1 1H4m11 6v4m-2-2h4m3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"></path></svg>`);
function FileCirclePlusOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "file circle plus outline"), restProps = rest_props($$props, [
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
  var svg = root$e();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$c();
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
    var desc_1 = root_2$7();
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
var root_1$b = ns_template(`<title> </title>`);
var root_2$6 = ns_template(`<desc> </desc>`);
var root$d = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"></path></svg>`);
function HomeSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "home solid"), restProps = rest_props($$props, [
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
  var svg = root$d();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$b();
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
var root_1$a = ns_template(`<title> </title>`);
var root_2$5 = ns_template(`<desc> </desc>`);
var root$c = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-7 7V5"></path></svg>`);
function PlusOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "plus outline"), restProps = rest_props($$props, [
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
  var svg = root$c();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$a();
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
var root_1$9 = ns_template(`<title> </title>`);
var root_2$4 = ns_template(`<desc> </desc>`);
var root$b = ns_template(`<svg><!><!><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"></path></svg>`);
function StarSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "star solid"), restProps = rest_props($$props, [
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
  var svg = root$b();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$9();
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
var root_1$8 = ns_template(`<title> </title>`);
var root_2$3 = ns_template(`<desc> </desc>`);
var root$a = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M12 14a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h4v-2h-4Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M12.293 3.293a1 1 0 0 1 1.414 0L16.414 6h-2.828l-1.293-1.293a1 1 0 0 1 0-1.414ZM12.414 6 9.707 3.293a1 1 0 0 0-1.414 0L5.586 6h6.828ZM4.586 7l-.056.055A2 2 0 0 0 3 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2h-4a5 5 0 0 1 0-10h4a2 2 0 0 0-1.53-1.945L17.414 7H4.586Z" clip-rule="evenodd"></path></svg>`);
function WalletSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "wallet solid"), restProps = rest_props($$props, [
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
  var svg = root$a();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$8();
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
  next(2);
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
const __vite_glob_0_0 = '<script>\n  import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder, Tooltip } from "$lib";\n  import { HomeSolid, WalletSolid, AdjustmentsVerticalOutline, UserCircleSolid, PlusOutline } from "flowbite-svelte-icons";\n  import { page } from "$app/stores";\n\n  let activeUrl = $state($page.url.pathname);\n  $effect(() => {\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<div class="relative flex flex-col p-6">\n  <Skeleton class="py-4" />\n  <ImagePlaceholder class="pb-20" />\n\n  <BottomNav {activeUrl} position="absolute" navType="application" innerClass="grid-cols-5">\n    <BottomNavItem btnName="Home" appBtnPosition="left" btnClass="static">\n      <HomeSolid id="home" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />\n      <Tooltip arrow={false} triggeredBy="#home">Home</Tooltip>\n    </BottomNavItem>\n    <BottomNavItem btnName="Wallet" appBtnPosition="middle">\n      <WalletSolid id="wallet" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />\n      <Tooltip arrow={false} triggeredBy="#wallet">Wallet</Tooltip>\n    </BottomNavItem>\n    <div class="flex items-center justify-center">\n      <BottomNavItem btnName="Create new item" appBtnPosition="middle" btnClass="inline-flex items-center justify-center w-10 h-10 font-medium bg-primary-600 rounded-full hover:bg-primary-700 group focus:ring-4 focus:ring-primary-300 focus:outline-none dark:focus:ring-primary-800">\n        <PlusOutline id="create" class="text-white" />\n        <Tooltip arrow={false} triggeredBy="#create">Create new item</Tooltip>\n      </BottomNavItem>\n    </div>\n    <BottomNavItem btnName="Settings" appBtnPosition="middle">\n      <AdjustmentsVerticalOutline id="settings" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />\n      <Tooltip arrow={false} triggeredBy="#settings">Settings</Tooltip>\n    </BottomNavItem>\n    <BottomNavItem btnName="Profile" appBtnPosition="right">\n      <UserCircleSolid id="profile" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />\n      <Tooltip arrow={false} triggeredBy="#profile">Profile</Tooltip>\n    </BottomNavItem>\n  </BottomNav>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Skeleton, ImagePlaceholder, BottomNav, BottomNavItem } from "$lib";\n  import { AdjustmentsVerticalSolid, HomeSolid, WalletSolid, UserCircleSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="relative flex flex-col p-6">\n  <Skeleton class="py-4" />\n  <ImagePlaceholder class="pb-20" />\n\n  <BottomNav position="absolute" navType="border" innerClass="grid-cols-4">\n    <BottomNavItem btnName="Home">\n      <HomeSolid />\n    </BottomNavItem>\n    <BottomNavItem btnName="Wallet">\n      <WalletSolid />\n    </BottomNavItem>\n    <BottomNavItem btnName="Settings">\n      <AdjustmentsVerticalSolid />\n    </BottomNavItem>\n    <BottomNavItem btnName="Profile">\n      <UserCircleSolid />\n    </BottomNavItem>\n  </BottomNav>\n</div>\n';
const __vite_glob_0_2 = '<script>\n  import { BottomNav, BottomNavItem, BottomNavHeader, BottomNavHeaderItem, Skeleton, ImagePlaceholder, Tooltip } from "$lib";\n  import { HomeSolid, BookmarkSolid, PlusOutline, SearchOutline, AdjustmentsVerticalOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="relative flex flex-col p-6">\n  <Skeleton class="py-4" />\n  <ImagePlaceholder class="pb-28" />\n\n  <BottomNav position="absolute" navType="group" innerClass="grid-cols-5">\n    {#snippet header()}\n      <BottomNavHeader>\n        <BottomNavHeaderItem itemName="New" />\n        <BottomNavHeaderItem itemName="Popular" active={true} />\n        <BottomNavHeaderItem itemName="Following" />\n      </BottomNavHeader>\n    {/snippet}\n    <BottomNavItem btnName="Home">\n      <HomeSolid id="home" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />\n      <Tooltip arrow={false} triggeredBy="#home">Home</Tooltip>\n    </BottomNavItem>\n    <BottomNavItem btnName="Bookmark">\n      <BookmarkSolid id="bookmark" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />\n      <Tooltip arrow={false} triggeredBy="#bookmark">Bookmark</Tooltip>\n    </BottomNavItem>\n    <BottomNavItem btnName="New post">\n      <PlusOutline id="create" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />\n      <Tooltip arrow={false} triggeredBy="#create">New post</Tooltip>\n    </BottomNavItem>\n    <BottomNavItem btnName="Search">\n      <SearchOutline id="search" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />\n      <Tooltip arrow={false} triggeredBy="#search">Search</Tooltip>\n    </BottomNavItem>\n    <BottomNavItem btnName="Settings">\n      <AdjustmentsVerticalOutline id="settings" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />\n      <Tooltip arrow={false} triggeredBy="#settings">Settings</Tooltip>\n    </BottomNavItem>\n  </BottomNav>\n</div>\n';
const __vite_glob_0_3 = `<script lang="ts">
  import { BottomNav, BottomNavItem, Card, Listgroup, Avatar } from "$lib";
  import { ClockSolid, UsersGroupOutline, StarSolid } from "flowbite-svelte-icons";
  interface ListType {
    img: { src: string; alt: string };
    comment: string;
    message: string;
  }
  let list: ListType[] = [
    {
      img: { src: "/images/profile-picture-1.webp", alt: "Neil Sims" },
      comment: 'New message from <span class="font-medium text-gray-900 dark:text-white">Jese Leos</span>: "Hey, what\\'s up? All set for the presentation?"',
      message: "a few moments ago"
    },
    {
      img: { src: "/images/profile-picture-2.webp", alt: "Bonnie Green" },
      comment: 'Joseph McFall and <span class="font-medium text-gray-900 dark:text-white">5 others</span> started following you.',
      message: "10 minutes ago"
    },
    {
      img: { src: "/images/profile-picture-3.webp", alt: "Leslie Livingston" },
      comment: 'Bonnie Green and <span class="font-medium text-gray-900 dark:text-white">141 others</span> love your story. See it and view more stories.',
      message: "23 minutes ago"
    },
    {
      img: { src: "/images/profile-picture-4.webp", alt: "Robert Brown" },
      comment: 'Leslie Livingston mentioned you in a comment: <span class="font-medium text-primary-600 dark:text-primary-500 hover:underline">@bonnie.green</span> what do you say?',
      message: "23 minutes ago"
    },
    {
      img: { src: "/images/profile-picture-5.webp", alt: "Michael Gough" },
      comment: "Robert Brown</span> posted a new video: Glassmorphism - learn how to implement the new design trend.",
      message: "23 minutes ago"
    }
  ];
<\/script>

<div class="flex justify-center">
  <Card class="relative h-96 overflow-y-scroll rounded-lg border border-gray-100 bg-white dark:border-gray-600 dark:bg-gray-700" contentClass="p-0 sm:p-0 md:p-0">
    <Listgroup class="border-0 dark:!bg-transparent">
      {#snippet children()}
        {#each list as item}
          <a href="/" class="flex w-full items-center justify-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800">
            <Avatar src={item.img.src} alt={item.img.alt} class="me-3 flex-shrink-0" />
            <div>
              <p class="text-sm text-gray-500 dark:text-gray-400">{@html item.comment}</p>
              <span class="text-xs text-primary-600 dark:text-primary-500">{@html item.message}</span>
            </div>
          </a>
        {/each}
      {/snippet}
    </Listgroup>
    <BottomNav position="sticky" navType="card" innerClass="grid-cols-3 pt-2 pb-4">
      <BottomNavItem btnName="Latest">
        <ClockSolid class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
      </BottomNavItem>
      <BottomNavItem btnName="Following">
        <UsersGroupOutline class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
      </BottomNavItem>
      <BottomNavItem btnName="Favorites">
        <StarSolid class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />
      </BottomNavItem>
    </BottomNav>
  </Card>
</div>
`;
const __vite_glob_0_4 = '<script lang="ts">\n  import { Skeleton, ImagePlaceholder, BottomNav, BottomNavItem } from "$lib";\n  import { AdjustmentsVerticalSolid, HomeSolid, WalletSolid, UserCircleSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="relative flex flex-col p-6">\n  <Skeleton class="py-4" />\n  <ImagePlaceholder class="pb-20" />\n\n  <BottomNav position="absolute" innerClass="grid-cols-4">\n    <BottomNavItem btnName="Home">\n      <HomeSolid class="mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />\n    </BottomNavItem>\n    <BottomNavItem btnName="Wallet">\n      <WalletSolid class="mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />\n    </BottomNavItem>\n    <BottomNavItem btnName="Settings">\n      <AdjustmentsVerticalSolid class="mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />\n    </BottomNavItem>\n    <BottomNavItem btnName="Profile">\n      <UserCircleSolid class="mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />\n    </BottomNavItem>\n  </BottomNav>\n</div>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { Skeleton, ImagePlaceholder, BottomNav, BottomNavItem } from "$lib";\n  import { AdjustmentsVerticalSolid, HomeSolid, WalletSolid, UserCircleSolid } from "flowbite-svelte-icons";\n  let svgClass = "mb-1 text-pink-500 dark:text-pink-400 group-hover:text-pink-600 dark:group-hover:text-pink-500";\n  let svgActiveClass = "mb-1 text-green-500 dark:text-green-500 group-hover:text-green-700 dark:group-hover:text-green-700";\n  import { page } from "$app/stores";\n\n  let activeUrl = $state($page.url.pathname);\n  $effect(() => {\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<div class="relative flex flex-col p-6">\n  <Skeleton class="py-4" />\n  <ImagePlaceholder class="pb-20" />\n\n  <BottomNav {activeUrl} position="absolute" innerClass="grid-cols-4">\n    <BottomNavItem btnName="Home" href="/">\n      <HomeSolid class={activeUrl === "/" ? svgActiveClass : svgClass} />\n    </BottomNavItem>\n    <BottomNavItem btnName="Quickstart" href="/docs/pages/quickstart">\n      <WalletSolid class={activeUrl === "/docs/pages/quickstart" ? svgActiveClass : svgClass} />\n    </BottomNavItem>\n    <BottomNavItem btnName="BottomNav" href="/docs/components/bottom-navigation">\n      <AdjustmentsVerticalSolid class={activeUrl === "/docs/components/bottom-navigation" ? svgActiveClass : svgClass} />\n    </BottomNavItem>\n    <BottomNavItem btnName="Accordion" href="/docs/components/accordion">\n      <UserCircleSolid class={activeUrl === "/docs/components/accordion" ? svgActiveClass : svgClass} />\n    </BottomNavItem>\n  </BottomNav>\n</div>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { Skeleton, ImagePlaceholder, BottomNav, BottomNavItem } from "$lib";\n  import { AdjustmentsVerticalSolid, HomeSolid, WalletSolid, UserCircleSolid } from "flowbite-svelte-icons";\n  import { page } from "$app/stores";\n\n  let activeUrl = $state($page.url.pathname);\n  $effect(() => {\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<div class="relative flex flex-col p-6">\n  <Skeleton class="py-4" />\n  <ImagePlaceholder class="pb-20" />\n\n  <BottomNav {activeUrl} position="absolute" innerClass="grid-cols-4">\n    <BottomNavItem btnName="Home" href="/">\n      <HomeSolid />\n    </BottomNavItem>\n    <BottomNavItem btnName="Quickstart" href="/pages/about" target="_blank">\n      <WalletSolid />\n    </BottomNavItem>\n    <BottomNavItem btnName="BottomNav" href="/components/bottom-navigation">\n      <AdjustmentsVerticalSolid />\n    </BottomNavItem>\n    <BottomNavItem btnName="Accordion" href="/components/accordion">\n      <UserCircleSolid />\n    </BottomNavItem>\n  </BottomNav>\n</div>\n';
const __vite_glob_0_7 = '<script lang="ts">\n  import { Skeleton, ImagePlaceholder, BottomNav, BottomNavItem } from "$lib";\n  import { AdjustmentsVerticalSolid, HomeSolid, WalletSolid, UserCircleSolid } from "flowbite-svelte-icons";\n  import { page } from "$app/stores";\n\n  let activeUrl = $state($page.url.pathname);\n  $effect(() => {\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<div class="relative flex flex-col p-6">\n  <Skeleton class="py-4" />\n  <ImagePlaceholder class="pb-20" />\n\n  <BottomNav {activeUrl} position="absolute" innerClass="grid-cols-4" activeClass="font-bold text-green-500 hover:text-green-900 dark:hover:text-green-700 dark:text-green-300">\n    <BottomNavItem btnName="Home" href="/">\n      <HomeSolid />\n    </BottomNavItem>\n    <BottomNavItem btnName="Quickstart" href="/pages/quickstart">\n      <WalletSolid />\n    </BottomNavItem>\n    <BottomNavItem btnName="BottomNav" href="/components/bottom-navigation">\n      <AdjustmentsVerticalSolid />\n    </BottomNavItem>\n    <BottomNavItem btnName="Accordion" href="/components/accordion">\n      <UserCircleSolid />\n    </BottomNavItem>\n  </BottomNav>\n</div>\n';
const __vite_glob_0_8 = '<script>\n  import { BottomNav, BottomNavItem, Skeleton, ImagePlaceholder, Tooltip } from "$lib";\n  import { FileCirclePlusOutline, BookmarkSolid, AngleLeftOutline, AngleRightOutline, AdjustmentsVerticalOutline, UserCircleSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="relative flex flex-col p-6">\n  <Skeleton class="py-4" />\n  <ImagePlaceholder class="pb-20" />\n\n  <BottomNav position="absolute" navType="pagination" innerClass="grid-cols-6">\n    <BottomNavItem btnName="New document">\n      <FileCirclePlusOutline id="create" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />\n      <Tooltip arrow={false} triggeredBy="#create">New document</Tooltip>\n    </BottomNavItem>\n    <BottomNavItem btnName="Bookmark">\n      <BookmarkSolid id="bookmark" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />\n      <Tooltip arrow={false} triggeredBy="#bookmark">Bookmark</Tooltip>\n    </BottomNavItem>\n    <div class="col-span-2 flex items-center justify-center">\n      <div class="mx-2 flex w-full max-w-[128px] items-center justify-between rounded-lg bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-400">\n        <button type="button" class="inline-flex h-8 items-center justify-center rounded-s-lg bg-gray-100 px-1 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-800">\n          <AngleLeftOutline class="ms-1 h-2 w-2" />\n          <span class="sr-only">Previous page</span>\n        </button>\n        <span class="mx-1 flex-shrink-0 text-sm font-medium">1 of 345</span>\n        <button type="button" class="inline-flex h-8 items-center justify-center rounded-e-lg bg-gray-100 px-1 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-800">\n          <AngleRightOutline class="me-1 h-2 w-2" />\n          <span class="sr-only">Next page</span>\n        </button>\n      </div>\n    </div>\n    <BottomNavItem btnName="Settings">\n      <AdjustmentsVerticalOutline id="settings" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />\n      <Tooltip arrow={false} triggeredBy="#settings">Settings</Tooltip>\n    </BottomNavItem>\n    <BottomNavItem btnName="Profile">\n      <UserCircleSolid id="profile" class="mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500" />\n      <Tooltip arrow={false} triggeredBy="#profile">Profile</Tooltip>\n    </BottomNavItem>\n  </BottomNav>\n</div>\n';
var root_1$7 = template(`<!> <!> <!> <!>`, 1);
var root$9 = template(`<div class="relative flex flex-col p-6"><!> <!> <!></div>`);
function Default($$anchor) {
  var div = root$9();
  var node = child(div);
  Skeleton(node, { class: "py-4" });
  var node_1 = sibling(node, 2);
  ImagePlaceholder(node_1, { class: "pb-20" });
  var node_2 = sibling(node_1, 2);
  BottomNav(node_2, {
    position: "absolute",
    innerClass: "grid-cols-4",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$7();
      var node_3 = first_child(fragment);
      BottomNavItem(node_3, {
        btnName: "Home",
        children: ($$anchor3, $$slotProps2) => {
          HomeSolid($$anchor3, {
            class: "mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
        },
        $$slots: { default: true }
      });
      var node_4 = sibling(node_3, 2);
      BottomNavItem(node_4, {
        btnName: "Wallet",
        children: ($$anchor3, $$slotProps2) => {
          WalletSolid($$anchor3, {
            class: "mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
        },
        $$slots: { default: true }
      });
      var node_5 = sibling(node_4, 2);
      BottomNavItem(node_5, {
        btnName: "Settings",
        children: ($$anchor3, $$slotProps2) => {
          AdjustmentsVerticalSolid($$anchor3, {
            class: "mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
        },
        $$slots: { default: true }
      });
      var node_6 = sibling(node_5, 2);
      BottomNavItem(node_6, {
        btnName: "Profile",
        children: ($$anchor3, $$slotProps2) => {
          UserCircleSolid($$anchor3, {
            class: "mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_1$6 = template(`<!> <!> <!> <!>`, 1);
var root$8 = template(`<div class="relative flex flex-col p-6"><!> <!> <!></div>`);
function LinkAndActiveClass($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  user_effect(() => {
    set(activeUrl, proxy($page().url.pathname));
  });
  var div = root$8();
  var node = child(div);
  Skeleton(node, { class: "py-4" });
  var node_1 = sibling(node, 2);
  ImagePlaceholder(node_1, { class: "pb-20" });
  var node_2 = sibling(node_1, 2);
  BottomNav(node_2, {
    get activeUrl() {
      return get(activeUrl);
    },
    position: "absolute",
    innerClass: "grid-cols-4",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$6();
      var node_3 = first_child(fragment);
      BottomNavItem(node_3, {
        btnName: "Home",
        href: "/",
        children: ($$anchor3, $$slotProps2) => {
          HomeSolid($$anchor3, {});
        },
        $$slots: { default: true }
      });
      var node_4 = sibling(node_3, 2);
      BottomNavItem(node_4, {
        btnName: "Quickstart",
        href: "/pages/about",
        target: "_blank",
        children: ($$anchor3, $$slotProps2) => {
          WalletSolid($$anchor3, {});
        },
        $$slots: { default: true }
      });
      var node_5 = sibling(node_4, 2);
      BottomNavItem(node_5, {
        btnName: "BottomNav",
        href: "/components/bottom-navigation",
        children: ($$anchor3, $$slotProps2) => {
          AdjustmentsVerticalSolid($$anchor3, {});
        },
        $$slots: { default: true }
      });
      var node_6 = sibling(node_5, 2);
      BottomNavItem(node_6, {
        btnName: "Accordion",
        href: "/components/accordion",
        children: ($$anchor3, $$slotProps2) => {
          UserCircleSolid($$anchor3, {});
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
  pop();
}
var root_1$5 = template(`<!> <!> <!> <!>`, 1);
var root$7 = template(`<div class="relative flex flex-col p-6"><!> <!> <!></div>`);
function OverwritingActiveClass($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  user_effect(() => {
    set(activeUrl, proxy($page().url.pathname));
  });
  var div = root$7();
  var node = child(div);
  Skeleton(node, { class: "py-4" });
  var node_1 = sibling(node, 2);
  ImagePlaceholder(node_1, { class: "pb-20" });
  var node_2 = sibling(node_1, 2);
  BottomNav(node_2, {
    get activeUrl() {
      return get(activeUrl);
    },
    position: "absolute",
    innerClass: "grid-cols-4",
    activeClass: "font-bold text-green-500 hover:text-green-900 dark:hover:text-green-700 dark:text-green-300",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$5();
      var node_3 = first_child(fragment);
      BottomNavItem(node_3, {
        btnName: "Home",
        href: "/",
        children: ($$anchor3, $$slotProps2) => {
          HomeSolid($$anchor3, {});
        },
        $$slots: { default: true }
      });
      var node_4 = sibling(node_3, 2);
      BottomNavItem(node_4, {
        btnName: "Quickstart",
        href: "/pages/quickstart",
        children: ($$anchor3, $$slotProps2) => {
          WalletSolid($$anchor3, {});
        },
        $$slots: { default: true }
      });
      var node_5 = sibling(node_4, 2);
      BottomNavItem(node_5, {
        btnName: "BottomNav",
        href: "/components/bottom-navigation",
        children: ($$anchor3, $$slotProps2) => {
          AdjustmentsVerticalSolid($$anchor3, {});
        },
        $$slots: { default: true }
      });
      var node_6 = sibling(node_5, 2);
      BottomNavItem(node_6, {
        btnName: "Accordion",
        href: "/components/accordion",
        children: ($$anchor3, $$slotProps2) => {
          UserCircleSolid($$anchor3, {});
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
  pop();
}
var root_1$4 = template(`<!> <!> <!> <!>`, 1);
var root$6 = template(`<div class="relative flex flex-col p-6"><!> <!> <!></div>`);
function IconColor($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let svgClass = "mb-1 text-pink-500 dark:text-pink-400 group-hover:text-pink-600 dark:group-hover:text-pink-500";
  let svgActiveClass = "mb-1 text-green-500 dark:text-green-500 group-hover:text-green-700 dark:group-hover:text-green-700";
  let activeUrl = state(proxy($page().url.pathname));
  user_effect(() => {
    set(activeUrl, proxy($page().url.pathname));
  });
  var div = root$6();
  var node = child(div);
  Skeleton(node, { class: "py-4" });
  var node_1 = sibling(node, 2);
  ImagePlaceholder(node_1, { class: "pb-20" });
  var node_2 = sibling(node_1, 2);
  BottomNav(node_2, {
    get activeUrl() {
      return get(activeUrl);
    },
    position: "absolute",
    innerClass: "grid-cols-4",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$4();
      var node_3 = first_child(fragment);
      BottomNavItem(node_3, {
        btnName: "Home",
        href: "/",
        children: ($$anchor3, $$slotProps2) => {
          var class_1 = derived(() => get(activeUrl) === "/" ? svgActiveClass : svgClass);
          HomeSolid($$anchor3, {
            get class() {
              return get(class_1);
            }
          });
        },
        $$slots: { default: true }
      });
      var node_4 = sibling(node_3, 2);
      BottomNavItem(node_4, {
        btnName: "Quickstart",
        href: "/docs/pages/quickstart",
        children: ($$anchor3, $$slotProps2) => {
          var class_2 = derived(() => get(activeUrl) === "/docs/pages/quickstart" ? svgActiveClass : svgClass);
          WalletSolid($$anchor3, {
            get class() {
              return get(class_2);
            }
          });
        },
        $$slots: { default: true }
      });
      var node_5 = sibling(node_4, 2);
      BottomNavItem(node_5, {
        btnName: "BottomNav",
        href: "/docs/components/bottom-navigation",
        children: ($$anchor3, $$slotProps2) => {
          var class_3 = derived(() => get(activeUrl) === "/docs/components/bottom-navigation" ? svgActiveClass : svgClass);
          AdjustmentsVerticalSolid($$anchor3, {
            get class() {
              return get(class_3);
            }
          });
        },
        $$slots: { default: true }
      });
      var node_6 = sibling(node_5, 2);
      BottomNavItem(node_6, {
        btnName: "Accordion",
        href: "/docs/components/accordion",
        children: ($$anchor3, $$slotProps2) => {
          var class_4 = derived(() => get(activeUrl) === "/docs/components/accordion" ? svgActiveClass : svgClass);
          UserCircleSolid($$anchor3, {
            get class() {
              return get(class_4);
            }
          });
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
  pop();
}
var root_1$3 = template(`<!> <!> <!> <!>`, 1);
var root$5 = template(`<div class="relative flex flex-col p-6"><!> <!> <!></div>`);
function Border($$anchor) {
  var div = root$5();
  var node = child(div);
  Skeleton(node, { class: "py-4" });
  var node_1 = sibling(node, 2);
  ImagePlaceholder(node_1, { class: "pb-20" });
  var node_2 = sibling(node_1, 2);
  BottomNav(node_2, {
    position: "absolute",
    navType: "border",
    innerClass: "grid-cols-4",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$3();
      var node_3 = first_child(fragment);
      BottomNavItem(node_3, {
        btnName: "Home",
        children: ($$anchor3, $$slotProps2) => {
          HomeSolid($$anchor3, {});
        },
        $$slots: { default: true }
      });
      var node_4 = sibling(node_3, 2);
      BottomNavItem(node_4, {
        btnName: "Wallet",
        children: ($$anchor3, $$slotProps2) => {
          WalletSolid($$anchor3, {});
        },
        $$slots: { default: true }
      });
      var node_5 = sibling(node_4, 2);
      BottomNavItem(node_5, {
        btnName: "Settings",
        children: ($$anchor3, $$slotProps2) => {
          AdjustmentsVerticalSolid($$anchor3, {});
        },
        $$slots: { default: true }
      });
      var node_6 = sibling(node_5, 2);
      BottomNavItem(node_6, {
        btnName: "Profile",
        children: ($$anchor3, $$slotProps2) => {
          UserCircleSolid($$anchor3, {});
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_2$2 = template(`<!> <!>`, 1);
var root_4$3 = template(`<!> <!>`, 1);
var root_6$2 = template(`<!> <!>`, 1);
var root_8$2 = template(`<!> <!>`, 1);
var root_10$1 = template(`<!> <!>`, 1);
var root_1$2 = template(`<!> <!> <div class="flex items-center justify-center"><!></div> <!> <!>`, 1);
var root$4 = template(`<div class="relative flex flex-col p-6"><!> <!> <!></div>`);
function ApplicationBar($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  user_effect(() => {
    set(activeUrl, proxy($page().url.pathname));
  });
  var div = root$4();
  var node = child(div);
  Skeleton(node, { class: "py-4" });
  var node_1 = sibling(node, 2);
  ImagePlaceholder(node_1, { class: "pb-20" });
  var node_2 = sibling(node_1, 2);
  BottomNav(node_2, {
    get activeUrl() {
      return get(activeUrl);
    },
    position: "absolute",
    navType: "application",
    innerClass: "grid-cols-5",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$2();
      var node_3 = first_child(fragment);
      BottomNavItem(node_3, {
        btnName: "Home",
        appBtnPosition: "left",
        btnClass: "static",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_1 = root_2$2();
          var node_4 = first_child(fragment_1);
          HomeSolid(node_4, {
            id: "home",
            class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
          var node_5 = sibling(node_4, 2);
          Tooltip(node_5, {
            arrow: false,
            triggeredBy: "#home",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("Home");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
      var node_6 = sibling(node_3, 2);
      BottomNavItem(node_6, {
        btnName: "Wallet",
        appBtnPosition: "middle",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_4$3();
          var node_7 = first_child(fragment_2);
          WalletSolid(node_7, {
            id: "wallet",
            class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
          var node_8 = sibling(node_7, 2);
          Tooltip(node_8, {
            arrow: false,
            triggeredBy: "#wallet",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Wallet");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var div_1 = sibling(node_6, 2);
      var node_9 = child(div_1);
      BottomNavItem(node_9, {
        btnName: "Create new item",
        appBtnPosition: "middle",
        btnClass: "inline-flex items-center justify-center w-10 h-10 font-medium bg-primary-600 rounded-full hover:bg-primary-700 group focus:ring-4 focus:ring-primary-300 focus:outline-none dark:focus:ring-primary-800",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_3 = root_6$2();
          var node_10 = first_child(fragment_3);
          PlusOutline(node_10, { id: "create", class: "text-white" });
          var node_11 = sibling(node_10, 2);
          Tooltip(node_11, {
            arrow: false,
            triggeredBy: "#create",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_2 = text("Create new item");
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_3);
        },
        $$slots: { default: true }
      });
      reset(div_1);
      var node_12 = sibling(div_1, 2);
      BottomNavItem(node_12, {
        btnName: "Settings",
        appBtnPosition: "middle",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_4 = root_8$2();
          var node_13 = first_child(fragment_4);
          AdjustmentsVerticalOutline(node_13, {
            id: "settings",
            class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
          var node_14 = sibling(node_13, 2);
          Tooltip(node_14, {
            arrow: false,
            triggeredBy: "#settings",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_3 = text("Settings");
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_4);
        },
        $$slots: { default: true }
      });
      var node_15 = sibling(node_12, 2);
      BottomNavItem(node_15, {
        btnName: "Profile",
        appBtnPosition: "right",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_5 = root_10$1();
          var node_16 = first_child(fragment_5);
          UserCircleSolid(node_16, {
            id: "profile",
            class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
          var node_17 = sibling(node_16, 2);
          Tooltip(node_17, {
            arrow: false,
            triggeredBy: "#profile",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_4 = text("Profile");
              append($$anchor4, text_4);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_5);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
  pop();
}
var root_2$1 = template(`<!> <!>`, 1);
var root_4$2 = template(`<!> <!>`, 1);
var root_6$1 = template(`<!> <!>`, 1);
var root_8$1 = template(`<!> <!>`, 1);
var root_1$1 = template(`<!> <!> <div class="col-span-2 flex items-center justify-center"><div class="mx-2 flex w-full max-w-[128px] items-center justify-between rounded-lg bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-400"><button type="button" class="inline-flex h-8 items-center justify-center rounded-s-lg bg-gray-100 px-1 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-800"><!> <span class="sr-only">Previous page</span></button> <span class="mx-1 flex-shrink-0 text-sm font-medium">1 of 345</span> <button type="button" class="inline-flex h-8 items-center justify-center rounded-e-lg bg-gray-100 px-1 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-800"><!> <span class="sr-only">Next page</span></button></div></div> <!> <!>`, 1);
var root$3 = template(`<div class="relative flex flex-col p-6"><!> <!> <!></div>`);
function Pagination($$anchor) {
  var div = root$3();
  var node = child(div);
  Skeleton(node, { class: "py-4" });
  var node_1 = sibling(node, 2);
  ImagePlaceholder(node_1, { class: "pb-20" });
  var node_2 = sibling(node_1, 2);
  BottomNav(node_2, {
    position: "absolute",
    navType: "pagination",
    innerClass: "grid-cols-6",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$1();
      var node_3 = first_child(fragment);
      BottomNavItem(node_3, {
        btnName: "New document",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_1 = root_2$1();
          var node_4 = first_child(fragment_1);
          FileCirclePlusOutline(node_4, {
            id: "create",
            class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
          var node_5 = sibling(node_4, 2);
          Tooltip(node_5, {
            arrow: false,
            triggeredBy: "#create",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("New document");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
      var node_6 = sibling(node_3, 2);
      BottomNavItem(node_6, {
        btnName: "Bookmark",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_4$2();
          var node_7 = first_child(fragment_2);
          BookmarkSolid(node_7, {
            id: "bookmark",
            class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
          var node_8 = sibling(node_7, 2);
          Tooltip(node_8, {
            arrow: false,
            triggeredBy: "#bookmark",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Bookmark");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var div_1 = sibling(node_6, 2);
      var div_2 = child(div_1);
      var button = child(div_2);
      var node_9 = child(button);
      AngleLeftOutline(node_9, { class: "ms-1 h-2 w-2" });
      next(2);
      reset(button);
      var button_1 = sibling(button, 4);
      var node_10 = child(button_1);
      AngleRightOutline(node_10, { class: "me-1 h-2 w-2" });
      next(2);
      reset(button_1);
      reset(div_2);
      reset(div_1);
      var node_11 = sibling(div_1, 2);
      BottomNavItem(node_11, {
        btnName: "Settings",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_3 = root_6$1();
          var node_12 = first_child(fragment_3);
          AdjustmentsVerticalOutline(node_12, {
            id: "settings",
            class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
          var node_13 = sibling(node_12, 2);
          Tooltip(node_13, {
            arrow: false,
            triggeredBy: "#settings",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_2 = text("Settings");
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_3);
        },
        $$slots: { default: true }
      });
      var node_14 = sibling(node_11, 2);
      BottomNavItem(node_14, {
        btnName: "Profile",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_4 = root_8$1();
          var node_15 = first_child(fragment_4);
          UserCircleSolid(node_15, {
            id: "profile",
            class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
          var node_16 = sibling(node_15, 2);
          Tooltip(node_16, {
            arrow: false,
            triggeredBy: "#profile",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_3 = text("Profile");
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_4);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_2 = template(`<!> <!> <!>`, 1);
var root_4$1 = template(`<!> <!>`, 1);
var root_6 = template(`<!> <!>`, 1);
var root_8 = template(`<!> <!>`, 1);
var root_10 = template(`<!> <!>`, 1);
var root_12 = template(`<!> <!>`, 1);
var root_3$2 = template(`<!> <!> <!> <!> <!>`, 1);
var root$2 = template(`<div class="relative flex flex-col p-6"><!> <!> <!></div>`);
function ButtonGroup($$anchor) {
  var div = root$2();
  var node = child(div);
  Skeleton(node, { class: "py-4" });
  var node_1 = sibling(node, 2);
  ImagePlaceholder(node_1, { class: "pb-28" });
  var node_2 = sibling(node_1, 2);
  {
    const header = ($$anchor2) => {
      BottomNavHeader($$anchor2, {
        children: ($$anchor3, $$slotProps) => {
          var fragment_1 = root_2();
          var node_3 = first_child(fragment_1);
          BottomNavHeaderItem(node_3, { itemName: "New" });
          var node_4 = sibling(node_3, 2);
          BottomNavHeaderItem(node_4, { itemName: "Popular", active: true });
          var node_5 = sibling(node_4, 2);
          BottomNavHeaderItem(node_5, { itemName: "Following" });
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
    };
    BottomNav(node_2, {
      position: "absolute",
      navType: "group",
      innerClass: "grid-cols-5",
      header,
      children: ($$anchor2, $$slotProps) => {
        var fragment_2 = root_3$2();
        var node_6 = first_child(fragment_2);
        BottomNavItem(node_6, {
          btnName: "Home",
          children: ($$anchor3, $$slotProps2) => {
            var fragment_3 = root_4$1();
            var node_7 = first_child(fragment_3);
            HomeSolid(node_7, {
              id: "home",
              class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
            });
            var node_8 = sibling(node_7, 2);
            Tooltip(node_8, {
              arrow: false,
              triggeredBy: "#home",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text$1 = text("Home");
                append($$anchor4, text$1);
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_3);
          },
          $$slots: { default: true }
        });
        var node_9 = sibling(node_6, 2);
        BottomNavItem(node_9, {
          btnName: "Bookmark",
          children: ($$anchor3, $$slotProps2) => {
            var fragment_4 = root_6();
            var node_10 = first_child(fragment_4);
            BookmarkSolid(node_10, {
              id: "bookmark",
              class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
            });
            var node_11 = sibling(node_10, 2);
            Tooltip(node_11, {
              arrow: false,
              triggeredBy: "#bookmark",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_1 = text("Bookmark");
                append($$anchor4, text_1);
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_4);
          },
          $$slots: { default: true }
        });
        var node_12 = sibling(node_9, 2);
        BottomNavItem(node_12, {
          btnName: "New post",
          children: ($$anchor3, $$slotProps2) => {
            var fragment_5 = root_8();
            var node_13 = first_child(fragment_5);
            PlusOutline(node_13, {
              id: "create",
              class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
            });
            var node_14 = sibling(node_13, 2);
            Tooltip(node_14, {
              arrow: false,
              triggeredBy: "#create",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_2 = text("New post");
                append($$anchor4, text_2);
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_5);
          },
          $$slots: { default: true }
        });
        var node_15 = sibling(node_12, 2);
        BottomNavItem(node_15, {
          btnName: "Search",
          children: ($$anchor3, $$slotProps2) => {
            var fragment_6 = root_10();
            var node_16 = first_child(fragment_6);
            SearchOutline(node_16, {
              id: "search",
              class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
            });
            var node_17 = sibling(node_16, 2);
            Tooltip(node_17, {
              arrow: false,
              triggeredBy: "#search",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_3 = text("Search");
                append($$anchor4, text_3);
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_6);
          },
          $$slots: { default: true }
        });
        var node_18 = sibling(node_15, 2);
        BottomNavItem(node_18, {
          btnName: "Settings",
          children: ($$anchor3, $$slotProps2) => {
            var fragment_7 = root_12();
            var node_19 = first_child(fragment_7);
            AdjustmentsVerticalOutline(node_19, {
              id: "settings",
              class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
            });
            var node_20 = sibling(node_19, 2);
            Tooltip(node_20, {
              arrow: false,
              triggeredBy: "#settings",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_4 = text("Settings");
                append($$anchor4, text_4);
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_7);
          },
          $$slots: { default: true }
        });
        append($$anchor2, fragment_2);
      },
      $$slots: { header: true, default: true }
    });
  }
  reset(div);
  append($$anchor, div);
}
var root_3$1 = template(`<a href="/" class="flex w-full items-center justify-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800"><!> <div><p class="text-sm text-gray-500 dark:text-gray-400"><!></p> <span class="text-xs text-primary-600 dark:text-primary-500"><!></span></div></a>`);
var root_4 = template(`<!> <!> <!>`, 1);
var root_1 = template(`<!> <!>`, 1);
var root$1 = template(`<div class="flex justify-center"><!></div>`);
function Card_1($$anchor) {
  let list = [
    {
      img: {
        src: "/images/profile-picture-1.webp",
        alt: "Neil Sims"
      },
      comment: `New message from <span class="font-medium text-gray-900 dark:text-white">Jese Leos</span>: "Hey, what's up? All set for the presentation?"`,
      message: "a few moments ago"
    },
    {
      img: {
        src: "/images/profile-picture-2.webp",
        alt: "Bonnie Green"
      },
      comment: 'Joseph McFall and <span class="font-medium text-gray-900 dark:text-white">5 others</span> started following you.',
      message: "10 minutes ago"
    },
    {
      img: {
        src: "/images/profile-picture-3.webp",
        alt: "Leslie Livingston"
      },
      comment: 'Bonnie Green and <span class="font-medium text-gray-900 dark:text-white">141 others</span> love your story. See it and view more stories.',
      message: "23 minutes ago"
    },
    {
      img: {
        src: "/images/profile-picture-4.webp",
        alt: "Robert Brown"
      },
      comment: 'Leslie Livingston mentioned you in a comment: <span class="font-medium text-primary-600 dark:text-primary-500 hover:underline">@bonnie.green</span> what do you say?',
      message: "23 minutes ago"
    },
    {
      img: {
        src: "/images/profile-picture-5.webp",
        alt: "Michael Gough"
      },
      comment: "Robert Brown</span> posted a new video: Glassmorphism - learn how to implement the new design trend.",
      message: "23 minutes ago"
    }
  ];
  var div = root$1();
  var node = child(div);
  Card(node, {
    class: "relative h-96 overflow-y-scroll rounded-lg border border-gray-100 bg-white dark:border-gray-600 dark:bg-gray-700",
    contentClass: "p-0 sm:p-0 md:p-0",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1();
      var node_1 = first_child(fragment);
      {
        const children = ($$anchor3) => {
          var fragment_1 = comment();
          var node_2 = first_child(fragment_1);
          each(node_2, 1, () => list, index, ($$anchor4, item) => {
            var a = root_3$1();
            var node_3 = child(a);
            Avatar(node_3, {
              get src() {
                return get(item).img.src;
              },
              get alt() {
                return get(item).img.alt;
              },
              class: "me-3 flex-shrink-0"
            });
            var div_1 = sibling(node_3, 2);
            var p = child(div_1);
            var node_4 = child(p);
            html(node_4, () => get(item).comment);
            reset(p);
            var span = sibling(p, 2);
            var node_5 = child(span);
            html(node_5, () => get(item).message);
            reset(span);
            reset(div_1);
            reset(a);
            append($$anchor4, a);
          });
          append($$anchor3, fragment_1);
        };
        Listgroup(node_1, {
          class: "border-0 dark:!bg-transparent",
          children,
          $$slots: { default: true }
        });
      }
      var node_6 = sibling(node_1, 2);
      BottomNav(node_6, {
        position: "sticky",
        navType: "card",
        innerClass: "grid-cols-3 pt-2 pb-4",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_4();
          var node_7 = first_child(fragment_2);
          BottomNavItem(node_7, {
            btnName: "Latest",
            children: ($$anchor4, $$slotProps3) => {
              ClockSolid($$anchor4, {
                class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
              });
            },
            $$slots: { default: true }
          });
          var node_8 = sibling(node_7, 2);
          BottomNavItem(node_8, {
            btnName: "Following",
            children: ($$anchor4, $$slotProps3) => {
              UsersGroupOutline($$anchor4, {
                class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
              });
            },
            $$slots: { default: true }
          });
          var node_9 = sibling(node_8, 2);
          BottomNavItem(node_9, {
            btnName: "Favorites",
            children: ($$anchor4, $$slotProps3) => {
              StarSolid($$anchor4, {
                class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
              });
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_3 = template(`<div class="mb-6 flex flex-wrap p-6"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "bottom-navigation";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/ApplicationBar.svelte": __vite_glob_0_0,
    "./examples/Border.svelte": __vite_glob_0_1,
    "./examples/ButtonGroup.svelte": __vite_glob_0_2,
    "./examples/Card.svelte": __vite_glob_0_3,
    "./examples/Default.svelte": __vite_glob_0_4,
    "./examples/IconColor.svelte": __vite_glob_0_5,
    "./examples/LinkAndActiveClass.svelte": __vite_glob_0_6,
    "./examples/OverwritingActiveClass.svelte": __vite_glob_0_7,
    "./examples/Pagination.svelte": __vite_glob_0_8
  });
  const exampleArr = [
    {
      name: "Default",
      component: Default
    },
    {
      name: "Link and active class",
      component: LinkAndActiveClass
    },
    {
      name: "Overwriting active class",
      component: OverwritingActiveClass
    },
    {
      name: "Icon color",
      component: IconColor
    },
    {
      name: "Border",
      component: Border
    },
    {
      name: "Application bar",
      component: ApplicationBar
    },
    {
      name: "Pagination",
      component: Pagination
    },
    {
      name: "Button group",
      component: ButtonGroup
    },
    {
      name: "Card",
      component: Card_1
    }
  ];
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  let codeBlock = uiHelpers();
  let exampleExpand = state(false);
  let showExpandButton = derived(() => isSvelteOverflow(get(svelteCode), exampleModules));
  const handleExpandClick = () => {
    set(exampleExpand, !get(exampleExpand));
  };
  user_effect(() => {
    set(exampleExpand, proxy(codeBlock.isOpen));
  });
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Bottom navigation");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
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
    CodeWrapper(node_1, {
      innerClass: "p-0",
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_2 = root_3();
        var div = first_child(fragment_2);
        var node_2 = child(div);
        Label(node_2, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_1 = text("Example");
            append($$anchor3, text_1);
          },
          $$slots: { default: true }
        });
        var node_3 = sibling(node_2, 2);
        each(node_3, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-48 my-1",
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
              var text_2 = text();
              template_effect(() => set_text(text_2, get(style).name));
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
        });
        reset(div);
        var node_4 = sibling(div, 2);
        component(node_4, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_5 = sibling(node_1, 2);
  H2(node_5, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_3 = text("Component data");
      append($$anchor2, text_3);
    },
    $$slots: { default: true }
  });
  var node_6 = sibling(node_5, 2);
  CompoAttributesViewer(node_6, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
