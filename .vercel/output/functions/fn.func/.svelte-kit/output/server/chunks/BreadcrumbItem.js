import { Q as push, a0 as spread_attributes, W as attr, S as pop } from "./index.js";
import { a8 as breadcrumb } from "./theme.js";
import { twMerge } from "tailwind-merge";
function Breadcrumb($$payload, $$props) {
  push();
  let {
    children,
    solid = false,
    navClass,
    olClass,
    ariaLabel = "Breadcrumb",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, list } = breadcrumb({ solid });
  let classNav = base({ class: navClass });
  let classList = list({ class: olClass });
  $$payload.out += `<nav${spread_attributes({
    "aria-label": ariaLabel,
    ...restProps,
    class: classNav
  })}><ol${attr("class", classList)}>`;
  children($$payload);
  $$payload.out += `<!----></ol></nav>`;
  pop();
}
function BreadcrumbItem($$payload, $$props) {
  push();
  let {
    children,
    icon,
    home = false,
    href,
    linkClass,
    spanClass,
    homeClass,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { item, icon: breacrumbIcon } = breadcrumb({ home, hasHref: !!href, class: className });
  $$payload.out += `<li${spread_attributes({ ...restProps, class: item() })}>`;
  if (home) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("class", item({ home: true, class: homeClass }))}${attr("href", href)}>`;
    if (icon) {
      $$payload.out += "<!--[-->";
      icon($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<svg class="me-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>`;
    }
    $$payload.out += `<!--]--> `;
    children($$payload);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (icon) {
      $$payload.out += "<!--[-->";
      icon($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<svg${attr("class", breacrumbIcon())} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>`;
    }
    $$payload.out += `<!--]--> `;
    if (href) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<a${attr("class", twMerge(item({ home: false, hasHref: true }), linkClass))}${attr("href", href)}>`;
      children($$payload);
      $$payload.out += `<!----></a>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<span${attr("class", twMerge(item({ home: false, hasHref: false }), spanClass))}>`;
      children($$payload);
      $$payload.out += `<!----></span>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></li>`;
  pop();
}
export {
  Breadcrumb as B,
  BreadcrumbItem as a
};
