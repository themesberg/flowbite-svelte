import { Q as push, a0 as spread_attributes, W as attr, a2 as bind_props, S as pop, a1 as getContext, a5 as element, X as stringify, V as escape_html, Y as ensure_array_like, a7 as add_styles, _ as spread_props } from "./index.js";
import { a as fade } from "./index3.js";
import { e as badge, k as button } from "./theme.js";
import { C as CloseButton } from "./CloseButton.js";
import hljs from "highlight.js/lib/core";
import xml from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import register from "highlight.js/lib/languages/markdown";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function Badge($$payload, $$props) {
  push();
  let {
    children,
    icon,
    badgeStatus = true,
    color = "primary",
    large = false,
    dismissable = false,
    class: className,
    border,
    href,
    target,
    rounded,
    transition = fade,
    params,
    aClass,
    onclick,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, hrefClass } = badge({
    color,
    size: large ? "large" : "small",
    border,
    rounded
  });
  if (badgeStatus) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes({
      ...restProps,
      class: base({ className })
    })}>`;
    if (href) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<a${attr("href", href)}${attr("target", target)}${attr("class", hrefClass({ class: aClass }))}>`;
      children($$payload);
      $$payload.out += `<!----></a>`;
    } else {
      $$payload.out += "<!--[!-->";
      children($$payload);
      $$payload.out += `<!---->`;
    }
    $$payload.out += `<!--]--> `;
    if (dismissable) {
      $$payload.out += "<!--[-->";
      if (icon) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<button type="button" class="m-0.5 -me-1.5 ms-1.5 whitespace-normal rounded p-0.5 text-primary-500 hover:bg-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-400 dark:hover:bg-primary-800 dark:hover:text-primary-300" aria-label="Remove badge"><span class="sr-only">Remove badge</span> `;
        icon($$payload);
        $$payload.out += `<!----></button>`;
      } else {
        $$payload.out += "<!--[!-->";
        if (onclick) {
          $$payload.out += "<!--[-->";
          CloseButton($$payload, {
            class: "-me-1.5 ms-1.5",
            color,
            size: large ? "sm" : "xs",
            ariaLabel: "Remove badge",
            onclick
          });
        } else {
          $$payload.out += "<!--[!-->";
          CloseButton($$payload, {
            class: "-me-1.5 ms-1.5",
            color,
            size: large ? "sm" : "xs",
            ariaLabel: "Remove badge",
            onclick: () => {
              badgeStatus = false;
            }
          });
        }
        $$payload.out += `<!--]-->`;
      }
      $$payload.out += `<!--]-->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { badgeStatus });
  pop();
}
function Button($$payload, $$props) {
  push();
  const group = getContext("group");
  let {
    children,
    pill = false,
    outline = false,
    size = group ? "sm" : "md",
    href,
    type = "button",
    color = group ? outline ? "dark" : "alternative" : "primary",
    shadow = false,
    tag = "button",
    disabled,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const base = button({
    color,
    size,
    disabled,
    pill,
    group: !!group,
    outline,
    shadow,
    className
  });
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({
      href,
      ...restProps,
      class: base,
      role: "button"
    })}>`;
    children($$payload);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (tag === "button") {
      $$payload.out += "<!--[-->";
      $$payload.out += `<button${spread_attributes({ type, ...restProps, class: base, disabled })}>`;
      children($$payload);
      $$payload.out += `<!----></button>`;
    } else {
      $$payload.out += "<!--[!-->";
      element(
        $$payload,
        tag,
        () => {
          $$payload.out += `${spread_attributes({ ...restProps, class: base })}`;
        },
        () => {
          children($$payload);
          $$payload.out += `<!---->`;
        }
      );
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function LangTag($$payload, $$props) {
  let {
    code,
    highlighted,
    languageName = "plaintext",
    langtag = false,
    preClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<pre${spread_attributes(
    {
      class: `${stringify(preClass)} ${stringify(langtag ? "langtag" : "")}`,
      "data-language": languageName,
      ...restProps
    },
    { "svelte-1w9vok": true }
  )}><code${attr("class", ["hljs"].filter(Boolean).join(" "))}>`;
  if (highlighted) {
    $$payload.out += "<!--[-->";
    $$payload.out += `${html(highlighted)}`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html(code)}`;
  }
  $$payload.out += `<!--]--></code></pre>`;
}
function Highlight($$payload, $$props) {
  push();
  let {
    numberLine,
    language,
    code = "",
    langtag = false,
    hideBorder,
    wrapLines,
    startingLineNumber = 1,
    highlightedLines = [],
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const DIGIT_WIDTH = 12;
  const MIN_DIGITS = 2;
  const HIGHLIGHTED_BACKGROUND = "rgba(254, 241, 96, 0.2)";
  hljs.registerLanguage(language.name, language.register);
  let highlighted = hljs.highlight(code, { language: language.name }).value;
  let lines = highlighted.split("\n");
  let len_digits = lines.length.toString().length;
  let len = len_digits - MIN_DIGITS < 1 ? MIN_DIGITS : len_digits;
  let width = len * DIGIT_WIDTH;
  if (numberLine) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(lines);
    $$payload.out += `<div${spread_attributes({ ...restProps }, void 0, { "overflow-x": "auto" })}><table><tbody${attr("class", ["hljs"].filter(Boolean).join(" "))}><!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let line = each_array[i];
      const lineNumber = i + startingLineNumber;
      $$payload.out += `<tr><td${add_styles({
        position: "sticky",
        left: "0",
        "text-align": "right",
        "user-select": "none",
        width: width + "px"
      })}${attr("class", [
        "hljs",
        hideBorder ? "hideBorder" : ""
      ].filter(Boolean).join(" "))}><code${add_styles({
        color: "var(--line-number-color, currentColor)"
      })}>${escape_html(lineNumber)}</code> `;
      if (highlightedLines.includes(i)) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div${add_styles({
          background: `var(--highlighted-background, ${stringify(HIGHLIGHTED_BACKGROUND)})`
        })}${attr("class", ["line-background"].filter(Boolean).join(" "))}></div>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></td><td><pre${attr("class", [wrapLines ? "wrapLines" : ""].filter(Boolean).join(" "))}><code>${html(line || "\n")}</code></pre> `;
      if (highlightedLines.includes(i)) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div${add_styles({
          background: `var(--highlighted-background, ${stringify(HIGHLIGHTED_BACKGROUND)})`
        })}${attr("class", ["line-background"].filter(Boolean).join(" "))}></div>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></td></tr>`;
    }
    $$payload.out += `<!--]--></tbody></table></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    LangTag($$payload, spread_props([
      restProps,
      {
        languageName: language.name,
        langtag,
        highlighted,
        code
      }
    ]));
  }
  $$payload.out += `<!--]--> `;
  if (numberLine) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<style>
    pre {
      margin: 0;
    }

    table,
    tr,
    td {
      padding: 0;
      border: 0;
      margin: 0;
      vertical-align: baseline;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
    }

    tr:first-of-type td {
      padding-top: 1em;
    }

    tr:last-child td {
      padding-bottom: 1em;
    }

    tr td:first-of-type {
      z-index: 2;
    }

    td {
      padding-left: var(--padding-left, 1em);
      padding-right: var(--padding-right, 1em);
    }

    td.hljs:not(.hideBorder):after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 100%;
      background: var(--border-color, currentColor);
    }

    .wrapLines {
      white-space: pre-wrap;
    }

    td,
    td > code,
    pre {
      position: relative;
    }

    td > code,
    pre {
      z-index: 1;
    }

    .line-background {
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    tr:first-of-type td .line-background,
    tr:last-of-type td .line-background {
      height: calc(100% - 1em);
    }

    tr:first-of-type td .line-background {
      top: 1em;
    }

    tr:last-of-type td .line-background {
      bottom: 1em;
    }
  </style>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function HighlightSvelte($$payload, $$props) {
  push();
  let {
    code = "",
    langtag = false,
    preClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  hljs.registerLanguage("xml", xml);
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("css", css);
  let highlighted = hljs.highlightAuto(code).value;
  LangTag($$payload, spread_props([
    { preClass },
    restProps,
    {
      languageName: "svelte",
      langtag,
      highlighted,
      code
    }
  ]));
  pop();
}
const markdown = { name: "markdown", register };
export {
  Button as B,
  Highlight as H,
  Badge as a,
  HighlightSvelte as b,
  html as h,
  markdown as m
};
