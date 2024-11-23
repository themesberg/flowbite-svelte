import { Q as push, a0 as spread_attributes, W as attr, S as pop } from "./index.js";
import { a5 as tooltip } from "./theme.js";
function Tooltip($$payload, $$props) {
  push();
  let {
    children,
    color = "default",
    showOn = "hover",
    arrow: showArrow = true,
    offset = 8,
    triggeredBy,
    reference,
    position = "top",
    strategy = "absolute",
    class: className,
    visible = false,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let isVisible = visible;
  let { base, arrowBase } = tooltip({ color, arrow: showArrow, position });
  if (isVisible) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes({
      role: "tooltip",
      ...restProps,
      class: `${base({ className })} ${isVisible ? "visible opacity-100" : "invisible opacity-0"} transition-opacity duration-200`
    })}>`;
    children($$payload);
    $$payload.out += `<!----> `;
    if (showArrow) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr("class", arrowBase({ arrow: showArrow, position }))}></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  Tooltip as T
};
