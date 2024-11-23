import { Q as push, a0 as spread_attributes, S as pop, a1 as getContext, W as attr, V as escape_html, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like } from "../../../../chunks/index.js";
import { ae as checkbox } from "../../../../chunks/theme.js";
import { B as Button$1 } from "../../../../chunks/markdown.js";
import { C as Checkbox } from "../../../../chunks/Checkbox.js";
import { H as Helper } from "../../../../chunks/Helper.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { B as ButtonGroup } from "../../../../chunks/ButtonGroup.js";
import { twMerge } from "tailwind-merge";
import { F as FacebookSolid, D as DiscordSolid } from "../../../../chunks/FacebookSolid.js";
import { s as sineIn } from "../../../../chunks/index4.js";
import { u as uiHelpers } from "../../../../chunks/uiHelpers.svelte.js";
import { D as Dropdown, a as DropdownUl } from "../../../../chunks/DropdownUl.js";
import { D as DropdownHeader } from "../../../../chunks/DropdownHeader.js";
import { S as Search } from "../../../../chunks/Search.js";
import { C as ChevronDownOutline } from "../../../../chunks/ChevronDownOutline.js";
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from "../../../../chunks/TableHead.js";
function CheckboxButton($$payload, $$props) {
  push();
  let {
    children,
    class: className,
    group = [],
    value = "on",
    checked,
    inline = true,
    pill,
    outline,
    size,
    color,
    shadow,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let buttonClass = twMerge(inline ? "inline-flex" : "flex", className);
  Button$1($$payload, {
    tag: "label",
    checked,
    pill,
    outline,
    size,
    color,
    shadow,
    class: buttonClass,
    children: ($$payload2) => {
      $$payload2.out += `<input${spread_attributes({
        type: "checkbox",
        checked,
        value,
        ...restProps,
        class: "sr-only"
      })}> `;
      children($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  pop();
}
function AppleSolid($$payload, $$props) {
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
    ariaLabel = "apple solid",
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
  $$payload.out += `<!--]--><path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z"></path></svg>`;
  pop();
}
function DropboxSolid($$payload, $$props) {
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
    ariaLabel = "dropbox solid",
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
  $$payload.out += `<!--]--><path d="M12.013 6.175 7.006 9.369l5.007 3.194-5.007 3.193L2 12.545l5.006-3.193L2 6.175l5.006-3.194 5.007 3.194ZM6.981 17.806l5.006-3.193 5.006 3.193L11.987 21l-5.006-3.194Z"></path><path d="m12.013 12.545 5.006-3.194-5.006-3.176 4.98-3.194L22 6.175l-5.007 3.194L22 12.562l-5.007 3.194-4.98-3.211Z"></path></svg>`;
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
function React($$payload) {
  $$payload.out += `<svg class="mb-2 h-7 w-7 text-sky-500" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path></svg>`;
}
function Vue($$payload) {
  $$payload.out += `<svg class="mb-2 h-7 w-7 text-green-400" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"></path></svg>`;
}
function Angular($$payload) {
  $$payload.out += `<svg class="mb-2 h-7 w-7 text-red-600" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path></svg>`;
}
function Advanced($$payload) {
  $$payload.out += `<p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p> <div class="grid w-full gap-6 md:grid-cols-3">`;
  Checkbox($$payload, {
    custom: true,
    children: ($$payload2) => {
      $$payload2.out += `<div class="w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300">`;
      React($$payload2);
      $$payload2.out += `<!----> <div class="w-full text-lg font-semibold">React Js</div> <div class="w-full text-sm">A JavaScript library for building user interfaces.</div></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Checkbox($$payload, {
    custom: true,
    children: ($$payload2) => {
      $$payload2.out += `<div class="w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300">`;
      Vue($$payload2);
      $$payload2.out += `<!----> <div class="w-full text-lg font-semibold">Vue Js</div> <div class="w-full text-sm">Vue.js is an model–view front end JavaScript framework.</div></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Checkbox($$payload, {
    custom: true,
    children: ($$payload2) => {
      $$payload2.out += `<div class="w-full cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-5 font-normal text-gray-500 hover:bg-gray-50 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-gray-300">`;
      Angular($$payload2);
      $$payload2.out += `<!----> <div class="w-full text-lg font-semibold">Angular</div> <div class="w-full text-sm">A TypeScript-based web application framework.</div></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function Bordered($$payload) {
  $$payload.out += `<div class="rounded border border-gray-200 dark:border-gray-700">`;
  Checkbox($$payload, {
    classLabel: "w-full p-4",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Default radio`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="rounded border border-gray-200 dark:border-gray-700">`;
  Checkbox($$payload, {
    checked: true,
    classLabel: "w-full p-4",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Checked state`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function Button($$payload) {
  $$payload.out += `<div class="mb-4 space-y-2">`;
  CheckboxButton($$payload, {
    children: ($$payload2) => {
      AppleSolid($$payload2, { class: "me-2 h-6 w-6" });
      $$payload2.out += `<!---->Apple`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  CheckboxButton($$payload, {
    children: ($$payload2) => {
      FacebookSolid($$payload2, { class: "me-2 h-6 w-6" });
      $$payload2.out += `<!---->Facebook`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  CheckboxButton($$payload, {
    children: ($$payload2) => {
      DiscordSolid($$payload2, { class: "me-2 h-6 w-6" });
      $$payload2.out += `<!---->Discord`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  CheckboxButton($$payload, {
    children: ($$payload2) => {
      DropboxSolid($$payload2, { class: "me-2 h-6 w-6" });
      $$payload2.out += `<!---->Dropbox`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  ButtonGroup($$payload, {
    children: ($$payload2) => {
      CheckboxButton($$payload2, {
        children: ($$payload3) => {
          AppleSolid($$payload3, { class: "me-2 h-6 w-6" });
          $$payload3.out += `<!---->Apple`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      CheckboxButton($$payload2, {
        children: ($$payload3) => {
          FacebookSolid($$payload3, { class: "me-2 h-6 w-6" });
          $$payload3.out += `<!---->Facebook`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      CheckboxButton($$payload2, {
        children: ($$payload3) => {
          DiscordSolid($$payload3, { class: "me-2 h-6 w-6" });
          $$payload3.out += `<!---->Discord`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      CheckboxButton($$payload2, {
        class: "hidden sm:inline-flex",
        children: ($$payload3) => {
          DropboxSolid($$payload3, { class: "me-2 h-6 w-6" });
          $$payload3.out += `<!---->Dropbox`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function Dropdown_1($$payload, $$props) {
  push();
  let transitionParams = { y: 0, duration: 200, easing: sineIn };
  let dropdown = uiHelpers();
  let dropdownStatus = false;
  let closeDropdown = dropdown.close;
  $$payload.out += `<div class="h-56"><div class="flex justify-center">`;
  Button$1($$payload, {
    onclick: dropdown.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Project users`;
      ChevronDownOutline($$payload2, {
        class: "ms-2 h-6 w-6 text-white dark:text-white"
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="relative">`;
  Dropdown($$payload, {
    dropdownStatus,
    closeDropdown,
    params: transitionParams,
    class: "absolute -left-[190px] top-[45px] w-52 overflow-y-auto p-2 pb-3 text-sm",
    children: ($$payload2) => {
      $$payload2.out += `<div class="relative">`;
      DropdownHeader($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<div class="p-0">`;
          Search($$payload3, { size: "md", class: "pl-8" });
          $$payload3.out += `<!----></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      DropdownUl($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">`;
          Checkbox($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Robert Gouth`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></li> <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">`;
          Checkbox($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Bonnie Green`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></li>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div></div>`;
  pop();
}
function GroupVariable($$payload) {
  let choices = [
    { value: "1", checkboxLabel: "One" },
    { value: "2", checkboxLabel: "Two" },
    { value: "3", checkboxLabel: "Three" }
  ];
  let group = ["2", "3"];
  const clearGroup = () => {
    group = [];
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="flex gap-2">`;
    Checkbox($$payload2, {
      name: "flavours",
      choices,
      get group() {
        return group;
      },
      set group($$value) {
        group = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> <div class="my-2 w-44 rounded-lg border border-gray-200 p-2 dark:border-gray-700 dark:text-gray-400">Group: ${escape_html(group)}</div> `;
    Button$1($$payload2, {
      onclick: clearGroup,
      children: ($$payload3) => {
        $$payload3.out += `<!---->Clear`;
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
function HorizontalList($$payload) {
  $$payload.out += `<p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p> <ul class="w-full items-center divide-x divide-gray-200 rounded-lg border border-gray-200 sm:flex rtl:divide-x-reverse dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800"><li class="w-full">`;
  Checkbox($$payload, {
    checked: true,
    classLabel: "p-3",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Svelte`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></li> <li class="w-full">`;
  Checkbox($$payload, {
    classLabel: "p-3",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Vue JS`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></li> <li class="w-full">`;
  Checkbox($$payload, {
    classLabel: "p-3",
    children: ($$payload2) => {
      $$payload2.out += `<!---->React`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></li> <li class="w-full">`;
  Checkbox($$payload, {
    classLabel: "p-3",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Angular`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></li></ul>`;
}
function InlineLayout($$payload) {
  $$payload.out += `<div class="flex gap-3">`;
  Checkbox($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Inline 1`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Checkbox($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Inline 2`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Checkbox($$payload, {
    checked: true,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Inline checked`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Checkbox($$payload, {
    disabled: true,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Inline disabled`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function Link($$payload) {
  Checkbox($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->I agree with the <a href="/" class="ms-1 text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a> .`;
    },
    $$slots: { default: true }
  });
}
function ListGroup($$payload) {
  $$payload.out += `<p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology</p> <ul class="w-48 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800"><li>`;
  Checkbox($$payload, {
    checked: true,
    classLabel: "p-3",
    children: ($$payload2) => {
      $$payload2.out += `<!---->svelte`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></li> <li>`;
  Checkbox($$payload, {
    classLabel: "p-3",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Vue JS`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></li> <li>`;
  Checkbox($$payload, {
    classLabel: "p-3",
    children: ($$payload2) => {
      $$payload2.out += `<!---->React`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></li> <li>`;
  Checkbox($$payload, {
    classLabel: "p-3",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Angular`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></li></ul>`;
}
function Table_1($$payload) {
  Table($$payload, {
    children: ($$payload2) => {
      TableHead($$payload2, {
        children: ($$payload3) => {
          TableHeadCell($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Left column`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableHeadCell($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Right column`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      TableBody($$payload2, {
        class: "divide-y dark:divide-gray-700",
        children: ($$payload3) => {
          TableBodyRow($$payload3, {
            class: "divide-x rtl:divide-x-reverse dark:divide-gray-700",
            children: ($$payload4) => {
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  Label($$payload5, {
                    for: "checkbox1",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Default checkbox`;
                    },
                    $$slots: { default: true }
                  });
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  Label($$payload5, {
                    for: "checkbox2",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Disabled checkbox`;
                    },
                    $$slots: { default: true }
                  });
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableBodyRow($$payload3, {
            class: "divide-x rtl:divide-x-reverse dark:divide-gray-700",
            children: ($$payload4) => {
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  Checkbox($$payload5, { id: "checkbox1", checked: true });
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  Checkbox($$payload5, { id: "checkbox2", disabled: true });
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
function _page($$payload, $$props) {
  push();
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
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  const colors = Object.keys(checkbox.variants.color);
  let checkboxColor = "primary";
  let checkedState = false;
  const changeCheckedState = () => {
    checkedState = !checkedState;
    indeterminateState = false;
  };
  let indeterminateState = false;
  const changeIntermidiateState = () => {
    indeterminateState = !indeterminateState;
    checkedState = false;
  };
  let disabledState = false;
  const changeDisabledState = () => {
    disabledState = !disabledState;
  };
  let helperState = false;
  const changeHelperState = () => {
    helperState = !helperState;
  };
  let generatedCode = (() => {
    let props = [];
    if (checkedState) props.push(" checked");
    if (indeterminateState) props.push(" indeterminate");
    if (disabledState) props.push(" disabled");
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Checkbox${propsString}>My Checkbox</Checkbox>
${helperState ? `<Helper class="ps-6">Helper text</Helper>` : ""}`;
  })();
  let builderExpand = false;
  let showBuilderExpandButton = isGeneratedCodeOverflow(generatedCode);
  const handleBuilderExpandClick = () => {
    builderExpand = !builderExpand;
  };
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
        $$payload3.out += `<!---->Checkbox`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Setup`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    HighlightCompo($$payload2, {
      code: exampleModules[`./examples/Setup.svelte`]
    });
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Interactive Checkbox Builder`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        DynamicCodeBlockHighlight($$payload3, {
          handleExpandClick: handleBuilderExpandClick,
          expand: builderExpand,
          showExpandButton: showBuilderExpandButton,
          code: generatedCode
        });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          const each_array = ensure_array_like(colors);
          $$payload3.out += `<div class="md:h-8">`;
          Checkbox($$payload3, {
            checked: checkedState,
            indeterminate: indeterminateState,
            color: checkboxColor,
            disabled: disabledState,
            children: ($$payload4) => {
              if (disabledState) {
                $$payload4.out += "<!--[-->";
                $$payload4.out += `This is disabled`;
              } else {
                $$payload4.out += "<!--[!-->";
                $$payload4.out += `Default checkbox`;
              }
              $$payload4.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          if (helperState) {
            $$payload3.out += "<!--[-->";
            Helper($$payload3, {
              id: "helper-checkbox-text",
              class: "ps-6",
              children: ($$payload4) => {
                $$payload4.out += `<!---->For orders shipped from $25 in books or $29 in other categories`;
              },
              $$slots: { default: true }
            });
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 mt-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Color`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let colorOption = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-24 my-1",
              name: "checkbox_color",
              get group() {
                return checkboxColor;
              },
              set group($$value) {
                checkboxColor = $$value;
                $$settled = false;
              },
              color: colorOption,
              onchange: () => checkedState = true,
              value: colorOption,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(colorOption)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button$1($$payload3, {
            class: "w-48",
            color: "primary",
            onclick: changeCheckedState,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(checkedState ? "Remove checked" : "Add checked")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button$1($$payload3, {
            class: "w-48",
            color: "secondary",
            onclick: changeIntermidiateState,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(indeterminateState ? "Remove indeterminate" : "Add indeterminate")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button$1($$payload3, {
            class: "w-48",
            color: "pink",
            onclick: changeDisabledState,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(disabledState ? "Remove disabled" : "Add disabled")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button$1($$payload3, {
            class: "w-48",
            color: "lime",
            onclick: changeHelperState,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(helperState ? "Remove helper" : "Add helper")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div>`;
        },
        $$slots: { codeblock: true, default: true }
      });
    }
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Examples`;
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
          const each_array_1 = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-8 flex flex-wrap">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Example`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let style = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: "w-36 my-1",
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
