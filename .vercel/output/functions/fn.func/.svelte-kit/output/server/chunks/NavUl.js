import { R as setContext, a0 as spread_attributes, W as attr, S as pop, Q as push, a1 as getContext, V as escape_html } from "./index.js";
import { O as navbar, P as navbrand, Q as navLi, R as navUl } from "./theme.js";
import { w as writable } from "./index2.js";
function Navbar($$payload, $$props) {
  push();
  let {
    children,
    navSlotBlock,
    navSlotHiddenTop,
    navSlotHiddenBottom,
    toggleNav,
    closeNav = () => {
    },
    navStatus,
    fluid,
    brand,
    hamburgerMenu = true,
    breakPoint = "md",
    navClass,
    divClass,
    btnClass,
    div2Class,
    activeClass,
    nonActiveClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const {
    base,
    container,
    toggleButton,
    menuContainer,
    activeLink,
    inactiveLink
  } = navbar({ fluid, breakPoint, navStatus });
  setContext("navbarContext", {
    navStatus,
    breakPoint,
    get activeClass() {
      return activeLink({ class: activeClass });
    },
    get nonActiveClass() {
      return inactiveLink({ class: nonActiveClass });
    },
    closeNav
  });
  function getMenuProps(isOpen) {
    return isOpen ? { role: "menu", tabindex: 0 } : { role: "none", tabindex: -1 };
  }
  $$payload.out += `<nav${spread_attributes({
    ...restProps,
    class: base({ class: navClass })
  })}><div${attr("class", container({ class: divClass }))}>`;
  if (brand) {
    $$payload.out += "<!--[-->";
    brand($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (hamburgerMenu) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button type="button"${attr("class", toggleButton({ class: btnClass }))}><span class="sr-only">Open main menu</span> <svg class="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (navSlotBlock) {
    $$payload.out += "<!--[-->";
    navSlotBlock($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (navStatus) {
    $$payload.out += "<!--[-->";
    if (navSlotHiddenTop) {
      $$payload.out += "<!--[-->";
      navSlotHiddenTop($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div${spread_attributes({
      class: menuContainer({ class: div2Class }),
      ...getMenuProps(true)
    })}>`;
    children($$payload);
    $$payload.out += `<!----></div> `;
    if (navSlotHiddenBottom) {
      $$payload.out += "<!--[-->";
      navSlotHiddenBottom($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({
      class: menuContainer({ class: div2Class }),
      ...getMenuProps(false)
    })}>`;
    children($$payload);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]--></div></nav>`;
  pop();
}
function NavBrand($$payload, $$props) {
  push();
  let {
    children,
    siteName,
    closeNav,
    aClass,
    spanClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const context = getContext("navbarContext");
  closeNav = context.closeNav ?? closeNav;
  const { base, span } = navbrand();
  $$payload.out += `<a${spread_attributes({
    href: "/",
    ...restProps,
    class: base({ class: aClass })
  })}>`;
  if (children) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (siteName) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span${attr("class", span({ class: spanClass }))}>${escape_html(siteName)}</span>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></a>`;
  pop();
}
function NavLi($$payload, $$props) {
  push();
  let {
    closeNav,
    href,
    children,
    aClass,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let breakPoint;
  const context = getContext("navbarContext");
  breakPoint = context.breakPoint ?? "md";
  closeNav = context.closeNav ?? closeNav;
  const activeUrlStore = getContext("activeUrl");
  let navUrl = "";
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });
  let isActive = navUrl ? href === navUrl : false;
  const { base, link } = navLi({ active: isActive, breakPoint });
  $$payload.out += `<li${attr("class", base({ class: className }))}><a${spread_attributes({
    href,
    ...restProps,
    "aria-current": isActive,
    class: link({ class: aClass })
  })}>`;
  children($$payload);
  $$payload.out += `<!----></a></li>`;
  pop();
}
function NavUl($$payload, $$props) {
  push();
  let {
    children,
    activeUrl = "",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let breakPoint;
  const context = getContext("navbarContext");
  breakPoint = context.breakPoint ?? "md";
  const base = navUl({ breakPoint, className });
  const activeUrlStore = writable("");
  setContext("activeUrl", activeUrlStore);
  $$payload.out += `<ul${spread_attributes({ ...restProps, class: base })}>`;
  children($$payload);
  $$payload.out += `<!----></ul>`;
  pop();
}
export {
  Navbar as N,
  NavUl as a,
  NavBrand as b,
  NavLi as c
};
