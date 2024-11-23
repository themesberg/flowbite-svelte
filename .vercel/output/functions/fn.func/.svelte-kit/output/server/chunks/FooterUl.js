import { a0 as spread_attributes, S as pop, Q as push, W as attr, V as escape_html } from "./index.js";
import { B as footer, C as footerBrand, D as footerLi, E as footerUl } from "./theme.js";
function Footer($$payload, $$props) {
  push();
  let {
    children,
    footerType = "default",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const footerCls = footer({ footerType, className });
  $$payload.out += `<footer${spread_attributes({ ...restProps, class: footerCls })}>`;
  children($$payload);
  $$payload.out += `<!----></footer>`;
  pop();
}
function FooterBrand($$payload, $$props) {
  push();
  let {
    children,
    aClass,
    spanClass,
    imgClass,
    href,
    src,
    alt,
    name,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, span, img } = footerBrand();
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({
      ...restProps,
      href,
      class: base({ class: aClass })
    })}>`;
    if (src) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<img${attr("src", src)}${attr("class", img({ class: imgClass }))}${attr("alt", alt)}>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span${attr("class", span({ class: spanClass }))}>${escape_html(name)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (children) {
      $$payload.out += "<!--[-->";
      children($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<img${attr("src", src)}${attr("class", img({ class: imgClass }))}${attr("alt", alt)}>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function FooterLi($$payload, $$props) {
  push();
  let {
    children,
    liClass,
    aClass,
    href,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, link } = footerLi();
  $$payload.out += `<li${attr("class", base({ class: liClass }))}><a${spread_attributes({
    ...restProps,
    href,
    class: link({ class: aClass })
  })}>`;
  children($$payload);
  $$payload.out += `<!----></a></li>`;
  pop();
}
function FooterUl($$payload, $$props) {
  push();
  let {
    class: ulClass,
    children,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const base = footerUl({ class: ulClass });
  $$payload.out += `<ul${spread_attributes({ ...restProps, class: base })}>`;
  children($$payload);
  $$payload.out += `<!----></ul>`;
  pop();
}
export {
  Footer as F,
  FooterBrand as a,
  FooterUl as b,
  FooterLi as c
};
