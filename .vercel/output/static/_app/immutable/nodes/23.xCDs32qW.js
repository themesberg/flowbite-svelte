import { a as append, n as ns_template, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, g as getContext, c as child, r as reset, t as template_effect, s as sibling, n as next, b as get, a as pop, d as derived, f as first_child, a6 as state, u as user_effect, a7 as set } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { p as prop, i as if_block, r as rest_props, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { s as set_attribute, a as set_attributes, t as twMerge, L as ListgroupItem, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { L as Listgroup } from "../chunks/Listgroup.2O2zmFyz.js";
import { i as init } from "../chunks/lifecycle.BITzOuoa.js";
import { D as DownloadSolid } from "../chunks/DownloadSolid.CMQdquKG.js";
import { U as UserCircleSolid } from "../chunks/UserCircleSolid.C5EoQM_S.js";
import { A as Avatar } from "../chunks/Avatar.BvpffrdL.js";
var root_1$3 = ns_template(`<title> </title>`);
var root_2$3 = ns_template(`<desc> </desc>`);
var root$8 = ns_template(`<svg><!><!><path d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z"></path></svg>`);
function AdjustmentsHorizontalSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "adjustments horizontal solid"), restProps = rest_props($$props, [
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
  var svg = root$8();
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
    var desc_1 = root_2$3();
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
var root_1$2 = ns_template(`<title> </title>`);
var root_2$2 = ns_template(`<desc> </desc>`);
var root$7 = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z" clip-rule="evenodd"></path></svg>`);
function MessagesSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "messages solid"), restProps = rest_props($$props, [
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
    var title_1 = root_1$2();
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
    var desc_1 = root_2$2();
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
var root_1$1 = ns_template(`<title> </title>`);
var root_2$1 = ns_template(`<desc> </desc>`);
var root$6 = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd"></path></svg>`);
function TrashBinSolid($$anchor, $$props) {
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
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "trash bin solid"), restProps = rest_props($$props, [
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
  var svg = root$6();
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
    var desc_1 = root_2$1();
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
const __vite_glob_0_0 = '<script lang="ts">\n  import { Listgroup, ListgroupItem, Avatar } from "$lib";\n  import { TrashBinSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="flex justify-center">\n  <Listgroup active class="w-48">\n    <h3 class="p-1 text-center text-xl font-medium text-gray-900 dark:text-white">User list</h3>\n    <ListgroupItem class="flex gap-2 text-base font-semibold">\n      <Avatar src="/images/profile-picture-1.webp" size="xs" />Jese Leos\n    </ListgroupItem>\n    <ListgroupItem class="gap-2 text-base font-semibold">\n      <Avatar src="/images/profile-picture-2.webp" size="xs" />Robert Gouth\n    </ListgroupItem>\n    <ListgroupItem class="gap-2 text-base font-semibold">\n      <Avatar src="/images/profile-picture-3.webp" size="xs" />Bonnie Green\n    </ListgroupItem>\n    <a href="/" class="flex items-center rounded-b-lg bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">\n      <TrashBinSolid class="me-2 ms-1 h-6 w-6" />\n      Delete user\n    </a>\n  </Listgroup>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Listgroup } from "$lib";\n  let simpleList = ["Profile", "Settings", "Messages", "Download"];\n<\/script>\n\n<div class="flex justify-center">\n  <Listgroup items={simpleList} class="w-48" />\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Listgroup } from "$lib";\n  let buttons = [\n    { name: "Profile", mycustomfield: "data1", current: true },\n    { name: "Settings", mycustomfield: "data2" },\n    { name: "Messages", mycustomfield: "data3" },\n    {\n      name: "Download",\n      mycustomfield: "data4",\n      disabled: true,\n      attrs: { type: "submit" }\n    }\n  ];\n\n  const handleClick = (e?: MouseEvent) => {\n    if (e?.target instanceof HTMLElement) {\n      alert("mycustomfield: " + e.target.attributes.getNamedItem("mycustomfield")?.value);\n    } else {\n      console.warn("Unexpected event target type. Cannot access attributes.");\n    }\n  };\n<\/script>\n\n<div class="flex justify-center">\n  <Listgroup active items={buttons} class="w-48" onclick={handleClick} />\n</div>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Listgroup, type ListGroupItemType } from "$lib";\n  import { AdjustmentsHorizontalSolid, DownloadSolid, MessagesSolid, UserCircleSolid } from "flowbite-svelte-icons";\n  let iconList: ListGroupItemType[] = [\n    { name: "Profile", Icon: UserCircleSolid, mycustomfield: "data1" },\n    {\n      name: "Settings",\n      Icon: AdjustmentsHorizontalSolid,\n      mycustomfield: "data2"\n    },\n    { name: "Messages", Icon: MessagesSolid, mycustomfield: "data3" },\n    { name: "Download", Icon: DownloadSolid, mycustomfield: "data4" }\n  ];\n\n  const handleClick = (e?: MouseEvent) => {\n    if (e?.target instanceof HTMLElement) {\n      console.log(e.target.attributes.getNamedItem("mycustomfield")?.value);\n    } else {\n      console.warn("Unexpected event target type. Cannot access attributes.");\n    }\n  };\n<\/script>\n\n<div class="flex justify-center">\n  <Listgroup active items={iconList} class="w-48" onclick={handleClick} />\n</div>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Listgroup, type ListGroupItemType } from "$lib";\n  let links: ListGroupItemType[] = [\n    { name: "Avatar", href: "/components/avatar" },\n    { name: "List group", href: "/components/list-group", current: true },\n    { name: "Banner", href: "/components/banner" },\n    { name: "Breadcrumbs", href: "/components/breadcrumb", target: "_blank" }\n  ];\n<\/script>\n\n<div class="flex justify-center">\n  <Listgroup active items={links} class="w-48" />\n</div>\n';
var root$5 = template(`<div class="flex justify-center"><!></div>`);
function Default($$anchor) {
  let simpleList = [
    "Profile",
    "Settings",
    "Messages",
    "Download"
  ];
  var div = root$5();
  var node = child(div);
  Listgroup(node, { items: simpleList, class: "w-48" });
  reset(div);
  append($$anchor, div);
}
var root$4 = template(`<div class="flex justify-center"><!></div>`);
function WithButtons($$anchor, $$props) {
  push($$props, false);
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
    var _a;
    if ((e == null ? void 0 : e.target) instanceof HTMLElement) {
      alert("mycustomfield: " + ((_a = e.target.attributes.getNamedItem("mycustomfield")) == null ? void 0 : _a.value));
    } else {
      console.warn("Unexpected event target type. Cannot access attributes.");
    }
  };
  init();
  var div = root$4();
  var node = child(div);
  Listgroup(node, {
    active: true,
    items: buttons,
    class: "w-48",
    onclick: handleClick
  });
  reset(div);
  append($$anchor, div);
  pop();
}
var root$3 = template(`<div class="flex justify-center"><!></div>`);
function WithIcons($$anchor, $$props) {
  push($$props, false);
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
    var _a;
    if ((e == null ? void 0 : e.target) instanceof HTMLElement) {
      console.log((_a = e.target.attributes.getNamedItem("mycustomfield")) == null ? void 0 : _a.value);
    } else {
      console.warn("Unexpected event target type. Cannot access attributes.");
    }
  };
  init();
  var div = root$3();
  var node = child(div);
  Listgroup(node, {
    active: true,
    items: iconList,
    class: "w-48",
    onclick: handleClick
  });
  reset(div);
  append($$anchor, div);
  pop();
}
var root$2 = template(`<div class="flex justify-center"><!></div>`);
function WithLinks($$anchor) {
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
  var div = root$2();
  var node = child(div);
  Listgroup(node, { active: true, items: links, class: "w-48" });
  reset(div);
  append($$anchor, div);
}
var root_2 = template(`<!>Jese Leos`, 1);
var root_3$1 = template(`<!>Robert Gouth`, 1);
var root_4 = template(`<!>Bonnie Green`, 1);
var root_1 = template(`<h3 class="p-1 text-center text-xl font-medium text-gray-900 dark:text-white">User list</h3> <!> <!> <!> <a href="/" class="flex items-center rounded-b-lg bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600"><!> Delete user</a>`, 1);
var root$1 = template(`<div class="flex justify-center"><!></div>`);
function Advanced($$anchor) {
  var div = root$1();
  var node = child(div);
  Listgroup(node, {
    active: true,
    class: "w-48",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1();
      var node_1 = sibling(first_child(fragment), 2);
      ListgroupItem(node_1, {
        class: "flex gap-2 text-base font-semibold",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_1 = root_2();
          var node_2 = first_child(fragment_1);
          Avatar(node_2, {
            src: "/images/profile-picture-1.webp",
            size: "xs"
          });
          next();
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
      var node_3 = sibling(node_1, 2);
      ListgroupItem(node_3, {
        class: "gap-2 text-base font-semibold",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_3$1();
          var node_4 = first_child(fragment_2);
          Avatar(node_4, {
            src: "/images/profile-picture-2.webp",
            size: "xs"
          });
          next();
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      var node_5 = sibling(node_3, 2);
      ListgroupItem(node_5, {
        class: "gap-2 text-base font-semibold",
        children: ($$anchor3, $$slotProps2) => {
          var fragment_3 = root_4();
          var node_6 = first_child(fragment_3);
          Avatar(node_6, {
            src: "/images/profile-picture-3.webp",
            size: "xs"
          });
          next();
          append($$anchor3, fragment_3);
        },
        $$slots: { default: true }
      });
      var a = sibling(node_5, 2);
      var node_7 = child(a);
      TrashBinSolid(node_7, { class: "me-2 ms-1 h-6 w-6" });
      next();
      reset(a);
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_3 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
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
      var text$1 = text("List group");
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
            labelClass: "w-32 my-1",
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
