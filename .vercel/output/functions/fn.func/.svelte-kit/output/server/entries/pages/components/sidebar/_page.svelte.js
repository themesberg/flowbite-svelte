import { Q as push, a0 as spread_attributes, S as pop, W as attr, V as escape_html, a1 as getContext, Y as ensure_array_like, X as stringify, Z as store_get, $ as unsubscribe_stores, a3 as copy_payload, a4 as assign_payload } from "../../../../chunks/index.js";
import { at as sidebarbutton, au as sidebarcta, av as sitebarbrand } from "../../../../chunks/theme.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { u as uiHelpers } from "../../../../chunks/uiHelpers.svelte.js";
import { S as Sidebar, a as SidebarGroup, c as SidebarItem, b as SidebarDropdownWrapper } from "../../../../chunks/SidebarItem.js";
import { C as ChartOutline, M as MailBoxSolid, U as UserSolid, A as ArrowRightToBracketOutline, E as EditSolid } from "../../../../chunks/UserSolid.js";
import { G as GridSolid } from "../../../../chunks/GridSolid.js";
import { p as page } from "../../../../chunks/stores.js";
import { S as ShoppingBagSolid } from "../../../../chunks/ShoppingBagSolid.js";
import { twMerge } from "tailwind-merge";
import { C as ChevronDoubleUpOutline, a as ChevronDoubleDownOutline } from "../../../../chunks/ChevronDoubleUpOutline.js";
import { C as CloseOutline } from "../../../../chunks/CloseOutline.js";
import { C as CloseButton } from "../../../../chunks/CloseButton.js";
import { a as fade } from "../../../../chunks/index3.js";
import { s as sineIn } from "../../../../chunks/index4.js";
function SidebarButton($$payload, $$props) {
  push();
  let {
    breakpoint = "md",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const base = sidebarbutton({ breakpoint, className });
  $$payload.out += `<button${spread_attributes({ ...restProps, type: "button", class: base })}><span class="sr-only">Open sidebar</span> <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path></svg></button>`;
  pop();
}
function SidebarCta($$payload, $$props) {
  push();
  let {
    children,
    icon,
    divClass,
    spanClass,
    label,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, div, span } = sidebarcta();
  $$payload.out += `<div${spread_attributes({
    ...restProps,
    id: "dropdown-cta",
    class: base({ className }),
    role: "alert"
  })}><div${attr("class", div({ class: divClass }))}><span${attr("class", span({ class: spanClass }))}>${escape_html(label)}</span> `;
  if (icon) {
    $$payload.out += "<!--[-->";
    icon($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> `;
  children($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
function SidebarBrand($$payload, $$props) {
  push();
  let {
    children,
    site,
    imgClass,
    spanClass,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, img, span } = sitebarbrand();
  $$payload.out += `<a${spread_attributes({
    ...restProps,
    href: site?.href ? site.href : "/",
    class: base({ className })
  })}>`;
  if (site) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<img${attr("src", site.img)}${attr("class", img({ class: imgClass }))}${attr("alt", site.name)}> <span${attr("class", span({ class: spanClass }))}>${escape_html(site.name)}</span>`;
  } else {
    $$payload.out += "<!--[!-->";
    if (children) {
      $$payload.out += "<!--[-->";
      children($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></a>`;
  pop();
}
function BookSolid($$payload, $$props) {
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
    ariaLabel = "book solid",
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
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function FireSolid($$payload, $$props) {
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
    ariaLabel = "fire solid",
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
  $$payload.out += `<!--]--><path d="M8.597 3.2A1 1 0 0 0 7.04 4.289a3.49 3.49 0 0 1 .057 1.795 3.448 3.448 0 0 1-.84 1.575.999.999 0 0 0-.077.094c-.596.817-3.96 5.6-.941 10.762l.03.049a7.73 7.73 0 0 0 2.917 2.602 7.617 7.617 0 0 0 3.772.829 8.06 8.06 0 0 0 3.986-.975 8.185 8.185 0 0 0 3.04-2.864c1.301-2.2 1.184-4.556.588-6.441-.583-1.848-1.68-3.414-2.607-4.102a1 1 0 0 0-1.594.757c-.067 1.431-.363 2.551-.794 3.431-.222-2.407-1.127-4.196-2.224-5.524-1.147-1.39-2.564-2.3-3.323-2.788a8.487 8.487 0 0 1-.432-.287Z"></path></svg>`;
  pop();
}
function RestoreWindowOutline($$payload, $$props) {
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
    ariaLabel = "restore window outline",
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="M3 11.5h13m-13 0V18a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-6.5m-13 0V9a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v2.5M9 5h11a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-1"></path></svg>`;
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
function PlusPlaceholder($$payload, $$props) {
  let { colnum = 1, rownum = 1 } = $$props;
  function calculateGridItems() {
    return colnum * rownum;
  }
  const colclass = `grid-cols-${colnum}`;
  function figure($$payload2) {
    $$payload2.out += `<div class="flex h-24 items-center justify-center rounded bg-gray-50 dark:bg-gray-800"><p class="text-2xl text-gray-400 dark:text-gray-500"><svg class="h-3.5 w-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"></path></svg></p></div>`;
  }
  const each_array = ensure_array_like(Array(calculateGridItems()));
  $$payload.out += `<div${attr("class", `mb-4 grid ${stringify(colclass)} gap-4`)}><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    each_array[$$index];
    figure($$payload);
  }
  $$payload.out += `<!--]--></div>`;
}
function Default($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = false;
  const closeDemoSidebar = demoSidebarUi.close;
  SidebarButton($$payload, { onclick: demoSidebarUi.toggle, class: "mb-2" });
  $$payload.out += `<!----> <div class="relative">`;
  Sidebar($$payload, {
    activeUrl,
    backdrop: false,
    isOpen: isDemoOpen,
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    class: "z-50 h-full",
    position: "absolute",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    children: ($$payload2) => {
      SidebarGroup($$payload2, {
        children: ($$payload3) => {
          {
            let iconSlot = function($$payload4) {
              ChartOutline($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Dashboard",
              href: "/",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              GridSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, subtext = function($$payload4) {
              $$payload4.out += `<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`;
            };
            SidebarItem($$payload3, {
              label: "Kanban",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              MailBoxSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, subtext = function($$payload4) {
              $$payload4.out += `<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`;
            };
            SidebarItem($$payload3, {
              label: "Inbox",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              UserSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Sidebar",
              href: "/components/sidebar",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">`;
  PlusPlaceholder($$payload, { colnum: 3, rownum: 1 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function UsingObject($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
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
  let isDemoOpen = false;
  const closeDemoSidebar = demoSidebarUi.close;
  SidebarButton($$payload, { onclick: demoSidebarUi.toggle, class: "mb-2" });
  $$payload.out += `<!----> <div class="relative">`;
  Sidebar($$payload, {
    activeUrl,
    backdrop: false,
    isOpen: isDemoOpen,
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    class: "z-50 h-full",
    position: "absolute",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    children: ($$payload2) => {
      SidebarGroup($$payload2, {
        children: ($$payload3) => {
          const each_array = ensure_array_like(sidebarEx1);
          $$payload3.out += `<!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let { label, href, icon: Icon2, subContent } = each_array[$$index];
            {
              let iconSlot = function($$payload4) {
                $$payload4.out += `<!---->`;
                Icon2($$payload4, {
                  class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                });
                $$payload4.out += `<!---->`;
              }, subtext = function($$payload4) {
                $$payload4.out += `<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">${escape_html(subContent)}</span>`;
              };
              SidebarItem($$payload3, {
                label,
                href,
                spanClass,
                iconSlot,
                subtext,
                $$slots: { iconSlot: true, subtext: true }
              });
            }
          }
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">`;
  PlusPlaceholder($$payload, { colnum: 3, rownum: 1 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function ActiveClass($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = false;
  const closeDemoSidebar = demoSidebarUi.close;
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const activeClass = "flex items-center p-2 text-base font-normal text-white bg-primary-600 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-800 dark:hover:bg-primary-800";
  const nonActiveClass = "flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700";
  SidebarButton($$payload, { onclick: demoSidebarUi.toggle, class: "mb-2" });
  $$payload.out += `<!----> <div class="relative">`;
  Sidebar($$payload, {
    activeUrl,
    backdrop: false,
    isOpen: isDemoOpen,
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    activeClass,
    nonActiveClass,
    position: "absolute",
    class: "z-50 h-full",
    children: ($$payload2) => {
      SidebarGroup($$payload2, {
        children: ($$payload3) => {
          {
            let iconSlot = function($$payload4) {
              ChartOutline($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Dashboard",
              href: "/",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              GridSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, subtext = function($$payload4) {
              $$payload4.out += `<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`;
            };
            SidebarItem($$payload3, {
              label: "Kanban",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              MailBoxSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, subtext = function($$payload4) {
              $$payload4.out += `<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`;
            };
            SidebarItem($$payload3, {
              label: "Inbox",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              UserSolid($$payload4, {
                class: "h-5 w-5 text-primary-500 transition duration-75 "
              });
            };
            SidebarItem($$payload3, {
              label: "Sidebar",
              href: "/components/sidebar",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">`;
  PlusPlaceholder($$payload, { colnum: 3, rownum: 1 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function OverridingActive($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const activeClass = "flex items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700";
  const nonActiveClass = "flex items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = false;
  const closeDemoSidebar = demoSidebarUi.close;
  SidebarButton($$payload, { onclick: demoSidebarUi.toggle, class: "mb-2" });
  $$payload.out += `<!----> <div class="relative">`;
  Sidebar($$payload, {
    activeUrl,
    backdrop: false,
    isOpen: isDemoOpen,
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    position: "absolute",
    activeClass,
    nonActiveClass,
    class: "z-50 h-full",
    children: ($$payload2) => {
      SidebarGroup($$payload2, {
        children: ($$payload3) => {
          {
            let iconSlot = function($$payload4) {
              ChartOutline($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Dashboard",
              href: "/",
              active: true,
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              GridSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, subtext = function($$payload4) {
              $$payload4.out += `<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`;
            };
            SidebarItem($$payload3, {
              label: "Kanban",
              spanClass,
              active: false,
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              MailBoxSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, subtext = function($$payload4) {
              $$payload4.out += `<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`;
            };
            SidebarItem($$payload3, {
              label: "Inbox",
              spanClass,
              active: false,
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              UserSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Sidebar",
              href: "/components/sidebar",
              active: false,
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">`;
  PlusPlaceholder($$payload, { colnum: 3, rownum: 1 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Multilevel($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = false;
  const closeDemoSidebar = demoSidebarUi.close;
  SidebarButton($$payload, { onclick: demoSidebarUi.toggle, class: "mb-2" });
  $$payload.out += `<!----> <div class="relative">`;
  Sidebar($$payload, {
    activeUrl,
    backdrop: false,
    isOpen: isDemoOpen,
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    position: "absolute",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    class: "z-50 h-full",
    children: ($$payload2) => {
      SidebarGroup($$payload2, {
        children: ($$payload3) => {
          {
            let iconSlot = function($$payload4) {
              ChartOutline($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Dashboard",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              ShoppingBagSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarDropdownWrapper($$payload3, {
              label: "E-commerce",
              btnClass: "p-2",
              iconSlot,
              children: ($$payload4) => {
                SidebarItem($$payload4, { label: "Sidebar", href: "/components/sidebar" });
                $$payload4.out += `<!----> `;
                SidebarItem($$payload4, { label: "Billing" });
                $$payload4.out += `<!----> `;
                SidebarItem($$payload4, { label: "Invoice" });
                $$payload4.out += `<!---->`;
              },
              $$slots: { iconSlot: true, default: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              GridSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, subtext = function($$payload4) {
              $$payload4.out += `<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`;
            };
            SidebarItem($$payload3, {
              label: "Kanban",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              MailBoxSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, subtext = function($$payload4) {
              $$payload4.out += `<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`;
            };
            SidebarItem($$payload3, {
              label: "Inbox",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              UserSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Users",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              ArrowRightToBracketOutline($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Sign In",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              EditSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Sign Up",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">`;
  PlusPlaceholder($$payload, { colnum: 3, rownum: 1 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function ContentSeparator($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = false;
  const closeDemoSidebar = demoSidebarUi.close;
  SidebarButton($$payload, { onclick: demoSidebarUi.toggle, class: "mb-2" });
  $$payload.out += `<!----> <div class="relative">`;
  Sidebar($$payload, {
    activeUrl,
    backdrop: false,
    isOpen: isDemoOpen,
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    class: "z-50 h-full",
    position: "absolute",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    children: ($$payload2) => {
      SidebarGroup($$payload2, {
        children: ($$payload3) => {
          {
            let iconSlot = function($$payload4) {
              ChartOutline($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Dashboard",
              href: "/",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              GridSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, subtext = function($$payload4) {
              $$payload4.out += `<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`;
            };
            SidebarItem($$payload3, {
              label: "Kanban",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              MailBoxSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, subtext = function($$payload4) {
              $$payload4.out += `<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`;
            };
            SidebarItem($$payload3, {
              label: "Inbox",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              UserSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Sidebar",
              href: "/components/sidebar",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      SidebarGroup($$payload2, {
        border: true,
        children: ($$payload3) => {
          {
            let iconSlot = function($$payload4) {
              FireSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Upgrade to Pro",
              href: "/",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              BookSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Documentation",
              href: "/",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              RestoreWindowOutline($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Components",
              href: "/",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">`;
  PlusPlaceholder($$payload, { colnum: 3, rownum: 1 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Icon($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = false;
  const closeDemoSidebar = demoSidebarUi.close;
  SidebarButton($$payload, { onclick: demoSidebarUi.toggle, class: "mb-2" });
  $$payload.out += `<!----> <div class="relative">`;
  Sidebar($$payload, {
    activeUrl,
    backdrop: false,
    isOpen: isDemoOpen,
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    position: "absolute",
    class: "z-50 h-full",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    children: ($$payload2) => {
      SidebarGroup($$payload2, {
        children: ($$payload3) => {
          {
            let iconSlot = function($$payload4) {
              ChartOutline($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Dashboard",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              ShoppingBagSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, arrowup = function($$payload4) {
              ChevronDoubleUpOutline($$payload4, { class: "h-6 w-6" });
            }, arrowdown = function($$payload4) {
              ChevronDoubleDownOutline($$payload4, { class: "h-6 w-6" });
            };
            SidebarDropdownWrapper($$payload3, {
              label: "E-commerce",
              btnClass: "p-2",
              iconSlot,
              arrowup,
              arrowdown,
              children: ($$payload4) => {
                SidebarItem($$payload4, { label: "Sidebar", href: "/components/sidebar" });
                $$payload4.out += `<!----> `;
                SidebarItem($$payload4, { label: "Billing" });
                $$payload4.out += `<!----> `;
                SidebarItem($$payload4, { label: "Invoice" });
                $$payload4.out += `<!---->`;
              },
              $$slots: {
                iconSlot: true,
                arrowup: true,
                arrowdown: true,
                default: true
              }
            });
          }
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">`;
  PlusPlaceholder($$payload, { colnum: 3, rownum: 1 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Cta($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = false;
  const closeDemoSidebar = demoSidebarUi.close;
  SidebarButton($$payload, { onclick: demoSidebarUi.toggle, class: "mb-2" });
  $$payload.out += `<!----> <div class="relative">`;
  Sidebar($$payload, {
    activeUrl,
    backdrop: false,
    isOpen: isDemoOpen,
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    class: "z-50 h-full",
    position: "absolute",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    children: ($$payload2) => {
      SidebarGroup($$payload2, {
        children: ($$payload3) => {
          {
            let iconSlot = function($$payload4) {
              ChartOutline($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Dashboard",
              href: "/",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              GridSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, subtext = function($$payload4) {
              $$payload4.out += `<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`;
            };
            SidebarItem($$payload3, {
              label: "Kanban",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              MailBoxSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, subtext = function($$payload4) {
              $$payload4.out += `<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`;
            };
            SidebarItem($$payload3, {
              label: "Inbox",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              UserSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Sidebar",
              href: "/components/sidebar",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let icon = function($$payload4) {
              $$payload4.out += `<button type="button" class="-mx-1.5 -my-1.5 ms-auto inline-flex h-6 w-6 rounded-lg bg-primary-50 p-1 text-primary-900 hover:bg-primary-200 focus:ring-2 focus:ring-primary-400 dark:bg-primary-900 dark:text-primary-400 dark:hover:bg-primary-800" data-collapse-toggle="dropdown-cta" aria-label="Close"><span class="sr-only">Close</span> `;
              CloseOutline($$payload4, { class: "h-4 w-4" });
              $$payload4.out += `<!----></button>`;
            };
            SidebarCta($$payload3, {
              label: "Beta",
              icon,
              children: ($$payload4) => {
                $$payload4.out += `<p class="mb-3 text-sm text-primary-900 dark:text-primary-400">Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile.</p> <a class="text-sm text-primary-900 underline hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300" href="/">Turn new navigation off</a>`;
              },
              $$slots: { icon: true, default: true }
            });
          }
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">`;
  PlusPlaceholder($$payload, { colnum: 3, rownum: 1 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function LogoBranding($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = false;
  const closeDemoSidebar = demoSidebarUi.close;
  const site = {
    name: "Flowbite-Svelte",
    href: "/",
    img: "/images/flowbite-svelte-icon-logo.svg",
    imgClass: "h-6 w-6"
  };
  SidebarButton($$payload, { onclick: demoSidebarUi.toggle, class: "mb-2" });
  $$payload.out += `<!----> <div class="relative">`;
  Sidebar($$payload, {
    activeUrl,
    backdrop: false,
    isOpen: isDemoOpen,
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    class: "z-50 h-full",
    position: "absolute",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    children: ($$payload2) => {
      CloseButton($$payload2, {
        onclick: closeDemoSidebar,
        color: "gray",
        class: "absolute right-1 top-3 p-2 md:hidden"
      });
      $$payload2.out += `<!----> `;
      SidebarGroup($$payload2, {
        children: ($$payload3) => {
          SidebarBrand($$payload3, { site });
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              ChartOutline($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Dashboard",
              href: "/",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              GridSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, subtext = function($$payload4) {
              $$payload4.out += `<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`;
            };
            SidebarItem($$payload3, {
              label: "Kanban",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              MailBoxSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, subtext = function($$payload4) {
              $$payload4.out += `<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`;
            };
            SidebarItem($$payload3, {
              label: "Inbox",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              UserSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Sidebar",
              href: "/components/sidebar",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">`;
  PlusPlaceholder($$payload, { colnum: 3, rownum: 1 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function BrandingWithChildren($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = false;
  const closeDemoSidebar = demoSidebarUi.close;
  SidebarButton($$payload, { onclick: demoSidebarUi.toggle, class: "mb-2" });
  $$payload.out += `<!----> <div class="relative">`;
  Sidebar($$payload, {
    activeUrl,
    backdrop: false,
    isOpen: isDemoOpen,
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    class: "z-50 h-full",
    position: "absolute",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    children: ($$payload2) => {
      CloseButton($$payload2, {
        onclick: closeDemoSidebar,
        color: "gray",
        class: "absolute right-1 top-3 p-2 md:hidden"
      });
      $$payload2.out += `<!----> `;
      SidebarGroup($$payload2, {
        children: ($$payload3) => {
          SidebarBrand($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<img src="/images/flowbite-svelte-icon-logo.svg" alt="Svelte 5 UI Lib" class="h-6 w-6"> <span class="ml-2 self-center whitespace-nowrap text-xl font-semibold dark:text-white">Svelte 5 UI Lib</span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              ChartOutline($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Dashboard",
              href: "/",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              GridSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, subtext = function($$payload4) {
              $$payload4.out += `<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`;
            };
            SidebarItem($$payload3, {
              label: "Kanban",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              MailBoxSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, subtext = function($$payload4) {
              $$payload4.out += `<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`;
            };
            SidebarItem($$payload3, {
              label: "Inbox",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              UserSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Sidebar",
              href: "/components/sidebar",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">`;
  PlusPlaceholder($$payload, { colnum: 3, rownum: 1 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function DropdownTransition($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  let params = { duration: 700, easing: sineIn };
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = false;
  const closeDemoSidebar = demoSidebarUi.close;
  SidebarButton($$payload, { onclick: demoSidebarUi.toggle, class: "mb-2" });
  $$payload.out += `<!----> <div class="relative">`;
  Sidebar($$payload, {
    activeUrl,
    backdrop: false,
    isOpen: isDemoOpen,
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    position: "absolute",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    class: "z-50 h-full",
    children: ($$payload2) => {
      SidebarGroup($$payload2, {
        children: ($$payload3) => {
          {
            let iconSlot = function($$payload4) {
              ChartOutline($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Dashboard",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              ShoppingBagSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarDropdownWrapper($$payload3, {
              label: "E-commerce",
              btnClass: "p-2",
              transition: fade,
              params,
              iconSlot,
              children: ($$payload4) => {
                SidebarItem($$payload4, { label: "Sidebar", href: "/components/sidebar" });
                $$payload4.out += `<!----> `;
                SidebarItem($$payload4, { label: "Billing" });
                $$payload4.out += `<!----> `;
                SidebarItem($$payload4, { label: "Invoice" });
                $$payload4.out += `<!---->`;
              },
              $$slots: { iconSlot: true, default: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              GridSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, subtext = function($$payload4) {
              $$payload4.out += `<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`;
            };
            SidebarItem($$payload3, {
              label: "Kanban",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              MailBoxSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, subtext = function($$payload4) {
              $$payload4.out += `<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`;
            };
            SidebarItem($$payload3, {
              label: "Inbox",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              UserSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Users",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              ArrowRightToBracketOutline($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Sign In",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              EditSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Sign Up",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">`;
  PlusPlaceholder($$payload, { colnum: 3, rownum: 1 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function CloseButton_1($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = false;
  const closeDemoSidebar = demoSidebarUi.close;
  SidebarButton($$payload, { onclick: demoSidebarUi.toggle, class: "mb-2" });
  $$payload.out += `<!----> <div class="relative">`;
  Sidebar($$payload, {
    activeUrl,
    backdrop: false,
    isOpen: isDemoOpen,
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    class: "z-50 h-full pt-6",
    position: "absolute",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    children: ($$payload2) => {
      CloseButton($$payload2, {
        onclick: closeDemoSidebar,
        color: "gray",
        class: "absolute right-2 top-2 p-2 md:hidden"
      });
      $$payload2.out += `<!----> `;
      SidebarGroup($$payload2, {
        children: ($$payload3) => {
          {
            let iconSlot = function($$payload4) {
              ChartOutline($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Dashboard",
              href: "/",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              GridSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, subtext = function($$payload4) {
              $$payload4.out += `<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`;
            };
            SidebarItem($$payload3, {
              label: "Kanban",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              MailBoxSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, subtext = function($$payload4) {
              $$payload4.out += `<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`;
            };
            SidebarItem($$payload3, {
              label: "Inbox",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              UserSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Sidebar",
              href: "/components/sidebar",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">`;
  PlusPlaceholder($$payload, { colnum: 3, rownum: 1 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function StaticPositioning($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = true;
  const closeDemoSidebar = demoSidebarUi.close;
  $$payload.out += `<div class="h-96 overflow-auto px-4"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700"><div class="flex w-full flex-row pb-4">`;
  SidebarButton($$payload, { onclick: demoSidebarUi.toggle, class: "mb-2" });
  $$payload.out += `<!----> `;
  Sidebar($$payload, {
    activeUrl,
    backdrop: false,
    isOpen: isDemoOpen,
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    class: "z-50",
    position: "static",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    children: ($$payload2) => {
      SidebarGroup($$payload2, {
        children: ($$payload3) => {
          {
            let iconSlot = function($$payload4) {
              ChartOutline($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Dashboard",
              href: "/",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              GridSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, subtext = function($$payload4) {
              $$payload4.out += `<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`;
            };
            SidebarItem($$payload3, {
              label: "Kanban",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              MailBoxSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            }, subtext = function($$payload4) {
              $$payload4.out += `<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`;
            };
            SidebarItem($$payload3, {
              label: "Inbox",
              spanClass,
              href: "/",
              iconSlot,
              subtext,
              $$slots: { iconSlot: true, subtext: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              UserSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Sidebar",
              href: "/components/sidebar",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="grow pl-4 pt-2">`;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----></div></div> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 3, rownum: 1 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function SingleSelection($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = false;
  const closeDemoSidebar = demoSidebarUi.close;
  SidebarButton($$payload, { onclick: demoSidebarUi.toggle, class: "mb-2" });
  $$payload.out += `<!----> <div class="relative">`;
  Sidebar($$payload, {
    activeUrl,
    backdrop: false,
    isOpen: isDemoOpen,
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    position: "absolute",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    class: "z-50 h-full",
    children: ($$payload2) => {
      SidebarGroup($$payload2, {
        children: ($$payload3) => {
          {
            let iconSlot = function($$payload4) {
              ChartOutline($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Dashboard",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              ShoppingBagSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarDropdownWrapper($$payload3, {
              label: "Shop",
              btnClass: "p-2",
              iconSlot,
              children: ($$payload4) => {
                SidebarItem($$payload4, { label: "Products", href: "" });
              },
              $$slots: { iconSlot: true, default: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              UserSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarDropdownWrapper($$payload3, {
              label: "Profile",
              btnClass: "p-2",
              iconSlot,
              children: ($$payload4) => {
                SidebarItem($$payload4, { label: "Projects", href: "/" });
              },
              $$slots: { iconSlot: true, default: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              GridSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Sidebar",
              spanClass,
              href: "/components/sidebar",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      SidebarGroup($$payload2, {
        border: true,
        children: ($$payload3) => {
          {
            let iconSlot = function($$payload4) {
              EditSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarDropdownWrapper($$payload3, {
              label: "Setting",
              btnClass: "p-2",
              iconSlot,
              children: ($$payload4) => {
                SidebarItem($$payload4, { label: "Account", href: "" });
              },
              $$slots: { iconSlot: true, default: true }
            });
          }
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">`;
  PlusPlaceholder($$payload, { colnum: 3, rownum: 1 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function AllOpen($$payload, $$props) {
  push();
  var $$store_subs;
  let activeUrl = store_get($$store_subs ??= {}, "$page", page).url.pathname;
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = false;
  const closeDemoSidebar = demoSidebarUi.close;
  SidebarButton($$payload, { onclick: demoSidebarUi.toggle, class: "mb-2" });
  $$payload.out += `<!----> <div class="relative">`;
  Sidebar($$payload, {
    activeUrl,
    isSingle: false,
    backdrop: false,
    isOpen: isDemoOpen,
    closeSidebar: closeDemoSidebar,
    params: { x: -50, duration: 50 },
    position: "absolute",
    activeClass: "p-2",
    nonActiveClass: "p-2",
    class: "z-50 h-full",
    children: ($$payload2) => {
      SidebarGroup($$payload2, {
        children: ($$payload3) => {
          {
            let iconSlot = function($$payload4) {
              ChartOutline($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Dashboard",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              ShoppingBagSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarDropdownWrapper($$payload3, {
              label: "Shop",
              btnClass: "p-2",
              iconSlot,
              children: ($$payload4) => {
                SidebarItem($$payload4, { label: "Products", href: "" });
              },
              $$slots: { iconSlot: true, default: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              UserSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarDropdownWrapper($$payload3, {
              label: "Profile",
              btnClass: "p-2",
              iconSlot,
              children: ($$payload4) => {
                SidebarItem($$payload4, { label: "Projects", href: "/" });
              },
              $$slots: { iconSlot: true, default: true }
            });
          }
          $$payload3.out += `<!----> `;
          {
            let iconSlot = function($$payload4) {
              GridSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarItem($$payload3, {
              label: "Sidebar",
              spanClass,
              href: "/components/sidebar",
              iconSlot,
              $$slots: { iconSlot: true }
            });
          }
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      SidebarGroup($$payload2, {
        border: true,
        children: ($$payload3) => {
          {
            let iconSlot = function($$payload4) {
              EditSolid($$payload4, {
                class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              });
            };
            SidebarDropdownWrapper($$payload3, {
              label: "Setting",
              btnClass: "p-2",
              iconSlot,
              children: ($$payload4) => {
                SidebarItem($$payload4, { label: "Account", href: "" });
              },
              $$slots: { iconSlot: true, default: true }
            });
          }
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="h-96 overflow-auto px-4 md:ml-64"><div class="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">`;
  PlusPlaceholder($$payload, { colnum: 3, rownum: 1 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, {});
  $$payload.out += `<!----> `;
  PlusPlaceholder($$payload, { colnum: 2, rownum: 2 });
  $$payload.out += `<!----></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload, $$props) {
  push();
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
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
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
        $$payload3.out += `<!---->Sidebar`;
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
          const each_array = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-12 flex flex-wrap">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Example`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let style = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-48 my-1",
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
