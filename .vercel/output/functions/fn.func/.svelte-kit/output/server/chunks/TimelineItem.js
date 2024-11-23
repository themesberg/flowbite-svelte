import { Q as push, R as setContext, a0 as spread_attributes, S as pop, a1 as getContext, W as attr, V as escape_html } from "./index.js";
import { aB as timeline, aC as timelineitem } from "./theme.js";
function Timeline($$payload, $$props) {
  push();
  let {
    children,
    order = "default",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  setContext("order", order);
  const olCls = timeline({ order, className });
  $$payload.out += `<ol${spread_attributes({ ...restProps, class: olCls })}>`;
  children($$payload);
  $$payload.out += `<!----></ol>`;
  pop();
}
function TimelineItem($$payload, $$props) {
  push();
  let {
    children,
    orientationSlot,
    title,
    date,
    svgClass,
    liClass,
    divClass,
    timeClass,
    h3Class,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let order = getContext("order");
  const { li, div, time, h3, svg } = timelineitem({ order });
  $$payload.out += `<li${spread_attributes({
    ...restProps,
    class: li({ class: liClass })
  })}><div${attr("class", div({ class: divClass }))}></div> `;
  if (order !== "default") {
    $$payload.out += "<!--[-->";
    if (orientationSlot && (order === "vertical" || order === "horizontal")) {
      $$payload.out += "<!--[-->";
      orientationSlot($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<svg aria-hidden="true"${attr("class", svg({ class: svgClass }))} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    if (date) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<time${attr("class", time({ class: timeClass }))}>${escape_html(date)}</time>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--> `;
  if (title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h3${attr("class", h3({ class: h3Class }))}>${escape_html(title)}</h3>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (order !== "default") {
    $$payload.out += "<!--[-->";
    if (date) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<time${attr("class", time({ class: timeClass }))}>${escape_html(date)}</time>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  children($$payload);
  $$payload.out += `<!----></li>`;
  pop();
}
export {
  Timeline as T,
  TimelineItem as a
};
