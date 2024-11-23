import { Q as push, a5 as element, a0 as spread_attributes, S as pop, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like, V as escape_html } from "../../../../chunks/index.js";
import { aZ as descriptionList, aS as list } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { a as H1, H as Heading } from "../../../../chunks/H1.js";
import { L as List, a as Li } from "../../../../chunks/Li.js";
import { C as CheckCircleSolid } from "../../../../chunks/CheckCircleSolid.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { A } from "../../../../chunks/A.js";
function DescriptionList($$payload, $$props) {
  push();
  let {
    children,
    tag,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let classDesc = descriptionList({ tag, class: className });
  element(
    $$payload,
    tag,
    () => {
      $$payload.out += `${spread_attributes({ ...restProps, class: classDesc })}`;
    },
    () => {
      children($$payload);
      $$payload.out += `<!---->`;
    }
  );
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { List, Li } from "$lib";\n<\/script>\n\n<List tag="dl" class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">\n  <Li class="pb-3 sm:pb-4">\n    <div class="flex items-center space-x-4 rtl:space-x-reverse">\n      <div class="flex-shrink-0">\n        <img class="h-8 w-8 rounded-full" src="/images/profile-picture-1.webp" alt="Neil profile" />\n      </div>\n      <div class="min-w-0 flex-1">\n        <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>\n        <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>\n      </div>\n      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>\n    </div>\n  </Li>\n  <Li class="py-3 sm:py-4">\n    <div class="flex items-center space-x-4 rtl:space-x-reverse">\n      <div class="flex-shrink-0">\n        <img class="h-8 w-8 rounded-full" src="/images/profile-picture-2.webp" alt="Bonnie profile" />\n      </div>\n      <div class="min-w-0 flex-1">\n        <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>\n        <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>\n      </div>\n      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$3467</div>\n    </div>\n  </Li>\n  <Li class="py-3 sm:py-4">\n    <div class="flex items-center space-x-4 rtl:space-x-reverse">\n      <div class="flex-shrink-0">\n        <img class="h-8 w-8 rounded-full" src="/images/profile-picture-3.webp" alt="Michael profile" />\n      </div>\n      <div class="min-w-0 flex-1">\n        <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p>\n        <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>\n      </div>\n      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>\n    </div>\n  </Li>\n  <Li class="py-3 sm:py-4">\n    <div class="flex items-center space-x-4 rtl:space-x-reverse">\n      <div class="flex-shrink-0">\n        <img class="h-8 w-8 rounded-full" src="/images/profile-picture-4.webp" alt="Thomas profile" />\n      </div>\n      <div class="min-w-0 flex-1">\n        <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Thomas Lean</p>\n        <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>\n      </div>\n      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$2367</div>\n    </div>\n  </Li>\n  <Li class="py-3 sm:py-4">\n    <div class="flex items-center space-x-4 rtl:space-x-reverse">\n      <div class="flex-shrink-0">\n        <img class="h-8 w-8 rounded-full" src="/images/profile-picture-5.webp" alt="Lana profile" />\n      </div>\n      <div class="min-w-0 flex-1">\n        <p class="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>\n        <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>\n      </div>\n      <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>\n    </div>\n  </Li>\n</List>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { List, DescriptionList } from "$lib";\n<\/script>\n\n<List tag="dl" class="divide-y divide-gray-200 text-gray-900 dark:divide-gray-700  dark:text-white">\n  <div class="flex flex-col pb-3">\n    <DescriptionList tag="dt" class="mb-1">Email address</DescriptionList>\n    <DescriptionList tag="dd">yourname@flowbite.com</DescriptionList>\n  </div>\n  <div class="flex flex-col pb-3">\n    <DescriptionList tag="dt" class="mb-1">Home address</DescriptionList>\n    <DescriptionList tag="dd">92 Miles Drive, Newark, NJ 07103, California, USA</DescriptionList>\n  </div>\n  <div class="flex flex-col pb-3">\n    <DescriptionList tag="dt" class="mb-1">Phone number</DescriptionList>\n    <DescriptionList tag="dd">+00 123 456 789 / +12 345 678</DescriptionList>\n  </div>\n</List>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { List, Li, A } from "$lib";\n<\/script>\n\n<List tag="ul" class="flex flex-wrap items-center justify-center">\n  <Li>\n    <A href="/" class="me-4 text-red-700 hover:underline md:me-6 dark:text-red-200">About</A>\n  </Li>\n  <Li>\n    <A href="/" class="me-4 text-blue-700 hover:underline md:me-6 dark:text-blue-200">Premium</A>\n  </Li>\n  <Li>\n    <A href="/" class="me-4 text-green-700 hover:underline md:me-6 dark:text-green-200">Campaigns</A>\n  </Li>\n  <Li>\n    <A href="/" class="me-4 text-yellow-700 hover:underline md:me-6 dark:text-yellow-200">Blog</A>\n  </Li>\n  <Li>\n    <A href="/" class="me-4 text-gray-700 hover:underline md:me-6 dark:text-gray-200">Affiliate Program</A>\n  </Li>\n  <Li>\n    <A href="/" class="me-4 text-pink-700 hover:underline md:me-6 dark:text-pink-200">FAQs</A>\n  </Li>\n</List>\n';
const __vite_glob_0_3 = '<script>\n  import { List, Li } from "svelte-5-ui-lib";\n  import { CheckCircleSolid } from "flowbite-svelte-icons";\n<\/script>\n';
function AdvancedLayout($$payload) {
  List($$payload, {
    tag: "dl",
    class: "max-w-md divide-y divide-gray-200 dark:divide-gray-700",
    children: ($$payload2) => {
      Li($$payload2, {
        class: "pb-3 sm:pb-4",
        children: ($$payload3) => {
          $$payload3.out += `<div class="flex items-center space-x-4 rtl:space-x-reverse"><div class="flex-shrink-0"><img class="h-8 w-8 rounded-full" src="/images/profile-picture-1.webp" alt="Neil profile"></div> <div class="min-w-0 flex-1"><p class="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p> <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p></div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        class: "py-3 sm:py-4",
        children: ($$payload3) => {
          $$payload3.out += `<div class="flex items-center space-x-4 rtl:space-x-reverse"><div class="flex-shrink-0"><img class="h-8 w-8 rounded-full" src="/images/profile-picture-2.webp" alt="Bonnie profile"></div> <div class="min-w-0 flex-1"><p class="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p> <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p></div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$3467</div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        class: "py-3 sm:py-4",
        children: ($$payload3) => {
          $$payload3.out += `<div class="flex items-center space-x-4 rtl:space-x-reverse"><div class="flex-shrink-0"><img class="h-8 w-8 rounded-full" src="/images/profile-picture-3.webp" alt="Michael profile"></div> <div class="min-w-0 flex-1"><p class="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p> <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p></div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        class: "py-3 sm:py-4",
        children: ($$payload3) => {
          $$payload3.out += `<div class="flex items-center space-x-4 rtl:space-x-reverse"><div class="flex-shrink-0"><img class="h-8 w-8 rounded-full" src="/images/profile-picture-4.webp" alt="Thomas profile"></div> <div class="min-w-0 flex-1"><p class="truncate text-sm font-medium text-gray-900 dark:text-white">Thomas Lean</p> <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p></div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$2367</div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        class: "py-3 sm:py-4",
        children: ($$payload3) => {
          $$payload3.out += `<div class="flex items-center space-x-4 rtl:space-x-reverse"><div class="flex-shrink-0"><img class="h-8 w-8 rounded-full" src="/images/profile-picture-5.webp" alt="Lana profile"></div> <div class="min-w-0 flex-1"><p class="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p> <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p></div> <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function DescriptionList_1($$payload) {
  List($$payload, {
    tag: "dl",
    class: "divide-y divide-gray-200 text-gray-900 dark:divide-gray-700  dark:text-white",
    children: ($$payload2) => {
      $$payload2.out += `<div class="flex flex-col pb-3">`;
      DescriptionList($$payload2, {
        tag: "dt",
        class: "mb-1",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Email address`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      DescriptionList($$payload2, {
        tag: "dd",
        children: ($$payload3) => {
          $$payload3.out += `<!---->yourname@flowbite.com`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> <div class="flex flex-col pb-3">`;
      DescriptionList($$payload2, {
        tag: "dt",
        class: "mb-1",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Home address`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      DescriptionList($$payload2, {
        tag: "dd",
        children: ($$payload3) => {
          $$payload3.out += `<!---->92 Miles Drive, Newark, NJ 07103, California, USA`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> <div class="flex flex-col pb-3">`;
      DescriptionList($$payload2, {
        tag: "dt",
        class: "mb-1",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Phone number`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      DescriptionList($$payload2, {
        tag: "dd",
        children: ($$payload3) => {
          $$payload3.out += `<!---->+00 123 456 789 / +12 345 678`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div>`;
    },
    $$slots: { default: true }
  });
}
function HorizontalList($$payload) {
  List($$payload, {
    tag: "ul",
    class: "flex flex-wrap items-center justify-center",
    children: ($$payload2) => {
      Li($$payload2, {
        children: ($$payload3) => {
          A($$payload3, {
            href: "/",
            class: "me-4 text-red-700 hover:underline md:me-6 dark:text-red-200",
            children: ($$payload4) => {
              $$payload4.out += `<!---->About`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          A($$payload3, {
            href: "/",
            class: "me-4 text-blue-700 hover:underline md:me-6 dark:text-blue-200",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Premium`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          A($$payload3, {
            href: "/",
            class: "me-4 text-green-700 hover:underline md:me-6 dark:text-green-200",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Campaigns`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          A($$payload3, {
            href: "/",
            class: "me-4 text-yellow-700 hover:underline md:me-6 dark:text-yellow-200",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Blog`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          A($$payload3, {
            href: "/",
            class: "me-4 text-gray-700 hover:underline md:me-6 dark:text-gray-200",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Affiliate Program`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          A($$payload3, {
            href: "/",
            class: "me-4 text-pink-700 hover:underline md:me-6 dark:text-pink-200",
            children: ($$payload4) => {
              $$payload4.out += `<!---->FAQs`;
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
}
function _page($$payload, $$props) {
  push();
  const dirName = "typography/list";
  const tags = Object.keys(list.variants.tag);
  let listTag = "ul";
  const positions = Object.keys(list.variants.position);
  let listPosition = "inside";
  let listIcon = false;
  const changeListIcon = () => {
    listIcon = !listIcon;
    if (listIcon) {
      nested = false;
    }
  };
  let ctxClass = "";
  const changeCtxClass = () => {
    ctxClass = ctxClass === "" ? "pl-8" : "";
  };
  let nested = false;
  const changeNested = () => {
    nested = !nested;
    if (nested) {
      listIcon = false;
    }
  };
  let generatedCode = (() => {
    let props = [];
    let iconSlot;
    let liIcon;
    let nestedContent;
    if (listTag !== "ul") props.push(` tag="${listTag}"`);
    if (listPosition !== "inside") props.push(` position="${listPosition}"`);
    iconSlot = listIcon ? `<CheckCircleSolid class="me-2 h-5 w-5 text-green-500 dark:text-green-400" />` : "";
    if (ctxClass) props.push(` ctxClass="${ctxClass}"`);
    liIcon = listIcon ? ` icon` : "";
    nestedContent = nested ? `<List tag="ol" ctxClass="mt-2 space-y-1 ps-5">
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
  })();
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
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
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
        $$payload3.out += `<!---->List`;
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
        $$payload3.out += `<!---->Interactive List Builder`;
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
          const each_array = ensure_array_like(tags);
          const each_array_1 = ensure_array_like(positions);
          Heading($$payload3, {
            tag: "h2",
            class: "mb-2 text-lg font-semibold text-gray-900 dark:text-white",
            children: ($$payload4) => {
              $$payload4.out += `<!---->List title`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          List($$payload3, {
            tag: listTag,
            position: listPosition,
            class: "space-y-1 text-gray-500 dark:text-gray-400",
            ctxClass,
            children: ($$payload4) => {
              Li($$payload4, {
                icon: listIcon,
                children: ($$payload5) => {
                  if (listIcon) {
                    $$payload5.out += "<!--[-->";
                    CheckCircleSolid($$payload5, {
                      class: "me-2 h-5 w-5 text-green-500 dark:text-green-400"
                    });
                  } else {
                    $$payload5.out += "<!--[!-->";
                  }
                  $$payload5.out += `<!--]-->At least 10 characters (and up to 100 characters) `;
                  if (nested) {
                    $$payload5.out += "<!--[-->";
                    List($$payload5, {
                      tag: "ol",
                      ctxClass: "mt-2 space-y-1 ps-5",
                      children: ($$payload6) => {
                        Li($$payload6, {
                          children: ($$payload7) => {
                            $$payload7.out += `<!---->item 1-1`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!----> `;
                        Li($$payload6, {
                          children: ($$payload7) => {
                            $$payload7.out += `<!---->item 1-2`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!----> `;
                        Li($$payload6, {
                          children: ($$payload7) => {
                            $$payload7.out += `<!---->item 1-3`;
                          },
                          $$slots: { default: true }
                        });
                        $$payload6.out += `<!---->`;
                      },
                      $$slots: { default: true }
                    });
                  } else {
                    $$payload5.out += "<!--[!-->";
                  }
                  $$payload5.out += `<!--]-->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Li($$payload4, {
                icon: listIcon,
                children: ($$payload5) => {
                  if (listIcon) {
                    $$payload5.out += "<!--[-->";
                    CheckCircleSolid($$payload5, {
                      class: "me-2 h-5 w-5 text-green-500 dark:text-green-400"
                    });
                  } else {
                    $$payload5.out += "<!--[!-->";
                  }
                  $$payload5.out += `<!--]-->At least one lowercase character`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Li($$payload4, {
                icon: listIcon,
                children: ($$payload5) => {
                  if (listIcon) {
                    $$payload5.out += "<!--[-->";
                    CheckCircleSolid($$payload5, {
                      class: "me-2 h-5 w-5 text-green-500 dark:text-green-400"
                    });
                  } else {
                    $$payload5.out += "<!--[!-->";
                  }
                  $$payload5.out += `<!--]-->Inclusion of at least one special character, e.g., ! @ # ?`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <div class="mb-4 mt-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Tag`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let tag = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-20 my-1",
              name: "list_tag",
              get group() {
                return listTag;
              },
              set group($$value) {
                listTag = $$value;
                $$settled = false;
              },
              value: tag,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(tag)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Position`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let position = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: "w-20 my-1",
              name: "list_position",
              get group() {
                return listPosition;
              },
              set group($$value) {
                listPosition = $$value;
                $$settled = false;
              },
              value: position,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(position)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-48",
            color: "blue",
            onclick: changeListIcon,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(listIcon ? "Remove icon" : "Add icon")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-48",
            color: "rose",
            onclick: changeCtxClass,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(ctxClass !== "" ? "Remove ctxClass" : "Add ctxClass")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-48",
            color: "teal",
            onclick: changeNested,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(nested ? "Remove nested" : "Add nested")}`;
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
              labelClass: "w-36 my-1",
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
