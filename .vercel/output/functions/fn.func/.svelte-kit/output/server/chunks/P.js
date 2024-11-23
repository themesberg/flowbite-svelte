import { a0 as spread_attributes, S as pop, Q as push } from "./index.js";
import { W as paragraph } from "./theme.js";
function P($$payload, $$props) {
  push();
  let {
    children,
    class: className = "text-gray-900 dark:text-white",
    height = "normal",
    align = "left",
    justify = false,
    italic,
    firstUpper = false,
    whitespace = "normal",
    size = "base",
    space = "normal",
    weight = "normal",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let classP = paragraph({
    height,
    size,
    weight,
    space,
    align,
    justify,
    italic,
    firstUpper,
    whitespace,
    className
  });
  $$payload.out += `<p${spread_attributes({ ...restProps, class: classP })}>`;
  children($$payload);
  $$payload.out += `<!----></p>`;
  pop();
}
export {
  P
};
