import { Q as push, a1 as getContext, a0 as spread_attributes, W as attr, V as escape_html, S as pop, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like, X as stringify } from "../../../../chunks/index.js";
import { f as fly, b as blur, s as slide, c as scale } from "../../../../chunks/index3.js";
import { e as badge } from "../../../../chunks/theme.js";
import { B as Button, a as Badge } from "../../../../chunks/markdown.js";
import { l as linear } from "../../../../chunks/index4.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { C as ClockSolid } from "../../../../chunks/ClockSolid.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { twMerge } from "tailwind-merge";
import { C as CheckOutline } from "../../../../chunks/CheckOutline.js";
import { I as InfoCircleSolid } from "../../../../chunks/InfoCircleSolid.js";
import { U as UserCircleSolid } from "../../../../chunks/UserCircleSolid.js";
import { I as Indicator } from "../../../../chunks/Indicator.js";
import { E as EnvelopeSolid } from "../../../../chunks/EnvelopeSolid.js";
function CheckCircleOutline($$payload, $$props) {
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
    ariaLabel = "check circle outline",
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>`;
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
function ButtonWithBadge($$payload) {
  $$payload.out += `<div class="flex justify-center">`;
  Button($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Messages `;
      Badge($$payload2, {
        rounded: true,
        class: "ms-2 h-4 w-4 bg-white p-0 font-semibold text-primary-800 dark:bg-white dark:text-primary-800",
        children: ($$payload3) => {
          $$payload3.out += `<!---->2`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function DismissingWithCustomIcon($$payload) {
  $$payload.out += `<div class="flex h-8 justify-center">`;
  {
    let icon = function($$payload2) {
      CheckCircleOutline($$payload2, { class: "h-5 w-5" });
    };
    Badge($$payload, {
      dismissable: true,
      icon,
      children: ($$payload2) => {
        $$payload2.out += `<!---->Default`;
      },
      $$slots: { icon: true, default: true }
    });
  }
  $$payload.out += `<!----></div>`;
}
function DismissingWithEvents($$payload) {
  let eventStatus = true;
  function handleClose() {
    console.log("Badge dismissed");
    alert("Badge dismissed");
    eventStatus = false;
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="flex h-8 justify-center">`;
    Badge($$payload2, {
      dismissable: true,
      large: true,
      onclick: handleClose,
      get badgeStatus() {
        return eventStatus;
      },
      set badgeStatus($$value) {
        eventStatus = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        $$payload3.out += `<!---->Default`;
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
function BadgeWithIconOnly($$payload) {
  $$payload.out += `<div class="flex justify-center gap-2">`;
  Badge($$payload, {
    color: "gray",
    rounded: true,
    large: true,
    class: "!p-1 !font-semibold",
    children: ($$payload2) => {
      CheckOutline($$payload2, { class: "h-4 w-4" });
      $$payload2.out += `<!----> <span class="sr-only">Icon description</span>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Badge($$payload, {
    rounded: true,
    large: true,
    class: "!p-1 !font-semibold",
    children: ($$payload2) => {
      InfoCircleSolid($$payload2, {
        class: "h-4 w-4 text-primary-600 dark:text-primary-400"
      });
      $$payload2.out += `<!----> <span class="sr-only">Icon description</span>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Badge($$payload, {
    rounded: true,
    large: true,
    color: "blue",
    class: "!p-1 !font-semibold",
    children: ($$payload2) => {
      UserCircleSolid($$payload2, {
        class: "h-4 w-4 text-blue-600 dark:text-blue-400"
      });
      $$payload2.out += `<!----> <span class="sr-only">Icon description</span>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function NotificationBadge($$payload) {
  $$payload.out += `<div class="flex justify-center gap-4">`;
  Button($$payload, {
    class: "relative",
    size: "sm",
    children: ($$payload2) => {
      EnvelopeSolid($$payload2, { class: "text-white dark:text-white" });
      $$payload2.out += `<!----> <span class="sr-only">Notifications</span> `;
      Indicator($$payload2, {
        color: "blue",
        border: true,
        size: "xl",
        placement: "top-right",
        class: "text-xs font-bold",
        children: ($$payload3) => {
          $$payload3.out += `<!---->18`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    class: "relative",
    size: "sm",
    children: ($$payload2) => {
      EnvelopeSolid($$payload2, { class: "text-white dark:text-white" });
      $$payload2.out += `<!----> <span class="sr-only">Notifications</span> `;
      Indicator($$payload2, {
        color: "red",
        border: true,
        size: "xl",
        placement: "top-right",
        class: "text-xs font-bold",
        children: ($$payload3) => {
          $$payload3.out += `<!---->20`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    class: "relative",
    size: "sm",
    children: ($$payload2) => {
      EnvelopeSolid($$payload2, { class: "text-white dark:text-white" });
      $$payload2.out += `<!----> <span class="sr-only">Notifications</span> `;
      Indicator($$payload2, {
        color: "sky",
        border: true,
        size: "xl",
        placement: "bottom-right",
        class: "text-xs font-bold",
        children: ($$payload3) => {
          $$payload3.out += `<!---->20`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function OpeningBadge($$payload) {
  let openBadgeStatus = false;
  function openBadge() {
    openBadgeStatus = true;
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Button($$payload2, {
      onclick: openBadge,
      children: ($$payload3) => {
        $$payload3.out += `<!---->Open badge`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Badge($$payload2, {
      class: "ml-4",
      color: "blue",
      dismissable: true,
      large: true,
      get badgeStatus() {
        return openBadgeStatus;
      },
      set badgeStatus($$value) {
        openBadgeStatus = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        $$payload3.out += `<!---->Default`;
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
function DynamicColor($$payload) {
  setInterval(handleHover, 500);
  let color = "primary";
  function handleHover() {
    color = color === "primary" ? "secondary" : "primary";
  }
  Badge($$payload, {
    large: true,
    color,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Blinking badge`;
    },
    $$slots: { default: true }
  });
}
function _page($$payload, $$props) {
  push();
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
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  const colors = Object.keys(badge.variants.color);
  let color = "primary";
  let badgeSize = false;
  const changeSize = () => {
    badgeSize = !badgeSize;
  };
  let badgeDismissable = false;
  const changeDismissable = () => {
    badgeDismissable = !badgeDismissable;
  };
  let badgeClass = "";
  const changeClass = () => {
    badgeClass = badgeClass === "" ? "w-40 p-2" : "";
  };
  let badgeStatus2 = true;
  const changeStatus = () => {
    badgeStatus2 = true;
  };
  let border = false;
  const changeBorder = () => {
    border = !border;
  };
  let rounded = false;
  const changeRounded = () => {
    rounded = !rounded;
  };
  let link = "";
  const changeLink = () => {
    link = link === "" ? "/" : "";
  };
  let iconSlot = false;
  const changeIconSlot = () => {
    iconSlot = !iconSlot;
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
  let selectedTransition = "Fly";
  let currentTransition = transitions.find((t) => t.name === selectedTransition) || transitions[0];
  let generatedCode = (() => {
    let props = [];
    if (color !== "primary") props.push(` color="${color}"`);
    if (badgeSize) props.push(" large");
    if (badgeDismissable) props.push(" dismissable");
    if (badgeClass) props.push(` class="${badgeClass}"`);
    if (!badgeStatus2) props.push(" badgeStatus={false}");
    if (border) props.push(" border");
    if (link) props.push(` href="${link}"`);
    if (rounded) props.push(" rounded");
    if (currentTransition !== transitions[0] && badgeDismissable) {
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
    if (iconSlot) {
      return `<Badge${propsString}>
  <ClockSolid class="me-1.5 h-3 w-3" />
  My Badge
</Badge>`;
    } else {
      return `<Badge${propsString}>My Badge</Badge>`;
    }
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
        $$payload3.out += `<!---->Badge`;
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
        $$payload3.out += `<!---->Interactive Badge Builder`;
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
          const each_array_1 = ensure_array_like(transitions);
          $$payload3.out += `<div class="mb-4 h-10">`;
          Badge($$payload3, {
            color,
            large: badgeSize,
            dismissable: badgeDismissable,
            class: badgeClass,
            get badgeStatus() {
              return badgeStatus2;
            },
            set badgeStatus($$value) {
              badgeStatus2 = $$value;
              $$settled = false;
            },
            border,
            rounded,
            transition: currentTransition.transition,
            params: currentTransition.params,
            href: link,
            children: ($$payload4) => {
              if (iconSlot) {
                $$payload4.out += "<!--[-->";
                ClockSolid($$payload4, { class: "my-1 me-1.5 h-2.5 w-2.5" });
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]--> My Badge`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="mb-4 h-12">`;
          Button($$payload3, {
            disabled: badgeStatus2 ? true : false,
            onclick: changeStatus,
            children: ($$payload4) => {
              $$payload4.out += `<!---->Open badge`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="flex flex-wrap space-x-2">`;
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
              name: "color",
              get group() {
                return color;
              },
              set group($$value) {
                color = $$value;
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
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Transition`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let transition = each_array_1[$$index_1];
            Radio($$payload3, {
              disabled: badgeDismissable ? false : true,
              labelClass: `w-16 my-1 ${stringify(badgeDismissable ? "" : "opacity-30 cursor-not-allowed")}`,
              name: "transition_interactive",
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
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-40",
            color: "blue",
            onclick: changeSize,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(badgeSize ? "Small" : "Large")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "green",
            onclick: changeDismissable,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(badgeDismissable ? "Not dismissable" : "Dismissable")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "purple",
            onclick: changeClass,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(badgeClass ? "Remove class" : "Add class")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "yellow",
            onclick: changeBorder,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(border ? "Remove border" : "Add border")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "dark",
            onclick: changeRounded,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(rounded ? "Remove rounded" : "Add rounded")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "pink",
            onclick: changeLink,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(link ? "Remove href" : "Add href")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "teal",
            onclick: changeIconSlot,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(iconSlot ? "Remove icon" : "Add icon")}`;
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
              labelClass: "w-[230px] my-1",
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
