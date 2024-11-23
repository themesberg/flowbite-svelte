import { a3 as copy_payload, a4 as assign_payload, S as pop, Q as push, Y as ensure_array_like, V as escape_html } from "../../../../chunks/index.js";
import { Z as tabs } from "../../../../chunks/theme.js";
import { T as Tabs, a as TabItem, b as ClipboardSolid, L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { T as Timeline, a as TimelineItem } from "../../../../chunks/TimelineItem.js";
import { A as ArrowRightOutline } from "../../../../chunks/ArrowRightOutline.js";
import { A as AdjustmentsVerticalSolid } from "../../../../chunks/AdjustmentsVerticalSolid.js";
import { G as GridSolid } from "../../../../chunks/GridSolid.js";
import { U as UserCircleSolid } from "../../../../chunks/UserCircleSolid.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { Tabs, TabItem, Timeline, TimelineItem, Button } from "$lib";\n  import { ArrowRightOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<Tabs>\n  <TabItem open>\n    {#snippet titleSlot()}Profile{/snippet}\n    <Timeline>\n      <TimelineItem title="Application UI code in Tailwind CSS" date="February 2022">\n        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>\n        <Button color="alternative">\n          Learn more\n          <ArrowRightOutline class="ms-2 h-5 w-5" />\n        </Button>\n      </TimelineItem>\n      <TimelineItem title="Application UI code in Tailwind CSS" date="March 2022">\n        <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>\n      </TimelineItem>\n      <TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">\n        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>\n      </TimelineItem>\n    </Timeline>\n  </TabItem>\n  <TabItem>\n    {#snippet titleSlot()}Dashboard{/snippet}\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      <b>Dashboard:</b>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n  </TabItem>\n  <TabItem>\n    {#snippet titleSlot()}Settings{/snippet}\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      <b>Settings:</b>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n  </TabItem>\n  <TabItem>\n    {#snippet titleSlot()}Users{/snippet}\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      <b>Users:</b>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n  </TabItem>\n</Tabs>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Tabs, TabItem } from "$lib";\n<\/script>\n\n<Tabs tabStyle="full" ulClass="flex flex-nowrap rounded-lg divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700 space-x-0">\n  <TabItem class="w-full" open>\n    {#snippet titleSlot()}Profile{/snippet}\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      <b>Profile:</b>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n  </TabItem>\n  <TabItem class="w-full">\n    {#snippet titleSlot()}Dashboard{/snippet}\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      <b>Dashboard:</b>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n  </TabItem>\n  <TabItem class="w-full">\n    {#snippet titleSlot()}Settings{/snippet}\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      <b>Settings:</b>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n  </TabItem>\n  <TabItem class="w-full">\n    {#snippet titleSlot()}Users{/snippet}\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      <b>Users:</b>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n  </TabItem>\n</Tabs>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Tabs, TabItem } from "$lib";\n  import { UserCircleSolid, GridSolid, AdjustmentsVerticalSolid, ClipboardSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<Tabs tabStyle="underline">\n  <TabItem open>\n    {#snippet titleSlot()}\n      <div class="flex items-center gap-2">\n        <UserCircleSolid size="md" />\n        Profile\n      </div>\n    {/snippet}\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      <b>Profile:</b>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n  </TabItem>\n  <TabItem>\n    {#snippet titleSlot()}\n      <div class="flex items-center gap-2">\n        <GridSolid size="md" />\n        Dashboard\n      </div>\n    {/snippet}\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      <b>Dashboard:</b>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n  </TabItem>\n  <TabItem>\n    {#snippet titleSlot()}\n      <div class="flex items-center gap-2">\n        <AdjustmentsVerticalSolid size="md" />\n        Settings\n      </div>\n    {/snippet}\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      <b>Settings:</b>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n  </TabItem>\n  <TabItem>\n    {#snippet titleSlot()}\n      <div class="flex items-center gap-2">\n        <ClipboardSolid size="md" />\n        Contacts\n      </div>\n    {/snippet}\n    <p class="text-sm text-gray-500 dark:text-gray-400">\n      <b>Contacts:</b>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n    </p>\n  </TabItem>\n</Tabs>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Tabs, TabItem } from "svelte-5-ui-lib";\n<\/script>\n';
function ComponentsInTabContents($$payload) {
  Tabs($$payload, {
    children: ($$payload2) => {
      {
        let titleSlot = function($$payload3) {
          $$payload3.out += `<!---->Profile`;
        };
        TabItem($$payload2, {
          open: true,
          titleSlot,
          children: ($$payload3) => {
            Timeline($$payload3, {
              children: ($$payload4) => {
                TimelineItem($$payload4, {
                  title: "Application UI code in Tailwind CSS",
                  date: "February 2022",
                  children: ($$payload5) => {
                    $$payload5.out += `<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.</p> `;
                    Button($$payload5, {
                      color: "alternative",
                      children: ($$payload6) => {
                        $$payload6.out += `<!---->Learn more `;
                        ArrowRightOutline($$payload6, { class: "ms-2 h-5 w-5" });
                        $$payload6.out += `<!---->`;
                      },
                      $$slots: { default: true }
                    });
                    $$payload5.out += `<!---->`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                TimelineItem($$payload4, {
                  title: "Application UI code in Tailwind CSS",
                  date: "March 2022",
                  children: ($$payload5) => {
                    $$payload5.out += `<p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!----> `;
                TimelineItem($$payload4, {
                  title: "Application UI code in Tailwind CSS",
                  date: "April 2022",
                  children: ($$payload5) => {
                    $$payload5.out += `<p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!---->`;
              },
              $$slots: { default: true }
            });
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let titleSlot = function($$payload3) {
          $$payload3.out += `<!---->Dashboard`;
        };
        TabItem($$payload2, {
          titleSlot,
          children: ($$payload3) => {
            $$payload3.out += `<p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`;
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let titleSlot = function($$payload3) {
          $$payload3.out += `<!---->Settings`;
        };
        TabItem($$payload2, {
          titleSlot,
          children: ($$payload3) => {
            $$payload3.out += `<p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`;
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let titleSlot = function($$payload3) {
          $$payload3.out += `<!---->Users`;
        };
        TabItem($$payload2, {
          titleSlot,
          children: ($$payload3) => {
            $$payload3.out += `<p class="text-sm text-gray-500 dark:text-gray-400"><b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`;
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function Icon($$payload) {
  Tabs($$payload, {
    tabStyle: "underline",
    children: ($$payload2) => {
      {
        let titleSlot = function($$payload3) {
          $$payload3.out += `<div class="flex items-center gap-2">`;
          UserCircleSolid($$payload3, { size: "md" });
          $$payload3.out += `<!----> Profile</div>`;
        };
        TabItem($$payload2, {
          open: true,
          titleSlot,
          children: ($$payload3) => {
            $$payload3.out += `<p class="text-sm text-gray-500 dark:text-gray-400"><b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`;
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let titleSlot = function($$payload3) {
          $$payload3.out += `<div class="flex items-center gap-2">`;
          GridSolid($$payload3, { size: "md" });
          $$payload3.out += `<!----> Dashboard</div>`;
        };
        TabItem($$payload2, {
          titleSlot,
          children: ($$payload3) => {
            $$payload3.out += `<p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`;
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let titleSlot = function($$payload3) {
          $$payload3.out += `<div class="flex items-center gap-2">`;
          AdjustmentsVerticalSolid($$payload3, { size: "md" });
          $$payload3.out += `<!----> Settings</div>`;
        };
        TabItem($$payload2, {
          titleSlot,
          children: ($$payload3) => {
            $$payload3.out += `<p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`;
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let titleSlot = function($$payload3) {
          $$payload3.out += `<div class="flex items-center gap-2">`;
          ClipboardSolid($$payload3, { size: "md" });
          $$payload3.out += `<!----> Contacts</div>`;
        };
        TabItem($$payload2, {
          titleSlot,
          children: ($$payload3) => {
            $$payload3.out += `<p class="text-sm text-gray-500 dark:text-gray-400"><b>Contacts:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`;
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function FullWidth($$payload) {
  Tabs($$payload, {
    tabStyle: "full",
    ulClass: "flex flex-nowrap rounded-lg divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700 space-x-0",
    children: ($$payload2) => {
      {
        let titleSlot = function($$payload3) {
          $$payload3.out += `<!---->Profile`;
        };
        TabItem($$payload2, {
          class: "w-full",
          open: true,
          titleSlot,
          children: ($$payload3) => {
            $$payload3.out += `<p class="text-sm text-gray-500 dark:text-gray-400"><b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`;
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let titleSlot = function($$payload3) {
          $$payload3.out += `<!---->Dashboard`;
        };
        TabItem($$payload2, {
          class: "w-full",
          titleSlot,
          children: ($$payload3) => {
            $$payload3.out += `<p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`;
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let titleSlot = function($$payload3) {
          $$payload3.out += `<!---->Settings`;
        };
        TabItem($$payload2, {
          class: "w-full",
          titleSlot,
          children: ($$payload3) => {
            $$payload3.out += `<p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`;
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let titleSlot = function($$payload3) {
          $$payload3.out += `<!---->Users`;
        };
        TabItem($$payload2, {
          class: "w-full",
          titleSlot,
          children: ($$payload3) => {
            $$payload3.out += `<p class="text-sm text-gray-500 dark:text-gray-400"><b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`;
          },
          $$slots: { titleSlot: true, default: true }
        });
      }
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function _page($$payload, $$props) {
  push();
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
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  let tabStyle = "none";
  const tabStyles = Object.keys(tabs.variants.tabStyle);
  let generatedCode = (() => {
    let props = [];
    if (tabStyle !== "none") props.push(` style="${tabStyle}"`);
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
        $$payload3.out += `<!---->Tabs`;
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
        $$payload3.out += `<!---->Interactive Tab Builder`;
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
          const each_array = ensure_array_like(tabStyles);
          Tabs($$payload3, {
            tabStyle,
            ulClass: tabStyle === "full" ? "flex flex-nowrap rounded-lg divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700 space-x-0" : "",
            children: ($$payload4) => {
              {
                let titleSlot = function($$payload5) {
                  $$payload5.out += `<!---->Profile`;
                };
                TabItem($$payload4, {
                  open: true,
                  title: tabStyle === "full" ? "" : "Profile",
                  class: tabStyle === "full" ? "w-full" : "",
                  titleSlot,
                  children: ($$payload5) => {
                    $$payload5.out += `<p class="text-sm text-gray-500 dark:text-gray-400"><b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`;
                  },
                  $$slots: { titleSlot: true, default: true }
                });
              }
              $$payload4.out += `<!----> `;
              {
                let titleSlot = function($$payload5) {
                  $$payload5.out += `<!---->Settings`;
                };
                TabItem($$payload4, {
                  title: tabStyle === "full" ? "" : "Settings",
                  class: tabStyle === "full" ? "w-full" : "",
                  titleSlot,
                  children: ($$payload5) => {
                    $$payload5.out += `<p class="text-sm text-gray-500 dark:text-gray-400"><b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`;
                  },
                  $$slots: { titleSlot: true, default: true }
                });
              }
              $$payload4.out += `<!----> `;
              {
                let titleSlot = function($$payload5) {
                  $$payload5.out += `<!---->Users`;
                };
                TabItem($$payload4, {
                  title: tabStyle === "full" ? "" : "Users",
                  class: tabStyle === "full" ? "w-full" : "",
                  titleSlot,
                  children: ($$payload5) => {
                    $$payload5.out += `<p class="text-sm text-gray-500 dark:text-gray-400"><b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`;
                  },
                  $$slots: { titleSlot: true, default: true }
                });
              }
              $$payload4.out += `<!----> `;
              {
                let titleSlot = function($$payload5) {
                  $$payload5.out += `<!---->Dashboard`;
                };
                TabItem($$payload4, {
                  title: tabStyle === "full" ? "" : "Dashboard",
                  class: tabStyle === "full" ? "w-full" : "",
                  titleSlot,
                  children: ($$payload5) => {
                    $$payload5.out += `<p class="text-sm text-gray-500 dark:text-gray-400"><b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`;
                  },
                  $$slots: { titleSlot: true, default: true }
                });
              }
              $$payload4.out += `<!----> `;
              {
                let titleSlot = function($$payload5) {
                  $$payload5.out += `<span class="text-gray-400 dark:text-gray-500">Disabled</span>`;
                };
                TabItem($$payload4, {
                  disabled: true,
                  title: tabStyle === "full" ? "" : "Disabled",
                  class: tabStyle === "full" ? "w-full" : "",
                  titleSlot,
                  children: ($$payload5) => {
                    $$payload5.out += `<p class="text-sm text-gray-500 dark:text-gray-400"><b>Disabled:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`;
                  },
                  $$slots: { titleSlot: true, default: true }
                });
              }
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <div class="my-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Style`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let option = each_array[$$index];
            if (option !== "full") {
              $$payload3.out += "<!--[-->";
              Radio($$payload3, {
                labelClass: "w-24 my-1",
                name: "table_color",
                get group() {
                  return tabStyle;
                },
                set group($$value) {
                  tabStyle = $$value;
                  $$settled = false;
                },
                value: option,
                children: ($$payload4) => {
                  $$payload4.out += `<!---->${escape_html(option)}`;
                },
                $$slots: { default: true }
              });
            } else {
              $$payload3.out += "<!--[!-->";
            }
            $$payload3.out += `<!--]-->`;
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
              labelClass: "w-56 my-1",
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
