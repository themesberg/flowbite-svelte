import { Q as push, S as pop, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like, V as escape_html } from "../../../../chunks/index.js";
import { d as avatar } from "../../../../chunks/theme.js";
import { A as Avatar } from "../../../../chunks/Avatar.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { u as uiHelpers } from "../../../../chunks/uiHelpers.svelte.js";
import { D as Dropdown, a as DropdownUl } from "../../../../chunks/DropdownUl.js";
import { D as DropdownDivider } from "../../../../chunks/DropdownDivider.js";
import { D as DropdownLi } from "../../../../chunks/DropdownLi.js";
import { D as DropdownHeader } from "../../../../chunks/DropdownHeader.js";
import { T as Tooltip } from "../../../../chunks/Tooltip.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { Avatar } from "$lib";\n<\/script>\n\n<div class="flex items-center space-x-4 rtl:space-x-reverse">\n  <Avatar src="/images/profile-picture-1.webp" alt="Profile picture 1" cornerStyle="rounded" />\n  <div class="space-y-1 font-medium dark:text-white">\n    <div>Jese Leos</div>\n    <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>\n  </div>\n</div>\n';
const __vite_glob_0_1 = '<script>\n  import { Avatar, Tooltip } from "$lib";\n<\/script>\n\n<div class="flex justify-center gap-8">\n  <Avatar id="jese" cornerStyle="rounded" alt="Jese Leos" src="/images/profile-picture-1.webp" />\n  <Tooltip triggeredBy="#jese">Jese Leos</Tooltip>\n  <Avatar id="robert" cornerStyle="rounded" alt="Robert Gouth" src="/images/profile-picture-2.webp" />\n  <Tooltip triggeredBy="#robert">Robert Gouth</Tooltip>\n  <Avatar id="bonnie" cornerStyle="rounded" alt="Bonnie Green" src="/images/profile-picture-3.webp" />\n  <Tooltip triggeredBy="#bonnie">Bonnie Green</Tooltip>\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Avatar } from "$lib";\n<\/script>\n\n<div class="flex justify-center gap-4">\n  <Avatar src="/images/profile-picture-3.webp" alt="Profile picture 1" dot={{ color: "red" }} />\n  <Avatar src="/images/profile-picture-3.webp" alt="Profile picture 2" dot={{ placement: "top-right", color: "red" }} cornerStyle="rounded" />\n  <Avatar src="/images/profile-picture-5.webp" alt="Profile picture 3" dot={{ placement: "bottom-right", color: "green" }} />\n  <Avatar src="/images/profile-picture-5.webp" alt="Profile picture 4" dot={{ placement: "bottom-right" }} cornerStyle="rounded" />\n  <Avatar dot={{}} />\n</div>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Avatar } from "$lib";\n<\/script>\n\n<div class="flex justify-center gap-4">\n  <Avatar alt="placeholder" />\n  <Avatar cornerStyle="rounded" alt="rounded placeholder" />\n  <Avatar border alt="bordered placeholder" />\n  <Avatar cornerStyle="rounded" border alt="rounded bordered placeholder" />\n</div>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Avatar } from "$lib";\n<\/script>\n\n<div class="flex h-10 justify-center">\n  <Avatar alt="JL">JL</Avatar>\n</div>\n';
const __vite_glob_0_5 = '<script>\n  import { Avatar } from "svelte-5-ui-lib";\n<\/script>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { Avatar } from "$lib";\n<\/script>\n\n<div class="flex flex-col justify-center gap-4 px-4">\n  <div class="mb-5 flex">\n    <Avatar src="/images/profile-picture-1.webp" stacked alt="Profile picture 1" />\n    <Avatar src="/images/profile-picture-2.webp" stacked alt="Profile picture 2" />\n    <Avatar src="/images/profile-picture-3.webp" stacked alt="Profile picture 3" />\n    <Avatar stacked />\n  </div>\n  <div class="flex">\n    <Avatar src="/images/profile-picture-1.webp" stacked alt="Profile picture 4" />\n    <Avatar src="/images/profile-picture-2.webp" stacked alt="Profile picture 5" />\n    <Avatar src="/images/profile-picture-3.webp" stacked alt="Profile picture 6" />\n    <Avatar stacked href="/" class="bg-gray-700 text-sm text-white hover:bg-gray-600" alt="Profile picture 7">+99</Avatar>\n  </div>\n</div>\n';
const __vite_glob_0_7 = '<script lang="ts">\n  import { Avatar, Dropdown, DropdownHeader, DropdownUl, DropdownLi, DropdownDivider, uiHelpers } from "$lib";\n  let dropdown = uiHelpers();\n  let dropdownStatus = $state(false);\n  let closeDropdown = dropdown.close;\n\n  $effect(() => {\n    // this can be done adding nav.navStatus directly to DOM element\n    // without using effect\n    dropdownStatus = dropdown.isOpen;\n  });\n<\/script>\n\n<div class="flex h-64 items-start justify-center">\n  <Avatar onclick={dropdown.toggle} src="/images/profile-picture-3.webp" alt="Profile picture" class="cursor-pointer" dot={{ color: "green" }} />\n  <div class="relative">\n    <Dropdown {dropdownStatus} {closeDropdown} class="absolute -left-[100px] top-[40px]">\n      <DropdownHeader>\n        <div>Bonnie Green</div>\n        <div class="truncate font-medium">name@flowbite.com</div>\n      </DropdownHeader>\n      <DropdownUl>\n        <DropdownLi href="/">Dashboard</DropdownLi>\n        <DropdownLi href="/nav">Navbar</DropdownLi>\n        <DropdownLi href="/footer">Footer</DropdownLi>\n        <DropdownDivider />\n        <DropdownLi href="/dropdown">Dropdown</DropdownLi>\n      </DropdownUl>\n    </Dropdown>\n  </div>\n</div>\n';
function AvatarText($$payload) {
  $$payload.out += `<div class="flex items-center space-x-4 rtl:space-x-reverse">`;
  Avatar($$payload, {
    src: "/images/profile-picture-1.webp",
    alt: "Profile picture 1",
    cornerStyle: "rounded"
  });
  $$payload.out += `<!----> <div class="space-y-1 font-medium dark:text-white"><div>Jese Leos</div> <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div></div></div>`;
}
function DotIndicator($$payload) {
  $$payload.out += `<div class="flex justify-center gap-4">`;
  Avatar($$payload, {
    src: "/images/profile-picture-3.webp",
    alt: "Profile picture 1",
    dot: { color: "red" }
  });
  $$payload.out += `<!----> `;
  Avatar($$payload, {
    src: "/images/profile-picture-3.webp",
    alt: "Profile picture 2",
    dot: { placement: "top-right", color: "red" },
    cornerStyle: "rounded"
  });
  $$payload.out += `<!----> `;
  Avatar($$payload, {
    src: "/images/profile-picture-5.webp",
    alt: "Profile picture 3",
    dot: { placement: "bottom-right", color: "green" }
  });
  $$payload.out += `<!----> `;
  Avatar($$payload, {
    src: "/images/profile-picture-5.webp",
    alt: "Profile picture 4",
    dot: { placement: "bottom-right" },
    cornerStyle: "rounded"
  });
  $$payload.out += `<!----> `;
  Avatar($$payload, { dot: {} });
  $$payload.out += `<!----></div>`;
}
function Placeholder($$payload) {
  $$payload.out += `<div class="flex justify-center gap-4">`;
  Avatar($$payload, { alt: "placeholder" });
  $$payload.out += `<!----> `;
  Avatar($$payload, {
    cornerStyle: "rounded",
    alt: "rounded placeholder"
  });
  $$payload.out += `<!----> `;
  Avatar($$payload, { border: true, alt: "bordered placeholder" });
  $$payload.out += `<!----> `;
  Avatar($$payload, {
    cornerStyle: "rounded",
    border: true,
    alt: "rounded bordered placeholder"
  });
  $$payload.out += `<!----></div>`;
}
function PlaceholderInitial($$payload) {
  $$payload.out += `<div class="flex h-10 justify-center">`;
  Avatar($$payload, {
    alt: "JL",
    children: ($$payload2) => {
      $$payload2.out += `<!---->JL`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function Stacked($$payload) {
  $$payload.out += `<div class="flex flex-col justify-center gap-4 px-4"><div class="mb-5 flex">`;
  Avatar($$payload, {
    src: "/images/profile-picture-1.webp",
    stacked: true,
    alt: "Profile picture 1"
  });
  $$payload.out += `<!----> `;
  Avatar($$payload, {
    src: "/images/profile-picture-2.webp",
    stacked: true,
    alt: "Profile picture 2"
  });
  $$payload.out += `<!----> `;
  Avatar($$payload, {
    src: "/images/profile-picture-3.webp",
    stacked: true,
    alt: "Profile picture 3"
  });
  $$payload.out += `<!----> `;
  Avatar($$payload, { stacked: true });
  $$payload.out += `<!----></div> <div class="flex">`;
  Avatar($$payload, {
    src: "/images/profile-picture-1.webp",
    stacked: true,
    alt: "Profile picture 4"
  });
  $$payload.out += `<!----> `;
  Avatar($$payload, {
    src: "/images/profile-picture-2.webp",
    stacked: true,
    alt: "Profile picture 5"
  });
  $$payload.out += `<!----> `;
  Avatar($$payload, {
    src: "/images/profile-picture-3.webp",
    stacked: true,
    alt: "Profile picture 6"
  });
  $$payload.out += `<!----> `;
  Avatar($$payload, {
    stacked: true,
    href: "/",
    class: "bg-gray-700 text-sm text-white hover:bg-gray-600",
    alt: "Profile picture 7",
    children: ($$payload2) => {
      $$payload2.out += `<!---->+99`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
}
function UserDropdown($$payload, $$props) {
  push();
  let dropdown = uiHelpers();
  let dropdownStatus = false;
  let closeDropdown = dropdown.close;
  $$payload.out += `<div class="flex h-64 items-start justify-center">`;
  Avatar($$payload, {
    onclick: dropdown.toggle,
    src: "/images/profile-picture-3.webp",
    alt: "Profile picture",
    class: "cursor-pointer",
    dot: { color: "green" }
  });
  $$payload.out += `<!----> <div class="relative">`;
  Dropdown($$payload, {
    dropdownStatus,
    closeDropdown,
    class: "absolute -left-[100px] top-[40px]",
    children: ($$payload2) => {
      DropdownHeader($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<div>Bonnie Green</div> <div class="truncate font-medium">name@flowbite.com</div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      DropdownUl($$payload2, {
        children: ($$payload3) => {
          DropdownLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Dashboard`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/nav",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Navbar`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/footer",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Footer`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          DropdownDivider($$payload3, {});
          $$payload3.out += `<!----> `;
          DropdownLi($$payload3, {
            href: "/dropdown",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Dropdown`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div></div>`;
  pop();
}
function AvatarWithTooltip($$payload) {
  $$payload.out += `<div class="flex justify-center gap-8">`;
  Avatar($$payload, {
    id: "jese",
    cornerStyle: "rounded",
    alt: "Jese Leos",
    src: "/images/profile-picture-1.webp"
  });
  $$payload.out += `<!----> `;
  Tooltip($$payload, {
    triggeredBy: "#jese",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Jese Leos`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Avatar($$payload, {
    id: "robert",
    cornerStyle: "rounded",
    alt: "Robert Gouth",
    src: "/images/profile-picture-2.webp"
  });
  $$payload.out += `<!----> `;
  Tooltip($$payload, {
    triggeredBy: "#robert",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Robert Gouth`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Avatar($$payload, {
    id: "bonnie",
    cornerStyle: "rounded",
    alt: "Bonnie Green",
    src: "/images/profile-picture-3.webp"
  });
  $$payload.out += `<!----> `;
  Tooltip($$payload, {
    triggeredBy: "#bonnie",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Bonnie Green`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function _page($$payload, $$props) {
  push();
  const dirName = "avatar";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/AvatarText.svelte": __vite_glob_0_0,
    "./examples/AvatarWithTooltip.svelte": __vite_glob_0_1,
    "./examples/DotIndicator.svelte": __vite_glob_0_2,
    "./examples/Placeholder.svelte": __vite_glob_0_3,
    "./examples/PlaceholderInitial.svelte": __vite_glob_0_4,
    "./examples/Setup.svelte": __vite_glob_0_5,
    "./examples/Stacked.svelte": __vite_glob_0_6,
    "./examples/UserDropdown.svelte": __vite_glob_0_7
  });
  const exampleArr = [
    {
      name: "Avatar text",
      component: AvatarText
    },
    {
      name: "Dot indicator",
      component: DotIndicator
    },
    {
      name: "Placeholder",
      component: Placeholder
    },
    {
      name: "Placeholder initial",
      component: PlaceholderInitial
    },
    {
      name: "Stacked",
      component: Stacked
    },
    {
      name: "User dropdown",
      component: UserDropdown
    },
    {
      name: "Avatar with tooltip",
      component: AvatarWithTooltip
    }
  ];
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  const sizes = Object.keys(avatar.variants.size);
  let avatarSize = "md";
  let isRounded = false;
  const toggleCornerStyle = () => {
    isRounded = !isRounded;
  };
  let border = false;
  const changeBorder = () => {
    border = !border;
  };
  let stacked = false;
  const changeStacked = () => {
    stacked = !stacked;
  };
  let avatarClass = "";
  const changeClass = () => {
    avatarClass = avatarClass === "" ? "mx-0.5" : "";
  };
  let generatedCode = (() => {
    let props = [];
    if (isRounded) props.push('cornerStyle="rounded"');
    if (avatarSize !== "md") props.push(`size="${avatarSize}"`);
    if (border) props.push("border");
    if (stacked) props.push("stacked");
    if (avatarClass) props.push(`class="${avatarClass}"`);
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Avatar${propsString} />`;
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
        $$payload3.out += `<!---->Avatar`;
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
        $$payload3.out += `<!---->Interactive Avatar Bilder`;
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
          const each_array = ensure_array_like(sizes);
          $$payload3.out += `<div class="mb-4 flex h-36 justify-center">`;
          Avatar($$payload3, {
            src: "/images/profile-picture-1.webp",
            alt: "Profile picture 1",
            cornerStyle: isRounded ? "rounded" : void 0,
            border,
            stacked,
            class: avatarClass,
            size: avatarSize
          });
          $$payload3.out += `<!----> `;
          Avatar($$payload3, {
            src: "/images/profile-picture-2.webp",
            alt: "Profile picture 2",
            cornerStyle: isRounded ? "rounded" : void 0,
            border,
            stacked,
            class: avatarClass,
            size: avatarSize
          });
          $$payload3.out += `<!----> `;
          Avatar($$payload3, {
            src: "/images/profile-picture-3.webp",
            alt: "Profile picture 3",
            cornerStyle: isRounded ? "rounded" : void 0,
            border,
            stacked,
            class: avatarClass,
            size: avatarSize
          });
          $$payload3.out += `<!----></div> <div class="mb-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Size`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let size = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-12 my-1",
              name: "spinnersize",
              get group() {
                return avatarSize;
              },
              set group($$value) {
                avatarSize = $$value;
                $$settled = false;
              },
              value: size,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(size)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-40",
            color: "blue",
            onclick: toggleCornerStyle,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(isRounded ? "Default: circular" : "Rounded")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "red",
            onclick: changeBorder,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(border ? "Remove border" : "Add border")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "green",
            onclick: changeStacked,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(stacked ? "Remove stacked" : "Add  stacked")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "purple",
            onclick: changeClass,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(avatarClass ? "Remove class" : "Add class")}`;
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
