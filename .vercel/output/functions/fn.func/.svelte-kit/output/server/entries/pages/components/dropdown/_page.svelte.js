import { Q as push, a1 as getContext, a0 as spread_attributes, W as attr, V as escape_html, S as pop, Z as store_get, $ as unsubscribe_stores, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like } from "../../../../chunks/index.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { R as Radio, L as Label, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { u as uiHelpers } from "../../../../chunks/uiHelpers.svelte.js";
import { f as fly, b as blur, s as slide, c as scale } from "../../../../chunks/index3.js";
import "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { D as Dropdown, a as DropdownUl } from "../../../../chunks/DropdownUl.js";
import { D as DropdownDivider } from "../../../../chunks/DropdownDivider.js";
import { D as DropdownLi } from "../../../../chunks/DropdownLi.js";
import { D as DropdownHeader } from "../../../../chunks/DropdownHeader.js";
import { D as DropdownFooter } from "../../../../chunks/DropdownFooter.js";
import { s as sineIn, l as linear } from "../../../../chunks/index4.js";
import { C as ChevronDownOutline } from "../../../../chunks/ChevronDownOutline.js";
import { p as page } from "../../../../chunks/stores.js";
import { A as Avatar } from "../../../../chunks/Avatar.js";
import { C as Checkbox } from "../../../../chunks/Checkbox.js";
import { H as Helper } from "../../../../chunks/Helper.js";
import { twMerge } from "tailwind-merge";
import { C as ChevronRightOutline } from "../../../../chunks/ChevronRightOutline.js";
import { N as Navbar, a as NavUl, c as NavLi, b as NavBrand } from "../../../../chunks/NavUl.js";
import { E as EyeSolid } from "../../../../chunks/EyeSolid.js";
import { C as ChevronLeftOutline } from "../../../../chunks/ChevronLeftOutline.js";
import { S as Search } from "../../../../chunks/Search.js";
import { T as Toggle } from "../../../../chunks/Toggle.js";
function BellSolid($$payload, $$props) {
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
    ariaLabel = "bell solid",
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
  $$payload.out += `<!--]--><path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z"></path></svg>`;
  pop();
}
function ChevronUpOutline($$payload, $$props) {
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
    ariaLabel = "chevron up outline",
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="m16 14-4-4-4 4"></path></svg>`;
  pop();
}
function DotsVerticalOutline($$payload, $$props) {
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
    ariaLabel = "dots vertical outline",
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M12 6h.01M12 12h.01M12 18h.01"></path></svg>`;
  pop();
}
function UserRemoveSolid($$payload, $$props) {
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
    ariaLabel = "user remove solid",
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
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M5 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-2 9a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1Zm13-6a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { sineIn } from "svelte/easing";\n  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from "$lib";\n  import { ChevronDownOutline } from "flowbite-svelte-icons";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  $effect(() => {\n    activeUrl = $page.url.pathname;\n  });\n  let dropdownB = uiHelpers();\n  let dropdownBStatus = $state(false);\n  let closeDropdownB = dropdownB.close;\n  $effect(() => {\n    dropdownBStatus = dropdownB.isOpen;\n  });\n<\/script>\n\n<div class="flex h-48 items-start justify-center">\n  <Button onclick={dropdownB.toggle}>\n    Dropdown\n    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />\n  </Button>\n  <div class="relative">\n    <Dropdown {activeUrl} dropdownStatus={dropdownBStatus} closeDropdown={closeDropdownB} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[150px] top-[40px]">\n      <DropdownUl>\n        <DropdownLi href="/">Dashboard</DropdownLi>\n        <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>\n        <DropdownLi href="/components/footer">Footer</DropdownLi>\n        <DropdownLi href="/components/alert">Alert</DropdownLi>\n      </DropdownUl>\n    </Dropdown>\n  </div>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { sineIn } from "svelte/easing";\n  import { Button, Dropdown, DropdownHeader, DropdownFooter, DropdownUl, DropdownLi, uiHelpers, Avatar } from "$lib";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  $effect(() => {\n    activeUrl = $page.url.pathname;\n  });\n  let dropdownAvatar = uiHelpers();\n  let dropdownAvatarStatus = $state(false);\n  let closeDropdownAvatar = dropdownAvatar.close;\n  $effect(() => {\n    dropdownAvatarStatus = dropdownAvatar.isOpen;\n  });\n<\/script>\n\n<div class="flex h-80 items-start justify-center">\n  <Button onclick={dropdownAvatar.toggle} pill color="light" class="!p-1">\n    <Avatar src="/images/profile-picture-3.webp" class="me-2" />\n    Bonnie Green\n  </Button>\n  <div class="relative">\n    <Dropdown {activeUrl} dropdownStatus={dropdownAvatarStatus} closeDropdown={closeDropdownAvatar} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[160px] top-[50px]">\n      <DropdownHeader class="px-4 py-2">\n        <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>\n        <span class="block truncate text-sm font-medium">name@flowbite.com</span>\n      </DropdownHeader>\n      <DropdownUl>\n        <DropdownLi href="/">Dashboard</DropdownLi>\n        <DropdownLi href="/components/drawer">Drawer</DropdownLi>\n        <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>\n        <DropdownLi href="/components">Alert</DropdownLi>\n      </DropdownUl>\n      <DropdownFooter class="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Sign out</DropdownFooter>\n    </Dropdown>\n  </div>\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { sineIn } from "svelte/easing";\n  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers, Checkbox } from "$lib";\n  import { ChevronDownOutline } from "flowbite-svelte-icons";\n  let dropdownCheckbox = uiHelpers();\n  let dropdownCheckboxStatus = $state(false);\n  let closeDropdownCheckbox = dropdownCheckbox.close;\n  $effect(() => {\n    dropdownCheckboxStatus = dropdownCheckbox.isOpen;\n  });\n<\/script>\n\n<div class="flex h-72 items-start justify-center">\n  <Button onclick={dropdownCheckbox.toggle}>Dropdown checkbox<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>\n  <div class="relative">\n    <Dropdown dropdownStatus={dropdownCheckboxStatus} closeDropdown={closeDropdownCheckbox} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[195px] top-[45px]">\n      <DropdownUl>\n        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">\n          <Checkbox>Robert Gouth</Checkbox>\n        </DropdownLi>\n        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">\n          <Checkbox>Jese Leos</Checkbox>\n        </DropdownLi>\n        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">\n          <Checkbox checked>Bonnie Green</Checkbox>\n        </DropdownLi>\n        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">\n          <Checkbox>Jese Leos</Checkbox>\n        </DropdownLi>\n        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">\n          <Checkbox>Robert Gouth</Checkbox>\n        </DropdownLi>\n        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">\n          <Checkbox>Bonnie Green</Checkbox>\n        </DropdownLi>\n      </DropdownUl>\n    </Dropdown>\n  </div>\n</div>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { sineIn } from "svelte/easing";\n  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers, Checkbox, Helper } from "$lib";\n  import { ChevronDownOutline } from "flowbite-svelte-icons";\n  let dropdownHelper = uiHelpers();\n  let dropdownHelperStatus = $state(false);\n  let closeDropdownHelper = dropdownHelper.close;\n  $effect(() => {\n    dropdownHelperStatus = dropdownHelper.isOpen;\n  });\n<\/script>\n\n<div class="relative flex h-72 items-start justify-center">\n  <Button onclick={dropdownHelper.toggle}>Dropdown helper text<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>\n  <div class="relative">\n    <Dropdown dropdownStatus={dropdownHelperStatus} closeDropdown={closeDropdownHelper} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[240px] top-[45px] w-64 overflow-y-auto p-2 pb-3 text-sm">\n      <DropdownUl>\n        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">\n          <Checkbox>Enable notifications</Checkbox>\n          <Helper class="ps-6">Some helpful instruction goes over here.</Helper>\n        </DropdownLi>\n        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">\n          <Checkbox>Enable 2FA auth</Checkbox>\n          <Helper class="ps-6">Some helpful instruction goes over here.</Helper>\n        </DropdownLi>\n        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">\n          <Checkbox checked>Subscribe newsletter</Checkbox>\n          <Helper class="ps-6">Some helpful instruction goes over here.</Helper>\n        </DropdownLi>\n      </DropdownUl>\n    </Dropdown>\n  </div>\n</div>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { sineIn } from "svelte/easing";\n  import { Dropdown, DropdownUl, DropdownLi, uiHelpers } from "$lib";\n  import { DotsVerticalOutline } from "flowbite-svelte-icons";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  $effect(() => {\n    activeUrl = $page.url.pathname;\n  });\n  let dropdownIcon = uiHelpers();\n  let dropdownIconStatus = $state(false);\n  let closeDropdownIcon = dropdownIcon.close;\n  $effect(() => {\n    dropdownIconStatus = dropdownIcon.isOpen;\n  });\n<\/script>\n\n<div class="flex h-40 items-start justify-center">\n  <DotsVerticalOutline onclick={dropdownIcon.toggle} class="dots-menu dark:text-white" />\n  <div class="relative">\n    <Dropdown {activeUrl} dropdownStatus={dropdownIconStatus} closeDropdown={closeDropdownIcon} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[90px] top-[20px]">\n      <DropdownUl>\n        <DropdownLi href="/">Dashboard</DropdownLi>\n        <DropdownLi href="/components/drawer">Drawer</DropdownLi>\n        <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>\n        <DropdownLi href="/components">Alert</DropdownLi>\n      </DropdownUl>\n    </Dropdown>\n  </div>\n</div>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { sineIn } from "svelte/easing";\n  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from "$lib";\n  import { ChevronDownOutline, ChevronRightOutline } from "flowbite-svelte-icons";\n  let dropdownMultiLevel = uiHelpers();\n  let dropdownMultiLevelStatus = $state(false);\n  let closeDropdownMultiLevel = dropdownMultiLevel.close;\n  let dropdownMultiLevel2 = uiHelpers();\n  let dropdownMultiLevelStatus2 = $state(false);\n  const closeAllMultilevel = () => {\n    dropdownMultiLevel.close();\n    dropdownMultiLevel2.close();\n  };\n  $effect(() => {\n    dropdownMultiLevelStatus = dropdownMultiLevel.isOpen;\n    dropdownMultiLevelStatus2 = dropdownMultiLevel2.isOpen;\n  });\n<\/script>\n\n<div class="flex h-60 items-start justify-center">\n  <Button onclick={dropdownMultiLevel.toggle}>\n    Dropdown\n    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />\n  </Button>\n  <div class="relative">\n    <Dropdown dropdownStatus={dropdownMultiLevelStatus} closeDropdown={closeDropdownMultiLevel} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[150px] top-[40px] overflow-visible">\n      <DropdownUl>\n        <DropdownLi href="/">Dashboard</DropdownLi>\n        <button onclick={dropdownMultiLevel2.toggle} class="flex p-2 pl-4">Dropdown<ChevronRightOutline class="ms-2 h-6 w-6 text-primary-700 dark:text-white" /></button>\n        <div class="relative">\n          <Dropdown dropdownStatus={dropdownMultiLevelStatus2} closeDropdown={closeAllMultilevel} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -top-[60px] left-[120px]">\n            <DropdownUl class="z-100">\n              <DropdownLi href="/">Home</DropdownLi>\n              <DropdownLi href="/components/footer">Footer</DropdownLi>\n              <DropdownLi href="/components/alert">Alert</DropdownLi>\n            </DropdownUl>\n          </Dropdown>\n        </div>\n        <DropdownLi href="/components/drawer">Drawer</DropdownLi>\n        <DropdownLi href="/components/footer">Footer</DropdownLi>\n        <DropdownLi href="/components/button">Button</DropdownLi>\n      </DropdownUl>\n    </Dropdown>\n  </div>\n</div>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { sineIn } from "svelte/easing";\n  import { Dropdown, DropdownUl, DropdownLi, DropdownDivider, uiHelpers, Navbar, NavBrand, NavUl, NavLi } from "$lib";\n  import { ChevronDownOutline } from "flowbite-svelte-icons";\n  let nav = uiHelpers();\n  let navStatus = $state(false);\n  let toggleNav = nav.toggle;\n  let closeNav = nav.close;\n  let dropdownNav = uiHelpers();\n  let dropdownNavStatus = $state(false);\n  let closeDropdownNav = dropdownNav.close;\n  $effect(() => {\n    dropdownNavStatus = dropdownNav.isOpen;\n    navStatus = nav.isOpen;\n  });\n<\/script>\n\n<div class="h-72">\n  <Navbar {toggleNav} {closeNav} {navStatus} breakPoint="md">\n    {#snippet brand()}\n      <NavBrand siteName="Svelte 5">\n        <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />\n      </NavBrand>\n    {/snippet}\n    <NavUl>\n      <NavLi href="/">Home</NavLi>\n      <NavLi href="/components/navbar">Navbar</NavLi>\n      <div class="relative">\n        <NavLi onclick={dropdownNav.toggle} class="cursor-pointer">\n          Dropdown<ChevronDownOutline class="ms-2 inline h-6 w-6 text-primary-800 dark:text-white" />\n        </NavLi>\n        <Dropdown dropdownStatus={dropdownNavStatus} closeDropdown={closeDropdownNav} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -top-[20px] left-[120px] md:-left-[20px] md:top-[20px]">\n          <DropdownUl class="p-2">\n            <DropdownLi href="/">Home</DropdownLi>\n            <DropdownDivider />\n            <DropdownLi href="/components/drawer">Drawer</DropdownLi>\n            <DropdownLi href="/components/footer">Footer</DropdownLi>\n            <DropdownLi href="/components/alert">Alert</DropdownLi>\n          </DropdownUl>\n        </Dropdown>\n      </div>\n      <NavLi href="/components/footer">Footer</NavLi>\n    </NavUl>\n  </Navbar>\n</div>\n';
const __vite_glob_0_7 = `<script lang="ts">
  import { sineIn } from "svelte/easing";
  import { Dropdown, DropdownUl, DropdownLi, DropdownHeader, DropdownFooter, Avatar, uiHelpers } from "$lib";
  import { BellSolid, EyeSolid } from "flowbite-svelte-icons";
  let dropdownNotification = uiHelpers();
  let dropdownNotificationStatus = $state(false);
  let closeDropdownNotification = dropdownNotification.close;
  $effect(() => {
    dropdownNotificationStatus = dropdownNotification.isOpen;
  });
<\/script>

<div class="flex h-[360px] items-start justify-center">
  <div id="bell" class="inline-flex items-center text-center text-sm font-medium text-gray-500 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white">
    <BellSolid class="h-8 w-8" onclick={dropdownNotification.toggle} />
    <div class="relative flex">
      <div class="relative -top-2 end-4 inline-flex h-3 w-3 rounded-full border-2 border-white bg-red-500 dark:border-gray-900"></div>
    </div>
  </div>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownNotificationStatus} closeDropdown={closeDropdownNotification} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[230px] top-[30px] w-96">
      <DropdownHeader class="py-2 text-center font-bold">Notifications</DropdownHeader>
      <DropdownUl class="max-w-sm space-y-2 divide-y divide-gray-100 rounded p-2 shadow dark:divide-gray-700 dark:bg-gray-800">
        <DropdownLi liClass="flex space-x-4 rtl:space-x-reverse p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Avatar src="/images/profile-picture-1.webp" dot={{ color: "gray" }} cornerStyle="rounded" />
          <div class="w-full ps-3">
            <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
              New message from <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span>
              : "Hey, what's up? All set for the presentation?"
            </div>
            <div class="text-xs text-primary-600 dark:text-primary-500">a few moments ago</div>
          </div>
        </DropdownLi>
        <DropdownLi liClass="flex space-x-4 rtl:space-x-reverse p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Avatar src="/images/profile-picture-2.webp" dot={{ color: "red" }} cornerStyle="rounded" />
          <div class="w-full ps-3">
            <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span>
              and
              <span class="font-medium text-gray-900 dark:text-white">5 others</span>
              started following you.
            </div>
            <div class="text-xs text-primary-600 dark:text-primary-500">10 minutes ago</div>
          </div>
        </DropdownLi>
        <DropdownLi liClass="flex space-x-4 rtl:space-x-reverse p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Avatar src="/images/profile-picture-3.webp" dot={{ color: "green" }} cornerStyle="rounded" />
          <div class="w-full ps-3">
            <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
              and
              <span class="font-medium text-gray-900 dark:text-white">141 others</span>
              love your story. See it and view more stories.
            </div>
            <div class="text-xs text-primary-600 dark:text-primary-500">44 minutes ago</div>
          </div>
        </DropdownLi>
      </DropdownUl>
      <DropdownFooter class="-my-1 block bg-gray-50 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
        <div class="inline-flex items-center">
          <EyeSolid class="me-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
          View all
        </div>
      </DropdownFooter>
    </Dropdown>
  </div>
</div>
`;
const __vite_glob_0_8 = '<script lang="ts">\n  import { sineIn } from "svelte/easing";\n  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from "$lib";\n  import { ChevronDownOutline } from "flowbite-svelte-icons";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  $effect(() => {\n    activeUrl = $page.url.pathname;\n  });\n  let dropdownBottom = uiHelpers();\n  let dropdownBottomStatus = $state(false);\n  let closeDropdownBottom = dropdownBottom.close;\n  $effect(() => {\n    dropdownBottomStatus = dropdownBottom.isOpen;\n  });\n<\/script>\n\n<div class="flex h-[360px] items-start justify-center">\n  <Button onclick={dropdownBottom.toggle}>Dropdown bottom<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>\n  <div class="relative">\n    <Dropdown {activeUrl} dropdownStatus={dropdownBottomStatus} closeDropdown={closeDropdownBottom} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[190px] top-[40px]">\n      <DropdownUl>\n        <DropdownLi href="/">Dashboard</DropdownLi>\n        <DropdownLi href="/components/drawer">Drawer</DropdownLi>\n        <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>\n        <DropdownLi href="/components">Alert</DropdownLi>\n      </DropdownUl>\n    </Dropdown>\n  </div>\n</div>\n';
const __vite_glob_0_9 = '<script lang="ts">\n  import { sineIn } from "svelte/easing";\n  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from "$lib";\n  import { ChevronLeftOutline } from "flowbite-svelte-icons";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  $effect(() => {\n    activeUrl = $page.url.pathname;\n  });\n  let dropdownLeft = uiHelpers();\n  let dropdownLeftStatus = $state(false);\n  let closeDropdownLeft = dropdownLeft.close;\n  $effect(() => {\n    dropdownLeftStatus = dropdownLeft.isOpen;\n  });\n<\/script>\n\n<div class="flex h-[160px] items-center justify-center">\n  <Button onclick={dropdownLeft.toggle}><ChevronLeftOutline class="me-2 h-6 w-6 text-white dark:text-white" />Dropdown left</Button>\n  <div class="relative">\n    <Dropdown {activeUrl} dropdownStatus={dropdownLeftStatus} closeDropdown={closeDropdownLeft} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -top-[80px] right-[175px]">\n      <DropdownUl>\n        <DropdownLi href="/">Dashboard</DropdownLi>\n        <DropdownLi href="/components/drawer">Drawer</DropdownLi>\n        <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>\n        <DropdownLi href="/components">Alert</DropdownLi>\n      </DropdownUl>\n    </Dropdown>\n  </div>\n</div>\n';
const __vite_glob_0_10 = '<script lang="ts">\n  import { sineIn } from "svelte/easing";\n  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from "$lib";\n  import { ChevronRightOutline } from "flowbite-svelte-icons";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  $effect(() => {\n    activeUrl = $page.url.pathname;\n  });\n  let dropdownRight = uiHelpers();\n  let dropdownRightStatus = $state(false);\n  let closeDropdownRight = dropdownRight.close;\n  $effect(() => {\n    dropdownRightStatus = dropdownRight.isOpen;\n  });\n<\/script>\n\n<div class="flex h-[160px] items-center justify-center">\n  <Button onclick={dropdownRight.toggle}>Dropdown right<ChevronRightOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>\n  <div class="relative">\n    <Dropdown {activeUrl} dropdownStatus={dropdownRightStatus} closeDropdown={closeDropdownRight} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -top-[80px] left-[10px]">\n      <DropdownUl>\n        <DropdownLi href="/">Dashboard</DropdownLi>\n        <DropdownLi href="/components/drawer">Drawer</DropdownLi>\n        <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>\n        <DropdownLi href="/components">Alert</DropdownLi>\n      </DropdownUl>\n    </Dropdown>\n  </div>\n</div>\n';
const __vite_glob_0_11 = '<script lang="ts">\n  import { sineIn } from "svelte/easing";\n  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers } from "$lib";\n  import { ChevronUpOutline } from "flowbite-svelte-icons";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  $effect(() => {\n    activeUrl = $page.url.pathname;\n  });\n  let dropdownTop = uiHelpers();\n  let dropdownTopStatus = $state(false);\n  let closeDropdownTop = dropdownTop.close;\n  $effect(() => {\n    dropdownTopStatus = dropdownTop.isOpen;\n  });\n<\/script>\n\n<div class="flex h-[200px] items-end justify-center">\n  <Button onclick={dropdownTop.toggle}>Dropdown top<ChevronUpOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>\n  <div class="relative">\n    <Dropdown {activeUrl} dropdownStatus={dropdownTopStatus} closeDropdown={closeDropdownTop} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[170px] -top-[220px]">\n      <DropdownUl>\n        <DropdownLi href="/">Dashboard</DropdownLi>\n        <DropdownLi href="/components/drawer">Drawer</DropdownLi>\n        <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>\n        <DropdownLi href="/components">Alert</DropdownLi>\n      </DropdownUl>\n    </Dropdown>\n  </div>\n</div>\n';
const __vite_glob_0_12 = '<script lang="ts">\n  import { sineIn } from "svelte/easing";\n  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers, DropdownHeader, Search, Radio, DropdownFooter } from "$lib";\n  import { ChevronDownOutline, UserRemoveSolid } from "flowbite-svelte-icons";\n\n  let group1 = $state(2);\n  let dropdownRadio = uiHelpers();\n  let dropdownRadioStatus = $state(false);\n  let closeDropdownRadio = dropdownRadio.close;\n  $effect(() => {\n    dropdownRadioStatus = dropdownRadio.isOpen;\n  });\n<\/script>\n\n<div class="flex h-64 items-start justify-center">\n  <Button onclick={dropdownRadio.toggle}>Dropdown radio<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>\n  <div class="relative">\n    <Dropdown dropdownStatus={dropdownRadioStatus} closeDropdown={closeDropdownRadio} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[185px] top-[45px] w-48 overflow-y-auto pb-3 text-sm">\n      <DropdownUl>\n        <DropdownHeader class="px-2 py-1">\n          <Search size="md" />\n        </DropdownHeader>\n        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">\n          <Radio name="group1" bind:group={group1} value={1}>Default radio</Radio>\n        </DropdownLi>\n        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">\n          <Radio name="group1" bind:group={group1} value={2}>Checked state</Radio>\n        </DropdownLi>\n        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">\n          <Radio name="group1" bind:group={group1} value={3}>Default radio</Radio>\n        </DropdownLi>\n      </DropdownUl>\n      <DropdownFooter>\n        <a href="/" class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">\n          <UserRemoveSolid class="me-1 h-5 w-5" />Delete user\n        </a>\n      </DropdownFooter>\n    </Dropdown>\n  </div>\n</div>\n';
const __vite_glob_0_13 = '<script lang="ts">\n  import { sineIn } from "svelte/easing";\n  import { Button, Dropdown, DropdownUl, DropdownLi, DropdownFooter, Avatar, uiHelpers } from "$lib";\n  import { ChevronDownOutline } from "flowbite-svelte-icons";\n  let dropdownScroll = uiHelpers();\n  let dropdownScrollStatus = $state(false);\n  let closeDropdownScroll = dropdownScroll.close;\n  $effect(() => {\n    dropdownScrollStatus = dropdownScroll.isOpen;\n  });\n<\/script>\n\n<div class="flex h-60 items-start justify-center">\n  <Button onclick={dropdownScroll.toggle}>\n    Dropdown\n    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />\n  </Button>\n  <div class="relative">\n    <Dropdown dropdownStatus={dropdownScrollStatus} closeDropdown={closeDropdownScroll} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[160px] top-[40px] w-48">\n      <DropdownUl class="h-40 w-52 overflow-y-auto py-1">\n        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-1.webp" size="xs" />Jese Leos</DropdownLi>\n        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-2.webp" size="xs" />Robert Gouth</DropdownLi>\n        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-3.webp" size="xs" />Bonnie Green</DropdownLi>\n        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-1.webp" size="xs" />Robert Wall</DropdownLi>\n        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-2.webp" size="xs" />Joseph Mcfall</DropdownLi>\n        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-3.webp" size="xs" />Leslie Livingston</DropdownLi>\n        <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-3.webp" size="xs" />Bonnie Green</DropdownLi>\n      </DropdownUl>\n      <DropdownFooter class="overflow-hidden rounded-b-lg py-1">\n        <a href="/" class="-mb-1 flex items-center bg-gray-50 px-3 py-2 text-sm font-medium text-primary-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-primary-500 dark:hover:bg-gray-600">\n          <ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" />Add new user\n        </a>\n      </DropdownFooter>\n    </Dropdown>\n  </div>\n</div>\n';
const __vite_glob_0_14 = '<script lang="ts">\n  import { sineIn } from "svelte/easing";\n  import { Button, Dropdown, DropdownUl, DropdownLi, DropdownHeader, DropdownFooter, Search, Checkbox, uiHelpers } from "$lib";\n  import { ChevronDownOutline, UserRemoveSolid } from "flowbite-svelte-icons";\n\n  let searchTerm = $state("");\n  const people = [\n    { name: "Robert Gouth", checked: false },\n    { name: "Jese Leos", checked: false },\n    { name: "Bonnie Green", checked: true }\n  ];\n  let filteredItems = $derived(people.filter((person) => person.name.toLowerCase().indexOf(searchTerm?.toLowerCase()) !== -1));\n\n  let dropdownSearch = uiHelpers();\n  let dropdownSearchStatus = $state(false);\n  let closeDropdownSearch = dropdownSearch.close;\n  $effect(() => {\n    dropdownSearchStatus = dropdownSearch.isOpen;\n  });\n<\/script>\n\n<div class="flex h-60 items-start justify-center">\n  <Button onclick={dropdownSearch.toggle}>\n    Dropdown\n    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />\n  </Button>\n  <div class="relative">\n    <Dropdown dropdownStatus={dropdownSearchStatus} closeDropdown={closeDropdownSearch} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[175px] top-[40px] w-52">\n      <DropdownHeader>\n        <Search size="md" bind:value={searchTerm} />\n      </DropdownHeader>\n      <DropdownUl class="h-24 overflow-y-auto p-2">\n        {#each filteredItems as person (person.name)}\n          <DropdownLi liClass="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-600">\n            <Checkbox bind:checked={person.checked}>{person.name}</Checkbox>\n          </DropdownLi>\n        {/each}\n      </DropdownUl>\n      <DropdownFooter class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">\n        <UserRemoveSolid class="me-2 h-4 w-4 text-primary-700 dark:text-primary-700" />Delete user\n      </DropdownFooter>\n    </Dropdown>\n  </div>\n</div>\n';
const __vite_glob_0_15 = '<script lang="ts">\n  import { Button, Dropdown, DropdownDivider, DropdownHeader, DropdownFooter, DropdownUl, DropdownLi, uiHelpers } from "svelte-5-ui-lib";\n  import { ChevronDownOutline } from "flowbite-svelte-icons";\n  import { blur, fly, slide, scale } from "svelte/transition";\n  import { sineIn, linear } from "svelte/easing";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  $effect(() => {\n    activeUrl = $page.url.pathname;\n  });\n\n  let transitionParams = {\n    y: 0,\n    duration: 200,\n    easing: sineIn\n  };\n\n  let dropdownA = uiHelpers();\n  let dropdownAStatus = $state(false);\n  let closeDropdownA = dropdownA.close;\n\n  $effect(() => {\n    dropdownAStatus = dropdownA.isOpen;\n  });\n<\/script>\n';
const __vite_glob_0_16 = '<script lang="ts">\n  import { sineIn } from "svelte/easing";\n  import { Button, Dropdown, DropdownUl, DropdownLi, DropdownFooter, Toggle, uiHelpers } from "$lib";\n  import { ChevronDownOutline, UserRemoveSolid } from "flowbite-svelte-icons";\n  let dropdownToggle = uiHelpers();\n  let dropdownToggleStatus = $state(false);\n  let closeDropdownToggle = dropdownToggle.close;\n  $effect(() => {\n    dropdownToggleStatus = dropdownToggle.isOpen;\n  });\n<\/script>\n\n<div class="flex h-72 items-start justify-center">\n  <Button onclick={dropdownToggle.toggle}>Dropdown radio<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>\n  <div class="relative">\n    <Dropdown dropdownStatus={dropdownToggleStatus} closeDropdown={closeDropdownToggle} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[185px] top-[45px] w-48 overflow-y-auto text-sm">\n      <DropdownUl>\n        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">\n          <Toggle class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">Default toggle</Toggle>\n        </DropdownLi>\n        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">\n          <Toggle class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600" checked>Checked state</Toggle>\n        </DropdownLi>\n        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">\n          <Toggle class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">Default toggle</Toggle>\n        </DropdownLi>\n      </DropdownUl>\n      <DropdownFooter>\n        <a href="/" class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">\n          <UserRemoveSolid class="me-1 h-5 w-5" />Delete user\n        </a>\n      </DropdownFooter>\n    </Dropdown>\n  </div>\n</div>\n';
const __vite_glob_0_17 = '<script lang="ts">\n  import { sineIn } from "svelte/easing";\n  import { Dropdown, DropdownUl, DropdownLi, DropdownHeader, DropdownFooter, Avatar, uiHelpers } from "$lib";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  $effect(() => {\n    activeUrl = $page.url.pathname;\n  });\n  let dropdownUser = uiHelpers();\n  let dropdownUserStatus = $state(false);\n  let closeDropdownUser = dropdownUser.close;\n  $effect(() => {\n    dropdownUserStatus = dropdownUser.isOpen;\n  });\n<\/script>\n\n<div class="flex h-72 items-start justify-center">\n  <Avatar onclick={dropdownUser.toggle} src="/images/profile-picture-3.webp" dot={{ color: "green" }} />\n\n  <div class="relative">\n    <Dropdown {activeUrl} dropdownStatus={dropdownUserStatus} closeDropdown={closeDropdownUser} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[110px] top-[40px]">\n      <DropdownHeader class="px-4 py-2">\n        <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>\n        <span class="block truncate text-sm font-medium">name@flowbite.com</span>\n      </DropdownHeader>\n      <DropdownUl>\n        <DropdownLi href="/">Dashboard</DropdownLi>\n        <DropdownLi href="/components/drawer">Drawer</DropdownLi>\n        <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>\n        <DropdownLi href="/components">Alert</DropdownLi>\n      </DropdownUl>\n      <DropdownFooter class="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Sign out</DropdownFooter>\n    </Dropdown>\n  </div>\n</div>\n';
function ActiveLink($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let dropdownB = uiHelpers();
  let dropdownBStatus = false;
  let closeDropdownB = dropdownB.close;
  $$payload.out += `<div class="flex h-48 items-start justify-center">`;
  Button($$payload, {
    onclick: dropdownB.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Dropdown `;
      ChevronDownOutline($$payload2, {
        class: "ms-2 h-5 w-5 text-white dark:text-white"
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="relative">`;
  Dropdown($$payload, {
    activeUrl,
    dropdownStatus: dropdownBStatus,
    closeDropdown: closeDropdownB,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[150px] top-[40px]",
    children: ($$payload2) => {
      DropdownUl($$payload2, {
        children: ($$payload3) => {
          DropdownLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Dashboard`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components/dropdown",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Dropdown`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components/footer",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Footer`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components/alert",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Alert`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function AvatarWithName($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let dropdownAvatar = uiHelpers();
  let dropdownAvatarStatus = false;
  let closeDropdownAvatar = dropdownAvatar.close;
  $$payload.out += `<div class="flex h-80 items-start justify-center">`;
  Button($$payload, {
    onclick: dropdownAvatar.toggle,
    pill: true,
    color: "light",
    class: "!p-1",
    children: ($$payload2) => {
      Avatar($$payload2, {
        src: "/images/profile-picture-3.webp",
        class: "me-2"
      });
      $$payload2.out += `<!----> Bonnie Green`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="relative">`;
  Dropdown($$payload, {
    activeUrl,
    dropdownStatus: dropdownAvatarStatus,
    closeDropdown: closeDropdownAvatar,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[160px] top-[50px]",
    children: ($$payload2) => {
      DropdownHeader($$payload2, {
        class: "px-4 py-2",
        children: ($$payload3) => {
          $$payload3.out += `<span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span> <span class="block truncate text-sm font-medium">name@flowbite.com</span>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      DropdownUl($$payload2, {
        children: ($$payload3) => {
          DropdownLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Dashboard`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components/drawer",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Drawer`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components/dropdown",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Dropdown`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Alert`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      DropdownFooter($$payload2, {
        class: "px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Sign out`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Checkbox_1($$payload, $$props) {
  push();
  let dropdownCheckbox = uiHelpers();
  let dropdownCheckboxStatus = false;
  let closeDropdownCheckbox = dropdownCheckbox.close;
  $$payload.out += `<div class="flex h-72 items-start justify-center">`;
  Button($$payload, {
    onclick: dropdownCheckbox.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Dropdown checkbox`;
      ChevronDownOutline($$payload2, {
        class: "ms-2 h-6 w-6 text-white dark:text-white"
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="relative">`;
  Dropdown($$payload, {
    dropdownStatus: dropdownCheckboxStatus,
    closeDropdown: closeDropdownCheckbox,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[195px] top-[45px]",
    children: ($$payload2) => {
      DropdownUl($$payload2, {
        children: ($$payload3) => {
          DropdownLi($$payload3, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$payload4) => {
              Checkbox($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Robert Gouth`;
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$payload4) => {
              Checkbox($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Jese Leos`;
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$payload4) => {
              Checkbox($$payload4, {
                checked: true,
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Bonnie Green`;
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$payload4) => {
              Checkbox($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Jese Leos`;
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$payload4) => {
              Checkbox($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Robert Gouth`;
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$payload4) => {
              Checkbox($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Bonnie Green`;
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
  pop();
}
function HelperText($$payload, $$props) {
  push();
  let dropdownHelper = uiHelpers();
  let dropdownHelperStatus = false;
  let closeDropdownHelper = dropdownHelper.close;
  $$payload.out += `<div class="relative flex h-72 items-start justify-center">`;
  Button($$payload, {
    onclick: dropdownHelper.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Dropdown helper text`;
      ChevronDownOutline($$payload2, {
        class: "ms-2 h-6 w-6 text-white dark:text-white"
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="relative">`;
  Dropdown($$payload, {
    dropdownStatus: dropdownHelperStatus,
    closeDropdown: closeDropdownHelper,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[240px] top-[45px] w-64 overflow-y-auto p-2 pb-3 text-sm",
    children: ($$payload2) => {
      DropdownUl($$payload2, {
        children: ($$payload3) => {
          DropdownLi($$payload3, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$payload4) => {
              Checkbox($$payload4, {
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
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$payload4) => {
              Checkbox($$payload4, {
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
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$payload4) => {
              Checkbox($$payload4, {
                checked: true,
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
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
  pop();
}
function MenuIcon($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let dropdownIcon = uiHelpers();
  let dropdownIconStatus = false;
  let closeDropdownIcon = dropdownIcon.close;
  $$payload.out += `<div class="flex h-40 items-start justify-center">`;
  DotsVerticalOutline($$payload, {
    onclick: dropdownIcon.toggle,
    class: "dots-menu dark:text-white"
  });
  $$payload.out += `<!----> <div class="relative">`;
  Dropdown($$payload, {
    activeUrl,
    dropdownStatus: dropdownIconStatus,
    closeDropdown: closeDropdownIcon,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[90px] top-[20px]",
    children: ($$payload2) => {
      DropdownUl($$payload2, {
        children: ($$payload3) => {
          DropdownLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Dashboard`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components/drawer",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Drawer`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components/dropdown",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Dropdown`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Alert`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function MultiLevel($$payload, $$props) {
  push();
  let dropdownMultiLevel = uiHelpers();
  let dropdownMultiLevelStatus = false;
  let closeDropdownMultiLevel = dropdownMultiLevel.close;
  let dropdownMultiLevel2 = uiHelpers();
  let dropdownMultiLevelStatus2 = false;
  const closeAllMultilevel = () => {
    dropdownMultiLevel.close();
    dropdownMultiLevel2.close();
  };
  $$payload.out += `<div class="flex h-60 items-start justify-center">`;
  Button($$payload, {
    onclick: dropdownMultiLevel.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Dropdown `;
      ChevronDownOutline($$payload2, {
        class: "ms-2 h-5 w-5 text-white dark:text-white"
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="relative">`;
  Dropdown($$payload, {
    dropdownStatus: dropdownMultiLevelStatus,
    closeDropdown: closeDropdownMultiLevel,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[150px] top-[40px] overflow-visible",
    children: ($$payload2) => {
      DropdownUl($$payload2, {
        children: ($$payload3) => {
          DropdownLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Dashboard`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <button class="flex p-2 pl-4">Dropdown`;
          ChevronRightOutline($$payload3, {
            class: "ms-2 h-6 w-6 text-primary-700 dark:text-white"
          });
          $$payload3.out += `<!----></button> <div class="relative">`;
          Dropdown($$payload3, {
            dropdownStatus: dropdownMultiLevelStatus2,
            closeDropdown: closeAllMultilevel,
            params: { y: 0, duration: 200, easing: sineIn },
            class: "absolute -top-[60px] left-[120px]",
            children: ($$payload4) => {
              DropdownUl($$payload4, {
                class: "z-100",
                children: ($$payload5) => {
                  DropdownLi($$payload5, {
                    href: "/",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Home`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> `;
                  DropdownLi($$payload5, {
                    href: "/components/footer",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Footer`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> `;
                  DropdownLi($$payload5, {
                    href: "/components/alert",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Alert`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> `;
          DropdownLi($$payload3, {
            href: "/components/drawer",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Drawer`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components/footer",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Footer`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components/button",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Button`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
  pop();
}
function Navbar_1($$payload, $$props) {
  push();
  let nav = uiHelpers();
  let navStatus = false;
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  let dropdownNav = uiHelpers();
  let dropdownNavStatus = false;
  let closeDropdownNav = dropdownNav.close;
  $$payload.out += `<div class="h-72">`;
  {
    let brand = function($$payload2) {
      NavBrand($$payload2, {
        siteName: "Svelte 5",
        children: ($$payload3) => {
          $$payload3.out += `<img width="30" src="/images/svelte-icon.png" alt="svelte icon">`;
        },
        $$slots: { default: true }
      });
    };
    Navbar($$payload, {
      toggleNav,
      closeNav,
      navStatus,
      breakPoint: "md",
      brand,
      children: ($$payload2) => {
        NavUl($$payload2, {
          children: ($$payload3) => {
            NavLi($$payload3, {
              href: "/",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Home`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            NavLi($$payload3, {
              href: "/components/navbar",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Navbar`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> <div class="relative">`;
            NavLi($$payload3, {
              onclick: dropdownNav.toggle,
              class: "cursor-pointer",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Dropdown`;
                ChevronDownOutline($$payload4, {
                  class: "ms-2 inline h-6 w-6 text-primary-800 dark:text-white"
                });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            Dropdown($$payload3, {
              dropdownStatus: dropdownNavStatus,
              closeDropdown: closeDropdownNav,
              params: { y: 0, duration: 200, easing: sineIn },
              class: "absolute -top-[20px] left-[120px] md:-left-[20px] md:top-[20px]",
              children: ($$payload4) => {
                DropdownUl($$payload4, {
                  class: "p-2",
                  children: ($$payload5) => {
                    DropdownLi($$payload5, {
                      href: "/",
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->Home`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!----> `;
                    DropdownDivider($$payload5, {});
                    $$payload5.out += `<!----> `;
                    DropdownLi($$payload5, {
                      href: "/components/drawer",
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->Drawer`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!----> `;
                    DropdownLi($$payload5, {
                      href: "/components/footer",
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->Footer`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!----> `;
                    DropdownLi($$payload5, {
                      href: "/components/alert",
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->Alert`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!---->`;
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----></div> `;
            NavLi($$payload3, {
              href: "/components/footer",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Footer`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
      },
      $$slots: { brand: true, default: true }
    });
  }
  $$payload.out += `<!----></div>`;
  pop();
}
function NotificationBell($$payload, $$props) {
  push();
  let dropdownNotification = uiHelpers();
  let dropdownNotificationStatus = false;
  let closeDropdownNotification = dropdownNotification.close;
  $$payload.out += `<div class="flex h-[360px] items-start justify-center"><div id="bell" class="inline-flex items-center text-center text-sm font-medium text-gray-500 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white">`;
  BellSolid($$payload, {
    class: "h-8 w-8",
    onclick: dropdownNotification.toggle
  });
  $$payload.out += `<!----> <div class="relative flex"><div class="relative -top-2 end-4 inline-flex h-3 w-3 rounded-full border-2 border-white bg-red-500 dark:border-gray-900"></div></div></div> <div class="relative">`;
  Dropdown($$payload, {
    dropdownStatus: dropdownNotificationStatus,
    closeDropdown: closeDropdownNotification,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[230px] top-[30px] w-96",
    children: ($$payload2) => {
      DropdownHeader($$payload2, {
        class: "py-2 text-center font-bold",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Notifications`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      DropdownUl($$payload2, {
        class: "max-w-sm space-y-2 divide-y divide-gray-100 rounded p-2 shadow dark:divide-gray-700 dark:bg-gray-800",
        children: ($$payload3) => {
          DropdownLi($$payload3, {
            liClass: "flex space-x-4 rtl:space-x-reverse p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$payload4) => {
              Avatar($$payload4, {
                src: "/images/profile-picture-1.webp",
                dot: { color: "gray" },
                cornerStyle: "rounded"
              });
              $$payload4.out += `<!----> <div class="w-full ps-3"><div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">New message from <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span> : "Hey, what's up? All set for the presentation?"</div> <div class="text-xs text-primary-600 dark:text-primary-500">a few moments ago</div></div>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            liClass: "flex space-x-4 rtl:space-x-reverse p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$payload4) => {
              Avatar($$payload4, {
                src: "/images/profile-picture-2.webp",
                dot: { color: "red" },
                cornerStyle: "rounded"
              });
              $$payload4.out += `<!----> <div class="w-full ps-3"><div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span> and <span class="font-medium text-gray-900 dark:text-white">5 others</span> started following you.</div> <div class="text-xs text-primary-600 dark:text-primary-500">10 minutes ago</div></div>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            liClass: "flex space-x-4 rtl:space-x-reverse p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$payload4) => {
              Avatar($$payload4, {
                src: "/images/profile-picture-3.webp",
                dot: { color: "green" },
                cornerStyle: "rounded"
              });
              $$payload4.out += `<!----> <div class="w-full ps-3"><div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span> and <span class="font-medium text-gray-900 dark:text-white">141 others</span> love your story. See it and view more stories.</div> <div class="text-xs text-primary-600 dark:text-primary-500">44 minutes ago</div></div>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      DropdownFooter($$payload2, {
        class: "-my-1 block bg-gray-50 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
        children: ($$payload3) => {
          $$payload3.out += `<div class="inline-flex items-center">`;
          EyeSolid($$payload3, {
            class: "me-2 h-4 w-4 text-gray-500 dark:text-gray-400"
          });
          $$payload3.out += `<!----> View all</div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
  pop();
}
function PlacementBottom($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let dropdownBottom = uiHelpers();
  let dropdownBottomStatus = false;
  let closeDropdownBottom = dropdownBottom.close;
  $$payload.out += `<div class="flex h-[360px] items-start justify-center">`;
  Button($$payload, {
    onclick: dropdownBottom.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Dropdown bottom`;
      ChevronDownOutline($$payload2, {
        class: "ms-2 h-6 w-6 text-white dark:text-white"
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="relative">`;
  Dropdown($$payload, {
    activeUrl,
    dropdownStatus: dropdownBottomStatus,
    closeDropdown: closeDropdownBottom,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[190px] top-[40px]",
    children: ($$payload2) => {
      DropdownUl($$payload2, {
        children: ($$payload3) => {
          DropdownLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Dashboard`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components/drawer",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Drawer`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components/dropdown",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Dropdown`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Alert`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function PlacementLeft($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let dropdownLeft = uiHelpers();
  let dropdownLeftStatus = false;
  let closeDropdownLeft = dropdownLeft.close;
  $$payload.out += `<div class="flex h-[160px] items-center justify-center">`;
  Button($$payload, {
    onclick: dropdownLeft.toggle,
    children: ($$payload2) => {
      ChevronLeftOutline($$payload2, {
        class: "me-2 h-6 w-6 text-white dark:text-white"
      });
      $$payload2.out += `<!---->Dropdown left`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="relative">`;
  Dropdown($$payload, {
    activeUrl,
    dropdownStatus: dropdownLeftStatus,
    closeDropdown: closeDropdownLeft,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -top-[80px] right-[175px]",
    children: ($$payload2) => {
      DropdownUl($$payload2, {
        children: ($$payload3) => {
          DropdownLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Dashboard`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components/drawer",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Drawer`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components/dropdown",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Dropdown`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Alert`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function PlacementRight($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let dropdownRight = uiHelpers();
  let dropdownRightStatus = false;
  let closeDropdownRight = dropdownRight.close;
  $$payload.out += `<div class="flex h-[160px] items-center justify-center">`;
  Button($$payload, {
    onclick: dropdownRight.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Dropdown right`;
      ChevronRightOutline($$payload2, {
        class: "ms-2 h-6 w-6 text-white dark:text-white"
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="relative">`;
  Dropdown($$payload, {
    activeUrl,
    dropdownStatus: dropdownRightStatus,
    closeDropdown: closeDropdownRight,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -top-[80px] left-[10px]",
    children: ($$payload2) => {
      DropdownUl($$payload2, {
        children: ($$payload3) => {
          DropdownLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Dashboard`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components/drawer",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Drawer`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components/dropdown",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Dropdown`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Alert`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function PlacementTop($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let dropdownTop = uiHelpers();
  let dropdownTopStatus = false;
  let closeDropdownTop = dropdownTop.close;
  $$payload.out += `<div class="flex h-[200px] items-end justify-center">`;
  Button($$payload, {
    onclick: dropdownTop.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Dropdown top`;
      ChevronUpOutline($$payload2, {
        class: "ms-2 h-6 w-6 text-white dark:text-white"
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="relative">`;
  Dropdown($$payload, {
    activeUrl,
    dropdownStatus: dropdownTopStatus,
    closeDropdown: closeDropdownTop,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[170px] -top-[220px]",
    children: ($$payload2) => {
      DropdownUl($$payload2, {
        children: ($$payload3) => {
          DropdownLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Dashboard`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components/drawer",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Drawer`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components/dropdown",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Dropdown`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Alert`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Radio_1($$payload, $$props) {
  push();
  let group1 = 2;
  let dropdownRadio = uiHelpers();
  let dropdownRadioStatus = false;
  let closeDropdownRadio = dropdownRadio.close;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="flex h-64 items-start justify-center">`;
    Button($$payload2, {
      onclick: dropdownRadio.toggle,
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
      dropdownStatus: dropdownRadioStatus,
      closeDropdown: closeDropdownRadio,
      params: { y: 0, duration: 200, easing: sineIn },
      class: "absolute -left-[185px] top-[45px] w-48 overflow-y-auto pb-3 text-sm",
      children: ($$payload3) => {
        DropdownUl($$payload3, {
          children: ($$payload4) => {
            DropdownHeader($$payload4, {
              class: "px-2 py-1",
              children: ($$payload5) => {
                Search($$payload5, { size: "md" });
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            DropdownLi($$payload4, {
              liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
              children: ($$payload5) => {
                Radio($$payload5, {
                  name: "group1",
                  get group() {
                    return group1;
                  },
                  set group($$value) {
                    group1 = $$value;
                    $$settled = false;
                  },
                  value: 1,
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Default radio`;
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            DropdownLi($$payload4, {
              liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
              children: ($$payload5) => {
                Radio($$payload5, {
                  name: "group1",
                  get group() {
                    return group1;
                  },
                  set group($$value) {
                    group1 = $$value;
                    $$settled = false;
                  },
                  value: 2,
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Checked state`;
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            DropdownLi($$payload4, {
              liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
              children: ($$payload5) => {
                Radio($$payload5, {
                  name: "group1",
                  get group() {
                    return group1;
                  },
                  set group($$value) {
                    group1 = $$value;
                    $$settled = false;
                  },
                  value: 3,
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Default radio`;
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
        DropdownFooter($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<a href="/" class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">`;
            UserRemoveSolid($$payload4, { class: "me-1 h-5 w-5" });
            $$payload4.out += `<!---->Delete user</a>`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
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
function Scrolling($$payload, $$props) {
  push();
  let dropdownScroll = uiHelpers();
  let dropdownScrollStatus = false;
  let closeDropdownScroll = dropdownScroll.close;
  $$payload.out += `<div class="flex h-60 items-start justify-center">`;
  Button($$payload, {
    onclick: dropdownScroll.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Dropdown `;
      ChevronDownOutline($$payload2, {
        class: "ms-2 h-5 w-5 text-white dark:text-white"
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="relative">`;
  Dropdown($$payload, {
    dropdownStatus: dropdownScrollStatus,
    closeDropdown: closeDropdownScroll,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[160px] top-[40px] w-48",
    children: ($$payload2) => {
      DropdownUl($$payload2, {
        class: "h-40 w-52 overflow-y-auto py-1",
        children: ($$payload3) => {
          DropdownLi($$payload3, {
            href: "/",
            aClass: "flex items-center text-base font-semibold gap-2",
            children: ($$payload4) => {
              Avatar($$payload4, {
                src: "/images/profile-picture-1.webp",
                size: "xs"
              });
              $$payload4.out += `<!---->Jese Leos`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/",
            aClass: "flex items-center text-base font-semibold gap-2",
            children: ($$payload4) => {
              Avatar($$payload4, {
                src: "/images/profile-picture-2.webp",
                size: "xs"
              });
              $$payload4.out += `<!---->Robert Gouth`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/",
            aClass: "flex items-center text-base font-semibold gap-2",
            children: ($$payload4) => {
              Avatar($$payload4, {
                src: "/images/profile-picture-3.webp",
                size: "xs"
              });
              $$payload4.out += `<!---->Bonnie Green`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/",
            aClass: "flex items-center text-base font-semibold gap-2",
            children: ($$payload4) => {
              Avatar($$payload4, {
                src: "/images/profile-picture-1.webp",
                size: "xs"
              });
              $$payload4.out += `<!---->Robert Wall`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/",
            aClass: "flex items-center text-base font-semibold gap-2",
            children: ($$payload4) => {
              Avatar($$payload4, {
                src: "/images/profile-picture-2.webp",
                size: "xs"
              });
              $$payload4.out += `<!---->Joseph Mcfall`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/",
            aClass: "flex items-center text-base font-semibold gap-2",
            children: ($$payload4) => {
              Avatar($$payload4, {
                src: "/images/profile-picture-3.webp",
                size: "xs"
              });
              $$payload4.out += `<!---->Leslie Livingston`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/",
            aClass: "flex items-center text-base font-semibold gap-2",
            children: ($$payload4) => {
              Avatar($$payload4, {
                src: "/images/profile-picture-3.webp",
                size: "xs"
              });
              $$payload4.out += `<!---->Bonnie Green`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      DropdownFooter($$payload2, {
        class: "overflow-hidden rounded-b-lg py-1",
        children: ($$payload3) => {
          $$payload3.out += `<a href="/" class="-mb-1 flex items-center bg-gray-50 px-3 py-2 text-sm font-medium text-primary-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-primary-500 dark:hover:bg-gray-600">`;
          ChevronDownOutline($$payload3, {
            class: "ms-2 h-6 w-6 text-white dark:text-white"
          });
          $$payload3.out += `<!---->Add new user</a>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
  pop();
}
function Search_1($$payload, $$props) {
  push();
  let searchTerm = "";
  const people = [
    { name: "Robert Gouth", checked: false },
    { name: "Jese Leos", checked: false },
    { name: "Bonnie Green", checked: true }
  ];
  let filteredItems = people.filter((person) => person.name.toLowerCase().indexOf(searchTerm?.toLowerCase()) !== -1);
  let dropdownSearch = uiHelpers();
  let dropdownSearchStatus = false;
  let closeDropdownSearch = dropdownSearch.close;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="flex h-60 items-start justify-center">`;
    Button($$payload2, {
      onclick: dropdownSearch.toggle,
      children: ($$payload3) => {
        $$payload3.out += `<!---->Dropdown `;
        ChevronDownOutline($$payload3, {
          class: "ms-2 h-5 w-5 text-white dark:text-white"
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> <div class="relative">`;
    Dropdown($$payload2, {
      dropdownStatus: dropdownSearchStatus,
      closeDropdown: closeDropdownSearch,
      params: { y: 0, duration: 200, easing: sineIn },
      class: "absolute -left-[175px] top-[40px] w-52",
      children: ($$payload3) => {
        DropdownHeader($$payload3, {
          children: ($$payload4) => {
            Search($$payload4, {
              size: "md",
              get value() {
                return searchTerm;
              },
              set value($$value) {
                searchTerm = $$value;
                $$settled = false;
              }
            });
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        DropdownUl($$payload3, {
          class: "h-24 overflow-y-auto p-2",
          children: ($$payload4) => {
            const each_array = ensure_array_like(filteredItems);
            $$payload4.out += `<!--[-->`;
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let person = each_array[$$index];
              DropdownLi($$payload4, {
                liClass: "rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-600",
                children: ($$payload5) => {
                  Checkbox($$payload5, {
                    get checked() {
                      return person.checked;
                    },
                    set checked($$value) {
                      person.checked = $$value;
                      $$settled = false;
                    },
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->${escape_html(person.name)}`;
                    },
                    $$slots: { default: true }
                  });
                },
                $$slots: { default: true }
              });
            }
            $$payload4.out += `<!--]-->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        DropdownFooter($$payload3, {
          class: "-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600",
          children: ($$payload4) => {
            UserRemoveSolid($$payload4, {
              class: "me-2 h-4 w-4 text-primary-700 dark:text-primary-700"
            });
            $$payload4.out += `<!---->Delete user`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
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
function Toggle_1($$payload, $$props) {
  push();
  let dropdownToggle = uiHelpers();
  let dropdownToggleStatus = false;
  let closeDropdownToggle = dropdownToggle.close;
  $$payload.out += `<div class="flex h-72 items-start justify-center">`;
  Button($$payload, {
    onclick: dropdownToggle.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Dropdown radio`;
      ChevronDownOutline($$payload2, {
        class: "ms-2 h-6 w-6 text-white dark:text-white"
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="relative">`;
  Dropdown($$payload, {
    dropdownStatus: dropdownToggleStatus,
    closeDropdown: closeDropdownToggle,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[185px] top-[45px] w-48 overflow-y-auto text-sm",
    children: ($$payload2) => {
      DropdownUl($$payload2, {
        children: ($$payload3) => {
          DropdownLi($$payload3, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$payload4) => {
              Toggle($$payload4, {
                class: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Default toggle`;
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$payload4) => {
              Toggle($$payload4, {
                class: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
                checked: true,
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Checked state`;
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$payload4) => {
              Toggle($$payload4, {
                class: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Default toggle`;
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      DropdownFooter($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<a href="/" class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">`;
          UserRemoveSolid($$payload3, { class: "me-1 h-5 w-5" });
          $$payload3.out += `<!---->Delete user</a>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
  pop();
}
function UserAvatar($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let dropdownUser = uiHelpers();
  let dropdownUserStatus = false;
  let closeDropdownUser = dropdownUser.close;
  $$payload.out += `<div class="flex h-72 items-start justify-center">`;
  Avatar($$payload, {
    onclick: dropdownUser.toggle,
    src: "/images/profile-picture-3.webp",
    dot: { color: "green" }
  });
  $$payload.out += `<!----> <div class="relative">`;
  Dropdown($$payload, {
    activeUrl,
    dropdownStatus: dropdownUserStatus,
    closeDropdown: closeDropdownUser,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[110px] top-[40px]",
    children: ($$payload2) => {
      DropdownHeader($$payload2, {
        class: "px-4 py-2",
        children: ($$payload3) => {
          $$payload3.out += `<span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span> <span class="block truncate text-sm font-medium">name@flowbite.com</span>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      DropdownUl($$payload2, {
        children: ($$payload3) => {
          DropdownLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Dashboard`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components/drawer",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Drawer`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components/dropdown",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Dropdown`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/components",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Alert`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      DropdownFooter($$payload2, {
        class: "px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Sign out`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const dirName = "dropdown";
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let dropdownDividerHeaderFooter = uiHelpers();
  let dropdownDividerHeaderFooterStatus = false;
  let closeDropdownDividerHeaderFooter = dropdownDividerHeaderFooter.close;
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/ActiveLink.svelte": __vite_glob_0_0,
    "./examples/AvatarWithName.svelte": __vite_glob_0_1,
    "./examples/Checkbox.svelte": __vite_glob_0_2,
    "./examples/HelperText.svelte": __vite_glob_0_3,
    "./examples/MenuIcon.svelte": __vite_glob_0_4,
    "./examples/MultiLevel.svelte": __vite_glob_0_5,
    "./examples/Navbar.svelte": __vite_glob_0_6,
    "./examples/NotificationBell.svelte": __vite_glob_0_7,
    "./examples/PlacementBottom.svelte": __vite_glob_0_8,
    "./examples/PlacementLeft.svelte": __vite_glob_0_9,
    "./examples/PlacementRight.svelte": __vite_glob_0_10,
    "./examples/PlacementTop.svelte": __vite_glob_0_11,
    "./examples/Radio.svelte": __vite_glob_0_12,
    "./examples/Scrolling.svelte": __vite_glob_0_13,
    "./examples/Search.svelte": __vite_glob_0_14,
    "./examples/Setup.svelte": __vite_glob_0_15,
    "./examples/Toggle.svelte": __vite_glob_0_16,
    "./examples/UserAvatar.svelte": __vite_glob_0_17
  });
  const exampleArr = [
    {
      name: "Active link",
      component: ActiveLink
    },
    {
      name: "Avatar with name",
      component: AvatarWithName
    },
    {
      name: "Checkbox",
      component: Checkbox_1
    },
    {
      name: "Helper text",
      component: HelperText
    },
    {
      name: "Menu icon",
      component: MenuIcon
    },
    {
      name: "Multi level",
      component: MultiLevel
    },
    {
      name: "Navbar",
      component: Navbar_1
    },
    {
      name: "Notification bell",
      component: NotificationBell
    },
    {
      name: "Placement bottom",
      component: PlacementBottom
    },
    {
      name: "Placement left",
      component: PlacementLeft
    },
    {
      name: "Placement right",
      component: PlacementRight
    },
    {
      name: "Placement top",
      component: PlacementTop
    },
    {
      name: "Radio",
      component: Radio_1
    },
    {
      name: "Scrolling",
      component: Scrolling
    },
    {
      name: "Search",
      component: Search_1
    },
    {
      name: "Toggle",
      component: Toggle_1
    },
    {
      name: "User avatar",
      component: UserAvatar
    }
  ];
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  let dividerStatus = false;
  const changeDividerStatus = () => {
    dividerStatus = !dividerStatus;
  };
  let headerStatus = false;
  const changeHeaderStatus = () => {
    headerStatus = !headerStatus;
  };
  let footerStatus = false;
  const changeFooterStatus = () => {
    footerStatus = !footerStatus;
  };
  const transitions = [
    {
      name: "Fly",
      transition: fly,
      params: { y: 0, duration: 200, easing: sineIn }
    },
    {
      name: "Blur",
      transition: blur,
      params: { y: 0, duration: 400, easing: linear }
    },
    {
      name: "Slide",
      transition: slide,
      params: { x: -100, duration: 300, easing: sineIn }
    },
    {
      name: "Scale",
      transition: scale,
      params: { duration: 300, easing: linear }
    }
  ];
  let selectedTransition = "Fly";
  let currentTransition = transitions.find((t) => t.name === selectedTransition) || transitions[0];
  let generatedCode = (() => {
    let headerContent = headerStatus ? ` 
    <DropdownHeader>
      <div>Bonnie Green</div>
      <div class="truncate font-medium">name@flowbite.com</div>
    </DropdownHeader>` : "";
    let footerContent = footerStatus ? `
    <DropdownFooter>
      <div class="py-2">
        <a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </div>
    </DropdownFooter>` : "";
    let dividerContent = dividerStatus ? `
      <DropdownDivider />` : "";
    let props = [];
    if (currentTransition !== transitions[0]) {
      props.push(` transition={${currentTransition.transition.name}}`);
      const paramsString = Object.entries(currentTransition.params).map(([key, value]) => {
        if (typeof value === "function") {
          return `${key}:${value.name}`;
        }
        return `${key}:${value}`;
      }).join(",");
      props.push(` params={{${paramsString}}}`);
    }
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<div class="flex items-start justify-center">
  <Button onclick={dropdownA.toggle}>Dropdown
    <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
  </Button>
  <div class="relative h-96">
    <Dropdown {activeUrl}${propsString} dropdownStatus={dropdownAStatus} closeDropdown={closeDropdownA} class="absolute -left-[150px] top-[40px]">${headerContent}
      <DropdownUl>
        <DropdownLi href="/">Dashboard</DropdownLi>${dividerContent}
        <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>
      </DropdownUl>${footerContent}
    </Dropdown>
  </div>
</div>`;
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
        $$payload3.out += `<!---->Dropdown`;
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
        $$payload3.out += `<!---->Interactive Dropdown Builder`;
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
          const each_array = ensure_array_like(transitions);
          $$payload3.out += `<div class="flex items-start justify-center">`;
          Button($$payload3, {
            onclick: dropdownDividerHeaderFooter.toggle,
            children: ($$payload4) => {
              $$payload4.out += `<!---->Dropdown `;
              ChevronDownOutline($$payload4, {
                class: "ms-2 h-5 w-5 text-white dark:text-white"
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <div class="relative h-96">`;
          Dropdown($$payload3, {
            activeUrl,
            dropdownStatus: dropdownDividerHeaderFooterStatus,
            closeDropdown: closeDropdownDividerHeaderFooter,
            transition: currentTransition.transition,
            params: currentTransition.params,
            class: "absolute -left-[150px] top-[40px]",
            children: ($$payload4) => {
              if (headerStatus) {
                $$payload4.out += "<!--[-->";
                DropdownHeader($$payload4, {
                  children: ($$payload5) => {
                    $$payload5.out += `<div>Bonnie Green</div> <div class="truncate font-medium">name@flowbite.com</div>`;
                  },
                  $$slots: { default: true }
                });
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]--> `;
              DropdownUl($$payload4, {
                children: ($$payload5) => {
                  DropdownLi($$payload5, {
                    href: "/",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Dashboard`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> `;
                  if (dividerStatus) {
                    $$payload5.out += "<!--[-->";
                    DropdownDivider($$payload5, {});
                  } else {
                    $$payload5.out += "<!--[!-->";
                  }
                  $$payload5.out += `<!--]--> `;
                  DropdownLi($$payload5, {
                    href: "/components/dropdown",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Dropdown`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> `;
                  DropdownLi($$payload5, {
                    href: "/components/footer",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Footer`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> `;
                  DropdownLi($$payload5, {
                    href: "/components",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Alert`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              if (footerStatus) {
                $$payload4.out += "<!--[-->";
                DropdownFooter($$payload4, {
                  children: ($$payload5) => {
                    $$payload5.out += `<div class="py-2"><a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a></div>`;
                  },
                  $$slots: { default: true }
                });
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div></div> <div class="mb-4 flex gap-4">`;
          Button($$payload3, {
            onclick: changeHeaderStatus,
            children: ($$payload4) => {
              $$payload4.out += `<!---->Header `;
              if (headerStatus) {
                $$payload4.out += "<!--[-->";
                $$payload4.out += `off`;
              } else {
                $$payload4.out += "<!--[!-->";
                $$payload4.out += `on`;
              }
              $$payload4.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            onclick: changeFooterStatus,
            children: ($$payload4) => {
              $$payload4.out += `<!---->Footer `;
              if (footerStatus) {
                $$payload4.out += "<!--[-->";
                $$payload4.out += `off`;
              } else {
                $$payload4.out += "<!--[!-->";
                $$payload4.out += `on`;
              }
              $$payload4.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            onclick: changeDividerStatus,
            children: ($$payload4) => {
              $$payload4.out += `<!---->Divider `;
              if (dividerStatus) {
                $$payload4.out += "<!--[-->";
                $$payload4.out += `off`;
              } else {
                $$payload4.out += "<!--[!-->";
                $$payload4.out += `on`;
              }
              $$payload4.out += `<!--]-->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Transition`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let transition = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-24 my-1",
              name: "dropdown_transition",
              get group() {
                return selectedTransition;
              },
              set group($$value) {
                selectedTransition = $$value;
                $$settled = false;
              },
              value: transition.name,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(transition.name)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div>`;
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
          $$payload3.out += `<div class="mb-12 flex flex-wrap">`;
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
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
