import { a as append, t as template, c as comment, n as ns_template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, t as template_effect, a as pop, b as get, d as derived, c as child, r as reset, s as sibling, f as first_child, g as getContext, n as next, a6 as state, u as user_effect, a7 as set } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text, s as setup_stores, b as store_get } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { p as prop, r as rest_props, i as if_block, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { a as set_attributes, br as sidebarbutton, b as set_class, bs as sidebarcta, s as set_attribute, bt as sitebarbrand, t as twMerge, ay as Sidebar, V as uiHelpers, N as CloseButton, aA as fade, aS as sineIn } from "../chunks/theme.BtjZjf2R.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import { S as SidebarGroup, b as SidebarItem, a as SidebarDropdownWrapper } from "../chunks/SidebarItem.D09pRQzo.js";
import { C as ChartOutline, M as MailBoxSolid, U as UserSolid, A as ArrowRightToBracketOutline, E as EditSolid } from "../chunks/UserSolid.DPSaDdmv.js";
import { G as GridSolid } from "../chunks/GridSolid.CtftrHjO.js";
import { p as page } from "../chunks/stores.CC5X2N5j.js";
import { S as ShoppingBagSolid } from "../chunks/ShoppingBagSolid.Dfyq49NL.js";
import { C as ChevronDoubleUpOutline, a as ChevronDoubleDownOutline } from "../chunks/ChevronDoubleUpOutline.7Acn7Sqj.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { C as CloseOutline } from "../chunks/CloseOutline.CJZwA6ye.js";
var root$m = template(`<button><span class="sr-only">Open sidebar</span> <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path></svg></button>`);
function SidebarButton($$anchor, $$props) {
  push($$props, true);
  let breakpoint = prop($$props, "breakpoint", 3, "md"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "breakpoint",
    "class"
  ]);
  const base = derived(() => sidebarbutton({
    breakpoint: breakpoint(),
    className: $$props.class
  }));
  var button = root$m();
  let attributes;
  template_effect(() => attributes = set_attributes(button, attributes, {
    ...restProps,
    type: "button",
    class: get(base)
  }));
  append($$anchor, button);
  pop();
}
var root$l = template(`<div><div><span> </span> <!></div> <!></div>`);
function SidebarCta($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "icon",
    "divClass",
    "spanClass",
    "label",
    "class"
  ]);
  const $$d = derived(sidebarcta), base = derived(() => get($$d).base), div = derived(() => get($$d).div), span = derived(() => get($$d).span);
  var div_1 = root$l();
  let attributes;
  var div_2 = child(div_1);
  const class_derived = derived(() => get(div)({ class: $$props.divClass }));
  var span_1 = child(div_2);
  const class_derived_1 = derived(() => get(span)({ class: $$props.spanClass }));
  var text2 = child(span_1, true);
  reset(span_1);
  var node = sibling(span_1, 2);
  if_block(node, () => $$props.icon, ($$anchor2) => {
    var fragment = comment();
    var node_1 = first_child(fragment);
    snippet(node_1, () => $$props.icon);
    append($$anchor2, fragment);
  });
  reset(div_2);
  var node_2 = sibling(div_2, 2);
  snippet(node_2, () => $$props.children);
  reset(div_1);
  template_effect(() => {
    attributes = set_attributes(div_1, attributes, {
      ...restProps,
      id: "dropdown-cta",
      class: get(base)({ className: $$props.class }),
      role: "alert"
    });
    set_class(div_2, get(class_derived));
    set_class(span_1, get(class_derived_1));
    set_text(text2, $$props.label);
  });
  append($$anchor, div_1);
  pop();
}
var root_1$a = template(`<img> <span> </span>`, 1);
var root$k = template(`<a><!></a>`);
function SidebarBrand($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "site",
    "imgClass",
    "spanClass",
    "class"
  ]);
  const $$d = derived(sitebarbrand), base = derived(() => get($$d).base), img = derived(() => get($$d).img), span = derived(() => get($$d).span);
  var a = root$k();
  let attributes;
  var node = child(a);
  if_block(
    node,
    () => $$props.site,
    ($$anchor2) => {
      var fragment = root_1$a();
      var img_1 = first_child(fragment);
      const class_derived = derived(() => get(img)({ class: $$props.imgClass }));
      var span_1 = sibling(img_1, 2);
      const class_derived_1 = derived(() => get(span)({ class: $$props.spanClass }));
      var text2 = child(span_1, true);
      reset(span_1);
      template_effect(() => {
        set_attribute(img_1, "src", $$props.site.img);
        set_class(img_1, get(class_derived));
        set_attribute(img_1, "alt", $$props.site.name);
        set_class(span_1, get(class_derived_1));
        set_text(text2, $$props.site.name);
      });
      append($$anchor2, fragment);
    },
    ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      if_block(
        node_1,
        () => $$props.children,
        ($$anchor3) => {
          var fragment_2 = comment();
          var node_2 = first_child(fragment_2);
          snippet(node_2, () => $$props.children);
          append($$anchor3, fragment_2);
        },
        null,
        true
      );
      append($$anchor2, fragment_1);
    }
  );
  reset(a);
  template_effect(() => {
    var _a;
    return attributes = set_attributes(a, attributes, {
      ...restProps,
      href: ((_a = $$props.site) == null ? void 0 : _a.href) ? $$props.site.href : "/",
      class: get(base)({ className: $$props.class })
    });
  });
  append($$anchor, a);
  pop();
}
var root_1$9 = ns_template(`<title> </title>`);
var root_2$g = ns_template(`<desc> </desc>`);
var root$j = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clip-rule="evenodd"></path></svg>`);
function BookSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "book solid"), restProps = rest_props($$props, [
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
    var desc_1 = root_2$g();
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
var root_1$8 = ns_template(`<title> </title>`);
var root_2$f = ns_template(`<desc> </desc>`);
var root$i = ns_template(`<svg><!><!><path d="M8.597 3.2A1 1 0 0 0 7.04 4.289a3.49 3.49 0 0 1 .057 1.795 3.448 3.448 0 0 1-.84 1.575.999.999 0 0 0-.077.094c-.596.817-3.96 5.6-.941 10.762l.03.049a7.73 7.73 0 0 0 2.917 2.602 7.617 7.617 0 0 0 3.772.829 8.06 8.06 0 0 0 3.986-.975 8.185 8.185 0 0 0 3.04-2.864c1.301-2.2 1.184-4.556.588-6.441-.583-1.848-1.68-3.414-2.607-4.102a1 1 0 0 0-1.594.757c-.067 1.431-.363 2.551-.794 3.431-.222-2.407-1.127-4.196-2.224-5.524-1.147-1.39-2.564-2.3-3.323-2.788a8.487 8.487 0 0 1-.432-.287Z"></path></svg>`);
function FireSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "fire solid"), restProps = rest_props($$props, [
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
    var title_1 = root_1$8();
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
    var desc_1 = root_2$f();
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
var root_1$7 = ns_template(`<title> </title>`);
var root_2$e = ns_template(`<desc> </desc>`);
var root$h = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 11.5h13m-13 0V18a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6.5m-13 0V9a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2.5M9 5h11a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-1"></path></svg>`);
function RestoreWindowOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "restore window outline"), restProps = rest_props($$props, [
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
  var svg = root$h();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$7();
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
    var desc_1 = root_2$e();
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
const __vite_glob_0_0 = '<script lang="ts">\n  import { Sidebar, SidebarGroup, SidebarItem, SidebarButton, uiHelpers } from "$lib";\n  import { ChartOutline, GridSolid, MailBoxSolid, UserSolid } from "flowbite-svelte-icons";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  import PlusPlaceholder from "../../../utils/PlusPlaceholder.svelte";\n  const demoSidebarUi = uiHelpers();\n  let isDemoOpen = $state(false);\n  const closeDemoSidebar = demoSidebarUi.close;\n  $effect(() => {\n    isDemoOpen = demoSidebarUi.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n  const spanClass = "flex-1 ms-3 whitespace-nowrap";\n  const activeClass = "flex items-center p-2 text-base font-normal text-white bg-primary-600 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-800 dark:hover:bg-primary-800";\n  const nonActiveClass = "flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700";\n<\/script>\n\n<SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />\n<div class="relative">\n  <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} {activeClass} {nonActiveClass} position="absolute" class="z-50 h-full">\n    <SidebarGroup>\n      <SidebarItem label="Dashboard" href="/">\n        {#snippet iconSlot()}\n          <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Kanban" {spanClass} href="/">\n        {#snippet iconSlot()}\n          <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Inbox" {spanClass} href="/">\n        {#snippet iconSlot()}\n          <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Sidebar" href="/components/sidebar">\n        {#snippet iconSlot()}\n          <UserSolid class="h-5 w-5 text-primary-500 transition duration-75 " />\n        {/snippet}\n      </SidebarItem>\n    </SidebarGroup>\n  </Sidebar>\n  <div class="h-96 overflow-auto px-4 md:ml-64">\n    <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">\n      <PlusPlaceholder colnum={3} rownum={1} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n    </div>\n  </div>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper, SidebarButton, uiHelpers } from "$lib";\n  import { ChartOutline, GridSolid, UserSolid, EditSolid, ShoppingBagSolid } from "flowbite-svelte-icons";\n  import PlusPlaceholder from "../../../utils/PlusPlaceholder.svelte";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  const spanClass = "flex-1 ms-3 whitespace-nowrap";\n  const demoSidebarUi = uiHelpers();\n  let isDemoOpen = $state(false);\n  const closeDemoSidebar = demoSidebarUi.close;\n  $effect(() => {\n    isDemoOpen = demoSidebarUi.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />\n<div class="relative">\n  <Sidebar {activeUrl} isSingle={false} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} position="absolute" activeClass="p-2" nonActiveClass="p-2" class="z-50 h-full">\n    <SidebarGroup>\n      <SidebarItem label="Dashboard">\n        {#snippet iconSlot()}\n          <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarDropdownWrapper label="Shop" btnClass="p-2">\n        {#snippet iconSlot()}\n          <ShoppingBagSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        <SidebarItem label="Products" href="" />\n      </SidebarDropdownWrapper>\n      <SidebarDropdownWrapper label="Profile" btnClass="p-2">\n        {#snippet iconSlot()}\n          <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        <SidebarItem label="Projects" href="/" />\n      </SidebarDropdownWrapper>\n      <SidebarItem label="Sidebar" {spanClass} href="/components/sidebar">\n        {#snippet iconSlot()}\n          <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n    </SidebarGroup>\n    <SidebarGroup border>\n      <SidebarDropdownWrapper label="Setting" btnClass="p-2">\n        {#snippet iconSlot()}\n          <EditSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        <SidebarItem label="Account" href="" />\n      </SidebarDropdownWrapper>\n    </SidebarGroup>\n  </Sidebar>\n\n  <div class="h-96 overflow-auto px-4 md:ml-64">\n    <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">\n      <PlusPlaceholder colnum={3} rownum={1} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n    </div>\n  </div>\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Sidebar, SidebarGroup, SidebarItem, SidebarButton, SidebarBrand, uiHelpers, CloseButton } from "$lib";\n  import { ChartOutline, GridSolid, MailBoxSolid, UserSolid } from "flowbite-svelte-icons";\n  import PlusPlaceholder from "../../../utils/PlusPlaceholder.svelte";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  const spanClass = "flex-1 ms-3 whitespace-nowrap";\n  const demoSidebarUi = uiHelpers();\n  let isDemoOpen = $state(false);\n  const closeDemoSidebar = demoSidebarUi.close;\n  $effect(() => {\n    isDemoOpen = demoSidebarUi.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />\n<div class="relative">\n  <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} class="z-50 h-full" position="absolute" activeClass="p-2" nonActiveClass="p-2">\n    <CloseButton onclick={closeDemoSidebar} color="gray" class="absolute right-1 top-3 p-2 md:hidden" />\n    <SidebarGroup>\n      <SidebarBrand>\n        <img src="/images/flowbite-svelte-icon-logo.svg" alt="Svelte 5 UI Lib" class="h-6 w-6" />\n        <span class="ml-2 self-center whitespace-nowrap text-xl font-semibold dark:text-white">Svelte 5 UI Lib</span>\n      </SidebarBrand>\n      <SidebarItem label="Dashboard" href="/">\n        {#snippet iconSlot()}\n          <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Kanban" {spanClass} href="/">\n        {#snippet iconSlot()}\n          <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Inbox" {spanClass} href="/">\n        {#snippet iconSlot()}\n          <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Sidebar" href="/components/sidebar">\n        {#snippet iconSlot()}\n          <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n    </SidebarGroup>\n  </Sidebar>\n  <div class="h-96 overflow-auto px-4 md:ml-64">\n    <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">\n      <PlusPlaceholder colnum={3} rownum={1} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n    </div>\n  </div>\n</div>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { CloseButton, Sidebar, SidebarGroup, SidebarItem, SidebarButton, uiHelpers } from "$lib";\n  import { ChartOutline, GridSolid, MailBoxSolid, UserSolid } from "flowbite-svelte-icons";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  import PlusPlaceholder from "../../../utils/PlusPlaceholder.svelte";\n  const spanClass = "flex-1 ms-3 whitespace-nowrap";\n  const demoSidebarUi = uiHelpers();\n  let isDemoOpen = $state(false);\n  const closeDemoSidebar = demoSidebarUi.close;\n  $effect(() => {\n    isDemoOpen = demoSidebarUi.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />\n<div class="relative">\n  <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} class="z-50 h-full pt-6" position="absolute" activeClass="p-2" nonActiveClass="p-2">\n    <CloseButton onclick={closeDemoSidebar} color="gray" class="absolute right-2 top-2 p-2 md:hidden" />\n    <SidebarGroup>\n      <SidebarItem label="Dashboard" href="/">\n        {#snippet iconSlot()}\n          <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Kanban" {spanClass} href="/">\n        {#snippet iconSlot()}\n          <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Inbox" {spanClass} href="/">\n        {#snippet iconSlot()}\n          <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Sidebar" href="/components/sidebar">\n        {#snippet iconSlot()}\n          <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n    </SidebarGroup>\n  </Sidebar>\n  <div class="h-96 overflow-auto px-4 md:ml-64">\n    <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">\n      <PlusPlaceholder colnum={3} rownum={1} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n    </div>\n  </div>\n</div>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Sidebar, SidebarGroup, SidebarItem, SidebarButton, uiHelpers } from "$lib";\n  import { ChartOutline, GridSolid, MailBoxSolid, UserSolid, BookSolid, RestoreWindowOutline, FireSolid } from "flowbite-svelte-icons";\n  import PlusPlaceholder from "../../../utils/PlusPlaceholder.svelte";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  const spanClass = "flex-1 ms-3 whitespace-nowrap";\n  const demoSidebarUi = uiHelpers();\n  let isDemoOpen = $state(false);\n  const closeDemoSidebar = demoSidebarUi.close;\n  $effect(() => {\n    isDemoOpen = demoSidebarUi.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />\n<div class="relative">\n  <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} class="z-50 h-full" position="absolute" activeClass="p-2" nonActiveClass="p-2">\n    <SidebarGroup>\n      <SidebarItem label="Dashboard" href="/">\n        {#snippet iconSlot()}\n          <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Kanban" {spanClass} href="/">\n        {#snippet iconSlot()}\n          <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Inbox" {spanClass} href="/">\n        {#snippet iconSlot()}\n          <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Sidebar" href="/components/sidebar">\n        {#snippet iconSlot()}\n          <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n    </SidebarGroup>\n    <SidebarGroup border>\n      <SidebarItem label="Upgrade to Pro" href="/">\n        {#snippet iconSlot()}\n          <FireSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Documentation" href="/">\n        {#snippet iconSlot()}\n          <BookSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Components" href="/">\n        {#snippet iconSlot()}\n          <RestoreWindowOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n    </SidebarGroup>\n  </Sidebar>\n  <div class="h-96 overflow-auto px-4 md:ml-64">\n    <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">\n      <PlusPlaceholder colnum={3} rownum={1} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n    </div>\n  </div>\n</div>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { Sidebar, SidebarGroup, SidebarItem, SidebarButton, SidebarCta, uiHelpers } from "$lib";\n  import { ChartOutline, GridSolid, MailBoxSolid, UserSolid, CloseOutline } from "flowbite-svelte-icons";\n  import PlusPlaceholder from "../../../utils/PlusPlaceholder.svelte";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  const spanClass = "flex-1 ms-3 whitespace-nowrap";\n  const demoSidebarUi = uiHelpers();\n  let isDemoOpen = $state(false);\n  const closeDemoSidebar = demoSidebarUi.close;\n  $effect(() => {\n    isDemoOpen = demoSidebarUi.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />\n<div class="relative">\n  <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} class="z-50 h-full" position="absolute" activeClass="p-2" nonActiveClass="p-2">\n    <SidebarGroup>\n      <SidebarItem label="Dashboard" href="/">\n        {#snippet iconSlot()}\n          <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Kanban" {spanClass} href="/">\n        {#snippet iconSlot()}\n          <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Inbox" {spanClass} href="/">\n        {#snippet iconSlot()}\n          <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Sidebar" href="/components/sidebar">\n        {#snippet iconSlot()}\n          <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarCta label="Beta">\n        {#snippet icon()}\n          <button type="button" class="-mx-1.5 -my-1.5 ms-auto inline-flex h-6 w-6 rounded-lg bg-primary-50 p-1 text-primary-900 hover:bg-primary-200 focus:ring-2 focus:ring-primary-400 dark:bg-primary-900 dark:text-primary-400 dark:hover:bg-primary-800" data-collapse-toggle="dropdown-cta" aria-label="Close">\n            <span class="sr-only">Close</span>\n            <CloseOutline class="h-4 w-4" />\n          </button>\n        {/snippet}\n        <p class="mb-3 text-sm text-primary-900 dark:text-primary-400">Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.</p>\n        <a class="text-sm text-primary-900 underline hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300" href="/">Turn new navigation off</a>\n      </SidebarCta>\n    </SidebarGroup>\n  </Sidebar>\n  <div class="h-96 overflow-auto px-4 md:ml-64">\n    <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">\n      <PlusPlaceholder colnum={3} rownum={1} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n    </div>\n  </div>\n</div>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { Sidebar, SidebarGroup, SidebarItem, SidebarButton, uiHelpers } from "$lib";\n  import { ChartOutline, GridSolid, MailBoxSolid, UserSolid } from "flowbite-svelte-icons";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  import PlusPlaceholder from "../../../utils/PlusPlaceholder.svelte";\n  const spanClass = "flex-1 ms-3 whitespace-nowrap";\n  const demoSidebarUi = uiHelpers();\n  let isDemoOpen = $state(false);\n  const closeDemoSidebar = demoSidebarUi.close;\n  $effect(() => {\n    isDemoOpen = demoSidebarUi.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />\n<div class="relative">\n  <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} class="z-50 h-full" position="absolute" activeClass="p-2" nonActiveClass="p-2">\n    <SidebarGroup>\n      <SidebarItem label="Dashboard" href="/">\n        {#snippet iconSlot()}\n          <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Kanban" {spanClass} href="/">\n        {#snippet iconSlot()}\n          <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Inbox" {spanClass} href="/">\n        {#snippet iconSlot()}\n          <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Sidebar" href="/components/sidebar">\n        {#snippet iconSlot()}\n          <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n    </SidebarGroup>\n  </Sidebar>\n  <div class="h-96 overflow-auto px-4 md:ml-64">\n    <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">\n      <PlusPlaceholder colnum={3} rownum={1} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n    </div>\n  </div>\n</div>\n';
const __vite_glob_0_7 = '<script lang="ts">\n  import { Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper, SidebarButton, uiHelpers } from "$lib";\n  import { ChartOutline, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditSolid, ShoppingBagSolid } from "flowbite-svelte-icons";\n  import PlusPlaceholder from "../../../utils/PlusPlaceholder.svelte";\n  import { fade } from "svelte/transition";\n  import { sineIn } from "svelte/easing";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  let params = {\n    duration: 700,\n    easing: sineIn\n  };\n  const spanClass = "flex-1 ms-3 whitespace-nowrap";\n  const demoSidebarUi = uiHelpers();\n  let isDemoOpen = $state(false);\n  const closeDemoSidebar = demoSidebarUi.close;\n  $effect(() => {\n    isDemoOpen = demoSidebarUi.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />\n<div class="relative">\n  <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} position="absolute" activeClass="p-2" nonActiveClass="p-2" class="z-50 h-full">\n    <SidebarGroup>\n      <SidebarItem label="Dashboard">\n        {#snippet iconSlot()}\n          <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarDropdownWrapper label="E-commerce" btnClass="p-2" transition={fade} {params}>\n        {#snippet iconSlot()}\n          <ShoppingBagSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        <SidebarItem label="Sidebar" href="/components/sidebar" />\n        <SidebarItem label="Billing" />\n        <SidebarItem label="Invoice" />\n      </SidebarDropdownWrapper>\n      <SidebarItem label="Kanban" {spanClass} href="/">\n        {#snippet iconSlot()}\n          <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Inbox" {spanClass} href="/">\n        {#snippet iconSlot()}\n          <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Users">\n        {#snippet iconSlot()}\n          <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Sign In">\n        {#snippet iconSlot()}\n          <ArrowRightToBracketOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Sign Up">\n        {#snippet iconSlot()}\n          <EditSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n    </SidebarGroup>\n  </Sidebar>\n\n  <div class="h-96 overflow-auto px-4 md:ml-64">\n    <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">\n      <PlusPlaceholder colnum={3} rownum={1} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n    </div>\n  </div>\n</div>\n';
const __vite_glob_0_8 = '<script lang="ts">\n  import { Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper, SidebarButton, uiHelpers } from "$lib";\n  import { ChartOutline, ChevronDoubleUpOutline, ChevronDoubleDownOutline, ShoppingBagSolid } from "flowbite-svelte-icons";\n  import PlusPlaceholder from "../../../utils/PlusPlaceholder.svelte";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  const demoSidebarUi = uiHelpers();\n  let isDemoOpen = $state(false);\n  const closeDemoSidebar = demoSidebarUi.close;\n  $effect(() => {\n    isDemoOpen = demoSidebarUi.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />\n<div class="relative">\n  <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} position="absolute" class="z-50 h-full" activeClass="p-2" nonActiveClass="p-2">\n    <SidebarGroup>\n      <SidebarItem label="Dashboard">\n        {#snippet iconSlot()}\n          <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarDropdownWrapper label="E-commerce" btnClass="p-2">\n        {#snippet iconSlot()}\n          <ShoppingBagSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet arrowup()}\n          <ChevronDoubleUpOutline class="h-6 w-6" />\n        {/snippet}\n        {#snippet arrowdown()}\n          <ChevronDoubleDownOutline class="h-6 w-6" />\n        {/snippet}\n        <SidebarItem label="Sidebar" href="/components/sidebar" />\n        <SidebarItem label="Billing" />\n        <SidebarItem label="Invoice" />\n      </SidebarDropdownWrapper>\n    </SidebarGroup>\n  </Sidebar>\n\n  <div class="h-96 overflow-auto px-4 md:ml-64">\n    <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">\n      <PlusPlaceholder colnum={3} rownum={1} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n    </div>\n  </div>\n</div>\n';
const __vite_glob_0_9 = '<script lang="ts">\n  import { Sidebar, SidebarGroup, SidebarItem, SidebarButton, SidebarBrand, uiHelpers, CloseButton } from "$lib";\n  import { ChartOutline, GridSolid, MailBoxSolid, UserSolid } from "flowbite-svelte-icons";\n  import PlusPlaceholder from "../../../utils/PlusPlaceholder.svelte";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  const spanClass = "flex-1 ms-3 whitespace-nowrap";\n  const demoSidebarUi = uiHelpers();\n  let isDemoOpen = $state(false);\n  const closeDemoSidebar = demoSidebarUi.close;\n  $effect(() => {\n    isDemoOpen = demoSidebarUi.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n  const site = {\n    name: "Flowbite-Svelte",\n    href: "/",\n    img: "/images/flowbite-svelte-icon-logo.svg",\n    imgClass: "h-6 w-6"\n  };\n<\/script>\n\n<SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />\n<div class="relative">\n  <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} class="z-50 h-full" position="absolute" activeClass="p-2" nonActiveClass="p-2">\n    <CloseButton onclick={closeDemoSidebar} color="gray" class="absolute right-1 top-3 p-2 md:hidden" />\n    <SidebarGroup>\n      <SidebarBrand {site} />\n      <SidebarItem label="Dashboard" href="/">\n        {#snippet iconSlot()}\n          <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Kanban" {spanClass} href="/">\n        {#snippet iconSlot()}\n          <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Inbox" {spanClass} href="/">\n        {#snippet iconSlot()}\n          <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Sidebar" href="/components/sidebar">\n        {#snippet iconSlot()}\n          <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n    </SidebarGroup>\n  </Sidebar>\n  <div class="h-96 overflow-auto px-4 md:ml-64">\n    <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">\n      <PlusPlaceholder colnum={3} rownum={1} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n    </div>\n  </div>\n</div>\n';
const __vite_glob_0_10 = '<script lang="ts">\n  import { Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper, SidebarButton, uiHelpers } from "$lib";\n  import { ChartOutline, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditSolid, ShoppingBagSolid } from "flowbite-svelte-icons";\n  import PlusPlaceholder from "../../../utils/PlusPlaceholder.svelte";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  const spanClass = "flex-1 ms-3 whitespace-nowrap";\n  const demoSidebarUi = uiHelpers();\n  let isDemoOpen = $state(false);\n  const closeDemoSidebar = demoSidebarUi.close;\n  $effect(() => {\n    isDemoOpen = demoSidebarUi.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />\n<div class="relative">\n  <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} position="absolute" activeClass="p-2" nonActiveClass="p-2" class="z-50 h-full">\n    <SidebarGroup>\n      <SidebarItem label="Dashboard">\n        {#snippet iconSlot()}\n          <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarDropdownWrapper label="E-commerce" btnClass="p-2">\n        {#snippet iconSlot()}\n          <ShoppingBagSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        <SidebarItem label="Sidebar" href="/components/sidebar" />\n        <SidebarItem label="Billing" />\n        <SidebarItem label="Invoice" />\n      </SidebarDropdownWrapper>\n      <SidebarItem label="Kanban" {spanClass} href="/">\n        {#snippet iconSlot()}\n          <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Inbox" {spanClass} href="/">\n        {#snippet iconSlot()}\n          <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Users">\n        {#snippet iconSlot()}\n          <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Sign In">\n        {#snippet iconSlot()}\n          <ArrowRightToBracketOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Sign Up">\n        {#snippet iconSlot()}\n          <EditSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n    </SidebarGroup>\n  </Sidebar>\n\n  <div class="h-96 overflow-auto px-4 md:ml-64">\n    <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">\n      <PlusPlaceholder colnum={3} rownum={1} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n    </div>\n  </div>\n</div>\n';
const __vite_glob_0_11 = '<script lang="ts">\n  import { Sidebar, SidebarGroup, SidebarItem, SidebarButton, uiHelpers } from "$lib";\n  import { ChartOutline, GridSolid, MailBoxSolid, UserSolid } from "flowbite-svelte-icons";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  import PlusPlaceholder from "../../../utils/PlusPlaceholder.svelte";\n  const spanClass = "flex-1 ms-3 whitespace-nowrap";\n  const activeClass = "flex items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700";\n  const nonActiveClass = "flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700";\n  const demoSidebarUi = uiHelpers();\n  let isDemoOpen = $state(false);\n  const closeDemoSidebar = demoSidebarUi.close;\n  $effect(() => {\n    isDemoOpen = demoSidebarUi.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />\n<div class="relative">\n  <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} position="absolute" {activeClass} {nonActiveClass} class="z-50 h-full">\n    <SidebarGroup>\n      <SidebarItem label="Dashboard" href="/" active>\n        {#snippet iconSlot()}\n          <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Kanban" {spanClass} active={false}>\n        {#snippet iconSlot()}\n          <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Inbox" {spanClass} active={false}>\n        {#snippet iconSlot()}\n          <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Sidebar" href="/components/sidebar" active={false}>\n        {#snippet iconSlot()}\n          <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n    </SidebarGroup>\n  </Sidebar>\n  <div class="h-96 overflow-auto px-4 md:ml-64">\n    <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">\n      <PlusPlaceholder colnum={3} rownum={1} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n    </div>\n  </div>\n</div>\n';
const __vite_glob_0_12 = '<script lang="ts">\n  import { Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper, SidebarButton, uiHelpers } from "$lib";\n  import { ChartOutline, GridSolid, UserSolid, EditSolid, ShoppingBagSolid } from "flowbite-svelte-icons";\n  import PlusPlaceholder from "../../../utils/PlusPlaceholder.svelte";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  const spanClass = "flex-1 ms-3 whitespace-nowrap";\n  const demoSidebarUi = uiHelpers();\n  let isDemoOpen = $state(false);\n  const closeDemoSidebar = demoSidebarUi.close;\n  $effect(() => {\n    isDemoOpen = demoSidebarUi.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />\n<div class="relative">\n  <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} position="absolute" activeClass="p-2" nonActiveClass="p-2" class="z-50 h-full">\n    <SidebarGroup>\n      <SidebarItem label="Dashboard">\n        {#snippet iconSlot()}\n          <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarDropdownWrapper label="Shop" btnClass="p-2">\n        {#snippet iconSlot()}\n          <ShoppingBagSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        <SidebarItem label="Products" href="" />\n      </SidebarDropdownWrapper>\n      <SidebarDropdownWrapper label="Profile" btnClass="p-2">\n        {#snippet iconSlot()}\n          <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        <SidebarItem label="Projects" href="/" />\n      </SidebarDropdownWrapper>\n      <SidebarItem label="Sidebar" {spanClass} href="/components/sidebar">\n        {#snippet iconSlot()}\n          <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n    </SidebarGroup>\n    <SidebarGroup border>\n      <SidebarDropdownWrapper label="Setting" btnClass="p-2">\n        {#snippet iconSlot()}\n          <EditSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        <SidebarItem label="Account" href="" />\n      </SidebarDropdownWrapper>\n    </SidebarGroup>\n  </Sidebar>\n\n  <div class="h-96 overflow-auto px-4 md:ml-64">\n    <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">\n      <PlusPlaceholder colnum={3} rownum={1} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n    </div>\n  </div>\n</div>\n';
const __vite_glob_0_13 = '<script lang="ts">\n  import { Sidebar, SidebarGroup, SidebarItem, SidebarButton, uiHelpers } from "$lib";\n  import { ChartOutline, GridSolid, MailBoxSolid, UserSolid } from "flowbite-svelte-icons";\n  import PlusPlaceholder from "../../../utils/PlusPlaceholder.svelte";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  const spanClass = "flex-1 ms-3 whitespace-nowrap";\n  const demoSidebarUi = uiHelpers();\n  let isDemoOpen = $state(true);\n  const closeDemoSidebar = demoSidebarUi.close;\n  $effect(() => {\n    isDemoOpen = demoSidebarUi.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<div class="h-96 overflow-auto px-4">\n  <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">\n    <div class="flex w-full flex-row pb-4">\n      <SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />\n      <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} class="z-50" position="static" activeClass="p-2" nonActiveClass="p-2">\n        <SidebarGroup>\n          <SidebarItem label="Dashboard" href="/">\n            {#snippet iconSlot()}\n              <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n            {/snippet}\n          </SidebarItem>\n          <SidebarItem label="Kanban" {spanClass} href="/">\n            {#snippet iconSlot()}\n              <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n            {/snippet}\n            {#snippet subtext()}\n              <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>\n            {/snippet}\n          </SidebarItem>\n          <SidebarItem label="Inbox" {spanClass} href="/">\n            {#snippet iconSlot()}\n              <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n            {/snippet}\n            {#snippet subtext()}\n              <span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>\n            {/snippet}\n          </SidebarItem>\n          <SidebarItem label="Sidebar" href="/components/sidebar">\n            {#snippet iconSlot()}\n              <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n            {/snippet}\n          </SidebarItem>\n        </SidebarGroup>\n      </Sidebar>\n      <div class="grow pl-4 pt-2">\n        <PlusPlaceholder colnum={2} rownum={2} />\n      </div>\n    </div>\n    <PlusPlaceholder />\n    <PlusPlaceholder colnum={3} rownum={1} />\n    <PlusPlaceholder />\n    <PlusPlaceholder colnum={2} rownum={2} />\n  </div>\n</div>\n';
const __vite_glob_0_14 = '<script lang="ts">\n  import { Sidebar, SidebarGroup, SidebarItem, SidebarButton, uiHelpers } from "$lib";\n  import { page } from "$app/stores";\n  let activeUrl = $state($page.url.pathname);\n  import { ChartOutline, GridSolid, MailBoxSolid, UserSolid } from "flowbite-svelte-icons";\n  import PlusPlaceholder from "../../../utils/PlusPlaceholder.svelte";\n  const spanClass = "flex-1 ms-3 whitespace-nowrap";\n  const sidebarEx1 = [\n    {\n      label: "Dashboard",\n      href: "/",\n      icon: ChartOutline\n    },\n    {\n      label: "Kanban",\n      href: "/",\n      icon: GridSolid,\n      subContent: "Pro"\n    },\n    {\n      label: "Inbox",\n      href: "/",\n      icon: MailBoxSolid,\n      subContent: "3"\n    },\n    {\n      label: "Sidebar",\n      href: "/components/sidebar",\n      icon: UserSolid\n    }\n  ];\n  const demoSidebarUi = uiHelpers();\n  let isDemoOpen = $state(false);\n  const closeDemoSidebar = demoSidebarUi.close;\n  $effect(() => {\n    isDemoOpen = demoSidebarUi.isOpen;\n    activeUrl = $page.url.pathname;\n  });\n<\/script>\n\n<SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />\n<div class="relative">\n  <Sidebar {activeUrl} backdrop={false} isOpen={isDemoOpen} closeSidebar={closeDemoSidebar} params={{ x: -50, duration: 50 }} class="z-50 h-full" position="absolute" activeClass="p-2" nonActiveClass="p-2">\n    <SidebarGroup>\n      {#each sidebarEx1 as { label, href, icon: Icon, subContent }}\n        <SidebarItem {label} {href} {spanClass}>\n          {#snippet iconSlot()}\n            <Icon class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"></Icon>\n          {/snippet}\n          {#snippet subtext()}\n            <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">\n              {subContent}\n            </span>\n          {/snippet}\n        </SidebarItem>\n      {/each}\n    </SidebarGroup>\n  </Sidebar>\n  <div class="h-96 overflow-auto px-4 md:ml-64">\n    <div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">\n      <PlusPlaceholder colnum={3} rownum={1} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n      <PlusPlaceholder />\n      <PlusPlaceholder colnum={2} rownum={2} />\n    </div>\n  </div>\n</div>\n';
var root_1$6 = template(`<div class="flex h-24 items-center justify-center rounded bg-gray-50 dark:bg-gray-800"><p class="text-2xl text-gray-400 dark:text-gray-500"><svg class="h-3.5 w-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"></path></svg></p></div>`);
var root$g = template(`<div></div>`);
function PlusPlaceholder($$anchor, $$props) {
  const figure = ($$anchor2) => {
    var div = root_1$6();
    append($$anchor2, div);
  };
  let colnum = prop($$props, "colnum", 3, 1), rownum = prop($$props, "rownum", 3, 1);
  function calculateGridItems() {
    return colnum() * rownum();
  }
  const colclass = `grid-cols-${colnum()}`;
  var div_1 = root$g();
  set_class(div_1, `mb-4 grid ${colclass ?? ""} gap-4`);
  each(div_1, 21, () => Array(calculateGridItems()), index, ($$anchor2, _) => {
    figure($$anchor2);
  });
  reset(div_1);
  append($$anchor, div_1);
}
var root_5$a = template(`<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`);
var root_7$a = template(`<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`);
var root_2$d = template(`<!> <!> <!> <!>`, 1);
var root$f = template(`<!> <div class="relative"><!> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700"><!> <!> <!> <!> <!></div></div></div>`, 1);
function Default($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = state(false);
  const closeDemoSidebar = demoSidebarUi.close;
  user_effect(() => {
    set(isDemoOpen, proxy(demoSidebarUi.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  var fragment = root$f();
  var node = first_child(fragment);
  SidebarButton(node, {
    get onclick() {
      return demoSidebarUi.toggle;
    },
    class: "mb-2"
  });
  var div = sibling(node, 2);
  var node_1 = child(div);
  Sidebar(node_1, {
    get activeUrl() {
      return get(activeUrl);
    },
    backdrop: false,
    get isOpen() {
      return get(isDemoOpen);
    },
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    class: "z-50 h-full",
    position: "absolute",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    children: ($$anchor2, $$slotProps) => {
      SidebarGroup($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2$d();
          var node_2 = first_child(fragment_2);
          {
            const iconSlot = ($$anchor4) => {
              ChartOutline($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_2, {
              label: "Dashboard",
              href: "/",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          var node_3 = sibling(node_2, 2);
          {
            const iconSlot = ($$anchor4) => {
              GridSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const subtext = ($$anchor4) => {
              var span = root_5$a();
              append($$anchor4, span);
            };
            SidebarItem(node_3, {
              label: "Kanban",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          var node_4 = sibling(node_3, 2);
          {
            const iconSlot = ($$anchor4) => {
              MailBoxSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const subtext = ($$anchor4) => {
              var span_1 = root_7$a();
              append($$anchor4, span_1);
            };
            SidebarItem(node_4, {
              label: "Inbox",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          var node_5 = sibling(node_4, 2);
          {
            const iconSlot = ($$anchor4) => {
              UserSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_5, {
              label: "Sidebar",
              href: "/components/sidebar",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node_1, 2);
  var div_2 = child(div_1);
  var node_6 = child(div_2);
  PlusPlaceholder(node_6, { colnum: 3, rownum: 1 });
  var node_7 = sibling(node_6, 2);
  PlusPlaceholder(node_7, {});
  var node_8 = sibling(node_7, 2);
  PlusPlaceholder(node_8, { colnum: 2, rownum: 2 });
  var node_9 = sibling(node_8, 2);
  PlusPlaceholder(node_9, {});
  var node_10 = sibling(node_9, 2);
  PlusPlaceholder(node_10, { colnum: 2, rownum: 2 });
  reset(div_2);
  reset(div_1);
  reset(div);
  append($$anchor, fragment);
  pop();
}
var root_5$9 = template(`<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300"> </span>`);
var root$e = template(`<!> <div class="relative"><!> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700"><!> <!> <!> <!> <!></div></div></div>`, 1);
function UsingObject($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const sidebarEx1 = [
    {
      label: "Dashboard",
      href: "/",
      icon: ChartOutline
    },
    {
      label: "Kanban",
      href: "/",
      icon: GridSolid,
      subContent: "Pro"
    },
    {
      label: "Inbox",
      href: "/",
      icon: MailBoxSolid,
      subContent: "3"
    },
    {
      label: "Sidebar",
      href: "/components/sidebar",
      icon: UserSolid
    }
  ];
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = state(false);
  const closeDemoSidebar = demoSidebarUi.close;
  user_effect(() => {
    set(isDemoOpen, proxy(demoSidebarUi.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  var fragment = root$e();
  var node = first_child(fragment);
  SidebarButton(node, {
    get onclick() {
      return demoSidebarUi.toggle;
    },
    class: "mb-2"
  });
  var div = sibling(node, 2);
  var node_1 = child(div);
  Sidebar(node_1, {
    get activeUrl() {
      return get(activeUrl);
    },
    backdrop: false,
    get isOpen() {
      return get(isDemoOpen);
    },
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    class: "z-50 h-full",
    position: "absolute",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    children: ($$anchor2, $$slotProps) => {
      SidebarGroup($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = comment();
          var node_2 = first_child(fragment_2);
          each(node_2, 17, () => sidebarEx1, index, ($$anchor4, $$item) => {
            let label = () => get($$item).label;
            let href = () => get($$item).href;
            let Icon2 = () => get($$item).icon;
            let subContent = () => get($$item).subContent;
            {
              const iconSlot = ($$anchor5) => {
                var fragment_4 = comment();
                var node_3 = first_child(fragment_4);
                component(node_3, Icon2, ($$anchor6, $$component) => {
                  $$component($$anchor6, {
                    class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  });
                });
                append($$anchor5, fragment_4);
              };
              const subtext = ($$anchor5) => {
                var span = root_5$9();
                var text2 = child(span, true);
                reset(span);
                template_effect(() => set_text(text2, subContent()));
                append($$anchor5, span);
              };
              SidebarItem($$anchor4, {
                get label() {
                  return label();
                },
                get href() {
                  return href();
                },
                spanClass,
                iconSlot,
                subtext,
                $$slots: { iconSlot: true, subtext: true }
              });
            }
          });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node_1, 2);
  var div_2 = child(div_1);
  var node_4 = child(div_2);
  PlusPlaceholder(node_4, { colnum: 3, rownum: 1 });
  var node_5 = sibling(node_4, 2);
  PlusPlaceholder(node_5, {});
  var node_6 = sibling(node_5, 2);
  PlusPlaceholder(node_6, { colnum: 2, rownum: 2 });
  var node_7 = sibling(node_6, 2);
  PlusPlaceholder(node_7, {});
  var node_8 = sibling(node_7, 2);
  PlusPlaceholder(node_8, { colnum: 2, rownum: 2 });
  reset(div_2);
  reset(div_1);
  reset(div);
  append($$anchor, fragment);
  pop();
}
var root_5$8 = template(`<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`);
var root_7$9 = template(`<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`);
var root_2$c = template(`<!> <!> <!> <!>`, 1);
var root$d = template(`<!> <div class="relative"><!> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700"><!> <!> <!> <!> <!></div></div></div>`, 1);
function ActiveClass($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = state(false);
  const closeDemoSidebar = demoSidebarUi.close;
  user_effect(() => {
    set(isDemoOpen, proxy(demoSidebarUi.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const activeClass = "flex items-center p-2 text-base font-normal text-white bg-primary-600 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-800 dark:hover:bg-primary-800";
  const nonActiveClass = "flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700";
  var fragment = root$d();
  var node = first_child(fragment);
  SidebarButton(node, {
    get onclick() {
      return demoSidebarUi.toggle;
    },
    class: "mb-2"
  });
  var div = sibling(node, 2);
  var node_1 = child(div);
  Sidebar(node_1, {
    get activeUrl() {
      return get(activeUrl);
    },
    backdrop: false,
    get isOpen() {
      return get(isDemoOpen);
    },
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    activeClass,
    nonActiveClass,
    position: "absolute",
    class: "z-50 h-full",
    children: ($$anchor2, $$slotProps) => {
      SidebarGroup($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2$c();
          var node_2 = first_child(fragment_2);
          {
            const iconSlot = ($$anchor4) => {
              ChartOutline($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_2, {
              label: "Dashboard",
              href: "/",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          var node_3 = sibling(node_2, 2);
          {
            const iconSlot = ($$anchor4) => {
              GridSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const subtext = ($$anchor4) => {
              var span = root_5$8();
              append($$anchor4, span);
            };
            SidebarItem(node_3, {
              label: "Kanban",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          var node_4 = sibling(node_3, 2);
          {
            const iconSlot = ($$anchor4) => {
              MailBoxSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const subtext = ($$anchor4) => {
              var span_1 = root_7$9();
              append($$anchor4, span_1);
            };
            SidebarItem(node_4, {
              label: "Inbox",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          var node_5 = sibling(node_4, 2);
          {
            const iconSlot = ($$anchor4) => {
              UserSolid($$anchor4, {
                class: "h-5 w-5 text-primary-500 transition duration-75 "
              });
            };
            SidebarItem(node_5, {
              label: "Sidebar",
              href: "/components/sidebar",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node_1, 2);
  var div_2 = child(div_1);
  var node_6 = child(div_2);
  PlusPlaceholder(node_6, { colnum: 3, rownum: 1 });
  var node_7 = sibling(node_6, 2);
  PlusPlaceholder(node_7, {});
  var node_8 = sibling(node_7, 2);
  PlusPlaceholder(node_8, { colnum: 2, rownum: 2 });
  var node_9 = sibling(node_8, 2);
  PlusPlaceholder(node_9, {});
  var node_10 = sibling(node_9, 2);
  PlusPlaceholder(node_10, { colnum: 2, rownum: 2 });
  reset(div_2);
  reset(div_1);
  reset(div);
  append($$anchor, fragment);
  pop();
}
var root_5$7 = template(`<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`);
var root_7$8 = template(`<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`);
var root_2$b = template(`<!> <!> <!> <!>`, 1);
var root$c = template(`<!> <div class="relative"><!> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700"><!> <!> <!> <!> <!></div></div></div>`, 1);
function OverridingActive($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const activeClass = "flex items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700";
  const nonActiveClass = "flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = state(false);
  const closeDemoSidebar = demoSidebarUi.close;
  user_effect(() => {
    set(isDemoOpen, proxy(demoSidebarUi.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  var fragment = root$c();
  var node = first_child(fragment);
  SidebarButton(node, {
    get onclick() {
      return demoSidebarUi.toggle;
    },
    class: "mb-2"
  });
  var div = sibling(node, 2);
  var node_1 = child(div);
  Sidebar(node_1, {
    get activeUrl() {
      return get(activeUrl);
    },
    backdrop: false,
    get isOpen() {
      return get(isDemoOpen);
    },
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    position: "absolute",
    activeClass,
    nonActiveClass,
    class: "z-50 h-full",
    children: ($$anchor2, $$slotProps) => {
      SidebarGroup($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2$b();
          var node_2 = first_child(fragment_2);
          {
            const iconSlot = ($$anchor4) => {
              ChartOutline($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_2, {
              label: "Dashboard",
              href: "/",
              active: true,
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          var node_3 = sibling(node_2, 2);
          {
            const iconSlot = ($$anchor4) => {
              GridSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const subtext = ($$anchor4) => {
              var span = root_5$7();
              append($$anchor4, span);
            };
            SidebarItem(node_3, {
              label: "Kanban",
              spanClass,
              active: false,
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          var node_4 = sibling(node_3, 2);
          {
            const iconSlot = ($$anchor4) => {
              MailBoxSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const subtext = ($$anchor4) => {
              var span_1 = root_7$8();
              append($$anchor4, span_1);
            };
            SidebarItem(node_4, {
              label: "Inbox",
              spanClass,
              active: false,
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          var node_5 = sibling(node_4, 2);
          {
            const iconSlot = ($$anchor4) => {
              UserSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_5, {
              label: "Sidebar",
              href: "/components/sidebar",
              active: false,
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node_1, 2);
  var div_2 = child(div_1);
  var node_6 = child(div_2);
  PlusPlaceholder(node_6, { colnum: 3, rownum: 1 });
  var node_7 = sibling(node_6, 2);
  PlusPlaceholder(node_7, {});
  var node_8 = sibling(node_7, 2);
  PlusPlaceholder(node_8, { colnum: 2, rownum: 2 });
  var node_9 = sibling(node_8, 2);
  PlusPlaceholder(node_9, {});
  var node_10 = sibling(node_9, 2);
  PlusPlaceholder(node_10, { colnum: 2, rownum: 2 });
  reset(div_2);
  reset(div_1);
  reset(div);
  append($$anchor, fragment);
  pop();
}
var root_5$6 = template(`<!> <!> <!>`, 1);
var root_7$7 = template(`<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`);
var root_9$3 = template(`<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`);
var root_2$a = template(`<!> <!> <!> <!> <!> <!> <!>`, 1);
var root$b = template(`<!> <div class="relative"><!> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700"><!> <!> <!> <!> <!></div></div></div>`, 1);
function Multilevel($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = state(false);
  const closeDemoSidebar = demoSidebarUi.close;
  user_effect(() => {
    set(isDemoOpen, proxy(demoSidebarUi.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  var fragment = root$b();
  var node = first_child(fragment);
  SidebarButton(node, {
    get onclick() {
      return demoSidebarUi.toggle;
    },
    class: "mb-2"
  });
  var div = sibling(node, 2);
  var node_1 = child(div);
  Sidebar(node_1, {
    get activeUrl() {
      return get(activeUrl);
    },
    backdrop: false,
    get isOpen() {
      return get(isDemoOpen);
    },
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    position: "absolute",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    class: "z-50 h-full",
    children: ($$anchor2, $$slotProps) => {
      SidebarGroup($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2$a();
          var node_2 = first_child(fragment_2);
          {
            const iconSlot = ($$anchor4) => {
              ChartOutline($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_2, {
              label: "Dashboard",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          var node_3 = sibling(node_2, 2);
          {
            const iconSlot = ($$anchor4) => {
              ShoppingBagSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarDropdownWrapper(node_3, {
              label: "E-commerce",
              btnClass: "p-2",
              iconSlot,
              children: ($$anchor4, $$slotProps3) => {
                var fragment_5 = root_5$6();
                var node_4 = first_child(fragment_5);
                SidebarItem(node_4, { label: "Sidebar", href: "/components/sidebar" });
                var node_5 = sibling(node_4, 2);
                SidebarItem(node_5, { label: "Billing" });
                var node_6 = sibling(node_5, 2);
                SidebarItem(node_6, { label: "Invoice" });
                append($$anchor4, fragment_5);
              },
              $$slots: { iconSlot: true, default: true }
            });
          }
          var node_7 = sibling(node_3, 2);
          {
            const iconSlot = ($$anchor4) => {
              GridSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const subtext = ($$anchor4) => {
              var span = root_7$7();
              append($$anchor4, span);
            };
            SidebarItem(node_7, {
              label: "Kanban",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          var node_8 = sibling(node_7, 2);
          {
            const iconSlot = ($$anchor4) => {
              MailBoxSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const subtext = ($$anchor4) => {
              var span_1 = root_9$3();
              append($$anchor4, span_1);
            };
            SidebarItem(node_8, {
              label: "Inbox",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          var node_9 = sibling(node_8, 2);
          {
            const iconSlot = ($$anchor4) => {
              UserSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_9, {
              label: "Users",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          var node_10 = sibling(node_9, 2);
          {
            const iconSlot = ($$anchor4) => {
              ArrowRightToBracketOutline($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_10, {
              label: "Sign In",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          var node_11 = sibling(node_10, 2);
          {
            const iconSlot = ($$anchor4) => {
              EditSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_11, {
              label: "Sign Up",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node_1, 2);
  var div_2 = child(div_1);
  var node_12 = child(div_2);
  PlusPlaceholder(node_12, { colnum: 3, rownum: 1 });
  var node_13 = sibling(node_12, 2);
  PlusPlaceholder(node_13, {});
  var node_14 = sibling(node_13, 2);
  PlusPlaceholder(node_14, { colnum: 2, rownum: 2 });
  var node_15 = sibling(node_14, 2);
  PlusPlaceholder(node_15, {});
  var node_16 = sibling(node_15, 2);
  PlusPlaceholder(node_16, { colnum: 2, rownum: 2 });
  reset(div_2);
  reset(div_1);
  reset(div);
  append($$anchor, fragment);
  pop();
}
var root_5$5 = template(`<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`);
var root_7$6 = template(`<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`);
var root_2$9 = template(`<!> <!> <!> <!>`, 1);
var root_9$2 = template(`<!> <!> <!>`, 1);
var root_1$5 = template(`<!> <!>`, 1);
var root$a = template(`<!> <div class="relative"><!> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700"><!> <!> <!> <!> <!></div></div></div>`, 1);
function ContentSeparator($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = state(false);
  const closeDemoSidebar = demoSidebarUi.close;
  user_effect(() => {
    set(isDemoOpen, proxy(demoSidebarUi.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  var fragment = root$a();
  var node = first_child(fragment);
  SidebarButton(node, {
    get onclick() {
      return demoSidebarUi.toggle;
    },
    class: "mb-2"
  });
  var div = sibling(node, 2);
  var node_1 = child(div);
  Sidebar(node_1, {
    get activeUrl() {
      return get(activeUrl);
    },
    backdrop: false,
    get isOpen() {
      return get(isDemoOpen);
    },
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    class: "z-50 h-full",
    position: "absolute",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$5();
      var node_2 = first_child(fragment_1);
      SidebarGroup(node_2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2$9();
          var node_3 = first_child(fragment_2);
          {
            const iconSlot = ($$anchor4) => {
              ChartOutline($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_3, {
              label: "Dashboard",
              href: "/",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          var node_4 = sibling(node_3, 2);
          {
            const iconSlot = ($$anchor4) => {
              GridSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const subtext = ($$anchor4) => {
              var span = root_5$5();
              append($$anchor4, span);
            };
            SidebarItem(node_4, {
              label: "Kanban",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          var node_5 = sibling(node_4, 2);
          {
            const iconSlot = ($$anchor4) => {
              MailBoxSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const subtext = ($$anchor4) => {
              var span_1 = root_7$6();
              append($$anchor4, span_1);
            };
            SidebarItem(node_5, {
              label: "Inbox",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          var node_6 = sibling(node_5, 2);
          {
            const iconSlot = ($$anchor4) => {
              UserSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_6, {
              label: "Sidebar",
              href: "/components/sidebar",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_7 = sibling(node_2, 2);
      SidebarGroup(node_7, {
        border: true,
        children: ($$anchor3, $$slotProps2) => {
          var fragment_7 = root_9$2();
          var node_8 = first_child(fragment_7);
          {
            const iconSlot = ($$anchor4) => {
              FireSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_8, {
              label: "Upgrade to Pro",
              href: "/",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          var node_9 = sibling(node_8, 2);
          {
            const iconSlot = ($$anchor4) => {
              BookSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_9, {
              label: "Documentation",
              href: "/",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          var node_10 = sibling(node_9, 2);
          {
            const iconSlot = ($$anchor4) => {
              RestoreWindowOutline($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_10, {
              label: "Components",
              href: "/",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          append($$anchor3, fragment_7);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node_1, 2);
  var div_2 = child(div_1);
  var node_11 = child(div_2);
  PlusPlaceholder(node_11, { colnum: 3, rownum: 1 });
  var node_12 = sibling(node_11, 2);
  PlusPlaceholder(node_12, {});
  var node_13 = sibling(node_12, 2);
  PlusPlaceholder(node_13, { colnum: 2, rownum: 2 });
  var node_14 = sibling(node_13, 2);
  PlusPlaceholder(node_14, {});
  var node_15 = sibling(node_14, 2);
  PlusPlaceholder(node_15, { colnum: 2, rownum: 2 });
  reset(div_2);
  reset(div_1);
  reset(div);
  append($$anchor, fragment);
  pop();
}
var root_7$5 = template(`<!> <!> <!>`, 1);
var root_2$8 = template(`<!> <!>`, 1);
var root$9 = template(`<!> <div class="relative"><!> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700"><!> <!> <!> <!> <!></div></div></div>`, 1);
function Icon($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = state(false);
  const closeDemoSidebar = demoSidebarUi.close;
  user_effect(() => {
    set(isDemoOpen, proxy(demoSidebarUi.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  var fragment = root$9();
  var node = first_child(fragment);
  SidebarButton(node, {
    get onclick() {
      return demoSidebarUi.toggle;
    },
    class: "mb-2"
  });
  var div = sibling(node, 2);
  var node_1 = child(div);
  Sidebar(node_1, {
    get activeUrl() {
      return get(activeUrl);
    },
    backdrop: false,
    get isOpen() {
      return get(isDemoOpen);
    },
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    position: "absolute",
    class: "z-50 h-full",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    children: ($$anchor2, $$slotProps) => {
      SidebarGroup($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2$8();
          var node_2 = first_child(fragment_2);
          {
            const iconSlot = ($$anchor4) => {
              ChartOutline($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_2, {
              label: "Dashboard",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          var node_3 = sibling(node_2, 2);
          {
            const iconSlot = ($$anchor4) => {
              ShoppingBagSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const arrowup = ($$anchor4) => {
              ChevronDoubleUpOutline($$anchor4, { class: "h-6 w-6" });
            };
            const arrowdown = ($$anchor4) => {
              ChevronDoubleDownOutline($$anchor4, { class: "h-6 w-6" });
            };
            SidebarDropdownWrapper(node_3, {
              label: "E-commerce",
              btnClass: "p-2",
              iconSlot,
              arrowup,
              arrowdown,
              children: ($$anchor4, $$slotProps3) => {
                var fragment_7 = root_7$5();
                var node_4 = first_child(fragment_7);
                SidebarItem(node_4, { label: "Sidebar", href: "/components/sidebar" });
                var node_5 = sibling(node_4, 2);
                SidebarItem(node_5, { label: "Billing" });
                var node_6 = sibling(node_5, 2);
                SidebarItem(node_6, { label: "Invoice" });
                append($$anchor4, fragment_7);
              },
              $$slots: {
                iconSlot: true,
                arrowup: true,
                arrowdown: true,
                default: true
              }
            });
          }
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node_1, 2);
  var div_2 = child(div_1);
  var node_7 = child(div_2);
  PlusPlaceholder(node_7, { colnum: 3, rownum: 1 });
  var node_8 = sibling(node_7, 2);
  PlusPlaceholder(node_8, {});
  var node_9 = sibling(node_8, 2);
  PlusPlaceholder(node_9, { colnum: 2, rownum: 2 });
  var node_10 = sibling(node_9, 2);
  PlusPlaceholder(node_10, {});
  var node_11 = sibling(node_10, 2);
  PlusPlaceholder(node_11, { colnum: 2, rownum: 2 });
  reset(div_2);
  reset(div_1);
  reset(div);
  append($$anchor, fragment);
  pop();
}
var root_5$4 = template(`<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`);
var root_7$4 = template(`<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`);
var root_9$1 = template(`<button type="button" class="-mx-1.5 -my-1.5 ms-auto inline-flex h-6 w-6 rounded-lg bg-primary-50 p-1 text-primary-900 hover:bg-primary-200 focus:ring-2 focus:ring-primary-400 dark:bg-primary-900 dark:text-primary-400 dark:hover:bg-primary-800" data-collapse-toggle="dropdown-cta" aria-label="Close"><span class="sr-only">Close</span> <!></button>`);
var root_10 = template(`<p class="mb-3 text-sm text-primary-900 dark:text-primary-400">Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.</p> <a class="text-sm text-primary-900 underline hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300" href="/">Turn new navigation off</a>`, 1);
var root_2$7 = template(`<!> <!> <!> <!> <!>`, 1);
var root$8 = template(`<!> <div class="relative"><!> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700"><!> <!> <!> <!> <!></div></div></div>`, 1);
function Cta($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = state(false);
  const closeDemoSidebar = demoSidebarUi.close;
  user_effect(() => {
    set(isDemoOpen, proxy(demoSidebarUi.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  var fragment = root$8();
  var node = first_child(fragment);
  SidebarButton(node, {
    get onclick() {
      return demoSidebarUi.toggle;
    },
    class: "mb-2"
  });
  var div = sibling(node, 2);
  var node_1 = child(div);
  Sidebar(node_1, {
    get activeUrl() {
      return get(activeUrl);
    },
    backdrop: false,
    get isOpen() {
      return get(isDemoOpen);
    },
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    class: "z-50 h-full",
    position: "absolute",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    children: ($$anchor2, $$slotProps) => {
      SidebarGroup($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2$7();
          var node_2 = first_child(fragment_2);
          {
            const iconSlot = ($$anchor4) => {
              ChartOutline($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_2, {
              label: "Dashboard",
              href: "/",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          var node_3 = sibling(node_2, 2);
          {
            const iconSlot = ($$anchor4) => {
              GridSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const subtext = ($$anchor4) => {
              var span = root_5$4();
              append($$anchor4, span);
            };
            SidebarItem(node_3, {
              label: "Kanban",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          var node_4 = sibling(node_3, 2);
          {
            const iconSlot = ($$anchor4) => {
              MailBoxSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const subtext = ($$anchor4) => {
              var span_1 = root_7$4();
              append($$anchor4, span_1);
            };
            SidebarItem(node_4, {
              label: "Inbox",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          var node_5 = sibling(node_4, 2);
          {
            const iconSlot = ($$anchor4) => {
              UserSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_5, {
              label: "Sidebar",
              href: "/components/sidebar",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          var node_6 = sibling(node_5, 2);
          {
            const icon = ($$anchor4) => {
              var button = root_9$1();
              var node_7 = sibling(child(button), 2);
              CloseOutline(node_7, { class: "h-4 w-4" });
              reset(button);
              append($$anchor4, button);
            };
            SidebarCta(node_6, {
              label: "Beta",
              icon,
              children: ($$anchor4, $$slotProps3) => {
                var fragment_7 = root_10();
                next(2);
                append($$anchor4, fragment_7);
              },
              $$slots: { icon: true, default: true }
            });
          }
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node_1, 2);
  var div_2 = child(div_1);
  var node_8 = child(div_2);
  PlusPlaceholder(node_8, { colnum: 3, rownum: 1 });
  var node_9 = sibling(node_8, 2);
  PlusPlaceholder(node_9, {});
  var node_10 = sibling(node_9, 2);
  PlusPlaceholder(node_10, { colnum: 2, rownum: 2 });
  var node_11 = sibling(node_10, 2);
  PlusPlaceholder(node_11, {});
  var node_12 = sibling(node_11, 2);
  PlusPlaceholder(node_12, { colnum: 2, rownum: 2 });
  reset(div_2);
  reset(div_1);
  reset(div);
  append($$anchor, fragment);
  pop();
}
var root_5$3 = template(`<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`);
var root_7$3 = template(`<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`);
var root_2$6 = template(`<!> <!> <!> <!> <!>`, 1);
var root_1$4 = template(`<!> <!>`, 1);
var root$7 = template(`<!> <div class="relative"><!> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700"><!> <!> <!> <!> <!></div></div></div>`, 1);
function LogoBranding($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = state(false);
  const closeDemoSidebar = demoSidebarUi.close;
  user_effect(() => {
    set(isDemoOpen, proxy(demoSidebarUi.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  const site = {
    name: "Flowbite-Svelte",
    href: "/",
    img: "/images/flowbite-svelte-icon-logo.svg",
    imgClass: "h-6 w-6"
  };
  var fragment = root$7();
  var node = first_child(fragment);
  SidebarButton(node, {
    get onclick() {
      return demoSidebarUi.toggle;
    },
    class: "mb-2"
  });
  var div = sibling(node, 2);
  var node_1 = child(div);
  Sidebar(node_1, {
    get activeUrl() {
      return get(activeUrl);
    },
    backdrop: false,
    get isOpen() {
      return get(isDemoOpen);
    },
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    class: "z-50 h-full",
    position: "absolute",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$4();
      var node_2 = first_child(fragment_1);
      CloseButton(node_2, {
        onclick: closeDemoSidebar,
        color: "gray",
        class: "absolute right-1 top-3 p-2 md:hidden"
      });
      var node_3 = sibling(node_2, 2);
      SidebarGroup(node_3, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2$6();
          var node_4 = first_child(fragment_2);
          SidebarBrand(node_4, { site });
          var node_5 = sibling(node_4, 2);
          {
            const iconSlot = ($$anchor4) => {
              ChartOutline($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_5, {
              label: "Dashboard",
              href: "/",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          var node_6 = sibling(node_5, 2);
          {
            const iconSlot = ($$anchor4) => {
              GridSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const subtext = ($$anchor4) => {
              var span = root_5$3();
              append($$anchor4, span);
            };
            SidebarItem(node_6, {
              label: "Kanban",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          var node_7 = sibling(node_6, 2);
          {
            const iconSlot = ($$anchor4) => {
              MailBoxSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const subtext = ($$anchor4) => {
              var span_1 = root_7$3();
              append($$anchor4, span_1);
            };
            SidebarItem(node_7, {
              label: "Inbox",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          var node_8 = sibling(node_7, 2);
          {
            const iconSlot = ($$anchor4) => {
              UserSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_8, {
              label: "Sidebar",
              href: "/components/sidebar",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node_1, 2);
  var div_2 = child(div_1);
  var node_9 = child(div_2);
  PlusPlaceholder(node_9, { colnum: 3, rownum: 1 });
  var node_10 = sibling(node_9, 2);
  PlusPlaceholder(node_10, {});
  var node_11 = sibling(node_10, 2);
  PlusPlaceholder(node_11, { colnum: 2, rownum: 2 });
  var node_12 = sibling(node_11, 2);
  PlusPlaceholder(node_12, {});
  var node_13 = sibling(node_12, 2);
  PlusPlaceholder(node_13, { colnum: 2, rownum: 2 });
  reset(div_2);
  reset(div_1);
  reset(div);
  append($$anchor, fragment);
  pop();
}
var root_3$1 = template(`<img src="/images/flowbite-svelte-icon-logo.svg" alt="Svelte 5 UI Lib" class="h-6 w-6"> <span class="ml-2 self-center whitespace-nowrap text-xl font-semibold dark:text-white">Svelte 5 UI Lib</span>`, 1);
var root_6 = template(`<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`);
var root_8 = template(`<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`);
var root_2$5 = template(`<!> <!> <!> <!> <!>`, 1);
var root_1$3 = template(`<!> <!>`, 1);
var root$6 = template(`<!> <div class="relative"><!> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700"><!> <!> <!> <!> <!></div></div></div>`, 1);
function BrandingWithChildren($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = state(false);
  const closeDemoSidebar = demoSidebarUi.close;
  user_effect(() => {
    set(isDemoOpen, proxy(demoSidebarUi.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  var fragment = root$6();
  var node = first_child(fragment);
  SidebarButton(node, {
    get onclick() {
      return demoSidebarUi.toggle;
    },
    class: "mb-2"
  });
  var div = sibling(node, 2);
  var node_1 = child(div);
  Sidebar(node_1, {
    get activeUrl() {
      return get(activeUrl);
    },
    backdrop: false,
    get isOpen() {
      return get(isDemoOpen);
    },
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    class: "z-50 h-full",
    position: "absolute",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$3();
      var node_2 = first_child(fragment_1);
      CloseButton(node_2, {
        onclick: closeDemoSidebar,
        color: "gray",
        class: "absolute right-1 top-3 p-2 md:hidden"
      });
      var node_3 = sibling(node_2, 2);
      SidebarGroup(node_3, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2$5();
          var node_4 = first_child(fragment_2);
          SidebarBrand(node_4, {
            children: ($$anchor4, $$slotProps3) => {
              var fragment_3 = root_3$1();
              next(2);
              append($$anchor4, fragment_3);
            },
            $$slots: { default: true }
          });
          var node_5 = sibling(node_4, 2);
          {
            const iconSlot = ($$anchor4) => {
              ChartOutline($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_5, {
              label: "Dashboard",
              href: "/",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          var node_6 = sibling(node_5, 2);
          {
            const iconSlot = ($$anchor4) => {
              GridSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const subtext = ($$anchor4) => {
              var span = root_6();
              append($$anchor4, span);
            };
            SidebarItem(node_6, {
              label: "Kanban",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          var node_7 = sibling(node_6, 2);
          {
            const iconSlot = ($$anchor4) => {
              MailBoxSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const subtext = ($$anchor4) => {
              var span_1 = root_8();
              append($$anchor4, span_1);
            };
            SidebarItem(node_7, {
              label: "Inbox",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          var node_8 = sibling(node_7, 2);
          {
            const iconSlot = ($$anchor4) => {
              UserSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_8, {
              label: "Sidebar",
              href: "/components/sidebar",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node_1, 2);
  var div_2 = child(div_1);
  var node_9 = child(div_2);
  PlusPlaceholder(node_9, { colnum: 3, rownum: 1 });
  var node_10 = sibling(node_9, 2);
  PlusPlaceholder(node_10, {});
  var node_11 = sibling(node_10, 2);
  PlusPlaceholder(node_11, { colnum: 2, rownum: 2 });
  var node_12 = sibling(node_11, 2);
  PlusPlaceholder(node_12, {});
  var node_13 = sibling(node_12, 2);
  PlusPlaceholder(node_13, { colnum: 2, rownum: 2 });
  reset(div_2);
  reset(div_1);
  reset(div);
  append($$anchor, fragment);
  pop();
}
var root_5$2 = template(`<!> <!> <!>`, 1);
var root_7$2 = template(`<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`);
var root_9 = template(`<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`);
var root_2$4 = template(`<!> <!> <!> <!> <!> <!> <!>`, 1);
var root$5 = template(`<!> <div class="relative"><!> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700"><!> <!> <!> <!> <!></div></div></div>`, 1);
function DropdownTransition($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  let params = { duration: 700, easing: sineIn };
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = state(false);
  const closeDemoSidebar = demoSidebarUi.close;
  user_effect(() => {
    set(isDemoOpen, proxy(demoSidebarUi.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  var fragment = root$5();
  var node = first_child(fragment);
  SidebarButton(node, {
    get onclick() {
      return demoSidebarUi.toggle;
    },
    class: "mb-2"
  });
  var div = sibling(node, 2);
  var node_1 = child(div);
  Sidebar(node_1, {
    get activeUrl() {
      return get(activeUrl);
    },
    backdrop: false,
    get isOpen() {
      return get(isDemoOpen);
    },
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    position: "absolute",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    class: "z-50 h-full",
    children: ($$anchor2, $$slotProps) => {
      SidebarGroup($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2$4();
          var node_2 = first_child(fragment_2);
          {
            const iconSlot = ($$anchor4) => {
              ChartOutline($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_2, {
              label: "Dashboard",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          var node_3 = sibling(node_2, 2);
          {
            const iconSlot = ($$anchor4) => {
              ShoppingBagSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarDropdownWrapper(node_3, {
              label: "E-commerce",
              btnClass: "p-2",
              transition: fade,
              params,
              iconSlot,
              children: ($$anchor4, $$slotProps3) => {
                var fragment_5 = root_5$2();
                var node_4 = first_child(fragment_5);
                SidebarItem(node_4, { label: "Sidebar", href: "/components/sidebar" });
                var node_5 = sibling(node_4, 2);
                SidebarItem(node_5, { label: "Billing" });
                var node_6 = sibling(node_5, 2);
                SidebarItem(node_6, { label: "Invoice" });
                append($$anchor4, fragment_5);
              },
              $$slots: { iconSlot: true, default: true }
            });
          }
          var node_7 = sibling(node_3, 2);
          {
            const iconSlot = ($$anchor4) => {
              GridSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const subtext = ($$anchor4) => {
              var span = root_7$2();
              append($$anchor4, span);
            };
            SidebarItem(node_7, {
              label: "Kanban",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          var node_8 = sibling(node_7, 2);
          {
            const iconSlot = ($$anchor4) => {
              MailBoxSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const subtext = ($$anchor4) => {
              var span_1 = root_9();
              append($$anchor4, span_1);
            };
            SidebarItem(node_8, {
              label: "Inbox",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          var node_9 = sibling(node_8, 2);
          {
            const iconSlot = ($$anchor4) => {
              UserSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_9, {
              label: "Users",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          var node_10 = sibling(node_9, 2);
          {
            const iconSlot = ($$anchor4) => {
              ArrowRightToBracketOutline($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_10, {
              label: "Sign In",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          var node_11 = sibling(node_10, 2);
          {
            const iconSlot = ($$anchor4) => {
              EditSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_11, {
              label: "Sign Up",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node_1, 2);
  var div_2 = child(div_1);
  var node_12 = child(div_2);
  PlusPlaceholder(node_12, { colnum: 3, rownum: 1 });
  var node_13 = sibling(node_12, 2);
  PlusPlaceholder(node_13, {});
  var node_14 = sibling(node_13, 2);
  PlusPlaceholder(node_14, { colnum: 2, rownum: 2 });
  var node_15 = sibling(node_14, 2);
  PlusPlaceholder(node_15, {});
  var node_16 = sibling(node_15, 2);
  PlusPlaceholder(node_16, { colnum: 2, rownum: 2 });
  reset(div_2);
  reset(div_1);
  reset(div);
  append($$anchor, fragment);
  pop();
}
var root_5$1 = template(`<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`);
var root_7$1 = template(`<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`);
var root_2$3 = template(`<!> <!> <!> <!>`, 1);
var root_1$2 = template(`<!> <!>`, 1);
var root$4 = template(`<!> <div class="relative"><!> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700"><!> <!> <!> <!> <!></div></div></div>`, 1);
function CloseButton_1($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = state(false);
  const closeDemoSidebar = demoSidebarUi.close;
  user_effect(() => {
    set(isDemoOpen, proxy(demoSidebarUi.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  var fragment = root$4();
  var node = first_child(fragment);
  SidebarButton(node, {
    get onclick() {
      return demoSidebarUi.toggle;
    },
    class: "mb-2"
  });
  var div = sibling(node, 2);
  var node_1 = child(div);
  Sidebar(node_1, {
    get activeUrl() {
      return get(activeUrl);
    },
    backdrop: false,
    get isOpen() {
      return get(isDemoOpen);
    },
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    class: "z-50 h-full pt-6",
    position: "absolute",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$2();
      var node_2 = first_child(fragment_1);
      CloseButton(node_2, {
        onclick: closeDemoSidebar,
        color: "gray",
        class: "absolute right-2 top-2 p-2 md:hidden"
      });
      var node_3 = sibling(node_2, 2);
      SidebarGroup(node_3, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2$3();
          var node_4 = first_child(fragment_2);
          {
            const iconSlot = ($$anchor4) => {
              ChartOutline($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_4, {
              label: "Dashboard",
              href: "/",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          var node_5 = sibling(node_4, 2);
          {
            const iconSlot = ($$anchor4) => {
              GridSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const subtext = ($$anchor4) => {
              var span = root_5$1();
              append($$anchor4, span);
            };
            SidebarItem(node_5, {
              label: "Kanban",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          var node_6 = sibling(node_5, 2);
          {
            const iconSlot = ($$anchor4) => {
              MailBoxSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const subtext = ($$anchor4) => {
              var span_1 = root_7$1();
              append($$anchor4, span_1);
            };
            SidebarItem(node_6, {
              label: "Inbox",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          var node_7 = sibling(node_6, 2);
          {
            const iconSlot = ($$anchor4) => {
              UserSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_7, {
              label: "Sidebar",
              href: "/components/sidebar",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node_1, 2);
  var div_2 = child(div_1);
  var node_8 = child(div_2);
  PlusPlaceholder(node_8, { colnum: 3, rownum: 1 });
  var node_9 = sibling(node_8, 2);
  PlusPlaceholder(node_9, {});
  var node_10 = sibling(node_9, 2);
  PlusPlaceholder(node_10, { colnum: 2, rownum: 2 });
  var node_11 = sibling(node_10, 2);
  PlusPlaceholder(node_11, {});
  var node_12 = sibling(node_11, 2);
  PlusPlaceholder(node_12, { colnum: 2, rownum: 2 });
  reset(div_2);
  reset(div_1);
  reset(div);
  append($$anchor, fragment);
  pop();
}
var root_5 = template(`<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`);
var root_7 = template(`<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`);
var root_2$2 = template(`<!> <!> <!> <!>`, 1);
var root$3 = template(`<div class="h-96 overflow-auto px-4"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700"><div class="flex w-full flex-row pb-4"><!> <!> <div class="grow pl-4 pt-2"><!></div></div> <!> <!> <!> <!></div></div>`);
function StaticPositioning($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = state(true);
  const closeDemoSidebar = demoSidebarUi.close;
  user_effect(() => {
    set(isDemoOpen, proxy(demoSidebarUi.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  var div = root$3();
  var div_1 = child(div);
  var div_2 = child(div_1);
  var node = child(div_2);
  SidebarButton(node, {
    get onclick() {
      return demoSidebarUi.toggle;
    },
    class: "mb-2"
  });
  var node_1 = sibling(node, 2);
  Sidebar(node_1, {
    get activeUrl() {
      return get(activeUrl);
    },
    backdrop: false,
    get isOpen() {
      return get(isDemoOpen);
    },
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    class: "z-50",
    position: "static",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    children: ($$anchor2, $$slotProps) => {
      SidebarGroup($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_1 = root_2$2();
          var node_2 = first_child(fragment_1);
          {
            const iconSlot = ($$anchor4) => {
              ChartOutline($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_2, {
              label: "Dashboard",
              href: "/",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          var node_3 = sibling(node_2, 2);
          {
            const iconSlot = ($$anchor4) => {
              GridSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const subtext = ($$anchor4) => {
              var span = root_5();
              append($$anchor4, span);
            };
            SidebarItem(node_3, {
              label: "Kanban",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          var node_4 = sibling(node_3, 2);
          {
            const iconSlot = ($$anchor4) => {
              MailBoxSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            const subtext = ($$anchor4) => {
              var span_1 = root_7();
              append($$anchor4, span_1);
            };
            SidebarItem(node_4, {
              label: "Inbox",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          var node_5 = sibling(node_4, 2);
          {
            const iconSlot = ($$anchor4) => {
              UserSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_5, {
              label: "Sidebar",
              href: "/components/sidebar",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  var div_3 = sibling(node_1, 2);
  var node_6 = child(div_3);
  PlusPlaceholder(node_6, { colnum: 2, rownum: 2 });
  reset(div_3);
  reset(div_2);
  var node_7 = sibling(div_2, 2);
  PlusPlaceholder(node_7, {});
  var node_8 = sibling(node_7, 2);
  PlusPlaceholder(node_8, { colnum: 3, rownum: 1 });
  var node_9 = sibling(node_8, 2);
  PlusPlaceholder(node_9, {});
  var node_10 = sibling(node_9, 2);
  PlusPlaceholder(node_10, { colnum: 2, rownum: 2 });
  reset(div_1);
  reset(div);
  append($$anchor, div);
  pop();
}
var root_2$1 = template(`<!> <!> <!> <!>`, 1);
var root_1$1 = template(`<!> <!>`, 1);
var root$2 = template(`<!> <div class="relative"><!> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700"><!> <!> <!> <!> <!></div></div></div>`, 1);
function SingleSelection($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = state(false);
  const closeDemoSidebar = demoSidebarUi.close;
  user_effect(() => {
    set(isDemoOpen, proxy(demoSidebarUi.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  var fragment = root$2();
  var node = first_child(fragment);
  SidebarButton(node, {
    get onclick() {
      return demoSidebarUi.toggle;
    },
    class: "mb-2"
  });
  var div = sibling(node, 2);
  var node_1 = child(div);
  Sidebar(node_1, {
    get activeUrl() {
      return get(activeUrl);
    },
    backdrop: false,
    get isOpen() {
      return get(isDemoOpen);
    },
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    position: "absolute",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    class: "z-50 h-full",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$1();
      var node_2 = first_child(fragment_1);
      SidebarGroup(node_2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2$1();
          var node_3 = first_child(fragment_2);
          {
            const iconSlot = ($$anchor4) => {
              ChartOutline($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_3, {
              label: "Dashboard",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          var node_4 = sibling(node_3, 2);
          {
            const iconSlot = ($$anchor4) => {
              ShoppingBagSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarDropdownWrapper(node_4, {
              label: "Shop",
              btnClass: "p-2",
              iconSlot,
              children: ($$anchor4, $$slotProps3) => {
                SidebarItem($$anchor4, { label: "Products", href: "" });
              },
              $$slots: { iconSlot: true, default: true }
            });
          }
          var node_5 = sibling(node_4, 2);
          {
            const iconSlot = ($$anchor4) => {
              UserSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarDropdownWrapper(node_5, {
              label: "Profile",
              btnClass: "p-2",
              iconSlot,
              children: ($$anchor4, $$slotProps3) => {
                SidebarItem($$anchor4, { label: "Projects", href: "/" });
              },
              $$slots: { iconSlot: true, default: true }
            });
          }
          var node_6 = sibling(node_5, 2);
          {
            const iconSlot = ($$anchor4) => {
              GridSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_6, {
              label: "Sidebar",
              spanClass,
              href: "/components/sidebar",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_7 = sibling(node_2, 2);
      SidebarGroup(node_7, {
        border: true,
        children: ($$anchor3, $$slotProps2) => {
          {
            const iconSlot = ($$anchor4) => {
              EditSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarDropdownWrapper($$anchor3, {
              label: "Setting",
              btnClass: "p-2",
              iconSlot,
              children: ($$anchor4, $$slotProps3) => {
                SidebarItem($$anchor4, { label: "Account", href: "" });
              },
              $$slots: { iconSlot: true, default: true }
            });
          }
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node_1, 2);
  var div_2 = child(div_1);
  var node_8 = child(div_2);
  PlusPlaceholder(node_8, { colnum: 3, rownum: 1 });
  var node_9 = sibling(node_8, 2);
  PlusPlaceholder(node_9, {});
  var node_10 = sibling(node_9, 2);
  PlusPlaceholder(node_10, { colnum: 2, rownum: 2 });
  var node_11 = sibling(node_10, 2);
  PlusPlaceholder(node_11, {});
  var node_12 = sibling(node_11, 2);
  PlusPlaceholder(node_12, { colnum: 2, rownum: 2 });
  reset(div_2);
  reset(div_1);
  reset(div);
  append($$anchor, fragment);
  pop();
}
var root_2 = template(`<!> <!> <!> <!>`, 1);
var root_1 = template(`<!> <!>`, 1);
var root$1 = template(`<!> <div class="relative"><!> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700"><!> <!> <!> <!> <!></div></div></div>`, 1);
function AllOpen($$anchor, $$props) {
  push($$props, true);
  const $$stores = setup_stores();
  const $page = () => store_get(page, "$page", $$stores);
  let activeUrl = state(proxy($page().url.pathname));
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = state(false);
  const closeDemoSidebar = demoSidebarUi.close;
  user_effect(() => {
    set(isDemoOpen, proxy(demoSidebarUi.isOpen));
    set(activeUrl, proxy($page().url.pathname));
  });
  var fragment = root$1();
  var node = first_child(fragment);
  SidebarButton(node, {
    get onclick() {
      return demoSidebarUi.toggle;
    },
    class: "mb-2"
  });
  var div = sibling(node, 2);
  var node_1 = child(div);
  Sidebar(node_1, {
    get activeUrl() {
      return get(activeUrl);
    },
    isSingle: false,
    backdrop: false,
    get isOpen() {
      return get(isDemoOpen);
    },
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    position: "absolute",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    class: "z-50 h-full",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1();
      var node_2 = first_child(fragment_1);
      SidebarGroup(node_2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_2();
          var node_3 = first_child(fragment_2);
          {
            const iconSlot = ($$anchor4) => {
              ChartOutline($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_3, {
              label: "Dashboard",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          var node_4 = sibling(node_3, 2);
          {
            const iconSlot = ($$anchor4) => {
              ShoppingBagSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarDropdownWrapper(node_4, {
              label: "Shop",
              btnClass: "p-2",
              iconSlot,
              children: ($$anchor4, $$slotProps3) => {
                SidebarItem($$anchor4, { label: "Products", href: "" });
              },
              $$slots: { iconSlot: true, default: true }
            });
          }
          var node_5 = sibling(node_4, 2);
          {
            const iconSlot = ($$anchor4) => {
              UserSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarDropdownWrapper(node_5, {
              label: "Profile",
              btnClass: "p-2",
              iconSlot,
              children: ($$anchor4, $$slotProps3) => {
                SidebarItem($$anchor4, { label: "Projects", href: "/" });
              },
              $$slots: { iconSlot: true, default: true }
            });
          }
          var node_6 = sibling(node_5, 2);
          {
            const iconSlot = ($$anchor4) => {
              GridSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem(node_6, {
              label: "Sidebar",
              spanClass,
              href: "/components/sidebar",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_7 = sibling(node_2, 2);
      SidebarGroup(node_7, {
        border: true,
        children: ($$anchor3, $$slotProps2) => {
          {
            const iconSlot = ($$anchor4) => {
              EditSolid($$anchor4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarDropdownWrapper($$anchor3, {
              label: "Setting",
              btnClass: "p-2",
              iconSlot,
              children: ($$anchor4, $$slotProps3) => {
                SidebarItem($$anchor4, { label: "Account", href: "" });
              },
              $$slots: { iconSlot: true, default: true }
            });
          }
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node_1, 2);
  var div_2 = child(div_1);
  var node_8 = child(div_2);
  PlusPlaceholder(node_8, { colnum: 3, rownum: 1 });
  var node_9 = sibling(node_8, 2);
  PlusPlaceholder(node_9, {});
  var node_10 = sibling(node_9, 2);
  PlusPlaceholder(node_10, { colnum: 2, rownum: 2 });
  var node_11 = sibling(node_10, 2);
  PlusPlaceholder(node_11, {});
  var node_12 = sibling(node_11, 2);
  PlusPlaceholder(node_12, { colnum: 2, rownum: 2 });
  reset(div_2);
  reset(div_1);
  reset(div);
  append($$anchor, fragment);
  pop();
}
var root_3 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "sidebar";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/ActiveClass.svelte": __vite_glob_0_0,
    "./examples/AllOpen.svelte": __vite_glob_0_1,
    "./examples/BrandingWithChildren.svelte": __vite_glob_0_2,
    "./examples/CloseButton.svelte": __vite_glob_0_3,
    "./examples/ContentSeparator.svelte": __vite_glob_0_4,
    "./examples/Cta.svelte": __vite_glob_0_5,
    "./examples/Default.svelte": __vite_glob_0_6,
    "./examples/DropdownTransition.svelte": __vite_glob_0_7,
    "./examples/Icon.svelte": __vite_glob_0_8,
    "./examples/LogoBranding.svelte": __vite_glob_0_9,
    "./examples/Multilevel.svelte": __vite_glob_0_10,
    "./examples/OverridingActive.svelte": __vite_glob_0_11,
    "./examples/SingleSelection.svelte": __vite_glob_0_12,
    "./examples/StaticPositioning.svelte": __vite_glob_0_13,
    "./examples/UsingObject.svelte": __vite_glob_0_14
  });
  const exampleArr = [
    {
      name: "Default",
      component: Default
    },
    {
      name: "Close button",
      component: CloseButton_1
    },
    {
      name: "Active class",
      component: ActiveClass
    },
    {
      name: "Overriding active",
      component: OverridingActive
    },
    {
      name: "Using object",
      component: UsingObject
    },
    {
      name: "Multilevel",
      component: Multilevel
    },
    {
      name: "Single selection",
      component: SingleSelection
    },
    {
      name: "All open",
      component: AllOpen
    },
    {
      name: "Content separator",
      component: ContentSeparator
    },
    {
      name: "Icon",
      component: Icon
    },
    { name: "Cta", component: Cta },
    {
      name: "Logo branding",
      component: LogoBranding
    },
    {
      name: "Branding with children",
      component: BrandingWithChildren
    },
    {
      name: "Dropdown transition",
      component: DropdownTransition
    },
    {
      name: "Static positioning",
      component: StaticPositioning
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
      var text$1 = text("Sidebar");
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
            labelClass: "w-48 my-1",
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
