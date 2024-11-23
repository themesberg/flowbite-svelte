import { Q as push, a0 as spread_attributes, W as attr, S as pop } from "./index.js";
import { ah as textPlaceholder } from "./theme.js";
function TextPlaceholder($$payload, $$props) {
  push();
  let {
    size = "sm",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { baseWrapper, divWrapper, lineA, lineB } = textPlaceholder({ size });
  $$payload.out += `<div${spread_attributes({
    role: "status",
    ...restProps,
    class: baseWrapper({ className })
  })}><div${attr("class", divWrapper({ class: "w-full" }))}><div${attr("class", lineA({ class: "h-2.5 w-32" }))}></div> <div${attr("class", lineB({ class: "h-2.5 w-24" }))}></div> <div${attr("class", lineB({ class: "h-2.5 w-full" }))}></div></div> <div${attr("class", divWrapper({ class: "w-11/12" }))}><div${attr("class", lineA({ class: "h-2.5 w-full" }))}></div> <div${attr("class", lineB({ class: "h-2.5 w-full" }))}></div> <div${attr("class", lineB({ class: "h-2.5 w-24" }))}></div></div> <div${attr("class", divWrapper({ class: "w-9/12" }))}><div${attr("class", lineB({ class: "h-2.5 w-full" }))}></div> <div${attr("class", lineA({ class: "h-2.5 w-80" }))}></div> <div${attr("class", lineB({ class: "h-2.5 w-full" }))}></div></div> <div${attr("class", divWrapper({ class: "w-11/12" }))}><div${attr("class", lineA({ class: "h-2.5 w-full" }))}></div> <div${attr("class", lineB({ class: "h-2.5 w-full" }))}></div> <div${attr("class", lineB({ class: "h-2.5 w-24" }))}></div></div> <div${attr("class", divWrapper({ class: "w-10/12" }))}><div${attr("class", lineB({ class: "h-2.5 w-32" }))}></div> <div${attr("class", lineB({ class: "h-2.5 w-24" }))}></div> <div${attr("class", lineA({ class: "h-2.5 w-full" }))}></div></div> <div${attr("class", divWrapper({ class: "w-8/12" }))}><div${attr("class", lineB({ class: "h-2.5 w-full" }))}></div> <div${attr("class", lineA({ class: "h-2.5 w-80" }))}></div> <div${attr("class", lineB({ class: "h-2.5 w-full" }))}></div></div> <span class="sr-only">Loading...</span></div>`;
  pop();
}
export {
  TextPlaceholder as T
};
