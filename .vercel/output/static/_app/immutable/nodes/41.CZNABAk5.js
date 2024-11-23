import { a as append, t as template, n as ns_template, b as text, c as comment } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, b as get, f as first_child, a1 as effect, s as sibling, t as template_effect, a as pop, d as derived, g as getContext, c as child, r as reset, n as next, u as user_effect, a7 as set, a6 as state } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { p as prop, r as rest_props, i as if_block, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { x as remove_input_defaults, h as action, w as bind_checked, a as set_attributes, t as twMerge, s as set_attribute, az as Dropdown, aS as sineIn, V as uiHelpers, ah as TableBodyCell, E as checkbox } from "../chunks/theme.BtjZjf2R.js";
import { B as Button$1 } from "../chunks/markdown.Ba9FtS5g.js";
import { C as Checkbox } from "../chunks/Checkbox.CJJZSeRG.js";
import { H as Helper } from "../chunks/Helper.CNgurqbV.js";
import { L as Label, C as CompoAttributesViewer, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { B as ButtonGroup } from "../chunks/ButtonGroup.CoXuPkoy.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { F as FacebookSolid, D as DiscordSolid } from "../chunks/FacebookSolid.DgdrFVUS.js";
import { D as DropdownUl } from "../chunks/DropdownUl.CBcIivYZ.js";
import { D as DropdownHeader } from "../chunks/DropdownHeader.kX0miDJ9.js";
import { S as Search } from "../chunks/Search.HiILrOcW.js";
import { C as ChevronDownOutline } from "../chunks/ChevronDownOutline.C3ncqrR6.js";
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow } from "../chunks/TableHead.CXrqw3Md.js";
var root_1$7 = template(`<input> <!>`, 1);
function CheckboxButton($$anchor, $$props) {
  push($$props, true);
  let group = prop($$props, "group", 23, () => []), value = prop($$props, "value", 3, "on"), checked = prop($$props, "checked", 7), inline = prop($$props, "inline", 3, true), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "class",
    "group",
    "value",
    "checked",
    "inline",
    "pill",
    "outline",
    "size",
    "color",
    "shadow"
  ]);
  function init(_, _group) {
    if (checked() === void 0 && value() !== void 0) checked(_group.includes(value()));
    onChange();
    return {
      update(_group2) {
        if (value() !== void 0) {
          checked(_group2.includes(value()));
        }
      }
    };
  }
  function onChange() {
    const index2 = group().indexOf(value());
    if (checked() === void 0) checked(index2 >= 0);
    if (checked()) {
      if (index2 < 0) {
        group().push(value());
        group(group());
      }
    } else {
      if (index2 >= 0) {
        group().splice(index2, 1);
        group(group());
      }
    }
  }
  let buttonClass = derived(() => twMerge(inline() ? "inline-flex" : "flex", $$props.class));
  Button$1($$anchor, {
    tag: "label",
    get checked() {
      return checked();
    },
    get pill() {
      return $$props.pill;
    },
    get outline() {
      return $$props.outline;
    },
    get size() {
      return $$props.size;
    },
    get color() {
      return $$props.color;
    },
    get shadow() {
      return $$props.shadow;
    },
    get class() {
      return get(buttonClass);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$7();
      var input = first_child(fragment_1);
      remove_input_defaults(input);
      let attributes;
      action(input, ($$node, $$action_arg) => init($$node, $$action_arg), group);
      effect(() => bind_checked(input, checked));
      var node = sibling(input, 2);
      snippet(node, () => $$props.children);
      template_effect(() => attributes = set_attributes(input, attributes, {
        type: "checkbox",
        value: value(),
        ...restProps,
        class: "sr-only",
        onchange: onChange
      }));
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  pop();
}
var root_1$6 = ns_template(`<title> </title>`);
var root_2$5 = ns_template(`<desc> </desc>`);
var root$d = ns_template(`<svg><!><!><path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z"></path></svg>`);
function AppleSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "apple solid"), restProps = rest_props($$props, [
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
  var svg = root$d();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$6();
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
    var desc_1 = root_2$5();
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
var root_1$5 = ns_template(`<title> </title>`);
var root_2$4 = ns_template(`<desc> </desc>`);
var root$c = ns_template(`<svg><!><!><path d="M12.013 6.175 7.006 9.369l5.007 3.194-5.007 3.193L2 12.545l5.006-3.193L2 6.175l5.006-3.194 5.007 3.194ZM6.981 17.806l5.006-3.193 5.006 3.193L11.987 21l-5.006-3.194Z"></path><path d="m12.013 12.545 5.006-3.194-5.006-3.176 4.98-3.194L22 6.175l-5.007 3.194L22 12.562l-5.007 3.194-4.98-3.211Z"></path></svg>`);
function DropboxSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "dropbox solid"), restProps = rest_props($$props, [
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
  var svg = root$c();
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
    var desc_1 = root_2$4();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  next(2);
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
const __vite_glob_0_0 = '<script lang="ts">\n  import { Checkbox } from "$lib";\n  import React from "../../../utils/icons/React.svelte";\n  import Vue from "../../../utils/icons/Vue.svelte";\n  import Angular from "../../../utils/icons/Angular.svelte";\n<\/script>\n\n<p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p>\n<div class="grid w-full gap-6 md:grid-cols-3">\n  <Checkbox custom>\n    <div class="w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300">\n      <React />\n      <div class="w-full text-lg font-semibold">React Js</div>\n      <div class="w-full text-sm">A JavaScript library for building user interfaces.</div>\n    </div>\n  </Checkbox>\n  <Checkbox custom>\n    <div class="w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300">\n      <Vue />\n      <div class="w-full text-lg font-semibold">Vue Js</div>\n      <div class="w-full text-sm">Vue.js is an model–view front end JavaScript framework.</div>\n    </div>\n  </Checkbox>\n  <Checkbox custom>\n    <div class="w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300">\n      <Angular />\n      <div class="w-full text-lg font-semibold">Angular</div>\n      <div class="w-full text-sm">A TypeScript-based web application framework.</div>\n    </div>\n  </Checkbox>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Checkbox } from "$lib";\n<\/script>\n\n<div class="rounded border border-gray-200 dark:border-gray-700">\n  <Checkbox classLabel="w-full p-4">Default radio</Checkbox>\n</div>\n<div class="rounded border border-gray-200 dark:border-gray-700">\n  <Checkbox checked classLabel="w-full p-4">Checked state</Checkbox>\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { CheckboxButton, ButtonGroup } from "$lib";\n  import { AppleSolid, FacebookSolid, DiscordSolid, DropboxSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="mb-4 space-y-2">\n  <CheckboxButton><AppleSolid class="me-2 h-6 w-6" />Apple</CheckboxButton>\n  <CheckboxButton><FacebookSolid class="me-2 h-6 w-6" />Facebook</CheckboxButton>\n  <CheckboxButton><DiscordSolid class="me-2 h-6 w-6" />Discord</CheckboxButton>\n  <CheckboxButton><DropboxSolid class="me-2 h-6 w-6" />Dropbox</CheckboxButton>\n</div>\n\n<ButtonGroup>\n  <CheckboxButton><AppleSolid class="me-2 h-6 w-6" />Apple</CheckboxButton>\n  <CheckboxButton><FacebookSolid class="me-2 h-6 w-6" />Facebook</CheckboxButton>\n  <CheckboxButton><DiscordSolid class="me-2 h-6 w-6" />Discord</CheckboxButton>\n  <CheckboxButton class="hidden sm:inline-flex"><DropboxSolid class="me-2 h-6 w-6" />Dropbox</CheckboxButton>\n</ButtonGroup>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { sineIn } from "svelte/easing";\n  import { Button, Dropdown, DropdownHeader, DropdownUl, Search, Checkbox, uiHelpers } from "$lib";\n  import { ChevronDownOutline } from "flowbite-svelte-icons";\n  let transitionParams = {\n    y: 0,\n    duration: 200,\n    easing: sineIn\n  };\n  let dropdown = uiHelpers();\n  let dropdownStatus = $state(false);\n  let closeDropdown = dropdown.close;\n\n  $effect(() => {\n    // this can be done adding nav.navStatus directly to DOM element\n    // without using effect\n    dropdownStatus = dropdown.isOpen;\n  });\n<\/script>\n\n<div class="h-56">\n  <div class="flex justify-center">\n    <Button onclick={dropdown.toggle}>Project users<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>\n    <div class="relative">\n      <Dropdown {dropdownStatus} {closeDropdown} params={transitionParams} class="absolute -left-[190px] top-[45px] w-52 overflow-y-auto p-2 pb-3 text-sm">\n        <div class="relative">\n          <DropdownHeader>\n            <div class="p-0">\n              <Search size="md" class="pl-8" />\n            </div>\n          </DropdownHeader>\n          <DropdownUl>\n            <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">\n              <Checkbox>Robert Gouth</Checkbox>\n            </li>\n            <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">\n              <Checkbox>Bonnie Green</Checkbox>\n            </li>\n          </DropdownUl>\n        </div>\n      </Dropdown>\n    </div>\n  </div>\n</div>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Checkbox, Button, type CheckboxItem } from "$lib";\n  let choices: CheckboxItem[] = [\n    { value: "1", checkboxLabel: "One" },\n    { value: "2", checkboxLabel: "Two" },\n    { value: "3", checkboxLabel: "Three" }\n  ];\n  let group: (string | number)[] = $state(["2", "3"]);\n  const clearGroup = () => {\n    group = [];\n  };\n<\/script>\n\n<div class="flex gap-2">\n  <Checkbox name="flavours" {choices} bind:group />\n</div>\n<div class="my-2 w-44 rounded-lg border border-gray-200 p-2 dark:border-gray-700 dark:text-gray-400">\n  Group: {group}\n</div>\n<Button onclick={clearGroup}>Clear</Button>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { Checkbox } from "$lib";\n<\/script>\n\n<p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p>\n<ul class="w-full items-center divide-x divide-gray-200 rounded-lg border border-gray-200 sm:flex rtl:divide-x-reverse dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800">\n  <li class="w-full">\n    <Checkbox checked classLabel="p-3">Svelte</Checkbox>\n  </li>\n  <li class="w-full"><Checkbox classLabel="p-3">Vue JS</Checkbox></li>\n  <li class="w-full"><Checkbox classLabel="p-3">React</Checkbox></li>\n  <li class="w-full"><Checkbox classLabel="p-3">Angular</Checkbox></li>\n</ul>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { Checkbox } from "$lib";\n<\/script>\n\n<div class="flex gap-3">\n  <Checkbox>Inline 1</Checkbox>\n  <Checkbox>Inline 2</Checkbox>\n  <Checkbox checked>Inline checked</Checkbox>\n  <Checkbox disabled>Inline disabled</Checkbox>\n</div>\n';
const __vite_glob_0_7 = '<script lang="ts">\n  import { Checkbox } from "$lib";\n<\/script>\n\n<Checkbox>\n  I agree with the\n  <a href="/" class="ms-1 text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a>\n  .\n</Checkbox>\n';
const __vite_glob_0_8 = '<script lang="ts">\n  import { Checkbox } from "$lib";\n<\/script>\n\n<p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology</p>\n<ul class="w-48 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800">\n  <li><Checkbox checked classLabel="p-3">svelte</Checkbox></li>\n  <li><Checkbox classLabel="p-3">Vue JS</Checkbox></li>\n  <li><Checkbox classLabel="p-3">React</Checkbox></li>\n  <li><Checkbox classLabel="p-3">Angular</Checkbox></li>\n</ul>\n';
const __vite_glob_0_9 = '<script>\n  import { Checkbox, Helper, Label } from "$lib";\n<\/script>\n';
const __vite_glob_0_10 = '<script lang="ts">\n  import { Checkbox, Label, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "$lib";\n<\/script>\n\n<Table>\n  <TableHead>\n    <TableHeadCell>Left column</TableHeadCell>\n    <TableHeadCell>Right column</TableHeadCell>\n  </TableHead>\n  <TableBody class="divide-y dark:divide-gray-700">\n    <TableBodyRow class="divide-x rtl:divide-x-reverse dark:divide-gray-700">\n      <TableBodyCell><Label for="checkbox1">Default checkbox</Label></TableBodyCell>\n      <TableBodyCell><Label for="checkbox2">Disabled checkbox</Label></TableBodyCell>\n    </TableBodyRow>\n    <TableBodyRow class="divide-x rtl:divide-x-reverse dark:divide-gray-700">\n      <TableBodyCell><Checkbox id="checkbox1" checked /></TableBodyCell>\n      <TableBodyCell><Checkbox id="checkbox2" disabled /></TableBodyCell>\n    </TableBodyRow>\n  </TableBody>\n</Table>\n';
var root$b = ns_template(`<svg class="mb-2 h-7 w-7 text-sky-500" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>`);
function React($$anchor) {
  var svg = root$b();
  append($$anchor, svg);
}
var root$a = ns_template(`<svg class="mb-2 h-7 w-7 text-green-400" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"></path></svg>`);
function Vue($$anchor) {
  var svg = root$a();
  append($$anchor, svg);
}
var root$9 = ns_template(`<svg class="mb-2 h-7 w-7 text-red-600" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path></svg>`);
function Angular($$anchor) {
  var svg = root$9();
  append($$anchor, svg);
}
var root_1$4 = template(`<div class="w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300"><!> <div class="w-full text-lg font-semibold">React Js</div> <div class="w-full text-sm">A JavaScript library for building user interfaces.</div></div>`);
var root_2$3 = template(`<div class="w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300"><!> <div class="w-full text-lg font-semibold">Vue Js</div> <div class="w-full text-sm">Vue.js is an model–view front end JavaScript framework.</div></div>`);
var root_3$2 = template(`<div class="w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300"><!> <div class="w-full text-lg font-semibold">Angular</div> <div class="w-full text-sm">A TypeScript-based web application framework.</div></div>`);
var root$8 = template(`<p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p> <div class="grid w-full gap-6 md:grid-cols-3"><!> <!> <!></div>`, 1);
function Advanced($$anchor) {
  var fragment = root$8();
  var div = sibling(first_child(fragment), 2);
  var node = child(div);
  Checkbox(node, {
    custom: true,
    children: ($$anchor2, $$slotProps) => {
      var div_1 = root_1$4();
      var node_1 = child(div_1);
      React(node_1);
      next(4);
      reset(div_1);
      append($$anchor2, div_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node, 2);
  Checkbox(node_2, {
    custom: true,
    children: ($$anchor2, $$slotProps) => {
      var div_2 = root_2$3();
      var node_3 = child(div_2);
      Vue(node_3);
      next(4);
      reset(div_2);
      append($$anchor2, div_2);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_2, 2);
  Checkbox(node_4, {
    custom: true,
    children: ($$anchor2, $$slotProps) => {
      var div_3 = root_3$2();
      var node_5 = child(div_3);
      Angular(node_5);
      next(4);
      reset(div_3);
      append($$anchor2, div_3);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, fragment);
}
var root$7 = template(`<div class="rounded border border-gray-200 dark:border-gray-700"><!></div> <div class="rounded border border-gray-200 dark:border-gray-700"><!></div>`, 1);
function Bordered($$anchor) {
  var fragment = root$7();
  var div = first_child(fragment);
  var node = child(div);
  Checkbox(node, {
    classLabel: "w-full p-4",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Default radio");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  reset(div);
  var div_1 = sibling(div, 2);
  var node_1 = child(div_1);
  Checkbox(node_1, {
    checked: true,
    classLabel: "w-full p-4",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Checked state");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  reset(div_1);
  append($$anchor, fragment);
}
var root_1$3 = template(`<!>Apple`, 1);
var root_2$2 = template(`<!>Facebook`, 1);
var root_3$1 = template(`<!>Discord`, 1);
var root_4$1 = template(`<!>Dropbox`, 1);
var root_6$1 = template(`<!>Apple`, 1);
var root_7 = template(`<!>Facebook`, 1);
var root_8 = template(`<!>Discord`, 1);
var root_9 = template(`<!>Dropbox`, 1);
var root_5$2 = template(`<!> <!> <!> <!>`, 1);
var root$6 = template(`<div class="mb-4 space-y-2"><!> <!> <!> <!></div> <!>`, 1);
function Button($$anchor) {
  var fragment = root$6();
  var div = first_child(fragment);
  var node = child(div);
  CheckboxButton(node, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$3();
      var node_1 = first_child(fragment_1);
      AppleSolid(node_1, { class: "me-2 h-6 w-6" });
      next();
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node, 2);
  CheckboxButton(node_2, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_2 = root_2$2();
      var node_3 = first_child(fragment_2);
      FacebookSolid(node_3, { class: "me-2 h-6 w-6" });
      next();
      append($$anchor2, fragment_2);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_2, 2);
  CheckboxButton(node_4, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_3 = root_3$1();
      var node_5 = first_child(fragment_3);
      DiscordSolid(node_5, { class: "me-2 h-6 w-6" });
      next();
      append($$anchor2, fragment_3);
    },
    $$slots: { default: true }
  });
  var node_6 = sibling(node_4, 2);
  CheckboxButton(node_6, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_4 = root_4$1();
      var node_7 = first_child(fragment_4);
      DropboxSolid(node_7, { class: "me-2 h-6 w-6" });
      next();
      append($$anchor2, fragment_4);
    },
    $$slots: { default: true }
  });
  reset(div);
  var node_8 = sibling(div, 2);
  ButtonGroup(node_8, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_5 = root_5$2();
      var node_9 = first_child(fragment_5);
      CheckboxButton(node_9, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_6 = root_6$1();
          var node_10 = first_child(fragment_6);
          AppleSolid(node_10, { class: "me-2 h-6 w-6" });
          next();
          append($$anchor3, fragment_6);
        },
        $$slots: { default: true }
      });
      var node_11 = sibling(node_9, 2);
      CheckboxButton(node_11, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_7 = root_7();
          var node_12 = first_child(fragment_7);
          FacebookSolid(node_12, { class: "me-2 h-6 w-6" });
          next();
          append($$anchor3, fragment_7);
        },
        $$slots: { default: true }
      });
      var node_13 = sibling(node_11, 2);
      CheckboxButton(node_13, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_8 = root_8();
          var node_14 = first_child(fragment_8);
          DiscordSolid(node_14, { class: "me-2 h-6 w-6" });
          next();
          append($$anchor3, fragment_8);
        },
        $$slots: { default: true }
      });
      var node_15 = sibling(node_13, 2);
      CheckboxButton(node_15, {
        class: "hidden sm:inline-flex",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_9 = root_9();
          var node_16 = first_child(fragment_9);
          DropboxSolid(node_16, { class: "me-2 h-6 w-6" });
          next();
          append($$anchor3, fragment_9);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_5);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
}
var root_1$2 = template(`Project users<!>`, 1);
var root_3 = template(`<div class="p-0"><!></div>`);
var root_4 = template(`<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600"><!></li> <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600"><!></li>`, 1);
var root_2$1 = template(`<div class="relative"><!> <!></div>`);
var root$5 = template(`<div class="h-56"><div class="flex justify-center"><!> <div class="relative"><!></div></div></div>`);
function Dropdown_1($$anchor, $$props) {
  push($$props, true);
  let transitionParams = { y: 0, duration: 200, easing: sineIn };
  let dropdown = uiHelpers();
  let dropdownStatus = state(false);
  let closeDropdown = dropdown.close;
  user_effect(() => {
    set(dropdownStatus, proxy(dropdown.isOpen));
  });
  var div = root$5();
  var div_1 = child(div);
  var node = child(div_1);
  Button$1(node, {
    get onclick() {
      return dropdown.toggle;
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment = root_1$2();
      var node_1 = sibling(first_child(fragment));
      ChevronDownOutline(node_1, {
        class: "ms-2 h-6 w-6 text-white dark:text-white"
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var div_2 = sibling(node, 2);
  var node_2 = child(div_2);
  Dropdown(node_2, {
    get dropdownStatus() {
      return get(dropdownStatus);
    },
    closeDropdown,
    params: transitionParams,
    class: "absolute -left-[190px] top-[45px] w-52 overflow-y-auto p-2 pb-3 text-sm",
    children: ($$anchor2, $$slotProps) => {
      var div_3 = root_2$1();
      var node_3 = child(div_3);
      DropdownHeader(node_3, {
        children: ($$anchor3, $$slotProps2) => {
          var div_4 = root_3();
          var node_4 = child(div_4);
          Search(node_4, { size: "md", class: "pl-8" });
          reset(div_4);
          append($$anchor3, div_4);
        },
        $$slots: { default: true }
      });
      var node_5 = sibling(node_3, 2);
      DropdownUl(node_5, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_1 = root_4();
          var li = first_child(fragment_1);
          var node_6 = child(li);
          Checkbox(node_6, {
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("Robert Gouth");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          reset(li);
          var li_1 = sibling(li, 2);
          var node_7 = child(li_1);
          Checkbox(node_7, {
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Bonnie Green");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          reset(li_1);
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
      reset(div_3);
      append($$anchor2, div_3);
    },
    $$slots: { default: true }
  });
  reset(div_2);
  reset(div_1);
  reset(div);
  append($$anchor, div);
  pop();
}
var root$4 = template(`<div class="flex gap-2"><!></div> <div class="my-2 w-44 rounded-lg border border-gray-200 p-2 dark:border-gray-700 dark:text-gray-400"> </div> <!>`, 1);
function GroupVariable($$anchor) {
  let choices = [
    { value: "1", checkboxLabel: "One" },
    { value: "2", checkboxLabel: "Two" },
    { value: "3", checkboxLabel: "Three" }
  ];
  let group = state(proxy(["2", "3"]));
  const clearGroup = () => {
    set(group, proxy([]));
  };
  var fragment = root$4();
  var div = first_child(fragment);
  var node = child(div);
  Checkbox(node, {
    name: "flavours",
    choices,
    get group() {
      return get(group);
    },
    set group($$value) {
      set(group, proxy($$value));
    }
  });
  reset(div);
  var div_1 = sibling(div, 2);
  var text$1 = child(div_1);
  reset(div_1);
  var node_1 = sibling(div_1, 2);
  Button$1(node_1, {
    onclick: clearGroup,
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Clear");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  template_effect(() => set_text(text$1, `Group: ${get(group) ?? ""}`));
  append($$anchor, fragment);
}
var root$3 = template(`<p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p> <ul class="w-full items-center divide-x divide-gray-200 rounded-lg border border-gray-200 sm:flex rtl:divide-x-reverse dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800"><li class="w-full"><!></li> <li class="w-full"><!></li> <li class="w-full"><!></li> <li class="w-full"><!></li></ul>`, 1);
function HorizontalList($$anchor) {
  var fragment = root$3();
  var ul = sibling(first_child(fragment), 2);
  var li = child(ul);
  var node = child(li);
  Checkbox(node, {
    checked: true,
    classLabel: "p-3",
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
  Checkbox(node_1, {
    classLabel: "p-3",
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
  Checkbox(node_2, {
    classLabel: "p-3",
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
  Checkbox(node_3, {
    classLabel: "p-3",
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
var root$2 = template(`<div class="flex gap-3"><!> <!> <!> <!></div>`);
function InlineLayout($$anchor) {
  var div = root$2();
  var node = child(div);
  Checkbox(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Inline 1");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Checkbox(node_1, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Inline 2");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  Checkbox(node_2, {
    checked: true,
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Inline checked");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_3 = sibling(node_2, 2);
  Checkbox(node_3, {
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
var root_1$1 = template(`I agree with the <a href="/" class="ms-1 text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a> .`, 1);
function Link($$anchor) {
  Checkbox($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment_1 = root_1$1();
      next(2);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root$1 = template(`<p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology</p> <ul class="w-48 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800"><li><!></li> <li><!></li> <li><!></li> <li><!></li></ul>`, 1);
function ListGroup($$anchor) {
  var fragment = root$1();
  var ul = sibling(first_child(fragment), 2);
  var li = child(ul);
  var node = child(li);
  Checkbox(node, {
    checked: true,
    classLabel: "p-3",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("svelte");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  reset(li);
  var li_1 = sibling(li, 2);
  var node_1 = child(li_1);
  Checkbox(node_1, {
    classLabel: "p-3",
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
  Checkbox(node_2, {
    classLabel: "p-3",
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
  Checkbox(node_3, {
    classLabel: "p-3",
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
var root_2 = template(`<!> <!>`, 1);
var root_6 = template(`<!> <!>`, 1);
var root_11 = template(`<!> <!>`, 1);
var root_5$1 = template(`<!> <!>`, 1);
var root_1 = template(`<!> <!>`, 1);
function Table_1($$anchor) {
  Table($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1();
      var node = first_child(fragment_1);
      TableHead(node, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2();
          var node_1 = first_child(fragment_2);
          TableHeadCell(node_1, {
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("Left column");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_2 = sibling(node_1, 2);
          TableHeadCell(node_2, {
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Right column");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_3 = sibling(node, 2);
      TableBody(node_3, {
        class: "divide-y dark:divide-gray-700",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_3 = root_5$1();
          var node_4 = first_child(fragment_3);
          TableBodyRow(node_4, {
            class: "divide-x rtl:divide-x-reverse dark:divide-gray-700",
            children: ($$anchor4, $$slotProps3) => {
              var fragment_4 = root_6();
              var node_5 = first_child(fragment_4);
              TableBodyCell(node_5, {
                children: ($$anchor5, $$slotProps4) => {
                  Label($$anchor5, {
                    for: "checkbox1",
                    children: ($$anchor6, $$slotProps5) => {
                      next();
                      var text_2 = text("Default checkbox");
                      append($$anchor6, text_2);
                    },
                    $$slots: { default: true }
                  });
                },
                $$slots: { default: true }
              });
              var node_6 = sibling(node_5, 2);
              TableBodyCell(node_6, {
                children: ($$anchor5, $$slotProps4) => {
                  Label($$anchor5, {
                    for: "checkbox2",
                    children: ($$anchor6, $$slotProps5) => {
                      next();
                      var text_3 = text("Disabled checkbox");
                      append($$anchor6, text_3);
                    },
                    $$slots: { default: true }
                  });
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_4);
            },
            $$slots: { default: true }
          });
          var node_7 = sibling(node_4, 2);
          TableBodyRow(node_7, {
            class: "divide-x rtl:divide-x-reverse dark:divide-gray-700",
            children: ($$anchor4, $$slotProps3) => {
              var fragment_7 = root_11();
              var node_8 = first_child(fragment_7);
              TableBodyCell(node_8, {
                children: ($$anchor5, $$slotProps4) => {
                  Checkbox($$anchor5, { id: "checkbox1", checked: true });
                },
                $$slots: { default: true }
              });
              var node_9 = sibling(node_8, 2);
              TableBodyCell(node_9, {
                children: ($$anchor5, $$slotProps4) => {
                  Checkbox($$anchor5, { id: "checkbox2", disabled: true });
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_7);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_3);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_5 = template(`<div class="md:h-8"><!> <!></div> <div class="mb-4 mt-4 flex flex-wrap space-x-4"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!> <!> <!></div>`, 1);
var root_20 = template(`<div class="mb-8 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "forms/checkbox";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Advanced.svelte": __vite_glob_0_0,
    "./examples/Bordered.svelte": __vite_glob_0_1,
    "./examples/Button.svelte": __vite_glob_0_2,
    "./examples/Dropdown.svelte": __vite_glob_0_3,
    "./examples/GroupVariable.svelte": __vite_glob_0_4,
    "./examples/HorizontalList.svelte": __vite_glob_0_5,
    "./examples/InlineLayout.svelte": __vite_glob_0_6,
    "./examples/Link.svelte": __vite_glob_0_7,
    "./examples/ListGroup.svelte": __vite_glob_0_8,
    "./examples/Setup.svelte": __vite_glob_0_9,
    "./examples/Table.svelte": __vite_glob_0_10
  });
  const exampleArr = [
    {
      name: "Advanced",
      component: Advanced
    },
    {
      name: "Bordered",
      component: Bordered
    },
    {
      name: "Button",
      component: Button
    },
    {
      name: "Dropdown",
      component: Dropdown_1
    },
    {
      name: "Group variable",
      component: GroupVariable
    },
    {
      name: "Horizontal list",
      component: HorizontalList
    },
    {
      name: "Inline layout",
      component: InlineLayout
    },
    {
      name: "Link",
      component: Link
    },
    {
      name: "List group",
      component: ListGroup
    },
    {
      name: "Table",
      component: Table_1
    }
  ];
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  const colors = Object.keys(checkbox.variants.color);
  let checkboxColor = state("primary");
  let checkedState = state(false);
  const changeCheckedState = () => {
    set(checkedState, !get(checkedState));
    set(indeterminateState, false);
  };
  let indeterminateState = state(false);
  const changeIntermidiateState = () => {
    set(indeterminateState, !get(indeterminateState));
    set(checkedState, false);
  };
  let disabledState = state(false);
  const changeDisabledState = () => {
    set(disabledState, !get(disabledState));
  };
  let helperState = state(false);
  const changeHelperState = () => {
    set(helperState, !get(helperState));
  };
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(checkedState)) props.push(" checked");
    if (get(indeterminateState)) props.push(" indeterminate");
    if (get(disabledState)) props.push(" disabled");
    const propsString = props.length > 0 ? props.map((prop2) => `
  ${prop2}`).join("") + "\n" : "";
    return `<Checkbox${propsString}>My Checkbox</Checkbox>
${get(helperState) ? `<Helper class="ps-6">Helper text</Helper>` : ""}`;
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
      var text$1 = text("Checkbox");
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
      var text_2 = text("Interactive Checkbox Builder");
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
        Checkbox(node_5, {
          get checked() {
            return get(checkedState);
          },
          get indeterminate() {
            return get(indeterminateState);
          },
          get color() {
            return get(checkboxColor);
          },
          get disabled() {
            return get(disabledState);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_3 = comment();
            var node_6 = first_child(fragment_3);
            if_block(
              node_6,
              () => get(disabledState),
              ($$anchor4) => {
                var text_3 = text("This is disabled");
                append($$anchor4, text_3);
              },
              ($$anchor4) => {
                var text_4 = text("Default checkbox");
                append($$anchor4, text_4);
              }
            );
            append($$anchor3, fragment_3);
          },
          $$slots: { default: true }
        });
        var node_7 = sibling(node_5, 2);
        if_block(node_7, () => get(helperState), ($$anchor3) => {
          Helper($$anchor3, {
            id: "helper-checkbox-text",
            class: "ps-6",
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_5 = text("For orders shipped from $25 in books or $29 in other categories");
              append($$anchor4, text_5);
            },
            $$slots: { default: true }
          });
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var node_8 = child(div_1);
        Label(node_8, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_6 = text("Color");
            append($$anchor3, text_6);
          },
          $$slots: { default: true }
        });
        var node_9 = sibling(node_8, 2);
        each(node_9, 17, () => colors, index, ($$anchor3, colorOption) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "checkbox_color",
            get group() {
              return get(checkboxColor);
            },
            set group($$value) {
              set(checkboxColor, proxy($$value));
            },
            get color() {
              return get(colorOption);
            },
            onchange: () => set(checkedState, true),
            get value() {
              return get(colorOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_7 = text();
              template_effect(() => set_text(text_7, get(colorOption)));
              append($$anchor4, text_7);
            },
            $$slots: { default: true }
          });
        });
        reset(div_1);
        var div_2 = sibling(div_1, 2);
        var node_10 = child(div_2);
        Button$1(node_10, {
          class: "w-48",
          color: "primary",
          onclick: changeCheckedState,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_8 = text();
            template_effect(() => set_text(text_8, get(checkedState) ? "Remove checked" : "Add checked"));
            append($$anchor3, text_8);
          },
          $$slots: { default: true }
        });
        var node_11 = sibling(node_10, 2);
        Button$1(node_11, {
          class: "w-48",
          color: "secondary",
          onclick: changeIntermidiateState,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text();
            template_effect(() => set_text(text_9, get(indeterminateState) ? "Remove indeterminate" : "Add indeterminate"));
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        var node_12 = sibling(node_11, 2);
        Button$1(node_12, {
          class: "w-48",
          color: "pink",
          onclick: changeDisabledState,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_10 = text();
            template_effect(() => set_text(text_10, get(disabledState) ? "Remove disabled" : "Add disabled"));
            append($$anchor3, text_10);
          },
          $$slots: { default: true }
        });
        var node_13 = sibling(node_12, 2);
        Button$1(node_13, {
          class: "w-48",
          color: "lime",
          onclick: changeHelperState,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_11 = text();
            template_effect(() => set_text(text_11, get(helperState) ? "Remove helper" : "Add helper"));
            append($$anchor3, text_11);
          },
          $$slots: { default: true }
        });
        reset(div_2);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_14 = sibling(node_4, 2);
  H2(node_14, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_12 = text("Examples");
      append($$anchor2, text_12);
    },
    $$slots: { default: true }
  });
  var node_15 = sibling(node_14, 2);
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
    CodeWrapper(node_15, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_12 = root_20();
        var div_3 = first_child(fragment_12);
        var node_16 = child(div_3);
        Label(node_16, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_13 = text("Example");
            append($$anchor3, text_13);
          },
          $$slots: { default: true }
        });
        var node_17 = sibling(node_16, 2);
        each(node_17, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-36 my-1",
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
              var text_14 = text();
              template_effect(() => set_text(text_14, get(style).name));
              append($$anchor4, text_14);
            },
            $$slots: { default: true }
          });
        });
        reset(div_3);
        var node_18 = sibling(div_3, 2);
        component(node_18, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_12);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_19 = sibling(node_15, 2);
  H2(node_19, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_15 = text("Component data");
      append($$anchor2, text_15);
    },
    $$slots: { default: true }
  });
  var node_20 = sibling(node_19, 2);
  CompoAttributesViewer(node_20, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
