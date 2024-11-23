import { Q as push, a1 as getContext, a0 as spread_attributes, W as attr, V as escape_html, S as pop, R as setContext, a2 as bind_props, Y as ensure_array_like } from "./index.js";
import { Z as tabs, _ as tabItem, $ as label, a0 as radio } from "./theme.js";
import { w as writable } from "./index2.js";
import { h as html } from "./markdown.js";
import { twMerge } from "tailwind-merge";
import { e as getFilteredFileNames, f as toKebabCase } from "./helpers.js";
function TabItem($$payload, $$props) {
  push();
  let {
    children,
    titleSlot,
    open = false,
    title = "Tab title",
    activeClass,
    inactiveClass,
    class: className,
    disabled,
    tabStyle,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const ctx = getContext("ctx");
  let compoTabStyle = tabStyle ? tabStyle : ctx.tabStyle || "full";
  const { active, inactive } = tabs({ tabStyle: compoTabStyle, hasDivider: true });
  ctx.selected ?? writable();
  const tabId = `tab-${Math.random().toString(36).substring(2)}`;
  const { base, button, content } = tabItem({ open, disabled });
  $$payload.out += `<li${spread_attributes({
    ...restProps,
    class: base({ class: className }),
    role: "presentation"
  })}><button type="button" role="tab"${attr("id", tabId)}${attr("aria-controls", ctx.panelId)}${attr("aria-selected", open)}${attr("disabled", disabled, true)}${attr("class", button({
    class: open ? activeClass ?? active() : inactiveClass ?? inactive()
  }))}>`;
  if (titleSlot) {
    $$payload.out += "<!--[-->";
    titleSlot($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `${escape_html(title)}`;
  }
  $$payload.out += `<!--]--></button> `;
  if (open && children) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("class", content())}><div>`;
    children($$payload);
    $$payload.out += `<!----></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></li>`;
  pop();
}
function Tabs($$payload, $$props) {
  push();
  let {
    children,
    tabStyle = "none",
    ulClass,
    contentClass,
    divider = true,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, content, divider: dividerClass } = tabs({ tabStyle, hasDivider: divider });
  const panelId = `tab-panel-${Math.random().toString(36).substring(2)}`;
  const ctx = {
    get tabStyle() {
      return tabStyle;
    },
    selected: writable(),
    panelId
    // Add panelId to the context
  };
  let dividerBool = ["full", "pill"].includes(tabStyle) ? false : divider;
  setContext("ctx", ctx);
  $$payload.out += `<ul${spread_attributes({
    ...restProps,
    class: base({ class: ulClass })
  })}>`;
  children($$payload);
  $$payload.out += `<!----></ul> `;
  if (dividerBool) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr("class", dividerClass())}></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div${attr("id", panelId)}${attr("class", content({ class: contentClass }))} role="tabpanel"${attr("aria-labelledby", panelId)}></div>`;
  pop();
}
function Label($$payload, $$props) {
  push();
  let {
    children,
    color = "gray",
    show = true,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const base = label({ color, className });
  if (show) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<label${spread_attributes({ ...restProps, class: base })}>`;
    children($$payload);
    $$payload.out += `<!----></label>`;
  } else {
    $$payload.out += "<!--[!-->";
    children($$payload);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Radio($$payload, $$props) {
  push();
  let {
    children,
    aria_describedby,
    labelClass,
    color = "primary",
    group = void 0,
    value = void 0,
    inputClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { input, label: label2 } = radio({ color, tinted: !!getContext("background") });
  Label($$payload, {
    class: label2({ class: labelClass }),
    children: ($$payload2) => {
      $$payload2.out += `<input${spread_attributes({
        type: "radio",
        checked: group === value,
        value,
        "aria-describedby": aria_describedby,
        ...restProps,
        class: input({ class: inputClass })
      })}> `;
      children($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, { group, value });
  pop();
}
function TableProp($$payload, $$props) {
  push();
  let {
    children,
    category = "props",
    tableClass = "w-full text-sm text-left text-gray-500 dark:text-gray-400",
    theadClass = "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",
    thClass = "px-6 py-3",
    divClass = "w-full relative overflow-x-auto shadow-md sm:rounded-lg"
  } = $$props;
  setContext("category", category);
  const headerNames = {
    props: ["Name", "Type", "Default"],
    events: ["Names"]
  };
  let header = headerNames[category];
  $$payload.out += `<div${attr("class", divClass)}><table${attr("class", tableClass)}><thead${attr("class", theadClass)}><tr>`;
  if (category === "props") {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(header);
    $$payload.out += `<!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let column = each_array[$$index];
      $$payload.out += `<th scope="col"${attr("class", thClass)}>${escape_html(column)}</th>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<th scope="col"${attr("class", thClass)}>${escape_html(header)}</th>`;
  }
  $$payload.out += `<!--]--></tr></thead><tbody>`;
  children($$payload);
  $$payload.out += `<!----></tbody></table></div>`;
  pop();
}
function TableDefaultRow($$payload, $$props) {
  push();
  let { items, html: html$1, rowState } = $$props;
  const category = getContext("category");
  let trClass = "";
  let trLastClass = "";
  if (rowState === "striped") {
    trClass = "border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700";
    trLastClass = "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700";
  } else if (rowState === "hover") {
    trClass = "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600";
    trLastClass = "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600";
  } else {
    trClass = "bg-white border-b dark:bg-gray-800 dark:border-gray-700";
    trLastClass = "bg-white dark:bg-gray-800";
  }
  if (category === "props") {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(items);
    $$payload.out += `<!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let item = each_array[i];
      if (i === items.length - 1) {
        $$payload.out += "<!--[-->";
        const each_array_1 = ensure_array_like(item);
        $$payload.out += `<tr${attr("class", trLastClass)}><!--[-->`;
        for (let j = 0, $$length2 = each_array_1.length; j < $$length2; j++) {
          let cell = each_array_1[j];
          if (j === 0) {
            $$payload.out += "<!--[-->";
            $$payload.out += `<th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">`;
            if (html$1) {
              $$payload.out += "<!--[-->";
              $$payload.out += `${html(cell)}`;
            } else {
              $$payload.out += "<!--[!-->";
              $$payload.out += `${escape_html(cell)}`;
            }
            $$payload.out += `<!--]--></th>`;
          } else {
            $$payload.out += "<!--[!-->";
            $$payload.out += `<td class="px-6 py-4">`;
            if (html$1) {
              $$payload.out += "<!--[-->";
              $$payload.out += `${html(cell)}`;
            } else {
              $$payload.out += "<!--[!-->";
              $$payload.out += `${escape_html(cell)}`;
            }
            $$payload.out += `<!--]--></td>`;
          }
          $$payload.out += `<!--]-->`;
        }
        $$payload.out += `<!--]--></tr>`;
      } else {
        $$payload.out += "<!--[!-->";
        const each_array_2 = ensure_array_like(item);
        $$payload.out += `<tr${attr("class", trClass)}><!--[-->`;
        for (let j = 0, $$length2 = each_array_2.length; j < $$length2; j++) {
          let cell = each_array_2[j];
          if (j === 0) {
            $$payload.out += "<!--[-->";
            $$payload.out += `<th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">`;
            if (html$1) {
              $$payload.out += "<!--[-->";
              $$payload.out += `${html(cell)}`;
            } else {
              $$payload.out += "<!--[!-->";
              $$payload.out += `${escape_html(cell)}`;
            }
            $$payload.out += `<!--]--></th>`;
          } else {
            $$payload.out += "<!--[!-->";
            $$payload.out += `<td class="px-6 py-4">`;
            if (html$1) {
              $$payload.out += "<!--[-->";
              $$payload.out += `${html(cell)}`;
            } else {
              $$payload.out += "<!--[!-->";
              $$payload.out += `${escape_html(cell)}`;
            }
            $$payload.out += `<!--]--></td>`;
          }
          $$payload.out += `<!--]-->`;
        }
        $$payload.out += `<!--]--></tr>`;
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    const each_array_3 = ensure_array_like(items);
    $$payload.out += `<!--[-->`;
    for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
      let tagName = each_array_3[$$index_3];
      $$payload.out += `<tr${attr("class", trClass)}><td class="px-6 py-4">${escape_html(tagName)}</td></tr>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function ClipboardSolid($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    desc,
    class: className,
    ariaLabel = "clipboard solid",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], className),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function CompoAttributesViewer($$payload, $$props) {
  push();
  let { dirName, components } = $$props;
  let compoData = [];
  getFilteredFileNames(toKebabCase(dirName));
  components ? components.split(", ") : [];
  if (components) {
    components.split(", ");
  }
  if (compoData) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(compoData);
    $$payload.out += `<div id="compoData"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let compo = each_array[$$index];
      $$payload.out += `<h3 class="my-4 text-xl">${escape_html(compo.data.default.name)}</h3> `;
      Tabs($$payload, {
        style: "underline",
        class: "list-none",
        contentClass: "p-0 bg-white",
        children: ($$payload2) => {
          if (compo.data.default.props && compo.data.default.props.length > 0) {
            $$payload2.out += "<!--[-->";
            {
              let titleSlot = function($$payload3) {
                $$payload3.out += `<div class="flex items-center gap-2">`;
                ClipboardSolid($$payload3, { size: "sm" });
                $$payload3.out += `<!----> Props</div>`;
              };
              TabItem($$payload2, {
                open: true,
                titleSlot,
                children: ($$payload3) => {
                  $$payload3.out += `<ul class="w-full">`;
                  TableProp($$payload3, {
                    children: ($$payload4) => {
                      TableDefaultRow($$payload4, {
                        items: compo.data.default.props,
                        rowState: "hover"
                      });
                    },
                    $$slots: { default: true }
                  });
                  $$payload3.out += `<!----></ul>`;
                },
                $$slots: { titleSlot: true, default: true }
              });
            }
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload.out += `<!---->`;
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
export {
  CompoAttributesViewer as C,
  Label as L,
  Radio as R,
  Tabs as T,
  TabItem as a,
  ClipboardSolid as b
};
