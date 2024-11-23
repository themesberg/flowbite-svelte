import { Q as push, a0 as spread_attributes, W as attr, S as pop, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like, V as escape_html } from "../../../../chunks/index.js";
import { aW as hr } from "../../../../chunks/theme.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { P } from "../../../../chunks/P.js";
import { Q as QuoteSolid } from "../../../../chunks/QuoteSolid.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
function Hr($$payload, $$props) {
  push();
  let {
    children,
    divClass,
    hrClass,
    innerDivClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let { base, container, content } = hr({ withChildren: !!children });
  if (children) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes({
      ...restProps,
      class: container({ class: divClass })
    })}><hr${attr("class", base({ class: hrClass }))}> <div${attr("class", content({ class: innerDivClass }))}>`;
    children($$payload);
    $$payload.out += `<!----></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<hr${spread_attributes({
      class: base({ class: hrClass }),
      ...restProps
    })}>`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
const __vite_glob_0_0 = '<script>\n  import { Hr } from "svelte-5-ui-lib";\n<\/script>\n';
function _page($$payload, $$props) {
  push();
  const dirName = "typography/hr";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Setup.svelte": __vite_glob_0_0
  });
  const types = [
    "default",
    "trimmed",
    "icon",
    "text",
    "shape"
  ];
  let selectedStyle = "default";
  let generatedCode = (() => {
    let hr2;
    if (selectedStyle === "default") {
      hr2 = `<Hr hrClass="my-8" />`;
    }
    if (selectedStyle === "trimmed") {
      hr2 = `<Hr hrClass="w-48 h-1 mx-auto my-4 rounded md:my-10" />`;
    }
    if (selectedStyle === "icon") {
      hr2 = `<Hr hrClass="my-8 w-64 h-1" icon>
  <QuoteSolid class="w-4 h-4 text-gray-700 dark:text-gray-300" />
</Hr>`;
    }
    if (selectedStyle === "text") {
      hr2 = `<Hr hrClass="my-8 w-64">or</Hr>`;
    }
    if (selectedStyle === "shape") {
      hr2 = `<Hr hrClass="my-8 mx-auto w-8 h-8" />`;
    }
    return `<p>Lorem ipsum dolor sit amet.</p> 
   ${hr2} 
<p>Fusce eu vitae pretium libero imperdiet.</p>`;
  })();
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    H1($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Horizontal line (HR)`;
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
        $$payload3.out += `<!---->Default HR`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        HighlightCompo($$payload3, { code: generatedCode });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          const each_array = ensure_array_like(types);
          $$payload3.out += `<div class="mb-4 sm:h-[250px] md:h-[200px]">`;
          P($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools.`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          if (selectedStyle === "trimmed") {
            $$payload3.out += "<!--[-->";
            Hr($$payload3, {
              hrClass: "w-48 h-1 mx-auto my-4 rounded md:my-10"
            });
          } else {
            $$payload3.out += "<!--[!-->";
            if (selectedStyle === "icon") {
              $$payload3.out += "<!--[-->";
              Hr($$payload3, {
                hrClass: "my-8 w-64 h-1",
                children: ($$payload4) => {
                  QuoteSolid($$payload4, {
                    class: "h-6 w-6 text-gray-700 dark:text-gray-300"
                  });
                },
                $$slots: { default: true }
              });
            } else {
              $$payload3.out += "<!--[!-->";
              if (selectedStyle === "text") {
                $$payload3.out += "<!--[-->";
                Hr($$payload3, {
                  hrClass: "my-8 w-64",
                  children: ($$payload4) => {
                    $$payload4.out += `<!---->or`;
                  },
                  $$slots: { default: true }
                });
              } else {
                $$payload3.out += "<!--[!-->";
                if (selectedStyle === "shape") {
                  $$payload3.out += "<!--[-->";
                  Hr($$payload3, { hrClass: "my-8 mx-auto w-8 h-8" });
                } else {
                  $$payload3.out += "<!--[!-->";
                  Hr($$payload3, { hrClass: "my-8" });
                }
                $$payload3.out += `<!--]-->`;
              }
              $$payload3.out += `<!--]-->`;
            }
            $$payload3.out += `<!--]-->`;
          }
          $$payload3.out += `<!--]--> `;
          P($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil.`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Color`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let type = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-20 my-1",
              name: "hr_style",
              get group() {
                return selectedStyle;
              },
              set group($$value) {
                selectedStyle = $$value;
                $$settled = false;
              },
              value: type,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(type)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div>`;
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
