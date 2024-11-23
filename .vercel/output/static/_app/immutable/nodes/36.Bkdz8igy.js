import { a as append, t as template, b as text, c as comment } from "../chunks/disclose-version.0TX42Q8e.js";
import { f as first_child, s as sibling, n as next, c as child, r as reset, p as push, a6 as state, u as user_effect, a as pop, b as get, a7 as set, d as derived, t as template_effect } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { b as proxy, c as component, i as if_block } from "../chunks/props.B7eOu8hW.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { ap as TabItem, an as tabs, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { T as Tabs, a as ClipboardSolid, C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { T as Timeline, a as TimelineItem } from "../chunks/TimelineItem.tPeCwhF4.js";
import { A as ArrowRightOutline } from "../chunks/ArrowRightOutline.C1f8PGpf.js";
import { A as AdjustmentsVerticalSolid } from "../chunks/AdjustmentsVerticalSolid.CkK8xNkY.js";
import { G as GridSolid } from "../chunks/GridSolid.CtftrHjO.js";
import { U as UserCircleSolid } from "../chunks/UserCircleSolid.C5EoQM_S.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { Tabs, TabItem, Timeline, TimelineItem, Button } from "$lib";\n  import { ArrowRightOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<Tabs>\n  <TabItem open>\n    {#snippet titleSlot()}Profile{/snippet}\n    <Timeline>\n      <TimelineItem title="Application UI code in Tailwind CSS" date="February 2022">\n        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>\n        <Button color="alternative">\n          Learn more\n          <ArrowRightOutline class="ms-2 h-5 w-5" />\n        </Button>\n      </TimelineItem>\n      <TimelineItem title="Application UI code in Tailwind CSS" date="March 2022">\n        <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>\n      </TimelineItem>\n      <TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">\n        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>\n      </TimelineItem>\n    </Timeline>\n  </TabItem>\n  <TabItem>\n    {#snippet titleSlot()}Dashboard{/snippet}\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      <b>Dashboard:</b>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n  </TabItem>\n  <TabItem>\n    {#snippet titleSlot()}Settings{/snippet}\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      <b>Settings:</b>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n  </TabItem>\n  <TabItem>\n    {#snippet titleSlot()}Users{/snippet}\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      <b>Users:</b>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n  </TabItem>\n</Tabs>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Tabs, TabItem } from "$lib";\n<\/script>\n\n<Tabs tabStyle="full" ulClass="flex flex-nowrap rounded-lg divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700 space-x-0">\n  <TabItem class="w-full" open>\n    {#snippet titleSlot()}Profile{/snippet}\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      <b>Profile:</b>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n  </TabItem>\n  <TabItem class="w-full">\n    {#snippet titleSlot()}Dashboard{/snippet}\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      <b>Dashboard:</b>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n  </TabItem>\n  <TabItem class="w-full">\n    {#snippet titleSlot()}Settings{/snippet}\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      <b>Settings:</b>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n  </TabItem>\n  <TabItem class="w-full">\n    {#snippet titleSlot()}Users{/snippet}\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      <b>Users:</b>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n  </TabItem>\n</Tabs>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Tabs, TabItem } from "$lib";\n  import { UserCircleSolid, GridSolid, AdjustmentsVerticalSolid, ClipboardSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<Tabs tabStyle="underline">\n  <TabItem open>\n    {#snippet titleSlot()}\n      <div class="flex items-center gap-2">\n        <UserCircleSolid size="md" />\n        Profile\n      </div>\n    {/snippet}\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      <b>Profile:</b>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n  </TabItem>\n  <TabItem>\n    {#snippet titleSlot()}\n      <div class="flex items-center gap-2">\n        <GridSolid size="md" />\n        Dashboard\n      </div>\n    {/snippet}\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      <b>Dashboard:</b>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n  </TabItem>\n  <TabItem>\n    {#snippet titleSlot()}\n      <div class="flex items-center gap-2">\n        <AdjustmentsVerticalSolid size="md" />\n        Settings\n      </div>\n    {/snippet}\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      <b>Settings:</b>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n  </TabItem>\n  <TabItem>\n    {#snippet titleSlot()}\n      <div class="flex items-center gap-2">\n        <ClipboardSolid size="md" />\n        Contacts\n      </div>\n    {/snippet}\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      <b>Contacts:</b>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n  </TabItem>\n</Tabs>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Tabs, TabItem } from "svelte-5-ui-lib";\n<\/script>\n';
var root_6$2 = template(`Learn more <!>`, 1);
var root_5$3 = template(`<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p> <!>`, 1);
var root_7$2 = template(`<p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>`);
var root_8$2 = template(`<p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>`);
var root_4$1 = template(`<!> <!> <!>`, 1);
var root_10$1 = template(`<p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`);
var root_12$1 = template(`<p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`);
var root_14$1 = template(`<p class="text-sm text-gray-500 dark:text-gray-400"><b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`);
var root_1$2 = template(`<!> <!> <!> <!>`, 1);
function ComponentsInTabContents($$anchor) {
  Tabs($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$2();
      var node = first_child(fragment_1);
      {
        const titleSlot = ($$anchor3) => {
          next();
          var text$1 = text("Profile");
          append($$anchor3, text$1);
        };
        TabItem(node, {
          open: true,
          titleSlot,
          children: ($$anchor3, $$slotProps2) => {
            Timeline($$anchor3, {
              children: ($$anchor4, $$slotProps3) => {
                var fragment_3 = root_4$1();
                var node_1 = first_child(fragment_3);
                TimelineItem(node_1, {
                  title: "Application UI code in Tailwind CSS",
                  date: "February 2022",
                  children: ($$anchor5, $$slotProps4) => {
                    var fragment_4 = root_5$3();
                    var node_2 = sibling(first_child(fragment_4), 2);
                    Button(node_2, {
                      color: "alternative",
                      children: ($$anchor6, $$slotProps5) => {
                        next();
                        var fragment_5 = root_6$2();
                        var node_3 = sibling(first_child(fragment_5));
                        ArrowRightOutline(node_3, { class: "ms-2 h-5 w-5" });
                        append($$anchor6, fragment_5);
                      },
                      $$slots: { default: true }
                    });
                    append($$anchor5, fragment_4);
                  },
                  $$slots: { default: true }
                });
                var node_4 = sibling(node_1, 2);
                TimelineItem(node_4, {
                  title: "Application UI code in Tailwind CSS",
                  date: "March 2022",
                  children: ($$anchor5, $$slotProps4) => {
                    var p = root_7$2();
                    append($$anchor5, p);
                  },
                  $$slots: { default: true }
                });
                var node_5 = sibling(node_4, 2);
                TimelineItem(node_5, {
                  title: "Application UI code in Tailwind CSS",
                  date: "April 2022",
                  children: ($$anchor5, $$slotProps4) => {
                    var p_1 = root_8$2();
                    append($$anchor5, p_1);
                  },
                  $$slots: { default: true }
                });
                append($$anchor4, fragment_3);
              },
              $$slots: { default: true }
            });
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      var node_6 = sibling(node, 2);
      {
        const titleSlot = ($$anchor3) => {
          next();
          var text_1 = text("Dashboard");
          append($$anchor3, text_1);
        };
        TabItem(node_6, {
          titleSlot,
          children: ($$anchor3, $$slotProps2) => {
            var p_2 = root_10$1();
            append($$anchor3, p_2);
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      var node_7 = sibling(node_6, 2);
      {
        const titleSlot = ($$anchor3) => {
          next();
          var text_2 = text("Settings");
          append($$anchor3, text_2);
        };
        TabItem(node_7, {
          titleSlot,
          children: ($$anchor3, $$slotProps2) => {
            var p_3 = root_12$1();
            append($$anchor3, p_3);
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      var node_8 = sibling(node_7, 2);
      {
        const titleSlot = ($$anchor3) => {
          next();
          var text_3 = text("Users");
          append($$anchor3, text_3);
        };
        TabItem(node_8, {
          titleSlot,
          children: ($$anchor3, $$slotProps2) => {
            var p_4 = root_14$1();
            append($$anchor3, p_4);
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_2 = template(`<div class="flex items-center gap-2"><!> Profile</div>`);
var root_3$1 = template(`<p class="text-sm text-gray-500 dark:text-gray-400"><b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`);
var root_4 = template(`<div class="flex items-center gap-2"><!> Dashboard</div>`);
var root_5$2 = template(`<p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`);
var root_6$1 = template(`<div class="flex items-center gap-2"><!> Settings</div>`);
var root_7$1 = template(`<p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`);
var root_8$1 = template(`<div class="flex items-center gap-2"><!> Contacts</div>`);
var root_9$1 = template(`<p class="text-sm text-gray-500 dark:text-gray-400"><b>Contacts:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`);
var root_1$1 = template(`<!> <!> <!> <!>`, 1);
function Icon($$anchor) {
  Tabs($$anchor, {
    tabStyle: "underline",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$1();
      var node = first_child(fragment_1);
      {
        const titleSlot = ($$anchor3) => {
          var div = root_2();
          var node_1 = child(div);
          UserCircleSolid(node_1, { size: "md" });
          next();
          reset(div);
          append($$anchor3, div);
        };
        TabItem(node, {
          open: true,
          titleSlot,
          children: ($$anchor3, $$slotProps2) => {
            var p = root_3$1();
            append($$anchor3, p);
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      var node_2 = sibling(node, 2);
      {
        const titleSlot = ($$anchor3) => {
          var div_1 = root_4();
          var node_3 = child(div_1);
          GridSolid(node_3, { size: "md" });
          next();
          reset(div_1);
          append($$anchor3, div_1);
        };
        TabItem(node_2, {
          titleSlot,
          children: ($$anchor3, $$slotProps2) => {
            var p_1 = root_5$2();
            append($$anchor3, p_1);
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      var node_4 = sibling(node_2, 2);
      {
        const titleSlot = ($$anchor3) => {
          var div_2 = root_6$1();
          var node_5 = child(div_2);
          AdjustmentsVerticalSolid(node_5, { size: "md" });
          next();
          reset(div_2);
          append($$anchor3, div_2);
        };
        TabItem(node_4, {
          titleSlot,
          children: ($$anchor3, $$slotProps2) => {
            var p_2 = root_7$1();
            append($$anchor3, p_2);
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      var node_6 = sibling(node_4, 2);
      {
        const titleSlot = ($$anchor3) => {
          var div_3 = root_8$1();
          var node_7 = child(div_3);
          ClipboardSolid(node_7, { size: "md" });
          next();
          reset(div_3);
          append($$anchor3, div_3);
        };
        TabItem(node_6, {
          titleSlot,
          children: ($$anchor3, $$slotProps2) => {
            var p_3 = root_9$1();
            append($$anchor3, p_3);
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_3 = template(`<p class="text-sm text-gray-500 dark:text-gray-400"><b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`);
var root_5$1 = template(`<p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`);
var root_7 = template(`<p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`);
var root_9 = template(`<p class="text-sm text-gray-500 dark:text-gray-400"><b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`);
var root_1 = template(`<!> <!> <!> <!>`, 1);
function FullWidth($$anchor) {
  Tabs($$anchor, {
    tabStyle: "full",
    ulClass: "flex flex-nowrap rounded-lg divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700 space-x-0",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1();
      var node = first_child(fragment_1);
      {
        const titleSlot = ($$anchor3) => {
          next();
          var text$1 = text("Profile");
          append($$anchor3, text$1);
        };
        TabItem(node, {
          class: "w-full",
          open: true,
          titleSlot,
          children: ($$anchor3, $$slotProps2) => {
            var p = root_3();
            append($$anchor3, p);
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      var node_1 = sibling(node, 2);
      {
        const titleSlot = ($$anchor3) => {
          next();
          var text_1 = text("Dashboard");
          append($$anchor3, text_1);
        };
        TabItem(node_1, {
          class: "w-full",
          titleSlot,
          children: ($$anchor3, $$slotProps2) => {
            var p_1 = root_5$1();
            append($$anchor3, p_1);
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      var node_2 = sibling(node_1, 2);
      {
        const titleSlot = ($$anchor3) => {
          next();
          var text_2 = text("Settings");
          append($$anchor3, text_2);
        };
        TabItem(node_2, {
          class: "w-full",
          titleSlot,
          children: ($$anchor3, $$slotProps2) => {
            var p_2 = root_7();
            append($$anchor3, p_2);
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      var node_3 = sibling(node_2, 2);
      {
        const titleSlot = ($$anchor3) => {
          next();
          var text_3 = text("Users");
          append($$anchor3, text_3);
        };
        TabItem(node_3, {
          class: "w-full",
          titleSlot,
          children: ($$anchor3, $$slotProps2) => {
            var p_3 = root_9();
            append($$anchor3, p_3);
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_8 = template(`<p class="text-sm text-gray-500 dark:text-gray-400"><b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`);
var root_10 = template(`<p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`);
var root_12 = template(`<p class="text-sm text-gray-500 dark:text-gray-400"><b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`);
var root_14 = template(`<p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`);
var root_15 = template(`<span class="text-gray-400 dark:text-gray-500">Disabled</span>`);
var root_16 = template(`<p class="text-sm text-gray-500 dark:text-gray-400"><b>Disabled:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`);
var root_6 = template(`<!> <!> <!> <!> <!>`, 1);
var root_5 = template(`<!> <div class="my-4 flex flex-wrap space-x-4"><!> <!></div>`, 1);
var root_23 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "tabs";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/ComponentsInTabContents.svelte": __vite_glob_0_0,
    "./examples/FullWidth.svelte": __vite_glob_0_1,
    "./examples/Icon.svelte": __vite_glob_0_2,
    "./examples/Setup.svelte": __vite_glob_0_3
  });
  const exampleArr = [
    {
      name: "Full width",
      component: FullWidth
    },
    {
      name: "Icon",
      component: Icon
    },
    {
      name: "Components in tab contents",
      component: ComponentsInTabContents
    }
  ];
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  let tabStyle = state("none");
  const tabStyles = Object.keys(tabs.variants.tabStyle);
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(tabStyle) !== "none") props.push(` style="${get(tabStyle)}"`);
    return `<Tab${props}>
  <TabItem open title="Profile">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Profile:</b>
        Tab content
      </p>
    </TabItem>
    <TabItem title="Dashboard">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Dashboard:</b>
        Tab content
      </p>
    </TabItem>
    <TabItem title="Settings">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Settings:</b>
        Tab content
      </p>
    </TabItem>
    <TabItem title="Users">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Users:</b>
        Tab content
      </p>
    </TabItem>
    <TabItem disabled>
      {#snippet titleSlot()}
        <span class="text-gray-400 dark:text-gray-500">Disabled</span>
      {/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Disabled:</b>
        Tab content
      </p>
    </TabItem>    
</Tab>`;
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
      var text$1 = text("Tabs");
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
      var text_2 = text("Interactive Tab Builder");
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
        var node_5 = first_child(fragment_2);
        var ulClass = derived(() => get(tabStyle) === "full" ? "flex flex-nowrap rounded-lg divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700 space-x-0" : "");
        Tabs(node_5, {
          get tabStyle() {
            return get(tabStyle);
          },
          get ulClass() {
            return get(ulClass);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_3 = root_6();
            var node_6 = first_child(fragment_3);
            var title = derived(() => get(tabStyle) === "full" ? "" : "Profile");
            var class_1 = derived(() => get(tabStyle) === "full" ? "w-full" : "");
            {
              const titleSlot = ($$anchor4) => {
                next();
                var text_3 = text("Profile");
                append($$anchor4, text_3);
              };
              TabItem(node_6, {
                open: true,
                get title() {
                  return get(title);
                },
                get class() {
                  return get(class_1);
                },
                titleSlot,
                children: ($$anchor4, $$slotProps3) => {
                  var p = root_8();
                  append($$anchor4, p);
                },
                $$slots: { titleSlot: true, default: true }
              });
            }
            var node_7 = sibling(node_6, 2);
            var title_1 = derived(() => get(tabStyle) === "full" ? "" : "Settings");
            var class_2 = derived(() => get(tabStyle) === "full" ? "w-full" : "");
            {
              const titleSlot = ($$anchor4) => {
                next();
                var text_4 = text("Settings");
                append($$anchor4, text_4);
              };
              TabItem(node_7, {
                get title() {
                  return get(title_1);
                },
                get class() {
                  return get(class_2);
                },
                titleSlot,
                children: ($$anchor4, $$slotProps3) => {
                  var p_1 = root_10();
                  append($$anchor4, p_1);
                },
                $$slots: { titleSlot: true, default: true }
              });
            }
            var node_8 = sibling(node_7, 2);
            var title_2 = derived(() => get(tabStyle) === "full" ? "" : "Users");
            var class_3 = derived(() => get(tabStyle) === "full" ? "w-full" : "");
            {
              const titleSlot = ($$anchor4) => {
                next();
                var text_5 = text("Users");
                append($$anchor4, text_5);
              };
              TabItem(node_8, {
                get title() {
                  return get(title_2);
                },
                get class() {
                  return get(class_3);
                },
                titleSlot,
                children: ($$anchor4, $$slotProps3) => {
                  var p_2 = root_12();
                  append($$anchor4, p_2);
                },
                $$slots: { titleSlot: true, default: true }
              });
            }
            var node_9 = sibling(node_8, 2);
            var title_3 = derived(() => get(tabStyle) === "full" ? "" : "Dashboard");
            var class_4 = derived(() => get(tabStyle) === "full" ? "w-full" : "");
            {
              const titleSlot = ($$anchor4) => {
                next();
                var text_6 = text("Dashboard");
                append($$anchor4, text_6);
              };
              TabItem(node_9, {
                get title() {
                  return get(title_3);
                },
                get class() {
                  return get(class_4);
                },
                titleSlot,
                children: ($$anchor4, $$slotProps3) => {
                  var p_3 = root_14();
                  append($$anchor4, p_3);
                },
                $$slots: { titleSlot: true, default: true }
              });
            }
            var node_10 = sibling(node_9, 2);
            var title_4 = derived(() => get(tabStyle) === "full" ? "" : "Disabled");
            var class_5 = derived(() => get(tabStyle) === "full" ? "w-full" : "");
            {
              const titleSlot = ($$anchor4) => {
                var span = root_15();
                append($$anchor4, span);
              };
              TabItem(node_10, {
                disabled: true,
                get title() {
                  return get(title_4);
                },
                get class() {
                  return get(class_5);
                },
                titleSlot,
                children: ($$anchor4, $$slotProps3) => {
                  var p_4 = root_16();
                  append($$anchor4, p_4);
                },
                $$slots: { titleSlot: true, default: true }
              });
            }
            append($$anchor3, fragment_3);
          },
          $$slots: { default: true }
        });
        var div = sibling(node_5, 2);
        var node_11 = child(div);
        Label(node_11, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_7 = text("Style");
            append($$anchor3, text_7);
          },
          $$slots: { default: true }
        });
        var node_12 = sibling(node_11, 2);
        each(node_12, 17, () => tabStyles, index, ($$anchor3, option) => {
          var fragment_4 = comment();
          var node_13 = first_child(fragment_4);
          if_block(node_13, () => get(option) !== "full", ($$anchor4) => {
            Radio($$anchor4, {
              labelClass: "w-24 my-1",
              name: "table_color",
              get group() {
                return get(tabStyle);
              },
              set group($$value) {
                set(tabStyle, proxy($$value));
              },
              get value() {
                return get(option);
              },
              children: ($$anchor5, $$slotProps2) => {
                next();
                var text_8 = text();
                template_effect(() => set_text(text_8, get(option)));
                append($$anchor5, text_8);
              },
              $$slots: { default: true }
            });
          });
          append($$anchor3, fragment_4);
        });
        reset(div);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_14 = sibling(node_4, 2);
  H2(node_14, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_9 = text("Examples");
      append($$anchor2, text_9);
    },
    $$slots: { default: true }
  });
  var node_15 = sibling(node_14, 2);
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
    CodeWrapper(node_15, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_8 = root_23();
        var div_1 = first_child(fragment_8);
        var node_16 = child(div_1);
        Label(node_16, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_10 = text("Example");
            append($$anchor3, text_10);
          },
          $$slots: { default: true }
        });
        var node_17 = sibling(node_16, 2);
        each(node_17, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-56 my-1",
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
              var text_11 = text();
              template_effect(() => set_text(text_11, get(style).name));
              append($$anchor4, text_11);
            },
            $$slots: { default: true }
          });
        });
        reset(div_1);
        var node_18 = sibling(div_1, 2);
        component(node_18, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_8);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_19 = sibling(node_15, 2);
  H2(node_19, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_12 = text("Component data");
      append($$anchor2, text_12);
    },
    $$slots: { default: true }
  });
  var node_20 = sibling(node_19, 2);
  CompoAttributesViewer(node_20, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
