import { c as comment, a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, f as first_child, t as template_effect, a as pop, c as child, s as sibling, r as reset, b as get, d as derived, a6 as state, n as next, a7 as set } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { i as if_block, r as rest_props, b as proxy } from "../chunks/props.B7eOu8hW.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { a as set_attributes, b as set_class, a2 as hr } from "../chunks/theme.BtjZjf2R.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { P } from "../chunks/P.CbSbQedY.js";
import { Q as QuoteSolid } from "../chunks/QuoteSolid.fe7j2M1q.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
var root_1 = template(`<div><hr> <div><!></div></div>`);
var root_2 = template(`<hr>`);
function Hr($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "divClass",
    "hrClass",
    "innerDivClass"
  ]);
  let $$d = derived(() => hr({ withChildren: !!$$props.children })), base = derived(() => get($$d).base), container = derived(() => get($$d).container), content = derived(() => get($$d).content);
  var fragment = comment();
  var node = first_child(fragment);
  if_block(
    node,
    () => $$props.children,
    ($$anchor2) => {
      var div = root_1();
      let attributes;
      var hr_1 = child(div);
      const class_derived = derived(() => get(base)({ class: $$props.hrClass }));
      var div_1 = sibling(hr_1, 2);
      const class_derived_1 = derived(() => get(content)({ class: $$props.innerDivClass }));
      var node_1 = child(div_1);
      snippet(node_1, () => $$props.children);
      reset(div_1);
      reset(div);
      template_effect(() => {
        attributes = set_attributes(div, attributes, {
          ...restProps,
          class: get(container)({ class: $$props.divClass })
        });
        set_class(hr_1, get(class_derived));
        set_class(div_1, get(class_derived_1));
      });
      append($$anchor2, div);
    },
    ($$anchor2) => {
      var hr_2 = root_2();
      let attributes_1;
      template_effect(() => attributes_1 = set_attributes(hr_2, attributes_1, {
        class: get(base)({ class: $$props.hrClass }),
        ...restProps
      }));
      append($$anchor2, hr_2);
    }
  );
  append($$anchor, fragment);
  pop();
}
const __vite_glob_0_0 = '<script>\n  import { Hr } from "svelte-5-ui-lib";\n<\/script>\n';
var root_5 = template(`<div class="mb-4 sm:h-[250px] md:h-[200px]"><!> <!> <!></div> <div class="flex flex-wrap space-x-2"><!> <!></div>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
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
  let selectedStyle = state("default");
  let generatedCode = derived(() => (() => {
    let hr2;
    if (get(selectedStyle) === "default") {
      hr2 = `<Hr hrClass="my-8" />`;
    }
    if (get(selectedStyle) === "trimmed") {
      hr2 = `<Hr hrClass="w-48 h-1 mx-auto my-4 rounded md:my-10" />`;
    }
    if (get(selectedStyle) === "icon") {
      hr2 = `<Hr hrClass="my-8 w-64 h-1" icon>
  <QuoteSolid class="w-4 h-4 text-gray-700 dark:text-gray-300" />
</Hr>`;
    }
    if (get(selectedStyle) === "text") {
      hr2 = `<Hr hrClass="my-8 w-64">or</Hr>`;
    }
    if (get(selectedStyle) === "shape") {
      hr2 = `<Hr hrClass="my-8 mx-auto w-8 h-8" />`;
    }
    return `<p>Lorem ipsum dolor sit amet.</p> 
   ${hr2} 
<p>Fusce eu vitae pretium libero imperdiet.</p>`;
  })());
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Horizontal line (HR)");
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
      var text_2 = text("Default HR");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_3, 2);
  {
    const codeblock = ($$anchor2) => {
      HighlightCompo($$anchor2, {
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
        P(node_5, {
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text("Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools.");
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        var node_6 = sibling(node_5, 2);
        if_block(
          node_6,
          () => get(selectedStyle) === "trimmed",
          ($$anchor3) => {
            Hr($$anchor3, {
              hrClass: "w-48 h-1 mx-auto my-4 rounded md:my-10"
            });
          },
          ($$anchor3) => {
            var fragment_4 = comment();
            var node_7 = first_child(fragment_4);
            if_block(
              node_7,
              () => get(selectedStyle) === "icon",
              ($$anchor4) => {
                Hr($$anchor4, {
                  hrClass: "my-8 w-64 h-1",
                  children: ($$anchor5, $$slotProps2) => {
                    QuoteSolid($$anchor5, {
                      class: "h-6 w-6 text-gray-700 dark:text-gray-300"
                    });
                  },
                  $$slots: { default: true }
                });
              },
              ($$anchor4) => {
                var fragment_7 = comment();
                var node_8 = first_child(fragment_7);
                if_block(
                  node_8,
                  () => get(selectedStyle) === "text",
                  ($$anchor5) => {
                    Hr($$anchor5, {
                      hrClass: "my-8 w-64",
                      children: ($$anchor6, $$slotProps2) => {
                        next();
                        var text_4 = text("or");
                        append($$anchor6, text_4);
                      },
                      $$slots: { default: true }
                    });
                  },
                  ($$anchor5) => {
                    var fragment_9 = comment();
                    var node_9 = first_child(fragment_9);
                    if_block(
                      node_9,
                      () => get(selectedStyle) === "shape",
                      ($$anchor6) => {
                        Hr($$anchor6, { hrClass: "my-8 mx-auto w-8 h-8" });
                      },
                      ($$anchor6) => {
                        Hr($$anchor6, { hrClass: "my-8" });
                      },
                      true
                    );
                    append($$anchor5, fragment_9);
                  },
                  true
                );
                append($$anchor4, fragment_7);
              },
              true
            );
            append($$anchor3, fragment_4);
          }
        );
        var node_10 = sibling(node_6, 2);
        P(node_10, {
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_5 = text("Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil.");
            append($$anchor3, text_5);
          },
          $$slots: { default: true }
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var node_11 = child(div_1);
        Label(node_11, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_6 = text("Color");
            append($$anchor3, text_6);
          },
          $$slots: { default: true }
        });
        var node_12 = sibling(node_11, 2);
        each(node_12, 17, () => types, index, ($$anchor3, type) => {
          Radio($$anchor3, {
            labelClass: "w-20 my-1",
            name: "hr_style",
            get group() {
              return get(selectedStyle);
            },
            set group($$value) {
              set(selectedStyle, proxy($$value));
            },
            get value() {
              return get(type);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_7 = text();
              template_effect(() => set_text(text_7, get(type)));
              append($$anchor4, text_7);
            },
            $$slots: { default: true }
          });
        });
        reset(div_1);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_13 = sibling(node_4, 2);
  H2(node_13, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_8 = text("Component data");
      append($$anchor2, text_8);
    },
    $$slots: { default: true }
  });
  var node_14 = sibling(node_13, 2);
  CompoAttributesViewer(node_14, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
