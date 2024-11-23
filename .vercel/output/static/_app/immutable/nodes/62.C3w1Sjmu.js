import { c as comment, a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, f as first_child, t as template_effect, a as pop, N as NAMESPACE_SVG, b as get, d as derived, s as sibling, c as child, n as next, r as reset, a6 as state, u as user_effect, a7 as set } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { r as rest_props, b as proxy, i as if_block, c as component } from "../chunks/props.B7eOu8hW.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { a as set_attributes, aF as descriptionList, U as list, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { e as element, H as H1, a as Heading } from "../chunks/H1.DunGd_Oq.js";
import { L as List, a as Li } from "../chunks/Li.B0Fkn06d.js";
import { C as CheckCircleSolid } from "../chunks/CheckCircleSolid.D51Mv3aE.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { A } from "../chunks/A.XuSt3J-W.js";
function DescriptionList($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "tag",
    "class"
  ]);
  let classDesc = derived(() => descriptionList({ tag: $$props.tag, class: $$props.class }));
  var fragment = comment();
  var node = first_child(fragment);
  element(node, () => $$props.tag, false, ($$element, $$anchor2) => {
    let attributes;
    template_effect(() => attributes = set_attributes($$element, attributes, { ...restProps, class: get(classDesc) }, void 0, $$element.namespaceURI === NAMESPACE_SVG, $$element.nodeName.includes("-")));
    var fragment_1 = comment();
    var node_1 = first_child(fragment_1);
    snippet(node_1, () => $$props.children);
    append($$anchor2, fragment_1);
  });
  append($$anchor, fragment);
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { List, Li } from "$lib";\n<\/script>\n\n<List tag="dl" class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">\n  <Li class="pb-3 sm:pb-4">\n    <div class="flex items-center space-x-4 rtl:space-x-reverse">\n      <div class="flex-shrink-0">\n        <img class="h-8 w-8 rounded-full" src="/images/profile-picture-1.webp" alt="Neil profile" />\n      </div>\n      <div class="min-w-0 flex-1">\n        <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>\n        <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>\n      </div>\n      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>\n    </div>\n  </Li>\n  <Li class="py-3 sm:py-4">\n    <div class="flex items-center space-x-4 rtl:space-x-reverse">\n      <div class="flex-shrink-0">\n        <img class="h-8 w-8 rounded-full" src="/images/profile-picture-2.webp" alt="Bonnie profile" />\n      </div>\n      <div class="min-w-0 flex-1">\n        <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>\n        <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>\n      </div>\n      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$3467</div>\n    </div>\n  </Li>\n  <Li class="py-3 sm:py-4">\n    <div class="flex items-center space-x-4 rtl:space-x-reverse">\n      <div class="flex-shrink-0">\n        <img class="h-8 w-8 rounded-full" src="/images/profile-picture-3.webp" alt="Michael profile" />\n      </div>\n      <div class="min-w-0 flex-1">\n        <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p>\n        <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>\n      </div>\n      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>\n    </div>\n  </Li>\n  <Li class="py-3 sm:py-4">\n    <div class="flex items-center space-x-4 rtl:space-x-reverse">\n      <div class="flex-shrink-0">\n        <img class="h-8 w-8 rounded-full" src="/images/profile-picture-4.webp" alt="Thomas profile" />\n      </div>\n      <div class="min-w-0 flex-1">\n        <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Thomas Lean</p>\n        <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>\n      </div>\n      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$2367</div>\n    </div>\n  </Li>\n  <Li class="py-3 sm:py-4">\n    <div class="flex items-center space-x-4 rtl:space-x-reverse">\n      <div class="flex-shrink-0">\n        <img class="h-8 w-8 rounded-full" src="/images/profile-picture-5.webp" alt="Lana profile" />\n      </div>\n      <div class="min-w-0 flex-1">\n        <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>\n        <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>\n      </div>\n      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>\n    </div>\n  </Li>\n</List>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { List, DescriptionList } from "$lib";\n<\/script>\n\n<List tag="dl" class="divide-y divide-gray-200 text-gray-900 dark:divide-gray-700  dark:text-white">\n  <div class="flex flex-col pb-3">\n    <DescriptionList tag="dt" class="mb-1">Email address</DescriptionList>\n    <DescriptionList tag="dd">yourname@flowbite.com</DescriptionList>\n  </div>\n  <div class="flex flex-col pb-3">\n    <DescriptionList tag="dt" class="mb-1">Home address</DescriptionList>\n    <DescriptionList tag="dd">92 Miles Drive, Newark, NJ 07103, California, USA</DescriptionList>\n  </div>\n  <div class="flex flex-col pb-3">\n    <DescriptionList tag="dt" class="mb-1">Phone number</DescriptionList>\n    <DescriptionList tag="dd">+00 123 456 789 / +12 345 678</DescriptionList>\n  </div>\n</List>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { List, Li, A } from "$lib";\n<\/script>\n\n<List tag="ul" class="flex flex-wrap items-center justify-center">\n  <Li>\n    <A href="/" class="me-4 text-red-700 hover:underline md:me-6 dark:text-red-200">About</A>\n  </Li>\n  <Li>\n    <A href="/" class="me-4 text-blue-700 hover:underline md:me-6 dark:text-blue-200">Premium</A>\n  </Li>\n  <Li>\n    <A href="/" class="me-4 text-green-700 hover:underline md:me-6 dark:text-green-200">Campaigns</A>\n  </Li>\n  <Li>\n    <A href="/" class="me-4 text-yellow-700 hover:underline md:me-6 dark:text-yellow-200">Blog</A>\n  </Li>\n  <Li>\n    <A href="/" class="me-4 text-gray-700 hover:underline md:me-6 dark:text-gray-200">Affiliate Program</A>\n  </Li>\n  <Li>\n    <A href="/" class="me-4 text-pink-700 hover:underline md:me-6 dark:text-pink-200">FAQs</A>\n  </Li>\n</List>\n';
const __vite_glob_0_3 = '<script>\n  import { List, Li } from "svelte-5-ui-lib";\n  import { CheckCircleSolid } from "flowbite-svelte-icons";\n<\/script>\n';
var root_2 = template(`<div class="flex items-center space-x-4 rtl:space-x-reverse"><div class="flex-shrink-0"><img class="h-8 w-8 rounded-full" src="/images/profile-picture-1.webp" alt="Neil profile"></div> <div class="min-w-0 flex-1"><p class="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p> <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p></div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div></div>`);
var root_3 = template(`<div class="flex items-center space-x-4 rtl:space-x-reverse"><div class="flex-shrink-0"><img class="h-8 w-8 rounded-full" src="/images/profile-picture-2.webp" alt="Bonnie profile"></div> <div class="min-w-0 flex-1"><p class="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p> <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p></div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$3467</div></div>`);
var root_4 = template(`<div class="flex items-center space-x-4 rtl:space-x-reverse"><div class="flex-shrink-0"><img class="h-8 w-8 rounded-full" src="/images/profile-picture-3.webp" alt="Michael profile"></div> <div class="min-w-0 flex-1"><p class="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p> <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p></div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div></div>`);
var root_5$1 = template(`<div class="flex items-center space-x-4 rtl:space-x-reverse"><div class="flex-shrink-0"><img class="h-8 w-8 rounded-full" src="/images/profile-picture-4.webp" alt="Thomas profile"></div> <div class="min-w-0 flex-1"><p class="truncate text-sm font-medium text-gray-900 dark:text-white">Thomas Lean</p> <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p></div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$2367</div></div>`);
var root_6 = template(`<div class="flex items-center space-x-4 rtl:space-x-reverse"><div class="flex-shrink-0"><img class="h-8 w-8 rounded-full" src="/images/profile-picture-5.webp" alt="Lana profile"></div> <div class="min-w-0 flex-1"><p class="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p> <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p></div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div></div>`);
var root_1$2 = template(`<!> <!> <!> <!> <!>`, 1);
function AdvancedLayout($$anchor) {
  List($$anchor, {
    tag: "dl",
    class: "max-w-md divide-y divide-gray-200 dark:divide-gray-700",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$2();
      var node = first_child(fragment_1);
      Li(node, {
        class: "pb-3 sm:pb-4",
        children: ($$anchor3, $$slotProps2) => {
          var div = root_2();
          append($$anchor3, div);
        },
        $$slots: { default: true }
      });
      var node_1 = sibling(node, 2);
      Li(node_1, {
        class: "py-3 sm:py-4",
        children: ($$anchor3, $$slotProps2) => {
          var div_1 = root_3();
          append($$anchor3, div_1);
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node_1, 2);
      Li(node_2, {
        class: "py-3 sm:py-4",
        children: ($$anchor3, $$slotProps2) => {
          var div_2 = root_4();
          append($$anchor3, div_2);
        },
        $$slots: { default: true }
      });
      var node_3 = sibling(node_2, 2);
      Li(node_3, {
        class: "py-3 sm:py-4",
        children: ($$anchor3, $$slotProps2) => {
          var div_3 = root_5$1();
          append($$anchor3, div_3);
        },
        $$slots: { default: true }
      });
      var node_4 = sibling(node_3, 2);
      Li(node_4, {
        class: "py-3 sm:py-4",
        children: ($$anchor3, $$slotProps2) => {
          var div_4 = root_6();
          append($$anchor3, div_4);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_1$1 = template(`<div class="flex flex-col pb-3"><!> <!></div> <div class="flex flex-col pb-3"><!> <!></div> <div class="flex flex-col pb-3"><!> <!></div>`, 1);
function DescriptionList_1($$anchor) {
  List($$anchor, {
    tag: "dl",
    class: "divide-y divide-gray-200 text-gray-900 dark:divide-gray-700  dark:text-white",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$1();
      var div = first_child(fragment_1);
      var node = child(div);
      DescriptionList(node, {
        tag: "dt",
        class: "mb-1",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("Email address");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      var node_1 = sibling(node, 2);
      DescriptionList(node_1, {
        tag: "dd",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_1 = text("yourname@flowbite.com");
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
      reset(div);
      var div_1 = sibling(div, 2);
      var node_2 = child(div_1);
      DescriptionList(node_2, {
        tag: "dt",
        class: "mb-1",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_2 = text("Home address");
          append($$anchor3, text_2);
        },
        $$slots: { default: true }
      });
      var node_3 = sibling(node_2, 2);
      DescriptionList(node_3, {
        tag: "dd",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_3 = text("92 Miles Drive, Newark, NJ 07103, California, USA");
          append($$anchor3, text_3);
        },
        $$slots: { default: true }
      });
      reset(div_1);
      var div_2 = sibling(div_1, 2);
      var node_4 = child(div_2);
      DescriptionList(node_4, {
        tag: "dt",
        class: "mb-1",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_4 = text("Phone number");
          append($$anchor3, text_4);
        },
        $$slots: { default: true }
      });
      var node_5 = sibling(node_4, 2);
      DescriptionList(node_5, {
        tag: "dd",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_5 = text("+00 123 456 789 / +12 345 678");
          append($$anchor3, text_5);
        },
        $$slots: { default: true }
      });
      reset(div_2);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_1 = template(`<!> <!> <!> <!> <!> <!>`, 1);
function HorizontalList($$anchor) {
  List($$anchor, {
    tag: "ul",
    class: "flex flex-wrap items-center justify-center",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1();
      var node = first_child(fragment_1);
      Li(node, {
        children: ($$anchor3, $$slotProps2) => {
          A($$anchor3, {
            href: "/",
            class: "me-4 text-red-700 hover:underline md:me-6 dark:text-red-200",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("About");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      var node_1 = sibling(node, 2);
      Li(node_1, {
        children: ($$anchor3, $$slotProps2) => {
          A($$anchor3, {
            href: "/",
            class: "me-4 text-blue-700 hover:underline md:me-6 dark:text-blue-200",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Premium");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node_1, 2);
      Li(node_2, {
        children: ($$anchor3, $$slotProps2) => {
          A($$anchor3, {
            href: "/",
            class: "me-4 text-green-700 hover:underline md:me-6 dark:text-green-200",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_2 = text("Campaigns");
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      var node_3 = sibling(node_2, 2);
      Li(node_3, {
        children: ($$anchor3, $$slotProps2) => {
          A($$anchor3, {
            href: "/",
            class: "me-4 text-yellow-700 hover:underline md:me-6 dark:text-yellow-200",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_3 = text("Blog");
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      var node_4 = sibling(node_3, 2);
      Li(node_4, {
        children: ($$anchor3, $$slotProps2) => {
          A($$anchor3, {
            href: "/",
            class: "me-4 text-gray-700 hover:underline md:me-6 dark:text-gray-200",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_4 = text("Affiliate Program");
              append($$anchor4, text_4);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      var node_5 = sibling(node_4, 2);
      Li(node_5, {
        children: ($$anchor3, $$slotProps2) => {
          A($$anchor3, {
            href: "/",
            class: "me-4 text-pink-700 hover:underline md:me-6 dark:text-pink-200",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_5 = text("FAQs");
              append($$anchor4, text_5);
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
}
var root_11 = template(`<!> <!> <!>`, 1);
var root_8 = template(`<!>At least 10 characters (and up to 100 characters) <!>`, 1);
var root_15 = template(`<!>At least one lowercase character`, 1);
var root_17 = template(`<!>Inclusion of at least one special character, e.g., ! @ # ?`, 1);
var root_7 = template(`<!> <!> <!>`, 1);
var root_5 = template(`<!> <!> <div class="mb-4 mt-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!> <!></div>`, 1);
var root_30 = template(`<div class="mb-8 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "typography/list";
  const tags = Object.keys(list.variants.tag);
  let listTag = state("ul");
  const positions = Object.keys(list.variants.position);
  let listPosition = state("inside");
  let listIcon = state(false);
  const changeListIcon = () => {
    set(listIcon, !get(listIcon));
    if (get(listIcon)) {
      set(nested, false);
    }
  };
  let ctxClass = state("");
  const changeCtxClass = () => {
    set(ctxClass, proxy(get(ctxClass) === "" ? "pl-8" : ""));
  };
  let nested = state(false);
  const changeNested = () => {
    set(nested, !get(nested));
    if (get(nested)) {
      set(listIcon, false);
    }
  };
  let generatedCode = derived(() => (() => {
    let props = [];
    let iconSlot;
    let liIcon;
    let nestedContent;
    if (get(listTag) !== "ul") props.push(` tag="${get(listTag)}"`);
    if (get(listPosition) !== "inside") props.push(` position="${get(listPosition)}"`);
    iconSlot = get(listIcon) ? `<CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />` : "";
    if (get(ctxClass)) props.push(` ctxClass="${get(ctxClass)}"`);
    liIcon = get(listIcon) ? ` icon` : "";
    nestedContent = get(nested) ? `<List tag="ol" ctxClass="mt-2 space-y-1 ps-5">
      <Li>item 1-1</Li>
      <Li>item 1-2</Li>
      <Li>item 1-3</Li>
    </List>
      ` : "";
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<List${propsString}>
  <Li${liIcon}>${iconSlot}Item 1${nestedContent}</Li>
  <Li${liIcon}>${iconSlot}Item 2</Li>
  <Li${liIcon}>${iconSlot}Item 3</Li>
</List>`;
  })());
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/AdvancedLayout.svelte": __vite_glob_0_0,
    "./examples/DescriptionList.svelte": __vite_glob_0_1,
    "./examples/HorizontalList.svelte": __vite_glob_0_2,
    "./examples/Setup.svelte": __vite_glob_0_3
  });
  console.log("typeof exampleModules", exampleModules);
  const exampleArr = [
    {
      name: "Description list",
      component: DescriptionList_1
    },
    {
      name: "Horizontal list",
      component: HorizontalList
    },
    {
      name: "Advanced layout",
      component: AdvancedLayout
    }
  ];
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
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
      var text$1 = text("List");
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
      var text_2 = text("Interactive List Builder");
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
        Heading(node_5, {
          tag: "h2",
          class: "mb-2 text-lg font-semibold text-gray-900 dark:text-white",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text("List title");
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        var node_6 = sibling(node_5, 2);
        List(node_6, {
          get tag() {
            return get(listTag);
          },
          get position() {
            return get(listPosition);
          },
          class: "space-y-1 text-gray-500 dark:text-gray-400",
          get ctxClass() {
            return get(ctxClass);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_3 = root_7();
            var node_7 = first_child(fragment_3);
            Li(node_7, {
              get icon() {
                return get(listIcon);
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_4 = root_8();
                var node_8 = first_child(fragment_4);
                if_block(node_8, () => get(listIcon), ($$anchor5) => {
                  CheckCircleSolid($$anchor5, {
                    class: "me-2 h-5 w-5 text-green-500 dark:text-green-400"
                  });
                });
                var node_9 = sibling(node_8, 2);
                if_block(node_9, () => get(nested), ($$anchor5) => {
                  List($$anchor5, {
                    tag: "ol",
                    ctxClass: "mt-2 space-y-1 ps-5",
                    children: ($$anchor6, $$slotProps4) => {
                      var fragment_7 = root_11();
                      var node_10 = first_child(fragment_7);
                      Li(node_10, {
                        children: ($$anchor7, $$slotProps5) => {
                          next();
                          var text_4 = text("item 1-1");
                          append($$anchor7, text_4);
                        },
                        $$slots: { default: true }
                      });
                      var node_11 = sibling(node_10, 2);
                      Li(node_11, {
                        children: ($$anchor7, $$slotProps5) => {
                          next();
                          var text_5 = text("item 1-2");
                          append($$anchor7, text_5);
                        },
                        $$slots: { default: true }
                      });
                      var node_12 = sibling(node_11, 2);
                      Li(node_12, {
                        children: ($$anchor7, $$slotProps5) => {
                          next();
                          var text_6 = text("item 1-3");
                          append($$anchor7, text_6);
                        },
                        $$slots: { default: true }
                      });
                      append($$anchor6, fragment_7);
                    },
                    $$slots: { default: true }
                  });
                });
                append($$anchor4, fragment_4);
              },
              $$slots: { default: true }
            });
            var node_13 = sibling(node_7, 2);
            Li(node_13, {
              get icon() {
                return get(listIcon);
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_8 = root_15();
                var node_14 = first_child(fragment_8);
                if_block(node_14, () => get(listIcon), ($$anchor5) => {
                  CheckCircleSolid($$anchor5, {
                    class: "me-2 h-5 w-5 text-green-500 dark:text-green-400"
                  });
                });
                next();
                append($$anchor4, fragment_8);
              },
              $$slots: { default: true }
            });
            var node_15 = sibling(node_13, 2);
            Li(node_15, {
              get icon() {
                return get(listIcon);
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_10 = root_17();
                var node_16 = first_child(fragment_10);
                if_block(node_16, () => get(listIcon), ($$anchor5) => {
                  CheckCircleSolid($$anchor5, {
                    class: "me-2 h-5 w-5 text-green-500 dark:text-green-400"
                  });
                });
                next();
                append($$anchor4, fragment_10);
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_3);
          },
          $$slots: { default: true }
        });
        var div = sibling(node_6, 2);
        var node_17 = child(div);
        Label(node_17, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_7 = text("Tag");
            append($$anchor3, text_7);
          },
          $$slots: { default: true }
        });
        var node_18 = sibling(node_17, 2);
        each(node_18, 17, () => tags, index, ($$anchor3, tag) => {
          Radio($$anchor3, {
            labelClass: "w-20 my-1",
            name: "list_tag",
            get group() {
              return get(listTag);
            },
            set group($$value) {
              set(listTag, proxy($$value));
            },
            get value() {
              return get(tag);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_8 = text();
              template_effect(() => set_text(text_8, get(tag)));
              append($$anchor4, text_8);
            },
            $$slots: { default: true }
          });
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var node_19 = child(div_1);
        Label(node_19, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text("Position");
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        var node_20 = sibling(node_19, 2);
        each(node_20, 17, () => positions, index, ($$anchor3, position) => {
          Radio($$anchor3, {
            labelClass: "w-20 my-1",
            name: "list_position",
            get group() {
              return get(listPosition);
            },
            set group($$value) {
              set(listPosition, proxy($$value));
            },
            get value() {
              return get(position);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_10 = text();
              template_effect(() => set_text(text_10, get(position)));
              append($$anchor4, text_10);
            },
            $$slots: { default: true }
          });
        });
        reset(div_1);
        var div_2 = sibling(div_1, 2);
        var node_21 = child(div_2);
        Button(node_21, {
          class: "w-48",
          color: "blue",
          onclick: changeListIcon,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_11 = text();
            template_effect(() => set_text(text_11, get(listIcon) ? "Remove icon" : "Add icon"));
            append($$anchor3, text_11);
          },
          $$slots: { default: true }
        });
        var node_22 = sibling(node_21, 2);
        Button(node_22, {
          class: "w-48",
          color: "rose",
          onclick: changeCtxClass,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_12 = text();
            template_effect(() => set_text(text_12, get(ctxClass) !== "" ? "Remove ctxClass" : "Add ctxClass"));
            append($$anchor3, text_12);
          },
          $$slots: { default: true }
        });
        var node_23 = sibling(node_22, 2);
        Button(node_23, {
          class: "w-48",
          color: "teal",
          onclick: changeNested,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_13 = text();
            template_effect(() => set_text(text_13, get(nested) ? "Remove nested" : "Add nested"));
            append($$anchor3, text_13);
          },
          $$slots: { default: true }
        });
        reset(div_2);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_24 = sibling(node_4, 2);
  H2(node_24, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_14 = text("Examples");
      append($$anchor2, text_14);
    },
    $$slots: { default: true }
  });
  var node_25 = sibling(node_24, 2);
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
    CodeWrapper(node_25, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_20 = root_30();
        var div_3 = first_child(fragment_20);
        var node_26 = child(div_3);
        Label(node_26, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_15 = text("Example");
            append($$anchor3, text_15);
          },
          $$slots: { default: true }
        });
        var node_27 = sibling(node_26, 2);
        each(node_27, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-36 my-1",
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
              var text_16 = text();
              template_effect(() => set_text(text_16, get(style).name));
              append($$anchor4, text_16);
            },
            $$slots: { default: true }
          });
        });
        reset(div_3);
        var node_28 = sibling(div_3, 2);
        component(node_28, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_20);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_29 = sibling(node_25, 2);
  H2(node_29, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_17 = text("Component data");
      append($$anchor2, text_17);
    },
    $$slots: { default: true }
  });
  var node_30 = sibling(node_29, 2);
  CompoAttributesViewer(node_30, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
