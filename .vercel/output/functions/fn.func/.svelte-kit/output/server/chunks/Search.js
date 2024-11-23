import { Q as push, W as attr, a0 as spread_attributes, a2 as bind_props, S as pop } from "./index.js";
import { ag as search } from "./theme.js";
function Search($$payload, $$props) {
  push();
  let {
    children,
    inputClass,
    size = "md",
    placeholder = "Search",
    value = void 0,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const {
    base,
    content,
    icon,
    input: inputCls,
    leftDiv
  } = search({ size });
  $$payload.out += `<div${attr("class", base())}><div${attr("class", leftDiv())}><svg${attr("class", icon())} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg></div> <input${spread_attributes({
    type: "search",
    value,
    class: inputCls({ class: inputClass }),
    placeholder,
    required: true,
    ...restProps
  })}> `;
  if (children) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("class", content())}>`;
    children($$payload);
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { value });
  pop();
}
export {
  Search as S
};
