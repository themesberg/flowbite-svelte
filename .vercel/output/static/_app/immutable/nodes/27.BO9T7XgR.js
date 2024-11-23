import { c as comment, a as append, b as text, t as template, n as ns_template } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, e as setContext, c as child, b as get, f as first_child, r as reset, t as template_effect, s as sibling, n as next, a as pop, d as derived, g as getContext, u as user_effect, a6 as state, a7 as set } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text, s as setup_stores, b as store_get } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { p as prop, i as if_block, r as rest_props, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { a as set_attributes, s as set_attribute, b as set_class, b9 as pagination, ba as paginationItem, t as twMerge, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import { p as page } from "../chunks/stores.CC5X2N5j.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { C as ChevronLeftOutline } from "../chunks/ChevronLeftOutline.8ET6QfPS.js";
import { C as ChevronRightOutline } from "../chunks/ChevronRightOutline.D-4U2W9t.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { A as ArrowRightOutline } from "../chunks/ArrowRightOutline.C1f8PGpf.js";
var root_1$5 = template(`<li><!></li>`);
var root_5 = template(`<li><!></li>`);
var root_7 = template(`<li><!></li>`);
var root$9 = template(`<nav><ul><!> <!> <!></ul></nav>`);
function Pagination($$anchor, $$props) {
  push($$props, true);
  let pages = prop($$props, "pages", 19, () => []), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "pages",
    "previous",
    "next",
    "prevContent",
    "nextContent",
    "table",
    "size",
    "ariaLabel"
  ]);
  setContext("group", true);
  setContext("table", $$props.table);
  setContext("size", $$props.size);
  const paginationClass = derived(() => pagination({ table: $$props.table, size: $$props.size }));
  var nav = root$9();
  var ul = child(nav);
  var node = child(ul);
  if_block(node, () => typeof $$props.previous === "function", ($$anchor2) => {
    var li = root_1$5();
    let attributes;
    var node_1 = child(li);
    var class_1 = derived(() => $$props.table ? "rounded-none rounded-l" : "rounded-none  rounded-s-lg");
    PaginationItem(node_1, {
      get size() {
        return $$props.size;
      },
      onclick: () => $$props.previous(),
      get class() {
        return get(class_1);
      },
      children: ($$anchor3, $$slotProps) => {
        var fragment = comment();
        var node_2 = first_child(fragment);
        if_block(
          node_2,
          () => $$props.prevContent,
          ($$anchor4) => {
            var fragment_1 = comment();
            var node_3 = first_child(fragment_1);
            snippet(node_3, () => $$props.prevContent);
            append($$anchor4, fragment_1);
          },
          ($$anchor4) => {
            var text$1 = text("Previous");
            append($$anchor4, text$1);
          }
        );
        append($$anchor3, fragment);
      },
      $$slots: { default: true }
    });
    reset(li);
    template_effect(() => attributes = set_attributes(li, attributes, { ...restProps }));
    append($$anchor2, li);
  });
  var node_4 = sibling(node, 2);
  const $$array = pages;
  each(node_4, 17, $$array, index, ($$anchor2, $$item) => {
    let name = () => get($$item).name;
    let href = () => get($$item).href;
    let active = () => get($$item).active;
    let size = () => get($$item).size;
    var li_1 = root_5();
    let attributes_1;
    var node_5 = child(li_1);
    PaginationItem(node_5, {
      get size() {
        return size();
      },
      get active() {
        return active();
      },
      get href() {
        return href();
      },
      children: ($$anchor3, $$slotProps) => {
        next();
        var text_1 = text();
        template_effect(() => set_text(text_1, name()));
        append($$anchor3, text_1);
      },
      $$slots: { default: true }
    });
    reset(li_1);
    template_effect(() => attributes_1 = set_attributes(li_1, attributes_1, { ...restProps }));
    append($$anchor2, li_1);
  });
  var node_6 = sibling(node_4, 2);
  if_block(node_6, () => typeof $$props.next === "function", ($$anchor2) => {
    var li_2 = root_7();
    let attributes_2;
    var node_7 = child(li_2);
    var class_2 = derived(() => $$props.table ? "rounded-none rounded-r" : "rounded-none rounded-e-lg");
    PaginationItem(node_7, {
      get size() {
        return $$props.size;
      },
      onclick: () => $$props.next(),
      get class() {
        return get(class_2);
      },
      children: ($$anchor3, $$slotProps) => {
        var fragment_3 = comment();
        var node_8 = first_child(fragment_3);
        if_block(
          node_8,
          () => $$props.nextContent,
          ($$anchor4) => {
            var fragment_4 = comment();
            var node_9 = first_child(fragment_4);
            snippet(node_9, () => $$props.nextContent);
            append($$anchor4, fragment_4);
          },
          ($$anchor4) => {
            var text_2 = text("Next");
            append($$anchor4, text_2);
          }
        );
        append($$anchor3, fragment_3);
      },
      $$slots: { default: true }
    });
    reset(li_2);
    template_effect(() => attributes_2 = set_attributes(li_2, attributes_2, { ...restProps }));
    append($$anchor2, li_2);
  });
  reset(ul);
  reset(nav);
  template_effect(() => {
    set_attribute(nav, "aria-label", $$props.ariaLabel);
    set_class(ul, get(paginationClass));
  });
  append($$anchor, nav);
  pop();
}
var root_1$4 = template(`<a><!></a>`);
var root_3$1 = template(`<button><!></button>`);
function PaginationItem($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "size",
    "class",
    "href",
    "active"
  ]);
  const group = getContext("group");
  const table = getContext("table");
  const paginationClass = derived(() => paginationItem({
    size: $$props.size,
    active: $$props.active,
    group,
    table,
    className: $$props.class
  }));
  var fragment = comment();
  var node = first_child(fragment);
  if_block(
    node,
    () => $$props.href,
    ($$anchor2) => {
      var a = root_1$4();
      let attributes;
      var node_1 = child(a);
      if_block(node_1, () => $$props.children, ($$anchor3) => {
        var fragment_1 = comment();
        var node_2 = first_child(fragment_1);
        snippet(node_2, () => $$props.children);
        append($$anchor3, fragment_1);
      });
      reset(a);
      template_effect(() => attributes = set_attributes(a, attributes, {
        href: $$props.href,
        ...restProps,
        class: get(paginationClass)
      }));
      append($$anchor2, a);
    },
    ($$anchor2) => {
      var button = root_3$1();
      let attributes_1;
      var node_3 = child(button);
      if_block(node_3, () => $$props.children, ($$anchor3) => {
        var fragment_2 = comment();
        var node_4 = first_child(fragment_2);
        snippet(node_4, () => $$props.children);
        append($$anchor3, fragment_2);
      });
      reset(button);
      template_effect(() => attributes_1 = set_attributes(button, attributes_1, {
        ...restProps,
        class: get(paginationClass)
      }));
      append($$anchor2, button);
    }
  );
  append($$anchor, fragment);
  pop();
}
var root_1$3 = ns_template(`<title> </title>`);
var root_2$3 = ns_template(`<desc> </desc>`);
var root$8 = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12l4-4m-4 4 4 4"></path></svg>`);
function ArrowLeftOutline($$anchor, $$props) {
  var _a, _b;
  push($$props, true);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "arrow left outline"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "color",
    "title",
    "strokeWidth",
    "desc",
    "class",
    "ariaLabel"
  ]);
  let ariaDescribedby = `${((_a = $$props.title) == null ? void 0 : _a.id) || ""} ${((_b = $$props.desc) == null ? void 0 : _b.id) || ""}`;
  const hasDescription = derived(() => {
    var _a2, _b2;
    return !!(((_a2 = $$props.title) == null ? void 0 : _a2.id) || ((_b2 = $$props.desc) == null ? void 0 : _b2.id));
  });
  var svg = root$8();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$3();
    var text2 = child(title_1, true);
    reset(title_1);
    template_effect(() => {
      set_attribute(title_1, "id", $$props.title.id);
      set_text(text2, $$props.title.title);
    });
    append($$anchor2, title_1);
  });
  var node_1 = sibling(node);
  if_block(node_1, () => {
    var _a2;
    return ((_a2 = $$props.desc) == null ? void 0 : _a2.id) && $$props.desc.desc;
  }, ($$anchor2) => {
    var desc_1 = root_2$3();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  var path = sibling(node_1);
  reset(svg);
  template_effect(() => {
    attributes = set_attributes(
      svg,
      attributes,
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        color: color(),
        ...restProps,
        class: twMerge("shrink-0", sizes[size()], $$props.class),
        "aria-label": ariaLabel(),
        "aria-describedby": get(hasDescription) ? ariaDescribedby : void 0,
        viewBox: "0 0 24 24"
      },
      void 0,
      true
    );
    set_attribute(path, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { page } from "$app/stores";\n  import { Pagination, Button, type PaginationItemProps } from "$lib";\n\n  let activeUrl = $state($page.url.searchParams.get("page"));\n  let pages = $state([\n    { name: "1", href: "/components/pagination?page=1", active: false },\n    { name: "2", href: "/components/pagination?page=2", active: false },\n    { name: "3", href: "/components/pagination?page=3", active: false },\n    { name: "4", href: "/components/pagination?page=4", active: false },\n    { name: "5", href: "/components/pagination?page=5", active: false }\n  ]);\n  const previous = () => {\n    alert("Previous btn clicked. Make a call to your server to fetch data.");\n  };\n  const next = () => {\n    alert("Next btn clicked. Make a call to your server to fetch data.");\n  };\n  let pagenationSize: PaginationItemProps["size"] = $state("default");\n  const changeSize = () => {\n    pagenationSize = pagenationSize === "large" ? "default" : "large";\n  };\n\n  const changeActivePage = () => {\n    pages.forEach((page) => {\n      let splitUrl = page.href?.split("?");\n      let queryString = splitUrl?.slice(1).join("?");\n      const hrefParams = new URLSearchParams(queryString);\n      let hrefValue = hrefParams.get("page");\n      if (hrefValue === activeUrl) {\n        page.active = true;\n      } else {\n        page.active = false;\n      }\n    });\n  };\n  changeActivePage();\n  $effect(() => {\n    changeActivePage();\n  });\n<\/script>\n\n{activeUrl}\n<div class="flex flex-col items-center justify-center gap-3">\n  <div class="h-12">\n    <Pagination {pages} {previous} {next} size={pagenationSize} />\n  </div>\n  <Button onclick={changeSize}>\n    {#if pagenationSize === "default"}\n      Large\n    {:else}\n      Default\n    {/if}\n  </Button>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { page } from "$app/stores";\n  import { Pagination } from "$lib";\n\n  let activeUrl = $state($page.url.searchParams.get("page"));\n  let pages = $state([\n    { name: "1", href: "/components/pagination?page=1", active: false },\n    { name: "2", href: "/components/pagination?page=2", active: false },\n    { name: "3", href: "/components/pagination?page=3", active: false },\n    { name: "4", href: "/components/pagination?page=4", active: false },\n    { name: "5", href: "/components/pagination?page=5", active: false }\n  ]);\n  const previous = () => {\n    alert("Previous btn clicked. Make a call to your server to fetch data.");\n  };\n  const next = () => {\n    alert("Next btn clicked. Make a call to your server to fetch data.");\n  };\n  const handleClick = () => {\n    alert("Page clicked");\n  };\n\n  $effect(() => {\n    pages.forEach((page) => {\n      let splitUrl = page.href.split("?");\n      let queryString = splitUrl.slice(1).join("?");\n      const hrefParams = new URLSearchParams(queryString);\n      let hrefValue = hrefParams.get("page");\n      if (hrefValue === activeUrl) {\n        page.active = true;\n      } else {\n        page.active = false;\n      }\n    });\n    pages = pages;\n  });\n<\/script>\n\n<div class="flex flex-col items-center justify-center gap-3">\n  <Pagination {pages} {previous} {next} onclick={handleClick} />\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Pagination } from "$lib";\n  import { ChevronLeftOutline, ChevronRightOutline } from "flowbite-svelte-icons";\n  let pages = $state([\n    { name: "1", href: "/components/pagination?page=1", active: false },\n    { name: "2", href: "/components/pagination?page=2", active: false },\n    { name: "3", href: "/components/pagination?page=3", active: false },\n    { name: "4", href: "/components/pagination?page=4", active: false },\n    { name: "5", href: "/components/pagination?page=5", active: false }\n  ]);\n  const previous = () => {\n    alert("Previous btn clicked. Make a call to your server to fetch data.");\n  };\n  const next = () => {\n    alert("Next btn clicked. Make a call to your server to fetch data.");\n  };\n<\/script>\n\n<div class="flex flex-col items-center justify-center gap-3">\n  <Pagination {pages} {previous} {next}>\n    {#snippet prevContent()}\n      <span class="sr-only">Previous</span>\n      <ChevronLeftOutline class="h-5 w-5" />\n    {/snippet}\n    {#snippet nextContent()}\n      <span class="sr-only">Next</span>\n      <ChevronRightOutline class="h-5 w-5" />\n    {/snippet}\n  </Pagination>\n</div>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { PaginationItem } from "$lib";\n\n  const previous = () => {\n    alert("Previous btn clicked. Make a call to your server to fetch data.");\n  };\n  const next = () => {\n    alert("Next btn clicked. Make a call to your server to fetch data.");\n  };\n<\/script>\n\n<div class="flex flex-col items-center justify-center gap-3">\n  <div class="flex space-x-3 rtl:space-x-reverse">\n    <PaginationItem onclick={previous}>Previous</PaginationItem>\n    <PaginationItem onclick={next}>Next</PaginationItem>\n  </div>\n</div>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Pagination } from "$lib";\n  import { ArrowLeftOutline, ArrowRightOutline } from "flowbite-svelte-icons";\n  let helper = { start: 1, end: 10, total: 100 };\n  const previous = () => {\n    alert("Previous btn clicked. Make a call to your server to fetch data.");\n  };\n  const next = () => {\n    alert("Next btn clicked. Make a call to your server to fetch data.");\n  };\n<\/script>\n\n<div class="flex flex-col items-center justify-center gap-3">\n  <div class="flex flex-col items-center justify-center gap-2">\n    <div class="text-sm text-gray-700 dark:text-gray-400">\n      Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span>\n      to\n      <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>\n      of\n      <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span>\n      Entries\n    </div>\n\n    <Pagination table {previous} {next}>\n      {#snippet prevContent()}\n        <div class="flex items-center gap-2 bg-gray-800 text-white">\n          <ArrowLeftOutline class="me-2 h-5 w-5" />\n          Prev\n        </div>\n      {/snippet}\n      {#snippet nextContent()}\n        <div class="flex items-center gap-2 bg-gray-800 text-white">\n          Next\n          <ArrowRightOutline class="ms-2 h-5 w-5" />\n        </div>\n      {/snippet}\n    </Pagination>\n  </div>\n</div>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { Pagination } from "$lib";\n\n  const previous = () => {\n    alert("Previous btn clicked. Make a call to your server to fetch data.");\n  };\n  const next = () => {\n    alert("Next btn clicked. Make a call to your server to fetch data.");\n  };\n  let helper = { start: 1, end: 10, total: 100 };\n<\/script>\n\n<div class="flex flex-col items-center justify-center gap-3">\n  <div class="flex flex-col items-center justify-center gap-2">\n    <div class="text-sm text-gray-700 dark:text-gray-400">\n      Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span>\n      to\n      <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>\n      of\n      <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span>\n      Entries\n    </div>\n    <Pagination table {previous} {next} />\n    <Pagination table size="large" {previous} {next} />\n  </div>\n</div>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { Pagination } from "$lib";\n  import { ArrowLeftOutline, ArrowRightOutline } from "flowbite-svelte-icons";\n  const previous = () => {\n    alert("Previous btn clicked. Make a call to your server to fetch data.");\n  };\n  const next = () => {\n    alert("Next btn clicked. Make a call to your server to fetch data.");\n  };\n  let helper = { start: 1, end: 10, total: 100 };\n<\/script>\n\n<div class="flex flex-col items-center justify-center gap-3">\n  <div class="flex flex-col items-center justify-center gap-2">\n    <div class="text-sm text-gray-700 dark:text-gray-400">\n      Showing <span class="font-semibold text-gray-900 dark:text-white">{helper.start}</span>\n      to\n      <span class="font-semibold text-gray-900 dark:text-white">{helper.end}</span>\n      of\n      <span class="font-semibold text-gray-900 dark:text-white">{helper.total}</span>\n      Entries\n    </div>\n\n    <Pagination table {previous} {next}>\n      {#snippet prevContent()}\n        <div class="flex items-center gap-2 bg-gray-800 text-white">\n          <ArrowLeftOutline class="me-2 h-5 w-5" />\n          Prev\n        </div>\n      {/snippet}\n      {#snippet nextContent()}\n        <div class="flex items-center gap-2 bg-gray-800 text-white">\n          Next\n          <ArrowRightOutline class="ms-2 h-5 w-5" />\n        </div>\n      {/snippet}\n    </Pagination>\n  </div>\n</div>\n';
var root$7 = template(` <div class="flex flex-col items-center justify-center gap-3"><div class="h-12"><!></div> <!></div>`, 1);
function Default($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = proxy($page().url.searchParams.get("page"));
  let pages = proxy([
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
  ]);
  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next$1 = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
  let pagenationSize = state("default");
  const changeSize = () => {
    set(pagenationSize, proxy(get(pagenationSize) === "large" ? "default" : "large"));
  };
  const changeActivePage = () => {
    pages.forEach((page2) => {
      var _a;
      let splitUrl = (_a = page2.href) == null ? void 0 : _a.split("?");
      let queryString = splitUrl == null ? void 0 : splitUrl.slice(1).join("?");
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
  user_effect(() => {
    changeActivePage();
  });
  next();
  var fragment = root$7();
  var text$1 = first_child(fragment);
  var div = sibling(text$1);
  var div_1 = child(div);
  var node = child(div_1);
  Pagination(node, {
    get pages() {
      return pages;
    },
    previous,
    next: next$1,
    get size() {
      return get(pagenationSize);
    }
  });
  reset(div_1);
  var node_1 = sibling(div_1, 2);
  Button(node_1, {
    onclick: changeSize,
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node_2 = first_child(fragment_1);
      if_block(
        node_2,
        () => get(pagenationSize) === "default",
        ($$anchor3) => {
          var text_1 = text("Large");
          append($$anchor3, text_1);
        },
        ($$anchor3) => {
          var text_2 = text("Default");
          append($$anchor3, text_2);
        }
      );
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  reset(div);
  template_effect(() => set_text(text$1, `${activeUrl ?? ""} `));
  append($$anchor, fragment);
  pop();
}
var root$6 = template(`<div class="flex flex-col items-center justify-center gap-3"><!></div>`);
function Event($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = proxy($page().url.searchParams.get("page"));
  let pages = state(proxy([
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
  ]));
  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next2 = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
  const handleClick = () => {
    alert("Page clicked");
  };
  user_effect(() => {
    get(pages).forEach((page2) => {
      let splitUrl = page2.href.split("?");
      let queryString = splitUrl.slice(1).join("?");
      const hrefParams = new URLSearchParams(queryString);
      let hrefValue = hrefParams.get("page");
      if (hrefValue === activeUrl) {
        page2.active = true;
      } else {
        page2.active = false;
      }
    });
    set(pages, proxy(get(pages)));
  });
  var div = root$6();
  var node = child(div);
  Pagination(node, {
    get pages() {
      return get(pages);
    },
    previous,
    next: next2,
    onclick: handleClick
  });
  reset(div);
  append($$anchor, div);
  pop();
}
var root_1$2 = template(`<span class="sr-only">Previous</span> <!>`, 1);
var root_2$2 = template(`<span class="sr-only">Next</span> <!>`, 1);
var root$5 = template(`<div class="flex flex-col items-center justify-center gap-3"><!></div>`);
function Icons($$anchor) {
  let pages = proxy([
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
  ]);
  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next2 = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
  var div = root$5();
  var node = child(div);
  {
    const prevContent = ($$anchor2) => {
      var fragment = root_1$2();
      var node_1 = sibling(first_child(fragment), 2);
      ChevronLeftOutline(node_1, { class: "h-5 w-5" });
      append($$anchor2, fragment);
    };
    const nextContent = ($$anchor2) => {
      var fragment_1 = root_2$2();
      var node_2 = sibling(first_child(fragment_1), 2);
      ChevronRightOutline(node_2, { class: "h-5 w-5" });
      append($$anchor2, fragment_1);
    };
    Pagination(node, {
      get pages() {
        return pages;
      },
      previous,
      next: next2,
      prevContent,
      nextContent,
      $$slots: { prevContent: true, nextContent: true }
    });
  }
  reset(div);
  append($$anchor, div);
}
var root$4 = template(`<div class="flex flex-col items-center justify-center gap-3"><div class="flex space-x-3 rtl:space-x-reverse"><!> <!></div></div>`);
function PreviousAndNext($$anchor) {
  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next$1 = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
  var div = root$4();
  var div_1 = child(div);
  var node = child(div_1);
  PaginationItem(node, {
    onclick: previous,
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Previous");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  PaginationItem(node_1, {
    onclick: next$1,
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Next");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  reset(div_1);
  reset(div);
  append($$anchor, div);
}
var root_1$1 = template(`<div class="flex items-center gap-2 bg-gray-800 text-white"><!> Prev</div>`);
var root_2$1 = template(`<div class="flex items-center gap-2 bg-gray-800 text-white">Next <!></div>`);
var root$3 = template(`<div class="flex flex-col items-center justify-center gap-3"><div class="flex flex-col items-center justify-center gap-2"><div class="text-sm text-gray-700 dark:text-gray-400">Showing <span class="font-semibold text-gray-900 dark:text-white"> </span> to <span class="font-semibold text-gray-900 dark:text-white"> </span> of <span class="font-semibold text-gray-900 dark:text-white"> </span> Entries</div> <!></div></div>`);
function PreviousAndNextWithIcons($$anchor) {
  let helper = { start: 1, end: 10, total: 100 };
  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next$1 = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
  var div = root$3();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var span = sibling(child(div_2));
  var text2 = child(span, true);
  reset(span);
  var span_1 = sibling(span, 2);
  var text_1 = child(span_1, true);
  reset(span_1);
  var span_2 = sibling(span_1, 2);
  var text_2 = child(span_2, true);
  reset(span_2);
  next();
  reset(div_2);
  var node = sibling(div_2, 2);
  {
    const prevContent = ($$anchor2) => {
      var div_3 = root_1$1();
      var node_1 = child(div_3);
      ArrowLeftOutline(node_1, { class: "me-2 h-5 w-5" });
      next();
      reset(div_3);
      append($$anchor2, div_3);
    };
    const nextContent = ($$anchor2) => {
      var div_4 = root_2$1();
      var node_2 = sibling(child(div_4));
      ArrowRightOutline(node_2, { class: "ms-2 h-5 w-5" });
      reset(div_4);
      append($$anchor2, div_4);
    };
    Pagination(node, {
      table: true,
      previous,
      next: next$1,
      prevContent,
      nextContent,
      $$slots: { prevContent: true, nextContent: true }
    });
  }
  reset(div_1);
  reset(div);
  template_effect(() => {
    set_text(text2, helper.start);
    set_text(text_1, helper.end);
    set_text(text_2, helper.total);
  });
  append($$anchor, div);
}
var root$2 = template(`<div class="flex flex-col items-center justify-center gap-3"><div class="flex flex-col items-center justify-center gap-2"><div class="text-sm text-gray-700 dark:text-gray-400">Showing <span class="font-semibold text-gray-900 dark:text-white"> </span> to <span class="font-semibold text-gray-900 dark:text-white"> </span> of <span class="font-semibold text-gray-900 dark:text-white"> </span> Entries</div> <!> <!></div></div>`);
function TableDataPagination($$anchor) {
  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next$1 = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
  let helper = { start: 1, end: 10, total: 100 };
  var div = root$2();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var span = sibling(child(div_2));
  var text2 = child(span, true);
  reset(span);
  var span_1 = sibling(span, 2);
  var text_1 = child(span_1, true);
  reset(span_1);
  var span_2 = sibling(span_1, 2);
  var text_2 = child(span_2, true);
  reset(span_2);
  next();
  reset(div_2);
  var node = sibling(div_2, 2);
  Pagination(node, { table: true, previous, next: next$1 });
  var node_1 = sibling(node, 2);
  Pagination(node_1, { table: true, size: "large", previous, next: next$1 });
  reset(div_1);
  reset(div);
  template_effect(() => {
    set_text(text2, helper.start);
    set_text(text_1, helper.end);
    set_text(text_2, helper.total);
  });
  append($$anchor, div);
}
var root_1 = template(`<div class="flex items-center gap-2 bg-gray-800 text-white"><!> Prev</div>`);
var root_2 = template(`<div class="flex items-center gap-2 bg-gray-800 text-white">Next <!></div>`);
var root$1 = template(`<div class="flex flex-col items-center justify-center gap-3"><div class="flex flex-col items-center justify-center gap-2"><div class="text-sm text-gray-700 dark:text-gray-400">Showing <span class="font-semibold text-gray-900 dark:text-white"> </span> to <span class="font-semibold text-gray-900 dark:text-white"> </span> of <span class="font-semibold text-gray-900 dark:text-white"> </span> Entries</div> <!></div></div>`);
function TableDataWithIcons($$anchor) {
  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next$1 = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };
  let helper = { start: 1, end: 10, total: 100 };
  var div = root$1();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var span = sibling(child(div_2));
  var text2 = child(span, true);
  reset(span);
  var span_1 = sibling(span, 2);
  var text_1 = child(span_1, true);
  reset(span_1);
  var span_2 = sibling(span_1, 2);
  var text_2 = child(span_2, true);
  reset(span_2);
  next();
  reset(div_2);
  var node = sibling(div_2, 2);
  {
    const prevContent = ($$anchor2) => {
      var div_3 = root_1();
      var node_1 = child(div_3);
      ArrowLeftOutline(node_1, { class: "me-2 h-5 w-5" });
      next();
      reset(div_3);
      append($$anchor2, div_3);
    };
    const nextContent = ($$anchor2) => {
      var div_4 = root_2();
      var node_2 = sibling(child(div_4));
      ArrowRightOutline(node_2, { class: "ms-2 h-5 w-5" });
      reset(div_4);
      append($$anchor2, div_4);
    };
    Pagination(node, {
      table: true,
      previous,
      next: next$1,
      prevContent,
      nextContent,
      $$slots: { prevContent: true, nextContent: true }
    });
  }
  reset(div_1);
  reset(div);
  template_effect(() => {
    set_text(text2, helper.start);
    set_text(text_1, helper.end);
    set_text(text_2, helper.total);
  });
  append($$anchor, div);
}
var root_3 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
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
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  let codeBlock = uiHelpers();
  let exampleExpand = state(false);
  let showExpandButton = derived(() => isSvelteOverflow(get(svelteCode), exampleModules));
  const handleExpandClick = () => {
    set(exampleExpand, !get(exampleExpand));
  };
  user_effect(() => {
    set(exampleExpand, proxy(codeBlock.isOpen));
  });
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Pagination");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  {
    const codeblock = ($$anchor2) => {
      DynamicCodeBlockHighlight($$anchor2, {
        replaceLib: true,
        handleExpandClick,
        get expand() {
          return get(exampleExpand);
        },
        get showExpandButton() {
          return get(showExpandButton);
        },
        get code() {
          return exampleModules[`./examples/${get(svelteCode)}`];
        }
      });
    };
    CodeWrapper(node_1, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_2 = root_3();
        var div = first_child(fragment_2);
        var node_2 = child(div);
        Label(node_2, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_1 = text("Example");
            append($$anchor3, text_1);
          },
          $$slots: { default: true }
        });
        var node_3 = sibling(node_2, 2);
        each(node_3, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-52 my-1",
            onclick: () => set(exampleExpand, false),
            name: "block_style",
            get group() {
              return get(selectedExample);
            },
            set group($$value) {
              set(selectedExample, proxy($$value));
            },
            get value() {
              return get(style).name;
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_2 = text();
              template_effect(() => set_text(text_2, get(style).name));
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
        });
        reset(div);
        var node_4 = sibling(div, 2);
        component(node_4, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_5 = sibling(node_1, 2);
  H2(node_5, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_3 = text("Component data");
      append($$anchor2, text_3);
    },
    $$slots: { default: true }
  });
  var node_6 = sibling(node_5, 2);
  CompoAttributesViewer(node_6, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
