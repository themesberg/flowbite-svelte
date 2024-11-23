import { a3 as copy_payload, a4 as assign_payload, a2 as bind_props, S as pop, Q as push, Y as ensure_array_like, V as escape_html } from "../../../../chunks/index.js";
import { W as paragraph } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { C as CloseButton } from "../../../../chunks/CloseButton.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { I as Input } from "../../../../chunks/index5.js";
import { P } from "../../../../chunks/P.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { a as isGeneratedCodeOverflow } from "../../../../chunks/helpers.js";
const __vite_glob_0_0 = '<script>\n  import { P } from "svelte-5-ui-lib";\n<\/script>\n';
function _page($$payload, $$props) {
  push();
  const dirName = "typography/paragraph";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Setup.svelte": __vite_glob_0_0
  });
  const sizes = Object.keys(paragraph.variants.size);
  let pSize = "base";
  const weights = Object.keys(paragraph.variants.weight);
  let pWeight = "normal";
  const spaces = Object.keys(paragraph.variants.space);
  let pSpace = "normal";
  const heights = Object.keys(paragraph.variants.height);
  let pHeight = "normal";
  const alignments = Object.keys(paragraph.variants.align);
  let pAlign = "left";
  const whitespaces = Object.keys(paragraph.variants.whitespace);
  let pWhitespace = "normal";
  let pFirstupper = false;
  let pJustify = false;
  let italic = false;
  const changeItalic = () => {
    italic = !italic;
  };
  let { text = "" } = $$props;
  text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla eius debitis cupiditate tempora necessitatibus perspiciatis pariatur aspernatur.";
  let generatedCode = (() => {
    let props = [];
    if (pSize !== "base") props.push(` size="${pSize}"`);
    if (pWeight !== "normal") props.push(` weight="${pWeight}"`);
    if (pSpace !== "normal") props.push(` space="${pSpace}"`);
    if (pHeight !== "normal") props.push(` height="${pHeight}"`);
    if (pAlign !== "left") props.push(` align="${pAlign}"`);
    if (pWhitespace !== "normal") props.push(` whitespace="${pWhitespace}"`);
    if (italic) props.push(` italic`);
    if (pFirstupper) props.push(` firstUpper`);
    if (pJustify) props.push(` justify`);
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<P${propsString}>
  ${text}
</P>`;
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
        $$payload3.out += `<!---->Paragraph`;
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
        $$payload3.out += `<!---->Interactive Paragraph Builder`;
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
          const each_array = ensure_array_like(sizes);
          const each_array_1 = ensure_array_like(weights);
          const each_array_2 = ensure_array_like(spaces);
          const each_array_3 = ensure_array_like(heights);
          const each_array_4 = ensure_array_like(alignments);
          const each_array_5 = ensure_array_like(whitespaces);
          Label($$payload3, {
            class: "text-md mb-2",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Edit paragraph`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          {
            let right = function($$payload4) {
              CloseButton($$payload4, { onclick: () => text = "" });
            };
            Input($$payload3, {
              type: "text",
              get value() {
                return text;
              },
              set value($$value) {
                text = $$value;
                $$settled = false;
              },
              placeholder: "Write your blockquote text",
              class: "mb-8 pr-12",
              right,
              $$slots: { right: true }
            });
          }
          $$payload3.out += `<!----> <div class="mb-4 overflow-auto md:h-[200px]">`;
          P($$payload3, {
            contenteditable: true,
            weight: pWeight,
            size: pSize,
            space: pSpace,
            height: pHeight,
            align: pAlign,
            whitespace: pWhitespace,
            italic,
            firstUpper: pFirstupper,
            justify: pJustify,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(text)}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="mb-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Size`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let size = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-12 my-1",
              name: "p_size",
              get group() {
                return pSize;
              },
              set group($$value) {
                pSize = $$value;
                $$settled = false;
              },
              value: size,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(size)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Weight`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let weight = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: "w-20 my-1",
              name: "p_weight",
              get group() {
                return pWeight;
              },
              set group($$value) {
                pWeight = $$value;
                $$settled = false;
              },
              value: weight,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(weight)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Space(Tracking)`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let space = each_array_2[$$index_2];
            Radio($$payload3, {
              labelClass: "w-20 my-1",
              name: "p_space",
              get group() {
                return pSpace;
              },
              set group($$value) {
                pSpace = $$value;
                $$settled = false;
              },
              value: space,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(space)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Height(Leading)`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
            let height = each_array_3[$$index_3];
            Radio($$payload3, {
              labelClass: "w-16 my-1",
              name: "p_height",
              get group() {
                return pHeight;
              },
              set group($$value) {
                pHeight = $$value;
                $$settled = false;
              },
              value: height,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(height)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Alignment`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
            let align = each_array_4[$$index_4];
            Radio($$payload3, {
              labelClass: "w-20 my-1",
              name: "p_align",
              get group() {
                return pAlign;
              },
              set group($$value) {
                pAlign = $$value;
                $$settled = false;
              },
              onchange: () => pJustify = false,
              value: align,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(align)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Whitespace`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
            let whitespace = each_array_5[$$index_5];
            Radio($$payload3, {
              labelClass: "w-16 my-1",
              name: "p_whitespace",
              get group() {
                return pWhitespace;
              },
              set group($$value) {
                pWhitespace = $$value;
                $$settled = false;
              },
              value: whitespace,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(whitespace)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-40",
            onclick: () => pFirstupper = !pFirstupper,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(pFirstupper ? "Remove upper" : "First upper")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "secondary",
            onclick: () => {
              pJustify = !pJustify;
              pAlign = "left";
            },
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(pJustify ? "Remove justify" : "Justify")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "emerald",
            onclick: changeItalic,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(italic ? "Remove italic" : "Italic")}`;
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
  bind_props($$props, { text });
  pop();
}
export {
  _page as default
};
