import { a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, t as template_effect, a as pop, b as get, d as derived, u as user_effect, f as first_child, a7 as set, s as sibling, a6 as state, n as next, c as child, r as reset } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { p as prop, r as rest_props, b as proxy, i as if_block } from "../chunks/props.B7eOu8hW.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { z as bind_value, x as remove_input_defaults, a as set_attributes, a1 as range, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { i as isGeneratedCodeOverflow } from "../chunks/helpers.B9KbZW0W.js";
var root$1 = template(`<input>`);
function Range($$anchor, $$props) {
  push($$props, true);
  let value = prop($$props, "value", 15), appearance = prop($$props, "appearance", 3, "none"), color = prop($$props, "color", 3, "blue"), rangeSize = prop($$props, "rangeSize", 3, "md"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "value",
    "appearance",
    "color",
    "rangeSize",
    "inputClass"
  ]);
  const inputCls = derived(() => range({
    class: $$props.inputClass,
    appearance: appearance(),
    color: color(),
    size: rangeSize()
  }));
  var input = root$1();
  remove_input_defaults(input);
  let attributes;
  template_effect(() => attributes = set_attributes(input, attributes, {
    type: "range",
    ...restProps,
    class: get(inputCls)
  }));
  bind_value(input, value);
  append($$anchor, input);
  pop();
}
const __vite_glob_0_0 = '<script>\n  import { Range } from "$lib";\n<\/script>\n';
var root_6 = template(`<p> </p>`);
var root_7 = template(`<span class="absolute -bottom-6 start-0 text-sm text-gray-500 dark:text-gray-400"> </span> <span class="absolute -bottom-6 start-1/2 -translate-x-1/2 text-sm text-gray-500 rtl:translate-x-1/2 dark:text-gray-400"> </span> <span class="absolute -bottom-6 end-0 text-sm text-gray-500 dark:text-gray-400"> </span>`, 1);
var root_5 = template(`<div class="relative"> <!> <!> <!></div> <div class="mb-4 mt-12 flex flex-wrap space-x-2"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!> <!> <!></div>`, 1);
var root_16 = template(`<!> <!> <div class="mt-4 flex flex-wrap space-x-2"><!> <!></div>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <p class="text-red-600">Size props won't work with colors.</p> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "forms/range";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Setup.svelte": __vite_glob_0_0
  });
  let interactiveValue = state(5);
  let stepValue = state(1);
  const changeStepValue = () => {
    set(stepValue, proxy(get(stepValue) === 0.5 ? 1 : 0.5));
  };
  const colors = Object.keys(range.variants.color);
  let rangeColor = state("blue");
  let disabled = state(false);
  const changeDisabled = () => {
    set(disabled, !get(disabled));
  };
  let minmax = proxy({ min: 0, max: 10 });
  const changeMinMax = () => {
    if (minmax.max === 10) {
      minmax.min = 0;
      minmax.max = 20;
      set(interactiveValue, 10);
    } else {
      minmax.min = 0;
      minmax.max = 10;
      set(interactiveValue, 5);
    }
  };
  let labelStatus = state(false);
  const changeLabelStatus = () => {
    set(labelStatus, !get(labelStatus));
  };
  const rangeSizes = Object.keys(range.variants.size);
  let rangeSize = state("md");
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(rangeColor)) props.push(`color="${get(rangeColor)}"`);
    if (minmax.max !== 10) props.push(`min="${minmax.min}" max="${minmax.max}"`);
    if (get(stepValue) !== 1) props.push(`step="${get(stepValue)}"`);
    if (get(disabled)) props.push("disabled");
    const propsString = props.length > 0 ? props.map((prop2) => `
  ${prop2}`).join("") + "\n" : "";
    return `${get(labelStatus) ? `<div class="relative">
  ` : ""}<Range${propsString}/>
${get(labelStatus) ? `<span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min: ${minmax.min}</span>
<span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">${minmax.max / 2}</span>
<span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max: ${minmax.max}</span></div>` : ""}`;
  })());
  let builder = uiHelpers();
  let builderExpand = state(false);
  let showBuilderExpandButton = derived(() => isGeneratedCodeOverflow(get(generatedCode)));
  const handleBuilderExpandClick = () => {
    set(builderExpand, !get(builderExpand));
  };
  user_effect(() => {
    set(builderExpand, proxy(builder.isOpen));
  });
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Range");
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
      var text_2 = text("Interactive Range Builder");
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
        var text_3 = child(div);
        var node_5 = sibling(text_3);
        if_block(node_5, () => minmax.max !== 10, ($$anchor3) => {
          var p = root_6();
          var text_4 = child(p);
          reset(p);
          template_effect(() => set_text(text_4, `Value: ${get(interactiveValue) ?? ""}`));
          append($$anchor3, p);
        });
        var node_6 = sibling(node_5, 2);
        Range(node_6, {
          get color() {
            return get(rangeColor);
          },
          get disabled() {
            return get(disabled);
          },
          get min() {
            return minmax.min;
          },
          get max() {
            return minmax.max;
          },
          get value() {
            return get(interactiveValue);
          },
          set value($$value) {
            set(interactiveValue, proxy($$value));
          },
          get step() {
            return get(stepValue);
          },
          appearance: "auto"
        });
        var node_7 = sibling(node_6, 2);
        if_block(node_7, () => get(labelStatus), ($$anchor3) => {
          var fragment_3 = root_7();
          var span = first_child(fragment_3);
          var text_5 = child(span);
          reset(span);
          var span_1 = sibling(span, 2);
          var text_6 = child(span_1, true);
          reset(span_1);
          var span_2 = sibling(span_1, 2);
          var text_7 = child(span_2);
          reset(span_2);
          template_effect(() => {
            set_text(text_5, `Min: ${minmax.min ?? ""}`);
            set_text(text_6, minmax.max / 2);
            set_text(text_7, `Max: ${minmax.max ?? ""}`);
          });
          append($$anchor3, fragment_3);
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var node_8 = child(div_1);
        Label(node_8, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_8 = text("Color");
            append($$anchor3, text_8);
          },
          $$slots: { default: true }
        });
        var node_9 = sibling(node_8, 2);
        each(node_9, 17, () => colors, index, ($$anchor3, colorOption) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "default_alert_color",
            get group() {
              return get(rangeColor);
            },
            set group($$value) {
              set(rangeColor, proxy($$value));
            },
            get color() {
              return get(colorOption);
            },
            get value() {
              return get(colorOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_9 = text();
              template_effect(() => set_text(text_9, get(colorOption)));
              append($$anchor4, text_9);
            },
            $$slots: { default: true }
          });
        });
        reset(div_1);
        var div_2 = sibling(div_1, 2);
        var node_10 = child(div_2);
        Button(node_10, {
          class: "w-40",
          onclick: changeDisabled,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_10 = text();
            template_effect(() => set_text(text_10, get(disabled) ? "Enabled" : "Disabled"));
            append($$anchor3, text_10);
          },
          $$slots: { default: true }
        });
        var node_11 = sibling(node_10, 2);
        Button(node_11, {
          class: "w-40",
          color: "secondary",
          onclick: changeMinMax,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_11 = text();
            template_effect(() => set_text(text_11, minmax.max === 10 ? "Add max min" : "Remove max min"));
            append($$anchor3, text_11);
          },
          $$slots: { default: true }
        });
        var node_12 = sibling(node_11, 2);
        Button(node_12, {
          class: "w-40",
          color: "rose",
          onclick: changeLabelStatus,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_12 = text();
            template_effect(() => set_text(text_12, get(labelStatus) ? "Remove label" : "Add label"));
            append($$anchor3, text_12);
          },
          $$slots: { default: true }
        });
        var node_13 = sibling(node_12, 2);
        Button(node_13, {
          class: "w-40",
          color: "indigo",
          onclick: changeStepValue,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_13 = text();
            template_effect(() => set_text(text_13, get(stepValue) !== 0.5 ? "Add step" : "Remove step"));
            append($$anchor3, text_13);
          },
          $$slots: { default: true }
        });
        reset(div_2);
        template_effect(() => set_text(text_3, `${(get(stepValue) !== 1 ? `Step: ${get(stepValue)}` : "") ?? ""} `));
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_14 = sibling(node_4, 2);
  H2(node_14, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_14 = text("Sizes");
      append($$anchor2, text_14);
    },
    $$slots: { default: true }
  });
  var node_15 = sibling(node_14, 4);
  CodeWrapper(node_15, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_10 = root_16();
      var node_16 = first_child(fragment_10);
      Label(node_16, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_15 = text();
          template_effect(() => set_text(text_15, `Size: ${get(rangeSize) ?? ""}`));
          append($$anchor3, text_15);
        },
        $$slots: { default: true }
      });
      var node_17 = sibling(node_16, 2);
      Range(node_17, {
        id: "small-range",
        get rangeSize() {
          return get(rangeSize);
        }
      });
      var div_3 = sibling(node_17, 2);
      var node_18 = child(div_3);
      Label(node_18, {
        class: "mb-4 w-full font-bold",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_16 = text("Size");
          append($$anchor3, text_16);
        },
        $$slots: { default: true }
      });
      var node_19 = sibling(node_18, 2);
      each(node_19, 17, () => rangeSizes, index, ($$anchor3, sizeOption) => {
        Radio($$anchor3, {
          labelClass: "w-16 my-1",
          name: "file_input_size",
          get group() {
            return get(rangeSize);
          },
          set group($$value) {
            set(rangeSize, proxy($$value));
          },
          get value() {
            return get(sizeOption);
          },
          children: ($$anchor4, $$slotProps2) => {
            next();
            var text_17 = text();
            template_effect(() => set_text(text_17, get(sizeOption)));
            append($$anchor4, text_17);
          },
          $$slots: { default: true }
        });
      });
      reset(div_3);
      append($$anchor2, fragment_10);
    },
    $$slots: { default: true }
  });
  var node_20 = sibling(node_15, 2);
  H2(node_20, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_18 = text("Component data");
      append($$anchor2, text_18);
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
