import { a as append, n as ns_template, b as text, t as template, c as comment } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, g as getContext, c as child, r as reset, t as template_effect, s as sibling, n as next, a as pop, b as get, d as derived, a6 as state, u as user_effect, a7 as set, f as first_child } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text, s as setup_stores, b as store_get, d as delegate } from "../chunks/store.B2xZ3Ft6.js";
import { p as prop, i as if_block, r as rest_props, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import { R as Radio, C as CompoAttributesViewer, L as Label } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { s as set_attribute, a as set_attributes, t as twMerge, az as Dropdown, aS as sineIn, V as uiHelpers, am as Navbar, aC as fly, aD as blur, ab as linear, Z as slide, aE as scale } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { D as DropdownDivider } from "../chunks/DropdownDivider.BsEP2ok3.js";
import { D as DropdownUl } from "../chunks/DropdownUl.CBcIivYZ.js";
import { D as DropdownLi } from "../chunks/DropdownLi.DjyFOMgJ.js";
import { D as DropdownHeader } from "../chunks/DropdownHeader.kX0miDJ9.js";
import { D as DropdownFooter } from "../chunks/DropdownFooter.C1Z5A-Hq.js";
import { C as ChevronDownOutline } from "../chunks/ChevronDownOutline.C3ncqrR6.js";
import { p as page } from "../chunks/stores.CC5X2N5j.js";
import { A as Avatar } from "../chunks/Avatar.BvpffrdL.js";
import { C as Checkbox } from "../chunks/Checkbox.CJJZSeRG.js";
import { H as Helper } from "../chunks/Helper.CNgurqbV.js";
import { C as ChevronRightOutline } from "../chunks/ChevronRightOutline.D-4U2W9t.js";
import { N as NavUl, a as NavLi, b as NavBrand } from "../chunks/NavUl.D3IokGIf.js";
import { E as EyeSolid } from "../chunks/EyeSolid.BuWiCgGO.js";
import { C as ChevronLeftOutline } from "../chunks/ChevronLeftOutline.8ET6QfPS.js";
import { S as Search } from "../chunks/Search.HiILrOcW.js";
import { T as Toggle } from "../chunks/Toggle.DCK_TCRE.js";
var root_1$i = ns_template(`<title> </title>`);
var root_2$b = ns_template(`<desc> </desc>`);
var root$l = ns_template(`<svg><!><!><path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z"></path></svg>`);
function BellSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "bell solid"), restProps = rest_props($$props, [
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
  var svg = root$l();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$i();
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
    var desc_1 = root_2$b();
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
var root_1$h = ns_template(`<title> </title>`);
var root_2$a = ns_template(`<desc> </desc>`);
var root$k = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16 14-4-4-4 4"></path></svg>`);
function ChevronUpOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "chevron up outline"), restProps = rest_props($$props, [
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
  var svg = root$k();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$h();
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
    var desc_1 = root_2$a();
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
var root_1$g = ns_template(`<title> </title>`);
var root_2$9 = ns_template(`<desc> </desc>`);
var root$j = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-width="3" d="M12 6h.01M12 12h.01M12 18h.01"></path></svg>`);
function DotsVerticalOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "dots vertical outline"), restProps = rest_props($$props, [
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
  var svg = root$j();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$g();
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
    var desc_1 = root_2$9();
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
  ));
  append($$anchor, svg);
  pop();
}
var root_1$f = ns_template(`<title> </title>`);
var root_2$8 = ns_template(`<desc> </desc>`);
var root$i = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M5 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0Zm-2 9a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1Zm13-6a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z" clip-rule="evenodd"></path></svg>`);
function UserRemoveSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "user remove solid"), restProps = rest_props($$props, [
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
  var svg = root$i();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$f();
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
    var desc_1 = root_2$8();
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
var root_1$e = template(`Dropdown <!>`, 1);
var root_3$d = template(`<!> <!> <!> <!>`, 1);
var root$h = template(`<div class="flex h-48 items-start justify-center"><!> <div class="relative"><!></div></div>`);
function ActiveLink($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  user_effect(() => {
    set(activeUrl, proxy($page().url.pathname));
  });
  let dropdownB = uiHelpers();
  let dropdownBStatus = state(false);
  let closeDropdownB = dropdownB.close;
  user_effect(() => {
    set(dropdownBStatus, proxy(dropdownB.isOpen));
  });
  var div = root$h();
  var node = child(div);
  Button(node, {
    get onclick() {
      return dropdownB.toggle;
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment = root_1$e();
      var node_1 = sibling(first_child(fragment));
      ChevronDownOutline(node_1, {
        class: "ms-2 h-5 w-5 text-white dark:text-white"
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node, 2);
  var node_2 = child(div_1);
  Dropdown(node_2, {
    get activeUrl() {
      return get(activeUrl);
    },
    get dropdownStatus() {
      return get(dropdownBStatus);
    },
    closeDropdown: closeDropdownB,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[150px] top-[40px]",
    children: ($$anchor2, $$slotProps) => {
      DropdownUl($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_3$d();
          var node_3 = first_child(fragment_2);
          DropdownLi(node_3, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("Dashboard");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_4 = sibling(node_3, 2);
          DropdownLi(node_4, {
            href: "/components/dropdown",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Dropdown");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          var node_5 = sibling(node_4, 2);
          DropdownLi(node_5, {
            href: "/components/footer",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_2 = text("Footer");
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
          var node_6 = sibling(node_5, 2);
          DropdownLi(node_6, {
            href: "/components/alert",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_3 = text("Alert");
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
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
var root_1$d = template(`<!> Bonnie Green`, 1);
var root_3$c = template(`<span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span> <span class="block truncate text-sm font-medium">name@flowbite.com</span>`, 1);
var root_4$4 = template(`<!> <!> <!> <!>`, 1);
var root_2$7 = template(`<!> <!> <!>`, 1);
var root$g = template(`<div class="flex h-80 items-start justify-center"><!> <div class="relative"><!></div></div>`);
function AvatarWithName($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  user_effect(() => {
    set(activeUrl, proxy($page().url.pathname));
  });
  let dropdownAvatar = uiHelpers();
  let dropdownAvatarStatus = state(false);
  let closeDropdownAvatar = dropdownAvatar.close;
  user_effect(() => {
    set(dropdownAvatarStatus, proxy(dropdownAvatar.isOpen));
  });
  var div = root$g();
  var node = child(div);
  Button(node, {
    get onclick() {
      return dropdownAvatar.toggle;
    },
    pill: true,
    color: "light",
    class: "!p-1",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$d();
      var node_1 = first_child(fragment);
      Avatar(node_1, {
        src: "/images/profile-picture-3.webp",
        class: "me-2"
      });
      next();
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node, 2);
  var node_2 = child(div_1);
  Dropdown(node_2, {
    get activeUrl() {
      return get(activeUrl);
    },
    get dropdownStatus() {
      return get(dropdownAvatarStatus);
    },
    closeDropdown: closeDropdownAvatar,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[160px] top-[50px]",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_2$7();
      var node_3 = first_child(fragment_1);
      DropdownHeader(node_3, {
        class: "px-4 py-2",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_3$c();
          next(2);
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_4 = sibling(node_3, 2);
      DropdownUl(node_4, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_3 = root_4$4();
          var node_5 = first_child(fragment_3);
          DropdownLi(node_5, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("Dashboard");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_6 = sibling(node_5, 2);
          DropdownLi(node_6, {
            href: "/components/drawer",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Drawer");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          var node_7 = sibling(node_6, 2);
          DropdownLi(node_7, {
            href: "/components/dropdown",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_2 = text("Dropdown");
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
          var node_8 = sibling(node_7, 2);
          DropdownLi(node_8, {
            href: "/components",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_3 = text("Alert");
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_3);
        },
        $$slots: { default: true }
      });
      var node_9 = sibling(node_4, 2);
      DropdownFooter(node_9, {
        class: "px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_4 = text("Sign out");
          append($$anchor3, text_4);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  reset(div_1);
  reset(div);
  append($$anchor, div);
  pop();
}
var root_1$c = template(`Dropdown checkbox<!>`, 1);
var root_3$b = template(`<!> <!> <!> <!> <!> <!>`, 1);
var root$f = template(`<div class="flex h-72 items-start justify-center"><!> <div class="relative"><!></div></div>`);
function Checkbox_1($$anchor, $$props) {
  push($$props, true);
  let dropdownCheckbox = uiHelpers();
  let dropdownCheckboxStatus = state(false);
  let closeDropdownCheckbox = dropdownCheckbox.close;
  user_effect(() => {
    set(dropdownCheckboxStatus, proxy(dropdownCheckbox.isOpen));
  });
  var div = root$f();
  var node = child(div);
  Button(node, {
    get onclick() {
      return dropdownCheckbox.toggle;
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment = root_1$c();
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
      return get(dropdownCheckboxStatus);
    },
    closeDropdown: closeDropdownCheckbox,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[195px] top-[45px]",
    children: ($$anchor2, $$slotProps) => {
      DropdownUl($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_3$b();
          var node_3 = first_child(fragment_2);
          DropdownLi(node_3, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$anchor4, $$slotProps3) => {
              Checkbox($$anchor4, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text$1 = text("Robert Gouth");
                  append($$anchor5, text$1);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          var node_4 = sibling(node_3, 2);
          DropdownLi(node_4, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$anchor4, $$slotProps3) => {
              Checkbox($$anchor4, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_1 = text("Jese Leos");
                  append($$anchor5, text_1);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          var node_5 = sibling(node_4, 2);
          DropdownLi(node_5, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$anchor4, $$slotProps3) => {
              Checkbox($$anchor4, {
                checked: true,
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_2 = text("Bonnie Green");
                  append($$anchor5, text_2);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          var node_6 = sibling(node_5, 2);
          DropdownLi(node_6, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$anchor4, $$slotProps3) => {
              Checkbox($$anchor4, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_3 = text("Jese Leos");
                  append($$anchor5, text_3);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          var node_7 = sibling(node_6, 2);
          DropdownLi(node_7, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$anchor4, $$slotProps3) => {
              Checkbox($$anchor4, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_4 = text("Robert Gouth");
                  append($$anchor5, text_4);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          var node_8 = sibling(node_7, 2);
          DropdownLi(node_8, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$anchor4, $$slotProps3) => {
              Checkbox($$anchor4, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_5 = text("Bonnie Green");
                  append($$anchor5, text_5);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
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
var root_1$b = template(`Dropdown helper text<!>`, 1);
var root_4$3 = template(`<!> <!>`, 1);
var root_7$4 = template(`<!> <!>`, 1);
var root_10$3 = template(`<!> <!>`, 1);
var root_3$a = template(`<!> <!> <!>`, 1);
var root$e = template(`<div class="relative flex h-72 items-start justify-center"><!> <div class="relative"><!></div></div>`);
function HelperText($$anchor, $$props) {
  push($$props, true);
  let dropdownHelper = uiHelpers();
  let dropdownHelperStatus = state(false);
  let closeDropdownHelper = dropdownHelper.close;
  user_effect(() => {
    set(dropdownHelperStatus, proxy(dropdownHelper.isOpen));
  });
  var div = root$e();
  var node = child(div);
  Button(node, {
    get onclick() {
      return dropdownHelper.toggle;
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment = root_1$b();
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
      return get(dropdownHelperStatus);
    },
    closeDropdown: closeDropdownHelper,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[240px] top-[45px] w-64 overflow-y-auto p-2 pb-3 text-sm",
    children: ($$anchor2, $$slotProps) => {
      DropdownUl($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_3$a();
          var node_3 = first_child(fragment_2);
          DropdownLi(node_3, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$anchor4, $$slotProps3) => {
              var fragment_3 = root_4$3();
              var node_4 = first_child(fragment_3);
              Checkbox(node_4, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text$1 = text("Enable notifications");
                  append($$anchor5, text$1);
                },
                $$slots: { default: true }
              });
              var node_5 = sibling(node_4, 2);
              Helper(node_5, {
                class: "ps-6",
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_1 = text("Some helpful instruction goes over here.");
                  append($$anchor5, text_1);
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_3);
            },
            $$slots: { default: true }
          });
          var node_6 = sibling(node_3, 2);
          DropdownLi(node_6, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$anchor4, $$slotProps3) => {
              var fragment_4 = root_7$4();
              var node_7 = first_child(fragment_4);
              Checkbox(node_7, {
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_2 = text("Enable 2FA auth");
                  append($$anchor5, text_2);
                },
                $$slots: { default: true }
              });
              var node_8 = sibling(node_7, 2);
              Helper(node_8, {
                class: "ps-6",
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_3 = text("Some helpful instruction goes over here.");
                  append($$anchor5, text_3);
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_4);
            },
            $$slots: { default: true }
          });
          var node_9 = sibling(node_6, 2);
          DropdownLi(node_9, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$anchor4, $$slotProps3) => {
              var fragment_5 = root_10$3();
              var node_10 = first_child(fragment_5);
              Checkbox(node_10, {
                checked: true,
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_4 = text("Subscribe newsletter");
                  append($$anchor5, text_4);
                },
                $$slots: { default: true }
              });
              var node_11 = sibling(node_10, 2);
              Helper(node_11, {
                class: "ps-6",
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_5 = text("Some helpful instruction goes over here.");
                  append($$anchor5, text_5);
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_5);
            },
            $$slots: { default: true }
          });
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
var root_2$6 = template(`<!> <!> <!> <!>`, 1);
var root$d = template(`<div class="flex h-40 items-start justify-center"><!> <div class="relative"><!></div></div>`);
function MenuIcon($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  user_effect(() => {
    set(activeUrl, proxy($page().url.pathname));
  });
  let dropdownIcon = uiHelpers();
  let dropdownIconStatus = state(false);
  let closeDropdownIcon = dropdownIcon.close;
  user_effect(() => {
    set(dropdownIconStatus, proxy(dropdownIcon.isOpen));
  });
  var div = root$d();
  var node = child(div);
  DotsVerticalOutline(node, {
    get onclick() {
      return dropdownIcon.toggle;
    },
    class: "dots-menu dark:text-white"
  });
  var div_1 = sibling(node, 2);
  var node_1 = child(div_1);
  Dropdown(node_1, {
    get activeUrl() {
      return get(activeUrl);
    },
    get dropdownStatus() {
      return get(dropdownIconStatus);
    },
    closeDropdown: closeDropdownIcon,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[90px] top-[20px]",
    children: ($$anchor2, $$slotProps) => {
      DropdownUl($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_1 = root_2$6();
          var node_2 = first_child(fragment_1);
          DropdownLi(node_2, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("Dashboard");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_3 = sibling(node_2, 2);
          DropdownLi(node_3, {
            href: "/components/drawer",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Drawer");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          var node_4 = sibling(node_3, 2);
          DropdownLi(node_4, {
            href: "/components/dropdown",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_2 = text("Dropdown");
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
          var node_5 = sibling(node_4, 2);
          DropdownLi(node_5, {
            href: "/components",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_3 = text("Alert");
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_1);
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
var root_1$a = template(`Dropdown <!>`, 1);
var root_6$3 = template(`<!> <!> <!>`, 1);
var root_3$9 = template(`<!> <button class="flex p-2 pl-4">Dropdown<!></button> <div class="relative"><!></div> <!> <!> <!>`, 1);
var root$c = template(`<div class="flex h-60 items-start justify-center"><!> <div class="relative"><!></div></div>`);
function MultiLevel($$anchor, $$props) {
  push($$props, true);
  let dropdownMultiLevel = uiHelpers();
  let dropdownMultiLevelStatus = state(false);
  let closeDropdownMultiLevel = dropdownMultiLevel.close;
  let dropdownMultiLevel2 = uiHelpers();
  let dropdownMultiLevelStatus2 = state(false);
  const closeAllMultilevel = () => {
    dropdownMultiLevel.close();
    dropdownMultiLevel2.close();
  };
  user_effect(() => {
    set(dropdownMultiLevelStatus, proxy(dropdownMultiLevel.isOpen));
    set(dropdownMultiLevelStatus2, proxy(dropdownMultiLevel2.isOpen));
  });
  var div = root$c();
  var node = child(div);
  Button(node, {
    get onclick() {
      return dropdownMultiLevel.toggle;
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment = root_1$a();
      var node_1 = sibling(first_child(fragment));
      ChevronDownOutline(node_1, {
        class: "ms-2 h-5 w-5 text-white dark:text-white"
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node, 2);
  var node_2 = child(div_1);
  Dropdown(node_2, {
    get dropdownStatus() {
      return get(dropdownMultiLevelStatus);
    },
    closeDropdown: closeDropdownMultiLevel,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[150px] top-[40px] overflow-visible",
    children: ($$anchor2, $$slotProps) => {
      DropdownUl($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_3$9();
          var node_3 = first_child(fragment_2);
          DropdownLi(node_3, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("Dashboard");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var button = sibling(node_3, 2);
          button.__click = function(...$$args) {
            var _a;
            (_a = dropdownMultiLevel2.toggle) == null ? void 0 : _a.apply(this, $$args);
          };
          var node_4 = sibling(child(button));
          ChevronRightOutline(node_4, {
            class: "ms-2 h-6 w-6 text-primary-700 dark:text-white"
          });
          reset(button);
          var div_2 = sibling(button, 2);
          var node_5 = child(div_2);
          Dropdown(node_5, {
            get dropdownStatus() {
              return get(dropdownMultiLevelStatus2);
            },
            closeDropdown: closeAllMultilevel,
            params: { y: 0, duration: 200, easing: sineIn },
            class: "absolute -top-[60px] left-[120px]",
            children: ($$anchor4, $$slotProps3) => {
              DropdownUl($$anchor4, {
                class: "z-100",
                children: ($$anchor5, $$slotProps4) => {
                  var fragment_4 = root_6$3();
                  var node_6 = first_child(fragment_4);
                  DropdownLi(node_6, {
                    href: "/",
                    children: ($$anchor6, $$slotProps5) => {
                      next();
                      var text_1 = text("Home");
                      append($$anchor6, text_1);
                    },
                    $$slots: { default: true }
                  });
                  var node_7 = sibling(node_6, 2);
                  DropdownLi(node_7, {
                    href: "/components/footer",
                    children: ($$anchor6, $$slotProps5) => {
                      next();
                      var text_2 = text("Footer");
                      append($$anchor6, text_2);
                    },
                    $$slots: { default: true }
                  });
                  var node_8 = sibling(node_7, 2);
                  DropdownLi(node_8, {
                    href: "/components/alert",
                    children: ($$anchor6, $$slotProps5) => {
                      next();
                      var text_3 = text("Alert");
                      append($$anchor6, text_3);
                    },
                    $$slots: { default: true }
                  });
                  append($$anchor5, fragment_4);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          reset(div_2);
          var node_9 = sibling(div_2, 2);
          DropdownLi(node_9, {
            href: "/components/drawer",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_4 = text("Drawer");
              append($$anchor4, text_4);
            },
            $$slots: { default: true }
          });
          var node_10 = sibling(node_9, 2);
          DropdownLi(node_10, {
            href: "/components/footer",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_5 = text("Footer");
              append($$anchor4, text_5);
            },
            $$slots: { default: true }
          });
          var node_11 = sibling(node_10, 2);
          DropdownLi(node_11, {
            href: "/components/button",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_6 = text("Button");
              append($$anchor4, text_6);
            },
            $$slots: { default: true }
          });
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
delegate(["click"]);
var root_2$5 = template(`<img width="30" src="/images/svelte-icon.png" alt="svelte icon">`);
var root_7$3 = template(`Dropdown<!>`, 1);
var root_9$2 = template(`<!> <!> <!> <!> <!>`, 1);
var root_4$2 = template(`<!> <!> <div class="relative"><!> <!></div> <!>`, 1);
var root$b = template(`<div class="h-72"><!></div>`);
function Navbar_1($$anchor, $$props) {
  push($$props, true);
  let nav = uiHelpers();
  let navStatus = state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  let dropdownNav = uiHelpers();
  let dropdownNavStatus = state(false);
  let closeDropdownNav = dropdownNav.close;
  user_effect(() => {
    set(dropdownNavStatus, proxy(dropdownNav.isOpen));
    set(navStatus, proxy(nav.isOpen));
  });
  var div = root$b();
  var node = child(div);
  {
    const brand = ($$anchor2) => {
      NavBrand($$anchor2, {
        siteName: "Svelte 5",
        children: ($$anchor3, $$slotProps) => {
          var img = root_2$5();
          append($$anchor3, img);
        },
        $$slots: { default: true }
      });
    };
    Navbar(node, {
      toggleNav,
      closeNav,
      get navStatus() {
        return get(navStatus);
      },
      breakPoint: "md",
      brand,
      children: ($$anchor2, $$slotProps) => {
        NavUl($$anchor2, {
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = root_4$2();
            var node_1 = first_child(fragment_2);
            NavLi(node_1, {
              href: "/",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text$1 = text("Home");
                append($$anchor4, text$1);
              },
              $$slots: { default: true }
            });
            var node_2 = sibling(node_1, 2);
            NavLi(node_2, {
              href: "/components/navbar",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_1 = text("Navbar");
                append($$anchor4, text_1);
              },
              $$slots: { default: true }
            });
            var div_1 = sibling(node_2, 2);
            var node_3 = child(div_1);
            NavLi(node_3, {
              get onclick() {
                return dropdownNav.toggle;
              },
              class: "cursor-pointer",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var fragment_3 = root_7$3();
                var node_4 = sibling(first_child(fragment_3));
                ChevronDownOutline(node_4, {
                  class: "ms-2 inline h-6 w-6 text-primary-800 dark:text-white"
                });
                append($$anchor4, fragment_3);
              },
              $$slots: { default: true }
            });
            var node_5 = sibling(node_3, 2);
            Dropdown(node_5, {
              get dropdownStatus() {
                return get(dropdownNavStatus);
              },
              closeDropdown: closeDropdownNav,
              params: { y: 0, duration: 200, easing: sineIn },
              class: "absolute -top-[20px] left-[120px] md:-left-[20px] md:top-[20px]",
              children: ($$anchor4, $$slotProps3) => {
                DropdownUl($$anchor4, {
                  class: "p-2",
                  children: ($$anchor5, $$slotProps4) => {
                    var fragment_5 = root_9$2();
                    var node_6 = first_child(fragment_5);
                    DropdownLi(node_6, {
                      href: "/",
                      children: ($$anchor6, $$slotProps5) => {
                        next();
                        var text_2 = text("Home");
                        append($$anchor6, text_2);
                      },
                      $$slots: { default: true }
                    });
                    var node_7 = sibling(node_6, 2);
                    DropdownDivider(node_7, {});
                    var node_8 = sibling(node_7, 2);
                    DropdownLi(node_8, {
                      href: "/components/drawer",
                      children: ($$anchor6, $$slotProps5) => {
                        next();
                        var text_3 = text("Drawer");
                        append($$anchor6, text_3);
                      },
                      $$slots: { default: true }
                    });
                    var node_9 = sibling(node_8, 2);
                    DropdownLi(node_9, {
                      href: "/components/footer",
                      children: ($$anchor6, $$slotProps5) => {
                        next();
                        var text_4 = text("Footer");
                        append($$anchor6, text_4);
                      },
                      $$slots: { default: true }
                    });
                    var node_10 = sibling(node_9, 2);
                    DropdownLi(node_10, {
                      href: "/components/alert",
                      children: ($$anchor6, $$slotProps5) => {
                        next();
                        var text_5 = text("Alert");
                        append($$anchor6, text_5);
                      },
                      $$slots: { default: true }
                    });
                    append($$anchor5, fragment_5);
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
            reset(div_1);
            var node_11 = sibling(div_1, 2);
            NavLi(node_11, {
              href: "/components/footer",
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_6 = text("Footer");
                append($$anchor4, text_6);
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
      },
      $$slots: { brand: true, default: true }
    });
  }
  reset(div);
  append($$anchor, div);
  pop();
}
var root_4$1 = template(`<!> <div class="w-full ps-3"><div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">New message from <span class="font-semibold text-gray-900 dark:text-white">Jese Leos</span> : "Hey, what's up? All set for the presentation?"</div> <div class="text-xs text-primary-600 dark:text-primary-500">a few moments ago</div></div>`, 1);
var root_5$2 = template(`<!> <div class="w-full ps-3"><div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span> and <span class="font-medium text-gray-900 dark:text-white">5 others</span> started following you.</div> <div class="text-xs text-primary-600 dark:text-primary-500">10 minutes ago</div></div>`, 1);
var root_6$2 = template(`<!> <div class="w-full ps-3"><div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span> and <span class="font-medium text-gray-900 dark:text-white">141 others</span> love your story. See it and view more stories.</div> <div class="text-xs text-primary-600 dark:text-primary-500">44 minutes ago</div></div>`, 1);
var root_3$8 = template(`<!> <!> <!>`, 1);
var root_7$2 = template(`<div class="inline-flex items-center"><!> View all</div>`);
var root_1$9 = template(`<!> <!> <!>`, 1);
var root$a = template(`<div class="flex h-[360px] items-start justify-center"><div id="bell" class="inline-flex items-center text-center text-sm font-medium text-gray-500 hover:text-gray-900 focus:outline-none dark:text-gray-400 dark:hover:text-white"><!> <div class="relative flex"><div class="relative -top-2 end-4 inline-flex h-3 w-3 rounded-full border-2 border-white bg-red-500 dark:border-gray-900"></div></div></div> <div class="relative"><!></div></div>`);
function NotificationBell($$anchor, $$props) {
  push($$props, true);
  let dropdownNotification = uiHelpers();
  let dropdownNotificationStatus = state(false);
  let closeDropdownNotification = dropdownNotification.close;
  user_effect(() => {
    set(dropdownNotificationStatus, proxy(dropdownNotification.isOpen));
  });
  var div = root$a();
  var div_1 = child(div);
  var node = child(div_1);
  BellSolid(node, {
    class: "h-8 w-8",
    get onclick() {
      return dropdownNotification.toggle;
    }
  });
  next(2);
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  var node_1 = child(div_2);
  Dropdown(node_1, {
    get dropdownStatus() {
      return get(dropdownNotificationStatus);
    },
    closeDropdown: closeDropdownNotification,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[230px] top-[30px] w-96",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$9();
      var node_2 = first_child(fragment);
      DropdownHeader(node_2, {
        class: "py-2 text-center font-bold",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("Notifications");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      var node_3 = sibling(node_2, 2);
      DropdownUl(node_3, {
        class: "max-w-sm space-y-2 divide-y divide-gray-100 rounded p-2 shadow dark:divide-gray-700 dark:bg-gray-800",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_1 = root_3$8();
          var node_4 = first_child(fragment_1);
          DropdownLi(node_4, {
            liClass: "flex space-x-4 rtl:space-x-reverse p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$anchor4, $$slotProps3) => {
              var fragment_2 = root_4$1();
              var node_5 = first_child(fragment_2);
              Avatar(node_5, {
                src: "/images/profile-picture-1.webp",
                dot: { color: "gray" },
                cornerStyle: "rounded"
              });
              next(2);
              append($$anchor4, fragment_2);
            },
            $$slots: { default: true }
          });
          var node_6 = sibling(node_4, 2);
          DropdownLi(node_6, {
            liClass: "flex space-x-4 rtl:space-x-reverse p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$anchor4, $$slotProps3) => {
              var fragment_3 = root_5$2();
              var node_7 = first_child(fragment_3);
              Avatar(node_7, {
                src: "/images/profile-picture-2.webp",
                dot: { color: "red" },
                cornerStyle: "rounded"
              });
              next(2);
              append($$anchor4, fragment_3);
            },
            $$slots: { default: true }
          });
          var node_8 = sibling(node_6, 2);
          DropdownLi(node_8, {
            liClass: "flex space-x-4 rtl:space-x-reverse p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$anchor4, $$slotProps3) => {
              var fragment_4 = root_6$2();
              var node_9 = first_child(fragment_4);
              Avatar(node_9, {
                src: "/images/profile-picture-3.webp",
                dot: { color: "green" },
                cornerStyle: "rounded"
              });
              next(2);
              append($$anchor4, fragment_4);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
      var node_10 = sibling(node_3, 2);
      DropdownFooter(node_10, {
        class: "-my-1 block bg-gray-50 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
        children: ($$anchor3, $$slotProps2) => {
          var div_3 = root_7$2();
          var node_11 = child(div_3);
          EyeSolid(node_11, {
            class: "me-2 h-4 w-4 text-gray-500 dark:text-gray-400"
          });
          next();
          reset(div_3);
          append($$anchor3, div_3);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div_2);
  reset(div);
  append($$anchor, div);
  pop();
}
var root_1$8 = template(`Dropdown bottom<!>`, 1);
var root_3$7 = template(`<!> <!> <!> <!>`, 1);
var root$9 = template(`<div class="flex h-[360px] items-start justify-center"><!> <div class="relative"><!></div></div>`);
function PlacementBottom($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  user_effect(() => {
    set(activeUrl, proxy($page().url.pathname));
  });
  let dropdownBottom = uiHelpers();
  let dropdownBottomStatus = state(false);
  let closeDropdownBottom = dropdownBottom.close;
  user_effect(() => {
    set(dropdownBottomStatus, proxy(dropdownBottom.isOpen));
  });
  var div = root$9();
  var node = child(div);
  Button(node, {
    get onclick() {
      return dropdownBottom.toggle;
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment = root_1$8();
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
    get activeUrl() {
      return get(activeUrl);
    },
    get dropdownStatus() {
      return get(dropdownBottomStatus);
    },
    closeDropdown: closeDropdownBottom,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[190px] top-[40px]",
    children: ($$anchor2, $$slotProps) => {
      DropdownUl($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_3$7();
          var node_3 = first_child(fragment_2);
          DropdownLi(node_3, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("Dashboard");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_4 = sibling(node_3, 2);
          DropdownLi(node_4, {
            href: "/components/drawer",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Drawer");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          var node_5 = sibling(node_4, 2);
          DropdownLi(node_5, {
            href: "/components/dropdown",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_2 = text("Dropdown");
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
          var node_6 = sibling(node_5, 2);
          DropdownLi(node_6, {
            href: "/components",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_3 = text("Alert");
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
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
var root_1$7 = template(`<!>Dropdown left`, 1);
var root_3$6 = template(`<!> <!> <!> <!>`, 1);
var root$8 = template(`<div class="flex h-[160px] items-center justify-center"><!> <div class="relative"><!></div></div>`);
function PlacementLeft($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  user_effect(() => {
    set(activeUrl, proxy($page().url.pathname));
  });
  let dropdownLeft = uiHelpers();
  let dropdownLeftStatus = state(false);
  let closeDropdownLeft = dropdownLeft.close;
  user_effect(() => {
    set(dropdownLeftStatus, proxy(dropdownLeft.isOpen));
  });
  var div = root$8();
  var node = child(div);
  Button(node, {
    get onclick() {
      return dropdownLeft.toggle;
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$7();
      var node_1 = first_child(fragment);
      ChevronLeftOutline(node_1, {
        class: "me-2 h-6 w-6 text-white dark:text-white"
      });
      next();
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node, 2);
  var node_2 = child(div_1);
  Dropdown(node_2, {
    get activeUrl() {
      return get(activeUrl);
    },
    get dropdownStatus() {
      return get(dropdownLeftStatus);
    },
    closeDropdown: closeDropdownLeft,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -top-[80px] right-[175px]",
    children: ($$anchor2, $$slotProps) => {
      DropdownUl($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_3$6();
          var node_3 = first_child(fragment_2);
          DropdownLi(node_3, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("Dashboard");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_4 = sibling(node_3, 2);
          DropdownLi(node_4, {
            href: "/components/drawer",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Drawer");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          var node_5 = sibling(node_4, 2);
          DropdownLi(node_5, {
            href: "/components/dropdown",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_2 = text("Dropdown");
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
          var node_6 = sibling(node_5, 2);
          DropdownLi(node_6, {
            href: "/components",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_3 = text("Alert");
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
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
var root_1$6 = template(`Dropdown right<!>`, 1);
var root_3$5 = template(`<!> <!> <!> <!>`, 1);
var root$7 = template(`<div class="flex h-[160px] items-center justify-center"><!> <div class="relative"><!></div></div>`);
function PlacementRight($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  user_effect(() => {
    set(activeUrl, proxy($page().url.pathname));
  });
  let dropdownRight = uiHelpers();
  let dropdownRightStatus = state(false);
  let closeDropdownRight = dropdownRight.close;
  user_effect(() => {
    set(dropdownRightStatus, proxy(dropdownRight.isOpen));
  });
  var div = root$7();
  var node = child(div);
  Button(node, {
    get onclick() {
      return dropdownRight.toggle;
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment = root_1$6();
      var node_1 = sibling(first_child(fragment));
      ChevronRightOutline(node_1, {
        class: "ms-2 h-6 w-6 text-white dark:text-white"
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node, 2);
  var node_2 = child(div_1);
  Dropdown(node_2, {
    get activeUrl() {
      return get(activeUrl);
    },
    get dropdownStatus() {
      return get(dropdownRightStatus);
    },
    closeDropdown: closeDropdownRight,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -top-[80px] left-[10px]",
    children: ($$anchor2, $$slotProps) => {
      DropdownUl($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_3$5();
          var node_3 = first_child(fragment_2);
          DropdownLi(node_3, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("Dashboard");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_4 = sibling(node_3, 2);
          DropdownLi(node_4, {
            href: "/components/drawer",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Drawer");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          var node_5 = sibling(node_4, 2);
          DropdownLi(node_5, {
            href: "/components/dropdown",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_2 = text("Dropdown");
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
          var node_6 = sibling(node_5, 2);
          DropdownLi(node_6, {
            href: "/components",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_3 = text("Alert");
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
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
var root_1$5 = template(`Dropdown top<!>`, 1);
var root_3$4 = template(`<!> <!> <!> <!>`, 1);
var root$6 = template(`<div class="flex h-[200px] items-end justify-center"><!> <div class="relative"><!></div></div>`);
function PlacementTop($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  user_effect(() => {
    set(activeUrl, proxy($page().url.pathname));
  });
  let dropdownTop = uiHelpers();
  let dropdownTopStatus = state(false);
  let closeDropdownTop = dropdownTop.close;
  user_effect(() => {
    set(dropdownTopStatus, proxy(dropdownTop.isOpen));
  });
  var div = root$6();
  var node = child(div);
  Button(node, {
    get onclick() {
      return dropdownTop.toggle;
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment = root_1$5();
      var node_1 = sibling(first_child(fragment));
      ChevronUpOutline(node_1, {
        class: "ms-2 h-6 w-6 text-white dark:text-white"
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node, 2);
  var node_2 = child(div_1);
  Dropdown(node_2, {
    get activeUrl() {
      return get(activeUrl);
    },
    get dropdownStatus() {
      return get(dropdownTopStatus);
    },
    closeDropdown: closeDropdownTop,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[170px] -top-[220px]",
    children: ($$anchor2, $$slotProps) => {
      DropdownUl($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_3$4();
          var node_3 = first_child(fragment_2);
          DropdownLi(node_3, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("Dashboard");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_4 = sibling(node_3, 2);
          DropdownLi(node_4, {
            href: "/components/drawer",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Drawer");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          var node_5 = sibling(node_4, 2);
          DropdownLi(node_5, {
            href: "/components/dropdown",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_2 = text("Dropdown");
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
          var node_6 = sibling(node_5, 2);
          DropdownLi(node_6, {
            href: "/components",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_3 = text("Alert");
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
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
var root_1$4 = template(`Dropdown radio<!>`, 1);
var root_3$3 = template(`<!> <!> <!> <!>`, 1);
var root_11$1 = template(`<a href="/" class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600"><!>Delete user</a>`);
var root_2$4 = template(`<!> <!>`, 1);
var root$5 = template(`<div class="flex h-64 items-start justify-center"><!> <div class="relative"><!></div></div>`);
function Radio_1($$anchor, $$props) {
  push($$props, true);
  let group1 = state(2);
  let dropdownRadio = uiHelpers();
  let dropdownRadioStatus = state(false);
  let closeDropdownRadio = dropdownRadio.close;
  user_effect(() => {
    set(dropdownRadioStatus, proxy(dropdownRadio.isOpen));
  });
  var div = root$5();
  var node = child(div);
  Button(node, {
    get onclick() {
      return dropdownRadio.toggle;
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment = root_1$4();
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
      return get(dropdownRadioStatus);
    },
    closeDropdown: closeDropdownRadio,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[185px] top-[45px] w-48 overflow-y-auto pb-3 text-sm",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_2$4();
      var node_3 = first_child(fragment_1);
      DropdownUl(node_3, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_3$3();
          var node_4 = first_child(fragment_2);
          DropdownHeader(node_4, {
            class: "px-2 py-1",
            children: ($$anchor4, $$slotProps3) => {
              Search($$anchor4, { size: "md" });
            },
            $$slots: { default: true }
          });
          var node_5 = sibling(node_4, 2);
          DropdownLi(node_5, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$anchor4, $$slotProps3) => {
              Radio($$anchor4, {
                name: "group1",
                get group() {
                  return get(group1);
                },
                set group($$value) {
                  set(group1, proxy($$value));
                },
                value: 1,
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text$1 = text("Default radio");
                  append($$anchor5, text$1);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          var node_6 = sibling(node_5, 2);
          DropdownLi(node_6, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$anchor4, $$slotProps3) => {
              Radio($$anchor4, {
                name: "group1",
                get group() {
                  return get(group1);
                },
                set group($$value) {
                  set(group1, proxy($$value));
                },
                value: 2,
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_1 = text("Checked state");
                  append($$anchor5, text_1);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          var node_7 = sibling(node_6, 2);
          DropdownLi(node_7, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$anchor4, $$slotProps3) => {
              Radio($$anchor4, {
                name: "group1",
                get group() {
                  return get(group1);
                },
                set group($$value) {
                  set(group1, proxy($$value));
                },
                value: 3,
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_2 = text("Default radio");
                  append($$anchor5, text_2);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_8 = sibling(node_3, 2);
      DropdownFooter(node_8, {
        children: ($$anchor3, $$slotProps2) => {
          var a = root_11$1();
          var node_9 = child(a);
          UserRemoveSolid(node_9, { class: "me-1 h-5 w-5" });
          next();
          reset(a);
          append($$anchor3, a);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  reset(div_1);
  reset(div);
  append($$anchor, div);
  pop();
}
var root_1$3 = template(`Dropdown <!>`, 1);
var root_4 = template(`<!>Jese Leos`, 1);
var root_5$1 = template(`<!>Robert Gouth`, 1);
var root_6$1 = template(`<!>Bonnie Green`, 1);
var root_7$1 = template(`<!>Robert Wall`, 1);
var root_8$1 = template(`<!>Joseph Mcfall`, 1);
var root_9$1 = template(`<!>Leslie Livingston`, 1);
var root_10$2 = template(`<!>Bonnie Green`, 1);
var root_3$2 = template(`<!> <!> <!> <!> <!> <!> <!>`, 1);
var root_11 = template(`<a href="/" class="-mb-1 flex items-center bg-gray-50 px-3 py-2 text-sm font-medium text-primary-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-primary-500 dark:hover:bg-gray-600"><!>Add new user</a>`);
var root_2$3 = template(`<!> <!>`, 1);
var root$4 = template(`<div class="flex h-60 items-start justify-center"><!> <div class="relative"><!></div></div>`);
function Scrolling($$anchor, $$props) {
  push($$props, true);
  let dropdownScroll = uiHelpers();
  let dropdownScrollStatus = state(false);
  let closeDropdownScroll = dropdownScroll.close;
  user_effect(() => {
    set(dropdownScrollStatus, proxy(dropdownScroll.isOpen));
  });
  var div = root$4();
  var node = child(div);
  Button(node, {
    get onclick() {
      return dropdownScroll.toggle;
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment = root_1$3();
      var node_1 = sibling(first_child(fragment));
      ChevronDownOutline(node_1, {
        class: "ms-2 h-5 w-5 text-white dark:text-white"
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node, 2);
  var node_2 = child(div_1);
  Dropdown(node_2, {
    get dropdownStatus() {
      return get(dropdownScrollStatus);
    },
    closeDropdown: closeDropdownScroll,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[160px] top-[40px] w-48",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_2$3();
      var node_3 = first_child(fragment_1);
      DropdownUl(node_3, {
        class: "h-40 w-52 overflow-y-auto py-1",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_3$2();
          var node_4 = first_child(fragment_2);
          DropdownLi(node_4, {
            href: "/",
            aClass: "flex items-center text-base font-semibold gap-2",
            children: ($$anchor4, $$slotProps3) => {
              var fragment_3 = root_4();
              var node_5 = first_child(fragment_3);
              Avatar(node_5, {
                src: "/images/profile-picture-1.webp",
                size: "xs"
              });
              next();
              append($$anchor4, fragment_3);
            },
            $$slots: { default: true }
          });
          var node_6 = sibling(node_4, 2);
          DropdownLi(node_6, {
            href: "/",
            aClass: "flex items-center text-base font-semibold gap-2",
            children: ($$anchor4, $$slotProps3) => {
              var fragment_4 = root_5$1();
              var node_7 = first_child(fragment_4);
              Avatar(node_7, {
                src: "/images/profile-picture-2.webp",
                size: "xs"
              });
              next();
              append($$anchor4, fragment_4);
            },
            $$slots: { default: true }
          });
          var node_8 = sibling(node_6, 2);
          DropdownLi(node_8, {
            href: "/",
            aClass: "flex items-center text-base font-semibold gap-2",
            children: ($$anchor4, $$slotProps3) => {
              var fragment_5 = root_6$1();
              var node_9 = first_child(fragment_5);
              Avatar(node_9, {
                src: "/images/profile-picture-3.webp",
                size: "xs"
              });
              next();
              append($$anchor4, fragment_5);
            },
            $$slots: { default: true }
          });
          var node_10 = sibling(node_8, 2);
          DropdownLi(node_10, {
            href: "/",
            aClass: "flex items-center text-base font-semibold gap-2",
            children: ($$anchor4, $$slotProps3) => {
              var fragment_6 = root_7$1();
              var node_11 = first_child(fragment_6);
              Avatar(node_11, {
                src: "/images/profile-picture-1.webp",
                size: "xs"
              });
              next();
              append($$anchor4, fragment_6);
            },
            $$slots: { default: true }
          });
          var node_12 = sibling(node_10, 2);
          DropdownLi(node_12, {
            href: "/",
            aClass: "flex items-center text-base font-semibold gap-2",
            children: ($$anchor4, $$slotProps3) => {
              var fragment_7 = root_8$1();
              var node_13 = first_child(fragment_7);
              Avatar(node_13, {
                src: "/images/profile-picture-2.webp",
                size: "xs"
              });
              next();
              append($$anchor4, fragment_7);
            },
            $$slots: { default: true }
          });
          var node_14 = sibling(node_12, 2);
          DropdownLi(node_14, {
            href: "/",
            aClass: "flex items-center text-base font-semibold gap-2",
            children: ($$anchor4, $$slotProps3) => {
              var fragment_8 = root_9$1();
              var node_15 = first_child(fragment_8);
              Avatar(node_15, {
                src: "/images/profile-picture-3.webp",
                size: "xs"
              });
              next();
              append($$anchor4, fragment_8);
            },
            $$slots: { default: true }
          });
          var node_16 = sibling(node_14, 2);
          DropdownLi(node_16, {
            href: "/",
            aClass: "flex items-center text-base font-semibold gap-2",
            children: ($$anchor4, $$slotProps3) => {
              var fragment_9 = root_10$2();
              var node_17 = first_child(fragment_9);
              Avatar(node_17, {
                src: "/images/profile-picture-3.webp",
                size: "xs"
              });
              next();
              append($$anchor4, fragment_9);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_18 = sibling(node_3, 2);
      DropdownFooter(node_18, {
        class: "overflow-hidden rounded-b-lg py-1",
        children: ($$anchor3, $$slotProps2) => {
          var a = root_11();
          var node_19 = child(a);
          ChevronDownOutline(node_19, {
            class: "ms-2 h-6 w-6 text-white dark:text-white"
          });
          next();
          reset(a);
          append($$anchor3, a);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  reset(div_1);
  reset(div);
  append($$anchor, div);
  pop();
}
var root_1$2 = template(`Dropdown <!>`, 1);
var root_8 = template(`<!>Delete user`, 1);
var root_2$2 = template(`<!> <!> <!>`, 1);
var root$3 = template(`<div class="flex h-60 items-start justify-center"><!> <div class="relative"><!></div></div>`);
function Search_1($$anchor, $$props) {
  push($$props, true);
  let searchTerm = state("");
  const people = [
    { name: "Robert Gouth", checked: false },
    { name: "Jese Leos", checked: false },
    { name: "Bonnie Green", checked: true }
  ];
  let filteredItems = derived(() => people.filter((person) => {
    var _a;
    return person.name.toLowerCase().indexOf((_a = get(searchTerm)) == null ? void 0 : _a.toLowerCase()) !== -1;
  }));
  let dropdownSearch = uiHelpers();
  let dropdownSearchStatus = state(false);
  let closeDropdownSearch = dropdownSearch.close;
  user_effect(() => {
    set(dropdownSearchStatus, proxy(dropdownSearch.isOpen));
  });
  var div = root$3();
  var node = child(div);
  Button(node, {
    get onclick() {
      return dropdownSearch.toggle;
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment = root_1$2();
      var node_1 = sibling(first_child(fragment));
      ChevronDownOutline(node_1, {
        class: "ms-2 h-5 w-5 text-white dark:text-white"
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node, 2);
  var node_2 = child(div_1);
  Dropdown(node_2, {
    get dropdownStatus() {
      return get(dropdownSearchStatus);
    },
    closeDropdown: closeDropdownSearch,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[175px] top-[40px] w-52",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_2$2();
      var node_3 = first_child(fragment_1);
      DropdownHeader(node_3, {
        children: ($$anchor3, $$slotProps2) => {
          Search($$anchor3, {
            size: "md",
            get value() {
              return get(searchTerm);
            },
            set value($$value) {
              set(searchTerm, proxy($$value));
            }
          });
        },
        $$slots: { default: true }
      });
      var node_4 = sibling(node_3, 2);
      DropdownUl(node_4, {
        class: "h-24 overflow-y-auto p-2",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_3 = comment();
          var node_5 = first_child(fragment_3);
          each(node_5, 17, () => get(filteredItems), (person) => person.name, ($$anchor4, person) => {
            DropdownLi($$anchor4, {
              liClass: "rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-600",
              children: ($$anchor5, $$slotProps3) => {
                Checkbox($$anchor5, {
                  get checked() {
                    return get(person).checked;
                  },
                  set checked($$value) {
                    get(person).checked = $$value;
                  },
                  children: ($$anchor6, $$slotProps4) => {
                    next();
                    var text$1 = text();
                    template_effect(() => set_text(text$1, get(person).name));
                    append($$anchor6, text$1);
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
          });
          append($$anchor3, fragment_3);
        },
        $$slots: { default: true }
      });
      var node_6 = sibling(node_4, 2);
      DropdownFooter(node_6, {
        class: "-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_7 = root_8();
          var node_7 = first_child(fragment_7);
          UserRemoveSolid(node_7, {
            class: "me-2 h-4 w-4 text-primary-700 dark:text-primary-700"
          });
          next();
          append($$anchor3, fragment_7);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  reset(div_1);
  reset(div);
  append($$anchor, div);
  pop();
}
var root_1$1 = template(`Dropdown radio<!>`, 1);
var root_3$1 = template(`<!> <!> <!>`, 1);
var root_10$1 = template(`<a href="/" class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600"><!>Delete user</a>`);
var root_2$1 = template(`<!> <!>`, 1);
var root$2 = template(`<div class="flex h-72 items-start justify-center"><!> <div class="relative"><!></div></div>`);
function Toggle_1($$anchor, $$props) {
  push($$props, true);
  let dropdownToggle = uiHelpers();
  let dropdownToggleStatus = state(false);
  let closeDropdownToggle = dropdownToggle.close;
  user_effect(() => {
    set(dropdownToggleStatus, proxy(dropdownToggle.isOpen));
  });
  var div = root$2();
  var node = child(div);
  Button(node, {
    get onclick() {
      return dropdownToggle.toggle;
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
      return get(dropdownToggleStatus);
    },
    closeDropdown: closeDropdownToggle,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[185px] top-[45px] w-48 overflow-y-auto text-sm",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_2$1();
      var node_3 = first_child(fragment_1);
      DropdownUl(node_3, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_3$1();
          var node_4 = first_child(fragment_2);
          DropdownLi(node_4, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$anchor4, $$slotProps3) => {
              Toggle($$anchor4, {
                class: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text$1 = text("Default toggle");
                  append($$anchor5, text$1);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          var node_5 = sibling(node_4, 2);
          DropdownLi(node_5, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$anchor4, $$slotProps3) => {
              Toggle($$anchor4, {
                class: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
                checked: true,
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_1 = text("Checked state");
                  append($$anchor5, text_1);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          var node_6 = sibling(node_5, 2);
          DropdownLi(node_6, {
            liClass: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
            children: ($$anchor4, $$slotProps3) => {
              Toggle($$anchor4, {
                class: "rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600",
                children: ($$anchor5, $$slotProps4) => {
                  next();
                  var text_2 = text("Default toggle");
                  append($$anchor5, text_2);
                },
                $$slots: { default: true }
              });
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_7 = sibling(node_3, 2);
      DropdownFooter(node_7, {
        children: ($$anchor3, $$slotProps2) => {
          var a = root_10$1();
          var node_8 = child(a);
          UserRemoveSolid(node_8, { class: "me-1 h-5 w-5" });
          next();
          reset(a);
          append($$anchor3, a);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  reset(div_1);
  reset(div);
  append($$anchor, div);
  pop();
}
var root_2 = template(`<span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span> <span class="block truncate text-sm font-medium">name@flowbite.com</span>`, 1);
var root_3 = template(`<!> <!> <!> <!>`, 1);
var root_1 = template(`<!> <!> <!>`, 1);
var root$1 = template(`<div class="flex h-72 items-start justify-center"><!> <div class="relative"><!></div></div>`);
function UserAvatar($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  user_effect(() => {
    set(activeUrl, proxy($page().url.pathname));
  });
  let dropdownUser = uiHelpers();
  let dropdownUserStatus = state(false);
  let closeDropdownUser = dropdownUser.close;
  user_effect(() => {
    set(dropdownUserStatus, proxy(dropdownUser.isOpen));
  });
  var div = root$1();
  var node = child(div);
  Avatar(node, {
    get onclick() {
      return dropdownUser.toggle;
    },
    src: "/images/profile-picture-3.webp",
    dot: { color: "green" }
  });
  var div_1 = sibling(node, 2);
  var node_1 = child(div_1);
  Dropdown(node_1, {
    get activeUrl() {
      return get(activeUrl);
    },
    get dropdownStatus() {
      return get(dropdownUserStatus);
    },
    closeDropdown: closeDropdownUser,
    params: { y: 0, duration: 200, easing: sineIn },
    class: "absolute -left-[110px] top-[40px]",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1();
      var node_2 = first_child(fragment);
      DropdownHeader(node_2, {
        class: "px-4 py-2",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_1 = root_2();
          next(2);
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
      var node_3 = sibling(node_2, 2);
      DropdownUl(node_3, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_3();
          var node_4 = first_child(fragment_2);
          DropdownLi(node_4, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("Dashboard");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_5 = sibling(node_4, 2);
          DropdownLi(node_5, {
            href: "/components/drawer",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Drawer");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          var node_6 = sibling(node_5, 2);
          DropdownLi(node_6, {
            href: "/components/dropdown",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_2 = text("Dropdown");
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
          var node_7 = sibling(node_6, 2);
          DropdownLi(node_7, {
            href: "/components",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_3 = text("Alert");
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_8 = sibling(node_3, 2);
      DropdownFooter(node_8, {
        class: "px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_4 = text("Sign out");
          append($$anchor3, text_4);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div_1);
  reset(div);
  append($$anchor, div);
  pop();
}
var root_6 = template(`Dropdown <!>`, 1);
var root_9 = template(`<div>Bonnie Green</div> <div class="truncate font-medium">name@flowbite.com</div>`, 1);
var root_10 = template(`<!> <!> <!> <!> <!>`, 1);
var root_17 = template(`<div class="py-2"><a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a></div>`);
var root_7 = template(`<!> <!> <!>`, 1);
var root_18 = template(`Header <!>`, 1);
var root_21 = template(`Footer <!>`, 1);
var root_24 = template(`Divider <!>`, 1);
var root_5 = template(`<div class="flex items-start justify-center"><!> <div class="relative h-96"><!></div></div> <div class="mb-4 flex gap-4"><!> <!> <!></div> <div class="flex flex-wrap space-x-2"><!> <!></div>`, 1);
var root_32 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  const dirName = "dropdown";
  let activeUrl = state(proxy($page().url.pathname));
  user_effect(() => {
    set(activeUrl, proxy($page().url.pathname));
  });
  let dropdownDividerHeaderFooter = uiHelpers();
  let dropdownDividerHeaderFooterStatus = state(false);
  let closeDropdownDividerHeaderFooter = dropdownDividerHeaderFooter.close;
  user_effect(() => {
    set(dropdownDividerHeaderFooterStatus, proxy(dropdownDividerHeaderFooter.isOpen));
  });
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
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  let dividerStatus = state(false);
  const changeDividerStatus = () => {
    set(dividerStatus, !get(dividerStatus));
  };
  let headerStatus = state(false);
  const changeHeaderStatus = () => {
    set(headerStatus, !get(headerStatus));
  };
  let footerStatus = state(false);
  const changeFooterStatus = () => {
    set(footerStatus, !get(footerStatus));
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
  let selectedTransition = state("Fly");
  let currentTransition = derived(() => transitions.find((t) => t.name === get(selectedTransition)) || transitions[0]);
  let generatedCode = derived(() => (() => {
    let headerContent = get(headerStatus) ? ` 
    <DropdownHeader>
      <div>Bonnie Green</div>
      <div class="truncate font-medium">name@flowbite.com</div>
    </DropdownHeader>` : "";
    let footerContent = get(footerStatus) ? `
    <DropdownFooter>
      <div class="py-2">
        <a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </div>
    </DropdownFooter>` : "";
    let dividerContent = get(dividerStatus) ? `
      <DropdownDivider />` : "";
    let props = [];
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
      var text$1 = text("Dropdown");
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
      var text_2 = text("Interactive Dropdown Builder");
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
        Button(node_5, {
          get onclick() {
            return dropdownDividerHeaderFooter.toggle;
          },
          children: ($$anchor3, $$slotProps2) => {
            next();
            var fragment_3 = root_6();
            var node_6 = sibling(first_child(fragment_3));
            ChevronDownOutline(node_6, {
              class: "ms-2 h-5 w-5 text-white dark:text-white"
            });
            append($$anchor3, fragment_3);
          },
          $$slots: { default: true }
        });
        var div_1 = sibling(node_5, 2);
        var node_7 = child(div_1);
        Dropdown(node_7, {
          get activeUrl() {
            return get(activeUrl);
          },
          get dropdownStatus() {
            return get(dropdownDividerHeaderFooterStatus);
          },
          closeDropdown: closeDropdownDividerHeaderFooter,
          get transition() {
            return get(currentTransition).transition;
          },
          get params() {
            return get(currentTransition).params;
          },
          class: "absolute -left-[150px] top-[40px]",
          children: ($$anchor3, $$slotProps2) => {
            var fragment_4 = root_7();
            var node_8 = first_child(fragment_4);
            if_block(node_8, () => get(headerStatus), ($$anchor4) => {
              DropdownHeader($$anchor4, {
                children: ($$anchor5, $$slotProps3) => {
                  var fragment_6 = root_9();
                  next(2);
                  append($$anchor5, fragment_6);
                },
                $$slots: { default: true }
              });
            });
            var node_9 = sibling(node_8, 2);
            DropdownUl(node_9, {
              children: ($$anchor4, $$slotProps3) => {
                var fragment_7 = root_10();
                var node_10 = first_child(fragment_7);
                DropdownLi(node_10, {
                  href: "/",
                  children: ($$anchor5, $$slotProps4) => {
                    next();
                    var text_3 = text("Dashboard");
                    append($$anchor5, text_3);
                  },
                  $$slots: { default: true }
                });
                var node_11 = sibling(node_10, 2);
                if_block(node_11, () => get(dividerStatus), ($$anchor5) => {
                  DropdownDivider($$anchor5, {});
                });
                var node_12 = sibling(node_11, 2);
                DropdownLi(node_12, {
                  href: "/components/dropdown",
                  children: ($$anchor5, $$slotProps4) => {
                    next();
                    var text_4 = text("Dropdown");
                    append($$anchor5, text_4);
                  },
                  $$slots: { default: true }
                });
                var node_13 = sibling(node_12, 2);
                DropdownLi(node_13, {
                  href: "/components/footer",
                  children: ($$anchor5, $$slotProps4) => {
                    next();
                    var text_5 = text("Footer");
                    append($$anchor5, text_5);
                  },
                  $$slots: { default: true }
                });
                var node_14 = sibling(node_13, 2);
                DropdownLi(node_14, {
                  href: "/components",
                  children: ($$anchor5, $$slotProps4) => {
                    next();
                    var text_6 = text("Alert");
                    append($$anchor5, text_6);
                  },
                  $$slots: { default: true }
                });
                append($$anchor4, fragment_7);
              },
              $$slots: { default: true }
            });
            var node_15 = sibling(node_9, 2);
            if_block(node_15, () => get(footerStatus), ($$anchor4) => {
              DropdownFooter($$anchor4, {
                children: ($$anchor5, $$slotProps3) => {
                  var div_2 = root_17();
                  append($$anchor5, div_2);
                },
                $$slots: { default: true }
              });
            });
            append($$anchor3, fragment_4);
          },
          $$slots: { default: true }
        });
        reset(div_1);
        reset(div);
        var div_3 = sibling(div, 2);
        var node_16 = child(div_3);
        Button(node_16, {
          onclick: changeHeaderStatus,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var fragment_10 = root_18();
            var node_17 = sibling(first_child(fragment_10));
            if_block(
              node_17,
              () => get(headerStatus),
              ($$anchor4) => {
                var text_7 = text("off");
                append($$anchor4, text_7);
              },
              ($$anchor4) => {
                var text_8 = text("on");
                append($$anchor4, text_8);
              }
            );
            append($$anchor3, fragment_10);
          },
          $$slots: { default: true }
        });
        var node_18 = sibling(node_16, 2);
        Button(node_18, {
          onclick: changeFooterStatus,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var fragment_11 = root_21();
            var node_19 = sibling(first_child(fragment_11));
            if_block(
              node_19,
              () => get(footerStatus),
              ($$anchor4) => {
                var text_9 = text("off");
                append($$anchor4, text_9);
              },
              ($$anchor4) => {
                var text_10 = text("on");
                append($$anchor4, text_10);
              }
            );
            append($$anchor3, fragment_11);
          },
          $$slots: { default: true }
        });
        var node_20 = sibling(node_18, 2);
        Button(node_20, {
          onclick: changeDividerStatus,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var fragment_12 = root_24();
            var node_21 = sibling(first_child(fragment_12));
            if_block(
              node_21,
              () => get(dividerStatus),
              ($$anchor4) => {
                var text_11 = text("off");
                append($$anchor4, text_11);
              },
              ($$anchor4) => {
                var text_12 = text("on");
                append($$anchor4, text_12);
              }
            );
            append($$anchor3, fragment_12);
          },
          $$slots: { default: true }
        });
        reset(div_3);
        var div_4 = sibling(div_3, 2);
        var node_22 = child(div_4);
        Label(node_22, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_13 = text("Transition");
            append($$anchor3, text_13);
          },
          $$slots: { default: true }
        });
        var node_23 = sibling(node_22, 2);
        each(node_23, 17, () => transitions, index, ($$anchor3, transition) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "dropdown_transition",
            get group() {
              return get(selectedTransition);
            },
            set group($$value) {
              set(selectedTransition, proxy($$value));
            },
            get value() {
              return get(transition).name;
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_14 = text();
              template_effect(() => set_text(text_14, get(transition).name));
              append($$anchor4, text_14);
            },
            $$slots: { default: true }
          });
        });
        reset(div_4);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_24 = sibling(node_4, 2);
  H2(node_24, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_15 = text("Examples");
      append($$anchor2, text_15);
    },
    $$slots: { default: true }
  });
  var node_25 = sibling(node_24, 2);
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
    CodeWrapper(node_25, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_16 = root_32();
        var div_5 = first_child(fragment_16);
        var node_26 = child(div_5);
        Label(node_26, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_16 = text("Example");
            append($$anchor3, text_16);
          },
          $$slots: { default: true }
        });
        var node_27 = sibling(node_26, 2);
        each(node_27, 17, () => exampleArr, index, ($$anchor3, style) => {
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
              var text_17 = text();
              template_effect(() => set_text(text_17, get(style).name));
              append($$anchor4, text_17);
            },
            $$slots: { default: true }
          });
        });
        reset(div_5);
        var node_28 = sibling(div_5, 2);
        component(node_28, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_16);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_29 = sibling(node_25, 2);
  H2(node_29, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_18 = text("Component data");
      append($$anchor2, text_18);
    },
    $$slots: { default: true }
  });
  var node_30 = sibling(node_29, 2);
  CompoAttributesViewer(node_30, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
