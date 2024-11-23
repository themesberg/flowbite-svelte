import { a3 as copy_payload, a4 as assign_payload, S as pop, Q as push, Y as ensure_array_like, V as escape_html } from "../../../../chunks/index.js";
import "../../../../chunks/theme.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { D as Darkmode } from "../../../../chunks/Darkmode.js";
import { T as ThumbsDownSolid } from "../../../../chunks/ThumbsDownSolid.js";
import { T as ThumbsUpSolid } from "../../../../chunks/ThumbsUpSolid.js";
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
function Default($$payload) {
  Darkmode($$payload, {});
}
function Icon($$payload) {
  {
    let lightIcon = function($$payload2) {
      ThumbsUpSolid($$payload2, { color: "red" });
    }, darkIcon = function($$payload2) {
      ThumbsDownSolid($$payload2, { color: "green" });
    };
    Darkmode($$payload, {
      class: "text-lg",
      lightIcon,
      darkIcon,
      $$slots: { lightIcon: true, darkIcon: true }
    });
  }
}
function Style($$payload) {
  Darkmode($$payload, {
    class: "border text-primary-500 dark:border-gray-800 dark:text-primary-600"
  });
}
function _page($$payload, $$props) {
  push();
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
        $$payload3.out += `<!---->Darkmode`;
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
    HighlightCompo($$payload2, { code: modules["./md/setup.md"] });
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Initial theme`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> Add the following to \`app.html\`: `;
    HighlightCompo($$payload2, { code: modules["./md/initialtheme.md"] });
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
          const each_array = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-8 flex flex-wrap">`;
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
              labelClass: "w-24 my-1",
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
