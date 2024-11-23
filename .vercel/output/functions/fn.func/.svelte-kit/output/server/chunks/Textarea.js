import { Q as push, W as attr, a0 as spread_attributes, V as escape_html, a2 as bind_props, S as pop } from "./index.js";
import { ac as textarea } from "./theme.js";
function Textarea($$payload, $$props) {
  push();
  let {
    header,
    footer,
    value = void 0,
    divClass,
    innerClass,
    headerClass,
    footerClass,
    disabled,
    class: className,
    cols,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let hasHeader = !!header;
  let hasFooter = !!footer;
  let wrapped = false;
  if (header || footer) {
    wrapped = true;
  } else {
    wrapped = false;
  }
  const {
    base,
    wrapper,
    innerWrapper,
    headerCls,
    footerCls
  } = textarea({ wrapped, hasHeader, hasFooter, cols: !!cols });
  $$payload.out += `<div${attr("class", wrapper({ class: divClass }))}>`;
  if (header) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("class", headerCls({ class: headerClass }))}>`;
    header($$payload);
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div${attr("class", innerWrapper({ class: innerClass }))}><textarea${spread_attributes({
    disabled,
    ...restProps,
    class: base({ className })
  })}>`;
  const $$body = escape_html(value);
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea></div> `;
  if (footer) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("class", footerCls({ class: footerClass }))}>`;
    footer($$payload);
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { value });
  pop();
}
export {
  Textarea as T
};
