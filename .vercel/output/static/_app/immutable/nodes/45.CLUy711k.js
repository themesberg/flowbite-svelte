import { a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, f as first_child, a as pop, b as get, t as template_effect, s as sibling, a6 as state, n as next, c as child, a7 as set, r as reset, d as derived } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { b as proxy } from "../chunks/props.B7eOu8hW.js";
import { T as label } from "../chunks/theme.BtjZjf2R.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { b as capitalizeFirstLetter } from "../chunks/helpers.B9KbZW0W.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { Label } from "$lib";\n<\/script>\n';
var root_5 = template(`<!> <div class="flex flex-wrap space-x-2"><!> <!></div>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "forms/label";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Setup.svelte": __vite_glob_0_0
  });
  const colors = Object.keys(label.variants.color);
  let labelColor = state("gray");
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(labelColor) !== "gray") props.push(` color="${get(labelColor)}"`);
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Label${propsString}>Label</Label>`;
  })());
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Label");
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
      var text_2 = text("Color");
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
        var node_5 = first_child(fragment_2);
        Label(node_5, {
          class: "text-lg font-bold",
          get color() {
            return get(labelColor);
          },
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text();
            template_effect(() => set_text(text_3, capitalizeFirstLetter(get(labelColor))));
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        var div = sibling(node_5, 2);
        var node_6 = child(div);
        Label(node_6, {
          class: "m-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_4 = text("Color");
            append($$anchor3, text_4);
          },
          $$slots: { default: true }
        });
        var node_7 = sibling(node_6, 2);
        each(node_7, 17, () => colors, index, ($$anchor3, colorOption) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "default_alert_color",
            get group() {
              return get(labelColor);
            },
            set group($$value) {
              set(labelColor, proxy($$value));
            },
            get color() {
              return get(colorOption);
            },
            get value() {
              return get(colorOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_5 = text();
              template_effect(() => set_text(text_5, get(colorOption)));
              append($$anchor4, text_5);
            },
            $$slots: { default: true }
          });
        });
        reset(div);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_8 = sibling(node_4, 2);
  H2(node_8, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_6 = text("Component data");
      append($$anchor2, text_6);
    },
    $$slots: { default: true }
  });
  var node_9 = sibling(node_8, 2);
  CompoAttributesViewer(node_9, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
