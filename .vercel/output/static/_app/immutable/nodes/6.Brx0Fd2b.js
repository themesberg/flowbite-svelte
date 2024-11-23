import { a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { c as child, n as next, r as reset, s as sibling, p as push, u as user_effect, a7 as set, b as get, f as first_child, a as pop, a6 as state, t as template_effect, d as derived } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { az as Dropdown, V as uiHelpers, k as avatar } from "../chunks/theme.BtjZjf2R.js";
import { A as Avatar } from "../chunks/Avatar.BvpffrdL.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { D as DropdownDivider } from "../chunks/DropdownDivider.BsEP2ok3.js";
import { D as DropdownUl } from "../chunks/DropdownUl.CBcIivYZ.js";
import { D as DropdownLi } from "../chunks/DropdownLi.DjyFOMgJ.js";
import { D as DropdownHeader } from "../chunks/DropdownHeader.kX0miDJ9.js";
import { T as Tooltip } from "../chunks/Tooltip.DS4jm7dQ.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { Avatar } from "$lib";\n<\/script>\n\n<div class="flex items-center space-x-4 rtl:space-x-reverse">\n  <Avatar src="/images/profile-picture-1.webp" alt="Profile picture 1" cornerStyle="rounded" />\n  <div class="space-y-1 font-medium dark:text-white">\n    <div>Jese Leos</div>\n    <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>\n  </div>\n</div>\n';
const __vite_glob_0_1 = '<script>\n  import { Avatar, Tooltip } from "$lib";\n<\/script>\n\n<div class="flex justify-center gap-8">\n  <Avatar id="jese" cornerStyle="rounded" alt="Jese Leos" src="/images/profile-picture-1.webp" />\n  <Tooltip triggeredBy="#jese">Jese Leos</Tooltip>\n  <Avatar id="robert" cornerStyle="rounded" alt="Robert Gouth" src="/images/profile-picture-2.webp" />\n  <Tooltip triggeredBy="#robert">Robert Gouth</Tooltip>\n  <Avatar id="bonnie" cornerStyle="rounded" alt="Bonnie Green" src="/images/profile-picture-3.webp" />\n  <Tooltip triggeredBy="#bonnie">Bonnie Green</Tooltip>\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Avatar } from "$lib";\n<\/script>\n\n<div class="flex justify-center gap-4">\n  <Avatar src="/images/profile-picture-3.webp" alt="Profile picture 1" dot={{ color: "red" }} />\n  <Avatar src="/images/profile-picture-3.webp" alt="Profile picture 2" dot={{ placement: "top-right", color: "red" }} cornerStyle="rounded" />\n  <Avatar src="/images/profile-picture-5.webp" alt="Profile picture 3" dot={{ placement: "bottom-right", color: "green" }} />\n  <Avatar src="/images/profile-picture-5.webp" alt="Profile picture 4" dot={{ placement: "bottom-right" }} cornerStyle="rounded" />\n  <Avatar dot={{}} />\n</div>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Avatar } from "$lib";\n<\/script>\n\n<div class="flex justify-center gap-4">\n  <Avatar alt="placeholder" />\n  <Avatar cornerStyle="rounded" alt="rounded placeholder" />\n  <Avatar border alt="bordered placeholder" />\n  <Avatar cornerStyle="rounded" border alt="rounded bordered placeholder" />\n</div>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Avatar } from "$lib";\n<\/script>\n\n<div class="flex h-10 justify-center">\n  <Avatar alt="JL">JL</Avatar>\n</div>\n';
const __vite_glob_0_5 = '<script>\n  import { Avatar } from "svelte-5-ui-lib";\n<\/script>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { Avatar } from "$lib";\n<\/script>\n\n<div class="flex flex-col justify-center gap-4 px-4">\n  <div class="mb-5 flex">\n    <Avatar src="/images/profile-picture-1.webp" stacked alt="Profile picture 1" />\n    <Avatar src="/images/profile-picture-2.webp" stacked alt="Profile picture 2" />\n    <Avatar src="/images/profile-picture-3.webp" stacked alt="Profile picture 3" />\n    <Avatar stacked />\n  </div>\n  <div class="flex">\n    <Avatar src="/images/profile-picture-1.webp" stacked alt="Profile picture 4" />\n    <Avatar src="/images/profile-picture-2.webp" stacked alt="Profile picture 5" />\n    <Avatar src="/images/profile-picture-3.webp" stacked alt="Profile picture 6" />\n    <Avatar stacked href="/" class="bg-gray-700 text-sm text-white hover:bg-gray-600" alt="Profile picture 7">+99</Avatar>\n  </div>\n</div>\n';
const __vite_glob_0_7 = '<script lang="ts">\n  import { Avatar, Dropdown, DropdownHeader, DropdownUl, DropdownLi, DropdownDivider, uiHelpers } from "$lib";\n  let dropdown = uiHelpers();\n  let dropdownStatus = $state(false);\n  let closeDropdown = dropdown.close;\n\n  $effect(() => {\n    // this can be done adding nav.navStatus directly to DOM element\n    // without using effect\n    dropdownStatus = dropdown.isOpen;\n  });\n<\/script>\n\n<div class="flex h-64 items-start justify-center">\n  <Avatar onclick={dropdown.toggle} src="/images/profile-picture-3.webp" alt="Profile picture" class="cursor-pointer" dot={{ color: "green" }} />\n  <div class="relative">\n    <Dropdown {dropdownStatus} {closeDropdown} class="absolute -left-[100px] top-[40px]">\n      <DropdownHeader>\n        <div>Bonnie Green</div>\n        <div class="truncate font-medium">name@flowbite.com</div>\n      </DropdownHeader>\n      <DropdownUl>\n        <DropdownLi href="/">Dashboard</DropdownLi>\n        <DropdownLi href="/nav">Navbar</DropdownLi>\n        <DropdownLi href="/footer">Footer</DropdownLi>\n        <DropdownDivider />\n        <DropdownLi href="/dropdown">Dropdown</DropdownLi>\n      </DropdownUl>\n    </Dropdown>\n  </div>\n</div>\n';
var root$7 = template(`<div class="flex items-center space-x-4 rtl:space-x-reverse"><!> <div class="space-y-1 font-medium dark:text-white"><div>Jese Leos</div> <div class="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div></div></div>`);
function AvatarText($$anchor) {
  var div = root$7();
  var node = child(div);
  Avatar(node, {
    src: "/images/profile-picture-1.webp",
    alt: "Profile picture 1",
    cornerStyle: "rounded"
  });
  next(2);
  reset(div);
  append($$anchor, div);
}
var root$6 = template(`<div class="flex justify-center gap-4"><!> <!> <!> <!> <!></div>`);
function DotIndicator($$anchor) {
  var div = root$6();
  var node = child(div);
  Avatar(node, {
    src: "/images/profile-picture-3.webp",
    alt: "Profile picture 1",
    dot: { color: "red" }
  });
  var node_1 = sibling(node, 2);
  Avatar(node_1, {
    src: "/images/profile-picture-3.webp",
    alt: "Profile picture 2",
    dot: { placement: "top-right", color: "red" },
    cornerStyle: "rounded"
  });
  var node_2 = sibling(node_1, 2);
  Avatar(node_2, {
    src: "/images/profile-picture-5.webp",
    alt: "Profile picture 3",
    dot: { placement: "bottom-right", color: "green" }
  });
  var node_3 = sibling(node_2, 2);
  Avatar(node_3, {
    src: "/images/profile-picture-5.webp",
    alt: "Profile picture 4",
    dot: { placement: "bottom-right" },
    cornerStyle: "rounded"
  });
  var node_4 = sibling(node_3, 2);
  Avatar(node_4, { dot: {} });
  reset(div);
  append($$anchor, div);
}
var root$5 = template(`<div class="flex justify-center gap-4"><!> <!> <!> <!></div>`);
function Placeholder($$anchor) {
  var div = root$5();
  var node = child(div);
  Avatar(node, { alt: "placeholder" });
  var node_1 = sibling(node, 2);
  Avatar(node_1, {
    cornerStyle: "rounded",
    alt: "rounded placeholder"
  });
  var node_2 = sibling(node_1, 2);
  Avatar(node_2, { border: true, alt: "bordered placeholder" });
  var node_3 = sibling(node_2, 2);
  Avatar(node_3, {
    cornerStyle: "rounded",
    border: true,
    alt: "rounded bordered placeholder"
  });
  reset(div);
  append($$anchor, div);
}
var root$4 = template(`<div class="flex h-10 justify-center"><!></div>`);
function PlaceholderInitial($$anchor) {
  var div = root$4();
  var node = child(div);
  Avatar(node, {
    alt: "JL",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("JL");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root$3 = template(`<div class="flex flex-col justify-center gap-4 px-4"><div class="mb-5 flex"><!> <!> <!> <!></div> <div class="flex"><!> <!> <!> <!></div></div>`);
function Stacked($$anchor) {
  var div = root$3();
  var div_1 = child(div);
  var node = child(div_1);
  Avatar(node, {
    src: "/images/profile-picture-1.webp",
    stacked: true,
    alt: "Profile picture 1"
  });
  var node_1 = sibling(node, 2);
  Avatar(node_1, {
    src: "/images/profile-picture-2.webp",
    stacked: true,
    alt: "Profile picture 2"
  });
  var node_2 = sibling(node_1, 2);
  Avatar(node_2, {
    src: "/images/profile-picture-3.webp",
    stacked: true,
    alt: "Profile picture 3"
  });
  var node_3 = sibling(node_2, 2);
  Avatar(node_3, { stacked: true });
  reset(div_1);
  var div_2 = sibling(div_1, 2);
  var node_4 = child(div_2);
  Avatar(node_4, {
    src: "/images/profile-picture-1.webp",
    stacked: true,
    alt: "Profile picture 4"
  });
  var node_5 = sibling(node_4, 2);
  Avatar(node_5, {
    src: "/images/profile-picture-2.webp",
    stacked: true,
    alt: "Profile picture 5"
  });
  var node_6 = sibling(node_5, 2);
  Avatar(node_6, {
    src: "/images/profile-picture-3.webp",
    stacked: true,
    alt: "Profile picture 6"
  });
  var node_7 = sibling(node_6, 2);
  Avatar(node_7, {
    stacked: true,
    href: "/",
    class: "bg-gray-700 text-sm text-white hover:bg-gray-600",
    alt: "Profile picture 7",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("+99");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  reset(div_2);
  reset(div);
  append($$anchor, div);
}
var root_2 = template(`<div>Bonnie Green</div> <div class="truncate font-medium">name@flowbite.com</div>`, 1);
var root_3 = template(`<!> <!> <!> <!> <!>`, 1);
var root_1 = template(`<!> <!>`, 1);
var root$2 = template(`<div class="flex h-64 items-start justify-center"><!> <div class="relative"><!></div></div>`);
function UserDropdown($$anchor, $$props) {
  push($$props, true);
  let dropdown = uiHelpers();
  let dropdownStatus = state(false);
  let closeDropdown = dropdown.close;
  user_effect(() => {
    set(dropdownStatus, proxy(dropdown.isOpen));
  });
  var div = root$2();
  var node = child(div);
  Avatar(node, {
    get onclick() {
      return dropdown.toggle;
    },
    src: "/images/profile-picture-3.webp",
    alt: "Profile picture",
    class: "cursor-pointer",
    dot: { color: "green" }
  });
  var div_1 = sibling(node, 2);
  var node_1 = child(div_1);
  Dropdown(node_1, {
    get dropdownStatus() {
      return get(dropdownStatus);
    },
    closeDropdown,
    class: "absolute -left-[100px] top-[40px]",
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1();
      var node_2 = first_child(fragment);
      DropdownHeader(node_2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_1 = root_2();
          next(2);
          append($$anchor3, fragment_1);
        },
        $$slots: { default: true }
      });
      var node_3 = sibling(node_2, 2);
      DropdownUl(node_3, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_3();
          var node_4 = first_child(fragment_2);
          DropdownLi(node_4, {
            href: "/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text$1 = text("Dashboard");
              append($$anchor4, text$1);
            },
            $$slots: { default: true }
          });
          var node_5 = sibling(node_4, 2);
          DropdownLi(node_5, {
            href: "/nav",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_1 = text("Navbar");
              append($$anchor4, text_1);
            },
            $$slots: { default: true }
          });
          var node_6 = sibling(node_5, 2);
          DropdownLi(node_6, {
            href: "/footer",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_2 = text("Footer");
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
          var node_7 = sibling(node_6, 2);
          DropdownDivider(node_7, {});
          var node_8 = sibling(node_7, 2);
          DropdownLi(node_8, {
            href: "/dropdown",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_3 = text("Dropdown");
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div_1);
  reset(div);
  append($$anchor, div);
  pop();
}
var root$1 = template(`<div class="flex justify-center gap-8"><!> <!> <!> <!> <!> <!></div>`);
function AvatarWithTooltip($$anchor) {
  var div = root$1();
  var node = child(div);
  Avatar(node, {
    id: "jese",
    cornerStyle: "rounded",
    alt: "Jese Leos",
    src: "/images/profile-picture-1.webp"
  });
  var node_1 = sibling(node, 2);
  Tooltip(node_1, {
    triggeredBy: "#jese",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Jese Leos");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  Avatar(node_2, {
    id: "robert",
    cornerStyle: "rounded",
    alt: "Robert Gouth",
    src: "/images/profile-picture-2.webp"
  });
  var node_3 = sibling(node_2, 2);
  Tooltip(node_3, {
    triggeredBy: "#robert",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Robert Gouth");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_3, 2);
  Avatar(node_4, {
    id: "bonnie",
    cornerStyle: "rounded",
    alt: "Bonnie Green",
    src: "/images/profile-picture-3.webp"
  });
  var node_5 = sibling(node_4, 2);
  Tooltip(node_5, {
    triggeredBy: "#bonnie",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Bonnie Green");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_5 = template(`<div class="mb-4 flex h-36 justify-center"><!> <!> <!></div> <div class="mb-4 flex flex-wrap space-x-4"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!> <!> <!></div>`, 1);
var root_15 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
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
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  const sizes = Object.keys(avatar.variants.size);
  let avatarSize = state("md");
  let isRounded = state(false);
  const toggleCornerStyle = () => {
    set(isRounded, !get(isRounded));
  };
  let border = state(false);
  const changeBorder = () => {
    set(border, !get(border));
  };
  let stacked = state(false);
  const changeStacked = () => {
    set(stacked, !get(stacked));
  };
  let avatarClass = state("");
  const changeClass = () => {
    set(avatarClass, proxy(get(avatarClass) === "" ? "mx-0.5" : ""));
  };
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(isRounded)) props.push('cornerStyle="rounded"');
    if (get(avatarSize) !== "md") props.push(`size="${get(avatarSize)}"`);
    if (get(border)) props.push("border");
    if (get(stacked)) props.push("stacked");
    if (get(avatarClass)) props.push(`class="${get(avatarClass)}"`);
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Avatar${propsString} />`;
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
      var text$1 = text("Avatar");
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
      var text_2 = text("Interactive Avatar Bilder");
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
        var cornerStyle = derived(() => get(isRounded) ? "rounded" : void 0);
        Avatar(node_5, {
          src: "/images/profile-picture-1.webp",
          alt: "Profile picture 1",
          get cornerStyle() {
            return get(cornerStyle);
          },
          get border() {
            return get(border);
          },
          get stacked() {
            return get(stacked);
          },
          get class() {
            return get(avatarClass);
          },
          get size() {
            return get(avatarSize);
          }
        });
        var node_6 = sibling(node_5, 2);
        var cornerStyle_1 = derived(() => get(isRounded) ? "rounded" : void 0);
        Avatar(node_6, {
          src: "/images/profile-picture-2.webp",
          alt: "Profile picture 2",
          get cornerStyle() {
            return get(cornerStyle_1);
          },
          get border() {
            return get(border);
          },
          get stacked() {
            return get(stacked);
          },
          get class() {
            return get(avatarClass);
          },
          get size() {
            return get(avatarSize);
          }
        });
        var node_7 = sibling(node_6, 2);
        var cornerStyle_2 = derived(() => get(isRounded) ? "rounded" : void 0);
        Avatar(node_7, {
          src: "/images/profile-picture-3.webp",
          alt: "Profile picture 3",
          get cornerStyle() {
            return get(cornerStyle_2);
          },
          get border() {
            return get(border);
          },
          get stacked() {
            return get(stacked);
          },
          get class() {
            return get(avatarClass);
          },
          get size() {
            return get(avatarSize);
          }
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var node_8 = child(div_1);
        Label(node_8, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text("Size");
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        var node_9 = sibling(node_8, 2);
        each(node_9, 17, () => sizes, index, ($$anchor3, size) => {
          Radio($$anchor3, {
            labelClass: "w-12 my-1",
            name: "spinnersize",
            get group() {
              return get(avatarSize);
            },
            set group($$value) {
              set(avatarSize, proxy($$value));
            },
            get value() {
              return get(size);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_4 = text();
              template_effect(() => set_text(text_4, get(size)));
              append($$anchor4, text_4);
            },
            $$slots: { default: true }
          });
        });
        reset(div_1);
        var div_2 = sibling(div_1, 2);
        var node_10 = child(div_2);
        Button(node_10, {
          class: "w-40",
          color: "blue",
          onclick: toggleCornerStyle,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_5 = text();
            template_effect(() => set_text(text_5, get(isRounded) ? "Default: circular" : "Rounded"));
            append($$anchor3, text_5);
          },
          $$slots: { default: true }
        });
        var node_11 = sibling(node_10, 2);
        Button(node_11, {
          class: "w-40",
          color: "red",
          onclick: changeBorder,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_6 = text();
            template_effect(() => set_text(text_6, get(border) ? "Remove border" : "Add border"));
            append($$anchor3, text_6);
          },
          $$slots: { default: true }
        });
        var node_12 = sibling(node_11, 2);
        Button(node_12, {
          class: "w-40",
          color: "green",
          onclick: changeStacked,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_7 = text();
            template_effect(() => set_text(text_7, get(stacked) ? "Remove stacked" : "Add  stacked"));
            append($$anchor3, text_7);
          },
          $$slots: { default: true }
        });
        var node_13 = sibling(node_12, 2);
        Button(node_13, {
          class: "w-40",
          color: "purple",
          onclick: changeClass,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_8 = text();
            template_effect(() => set_text(text_8, get(avatarClass) ? "Remove class" : "Add class"));
            append($$anchor3, text_8);
          },
          $$slots: { default: true }
        });
        reset(div_2);
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
        var fragment_10 = root_15();
        var div_3 = first_child(fragment_10);
        var node_16 = child(div_3);
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
            labelClass: "w-40 my-1",
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
        reset(div_3);
        var node_18 = sibling(div_3, 2);
        component(node_18, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_10);
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
