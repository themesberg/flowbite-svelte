import { c as comment, a as append, t as template, n as ns_template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, f as first_child, a as pop, c as child, s as sibling, r as reset, t as template_effect, b as get, d as derived, g as getContext, n as next, a6 as state, u as user_effect, a7 as set } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { p as prop, i as if_block, r as rest_props, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { aA as fade, aB as banner, N as CloseButton, _ as transition, a as set_attributes, b as set_class, s as set_attribute, t as twMerge, aC as fly, ab as linear, aD as blur, Z as slide, aE as scale, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { S as Skeleton, I as ImagePlaceholder } from "../chunks/Skeleton.DR3Y1iyj.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { A as ArrowRightOutline } from "../chunks/ArrowRightOutline.C1f8PGpf.js";
var root_3 = template(`<div class="flex items-center"><!></div>`);
var root_1$4 = template(`<div><!> <div><!></div> <!></div>`);
function Banner($$anchor, $$props) {
  push($$props, true);
  let bannerStatus = prop($$props, "bannerStatus", 15, true), position = prop($$props, "position", 3, "sticky"), dismissable = prop($$props, "dismissable", 3, true), color = prop($$props, "color", 3, "gray"), bannerType = prop($$props, "bannerType", 3, "default"), transition$1 = prop($$props, "transition", 3, fade), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "header",
    "bannerStatus",
    "position",
    "dismissable",
    "color",
    "bannerType",
    "class",
    "innerClass",
    "transition",
    "params"
  ]);
  const { base, insideDiv } = banner({
    bannerType: bannerType(),
    color: color()
  });
  let bannerClass = derived(() => base({
    position: position(),
    bannerType: bannerType(),
    color: color(),
    className: $$props.class
  }));
  let innerCls = derived(() => insideDiv({
    bannerType: bannerType(),
    class: $$props.innerClass
  }));
  var fragment = comment();
  var node = first_child(fragment);
  if_block(node, bannerStatus, ($$anchor2) => {
    var div = root_1$4();
    let attributes;
    var node_1 = child(div);
    if_block(node_1, () => $$props.header, ($$anchor3) => {
      var fragment_1 = comment();
      var node_2 = first_child(fragment_1);
      snippet(node_2, () => $$props.header);
      append($$anchor3, fragment_1);
    });
    var div_1 = sibling(node_1, 2);
    var node_3 = child(div_1);
    snippet(node_3, () => $$props.children);
    reset(div_1);
    var node_4 = sibling(div_1, 2);
    if_block(node_4, dismissable, ($$anchor3) => {
      var div_2 = root_3();
      var node_5 = child(div_2);
      CloseButton(node_5, {
        class: "-mx-1.5 -my-1.5",
        get color() {
          return color();
        },
        ariaLabel: "Remove badge",
        onclick: () => {
          bannerStatus(false);
        }
      });
      reset(div_2);
      append($$anchor3, div_2);
    });
    reset(div);
    template_effect(() => {
      attributes = set_attributes(div, attributes, {
        tabindex: "-1",
        class: get(bannerClass),
        ...restProps
      });
      set_class(div_1, get(innerCls));
    });
    transition(3, div, transition$1, () => $$props.params);
    append($$anchor2, div);
  });
  append($$anchor, fragment);
  pop();
}
var root_1$3 = ns_template(`<title> </title>`);
var root_2$2 = ns_template(`<desc> </desc>`);
var root$4 = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z" clip-rule="evenodd"></path></svg>`);
function BookOpenSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "book open solid"), restProps = rest_props($$props, [
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
  var svg = root$4();
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
var root_1$2 = ns_template(`<title> </title>`);
var root_2$1 = ns_template(`<desc> </desc>`);
var root$3 = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 9H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6m0-6v6m0-6 5.419-3.87A1 1 0 0 1 18 5.942v12.114a1 1 0 0 1-1.581.814L11 15m7 0a3 3 0 0 0 0-6M6 15h3v5H6v-5Z"></path></svg>`);
function BullhornOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "bullhorn outline"), restProps = rest_props($$props, [
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
  var svg = root$3();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$2();
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
const __vite_glob_0_0 = '<script lang="ts">\n  import { Skeleton, ImagePlaceholder, Banner } from "$lib";\n  import { BookOpenSolid, ArrowRightOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="relative">\n  <div class="p-6">\n    <Skeleton class="py-4" />\n    <ImagePlaceholder class="py-4" />\n  </div>\n  <Banner id="info-banner" position="absolute" bannerType="info">\n    {#snippet header()}\n      <div class="mb-4 md:mb-0 md:me-4">\n        <h2 class="mb-1 text-base font-semibold text-gray-900 dark:text-white">Integration is the key</h2>\n        <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">You can integrate Flowbite with many tools.</p>\n      </div>\n    {/snippet}\n    <a href="/" class="me-3 inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">\n      <BookOpenSolid class="me-2 h-3 w-3" />\n      Learn more\n    </a>\n    <a href="/" class="me-2 inline-flex rounded-lg bg-primary-700 px-3 py-2 text-xs font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">\n      Get started <ArrowRightOutline class="ms-2 h-3 w-3" />\n    </a>\n  </Banner>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Skeleton, ImagePlaceholder, Banner } from "$lib";\n<\/script>\n\n<div class="relative">\n  <div class="p-6">\n    <Skeleton class="py-4" />\n    <ImagePlaceholder class="py-4" />\n  </div>\n  <Banner id="signup-banner" position="absolute" bannerType="signup">\n    <form action="/" class="flex w-full flex-col items-center md:flex-row">\n      <label for="email" class="mb-2 me-auto flex-shrink-0 text-sm font-medium text-gray-500 md:m-0 md:mb-0 md:me-4 dark:text-gray-400">Sign up for our newsletter</label>\n      <input type="email" id="email" placeholder="Enter your email" class="mb-2 block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 md:mb-0 md:me-4 md:w-64 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required />\n      <button type="submit" class="w-full rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>\n    </form>\n  </Banner>\n</div>\n';
const __vite_glob_0_2 = '<script>\n  import { Banner } from "svelte-5-ui-lib";\n<\/script>\n';
var root_1$1 = template(`<div class="mb-4 md:mb-0 md:me-4"><h2 class="mb-1 text-base font-semibold text-gray-900 dark:text-white">Integration is the key</h2> <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">You can integrate Flowbite with many tools.</p></div>`);
var root_2 = template(`<a href="/" class="me-3 inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"><!> Learn more</a> <a href="/" class="me-2 inline-flex rounded-lg bg-primary-700 px-3 py-2 text-xs font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Get started <!></a>`, 1);
var root$2 = template(`<div class="relative"><div class="p-6"><!> <!></div> <!></div>`);
function InformationBanner($$anchor) {
  var div = root$2();
  var div_1 = child(div);
  var node = child(div_1);
  Skeleton(node, { class: "py-4" });
  var node_1 = sibling(node, 2);
  ImagePlaceholder(node_1, { class: "py-4" });
  reset(div_1);
  var node_2 = sibling(div_1, 2);
  {
    const header = ($$anchor2) => {
      var div_2 = root_1$1();
      append($$anchor2, div_2);
    };
    Banner(node_2, {
      id: "info-banner",
      position: "absolute",
      bannerType: "info",
      header,
      children: ($$anchor2, $$slotProps) => {
        var fragment = root_2();
        var a = first_child(fragment);
        var node_3 = child(a);
        BookOpenSolid(node_3, { class: "me-2 h-3 w-3" });
        next();
        reset(a);
        var a_1 = sibling(a, 2);
        var node_4 = sibling(child(a_1));
        ArrowRightOutline(node_4, { class: "ms-2 h-3 w-3" });
        reset(a_1);
        append($$anchor2, fragment);
      },
      $$slots: { header: true, default: true }
    });
  }
  reset(div);
  append($$anchor, div);
}
var root_1 = template(`<form action="/" class="flex w-full flex-col items-center md:flex-row"><label for="email" class="mb-2 me-auto flex-shrink-0 text-sm font-medium text-gray-500 md:m-0 md:mb-0 md:me-4 dark:text-gray-400">Sign up for our newsletter</label> <input type="email" id="email" placeholder="Enter your email" class="mb-2 block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 md:mb-0 md:me-4 md:w-64 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required> <button type="submit" class="w-full rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button></form>`);
var root$1 = template(`<div class="relative"><div class="p-6"><!> <!></div> <!></div>`);
function NewsletterSignupBanner($$anchor) {
  var div = root$1();
  var div_1 = child(div);
  var node = child(div_1);
  Skeleton(node, { class: "py-4" });
  var node_1 = sibling(node, 2);
  ImagePlaceholder(node_1, { class: "py-4" });
  reset(div_1);
  var node_2 = sibling(div_1, 2);
  Banner(node_2, {
    id: "signup-banner",
    position: "absolute",
    bannerType: "signup",
    children: ($$anchor2, $$slotProps) => {
      var form = root_1();
      append($$anchor2, form);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_6 = template(`<p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"><span class="me-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600"><!> <span class="sr-only">Light bulb</span></span> <span>New brand identity has been launched for the <a href="https://flowbite.com" class="decoration-600 dark:decoration-500 inline font-medium text-primary-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-primary-500">Flowbite Library</a></span></p>`);
var root_5 = template(`<div class="mb-4 h-[670px] md:h-[480px]"><div class="p-6"><!> <!></div> <!></div> <div class="p-6"><div class="mb-4 h-12"><!></div> <div class="mb-4 flex flex-wrap space-x-4"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-4"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!> <!></div></div>`, 1);
var root_19 = template(`<div class="mb-4 flex flex-wrap p-6"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "banner";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/InformationBanner.svelte": __vite_glob_0_0,
    "./examples/NewsletterSignupBanner.svelte": __vite_glob_0_1,
    "./examples/Setup.svelte": __vite_glob_0_2
  });
  const exampleArr = [
    {
      name: "Newsletter signup banner",
      component: NewsletterSignupBanner
    },
    {
      name: "Information banner",
      component: InformationBanner
    }
  ];
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  const colors = Object.keys(banner.variants.color);
  let position = state("sticky");
  const changePosition = () => {
    set(position, proxy(get(position) === "sticky" ? "absolute" : "sticky"));
    if (get(position) === "sticky") {
      set(bannerType, "default");
    }
  };
  let bannerType = state("default");
  const changeBannerType = () => {
    set(bannerType, proxy(get(bannerType) === "default" ? "cta" : "default"));
    if (get(bannerType) === "cta") {
      set(position, "absolute");
    }
  };
  let color = state("primary");
  let bannerClass = state("");
  const changeClass = () => {
    set(bannerClass, proxy(get(bannerClass) === "" ? "mt-4" : ""));
  };
  let bannerStatus = state(true);
  const changeStatus = () => {
    set(bannerStatus, true);
  };
  const transitions = [
    {
      name: "Fly",
      transition: fly,
      params: { duration: 500, easing: linear, x: 150 }
    },
    {
      name: "Blur",
      transition: blur,
      params: { duration: 500, easing: linear }
    },
    {
      name: "Slide",
      transition: slide,
      params: { duration: 500, easing: linear, x: -150 }
    },
    {
      name: "Scale",
      transition: scale,
      params: { duration: 500, easing: linear }
    }
  ];
  let selectedTransition = state("Fly");
  let currentTransition = derived(() => transitions.find((t) => t.name === get(selectedTransition)) || transitions[0]);
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(color) !== "primary") props.push(` color="${get(color)}"`);
    if (get(bannerType) !== "default") props.push(` bannerType="${get(bannerType)}"`);
    if (get(position) !== "sticky") props.push(` position="${get(position)}"`);
    if (get(bannerClass)) props.push(` class="${get(bannerClass)}"`);
    if (!get(bannerStatus)) props.push(" bannerStatus={false}");
    if (get(currentTransition) !== transitions[0]) {
      props.push(` transition={${get(currentTransition).transition.name}}`);
      const paramsString = Object.entries(get(currentTransition).params).map(([key, value]) => {
        if (typeof value === "function") {
          return `${key}:${value.name}`;
        }
        return `${key}:${value}`;
      }).join(",");
      props.push(` params={{${paramsString}}}`);
    }
    const propsString = props.length > 0 ? props.map((prop2) => `
  ${prop2}`).join("") + "\n" : "";
    return `<div class="relative h-40">
  <Banner${propsString}>
    My Banner
  </Banner>
</div>`;
  })());
  let builder = uiHelpers();
  let builderExpand = state(false);
  let showBuilderExpandButton = derived(() => isGeneratedCodeOverflow(get(generatedCode)));
  const handleBuilderExpandClick = () => {
    set(builderExpand, !get(builderExpand));
  };
  let codeBlock = uiHelpers();
  let exampleExpand = state(false);
  let showExpandButton = derived(() => isSvelteOverflow(get(svelteCode), exampleModules));
  const handleExpandClick = () => {
    set(exampleExpand, !get(exampleExpand));
  };
  user_effect(() => {
    set(exampleExpand, proxy(codeBlock.isOpen));
    set(builderExpand, proxy(builder.isOpen));
  });
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Banner");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  H2(node_1, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Setup");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  HighlightCompo(node_2, {
    get code() {
      return exampleModules[`./examples/Setup.svelte`];
    }
  });
  var node_3 = sibling(node_2, 2);
  H2(node_3, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Interactive Banner Builder");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_3, 2);
  {
    const codeblock = ($$anchor2) => {
      DynamicCodeBlockHighlight($$anchor2, {
        handleExpandClick: handleBuilderExpandClick,
        get expand() {
          return get(builderExpand);
        },
        get showExpandButton() {
          return get(showBuilderExpandButton);
        },
        get code() {
          return get(generatedCode);
        }
      });
    };
    CodeWrapper(node_4, {
      class: "relative",
      innerClass: "p-0",
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_2 = root_5();
        var div = first_child(fragment_2);
        var div_1 = child(div);
        var node_5 = child(div_1);
        Skeleton(node_5, { class: "py-4" });
        var node_6 = sibling(node_5, 2);
        ImagePlaceholder(node_6, { class: "py-4" });
        reset(div_1);
        var node_7 = sibling(div_1, 2);
        Banner(node_7, {
          id: "sample-banner",
          get position() {
            return get(position);
          },
          get bannerType() {
            return get(bannerType);
          },
          get color() {
            return get(color);
          },
          get class() {
            return get(bannerClass);
          },
          get bannerStatus() {
            return get(bannerStatus);
          },
          set bannerStatus($$value) {
            set(bannerStatus, proxy($$value));
          },
          get transition() {
            return get(currentTransition).transition;
          },
          get params() {
            return get(currentTransition).params;
          },
          children: ($$anchor3, $$slotProps2) => {
            var p = root_6();
            var span = child(p);
            var node_8 = child(span);
            BullhornOutline(node_8, {
              class: "h-3 w-3 text-gray-500 dark:text-gray-400"
            });
            next(2);
            reset(span);
            next(2);
            reset(p);
            append($$anchor3, p);
          },
          $$slots: { default: true }
        });
        reset(div);
        var div_2 = sibling(div, 2);
        var div_3 = child(div_2);
        var node_9 = child(div_3);
        var disabled = derived(() => get(bannerStatus) ? true : false);
        Button(node_9, {
          class: "w-48",
          get disabled() {
            return get(disabled);
          },
          onclick: changeStatus,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text("Open banner");
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        reset(div_3);
        var div_4 = sibling(div_3, 2);
        var node_10 = child(div_4);
        Label(node_10, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_4 = text("Color");
            append($$anchor3, text_4);
          },
          $$slots: { default: true }
        });
        var node_11 = sibling(node_10, 2);
        each(node_11, 17, () => colors, index, ($$anchor3, colorOption) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "color",
            get group() {
              return get(color);
            },
            set group($$value) {
              set(color, proxy($$value));
            },
            get color() {
              return get(colorOption);
            },
            get value() {
              return get(colorOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_5 = text();
              template_effect(() => set_text(text_5, get(colorOption)));
              append($$anchor4, text_5);
            },
            $$slots: { default: true }
          });
        });
        reset(div_4);
        var div_5 = sibling(div_4, 2);
        var node_12 = child(div_5);
        Label(node_12, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_6 = text("Transition");
            append($$anchor3, text_6);
          },
          $$slots: { default: true }
        });
        var node_13 = sibling(node_12, 2);
        each(node_13, 17, () => transitions, index, ($$anchor3, transition2) => {
          Radio($$anchor3, {
            labelClass: "w-16 my-1",
            name: "interactive_transition",
            get group() {
              return get(selectedTransition);
            },
            set group($$value) {
              set(selectedTransition, proxy($$value));
            },
            get value() {
              return get(transition2).name;
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_7 = text();
              template_effect(() => set_text(text_7, get(transition2).name));
              append($$anchor4, text_7);
            },
            $$slots: { default: true }
          });
        });
        reset(div_5);
        var div_6 = sibling(div_5, 2);
        var node_14 = child(div_6);
        Button(node_14, {
          class: "w-40",
          onclick: changePosition,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_8 = text();
            template_effect(() => set_text(text_8, `Position: ${(get(position) === "sticky" ? "absolute" : "sticky") ?? ""}`));
            append($$anchor3, text_8);
          },
          $$slots: { default: true }
        });
        var node_15 = sibling(node_14, 2);
        Button(node_15, {
          class: "w-40",
          color: "blue",
          onclick: changeBannerType,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text();
            template_effect(() => set_text(text_9, `Type: ${(get(bannerType) === "default" ? "cta" : "default") ?? ""}`));
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        var node_16 = sibling(node_15, 2);
        Button(node_16, {
          class: "w-40",
          color: "green",
          onclick: changeClass,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_10 = text();
            template_effect(() => set_text(text_10, get(bannerClass) ? "Remove class" : "Add class"));
            append($$anchor3, text_10);
          },
          $$slots: { default: true }
        });
        reset(div_6);
        reset(div_2);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_17 = sibling(node_4, 2);
  H2(node_17, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_11 = text("Examples");
      append($$anchor2, text_11);
    },
    $$slots: { default: true }
  });
  var node_18 = sibling(node_17, 2);
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
    CodeWrapper(node_18, {
      innerClass: "p-0",
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_11 = root_19();
        var div_7 = first_child(fragment_11);
        var node_19 = child(div_7);
        Label(node_19, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_12 = text("Example");
            append($$anchor3, text_12);
          },
          $$slots: { default: true }
        });
        var node_20 = sibling(node_19, 2);
        each(node_20, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-64 my-1",
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
              var text_13 = text();
              template_effect(() => set_text(text_13, get(style).name));
              append($$anchor4, text_13);
            },
            $$slots: { default: true }
          });
        });
        reset(div_7);
        var node_21 = sibling(div_7, 2);
        component(node_21, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_11);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_22 = sibling(node_18, 2);
  H2(node_22, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_14 = text("Component data");
      append($$anchor2, text_14);
    },
    $$slots: { default: true }
  });
  var node_23 = sibling(node_22, 2);
  CompoAttributesViewer(node_23, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
