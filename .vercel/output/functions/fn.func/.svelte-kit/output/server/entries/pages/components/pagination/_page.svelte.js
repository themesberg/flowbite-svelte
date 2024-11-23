import { Q as push, R as setContext, Y as ensure_array_like, W as attr, a0 as spread_attributes, S as pop, V as escape_html, a1 as getContext, Z as store_get, $ as unsubscribe_stores, a3 as copy_payload, a4 as assign_payload } from "../../../../chunks/index.js";
import { S as pagination, T as paginationItem } from "../../../../chunks/theme.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { p as page } from "../../../../chunks/stores.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { C as ChevronLeftOutline } from "../../../../chunks/ChevronLeftOutline.js";
import { C as ChevronRightOutline } from "../../../../chunks/ChevronRightOutline.js";
import { twMerge } from "tailwind-merge";
import { A as ArrowRightOutline } from "../../../../chunks/ArrowRightOutline.js";
function Pagination($$payload, $$props) {
  push();
  let {
    pages = [],
    previous,
    next,
    prevContent,
    nextContent,
    table,
    size,
    ariaLabel,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  setContext("group", true);
  setContext("table", table);
  setContext("size", size);
  const paginationClass = pagination({ table, size });
  const each_array = ensure_array_like(pages);
  $$payload.out += `<nav${attr("aria-label", ariaLabel)}><ul${attr("class", paginationClass)}>`;
  if (typeof previous === "function") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<li${spread_attributes({ ...restProps })}>`;
    PaginationItem($$payload, {
      size,
      onclick: () => previous(),
      class: table ? "rounded-none rounded-l" : "rounded-none  rounded-s-lg",
      children: ($$payload2) => {
        if (prevContent) {
          $$payload2.out += "<!--[-->";
          prevContent($$payload2);
          $$payload2.out += `<!---->`;
        } else {
          $$payload2.out += "<!--[!-->";
          $$payload2.out += `Previous`;
        }
        $$payload2.out += `<!--]-->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></li>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let { name, href, active, size: size2 } = each_array[$$index];
    $$payload.out += `<li${spread_attributes({ ...restProps })}>`;
    PaginationItem($$payload, {
      size: size2,
      active,
      href,
      children: ($$payload2) => {
        $$payload2.out += `<!---->${escape_html(name)}`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></li>`;
  }
  $$payload.out += `<!--]--> `;
  if (typeof next === "function") {
    $$payload.out += "<!--[-->";
    $$payload.out += `<li${spread_attributes({ ...restProps })}>`;
    PaginationItem($$payload, {
      size,
      onclick: () => next(),
      class: table ? "rounded-none rounded-r" : "rounded-none rounded-e-lg",
      children: ($$payload2) => {
        if (nextContent) {
          $$payload2.out += "<!--[-->";
          nextContent($$payload2);
          $$payload2.out += `<!---->`;
        } else {
          $$payload2.out += "<!--[!-->";
          $$payload2.out += `Next`;
        }
        $$payload2.out += `<!--]-->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></li>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></ul></nav>`;
  pop();
}
function PaginationItem($$payload, $$props) {
  push();
  let {
    children,
    size,
    class: className,
    href,
    active,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const group = getContext("group");
  const table = getContext("table");
  const paginationClass = paginationItem({ size, active, group, table, className });
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({ href, ...restProps, class: paginationClass })}>`;
    if (children) {
      $$payload.out += "<!--[-->";
      children($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${spread_attributes({ ...restProps, class: paginationClass })}>`;
    if (children) {
      $$payload.out += "<!--[-->";
      children($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></button>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function ArrowLeftOutline($$payload, $$props) {
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
    ariaLabel = "arrow left outline",
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="M5 12h14M5 12l4-4m-4 4 4 4"></path></svg>`;
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { page } from "$app/stores";\n  import { Pagination, Button, type PaginationItemProps } from "$lib";\n\n  let activeUrl = $state($page.url.searchParams.get("page"));\n  let pages = $state([\n    { name: "1", href: "/components/pagination?page=1", active: false },\n    { name: "2", href: "/components/pagination?page=2", active: false },\n    { name: "3", href: "/components/pagination?page=3", active: false },\n    { name: "4", href: "/components/pagination?page=4", active: false },\n    { name: "5", href: "/components/pagination?page=5", active: false }\n  ]);\n  const previous = () => {\n    alert("Previous btn clicked. Make a call to your server to fetch data.");\n  };\n  const next = () => {\n    alert("Next btn clicked. Make a call to your server to fetch data.");\n  };\n  let pagenationSize: PaginationItemProps["size"] = $state("default");\n  const changeSize = () => {\n    pagenationSize = pagenationSize === "large" ? "default" : "large";\n  };\n\n  const changeActivePage = () => {\n    pages.forEach((page) => {\n      let splitUrl = page.href?.split("?");\n      let queryString = splitUrl?.slice(1).join("?");\n      const hrefParams = new URLSearchParams(queryString);\n      let hrefValue = hrefParams.get("page");\n      if (hrefValue === activeUrl) {\n        page.active = true;\n      } else {\n        page.active = false;\n      }\n    });\n  };\n  changeActivePage();\n  $effect(() => {\n    changeActivePage();\n  });\n<\/script>\n\n{activeUrl}\n<div class="flex flex-col items-center justify-center gap-3">\n  <div class="h-12">\n    <Pagination {pages} {previous} {next} size={pagenationSize} />\n  </div>\n  <Button onclick={changeSize}>\n    {#if pagenationSize === "default"}\n      Large\n    {:else}\n      Default\n    {/if}\n  </Button>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { page } from "$app/stores";\n  import { Pagination } from "$lib";\n\n  let activeUrl = $state($page.url.searchParams.get("page"));\n  let pages = $state([\n    { name: "1", href: "/components/pagination?page=1", active: false },\n    { name: "2", href: "/components/pagination?page=2", active: false },\n    { name: "3", href: "/components/pagination?page=3", active: false },\n    { name: "4", href: "/components/pagination?page=4", active: false },\n    { name: "5", href: "/components/pagination?page=5", active: false }\n  ]);\n  const previous = () => {\n    alert("Previous btn clicked. Make a call to your server to fetch data.");\n  };\n  const next = () => {\n    alert("Next btn clicked. Make a call to your server to fetch data.");\n  };\n  const handleClick = () => {\n    alert("Page clicked");\n  };\n\n  $effect(() => {\n    pages.forEach((page) => {\n      let splitUrl = page.href.split("?");\n      let queryString = splitUrl.slice(1).join("?");\n      const hrefParams = new URLSearchParams(queryString);\n      let hrefValue = hrefParams.get("page");\n      if (hrefValue === activeUrl) {\n        page.active = true;\n      } else {\n        page.active = false;\n      }\n    });\n    pages = pages;\n  });\n<\/script>\n\n<div class="flex flex-col items-center justify-center gap-3">\n  <Pagination {pages} {previous} {next} onclick={handleClick} />\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Pagination } from "$lib";\n  import { ChevronLeftOutline, ChevronRightOutline } from "flowbite-svelte-icons";\n  let pages = $state([\n    { name: "1", href: "/components/pagination?page=1", active: false },\n    { name: "2", href: "/components/pagination?page=2", active: false },\n    { name: "3", href: "/components/pagination?page=3", active: false },\n    { name: "4", href: "/components/pagination?page=4", active: false },\n    { name: "5", href: "/components/pagination?page=5", active: false }\n  ]);\n  const previous = () => {\n    alert("Previous btn clicked. Make a call to your server to fetch data.");\n  };\n  const next = () => {\n    alert("Next btn clicked. Make a call to your server to fetch data.");\n  };\n<\/script>\n\n<div class="flex flex-col items-center justify-center gap-3">\n  <Pagination {pages} {previous} {next}>\n    {#snippet prevContent()}\n      <span class="sr-only">Previous</span>\n      <ChevronLeftOutline class="h-5 w-5" />\n    {/snippet}\n    {#snippet nextContent()}\n      <span class="sr-only">Next</span>\n      <ChevronRightOutline class="h-5 w-5" />\n    {/snippet}\n  </Pagination>\n</div>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { PaginationItem } from "$lib";\n\n  const previous = () => {\n    alert("Previous btn clicked. Make a call to your server to fetch data.");\n  };\n  const next = () => {\n    alert("Next btn clicked. Make a call to your server to fetch data.");\n  };\n<\/script>\n\n<div class="flex flex-col items-center justify-center gap-3">\n  <div class="flex space-x-3 rtl:space-x-reverse">\n    <PaginationItem onclick={previous}>Previous</PaginationItem>\n    <PaginationItem onclick={next}>Next</PaginationItem>\n  </div>\n</div>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Pagination } from "$lib";\n  import { ArrowLeftOutline, ArrowRightOutline } from "flowbite-svelte-icons";\n  let helper = { start: 1, end: 10, total: 100 };\n  const previous = () => {\n    alert("Previous btn clicked. Make a call to your server to fetch data.");\n  };\n  const next = () => {\n    alert("Next btn clicked. Make a call to your server to fetch data.");\n  };\n<\/script>\n\n<div class="flex flex-col items-center justify-center gap-3">\n  <div class="flex flex-col items-center justify-center gap-2">\n    <div class="text-sm text-gray-700 dark:text-gray-400">\n      Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span>\n      to\n      <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>\n      of\n      <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span>\n      Entries\n    </div>\n\n    <Pagination table {previous} {next}>\n      {#snippet prevContent()}\n        <div class="flex items-center gap-2 bg-gray-800 text-white">\n          <ArrowLeftOutline class="me-2 h-5 w-5" />\n          Prev\n        </div>\n      {/snippet}\n      {#snippet nextContent()}\n        <div class="flex items-center gap-2 bg-gray-800 text-white">\n          Next\n          <ArrowRightOutline class="ms-2 h-5 w-5" />\n        </div>\n      {/snippet}\n    </Pagination>\n  </div>\n</div>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { Pagination } from "$lib";\n\n  const previous = () => {\n    alert("Previous btn clicked. Make a call to your server to fetch data.");\n  };\n  const next = () => {\n    alert("Next btn clicked. Make a call to your server to fetch data.");\n  };\n  let helper = { start: 1, end: 10, total: 100 };\n<\/script>\n\n<div class="flex flex-col items-center justify-center gap-3">\n  <div class="flex flex-col items-center justify-center gap-2">\n    <div class="text-sm text-gray-700 dark:text-gray-400">\n      Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span>\n      to\n      <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>\n      of\n      <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span>\n      Entries\n    </div>\n    <Pagination table {previous} {next} />\n    <Pagination table size="large" {previous} {next} />\n  </div>\n</div>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { Pagination } from "$lib";\n  import { ArrowLeftOutline, ArrowRightOutline } from "flowbite-svelte-icons";\n  const previous = () => {\n    alert("Previous btn clicked. Make a call to your server to fetch data.");\n  };\n  const next = () => {\n    alert("Next btn clicked. Make a call to your server to fetch data.");\n  };\n  let helper = { start: 1, end: 10, total: 100 };\n<\/script>\n\n<div class="flex flex-col items-center justify-center gap-3">\n  <div class="flex flex-col items-center justify-center gap-2">\n    <div class="text-sm text-gray-700 dark:text-gray-400">\n      Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span>\n      to\n      <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>\n      of\n      <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span>\n      Entries\n    </div>\n\n    <Pagination table {previous} {next}>\n      {#snippet prevContent()}\n        <div class="flex items-center gap-2 bg-gray-800 text-white">\n          <ArrowLeftOutline class="me-2 h-5 w-5" />\n          Prev\n        </div>\n      {/snippet}\n      {#snippet nextContent()}\n        <div class="flex items-center gap-2 bg-gray-800 text-white">\n          Next\n          <ArrowRightOutline class="ms-2 h-5 w-5" />\n        </div>\n      {/snippet}\n    </Pagination>\n  </div>\n</div>\n';
function Default($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("page");
  let pages = [
    {
      name: "1",
      href: "/components/pagination?page=1",
      active: false
    },
    {
      name: "2",
      href: "/components/pagination?page=2",
      active: false
    },
    {
      name: "3",
      href: "/components/pagination?page=3",
      active: false
    },
    {
      name: "4",
      href: "/components/pagination?page=4",
      active: false
    },
    {
      name: "5",
      href: "/components/pagination?page=5",
      active: false
    }
  ];
  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
  let pagenationSize = "default";
  const changeSize = () => {
    pagenationSize = pagenationSize === "large" ? "default" : "large";
  };
  const changeActivePage = () => {
    pages.forEach((page2) => {
      let splitUrl = page2.href?.split("?");
      let queryString = splitUrl?.slice(1).join("?");
      const hrefParams = new URLSearchParams(queryString);
      let hrefValue = hrefParams.get("page");
      if (hrefValue === activeUrl) {
        page2.active = true;
      } else {
        page2.active = false;
      }
    });
  };
  changeActivePage();
  $$payload.out += `<!---->${escape_html(activeUrl)} <div class="flex flex-col items-center justify-center gap-3"><div class="h-12">`;
  Pagination($$payload, { pages, previous, next, size: pagenationSize });
  $$payload.out += `<!----></div> `;
  Button($$payload, {
    onclick: changeSize,
    children: ($$payload2) => {
      if (pagenationSize === "default") {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `Large`;
      } else {
        $$payload2.out += "<!--[!-->";
        $$payload2.out += `Default`;
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Event($$payload, $$props) {
  push();
  var $$store_subs;
  store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("page");
  let pages = [
    {
      name: "1",
      href: "/components/pagination?page=1",
      active: false
    },
    {
      name: "2",
      href: "/components/pagination?page=2",
      active: false
    },
    {
      name: "3",
      href: "/components/pagination?page=3",
      active: false
    },
    {
      name: "4",
      href: "/components/pagination?page=4",
      active: false
    },
    {
      name: "5",
      href: "/components/pagination?page=5",
      active: false
    }
  ];
  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
  const handleClick = () => {
    alert("Page clicked");
  };
  $$payload.out += `<div class="flex flex-col items-center justify-center gap-3">`;
  Pagination($$payload, { pages, previous, next, onclick: handleClick });
  $$payload.out += `<!----></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Icons($$payload) {
  let pages = [
    {
      name: "1",
      href: "/components/pagination?page=1",
      active: false
    },
    {
      name: "2",
      href: "/components/pagination?page=2",
      active: false
    },
    {
      name: "3",
      href: "/components/pagination?page=3",
      active: false
    },
    {
      name: "4",
      href: "/components/pagination?page=4",
      active: false
    },
    {
      name: "5",
      href: "/components/pagination?page=5",
      active: false
    }
  ];
  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
  $$payload.out += `<div class="flex flex-col items-center justify-center gap-3">`;
  {
    let prevContent = function($$payload2) {
      $$payload2.out += `<span class="sr-only">Previous</span> `;
      ChevronLeftOutline($$payload2, { class: "h-5 w-5" });
      $$payload2.out += `<!---->`;
    }, nextContent = function($$payload2) {
      $$payload2.out += `<span class="sr-only">Next</span> `;
      ChevronRightOutline($$payload2, { class: "h-5 w-5" });
      $$payload2.out += `<!---->`;
    };
    Pagination($$payload, {
      pages,
      previous,
      next,
      prevContent,
      nextContent,
      $$slots: { prevContent: true, nextContent: true }
    });
  }
  $$payload.out += `<!----></div>`;
}
function PreviousAndNext($$payload) {
  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
  $$payload.out += `<div class="flex flex-col items-center justify-center gap-3"><div class="flex space-x-3 rtl:space-x-reverse">`;
  PaginationItem($$payload, {
    onclick: previous,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Previous`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  PaginationItem($$payload, {
    onclick: next,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Next`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
}
function PreviousAndNextWithIcons($$payload) {
  let helper = { start: 1, end: 10, total: 100 };
  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
  $$payload.out += `<div class="flex flex-col items-center justify-center gap-3"><div class="flex flex-col items-center justify-center gap-2"><div class="text-sm text-gray-700 dark:text-gray-400">Showing <span class="font-semibold text-gray-900 dark:text-white">${escape_html(helper.start)}</span> to <span class="font-semibold text-gray-900 dark:text-white">${escape_html(helper.end)}</span> of <span class="font-semibold text-gray-900 dark:text-white">${escape_html(helper.total)}</span> Entries</div> `;
  {
    let prevContent = function($$payload2) {
      $$payload2.out += `<div class="flex items-center gap-2 bg-gray-800 text-white">`;
      ArrowLeftOutline($$payload2, { class: "me-2 h-5 w-5" });
      $$payload2.out += `<!----> Prev</div>`;
    }, nextContent = function($$payload2) {
      $$payload2.out += `<div class="flex items-center gap-2 bg-gray-800 text-white">Next `;
      ArrowRightOutline($$payload2, { class: "ms-2 h-5 w-5" });
      $$payload2.out += `<!----></div>`;
    };
    Pagination($$payload, {
      table: true,
      previous,
      next,
      prevContent,
      nextContent,
      $$slots: { prevContent: true, nextContent: true }
    });
  }
  $$payload.out += `<!----></div></div>`;
}
function TableDataPagination($$payload) {
  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
  let helper = { start: 1, end: 10, total: 100 };
  $$payload.out += `<div class="flex flex-col items-center justify-center gap-3"><div class="flex flex-col items-center justify-center gap-2"><div class="text-sm text-gray-700 dark:text-gray-400">Showing <span class="font-semibold text-gray-900 dark:text-white">${escape_html(helper.start)}</span> to <span class="font-semibold text-gray-900 dark:text-white">${escape_html(helper.end)}</span> of <span class="font-semibold text-gray-900 dark:text-white">${escape_html(helper.total)}</span> Entries</div> `;
  Pagination($$payload, { table: true, previous, next });
  $$payload.out += `<!----> `;
  Pagination($$payload, { table: true, size: "large", previous, next });
  $$payload.out += `<!----></div></div>`;
}
function TableDataWithIcons($$payload) {
  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
  let helper = { start: 1, end: 10, total: 100 };
  $$payload.out += `<div class="flex flex-col items-center justify-center gap-3"><div class="flex flex-col items-center justify-center gap-2"><div class="text-sm text-gray-700 dark:text-gray-400">Showing <span class="font-semibold text-gray-900 dark:text-white">${escape_html(helper.start)}</span> to <span class="font-semibold text-gray-900 dark:text-white">${escape_html(helper.end)}</span> of <span class="font-semibold text-gray-900 dark:text-white">${escape_html(helper.total)}</span> Entries</div> `;
  {
    let prevContent = function($$payload2) {
      $$payload2.out += `<div class="flex items-center gap-2 bg-gray-800 text-white">`;
      ArrowLeftOutline($$payload2, { class: "me-2 h-5 w-5" });
      $$payload2.out += `<!----> Prev</div>`;
    }, nextContent = function($$payload2) {
      $$payload2.out += `<div class="flex items-center gap-2 bg-gray-800 text-white">Next `;
      ArrowRightOutline($$payload2, { class: "ms-2 h-5 w-5" });
      $$payload2.out += `<!----></div>`;
    };
    Pagination($$payload, {
      table: true,
      previous,
      next,
      prevContent,
      nextContent,
      $$slots: { prevContent: true, nextContent: true }
    });
  }
  $$payload.out += `<!----></div></div>`;
}
function _page($$payload, $$props) {
  push();
  const dirName = "pagination";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Default.svelte": __vite_glob_0_0,
    "./examples/Event.svelte": __vite_glob_0_1,
    "./examples/Icons.svelte": __vite_glob_0_2,
    "./examples/PreviousAndNext.svelte": __vite_glob_0_3,
    "./examples/PreviousAndNextWithIcons.svelte": __vite_glob_0_4,
    "./examples/TableDataPagination.svelte": __vite_glob_0_5,
    "./examples/TableDataWithIcons.svelte": __vite_glob_0_6
  });
  const exampleArr = [
    {
      name: "Default",
      component: Default
    },
    {
      name: "Event",
      component: Event
    },
    {
      name: "Icons",
      component: Icons
    },
    {
      name: "Previous and next",
      component: PreviousAndNext
    },
    {
      name: "Previous and next with icons",
      component: PreviousAndNextWithIcons
    },
    {
      name: "Table data pagination",
      component: TableDataPagination
    },
    {
      name: "Table data with icons",
      component: TableDataWithIcons
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
        $$payload3.out += `<!---->Pagination`;
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
              labelClass: "w-52 my-1",
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
