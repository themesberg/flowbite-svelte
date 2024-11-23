import { a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, u as user_effect, f as first_child, a as pop, s as sibling, b as get, t as template_effect, a6 as state, a7 as set, n as next, c as child, r as reset, d as derived } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { p as prop, b as proxy } from "../chunks/props.B7eOu8hW.js";
import { I as span, N as CloseButton, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { I as Input } from "../chunks/index.CCICtSX3.js";
import { P } from "../chunks/P.CbSbQedY.js";
import { S as Span } from "../chunks/Span.DbQTChO8.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { i as isGeneratedCodeOverflow } from "../chunks/helpers.B9KbZW0W.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { Span, P } from "svelte-5-ui-lib";\n<\/script>\n';
var root_8 = template(`Lorem ipsum <!> consectetur elit.`, 1);
var root_5 = template(`<div class="h-40"><div class=" mb-4"><!> <!></div> <!></div> <div class="mb-4 mt-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!> <!> <!> <!></div>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "typography/span";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Setup.svelte": __vite_glob_0_0
  });
  let editableContent = prop($$props, "editableContent", 15, "span content");
  let spanItalic = state(false);
  const changeItalic = () => {
    set(spanItalic, !get(spanItalic));
  };
  let spanUnderline = state(false);
  const changeUnderline = () => {
    set(spanUnderline, !get(spanUnderline));
    set(spanDecorationColor, "none");
    set(spanDecorationThickness, "0");
    set(spanDecoration, "none");
    set(spanLinethrough, false);
  };
  let spanLinethrough = state(false);
  const changeLinethrough = () => {
    set(spanLinethrough, !get(spanLinethrough));
    set(spanUnderline, false);
    set(spanDecorationColor, "none");
    set(spanDecorationThickness, "0");
    set(spanDecoration, "none");
    set(spanGradient, "none");
  };
  let spanUppercase = state(false);
  const changeUppercase = () => {
    set(spanUppercase, !get(spanUppercase));
  };
  const gradients = Object.keys(span.variants.gradient);
  let spanGradient = state("none");
  let spanHighlight = state("none");
  const highlights = Object.keys(span.variants.highlight);
  let spanDecoration = state("none");
  const decorations = Object.keys(span.variants.decoration);
  let spanDecorationColor = state("none");
  const decorationColors = Object.keys(span.variants.decorationColor);
  let spanDecorationThickness = state("0");
  const docrationThickness = Object.keys(span.variants.decorationThickness);
  let opacityClass = state("");
  const changeOpacity = () => {
    set(opacityClass, proxy(get(opacityClass) === "" ? "text-gray-600/50 dark:text-gray-500/50" : ""));
    set(spanHighlight, "none");
    set(spanGradient, "none");
  };
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(spanItalic)) props.push(` italic`);
    if (get(spanUnderline)) props.push(` underline`);
    if (get(spanLinethrough)) props.push(` linethrough`);
    if (get(spanUppercase)) props.push(` uppercase`);
    if (get(spanGradient) !== "none") props.push(` gradient="${get(spanGradient)}"`);
    if (get(spanHighlight) !== "none") props.push(` highlight="${get(spanHighlight)}"`);
    if (get(spanDecoration) !== "none") props.push(` decoration="${get(spanDecoration)}"`);
    if (get(spanDecorationColor) !== "none") props.push(` decorationColor="${get(spanDecorationColor)}"`);
    if (get(spanDecorationThickness) !== "0") props.push(` decorationThickness="${get(spanDecorationThickness)}"`);
    const propsString = props.length > 0 ? props.map((prop2) => `
  ${prop2}`).join("") + "\n" : "";
    return `<P size="xl" weight="bold">
  Lorem ipsum 
  <Span${propsString}>${editableContent()}</Span>
  consectetur elit.
</P>`;
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
      var text$1 = text("Span");
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
      var text_2 = text("Interactive Span Builder");
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
        Label(node_5, {
          class: "mr-4 text-lg font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text("Edit span content:");
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        var node_6 = sibling(node_5, 2);
        {
          const right = ($$anchor3) => {
            CloseButton($$anchor3, { onclick: () => editableContent("") });
          };
          Input(node_6, {
            type: "text",
            get value() {
              return editableContent();
            },
            set value($$value) {
              editableContent($$value);
            },
            placeholder: "Write your blockquote text",
            class: "mb-4 pr-12",
            right,
            $$slots: { right: true }
          });
        }
        reset(div_1);
        var node_7 = sibling(div_1, 2);
        P(node_7, {
          size: "xl",
          weight: "bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var fragment_4 = root_8();
            var node_8 = sibling(first_child(fragment_4));
            Span(node_8, {
              get italic() {
                return get(spanItalic);
              },
              get underline() {
                return get(spanUnderline);
              },
              get linethrough() {
                return get(spanLinethrough);
              },
              get uppercase() {
                return get(spanUppercase);
              },
              get gradient() {
                return get(spanGradient);
              },
              get decoration() {
                return get(spanDecoration);
              },
              get decorationColor() {
                return get(spanDecorationColor);
              },
              get decorationThickness() {
                return get(spanDecorationThickness);
              },
              get highlight() {
                return get(spanHighlight);
              },
              get class() {
                return get(opacityClass);
              },
              children: ($$anchor4, $$slotProps3) => {
                next();
                var text_4 = text();
                template_effect(() => set_text(text_4, editableContent()));
                append($$anchor4, text_4);
              },
              $$slots: { default: true }
            });
            next();
            append($$anchor3, fragment_4);
          },
          $$slots: { default: true }
        });
        reset(div);
        var div_2 = sibling(div, 2);
        var node_9 = child(div_2);
        Label(node_9, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_5 = text("Highlight");
            append($$anchor3, text_5);
          },
          $$slots: { default: true }
        });
        var node_10 = sibling(node_9, 2);
        each(node_10, 17, () => highlights, index, ($$anchor3, highlight) => {
          Radio($$anchor3, {
            labelClass: "w-20 my-1",
            name: "span_highlight",
            get group() {
              return get(spanHighlight);
            },
            set group($$value) {
              set(spanHighlight, proxy($$value));
            },
            onchange: () => {
              set(spanGradient, "none");
              set(opacityClass, "");
            },
            get color() {
              return get(highlight);
            },
            get value() {
              return get(highlight);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_6 = text();
              template_effect(() => set_text(text_6, get(highlight)));
              append($$anchor4, text_6);
            },
            $$slots: { default: true }
          });
        });
        reset(div_2);
        var div_3 = sibling(div_2, 2);
        var node_11 = child(div_3);
        Label(node_11, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_7 = text("Gradient");
            append($$anchor3, text_7);
          },
          $$slots: { default: true }
        });
        var node_12 = sibling(node_11, 2);
        each(node_12, 17, () => gradients, index, ($$anchor3, gradient) => {
          Radio($$anchor3, {
            labelClass: "w-32 my-1",
            name: "span_gradient",
            get group() {
              return get(spanGradient);
            },
            set group($$value) {
              set(spanGradient, proxy($$value));
            },
            onchange: () => set(spanHighlight, "none"),
            get value() {
              return get(gradient);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_8 = text();
              template_effect(() => set_text(text_8, get(gradient)));
              append($$anchor4, text_8);
            },
            $$slots: { default: true }
          });
        });
        reset(div_3);
        var div_4 = sibling(div_3, 2);
        var node_13 = child(div_4);
        Label(node_13, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text("Decoration thickness");
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        var node_14 = sibling(node_13, 2);
        each(node_14, 17, () => docrationThickness, index, ($$anchor3, thickness) => {
          Radio($$anchor3, {
            labelClass: "w-12 my-1",
            name: "span_decoration_thickness",
            get group() {
              return get(spanDecorationThickness);
            },
            set group($$value) {
              set(spanDecorationThickness, proxy($$value));
            },
            onchange: () => {
              set(spanUnderline, false);
              set(spanLinethrough, false);
            },
            get value() {
              return get(thickness);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_10 = text();
              template_effect(() => set_text(text_10, get(thickness)));
              append($$anchor4, text_10);
            },
            $$slots: { default: true }
          });
        });
        reset(div_4);
        var div_5 = sibling(div_4, 2);
        var node_15 = child(div_5);
        Label(node_15, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_11 = text("Decoration color");
            append($$anchor3, text_11);
          },
          $$slots: { default: true }
        });
        var node_16 = sibling(node_15, 2);
        each(node_16, 17, () => decorationColors, index, ($$anchor3, color) => {
          Radio($$anchor3, {
            labelClass: "w-20 my-1",
            name: "p_decoration_color",
            get group() {
              return get(spanDecorationColor);
            },
            set group($$value) {
              set(spanDecorationColor, proxy($$value));
            },
            onchange: () => {
              set(spanUnderline, false);
              set(spanLinethrough, false);
            },
            get color() {
              return get(color);
            },
            get value() {
              return get(color);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_12 = text();
              template_effect(() => set_text(text_12, get(color)));
              append($$anchor4, text_12);
            },
            $$slots: { default: true }
          });
        });
        reset(div_5);
        var div_6 = sibling(div_5, 2);
        var node_17 = child(div_6);
        Label(node_17, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_13 = text("Decoration");
            append($$anchor3, text_13);
          },
          $$slots: { default: true }
        });
        var node_18 = sibling(node_17, 2);
        each(node_18, 17, () => decorations, index, ($$anchor3, decoration) => {
          Radio($$anchor3, {
            labelClass: "w-20 my-1",
            name: "span_decoration",
            get group() {
              return get(spanDecoration);
            },
            set group($$value) {
              set(spanDecoration, proxy($$value));
            },
            onchange: () => {
              set(spanUnderline, false);
              set(spanLinethrough, false);
            },
            get value() {
              return get(decoration);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_14 = text();
              template_effect(() => set_text(text_14, get(decoration)));
              append($$anchor4, text_14);
            },
            $$slots: { default: true }
          });
        });
        reset(div_6);
        var div_7 = sibling(div_6, 2);
        var node_19 = child(div_7);
        Button(node_19, {
          class: "w-36",
          color: "violet",
          onclick: changeLinethrough,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_15 = text();
            template_effect(() => set_text(text_15, get(spanLinethrough) ? "No linethrough" : "Linethrough "));
            append($$anchor3, text_15);
          },
          $$slots: { default: true }
        });
        var node_20 = sibling(node_19, 2);
        Button(node_20, {
          class: "w-36",
          color: "blue",
          onclick: changeUppercase,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_16 = text();
            template_effect(() => set_text(text_16, get(spanUppercase) ? "No uppercase" : "Uppercase"));
            append($$anchor3, text_16);
          },
          $$slots: { default: true }
        });
        var node_21 = sibling(node_20, 2);
        Button(node_21, {
          class: "w-24",
          onclick: changeItalic,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_17 = text();
            template_effect(() => set_text(text_17, get(spanItalic) ? "No italic" : "Italic"));
            append($$anchor3, text_17);
          },
          $$slots: { default: true }
        });
        var node_22 = sibling(node_21, 2);
        Button(node_22, {
          class: "w-28",
          color: "amber",
          onclick: changeUnderline,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_18 = text();
            template_effect(() => set_text(text_18, get(spanUnderline) ? "No underline" : "Underline"));
            append($$anchor3, text_18);
          },
          $$slots: { default: true }
        });
        var node_23 = sibling(node_22, 2);
        Button(node_23, {
          class: "w-32",
          color: "teal",
          onclick: changeOpacity,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_19 = text();
            template_effect(() => set_text(text_19, get(opacityClass) ? "No opacity" : "Add opacity"));
            append($$anchor3, text_19);
          },
          $$slots: { default: true }
        });
        reset(div_7);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_24 = sibling(node_4, 2);
  H2(node_24, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_20 = text("Component data");
      append($$anchor2, text_20);
    },
    $$slots: { default: true }
  });
  var node_25 = sibling(node_24, 2);
  CompoAttributesViewer(node_25, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
