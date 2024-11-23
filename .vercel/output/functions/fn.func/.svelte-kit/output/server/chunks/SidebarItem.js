import { R as setContext, W as attr, a0 as spread_attributes, S as pop, Q as push, a1 as getContext, V as escape_html } from "./index.js";
import { f as fly, s as slide } from "./index3.js";
import { w as writable } from "./index2.js";
import { U as sidebar, V as sidebardropdownwrapper } from "./theme.js";
import { u as uiHelpers } from "./uiHelpers.svelte.js";
import { twMerge } from "tailwind-merge";
function Sidebar($$payload, $$props) {
  push();
  let {
    children,
    isOpen = false,
    closeSidebar,
    isSingle = true,
    breakpoint = "md",
    position = "fixed",
    activateClickOutside = true,
    backdrop = true,
    backdropClass,
    transition = fly,
    params,
    divClass,
    ariaLabel,
    nonActiveClass,
    activeClass,
    activeUrl = "",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let isLargeScreen = false;
  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);
  const {
    base,
    active,
    nonactive,
    div,
    backdrop: backdropCls
  } = sidebar({ isOpen, breakpoint, position, backdrop });
  let sidebarCtx = {
    get closeSidebar() {
      return closeSidebar;
    },
    get activeClass() {
      return active({ class: activeClass });
    },
    get nonActiveClass() {
      return nonactive({ class: nonActiveClass });
    },
    isSingle
  };
  setContext("sidebarContext", sidebarCtx);
  if (isOpen || isLargeScreen) {
    $$payload.out += "<!--[-->";
    if (isOpen) {
      $$payload.out += "<!--[-->";
      if (backdrop && activateClickOutside) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div role="presentation"${attr("class", backdropCls({ class: backdropClass }))}></div>`;
      } else {
        $$payload.out += "<!--[!-->";
        if (backdrop && !activateClickOutside) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<div role="presentation"${attr("class", backdropCls({ class: backdropClass }))}></div>`;
        } else {
          $$payload.out += "<!--[!-->";
          if (!backdrop && activateClickOutside) {
            $$payload.out += "<!--[-->";
            $$payload.out += `<div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full"></div>`;
          } else {
            $$payload.out += "<!--[!-->";
            if (!backdrop && !activateClickOutside) {
              $$payload.out += "<!--[-->";
              $$payload.out += `<div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full"></div>`;
            } else {
              $$payload.out += "<!--[!-->";
            }
            $$payload.out += `<!--]-->`;
          }
          $$payload.out += `<!--]-->`;
        }
        $$payload.out += `<!--]-->`;
      }
      $$payload.out += `<!--]-->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <aside${spread_attributes({
      ...restProps,
      class: base({ className }),
      "aria-label": ariaLabel
    })}><div${attr("class", div({ class: divClass }))}>`;
    children($$payload);
    $$payload.out += `<!----></div></aside>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function SidebarDropdownWrapper($$payload, $$props) {
  push();
  let {
    children,
    arrowup,
    arrowdown,
    iconSlot,
    isOpen = false,
    btnClass,
    label,
    spanClass,
    ulClass,
    transition = slide,
    params,
    svgClass,
    class: className,
    onclick,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, btn, span, svg, ul } = sidebardropdownwrapper();
  let sidebarDropdown = uiHelpers();
  sidebarDropdown.isOpen = isOpen;
  let ctx = getContext("sidebarContext") || { isSingle: false };
  let self = {};
  if (ctx.isSingle && !ctx.selected) {
    ctx.selected = writable(null);
  }
  ctx.isSingle ? ctx.selected : writable(self);
  $$payload.out += `<li${attr("class", base({ className }))}><button${spread_attributes({
    ...restProps,
    type: "button",
    class: btn({ class: btnClass }),
    "aria-controls": "sidebar-dropdown"
  })}>`;
  if (iconSlot) {
    $$payload.out += "<!--[-->";
    iconSlot($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <span${attr("class", span({ class: spanClass }))}>${escape_html(label)}</span> `;
  if (isOpen) {
    $$payload.out += "<!--[-->";
    if (arrowup) {
      $$payload.out += "<!--[-->";
      arrowup($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<svg${attr("class", svg({ class: svgClass }))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    if (arrowdown) {
      $$payload.out += "<!--[-->";
      arrowdown($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<svg${attr("class", svg({ class: svgClass }))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></button> `;
  if (isOpen) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<ul${attr("class", ul({ class: ulClass }))}>`;
    children($$payload);
    $$payload.out += `<!----></ul>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></li>`;
  pop();
}
function SidebarGroup($$payload, $$props) {
  push();
  let {
    children,
    class: className = "space-y-2",
    borderClass = "pt-4 mt-4 border-t border-gray-200 dark:border-gray-700",
    border = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<ul${spread_attributes({
    ...restProps,
    class: border ? borderClass : className
  })}>`;
  children($$payload);
  $$payload.out += `<!----></ul>`;
  pop();
}
function SidebarItem($$payload, $$props) {
  push();
  let {
    iconSlot,
    subtext,
    href,
    label,
    spanClass = "ms-3",
    activeClass,
    nonActiveClass,
    aClass,
    active,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const context = getContext("sidebarContext") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let sidebarUrl = "";
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });
  let aCls = sidebarUrl === href ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass;
  $$payload.out += `<li${attr("class", className)}><a${spread_attributes({
    ...restProps,
    href,
    "aria-current": sidebarUrl === href ? "page" : void 0,
    class: twMerge(aCls, aClass)
  })}>`;
  if (iconSlot) {
    $$payload.out += "<!--[-->";
    iconSlot($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <span${attr("class", spanClass)}>${escape_html(label)}</span> `;
  if (subtext) {
    $$payload.out += "<!--[-->";
    subtext($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></a></li>`;
  pop();
}
export {
  Sidebar as S,
  SidebarGroup as a,
  SidebarDropdownWrapper as b,
  SidebarItem as c
};
