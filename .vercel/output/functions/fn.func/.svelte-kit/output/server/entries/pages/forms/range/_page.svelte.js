import { Q as push, a0 as spread_attributes, a2 as bind_props, S as pop, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like, V as escape_html } from "../../../../chunks/index.js";
import { aN as range } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { a as isGeneratedCodeOverflow } from "../../../../chunks/helpers.js";
function Range($$payload, $$props) {
  push();
  let {
    value = void 0,
    appearance = "none",
    color = "blue",
    rangeSize = "md",
    inputClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const inputCls = range({
    class: inputClass,
    appearance,
    color,
    size: rangeSize
  });
  $$payload.out += `<input${spread_attributes({
    type: "range",
    value,
    ...restProps,
    class: inputCls
  })}>`;
  bind_props($$props, { value });
  pop();
}
const __vite_glob_0_0 = '<script>\n  import { Range } from "$lib";\n<\/script>\n';
function _page($$payload, $$props) {
  push();
  const dirName = "forms/range";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Setup.svelte": __vite_glob_0_0
  });
  let interactiveValue = 5;
  let stepValue = 1;
  const changeStepValue = () => {
    stepValue = stepValue === 0.5 ? 1 : 0.5;
  };
  const colors = Object.keys(range.variants.color);
  let rangeColor = "blue";
  let disabled = false;
  const changeDisabled = () => {
    disabled = !disabled;
  };
  let minmax = { min: 0, max: 10 };
  const changeMinMax = () => {
    if (minmax.max === 10) {
      minmax.min = 0;
      minmax.max = 20;
      interactiveValue = 10;
    } else {
      minmax.min = 0;
      minmax.max = 10;
      interactiveValue = 5;
    }
  };
  let labelStatus = false;
  const changeLabelStatus = () => {
    labelStatus = !labelStatus;
  };
  const rangeSizes = Object.keys(range.variants.size);
  let rangeSize = "md";
  let generatedCode = (() => {
    let props = [];
    if (rangeColor) props.push(`color="${rangeColor}"`);
    if (minmax.max !== 10) props.push(`min="${minmax.min}" max="${minmax.max}"`);
    if (stepValue !== 1) props.push(`step="${stepValue}"`);
    if (disabled) props.push("disabled");
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `${labelStatus ? `<div class="relative">
  ` : ""}<Range${propsString}/>
${labelStatus ? `<span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min: ${minmax.min}</span>
<span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">${minmax.max / 2}</span>
<span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max: ${minmax.max}</span></div>` : ""}`;
  })();
  let builderExpand = false;
  let showBuilderExpandButton = isGeneratedCodeOverflow(generatedCode);
  const handleBuilderExpandClick = () => {
    builderExpand = !builderExpand;
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    H1($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Range`;
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
        $$payload3.out += `<!---->Interactive Range Builder`;
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
          $$payload3.out += `<div class="relative">${escape_html(stepValue !== 1 ? `Step: ${stepValue}` : "")} `;
          if (minmax.max !== 10) {
            $$payload3.out += "<!--[-->";
            $$payload3.out += `<p>Value: ${escape_html(interactiveValue)}</p>`;
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]--> `;
          Range($$payload3, {
            color: rangeColor,
            disabled,
            min: minmax.min,
            max: minmax.max,
            get value() {
              return interactiveValue;
            },
            set value($$value) {
              interactiveValue = $$value;
              $$settled = false;
            },
            step: stepValue,
            appearance: "auto"
          });
          $$payload3.out += `<!----> `;
          if (labelStatus) {
            $$payload3.out += "<!--[-->";
            $$payload3.out += `<span class="absolute -bottom-6 start-0 text-sm text-gray-500 dark:text-gray-400">Min: ${escape_html(minmax.min)}</span> <span class="absolute -bottom-6 start-1/2 -translate-x-1/2 text-sm text-gray-500 rtl:translate-x-1/2 dark:text-gray-400">${escape_html(minmax.max / 2)}</span> <span class="absolute -bottom-6 end-0 text-sm text-gray-500 dark:text-gray-400">Max: ${escape_html(minmax.max)}</span>`;
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 mt-12 flex flex-wrap space-x-2">`;
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
              name: "default_alert_color",
              get group() {
                return rangeColor;
              },
              set group($$value) {
                rangeColor = $$value;
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
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-40",
            onclick: changeDisabled,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(disabled ? "Enabled" : "Disabled")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "secondary",
            onclick: changeMinMax,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(minmax.max === 10 ? "Add max min" : "Remove max min")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "rose",
            onclick: changeLabelStatus,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(labelStatus ? "Remove label" : "Add label")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "indigo",
            onclick: changeStepValue,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(stepValue !== 0.5 ? "Add step" : "Remove step")}`;
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
        $$payload3.out += `<!---->Sizes`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> <p class="text-red-600">Size props won't work with colors.</p> `;
    CodeWrapper($$payload2, {
      children: ($$payload3) => {
        const each_array_1 = ensure_array_like(rangeSizes);
        Label($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<!---->Size: ${escape_html(rangeSize)}`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        Range($$payload3, { id: "small-range", rangeSize });
        $$payload3.out += `<!----> <div class="mt-4 flex flex-wrap space-x-2">`;
        Label($$payload3, {
          class: "mb-4 w-full font-bold",
          children: ($$payload4) => {
            $$payload4.out += `<!---->Size`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> <!--[-->`;
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let sizeOption = each_array_1[$$index_1];
          Radio($$payload3, {
            labelClass: "w-16 my-1",
            name: "file_input_size",
            get group() {
              return rangeSize;
            },
            set group($$value) {
              rangeSize = $$value;
              $$settled = false;
            },
            value: sizeOption,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(sizeOption)}`;
            },
            $$slots: { default: true }
          });
        }
        $$payload3.out += `<!--]--></div>`;
      },
      $$slots: { default: true }
    });
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
