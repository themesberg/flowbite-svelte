import { a as append, b as text, t as template, c as comment } from "../chunks/disclose-version.0TX42Q8e.js";
import { c as child, s as sibling, f as first_child, n as next, r as reset, b as get, a7 as set, a6 as state, p as push, u as user_effect, a as pop, t as template_effect, d as derived } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { b as proxy, c as component, i as if_block } from "../chunks/props.B7eOu8hW.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { aG as Alert, aH as alert$1, aC as fly, ab as linear, aD as blur, Z as slide, aE as scale, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { I as InfoCircleSolid } from "../chunks/InfoCircleSolid.DglZJiUU.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { E as EyeSolid } from "../chunks/EyeSolid.BuWiCgGO.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { Alert, Button } from "$lib";\n  import { InfoCircleSolid, EyeSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="mb-4">\n  <Alert color="blue" class="!items-start">\n    {#snippet icon()}\n      <InfoCircleSolid class="mt-1 h-5 w-5" />\n    {/snippet}\n    <p class="text-lg font-medium">This is a info alert</p>\n    <p class="mb-4 mt-2 text-sm">More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n    <div class="flex gap-2">\n      <Button size="xs"><EyeSolid class="me-2 h-4 w-4" />View more</Button>\n      <Button size="xs" outline>Go to Home</Button>\n    </div>\n  </Alert>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Alert } from "$lib";\n  import { InfoCircleSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="mb-4">\n  <Alert color="blue" class="!items-start">\n    {#snippet icon()}\n      <InfoCircleSolid class="h-5 w-5" />\n    {/snippet}\n    <p class="font-medium">Ensure that these requirements are met:</p>\n    <ul class="ms-4 mt-1.5 list-inside list-disc">\n      <li>At least 10 characters (and up to 100 characters)</li>\n      <li>At least one lowercase character</li>\n      <li>Inclusion of at least one special character, e.g., ! @ # ?</li>\n    </ul>\n  </Alert>\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Alert } from "$lib";\n<\/script>\n\n<Alert dismissable class="bg-sky-500 text-white dark:bg-lime-500 dark:text-white">Your content</Alert>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Alert } from "$lib";\n  let alertEventStatus = $state(true);\n  function handleClose() {\n    console.log("Alert dismissed");\n    alert("Alert dismissed");\n    alertEventStatus = false;\n  }\n<\/script>\n\n<Alert dismissable onclick={handleClose} bind:alertStatus={alertEventStatus}>Close me</Alert>\n';
const __vite_glob_0_4 = '<script>\n  import { Alert } from "svelte-5-ui-lib";\n<\/script>\n';
var root_3 = template(`<!>View more`, 1);
var root_2$1 = template(`<p class="text-lg font-medium">This is a info alert</p> <p class="mb-4 mt-2 text-sm">More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p> <div class="flex gap-2"><!> <!></div>`, 1);
var root$2 = template(`<div class="mb-4"><!></div>`);
function AdditionalContent($$anchor) {
  var div = root$2();
  var node = child(div);
  {
    const icon = ($$anchor2) => {
      InfoCircleSolid($$anchor2, { class: "mt-1 h-5 w-5" });
    };
    Alert(node, {
      color: "blue",
      class: "!items-start",
      icon,
      children: ($$anchor2, $$slotProps) => {
        var fragment_1 = root_2$1();
        var div_1 = sibling(first_child(fragment_1), 4);
        var node_1 = child(div_1);
        Button(node_1, {
          size: "xs",
          children: ($$anchor3, $$slotProps2) => {
            var fragment_2 = root_3();
            var node_2 = first_child(fragment_2);
            EyeSolid(node_2, { class: "me-2 h-4 w-4" });
            next();
            append($$anchor3, fragment_2);
          },
          $$slots: { default: true }
        });
        var node_3 = sibling(node_1, 2);
        Button(node_3, {
          size: "xs",
          outline: true,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text$1 = text("Go to Home");
            append($$anchor3, text$1);
          },
          $$slots: { default: true }
        });
        reset(div_1);
        append($$anchor2, fragment_1);
      },
      $$slots: { icon: true, default: true }
    });
  }
  reset(div);
  append($$anchor, div);
}
var root_2 = template(`<p class="font-medium">Ensure that these requirements are met:</p> <ul class="ms-4 mt-1.5 list-inside list-disc"><li>At least 10 characters (and up to 100 characters)</li> <li>At least one lowercase character</li> <li>Inclusion of at least one special character, e.g., ! @ # ?</li></ul>`, 1);
var root$1 = template(`<div class="mb-4"><!></div>`);
function AlertWithList($$anchor) {
  var div = root$1();
  var node = child(div);
  {
    const icon = ($$anchor2) => {
      InfoCircleSolid($$anchor2, { class: "h-5 w-5" });
    };
    Alert(node, {
      color: "blue",
      class: "!items-start",
      icon,
      children: ($$anchor2, $$slotProps) => {
        var fragment_1 = root_2();
        next(2);
        append($$anchor2, fragment_1);
      },
      $$slots: { icon: true, default: true }
    });
  }
  reset(div);
  append($$anchor, div);
}
function Event($$anchor) {
  let alertEventStatus = state(true);
  function handleClose() {
    console.log("Alert dismissed");
    alert("Alert dismissed");
    set(alertEventStatus, false);
  }
  Alert($$anchor, {
    dismissable: true,
    onclick: handleClose,
    get alertStatus() {
      return get(alertEventStatus);
    },
    set alertStatus($$value) {
      set(alertEventStatus, proxy($$value));
    },
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Close me");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
}
function CustomColor($$anchor) {
  Alert($$anchor, {
    dismissable: true,
    class: "bg-sky-500 text-white dark:bg-lime-500 dark:text-white",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Your content");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
}
var root_8 = template(`<span class="font-medium">My Alert!</span>`);
var root_5 = template(`<div class="mb-4 h-20"><!></div> <div class="mb-4 h-12"><!></div> <div class="mb-4 flex flex-wrap space-x-4"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-4"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!> <!> <!> <!> <!></div>`, 1);
var root_24 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  const dirName = "alert";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/AdditionalContent.svelte": __vite_glob_0_0,
    "./examples/AlertWithList.svelte": __vite_glob_0_1,
    "./examples/CustomColor.svelte": __vite_glob_0_2,
    "./examples/Event.svelte": __vite_glob_0_3,
    "./examples/Setup.svelte": __vite_glob_0_4
  });
  const exampleArr = [
    {
      name: "Alert with list",
      component: AlertWithList
    },
    {
      name: "Additional content",
      component: AdditionalContent
    },
    {
      name: "Custom color",
      component: CustomColor
    },
    {
      name: "Event",
      component: Event
    }
  ];
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  const colors = Object.keys(alert$1.variants.color);
  let color = state("primary");
  let iconSlot = state(false);
  const changeIconSlot = () => {
    set(iconSlot, !get(iconSlot));
  };
  let rounded = state(false);
  const changeRounded = () => {
    set(rounded, !get(rounded));
  };
  let border = state(false);
  const changeBorder = () => {
    set(border, !get(border));
  };
  let dismissable = state(true);
  const changeDismissable = () => {
    set(dismissable, !get(dismissable));
  };
  let alertStatusInteractive = state(true);
  const changeStatusInteractive = () => {
    set(alertStatusInteractive, true);
  };
  let alertClass = state("");
  const changeClass = () => {
    set(alertClass, proxy(get(alertClass) === "" ? "pl-10" : ""));
  };
  let borderAccent = state(false);
  const changeBorderAccent = () => {
    set(borderAccent, !get(borderAccent));
    set(alertClass, proxy(get(borderAccent) ? "border-t-4" : ""));
    set(rounded, false);
  };
  const transitions = [
    {
      name: "Fly",
      transition: fly,
      params: { duration: 500, easing: linear, x: 150 }
    },
    {
      name: "Blur",
      transition: blur,
      params: { duration: 500, easing: linear }
    },
    {
      name: "Slide",
      transition: slide,
      params: { duration: 500, easing: linear, x: -150 }
    },
    {
      name: "Scale",
      transition: scale,
      params: { duration: 500, easing: linear }
    }
  ];
  let selectedTransition = state("Fly");
  let currentTransition = derived(() => transitions.find((t) => t.name === get(selectedTransition)) || transitions[0]);
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(color) !== "primary") props.push(` color="${get(color)}"`);
    if (get(rounded)) props.push(" rounded");
    if (get(border)) props.push(" border");
    if (get(dismissable)) props.push(" dismissable");
    if (get(alertClass)) props.push(` class="${get(alertClass)}"`);
    if (!get(alertStatusInteractive)) props.push(" alertStatus={false}");
    if (get(currentTransition) !== transitions[0] && get(dismissable)) {
      props.push(` transition={${get(currentTransition).transition.name}}`);
      const paramsString = Object.entries(get(currentTransition).params).map(([key, value]) => {
        if (typeof value === "function") {
          return `${key}:${value.name}`;
        }
        return `${key}:${value}`;
      }).join(",");
      props.push(` params={{${paramsString}}}`);
    }
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    let iconCode = "";
    if (get(iconSlot)) {
      iconCode = `
  {#snippet icon()}
    <InfoCircleSolid class="h-5 w-5" />
  {/snippet}`;
    }
    return `<Alert${propsString}>${iconCode}
  My Alert
</Alert>`;
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
      var text$1 = text("Alert");
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
      var text_2 = text("Interactive Alert Bilder");
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
        {
          const icon = ($$anchor3) => {
            var fragment_3 = comment();
            var node_6 = first_child(fragment_3);
            if_block(node_6, () => get(iconSlot), ($$anchor4) => {
              InfoCircleSolid($$anchor4, { class: "h-5 w-5" });
            });
            append($$anchor3, fragment_3);
          };
          Alert(node_5, {
            get color() {
              return get(color);
            },
            get rounded() {
              return get(rounded);
            },
            get border() {
              return get(border);
            },
            get dismissable() {
              return get(dismissable);
            },
            get class() {
              return get(alertClass);
            },
            get alertStatus() {
              return get(alertStatusInteractive);
            },
            set alertStatus($$value) {
              set(alertStatusInteractive, proxy($$value));
            },
            get transition() {
              return get(currentTransition).transition;
            },
            get params() {
              return get(currentTransition).params;
            },
            icon,
            children: ($$anchor3, $$slotProps2) => {
              var span = root_8();
              append($$anchor3, span);
            },
            $$slots: { icon: true, default: true }
          });
        }
        reset(div);
        var div_1 = sibling(div, 2);
        var node_7 = child(div_1);
        var disabled = derived(() => get(alertStatusInteractive) ? true : false);
        Button(node_7, {
          get disabled() {
            return get(disabled);
          },
          onclick: changeStatusInteractive,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_3 = text("Open alert");
            append($$anchor3, text_3);
          },
          $$slots: { default: true }
        });
        reset(div_1);
        var div_2 = sibling(div_1, 2);
        var node_8 = child(div_2);
        Label(node_8, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_4 = text("Color");
            append($$anchor3, text_4);
          },
          $$slots: { default: true }
        });
        var node_9 = sibling(node_8, 2);
        each(node_9, 17, () => colors, index, ($$anchor3, colorOption) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "alert_reactive",
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
              var text_5 = text();
              template_effect(() => set_text(text_5, get(colorOption)));
              append($$anchor4, text_5);
            },
            $$slots: { default: true }
          });
        });
        reset(div_2);
        var div_3 = sibling(div_2, 2);
        var node_10 = child(div_3);
        Label(node_10, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_6 = text("Transition");
            append($$anchor3, text_6);
          },
          $$slots: { default: true }
        });
        var node_11 = sibling(node_10, 2);
        each(node_11, 17, () => transitions, index, ($$anchor3, transition) => {
          var disabled_1 = derived(() => get(dismissable) ? false : true);
          var labelClass = derived(() => `w-16 my-1 ${(get(dismissable) ? "" : "opacity-30 cursor-not-allowed") ?? ""}`);
          Radio($$anchor3, {
            get disabled() {
              return get(disabled_1);
            },
            get labelClass() {
              return get(labelClass);
            },
            name: "transition_interactive",
            get group() {
              return get(selectedTransition);
            },
            set group($$value) {
              set(selectedTransition, proxy($$value));
            },
            get value() {
              return get(transition).name;
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_7 = text();
              template_effect(() => set_text(text_7, get(transition).name));
              append($$anchor4, text_7);
            },
            $$slots: { default: true }
          });
        });
        reset(div_3);
        var div_4 = sibling(div_3, 2);
        var node_12 = child(div_4);
        Button(node_12, {
          class: "w-48",
          color: "blue",
          onclick: changeRounded,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_8 = text();
            template_effect(() => set_text(text_8, get(rounded) ? "Remove rounded" : "Add rounded"));
            append($$anchor3, text_8);
          },
          $$slots: { default: true }
        });
        var node_13 = sibling(node_12, 2);
        Button(node_13, {
          class: "w-48",
          color: "red",
          onclick: changeBorder,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text();
            template_effect(() => set_text(text_9, get(border) ? "Remove border" : "Add border"));
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        var node_14 = sibling(node_13, 2);
        Button(node_14, {
          class: "w-48",
          color: "yellow",
          onclick: changeDismissable,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_10 = text();
            template_effect(() => set_text(text_10, get(dismissable) ? "Remove dismissable" : "Add dismissable"));
            append($$anchor3, text_10);
          },
          $$slots: { default: true }
        });
        var node_15 = sibling(node_14, 2);
        Button(node_15, {
          class: "w-48",
          color: "green",
          onclick: changeClass,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_11 = text();
            template_effect(() => set_text(text_11, get(alertClass) ? "Remove class" : "Add class"));
            append($$anchor3, text_11);
          },
          $$slots: { default: true }
        });
        var node_16 = sibling(node_15, 2);
        Button(node_16, {
          class: "w-48",
          color: "sky",
          onclick: changeIconSlot,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_12 = text();
            template_effect(() => set_text(text_12, get(iconSlot) ? "Remove icon" : "Add icon"));
            append($$anchor3, text_12);
          },
          $$slots: { default: true }
        });
        var node_17 = sibling(node_16, 2);
        Button(node_17, {
          class: "w-48",
          color: "rose",
          onclick: changeBorderAccent,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_13 = text();
            template_effect(() => set_text(text_13, get(borderAccent) ? "Remove accent" : "Add accent"));
            append($$anchor3, text_13);
          },
          $$slots: { default: true }
        });
        reset(div_4);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_18 = sibling(node_4, 2);
  H2(node_18, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_14 = text("Examples");
      append($$anchor2, text_14);
    },
    $$slots: { default: true }
  });
  var node_19 = sibling(node_18, 2);
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
    CodeWrapper(node_19, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_16 = root_24();
        var div_5 = first_child(fragment_16);
        var node_20 = child(div_5);
        Label(node_20, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_15 = text("Example");
            append($$anchor3, text_15);
          },
          $$slots: { default: true }
        });
        var node_21 = sibling(node_20, 2);
        each(node_21, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-40 my-1",
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
              var text_16 = text();
              template_effect(() => set_text(text_16, get(style).name));
              append($$anchor4, text_16);
            },
            $$slots: { default: true }
          });
        });
        reset(div_5);
        var node_22 = sibling(div_5, 2);
        component(node_22, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_16);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_23 = sibling(node_19, 2);
  H2(node_23, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_17 = text("Component data");
      append($$anchor2, text_17);
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
