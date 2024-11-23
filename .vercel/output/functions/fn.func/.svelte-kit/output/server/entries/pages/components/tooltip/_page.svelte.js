import { a8 as current_component, Q as push, V as escape_html, S as pop, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like } from "../../../../chunks/index.js";
import { a5 as tooltip } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { T as Tooltip } from "../../../../chunks/Tooltip.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { P } from "../../../../chunks/P.js";
import { S as Span } from "../../../../chunks/Span.js";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Tooltip, Button } from "$lib";\n  import { onDestroy } from "svelte";\n\n  let tooltipVisible = $state(false);\n  let counter = $state(0);\n  let countdownInterval: ReturnType<typeof setInterval> | undefined;\n\n  const startCounter = () => {\n    counter = 0;\n    countdownInterval = setInterval(() => {\n      counter++;\n    }, 1000);\n  };\n\n  const stopCounter = () => {\n    if (countdownInterval) {\n      clearInterval(countdownInterval);\n      countdownInterval = undefined;\n    }\n    counter = 0;\n  };\n\n  const handleClick = async () => {\n    // If tooltip is visible, hide it immediately and stop counter\n    if (tooltipVisible) {\n      tooltipVisible = false;\n      stopCounter();\n      return;\n    }\n    startCounter();\n    // Start the initial 2-second countdown\n    let initialCounter = 2;\n    const initialInterval = setInterval(() => {\n      initialCounter--;\n      if (initialCounter === 0) {\n        clearInterval(initialInterval);\n      }\n    }, 1000);\n\n    // Wait 2 seconds then show tooltip and start counter\n    await new Promise((resolve) => setTimeout(resolve, 2000));\n    tooltipVisible = true;\n\n    // Wait 4 seconds then hide tooltip and stop counter\n    await new Promise((resolve) => setTimeout(resolve, 2000));\n    tooltipVisible = false;\n    stopCounter();\n  };\n\n  // Cleanup on component destruction\n  onDestroy(() => {\n    stopCounter();\n  });\n<\/script>\n\n<div class="mt-20 flex justify-center">\n  <Button id="myButton" onclick={handleClick}>\n    <div class="flex flex-col gap-1">\n      Click Me to show in 2 sec and hide in 4 sec\n      <div>Time elapsed: {counter}s</div>\n      <div class="text-sm text-white">Will hide in {Math.max(0, 4 - counter)}s</div>\n    </div>\n  </Button>\n\n  <Tooltip visible={tooltipVisible} class="-m-14 p-4 text-center" color="purple">Controlled tooltip</Tooltip>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Button, Tooltip } from "$lib";\n<\/script>\n\n<div class="m-4 flex justify-center">\n  <div id="ext-ref" class=" m-8 w-40 rounded-lg border border-gray-200 p-2 dark:border-gray-600">External reference</div>\n</div>\n<div class="space-x-4 rtl:space-x-reverse">\n  <Button id="ref-left">Left</Button>\n  <Button id="ref-top">Top</Button>\n  <Button id="ref-right">Right</Button>\n</div>\n<Tooltip reference="#ext-ref" color="emerald" triggeredBy="#ref-left" position="left" class="w-20 text-sm font-light">Tooltip content.</Tooltip>\n<Tooltip reference="#ext-ref" color="cyan" triggeredBy="#ref-top" position="top" class="w-20 text-sm font-light">Tooltip content.</Tooltip>\n<Tooltip reference="#ext-ref" color="pink" triggeredBy="#ref-right" position="right" class="w-20 text-sm font-light">Tooltip content.</Tooltip>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Span, P, Tooltip } from "$lib";\n<\/script>\n\n<P class="mt-20">Lorem ipsum dolor sit amet, consectetur adipiscing <Span highlight="red" id="ex-inline">tool tip in a paragraph</Span> elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>\n\n<Tooltip triggeredBy="#ex-inline" color="yellow" position="top" class="p-4">Tooltip content</Tooltip>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Tooltip, Button } from "$lib";\n<\/script>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Tooltip, Button } from "$lib";\n<\/script>\n\n<div class="mt-20 flex justify-center">\n  <Button id="btn">Click me</Button>\n  <Tooltip showOn="click" triggeredBy="#btn" color="blue" position="top" class="p-4">Click anywhere to hide me.</Tooltip>\n</div>\n';
function ExternalReference($$payload) {
  $$payload.out += `<div class="m-4 flex justify-center"><div id="ext-ref" class="m-8 w-40 rounded-lg border border-gray-200 p-2 dark:border-gray-600">External reference</div></div> <div class="space-x-4 rtl:space-x-reverse">`;
  Button($$payload, {
    id: "ref-left",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Left`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    id: "ref-top",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Top`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    id: "ref-right",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Right`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Tooltip($$payload, {
    reference: "#ext-ref",
    color: "emerald",
    triggeredBy: "#ref-left",
    position: "left",
    class: "w-20 text-sm font-light",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Tooltip content.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Tooltip($$payload, {
    reference: "#ext-ref",
    color: "cyan",
    triggeredBy: "#ref-top",
    position: "top",
    class: "w-20 text-sm font-light",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Tooltip content.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Tooltip($$payload, {
    reference: "#ext-ref",
    color: "pink",
    triggeredBy: "#ref-right",
    position: "right",
    class: "w-20 text-sm font-light",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Tooltip content.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function Inline($$payload) {
  P($$payload, {
    class: "mt-20",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Lorem ipsum dolor sit amet, consectetur adipiscing `;
      Span($$payload2, {
        highlight: "red",
        id: "ex-inline",
        children: ($$payload3) => {
          $$payload3.out += `<!---->tool tip in a paragraph`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Tooltip($$payload, {
    triggeredBy: "#ex-inline",
    color: "yellow",
    position: "top",
    class: "p-4",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Tooltip content`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function ShowOnClick($$payload) {
  $$payload.out += `<div class="mt-20 flex justify-center">`;
  Button($$payload, {
    id: "btn",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Click me`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Tooltip($$payload, {
    showOn: "click",
    triggeredBy: "#btn",
    color: "blue",
    position: "top",
    class: "p-4",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Click anywhere to hide me.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function ExternalControl($$payload, $$props) {
  push();
  let tooltipVisible = false;
  let counter = 0;
  let countdownInterval;
  const startCounter = () => {
    counter = 0;
    countdownInterval = setInterval(
      () => {
        counter++;
      },
      1e3
    );
  };
  const stopCounter = () => {
    if (countdownInterval) {
      clearInterval(countdownInterval);
      countdownInterval = void 0;
    }
    counter = 0;
  };
  const handleClick = async () => {
    if (tooltipVisible) {
      tooltipVisible = false;
      stopCounter();
      return;
    }
    startCounter();
    let initialCounter = 2;
    const initialInterval = setInterval(
      () => {
        initialCounter--;
        if (initialCounter === 0) {
          clearInterval(initialInterval);
        }
      },
      1e3
    );
    await new Promise((resolve) => setTimeout(resolve, 2e3));
    tooltipVisible = true;
    await new Promise((resolve) => setTimeout(resolve, 2e3));
    tooltipVisible = false;
    stopCounter();
  };
  onDestroy(() => {
    stopCounter();
  });
  $$payload.out += `<div class="mt-20 flex justify-center">`;
  Button($$payload, {
    id: "myButton",
    onclick: handleClick,
    children: ($$payload2) => {
      $$payload2.out += `<div class="flex flex-col gap-1">Click Me to show in 2 sec and hide in 4 sec <div>Time elapsed: ${escape_html(counter)}s</div> <div class="text-sm text-white">Will hide in ${escape_html(Math.max(0, 4 - counter))}s</div></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Tooltip($$payload, {
    visible: tooltipVisible,
    class: "-m-14 p-4 text-center",
    color: "purple",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Controlled tooltip`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
  pop();
}
function _page($$payload, $$props) {
  push();
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
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  const positions = Object.keys(tooltip.variants.position);
  let position = positions[0];
  const colors = Object.keys(tooltip.variants.color);
  let color = "default";
  let tooltipClass = "";
  const changeClass = () => {
    tooltipClass = tooltipClass === "" ? "p-4" : "";
  };
  let arrow = true;
  const changeArrow = () => {
    arrow = !arrow;
  };
  let offset = 6;
  function increaseOffset() {
    offset += 2;
  }
  function decreaseOffset() {
    if (offset > 0) {
      offset -= 2;
    }
  }
  let generatedCode = (() => {
    let props = [];
    if (arrow !== true) props.push(`arrow="${arrow}"`);
    if (color) props.push(`color="${color}"`);
    if (position !== "top") props.push(`position="${position}"`);
    if (offset) props.push(`offset={${offset}}`);
    if (tooltipClass !== "") props.push(`class="${tooltipClass}"`);
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Button id="type-1" class="m-8">Tooltip trigger</Button>
<Tooltip${propsString}  triggeredBy="#type-1">Tooltip content</Tooltip>`;
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
        $$payload3.out += `<!---->Tooltip`;
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
        $$payload3.out += `<!---->Interactive Tooltip Builder`;
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
          const each_array_1 = ensure_array_like(positions);
          $$payload3.out += `<div class="my-4 flex justify-center">`;
          Button($$payload3, {
            id: "type-1",
            class: "m-8",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Tooltip trigger`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Tooltip($$payload3, {
            triggeredBy: "#type-1",
            color,
            position,
            arrow,
            offset,
            class: tooltipClass,
            children: ($$payload4) => {
              $$payload4.out += `<!---->Tooltip content`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="mb-4 flex flex-wrap space-x-2">`;
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
              labelClass: "w-24 my-1",
              name: "color",
              get group() {
                return color;
              },
              set group($$value) {
                color = $$value;
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
            let option = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: "w-20 my-1",
              name: "interactive_toast_position",
              get group() {
                return position;
              },
              set group($$value) {
                position = $$value;
                $$settled = false;
              },
              value: option,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(option)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4">`;
          Button($$payload3, {
            onclick: decreaseOffset,
            class: "rounded border p-1",
            children: ($$payload4) => {
              $$payload4.out += `<!---->-`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <span class="mx-2">Offset: ${escape_html(offset)}px</span> `;
          Button($$payload3, {
            onclick: increaseOffset,
            class: "rounded border p-1",
            children: ($$payload4) => {
              $$payload4.out += `<!---->+`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-36",
            onclick: changeClass,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(tooltipClass ? "Remove class" : "Add class")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-36",
            color: "secondary",
            onclick: changeArrow,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(arrow ? "Remove arrow" : "Add arrow")}`;
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
