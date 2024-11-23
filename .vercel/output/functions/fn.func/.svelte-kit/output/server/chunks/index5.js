import { Q as push, a1 as getContext, W as attr, a2 as bind_props, S as pop, a0 as spread_attributes } from "./index.js";
import { ab as input } from "./theme.js";
import { C as CloseButton } from "./CloseButton.js";
function Input($$payload, $$props) {
  push();
  let {
    children,
    left,
    right,
    value = void 0,
    clearable = false,
    size,
    color = "default",
    class: className,
    classLeft,
    classRight,
    divClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let background = getContext("background");
  let group = getContext("group");
  let isGroup = !!group;
  let _size = size || clampSize(group?.size) || "md";
  const _color = color === "default" && background ? "tinted" : color;
  const {
    base,
    input: inputCls,
    left: leftCls,
    right: rightCls
  } = input({
    size: _size,
    color: _color,
    group: isGroup,
    class: className
  });
  const clearAll = () => {
    value = void 0;
  };
  function inputContent($$payload2) {
    if (left) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div${attr("class", leftCls({ class: classLeft }))}>`;
      left($$payload2);
      $$payload2.out += `<!----></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (children) {
      $$payload2.out += "<!--[-->";
      children($$payload2, { ...restProps, class: inputCls() });
      $$payload2.out += `<!---->`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<input${spread_attributes({
        ...restProps,
        value,
        class: inputCls({ class: className })
      })}>`;
    }
    $$payload2.out += `<!--]--> `;
    if (right) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div${attr("class", rightCls({ class: classRight }))}>`;
      right($$payload2);
      $$payload2.out += `<!----></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (clearable && value && `${value}`.length > 0) {
      $$payload2.out += "<!--[-->";
      CloseButton($$payload2, {
        size,
        onclick: clearAll,
        class: rightCls({ class: classRight })
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
  }
  if (group) {
    $$payload.out += "<!--[-->";
    inputContent($$payload);
  } else {
    $$payload.out += "<!--[!-->";
    if (right || left) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr("class", base({ class: divClass }))}>`;
      inputContent($$payload);
      $$payload.out += `<!----></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      inputContent($$payload);
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { value });
  pop();
}
function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
export {
  Input as I,
  clampSize as c
};
