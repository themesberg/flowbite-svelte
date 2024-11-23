import { c as comment, a as append, t as template, n as ns_template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, u as user_effect, f as first_child, b as get, t as template_effect, a as pop, a6 as state, c as child, r as reset, s as sibling, a7 as set, d as derived, g as getContext, n as next } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { p as prop, i as if_block, d as bind_this, r as rest_props, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { aA as fade, _ as transition, b as set_class, a as set_attributes, bg as popover, ab as linear, s as set_attribute, t as twMerge, aC as fly, aD as blur, aS as sineIn, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { a as onDestroy } from "../chunks/index-client.B1NKc4fi.js";
import { L as Label, C as CompoAttributesViewer, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { A as Avatar } from "../chunks/Avatar.BvpffrdL.js";
import { T as ThumbsUpSolid } from "../chunks/ThumbsUpSolid.CIE3OZly.js";
import { C as ChevronRightOutline } from "../chunks/ChevronRightOutline.D-4U2W9t.js";
import { Q as QuestionCircleSolid } from "../chunks/QuestionCircleSolid.B_6ngNl9.js";
import { C as Checkbox } from "../chunks/Checkbox.CJJZSeRG.js";
import { I as Input } from "../chunks/index.CCICtSX3.js";
import { C as CheckOutline } from "../chunks/CheckOutline.BnZaFmJc.js";
import { C as CloseOutline } from "../chunks/CloseOutline.CJZwA6ye.js";
var root_2$8 = template(`<div><h3> </h3></div>`);
var root_5$2 = template(`<div></div>`);
var root_1$7 = template(`<div><!> <!> <!></div>`);
var root_8 = template(`<div><h3> </h3></div>`);
var root_11 = template(`<div></div>`);
var root_7$1 = template(`<div><!> <!> <!></div>`);
function Popover($$anchor, $$props) {
  push($$props, true);
  let color = prop($$props, "color", 3, "default"), arrow = prop($$props, "arrow", 3, true), offset = prop($$props, "offset", 3, 0), position = prop($$props, "position", 3, "top"), transition$1 = prop($$props, "transition", 3, fade), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "titleSlot",
    "color",
    "arrow",
    "offset",
    "triggeredBy",
    "position",
    "class",
    "reference",
    "transition",
    "params"
  ]);
  let $$d = derived(() => popover({
    color: color(),
    arrow: arrow(),
    position: position()
  })), base = derived(() => get($$d).base), title = derived(() => get($$d).title), h3 = derived(() => get($$d).h3), arrowBase = derived(() => get($$d).arrowBase);
  const defaultParams = { duration: 100, easing: linear };
  let tooltipElement = state(null);
  let triggerElement = null;
  let referenceElement = null;
  let arrowEl = state(null);
  let visible = state(false);
  let positioned = state(false);
  let hideTimeoutId;
  const showTooltip = () => {
    set(visible, true);
    setTimeout(
      () => {
        positionTooltip();
        set(positioned, true);
      },
      0
    );
  };
  const hideTooltip = () => {
    set(visible, false);
    set(positioned, false);
  };
  const onPopoverEnter = () => {
    if (hideTimeoutId !== void 0) {
      clearTimeout(hideTimeoutId);
      hideTimeoutId = void 0;
    }
  };
  const onPopoverLeave = () => {
    hideTooltip();
  };
  const onTriggerLeave = () => {
    hideTimeoutId = setTimeout(hideTooltip, 100);
  };
  const positionTooltip = () => {
    if (!get(tooltipElement) || !triggerElement) return;
    const triggerRect = triggerElement.getBoundingClientRect();
    const referenceRect = $$props.reference && referenceElement ? referenceElement.getBoundingClientRect() : triggerRect;
    const tooltipRect = get(tooltipElement).getBoundingClientRect();
    const arrowRect = arrow() && get(arrowEl) ? get(arrowEl).getBoundingClientRect() : null;
    const scrollX = window.scrollX || document.documentElement.scrollLeft;
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    let top, left, arrowTop, arrowLeft;
    switch (position()) {
      case "top":
        top = referenceRect.top + scrollY - tooltipRect.height - 10 - offset();
        left = referenceRect.left + scrollX + referenceRect.width / 2 - tooltipRect.width / 2;
        if (arrowRect && offset() === 0) {
          arrowTop = tooltipRect.height - 5;
          arrowLeft = tooltipRect.width / 2 - arrowRect.width / 2;
        }
        break;
      case "top-start":
        top = referenceRect.top + scrollY - tooltipRect.height - 10 - offset();
        left = referenceRect.left + scrollX;
        if (arrowRect && offset() === 0) {
          arrowTop = tooltipRect.height - 5;
          arrowLeft = referenceRect.width / 2 - arrowRect.width / 2;
        }
        break;
      case "top-end":
        top = referenceRect.top + scrollY - tooltipRect.height - 10 - offset();
        left = referenceRect.right + scrollX - tooltipRect.width;
        if (arrowRect && offset() === 0) {
          arrowTop = tooltipRect.height - 5;
          arrowLeft = tooltipRect.width - referenceRect.width / 2 - arrowRect.width / 2;
        }
        break;
      case "bottom":
        top = referenceRect.bottom + scrollY + 10 + offset();
        left = referenceRect.left + scrollX + referenceRect.width / 2 - tooltipRect.width / 2;
        if (arrowRect && offset() === 0) {
          arrowTop = -arrowRect.height + 9;
          arrowLeft = tooltipRect.width / 2 - arrowRect.width / 2;
        }
        break;
      case "bottom-start":
        top = referenceRect.bottom + scrollY + 10 + offset();
        left = referenceRect.left + scrollX;
        if (arrowRect && offset() === 0) {
          arrowTop = -arrowRect.height + 9;
          arrowLeft = referenceRect.width / 2 - arrowRect.width / 2;
        }
        break;
      case "bottom-end":
        top = referenceRect.bottom + scrollY + 10 + offset();
        left = referenceRect.right + scrollX - tooltipRect.width;
        if (arrowRect && offset() === 0) {
          arrowTop = -arrowRect.height + 9;
          arrowLeft = tooltipRect.width - referenceRect.width / 2 - arrowRect.width / 2;
        }
        break;
      case "left":
        top = referenceRect.top + scrollY + referenceRect.height / 2 - tooltipRect.height / 2;
        left = referenceRect.left + scrollX - tooltipRect.width - 10 - offset();
        if (arrowRect && offset() === 0) {
          arrowTop = tooltipRect.height / 2 - arrowRect.height / 2;
          arrowLeft = tooltipRect.width - 5;
        }
        break;
      case "left-start":
        top = referenceRect.top + scrollY;
        left = referenceRect.left + scrollX - tooltipRect.width - 10 - offset();
        if (arrowRect && offset() === 0) {
          arrowTop = arrowRect.height;
          arrowLeft = tooltipRect.width - 5;
        }
        break;
      case "left-end":
        top = referenceRect.bottom + scrollY - tooltipRect.height;
        left = referenceRect.left + scrollX - tooltipRect.width - 10 - offset();
        if (arrowRect && offset() === 0) {
          arrowTop = tooltipRect.height - arrowRect.height * 2;
          arrowLeft = tooltipRect.width - 5;
        }
        break;
      case "right":
        top = referenceRect.top + scrollY + referenceRect.height / 2 - tooltipRect.height / 2;
        left = referenceRect.right + scrollX + 10 + offset();
        if (arrowRect && offset() === 0) {
          arrowTop = tooltipRect.height / 2 - arrowRect.height / 2;
          arrowLeft = -arrowRect.width / 2 + 2;
        }
        break;
      case "right-start":
        top = referenceRect.top + scrollY;
        left = referenceRect.right + scrollX + 10 + offset();
        if (arrowRect && offset() === 0) {
          arrowTop = arrowRect.height;
          arrowLeft = -arrowRect.width / 2 + 2;
        }
        break;
      case "right-end":
        top = referenceRect.bottom + scrollY - tooltipRect.height;
        left = referenceRect.right + scrollX + 10 + offset();
        if (arrowRect && offset() === 0) {
          arrowTop = tooltipRect.height - arrowRect.height * 2;
          arrowLeft = -arrowRect.width / 2 + 2;
        }
        break;
    }
    get(tooltipElement).style.top = `${top}px`;
    get(tooltipElement).style.left = `${left}px`;
    if (get(arrowEl) && arrowRect) {
      get(arrowEl).style.top = `${arrowTop}px`;
      get(arrowEl).style.left = `${arrowLeft}px`;
    }
  };
  user_effect(() => {
    triggerElement = document.querySelector($$props.triggeredBy);
    referenceElement = $$props.reference ? document.querySelector($$props.reference) : triggerElement;
    if (triggerElement) {
      triggerElement.addEventListener("mouseenter", showTooltip);
      triggerElement.addEventListener("mouseleave", onTriggerLeave);
    }
    const handlePositionUpdate = () => {
      if (get(visible)) {
        positionTooltip();
      }
    };
    window.addEventListener("resize", handlePositionUpdate);
    window.addEventListener("scroll", handlePositionUpdate, true);
    onDestroy(() => {
      if (triggerElement) {
        triggerElement.removeEventListener("mouseenter", showTooltip);
        triggerElement.removeEventListener("mouseleave", onTriggerLeave);
      }
      window.removeEventListener("resize", handlePositionUpdate);
      window.removeEventListener("scroll", handlePositionUpdate, true);
      if (hideTimeoutId !== void 0) {
        clearTimeout(hideTimeoutId);
      }
    });
  });
  var fragment = comment();
  var node = first_child(fragment);
  if_block(
    node,
    () => transition$1() && get(visible),
    ($$anchor2) => {
      var div = root_1$7();
      let attributes;
      var node_1 = child(div);
      if_block(
        node_1,
        () => typeof $$props.titleSlot === "string",
        ($$anchor3) => {
          var div_1 = root_2$8();
          const class_derived = derived(() => get(title)());
          var h3_1 = child(div_1);
          const class_derived_1 = derived(() => get(h3)());
          var text2 = child(h3_1, true);
          reset(h3_1);
          reset(div_1);
          template_effect(() => {
            set_class(div_1, get(class_derived));
            set_class(h3_1, get(class_derived_1));
            set_text(text2, $$props.titleSlot);
          });
          append($$anchor3, div_1);
        },
        ($$anchor3) => {
          var fragment_1 = comment();
          var node_2 = first_child(fragment_1);
          if_block(
            node_2,
            () => $$props.titleSlot,
            ($$anchor4) => {
              var fragment_2 = comment();
              var node_3 = first_child(fragment_2);
              snippet(node_3, () => $$props.titleSlot);
              append($$anchor4, fragment_2);
            },
            null,
            true
          );
          append($$anchor3, fragment_1);
        }
      );
      var node_4 = sibling(node_1, 2);
      snippet(node_4, () => $$props.children);
      var node_5 = sibling(node_4, 2);
      if_block(node_5, arrow, ($$anchor3) => {
        var div_2 = root_5$2();
        const class_derived_2 = derived(() => get(arrowBase)({ arrow: arrow(), position: position() }));
        bind_this(div_2, ($$value) => set(arrowEl, $$value), () => get(arrowEl));
        template_effect(() => set_class(div_2, get(class_derived_2)));
        append($$anchor3, div_2);
      });
      reset(div);
      bind_this(div, ($$value) => set(tooltipElement, $$value), () => get(tooltipElement));
      template_effect(() => attributes = set_attributes(div, attributes, {
        role: "tooltip",
        ...restProps,
        class: `${get(base)({ className: $$props.class })} ${get(positioned) ? "visible opacity-100" : "invisible opacity-0"} transition-opacity duration-200`,
        onmouseenter: onPopoverEnter,
        onmouseleave: onPopoverLeave
      }));
      transition(3, div, transition$1, () => $$props.params || defaultParams);
      append($$anchor2, div);
    },
    ($$anchor2) => {
      var fragment_3 = comment();
      var node_6 = first_child(fragment_3);
      if_block(
        node_6,
        () => get(visible),
        ($$anchor3) => {
          var div_3 = root_7$1();
          let attributes_1;
          var node_7 = child(div_3);
          if_block(
            node_7,
            () => typeof $$props.titleSlot === "string",
            ($$anchor4) => {
              var div_4 = root_8();
              const class_derived_3 = derived(() => get(title)());
              var h3_2 = child(div_4);
              const class_derived_4 = derived(() => get(h3)());
              var text_1 = child(h3_2, true);
              reset(h3_2);
              reset(div_4);
              template_effect(() => {
                set_class(div_4, get(class_derived_3));
                set_class(h3_2, get(class_derived_4));
                set_text(text_1, $$props.titleSlot);
              });
              append($$anchor4, div_4);
            },
            ($$anchor4) => {
              var fragment_4 = comment();
              var node_8 = first_child(fragment_4);
              if_block(
                node_8,
                () => $$props.titleSlot,
                ($$anchor5) => {
                  var fragment_5 = comment();
                  var node_9 = first_child(fragment_5);
                  snippet(node_9, () => $$props.titleSlot);
                  append($$anchor5, fragment_5);
                },
                null,
                true
              );
              append($$anchor4, fragment_4);
            }
          );
          var node_10 = sibling(node_7, 2);
          snippet(node_10, () => $$props.children);
          var node_11 = sibling(node_10, 2);
          if_block(node_11, arrow, ($$anchor4) => {
            var div_5 = root_11();
            const class_derived_5 = derived(() => get(arrowBase)({ arrow: arrow(), position: position() }));
            bind_this(div_5, ($$value) => set(arrowEl, $$value), () => get(arrowEl));
            template_effect(() => set_class(div_5, get(class_derived_5)));
            append($$anchor4, div_5);
          });
          reset(div_3);
          bind_this(div_3, ($$value) => set(tooltipElement, $$value), () => get(tooltipElement));
          template_effect(() => attributes_1 = set_attributes(div_3, attributes_1, {
            role: "tooltip",
            ...restProps,
            class: `${get(base)({ className: $$props.class })} ${get(positioned) ? "visible opacity-100" : "invisible opacity-0"} transition-opacity duration-200`,
            onmouseenter: onPopoverEnter,
            onmouseleave: onPopoverLeave
          }));
          append($$anchor3, div_3);
        },
        null,
        true
      );
      append($$anchor2, fragment_3);
    }
  );
  append($$anchor, fragment);
  pop();
}
var root_1$6 = ns_template(`<title> </title>`);
var root_2$7 = ns_template(`<desc> </desc>`);
var root$c = ns_template(`<svg><!><!><path d="M12 7.205c4.418 0 8-1.165 8-2.602C20 3.165 16.418 2 12 2S4 3.165 4 4.603c0 1.437 3.582 2.602 8 2.602ZM12 22c4.963 0 8-1.686 8-2.603v-4.404c-.052.032-.112.06-.165.09a7.75 7.75 0 0 1-.745.387c-.193.088-.394.173-.6.253-.063.024-.124.05-.189.073a18.934 18.934 0 0 1-6.3.998c-2.135.027-4.26-.31-6.3-.998-.065-.024-.126-.05-.189-.073a10.143 10.143 0 0 1-.852-.373 7.75 7.75 0 0 1-.493-.267c-.053-.03-.113-.058-.165-.09v4.404C4 20.315 7.037 22 12 22Zm7.09-13.928a9.91 9.91 0 0 1-.6.253c-.063.025-.124.05-.189.074a18.935 18.935 0 0 1-6.3.998c-2.135.027-4.26-.31-6.3-.998-.065-.024-.126-.05-.189-.074a10.163 10.163 0 0 1-.852-.372 7.816 7.816 0 0 1-.493-.268c-.055-.03-.115-.058-.167-.09V12c0 .917 3.037 2.603 8 2.603s8-1.686 8-2.603V7.596c-.052.031-.112.059-.165.09a7.816 7.816 0 0 1-.745.386Z"></path></svg>`);
function DatabaseSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "database solid"), restProps = rest_props($$props, [
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
  var svg = root$c();
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
    var desc_1 = root_2$7();
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
var root_1$5 = ns_template(`<title> </title>`);
var root_2$6 = ns_template(`<desc> </desc>`);
var root$b = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M6 12h.01m6 0h.01m5.99 0h.01"></path></svg>`);
function DotsHorizontalOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "dots horizontal outline"), restProps = rest_props($$props, [
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
  ));
  append($$anchor, svg);
  pop();
}
var root_1$4 = ns_template(`<title> </title>`);
var root_2$5 = ns_template(`<desc> </desc>`);
var root$a = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" d="M4.37 7.657c2.063.528 2.396 2.806 3.202 3.87 1.07 1.413 2.075 1.228 3.192 2.644 1.805 2.289 1.312 5.705 1.312 6.705M20 15h-1a4 4 0 0 0-4 4v1M8.587 3.992c0 .822.112 1.886 1.515 2.58 1.402.693 2.918.351 2.918 2.334 0 .276 0 2.008 1.972 2.008 2.026.031 2.026-1.678 2.026-2.008 0-.65.527-.9 1.177-.9H20M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>`);
function GlobeOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "globe outline"), restProps = rest_props($$props, [
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
  var svg = root$a();
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
var root_1$3 = ns_template(`<title> </title>`);
var root_2$4 = ns_template(`<desc> </desc>`);
var root$9 = ns_template(`<svg><!><!><path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"></path></svg>`);
function HeartSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "heart solid"), restProps = rest_props($$props, [
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
  var svg = root$9();
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
const __vite_glob_0_0 = '<script>\n  import { Popover, Button, Avatar } from "$lib";\n  import { GlobeOutline, HeartSolid, ThumbsUpSolid, DotsHorizontalOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="flex h-80 items-end justify-center">\n  <Button id="demo" class="-mb-4">Company profile</Button>\n  <Popover triggeredBy="#demo" class="w-80 text-sm">\n    <div class="flex p-3">\n      <div class="me-3 shrink-0">\n        <a href="/" aria-label="popover-example" class="block rounded-lg bg-gray-100 p-2 dark:bg-gray-700">\n          <img class="h-8 w-8 rounded-full" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite logo" />\n        </a>\n      </div>\n      <div>\n        <p class="mb-1 text-base font-semibold leading-none text-gray-900 dark:text-white">\n          <a href="/" class="hover:underline">Flowbite</a>\n        </p>\n        <p class="mb-3 text-sm font-normal">Tech company</p>\n        <p class="mb-4 text-sm font-light">Open-source library of Tailwind CSS components and Figma design system.</p>\n        <ul class="text-sm font-light">\n          <li class="mb-2 flex items-center">\n            <GlobeOutline class="me-2 h-3.5 w-3.5" />\n            <a href="/" class="text-primary-600 hover:underline dark:text-primary-500">https://flowbite.com/</a>\n          </li>\n          <li class="mb-2 flex items-start">\n            <HeartSolid class="me-2 h-5 w-5" />\n            <span>4,567,346 people like this including 5 of your friends</span>\n          </li>\n        </ul>\n        <div class="mb-3 ms-4 flex">\n          <Avatar src="/images/profile-picture-1.webp" stacked />\n          <Avatar src="/images/profile-picture-2.webp" stacked />\n          <Avatar src="/images/profile-picture-3.webp" stacked />\n          <Avatar stacked href="/" class="bg-gray-700 text-white hover:bg-gray-600 dark:bg-gray-700">+3</Avatar>\n        </div>\n        <div class="flex">\n          <Button color="alternative" class="me-2 w-full">\n            <ThumbsUpSolid class="me-2" />\n            Like page\n          </Button>\n          <Button color="alternative">\n            <DotsHorizontalOutline class="h-3.5 w-3.5" />\n          </Button>\n        </div>\n      </div>\n    </div>\n  </Popover>\n</div>\n';
const __vite_glob_0_1 = '<script>\n  import { Popover } from "$lib";\n  import { QuestionCircleSolid, ChevronRightOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="h-80">\n  <div class="flex items-center text-sm font-light text-gray-500 dark:text-gray-400">\n    This is just some informational text\n    <button id="b3">\n      <QuestionCircleSolid class="ms-1.5 h-5 w-5" />\n      <span class="sr-only">Show information</span>\n    </button>\n  </div>\n  <Popover arrow={false} triggeredBy="#b3" class="w-72 bg-white p-3 text-sm font-light text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400" position="bottom-start">\n    <div class="space-y-2 p-3">\n      <h3 class="font-semibold text-gray-900 dark:text-white">Activity growth - Incremental</h3>\n      Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend.\n      <h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>\n      For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n.\n      <a href="/" class="flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-600">\n        Read more <ChevronRightOutline class="ms-1.5 h-4 w-4 text-primary-600 dark:text-primary-500" />\n      </a>\n    </div>\n  </Popover>\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Button, Popover } from "$lib";\n<\/script>\n\n<div class="m-4 flex justify-center">\n  <div id="ext-ref" class=" m-8 w-40 rounded-lg border border-gray-200 p-2 dark:border-gray-600">External reference</div>\n</div>\n<div class="space-x-4 rtl:space-x-reverse">\n  <Button id="ref-left">Left</Button>\n  <Button id="ref-top">Top</Button>\n  <Button id="ref-right">Right</Button>\n</div>\n<Popover reference="#ext-ref" color="emerald" triggeredBy="#ref-left" position="left" class="w-40 p-4 text-sm font-light">Popover content.</Popover>\n<Popover reference="#ext-ref" color="cyan" triggeredBy="#ref-top" position="top" class="w-40 p-4 text-sm font-light">Popover content.</Popover>\n<Popover reference="#ext-ref" color="pink" triggeredBy="#ref-right" position="right" class="w-40 p-4 text-sm font-light">Popover content.</Popover>\n';
const __vite_glob_0_3 = '<script>\n  import { Popover } from "$lib";\n  import { ChevronRightOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="flex h-80 items-end">\n  <p class="font-light text-gray-500 dark:text-gray-400">\n    Due to its central geographic location in Southern Europe, <a href="/" class="text-primary-600 underline hover:no-underline dark:text-primary-500" id="popover-image">Italy</a>\n    has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed throughout what is now modern-day Italy, the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy\n  </p>\n  <Popover triggeredBy="#popover-image" class="w-96 text-sm font-light">\n    <div class="grid grid-cols-5">\n      <div class="col-span-3 p-3">\n        <div class="space-y-2">\n          <h3 class="font-semibold text-gray-900 dark:text-white">\n            About Italy\n            <p class="text-gray-500 dark:text-gray-500">Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital and largest city.</p>\n            <a href="/" class="flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-600">\n              Read more <ChevronRightOutline class="ms-1.5 h-2 w-2 text-primary-600 dark:text-primary-500" />\n            </a>\n          </h3>\n        </div>\n      </div>\n      <img src="/images/italy.png" class="col-span-2 h-full rounded-e-lg" alt="Italy map" />\n    </div>\n  </Popover>\n</div>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Popover, Label, Input, Checkbox, Button } from "$lib";\n  import { CheckOutline, CloseOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<form class="mb-8">\n  <div class="mb-6">\n    <Label for="email" class="mb-2">Your email</Label>\n    <Input type="email" id="email" placeholder="name@flowbite.com" required />\n  </div>\n  <div class="mb-6">\n    <Label for="password" class="mb-2">Your password</Label>\n    <Input type="password" id="password" required />\n  </div>\n  <Checkbox class="mb-6">Remember me</Checkbox>\n  <Button type="submit">Submit</Button>\n</form>\n<Popover arrow={false} class="p-4 text-sm" triggeredBy="#password" position="bottom">\n  <h3 class="font-semibold text-gray-900 dark:text-white">Must have at least 6 characters</h3>\n  <div class="grid grid-cols-4 gap-2">\n    <div class="h-1 bg-orange-300 dark:bg-orange-400"></div>\n    <div class="h-1 bg-orange-300 dark:bg-orange-400"></div>\n    <div class="h-1 bg-gray-200 dark:bg-gray-600"></div>\n    <div class="h-1 bg-gray-200 dark:bg-gray-600"></div>\n  </div>\n  <p class="py-2">It’s better to have:</p>\n  <ul>\n    <li class="mb-1 flex items-center">\n      <CheckOutline class="me-2 h-4 w-4 text-green-400 dark:text-green-500" />\n      Upper &amp; lower case letters\n    </li>\n    <li class="mb-1 flex items-center">\n      <CheckOutline class="me-2 h-4 w-4 text-green-400 dark:text-green-500" />\n      A symbol (#$&amp;)\n    </li>\n    <li class="flex items-center">\n      <CloseOutline class="me-2 h-4 w-4 text-gray-300 dark:text-gray-400" />A longer password (min. 12 chars.)\n    </li>\n  </ul>\n</Popover>\n';
const __vite_glob_0_5 = '<script>\n  import { Popover, Button } from "$lib";\n  import { DatabaseSolid, ChevronRightOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="flex h-40 items-end justify-center">\n  <Button id="progress">\n    <DatabaseSolid class="me-2 h-5 w-5 text-white dark:text-white" /> Storage status\n  </Button>\n  <Popover triggeredBy="#progress" class="w-64 p-3 text-sm font-light">\n    <div class="space-y-2">\n      <h3 class="font-semibold text-gray-900 dark:text-white">Available storage</h3>\n      <p class="text-gray-500 dark:text-gray-400">\n        This server has <span class="font-semibold text-gray-900 dark:text-white">30</span>\n        of\n        <span class="font-semibold text-gray-900 dark:text-white">150 GB</span>\n        of block storage remaining.\n      </p>\n      <div class="mb-4 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">\n        <div class="h-2.5 rounded-full bg-red-600" style="width: 85%"></div>\n      </div>\n      <a href="/" class="flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-600">\n        Upgrade now <ChevronRightOutline class="ms-1.5 h-4 w-4 text-primary-600 dark:text-primary-500" />\n      </a>\n    </div>\n  </Popover>\n</div>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { Popover, Button } from "$lib";\n<\/script>\n';
const __vite_glob_0_7 = `<script lang="ts">
  import { Button, Popover } from "$lib";
<\/script>

<div class="flex h-40 items-end justify-center">
  <Button id="titleSlot">Default popover</Button>
  <Popover class="w-64 text-sm font-light" triggeredBy="#titleSlot">
    {#snippet titleSlot()}
      <div class="rounded-t-md bg-sky-200 p-2 text-lg font-bold text-sky-600">titleSlot snippet</div>
    {/snippet}
    <p class="px-3 py-2">And here's some amazing content. It's very engaging. Right?</p>
  </Popover>
</div>
`;
const __vite_glob_0_8 = '<script lang="ts">\n  import { Button, Popover, Avatar } from "$lib";\n<\/script>\n\n<div class="flex h-64 items-end justify-center">\n  <Button id="user_profile" class="-mb-2">User profile</Button>\n  <Popover triggeredBy="#user_profile" class="w-64 bg-white text-sm font-light text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">\n    <div class="p-6">\n      <div class="mb-2 flex items-center justify-between">\n        <Avatar href="/" src="/images/profile-picture-1.webp" alt="Jese Leos" />\n        <Button size="xs">Follow</Button>\n      </div>\n      <div class="text-base font-semibold leading-none text-gray-900 dark:text-white">\n        <a href="/">Jese Leos</a>\n      </div>\n      <div class="mb-3 text-sm font-normal">\n        <a href="/" class="hover:underline">@jeseleos</a>\n      </div>\n      <div class="mb-4 text-sm font-light">\n        Open-source contributor. Building <a href="/" class="text-primary-600 hover:underline dark:text-primary-500">flowbite.com</a>\n        .\n      </div>\n      <ul class="flex text-sm font-light">\n        <li class="me-2">\n          <a href="/" class="hover:underline">\n            <span class="font-semibold text-gray-900 dark:text-white">799</span>\n            <span>Following</span>\n          </a>\n        </li>\n        <li>\n          <a href="/" class="hover:underline">\n            <span class="font-semibold text-gray-900 dark:text-white">3,758</span>\n            <span>Followers</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </Popover>\n</div>\n';
var root_2$3 = template(`<div class="rounded-t-md bg-sky-200 p-2 text-lg font-bold text-sky-600">titleSlot snippet</div>`);
var root_3 = template(`<p class="px-3 py-2">And here's some amazing content. It's very engaging. Right?</p>`);
var root$8 = template(`<div class="flex h-40 items-end justify-center"><!> <!></div>`);
function TitleSlot($$anchor) {
  var div = root$8();
  var node = child(div);
  Button(node, {
    id: "titleSlot",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Default popover");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  {
    const titleSlot = ($$anchor2) => {
      var div_1 = root_2$3();
      append($$anchor2, div_1);
    };
    Popover(node_1, {
      class: "w-64 text-sm font-light",
      triggeredBy: "#titleSlot",
      titleSlot,
      children: ($$anchor2, $$slotProps) => {
        var p = root_3();
        append($$anchor2, p);
      },
      $$slots: { titleSlot: true, default: true }
    });
  }
  reset(div);
  append($$anchor, div);
}
var root_2$2 = template(`<div class="p-6"><div class="mb-2 flex items-center justify-between"><!> <!></div> <div class="text-base font-semibold leading-none text-gray-900 dark:text-white"><a href="/">Jese Leos</a></div> <div class="mb-3 text-sm font-normal"><a href="/" class="hover:underline">@jeseleos</a></div> <div class="mb-4 text-sm font-light">Open-source contributor. Building <a href="/" class="text-primary-600 hover:underline dark:text-primary-500">flowbite.com</a> .</div> <ul class="flex text-sm font-light"><li class="me-2"><a href="/" class="hover:underline"><span class="font-semibold text-gray-900 dark:text-white">799</span> <span>Following</span></a></li> <li><a href="/" class="hover:underline"><span class="font-semibold text-gray-900 dark:text-white">3,758</span> <span>Followers</span></a></li></ul></div>`);
var root$7 = template(`<div class="flex h-64 items-end justify-center"><!> <!></div>`);
function UserProfile($$anchor) {
  var div = root$7();
  var node = child(div);
  Button(node, {
    id: "user_profile",
    class: "-mb-2",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("User profile");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Popover(node_1, {
    triggeredBy: "#user_profile",
    class: "w-64 bg-white text-sm font-light text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400",
    children: ($$anchor2, $$slotProps) => {
      var div_1 = root_2$2();
      var div_2 = child(div_1);
      var node_2 = child(div_2);
      Avatar(node_2, {
        href: "/",
        src: "/images/profile-picture-1.webp",
        alt: "Jese Leos"
      });
      var node_3 = sibling(node_2, 2);
      Button(node_3, {
        size: "xs",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_1 = text("Follow");
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
      reset(div_2);
      next(8);
      reset(div_1);
      append($$anchor2, div_1);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_4 = template(`<!> Like page`, 1);
var root_2$1 = template(`<div class="flex p-3"><div class="me-3 shrink-0"><a href="/" aria-label="popover-example" class="block rounded-lg bg-gray-100 p-2 dark:bg-gray-700"><img class="h-8 w-8 rounded-full" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite logo"></a></div> <div><p class="mb-1 text-base font-semibold leading-none text-gray-900 dark:text-white"><a href="/" class="hover:underline">Flowbite</a></p> <p class="mb-3 text-sm font-normal">Tech company</p> <p class="mb-4 text-sm font-light">Open-source library of Tailwind CSS components and Figma design system.</p> <ul class="text-sm font-light"><li class="mb-2 flex items-center"><!> <a href="/" class="text-primary-600 hover:underline dark:text-primary-500">https://flowbite.com/</a></li> <li class="mb-2 flex items-start"><!> <span>4,567,346 people like this including 5 of your friends</span></li></ul> <div class="mb-3 ms-4 flex"><!> <!> <!> <!></div> <div class="flex"><!> <!></div></div></div>`);
var root$6 = template(`<div class="flex h-80 items-end justify-center"><!> <!></div>`);
function CompanyProfile($$anchor) {
  var div = root$6();
  var node = child(div);
  Button(node, {
    id: "demo",
    class: "-mb-4",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Company profile");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Popover(node_1, {
    triggeredBy: "#demo",
    class: "w-80 text-sm",
    children: ($$anchor2, $$slotProps) => {
      var div_1 = root_2$1();
      var div_2 = sibling(child(div_1), 2);
      var ul = sibling(child(div_2), 6);
      var li = child(ul);
      var node_2 = child(li);
      GlobeOutline(node_2, { class: "me-2 h-3.5 w-3.5" });
      next(2);
      reset(li);
      var li_1 = sibling(li, 2);
      var node_3 = child(li_1);
      HeartSolid(node_3, { class: "me-2 h-5 w-5" });
      next(2);
      reset(li_1);
      reset(ul);
      var div_3 = sibling(ul, 2);
      var node_4 = child(div_3);
      Avatar(node_4, {
        src: "/images/profile-picture-1.webp",
        stacked: true
      });
      var node_5 = sibling(node_4, 2);
      Avatar(node_5, {
        src: "/images/profile-picture-2.webp",
        stacked: true
      });
      var node_6 = sibling(node_5, 2);
      Avatar(node_6, {
        src: "/images/profile-picture-3.webp",
        stacked: true
      });
      var node_7 = sibling(node_6, 2);
      Avatar(node_7, {
        stacked: true,
        href: "/",
        class: "bg-gray-700 text-white hover:bg-gray-600 dark:bg-gray-700",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_1 = text("+3");
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
      reset(div_3);
      var div_4 = sibling(div_3, 2);
      var node_8 = child(div_4);
      Button(node_8, {
        color: "alternative",
        class: "me-2 w-full",
        children: ($$anchor3, $$slotProps2) => {
          var fragment = root_4();
          var node_9 = first_child(fragment);
          ThumbsUpSolid(node_9, { class: "me-2" });
          next();
          append($$anchor3, fragment);
        },
        $$slots: { default: true }
      });
      var node_10 = sibling(node_8, 2);
      Button(node_10, {
        color: "alternative",
        children: ($$anchor3, $$slotProps2) => {
          DotsHorizontalOutline($$anchor3, { class: "h-3.5 w-3.5" });
        },
        $$slots: { default: true }
      });
      reset(div_4);
      reset(div_2);
      reset(div_1);
      append($$anchor2, div_1);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_1$2 = template(`<div class="grid grid-cols-5"><div class="col-span-3 p-3"><div class="space-y-2"><h3 class="font-semibold text-gray-900 dark:text-white">About Italy <p class="text-gray-500 dark:text-gray-500">Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital and largest city.</p> <a href="/" class="flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-600">Read more <!></a></h3></div></div> <img src="/images/italy.png" class="col-span-2 h-full rounded-e-lg" alt="Italy map"></div>`);
var root$5 = template(`<div class="flex h-80 items-end"><p class="font-light text-gray-500 dark:text-gray-400">Due to its central geographic location in Southern Europe, <a href="/" class="text-primary-600 underline hover:no-underline dark:text-primary-500" id="popover-image">Italy</a> has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed throughout what is now modern-day Italy, the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy</p> <!></div>`);
function Image($$anchor) {
  var div = root$5();
  var node = sibling(child(div), 2);
  Popover(node, {
    triggeredBy: "#popover-image",
    class: "w-96 text-sm font-light",
    children: ($$anchor2, $$slotProps) => {
      var div_1 = root_1$2();
      var div_2 = child(div_1);
      var div_3 = child(div_2);
      var h3 = child(div_3);
      var a = sibling(child(h3), 3);
      var node_1 = sibling(child(a));
      ChevronRightOutline(node_1, {
        class: "ms-1.5 h-2 w-2 text-primary-600 dark:text-primary-500"
      });
      reset(a);
      reset(h3);
      reset(div_3);
      reset(div_2);
      next(2);
      reset(div_1);
      append($$anchor2, div_1);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_1$1 = template(`<div class="space-y-2 p-3"><h3 class="font-semibold text-gray-900 dark:text-white">Activity growth - Incremental</h3> Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend. <h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3> For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n. <a href="/" class="flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-600">Read more <!></a></div>`);
var root$4 = template(`<div class="h-80"><div class="flex items-center text-sm font-light text-gray-500 dark:text-gray-400">This is just some informational text <button id="b3"><!> <span class="sr-only">Show information</span></button></div> <!></div>`);
function Description($$anchor) {
  var div = root$4();
  var div_1 = child(div);
  var button = sibling(child(div_1));
  var node = child(button);
  QuestionCircleSolid(node, { class: "ms-1.5 h-5 w-5" });
  next(2);
  reset(button);
  reset(div_1);
  var node_1 = sibling(div_1, 2);
  Popover(node_1, {
    arrow: false,
    triggeredBy: "#b3",
    class: "w-72 bg-white p-3 text-sm font-light text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400",
    position: "bottom-start",
    children: ($$anchor2, $$slotProps) => {
      var div_2 = root_1$1();
      var a = sibling(child(div_2), 4);
      var node_2 = sibling(child(a));
      ChevronRightOutline(node_2, {
        class: "ms-1.5 h-4 w-4 text-primary-600 dark:text-primary-500"
      });
      reset(a);
      reset(div_2);
      append($$anchor2, div_2);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_1 = template(`<!> Storage status`, 1);
var root_2 = template(`<div class="space-y-2"><h3 class="font-semibold text-gray-900 dark:text-white">Available storage</h3> <p class="text-gray-500 dark:text-gray-400">This server has <span class="font-semibold text-gray-900 dark:text-white">30</span> of <span class="font-semibold text-gray-900 dark:text-white">150 GB</span> of block storage remaining.</p> <div class="mb-4 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700"><div class="h-2.5 rounded-full bg-red-600" style="width: 85%"></div></div> <a href="/" class="flex items-center font-medium text-primary-600 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-600">Upgrade now <!></a></div>`);
var root$3 = template(`<div class="flex h-40 items-end justify-center"><!> <!></div>`);
function Progress($$anchor) {
  var div = root$3();
  var node = child(div);
  Button(node, {
    id: "progress",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1();
      var node_1 = first_child(fragment);
      DatabaseSolid(node_1, {
        class: "me-2 h-5 w-5 text-white dark:text-white"
      });
      next();
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node, 2);
  Popover(node_2, {
    triggeredBy: "#progress",
    class: "w-64 p-3 text-sm font-light",
    children: ($$anchor2, $$slotProps) => {
      var div_1 = root_2();
      var a = sibling(child(div_1), 6);
      var node_3 = sibling(child(a));
      ChevronRightOutline(node_3, {
        class: "ms-1.5 h-4 w-4 text-primary-600 dark:text-primary-500"
      });
      reset(a);
      reset(div_1);
      append($$anchor2, div_1);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_5$1 = template(`<h3 class="font-semibold text-gray-900 dark:text-white">Must have at least 6 characters</h3> <div class="grid grid-cols-4 gap-2"><div class="h-1 bg-orange-300 dark:bg-orange-400"></div> <div class="h-1 bg-orange-300 dark:bg-orange-400"></div> <div class="h-1 bg-gray-200 dark:bg-gray-600"></div> <div class="h-1 bg-gray-200 dark:bg-gray-600"></div></div> <p class="py-2">It’s better to have:</p> <ul><li class="mb-1 flex items-center"><!> Upper &amp; lower case letters</li> <li class="mb-1 flex items-center"><!> A symbol (#$&amp;)</li> <li class="flex items-center"><!>A longer password (min. 12 chars.)</li></ul>`, 1);
var root$2 = template(`<form class="mb-8"><div class="mb-6"><!> <!></div> <div class="mb-6"><!> <!></div> <!> <!></form> <!>`, 1);
function Password($$anchor) {
  var fragment = root$2();
  var form = first_child(fragment);
  var div = child(form);
  var node = child(div);
  Label(node, {
    for: "email",
    class: "mb-2",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Your email");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Input(node_1, {
    type: "email",
    id: "email",
    placeholder: "name@flowbite.com",
    required: true
  });
  reset(div);
  var div_1 = sibling(div, 2);
  var node_2 = child(div_1);
  Label(node_2, {
    for: "password",
    class: "mb-2",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Your password");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_3 = sibling(node_2, 2);
  Input(node_3, {
    type: "password",
    id: "password",
    required: true
  });
  reset(div_1);
  var node_4 = sibling(div_1, 2);
  Checkbox(node_4, {
    class: "mb-6",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Remember me");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_5 = sibling(node_4, 2);
  Button(node_5, {
    type: "submit",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_3 = text("Submit");
      append($$anchor2, text_3);
    },
    $$slots: { default: true }
  });
  reset(form);
  var node_6 = sibling(form, 2);
  Popover(node_6, {
    arrow: false,
    class: "p-4 text-sm",
    triggeredBy: "#password",
    position: "bottom",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_5$1();
      var ul = sibling(first_child(fragment_1), 6);
      var li = child(ul);
      var node_7 = child(li);
      CheckOutline(node_7, {
        class: "me-2 h-4 w-4 text-green-400 dark:text-green-500"
      });
      next();
      reset(li);
      var li_1 = sibling(li, 2);
      var node_8 = child(li_1);
      CheckOutline(node_8, {
        class: "me-2 h-4 w-4 text-green-400 dark:text-green-500"
      });
      next();
      reset(li_1);
      var li_2 = sibling(li_1, 2);
      var node_9 = child(li_2);
      CloseOutline(node_9, {
        class: "me-2 h-4 w-4 text-gray-300 dark:text-gray-400"
      });
      next();
      reset(li_2);
      reset(ul);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
}
var root$1 = template(`<div class="m-4 flex justify-center"><div id="ext-ref" class=" m-8 w-40 rounded-lg border border-gray-200 p-2 dark:border-gray-600">External reference</div></div> <div class="space-x-4 rtl:space-x-reverse"><!> <!> <!></div> <!> <!> <!>`, 1);
function ExternalReference($$anchor) {
  var fragment = root$1();
  var div = sibling(first_child(fragment), 2);
  var node = child(div);
  Button(node, {
    id: "ref-left",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Left");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Button(node_1, {
    id: "ref-top",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Top");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  Button(node_2, {
    id: "ref-right",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Right");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  reset(div);
  var node_3 = sibling(div, 2);
  Popover(node_3, {
    reference: "#ext-ref",
    color: "emerald",
    triggeredBy: "#ref-left",
    position: "left",
    class: "w-40 p-4 text-sm font-light",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_3 = text("Popover content.");
      append($$anchor2, text_3);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_3, 2);
  Popover(node_4, {
    reference: "#ext-ref",
    color: "cyan",
    triggeredBy: "#ref-top",
    position: "top",
    class: "w-40 p-4 text-sm font-light",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_4 = text("Popover content.");
      append($$anchor2, text_4);
    },
    $$slots: { default: true }
  });
  var node_5 = sibling(node_4, 2);
  Popover(node_5, {
    reference: "#ext-ref",
    color: "pink",
    triggeredBy: "#ref-right",
    position: "right",
    class: "w-40 p-4 text-sm font-light",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_5 = text("Popover content.");
      append($$anchor2, text_5);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
}
var root_7 = template(`<p class="px-3 py-2 dark:text-white">And here's some amazing content. It's very engaging. Right?</p>`);
var root_5 = template(`<div class="flex h-64 items-center justify-center"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-4"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!> <!></div>`, 1);
var root_22 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "popover";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/CompanyProfile.svelte": __vite_glob_0_0,
    "./examples/Description.svelte": __vite_glob_0_1,
    "./examples/ExternalReference.svelte": __vite_glob_0_2,
    "./examples/Image.svelte": __vite_glob_0_3,
    "./examples/Password.svelte": __vite_glob_0_4,
    "./examples/Progress.svelte": __vite_glob_0_5,
    "./examples/Setup.svelte": __vite_glob_0_6,
    "./examples/TitleSlot.svelte": __vite_glob_0_7,
    "./examples/UserProfile.svelte": __vite_glob_0_8
  });
  const exampleArr = [
    {
      name: "Title slot",
      component: TitleSlot
    },
    {
      name: "User profile",
      component: UserProfile
    },
    {
      name: "Company profile",
      component: CompanyProfile
    },
    {
      name: "Image",
      component: Image
    },
    {
      name: "Description",
      component: Description
    },
    {
      name: "Progress",
      component: Progress
    },
    {
      name: "Password",
      component: Password
    },
    {
      name: "External reference",
      component: ExternalReference
    }
  ];
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  const positions = Object.keys(popover.variants.position);
  let position = state(proxy(positions[0]));
  const colors = Object.keys(popover.variants.color);
  let color = state("default");
  let popoverClass = state("w-64 text-sm font-light");
  const changeClass = () => {
    set(popoverClass, proxy(get(popoverClass) === "w-64 text-sm font-light" ? "w-64 text-sm font-light p-2" : "w-64 text-sm font-light"));
  };
  let arrow = state(true);
  const changeArrow = () => {
    set(arrow, !get(arrow));
    set(offset, 0);
  };
  let offset = state(0);
  const changeOffset = () => {
    set(offset, proxy(get(offset) === 0 ? 20 : 0));
    set(arrow, false);
  };
  const transitions = [
    {
      name: "Fade",
      transition: fade,
      params: { duration: 100, easing: linear }
    },
    {
      name: "Fly",
      transition: fly,
      params: { duration: 300, easing: linear, x: -150 }
    },
    {
      name: "Blur",
      transition: blur,
      params: { duration: 800, easing: sineIn }
    }
  ];
  let selectedTransition = state("Fade");
  let currentTransition = derived(() => transitions.find((t) => t.name === get(selectedTransition)) || transitions[0]);
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(color) !== "default") props.push(` color="${get(color)}"`);
    if (get(position) !== "top") props.push(` position="${get(position)}"`);
    if (get(offset)) props.push(` offset="${get(offset)}"`);
    if (get(popoverClass) !== "w-64 text-sm font-light") props.push(` class="${get(popoverClass)}"`);
    if (get(arrow) !== true) props.push(" arrow={false}");
    if (get(currentTransition) !== transitions[0]) {
      props.push(` transition={${get(currentTransition).transition.name}}`);
      let paramValues = get(currentTransition).params;
      const paramsString = Object.entries(paramValues).map(([key, value]) => {
        if (typeof value === "function") {
          return `${key}:${value.name}`;
        }
        return `${key}:${value}`;
      }).join(",");
      props.push(` params={{${paramsString}}}`);
    }
    const propsString = props.length > 0 ? props.map((prop2) => `
  ${prop2}`).join("") + "\n" : "";
    return `<Button id="demo">Popover</Button>
<Popover titleSlot="Popover title" triggeredBy="#demo"${propsString} >
  My Popover content
</Popover>`;
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
      var text$1 = text("Popover");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  H2(node_1, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Setup");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  HighlightCompo(node_2, {
    get code() {
      return exampleModules[`./examples/Setup.svelte`];
    }
  });
  var node_3 = sibling(node_2, 2);
  H2(node_3, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Interactive Popover Builder");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_3, 2);
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
    CodeWrapper(node_4, {
      class: "",
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_2 = root_5();
        var div = first_child(fragment_2);
        var node_5 = child(div);
        Button(node_5, {
          id: "b1",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text("Popover");
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        var node_6 = sibling(node_5, 2);
        Popover(node_6, {
          get color() {
            return get(color);
          },
          get position() {
            return get(position);
          },
          get arrow() {
            return get(arrow);
          },
          get offset() {
            return get(offset);
          },
          get class() {
            return get(popoverClass);
          },
          get transition() {
            return get(currentTransition).transition;
          },
          get params() {
            return get(currentTransition).params;
          },
          titleSlot: "Popover title",
          triggeredBy: "#b1",
          children: ($$anchor3, $$slotProps2) => {
            var p = root_7();
            append($$anchor3, p);
          },
          $$slots: { default: true }
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var node_7 = child(div_1);
        Label(node_7, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_4 = text("Color");
            append($$anchor3, text_4);
          },
          $$slots: { default: true }
        });
        var node_8 = sibling(node_7, 2);
        each(node_8, 17, () => colors, index, ($$anchor3, colorOption) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "alert_reactive",
            get group() {
              return get(color);
            },
            set group($$value) {
              set(color, proxy($$value));
            },
            get color() {
              return get(colorOption);
            },
            get value() {
              return get(colorOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_5 = text();
              template_effect(() => set_text(text_5, get(colorOption)));
              append($$anchor4, text_5);
            },
            $$slots: { default: true }
          });
        });
        reset(div_1);
        var div_2 = sibling(div_1, 2);
        var node_9 = child(div_2);
        Label(node_9, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_6 = text("Position");
            append($$anchor3, text_6);
          },
          $$slots: { default: true }
        });
        var node_10 = sibling(node_9, 2);
        each(node_10, 17, () => positions, index, ($$anchor3, option) => {
          Radio($$anchor3, {
            labelClass: "w-28 my-1",
            name: "interactive_toast_position",
            get group() {
              return get(position);
            },
            set group($$value) {
              set(position, proxy($$value));
            },
            get value() {
              return get(option);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_7 = text();
              template_effect(() => set_text(text_7, get(option)));
              append($$anchor4, text_7);
            },
            $$slots: { default: true }
          });
        });
        reset(div_2);
        var div_3 = sibling(div_2, 2);
        var node_11 = child(div_3);
        Label(node_11, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_8 = text("Transition");
            append($$anchor3, text_8);
          },
          $$slots: { default: true }
        });
        var node_12 = sibling(node_11, 2);
        each(node_12, 17, () => transitions, index, ($$anchor3, transition2) => {
          Radio($$anchor3, {
            labelClass: "w-16 my-1",
            name: "interactive_transition",
            get group() {
              return get(selectedTransition);
            },
            set group($$value) {
              set(selectedTransition, proxy($$value));
            },
            get value() {
              return get(transition2).name;
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_9 = text();
              template_effect(() => set_text(text_9, get(transition2).name));
              append($$anchor4, text_9);
            },
            $$slots: { default: true }
          });
        });
        reset(div_3);
        var div_4 = sibling(div_3, 2);
        var node_13 = child(div_4);
        Button(node_13, {
          class: "w-36",
          onclick: changeClass,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_10 = text();
            template_effect(() => set_text(text_10, get(popoverClass) !== "w-64 text-sm font-light" ? "Remove class" : "Add class"));
            append($$anchor3, text_10);
          },
          $$slots: { default: true }
        });
        var node_14 = sibling(node_13, 2);
        Button(node_14, {
          class: "w-36",
          color: "secondary",
          onclick: changeArrow,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_11 = text();
            template_effect(() => set_text(text_11, get(arrow) ? "Remove arrow" : "Add arrow"));
            append($$anchor3, text_11);
          },
          $$slots: { default: true }
        });
        var node_15 = sibling(node_14, 2);
        Button(node_15, {
          class: "w-36",
          color: "rose",
          onclick: changeOffset,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_12 = text();
            template_effect(() => set_text(text_12, get(offset) ? "Remove offset" : "Add offset"));
            append($$anchor3, text_12);
          },
          $$slots: { default: true }
        });
        reset(div_4);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_16 = sibling(node_4, 2);
  H2(node_16, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_13 = text("Examples");
      append($$anchor2, text_13);
    },
    $$slots: { default: true }
  });
  var node_17 = sibling(node_16, 2);
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
    CodeWrapper(node_17, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_13 = root_22();
        var div_5 = first_child(fragment_13);
        var node_18 = child(div_5);
        Label(node_18, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_14 = text("Example");
            append($$anchor3, text_14);
          },
          $$slots: { default: true }
        });
        var node_19 = sibling(node_18, 2);
        each(node_19, 17, () => exampleArr, index, ($$anchor3, style) => {
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
              var text_15 = text();
              template_effect(() => set_text(text_15, get(style).name));
              append($$anchor4, text_15);
            },
            $$slots: { default: true }
          });
        });
        reset(div_5);
        var node_20 = sibling(div_5, 2);
        component(node_20, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_13);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_21 = sibling(node_17, 2);
  H2(node_21, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_16 = text("Component data");
      append($$anchor2, text_16);
    },
    $$slots: { default: true }
  });
  var node_22 = sibling(node_21, 2);
  CompoAttributesViewer(node_22, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
