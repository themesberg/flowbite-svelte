import { a as append, c as comment, t as template, n as ns_template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, t as template_effect, f as first_child, a as pop, c as child, s as sibling, n as next, r as reset, b as get, d as derived, g as getContext, u as user_effect, a7 as set, a6 as state } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { i as if_block, r as rest_props, p as prop, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { a as set_attributes, c as set_svg_class, b as set_class, aV as drawerhead, s as set_attribute, t as twMerge, aW as Drawer, ay as Sidebar, V as uiHelpers, aC as fly, ab as linear, aD as blur, aS as sineIn, Z as slide, aE as scale, aA as fade } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { L as Label, C as CompoAttributesViewer, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { I as InfoCircleSolid } from "../chunks/InfoCircleSolid.DglZJiUU.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import { S as SidebarGroup, b as SidebarItem, a as SidebarDropdownWrapper } from "../chunks/SidebarItem.D09pRQzo.js";
import { C as ChartOutline, M as MailBoxSolid, U as UserSolid, A as ArrowRightToBracketOutline, E as EditSolid } from "../chunks/UserSolid.DPSaDdmv.js";
import { G as GridSolid } from "../chunks/GridSolid.CtftrHjO.js";
import { S as ShoppingBagSolid } from "../chunks/ShoppingBagSolid.Dfyq49NL.js";
import { A as ArrowRightOutline } from "../chunks/ArrowRightOutline.C1f8PGpf.js";
import { I as Input } from "../chunks/index.CCICtSX3.js";
import { T as Textarea } from "../chunks/Textarea.Cu_cE7Hq.js";
import { A } from "../chunks/A.XuSt3J-W.js";
import { P } from "../chunks/P.CbSbQedY.js";
var root_3$5 = template(`<button><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path></svg> <span class="sr-only">Close drawer</span></button>`);
var root$8 = template(`<div><!> <!></div>`);
function Drawerhead($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "closeIcon",
    "children",
    "buttonClass",
    "svgClass",
    "class"
  ]);
  const $$d = derived(drawerhead), base = derived(() => get($$d).base), button = derived(() => get($$d).button), svg = derived(() => get($$d).svg);
  var div = root$8();
  const class_derived = derived(() => get(base)({ className: $$props.class }));
  var node = child(div);
  if_block(node, () => $$props.children, ($$anchor2) => {
    var fragment = comment();
    var node_1 = first_child(fragment);
    snippet(node_1, () => $$props.children);
    append($$anchor2, fragment);
  });
  var node_2 = sibling(node, 2);
  if_block(
    node_2,
    () => $$props.closeIcon,
    ($$anchor2) => {
      var fragment_1 = comment();
      var node_3 = first_child(fragment_1);
      snippet(node_3, () => $$props.closeIcon);
      append($$anchor2, fragment_1);
    },
    ($$anchor2) => {
      var button_1 = root_3$5();
      let attributes;
      var svg_1 = child(button_1);
      const class_derived_1 = derived(() => get(svg)({ class: $$props.svgClass }));
      next(2);
      reset(button_1);
      template_effect(() => {
        attributes = set_attributes(button_1, attributes, {
          type: "button",
          ...restProps,
          class: get(button)({ class: $$props.buttonClass })
        });
        set_svg_class(svg_1, get(class_derived_1));
      });
      append($$anchor2, button_1);
    }
  );
  reset(div);
  template_effect(() => set_class(div, get(class_derived)));
  append($$anchor, div);
  pop();
}
var root_1$1 = ns_template(`<title> </title>`);
var root_2$6 = ns_template(`<desc> </desc>`);
var root$7 = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M12.512 8.72a2.46 2.46 0 0 1 3.479 0 2.461 2.461 0 0 1 0 3.479l-.004.005-1.094 1.08a.998.998 0 0 0-.194-.272l-3-3a1 1 0 0 0-.272-.193l1.085-1.1Zm-2.415 2.445L7.28 14.017a1 1 0 0 0-.289.702v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .703-.288l2.851-2.816a.995.995 0 0 1-.26-.189l-3-3a.998.998 0 0 1-.19-.26Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M7 3a1 1 0 0 1 1 1v1h3V4a1 1 0 1 1 2 0v1h3V4a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1V4a1 1 0 0 1 1-1Zm10.67 8H19v8H5v-8h3.855l.53-.537a1 1 0 0 1 .87-.285c.097.015.233.13.277.087.045-.043-.073-.18-.09-.276a1 1 0 0 1 .274-.873l1.09-1.104a3.46 3.46 0 0 1 4.892 0l.001.002A3.461 3.461 0 0 1 17.67 11Z" clip-rule="evenodd"></path></svg>`);
function CalendarEditSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "calendar edit solid"), restProps = rest_props($$props, [
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
  var svg = root$7();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$1();
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
    var desc_1 = root_2$6();
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
var root_1 = ns_template(`<title> </title>`);
var root_2$5 = ns_template(`<desc> </desc>`);
var root$6 = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path></svg>`);
function UserAddOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "user add outline"), restProps = rest_props($$props, [
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
  var svg = root$6();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1();
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
const __vite_glob_0_0 = '<script lang="ts">\n  import { Button, Drawer, uiHelpers, Drawerhead, Label, Input, Textarea, P, A } from "$lib";\n  import { InfoCircleSolid } from "flowbite-svelte-icons";\n  const drawer = uiHelpers();\n  let drawerStatus = $state(false);\n  const closeDrawer = drawer.close;\n  $effect(() => {\n    drawerStatus = drawer.isOpen;\n  });\n<\/script>\n\n<div class="text-center">\n  <Button onclick={drawer.toggle}>Show navigation</Button>\n</div>\n<Drawer {drawerStatus} {closeDrawer}>\n  <Drawerhead onclick={closeDrawer} class="mb-4">\n    <h5 id="drawer-label" class="inline-flex items-center text-lg font-semibold text-gray-500 dark:text-gray-400">\n      <InfoCircleSolid class="me-2.5 h-5 w-5" />Contact us\n    </h5>\n  </Drawerhead>\n  <form action="#" class="mb-6">\n    <div class="mb-6">\n      <Label for="email" class="mb-2 block">Your email</Label>\n      <Input id="email" name="email" required placeholder="name@company.com" />\n    </div>\n    <div class="mb-6">\n      <Label for="subject" class="mb-2 block">Subject</Label>\n      <Input id="subject" name="subject" required placeholder="Let us know how we can help you" />\n    </div>\n    <div class="mb-6">\n      <Label for="message" class="mb-2">Your message</Label>\n      <Textarea id="message" placeholder="Your message..." rows={4} name="message" />\n    </div>\n    <Button type="submit" class="w-full">Send message</Button>\n  </form>\n  <P class="mb-2 text-sm text-gray-500 dark:text-gray-400">\n    <A href="/" class="text-primary-600 hover:underline dark:text-primary-500">info@company.com</A>\n  </P>\n  <P class="text-sm text-gray-500 dark:text-gray-400">\n    <A href="/" class="text-primary-600 hover:underline dark:text-primary-500">212-456-7890</A>\n  </P>\n</Drawer>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Button, Drawer, Drawerhead, uiHelpers, Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper } from "$lib";\n  import { InfoCircleSolid, ChartOutline, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditSolid, ShoppingBagSolid } from "flowbite-svelte-icons";\n  const drawer = uiHelpers();\n  let drawerStatus = $state(false);\n  const closeDrawer = drawer.close;\n  $effect(() => {\n    drawerStatus = drawer.isOpen;\n  });\n  let spanClass = "flex-1 ms-3 whitespace-nowrap";\n<\/script>\n\n<div class="text-center">\n  <Button onclick={drawer.toggle}>Show navigation</Button>\n</div>\n<Drawer {drawerStatus} {closeDrawer} class="bg-gray-50">\n  <Drawerhead onclick={closeDrawer} class="mb-4">\n    <h5 id="drawer-label" class="inline-flex items-center text-xl font-semibold text-gray-500 dark:text-gray-400">\n      <InfoCircleSolid class="me-2.5 h-5 w-5" />Menu\n    </h5>\n  </Drawerhead>\n  <Sidebar class="p-2" divClass="p-0 m-0">\n    <SidebarGroup>\n      <SidebarItem label="Dashboard">\n        {#snippet iconSlot()}\n          <ChartOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarDropdownWrapper label="E-commerce" btnClass="p-2">\n        {#snippet iconSlot()}\n          <ShoppingBagSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        <SidebarItem label="Products" />\n        <SidebarItem label="Billing" />\n        <SidebarItem label="Invoice" />\n      </SidebarDropdownWrapper>\n      <SidebarItem label="Drawer" href="/components/drawer" {spanClass}>\n        {#snippet iconSlot()}\n          <GridSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Inbox" {spanClass} href="/">\n        {#snippet iconSlot()}\n          <MailBoxSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n        {#snippet subtext()}\n          <span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Users">\n        {#snippet iconSlot()}\n          <UserSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Sign In">\n        {#snippet iconSlot()}\n          <ArrowRightToBracketOutline class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n      <SidebarItem label="Sign Up">\n        {#snippet iconSlot()}\n          <EditSolid class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />\n        {/snippet}\n      </SidebarItem>\n    </SidebarGroup>\n  </Sidebar>\n</Drawer>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Button, Drawer, uiHelpers, Drawerhead, Label, Input, Textarea } from "$lib";\n  import { InfoCircleSolid, UserAddOutline, CalendarEditSolid } from "flowbite-svelte-icons";\n  const drawer = uiHelpers();\n  let drawerStatus = $state(false);\n  const closeDrawer = drawer.close;\n  $effect(() => {\n    drawerStatus = drawer.isOpen;\n  });\n<\/script>\n\n<div class="text-center">\n  <Button onclick={drawer.toggle}>Show navigation</Button>\n</div>\n<Drawer {drawerStatus} {closeDrawer}>\n  <Drawerhead onclick={closeDrawer} class="mb-4">\n    <h5 id="drawer-label" class="inline-flex items-center text-lg font-semibold text-gray-500 dark:text-gray-400">\n      <InfoCircleSolid class="me-2.5 h-5 w-5" />New event\n    </h5>\n  </Drawerhead>\n  <form action="#" class="mb-6">\n    <div class="mb-6">\n      <Label for="title" class="mb-2 block">Title</Label>\n      <Input id="title" name="title" required placeholder="Apple Keynote" />\n    </div>\n    <div class="mb-6">\n      <Label for="description" class="mb-2">Description</Label>\n      <Textarea id="message" placeholder="Write event description..." rows={4} name="message" />\n    </div>\n    <div class="mb-6">\n      <Input id="date" name="date" required type="date" />\n    </div>\n    <div class="mb-4">\n      <div class="relative">\n        <Input id="search" placeholder="Add guest email" class="p-3" />\n        <Button class="absolute bottom-2 end-2 inline-flex items-center rounded-lg bg-primary-700 px-3 py-1 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" type="submit">\n          <UserAddOutline class="me-1.5 h-3 w-3 text-white" />Add\n        </Button>\n      </div>\n    </div>\n    <div class="mb-4 flex -space-x-4 rtl:space-x-reverse">\n      <img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-1.webp" alt="" />\n      <img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-2.webp" alt="" />\n      <img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-3.webp" alt="" />\n      <img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-4.webp" alt="" />\n    </div>\n    <Button type="submit" class="w-full">\n      <CalendarEditSolid class="me-2.5 h-3.5 w-3.5 text-white" /> Create event\n    </Button>\n  </form>\n</Drawer>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Button, Drawer, Drawerhead, uiHelpers } from "$lib";\n  import { InfoCircleSolid } from "flowbite-svelte-icons";\n  const drawerBackdrop = uiHelpers();\n  let drawerStatusBackdrop = $state(false);\n  const closeDrawerBackdrop = drawerBackdrop.close;\n\n  $effect(() => {\n    drawerStatusBackdrop = drawerBackdrop.isOpen;\n  });\n  let offsetClass = $state("");\n  const changeClass = () => {\n    offsetClass = offsetClass === "" ? "top-16 h-screen start-0" : "";\n  };\n<\/script>\n\n<div class="mb-4 text-center">\n  <Button onclick={drawerBackdrop.toggle}>Show drawer</Button>\n</div>\n<Drawer class={offsetClass} drawerStatus={drawerStatusBackdrop} closeDrawer={closeDrawerBackdrop}>\n  <Drawerhead onclick={closeDrawerBackdrop} class="mb-4">\n    <h5 id="drawer-label" class="inline-flex items-center text-xl font-semibold text-gray-500 dark:text-gray-400">\n      <InfoCircleSolid class="me-2.5 h-5 w-5" />Drawer\n    </h5>\n  </Drawerhead>\n  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">\n    Offset: {offsetClass ? offsetClass : "none"}\n  </p>\n</Drawer>\n<div class="flex justify-center gap-2">\n  <Button color="green" onclick={changeClass}>{offsetClass ? "Remove offset" : "Add offset"}</Button>\n</div>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Button, Drawer, Drawerhead, uiHelpers } from "$lib";\n  import { InfoCircleSolid, ArrowRightOutline } from "flowbite-svelte-icons";\n  const drawerMouseEnter = uiHelpers();\n  let drawerStatusMouseEnter = $state(false);\n  const closeDrawerMouseEnter = drawerMouseEnter.close;\n  $effect(() => {\n    drawerStatusMouseEnter = drawerMouseEnter.isOpen;\n  });\n<\/script>\n\n<div class="text-center">\n  <Button onmouseenter={drawerMouseEnter.toggle}>Show drawer</Button>\n</div>\n\n<Drawer drawerStatus={drawerStatusMouseEnter} closeDrawer={closeDrawerMouseEnter}>\n  <Drawerhead onclick={closeDrawerMouseEnter} class="mb-4">\n    <h5 id="drawer-label" class="inline-flex items-center text-xl font-semibold text-gray-500 dark:text-gray-400">\n      <InfoCircleSolid class="me-2.5 h-5 w-5" />Info\n    </h5>\n  </Drawerhead>\n  <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">\n    Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 underline hover:no-underline dark:text-primary-500">limited-time sale</a>\n    for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.\n  </p>\n  <div class="grid grid-cols-2 gap-4">\n    <Button color="light" href="/">Learn more</Button>\n    <Button href="/" class="px-4">Get access <ArrowRightOutline class="ms-2 h-3.5 w-3.5" /></Button>\n  </div>\n</Drawer>\n';
const __vite_glob_0_5 = '<script>\n  import { Drawer, Drawerhead, Button, uiHelpers } from "$lib";\n  import { InfoCircleSolid } from "flowbite-svelte-icons";\n  const drawer = uiHelpers();\n  let drawerStatus = $state(false);\n  const closeDrawer = drawer.close;\n  $effect(() => {\n    drawerStatus = drawer.isOpen;\n  });\n<\/script>\n';
var root_3$4 = template(`<h5 id="drawer-label" class="inline-flex items-center text-xl font-semibold text-gray-500 dark:text-gray-400"><!>Menu</h5>`);
var root_8$1 = template(`<!> <!> <!>`, 1);
var root_10 = template(`<span class="ms-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">Pro</span>`);
var root_12 = template(`<span class="ms-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-primary-200 p-3 text-sm font-medium text-primary-600 dark:bg-primary-900 dark:text-primary-200">3</span>`);
var root_5$2 = template(`<!> <!> <!> <!> <!> <!> <!>`, 1);
var root_2$4 = template(`<!> <!>`, 1);
var root$5 = template(`<div class="text-center"><!></div> <!>`, 1);
function DrawerNavigation($$anchor, $$props) {
  push($$props, true);
  const drawer = uiHelpers();
  let drawerStatus = state(false);
  const closeDrawer = drawer.close;
  user_effect(() => {
    set(drawerStatus, proxy(drawer.isOpen));
  });
  let spanClass = "flex-1 ms-3 whitespace-nowrap";
  var fragment = root$5();
  var div = first_child(fragment);
  var node = child(div);
  Button(node, {
    get onclick() {
      return drawer.toggle;
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Show navigation");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  reset(div);
  var node_1 = sibling(div, 2);
  Drawer(node_1, {
    get drawerStatus() {
      return get(drawerStatus);
    },
    closeDrawer,
    class: "bg-gray-50",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_2$4();
      var node_2 = first_child(fragment_1);
      Drawerhead(node_2, {
        onclick: closeDrawer,
        class: "mb-4",
        children: ($$anchor3, $$slotProps2) => {
          var h5 = root_3$4();
          var node_3 = child(h5);
          InfoCircleSolid(node_3, { class: "me-2.5 h-5 w-5" });
          next();
          reset(h5);
          append($$anchor3, h5);
        },
        $$slots: { default: true }
      });
      var node_4 = sibling(node_2, 2);
      Sidebar(node_4, {
        class: "p-2",
        divClass: "p-0 m-0",
        children: ($$anchor3, $$slotProps2) => {
          SidebarGroup($$anchor3, {
            children: ($$anchor4, $$slotProps3) => {
              var fragment_3 = root_5$2();
              var node_5 = first_child(fragment_3);
              {
                const iconSlot = ($$anchor5) => {
                  ChartOutline($$anchor5, {
                    class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  });
                };
                SidebarItem(node_5, {
                  label: "Dashboard",
                  iconSlot,
                  $$slots: { iconSlot: true }
                });
              }
              var node_6 = sibling(node_5, 2);
              {
                const iconSlot = ($$anchor5) => {
                  ShoppingBagSolid($$anchor5, {
                    class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  });
                };
                SidebarDropdownWrapper(node_6, {
                  label: "E-commerce",
                  btnClass: "p-2",
                  iconSlot,
                  children: ($$anchor5, $$slotProps4) => {
                    var fragment_6 = root_8$1();
                    var node_7 = first_child(fragment_6);
                    SidebarItem(node_7, { label: "Products" });
                    var node_8 = sibling(node_7, 2);
                    SidebarItem(node_8, { label: "Billing" });
                    var node_9 = sibling(node_8, 2);
                    SidebarItem(node_9, { label: "Invoice" });
                    append($$anchor5, fragment_6);
                  },
                  $$slots: { iconSlot: true, default: true }
                });
              }
              var node_10 = sibling(node_6, 2);
              {
                const iconSlot = ($$anchor5) => {
                  GridSolid($$anchor5, {
                    class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  });
                };
                const subtext = ($$anchor5) => {
                  var span = root_10();
                  append($$anchor5, span);
                };
                SidebarItem(node_10, {
                  label: "Drawer",
                  href: "/components/drawer",
                  spanClass,
                  iconSlot,
                  subtext,
                  $$slots: { iconSlot: true, subtext: true }
                });
              }
              var node_11 = sibling(node_10, 2);
              {
                const iconSlot = ($$anchor5) => {
                  MailBoxSolid($$anchor5, {
                    class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  });
                };
                const subtext = ($$anchor5) => {
                  var span_1 = root_12();
                  append($$anchor5, span_1);
                };
                SidebarItem(node_11, {
                  label: "Inbox",
                  spanClass,
                  href: "/",
                  iconSlot,
                  subtext,
                  $$slots: { iconSlot: true, subtext: true }
                });
              }
              var node_12 = sibling(node_11, 2);
              {
                const iconSlot = ($$anchor5) => {
                  UserSolid($$anchor5, {
                    class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  });
                };
                SidebarItem(node_12, {
                  label: "Users",
                  iconSlot,
                  $$slots: { iconSlot: true }
                });
              }
              var node_13 = sibling(node_12, 2);
              {
                const iconSlot = ($$anchor5) => {
                  ArrowRightToBracketOutline($$anchor5, {
                    class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  });
                };
                SidebarItem(node_13, {
                  label: "Sign In",
                  iconSlot,
                  $$slots: { iconSlot: true }
                });
              }
              var node_14 = sibling(node_13, 2);
              {
                const iconSlot = ($$anchor5) => {
                  EditSolid($$anchor5, {
                    class: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  });
                };
                SidebarItem(node_14, {
                  label: "Sign Up",
                  iconSlot,
                  $$slots: { iconSlot: true }
                });
              }
              append($$anchor4, fragment_3);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
  pop();
}
var root_3$3 = template(`<h5 id="drawer-label" class="inline-flex items-center text-xl font-semibold text-gray-500 dark:text-gray-400"><!>Drawer</h5>`);
var root_2$3 = template(`<!> <p class="mb-6 text-sm text-gray-500 dark:text-gray-400"> </p>`, 1);
var root$4 = template(`<div class="mb-4 text-center"><!></div> <!> <div class="flex justify-center gap-2"><!></div>`, 1);
function Offset($$anchor, $$props) {
  push($$props, true);
  const drawerBackdrop = uiHelpers();
  let drawerStatusBackdrop = state(false);
  const closeDrawerBackdrop = drawerBackdrop.close;
  user_effect(() => {
    set(drawerStatusBackdrop, proxy(drawerBackdrop.isOpen));
  });
  let offsetClass = state("");
  const changeClass = () => {
    set(offsetClass, proxy(get(offsetClass) === "" ? "top-16 h-screen start-0" : ""));
  };
  var fragment = root$4();
  var div = first_child(fragment);
  var node = child(div);
  Button(node, {
    get onclick() {
      return drawerBackdrop.toggle;
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Show drawer");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  reset(div);
  var node_1 = sibling(div, 2);
  Drawer(node_1, {
    get class() {
      return get(offsetClass);
    },
    get drawerStatus() {
      return get(drawerStatusBackdrop);
    },
    closeDrawer: closeDrawerBackdrop,
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_2$3();
      var node_2 = first_child(fragment_1);
      Drawerhead(node_2, {
        onclick: closeDrawerBackdrop,
        class: "mb-4",
        children: ($$anchor3, $$slotProps2) => {
          var h5 = root_3$3();
          var node_3 = child(h5);
          InfoCircleSolid(node_3, { class: "me-2.5 h-5 w-5" });
          next();
          reset(h5);
          append($$anchor3, h5);
        },
        $$slots: { default: true }
      });
      var p = sibling(node_2, 2);
      var text_1 = child(p);
      reset(p);
      template_effect(() => set_text(text_1, `Offset: ${(get(offsetClass) ? get(offsetClass) : "none") ?? ""}`));
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var div_1 = sibling(node_1, 2);
  var node_4 = child(div_1);
  Button(node_4, {
    color: "green",
    onclick: changeClass,
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text();
      template_effect(() => set_text(text_2, get(offsetClass) ? "Remove offset" : "Add offset"));
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  reset(div_1);
  append($$anchor, fragment);
  pop();
}
var root_3$2 = template(`<h5 id="drawer-label" class="inline-flex items-center text-xl font-semibold text-gray-500 dark:text-gray-400"><!>Info</h5>`);
var root_5$1 = template(`Get access <!>`, 1);
var root_2$2 = template(`<!> <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">Supercharge your hiring by taking advantage of our <a href="/" class="text-primary-600 underline hover:no-underline dark:text-primary-500">limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.</p> <div class="grid grid-cols-2 gap-4"><!> <!></div>`, 1);
var root$3 = template(`<div class="text-center"><!></div> <!>`, 1);
function Onmouseenter($$anchor, $$props) {
  push($$props, true);
  const drawerMouseEnter = uiHelpers();
  let drawerStatusMouseEnter = state(false);
  const closeDrawerMouseEnter = drawerMouseEnter.close;
  user_effect(() => {
    set(drawerStatusMouseEnter, proxy(drawerMouseEnter.isOpen));
  });
  var fragment = root$3();
  var div = first_child(fragment);
  var node = child(div);
  Button(node, {
    get onmouseenter() {
      return drawerMouseEnter.toggle;
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Show drawer");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  reset(div);
  var node_1 = sibling(div, 2);
  Drawer(node_1, {
    get drawerStatus() {
      return get(drawerStatusMouseEnter);
    },
    closeDrawer: closeDrawerMouseEnter,
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_2$2();
      var node_2 = first_child(fragment_1);
      Drawerhead(node_2, {
        onclick: closeDrawerMouseEnter,
        class: "mb-4",
        children: ($$anchor3, $$slotProps2) => {
          var h5 = root_3$2();
          var node_3 = child(h5);
          InfoCircleSolid(node_3, { class: "me-2.5 h-5 w-5" });
          next();
          reset(h5);
          append($$anchor3, h5);
        },
        $$slots: { default: true }
      });
      var div_1 = sibling(node_2, 4);
      var node_4 = child(div_1);
      Button(node_4, {
        color: "light",
        href: "/",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_1 = text("Learn more");
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
      var node_5 = sibling(node_4, 2);
      Button(node_5, {
        href: "/",
        class: "px-4",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var fragment_2 = root_5$1();
          var node_6 = sibling(first_child(fragment_2));
          ArrowRightOutline(node_6, { class: "ms-2 h-3.5 w-3.5" });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      reset(div_1);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
  pop();
}
var root_3$1 = template(`<h5 id="drawer-label" class="inline-flex items-center text-lg font-semibold text-gray-500 dark:text-gray-400"><!>Contact us</h5>`);
var root_2$1 = template(`<!> <form action="#" class="mb-6"><div class="mb-6"><!> <!></div> <div class="mb-6"><!> <!></div> <div class="mb-6"><!> <!></div> <!></form> <!> <!>`, 1);
var root$2 = template(`<div class="text-center"><!></div> <!>`, 1);
function ContactForm($$anchor, $$props) {
  push($$props, true);
  const drawer = uiHelpers();
  let drawerStatus = state(false);
  const closeDrawer = drawer.close;
  user_effect(() => {
    set(drawerStatus, proxy(drawer.isOpen));
  });
  var fragment = root$2();
  var div = first_child(fragment);
  var node = child(div);
  Button(node, {
    get onclick() {
      return drawer.toggle;
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Show navigation");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  reset(div);
  var node_1 = sibling(div, 2);
  Drawer(node_1, {
    get drawerStatus() {
      return get(drawerStatus);
    },
    closeDrawer,
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_2$1();
      var node_2 = first_child(fragment_1);
      Drawerhead(node_2, {
        onclick: closeDrawer,
        class: "mb-4",
        children: ($$anchor3, $$slotProps2) => {
          var h5 = root_3$1();
          var node_3 = child(h5);
          InfoCircleSolid(node_3, { class: "me-2.5 h-5 w-5" });
          next();
          reset(h5);
          append($$anchor3, h5);
        },
        $$slots: { default: true }
      });
      var form = sibling(node_2, 2);
      var div_1 = child(form);
      var node_4 = child(div_1);
      Label(node_4, {
        for: "email",
        class: "mb-2 block",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_1 = text("Your email");
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
      var node_5 = sibling(node_4, 2);
      Input(node_5, {
        id: "email",
        name: "email",
        required: true,
        placeholder: "name@company.com"
      });
      reset(div_1);
      var div_2 = sibling(div_1, 2);
      var node_6 = child(div_2);
      Label(node_6, {
        for: "subject",
        class: "mb-2 block",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_2 = text("Subject");
          append($$anchor3, text_2);
        },
        $$slots: { default: true }
      });
      var node_7 = sibling(node_6, 2);
      Input(node_7, {
        id: "subject",
        name: "subject",
        required: true,
        placeholder: "Let us know how we can help you"
      });
      reset(div_2);
      var div_3 = sibling(div_2, 2);
      var node_8 = child(div_3);
      Label(node_8, {
        for: "message",
        class: "mb-2",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_3 = text("Your message");
          append($$anchor3, text_3);
        },
        $$slots: { default: true }
      });
      var node_9 = sibling(node_8, 2);
      Textarea(node_9, {
        id: "message",
        placeholder: "Your message...",
        rows: 4,
        name: "message"
      });
      reset(div_3);
      var node_10 = sibling(div_3, 2);
      Button(node_10, {
        type: "submit",
        class: "w-full",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_4 = text("Send message");
          append($$anchor3, text_4);
        },
        $$slots: { default: true }
      });
      reset(form);
      var node_11 = sibling(form, 2);
      P(node_11, {
        class: "mb-2 text-sm text-gray-500 dark:text-gray-400",
        children: ($$anchor3, $$slotProps2) => {
          A($$anchor3, {
            href: "/",
            class: "text-primary-600 hover:underline dark:text-primary-500",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_5 = text("info@company.com");
              append($$anchor4, text_5);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      var node_12 = sibling(node_11, 2);
      P(node_12, {
        class: "text-sm text-gray-500 dark:text-gray-400",
        children: ($$anchor3, $$slotProps2) => {
          A($$anchor3, {
            href: "/",
            class: "text-primary-600 hover:underline dark:text-primary-500",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_6 = text("212-456-7890");
              append($$anchor4, text_6);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
  pop();
}
var root_3 = template(`<h5 id="drawer-label" class="inline-flex items-center text-lg font-semibold text-gray-500 dark:text-gray-400"><!>New event</h5>`);
var root_6 = template(`<!>Add`, 1);
var root_7$1 = template(`<!> Create event`, 1);
var root_2 = template(`<!> <form action="#" class="mb-6"><div class="mb-6"><!> <!></div> <div class="mb-6"><!> <!></div> <div class="mb-6"><!></div> <div class="mb-4"><div class="relative"><!> <!></div></div> <div class="mb-4 flex -space-x-4 rtl:space-x-reverse"><img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-1.webp" alt=""> <img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-2.webp" alt=""> <img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-3.webp" alt=""> <img class="h-8 w-8 rounded-full border-2 border-white dark:border-gray-800" src="/images/profile-picture-4.webp" alt=""></div> <!></form>`, 1);
var root$1 = template(`<div class="text-center"><!></div> <!>`, 1);
function FormElements($$anchor, $$props) {
  push($$props, true);
  const drawer = uiHelpers();
  let drawerStatus = state(false);
  const closeDrawer = drawer.close;
  user_effect(() => {
    set(drawerStatus, proxy(drawer.isOpen));
  });
  var fragment = root$1();
  var div = first_child(fragment);
  var node = child(div);
  Button(node, {
    get onclick() {
      return drawer.toggle;
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Show navigation");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  reset(div);
  var node_1 = sibling(div, 2);
  Drawer(node_1, {
    get drawerStatus() {
      return get(drawerStatus);
    },
    closeDrawer,
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_2();
      var node_2 = first_child(fragment_1);
      Drawerhead(node_2, {
        onclick: closeDrawer,
        class: "mb-4",
        children: ($$anchor3, $$slotProps2) => {
          var h5 = root_3();
          var node_3 = child(h5);
          InfoCircleSolid(node_3, { class: "me-2.5 h-5 w-5" });
          next();
          reset(h5);
          append($$anchor3, h5);
        },
        $$slots: { default: true }
      });
      var form = sibling(node_2, 2);
      var div_1 = child(form);
      var node_4 = child(div_1);
      Label(node_4, {
        for: "title",
        class: "mb-2 block",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_1 = text("Title");
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
      var node_5 = sibling(node_4, 2);
      Input(node_5, {
        id: "title",
        name: "title",
        required: true,
        placeholder: "Apple Keynote"
      });
      reset(div_1);
      var div_2 = sibling(div_1, 2);
      var node_6 = child(div_2);
      Label(node_6, {
        for: "description",
        class: "mb-2",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_2 = text("Description");
          append($$anchor3, text_2);
        },
        $$slots: { default: true }
      });
      var node_7 = sibling(node_6, 2);
      Textarea(node_7, {
        id: "message",
        placeholder: "Write event description...",
        rows: 4,
        name: "message"
      });
      reset(div_2);
      var div_3 = sibling(div_2, 2);
      var node_8 = child(div_3);
      Input(node_8, {
        id: "date",
        name: "date",
        required: true,
        type: "date"
      });
      reset(div_3);
      var div_4 = sibling(div_3, 2);
      var div_5 = child(div_4);
      var node_9 = child(div_5);
      Input(node_9, {
        id: "search",
        placeholder: "Add guest email",
        class: "p-3"
      });
      var node_10 = sibling(node_9, 2);
      Button(node_10, {
        class: "absolute bottom-2 end-2 inline-flex items-center rounded-lg bg-primary-700 px-3 py-1 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
        type: "submit",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_6();
          var node_11 = first_child(fragment_2);
          UserAddOutline(node_11, { class: "me-1.5 h-3 w-3 text-white" });
          next();
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      reset(div_5);
      reset(div_4);
      var node_12 = sibling(div_4, 4);
      Button(node_12, {
        type: "submit",
        class: "w-full",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_3 = root_7$1();
          var node_13 = first_child(fragment_3);
          CalendarEditSolid(node_13, { class: "me-2.5 h-3.5 w-3.5 text-white" });
          next();
          append($$anchor3, fragment_3);
        },
        $$slots: { default: true }
      });
      reset(form);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
  pop();
}
var root_8 = template(`<h5 id="drawer-label" class="inline-flex items-center text-xl font-semibold text-gray-500 dark:text-gray-400"><!> </h5>`);
var root_7 = template(`<!> <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">Content</p> <p class="mb-6 text-sm text-gray-500 dark:text-gray-400"> <br> </p>`, 1);
var root_5 = template(`<div class="text-center"><!></div> <!> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!></div>`, 1);
var root_19 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
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
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  const drawerTransition = uiHelpers();
  let drawerStatusTransition = state(false);
  const closeDrawerTransition = drawerTransition.close;
  user_effect(() => {
    set(drawerStatusTransition, proxy(drawerTransition.isOpen));
  });
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
  let selectedTransition = state("Fly");
  let currentTransition = derived(() => transitions.find((t) => t.name === get(selectedTransition)) || transitions[0]);
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
  let selectedPlacement = state("Left");
  let currentPlacement = derived(() => placements.find((p) => p.name === get(selectedPlacement)) || placements[0]);
  let backdropStatus = state(true);
  const changeBackdropStatus = () => {
    set(backdropStatus, !get(backdropStatus));
  };
  let outsideclickStatus = state(true);
  const changeOutsideclickStatus = () => {
    set(outsideclickStatus, !get(outsideclickStatus));
  };
  let generatedCode = derived(() => (() => {
    let props = [];
    if (!get(backdropStatus)) props.push(" backdrop={false}");
    if (!get(outsideclickStatus)) props.push(" activateClickOutside={false}");
    if (get(currentPlacement).width !== "default") props.push(` width="${get(currentPlacement).width}"`);
    if (get(currentTransition) !== transitions[0]) {
      props.push(` transition={${get(currentTransition).transition.name}}`);
      let paramValues = get(currentPlacement).placement === "left" ? get(currentTransition).params : get(currentPlacement).params;
      const paramsString = Object.entries(paramValues).map(([key, value]) => {
        if (typeof value === "function") {
          return `${key}:${value.name}`;
        }
        return `${key}:${value}`;
      }).join(",");
      props.push(` params={{${paramsString}}}`);
    }
    if (get(currentPlacement) !== placements[0]) {
      props.push(` placement="${get(currentPlacement).placement}"`);
    }
    const propsString = props.length > 0 ? props.map((prop2) => `
  ${prop2}`).join("") + "\n" : "";
    return `<Button onclick={drawer.toggle}>Drawer</Button>
<Drawer drawerStatus={drawerStatus} closeDrawer={closeDrawer}${propsString}>
  <Drawerhead onclick={closeDrawer} class="mb-4>
    <h5 id="drawer-label" class="inline-flex items-center text-xl font-semibold text-gray-500 dark:text-gray-400">
        <InfoCircleSolid class="me-2.5 h-5 w-5" />${get(selectedTransition)} drawer
      </h5>
  </Drawerhead>
    My Drawer
</Drawer>`;
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
      var text$1 = text("Drawer");
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
      var text_2 = text("Interactive Drawer Builder");
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
            return drawerTransition.toggle;
          },
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text("Drawer");
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        reset(div);
        var node_6 = sibling(div, 2);
        var params = derived(() => get(currentPlacement).placement === "left" ? get(currentTransition).params : get(currentPlacement).params);
        Drawer(node_6, {
          get drawerStatus() {
            return get(drawerStatusTransition);
          },
          closeDrawer: closeDrawerTransition,
          get transition() {
            return get(currentTransition).transition;
          },
          get placement() {
            return get(currentPlacement).placement;
          },
          get width() {
            return get(currentPlacement).width;
          },
          get params() {
            return get(params);
          },
          get backdrop() {
            return get(backdropStatus);
          },
          get activateClickOutside() {
            return get(outsideclickStatus);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_3 = root_7();
            var node_7 = first_child(fragment_3);
            Drawerhead(node_7, {
              onclick: closeDrawerTransition,
              class: "mb-4",
              children: ($$anchor4, $$slotProps3) => {
                var h5 = root_8();
                var node_8 = child(h5);
                InfoCircleSolid(node_8, { class: "me-2.5 h-5 w-5" });
                var text_4 = sibling(node_8);
                reset(h5);
                template_effect(() => set_text(text_4, `${get(selectedTransition) ?? ""} drawer`));
                append($$anchor4, h5);
              },
              $$slots: { default: true }
            });
            var p_1 = sibling(node_7, 4);
            var text_5 = child(p_1);
            var text_6 = sibling(text_5, 2);
            reset(p_1);
            template_effect(() => {
              set_text(text_5, `Backdrop: ${(get(backdropStatus) ? "true" : "false") ?? ""} `);
              set_text(text_6, ` Outsideclick: ${(get(outsideclickStatus) ? "true" : "false") ?? ""}`);
            });
            append($$anchor3, fragment_3);
          },
          $$slots: { default: true }
        });
        var div_1 = sibling(node_6, 2);
        var node_9 = child(div_1);
        Label(node_9, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_7 = text("Transition");
            append($$anchor3, text_7);
          },
          $$slots: { default: true }
        });
        var node_10 = sibling(node_9, 2);
        each(node_10, 17, () => transitions, index, ($$anchor3, transition) => {
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
              return get(transition).name;
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_8 = text();
              template_effect(() => set_text(text_8, get(transition).name));
              append($$anchor4, text_8);
            },
            $$slots: { default: true }
          });
        });
        reset(div_1);
        var div_2 = sibling(div_1, 2);
        var node_11 = child(div_2);
        Label(node_11, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text("Placement");
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        var node_12 = sibling(node_11, 2);
        each(node_12, 17, () => placements, index, ($$anchor3, placement) => {
          Radio($$anchor3, {
            labelClass: "w-16 my-1",
            name: "interactive_placement",
            get group() {
              return get(selectedPlacement);
            },
            set group($$value) {
              set(selectedPlacement, proxy($$value));
            },
            get value() {
              return get(placement).name;
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_10 = text();
              template_effect(() => set_text(text_10, get(placement).name));
              append($$anchor4, text_10);
            },
            $$slots: { default: true }
          });
        });
        reset(div_2);
        var div_3 = sibling(div_2, 2);
        var node_13 = child(div_3);
        Button(node_13, {
          class: "w-48",
          color: "primary",
          onclick: changeBackdropStatus,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_11 = text();
            template_effect(() => set_text(text_11, get(backdropStatus) ? "Hide backdrop" : "Show backdrop"));
            append($$anchor3, text_11);
          },
          $$slots: { default: true }
        });
        var node_14 = sibling(node_13, 2);
        Button(node_14, {
          class: "w-48",
          color: "secondary",
          onclick: changeOutsideclickStatus,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_12 = text();
            template_effect(() => set_text(text_12, get(outsideclickStatus) ? "Disable outsideclick" : "Enable outsideclick"));
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
        var fragment_11 = root_19();
        var div_4 = first_child(fragment_11);
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
        append($$anchor2, fragment_11);
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
