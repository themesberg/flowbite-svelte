import { a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, u as user_effect, f as first_child, a as pop, b as get, t as template_effect, a7 as set, s as sibling, a6 as state, n as next, c as child, r as reset, d as derived } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { p as prop, b as proxy } from "../chunks/props.B7eOu8hW.js";
import { p as paragraph, N as CloseButton, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { I as Input } from "../chunks/index.CCICtSX3.js";
import { P } from "../chunks/P.CbSbQedY.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { i as isGeneratedCodeOverflow } from "../chunks/helpers.B9KbZW0W.js";
const __vite_glob_0_0 = '<script>\n  import { P } from "svelte-5-ui-lib";\n<\/script>\n';
var root_5 = template(`<!> <!> <div class="mb-4 overflow-auto md:h-[200px]"><!></div> <div class="mb-4 flex flex-wrap space-x-4"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-4"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-4"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-4"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-4"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!> <!></div>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "typography/paragraph";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Setup.svelte": __vite_glob_0_0
  });
  const sizes = Object.keys(paragraph.variants.size);
  let pSize = state("base");
  const weights = Object.keys(paragraph.variants.weight);
  let pWeight = state("normal");
  const spaces = Object.keys(paragraph.variants.space);
  let pSpace = state("normal");
  const heights = Object.keys(paragraph.variants.height);
  let pHeight = state("normal");
  const alignments = Object.keys(paragraph.variants.align);
  let pAlign = state("left");
  const whitespaces = Object.keys(paragraph.variants.whitespace);
  let pWhitespace = state("normal");
  let pFirstupper = state(false);
  let pJustify = state(false);
  let italic = state(false);
  const changeItalic = () => {
    set(italic, !get(italic));
  };
  let text$1 = prop($$props, "text", 15, "");
  text$1("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla eius debitis cupiditate tempora necessitatibus perspiciatis pariatur aspernatur.");
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(pSize) !== "base") props.push(` size="${get(pSize)}"`);
    if (get(pWeight) !== "normal") props.push(` weight="${get(pWeight)}"`);
    if (get(pSpace) !== "normal") props.push(` space="${get(pSpace)}"`);
    if (get(pHeight) !== "normal") props.push(` height="${get(pHeight)}"`);
    if (get(pAlign) !== "left") props.push(` align="${get(pAlign)}"`);
    if (get(pWhitespace) !== "normal") props.push(` whitespace="${get(pWhitespace)}"`);
    if (get(italic)) props.push(` italic`);
    if (get(pFirstupper)) props.push(` firstUpper`);
    if (get(pJustify)) props.push(` justify`);
    const propsString = props.length > 0 ? props.map((prop2) => `
  ${prop2}`).join("") + "\n" : "";
    return `<P${propsString}>
  ${text$1()}
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
      var text_1 = text("Paragraph");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  H2(node_1, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Setup");
      append($$anchor2, text_2);
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
      var text_3 = text("Interactive Paragraph Builder");
      append($$anchor2, text_3);
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
        var node_5 = first_child(fragment_2);
        Label(node_5, {
          class: "text-md mb-2",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_4 = text("Edit paragraph");
            append($$anchor3, text_4);
          },
          $$slots: { default: true }
        });
        var node_6 = sibling(node_5, 2);
        {
          const right = ($$anchor3) => {
            CloseButton($$anchor3, { onclick: () => text$1("") });
          };
          Input(node_6, {
            type: "text",
            get value() {
              return text$1();
            },
            set value($$value) {
              text$1($$value);
            },
            placeholder: "Write your blockquote text",
            class: "mb-8 pr-12",
            right,
            $$slots: { right: true }
          });
        }
        var div = sibling(node_6, 2);
        var node_7 = child(div);
        P(node_7, {
          contenteditable: true,
          get weight() {
            return get(pWeight);
          },
          get size() {
            return get(pSize);
          },
          get space() {
            return get(pSpace);
          },
          get height() {
            return get(pHeight);
          },
          get align() {
            return get(pAlign);
          },
          get whitespace() {
            return get(pWhitespace);
          },
          get italic() {
            return get(italic);
          },
          get firstUpper() {
            return get(pFirstupper);
          },
          get justify() {
            return get(pJustify);
          },
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_5 = text();
            template_effect(() => set_text(text_5, text$1()));
            append($$anchor3, text_5);
          },
          $$slots: { default: true }
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var node_8 = child(div_1);
        Label(node_8, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_6 = text("Size");
            append($$anchor3, text_6);
          },
          $$slots: { default: true }
        });
        var node_9 = sibling(node_8, 2);
        each(node_9, 17, () => sizes, index, ($$anchor3, size) => {
          Radio($$anchor3, {
            labelClass: "w-12 my-1",
            name: "p_size",
            get group() {
              return get(pSize);
            },
            set group($$value) {
              set(pSize, proxy($$value));
            },
            get value() {
              return get(size);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_7 = text();
              template_effect(() => set_text(text_7, get(size)));
              append($$anchor4, text_7);
            },
            $$slots: { default: true }
          });
        });
        reset(div_1);
        var div_2 = sibling(div_1, 2);
        var node_10 = child(div_2);
        Label(node_10, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_8 = text("Weight");
            append($$anchor3, text_8);
          },
          $$slots: { default: true }
        });
        var node_11 = sibling(node_10, 2);
        each(node_11, 17, () => weights, index, ($$anchor3, weight) => {
          Radio($$anchor3, {
            labelClass: "w-20 my-1",
            name: "p_weight",
            get group() {
              return get(pWeight);
            },
            set group($$value) {
              set(pWeight, proxy($$value));
            },
            get value() {
              return get(weight);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_9 = text();
              template_effect(() => set_text(text_9, get(weight)));
              append($$anchor4, text_9);
            },
            $$slots: { default: true }
          });
        });
        reset(div_2);
        var div_3 = sibling(div_2, 2);
        var node_12 = child(div_3);
        Label(node_12, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_10 = text("Space(Tracking)");
            append($$anchor3, text_10);
          },
          $$slots: { default: true }
        });
        var node_13 = sibling(node_12, 2);
        each(node_13, 17, () => spaces, index, ($$anchor3, space) => {
          Radio($$anchor3, {
            labelClass: "w-20 my-1",
            name: "p_space",
            get group() {
              return get(pSpace);
            },
            set group($$value) {
              set(pSpace, proxy($$value));
            },
            get value() {
              return get(space);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_11 = text();
              template_effect(() => set_text(text_11, get(space)));
              append($$anchor4, text_11);
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
            var text_12 = text("Height(Leading)");
            append($$anchor3, text_12);
          },
          $$slots: { default: true }
        });
        var node_15 = sibling(node_14, 2);
        each(node_15, 17, () => heights, index, ($$anchor3, height) => {
          Radio($$anchor3, {
            labelClass: "w-16 my-1",
            name: "p_height",
            get group() {
              return get(pHeight);
            },
            set group($$value) {
              set(pHeight, proxy($$value));
            },
            get value() {
              return get(height);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_13 = text();
              template_effect(() => set_text(text_13, get(height)));
              append($$anchor4, text_13);
            },
            $$slots: { default: true }
          });
        });
        reset(div_4);
        var div_5 = sibling(div_4, 2);
        var node_16 = child(div_5);
        Label(node_16, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_14 = text("Alignment");
            append($$anchor3, text_14);
          },
          $$slots: { default: true }
        });
        var node_17 = sibling(node_16, 2);
        each(node_17, 17, () => alignments, index, ($$anchor3, align) => {
          Radio($$anchor3, {
            labelClass: "w-20 my-1",
            name: "p_align",
            get group() {
              return get(pAlign);
            },
            set group($$value) {
              set(pAlign, proxy($$value));
            },
            onchange: () => set(pJustify, false),
            get value() {
              return get(align);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_15 = text();
              template_effect(() => set_text(text_15, get(align)));
              append($$anchor4, text_15);
            },
            $$slots: { default: true }
          });
        });
        reset(div_5);
        var div_6 = sibling(div_5, 2);
        var node_18 = child(div_6);
        Label(node_18, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_16 = text("Whitespace");
            append($$anchor3, text_16);
          },
          $$slots: { default: true }
        });
        var node_19 = sibling(node_18, 2);
        each(node_19, 17, () => whitespaces, index, ($$anchor3, whitespace) => {
          Radio($$anchor3, {
            labelClass: "w-16 my-1",
            name: "p_whitespace",
            get group() {
              return get(pWhitespace);
            },
            set group($$value) {
              set(pWhitespace, proxy($$value));
            },
            get value() {
              return get(whitespace);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_17 = text();
              template_effect(() => set_text(text_17, get(whitespace)));
              append($$anchor4, text_17);
            },
            $$slots: { default: true }
          });
        });
        reset(div_6);
        var div_7 = sibling(div_6, 2);
        var node_20 = child(div_7);
        Button(node_20, {
          class: "w-40",
          onclick: () => set(pFirstupper, !get(pFirstupper)),
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_18 = text();
            template_effect(() => set_text(text_18, get(pFirstupper) ? "Remove upper" : "First upper"));
            append($$anchor3, text_18);
          },
          $$slots: { default: true }
        });
        var node_21 = sibling(node_20, 2);
        Button(node_21, {
          class: "w-40",
          color: "secondary",
          onclick: () => {
            set(pJustify, !get(pJustify));
            set(pAlign, "left");
          },
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_19 = text();
            template_effect(() => set_text(text_19, get(pJustify) ? "Remove justify" : "Justify"));
            append($$anchor3, text_19);
          },
          $$slots: { default: true }
        });
        var node_22 = sibling(node_21, 2);
        Button(node_22, {
          class: "w-40",
          color: "emerald",
          onclick: changeItalic,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_20 = text();
            template_effect(() => set_text(text_20, get(italic) ? "Remove italic" : "Italic"));
            append($$anchor3, text_20);
          },
          $$slots: { default: true }
        });
        reset(div_7);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_23 = sibling(node_4, 2);
  H2(node_23, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_21 = text("Component data");
      append($$anchor2, text_21);
    },
    $$slots: { default: true }
  });
  var node_24 = sibling(node_23, 2);
  CompoAttributesViewer(node_24, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
