import { a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, a6 as state, u as user_effect, f as first_child, a as pop, s as sibling, a7 as set, n as next, b as get, c as child, t as template_effect, r as reset, d as derived } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { D as Darkmode } from "../chunks/Darkmode.RvBN8W-9.js";
import { T as ThumbsDownSolid } from "../chunks/ThumbsDownSolid.CpAMItwR.js";
import { T as ThumbsUpSolid } from "../chunks/ThumbsUpSolid.CIE3OZly.js";
const __vite_glob_0_0 = '<html class="dark" lang="en">\n';
const __vite_glob_0_1 = `// tailwind.config.cjs const config = { darkMode: 'class' // ... };

// src/app.html

<body class="bg-white dark:bg-gray-800">
  <div>%svelte.body%</div>
</body>
`;
const __vite_glob_1_0 = '<script>\n  import { Darkmode } from "$lib";\n<\/script>\n\n<Darkmode />\n';
const __vite_glob_1_1 = '<script>\n  import { Darkmode } from "$lib";\n  import { ThumbsUpSolid, ThumbsDownSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<Darkmode class="text-lg">\n  {#snippet lightIcon()}\n    <ThumbsUpSolid color="red" />\n  {/snippet}\n  {#snippet darkIcon()}\n    <ThumbsDownSolid color="green" />\n  {/snippet}\n</Darkmode>\n';
const __vite_glob_1_2 = '<script>\n  import { Darkmode } from "$lib";\n<\/script>\n\n<Darkmode class="border text-primary-500 dark:border-gray-800 dark:text-primary-600" />\n';
function Default($$anchor) {
  Darkmode($$anchor, {});
}
function Icon($$anchor) {
  {
    const lightIcon = ($$anchor2) => {
      ThumbsUpSolid($$anchor2, { color: "red" });
    };
    const darkIcon = ($$anchor2) => {
      ThumbsDownSolid($$anchor2, { color: "green" });
    };
    Darkmode($$anchor, {
      class: "text-lg",
      lightIcon,
      darkIcon,
      $$slots: { lightIcon: true, darkIcon: true }
    });
  }
}
function Style($$anchor) {
  Darkmode($$anchor, {
    class: "border text-primary-500 dark:border-gray-800 dark:text-primary-600"
  });
}
var root_6 = template(`<div class="mb-8 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> Add the following to \`app.html\`: <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "darkmode";
  const modules = /* @__PURE__ */ Object.assign({
    "./md/initialtheme.md": __vite_glob_0_0,
    "./md/setup.md": __vite_glob_0_1
  });
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Default.svelte": __vite_glob_1_0,
    "./examples/Icon.svelte": __vite_glob_1_1,
    "./examples/Style.svelte": __vite_glob_1_2
  });
  const exampleArr = [
    {
      name: "Default",
      component: Default
    },
    {
      name: "Icon",
      component: Icon
    },
    {
      name: "Style",
      component: Style
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
      var text$1 = text("Darkmode");
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
      return modules["./md/setup.md"];
    }
  });
  var node_3 = sibling(node_2, 2);
  H2(node_3, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Initial theme");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_3, 2);
  HighlightCompo(node_4, {
    get code() {
      return modules["./md/initialtheme.md"];
    }
  });
  var node_5 = sibling(node_4, 2);
  H2(node_5, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_3 = text("Examples");
      append($$anchor2, text_3);
    },
    $$slots: { default: true }
  });
  var node_6 = sibling(node_5, 2);
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
    CodeWrapper(node_6, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_2 = root_6();
        var div = first_child(fragment_2);
        var node_7 = child(div);
        Label(node_7, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_4 = text("Example");
            append($$anchor3, text_4);
          },
          $$slots: { default: true }
        });
        var node_8 = sibling(node_7, 2);
        each(node_8, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
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
              var text_5 = text();
              template_effect(() => set_text(text_5, get(style).name));
              append($$anchor4, text_5);
            },
            $$slots: { default: true }
          });
        });
        reset(div);
        var node_9 = sibling(div, 2);
        component(node_9, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_10 = sibling(node_6, 2);
  H2(node_10, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_6 = text("Component data");
      append($$anchor2, text_6);
    },
    $$slots: { default: true }
  });
  var node_11 = sibling(node_10, 2);
  CompoAttributesViewer(node_11, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
