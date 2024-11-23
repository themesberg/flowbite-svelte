import { a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { c as child, f as first_child, n as next, s as sibling, r as reset, p as push, a6 as state, u as user_effect, a as pop, b as get, t as template_effect, a7 as set, d as derived } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { u as spinner, V as uiHelpers, b as set_class } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { S as Spinner } from "../chunks/Spinner.B5FrR-LX.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { Button, Spinner } from "$lib";\n<\/script>\n\n<div class="space-y-2">\n  <Button>\n    <Spinner class="me-3" size="4" color="violet" />\n    Loading ...\n  </Button>\n  <Button outline color="dark">\n    <Spinner class="me-3" size="4" />\n    Loading ...\n  </Button>\n</div>\n';
const __vite_glob_0_1 = '<script>\n  import { Spinner } from "svelte-5-ui-lib";\n<\/script>\n';
var root_1 = template(`<!> Loading ...`, 1);
var root_2 = template(`<!> Loading ...`, 1);
var root$1 = template(`<div class="space-y-2"><!> <!></div>`);
function Button_1($$anchor) {
  var div = root$1();
  var node = child(div);
  Button(node, {
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1();
      var node_1 = first_child(fragment);
      Spinner(node_1, { class: "me-3", size: "4", color: "violet" });
      next();
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node, 2);
  Button(node_2, {
    outline: true,
    color: "dark",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_2();
      var node_3 = first_child(fragment_1);
      Spinner(node_3, { class: "me-3", size: "4" });
      next();
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_5 = template(`<div class="h-20"><div><!></div></div> <div class="mb-4 flex flex-wrap space-x-4"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-4"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-4"><!> <!></div> <!>`, 1);
var root_18 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
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
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  const colors = Object.keys(spinner.variants.color);
  let spinnerColor = state("primary");
  const sizes = ["4", "5", "6", "8", "10", "12", "16"];
  let spinnerSize = state("8");
  let spinnerClass = state("");
  const changeClass = () => {
    set(spinnerClass, proxy(get(spinnerClass) === "" ? "ml-4" : ""));
  };
  const alignments = [
    { name: "left", class: "text-left" },
    { name: "center", class: "text-center" },
    { name: "right", class: "text-right" }
  ];
  let selectedAlignment = state("left");
  let currentSpinner = derived(() => alignments.find((t) => t.name === get(selectedAlignment)) || alignments[0]);
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(spinnerSize) !== "8") props.push(` size="${get(spinnerSize)}"`);
    if (get(spinnerColor) !== "primary") props.push(` color="${get(spinnerColor)}"`);
    if (get(spinnerClass) !== "") props.push(` class="${get(spinnerClass)}"`);
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    if (get(selectedAlignment) !== "left") {
      return `<div class="${get(currentSpinner).class}">
  <Spinner${propsString}/>
</div>`;
    } else {
      return `<Spinner${propsString}/>`;
    }
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
      var text$1 = text("Spinner");
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
      var text_2 = text("Interactive Spinner Builder");
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
        var div_1 = child(div);
        var node_5 = child(div_1);
        Spinner(node_5, {
          get color() {
            return get(spinnerColor);
          },
          get size() {
            return get(spinnerSize);
          },
          get class() {
            return get(spinnerClass);
          }
        });
        reset(div_1);
        reset(div);
        var div_2 = sibling(div, 2);
        var node_6 = child(div_2);
        Label(node_6, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text("Color");
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        var node_7 = sibling(node_6, 2);
        each(node_7, 17, () => colors, index, ($$anchor3, color) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "spinnercolor",
            get group() {
              return get(spinnerColor);
            },
            set group($$value) {
              set(spinnerColor, proxy($$value));
            },
            get color() {
              return get(color);
            },
            get value() {
              return get(color);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_4 = text();
              template_effect(() => set_text(text_4, get(color)));
              append($$anchor4, text_4);
            },
            $$slots: { default: true }
          });
        });
        reset(div_2);
        var div_3 = sibling(div_2, 2);
        var node_8 = child(div_3);
        Label(node_8, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_5 = text("Size");
            append($$anchor3, text_5);
          },
          $$slots: { default: true }
        });
        var node_9 = sibling(node_8, 2);
        each(node_9, 17, () => sizes, index, ($$anchor3, size) => {
          Radio($$anchor3, {
            labelClass: "w-12 my-1",
            name: "spinnersize",
            get group() {
              return get(spinnerSize);
            },
            set group($$value) {
              set(spinnerSize, proxy($$value));
            },
            get value() {
              return get(size);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_6 = text();
              template_effect(() => set_text(text_6, get(size)));
              append($$anchor4, text_6);
            },
            $$slots: { default: true }
          });
        });
        reset(div_3);
        var div_4 = sibling(div_3, 2);
        var node_10 = child(div_4);
        Label(node_10, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_7 = text("Alignment");
            append($$anchor3, text_7);
          },
          $$slots: { default: true }
        });
        var node_11 = sibling(node_10, 2);
        each(node_11, 17, () => alignments, index, ($$anchor3, option) => {
          Radio($$anchor3, {
            labelClass: "w-16 my-1",
            name: "alignment",
            get group() {
              return get(selectedAlignment);
            },
            set group($$value) {
              set(selectedAlignment, proxy($$value));
            },
            get value() {
              return get(option).name;
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_8 = text();
              template_effect(() => set_text(text_8, get(option).name));
              append($$anchor4, text_8);
            },
            $$slots: { default: true }
          });
        });
        reset(div_4);
        var node_12 = sibling(div_4, 2);
        Button(node_12, {
          class: "w-36",
          onclick: changeClass,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text();
            template_effect(() => set_text(text_9, get(spinnerClass) ? "Remove class" : "Add class"));
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        template_effect(() => set_class(div_1, get(currentSpinner).class));
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_13 = sibling(node_4, 2);
  H2(node_13, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_10 = text("Examples");
      append($$anchor2, text_10);
    },
    $$slots: { default: true }
  });
  var node_14 = sibling(node_13, 2);
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
    CodeWrapper(node_14, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_11 = root_18();
        var div_5 = first_child(fragment_11);
        var node_15 = child(div_5);
        Label(node_15, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_11 = text("Example");
            append($$anchor3, text_11);
          },
          $$slots: { default: true }
        });
        var node_16 = sibling(node_15, 2);
        each(node_16, 17, () => exampleArr, index, ($$anchor3, style) => {
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
              var text_12 = text();
              template_effect(() => set_text(text_12, get(style).name));
              append($$anchor4, text_12);
            },
            $$slots: { default: true }
          });
        });
        reset(div_5);
        var node_17 = sibling(div_5, 2);
        component(node_17, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_11);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_18 = sibling(node_14, 2);
  H2(node_18, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_13 = text("Component data");
      append($$anchor2, text_13);
    },
    $$slots: { default: true }
  });
  var node_19 = sibling(node_18, 2);
  CompoAttributesViewer(node_19, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
