import { Q as push, W as attr, X as stringify, V as escape_html, S as pop } from "./index.js";
import { H as Highlight, m as markdown, b as HighlightSvelte, B as Button, a as Badge } from "./markdown.js";
import "./theme.js";
import { b as replaceLibImport, d as copyToClipboard } from "./helpers.js";
import { b as highlightcompo } from "./H1.js";
function DynamicCodeBlockHighlight($$payload, $$props) {
  push();
  let {
    code,
    handleExpandClick,
    showExpandButton,
    expand,
    codeLang,
    badgeClass,
    buttonClass,
    replaceLib,
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
  $$payload.out += `<div${attr("class", base({ className }))}><div class="relative"><div${attr("class", `overflow-hidden ${stringify(showExpandButton ? "pb-8" : "")} ${stringify([!expand ? "max-h-56" : ""].filter(Boolean).join(" "))}`)} tabindex="-1">`;
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
  if (showExpandButton) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button type="button" class="absolute bottom-0 start-0 w-full border-t border-gray-200 bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">${escape_html(expand ? "Collapse code" : "Expand code")}</button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
export {
  DynamicCodeBlockHighlight as D
};
