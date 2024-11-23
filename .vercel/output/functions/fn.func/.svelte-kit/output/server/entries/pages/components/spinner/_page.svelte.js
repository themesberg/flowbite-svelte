import { a3 as copy_payload, a4 as assign_payload, S as pop, Q as push, Y as ensure_array_like, W as attr, V as escape_html } from "../../../../chunks/index.js";
import { a9 as spinner } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { S as Spinner } from "../../../../chunks/Spinner.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { Button, Spinner } from "$lib";\n<\/script>\n\n<div class="space-y-2">\n  <Button>\n    <Spinner class="me-3" size="4" color="violet" />\n    Loading ...\n  </Button>\n  <Button outline color="dark">\n    <Spinner class="me-3" size="4" />\n    Loading ...\n  </Button>\n</div>\n';
const __vite_glob_0_1 = '<script>\n  import { Spinner } from "svelte-5-ui-lib";\n<\/script>\n';
function Button_1($$payload) {
  $$payload.out += `<div class="space-y-2">`;
  Button($$payload, {
    children: ($$payload2) => {
      Spinner($$payload2, { class: "me-3", size: "4", color: "violet" });
      $$payload2.out += `<!----> Loading ...`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    outline: true,
    color: "dark",
    children: ($$payload2) => {
      Spinner($$payload2, { class: "me-3", size: "4" });
      $$payload2.out += `<!----> Loading ...`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function _page($$payload, $$props) {
  push();
  const dirName = "spinner";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Button.svelte": __vite_glob_0_0,
    "./examples/Setup.svelte": __vite_glob_0_1
  });
  const exampleArr = [
    {
      name: "Button",
      component: Button_1
    }
  ];
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  const colors = Object.keys(spinner.variants.color);
  let spinnerColor = "primary";
  const sizes = ["4", "5", "6", "8", "10", "12", "16"];
  let spinnerSize = "8";
  let spinnerClass = "";
  const changeClass = () => {
    spinnerClass = spinnerClass === "" ? "ml-4" : "";
  };
  const alignments = [
    { name: "left", class: "text-left" },
    { name: "center", class: "text-center" },
    { name: "right", class: "text-right" }
  ];
  let selectedAlignment = "left";
  let currentSpinner = alignments.find((t) => t.name === selectedAlignment) || alignments[0];
  let generatedCode = (() => {
    let props = [];
    if (spinnerSize !== "8") props.push(` size="${spinnerSize}"`);
    if (spinnerColor !== "primary") props.push(` color="${spinnerColor}"`);
    if (spinnerClass !== "") props.push(` class="${spinnerClass}"`);
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    if (selectedAlignment !== "left") {
      return `<div class="${currentSpinner.class}">
  <Spinner${propsString}/>
</div>`;
    } else {
      return `<Spinner${propsString}/>`;
    }
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
        $$payload3.out += `<!---->Spinner`;
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
        $$payload3.out += `<!---->Interactive Spinner Builder`;
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
          const each_array = ensure_array_like(colors);
          const each_array_1 = ensure_array_like(sizes);
          const each_array_2 = ensure_array_like(alignments);
          $$payload3.out += `<div class="h-20"><div${attr("class", currentSpinner.class)}>`;
          Spinner($$payload3, {
            color: spinnerColor,
            size: spinnerSize,
            class: spinnerClass
          });
          $$payload3.out += `<!----></div></div> <div class="mb-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Color`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let color = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-24 my-1",
              name: "spinnercolor",
              get group() {
                return spinnerColor;
              },
              set group($$value) {
                spinnerColor = $$value;
                $$settled = false;
              },
              color,
              value: color,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(color)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Size`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let size = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: "w-12 my-1",
              name: "spinnersize",
              get group() {
                return spinnerSize;
              },
              set group($$value) {
                spinnerSize = $$value;
                $$settled = false;
              },
              value: size,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(size)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Alignment`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let option = each_array_2[$$index_2];
            Radio($$payload3, {
              labelClass: "w-16 my-1",
              name: "alignment",
              get group() {
                return selectedAlignment;
              },
              set group($$value) {
                selectedAlignment = $$value;
                $$settled = false;
              },
              value: option.name,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(option.name)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> `;
          Button($$payload3, {
            class: "w-36",
            onclick: changeClass,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(spinnerClass ? "Remove class" : "Add class")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
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
          const each_array_3 = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-12 flex flex-wrap">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Example`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
            let style = each_array_3[$$index_3];
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
