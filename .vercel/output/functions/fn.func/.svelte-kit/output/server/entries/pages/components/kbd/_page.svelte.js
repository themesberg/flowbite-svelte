import { Q as push, a0 as spread_attributes, S as pop, a1 as getContext, W as attr, V as escape_html, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like } from "../../../../chunks/index.js";
import { H as kbd } from "../../../../chunks/theme.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { twMerge } from "tailwind-merge";
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from "../../../../chunks/TableHead.js";
import { I as Input } from "../../../../chunks/index5.js";
function Kbd($$payload, $$props) {
  push();
  let {
    children,
    class: kbdClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const kbdCls = kbd();
  $$payload.out += `<kbd${spread_attributes({
    ...restProps,
    class: twMerge(kbdCls, kbdClass)
  })}>`;
  children($$payload);
  $$payload.out += `<!----></kbd>`;
  pop();
}
function CaretDownSolid($$payload, $$props) {
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
    ariaLabel = "caret down solid",
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
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function CaretLeftSolid($$payload, $$props) {
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
    ariaLabel = "caret left solid",
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
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M13.729 5.575c1.304-1.074 3.27-.146 3.27 1.544v9.762c0 1.69-1.966 2.618-3.27 1.544l-5.927-4.881a2 2 0 0 1 0-3.088l5.927-4.88Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function CaretRightSolid($$payload, $$props) {
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
    ariaLabel = "caret right solid",
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
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function CaretUpSolid($$payload, $$props) {
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
    ariaLabel = "caret up solid",
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
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Kbd } from "$lib";\n  import { CaretDownSolid, CaretLeftSolid, CaretRightSolid, CaretUpSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="flex flex-wrap justify-center">\n  <Kbd class="me-1 inline-flex items-center px-2 py-1.5">\n    <CaretUpSolid size="xs" />\n    <span class="sr-only">Arrow key up</span>\n  </Kbd>\n  <Kbd class="me-1 inline-flex items-center px-2 py-1.5">\n    <CaretDownSolid size="xs" />\n    <span class="sr-only">Arrow key down</span>\n  </Kbd>\n  <Kbd class="me-1 inline-flex items-center px-2 py-1.5">\n    <CaretLeftSolid size="xs" />\n    <span class="sr-only">Arrow key left</span>\n  </Kbd>\n  <Kbd class="me-1 inline-flex items-center px-2 py-1.5">\n    <CaretRightSolid size="xs" />\n    <span class="sr-only">Arrow key right</span>\n  </Kbd>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Kbd } from "$lib";\n<\/script>\n\n<div class="flex flex-wrap justify-center gap-1">\n  <Kbd class="px-2 py-1.5">Shift</Kbd>\n  <Kbd class="px-2 py-1.5">Ctrl</Kbd>\n  <Kbd class="px-2 py-1.5">Tab</Kbd>\n  <Kbd class="px-2 py-1.5">Caps Lock</Kbd>\n  <Kbd class="px-2 py-1.5">Esc</Kbd>\n  <Kbd class="px-4 py-1.5">Spacebar</Kbd>\n  <Kbd class="px-2 py-1.5">Enter</Kbd>\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Kbd } from "$lib";\n  import { CaretDownSolid, CaretUpSolid, CaretLeftSolid, CaretRightSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<Table>\n  <TableHead>\n    <TableHeadCell>Key</TableHeadCell>\n    <TableHeadCell>Description</TableHeadCell>\n  </TableHead>\n  <TableBody class="divide-y">\n    <TableBodyRow>\n      <TableBodyCell>\n        <Kbd class="px-2 py-1.5">Shift</Kbd> or <Kbd class="px-2 py-1.5">Tab</Kbd>\n      </TableBodyCell>\n      <TableBodyCell>Navigate to interactive elements</TableBodyCell>\n    </TableBodyRow>\n    <TableBodyRow>\n      <TableBodyCell>\n        <Kbd class="px-2 py-1.5">Enter</Kbd> or <Kbd class="px-4 py-1.5">Space bar</Kbd>\n      </TableBodyCell>\n      <TableBodyCell>Ensure elements with ARIA role="button" can be activated with both key commands.</TableBodyCell>\n    </TableBodyRow>\n    <TableBodyRow>\n      <TableBodyCell>\n        <Kbd class="me-1 inline-flex items-center px-2 py-1.5">\n          <CaretUpSolid size="xs" />\n          <span class="sr-only">Arrow key up</span>\n        </Kbd>\n        <Kbd class="me-1 inline-flex items-center px-2 py-1.5">\n          <CaretDownSolid size="xs" />\n          <span class="sr-only">Arrow key down</span>\n        </Kbd> or\n        <Kbd class="me-1 inline-flex items-center px-2 py-1.5">\n          <CaretLeftSolid size="xs" />\n          <span class="sr-only">Arrow key left</span>\n        </Kbd>\n        <Kbd class="me-1 inline-flex items-center px-2 py-1.5">\n          <CaretRightSolid size="xs" />\n          <span class="sr-only">Arrow key right</span>\n        </Kbd>\n      </TableBodyCell>\n      <TableBodyCell>Choose and activate previous/next tab.</TableBodyCell>\n    </TableBodyRow>\n  </TableBody>\n</Table>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Kbd } from "$lib";\n<\/script>\n\n<div class="flex flex-wrap justify-center">\n  <p class="text-gray-500 dark:text-gray-400">\n    Please press <Kbd class="px-2 py-1.5">Ctrl</Kbd> + <Kbd class="px-2 py-1.5">Shift</Kbd> + <Kbd class="px-2 py-1.5">R</Kbd> to re-render an MDN page.\n  </p>\n</div>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Kbd, Input } from "$lib";\n  let letter = $state("");\n<\/script>\n\n<div class="space-y-4">\n  <Kbd class="px-2 py-1.5">{letter === "" ? "Type a letter" : letter}</Kbd>\n  <Input bind:value={letter} placeholder="Type a letter" />\n</div>\n';
function ArrowKeys($$payload) {
  $$payload.out += `<div class="flex flex-wrap justify-center">`;
  Kbd($$payload, {
    class: "me-1 inline-flex items-center px-2 py-1.5",
    children: ($$payload2) => {
      CaretUpSolid($$payload2, { size: "xs" });
      $$payload2.out += `<!----> <span class="sr-only">Arrow key up</span>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Kbd($$payload, {
    class: "me-1 inline-flex items-center px-2 py-1.5",
    children: ($$payload2) => {
      CaretDownSolid($$payload2, { size: "xs" });
      $$payload2.out += `<!----> <span class="sr-only">Arrow key down</span>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Kbd($$payload, {
    class: "me-1 inline-flex items-center px-2 py-1.5",
    children: ($$payload2) => {
      CaretLeftSolid($$payload2, { size: "xs" });
      $$payload2.out += `<!----> <span class="sr-only">Arrow key left</span>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Kbd($$payload, {
    class: "me-1 inline-flex items-center px-2 py-1.5",
    children: ($$payload2) => {
      CaretRightSolid($$payload2, { size: "xs" });
      $$payload2.out += `<!----> <span class="sr-only">Arrow key right</span>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function Default($$payload) {
  $$payload.out += `<div class="flex flex-wrap justify-center gap-1">`;
  Kbd($$payload, {
    class: "px-2 py-1.5",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Shift`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Kbd($$payload, {
    class: "px-2 py-1.5",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Ctrl`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Kbd($$payload, {
    class: "px-2 py-1.5",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Tab`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Kbd($$payload, {
    class: "px-2 py-1.5",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Caps Lock`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Kbd($$payload, {
    class: "px-2 py-1.5",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Esc`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Kbd($$payload, {
    class: "px-4 py-1.5",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Spacebar`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Kbd($$payload, {
    class: "px-2 py-1.5",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Enter`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function InsideTable($$payload) {
  Table($$payload, {
    children: ($$payload2) => {
      TableHead($$payload2, {
        children: ($$payload3) => {
          TableHeadCell($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Key`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableHeadCell($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Description`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      TableBody($$payload2, {
        class: "divide-y",
        children: ($$payload3) => {
          TableBodyRow($$payload3, {
            children: ($$payload4) => {
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  Kbd($$payload5, {
                    class: "px-2 py-1.5",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Shift`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> or `;
                  Kbd($$payload5, {
                    class: "px-2 py-1.5",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Tab`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Navigate to interactive elements`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableBodyRow($$payload3, {
            children: ($$payload4) => {
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  Kbd($$payload5, {
                    class: "px-2 py-1.5",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Enter`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> or `;
                  Kbd($$payload5, {
                    class: "px-4 py-1.5",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Space bar`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Ensure elements with ARIA role="button" can be activated with both key commands.`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableBodyRow($$payload3, {
            children: ($$payload4) => {
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  Kbd($$payload5, {
                    class: "me-1 inline-flex items-center px-2 py-1.5",
                    children: ($$payload6) => {
                      CaretUpSolid($$payload6, { size: "xs" });
                      $$payload6.out += `<!----> <span class="sr-only">Arrow key up</span>`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> `;
                  Kbd($$payload5, {
                    class: "me-1 inline-flex items-center px-2 py-1.5",
                    children: ($$payload6) => {
                      CaretDownSolid($$payload6, { size: "xs" });
                      $$payload6.out += `<!----> <span class="sr-only">Arrow key down</span>`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> or `;
                  Kbd($$payload5, {
                    class: "me-1 inline-flex items-center px-2 py-1.5",
                    children: ($$payload6) => {
                      CaretLeftSolid($$payload6, { size: "xs" });
                      $$payload6.out += `<!----> <span class="sr-only">Arrow key left</span>`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> `;
                  Kbd($$payload5, {
                    class: "me-1 inline-flex items-center px-2 py-1.5",
                    children: ($$payload6) => {
                      CaretRightSolid($$payload6, { size: "xs" });
                      $$payload6.out += `<!----> <span class="sr-only">Arrow key right</span>`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Choose and activate previous/next tab.`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function InsideText($$payload) {
  $$payload.out += `<div class="flex flex-wrap justify-center"><p class="text-gray-500 dark:text-gray-400">Please press `;
  Kbd($$payload, {
    class: "px-2 py-1.5",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Ctrl`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> + `;
  Kbd($$payload, {
    class: "px-2 py-1.5",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Shift`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> + `;
  Kbd($$payload, {
    class: "px-2 py-1.5",
    children: ($$payload2) => {
      $$payload2.out += `<!---->R`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> to re-render an MDN page.</p></div>`;
}
function LetterKeys($$payload) {
  let letter = "";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="space-y-4">`;
    Kbd($$payload2, {
      class: "px-2 py-1.5",
      children: ($$payload3) => {
        $$payload3.out += `<!---->${escape_html(letter === "" ? "Type a letter" : letter)}`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Input($$payload2, {
      get value() {
        return letter;
      },
      set value($$value) {
        letter = $$value;
        $$settled = false;
      },
      placeholder: "Type a letter"
    });
    $$payload2.out += `<!----></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}
function _page($$payload, $$props) {
  push();
  const dirName = "kbd";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/ArrowKeys.svelte": __vite_glob_0_0,
    "./examples/Default.svelte": __vite_glob_0_1,
    "./examples/InsideTable.svelte": __vite_glob_0_2,
    "./examples/InsideText.svelte": __vite_glob_0_3,
    "./examples/LetterKeys.svelte": __vite_glob_0_4
  });
  const exampleArr = [
    {
      name: "Default",
      component: Default
    },
    {
      name: "Letter keys",
      component: LetterKeys
    },
    {
      name: "Inside text",
      component: InsideText
    },
    {
      name: "Inside table",
      component: InsideTable
    },
    {
      name: "Arrow keys",
      component: ArrowKeys
    }
  ];
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  let exampleExpand = false;
  let showExpandButton = isSvelteOverflow(svelteCode, exampleModules);
  const handleExpandClick = () => {
    exampleExpand = !exampleExpand;
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    H1($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->KBD (Keyboard)`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        DynamicCodeBlockHighlight($$payload3, {
          replaceLib: true,
          handleExpandClick,
          expand: exampleExpand,
          showExpandButton,
          code: exampleModules[`./examples/${svelteCode}`]
        });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          const each_array = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-12 flex flex-wrap">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Example`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let style = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-32 my-1",
              onclick: () => exampleExpand = false,
              name: "block_style",
              get group() {
                return selectedExample;
              },
              set group($$value) {
                selectedExample = $$value;
                $$settled = false;
              },
              value: style.name,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(style.name)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <!---->`;
          SelectedComponent($$payload3, {});
          $$payload3.out += `<!---->`;
        },
        $$slots: { codeblock: true, default: true }
      });
    }
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Component data`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    CompoAttributesViewer($$payload2, { dirName });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
