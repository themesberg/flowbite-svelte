import { Q as push, a0 as spread_attributes, S as pop } from "./index.js";
import { aI as span } from "./theme.js";
function Span($$payload, $$props) {
  push();
  let {
    children,
    class: className,
    italic,
    underline,
    linethrough,
    uppercase,
    gradient,
    highlight,
    decoration,
    decorationColor,
    decorationThickness,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let classSpan = span({
    italic,
    underline,
    linethrough,
    uppercase,
    gradient,
    highlight,
    decoration,
    decorationColor,
    decorationThickness,
    className
  });
  $$payload.out += `<span${spread_attributes({ ...restProps, class: classSpan })}>`;
  if (children) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></span>`;
  pop();
}
export {
  Span as S
};
