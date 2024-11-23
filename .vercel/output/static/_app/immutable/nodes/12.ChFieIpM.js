import { b as text, a as append, t as template } from "../chunks/disclose-version.0TX42Q8e.js";
import { f as first_child, n as next, s as sibling, p as push, a6 as state, u as user_effect, a as pop, b as get, t as template_effect, a7 as set, c as child, r as reset, d as derived } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { b as proxy, i as if_block, c as component } from "../chunks/props.B7eOu8hW.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { v as buttonGroup, aU as button, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { B as ButtonGroup } from "../chunks/ButtonGroup.CoXuPkoy.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { A as AdjustmentsVerticalSolid } from "../chunks/AdjustmentsVerticalSolid.CkK8xNkY.js";
import { D as DownloadSolid } from "../chunks/DownloadSolid.CMQdquKG.js";
import { U as UserCircleSolid } from "../chunks/UserCircleSolid.C5EoQM_S.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { G as GradientButton } from "../chunks/GradientButton.iHHan53H.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { ButtonGroup, GradientButton } from "$lib";\n<\/script>\n\n<ButtonGroup class="space-x-px">\n  <GradientButton color="purpleToBlue">Profile</GradientButton>\n  <GradientButton color="cyanToBlue">Settings</GradientButton>\n  <GradientButton color="greenToBlue">Messages</GradientButton>\n</ButtonGroup>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { ButtonGroup, GradientButton } from "$lib";\n<\/script>\n\n<ButtonGroup class="space-x-px">\n  <GradientButton pill color="purpleToBlue">Profile</GradientButton>\n  <GradientButton pill color="cyanToBlue">Settings</GradientButton>\n  <GradientButton pill color="greenToBlue">Messages</GradientButton>\n</ButtonGroup>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { ButtonGroup, Button } from "$lib";\n  const handleClick = () => {\n    alert("Clicked");\n  };\n<\/script>\n\n<ButtonGroup>\n  <Button onclick={handleClick}>Click me</Button>\n  <Button>Settings</Button>\n  <Button>Messages</Button>\n</ButtonGroup>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { ButtonGroup, GradientButton } from "$lib";\n<\/script>\n\n<ButtonGroup>\n  <GradientButton shadow color="green">Profile</GradientButton>\n  <GradientButton shadow color="pink">Settings</GradientButton>\n  <GradientButton shadow color="teal">Messages</GradientButton>\n</ButtonGroup>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { ButtonGroup, Button } from "$lib";\n<\/script>\n\n<ButtonGroup>\n  <Button outline color="red">Profile</Button>\n  <Button outline color="green">Settings</Button>\n  <Button outline color="yellow">Messages</Button>\n</ButtonGroup>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { ButtonGroup, Button } from "$lib";\n<\/script>\n\n<ButtonGroup class="space-x-px">\n  <Button pill color="purple">Profile</Button>\n  <Button pill color="purple">Settings</Button>\n  <Button pill color="purple">Messages</Button>\n</ButtonGroup>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { ButtonGroup, Button, GradientButton } from "$lib";\n  import { UserCircleSolid, AdjustmentsVerticalSolid, DownloadSolid } from "flowbite-svelte-icons";\n<\/script>\n';
const __vite_glob_0_7 = '<script lang="ts">\n  import { ButtonGroup, Button } from "$lib";\n<\/script>\n\n<ButtonGroup>\n  <Button color="red">Profile</Button>\n  <Button color="green">Settings</Button>\n  <Button color="yellow">Messages</Button>\n</ButtonGroup>\n';
var root_1$6 = template(`<!> <!> <!>`, 1);
function DualtoneGradient($$anchor) {
  ButtonGroup($$anchor, {
    class: "space-x-px",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$6();
      var node = first_child(fragment_1);
      GradientButton(node, {
        color: "purpleToBlue",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("Profile");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      var node_1 = sibling(node, 2);
      GradientButton(node_1, {
        color: "cyanToBlue",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_1 = text("Settings");
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node_1, 2);
      GradientButton(node_2, {
        color: "greenToBlue",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_2 = text("Messages");
          append($$anchor3, text_2);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_1$5 = template(`<!> <!> <!>`, 1);
function DualtoneGradientPill($$anchor) {
  ButtonGroup($$anchor, {
    class: "space-x-px",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$5();
      var node = first_child(fragment_1);
      GradientButton(node, {
        pill: true,
        color: "purpleToBlue",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("Profile");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      var node_1 = sibling(node, 2);
      GradientButton(node_1, {
        pill: true,
        color: "cyanToBlue",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_1 = text("Settings");
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node_1, 2);
      GradientButton(node_2, {
        pill: true,
        color: "greenToBlue",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_2 = text("Messages");
          append($$anchor3, text_2);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_1$4 = template(`<!> <!> <!>`, 1);
function Events($$anchor) {
  const handleClick = () => {
    alert("Clicked");
  };
  ButtonGroup($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$4();
      var node = first_child(fragment_1);
      Button(node, {
        onclick: handleClick,
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("Click me");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      var node_1 = sibling(node, 2);
      Button(node_1, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_1 = text("Settings");
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node_1, 2);
      Button(node_2, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_2 = text("Messages");
          append($$anchor3, text_2);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_1$3 = template(`<!> <!> <!>`, 1);
function GradientShadow($$anchor) {
  ButtonGroup($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$3();
      var node = first_child(fragment_1);
      GradientButton(node, {
        shadow: true,
        color: "green",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("Profile");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      var node_1 = sibling(node, 2);
      GradientButton(node_1, {
        shadow: true,
        color: "pink",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_1 = text("Settings");
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node_1, 2);
      GradientButton(node_2, {
        shadow: true,
        color: "teal",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_2 = text("Messages");
          append($$anchor3, text_2);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_1$2 = template(`<!> <!> <!>`, 1);
function OutlineButtons($$anchor) {
  ButtonGroup($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$2();
      var node = first_child(fragment_1);
      Button(node, {
        outline: true,
        color: "red",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("Profile");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      var node_1 = sibling(node, 2);
      Button(node_1, {
        outline: true,
        color: "green",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_1 = text("Settings");
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node_1, 2);
      Button(node_2, {
        outline: true,
        color: "yellow",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_2 = text("Messages");
          append($$anchor3, text_2);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_1$1 = template(`<!> <!> <!>`, 1);
function PillButtons($$anchor) {
  ButtonGroup($$anchor, {
    class: "space-x-px",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$1();
      var node = first_child(fragment_1);
      Button(node, {
        pill: true,
        color: "purple",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("Profile");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      var node_1 = sibling(node, 2);
      Button(node_1, {
        pill: true,
        color: "purple",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_1 = text("Settings");
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node_1, 2);
      Button(node_2, {
        pill: true,
        color: "purple",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_2 = text("Messages");
          append($$anchor3, text_2);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_1 = template(`<!> <!> <!>`, 1);
function StandardButtons($$anchor) {
  ButtonGroup($$anchor, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1();
      var node = first_child(fragment_1);
      Button(node, {
        color: "red",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("Profile");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      var node_1 = sibling(node, 2);
      Button(node_1, {
        color: "green",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_1 = text("Settings");
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node_1, 2);
      Button(node_2, {
        color: "yellow",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_2 = text("Messages");
          append($$anchor3, text_2);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_7 = template(`<!>Profile`, 1);
var root_9 = template(`<!>Settings`, 1);
var root_11 = template(`<!>Messages`, 1);
var root_6 = template(`<!> <!> <!>`, 1);
var root_5 = template(`<div class="flex h-16 items-center justify-center"><!></div> <div class="mb-4 flex flex-wrap space-x-4"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!> <!> <!></div>`, 1);
var root_25 = template(`<div class="mb-8 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "buttongroup";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/DualtoneGradient.svelte": __vite_glob_0_0,
    "./examples/DualtoneGradientPill.svelte": __vite_glob_0_1,
    "./examples/Events.svelte": __vite_glob_0_2,
    "./examples/GradientShadow.svelte": __vite_glob_0_3,
    "./examples/OutlineButtons.svelte": __vite_glob_0_4,
    "./examples/PillButtons.svelte": __vite_glob_0_5,
    "./examples/Setup.svelte": __vite_glob_0_6,
    "./examples/StandardButtons.svelte": __vite_glob_0_7
  });
  const exampleArr = [
    {
      name: "Dualtone gradient",
      component: DualtoneGradient
    },
    {
      name: "Dualtone gradient pill",
      component: DualtoneGradientPill
    },
    {
      name: "Events",
      component: Events
    },
    {
      name: "Gradient shadow",
      component: GradientShadow
    },
    {
      name: "Outline buttons",
      component: OutlineButtons
    },
    {
      name: "Pill buttons",
      component: PillButtons
    },
    {
      name: "Standard buttons",
      component: StandardButtons
    }
  ];
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  const sizes = Object.keys(buttonGroup.variants.size);
  let size = state("md");
  const colors = Object.keys(button.variants.color);
  let color = state("primary");
  let link = state("");
  const changeLink = () => {
    set(link, proxy(get(link) === "" ? "/" : ""));
  };
  let icon = state(false);
  const changeIcon = () => {
    set(icon, !get(icon));
  };
  let outline = state(false);
  const changeOutline = () => {
    set(outline, !get(outline));
  };
  let buttonGroupClass = state("");
  const changeClass = () => {
    set(buttonGroupClass, proxy(get(buttonGroupClass) === "" ? "ml-4" : ""));
  };
  let generatedCode = derived(() => (() => {
    let props = [];
    let btnProps = [];
    let icon1 = get(icon) ? '<UserCircleSolid class="me-2 h-4 w-4" />' : "";
    let icon2 = get(icon) ? '<AdjustmentsVerticalSolid class="me-2 h-4 w-4" />' : "";
    let icon3 = get(icon) ? '<DownloadSolid class="me-2 h-4 w-4" />' : "";
    if (get(size) !== "md") props.push(` size="${get(size)}"`);
    if (get(buttonGroupClass) !== "") props.push(` class="${get(buttonGroupClass)}"`);
    if (get(link)) btnProps.push(` href="${get(link)}"`);
    if (get(color) !== "primary") btnProps.push(` color="${get(color)}"`);
    if (get(outline)) btnProps.push(" outline");
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<ButtonGroup${propsString}>
  <Button${btnProps}>${icon1}Profile</Button>
  <Button${btnProps}>${icon2}Settings</Button>
  <Button${btnProps}>${icon3}Messages</Button>
</ButtonGroup>`;
  })());
  let builder = uiHelpers();
  let builderExpand = state(false);
  let showBuilderExpandButton = derived(() => isGeneratedCodeOverflow(get(generatedCode)));
  const handleBuilderExpandClick = () => {
    set(builderExpand, !get(builderExpand));
  };
  let codeBlock = uiHelpers();
  let exampleExpand = state(false);
  let showExpandButton = derived(() => isSvelteOverflow(get(svelteCode), exampleModules));
  const handleExpandClick = () => {
    set(exampleExpand, !get(exampleExpand));
  };
  user_effect(() => {
    set(exampleExpand, proxy(codeBlock.isOpen));
    set(builderExpand, proxy(builder.isOpen));
  });
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Button group");
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
      var text_2 = text("Interactive Button-group Builder");
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
        ButtonGroup(node_5, {
          get size() {
            return get(size);
          },
          get class() {
            return get(buttonGroupClass);
          },
          children: ($$anchor3, $$slotProps2) => {
            var fragment_3 = root_6();
            var node_6 = first_child(fragment_3);
            Button(node_6, {
              get color() {
                return get(color);
              },
              get href() {
                return get(link);
              },
              get outline() {
                return get(outline);
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_4 = root_7();
                var node_7 = first_child(fragment_4);
                if_block(node_7, () => get(icon), ($$anchor5) => {
                  UserCircleSolid($$anchor5, { class: "me-2 h-4 w-4" });
                });
                next();
                append($$anchor4, fragment_4);
              },
              $$slots: { default: true }
            });
            var node_8 = sibling(node_6, 2);
            Button(node_8, {
              get color() {
                return get(color);
              },
              get href() {
                return get(link);
              },
              get outline() {
                return get(outline);
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_6 = root_9();
                var node_9 = first_child(fragment_6);
                if_block(node_9, () => get(icon), ($$anchor5) => {
                  AdjustmentsVerticalSolid($$anchor5, { class: "me-2 h-4 w-4" });
                });
                next();
                append($$anchor4, fragment_6);
              },
              $$slots: { default: true }
            });
            var node_10 = sibling(node_8, 2);
            Button(node_10, {
              get color() {
                return get(color);
              },
              get href() {
                return get(link);
              },
              get outline() {
                return get(outline);
              },
              children: ($$anchor4, $$slotProps3) => {
                var fragment_8 = root_11();
                var node_11 = first_child(fragment_8);
                if_block(node_11, () => get(icon), ($$anchor5) => {
                  DownloadSolid($$anchor5, { class: "me-2 h-4 w-4" });
                });
                next();
                append($$anchor4, fragment_8);
              },
              $$slots: { default: true }
            });
            append($$anchor3, fragment_3);
          },
          $$slots: { default: true }
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var node_12 = child(div_1);
        Label(node_12, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text("Size");
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        var node_13 = sibling(node_12, 2);
        each(node_13, 17, () => sizes, index, ($$anchor3, sizeOption) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "size",
            get group() {
              return get(size);
            },
            set group($$value) {
              set(size, proxy($$value));
            },
            get value() {
              return get(sizeOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_4 = text();
              template_effect(() => set_text(text_4, get(sizeOption)));
              append($$anchor4, text_4);
            },
            $$slots: { default: true }
          });
        });
        reset(div_1);
        var div_2 = sibling(div_1, 2);
        var node_14 = child(div_2);
        Label(node_14, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_5 = text("Color");
            append($$anchor3, text_5);
          },
          $$slots: { default: true }
        });
        var node_15 = sibling(node_14, 2);
        each(node_15, 17, () => colors, index, ($$anchor3, colorOption) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "color",
            get group() {
              return get(color);
            },
            set group($$value) {
              set(color, proxy($$value));
            },
            get color() {
              return get(colorOption);
            },
            get value() {
              return get(colorOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_6 = text();
              template_effect(() => set_text(text_6, get(colorOption)));
              append($$anchor4, text_6);
            },
            $$slots: { default: true }
          });
        });
        reset(div_2);
        var div_3 = sibling(div_2, 2);
        var node_16 = child(div_3);
        Button(node_16, {
          class: "w-40",
          onclick: changeClass,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_7 = text();
            template_effect(() => set_text(text_7, get(buttonGroupClass) ? "Remove class" : "Add class"));
            append($$anchor3, text_7);
          },
          $$slots: { default: true }
        });
        var node_17 = sibling(node_16, 2);
        Button(node_17, {
          class: "w-40",
          color: "secondary",
          onclick: changeLink,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_8 = text();
            template_effect(() => set_text(text_8, get(link) === "" ? "Add link" : "Remove link"));
            append($$anchor3, text_8);
          },
          $$slots: { default: true }
        });
        var node_18 = sibling(node_17, 2);
        Button(node_18, {
          class: "w-40",
          color: "red",
          onclick: changeIcon,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text();
            template_effect(() => set_text(text_9, get(icon) ? "Remove icon" : "Add icon"));
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        var node_19 = sibling(node_18, 2);
        Button(node_19, {
          class: "w-40",
          color: "violet",
          onclick: changeOutline,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_10 = text();
            template_effect(() => set_text(text_10, get(outline) ? "Remove outline" : "Add outline"));
            append($$anchor3, text_10);
          },
          $$slots: { default: true }
        });
        reset(div_3);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_20 = sibling(node_4, 2);
  H2(node_20, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_11 = text("Examples");
      append($$anchor2, text_11);
    },
    $$slots: { default: true }
  });
  var node_21 = sibling(node_20, 2);
  {
    const codeblock = ($$anchor2) => {
      DynamicCodeBlockHighlight($$anchor2, {
        replaceLib: true,
        handleExpandClick,
        get expand() {
          return get(exampleExpand);
        },
        get showExpandButton() {
          return get(showExpandButton);
        },
        get code() {
          return exampleModules[`./examples/${get(svelteCode)}`];
        }
      });
    };
    CodeWrapper(node_21, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_19 = root_25();
        var div_4 = first_child(fragment_19);
        var node_22 = child(div_4);
        Label(node_22, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_12 = text("Example");
            append($$anchor3, text_12);
          },
          $$slots: { default: true }
        });
        var node_23 = sibling(node_22, 2);
        each(node_23, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-[230px] my-1",
            onclick: () => set(exampleExpand, false),
            name: "block_style",
            get group() {
              return get(selectedExample);
            },
            set group($$value) {
              set(selectedExample, proxy($$value));
            },
            get value() {
              return get(style).name;
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_13 = text();
              template_effect(() => set_text(text_13, get(style).name));
              append($$anchor4, text_13);
            },
            $$slots: { default: true }
          });
        });
        reset(div_4);
        var node_24 = sibling(div_4, 2);
        component(node_24, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_19);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_25 = sibling(node_21, 2);
  H2(node_25, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_14 = text("Component data");
      append($$anchor2, text_14);
    },
    $$slots: { default: true }
  });
  var node_26 = sibling(node_25, 2);
  CompoAttributesViewer(node_26, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
