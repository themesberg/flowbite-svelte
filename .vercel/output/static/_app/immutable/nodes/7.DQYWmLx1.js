import { a as append, n as ns_template, b as text, t as template } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, g as getContext, c as child, r as reset, t as template_effect, s as sibling, b as get, a as pop, d as derived, n as next, f as first_child, a7 as set, a6 as state, u as user_effect } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { p as prop, i as if_block, r as rest_props, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { s as set_attribute, a as set_attributes, t as twMerge, B as Badge, b0 as badge, aC as fly, ab as linear, aD as blur, Z as slide, aE as scale, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { C as ClockSolid } from "../chunks/ClockSolid.BKM18pYA.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { C as CheckOutline } from "../chunks/CheckOutline.BnZaFmJc.js";
import { I as InfoCircleSolid } from "../chunks/InfoCircleSolid.DglZJiUU.js";
import { U as UserCircleSolid } from "../chunks/UserCircleSolid.C5EoQM_S.js";
import { I as Indicator } from "../chunks/Indicator.BIdmiP_T.js";
import { E as EnvelopeSolid } from "../chunks/EnvelopeSolid.D3NXeFbI.js";
var root_1$3 = ns_template(`<title> </title>`);
var root_2$1 = ns_template(`<desc> </desc>`);
var root$7 = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>`);
function CheckCircleOutline($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "check circle outline"), restProps = rest_props($$props, [
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
  var svg = root$7();
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
const __vite_glob_0_0 = '<script lang="ts">\n  import { Badge } from "$lib";\n  import { CheckOutline, InfoCircleSolid, UserCircleSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="flex justify-center gap-2">\n  <Badge color="gray" rounded large class="!p-1 !font-semibold">\n    <CheckOutline class="h-4 w-4" />\n    <span class="sr-only">Icon description</span>\n  </Badge>\n  <Badge rounded large class="!p-1 !font-semibold">\n    <InfoCircleSolid class="h-4 w-4 text-primary-600 dark:text-primary-400" />\n    <span class="sr-only">Icon description</span>\n  </Badge>\n  <Badge rounded large color="blue" class="!p-1 !font-semibold">\n    <UserCircleSolid class="h-4 w-4 text-blue-600 dark:text-blue-400" />\n    <span class="sr-only">Icon description</span>\n  </Badge>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Badge, Button } from "$lib";\n<\/script>\n\n<div class="flex justify-center">\n  <Button>\n    Messages\n    <Badge rounded class="ms-2 h-4 w-4 bg-white p-0 font-semibold text-primary-800 dark:bg-white dark:text-primary-800">2</Badge>\n  </Button>\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Badge } from "$lib";\n  import { CheckCircleOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="flex h-8 justify-center">\n  <Badge dismissable>\n    Default\n    {#snippet icon()}\n      <CheckCircleOutline class="h-5 w-5" />\n    {/snippet}\n  </Badge>\n</div>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Badge } from "$lib";\n  let eventStatus = $state(true);\n  function handleClose() {\n    console.log("Badge dismissed");\n    alert("Badge dismissed");\n    eventStatus = false;\n  }\n<\/script>\n\n<div class="flex h-8 justify-center">\n  <Badge dismissable large onclick={handleClose} bind:badgeStatus={eventStatus}>Default</Badge>\n</div>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Badge, type BadgeProps } from "$lib";\n\n  setInterval(handleHover, 500);\n\n  let color = $state("primary") as BadgeProps["color"];\n  function handleHover() {\n    color = color === "primary" ? "secondary" : "primary";\n  }\n<\/script>\n\n<Badge large {color}>Blinking badge</Badge>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { Button, Indicator } from "$lib";\n  import { EnvelopeSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="flex justify-center gap-4">\n  <Button class="relative" size="sm">\n    <EnvelopeSolid class="text-white dark:text-white" />\n    <span class="sr-only">Notifications</span>\n    <Indicator color="blue" border size="xl" placement="top-right" class="text-xs font-bold">18</Indicator>\n  </Button>\n\n  <Button class="relative" size="sm">\n    <EnvelopeSolid class="text-white dark:text-white" />\n    <span class="sr-only">Notifications</span>\n    <Indicator color="red" border size="xl" placement="top-right" class="text-xs font-bold">20</Indicator>\n  </Button>\n\n  <Button class="relative" size="sm">\n    <EnvelopeSolid class="text-white dark:text-white" />\n    <span class="sr-only">Notifications</span>\n    <Indicator color="sky" border size="xl" placement="bottom-right" class="text-xs font-bold">20</Indicator>\n  </Button>\n</div>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { Badge, Button } from "$lib";\n  let openBadgeStatus = $state(false);\n  function openBadge() {\n    openBadgeStatus = true;\n  }\n<\/script>\n\n<Button onclick={openBadge}>Open badge</Button>\n<Badge class="ml-4" color="blue" dismissable large bind:badgeStatus={openBadgeStatus}>Default</Badge>\n';
const __vite_glob_0_7 = '<script>\n  import { Badge } from "svelte-5-ui-lib";\n  import { ClockSolid } from "flowbite-svelte-icons";\n<\/script>\n';
var root_1$2 = template(`Messages <!>`, 1);
var root$6 = template(`<div class="flex justify-center"><!></div>`);
function ButtonWithBadge($$anchor) {
  var div = root$6();
  var node = child(div);
  Button(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment = root_1$2();
      var node_1 = sibling(first_child(fragment));
      Badge(node_1, {
        rounded: true,
        class: "ms-2 h-4 w-4 bg-white p-0 font-semibold text-primary-800 dark:bg-white dark:text-primary-800",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("2");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root$5 = template(`<div class="flex h-8 justify-center"><!></div>`);
function DismissingWithCustomIcon($$anchor) {
  var div = root$5();
  var node = child(div);
  {
    const icon = ($$anchor2) => {
      CheckCircleOutline($$anchor2, { class: "h-5 w-5" });
    };
    Badge(node, {
      dismissable: true,
      icon,
      children: ($$anchor2, $$slotProps) => {
        next();
        var text$1 = text("Default");
        append($$anchor2, text$1);
      },
      $$slots: { icon: true, default: true }
    });
  }
  reset(div);
  append($$anchor, div);
}
var root$4 = template(`<div class="flex h-8 justify-center"><!></div>`);
function DismissingWithEvents($$anchor) {
  let eventStatus = state(true);
  function handleClose() {
    console.log("Badge dismissed");
    alert("Badge dismissed");
    set(eventStatus, false);
  }
  var div = root$4();
  var node = child(div);
  Badge(node, {
    dismissable: true,
    large: true,
    onclick: handleClose,
    get badgeStatus() {
      return get(eventStatus);
    },
    set badgeStatus($$value) {
      set(eventStatus, proxy($$value));
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Default");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_1$1 = template(`<!> <span class="sr-only">Icon description</span>`, 1);
var root_2 = template(`<!> <span class="sr-only">Icon description</span>`, 1);
var root_3$1 = template(`<!> <span class="sr-only">Icon description</span>`, 1);
var root$3 = template(`<div class="flex justify-center gap-2"><!> <!> <!></div>`);
function BadgeWithIconOnly($$anchor) {
  var div = root$3();
  var node = child(div);
  Badge(node, {
    color: "gray",
    rounded: true,
    large: true,
    class: "!p-1 !font-semibold",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$1();
      var node_1 = first_child(fragment);
      CheckOutline(node_1, { class: "h-4 w-4" });
      next(2);
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node, 2);
  Badge(node_2, {
    rounded: true,
    large: true,
    class: "!p-1 !font-semibold",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_2();
      var node_3 = first_child(fragment_1);
      InfoCircleSolid(node_3, {
        class: "h-4 w-4 text-primary-600 dark:text-primary-400"
      });
      next(2);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_2, 2);
  Badge(node_4, {
    rounded: true,
    large: true,
    color: "blue",
    class: "!p-1 !font-semibold",
    children: ($$anchor2, $$slotProps) => {
      var fragment_2 = root_3$1();
      var node_5 = first_child(fragment_2);
      UserCircleSolid(node_5, {
        class: "h-4 w-4 text-blue-600 dark:text-blue-400"
      });
      next(2);
      append($$anchor2, fragment_2);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_1 = template(`<!> <span class="sr-only">Notifications</span> <!>`, 1);
var root_3 = template(`<!> <span class="sr-only">Notifications</span> <!>`, 1);
var root_5$1 = template(`<!> <span class="sr-only">Notifications</span> <!>`, 1);
var root$2 = template(`<div class="flex justify-center gap-4"><!> <!> <!></div>`);
function NotificationBadge($$anchor) {
  var div = root$2();
  var node = child(div);
  Button(node, {
    class: "relative",
    size: "sm",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1();
      var node_1 = first_child(fragment);
      EnvelopeSolid(node_1, { class: "text-white dark:text-white" });
      var node_2 = sibling(node_1, 4);
      Indicator(node_2, {
        color: "blue",
        border: true,
        size: "xl",
        placement: "top-right",
        class: "text-xs font-bold",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("18");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var node_3 = sibling(node, 2);
  Button(node_3, {
    class: "relative",
    size: "sm",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_3();
      var node_4 = first_child(fragment_1);
      EnvelopeSolid(node_4, { class: "text-white dark:text-white" });
      var node_5 = sibling(node_4, 4);
      Indicator(node_5, {
        color: "red",
        border: true,
        size: "xl",
        placement: "top-right",
        class: "text-xs font-bold",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_1 = text("20");
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var node_6 = sibling(node_3, 2);
  Button(node_6, {
    class: "relative",
    size: "sm",
    children: ($$anchor2, $$slotProps) => {
      var fragment_2 = root_5$1();
      var node_7 = first_child(fragment_2);
      EnvelopeSolid(node_7, { class: "text-white dark:text-white" });
      var node_8 = sibling(node_7, 4);
      Indicator(node_8, {
        color: "sky",
        border: true,
        size: "xl",
        placement: "bottom-right",
        class: "text-xs font-bold",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_2 = text("20");
          append($$anchor3, text_2);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_2);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root$1 = template(`<!> <!>`, 1);
function OpeningBadge($$anchor) {
  let openBadgeStatus = state(false);
  function openBadge() {
    set(openBadgeStatus, true);
  }
  var fragment = root$1();
  var node = first_child(fragment);
  Button(node, {
    onclick: openBadge,
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Open badge");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Badge(node_1, {
    class: "ml-4",
    color: "blue",
    dismissable: true,
    large: true,
    get badgeStatus() {
      return get(openBadgeStatus);
    },
    set badgeStatus($$value) {
      set(openBadgeStatus, proxy($$value));
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Default");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
}
function DynamicColor($$anchor) {
  setInterval(handleHover, 500);
  let color = state("primary");
  function handleHover() {
    set(color, proxy(get(color) === "primary" ? "secondary" : "primary"));
  }
  Badge($$anchor, {
    large: true,
    get color() {
      return get(color);
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Blinking badge");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
}
var root_6 = template(`<!> My Badge`, 1);
var root_5 = template(`<div class="mb-4 h-10"><!></div> <div class="mb-4 h-12"><!></div> <div class="flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-4"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!> <!> <!> <!> <!> <!></div>`, 1);
var root_24 = template(`<div class="mb-8 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "badge";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/BadgeWithIconOnly.svelte": __vite_glob_0_0,
    "./examples/ButtonWithBadge.svelte": __vite_glob_0_1,
    "./examples/DismissingWithCustomIcon.svelte": __vite_glob_0_2,
    "./examples/DismissingWithEvents.svelte": __vite_glob_0_3,
    "./examples/DynamicColor.svelte": __vite_glob_0_4,
    "./examples/NotificationBadge.svelte": __vite_glob_0_5,
    "./examples/OpeningBadge.svelte": __vite_glob_0_6,
    "./examples/Setup.svelte": __vite_glob_0_7
  });
  const exampleArr = [
    {
      name: "Dismissing with custom icon",
      component: DismissingWithCustomIcon
    },
    {
      name: "Dismissing with events",
      component: DismissingWithEvents
    },
    {
      name: "Notification badge",
      component: NotificationBadge
    },
    {
      name: "Button with badge",
      component: ButtonWithBadge
    },
    {
      name: "Badge with icon only",
      component: BadgeWithIconOnly
    },
    {
      name: "Opening badge",
      component: OpeningBadge
    },
    {
      name: "Dynamic color",
      component: DynamicColor
    }
  ];
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  const colors = Object.keys(badge.variants.color);
  let color = state("primary");
  let badgeSize = state(false);
  const changeSize = () => {
    set(badgeSize, !get(badgeSize));
  };
  let badgeDismissable = state(false);
  const changeDismissable = () => {
    set(badgeDismissable, !get(badgeDismissable));
  };
  let badgeClass = state("");
  const changeClass = () => {
    set(badgeClass, proxy(get(badgeClass) === "" ? "w-40 p-2" : ""));
  };
  let badgeStatus2 = state(true);
  const changeStatus = () => {
    set(badgeStatus2, true);
  };
  let border = state(false);
  const changeBorder = () => {
    set(border, !get(border));
  };
  let rounded = state(false);
  const changeRounded = () => {
    set(rounded, !get(rounded));
  };
  let link = state("");
  const changeLink = () => {
    set(link, proxy(get(link) === "" ? "/" : ""));
  };
  let iconSlot = state(false);
  const changeIconSlot = () => {
    set(iconSlot, !get(iconSlot));
  };
  const transitions = [
    {
      name: "Fly",
      transition: fly,
      params: { duration: 500, easing: linear, x: 150 },
      color: "blue"
    },
    {
      name: "Blur",
      transition: blur,
      params: { duration: 500, easing: linear },
      color: "lime"
    },
    {
      name: "Slide",
      transition: slide,
      params: { duration: 500, easing: linear, x: -150 },
      color: "violet"
    },
    {
      name: "Scale",
      transition: scale,
      params: { duration: 500, easing: linear },
      color: "pink"
    }
  ];
  let selectedTransition = state("Fly");
  let currentTransition = derived(() => transitions.find((t) => t.name === get(selectedTransition)) || transitions[0]);
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(color) !== "primary") props.push(` color="${get(color)}"`);
    if (get(badgeSize)) props.push(" large");
    if (get(badgeDismissable)) props.push(" dismissable");
    if (get(badgeClass)) props.push(` class="${get(badgeClass)}"`);
    if (!get(badgeStatus2)) props.push(" badgeStatus={false}");
    if (get(border)) props.push(" border");
    if (get(link)) props.push(` href="${get(link)}"`);
    if (get(rounded)) props.push(" rounded");
    if (get(currentTransition) !== transitions[0] && get(badgeDismissable)) {
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
    if (get(iconSlot)) {
      return `<Badge${propsString}>
  <ClockSolid class="me-1.5 h-3 w-3" />
  My Badge
</Badge>`;
    } else {
      return `<Badge${propsString}>My Badge</Badge>`;
    }
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
      var text$1 = text("Badge");
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
      var text_2 = text("Interactive Badge Builder");
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
        Badge(node_5, {
          get color() {
            return get(color);
          },
          get large() {
            return get(badgeSize);
          },
          get dismissable() {
            return get(badgeDismissable);
          },
          get class() {
            return get(badgeClass);
          },
          get badgeStatus() {
            return get(badgeStatus2);
          },
          set badgeStatus($$value) {
            set(badgeStatus2, proxy($$value));
          },
          get border() {
            return get(border);
          },
          get rounded() {
            return get(rounded);
          },
          get transition() {
            return get(currentTransition).transition;
          },
          get params() {
            return get(currentTransition).params;
          },
          get href() {
            return get(link);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_3 = root_6();
            var node_6 = first_child(fragment_3);
            if_block(node_6, () => get(iconSlot), ($$anchor4) => {
              ClockSolid($$anchor4, { class: "my-1 me-1.5 h-2.5 w-2.5" });
            });
            next();
            append($$anchor3, fragment_3);
          },
          $$slots: { default: true }
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var node_7 = child(div_1);
        var disabled = derived(() => get(badgeStatus2) ? true : false);
        Button(node_7, {
          get disabled() {
            return get(disabled);
          },
          onclick: changeStatus,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text("Open badge");
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        reset(div_1);
        var div_2 = sibling(div_1, 2);
        var node_8 = child(div_2);
        Label(node_8, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_4 = text("Color");
            append($$anchor3, text_4);
          },
          $$slots: { default: true }
        });
        var node_9 = sibling(node_8, 2);
        each(node_9, 17, () => colors, index, ($$anchor3, colorOption) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "color",
            get group() {
              return get(color);
            },
            set group($$value) {
              set(color, proxy($$value));
            },
            get color() {
              return get(colorOption);
            },
            get value() {
              return get(colorOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_5 = text();
              template_effect(() => set_text(text_5, get(colorOption)));
              append($$anchor4, text_5);
            },
            $$slots: { default: true }
          });
        });
        reset(div_2);
        var div_3 = sibling(div_2, 2);
        var node_10 = child(div_3);
        Label(node_10, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_6 = text("Transition");
            append($$anchor3, text_6);
          },
          $$slots: { default: true }
        });
        var node_11 = sibling(node_10, 2);
        each(node_11, 17, () => transitions, index, ($$anchor3, transition) => {
          var disabled_1 = derived(() => get(badgeDismissable) ? false : true);
          var labelClass = derived(() => `w-16 my-1 ${(get(badgeDismissable) ? "" : "opacity-30 cursor-not-allowed") ?? ""}`);
          Radio($$anchor3, {
            get disabled() {
              return get(disabled_1);
            },
            get labelClass() {
              return get(labelClass);
            },
            name: "transition_interactive",
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
              var text_7 = text();
              template_effect(() => set_text(text_7, get(transition).name));
              append($$anchor4, text_7);
            },
            $$slots: { default: true }
          });
        });
        reset(div_3);
        var div_4 = sibling(div_3, 2);
        var node_12 = child(div_4);
        Button(node_12, {
          class: "w-40",
          color: "blue",
          onclick: changeSize,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_8 = text();
            template_effect(() => set_text(text_8, get(badgeSize) ? "Small" : "Large"));
            append($$anchor3, text_8);
          },
          $$slots: { default: true }
        });
        var node_13 = sibling(node_12, 2);
        Button(node_13, {
          class: "w-40",
          color: "green",
          onclick: changeDismissable,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text();
            template_effect(() => set_text(text_9, get(badgeDismissable) ? "Not dismissable" : "Dismissable"));
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        var node_14 = sibling(node_13, 2);
        Button(node_14, {
          class: "w-40",
          color: "purple",
          onclick: changeClass,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_10 = text();
            template_effect(() => set_text(text_10, get(badgeClass) ? "Remove class" : "Add class"));
            append($$anchor3, text_10);
          },
          $$slots: { default: true }
        });
        var node_15 = sibling(node_14, 2);
        Button(node_15, {
          class: "w-40",
          color: "yellow",
          onclick: changeBorder,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_11 = text();
            template_effect(() => set_text(text_11, get(border) ? "Remove border" : "Add border"));
            append($$anchor3, text_11);
          },
          $$slots: { default: true }
        });
        var node_16 = sibling(node_15, 2);
        Button(node_16, {
          class: "w-40",
          color: "dark",
          onclick: changeRounded,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_12 = text();
            template_effect(() => set_text(text_12, get(rounded) ? "Remove rounded" : "Add rounded"));
            append($$anchor3, text_12);
          },
          $$slots: { default: true }
        });
        var node_17 = sibling(node_16, 2);
        Button(node_17, {
          class: "w-40",
          color: "pink",
          onclick: changeLink,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_13 = text();
            template_effect(() => set_text(text_13, get(link) ? "Remove href" : "Add href"));
            append($$anchor3, text_13);
          },
          $$slots: { default: true }
        });
        var node_18 = sibling(node_17, 2);
        Button(node_18, {
          class: "w-40",
          color: "teal",
          onclick: changeIconSlot,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_14 = text();
            template_effect(() => set_text(text_14, get(iconSlot) ? "Remove icon" : "Add icon"));
            append($$anchor3, text_14);
          },
          $$slots: { default: true }
        });
        reset(div_4);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_19 = sibling(node_4, 2);
  H2(node_19, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_15 = text("Examples");
      append($$anchor2, text_15);
    },
    $$slots: { default: true }
  });
  var node_20 = sibling(node_19, 2);
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
    CodeWrapper(node_20, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_17 = root_24();
        var div_5 = first_child(fragment_17);
        var node_21 = child(div_5);
        Label(node_21, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_16 = text("Example");
            append($$anchor3, text_16);
          },
          $$slots: { default: true }
        });
        var node_22 = sibling(node_21, 2);
        each(node_22, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-[230px] my-1",
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
        var node_23 = sibling(div_5, 2);
        component(node_23, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_17);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_24 = sibling(node_20, 2);
  H2(node_24, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_18 = text("Component data");
      append($$anchor2, text_18);
    },
    $$slots: { default: true }
  });
  var node_25 = sibling(node_24, 2);
  CompoAttributesViewer(node_25, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
