import { Q as push, W as attr, a0 as spread_attributes, S as pop, a1 as getContext, V as escape_html, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like } from "../../../../chunks/index.js";
import { u as uiHelpers } from "../../../../chunks/uiHelpers.svelte.js";
import { f as fly, b as blur, s as slide, c as scale, a as fade } from "../../../../chunks/index3.js";
import { w as drawer, x as drawerhead } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { s as sineIn, l as linear } from "../../../../chunks/index4.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { I as InfoCircleSolid } from "../../../../chunks/InfoCircleSolid.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { S as Sidebar, a as SidebarGroup, c as SidebarItem, b as SidebarDropdownWrapper } from "../../../../chunks/SidebarItem.js";
import { C as ChartOutline, M as MailBoxSolid, U as UserSolid, A as ArrowRightToBracketOutline, E as EditSolid } from "../../../../chunks/UserSolid.js";
import { G as GridSolid } from "../../../../chunks/GridSolid.js";
import { S as ShoppingBagSolid } from "../../../../chunks/ShoppingBagSolid.js";
import { A as ArrowRightOutline } from "../../../../chunks/ArrowRightOutline.js";
import { I as Input } from "../../../../chunks/index5.js";
import { T as Textarea } from "../../../../chunks/Textarea.js";
import { A } from "../../../../chunks/A.js";
import { P } from "../../../../chunks/P.js";
import { twMerge } from "tailwind-merge";
function Drawer($$payload, $$props) {
  push();
  let {
    children,
    drawerStatus,
    closeDrawer,
    activateClickOutside = true,
    position,
    width,
    backdrop = true,
    backdropClass,
    placement = "left",
    class: className,
    params = { x: -320, duration: 200, easing: sineIn },
    transition = fly,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, backdrop: backdropCls } = drawer({ position, placement, width, backdrop });
  if (drawerStatus) {
    $$payload.out += "<!--[-->";
    if (backdrop && activateClickOutside) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div role="presentation"${attr("class", backdropCls({ class: backdropClass }))}></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      if (backdrop && !activateClickOutside) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div role="presentation"${attr("class", backdropCls({ class: backdropClass }))}></div>`;
      } else {
        $$payload.out += "<!--[!-->";
        if (!backdrop && activateClickOutside) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full"></div>`;
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]-->`;
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]--> <div${spread_attributes({
      ...restProps,
      class: base({ className }),
      tabindex: "-1"
    })}>`;
    children($$payload);
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function Drawerhead($$payload, $$props) {
  push();
  let {
    closeIcon,
    children,
    buttonClass,
    svgClass,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, button, svg } = drawerhead();
  $$payload.out += `<div${attr("class", base({ className }))}>`;
  if (children) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if (closeIcon) {
    $$payload.out += "<!--[-->";
    closeIcon($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${spread_attributes({
      type: "button",
      ...restProps,
      class: button({ class: buttonClass })
    })}><svg${attr("class", svg({ class: svgClass }))} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg> <span class="sr-only">Close drawer</span></button>`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
function CalendarEditSolid($$payload, $$props) {
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
    ariaLabel = "calendar edit solid",
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
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M12.512 8.72a2.46 2.46 0 0 1 3.479 0 2.461 2.461 0 0 1 0 3.479l-.004.005-1.094 1.08a.998.998 0 0 0-.194-.272l-3-3a1 1 0 0 0-.272-.193l1.085-1.1Zm-2.415 2.445L7.28 14.017a1 1 0 0 0-.289.702v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .703-.288l2.851-2.816a.995.995 0 0 1-.26-.189l-3-3a.998.998 0 0 1-.19-.26Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M7 3a1 1 0 0 1 1 1v1h3V4a1 1 0 1 1 2 0v1h3V4a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1V4a1 1 0 0 1 1-1Zm10.67 8H19v8H5v-8h3.855l.53-.537a1 1 0 0 1 .87-.285c.097.015.233.13.277.087.045-.043-.073-.18-.09-.276a1 1 0 0 1 .274-.873l1.09-1.104a3.46 3.46 0 0 1 4.892 0l.001.002A3.461 3.461 0 0 1 17.67 11Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function UserAddOutline($$payload, $$props) {
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
    ariaLabel = "user add outline",
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>`;
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Button, Drawer, uiHelpers, Drawerhead, Label, Input, Textarea, P, A } from "$lib";\n  import { InfoCircleSolid } from "flowbite-svelte-icons";\n  const drawer = uiHelpers();\n  let drawerStatus = $state(false);\n  const closeDrawer = drawer.close;\n  $effect(() => {\n    drawerStatus = drawer.isOpen;\n  });\n<\/script>\n\n<div class="text-center">\n  <Button onclick={drawer.toggle}>Show navigation</Button>\n</div>\n<Drawer {drawerStatus} {closeDrawer}>\n  <Drawerhead onclick={closeDrawer} class="mb-4">\n    <h5 id="drawer-label" class="inline-flex items-center text-lg font-semibold text-gray-500 dark:text-gray-400">\n      <InfoCircleSolid class="me-2.5 h-5 w-5" />Contact us\n    </h5>\n  </Drawerhead>\n  <form action="#" class="mb-6">\n    <div class="mb-6">\n      <Label for="email" class="mb-2 block">Your email</Label>\n      <Input id="email" name="email" required placeholder="name@company.com" />\n    </div>\n    <div class="mb-6">\n      <Label for="subject" class="mb-2 block">Subject</Label>\n      <Input id="subject" name="subject" required placeholder="Let us know how we can help you" />\n    </div>\n    <div class="mb-6">\n      <Label for="message" class="mb-2">Your message</Label>\n      <Textarea id="message" placeholder="Your message..." rows={4} name="message" />\n    </div>\n    <Button type="submit" class="w-full">Send message</Button>\n  </form>\n  <P class="mb-2 text-sm text-gray-500 dark:text-gray-400">\n    <A href="/" class="text-primary-600 hover:underline dark:text-primary-500">info@company.com</A>\n  </P>\n  <P class="text-sm text-gray-500 dark:text-gray-400">\n    <A href="/" class="text-primary-600 hover:underline dark:text-primary-500">212-456-7890</A>\n  </P>\n</Drawer>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Button, Drawer, Drawerhead, uiHelpers, Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper } from "$lib";\n  import { InfoCircleSolid, ChartOutline, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditSolid, ShoppingBagSolid } from "flowbite-svelte-icons";\n  const drawer = uiHelpers();\n  let drawerStatus = $state(false);\n  const closeDrawer = drawer.close;\n  $effect(() => {\n    drawerStatus = drawer.isOpen;\n  });\n  let spanClass = "flex-1 ms-3 whitespace-nowrap";\n<\/script>\n\n<div class="text-center">\n  <Button onclick={drawer.toggle}>Show navigation</Button>\n</div>\n<Drawer {drawerStatus} {closeDrawer} class="bg-gray-50">\n  <Drawerhead onclick={closeDrawer} class="mb-4">\n    <h5 id="drawer-label" class="inline-flex items-center text-xl font-semibold text-gray-500 dark:text-gray-400">\n      <InfoCircleSolid class="me-2.5 h-5 w-5" />Menu\n    </h5>\n  </Drawerhead>\n  <Sidebar class="p-2" divClass="p-0 m-0">\n    <SidebarGroup>\n      <SidebarItem label="Dashboard">\n        {#snippet iconSlot()}\n          <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarDropdownWrapper label="E-commerce" btnClass="p-2">\n        {#snippet iconSlot()}\n          <ShoppingBagSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        <SidebarItem label="Products" />\n        <SidebarItem label="Billing" />\n        <SidebarItem label="Invoice" />\n      </SidebarDropdownWrapper>\n      <SidebarItem label="Drawer" href="/components/drawer" {spanClass}>\n        {#snippet iconSlot()}\n          <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Inbox" {spanClass} href="/">\n        {#snippet iconSlot()}\n          <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Users">\n        {#snippet iconSlot()}\n          <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Sign In">\n        {#snippet iconSlot()}\n          <ArrowRightToBracketOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Sign Up">\n        {#snippet iconSlot()}\n          <EditSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n    </SidebarGroup>\n  </Sidebar>\n</Drawer>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Button, Drawer, uiHelpers, Drawerhead, Label, Input, Textarea } from "$lib";\n  import { InfoCircleSolid, UserAddOutline, CalendarEditSolid } from "flowbite-svelte-icons";\n  const drawer = uiHelpers();\n  let drawerStatus = $state(false);\n  const closeDrawer = drawer.close;\n  $effect(() => {\n    drawerStatus = drawer.isOpen;\n  });\n<\/script>\n\n<div class="text-center">\n  <Button onclick={drawer.toggle}>Show navigation</Button>\n</div>\n<Drawer {drawerStatus} {closeDrawer}>\n  <Drawerhead onclick={closeDrawer} class="mb-4">\n    <h5 id="drawer-label" class="inline-flex items-center text-lg font-semibold text-gray-500 dark:text-gray-400">\n      <InfoCircleSolid class="me-2.5 h-5 w-5" />New event\n    </h5>\n  </Drawerhead>\n  <form action="#" class="mb-6">\n    <div class="mb-6">\n      <Label for="title" class="mb-2 block">Title</Label>\n      <Input id="title" name="title" required placeholder="Apple Keynote" />\n    </div>\n    <div class="mb-6">\n      <Label for="description" class="mb-2">Description</Label>\n      <Textarea id="message" placeholder="Write event description..." rows={4} name="message" />\n    </div>\n    <div class="mb-6">\n      <Input id="date" name="date" required type="date" />\n    </div>\n    <div class="mb-4">\n      <div class="relative">\n        <Input id="search" placeholder="Add guest email" class="p-3" />\n        <Button class="absolute bottom-2 end-2 inline-flex items-center rounded-lg bg-primary-700 px-3 py-1 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="submit">\n          <UserAddOutline class="me-1.5 h-3 w-3 text-white" />Add\n        </Button>\n      </div>\n    </div>\n    <div class="mb-4 flex -space-x-4 rtl:space-x-reverse">\n      <img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-1.webp" alt="" />\n      <img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-2.webp" alt="" />\n      <img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-3.webp" alt="" />\n      <img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-4.webp" alt="" />\n    </div>\n    <Button type="submit" class="w-full">\n      <CalendarEditSolid class="me-2.5 h-3.5 w-3.5 text-white" /> Create event\n    </Button>\n  </form>\n</Drawer>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Button, Drawer, Drawerhead, uiHelpers } from "$lib";\n  import { InfoCircleSolid } from "flowbite-svelte-icons";\n  const drawerBackdrop = uiHelpers();\n  let drawerStatusBackdrop = $state(false);\n  const closeDrawerBackdrop = drawerBackdrop.close;\n\n  $effect(() => {\n    drawerStatusBackdrop = drawerBackdrop.isOpen;\n  });\n  let offsetClass = $state("");\n  const changeClass = () => {\n    offsetClass = offsetClass === "" ? "top-16 h-screen start-0" : "";\n  };\n<\/script>\n\n<div class="mb-4 text-center">\n  <Button onclick={drawerBackdrop.toggle}>Show drawer</Button>\n</div>\n<Drawer class={offsetClass} drawerStatus={drawerStatusBackdrop} closeDrawer={closeDrawerBackdrop}>\n  <Drawerhead onclick={closeDrawerBackdrop} class="mb-4">\n    <h5 id="drawer-label" class="inline-flex items-center text-xl font-semibold text-gray-500 dark:text-gray-400">\n      <InfoCircleSolid class="me-2.5 h-5 w-5" />Drawer\n    </h5>\n  </Drawerhead>\n  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">\n    Offset: {offsetClass ? offsetClass : "none"}\n  </p>\n</Drawer>\n<div class="flex justify-center gap-2">\n  <Button color="green" onclick={changeClass}>{offsetClass ? "Remove offset" : "Add offset"}</Button>\n</div>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Button, Drawer, Drawerhead, uiHelpers } from "$lib";\n  import { InfoCircleSolid, ArrowRightOutline } from "flowbite-svelte-icons";\n  const drawerMouseEnter = uiHelpers();\n  let drawerStatusMouseEnter = $state(false);\n  const closeDrawerMouseEnter = drawerMouseEnter.close;\n  $effect(() => {\n    drawerStatusMouseEnter = drawerMouseEnter.isOpen;\n  });\n<\/script>\n\n<div class="text-center">\n  <Button onmouseenter={drawerMouseEnter.toggle}>Show drawer</Button>\n</div>\n\n<Drawer drawerStatus={drawerStatusMouseEnter} closeDrawer={closeDrawerMouseEnter}>\n  <Drawerhead onclick={closeDrawerMouseEnter} class="mb-4">\n    <h5 id="drawer-label" class="inline-flex items-center text-xl font-semibold text-gray-500 dark:text-gray-400">\n      <InfoCircleSolid class="me-2.5 h-5 w-5" />Info\n    </h5>\n  </Drawerhead>\n  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">\n    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 underline hover:no-underline dark:text-primary-500">limited-time sale</a>\n    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.\n  </p>\n  <div class="grid grid-cols-2 gap-4">\n    <Button color="light" href="/">Learn more</Button>\n    <Button href="/" class="px-4">Get access <ArrowRightOutline class="ms-2 h-3.5 w-3.5" /></Button>\n  </div>\n</Drawer>\n';
const __vite_glob_0_5 = '<script>\n  import { Drawer, Drawerhead, Button, uiHelpers } from "$lib";\n  import { InfoCircleSolid } from "flowbite-svelte-icons";\n  const drawer = uiHelpers();\n  let drawerStatus = $state(false);\n  const closeDrawer = drawer.close;\n  $effect(() => {\n    drawerStatus = drawer.isOpen;\n  });\n<\/script>\n';
function DrawerNavigation($$payload, $$props) {
  push();
  const drawer2 = uiHelpers();
  let drawerStatus = false;
  const closeDrawer = drawer2.close;
  let spanClass = "flex-1 ms-3 whitespace-nowrap";
  $$payload.out += `<div class="text-center">`;
  Button($$payload, {
    onclick: drawer2.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Show navigation`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Drawer($$payload, {
    drawerStatus,
    closeDrawer,
    class: "bg-gray-50",
    children: ($$payload2) => {
      Drawerhead($$payload2, {
        onclick: closeDrawer,
        class: "mb-4",
        children: ($$payload3) => {
          $$payload3.out += `<h5 id="drawer-label" class="inline-flex items-center text-xl font-semibold text-gray-500 dark:text-gray-400">`;
          InfoCircleSolid($$payload3, { class: "me-2.5 h-5 w-5" });
          $$payload3.out += `<!---->Menu</h5>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Sidebar($$payload2, {
        class: "p-2",
        divClass: "p-0 m-0",
        children: ($$payload3) => {
          SidebarGroup($$payload3, {
            children: ($$payload4) => {
              {
                let iconSlot = function($$payload5) {
                  ChartOutline($$payload5, {
                    class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  });
                };
                SidebarItem($$payload4, {
                  label: "Dashboard",
                  iconSlot,
                  $$slots: { iconSlot: true }
                });
              }
              $$payload4.out += `<!----> `;
              {
                let iconSlot = function($$payload5) {
                  ShoppingBagSolid($$payload5, {
                    class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  });
                };
                SidebarDropdownWrapper($$payload4, {
                  label: "E-commerce",
                  btnClass: "p-2",
                  iconSlot,
                  children: ($$payload5) => {
                    SidebarItem($$payload5, { label: "Products" });
                    $$payload5.out += `<!----> `;
                    SidebarItem($$payload5, { label: "Billing" });
                    $$payload5.out += `<!----> `;
                    SidebarItem($$payload5, { label: "Invoice" });
                    $$payload5.out += `<!---->`;
                  },
                  $$slots: { iconSlot: true, default: true }
                });
              }
              $$payload4.out += `<!----> `;
              {
                let iconSlot = function($$payload5) {
                  GridSolid($$payload5, {
                    class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  });
                }, subtext = function($$payload5) {
                  $$payload5.out += `<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`;
                };
                SidebarItem($$payload4, {
                  label: "Drawer",
                  href: "/components/drawer",
                  spanClass,
                  iconSlot,
                  subtext,
                  $$slots: { iconSlot: true, subtext: true }
                });
              }
              $$payload4.out += `<!----> `;
              {
                let iconSlot = function($$payload5) {
                  MailBoxSolid($$payload5, {
                    class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  });
                }, subtext = function($$payload5) {
                  $$payload5.out += `<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`;
                };
                SidebarItem($$payload4, {
                  label: "Inbox",
                  spanClass,
                  href: "/",
                  iconSlot,
                  subtext,
                  $$slots: { iconSlot: true, subtext: true }
                });
              }
              $$payload4.out += `<!----> `;
              {
                let iconSlot = function($$payload5) {
                  UserSolid($$payload5, {
                    class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  });
                };
                SidebarItem($$payload4, {
                  label: "Users",
                  iconSlot,
                  $$slots: { iconSlot: true }
                });
              }
              $$payload4.out += `<!----> `;
              {
                let iconSlot = function($$payload5) {
                  ArrowRightToBracketOutline($$payload5, {
                    class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  });
                };
                SidebarItem($$payload4, {
                  label: "Sign In",
                  iconSlot,
                  $$slots: { iconSlot: true }
                });
              }
              $$payload4.out += `<!----> `;
              {
                let iconSlot = function($$payload5) {
                  EditSolid($$payload5, {
                    class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  });
                };
                SidebarItem($$payload4, {
                  label: "Sign Up",
                  iconSlot,
                  $$slots: { iconSlot: true }
                });
              }
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}
function Offset($$payload, $$props) {
  push();
  const drawerBackdrop = uiHelpers();
  let drawerStatusBackdrop = false;
  const closeDrawerBackdrop = drawerBackdrop.close;
  let offsetClass = "";
  const changeClass = () => {
    offsetClass = offsetClass === "" ? "top-16 h-screen start-0" : "";
  };
  $$payload.out += `<div class="mb-4 text-center">`;
  Button($$payload, {
    onclick: drawerBackdrop.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Show drawer`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Drawer($$payload, {
    class: offsetClass,
    drawerStatus: drawerStatusBackdrop,
    closeDrawer: closeDrawerBackdrop,
    children: ($$payload2) => {
      Drawerhead($$payload2, {
        onclick: closeDrawerBackdrop,
        class: "mb-4",
        children: ($$payload3) => {
          $$payload3.out += `<h5 id="drawer-label" class="inline-flex items-center text-xl font-semibold text-gray-500 dark:text-gray-400">`;
          InfoCircleSolid($$payload3, { class: "me-2.5 h-5 w-5" });
          $$payload3.out += `<!---->Drawer</h5>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">Offset: ${escape_html(offsetClass ? offsetClass : "none")}</p>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="flex justify-center gap-2">`;
  Button($$payload, {
    color: "green",
    onclick: changeClass,
    children: ($$payload2) => {
      $$payload2.out += `<!---->${escape_html(offsetClass ? "Remove offset" : "Add offset")}`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
  pop();
}
function Onmouseenter($$payload, $$props) {
  push();
  const drawerMouseEnter = uiHelpers();
  let drawerStatusMouseEnter = false;
  const closeDrawerMouseEnter = drawerMouseEnter.close;
  $$payload.out += `<div class="text-center">`;
  Button($$payload, {
    onmouseenter: drawerMouseEnter.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Show drawer`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Drawer($$payload, {
    drawerStatus: drawerStatusMouseEnter,
    closeDrawer: closeDrawerMouseEnter,
    children: ($$payload2) => {
      Drawerhead($$payload2, {
        onclick: closeDrawerMouseEnter,
        class: "mb-4",
        children: ($$payload3) => {
          $$payload3.out += `<h5 id="drawer-label" class="inline-flex items-center text-xl font-semibold text-gray-500 dark:text-gray-400">`;
          InfoCircleSolid($$payload3, { class: "me-2.5 h-5 w-5" });
          $$payload3.out += `<!---->Info</h5>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 underline hover:no-underline dark:text-primary-500">limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p> <div class="grid grid-cols-2 gap-4">`;
      Button($$payload2, {
        color: "light",
        href: "/",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Learn more`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        href: "/",
        class: "px-4",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Get access `;
          ArrowRightOutline($$payload3, { class: "ms-2 h-3.5 w-3.5" });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}
function ContactForm($$payload, $$props) {
  push();
  const drawer2 = uiHelpers();
  let drawerStatus = false;
  const closeDrawer = drawer2.close;
  $$payload.out += `<div class="text-center">`;
  Button($$payload, {
    onclick: drawer2.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Show navigation`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Drawer($$payload, {
    drawerStatus,
    closeDrawer,
    children: ($$payload2) => {
      Drawerhead($$payload2, {
        onclick: closeDrawer,
        class: "mb-4",
        children: ($$payload3) => {
          $$payload3.out += `<h5 id="drawer-label" class="inline-flex items-center text-lg font-semibold text-gray-500 dark:text-gray-400">`;
          InfoCircleSolid($$payload3, { class: "me-2.5 h-5 w-5" });
          $$payload3.out += `<!---->Contact us</h5>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <form action="#" class="mb-6"><div class="mb-6">`;
      Label($$payload2, {
        for: "email",
        class: "mb-2 block",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Your email`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Input($$payload2, {
        id: "email",
        name: "email",
        required: true,
        placeholder: "name@company.com"
      });
      $$payload2.out += `<!----></div> <div class="mb-6">`;
      Label($$payload2, {
        for: "subject",
        class: "mb-2 block",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Subject`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Input($$payload2, {
        id: "subject",
        name: "subject",
        required: true,
        placeholder: "Let us know how we can help you"
      });
      $$payload2.out += `<!----></div> <div class="mb-6">`;
      Label($$payload2, {
        for: "message",
        class: "mb-2",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Your message`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Textarea($$payload2, {
        id: "message",
        placeholder: "Your message...",
        rows: 4,
        name: "message"
      });
      $$payload2.out += `<!----></div> `;
      Button($$payload2, {
        type: "submit",
        class: "w-full",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Send message`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></form> `;
      P($$payload2, {
        class: "mb-2 text-sm text-gray-500 dark:text-gray-400",
        children: ($$payload3) => {
          A($$payload3, {
            href: "/",
            class: "text-primary-600 hover:underline dark:text-primary-500",
            children: ($$payload4) => {
              $$payload4.out += `<!---->info@company.com`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      P($$payload2, {
        class: "text-sm text-gray-500 dark:text-gray-400",
        children: ($$payload3) => {
          A($$payload3, {
            href: "/",
            class: "text-primary-600 hover:underline dark:text-primary-500",
            children: ($$payload4) => {
              $$payload4.out += `<!---->212-456-7890`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}
function FormElements($$payload, $$props) {
  push();
  const drawer2 = uiHelpers();
  let drawerStatus = false;
  const closeDrawer = drawer2.close;
  $$payload.out += `<div class="text-center">`;
  Button($$payload, {
    onclick: drawer2.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Show navigation`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Drawer($$payload, {
    drawerStatus,
    closeDrawer,
    children: ($$payload2) => {
      Drawerhead($$payload2, {
        onclick: closeDrawer,
        class: "mb-4",
        children: ($$payload3) => {
          $$payload3.out += `<h5 id="drawer-label" class="inline-flex items-center text-lg font-semibold text-gray-500 dark:text-gray-400">`;
          InfoCircleSolid($$payload3, { class: "me-2.5 h-5 w-5" });
          $$payload3.out += `<!---->New event</h5>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <form action="#" class="mb-6"><div class="mb-6">`;
      Label($$payload2, {
        for: "title",
        class: "mb-2 block",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Title`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Input($$payload2, {
        id: "title",
        name: "title",
        required: true,
        placeholder: "Apple Keynote"
      });
      $$payload2.out += `<!----></div> <div class="mb-6">`;
      Label($$payload2, {
        for: "description",
        class: "mb-2",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Description`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Textarea($$payload2, {
        id: "message",
        placeholder: "Write event description...",
        rows: 4,
        name: "message"
      });
      $$payload2.out += `<!----></div> <div class="mb-6">`;
      Input($$payload2, {
        id: "date",
        name: "date",
        required: true,
        type: "date"
      });
      $$payload2.out += `<!----></div> <div class="mb-4"><div class="relative">`;
      Input($$payload2, {
        id: "search",
        placeholder: "Add guest email",
        class: "p-3"
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        class: "absolute bottom-2 end-2 inline-flex items-center rounded-lg bg-primary-700 px-3 py-1 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
        type: "submit",
        children: ($$payload3) => {
          UserAddOutline($$payload3, { class: "me-1.5 h-3 w-3 text-white" });
          $$payload3.out += `<!---->Add`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div></div> <div class="mb-4 flex -space-x-4 rtl:space-x-reverse"><img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-1.webp" alt=""> <img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-2.webp" alt=""> <img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-3.webp" alt=""> <img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-4.webp" alt=""></div> `;
      Button($$payload2, {
        type: "submit",
        class: "w-full",
        children: ($$payload3) => {
          CalendarEditSolid($$payload3, { class: "me-2.5 h-3.5 w-3.5 text-white" });
          $$payload3.out += `<!----> Create event`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></form>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}
function _page($$payload, $$props) {
  push();
  const dirName = "drawer";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/ContactForm.svelte": __vite_glob_0_0,
    "./examples/DrawerNavigation.svelte": __vite_glob_0_1,
    "./examples/FormElements.svelte": __vite_glob_0_2,
    "./examples/Offset.svelte": __vite_glob_0_3,
    "./examples/Onmouseenter.svelte": __vite_glob_0_4,
    "./examples/Setup.svelte": __vite_glob_0_5
  });
  const exampleArr = [
    {
      name: "Form elements",
      component: FormElements
    },
    {
      name: "Contact form",
      component: ContactForm
    },
    {
      name: "Drawer navigation",
      component: DrawerNavigation
    },
    {
      name: "Offset",
      component: Offset
    },
    {
      name: "Onmouseenter",
      component: Onmouseenter
    }
  ];
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  const drawerTransition = uiHelpers();
  let drawerStatusTransition = false;
  const closeDrawerTransition = drawerTransition.close;
  const transitions = [
    {
      name: "Fly",
      transition: fly,
      params: { duration: 300, easing: linear, x: -150 }
    },
    {
      name: "Blur",
      transition: blur,
      params: { duration: 400, easing: sineIn }
    },
    {
      name: "Slide",
      transition: slide,
      params: { duration: 200, easing: linear }
    },
    {
      name: "Scale",
      transition: scale,
      params: { duration: 300, easing: sineIn }
    },
    {
      name: "Fade",
      transition: fade,
      params: { duration: 400, easing: linear }
    }
  ];
  let selectedTransition = "Fly";
  let currentTransition = transitions.find((t) => t.name === selectedTransition) || transitions[0];
  const placements = [
    {
      name: "Left",
      placement: "left",
      params: { x: -320, duration: 300, easing: sineIn },
      width: "default"
    },
    {
      name: "Top",
      placement: "top",
      params: { y: -320, duration: 300, easing: sineIn },
      width: "full"
    },
    {
      name: "Right",
      placement: "right",
      params: { x: 320, duration: 300, easing: sineIn },
      width: "default"
    },
    {
      name: "Bottom",
      placement: "bottom",
      params: { y: 320, duration: 300, easing: sineIn },
      width: "full"
    }
  ];
  let selectedPlacement = "Left";
  let currentPlacement = placements.find((p) => p.name === selectedPlacement) || placements[0];
  let backdropStatus = true;
  const changeBackdropStatus = () => {
    backdropStatus = !backdropStatus;
  };
  let outsideclickStatus = true;
  const changeOutsideclickStatus = () => {
    outsideclickStatus = !outsideclickStatus;
  };
  let generatedCode = (() => {
    let props = [];
    if (!backdropStatus) props.push(" backdrop={false}");
    if (!outsideclickStatus) props.push(" activateClickOutside={false}");
    if (currentPlacement.width !== "default") props.push(` width="${currentPlacement.width}"`);
    if (currentTransition !== transitions[0]) {
      props.push(` transition={${currentTransition.transition.name}}`);
      let paramValues = currentPlacement.placement === "left" ? currentTransition.params : currentPlacement.params;
      const paramsString = Object.entries(paramValues).map(([key, value]) => {
        if (typeof value === "function") {
          return `${key}:${value.name}`;
        }
        return `${key}:${value}`;
      }).join(",");
      props.push(` params={{${paramsString}}}`);
    }
    if (currentPlacement !== placements[0]) {
      props.push(` placement="${currentPlacement.placement}"`);
    }
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Button onclick={drawer.toggle}>Drawer</Button>
<Drawer drawerStatus={drawerStatus} closeDrawer={closeDrawer}${propsString}>
  <Drawerhead onclick={closeDrawer} class="mb-4>
    <h5 id="drawer-label" class="inline-flex items-center text-xl font-semibold text-gray-500 dark:text-gray-400">
        <InfoCircleSolid class="me-2.5 h-5 w-5" />${selectedTransition} drawer
      </h5>
  </Drawerhead>
    My Drawer
</Drawer>`;
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
        $$payload3.out += `<!---->Drawer`;
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
        $$payload3.out += `<!---->Interactive Drawer Builder`;
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
          const each_array_1 = ensure_array_like(placements);
          $$payload3.out += `<div class="text-center">`;
          Button($$payload3, {
            onclick: drawerTransition.toggle,
            children: ($$payload4) => {
              $$payload4.out += `<!---->Drawer`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> `;
          Drawer($$payload3, {
            drawerStatus: drawerStatusTransition,
            closeDrawer: closeDrawerTransition,
            transition: currentTransition.transition,
            placement: currentPlacement.placement,
            width: currentPlacement.width,
            params: currentPlacement.placement === "left" ? currentTransition.params : currentPlacement.params,
            backdrop: backdropStatus,
            activateClickOutside: outsideclickStatus,
            children: ($$payload4) => {
              Drawerhead($$payload4, {
                onclick: closeDrawerTransition,
                class: "mb-4",
                children: ($$payload5) => {
                  $$payload5.out += `<h5 id="drawer-label" class="inline-flex items-center text-xl font-semibold text-gray-500 dark:text-gray-400">`;
                  InfoCircleSolid($$payload5, { class: "me-2.5 h-5 w-5" });
                  $$payload5.out += `<!---->${escape_html(selectedTransition)} drawer</h5>`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">Content</p> <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">Backdrop: ${escape_html(backdropStatus ? "true" : "false")} <br> Outsideclick: ${escape_html(outsideclickStatus ? "true" : "false")}</p>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <div class="mb-4 flex flex-wrap space-x-2">`;
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
              labelClass: "w-16 my-1",
              name: "interactive_transition",
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
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Placement`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let placement = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: "w-16 my-1",
              name: "interactive_placement",
              get group() {
                return selectedPlacement;
              },
              set group($$value) {
                selectedPlacement = $$value;
                $$settled = false;
              },
              value: placement.name,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(placement.name)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-48",
            color: "primary",
            onclick: changeBackdropStatus,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(backdropStatus ? "Hide backdrop" : "Show backdrop")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-48",
            color: "secondary",
            onclick: changeOutsideclickStatus,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(outsideclickStatus ? "Disable outsideclick" : "Enable outsideclick")}`;
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
          $$payload3.out += `<div class="mb-12 flex flex-wrap">`;
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
  pop();
}
export {
  _page as default
};
