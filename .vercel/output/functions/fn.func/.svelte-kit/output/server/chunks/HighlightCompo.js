import { W as attr, S as pop, Q as push, X as stringify } from "./index.js";
import { H as Highlight, b as HighlightSvelte, B as Button, a as Badge, m as markdown } from "./markdown.js";
import "./theme.js";
import { b as replaceLibImport, d as copyToClipboard } from "./helpers.js";
import { b as highlightcompo } from "./H1.js";
function HighlightCompo($$payload, $$props) {
  push();
  let {
    code,
    codeLang,
    badgeClass,
    buttonClass,
    replaceLib = true,
    class: className
  } = $$props;
  if (replaceLib) {
    code = replaceLibImport(code);
  }
  const { base, badge, button } = highlightcompo();
  let copiedStatus = false;
  function handleCopyClick() {
    copyToClipboard(code).then(() => {
      copiedStatus = true;
      setTimeout(
        () => {
          copiedStatus = false;
        },
        1e3
      );
    }).catch((err) => {
      console.error("Error in copying:", err);
    });
  }
  $$payload.out += `<div${attr("class", base({ className }))}><div class="relative"><div${attr("class", `overflow-hidden ${stringify("")} ${stringify(["max-h-72"].filter(Boolean).join(" "))}`)} tabindex="-1">`;
  if (copiedStatus) {
    $$payload.out += "<!--[-->";
    Badge($$payload, {
      class: badge({ class: badgeClass }),
      color: "green",
      children: ($$payload2) => {
        $$payload2.out += `<!---->Copied to clipboard`;
      },
      $$slots: { default: true }
    });
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (codeLang === "md") {
    $$payload.out += "<!--[-->";
    Highlight($$payload, { language: markdown, code });
  } else {
    $$payload.out += "<!--[!-->";
    if (code) {
      $$payload.out += "<!--[-->";
      HighlightSvelte($$payload, { code });
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `no code is provided`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div> `;
  Button($$payload, {
    class: button({ class: buttonClass }),
    onclick: handleCopyClick,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Copy`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
export {
  HighlightCompo as H
};
