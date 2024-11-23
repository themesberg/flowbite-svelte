import { R as setContext, a5 as element, S as pop, Q as push, a0 as spread_attributes, a1 as getContext } from "./index.js";
import { aS as list } from "./theme.js";
import { twMerge } from "tailwind-merge";
function List($$payload, $$props) {
  push();
  let {
    children,
    tag = "ul",
    isContenteditable = false,
    position = "inside",
    ctxClass,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let contextClass = ctxClass || "";
  setContext("ctxClass", () => contextClass);
  let classList = list({ position, tag, className });
  element(
    $$payload,
    tag,
    () => {
      $$payload.out += `${spread_attributes({
        ...restProps,
        class: classList,
        contenteditable: isContenteditable
      })}`;
    },
    () => {
      children($$payload);
      $$payload.out += `<!---->`;
    }
  );
  pop();
}
function Li($$payload, $$props) {
  push();
  let {
    children,
    icon,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const getCtxClass = getContext("ctxClass");
  let liCls = twMerge(getCtxClass(), icon && "flex items-center", className);
  $$payload.out += `<li${spread_attributes({ ...restProps, class: liCls })}>`;
  children($$payload);
  $$payload.out += `<!----></li>`;
  pop();
}
export {
  List as L,
  Li as a
};
