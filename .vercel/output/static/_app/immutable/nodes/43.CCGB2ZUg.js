import { a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, t as template_effect, a as pop, c as child, s as sibling, r as reset, b as get, d as derived, f as first_child, a7 as set, a6 as state, n as next } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { p as prop, r as rest_props, i as if_block, b as proxy } from "../chunks/props.B7eOu8hW.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { P as idGenerator, z as bind_value, x as remove_input_defaults, b as set_class, a as set_attributes, s as set_attribute, a0 as floatingLabelInput } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { H as Helper } from "../chunks/Helper.CNgurqbV.js";
import { T as Toggle } from "../chunks/Toggle.DCK_TCRE.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { i as isGeneratedCodeOverflow } from "../chunks/helpers.B9KbZW0W.js";
var root$1 = template(`<div><input> <label><!></label></div>`);
function FloatingLabelInput($$anchor, $$props) {
  push($$props, true);
  let id = prop($$props, "id", 19, idGenerator), value = prop($$props, "value", 15), inputStyle = prop($$props, "inputStyle", 3, "standard"), size = prop($$props, "size", 3, "default"), color = prop($$props, "color", 3, "default"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "id",
    "value",
    "aria_describedby",
    "inputStyle",
    "size",
    "color",
    "divClass",
    "inputClass",
    "labelClass"
  ]);
  const $$d = derived(() => floatingLabelInput({
    inputStyle: inputStyle(),
    size: size(),
    color: color()
  })), base = derived(() => get($$d).base), input = derived(() => get($$d).input), label = derived(() => get($$d).label);
  var div = root$1();
  const class_derived = derived(() => get(base)({ class: $$props.divClass }));
  var input_1 = child(div);
  remove_input_defaults(input_1);
  let attributes;
  var label_1 = sibling(input_1, 2);
  const class_derived_1 = derived(() => get(label)({ class: $$props.labelClass }));
  var node = child(label_1);
  snippet(node, () => $$props.children);
  reset(label_1);
  reset(div);
  template_effect(() => {
    set_class(div, get(class_derived));
    attributes = set_attributes(input_1, attributes, {
      id: id(),
      placeholder: " ",
      ...restProps,
      "aria-describedby": $$props.aria_describedby,
      class: get(input)({ class: $$props.inputClass })
    });
    set_attribute(label_1, "for", id());
    set_class(label_1, get(class_derived_1));
  });
  bind_value(input_1, value);
  append($$anchor, div);
  pop();
}
const __vite_glob_0_0 = '<script>\n  import { FloatingLabelInput, Helper } from "$lib";\n<\/script>\n';
var root_8 = template(`Remember, contributions to this topic should follow our <a href="/">Community Guidelines</a> .`, 1);
var root_20 = template(`<div class="me-4">Default</div>`);
var root_5 = template(`<div class="mb-4 md:h-20"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!> <!></div> <div class="mb-4 flex flex-wrap space-x-4"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!></div>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "forms/floating-label-input";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Setup.svelte": __vite_glob_0_0
  });
  const inputStyles = ["standard", "filled", "outlined"];
  let inputStyle = state("standard");
  let floatingSize = state("default");
  const colors = Object.keys(floatingLabelInput.variants.color);
  let floatingColor = state("default");
  let helperColor = state("default");
  let disabled = state(false);
  const changeDisabled = () => {
    set(disabled, !get(disabled));
  };
  let helperSlot = state(false);
  const changeHelperSlot = () => {
    set(helperSlot, !get(helperSlot));
    set(helperColor, "default");
  };
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(floatingColor) !== "default") props.push(` color="${get(floatingColor)}"`);
    if (get(disabled)) props.push(" disabled");
    if (get(inputStyle) !== "standard") props.push(` inputStyle="${get(inputStyle)}"`);
    if (get(floatingSize) !== "default") props.push(` size="${get(floatingSize)}"`);
    const propsString = props.length > 0 ? props.map((prop2) => `
  ${prop2}`).join("") + "\n" : "";
    let helperCode = "";
    if (get(helperSlot)) {
      helperCode = `
<Helper class="pt-2" color="${get(helperColor)}">
  Helper text
</Helper>`;
    }
    return `<FloatingLabelInput ${propsString}>
  Floating label
</FloatingLabelInput>${helperCode}`;
  })());
  let builderExpand = state(false);
  let showBuilderExpandButton = derived(() => isGeneratedCodeOverflow(get(generatedCode)));
  const handleBuilderExpandClick = () => {
    set(builderExpand, !get(builderExpand));
  };
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Floating label");
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
      var text_2 = text("Floating label examples");
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
        FloatingLabelInput(node_5, {
          get inputStyle() {
            return get(inputStyle);
          },
          get disabled() {
            return get(disabled);
          },
          get size() {
            return get(floatingSize);
          },
          get color() {
            return get(floatingColor);
          },
          id: "floating_filled",
          type: "text",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text();
            template_effect(() => set_text(text_3, `Floating ${get(inputStyle) ?? ""}`));
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        var node_6 = sibling(node_5, 2);
        if_block(node_6, () => get(helperSlot), ($$anchor3) => {
          Helper($$anchor3, {
            class: "pt-2",
            get color() {
              return get(helperColor);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var fragment_5 = root_8();
              next(2);
              append($$anchor4, fragment_5);
            },
            $$slots: { default: true }
          });
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var node_7 = child(div_1);
        Label(node_7, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_4 = text("Style");
            append($$anchor3, text_4);
          },
          $$slots: { default: true }
        });
        var node_8 = sibling(node_7, 2);
        each(node_8, 17, () => inputStyles, index, ($$anchor3, option) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "style1",
            get group() {
              return get(inputStyle);
            },
            set group($$value) {
              set(inputStyle, proxy($$value));
            },
            get value() {
              return get(option);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_5 = text();
              template_effect(() => set_text(text_5, get(option)));
              append($$anchor4, text_5);
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
            var text_6 = text("Color");
            append($$anchor3, text_6);
          },
          $$slots: { default: true }
        });
        var node_10 = sibling(node_9, 2);
        each(node_10, 17, () => colors, index, ($$anchor3, colorOption) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "floating_color",
            get group() {
              return get(floatingColor);
            },
            set group($$value) {
              set(floatingColor, proxy($$value));
            },
            get color() {
              return get(colorOption);
            },
            get value() {
              return get(colorOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_7 = text();
              template_effect(() => set_text(text_7, get(colorOption)));
              append($$anchor4, text_7);
            },
            $$slots: { default: true }
          });
        });
        reset(div_2);
        var div_3 = sibling(div_2, 2);
        var node_11 = child(div_3);
        Button(node_11, {
          class: "mb-4 w-48",
          color: "secondary",
          onclick: changeHelperSlot,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_8 = text();
            template_effect(() => set_text(text_8, get(helperSlot) ? "Remove helper slot" : "Add helper slot"));
            append($$anchor3, text_8);
          },
          $$slots: { default: true }
        });
        var node_12 = sibling(node_11, 2);
        Label(node_12, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text("Helper Color");
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        var node_13 = sibling(node_12, 2);
        each(node_13, 17, () => colors, index, ($$anchor3, colorOption) => {
          var labelClass = derived(() => `w-24 my-1 ${(get(helperSlot) ? "" : "opacity-30 cursor-not-allowed") ?? ""}`);
          var disabled_1 = derived(() => get(helperSlot) ? false : true);
          Radio($$anchor3, {
            get labelClass() {
              return get(labelClass);
            },
            get disabled() {
              return get(disabled_1);
            },
            name: "helper_color",
            get group() {
              return get(helperColor);
            },
            set group($$value) {
              set(helperColor, proxy($$value));
            },
            get color() {
              return get(colorOption);
            },
            get value() {
              return get(colorOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_10 = text();
              template_effect(() => set_text(text_10, get(colorOption)));
              append($$anchor4, text_10);
            },
            $$slots: { default: true }
          });
        });
        reset(div_3);
        var div_4 = sibling(div_3, 2);
        var node_14 = child(div_4);
        Label(node_14, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_11 = text("Size");
            append($$anchor3, text_11);
          },
          $$slots: { default: true }
        });
        var node_15 = sibling(node_14, 2);
        {
          const leftLabel = ($$anchor3) => {
            var div_5 = root_20();
            append($$anchor3, div_5);
          };
          Toggle(node_15, {
            onclick: () => {
              set(floatingSize, proxy(get(floatingSize) === "default" ? "small" : "default"));
            },
            leftLabel,
            children: ($$anchor3, $$slotProps2) => {
              next();
              var text_12 = text("Small");
              append($$anchor3, text_12);
            },
            $$slots: { leftLabel: true, default: true }
          });
        }
        reset(div_4);
        var div_6 = sibling(div_4, 2);
        var node_16 = child(div_6);
        Button(node_16, {
          class: "w-48",
          onclick: changeDisabled,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_13 = text();
            template_effect(() => set_text(text_13, get(disabled) ? "Remove disabled" : "Add disabled"));
            append($$anchor3, text_13);
          },
          $$slots: { default: true }
        });
        reset(div_6);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_17 = sibling(node_4, 2);
  H2(node_17, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_14 = text("Component data");
      append($$anchor2, text_14);
    },
    $$slots: { default: true }
  });
  var node_18 = sibling(node_17, 2);
  CompoAttributesViewer(node_18, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
