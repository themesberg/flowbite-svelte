import { Q as push, a1 as getContext, a0 as spread_attributes, W as attr, V as escape_html, S as pop, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like } from "../../../../chunks/index.js";
import "../../../../chunks/theme.js";
import { B as Breadcrumb, a as BreadcrumbItem } from "../../../../chunks/BreadcrumbItem.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { twMerge } from "tailwind-merge";
function ChevronDoubleRightOutline($$payload, $$props) {
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
    ariaLabel = "chevron double right outline",
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="m7 16 4-4-4-4m6 8 4-4-4-4"></path></svg>`;
  pop();
}
function HomeOutline($$payload, $$props) {
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
    ariaLabel = "home outline",
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"></path></svg>`;
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Breadcrumb, BreadcrumbItem } from "$lib";\n<\/script>\n\n<div class="overflow-x-scroll p-2 sm:p-6">\n  <Breadcrumb>\n    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>\n    <BreadcrumbItem href="/">Projects</BreadcrumbItem>\n    <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>\n  </Breadcrumb>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Breadcrumb, BreadcrumbItem } from "$lib";\n  import { ChevronDoubleRightOutline, HomeOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="overflow-x-scroll p-2 sm:p-6">\n  <Breadcrumb class="overflow-x-scroll bg-gray-50 px-5 py-3 dark:bg-gray-900">\n    <BreadcrumbItem href="/" home>\n      {#snippet icon()}\n        <HomeOutline class="me-2 h-4 w-4" />\n      {/snippet}Home\n    </BreadcrumbItem>\n    <BreadcrumbItem href="/">\n      {#snippet icon()}\n        <ChevronDoubleRightOutline class="mx-2 h-5 w-5 dark:text-white" />\n      {/snippet}\n      Projects\n    </BreadcrumbItem>\n    <BreadcrumbItem>\n      {#snippet icon()}\n        <ChevronDoubleRightOutline class="mx-2 h-5 w-5 dark:text-white" />\n      {/snippet}\n      Flowbite Svelte\n    </BreadcrumbItem>\n  </Breadcrumb>\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Breadcrumb, BreadcrumbItem } from "$lib";\n<\/script>\n\n<div class="overflow-x-scroll p-2 sm:p-6">\n  <Breadcrumb solid class="overflow-x-scroll">\n    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>\n    <BreadcrumbItem href="/">Projects</BreadcrumbItem>\n    <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>\n  </Breadcrumb>\n</div>\n';
function Default($$payload) {
  $$payload.out += `<div class="overflow-x-scroll p-2 sm:p-6">`;
  Breadcrumb($$payload, {
    children: ($$payload2) => {
      BreadcrumbItem($$payload2, {
        href: "/",
        home: true,
        children: ($$payload3) => {
          $$payload3.out += `<!---->Home`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BreadcrumbItem($$payload2, {
        href: "/",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Projects`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BreadcrumbItem($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->Flowbite Svelte`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function Icon($$payload) {
  $$payload.out += `<div class="overflow-x-scroll p-2 sm:p-6">`;
  Breadcrumb($$payload, {
    class: "overflow-x-scroll bg-gray-50 px-5 py-3 dark:bg-gray-900",
    children: ($$payload2) => {
      {
        let icon = function($$payload3) {
          HomeOutline($$payload3, { class: "me-2 h-4 w-4" });
        };
        BreadcrumbItem($$payload2, {
          href: "/",
          home: true,
          icon,
          children: ($$payload3) => {
            $$payload3.out += `<!---->Home`;
          },
          $$slots: { icon: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let icon = function($$payload3) {
          ChevronDoubleRightOutline($$payload3, { class: "mx-2 h-5 w-5 dark:text-white" });
        };
        BreadcrumbItem($$payload2, {
          href: "/",
          icon,
          children: ($$payload3) => {
            $$payload3.out += `<!---->Projects`;
          },
          $$slots: { icon: true, default: true }
        });
      }
      $$payload2.out += `<!----> `;
      {
        let icon = function($$payload3) {
          ChevronDoubleRightOutline($$payload3, { class: "mx-2 h-5 w-5 dark:text-white" });
        };
        BreadcrumbItem($$payload2, {
          icon,
          children: ($$payload3) => {
            $$payload3.out += `<!---->Flowbite Svelte`;
          },
          $$slots: { icon: true, default: true }
        });
      }
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function Solid($$payload) {
  $$payload.out += `<div class="overflow-x-scroll p-2 sm:p-6">`;
  Breadcrumb($$payload, {
    solid: true,
    class: "overflow-x-scroll",
    children: ($$payload2) => {
      BreadcrumbItem($$payload2, {
        href: "/",
        home: true,
        children: ($$payload3) => {
          $$payload3.out += `<!---->Home`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BreadcrumbItem($$payload2, {
        href: "/",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Projects`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BreadcrumbItem($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->Flowbite Svelte`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function _page($$payload, $$props) {
  push();
  const dirName = "breadcrumb";
  let navClass = "";
  const changeNavClass = () => {
    navClass = navClass === "" ? "border border-red-500 p-2" : "";
  };
  let olClass = "";
  const changeOlClass = () => {
    olClass = olClass === "" ? "border border-blue-500 p-2" : "";
  };
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Default.svelte": __vite_glob_0_0,
    "./examples/Icon.svelte": __vite_glob_0_1,
    "./examples/Solid.svelte": __vite_glob_0_2
  });
  const exampleArr = [
    {
      name: "Default",
      component: Default
    },
    {
      name: "Solid",
      component: Solid
    },
    {
      name: "Icon",
      component: Icon
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
        $$payload3.out += `<!---->Breadcrumb`;
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
        $$payload3.out += `<!---->navClass and olClass`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    CodeWrapper($$payload2, {
      innerClass: "overflow-x-scroll p-2 sm:p-6",
      children: ($$payload3) => {
        $$payload3.out += `<div class="h-20">`;
        Breadcrumb($$payload3, {
          navClass,
          olClass,
          children: ($$payload4) => {
            BreadcrumbItem($$payload4, {
              href: "/",
              home: true,
              children: ($$payload5) => {
                $$payload5.out += `<!---->Home`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            BreadcrumbItem($$payload4, {
              href: "/",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Projects`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            BreadcrumbItem($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->Flowbite Svelte`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
        Button($$payload3, {
          class: "w-48",
          onclick: changeNavClass,
          children: ($$payload4) => {
            $$payload4.out += `<!---->${escape_html(navClass ? "Remove navClass" : "Add navClass")}`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        Button($$payload3, {
          class: "w-48",
          color: "green",
          onclick: changeOlClass,
          children: ($$payload4) => {
            $$payload4.out += `<!---->${escape_html(olClass ? "Remove olClass" : "Add olClass")}`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----></div>`;
      },
      $$slots: { default: true }
    });
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
