import { Q as push, a0 as spread_attributes, a2 as bind_props, S as pop, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like, V as escape_html, X as stringify } from "../../../../chunks/index.js";
import { a as fade, f as fly, b as blur, s as slide, c as scale } from "../../../../chunks/index3.js";
import { c as alert$1 } from "../../../../chunks/theme.js";
import { C as CloseButton } from "../../../../chunks/CloseButton.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { l as linear } from "../../../../chunks/index4.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { I as InfoCircleSolid } from "../../../../chunks/InfoCircleSolid.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { E as EyeSolid } from "../../../../chunks/EyeSolid.js";
function Alert($$payload, $$props) {
  push();
  let {
    children,
    icon,
    alertStatus = true,
    closeIcon,
    color = "primary",
    rounded = true,
    border,
    class: className,
    dismissable,
    transition = fade,
    params,
    onclick,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let divCls = alert$1({
    color,
    rounded,
    border,
    icon: !!icon,
    dismissable,
    className
  });
  if (alertStatus) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes({ role: "alert", ...restProps, class: divCls })}>`;
    if (icon) {
      $$payload.out += "<!--[-->";
      icon($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (icon || dismissable) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div>`;
      children($$payload);
      $$payload.out += `<!----></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      children($$payload);
      $$payload.out += `<!---->`;
    }
    $$payload.out += `<!--]--> `;
    if (dismissable) {
      $$payload.out += "<!--[-->";
      if (closeIcon) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<button type="button" class="m-0.5 -me-1.5 ms-1.5 whitespace-normal rounded p-0.5 text-primary-500 hover:bg-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-400 dark:hover:bg-primary-800 dark:hover:text-primary-300" aria-label="Remove badge"><span class="sr-only">Remove alert</span> `;
        if (icon) {
          $$payload.out += "<!--[-->";
          icon($$payload);
          $$payload.out += `<!---->`;
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]--></button>`;
      } else {
        $$payload.out += "<!--[!-->";
        if (onclick) {
          $$payload.out += "<!--[-->";
          CloseButton($$payload, {
            class: "-my-1.5 -me-1.5 ms-auto dark:hover:bg-gray-700",
            color,
            ariaLabel: "Remove badge",
            onclick
          });
        } else {
          $$payload.out += "<!--[!-->";
          CloseButton($$payload, {
            class: "-my-1.5 -me-1.5 ms-auto dark:hover:bg-gray-700",
            color,
            ariaLabel: "Remove alert",
            onclick: () => {
              alertStatus = false;
            }
          });
        }
        $$payload.out += `<!--]-->`;
      }
      $$payload.out += `<!--]-->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { alertStatus });
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Alert, Button } from "$lib";\n  import { InfoCircleSolid, EyeSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="mb-4">\n  <Alert color="blue" class="!items-start">\n    {#snippet icon()}\n      <InfoCircleSolid class="mt-1 h-5 w-5" />\n    {/snippet}\n    <p class="text-lg font-medium">This is a info alert</p>\n    <p class="mb-4 mt-2 text-sm">More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n    <div class="flex gap-2">\n      <Button size="xs"><EyeSolid class="me-2 h-4 w-4" />View more</Button>\n      <Button size="xs" outline>Go to Home</Button>\n    </div>\n  </Alert>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Alert } from "$lib";\n  import { InfoCircleSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="mb-4">\n  <Alert color="blue" class="!items-start">\n    {#snippet icon()}\n      <InfoCircleSolid class="h-5 w-5" />\n    {/snippet}\n    <p class="font-medium">Ensure that these requirements are met:</p>\n    <ul class="ms-4 mt-1.5 list-inside list-disc">\n      <li>At least 10 characters (and up to 100 characters)</li>\n      <li>At least one lowercase character</li>\n      <li>Inclusion of at least one special character, e.g., ! @ # ?</li>\n    </ul>\n  </Alert>\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Alert } from "$lib";\n<\/script>\n\n<Alert dismissable class="bg-sky-500 text-white dark:bg-lime-500 dark:text-white">Your content</Alert>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Alert } from "$lib";\n  let alertEventStatus = $state(true);\n  function handleClose() {\n    console.log("Alert dismissed");\n    alert("Alert dismissed");\n    alertEventStatus = false;\n  }\n<\/script>\n\n<Alert dismissable onclick={handleClose} bind:alertStatus={alertEventStatus}>Close me</Alert>\n';
const __vite_glob_0_4 = '<script>\n  import { Alert } from "svelte-5-ui-lib";\n<\/script>\n';
function AdditionalContent($$payload) {
  $$payload.out += `<div class="mb-4">`;
  {
    let icon = function($$payload2) {
      InfoCircleSolid($$payload2, { class: "mt-1 h-5 w-5" });
    };
    Alert($$payload, {
      color: "blue",
      class: "!items-start",
      icon,
      children: ($$payload2) => {
        $$payload2.out += `<p class="text-lg font-medium">This is a info alert</p> <p class="mb-4 mt-2 text-sm">More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p> <div class="flex gap-2">`;
        Button($$payload2, {
          size: "xs",
          children: ($$payload3) => {
            EyeSolid($$payload3, { class: "me-2 h-4 w-4" });
            $$payload3.out += `<!---->View more`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> `;
        Button($$payload2, {
          size: "xs",
          outline: true,
          children: ($$payload3) => {
            $$payload3.out += `<!---->Go to Home`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----></div>`;
      },
      $$slots: { icon: true, default: true }
    });
  }
  $$payload.out += `<!----></div>`;
}
function AlertWithList($$payload) {
  $$payload.out += `<div class="mb-4">`;
  {
    let icon = function($$payload2) {
      InfoCircleSolid($$payload2, { class: "h-5 w-5" });
    };
    Alert($$payload, {
      color: "blue",
      class: "!items-start",
      icon,
      children: ($$payload2) => {
        $$payload2.out += `<p class="font-medium">Ensure that these requirements are met:</p> <ul class="ms-4 mt-1.5 list-inside list-disc"><li>At least 10 characters (and up to 100 characters)</li> <li>At least one lowercase character</li> <li>Inclusion of at least one special character, e.g., ! @ # ?</li></ul>`;
      },
      $$slots: { icon: true, default: true }
    });
  }
  $$payload.out += `<!----></div>`;
}
function Event($$payload) {
  let alertEventStatus = true;
  function handleClose() {
    console.log("Alert dismissed");
    alert("Alert dismissed");
    alertEventStatus = false;
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Alert($$payload2, {
      dismissable: true,
      onclick: handleClose,
      get alertStatus() {
        return alertEventStatus;
      },
      set alertStatus($$value) {
        alertEventStatus = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        $$payload3.out += `<!---->Close me`;
      },
      $$slots: { default: true }
    });
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}
function CustomColor($$payload) {
  Alert($$payload, {
    dismissable: true,
    class: "bg-sky-500 text-white dark:bg-lime-500 dark:text-white",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Your content`;
    },
    $$slots: { default: true }
  });
}
function _page($$payload, $$props) {
  push();
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
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  const colors = Object.keys(alert$1.variants.color);
  let color = "primary";
  let iconSlot = false;
  const changeIconSlot = () => {
    iconSlot = !iconSlot;
  };
  let rounded = false;
  const changeRounded = () => {
    rounded = !rounded;
  };
  let border = false;
  const changeBorder = () => {
    border = !border;
  };
  let dismissable = true;
  const changeDismissable = () => {
    dismissable = !dismissable;
  };
  let alertStatusInteractive = true;
  const changeStatusInteractive = () => {
    alertStatusInteractive = true;
  };
  let alertClass = "";
  const changeClass = () => {
    alertClass = alertClass === "" ? "pl-10" : "";
  };
  let borderAccent = false;
  const changeBorderAccent = () => {
    borderAccent = !borderAccent;
    alertClass = borderAccent ? "border-t-4" : "";
    rounded = false;
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
  let selectedTransition = "Fly";
  let currentTransition = transitions.find((t) => t.name === selectedTransition) || transitions[0];
  let generatedCode = (() => {
    let props = [];
    if (color !== "primary") props.push(` color="${color}"`);
    if (rounded) props.push(" rounded");
    if (border) props.push(" border");
    if (dismissable) props.push(" dismissable");
    if (alertClass) props.push(` class="${alertClass}"`);
    if (!alertStatusInteractive) props.push(" alertStatus={false}");
    if (currentTransition !== transitions[0] && dismissable) {
      props.push(` transition={${currentTransition.transition.name}}`);
      const paramsString = Object.entries(currentTransition.params).map(([key, value]) => {
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
    if (iconSlot) {
      iconCode = `
  {#snippet icon()}
    <InfoCircleSolid class="h-5 w-5" />
  {/snippet}`;
    }
    return `<Alert${propsString}>${iconCode}
  My Alert
</Alert>`;
  })();
  let builderExpand = false;
  let showBuilderExpandButton = isGeneratedCodeOverflow(generatedCode);
  const handleBuilderExpandClick = () => {
    builderExpand = !builderExpand;
  };
  let exampleExpand = false;
  let showExpandButton = isSvelteOverflow(svelteCode, exampleModules);
  const handleExpandClick = () => {
    exampleExpand = !exampleExpand;
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    H1($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Alert`;
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
        $$payload3.out += `<!---->Interactive Alert Bilder`;
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
          const each_array = ensure_array_like(colors);
          const each_array_1 = ensure_array_like(transitions);
          $$payload3.out += `<div class="mb-4 h-20">`;
          {
            let icon = function($$payload4) {
              if (iconSlot) {
                $$payload4.out += "<!--[-->";
                InfoCircleSolid($$payload4, { class: "h-5 w-5" });
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]-->`;
            };
            Alert($$payload3, {
              color,
              rounded,
              border,
              dismissable,
              class: alertClass,
              get alertStatus() {
                return alertStatusInteractive;
              },
              set alertStatus($$value) {
                alertStatusInteractive = $$value;
                $$settled = false;
              },
              transition: currentTransition.transition,
              params: currentTransition.params,
              icon,
              children: ($$payload4) => {
                $$payload4.out += `<span class="font-medium">My Alert!</span>`;
              },
              $$slots: { icon: true, default: true }
            });
          }
          $$payload3.out += `<!----></div> <div class="mb-4 h-12">`;
          Button($$payload3, {
            disabled: alertStatusInteractive ? true : false,
            onclick: changeStatusInteractive,
            children: ($$payload4) => {
              $$payload4.out += `<!---->Open alert`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="mb-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Color`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let colorOption = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-24 my-1",
              name: "alert_reactive",
              get group() {
                return color;
              },
              set group($$value) {
                color = $$value;
                $$settled = false;
              },
              color: colorOption,
              value: colorOption,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(colorOption)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Transition`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let transition = each_array_1[$$index_1];
            Radio($$payload3, {
              disabled: dismissable ? false : true,
              labelClass: `w-16 my-1 ${stringify(dismissable ? "" : "opacity-30 cursor-not-allowed")}`,
              name: "transition_interactive",
              get group() {
                return selectedTransition;
              },
              set group($$value) {
                selectedTransition = $$value;
                $$settled = false;
              },
              value: transition.name,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(transition.name)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-48",
            color: "blue",
            onclick: changeRounded,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(rounded ? "Remove rounded" : "Add rounded")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-48",
            color: "red",
            onclick: changeBorder,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(border ? "Remove border" : "Add border")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-48",
            color: "yellow",
            onclick: changeDismissable,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(dismissable ? "Remove dismissable" : "Add dismissable")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-48",
            color: "green",
            onclick: changeClass,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(alertClass ? "Remove class" : "Add class")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-48",
            color: "sky",
            onclick: changeIconSlot,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(iconSlot ? "Remove icon" : "Add icon")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-48",
            color: "rose",
            onclick: changeBorderAccent,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(borderAccent ? "Remove accent" : "Add accent")}`;
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
        $$payload3.out += `<!---->Examples`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        DynamicCodeBlockHighlight($$payload3, {
          replaceLib: true,
          handleExpandClick,
          expand: exampleExpand,
          showExpandButton,
          code: exampleModules[`./examples/${svelteCode}`]
        });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          const each_array_2 = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-12 flex flex-wrap">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Example`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let style = each_array_2[$$index_2];
            Radio($$payload3, {
              labelClass: "w-40 my-1",
              onclick: () => exampleExpand = false,
              name: "block_style",
              get group() {
                return selectedExample;
              },
              set group($$value) {
                selectedExample = $$value;
                $$settled = false;
              },
              value: style.name,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(style.name)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <!---->`;
          SelectedComponent($$payload3, {});
          $$payload3.out += `<!---->`;
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
