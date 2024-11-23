import { Q as push, W as attr, a0 as spread_attributes, a2 as bind_props, S as pop, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like, V as escape_html, X as stringify } from "../../../../chunks/index.js";
import { aL as floatingLabelInput } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { i as idGenerator } from "../../../../chunks/uiHelpers.svelte.js";
import { H as Helper } from "../../../../chunks/Helper.js";
import { T as Toggle } from "../../../../chunks/Toggle.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { a as isGeneratedCodeOverflow } from "../../../../chunks/helpers.js";
function FloatingLabelInput($$payload, $$props) {
  push();
  let {
    children,
    id = idGenerator(),
    value = void 0,
    aria_describedby,
    inputStyle = "standard",
    size = "default",
    color = "default",
    divClass,
    inputClass,
    labelClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, input, label } = floatingLabelInput({ inputStyle, size, color });
  $$payload.out += `<div${attr("class", base({ class: divClass }))}><input${spread_attributes({
    id,
    placeholder: " ",
    value,
    ...restProps,
    "aria-describedby": aria_describedby,
    class: input({ class: inputClass })
  })}> <label${attr("for", id)}${attr("class", label({ class: labelClass }))}>`;
  children($$payload);
  $$payload.out += `<!----></label></div>`;
  bind_props($$props, { value });
  pop();
}
const __vite_glob_0_0 = '<script>\n  import { FloatingLabelInput, Helper } from "$lib";\n<\/script>\n';
function _page($$payload, $$props) {
  push();
  const dirName = "forms/floating-label-input";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Setup.svelte": __vite_glob_0_0
  });
  const inputStyles = ["standard", "filled", "outlined"];
  let inputStyle = "standard";
  let floatingSize = "default";
  const colors = Object.keys(floatingLabelInput.variants.color);
  let floatingColor = "default";
  let helperColor = "default";
  let disabled = false;
  const changeDisabled = () => {
    disabled = !disabled;
  };
  let helperSlot = false;
  const changeHelperSlot = () => {
    helperSlot = !helperSlot;
    helperColor = "default";
  };
  let generatedCode = (() => {
    let props = [];
    if (floatingColor !== "default") props.push(` color="${floatingColor}"`);
    if (disabled) props.push(" disabled");
    if (inputStyle !== "standard") props.push(` inputStyle="${inputStyle}"`);
    if (floatingSize !== "default") props.push(` size="${floatingSize}"`);
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    let helperCode = "";
    if (helperSlot) {
      helperCode = `
<Helper class="pt-2" color="${helperColor}">
  Helper text
</Helper>`;
    }
    return `<FloatingLabelInput ${propsString}>
  Floating label
</FloatingLabelInput>${helperCode}`;
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
        $$payload3.out += `<!---->Floating label`;
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
        $$payload3.out += `<!---->Floating label examples`;
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
          const each_array = ensure_array_like(inputStyles);
          const each_array_1 = ensure_array_like(colors);
          const each_array_2 = ensure_array_like(colors);
          $$payload3.out += `<div class="mb-4 md:h-20">`;
          FloatingLabelInput($$payload3, {
            inputStyle,
            disabled,
            size: floatingSize,
            color: floatingColor,
            id: "floating_filled",
            type: "text",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Floating ${escape_html(inputStyle)}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          if (helperSlot) {
            $$payload3.out += "<!--[-->";
            Helper($$payload3, {
              class: "pt-2",
              color: helperColor,
              children: ($$payload4) => {
                $$payload4.out += `<!---->Remember, contributions to this topic should follow our <a href="/">Community Guidelines</a> .`;
              },
              $$slots: { default: true }
            });
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Style`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let option = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-24 my-1",
              name: "style1",
              get group() {
                return inputStyle;
              },
              set group($$value) {
                inputStyle = $$value;
                $$settled = false;
              },
              value: option,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(option)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Color`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let colorOption = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: "w-24 my-1",
              name: "floating_color",
              get group() {
                return floatingColor;
              },
              set group($$value) {
                floatingColor = $$value;
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
          Button($$payload3, {
            class: "mb-4 w-48",
            color: "secondary",
            onclick: changeHelperSlot,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(helperSlot ? "Remove helper slot" : "Add helper slot")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Helper Color`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let colorOption = each_array_2[$$index_2];
            Radio($$payload3, {
              labelClass: `w-24 my-1 ${stringify(helperSlot ? "" : "opacity-30 cursor-not-allowed")}`,
              disabled: helperSlot ? false : true,
              name: "helper_color",
              get group() {
                return helperColor;
              },
              set group($$value) {
                helperColor = $$value;
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
          $$payload3.out += `<!----> `;
          {
            let leftLabel = function($$payload4) {
              $$payload4.out += `<div class="me-4">Default</div>`;
            };
            Toggle($$payload3, {
              onclick: () => {
                floatingSize = floatingSize === "default" ? "small" : "default";
              },
              leftLabel,
              children: ($$payload4) => {
                $$payload4.out += `<!---->Small`;
              },
              $$slots: { leftLabel: true, default: true }
            });
          }
          $$payload3.out += `<!----></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-48",
            onclick: changeDisabled,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(disabled ? "Remove disabled" : "Add disabled")}`;
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
