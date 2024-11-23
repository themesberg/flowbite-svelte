import { b as text, a as append, t as template, c as comment } from "../chunks/disclose-version.0TX42Q8e.js";
import { n as next, a7 as set, b as get, t as template_effect, a6 as state, p as push, u as user_effect, f as first_child, a as pop, s as sibling, c as child, r as reset, d as derived } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { b as proxy, i as if_block, c as component } from "../chunks/props.B7eOu8hW.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { y as toggle, V as uiHelpers, b as set_class } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { T as Toggle } from "../chunks/Toggle.DCK_TCRE.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { Toggle } from "$lib";\n<\/script>\n\n<Toggle spanClass="w-16 h-10 after:top-1 after:left-[4px]  after:h-8 after:w-8">Custom toggle</Toggle>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Toggle } from "$lib";\n  let isLoading = $state(true);\n  setTimeout(() => {\n    isLoading = false;\n  }, 3000);\n<\/script>\n\n<Toggle class="mt-3" disabled={isLoading}>\n  loading: {isLoading}\n</Toggle>\n';
const __vite_glob_0_2 = '<script>\n  import { Toggle } from "svelte-5-ui-lib";\n<\/script>\n';
function CustomSize($$anchor) {
  Toggle($$anchor, {
    spanClass: "w-16 h-10 after:top-1 after:left-[4px]  after:h-8 after:w-8",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Custom toggle");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
}
function Loading($$anchor) {
  let isLoading = state(true);
  setTimeout(
    () => {
      set(isLoading, false);
    },
    3e3
  );
  Toggle($$anchor, {
    class: "mt-3",
    get disabled() {
      return get(isLoading);
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text();
      template_effect(() => set_text(text$1, `loading: ${get(isLoading) ?? ""}`));
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
}
var root_7 = template(`<div>Off</div>`);
var root_9 = template(`<!> <!> Toggle`, 1);
var root_12 = template(`<div>On</div>`);
var root_5 = template(`<div class="h-12"><!></div> <div class="mb-4 flex flex-wrap"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-4"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!> <!></div>`, 1);
var root_24 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
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
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  const colors = Object.keys(toggle.variants.color);
  let toggleColor = state("primary");
  const sizes = Object.keys(toggle.variants.size);
  let toggleSize = state("default");
  let checked = state(false);
  const changeChecked = () => {
    set(checked, !get(checked));
  };
  let disabled = state(false);
  const changeDisabled = () => {
    set(disabled, !get(disabled));
  };
  let leftSlot = state(false);
  const changeLeftLabel = () => {
    set(leftSlot, !get(leftSlot));
    set(checked, false);
  };
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(toggleSize) !== "default") props.push(` size="${get(toggleSize)}"`);
    if (get(toggleColor) !== "primary") props.push(` color="${get(toggleColor)}"`);
    if (get(checked)) props.push(" checked");
    if (get(disabled)) props.push(" disabled");
    if (get(leftSlot)) props.push(" bind:checked");
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Toggle${propsString}>${get(leftSlot) ? `
 {#snippet leftLabel()}
  <div class="me-4 {!checked ? 'text-red-600 font-semibold' : ''}">Off</div>
 {/snippet}
 <div class={checked ? 'text-green-600 font-semibold' : ''}>On</div>
` : "Toggle me"}</Toggle>`;
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
      var text$1 = text("Toggle");
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
      var text_2 = text("Interactive Toggle Builder");
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
        {
          const leftLabel = ($$anchor3) => {
            var fragment_3 = comment();
            var node_6 = first_child(fragment_3);
            if_block(node_6, () => get(leftSlot), ($$anchor4) => {
              var div_1 = root_7();
              template_effect(() => set_class(div_1, `me-4 ${(!get(checked) ? "font-semibold text-red-600" : "") ?? ""}`));
              append($$anchor4, div_1);
            });
            append($$anchor3, fragment_3);
          };
          Toggle(node_5, {
            get color() {
              return get(toggleColor);
            },
            get toggleSize() {
              return get(toggleSize);
            },
            get checked() {
              return get(checked);
            },
            set checked($$value) {
              set(checked, proxy($$value));
            },
            get disabled() {
              return get(disabled);
            },
            leftLabel,
            children: ($$anchor3, $$slotProps2) => {
              var fragment_4 = comment();
              var node_7 = first_child(fragment_4);
              if_block(
                node_7,
                () => !get(leftSlot),
                ($$anchor4) => {
                  var fragment_5 = root_9();
                  var node_8 = first_child(fragment_5);
                  if_block(node_8, () => get(disabled), ($$anchor5) => {
                    var text_3 = text("Disabled");
                    append($$anchor5, text_3);
                  });
                  var node_9 = sibling(node_8, 2);
                  if_block(node_9, () => get(checked), ($$anchor5) => {
                    var text_4 = text("Checked");
                    append($$anchor5, text_4);
                  });
                  next();
                  append($$anchor4, fragment_5);
                },
                ($$anchor4) => {
                  var div_2 = root_12();
                  template_effect(() => set_class(div_2, get(checked) ? "font-semibold text-green-600" : ""));
                  append($$anchor4, div_2);
                }
              );
              append($$anchor3, fragment_4);
            },
            $$slots: { leftLabel: true, default: true }
          });
        }
        reset(div);
        var div_3 = sibling(div, 2);
        var node_10 = child(div_3);
        Label(node_10, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_5 = text("Color");
            append($$anchor3, text_5);
          },
          $$slots: { default: true }
        });
        var node_11 = sibling(node_10, 2);
        each(node_11, 17, () => colors, index, ($$anchor3, colorOption) => {
          Radio($$anchor3, {
            labelClass: "w-24 m-2",
            name: "toggle_color",
            get group() {
              return get(toggleColor);
            },
            set group($$value) {
              set(toggleColor, proxy($$value));
            },
            get color() {
              return get(colorOption);
            },
            get value() {
              return get(colorOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_6 = text();
              template_effect(() => set_text(text_6, get(colorOption)));
              append($$anchor4, text_6);
            },
            $$slots: { default: true }
          });
        });
        reset(div_3);
        var div_4 = sibling(div_3, 2);
        var node_12 = child(div_4);
        Label(node_12, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_7 = text("Size");
            append($$anchor3, text_7);
          },
          $$slots: { default: true }
        });
        var node_13 = sibling(node_12, 2);
        each(node_13, 17, () => sizes, index, ($$anchor3, size) => {
          Radio($$anchor3, {
            labelClass: "w-32 m-2",
            name: "toggle_size",
            get group() {
              return get(toggleSize);
            },
            set group($$value) {
              set(toggleSize, proxy($$value));
            },
            get value() {
              return get(size);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_8 = text();
              template_effect(() => set_text(text_8, get(size)));
              append($$anchor4, text_8);
            },
            $$slots: { default: true }
          });
        });
        reset(div_4);
        var div_5 = sibling(div_4, 2);
        var node_14 = child(div_5);
        Button(node_14, {
          class: "w-40",
          onclick: changeChecked,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text();
            template_effect(() => set_text(text_9, get(checked) ? "Remove checked" : "Add checked"));
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        var node_15 = sibling(node_14, 2);
        Button(node_15, {
          class: "w-40",
          color: "secondary",
          onclick: changeDisabled,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_10 = text();
            template_effect(() => set_text(text_10, get(disabled) ? "Remove disabled" : "Add disabled"));
            append($$anchor3, text_10);
          },
          $$slots: { default: true }
        });
        var node_16 = sibling(node_15, 2);
        Button(node_16, {
          class: "w-40",
          color: "emerald",
          onclick: changeLeftLabel,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_11 = text();
            template_effect(() => set_text(text_11, get(leftSlot) ? "Remove left slot" : "Add left slot"));
            append($$anchor3, text_11);
          },
          $$slots: { default: true }
        });
        reset(div_5);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_17 = sibling(node_4, 2);
  H2(node_17, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_12 = text("Examples");
      append($$anchor2, text_12);
    },
    $$slots: { default: true }
  });
  var node_18 = sibling(node_17, 2);
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
    CodeWrapper(node_18, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_14 = root_24();
        var div_6 = first_child(fragment_14);
        var node_19 = child(div_6);
        Label(node_19, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_13 = text("Example");
            append($$anchor3, text_13);
          },
          $$slots: { default: true }
        });
        var node_20 = sibling(node_19, 2);
        each(node_20, 17, () => exampleArr, index, ($$anchor3, style) => {
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
              var text_14 = text();
              template_effect(() => set_text(text_14, get(style).name));
              append($$anchor4, text_14);
            },
            $$slots: { default: true }
          });
        });
        reset(div_6);
        var node_21 = sibling(div_6, 2);
        component(node_21, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_14);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_22 = sibling(node_18, 2);
  H2(node_22, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_15 = text("Component data");
      append($$anchor2, text_15);
    },
    $$slots: { default: true }
  });
  var node_23 = sibling(node_22, 2);
  CompoAttributesViewer(node_23, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
