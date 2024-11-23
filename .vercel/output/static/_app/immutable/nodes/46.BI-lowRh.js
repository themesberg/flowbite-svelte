import { a as append, t as template, n as ns_template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, b as get, f as first_child, s as sibling, t as template_effect, a as pop, d as derived, g as getContext, c as child, r as reset, n as next, a7 as set, a6 as state, u as user_effect } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { p as prop, r as rest_props, i as if_block, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { x as remove_input_defaults, D as bind_group, a as set_attributes, bb as radioButton, s as set_attribute, t as twMerge, az as Dropdown, aS as sineIn, V as uiHelpers, ao as radio } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { R as Radio, C as CompoAttributesViewer, L as Label } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { H as Helper } from "../chunks/Helper.CNgurqbV.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { A as ArrowRightOutline } from "../chunks/ArrowRightOutline.C1f8PGpf.js";
import { B as ButtonGroup } from "../chunks/ButtonGroup.CoXuPkoy.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { D as DropdownUl } from "../chunks/DropdownUl.CBcIivYZ.js";
import { C as ChevronDownOutline } from "../chunks/ChevronDownOutline.C3ncqrR6.js";
var root_1$6 = template(`<input> <!>`, 1);
function RadioButton($$anchor, $$props) {
  push($$props, true);
  const binding_group = [];
  let group = prop($$props, "group", 15), inline = prop($$props, "inline", 3, true), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "group",
    "value",
    "inline",
    "pill",
    "outline",
    "buttonSize",
    "color",
    "shadow",
    "class"
  ]);
  const base = derived(() => radioButton({
    inline: inline(),
    className: $$props.class
  }));
  var checked = derived(() => $$props.value === group());
  Button($$anchor, {
    tag: "label",
    get checked() {
      return get(checked);
    },
    get pill() {
      return $$props.pill;
    },
    get outline() {
      return $$props.outline;
    },
    get size() {
      return $$props.buttonSize;
    },
    get color() {
      return $$props.color;
    },
    get shadow() {
      return $$props.shadow;
    },
    get class() {
      return get(base);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$6();
      var input = first_child(fragment_1);
      remove_input_defaults(input);
      let attributes;
      var node = sibling(input, 2);
      snippet(node, () => $$props.children);
      template_effect(() => attributes = set_attributes(input, attributes, {
        type: "radio",
        value: $$props.value,
        ...restProps,
        class: "sr-only"
      }));
      bind_group(
        binding_group,
        [],
        input,
        () => {
          $$props.value;
          return group();
        },
        group
      );
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  pop();
}
var root_1$5 = ns_template(`<title> </title>`);
var root_2$3 = ns_template(`<desc> </desc>`);
var root$a = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M17.316 4.052a.99.99 0 0 0-.9.14c-.262.19-.416.495-.416.82v8.566a4.573 4.573 0 0 0-2-.464c-1.99 0-4 1.342-4 3.443 0 2.1 2.01 3.443 4 3.443 1.99 0 4-1.342 4-3.443V6.801c.538.5 1 1.219 1 2.262 0 .56.448 1.013 1 1.013s1-.453 1-1.013c0-1.905-.956-3.18-1.86-3.942a6.391 6.391 0 0 0-1.636-.998 4 4 0 0 0-.166-.063l-.013-.005-.005-.002h-.002l-.002-.001ZM4 5.012c-.552 0-1 .454-1 1.013 0 .56.448 1.013 1 1.013h9c.552 0 1-.453 1-1.013 0-.559-.448-1.012-1-1.012H4Zm0 4.051c-.552 0-1 .454-1 1.013 0 .56.448 1.013 1 1.013h9c.552 0 1-.454 1-1.013 0-.56-.448-1.013-1-1.013H4Zm0 4.05c-.552 0-1 .454-1 1.014 0 .559.448 1.012 1 1.012h4c.552 0 1-.453 1-1.012 0-.56-.448-1.013-1-1.013H4Z" clip-rule="evenodd"></path></svg>`);
function ListMusicSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "list music solid"), restProps = rest_props($$props, [
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
  var svg = root$a();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$5();
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
var root_1$4 = ns_template(`<title> </title>`);
var root_2$2 = ns_template(`<desc> </desc>`);
var root$9 = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"></path></svg>`);
function ListOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "list outline"), restProps = rest_props($$props, [
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
  var svg = root$9();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$4();
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
var root_1$3 = ns_template(`<title> </title>`);
var root_2$1 = ns_template(`<desc> </desc>`);
var root$8 = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 6h8m-8 6h8m-8 6h8M4 16a2 2 0 1 1 3.321 1.5L4 20h5M4 5l2-1v6m-2 0h4"></path></svg>`);
function OrderedListOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "ordered list outline"), restProps = rest_props($$props, [
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
const __vite_glob_0_0 = '<script lang="ts">\n  import { Radio } from "$lib";\n  import { ArrowRightOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p>\n<div class="grid w-full gap-6 p-4 md:grid-cols-2">\n  <Radio name="custom">\n    <div id="hosting-small" class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500">\n      <div>\n        <div class="w-full text-lg font-semibold">0-50 MB</div>\n        <div class="w-full">Good for small websites</div>\n      </div>\n      <ArrowRightOutline class="ms-3 h-6 w-6" />\n    </div>\n  </Radio>\n  <Radio name="custom">\n    <div id="hosting-big" class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500">\n      <div class="block">\n        <div class="w-full text-lg font-semibold">500-1000 MB</div>\n        <div class="w-full">Good for large websites</div>\n      </div>\n      <ArrowRightOutline class="ms-3 h-6 w-6" />\n    </div>\n  </Radio>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Radio } from "$lib";\n<\/script>\n\n<div class="grid grid-cols-2 gap-6">\n  <div class="rounded border border-gray-200 dark:border-gray-700">\n    <Radio name="bordered" labelClass="p-4">Default radio</Radio>\n  </div>\n  <div class="rounded border border-gray-200 dark:border-gray-700">\n    <Radio name="bordered" checked labelClass="p-4">Checked state</Radio>\n  </div>\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Radio } from "$lib";\n<\/script>\n\n<p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>\n<ul class="w-full items-center divide-x divide-gray-200 rounded-lg border border-gray-200 sm:flex rtl:divide-x-reverse dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800">\n  <li class="w-full">\n    <Radio name="hor-list" labelClass="p-3">Svelte</Radio>\n  </li>\n  <li class="w-full">\n    <Radio name="hor-list" labelClass="p-3">Vue JS</Radio>\n  </li>\n  <li class="w-full">\n    <Radio name="hor-list" labelClass="p-3">React</Radio>\n  </li>\n  <li class="w-full">\n    <Radio name="hor-list" labelClass="p-3">Angular</Radio>\n  </li>\n</ul>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Radio } from "$lib";\n  let inline1 = $state("second");\n<\/script>\n\n<div class="flex gap-3 p-4">\n  <Radio bind:group={inline1} name="inline-layout" value="first">Inline 1</Radio>\n  <Radio bind:group={inline1} name="inline-layout" value="second">Inline 2 checked</Radio>\n  <Radio bind:group={inline1} name="inline-layout" value="third">Inline 3</Radio>\n  <Radio bind:group={inline1} name="inline-layout" value="fourth" disabled>Inline disabled</Radio>\n</div>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { RadioButton, ButtonGroup } from "$lib";\n  import { ListMusicSolid, OrderedListOutline, ListOutline } from "flowbite-svelte-icons";\n  let radioGroup: string = $state("notes");\n<\/script>\n\n<div class="p-2">\n  <RadioButton value="notes" bind:group={radioGroup}><ListMusicSolid /></RadioButton>\n  <RadioButton value="numbers" bind:group={radioGroup}><OrderedListOutline /></RadioButton>\n  <RadioButton value="bullets" bind:group={radioGroup}><ListOutline /></RadioButton>\n</div>\n\n<ButtonGroup class="p-2">\n  <RadioButton value="notes" bind:group={radioGroup}><ListMusicSolid /></RadioButton>\n  <RadioButton value="numbers" bind:group={radioGroup}><OrderedListOutline /></RadioButton>\n  <RadioButton value="bullets" bind:group={radioGroup}><ListOutline /></RadioButton>\n</ButtonGroup>\n\n<p>List style: {radioGroup}</p>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { sineIn } from "svelte/easing";\n  import { Button, Dropdown, DropdownUl, Radio, Helper, uiHelpers } from "$lib";\n  import { ChevronDownOutline } from "flowbite-svelte-icons";\n  let transitionParams = {\n    y: 0,\n    duration: 200,\n    easing: sineIn\n  };\n  let dropdown = uiHelpers();\n  let dropdownStatus = $state(false);\n  let closeDropdown = dropdown.close;\n  let group3 = $state(2);\n  $effect(() => {\n    // this can be done adding nav.navStatus directly to DOM element\n    // without using effect\n    dropdownStatus = dropdown.isOpen;\n  });\n<\/script>\n\n<div class="flex h-72 items-start justify-center">\n  <Button onclick={dropdown.toggle}>Dropdown radio<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>\n  <div class="relative">\n    <Dropdown {dropdownStatus} {closeDropdown} params={transitionParams} class="absolute -left-[220px] top-[40px] w-64">\n      <DropdownUl>\n        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">\n          <Radio name="group3" bind:group={group3} value={1}>Enable notifications</Radio>\n          <Helper class="ps-6">Some helpful instruction goes over here.</Helper>\n        </li>\n        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">\n          <Radio name="group3" bind:group={group3} value={2}>Enable 2FA auth</Radio>\n          <Helper class="ps-6">Some helpful instruction goes over here.</Helper>\n        </li>\n        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">\n          <Radio name="group3" bind:group={group3} value={3}>Subscribe newsletter</Radio>\n          <Helper class="ps-6">Some helpful instruction goes over here.</Helper>\n        </li>\n      </DropdownUl>\n    </Dropdown>\n  </div>\n</div>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { Radio } from "$lib";\n  let technology = $state("svelte");\n<\/script>\n\n<p class="mb-4 font-semibold text-gray-900 dark:text-white">\n  Technology <span class="capitalize">{technology}</span>\n</p>\n<ul class="w-48 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800">\n  <li>\n    <Radio labelClass="p-3" bind:group={technology} value="svelte">Svelte</Radio>\n  </li>\n  <li>\n    <Radio labelClass="p-3" bind:group={technology} value="vue js">Vue JS</Radio>\n  </li>\n  <li>\n    <Radio labelClass="p-3" bind:group={technology} value="react">React</Radio>\n  </li>\n  <li>\n    <Radio labelClass="p-3" bind:group={technology} value="angular">Angular</Radio>\n  </li>\n</ul>\n';
const __vite_glob_0_7 = '<script lang="ts">\n  import { Radio } from "$lib";\n<\/script>\n\n<Radio name="with-link" labelClass="m-2">\n  I agree with the <a href="/" class="ms-1 text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a>\n  .\n</Radio>\n';
const __vite_glob_0_8 = '<script>\n  import { Radio, Helper } from "$lib";\n<\/script>\n';
var root_1$2 = template(`<div id="hosting-small" class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500"><div><div class="w-full text-lg font-semibold">0-50 MB</div> <div class="w-full">Good for small websites</div></div> <!></div>`);
var root_2 = template(`<div id="hosting-big" class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500"><div class="block"><div class="w-full text-lg font-semibold">500-1000 MB</div> <div class="w-full">Good for large websites</div></div> <!></div>`);
var root$7 = template(`<p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p> <div class="grid w-full gap-6 p-4 md:grid-cols-2"><!> <!></div>`, 1);
function AdvancedLayout($$anchor) {
  var fragment = root$7();
  var div = sibling(first_child(fragment), 2);
  var node = child(div);
  Radio(node, {
    name: "custom",
    children: ($$anchor2, $$slotProps) => {
      var div_1 = root_1$2();
      var node_1 = sibling(child(div_1), 2);
      ArrowRightOutline(node_1, { class: "ms-3 h-6 w-6" });
      reset(div_1);
      append($$anchor2, div_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node, 2);
  Radio(node_2, {
    name: "custom",
    children: ($$anchor2, $$slotProps) => {
      var div_2 = root_2();
      var node_3 = sibling(child(div_2), 2);
      ArrowRightOutline(node_3, { class: "ms-3 h-6 w-6" });
      reset(div_2);
      append($$anchor2, div_2);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, fragment);
}
var root$6 = template(`<p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p> <ul class="w-full items-center divide-x divide-gray-200 rounded-lg border border-gray-200 sm:flex rtl:divide-x-reverse dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800"><li class="w-full"><!></li> <li class="w-full"><!></li> <li class="w-full"><!></li> <li class="w-full"><!></li></ul>`, 1);
function HorizontalListGroup($$anchor) {
  var fragment = root$6();
  var ul = sibling(first_child(fragment), 2);
  var li = child(ul);
  var node = child(li);
  Radio(node, {
    name: "hor-list",
    labelClass: "p-3",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Svelte");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  reset(li);
  var li_1 = sibling(li, 2);
  var node_1 = child(li_1);
  Radio(node_1, {
    name: "hor-list",
    labelClass: "p-3",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Vue JS");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  reset(li_1);
  var li_2 = sibling(li_1, 2);
  var node_2 = child(li_2);
  Radio(node_2, {
    name: "hor-list",
    labelClass: "p-3",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("React");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  reset(li_2);
  var li_3 = sibling(li_2, 2);
  var node_3 = child(li_3);
  Radio(node_3, {
    name: "hor-list",
    labelClass: "p-3",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_3 = text("Angular");
      append($$anchor2, text_3);
    },
    $$slots: { default: true }
  });
  reset(li_3);
  reset(ul);
  append($$anchor, fragment);
}
var root$5 = template(`<div class="flex gap-3 p-4"><!> <!> <!> <!></div>`);
function InlineLayout($$anchor) {
  let inline1 = state("second");
  var div = root$5();
  var node = child(div);
  Radio(node, {
    get group() {
      return get(inline1);
    },
    set group($$value) {
      set(inline1, proxy($$value));
    },
    name: "inline-layout",
    value: "first",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Inline 1");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Radio(node_1, {
    get group() {
      return get(inline1);
    },
    set group($$value) {
      set(inline1, proxy($$value));
    },
    name: "inline-layout",
    value: "second",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Inline 2 checked");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  Radio(node_2, {
    get group() {
      return get(inline1);
    },
    set group($$value) {
      set(inline1, proxy($$value));
    },
    name: "inline-layout",
    value: "third",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Inline 3");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_3 = sibling(node_2, 2);
  Radio(node_3, {
    get group() {
      return get(inline1);
    },
    set group($$value) {
      set(inline1, proxy($$value));
    },
    name: "inline-layout",
    value: "fourth",
    disabled: true,
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_3 = text("Inline disabled");
      append($$anchor2, text_3);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_4 = template(`<!> <!> <!>`, 1);
var root$4 = template(`<div class="p-2"><!> <!> <!></div> <!> <p> </p>`, 1);
function RadioButton_1($$anchor) {
  let radioGroup = state("notes");
  var fragment = root$4();
  var div = first_child(fragment);
  var node = child(div);
  RadioButton(node, {
    value: "notes",
    get group() {
      return get(radioGroup);
    },
    set group($$value) {
      set(radioGroup, proxy($$value));
    },
    children: ($$anchor2, $$slotProps) => {
      ListMusicSolid($$anchor2, {});
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  RadioButton(node_1, {
    value: "numbers",
    get group() {
      return get(radioGroup);
    },
    set group($$value) {
      set(radioGroup, proxy($$value));
    },
    children: ($$anchor2, $$slotProps) => {
      OrderedListOutline($$anchor2, {});
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  RadioButton(node_2, {
    value: "bullets",
    get group() {
      return get(radioGroup);
    },
    set group($$value) {
      set(radioGroup, proxy($$value));
    },
    children: ($$anchor2, $$slotProps) => {
      ListOutline($$anchor2, {});
    },
    $$slots: { default: true }
  });
  reset(div);
  var node_3 = sibling(div, 2);
  ButtonGroup(node_3, {
    class: "p-2",
    children: ($$anchor2, $$slotProps) => {
      var fragment_4 = root_4();
      var node_4 = first_child(fragment_4);
      RadioButton(node_4, {
        value: "notes",
        get group() {
          return get(radioGroup);
        },
        set group($$value) {
          set(radioGroup, proxy($$value));
        },
        children: ($$anchor3, $$slotProps2) => {
          ListMusicSolid($$anchor3, {});
        },
        $$slots: { default: true }
      });
      var node_5 = sibling(node_4, 2);
      RadioButton(node_5, {
        value: "numbers",
        get group() {
          return get(radioGroup);
        },
        set group($$value) {
          set(radioGroup, proxy($$value));
        },
        children: ($$anchor3, $$slotProps2) => {
          OrderedListOutline($$anchor3, {});
        },
        $$slots: { default: true }
      });
      var node_6 = sibling(node_5, 2);
      RadioButton(node_6, {
        value: "bullets",
        get group() {
          return get(radioGroup);
        },
        set group($$value) {
          set(radioGroup, proxy($$value));
        },
        children: ($$anchor3, $$slotProps2) => {
          ListOutline($$anchor3, {});
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_4);
    },
    $$slots: { default: true }
  });
  var p = sibling(node_3, 2);
  var text2 = child(p);
  reset(p);
  template_effect(() => set_text(text2, `List style: ${get(radioGroup) ?? ""}`));
  append($$anchor, fragment);
}
var root_1$1 = template(`Dropdown radio<!>`, 1);
var root_3 = template(`<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600"><!> <!></li> <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600"><!> <!></li> <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600"><!> <!></li>`, 1);
var root$3 = template(`<div class="flex h-72 items-start justify-center"><!> <div class="relative"><!></div></div>`);
function RadioInDropdown($$anchor, $$props) {
  push($$props, true);
  let transitionParams = { y: 0, duration: 200, easing: sineIn };
  let dropdown = uiHelpers();
  let dropdownStatus = state(false);
  let closeDropdown = dropdown.close;
  let group3 = state(2);
  user_effect(() => {
    set(dropdownStatus, proxy(dropdown.isOpen));
  });
  var div = root$3();
  var node = child(div);
  Button(node, {
    get onclick() {
      return dropdown.toggle;
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment = root_1$1();
      var node_1 = sibling(first_child(fragment));
      ChevronDownOutline(node_1, {
        class: "ms-2 h-6 w-6 text-white dark:text-white"
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node, 2);
  var node_2 = child(div_1);
  Dropdown(node_2, {
    get dropdownStatus() {
      return get(dropdownStatus);
    },
    closeDropdown,
    params: transitionParams,
    class: "absolute -left-[220px] top-[40px] w-64",
    children: ($$anchor2, $$slotProps) => {
      DropdownUl($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_3();
          var li = first_child(fragment_2);
          var node_3 = child(li);
          Radio(node_3, {
            name: "group3",
            get group() {
              return get(group3);
            },
            set group($$value) {
              set(group3, proxy($$value));
            },
            value: 1,
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("Enable notifications");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_4 = sibling(node_3, 2);
          Helper(node_4, {
            class: "ps-6",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Some helpful instruction goes over here.");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          reset(li);
          var li_1 = sibling(li, 2);
          var node_5 = child(li_1);
          Radio(node_5, {
            name: "group3",
            get group() {
              return get(group3);
            },
            set group($$value) {
              set(group3, proxy($$value));
            },
            value: 2,
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_2 = text("Enable 2FA auth");
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
          var node_6 = sibling(node_5, 2);
          Helper(node_6, {
            class: "ps-6",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_3 = text("Some helpful instruction goes over here.");
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
          reset(li_1);
          var li_2 = sibling(li_1, 2);
          var node_7 = child(li_2);
          Radio(node_7, {
            name: "group3",
            get group() {
              return get(group3);
            },
            set group($$value) {
              set(group3, proxy($$value));
            },
            value: 3,
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_4 = text("Subscribe newsletter");
              append($$anchor4, text_4);
            },
            $$slots: { default: true }
          });
          var node_8 = sibling(node_7, 2);
          Helper(node_8, {
            class: "ps-6",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_5 = text("Some helpful instruction goes over here.");
              append($$anchor4, text_5);
            },
            $$slots: { default: true }
          });
          reset(li_2);
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  reset(div_1);
  reset(div);
  append($$anchor, div);
  pop();
}
var root$2 = template(`<p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology <span class="capitalize"> </span></p> <ul class="w-48 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800"><li><!></li> <li><!></li> <li><!></li> <li><!></li></ul>`, 1);
function RadioListGroup($$anchor) {
  let technology = state("svelte");
  var fragment = root$2();
  var p = first_child(fragment);
  var span = sibling(child(p));
  var text$1 = child(span, true);
  reset(span);
  reset(p);
  var ul = sibling(p, 2);
  var li = child(ul);
  var node = child(li);
  Radio(node, {
    labelClass: "p-3",
    get group() {
      return get(technology);
    },
    set group($$value) {
      set(technology, proxy($$value));
    },
    value: "svelte",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Svelte");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  reset(li);
  var li_1 = sibling(li, 2);
  var node_1 = child(li_1);
  Radio(node_1, {
    labelClass: "p-3",
    get group() {
      return get(technology);
    },
    set group($$value) {
      set(technology, proxy($$value));
    },
    value: "vue js",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Vue JS");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  reset(li_1);
  var li_2 = sibling(li_1, 2);
  var node_2 = child(li_2);
  Radio(node_2, {
    labelClass: "p-3",
    get group() {
      return get(technology);
    },
    set group($$value) {
      set(technology, proxy($$value));
    },
    value: "react",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_3 = text("React");
      append($$anchor2, text_3);
    },
    $$slots: { default: true }
  });
  reset(li_2);
  var li_3 = sibling(li_2, 2);
  var node_3 = child(li_3);
  Radio(node_3, {
    labelClass: "p-3",
    get group() {
      return get(technology);
    },
    set group($$value) {
      set(technology, proxy($$value));
    },
    value: "angular",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_4 = text("Angular");
      append($$anchor2, text_4);
    },
    $$slots: { default: true }
  });
  reset(li_3);
  reset(ul);
  template_effect(() => set_text(text$1, get(technology)));
  append($$anchor, fragment);
}
var root_1 = template(`I agree with the <a href="/" class="ms-1 text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a> .`, 1);
function RadioWithALink($$anchor) {
  Radio($$anchor, {
    name: "with-link",
    labelClass: "m-2",
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment_1 = root_1();
      next(2);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root$1 = template(`<div class="grid grid-cols-2 gap-6"><div class="rounded border border-gray-200 dark:border-gray-700"><!></div> <div class="rounded border border-gray-200 dark:border-gray-700"><!></div></div>`);
function Bordered($$anchor) {
  var div = root$1();
  var div_1 = child(div);
  var node = child(div_1);
  Radio(node, {
    name: "bordered",
    labelClass: "p-4",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Default radio");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  var node_1 = child(div_2);
  Radio(node_1, {
    name: "bordered",
    checked: true,
    labelClass: "p-4",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Checked state");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  reset(div_2);
  reset(div);
  append($$anchor, div);
}
var root_5 = template(`<div class="mb-4"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!> <!></div>`, 1);
var root_21 = template(`<div class="mb-8 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "forms/radio";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/AdvancedLayout.svelte": __vite_glob_0_0,
    "./examples/Bordered.svelte": __vite_glob_0_1,
    "./examples/HorizontalListGroup.svelte": __vite_glob_0_2,
    "./examples/InlineLayout.svelte": __vite_glob_0_3,
    "./examples/RadioButton.svelte": __vite_glob_0_4,
    "./examples/RadioInDropdown.svelte": __vite_glob_0_5,
    "./examples/RadioListGroup.svelte": __vite_glob_0_6,
    "./examples/RadioWithALink.svelte": __vite_glob_0_7,
    "./examples/Setup.svelte": __vite_glob_0_8
  });
  const exampleArr = [
    {
      name: "Radio with a link",
      component: RadioWithALink
    },
    {
      name: "Bordered",
      component: Bordered
    },
    {
      name: "Advanced layout",
      component: AdvancedLayout
    },
    {
      name: "Horizontal list group",
      component: HorizontalListGroup
    },
    {
      name: "Inline layout",
      component: InlineLayout
    },
    {
      name: "Radio button",
      component: RadioButton_1
    },
    {
      name: "Radio in dropdown",
      component: RadioInDropdown
    },
    {
      name: "Radio list group",
      component: RadioListGroup
    }
  ];
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  const colors = Object.keys(radio.variants.color);
  let radioColor = state("primary");
  let demoRadioColor = state("primary");
  let isChecked = state(true);
  const handleOnchange = (colorOption) => {
    set(demoRadioColor, proxy(colorOption));
    set(isChecked, false);
    set(isChecked, true);
  };
  const inputClasses = ["", "w-6 h-6"];
  let inputClass = state(proxy(inputClasses[0]));
  const changeInputClass = () => {
    set(inputClass, proxy(get(inputClass) === inputClasses[0] ? inputClasses[1] : inputClasses[0]));
  };
  const labelClasses = ["w-24 m-2", ""];
  let labelClass = state(proxy(labelClasses[0]));
  const changeLabelClass = () => {
    set(labelClass, proxy(get(labelClass) === labelClasses[0] ? labelClasses[1] : labelClasses[0]));
  };
  let disabled = state(false);
  const changeDisabled = () => {
    set(disabled, !get(disabled));
  };
  let helperColor = state("primary");
  let helperSlot = state(false);
  const changeHelperSlot = () => {
    set(helperSlot, !get(helperSlot));
  };
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(radioColor) !== "primary") props.push(`color="${get(radioColor)}"`);
    if (get(labelClass) !== "") props.push(`labelClass="${get(labelClass)}"`);
    if (get(inputClass) !== "") props.push(`inputClass="${get(inputClass)}"`);
    if (get(disabled)) props.push("disabled");
    const propsString = props.length > 0 ? props.map((prop2) => `
  ${prop2}`).join("") + "\n" : "";
    return `<Radio
  name="my_radio"${propsString}>Item 1</Radio>
${get(helperSlot) ? `<Helper class="ps-6" color="${get(helperColor)}">Helper text</Helper>` : ""}`;
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
      var text$1 = text("Radio, Helper, and RadioButton");
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
      var text_2 = text("Interactive Radio Builder");
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
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_2 = root_5();
        var div = first_child(fragment_2);
        var node_5 = child(div);
        Radio(node_5, {
          get inputClass() {
            return get(inputClass);
          },
          get labelClass() {
            return get(labelClass);
          },
          name: "radio_interactive",
          get disabled() {
            return get(disabled);
          },
          get color() {
            return get(demoRadioColor);
          },
          get checked() {
            return get(isChecked);
          },
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text("Radio");
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        var node_6 = sibling(node_5, 2);
        if_block(node_6, () => get(helperSlot), ($$anchor3) => {
          Helper($$anchor3, {
            id: "helper-radio-text",
            get color() {
              return get(helperColor);
            },
            class: "ps-6",
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_4 = text("For orders shipped from $25 in books or $29 in other categories");
              append($$anchor4, text_4);
            },
            $$slots: { default: true }
          });
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var node_7 = child(div_1);
        Label(node_7, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_5 = text("Color");
            append($$anchor3, text_5);
          },
          $$slots: { default: true }
        });
        var node_8 = sibling(node_7, 2);
        each(node_8, 17, () => colors, index, ($$anchor3, colorOption) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "radio_color",
            get group() {
              return get(radioColor);
            },
            set group($$value) {
              set(radioColor, proxy($$value));
            },
            onchange: () => handleOnchange(get(colorOption)),
            get color() {
              return get(colorOption);
            },
            get value() {
              return get(colorOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_6 = text();
              template_effect(() => set_text(text_6, get(colorOption)));
              append($$anchor4, text_6);
            },
            $$slots: { default: true }
          });
        });
        reset(div_1);
        var div_2 = sibling(div_1, 2);
        var node_9 = child(div_2);
        Button(node_9, {
          class: "mb-4 w-40",
          color: "secondary",
          onclick: changeHelperSlot,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_7 = text();
            template_effect(() => set_text(text_7, get(helperSlot) ? "Remove helper" : "Add helper"));
            append($$anchor3, text_7);
          },
          $$slots: { default: true }
        });
        var node_10 = sibling(node_9, 2);
        Label(node_10, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_8 = text("Helper Color");
            append($$anchor3, text_8);
          },
          $$slots: { default: true }
        });
        var node_11 = sibling(node_10, 2);
        each(node_11, 17, () => colors, index, ($$anchor3, colorOption) => {
          var labelClass_1 = derived(() => `w-24 my-1 ${(get(helperSlot) ? "" : "opacity-30 cursor-not-allowed") ?? ""}`);
          var disabled_1 = derived(() => get(helperSlot) ? false : true);
          Radio($$anchor3, {
            get labelClass() {
              return get(labelClass_1);
            },
            get disabled() {
              return get(disabled_1);
            },
            name: "helper_color",
            get group() {
              return get(helperColor);
            },
            set group($$value) {
              set(helperColor, proxy($$value));
            },
            get color() {
              return get(colorOption);
            },
            get value() {
              return get(colorOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_9 = text();
              template_effect(() => set_text(text_9, get(colorOption)));
              append($$anchor4, text_9);
            },
            $$slots: { default: true }
          });
        });
        reset(div_2);
        var div_3 = sibling(div_2, 2);
        var node_12 = child(div_3);
        Button(node_12, {
          class: "w-32",
          color: "primary",
          onclick: changeInputClass,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_10 = text();
            template_effect(() => set_text(text_10, get(inputClass) === inputClasses[0] ? "inputClass=w-6 h-6" : "Default size"));
            append($$anchor3, text_10);
          },
          $$slots: { default: true }
        });
        var node_13 = sibling(node_12, 2);
        Button(node_13, {
          class: "w-32",
          color: "secondary",
          onclick: changeLabelClass,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_11 = text();
            template_effect(() => set_text(text_11, get(labelClass) === labelClasses[0] ? "Default labelClass" : "labelClass=w-24 m-2"));
            append($$anchor3, text_11);
          },
          $$slots: { default: true }
        });
        var node_14 = sibling(node_13, 2);
        Button(node_14, {
          class: "w-32",
          color: "lime",
          onclick: changeDisabled,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_12 = text();
            template_effect(() => set_text(text_12, get(disabled) ? "Enabled" : "Disabled"));
            append($$anchor3, text_12);
          },
          $$slots: { default: true }
        });
        reset(div_3);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_15 = sibling(node_4, 2);
  H2(node_15, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_13 = text("Examples");
      append($$anchor2, text_13);
    },
    $$slots: { default: true }
  });
  var node_16 = sibling(node_15, 2);
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
    CodeWrapper(node_16, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_13 = root_21();
        var div_4 = first_child(fragment_13);
        var node_17 = child(div_4);
        Label(node_17, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_14 = text("Example");
            append($$anchor3, text_14);
          },
          $$slots: { default: true }
        });
        var node_18 = sibling(node_17, 2);
        each(node_18, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-44 my-1",
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
              var text_15 = text();
              template_effect(() => set_text(text_15, get(style).name));
              append($$anchor4, text_15);
            },
            $$slots: { default: true }
          });
        });
        reset(div_4);
        var node_19 = sibling(div_4, 2);
        component(node_19, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_13);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_20 = sibling(node_16, 2);
  H2(node_20, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_16 = text("Component data");
      append($$anchor2, text_16);
    },
    $$slots: { default: true }
  });
  var node_21 = sibling(node_20, 2);
  CompoAttributesViewer(node_21, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
