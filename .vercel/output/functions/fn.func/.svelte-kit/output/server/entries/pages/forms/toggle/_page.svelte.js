import { V as escape_html, a3 as copy_payload, a4 as assign_payload, S as pop, Q as push, Y as ensure_array_like, W as attr, X as stringify } from "../../../../chunks/index.js";
import { aa as toggle } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { T as Toggle } from "../../../../chunks/Toggle.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { Toggle } from "$lib";\n<\/script>\n\n<Toggle spanClass="w-16 h-10 after:top-1 after:left-[4px]  after:h-8 after:w-8">Custom toggle</Toggle>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Toggle } from "$lib";\n  let isLoading = $state(true);\n  setTimeout(() => {\n    isLoading = false;\n  }, 3000);\n<\/script>\n\n<Toggle class="mt-3" disabled={isLoading}>\n  loading: {isLoading}\n</Toggle>\n';
const __vite_glob_0_2 = '<script>\n  import { Toggle } from "svelte-5-ui-lib";\n<\/script>\n';
function CustomSize($$payload) {
  Toggle($$payload, {
    spanClass: "w-16 h-10 after:top-1 after:left-[4px]  after:h-8 after:w-8",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Custom toggle`;
    },
    $$slots: { default: true }
  });
}
function Loading($$payload) {
  let isLoading = true;
  setTimeout(
    () => {
      isLoading = false;
    },
    3e3
  );
  Toggle($$payload, {
    class: "mt-3",
    disabled: isLoading,
    children: ($$payload2) => {
      $$payload2.out += `<!---->loading: ${escape_html(isLoading)}`;
    },
    $$slots: { default: true }
  });
}
function _page($$payload, $$props) {
  push();
  const dirName = "forms/toggle";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/CustomSize.svelte": __vite_glob_0_0,
    "./examples/Loading.svelte": __vite_glob_0_1,
    "./examples/Setup.svelte": __vite_glob_0_2
  });
  const exampleArr = [
    {
      name: "Custom size",
      component: CustomSize
    },
    {
      name: "Loading",
      component: Loading
    }
  ];
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  const colors = Object.keys(toggle.variants.color);
  let toggleColor = "primary";
  const sizes = Object.keys(toggle.variants.size);
  let toggleSize = "default";
  let checked = false;
  const changeChecked = () => {
    checked = !checked;
  };
  let disabled = false;
  const changeDisabled = () => {
    disabled = !disabled;
  };
  let leftSlot = false;
  const changeLeftLabel = () => {
    leftSlot = !leftSlot;
    checked = false;
  };
  let generatedCode = (() => {
    let props = [];
    if (toggleSize !== "default") props.push(` size="${toggleSize}"`);
    if (toggleColor !== "primary") props.push(` color="${toggleColor}"`);
    if (checked) props.push(" checked");
    if (disabled) props.push(" disabled");
    if (leftSlot) props.push(" bind:checked");
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Toggle${propsString}>${leftSlot ? `
 {#snippet leftLabel()}
  <div class="me-4 {!checked ? 'text-red-600 font-semibold' : ''}">Off</div>
 {/snippet}
 <div class={checked ? 'text-green-600 font-semibold' : ''}>On</div>
` : "Toggle me"}</Toggle>`;
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
        $$payload3.out += `<!---->Toggle`;
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
        $$payload3.out += `<!---->Interactive Toggle Builder`;
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
          $$payload3.out += `<div class="h-12">`;
          {
            let leftLabel = function($$payload4) {
              if (leftSlot) {
                $$payload4.out += "<!--[-->";
                $$payload4.out += `<div${attr("class", `me-4 ${stringify(!checked ? "font-semibold text-red-600" : "")}`)}>Off</div>`;
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]-->`;
            };
            Toggle($$payload3, {
              color: toggleColor,
              toggleSize,
              get checked() {
                return checked;
              },
              set checked($$value) {
                checked = $$value;
                $$settled = false;
              },
              disabled,
              leftLabel,
              children: ($$payload4) => {
                if (!leftSlot) {
                  $$payload4.out += "<!--[-->";
                  if (disabled) {
                    $$payload4.out += "<!--[-->";
                    $$payload4.out += `Disabled`;
                  } else {
                    $$payload4.out += "<!--[!-->";
                  }
                  $$payload4.out += `<!--]--> `;
                  if (checked) {
                    $$payload4.out += "<!--[-->";
                    $$payload4.out += `Checked`;
                  } else {
                    $$payload4.out += "<!--[!-->";
                  }
                  $$payload4.out += `<!--]--> Toggle`;
                } else {
                  $$payload4.out += "<!--[!-->";
                  $$payload4.out += `<div${attr("class", checked ? "font-semibold text-green-600" : "")}>On</div>`;
                }
                $$payload4.out += `<!--]-->`;
              },
              $$slots: { leftLabel: true, default: true }
            });
          }
          $$payload3.out += `<!----></div> <div class="mb-4 flex flex-wrap">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Color`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let colorOption = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-24 m-2",
              name: "toggle_color",
              get group() {
                return toggleColor;
              },
              set group($$value) {
                toggleColor = $$value;
                $$settled = false;
              },
              color: colorOption,
              value: colorOption,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(colorOption)}`;
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
              labelClass: "w-32 m-2",
              name: "toggle_size",
              get group() {
                return toggleSize;
              },
              set group($$value) {
                toggleSize = $$value;
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
            onclick: changeChecked,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(checked ? "Remove checked" : "Add checked")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "secondary",
            onclick: changeDisabled,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(disabled ? "Remove disabled" : "Add disabled")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "emerald",
            onclick: changeLeftLabel,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(leftSlot ? "Remove left slot" : "Add left slot")}`;
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
          $$payload3.out += `<div class="mb-12 flex flex-wrap">`;
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
