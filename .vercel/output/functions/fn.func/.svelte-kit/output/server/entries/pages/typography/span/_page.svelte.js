import { a3 as copy_payload, a4 as assign_payload, a2 as bind_props, S as pop, Q as push, Y as ensure_array_like, V as escape_html } from "../../../../chunks/index.js";
import { aI as span } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { C as CloseButton } from "../../../../chunks/CloseButton.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { I as Input } from "../../../../chunks/index5.js";
import { P } from "../../../../chunks/P.js";
import { S as Span } from "../../../../chunks/Span.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { a as isGeneratedCodeOverflow } from "../../../../chunks/helpers.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { Span, P } from "svelte-5-ui-lib";\n<\/script>\n';
function _page($$payload, $$props) {
  push();
  const dirName = "typography/span";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Setup.svelte": __vite_glob_0_0
  });
  let { editableContent = "span content" } = $$props;
  let spanItalic = false;
  const changeItalic = () => {
    spanItalic = !spanItalic;
  };
  let spanUnderline = false;
  const changeUnderline = () => {
    spanUnderline = !spanUnderline;
    spanDecorationColor = "none";
    spanDecorationThickness = "0";
    spanDecoration = "none";
    spanLinethrough = false;
  };
  let spanLinethrough = false;
  const changeLinethrough = () => {
    spanLinethrough = !spanLinethrough;
    spanUnderline = false;
    spanDecorationColor = "none";
    spanDecorationThickness = "0";
    spanDecoration = "none";
    spanGradient = "none";
  };
  let spanUppercase = false;
  const changeUppercase = () => {
    spanUppercase = !spanUppercase;
  };
  const gradients = Object.keys(span.variants.gradient);
  let spanGradient = "none";
  let spanHighlight = "none";
  const highlights = Object.keys(span.variants.highlight);
  let spanDecoration = "none";
  const decorations = Object.keys(span.variants.decoration);
  let spanDecorationColor = "none";
  const decorationColors = Object.keys(span.variants.decorationColor);
  let spanDecorationThickness = "0";
  const docrationThickness = Object.keys(span.variants.decorationThickness);
  let opacityClass = "";
  const changeOpacity = () => {
    opacityClass = opacityClass === "" ? "text-gray-600/50 dark:text-gray-500/50" : "";
    spanHighlight = "none";
    spanGradient = "none";
  };
  let generatedCode = (() => {
    let props = [];
    if (spanItalic) props.push(` italic`);
    if (spanUnderline) props.push(` underline`);
    if (spanLinethrough) props.push(` linethrough`);
    if (spanUppercase) props.push(` uppercase`);
    if (spanGradient !== "none") props.push(` gradient="${spanGradient}"`);
    if (spanHighlight !== "none") props.push(` highlight="${spanHighlight}"`);
    if (spanDecoration !== "none") props.push(` decoration="${spanDecoration}"`);
    if (spanDecorationColor !== "none") props.push(` decorationColor="${spanDecorationColor}"`);
    if (spanDecorationThickness !== "0") props.push(` decorationThickness="${spanDecorationThickness}"`);
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<P size="xl" weight="bold">
  Lorem ipsum 
  <Span${propsString}>${editableContent}</Span>
  consectetur elit.
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
        $$payload3.out += `<!---->Span`;
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
        $$payload3.out += `<!---->Interactive Span Builder`;
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
          const each_array = ensure_array_like(highlights);
          const each_array_1 = ensure_array_like(gradients);
          const each_array_2 = ensure_array_like(docrationThickness);
          const each_array_3 = ensure_array_like(decorationColors);
          const each_array_4 = ensure_array_like(decorations);
          $$payload3.out += `<div class="h-40"><div class="mb-4">`;
          Label($$payload3, {
            class: "mr-4 text-lg font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Edit span content:`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          {
            let right = function($$payload4) {
              CloseButton($$payload4, { onclick: () => editableContent = "" });
            };
            Input($$payload3, {
              type: "text",
              get value() {
                return editableContent;
              },
              set value($$value) {
                editableContent = $$value;
                $$settled = false;
              },
              placeholder: "Write your blockquote text",
              class: "mb-4 pr-12",
              right,
              $$slots: { right: true }
            });
          }
          $$payload3.out += `<!----></div> `;
          P($$payload3, {
            size: "xl",
            weight: "bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Lorem ipsum `;
              Span($$payload4, {
                italic: spanItalic,
                underline: spanUnderline,
                linethrough: spanLinethrough,
                uppercase: spanUppercase,
                gradient: spanGradient,
                decoration: spanDecoration,
                decorationColor: spanDecorationColor,
                decorationThickness: spanDecorationThickness,
                highlight: spanHighlight,
                class: opacityClass,
                children: ($$payload5) => {
                  $$payload5.out += `<!---->${escape_html(editableContent)}`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> consectetur elit.`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="mb-4 mt-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Highlight`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let highlight = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-20 my-1",
              name: "span_highlight",
              get group() {
                return spanHighlight;
              },
              set group($$value) {
                spanHighlight = $$value;
                $$settled = false;
              },
              onchange: () => {
                spanGradient = "none";
                opacityClass = "";
              },
              color: highlight,
              value: highlight,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(highlight)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Gradient`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let gradient = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: "w-32 my-1",
              name: "span_gradient",
              get group() {
                return spanGradient;
              },
              set group($$value) {
                spanGradient = $$value;
                $$settled = false;
              },
              onchange: () => spanHighlight = "none",
              value: gradient,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(gradient)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Decoration thickness`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let thickness = each_array_2[$$index_2];
            Radio($$payload3, {
              labelClass: "w-12 my-1",
              name: "span_decoration_thickness",
              get group() {
                return spanDecorationThickness;
              },
              set group($$value) {
                spanDecorationThickness = $$value;
                $$settled = false;
              },
              onchange: () => {
                spanUnderline = false;
                spanLinethrough = false;
              },
              value: thickness,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(thickness)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Decoration color`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
            let color = each_array_3[$$index_3];
            Radio($$payload3, {
              labelClass: "w-20 my-1",
              name: "p_decoration_color",
              get group() {
                return spanDecorationColor;
              },
              set group($$value) {
                spanDecorationColor = $$value;
                $$settled = false;
              },
              onchange: () => {
                spanUnderline = false;
                spanLinethrough = false;
              },
              color,
              value: color,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(color)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Decoration`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
            let decoration = each_array_4[$$index_4];
            Radio($$payload3, {
              labelClass: "w-20 my-1",
              name: "span_decoration",
              get group() {
                return spanDecoration;
              },
              set group($$value) {
                spanDecoration = $$value;
                $$settled = false;
              },
              onchange: () => {
                spanUnderline = false;
                spanLinethrough = false;
              },
              value: decoration,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(decoration)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-36",
            color: "violet",
            onclick: changeLinethrough,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(spanLinethrough ? "No linethrough" : "Linethrough ")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-36",
            color: "blue",
            onclick: changeUppercase,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(spanUppercase ? "No uppercase" : "Uppercase")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-24",
            onclick: changeItalic,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(spanItalic ? "No italic" : "Italic")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-28",
            color: "amber",
            onclick: changeUnderline,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(spanUnderline ? "No underline" : "Underline")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-32",
            color: "teal",
            onclick: changeOpacity,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(opacityClass ? "No opacity" : "Add opacity")}`;
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
  bind_props($$props, { editableContent });
  pop();
}
export {
  _page as default
};
