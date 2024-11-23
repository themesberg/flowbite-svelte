import { Q as push, a0 as spread_attributes, a2 as bind_props, S as pop, a1 as getContext, W as attr, V as escape_html, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like, X as stringify } from "../../../../chunks/index.js";
import { aM as radioButton, a0 as radio } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { R as Radio, L as Label, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { H as Helper } from "../../../../chunks/Helper.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { A as ArrowRightOutline } from "../../../../chunks/ArrowRightOutline.js";
import { B as ButtonGroup } from "../../../../chunks/ButtonGroup.js";
import { twMerge } from "tailwind-merge";
import { s as sineIn } from "../../../../chunks/index4.js";
import { u as uiHelpers } from "../../../../chunks/uiHelpers.svelte.js";
import { D as Dropdown, a as DropdownUl } from "../../../../chunks/DropdownUl.js";
import { C as ChevronDownOutline } from "../../../../chunks/ChevronDownOutline.js";
function RadioButton($$payload, $$props) {
  push();
  let {
    children,
    group = void 0,
    value = void 0,
    inline = true,
    pill,
    outline,
    buttonSize,
    color,
    shadow,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const base = radioButton({ inline, className });
  Button($$payload, {
    tag: "label",
    checked: value === group,
    pill,
    outline,
    size: buttonSize,
    color,
    shadow,
    class: base,
    children: ($$payload2) => {
      $$payload2.out += `<input${spread_attributes({
        type: "radio",
        checked: group === value,
        value,
        ...restProps,
        class: "sr-only"
      })}> `;
      children($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, { group, value });
  pop();
}
function ListMusicSolid($$payload, $$props) {
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
    ariaLabel = "list music solid",
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
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M17.316 4.052a.99.99 0 0 0-.9.14c-.262.19-.416.495-.416.82v8.566a4.573 4.573 0 0 0-2-.464c-1.99 0-4 1.342-4 3.443 0 2.1 2.01 3.443 4 3.443 1.99 0 4-1.342 4-3.443V6.801c.538.5 1 1.219 1 2.262 0 .56.448 1.013 1 1.013s1-.453 1-1.013c0-1.905-.956-3.18-1.86-3.942a6.391 6.391 0 0 0-1.636-.998 4 4 0 0 0-.166-.063l-.013-.005-.005-.002h-.002l-.002-.001ZM4 5.012c-.552 0-1 .454-1 1.013 0 .56.448 1.013 1 1.013h9c.552 0 1-.453 1-1.013 0-.559-.448-1.012-1-1.012H4Zm0 4.051c-.552 0-1 .454-1 1.013 0 .56.448 1.013 1 1.013h9c.552 0 1-.454 1-1.013 0-.56-.448-1.013-1-1.013H4Zm0 4.05c-.552 0-1 .454-1 1.014 0 .559.448 1.012 1 1.012h4c.552 0 1-.453 1-1.012 0-.56-.448-1.013-1-1.013H4Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function ListOutline($$payload, $$props) {
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
    ariaLabel = "list outline",
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round"${attr("stroke-width", strokeWidth)} d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5"></path></svg>`;
  pop();
}
function OrderedListOutline($$payload, $$props) {
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
    ariaLabel = "ordered list outline",
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="M12 6h8m-8 6h8m-8 6h8M4 16a2 2 0 1 1 3.321 1.5L4 20h5M4 5l2-1v6m-2 0h4"></path></svg>`;
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
function AdvancedLayout($$payload) {
  $$payload.out += `<p class="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</p> <div class="grid w-full gap-6 p-4 md:grid-cols-2">`;
  Radio($$payload, {
    name: "custom",
    children: ($$payload2) => {
      $$payload2.out += `<div id="hosting-small" class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500"><div><div class="w-full text-lg font-semibold">0-50 MB</div> <div class="w-full">Good for small websites</div></div> `;
      ArrowRightOutline($$payload2, { class: "ms-3 h-6 w-6" });
      $$payload2.out += `<!----></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Radio($$payload, {
    name: "custom",
    children: ($$payload2) => {
      $$payload2.out += `<div id="hosting-big" class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-primary-600 peer-checked:text-primary-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-primary-500"><div class="block"><div class="w-full text-lg font-semibold">500-1000 MB</div> <div class="w-full">Good for large websites</div></div> `;
      ArrowRightOutline($$payload2, { class: "ms-3 h-6 w-6" });
      $$payload2.out += `<!----></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function HorizontalListGroup($$payload) {
  $$payload.out += `<p class="mb-4 font-semibold text-gray-900 dark:text-white">Identification</p> <ul class="w-full items-center divide-x divide-gray-200 rounded-lg border border-gray-200 sm:flex rtl:divide-x-reverse dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800"><li class="w-full">`;
  Radio($$payload, {
    name: "hor-list",
    labelClass: "p-3",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Svelte`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></li> <li class="w-full">`;
  Radio($$payload, {
    name: "hor-list",
    labelClass: "p-3",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Vue JS`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></li> <li class="w-full">`;
  Radio($$payload, {
    name: "hor-list",
    labelClass: "p-3",
    children: ($$payload2) => {
      $$payload2.out += `<!---->React`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></li> <li class="w-full">`;
  Radio($$payload, {
    name: "hor-list",
    labelClass: "p-3",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Angular`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></li></ul>`;
}
function InlineLayout($$payload) {
  let inline1 = "second";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="flex gap-3 p-4">`;
    Radio($$payload2, {
      get group() {
        return inline1;
      },
      set group($$value) {
        inline1 = $$value;
        $$settled = false;
      },
      name: "inline-layout",
      value: "first",
      children: ($$payload3) => {
        $$payload3.out += `<!---->Inline 1`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Radio($$payload2, {
      get group() {
        return inline1;
      },
      set group($$value) {
        inline1 = $$value;
        $$settled = false;
      },
      name: "inline-layout",
      value: "second",
      children: ($$payload3) => {
        $$payload3.out += `<!---->Inline 2 checked`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Radio($$payload2, {
      get group() {
        return inline1;
      },
      set group($$value) {
        inline1 = $$value;
        $$settled = false;
      },
      name: "inline-layout",
      value: "third",
      children: ($$payload3) => {
        $$payload3.out += `<!---->Inline 3`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Radio($$payload2, {
      get group() {
        return inline1;
      },
      set group($$value) {
        inline1 = $$value;
        $$settled = false;
      },
      name: "inline-layout",
      value: "fourth",
      disabled: true,
      children: ($$payload3) => {
        $$payload3.out += `<!---->Inline disabled`;
      },
      $$slots: { default: true }
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
function RadioButton_1($$payload) {
  let radioGroup = "notes";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="p-2">`;
    RadioButton($$payload2, {
      value: "notes",
      get group() {
        return radioGroup;
      },
      set group($$value) {
        radioGroup = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        ListMusicSolid($$payload3, {});
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    RadioButton($$payload2, {
      value: "numbers",
      get group() {
        return radioGroup;
      },
      set group($$value) {
        radioGroup = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        OrderedListOutline($$payload3, {});
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    RadioButton($$payload2, {
      value: "bullets",
      get group() {
        return radioGroup;
      },
      set group($$value) {
        radioGroup = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        ListOutline($$payload3, {});
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div> `;
    ButtonGroup($$payload2, {
      class: "p-2",
      children: ($$payload3) => {
        RadioButton($$payload3, {
          value: "notes",
          get group() {
            return radioGroup;
          },
          set group($$value) {
            radioGroup = $$value;
            $$settled = false;
          },
          children: ($$payload4) => {
            ListMusicSolid($$payload4, {});
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        RadioButton($$payload3, {
          value: "numbers",
          get group() {
            return radioGroup;
          },
          set group($$value) {
            radioGroup = $$value;
            $$settled = false;
          },
          children: ($$payload4) => {
            OrderedListOutline($$payload4, {});
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        RadioButton($$payload3, {
          value: "bullets",
          get group() {
            return radioGroup;
          },
          set group($$value) {
            radioGroup = $$value;
            $$settled = false;
          },
          children: ($$payload4) => {
            ListOutline($$payload4, {});
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> <p>List style: ${escape_html(radioGroup)}</p>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}
function RadioInDropdown($$payload, $$props) {
  push();
  let transitionParams = { y: 0, duration: 200, easing: sineIn };
  let dropdown = uiHelpers();
  let dropdownStatus = false;
  let closeDropdown = dropdown.close;
  let group3 = 2;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="flex h-72 items-start justify-center">`;
    Button($$payload2, {
      onclick: dropdown.toggle,
      children: ($$payload3) => {
        $$payload3.out += `<!---->Dropdown radio`;
        ChevronDownOutline($$payload3, {
          class: "ms-2 h-6 w-6 text-white dark:text-white"
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> <div class="relative">`;
    Dropdown($$payload2, {
      dropdownStatus,
      closeDropdown,
      params: transitionParams,
      class: "absolute -left-[220px] top-[40px] w-64",
      children: ($$payload3) => {
        DropdownUl($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">`;
            Radio($$payload4, {
              name: "group3",
              get group() {
                return group3;
              },
              set group($$value) {
                group3 = $$value;
                $$settled = false;
              },
              value: 1,
              children: ($$payload5) => {
                $$payload5.out += `<!---->Enable notifications`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Helper($$payload4, {
              class: "ps-6",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Some helpful instruction goes over here.`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----></li> <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">`;
            Radio($$payload4, {
              name: "group3",
              get group() {
                return group3;
              },
              set group($$value) {
                group3 = $$value;
                $$settled = false;
              },
              value: 2,
              children: ($$payload5) => {
                $$payload5.out += `<!---->Enable 2FA auth`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Helper($$payload4, {
              class: "ps-6",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Some helpful instruction goes over here.`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----></li> <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">`;
            Radio($$payload4, {
              name: "group3",
              get group() {
                return group3;
              },
              set group($$value) {
                group3 = $$value;
                $$settled = false;
              },
              value: 3,
              children: ($$payload5) => {
                $$payload5.out += `<!---->Subscribe newsletter`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Helper($$payload4, {
              class: "ps-6",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Some helpful instruction goes over here.`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----></li>`;
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
function RadioListGroup($$payload) {
  let technology = "svelte";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<p class="mb-4 font-semibold text-gray-900 dark:text-white">Technology <span class="capitalize">${escape_html(technology)}</span></p> <ul class="w-48 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-800"><li>`;
    Radio($$payload2, {
      labelClass: "p-3",
      get group() {
        return technology;
      },
      set group($$value) {
        technology = $$value;
        $$settled = false;
      },
      value: "svelte",
      children: ($$payload3) => {
        $$payload3.out += `<!---->Svelte`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></li> <li>`;
    Radio($$payload2, {
      labelClass: "p-3",
      get group() {
        return technology;
      },
      set group($$value) {
        technology = $$value;
        $$settled = false;
      },
      value: "vue js",
      children: ($$payload3) => {
        $$payload3.out += `<!---->Vue JS`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></li> <li>`;
    Radio($$payload2, {
      labelClass: "p-3",
      get group() {
        return technology;
      },
      set group($$value) {
        technology = $$value;
        $$settled = false;
      },
      value: "react",
      children: ($$payload3) => {
        $$payload3.out += `<!---->React`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></li> <li>`;
    Radio($$payload2, {
      labelClass: "p-3",
      get group() {
        return technology;
      },
      set group($$value) {
        technology = $$value;
        $$settled = false;
      },
      value: "angular",
      children: ($$payload3) => {
        $$payload3.out += `<!---->Angular`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></li></ul>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}
function RadioWithALink($$payload) {
  Radio($$payload, {
    name: "with-link",
    labelClass: "m-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->I agree with the <a href="/" class="ms-1 text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a> .`;
    },
    $$slots: { default: true }
  });
}
function Bordered($$payload) {
  $$payload.out += `<div class="grid grid-cols-2 gap-6"><div class="rounded border border-gray-200 dark:border-gray-700">`;
  Radio($$payload, {
    name: "bordered",
    labelClass: "p-4",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Default radio`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> <div class="rounded border border-gray-200 dark:border-gray-700">`;
  Radio($$payload, {
    name: "bordered",
    checked: true,
    labelClass: "p-4",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Checked state`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
}
function _page($$payload, $$props) {
  push();
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
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  const colors = Object.keys(radio.variants.color);
  let radioColor = "primary";
  let demoRadioColor = "primary";
  let isChecked = true;
  const handleOnchange = (colorOption) => {
    demoRadioColor = colorOption;
    isChecked = false;
    isChecked = true;
  };
  const inputClasses = ["", "w-6 h-6"];
  let inputClass = inputClasses[0];
  const changeInputClass = () => {
    inputClass = inputClass === inputClasses[0] ? inputClasses[1] : inputClasses[0];
  };
  const labelClasses = ["w-24 m-2", ""];
  let labelClass = labelClasses[0];
  const changeLabelClass = () => {
    labelClass = labelClass === labelClasses[0] ? labelClasses[1] : labelClasses[0];
  };
  let disabled = false;
  const changeDisabled = () => {
    disabled = !disabled;
  };
  let helperColor = "primary";
  let helperSlot = false;
  const changeHelperSlot = () => {
    helperSlot = !helperSlot;
  };
  let generatedCode = (() => {
    let props = [];
    if (radioColor !== "primary") props.push(`color="${radioColor}"`);
    if (labelClass !== "") props.push(`labelClass="${labelClass}"`);
    if (inputClass !== "") props.push(`inputClass="${inputClass}"`);
    if (disabled) props.push("disabled");
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Radio
  name="my_radio"${propsString}>Item 1</Radio>
${helperSlot ? `<Helper class="ps-6" color="${helperColor}">Helper text</Helper>` : ""}`;
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
        $$payload3.out += `<!---->Radio, Helper, and RadioButton`;
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
        $$payload3.out += `<!---->Interactive Radio Builder`;
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
          const each_array_1 = ensure_array_like(colors);
          $$payload3.out += `<div class="mb-4">`;
          Radio($$payload3, {
            inputClass,
            labelClass,
            name: "radio_interactive",
            disabled,
            color: demoRadioColor,
            checked: isChecked,
            children: ($$payload4) => {
              $$payload4.out += `<!---->Radio`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          if (helperSlot) {
            $$payload3.out += "<!--[-->";
            Helper($$payload3, {
              id: "helper-radio-text",
              color: helperColor,
              class: "ps-6",
              children: ($$payload4) => {
                $$payload4.out += `<!---->For orders shipped from $25 in books or $29 in other categories`;
              },
              $$slots: { default: true }
            });
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
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
              name: "radio_color",
              get group() {
                return radioColor;
              },
              set group($$value) {
                radioColor = $$value;
                $$settled = false;
              },
              onchange: () => handleOnchange(colorOption),
              color: colorOption,
              value: colorOption,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(colorOption)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Button($$payload3, {
            class: "mb-4 w-40",
            color: "secondary",
            onclick: changeHelperSlot,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(helperSlot ? "Remove helper" : "Add helper")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Helper Color`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let colorOption = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: `w-24 my-1 ${stringify(helperSlot ? "" : "opacity-30 cursor-not-allowed")}`,
              disabled: helperSlot ? false : true,
              name: "helper_color",
              get group() {
                return helperColor;
              },
              set group($$value) {
                helperColor = $$value;
                $$settled = false;
              },
              color: colorOption,
              value: colorOption,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(colorOption)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-32",
            color: "primary",
            onclick: changeInputClass,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(inputClass === inputClasses[0] ? "inputClass=w-6 h-6" : "Default size")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-32",
            color: "secondary",
            onclick: changeLabelClass,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(labelClass === labelClasses[0] ? "Default labelClass" : "labelClass=w-24 m-2")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-32",
            color: "lime",
            onclick: changeDisabled,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(disabled ? "Enabled" : "Disabled")}`;
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
          const each_array_2 = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-8 flex flex-wrap">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Example`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let style = each_array_2[$$index_2];
            Radio($$payload3, {
              labelClass: "w-44 my-1",
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
