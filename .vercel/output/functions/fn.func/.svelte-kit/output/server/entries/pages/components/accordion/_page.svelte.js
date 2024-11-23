import { Q as push, R as setContext, a0 as spread_attributes, S as pop, a1 as getContext, W as attr, a2 as bind_props, V as escape_html, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like } from "../../../../chunks/index.js";
import { a as accordion, b as accordionitem } from "../../../../chunks/theme.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { twMerge } from "tailwind-merge";
import { s as slide, f as fly, a as fade } from "../../../../chunks/index3.js";
import { w as writable } from "../../../../chunks/index2.js";
import { C as ChevronDoubleUpOutline, a as ChevronDoubleDownOutline } from "../../../../chunks/ChevronDoubleUpOutline.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { q as quintOut } from "../../../../chunks/index4.js";
function Accordion($$payload, $$props) {
  push();
  let {
    children,
    flush,
    activeClass,
    inactiveClass,
    isSingle = true,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const ctx = { flush, activeClass, inactiveClass, isSingle };
  setContext("ctx", ctx);
  const base = accordion({ flush, className });
  $$payload.out += `<div${spread_attributes({ ...restProps, class: base })}>`;
  children($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
function AccordionItem($$payload, $$props) {
  push();
  let {
    children,
    header,
    arrowup,
    arrowdown,
    open = false,
    activeClass,
    inactiveClass,
    transition = slide,
    params,
    class: className
  } = $$props;
  const ctx = getContext("ctx") ?? {};
  if (!ctx.selected) {
    ctx.selected = writable();
  }
  const self = {};
  const selected = ctx.isSingle ? ctx.selected : writable();
  if (open) selected.set(self);
  selected.subscribe((x) => open = x === self);
  const { base, button, content, active, inactive } = accordionitem({ flush: ctx.flush, open });
  let buttonClass = twMerge(button(), open && !ctx.flush && (activeClass || ctx.activeClass || active()), !open && !ctx.flush && (inactiveClass || ctx.inactiveClass || inactive()), className);
  $$payload.out += `<h2${attr("class", base())}><button type="button"${attr("class", buttonClass)}${attr("aria-expanded", open)}>`;
  if (header) {
    $$payload.out += "<!--[-->";
    header($$payload);
    $$payload.out += `<!----> `;
    if (open) {
      $$payload.out += "<!--[-->";
      if (!arrowup) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<svg class="h-3 w-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"></path></svg>`;
      } else {
        $$payload.out += "<!--[!-->";
        arrowup($$payload);
        $$payload.out += `<!---->`;
      }
      $$payload.out += `<!--]-->`;
    } else {
      $$payload.out += "<!--[!-->";
      if (!arrowdown) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<svg class="h-3 w-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg>`;
      } else {
        $$payload.out += "<!--[!-->";
        arrowdown($$payload);
        $$payload.out += `<!---->`;
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></button></h2> `;
  if (open) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div><div${attr("class", content())}>`;
    children($$payload);
    $$payload.out += `<!----></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { open });
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Accordion, AccordionItem } from "$lib";\n  import { ChevronDoubleUpOutline, ChevronDoubleDownOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<Accordion>\n  <AccordionItem>\n    {#snippet header()}\n      Header 2-1\n    {/snippet}\n    {#snippet arrowup()}\n      <ChevronDoubleUpOutline class="-me-0.5 h-6 w-6" />\n    {/snippet}\n    {#snippet arrowdown()}\n      <ChevronDoubleDownOutline class="-me-0.5 h-6 w-6" />\n    {/snippet}\n    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>\n  </AccordionItem>\n  <AccordionItem>\n    {#snippet header()}\n      Header 2-2\n    {/snippet}\n    {#snippet arrowup()}\n      <ChevronDoubleUpOutline class="-me-0.5 h-6 w-6" />\n    {/snippet}\n    {#snippet arrowdown()}\n      <ChevronDoubleDownOutline class="-me-0.5 h-6 w-6" />\n    {/snippet}\n    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>\n  </AccordionItem>\n</Accordion>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Accordion, AccordionItem } from "$lib";\n<\/script>\n\n<Accordion activeClass="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800" inactiveClass="text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800">\n  <AccordionItem class="">\n    {#snippet header()}\n      Header 2-1\n    {/snippet}\n    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>\n  </AccordionItem>\n  <AccordionItem>\n    {#snippet header()}\n      Header 2-2\n    {/snippet}\n    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>\n  </AccordionItem>\n</Accordion>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Accordion, AccordionItem } from "$lib";\n<\/script>\n\n<Accordion>\n  <AccordionItem>\n    {#snippet header()}\n      Header 1-1\n    {/snippet}\n    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>\n  </AccordionItem>\n  <AccordionItem>\n    {#snippet header()}\n      Header 1-2\n    {/snippet}\n    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>\n  </AccordionItem>\n</Accordion>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Accordion, AccordionItem } from "$lib";\n<\/script>\n\n<Accordion flush>\n  <AccordionItem>\n    {#snippet header()}\n      Header 2-1\n    {/snippet}\n    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>\n  </AccordionItem>\n  <AccordionItem>\n    {#snippet header()}\n      Header 2-2\n    {/snippet}\n    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>\n  </AccordionItem>\n</Accordion>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Accordion, AccordionItem } from "$lib";\n  import { CartSolid, CogOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<Accordion>\n  <AccordionItem>\n    {#snippet header()}\n      <span class="flex gap-2 text-base">\n        <CartSolid class="mt-0.5" />\n        <span>My Header 1</span>\n      </span>\n    {/snippet}\n    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo...</p>\n  </AccordionItem>\n  <AccordionItem>\n    {#snippet header()}\n      <span class="flex gap-2 text-base">\n        <CogOutline class="mt-0.5" />\n        <span>My Header 2</span>\n      </span>\n    {/snippet}\n    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sintexplicabo...</p>\n  </AccordionItem>\n</Accordion>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { Accordion, AccordionItem, Button } from "$lib";\n  let item0 = $state(false);\n  let item1 = $state(false);\n  let item2 = $state(false);\n  const open_all = () => {\n    item0 = true;\n    item1 = true;\n    item2 = true;\n  };\n  const close_all = () => {\n    item0 = false;\n    item1 = false;\n    item2 = false;\n  };\n<\/script>\n\n<Button onclick={open_all}>Open all</Button>\n<Button onclick={close_all}>Close all</Button>\n<Accordion class="mt-4">\n  <AccordionItem bind:open={item0}>\n    {#snippet header()}\n      My Header 1\n    {/snippet}\n    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet ...</p>\n  </AccordionItem>\n  <AccordionItem bind:open={item1}>\n    {#snippet header()}\n      My Header 2\n    {/snippet}\n    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet...</p>\n  </AccordionItem>\n  <AccordionItem bind:open={item2}>\n    {#snippet header()}\n      My Header 3\n    {/snippet}\n    <p>Something more</p>\n  </AccordionItem>\n</Accordion>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { Accordion, AccordionItem } from "$lib";\n  let nestingOpenStatus: boolean = $state(true);\n<\/script>\n\n<Accordion>\n  <AccordionItem bind:open={nestingOpenStatus}>\n    {#snippet header()}\n      My Header 1\n    {/snippet}\n    <Accordion>\n      <AccordionItem>\n        {#snippet header()}\n          My Header 1\n        {/snippet}\n        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet ...</p>\n      </AccordionItem>\n      <AccordionItem>\n        {#snippet header()}\n          My Header 2\n        {/snippet}\n        <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet...</p>\n        <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400">\n          <li>\n            <a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">Lorem ipsum</a>\n          </li>\n          <li>\n            <a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a>\n          </li>\n        </ul>\n      </AccordionItem>\n    </Accordion>\n  </AccordionItem>\n  <AccordionItem>\n    {#snippet header()}\n      My Header 2\n    {/snippet}\n    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur ...</p>\n  </AccordionItem>\n</Accordion>\n';
const __vite_glob_0_7 = '<script lang="ts">\n  import { Accordion, AccordionItem } from "$lib";\n<\/script>\n\n<Accordion>\n  <AccordionItem open>\n    {#snippet header()}\n      Header 1-1\n    {/snippet}\n    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>\n  </AccordionItem>\n  <AccordionItem>\n    {#snippet header()}\n      Header 1-2\n    {/snippet}\n    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>\n  </AccordionItem>\n</Accordion>\n';
const __vite_glob_0_8 = '<script lang="ts">\n  import { Accordion, AccordionItem } from "$lib";\n<\/script>\n\n<Accordion isSingle={false}>\n  <AccordionItem>\n    {#snippet header()}\n      Header 1-1\n    {/snippet}\n    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>\n  </AccordionItem>\n  <AccordionItem>\n    {#snippet header()}\n      Header 1-2\n    {/snippet}\n    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>\n  </AccordionItem>\n</Accordion>\n';
const __vite_glob_0_9 = '<script lang="ts">\n  import { Accordion, AccordionItem } from "$lib";\n  import { fade, fly } from "svelte/transition";\n  import { quintOut } from "svelte/easing";\n<\/script>\n\n<Accordion>\n  <AccordionItem params={{ duration: 2000 }}>\n    {#snippet header()}\n      slide, duration: 2000\n    {/snippet}\n    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>\n  </AccordionItem>\n  <AccordionItem transition={fly} params={{ delay: 250, duration: 300, x: 100, y: 500, opacity: 0.5, easing: quintOut }}>\n    {#snippet header()}\n      Fly, delay: 250, duration: 300, x: 100, y: 500, opacity: 0.5, easing: quintOut\n    {/snippet}\n    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>\n  </AccordionItem>\n  <AccordionItem transition={fade} params={{ duration: 1000 }}>\n    {#snippet header()}\n      Fade, duration: 1000\n    {/snippet}\n    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>\n  </AccordionItem>\n</Accordion>\n';
function CartSolid($$payload, $$props) {
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
    ariaLabel = "cart solid",
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
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function CogOutline($$payload, $$props) {
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
    strokeWidth = ctx.strokeWidth || "2",
    desc,
    class: className,
    ariaLabel = "cog outline",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      color,
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path></svg>`;
  pop();
}
function Default($$payload) {
  Accordion($$payload, {
    children: ($$payload2) => {
      {
        let header = function($$payload3) {
          $$payload3.out += `<!---->Header 1-1`;
        };
        AccordionItem($$payload2, {
          header,
          children: ($$payload3) => {
            $$payload3.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`;
          },
          $$slots: { header: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let header = function($$payload3) {
          $$payload3.out += `<!---->Header 1-2`;
        };
        AccordionItem($$payload2, {
          header,
          children: ($$payload3) => {
            $$payload3.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`;
          },
          $$slots: { header: true, default: true }
        });
      }
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function Color($$payload) {
  Accordion($$payload, {
    activeClass: "bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800",
    inactiveClass: "text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800",
    children: ($$payload2) => {
      {
        let header = function($$payload3) {
          $$payload3.out += `<!---->Header 2-1`;
        };
        AccordionItem($$payload2, {
          class: "",
          header,
          children: ($$payload3) => {
            $$payload3.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`;
          },
          $$slots: { header: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let header = function($$payload3) {
          $$payload3.out += `<!---->Header 2-2`;
        };
        AccordionItem($$payload2, {
          header,
          children: ($$payload3) => {
            $$payload3.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`;
          },
          $$slots: { header: true, default: true }
        });
      }
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function Flush($$payload) {
  Accordion($$payload, {
    flush: true,
    children: ($$payload2) => {
      {
        let header = function($$payload3) {
          $$payload3.out += `<!---->Header 2-1`;
        };
        AccordionItem($$payload2, {
          header,
          children: ($$payload3) => {
            $$payload3.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`;
          },
          $$slots: { header: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let header = function($$payload3) {
          $$payload3.out += `<!---->Header 2-2`;
        };
        AccordionItem($$payload2, {
          header,
          children: ($$payload3) => {
            $$payload3.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`;
          },
          $$slots: { header: true, default: true }
        });
      }
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function ArrowStyle($$payload) {
  Accordion($$payload, {
    children: ($$payload2) => {
      {
        let header = function($$payload3) {
          $$payload3.out += `<!---->Header 2-1`;
        }, arrowup = function($$payload3) {
          ChevronDoubleUpOutline($$payload3, { class: "-me-0.5 h-6 w-6" });
        }, arrowdown = function($$payload3) {
          ChevronDoubleDownOutline($$payload3, { class: "-me-0.5 h-6 w-6" });
        };
        AccordionItem($$payload2, {
          header,
          arrowup,
          arrowdown,
          children: ($$payload3) => {
            $$payload3.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`;
          },
          $$slots: {
            header: true,
            arrowup: true,
            arrowdown: true,
            default: true
          }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let header = function($$payload3) {
          $$payload3.out += `<!---->Header 2-2`;
        }, arrowup = function($$payload3) {
          ChevronDoubleUpOutline($$payload3, { class: "-me-0.5 h-6 w-6" });
        }, arrowdown = function($$payload3) {
          ChevronDoubleDownOutline($$payload3, { class: "-me-0.5 h-6 w-6" });
        };
        AccordionItem($$payload2, {
          header,
          arrowup,
          arrowdown,
          children: ($$payload3) => {
            $$payload3.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`;
          },
          $$slots: {
            header: true,
            arrowup: true,
            arrowdown: true,
            default: true
          }
        });
      }
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function Icon($$payload) {
  Accordion($$payload, {
    children: ($$payload2) => {
      {
        let header = function($$payload3) {
          $$payload3.out += `<span class="flex gap-2 text-base">`;
          CartSolid($$payload3, { class: "mt-0.5" });
          $$payload3.out += `<!----> <span>My Header 1</span></span>`;
        };
        AccordionItem($$payload2, {
          header,
          children: ($$payload3) => {
            $$payload3.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo...</p>`;
          },
          $$slots: { header: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let header = function($$payload3) {
          $$payload3.out += `<span class="flex gap-2 text-base">`;
          CogOutline($$payload3, { class: "mt-0.5" });
          $$payload3.out += `<!----> <span>My Header 2</span></span>`;
        };
        AccordionItem($$payload2, {
          header,
          children: ($$payload3) => {
            $$payload3.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sintexplicabo...</p>`;
          },
          $$slots: { header: true, default: true }
        });
      }
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function MultipleMode($$payload) {
  let item0 = false;
  let item1 = false;
  let item2 = false;
  const open_all = () => {
    item0 = true;
    item1 = true;
    item2 = true;
  };
  const close_all = () => {
    item0 = false;
    item1 = false;
    item2 = false;
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Button($$payload2, {
      onclick: open_all,
      children: ($$payload3) => {
        $$payload3.out += `<!---->Open all`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Button($$payload2, {
      onclick: close_all,
      children: ($$payload3) => {
        $$payload3.out += `<!---->Close all`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Accordion($$payload2, {
      class: "mt-4",
      children: ($$payload3) => {
        {
          let header = function($$payload4) {
            $$payload4.out += `<!---->My Header 1`;
          };
          AccordionItem($$payload3, {
            get open() {
              return item0;
            },
            set open($$value) {
              item0 = $$value;
              $$settled = false;
            },
            header,
            children: ($$payload4) => {
              $$payload4.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet ...</p>`;
            },
            $$slots: { header: true, default: true }
          });
        }
        $$payload3.out += `<!----> `;
        {
          let header = function($$payload4) {
            $$payload4.out += `<!---->My Header 2`;
          };
          AccordionItem($$payload3, {
            get open() {
              return item1;
            },
            set open($$value) {
              item1 = $$value;
              $$settled = false;
            },
            header,
            children: ($$payload4) => {
              $$payload4.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet...</p>`;
            },
            $$slots: { header: true, default: true }
          });
        }
        $$payload3.out += `<!----> `;
        {
          let header = function($$payload4) {
            $$payload4.out += `<!---->My Header 3`;
          };
          AccordionItem($$payload3, {
            get open() {
              return item2;
            },
            set open($$value) {
              item2 = $$value;
              $$settled = false;
            },
            header,
            children: ($$payload4) => {
              $$payload4.out += `<p>Something more</p>`;
            },
            $$slots: { header: true, default: true }
          });
        }
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}
function Transitions($$payload) {
  Accordion($$payload, {
    children: ($$payload2) => {
      {
        let header = function($$payload3) {
          $$payload3.out += `<!---->slide, duration: 2000`;
        };
        AccordionItem($$payload2, {
          params: { duration: 2e3 },
          header,
          children: ($$payload3) => {
            $$payload3.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`;
          },
          $$slots: { header: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let header = function($$payload3) {
          $$payload3.out += `<!---->Fly, delay: 250, duration: 300, x: 100, y: 500, opacity: 0.5, easing: quintOut`;
        };
        AccordionItem($$payload2, {
          transition: fly,
          params: {
            delay: 250,
            duration: 300,
            x: 100,
            y: 500,
            opacity: 0.5,
            easing: quintOut
          },
          header,
          children: ($$payload3) => {
            $$payload3.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`;
          },
          $$slots: { header: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let header = function($$payload3) {
          $$payload3.out += `<!---->Fade, duration: 1000`;
        };
        AccordionItem($$payload2, {
          transition: fade,
          params: { duration: 1e3 },
          header,
          children: ($$payload3) => {
            $$payload3.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`;
          },
          $$slots: { header: true, default: true }
        });
      }
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function Nesting($$payload) {
  let nestingOpenStatus = true;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Accordion($$payload2, {
      children: ($$payload3) => {
        {
          let header = function($$payload4) {
            $$payload4.out += `<!---->My Header 1`;
          };
          AccordionItem($$payload3, {
            get open() {
              return nestingOpenStatus;
            },
            set open($$value) {
              nestingOpenStatus = $$value;
              $$settled = false;
            },
            header,
            children: ($$payload4) => {
              Accordion($$payload4, {
                children: ($$payload5) => {
                  {
                    let header2 = function($$payload6) {
                      $$payload6.out += `<!---->My Header 1`;
                    };
                    AccordionItem($$payload5, {
                      header: header2,
                      children: ($$payload6) => {
                        $$payload6.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet ...</p>`;
                      },
                      $$slots: { header: true, default: true }
                    });
                  }
                  $$payload5.out += `<!----> `;
                  {
                    let header2 = function($$payload6) {
                      $$payload6.out += `<!---->My Header 2`;
                    };
                    AccordionItem($$payload5, {
                      header: header2,
                      children: ($$payload6) => {
                        $$payload6.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet...</p> <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400"><li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">Lorem ipsum</a></li> <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a></li></ul>`;
                      },
                      $$slots: { header: true, default: true }
                    });
                  }
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
            },
            $$slots: { header: true, default: true }
          });
        }
        $$payload3.out += `<!----> `;
        {
          let header = function($$payload4) {
            $$payload4.out += `<!---->My Header 2`;
          };
          AccordionItem($$payload3, {
            header,
            children: ($$payload4) => {
              $$payload4.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur ...</p>`;
            },
            $$slots: { header: true, default: true }
          });
        }
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}
function Open($$payload) {
  Accordion($$payload, {
    children: ($$payload2) => {
      {
        let header = function($$payload3) {
          $$payload3.out += `<!---->Header 1-1`;
        };
        AccordionItem($$payload2, {
          open: true,
          header,
          children: ($$payload3) => {
            $$payload3.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`;
          },
          $$slots: { header: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let header = function($$payload3) {
          $$payload3.out += `<!---->Header 1-2`;
        };
        AccordionItem($$payload2, {
          header,
          children: ($$payload3) => {
            $$payload3.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`;
          },
          $$slots: { header: true, default: true }
        });
      }
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function OpenMultiple($$payload) {
  Accordion($$payload, {
    isSingle: false,
    children: ($$payload2) => {
      {
        let header = function($$payload3) {
          $$payload3.out += `<!---->Header 1-1`;
        };
        AccordionItem($$payload2, {
          header,
          children: ($$payload3) => {
            $$payload3.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`;
          },
          $$slots: { header: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let header = function($$payload3) {
          $$payload3.out += `<!---->Header 1-2`;
        };
        AccordionItem($$payload2, {
          header,
          children: ($$payload3) => {
            $$payload3.out += `<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`;
          },
          $$slots: { header: true, default: true }
        });
      }
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function _page($$payload, $$props) {
  push();
  const dirName = "accordion";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/ArrowStyle.svelte": __vite_glob_0_0,
    "./examples/Color.svelte": __vite_glob_0_1,
    "./examples/Default.svelte": __vite_glob_0_2,
    "./examples/Flush.svelte": __vite_glob_0_3,
    "./examples/Icon.svelte": __vite_glob_0_4,
    "./examples/MultipleMode.svelte": __vite_glob_0_5,
    "./examples/Nesting.svelte": __vite_glob_0_6,
    "./examples/Open.svelte": __vite_glob_0_7,
    "./examples/OpenMultiple.svelte": __vite_glob_0_8,
    "./examples/Transitions.svelte": __vite_glob_0_9
  });
  const exampleArr = [
    {
      name: "Default",
      component: Default
    },
    {
      name: "Open",
      component: Open
    },
    {
      name: "Color",
      component: Color
    },
    {
      name: "Flush",
      component: Flush
    },
    {
      name: "Arrow style",
      component: ArrowStyle
    },
    {
      name: "Icon",
      component: Icon
    },
    {
      name: "Multiple mode",
      component: MultipleMode
    },
    {
      name: "Transitions",
      component: Transitions
    },
    {
      name: "Nesting",
      component: Nesting
    },
    {
      name: "Open multiple",
      component: OpenMultiple
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
        $$payload3.out += `<!---->Accordion`;
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
              labelClass: "w-40 my-1",
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
