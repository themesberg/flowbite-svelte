import { Q as push, a0 as spread_attributes, W as attr, a2 as bind_props, S as pop } from "./index.js";
import { L as Label } from "./CompoAttributesViewer.js";
import { aa as toggle } from "./theme.js";
function Toggle($$payload, $$props) {
  push();
  let {
    children,
    toggleSize = "default",
    value,
    checked = void 0,
    disabled,
    color = "primary",
    aria_describedby,
    labelClass,
    inputClass,
    spanClass,
    leftLabel,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { input, label, span } = toggle({ color, checked, size: toggleSize, disabled });
  Label($$payload, {
    class: label({ class: labelClass }),
    children: ($$payload2) => {
      if (leftLabel) {
        $$payload2.out += "<!--[-->";
        leftLabel($$payload2);
        $$payload2.out += `<!---->`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> <input${spread_attributes({
        type: "checkbox",
        checked,
        value,
        "aria-describedby": aria_describedby,
        ...restProps,
        disabled,
        class: input({ class: inputClass })
      })}> <span${attr("class", span({ class: spanClass }))}></span> `;
      if (children) {
        $$payload2.out += "<!--[-->";
        children($$payload2);
        $$payload2.out += `<!---->`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, { checked });
  pop();
}
export {
  Toggle as T
};
