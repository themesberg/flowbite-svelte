import { Q as push, a1 as getContext, a0 as spread_attributes, W as attr, V as escape_html, S as pop, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like } from "../../../../chunks/index.js";
import "../../../../chunks/theme.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { L as Listgroup, a as ListgroupItem } from "../../../../chunks/Listgroup.js";
import { twMerge } from "tailwind-merge";
import { D as DownloadSolid } from "../../../../chunks/DownloadSolid.js";
import { U as UserCircleSolid } from "../../../../chunks/UserCircleSolid.js";
import { A as Avatar } from "../../../../chunks/Avatar.js";
function AdjustmentsHorizontalSolid($$payload, $$props) {
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
    ariaLabel = "adjustments horizontal solid",
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
  $$payload.out += `<!--]--><path d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z"></path></svg>`;
  pop();
}
function MessagesSolid($$payload, $$props) {
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
    ariaLabel = "messages solid",
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
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function TrashBinSolid($$payload, $$props) {
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
    ariaLabel = "trash bin solid",
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
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Listgroup, ListgroupItem, Avatar } from "$lib";\n  import { TrashBinSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="flex justify-center">\n  <Listgroup active class="w-48">\n    <h3 class="p-1 text-center text-xl font-medium text-gray-900 dark:text-white">User list</h3>\n    <ListgroupItem class="flex gap-2 text-base font-semibold">\n      <Avatar src="/images/profile-picture-1.webp" size="xs" />Jese Leos\n    </ListgroupItem>\n    <ListgroupItem class="gap-2 text-base font-semibold">\n      <Avatar src="/images/profile-picture-2.webp" size="xs" />Robert Gouth\n    </ListgroupItem>\n    <ListgroupItem class="gap-2 text-base font-semibold">\n      <Avatar src="/images/profile-picture-3.webp" size="xs" />Bonnie Green\n    </ListgroupItem>\n    <a href="/" class="flex items-center rounded-b-lg bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">\n      <TrashBinSolid class="me-2 ms-1 h-6 w-6" />\n      Delete user\n    </a>\n  </Listgroup>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Listgroup } from "$lib";\n  let simpleList = ["Profile", "Settings", "Messages", "Download"];\n<\/script>\n\n<div class="flex justify-center">\n  <Listgroup items={simpleList} class="w-48" />\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Listgroup } from "$lib";\n  let buttons = [\n    { name: "Profile", mycustomfield: "data1", current: true },\n    { name: "Settings", mycustomfield: "data2" },\n    { name: "Messages", mycustomfield: "data3" },\n    {\n      name: "Download",\n      mycustomfield: "data4",\n      disabled: true,\n      attrs: { type: "submit" }\n    }\n  ];\n\n  const handleClick = (e?: MouseEvent) => {\n    if (e?.target instanceof HTMLElement) {\n      alert("mycustomfield: " + e.target.attributes.getNamedItem("mycustomfield")?.value);\n    } else {\n      console.warn("Unexpected event target type. Cannot access attributes.");\n    }\n  };\n<\/script>\n\n<div class="flex justify-center">\n  <Listgroup active items={buttons} class="w-48" onclick={handleClick} />\n</div>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Listgroup, type ListGroupItemType } from "$lib";\n  import { AdjustmentsHorizontalSolid, DownloadSolid, MessagesSolid, UserCircleSolid } from "flowbite-svelte-icons";\n  let iconList: ListGroupItemType[] = [\n    { name: "Profile", Icon: UserCircleSolid, mycustomfield: "data1" },\n    {\n      name: "Settings",\n      Icon: AdjustmentsHorizontalSolid,\n      mycustomfield: "data2"\n    },\n    { name: "Messages", Icon: MessagesSolid, mycustomfield: "data3" },\n    { name: "Download", Icon: DownloadSolid, mycustomfield: "data4" }\n  ];\n\n  const handleClick = (e?: MouseEvent) => {\n    if (e?.target instanceof HTMLElement) {\n      console.log(e.target.attributes.getNamedItem("mycustomfield")?.value);\n    } else {\n      console.warn("Unexpected event target type. Cannot access attributes.");\n    }\n  };\n<\/script>\n\n<div class="flex justify-center">\n  <Listgroup active items={iconList} class="w-48" onclick={handleClick} />\n</div>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Listgroup, type ListGroupItemType } from "$lib";\n  let links: ListGroupItemType[] = [\n    { name: "Avatar", href: "/components/avatar" },\n    { name: "List group", href: "/components/list-group", current: true },\n    { name: "Banner", href: "/components/banner" },\n    { name: "Breadcrumbs", href: "/components/breadcrumb", target: "_blank" }\n  ];\n<\/script>\n\n<div class="flex justify-center">\n  <Listgroup active items={links} class="w-48" />\n</div>\n';
function Default($$payload) {
  let simpleList = [
    "Profile",
    "Settings",
    "Messages",
    "Download"
  ];
  $$payload.out += `<div class="flex justify-center">`;
  Listgroup($$payload, { items: simpleList, class: "w-48" });
  $$payload.out += `<!----></div>`;
}
function WithButtons($$payload, $$props) {
  push();
  let buttons = [
    {
      name: "Profile",
      mycustomfield: "data1",
      current: true
    },
    { name: "Settings", mycustomfield: "data2" },
    { name: "Messages", mycustomfield: "data3" },
    {
      name: "Download",
      mycustomfield: "data4",
      disabled: true,
      attrs: { type: "submit" }
    }
  ];
  const handleClick = (e) => {
    if (e?.target instanceof HTMLElement) {
      alert("mycustomfield: " + e.target.attributes.getNamedItem("mycustomfield")?.value);
    } else {
      console.warn("Unexpected event target type. Cannot access attributes.");
    }
  };
  $$payload.out += `<div class="flex justify-center">`;
  Listgroup($$payload, {
    active: true,
    items: buttons,
    class: "w-48",
    onclick: handleClick
  });
  $$payload.out += `<!----></div>`;
  pop();
}
function WithIcons($$payload, $$props) {
  push();
  let iconList = [
    {
      name: "Profile",
      Icon: UserCircleSolid,
      mycustomfield: "data1"
    },
    {
      name: "Settings",
      Icon: AdjustmentsHorizontalSolid,
      mycustomfield: "data2"
    },
    {
      name: "Messages",
      Icon: MessagesSolid,
      mycustomfield: "data3"
    },
    {
      name: "Download",
      Icon: DownloadSolid,
      mycustomfield: "data4"
    }
  ];
  const handleClick = (e) => {
    if (e?.target instanceof HTMLElement) {
      console.log(e.target.attributes.getNamedItem("mycustomfield")?.value);
    } else {
      console.warn("Unexpected event target type. Cannot access attributes.");
    }
  };
  $$payload.out += `<div class="flex justify-center">`;
  Listgroup($$payload, {
    active: true,
    items: iconList,
    class: "w-48",
    onclick: handleClick
  });
  $$payload.out += `<!----></div>`;
  pop();
}
function WithLinks($$payload) {
  let links = [
    { name: "Avatar", href: "/components/avatar" },
    {
      name: "List group",
      href: "/components/list-group",
      current: true
    },
    { name: "Banner", href: "/components/banner" },
    {
      name: "Breadcrumbs",
      href: "/components/breadcrumb",
      target: "_blank"
    }
  ];
  $$payload.out += `<div class="flex justify-center">`;
  Listgroup($$payload, { active: true, items: links, class: "w-48" });
  $$payload.out += `<!----></div>`;
}
function Advanced($$payload) {
  $$payload.out += `<div class="flex justify-center">`;
  Listgroup($$payload, {
    active: true,
    class: "w-48",
    children: ($$payload2) => {
      $$payload2.out += `<h3 class="p-1 text-center text-xl font-medium text-gray-900 dark:text-white">User list</h3> `;
      ListgroupItem($$payload2, {
        class: "flex gap-2 text-base font-semibold",
        children: ($$payload3) => {
          Avatar($$payload3, {
            src: "/images/profile-picture-1.webp",
            size: "xs"
          });
          $$payload3.out += `<!---->Jese Leos`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      ListgroupItem($$payload2, {
        class: "gap-2 text-base font-semibold",
        children: ($$payload3) => {
          Avatar($$payload3, {
            src: "/images/profile-picture-2.webp",
            size: "xs"
          });
          $$payload3.out += `<!---->Robert Gouth`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      ListgroupItem($$payload2, {
        class: "gap-2 text-base font-semibold",
        children: ($$payload3) => {
          Avatar($$payload3, {
            src: "/images/profile-picture-3.webp",
            size: "xs"
          });
          $$payload3.out += `<!---->Bonnie Green`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <a href="/" class="flex items-center rounded-b-lg bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">`;
      TrashBinSolid($$payload2, { class: "me-2 ms-1 h-6 w-6" });
      $$payload2.out += `<!----> Delete user</a>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function _page($$payload, $$props) {
  push();
  const dirName = "list-group";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Advanced.svelte": __vite_glob_0_0,
    "./examples/Default.svelte": __vite_glob_0_1,
    "./examples/WithButtons.svelte": __vite_glob_0_2,
    "./examples/WithIcons.svelte": __vite_glob_0_3,
    "./examples/WithLinks.svelte": __vite_glob_0_4
  });
  const exampleArr = [
    {
      name: "Default",
      component: Default
    },
    {
      name: "With links",
      component: WithLinks
    },
    {
      name: "With buttons",
      component: WithButtons
    },
    {
      name: "With icons",
      component: WithIcons
    },
    {
      name: "Advanced",
      component: Advanced
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
        $$payload3.out += `<!---->List group`;
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
              labelClass: "w-32 my-1",
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
