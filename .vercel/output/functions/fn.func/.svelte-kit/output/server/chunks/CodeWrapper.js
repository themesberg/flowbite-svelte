import { W as attr, S as pop, Q as push } from "./index.js";
import { d as codewrapper } from "./H1.js";
function CodeWrapper($$payload, $$props) {
  push();
  let {
    children,
    codeblock,
    innerClass,
    class: classname
  } = $$props;
  const { base, inner } = codewrapper();
  $$payload.out += `<div${attr("class", base({ class: classname }))}>`;
  if (children) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("class", inner({ class: innerClass }))}>`;
    children($$payload);
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (codeblock) {
    $$payload.out += "<!--[-->";
    codeblock($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
export {
  CodeWrapper as C
};
