import { b as text, a as append, t as template } from "../chunks/disclose-version.0TX42Q8e.js";
import { s as sibling, f as first_child, c as child, n as next, r as reset, p as push, t as template_effect, b as get, a as pop, a6 as state, a7 as set, aK as update, u as user_effect, d as derived } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { af as tooltip, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { T as Tooltip } from "../chunks/Tooltip.DS4jm7dQ.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { P } from "../chunks/P.CbSbQedY.js";
import { S as Span } from "../chunks/Span.DbQTChO8.js";
import { a as onDestroy } from "../chunks/index-client.B1NKc4fi.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { Tooltip, Button } from "$lib";\n  import { onDestroy } from "svelte";\n\n  let tooltipVisible = $state(false);\n  let counter = $state(0);\n  let countdownInterval: ReturnType<typeof setInterval> | undefined;\n\n  const startCounter = () => {\n    counter = 0;\n    countdownInterval = setInterval(() => {\n      counter++;\n    }, 1000);\n  };\n\n  const stopCounter = () => {\n    if (countdownInterval) {\n      clearInterval(countdownInterval);\n      countdownInterval = undefined;\n    }\n    counter = 0;\n  };\n\n  const handleClick = async () => {\n    // If tooltip is visible, hide it immediately and stop counter\n    if (tooltipVisible) {\n      tooltipVisible = false;\n      stopCounter();\n      return;\n    }\n    startCounter();\n    // Start the initial 2-second countdown\n    let initialCounter = 2;\n    const initialInterval = setInterval(() => {\n      initialCounter--;\n      if (initialCounter === 0) {\n        clearInterval(initialInterval);\n      }\n    }, 1000);\n\n    // Wait 2 seconds then show tooltip and start counter\n    await new Promise((resolve) => setTimeout(resolve, 2000));\n    tooltipVisible = true;\n\n    // Wait 4 seconds then hide tooltip and stop counter\n    await new Promise((resolve) => setTimeout(resolve, 2000));\n    tooltipVisible = false;\n    stopCounter();\n  };\n\n  // Cleanup on component destruction\n  onDestroy(() => {\n    stopCounter();\n  });\n<\/script>\n\n<div class="mt-20 flex justify-center">\n  <Button id="myButton" onclick={handleClick}>\n    <div class="flex flex-col gap-1">\n      Click Me to show in 2 sec and hide in 4 sec\n      <div>Time elapsed: {counter}s</div>\n      <div class="text-sm text-white">Will hide in {Math.max(0, 4 - counter)}s</div>\n    </div>\n  </Button>\n\n  <Tooltip visible={tooltipVisible} class="-m-14 p-4 text-center" color="purple">Controlled tooltip</Tooltip>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Button, Tooltip } from "$lib";\n<\/script>\n\n<div class="m-4 flex justify-center">\n  <div id="ext-ref" class=" m-8 w-40 rounded-lg border border-gray-200 p-2 dark:border-gray-600">External reference</div>\n</div>\n<div class="space-x-4 rtl:space-x-reverse">\n  <Button id="ref-left">Left</Button>\n  <Button id="ref-top">Top</Button>\n  <Button id="ref-right">Right</Button>\n</div>\n<Tooltip reference="#ext-ref" color="emerald" triggeredBy="#ref-left" position="left" class="w-20 text-sm font-light">Tooltip content.</Tooltip>\n<Tooltip reference="#ext-ref" color="cyan" triggeredBy="#ref-top" position="top" class="w-20 text-sm font-light">Tooltip content.</Tooltip>\n<Tooltip reference="#ext-ref" color="pink" triggeredBy="#ref-right" position="right" class="w-20 text-sm font-light">Tooltip content.</Tooltip>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Span, P, Tooltip } from "$lib";\n<\/script>\n\n<P class="mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing <Span highlight="red" id="ex-inline">tool tip in a paragraph</Span> elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>\n\n<Tooltip triggeredBy="#ex-inline" color="yellow" position="top" class="p-4">Tooltip content</Tooltip>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Tooltip, Button } from "$lib";\n<\/script>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Tooltip, Button } from "$lib";\n<\/script>\n\n<div class="mt-20 flex justify-center">\n  <Button id="btn">Click me</Button>\n  <Tooltip showOn="click" triggeredBy="#btn" color="blue" position="top" class="p-4">Click anywhere to hide me.</Tooltip>\n</div>\n';
var root$4 = template(`<div class="m-4 flex justify-center"><div id="ext-ref" class=" m-8 w-40 rounded-lg border border-gray-200 p-2 dark:border-gray-600">External reference</div></div> <div class="space-x-4 rtl:space-x-reverse"><!> <!> <!></div> <!> <!> <!>`, 1);
function ExternalReference($$anchor) {
  var fragment = root$4();
  var div = sibling(first_child(fragment), 2);
  var node = child(div);
  Button(node, {
    id: "ref-left",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Left");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Button(node_1, {
    id: "ref-top",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Top");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  Button(node_2, {
    id: "ref-right",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Right");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  reset(div);
  var node_3 = sibling(div, 2);
  Tooltip(node_3, {
    reference: "#ext-ref",
    color: "emerald",
    triggeredBy: "#ref-left",
    position: "left",
    class: "w-20 text-sm font-light",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_3 = text("Tooltip content.");
      append($$anchor2, text_3);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_3, 2);
  Tooltip(node_4, {
    reference: "#ext-ref",
    color: "cyan",
    triggeredBy: "#ref-top",
    position: "top",
    class: "w-20 text-sm font-light",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_4 = text("Tooltip content.");
      append($$anchor2, text_4);
    },
    $$slots: { default: true }
  });
  var node_5 = sibling(node_4, 2);
  Tooltip(node_5, {
    reference: "#ext-ref",
    color: "pink",
    triggeredBy: "#ref-right",
    position: "right",
    class: "w-20 text-sm font-light",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_5 = text("Tooltip content.");
      append($$anchor2, text_5);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
}
var root_1$1 = template(`Lorem ipsum dolor sit amet, consectetur adipiscing <!> elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, 1);
var root$3 = template(`<!> <!>`, 1);
function Inline($$anchor) {
  var fragment = root$3();
  var node = first_child(fragment);
  P(node, {
    class: "mt-20",
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment_1 = root_1$1();
      var node_1 = sibling(first_child(fragment_1));
      Span(node_1, {
        highlight: "red",
        id: "ex-inline",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("tool tip in a paragraph");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      next();
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node, 2);
  Tooltip(node_2, {
    triggeredBy: "#ex-inline",
    color: "yellow",
    position: "top",
    class: "p-4",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Tooltip content");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
}
var root$2 = template(`<div class="mt-20 flex justify-center"><!> <!></div>`);
function ShowOnClick($$anchor) {
  var div = root$2();
  var node = child(div);
  Button(node, {
    id: "btn",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Click me");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Tooltip(node_1, {
    showOn: "click",
    triggeredBy: "#btn",
    color: "blue",
    position: "top",
    class: "p-4",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Click anywhere to hide me.");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_1 = template(`<div class="flex flex-col gap-1">Click Me to show in 2 sec and hide in 4 sec <div> </div> <div class="text-sm text-white"> </div></div>`);
var root$1 = template(`<div class="mt-20 flex justify-center"><!> <!></div>`);
function ExternalControl($$anchor, $$props) {
  push($$props, true);
  let tooltipVisible = state(false);
  let counter = state(0);
  let countdownInterval;
  const startCounter = () => {
    set(counter, 0);
    countdownInterval = setInterval(
      () => {
        update(counter);
      },
      1e3
    );
  };
  const stopCounter = () => {
    if (countdownInterval) {
      clearInterval(countdownInterval);
      countdownInterval = void 0;
    }
    set(counter, 0);
  };
  const handleClick = async () => {
    if (get(tooltipVisible)) {
      set(tooltipVisible, false);
      stopCounter();
      return;
    }
    startCounter();
    let initialCounter = 2;
    const initialInterval = setInterval(
      () => {
        initialCounter -= 1;
        if (initialCounter === 0) {
          clearInterval(initialInterval);
        }
      },
      1e3
    );
    await new Promise((resolve) => setTimeout(resolve, 2e3));
    set(tooltipVisible, true);
    await new Promise((resolve) => setTimeout(resolve, 2e3));
    set(tooltipVisible, false);
    stopCounter();
  };
  onDestroy(() => {
    stopCounter();
  });
  var div = root$1();
  var node = child(div);
  Button(node, {
    id: "myButton",
    onclick: handleClick,
    children: ($$anchor2, $$slotProps) => {
      var div_1 = root_1();
      var div_2 = sibling(child(div_1));
      var text2 = child(div_2);
      reset(div_2);
      var div_3 = sibling(div_2, 2);
      var text_1 = child(div_3);
      template_effect(() => set_text(text_1, `Will hide in ${Math.max(0, 4 - get(counter)) ?? ""}s`));
      reset(div_3);
      reset(div_1);
      template_effect(() => set_text(text2, `Time elapsed: ${get(counter) ?? ""}s`));
      append($$anchor2, div_1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Tooltip(node_1, {
    get visible() {
      return get(tooltipVisible);
    },
    class: "-m-14 p-4 text-center",
    color: "purple",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Controlled tooltip");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
  pop();
}
var root_5 = template(`<div class="my-4 flex justify-center"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4"><!> <span class="mx-2"> </span> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!></div>`, 1);
var root_20 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "tooltip";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/ExternalControl.svelte": __vite_glob_0_0,
    "./examples/ExternalReference.svelte": __vite_glob_0_1,
    "./examples/Inline.svelte": __vite_glob_0_2,
    "./examples/Setup.svelte": __vite_glob_0_3,
    "./examples/ShowOnClick.svelte": __vite_glob_0_4
  });
  const exampleArr = [
    {
      name: "Show on click",
      component: ShowOnClick
    },
    {
      name: "External control",
      component: ExternalControl
    },
    {
      name: "External reference",
      component: ExternalReference
    },
    {
      name: "Inline",
      component: Inline
    }
  ];
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  const positions = Object.keys(tooltip.variants.position);
  let position = state(proxy(positions[0]));
  const colors = Object.keys(tooltip.variants.color);
  let color = state("default");
  let tooltipClass = state("");
  const changeClass = () => {
    set(tooltipClass, proxy(get(tooltipClass) === "" ? "p-4" : ""));
  };
  let arrow = state(true);
  const changeArrow = () => {
    set(arrow, !get(arrow));
  };
  let offset = state(6);
  function increaseOffset() {
    set(offset, get(offset) + 2);
  }
  function decreaseOffset() {
    if (get(offset) > 0) {
      set(offset, get(offset) - 2);
    }
  }
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(arrow) !== true) props.push(`arrow="${get(arrow)}"`);
    if (get(color)) props.push(`color="${get(color)}"`);
    if (get(position) !== "top") props.push(`position="${get(position)}"`);
    if (get(offset)) props.push(`offset={${get(offset)}}`);
    if (get(tooltipClass) !== "") props.push(`class="${get(tooltipClass)}"`);
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Button id="type-1" class="m-8">Tooltip trigger</Button>
<Tooltip${propsString}  triggeredBy="#type-1">Tooltip content</Tooltip>`;
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
      var text$1 = text("Tooltip");
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
      var text_2 = text("Interactive Tooltip Builder");
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
        Button(node_5, {
          id: "type-1",
          class: "m-8",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text("Tooltip trigger");
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        var node_6 = sibling(node_5, 2);
        Tooltip(node_6, {
          triggeredBy: "#type-1",
          get color() {
            return get(color);
          },
          get position() {
            return get(position);
          },
          get arrow() {
            return get(arrow);
          },
          get offset() {
            return get(offset);
          },
          get class() {
            return get(tooltipClass);
          },
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_4 = text("Tooltip content");
            append($$anchor3, text_4);
          },
          $$slots: { default: true }
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var node_7 = child(div_1);
        Label(node_7, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_5 = text("Color");
            append($$anchor3, text_5);
          },
          $$slots: { default: true }
        });
        var node_8 = sibling(node_7, 2);
        each(node_8, 17, () => colors, index, ($$anchor3, colorOption) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "color",
            get group() {
              return get(color);
            },
            set group($$value) {
              set(color, proxy($$value));
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
        reset(div_1);
        var div_2 = sibling(div_1, 2);
        var node_9 = child(div_2);
        Label(node_9, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_7 = text("Position");
            append($$anchor3, text_7);
          },
          $$slots: { default: true }
        });
        var node_10 = sibling(node_9, 2);
        each(node_10, 17, () => positions, index, ($$anchor3, option) => {
          Radio($$anchor3, {
            labelClass: "w-20 my-1",
            name: "interactive_toast_position",
            get group() {
              return get(position);
            },
            set group($$value) {
              set(position, proxy($$value));
            },
            get value() {
              return get(option);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_8 = text();
              template_effect(() => set_text(text_8, get(option)));
              append($$anchor4, text_8);
            },
            $$slots: { default: true }
          });
        });
        reset(div_2);
        var div_3 = sibling(div_2, 2);
        var node_11 = child(div_3);
        Button(node_11, {
          onclick: decreaseOffset,
          class: "rounded border p-1",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text("-");
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        var span = sibling(node_11, 2);
        var text_10 = child(span);
        reset(span);
        var node_12 = sibling(span, 2);
        Button(node_12, {
          onclick: increaseOffset,
          class: "rounded border p-1",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_11 = text("+");
            append($$anchor3, text_11);
          },
          $$slots: { default: true }
        });
        reset(div_3);
        var div_4 = sibling(div_3, 2);
        var node_13 = child(div_4);
        Button(node_13, {
          class: "w-36",
          onclick: changeClass,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_12 = text();
            template_effect(() => set_text(text_12, get(tooltipClass) ? "Remove class" : "Add class"));
            append($$anchor3, text_12);
          },
          $$slots: { default: true }
        });
        var node_14 = sibling(node_13, 2);
        Button(node_14, {
          class: "w-36",
          color: "secondary",
          onclick: changeArrow,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_13 = text();
            template_effect(() => set_text(text_13, get(arrow) ? "Remove arrow" : "Add arrow"));
            append($$anchor3, text_13);
          },
          $$slots: { default: true }
        });
        reset(div_4);
        template_effect(() => set_text(text_10, `Offset: ${get(offset) ?? ""}px`));
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_15 = sibling(node_4, 2);
  H2(node_15, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_14 = text("Examples");
      append($$anchor2, text_14);
    },
    $$slots: { default: true }
  });
  var node_16 = sibling(node_15, 2);
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
    CodeWrapper(node_16, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_10 = root_20();
        var div_5 = first_child(fragment_10);
        var node_17 = child(div_5);
        Label(node_17, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_15 = text("Example");
            append($$anchor3, text_15);
          },
          $$slots: { default: true }
        });
        var node_18 = sibling(node_17, 2);
        each(node_18, 17, () => exampleArr, index, ($$anchor3, style) => {
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
              var text_16 = text();
              template_effect(() => set_text(text_16, get(style).name));
              append($$anchor4, text_16);
            },
            $$slots: { default: true }
          });
        });
        reset(div_5);
        var node_19 = sibling(div_5, 2);
        component(node_19, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_10);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_20 = sibling(node_16, 2);
  H2(node_20, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_17 = text("Component data");
      append($$anchor2, text_17);
    },
    $$slots: { default: true }
  });
  var node_21 = sibling(node_20, 2);
  CompoAttributesViewer(node_21, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
