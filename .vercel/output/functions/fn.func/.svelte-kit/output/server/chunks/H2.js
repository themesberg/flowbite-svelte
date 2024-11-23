import { S as pop, Q as push } from "./index.js";
import "./theme.js";
import { c as h2Cls, H as Heading } from "./H1.js";
function H2($$payload, $$props) {
  push();
  let { children, class: className } = $$props;
  const base = h2Cls({ className });
  Heading($$payload, {
    tag: "h2",
    class: base,
    children: ($$payload2) => {
      children($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  pop();
}
export {
  H2 as H
};
