import { Q as push, a1 as getContext, W as attr, _ as spread_props, S as pop } from "./index.js";
import { B as Button } from "./markdown.js";
import { l as gradientButton } from "./theme.js";
function GradientButton($$payload, $$props) {
  push();
  const group = getContext("group");
  let {
    children,
    outline,
    pill,
    color = "blue",
    shadow,
    class: className,
    href,
    disabled,
    size,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, outlineWrapper } = gradientButton({
    color,
    outline,
    pill,
    shadow,
    disabled,
    group: !!group
  });
  if (outline) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("class", base({ className }))}>`;
    Button($$payload, spread_props([
      restProps,
      {
        class: outlineWrapper(),
        disabled,
        href,
        size,
        children: ($$payload2) => {
          children($$payload2);
          $$payload2.out += `<!---->`;
        },
        $$slots: { default: true }
      }
    ]));
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    Button($$payload, spread_props([
      restProps,
      {
        class: base({ className }),
        disabled,
        href,
        size,
        children: ($$payload2) => {
          children($$payload2);
          $$payload2.out += `<!---->`;
        },
        $$slots: { default: true }
      }
    ]));
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  GradientButton as G
};
