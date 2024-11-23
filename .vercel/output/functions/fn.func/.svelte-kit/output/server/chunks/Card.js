import { Q as push, a0 as spread_attributes, S as pop, W as attr } from "./index.js";
import { n as card } from "./theme.js";
function Card($$payload, $$props) {
  push();
  let {
    children,
    href,
    color = "gray",
    horizontal = false,
    shadow = "md",
    reverse = false,
    img,
    padding = "lg",
    size = "sm",
    class: className,
    imgClass,
    contentClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, image, content } = card({
    size,
    color,
    shadow,
    padding,
    horizontal,
    reverse,
    href: !!href
  });
  const commonProps = {
    class: base({ class: className }),
    ...restProps
  };
  const anchorProps = { ...commonProps, href };
  const divProps = { ...commonProps, type: "presentation" };
  function childSlot($$payload2) {
    if (img) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<img${attr("class", image({ class: imgClass }))}${attr("src", img.src)}${attr("alt", img.alt)}> <div${attr("class", content({ class: contentClass }))}>`;
      children($$payload2);
      $$payload2.out += `<!----></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<div${attr("class", content({ class: contentClass }))}>`;
      children($$payload2);
      $$payload2.out += `<!----></div>`;
    }
    $$payload2.out += `<!--]-->`;
  }
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({ ...anchorProps })}>`;
    childSlot($$payload);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...divProps })}>`;
    childSlot($$payload);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  Card as C
};
