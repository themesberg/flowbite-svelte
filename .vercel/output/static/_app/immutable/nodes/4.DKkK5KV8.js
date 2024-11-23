import { a as append, t as template, n as ns_template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, e as setContext, c as child, r as reset, t as template_effect, a as pop, b as get, d as derived, g as getContext, s as sibling, n as next, f as first_child, a7 as set, a6 as state, u as user_effect } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { p as prop, r as rest_props, i as if_block, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { a as set_attributes, bh as accordion, s as set_attribute, t as twMerge, bi as AccordionItem, aC as fly, bj as quintOut, aA as fade, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { C as ChevronDoubleUpOutline, a as ChevronDoubleDownOutline } from "../chunks/ChevronDoubleUpOutline.7Acn7Sqj.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
var root$4 = template(`<div><!></div>`);
function Accordion($$anchor, $$props) {
  push($$props, true);
  let isSingle = prop($$props, "isSingle", 3, true), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "flush",
    "activeClass",
    "inactiveClass",
    "isSingle",
    "class"
  ]);
  const ctx = {
    flush: $$props.flush,
    activeClass: $$props.activeClass,
    inactiveClass: $$props.inactiveClass,
    isSingle: isSingle()
  };
  setContext("ctx", ctx);
  const base = derived(() => accordion({
    flush: $$props.flush,
    className: $$props.class
  }));
  var div = root$4();
  let attributes;
  var node = child(div);
  snippet(node, () => $$props.children);
  reset(div);
  template_effect(() => attributes = set_attributes(div, attributes, { ...restProps, class: get(base) }));
  append($$anchor, div);
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
var root_1$a = ns_template(`<title> </title>`);
var root_2$2 = ns_template(`<desc> </desc>`);
var root$3 = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clip-rule="evenodd"></path></svg>`);
function CartSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "cart solid"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "color",
    "title",
    "desc",
    "class",
    "ariaLabel"
  ]);
  let ariaDescribedby = `${((_a = $$props.title) == null ? void 0 : _a.id) || ""} ${((_b = $$props.desc) == null ? void 0 : _b.id) || ""}`;
  const hasDescription = derived(() => {
    var _a2, _b2;
    return !!(((_a2 = $$props.title) == null ? void 0 : _a2.id) || ((_b2 = $$props.desc) == null ? void 0 : _b2.id));
  });
  var svg = root$3();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$a();
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
    var desc_1 = root_2$2();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  next();
  reset(svg);
  template_effect(() => attributes = set_attributes(
    svg,
    attributes,
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color(),
      ...restProps,
      class: twMerge("shrink-0", sizes[size()], $$props.class),
      "aria-label": ariaLabel(),
      "aria-describedby": get(hasDescription) ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    true
  ));
  append($$anchor, svg);
  pop();
}
var root_1$9 = ns_template(`<title> </title>`);
var root_2$1 = ns_template(`<desc> </desc>`);
var root$2 = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path></svg>`);
function CogOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "cog outline"), restProps = rest_props($$props, [
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
  var svg = root$2();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$9();
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
    var desc_1 = root_2$1();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  var path = sibling(node_1);
  var path_1 = sibling(path);
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
    set_attribute(path_1, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
  pop();
}
var root_3$8 = template(`<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`);
var root_5$8 = template(`<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`);
var root_1$8 = template(`<!> <!>`, 1);
function Default($$anchor) {
  Accordion($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$8();
      var node = first_child(fragment_1);
      {
        const header = ($$anchor3) => {
          next();
          var text$1 = text("Header 1-1");
          append($$anchor3, text$1);
        };
        AccordionItem(node, {
          header,
          children: ($$anchor3, $$slotProps2) => {
            var p = root_3$8();
            append($$anchor3, p);
          },
          $$slots: { header: true, default: true }
        });
      }
      var node_1 = sibling(node, 2);
      {
        const header = ($$anchor3) => {
          next();
          var text_1 = text("Header 1-2");
          append($$anchor3, text_1);
        };
        AccordionItem(node_1, {
          header,
          children: ($$anchor3, $$slotProps2) => {
            var p_1 = root_5$8();
            append($$anchor3, p_1);
          },
          $$slots: { header: true, default: true }
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_3$7 = template(`<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`);
var root_5$7 = template(`<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`);
var root_1$7 = template(`<!> <!>`, 1);
function Color($$anchor) {
  Accordion($$anchor, {
    activeClass: "bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800",
    inactiveClass: "text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$7();
      var node = first_child(fragment_1);
      {
        const header = ($$anchor3) => {
          next();
          var text$1 = text("Header 2-1");
          append($$anchor3, text$1);
        };
        AccordionItem(node, {
          class: "",
          header,
          children: ($$anchor3, $$slotProps2) => {
            var p = root_3$7();
            append($$anchor3, p);
          },
          $$slots: { header: true, default: true }
        });
      }
      var node_1 = sibling(node, 2);
      {
        const header = ($$anchor3) => {
          next();
          var text_1 = text("Header 2-2");
          append($$anchor3, text_1);
        };
        AccordionItem(node_1, {
          header,
          children: ($$anchor3, $$slotProps2) => {
            var p_1 = root_5$7();
            append($$anchor3, p_1);
          },
          $$slots: { header: true, default: true }
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_3$6 = template(`<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`);
var root_5$6 = template(`<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`);
var root_1$6 = template(`<!> <!>`, 1);
function Flush($$anchor) {
  Accordion($$anchor, {
    flush: true,
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$6();
      var node = first_child(fragment_1);
      {
        const header = ($$anchor3) => {
          next();
          var text$1 = text("Header 2-1");
          append($$anchor3, text$1);
        };
        AccordionItem(node, {
          header,
          children: ($$anchor3, $$slotProps2) => {
            var p = root_3$6();
            append($$anchor3, p);
          },
          $$slots: { header: true, default: true }
        });
      }
      var node_1 = sibling(node, 2);
      {
        const header = ($$anchor3) => {
          next();
          var text_1 = text("Header 2-2");
          append($$anchor3, text_1);
        };
        AccordionItem(node_1, {
          header,
          children: ($$anchor3, $$slotProps2) => {
            var p_1 = root_5$6();
            append($$anchor3, p_1);
          },
          $$slots: { header: true, default: true }
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_5$5 = template(`<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`);
var root_9$1 = template(`<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`);
var root_1$5 = template(`<!> <!>`, 1);
function ArrowStyle($$anchor) {
  Accordion($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$5();
      var node = first_child(fragment_1);
      {
        const header = ($$anchor3) => {
          next();
          var text$1 = text("Header 2-1");
          append($$anchor3, text$1);
        };
        const arrowup = ($$anchor3) => {
          ChevronDoubleUpOutline($$anchor3, { class: "-me-0.5 h-6 w-6" });
        };
        const arrowdown = ($$anchor3) => {
          ChevronDoubleDownOutline($$anchor3, { class: "-me-0.5 h-6 w-6" });
        };
        AccordionItem(node, {
          header,
          arrowup,
          arrowdown,
          children: ($$anchor3, $$slotProps2) => {
            var p = root_5$5();
            append($$anchor3, p);
          },
          $$slots: {
            header: true,
            arrowup: true,
            arrowdown: true,
            default: true
          }
        });
      }
      var node_1 = sibling(node, 2);
      {
        const header = ($$anchor3) => {
          next();
          var text_1 = text("Header 2-2");
          append($$anchor3, text_1);
        };
        const arrowup = ($$anchor3) => {
          ChevronDoubleUpOutline($$anchor3, { class: "-me-0.5 h-6 w-6" });
        };
        const arrowdown = ($$anchor3) => {
          ChevronDoubleDownOutline($$anchor3, { class: "-me-0.5 h-6 w-6" });
        };
        AccordionItem(node_1, {
          header,
          arrowup,
          arrowdown,
          children: ($$anchor3, $$slotProps2) => {
            var p_1 = root_9$1();
            append($$anchor3, p_1);
          },
          $$slots: {
            header: true,
            arrowup: true,
            arrowdown: true,
            default: true
          }
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_2 = template(`<span class="flex gap-2 text-base"><!> <span>My Header 1</span></span>`);
var root_3$5 = template(`<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo...</p>`);
var root_4$1 = template(`<span class="flex gap-2 text-base"><!> <span>My Header 2</span></span>`);
var root_5$4 = template(`<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sintexplicabo...</p>`);
var root_1$4 = template(`<!> <!>`, 1);
function Icon($$anchor) {
  Accordion($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$4();
      var node = first_child(fragment_1);
      {
        const header = ($$anchor3) => {
          var span = root_2();
          var node_1 = child(span);
          CartSolid(node_1, { class: "mt-0.5" });
          next(2);
          reset(span);
          append($$anchor3, span);
        };
        AccordionItem(node, {
          header,
          children: ($$anchor3, $$slotProps2) => {
            var p = root_3$5();
            append($$anchor3, p);
          },
          $$slots: { header: true, default: true }
        });
      }
      var node_2 = sibling(node, 2);
      {
        const header = ($$anchor3) => {
          var span_1 = root_4$1();
          var node_3 = child(span_1);
          CogOutline(node_3, { class: "mt-0.5" });
          next(2);
          reset(span_1);
          append($$anchor3, span_1);
        };
        AccordionItem(node_2, {
          header,
          children: ($$anchor3, $$slotProps2) => {
            var p_1 = root_5$4();
            append($$anchor3, p_1);
          },
          $$slots: { header: true, default: true }
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_5$3 = template(`<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet ...</p>`);
var root_7$1 = template(`<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet...</p>`);
var root_9 = template(`<p>Something more</p>`);
var root_3$4 = template(`<!> <!> <!>`, 1);
var root$1 = template(`<!> <!> <!>`, 1);
function MultipleMode($$anchor) {
  let item0 = state(false);
  let item1 = state(false);
  let item2 = state(false);
  const open_all = () => {
    set(item0, true);
    set(item1, true);
    set(item2, true);
  };
  const close_all = () => {
    set(item0, false);
    set(item1, false);
    set(item2, false);
  };
  var fragment = root$1();
  var node = first_child(fragment);
  Button(node, {
    onclick: open_all,
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Open all");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Button(node_1, {
    onclick: close_all,
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Close all");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  Accordion(node_2, {
    class: "mt-4",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_3$4();
      var node_3 = first_child(fragment_1);
      {
        const header = ($$anchor3) => {
          next();
          var text_2 = text("My Header 1");
          append($$anchor3, text_2);
        };
        AccordionItem(node_3, {
          get open() {
            return get(item0);
          },
          set open($$value) {
            set(item0, proxy($$value));
          },
          header,
          children: ($$anchor3, $$slotProps2) => {
            var p = root_5$3();
            append($$anchor3, p);
          },
          $$slots: { header: true, default: true }
        });
      }
      var node_4 = sibling(node_3, 2);
      {
        const header = ($$anchor3) => {
          next();
          var text_3 = text("My Header 2");
          append($$anchor3, text_3);
        };
        AccordionItem(node_4, {
          get open() {
            return get(item1);
          },
          set open($$value) {
            set(item1, proxy($$value));
          },
          header,
          children: ($$anchor3, $$slotProps2) => {
            var p_1 = root_7$1();
            append($$anchor3, p_1);
          },
          $$slots: { header: true, default: true }
        });
      }
      var node_5 = sibling(node_4, 2);
      {
        const header = ($$anchor3) => {
          next();
          var text_4 = text("My Header 3");
          append($$anchor3, text_4);
        };
        AccordionItem(node_5, {
          get open() {
            return get(item2);
          },
          set open($$value) {
            set(item2, proxy($$value));
          },
          header,
          children: ($$anchor3, $$slotProps2) => {
            var p_2 = root_9();
            append($$anchor3, p_2);
          },
          $$slots: { header: true, default: true }
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
}
var root_3$3 = template(`<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`);
var root_5$2 = template(`<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`);
var root_7 = template(`<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`);
var root_1$3 = template(`<!> <!> <!>`, 1);
function Transitions($$anchor) {
  Accordion($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$3();
      var node = first_child(fragment_1);
      {
        const header = ($$anchor3) => {
          next();
          var text$1 = text("slide, duration: 2000");
          append($$anchor3, text$1);
        };
        AccordionItem(node, {
          params: { duration: 2e3 },
          header,
          children: ($$anchor3, $$slotProps2) => {
            var p = root_3$3();
            append($$anchor3, p);
          },
          $$slots: { header: true, default: true }
        });
      }
      var node_1 = sibling(node, 2);
      {
        const header = ($$anchor3) => {
          next();
          var text_1 = text("Fly, delay: 250, duration: 300, x: 100, y: 500, opacity: 0.5, easing: quintOut");
          append($$anchor3, text_1);
        };
        AccordionItem(node_1, {
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
          children: ($$anchor3, $$slotProps2) => {
            var p_1 = root_5$2();
            append($$anchor3, p_1);
          },
          $$slots: { header: true, default: true }
        });
      }
      var node_2 = sibling(node_1, 2);
      {
        const header = ($$anchor3) => {
          next();
          var text_2 = text("Fade, duration: 1000");
          append($$anchor3, text_2);
        };
        AccordionItem(node_2, {
          transition: fade,
          params: { duration: 1e3 },
          header,
          children: ($$anchor3, $$slotProps2) => {
            var p_2 = root_7();
            append($$anchor3, p_2);
          },
          $$slots: { header: true, default: true }
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_6 = template(`<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet ...</p>`);
var root_8 = template(`<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet...</p> <ul class="list-disc ps-5 text-gray-500 dark:text-gray-400"><li><a href="/" target="_blank" rel="noreferrer" class="text-blue-600 hover:underline dark:text-blue-500">Lorem ipsum</a></li> <li><a href="https://tailwindui.com/" rel="noreferrer" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">Tailwind UI</a></li></ul>`, 1);
var root_4 = template(`<!> <!>`, 1);
var root_10 = template(`<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur ...</p>`);
var root_1$2 = template(`<!> <!>`, 1);
function Nesting($$anchor) {
  let nestingOpenStatus = state(true);
  Accordion($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$2();
      var node = first_child(fragment_1);
      {
        const header = ($$anchor3) => {
          next();
          var text$1 = text("My Header 1");
          append($$anchor3, text$1);
        };
        AccordionItem(node, {
          get open() {
            return get(nestingOpenStatus);
          },
          set open($$value) {
            set(nestingOpenStatus, proxy($$value));
          },
          header,
          children: ($$anchor3, $$slotProps2) => {
            Accordion($$anchor3, {
              children: ($$anchor4, $$slotProps3) => {
                var fragment_3 = root_4();
                var node_1 = first_child(fragment_3);
                {
                  const header2 = ($$anchor5) => {
                    next();
                    var text_1 = text("My Header 1");
                    append($$anchor5, text_1);
                  };
                  AccordionItem(node_1, {
                    header: header2,
                    children: ($$anchor5, $$slotProps4) => {
                      var p = root_6();
                      append($$anchor5, p);
                    },
                    $$slots: { header: true, default: true }
                  });
                }
                var node_2 = sibling(node_1, 2);
                {
                  const header2 = ($$anchor5) => {
                    next();
                    var text_2 = text("My Header 2");
                    append($$anchor5, text_2);
                  };
                  AccordionItem(node_2, {
                    header: header2,
                    children: ($$anchor5, $$slotProps4) => {
                      var fragment_4 = root_8();
                      next(2);
                      append($$anchor5, fragment_4);
                    },
                    $$slots: { header: true, default: true }
                  });
                }
                append($$anchor4, fragment_3);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { header: true, default: true }
        });
      }
      var node_3 = sibling(node, 2);
      {
        const header = ($$anchor3) => {
          next();
          var text_3 = text("My Header 2");
          append($$anchor3, text_3);
        };
        AccordionItem(node_3, {
          header,
          children: ($$anchor3, $$slotProps2) => {
            var p_1 = root_10();
            append($$anchor3, p_1);
          },
          $$slots: { header: true, default: true }
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_3$2 = template(`<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`);
var root_5$1 = template(`<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`);
var root_1$1 = template(`<!> <!>`, 1);
function Open($$anchor) {
  Accordion($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$1();
      var node = first_child(fragment_1);
      {
        const header = ($$anchor3) => {
          next();
          var text$1 = text("Header 1-1");
          append($$anchor3, text$1);
        };
        AccordionItem(node, {
          open: true,
          header,
          children: ($$anchor3, $$slotProps2) => {
            var p = root_3$2();
            append($$anchor3, p);
          },
          $$slots: { header: true, default: true }
        });
      }
      var node_1 = sibling(node, 2);
      {
        const header = ($$anchor3) => {
          next();
          var text_1 = text("Header 1-2");
          append($$anchor3, text_1);
        };
        AccordionItem(node_1, {
          header,
          children: ($$anchor3, $$slotProps2) => {
            var p_1 = root_5$1();
            append($$anchor3, p_1);
          },
          $$slots: { header: true, default: true }
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_3$1 = template(`<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`);
var root_5 = template(`<p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>`);
var root_1 = template(`<!> <!>`, 1);
function OpenMultiple($$anchor) {
  Accordion($$anchor, {
    isSingle: false,
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1();
      var node = first_child(fragment_1);
      {
        const header = ($$anchor3) => {
          next();
          var text$1 = text("Header 1-1");
          append($$anchor3, text$1);
        };
        AccordionItem(node, {
          header,
          children: ($$anchor3, $$slotProps2) => {
            var p = root_3$1();
            append($$anchor3, p);
          },
          $$slots: { header: true, default: true }
        });
      }
      var node_1 = sibling(node, 2);
      {
        const header = ($$anchor3) => {
          next();
          var text_1 = text("Header 1-2");
          append($$anchor3, text_1);
        };
        AccordionItem(node_1, {
          header,
          children: ($$anchor3, $$slotProps2) => {
            var p_1 = root_5();
            append($$anchor3, p_1);
          },
          $$slots: { header: true, default: true }
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_3 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
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
      var text$1 = text("Accordion");
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
            labelClass: "w-40 my-1",
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
