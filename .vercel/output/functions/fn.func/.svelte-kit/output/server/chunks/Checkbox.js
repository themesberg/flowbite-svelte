import { Q as push, Y as ensure_array_like, V as escape_html, a0 as spread_attributes, a2 as bind_props, S as pop } from "./index.js";
import { L as Label } from "./CompoAttributesViewer.js";
import { ae as checkbox } from "./theme.js";
function Checkbox($$payload, $$props) {
  push();
  let {
    children,
    aria_describedby,
    color = "primary",
    custom,
    inline,
    tinted,
    rounded,
    group = [],
    choices = [],
    checked = false,
    classLabel,
    indeterminate,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, label } = checkbox({ color, tinted, custom, rounded, inline });
  if (choices.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(choices);
    $$payload.out += `<!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let { value, checkboxLabel } = each_array[i];
      Label($$payload, {
        class: label({ class: classLabel }),
        for: `checkbox-${i}`,
        children: ($$payload2) => {
          $$payload2.out += `<!---->${escape_html(checkboxLabel)} <input${spread_attributes({
            id: `checkbox-${i}`,
            type: "checkbox",
            value,
            checked: group.includes(value),
            ...restProps,
            class: base({ class: className })
          })}> `;
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
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    Label($$payload, {
      class: label({ class: classLabel }),
      children: ($$payload2) => {
        $$payload2.out += `<input${spread_attributes({
          type: "checkbox",
          checked,
          "aria-describedby": aria_describedby,
          indeterminate,
          ...restProps,
          class: base({ class: className })
        })}> `;
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
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { group, checked });
  pop();
}
export {
  Checkbox as C
};
