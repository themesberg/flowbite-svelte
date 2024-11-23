import { Q as push, R as setContext, a0 as spread_attributes, W as attr, S as pop, a1 as getContext, V as escape_html, Z as store_get, $ as unsubscribe_stores, Y as ensure_array_like, a3 as copy_payload, a4 as assign_payload } from "../../../../chunks/index.js";
import { g as bottomNav, h as bottomNavItem, i as bottomnavheaderitem, j as bottomnavheader } from "../../../../chunks/theme.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { twMerge } from "tailwind-merge";
import { w as writable } from "../../../../chunks/index2.js";
import { S as Skeleton, I as ImagePlaceholder } from "../../../../chunks/Skeleton.js";
import { A as AdjustmentsVerticalSolid } from "../../../../chunks/AdjustmentsVerticalSolid.js";
import { U as UserCircleSolid } from "../../../../chunks/UserCircleSolid.js";
import { p as page } from "../../../../chunks/stores.js";
import { T as Tooltip } from "../../../../chunks/Tooltip.js";
import { S as SearchOutline } from "../../../../chunks/SearchOutline.js";
import { A as Avatar } from "../../../../chunks/Avatar.js";
import { C as Card } from "../../../../chunks/Card.js";
import { L as Listgroup } from "../../../../chunks/Listgroup.js";
import { C as ClockSolid } from "../../../../chunks/ClockSolid.js";
import { U as UsersGroupOutline } from "../../../../chunks/UsersGroupOutline.js";
import { h as html } from "../../../../chunks/markdown.js";
function BottomNav($$payload, $$props) {
  push();
  let {
    children,
    header,
    position = "fixed",
    navType = "default",
    outerClass,
    innerClass,
    activeClass,
    activeUrl = "",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const activeCls = twMerge("text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900", activeClass);
  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);
  setContext("navType", navType);
  setContext("bottomNavType", { activeClass: activeCls });
  const { outer, inner } = bottomNav({ position, navType });
  const outerCls = outer({ class: outerClass });
  const innerCls = inner({ class: innerClass });
  $$payload.out += `<div${spread_attributes({ ...restProps, class: outerCls })}>`;
  if (header) {
    $$payload.out += "<!--[-->";
    header($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div${attr("class", innerCls)}>`;
  children($$payload);
  $$payload.out += `<!----></div></div>`;
  pop();
}
function BottomNavItem($$payload, $$props) {
  push();
  let {
    children,
    btnName,
    appBtnPosition = "middle",
    target,
    activeClass,
    href = "",
    btnClass,
    spanClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const navType = getContext("navType");
  getContext("bottomNavType") ?? {};
  let active = false;
  const activeUrlStore = getContext("activeUrl");
  activeUrlStore.subscribe((value) => {
  });
  const { base, span } = bottomNavItem({ navType, appBtnPosition });
  function getCommonClass() {
    return twMerge(base({ class: btnClass }), active);
  }
  function getSpanClass() {
    return twMerge(span({ class: spanClass }), active);
  }
  const commonProps = {
    "aria-label": btnName,
    class: getCommonClass(),
    ...restProps
  };
  const anchorProps = { ...commonProps, href, target };
  const buttonProps = { ...commonProps, type: "button" };
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({ ...anchorProps })}>`;
    children($$payload);
    $$payload.out += `<!----> <span${attr("class", getSpanClass())}>${escape_html(btnName)}</span></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${spread_attributes({ ...buttonProps })}>`;
    children($$payload);
    $$payload.out += `<!----> <span${attr("class", getSpanClass())}>${escape_html(btnName)}</span></button>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function BottomNavHeaderItem($$payload, $$props) {
  push();
  let {
    itemName,
    active,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let base = bottomnavheaderitem({ active, className });
  $$payload.out += `<button${spread_attributes({ ...restProps, class: base })}>${escape_html(itemName)}</button>`;
  pop();
}
function BottomNavHeader($$payload, $$props) {
  push();
  let {
    children,
    outerClass,
    innerClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { innerDiv, outerDiv } = bottomnavheader();
  $$payload.out += `<div${spread_attributes({
    ...restProps,
    class: outerDiv({ class: outerClass })
  })}><div${attr("class", innerDiv({ class: innerClass }))} role="group">`;
  children($$payload);
  $$payload.out += `<!----></div></div>`;
  pop();
}
function AdjustmentsVerticalOutline($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    strokeWidth = ctx.strokeWidth || "2",
    desc,
    class: className,
    ariaLabel = "adjustments vertical outline",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], className),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round"${attr("stroke-width", strokeWidth)} d="M6 4v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2m6-16v2m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v10m6-16v10m0 0a2 2 0 1 0 0 4m0-4a2 2 0 1 1 0 4m0 0v2"></path></svg>`;
  pop();
}
function AngleLeftOutline($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    strokeWidth = ctx.strokeWidth || "2",
    desc,
    class: className,
    ariaLabel = "angle left outline",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], className),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="m15 19-7-7 7-7"></path></svg>`;
  pop();
}
function AngleRightOutline($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    strokeWidth = ctx.strokeWidth || "2",
    desc,
    class: className,
    ariaLabel = "angle right outline",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], className),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="m9 5 7 7-7 7"></path></svg>`;
  pop();
}
function BookmarkSolid($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    desc,
    class: className,
    ariaLabel = "bookmark solid",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], className),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path d="M7.833 2c-.507 0-.98.216-1.318.576A1.92 1.92 0 0 0 6 3.89V21a1 1 0 0 0 1.625.78L12 18.28l4.375 3.5A1 1 0 0 0 18 21V3.889c0-.481-.178-.954-.515-1.313A1.808 1.808 0 0 0 16.167 2H7.833Z"></path></svg>`;
  pop();
}
function FileCirclePlusOutline($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    strokeWidth = ctx.strokeWidth || "2",
    desc,
    class: className,
    ariaLabel = "file circle plus outline",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], className),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="M18 9V4a1 1 0 0 0-1-1H8.914a1 1 0 0 0-.707.293L4.293 7.207A1 1 0 0 0 4 7.914V20a1 1 0 0 0 1 1h4M9 3v4a1 1 0 0 1-1 1H4m11 6v4m-2-2h4m3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"></path></svg>`;
  pop();
}
function HomeSolid($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    desc,
    class: className,
    ariaLabel = "home solid",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], className),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function PlusOutline($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    strokeWidth = ctx.strokeWidth || "2",
    desc,
    class: className,
    ariaLabel = "plus outline",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], className),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="M5 12h14m-7 7V5"></path></svg>`;
  pop();
}
function StarSolid($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    desc,
    class: className,
    ariaLabel = "star solid",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], className),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"></path></svg>`;
  pop();
}
function WalletSolid($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    desc,
    class: className,
    ariaLabel = "wallet solid",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], className),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M12 14a3 3 0 0 1 3-3h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a3 3 0 0 1-3-3Zm3-1a1 1 0 1 0 0 2h4v-2h-4Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M12.293 3.293a1 1 0 0 1 1.414 0L16.414 6h-2.828l-1.293-1.293a1 1 0 0 1 0-1.414ZM12.414 6 9.707 3.293a1 1 0 0 0-1.414 0L5.586 6h6.828ZM4.586 7l-.056.055A2 2 0 0 0 3 9v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2h-4a5 5 0 0 1 0-10h4a2 2 0 0 0-1.53-1.945L17.414 7H4.586Z" clip-rule="evenodd"></path></svg>`;
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
function Default($$payload) {
  $$payload.out += `<div class="relative flex flex-col p-6">`;
  Skeleton($$payload, { class: "py-4" });
  $$payload.out += `<!----> `;
  ImagePlaceholder($$payload, { class: "pb-20" });
  $$payload.out += `<!----> `;
  BottomNav($$payload, {
    position: "absolute",
    innerClass: "grid-cols-4",
    children: ($$payload2) => {
      BottomNavItem($$payload2, {
        btnName: "Home",
        children: ($$payload3) => {
          HomeSolid($$payload3, {
            class: "mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BottomNavItem($$payload2, {
        btnName: "Wallet",
        children: ($$payload3) => {
          WalletSolid($$payload3, {
            class: "mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BottomNavItem($$payload2, {
        btnName: "Settings",
        children: ($$payload3) => {
          AdjustmentsVerticalSolid($$payload3, {
            class: "mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BottomNavItem($$payload2, {
        btnName: "Profile",
        children: ($$payload3) => {
          UserCircleSolid($$payload3, {
            class: "mb-1 h-5 w-5 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function LinkAndActiveClass($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  $$payload.out += `<div class="relative flex flex-col p-6">`;
  Skeleton($$payload, { class: "py-4" });
  $$payload.out += `<!----> `;
  ImagePlaceholder($$payload, { class: "pb-20" });
  $$payload.out += `<!----> `;
  BottomNav($$payload, {
    activeUrl,
    position: "absolute",
    innerClass: "grid-cols-4",
    children: ($$payload2) => {
      BottomNavItem($$payload2, {
        btnName: "Home",
        href: "/",
        children: ($$payload3) => {
          HomeSolid($$payload3, {});
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BottomNavItem($$payload2, {
        btnName: "Quickstart",
        href: "/pages/about",
        target: "_blank",
        children: ($$payload3) => {
          WalletSolid($$payload3, {});
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BottomNavItem($$payload2, {
        btnName: "BottomNav",
        href: "/components/bottom-navigation",
        children: ($$payload3) => {
          AdjustmentsVerticalSolid($$payload3, {});
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BottomNavItem($$payload2, {
        btnName: "Accordion",
        href: "/components/accordion",
        children: ($$payload3) => {
          UserCircleSolid($$payload3, {});
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function OverwritingActiveClass($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  $$payload.out += `<div class="relative flex flex-col p-6">`;
  Skeleton($$payload, { class: "py-4" });
  $$payload.out += `<!----> `;
  ImagePlaceholder($$payload, { class: "pb-20" });
  $$payload.out += `<!----> `;
  BottomNav($$payload, {
    activeUrl,
    position: "absolute",
    innerClass: "grid-cols-4",
    activeClass: "font-bold text-green-500 hover:text-green-900 dark:hover:text-green-700 dark:text-green-300",
    children: ($$payload2) => {
      BottomNavItem($$payload2, {
        btnName: "Home",
        href: "/",
        children: ($$payload3) => {
          HomeSolid($$payload3, {});
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BottomNavItem($$payload2, {
        btnName: "Quickstart",
        href: "/pages/quickstart",
        children: ($$payload3) => {
          WalletSolid($$payload3, {});
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BottomNavItem($$payload2, {
        btnName: "BottomNav",
        href: "/components/bottom-navigation",
        children: ($$payload3) => {
          AdjustmentsVerticalSolid($$payload3, {});
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BottomNavItem($$payload2, {
        btnName: "Accordion",
        href: "/components/accordion",
        children: ($$payload3) => {
          UserCircleSolid($$payload3, {});
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function IconColor($$payload, $$props) {
  push();
  var $$store_subs;
  let svgClass = "mb-1 text-pink-500 dark:text-pink-400 group-hover:text-pink-600 dark:group-hover:text-pink-500";
  let svgActiveClass = "mb-1 text-green-500 dark:text-green-500 group-hover:text-green-700 dark:group-hover:text-green-700";
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  $$payload.out += `<div class="relative flex flex-col p-6">`;
  Skeleton($$payload, { class: "py-4" });
  $$payload.out += `<!----> `;
  ImagePlaceholder($$payload, { class: "pb-20" });
  $$payload.out += `<!----> `;
  BottomNav($$payload, {
    activeUrl,
    position: "absolute",
    innerClass: "grid-cols-4",
    children: ($$payload2) => {
      BottomNavItem($$payload2, {
        btnName: "Home",
        href: "/",
        children: ($$payload3) => {
          HomeSolid($$payload3, {
            class: activeUrl === "/" ? svgActiveClass : svgClass
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BottomNavItem($$payload2, {
        btnName: "Quickstart",
        href: "/docs/pages/quickstart",
        children: ($$payload3) => {
          WalletSolid($$payload3, {
            class: activeUrl === "/docs/pages/quickstart" ? svgActiveClass : svgClass
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BottomNavItem($$payload2, {
        btnName: "BottomNav",
        href: "/docs/components/bottom-navigation",
        children: ($$payload3) => {
          AdjustmentsVerticalSolid($$payload3, {
            class: activeUrl === "/docs/components/bottom-navigation" ? svgActiveClass : svgClass
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BottomNavItem($$payload2, {
        btnName: "Accordion",
        href: "/docs/components/accordion",
        children: ($$payload3) => {
          UserCircleSolid($$payload3, {
            class: activeUrl === "/docs/components/accordion" ? svgActiveClass : svgClass
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Border($$payload) {
  $$payload.out += `<div class="relative flex flex-col p-6">`;
  Skeleton($$payload, { class: "py-4" });
  $$payload.out += `<!----> `;
  ImagePlaceholder($$payload, { class: "pb-20" });
  $$payload.out += `<!----> `;
  BottomNav($$payload, {
    position: "absolute",
    navType: "border",
    innerClass: "grid-cols-4",
    children: ($$payload2) => {
      BottomNavItem($$payload2, {
        btnName: "Home",
        children: ($$payload3) => {
          HomeSolid($$payload3, {});
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BottomNavItem($$payload2, {
        btnName: "Wallet",
        children: ($$payload3) => {
          WalletSolid($$payload3, {});
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BottomNavItem($$payload2, {
        btnName: "Settings",
        children: ($$payload3) => {
          AdjustmentsVerticalSolid($$payload3, {});
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BottomNavItem($$payload2, {
        btnName: "Profile",
        children: ($$payload3) => {
          UserCircleSolid($$payload3, {});
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function ApplicationBar($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  $$payload.out += `<div class="relative flex flex-col p-6">`;
  Skeleton($$payload, { class: "py-4" });
  $$payload.out += `<!----> `;
  ImagePlaceholder($$payload, { class: "pb-20" });
  $$payload.out += `<!----> `;
  BottomNav($$payload, {
    activeUrl,
    position: "absolute",
    navType: "application",
    innerClass: "grid-cols-5",
    children: ($$payload2) => {
      BottomNavItem($$payload2, {
        btnName: "Home",
        appBtnPosition: "left",
        btnClass: "static",
        children: ($$payload3) => {
          HomeSolid($$payload3, {
            id: "home",
            class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
          $$payload3.out += `<!----> `;
          Tooltip($$payload3, {
            arrow: false,
            triggeredBy: "#home",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Home`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BottomNavItem($$payload2, {
        btnName: "Wallet",
        appBtnPosition: "middle",
        children: ($$payload3) => {
          WalletSolid($$payload3, {
            id: "wallet",
            class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
          $$payload3.out += `<!----> `;
          Tooltip($$payload3, {
            arrow: false,
            triggeredBy: "#wallet",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Wallet`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <div class="flex items-center justify-center">`;
      BottomNavItem($$payload2, {
        btnName: "Create new item",
        appBtnPosition: "middle",
        btnClass: "inline-flex items-center justify-center w-10 h-10 font-medium bg-primary-600 rounded-full hover:bg-primary-700 group focus:ring-4 focus:ring-primary-300 focus:outline-none dark:focus:ring-primary-800",
        children: ($$payload3) => {
          PlusOutline($$payload3, { id: "create", class: "text-white" });
          $$payload3.out += `<!----> `;
          Tooltip($$payload3, {
            arrow: false,
            triggeredBy: "#create",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Create new item`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> `;
      BottomNavItem($$payload2, {
        btnName: "Settings",
        appBtnPosition: "middle",
        children: ($$payload3) => {
          AdjustmentsVerticalOutline($$payload3, {
            id: "settings",
            class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
          $$payload3.out += `<!----> `;
          Tooltip($$payload3, {
            arrow: false,
            triggeredBy: "#settings",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Settings`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BottomNavItem($$payload2, {
        btnName: "Profile",
        appBtnPosition: "right",
        children: ($$payload3) => {
          UserCircleSolid($$payload3, {
            id: "profile",
            class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
          $$payload3.out += `<!----> `;
          Tooltip($$payload3, {
            arrow: false,
            triggeredBy: "#profile",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Profile`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Pagination($$payload) {
  $$payload.out += `<div class="relative flex flex-col p-6">`;
  Skeleton($$payload, { class: "py-4" });
  $$payload.out += `<!----> `;
  ImagePlaceholder($$payload, { class: "pb-20" });
  $$payload.out += `<!----> `;
  BottomNav($$payload, {
    position: "absolute",
    navType: "pagination",
    innerClass: "grid-cols-6",
    children: ($$payload2) => {
      BottomNavItem($$payload2, {
        btnName: "New document",
        children: ($$payload3) => {
          FileCirclePlusOutline($$payload3, {
            id: "create",
            class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
          $$payload3.out += `<!----> `;
          Tooltip($$payload3, {
            arrow: false,
            triggeredBy: "#create",
            children: ($$payload4) => {
              $$payload4.out += `<!---->New document`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BottomNavItem($$payload2, {
        btnName: "Bookmark",
        children: ($$payload3) => {
          BookmarkSolid($$payload3, {
            id: "bookmark",
            class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
          $$payload3.out += `<!----> `;
          Tooltip($$payload3, {
            arrow: false,
            triggeredBy: "#bookmark",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Bookmark`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <div class="col-span-2 flex items-center justify-center"><div class="mx-2 flex w-full max-w-[128px] items-center justify-between rounded-lg bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-400"><button type="button" class="inline-flex h-8 items-center justify-center rounded-s-lg bg-gray-100 px-1 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-800">`;
      AngleLeftOutline($$payload2, { class: "ms-1 h-2 w-2" });
      $$payload2.out += `<!----> <span class="sr-only">Previous page</span></button> <span class="mx-1 flex-shrink-0 text-sm font-medium">1 of 345</span> <button type="button" class="inline-flex h-8 items-center justify-center rounded-e-lg bg-gray-100 px-1 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:bg-gray-600 dark:hover:bg-gray-800 dark:focus:ring-gray-800">`;
      AngleRightOutline($$payload2, { class: "me-1 h-2 w-2" });
      $$payload2.out += `<!----> <span class="sr-only">Next page</span></button></div></div> `;
      BottomNavItem($$payload2, {
        btnName: "Settings",
        children: ($$payload3) => {
          AdjustmentsVerticalOutline($$payload3, {
            id: "settings",
            class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
          $$payload3.out += `<!----> `;
          Tooltip($$payload3, {
            arrow: false,
            triggeredBy: "#settings",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Settings`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BottomNavItem($$payload2, {
        btnName: "Profile",
        children: ($$payload3) => {
          UserCircleSolid($$payload3, {
            id: "profile",
            class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
          });
          $$payload3.out += `<!----> `;
          Tooltip($$payload3, {
            arrow: false,
            triggeredBy: "#profile",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Profile`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function ButtonGroup($$payload) {
  $$payload.out += `<div class="relative flex flex-col p-6">`;
  Skeleton($$payload, { class: "py-4" });
  $$payload.out += `<!----> `;
  ImagePlaceholder($$payload, { class: "pb-28" });
  $$payload.out += `<!----> `;
  {
    let header = function($$payload2) {
      BottomNavHeader($$payload2, {
        children: ($$payload3) => {
          BottomNavHeaderItem($$payload3, { itemName: "New" });
          $$payload3.out += `<!----> `;
          BottomNavHeaderItem($$payload3, { itemName: "Popular", active: true });
          $$payload3.out += `<!----> `;
          BottomNavHeaderItem($$payload3, { itemName: "Following" });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    };
    BottomNav($$payload, {
      position: "absolute",
      navType: "group",
      innerClass: "grid-cols-5",
      header,
      children: ($$payload2) => {
        BottomNavItem($$payload2, {
          btnName: "Home",
          children: ($$payload3) => {
            HomeSolid($$payload3, {
              id: "home",
              class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
            });
            $$payload3.out += `<!----> `;
            Tooltip($$payload3, {
              arrow: false,
              triggeredBy: "#home",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Home`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> `;
        BottomNavItem($$payload2, {
          btnName: "Bookmark",
          children: ($$payload3) => {
            BookmarkSolid($$payload3, {
              id: "bookmark",
              class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
            });
            $$payload3.out += `<!----> `;
            Tooltip($$payload3, {
              arrow: false,
              triggeredBy: "#bookmark",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Bookmark`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> `;
        BottomNavItem($$payload2, {
          btnName: "New post",
          children: ($$payload3) => {
            PlusOutline($$payload3, {
              id: "create",
              class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
            });
            $$payload3.out += `<!----> `;
            Tooltip($$payload3, {
              arrow: false,
              triggeredBy: "#create",
              children: ($$payload4) => {
                $$payload4.out += `<!---->New post`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> `;
        BottomNavItem($$payload2, {
          btnName: "Search",
          children: ($$payload3) => {
            SearchOutline($$payload3, {
              id: "search",
              class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
            });
            $$payload3.out += `<!----> `;
            Tooltip($$payload3, {
              arrow: false,
              triggeredBy: "#search",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Search`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> `;
        BottomNavItem($$payload2, {
          btnName: "Settings",
          children: ($$payload3) => {
            AdjustmentsVerticalOutline($$payload3, {
              id: "settings",
              class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
            });
            $$payload3.out += `<!----> `;
            Tooltip($$payload3, {
              arrow: false,
              triggeredBy: "#settings",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Settings`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { header: true, default: true }
    });
  }
  $$payload.out += `<!----></div>`;
}
function Card_1($$payload) {
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
  $$payload.out += `<div class="flex justify-center">`;
  Card($$payload, {
    class: "relative h-96 overflow-y-scroll rounded-lg border border-gray-100 bg-white dark:border-gray-600 dark:bg-gray-700",
    contentClass: "p-0 sm:p-0 md:p-0",
    children: ($$payload2) => {
      {
        let children = function($$payload3) {
          const each_array = ensure_array_like(list);
          $$payload3.out += `<!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let item = each_array[$$index];
            $$payload3.out += `<a href="/" class="flex w-full items-center justify-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800">`;
            Avatar($$payload3, {
              src: item.img.src,
              alt: item.img.alt,
              class: "me-3 flex-shrink-0"
            });
            $$payload3.out += `<!----> <div><p class="text-sm text-gray-500 dark:text-gray-400">${html(item.comment)}</p> <span class="text-xs text-primary-600 dark:text-primary-500">${html(item.message)}</span></div></a>`;
          }
          $$payload3.out += `<!--]-->`;
        };
        Listgroup($$payload2, {
          class: "border-0 dark:!bg-transparent",
          children,
          $$slots: { default: true }
        });
      }
      $$payload2.out += `<!----> `;
      BottomNav($$payload2, {
        position: "sticky",
        navType: "card",
        innerClass: "grid-cols-3 pt-2 pb-4",
        children: ($$payload3) => {
          BottomNavItem($$payload3, {
            btnName: "Latest",
            children: ($$payload4) => {
              ClockSolid($$payload4, {
                class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          BottomNavItem($$payload3, {
            btnName: "Following",
            children: ($$payload4) => {
              UsersGroupOutline($$payload4, {
                class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          BottomNavItem($$payload3, {
            btnName: "Favorites",
            children: ($$payload4) => {
              StarSolid($$payload4, {
                class: "mb-1 h-6 w-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-500"
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function _page($$payload, $$props) {
  push();
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
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  let exampleExpand = false;
  let showExpandButton = isSvelteOverflow(svelteCode, exampleModules);
  const handleExpandClick = () => {
    exampleExpand = !exampleExpand;
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    H1($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Bottom navigation`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        DynamicCodeBlockHighlight($$payload3, {
          replaceLib: true,
          handleExpandClick,
          expand: exampleExpand,
          showExpandButton,
          code: exampleModules[`./examples/${svelteCode}`]
        });
      };
      CodeWrapper($$payload2, {
        innerClass: "p-0",
        codeblock,
        children: ($$payload3) => {
          const each_array = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-6 flex flex-wrap p-6">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Example`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let style = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-48 my-1",
              onclick: () => exampleExpand = false,
              name: "block_style",
              get group() {
                return selectedExample;
              },
              set group($$value) {
                selectedExample = $$value;
                $$settled = false;
              },
              value: style.name,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(style.name)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <!---->`;
          SelectedComponent($$payload3, {});
          $$payload3.out += `<!---->`;
        },
        $$slots: { codeblock: true, default: true }
      });
    }
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Component data`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    CompoAttributesViewer($$payload2, { dirName });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
