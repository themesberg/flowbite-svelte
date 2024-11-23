import { a5 as element, S as pop, Q as push, a0 as spread_attributes } from "./index.js";
import { X as heading } from "./theme.js";
import { tv } from "tailwind-variants";
function Heading($$payload, $$props) {
  push();
  let {
    children,
    tag = "h1",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let headingClass = heading({ tag, className });
  element(
    $$payload,
    tag,
    () => {
      $$payload.out += `${spread_attributes({ ...restProps, class: headingClass })}`;
    },
    () => {
      children($$payload);
      $$payload.out += `<!---->`;
    }
  );
  pop();
}
const highlightcompo = tv({
  slots: {
    base: "mt-4 max-w-4xl rounded bg-gray-50 dark:bg-gray-700",
    badge: "absolute -top-8 right-[8px]",
    button: "absolute right-2 top-2 rounded px-2 py-1 text-white"
  },
  variants: {
    expanded: {
      true: { base: "min-h-full" },
      false: { base: "" }
    }
  }
});
const codewrapper = tv({
  slots: {
    base: "max-w-4xl rounded-md border border-gray-200 bg-white bg-gradient-to-r dark:border-gray-600 dark:bg-gray-950",
    inner: "p-6"
  }
});
const h1Cls = tv({
  base: "my-8 text-3xl"
});
const h2Cls = tv({
  base: "my-6 text-2xl"
});
const h3Cls = tv({
  base: "my-4 text-xl"
});
function H1($$payload, $$props) {
  push();
  let { children, class: className } = $$props;
  const base = h1Cls({ className });
  Heading($$payload, {
    tag: "h1",
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
  Heading as H,
  H1 as a,
  highlightcompo as b,
  h2Cls as c,
  codewrapper as d,
  h3Cls as h
};
