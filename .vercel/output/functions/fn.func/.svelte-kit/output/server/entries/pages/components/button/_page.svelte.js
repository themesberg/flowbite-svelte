import { a3 as copy_payload, a4 as assign_payload, S as pop, Q as push, Y as ensure_array_like, V as escape_html } from "../../../../chunks/index.js";
import { k as button, l as gradientButton } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { G as GradientButton } from "../../../../chunks/GradientButton.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow, c as capitalizeFirstLetter } from "../../../../chunks/helpers.js";
import { A as ArrowRightOutline } from "../../../../chunks/ArrowRightOutline.js";
import { S as ShoppingBagSolid } from "../../../../chunks/ShoppingBagSolid.js";
import { I as Indicator } from "../../../../chunks/Indicator.js";
import { T as ThumbsUpSolid } from "../../../../chunks/ThumbsUpSolid.js";
import { S as Spinner } from "../../../../chunks/Spinner.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { Button } from "$lib";\n  import { ShoppingBagSolid, ArrowRightOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="flex flex-wrap gap-2">\n  <Button><ShoppingBagSolid class="me-2 h-4 w-4" />Buy Now</Button>\n  <Button>Choose Plan<ArrowRightOutline class="ms-2 h-5 w-5" /></Button>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Button, Indicator } from "$lib";\n<\/script>\n\n<Button class="gap-2">\n  Messages\n  <Indicator color="cyan" class="bg-primary-200 text-xs font-semibold text-primary-800" size="lg">2</Indicator>\n</Button>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Button } from "$lib";\n  const btn1 = () => {\n    alert("You clicked btn1.");\n  };\n<\/script>\n\n<Button onclick={btn1}>Button 1</Button>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Button } from "$lib";\n  import { ArrowRightOutline, ThumbsUpSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<Button class="!p-2"><ArrowRightOutline class="h-7 w-7" /></Button>\n<Button pill={true} class="!p-2"><ArrowRightOutline class="h-5 w-5" /></Button>\n<Button outline={true} class="!p-2" size="lg">\n  <ThumbsUpSolid class="h-7 w-7" />\n</Button>\n<Button pill={true} outline={true} class="!p-2" size="xl">\n  <ThumbsUpSolid class="h-5 w-5" />\n</Button>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Button, Spinner } from "$lib";\n<\/script>\n\n<Button>\n  <Spinner class="me-3" size="4" color="teal" />Loading ...\n</Button>\n<Button color="alternative">\n  <Spinner class="me-3" size="4" />Loading ...\n</Button>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { Button } from "$lib";\n<\/script>\n';
function ButtonWithIcon($$payload) {
  $$payload.out += `<div class="flex flex-wrap gap-2">`;
  Button($$payload, {
    children: ($$payload2) => {
      ShoppingBagSolid($$payload2, { class: "me-2 h-4 w-4" });
      $$payload2.out += `<!---->Buy Now`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Choose Plan`;
      ArrowRightOutline($$payload2, { class: "ms-2 h-5 w-5" });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function ButtonWithLabel($$payload) {
  Button($$payload, {
    class: "gap-2",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Messages `;
      Indicator($$payload2, {
        color: "cyan",
        class: "bg-primary-200 text-xs font-semibold text-primary-800",
        size: "lg",
        children: ($$payload3) => {
          $$payload3.out += `<!---->2`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function Events($$payload) {
  const btn1 = () => {
    alert("You clicked btn1.");
  };
  Button($$payload, {
    onclick: btn1,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Button 1`;
    },
    $$slots: { default: true }
  });
}
function IconButtons($$payload) {
  Button($$payload, {
    class: "!p-2",
    children: ($$payload2) => {
      ArrowRightOutline($$payload2, { class: "h-7 w-7" });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    pill: true,
    class: "!p-2",
    children: ($$payload2) => {
      ArrowRightOutline($$payload2, { class: "h-5 w-5" });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    outline: true,
    class: "!p-2",
    size: "lg",
    children: ($$payload2) => {
      ThumbsUpSolid($$payload2, { class: "h-7 w-7" });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    pill: true,
    outline: true,
    class: "!p-2",
    size: "xl",
    children: ($$payload2) => {
      ThumbsUpSolid($$payload2, { class: "h-5 w-5" });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function Loader($$payload) {
  Button($$payload, {
    children: ($$payload2) => {
      Spinner($$payload2, { class: "me-3", size: "4", color: "teal" });
      $$payload2.out += `<!---->Loading ...`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    color: "alternative",
    children: ($$payload2) => {
      Spinner($$payload2, { class: "me-3", size: "4" });
      $$payload2.out += `<!---->Loading ...`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function _page($$payload, $$props) {
  push();
  const dirName = "buttons";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/ButtonWithIcon.svelte": __vite_glob_0_0,
    "./examples/ButtonWithLabel.svelte": __vite_glob_0_1,
    "./examples/Events.svelte": __vite_glob_0_2,
    "./examples/IconButtons.svelte": __vite_glob_0_3,
    "./examples/Loader.svelte": __vite_glob_0_4,
    "./examples/Setup.svelte": __vite_glob_0_5
  });
  const exampleArr = [
    {
      name: "Button with Icon",
      component: ButtonWithIcon
    },
    {
      name: "Button with label",
      component: ButtonWithLabel
    },
    {
      name: "Events",
      component: Events
    },
    {
      name: "Icon buttons",
      component: IconButtons
    },
    {
      name: "Loader",
      component: Loader
    }
  ];
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  const btnColors = Object.keys(button.variants.color);
  let btnColor = "primary";
  let btnClass = "";
  const changeBtnClass = () => {
    btnClass = btnClass === "" ? "w-48" : "";
  };
  let btnLink = "";
  const changeBtnLink = () => {
    btnLink = btnLink === "" ? "/" : "";
  };
  let btnOutline = false;
  const changeBtnOutline = () => {
    btnOutline = !btnOutline;
  };
  let btnShadow = false;
  const changeBtnShadow = () => {
    btnShadow = !btnShadow;
  };
  let btnPill = false;
  const changeBtnPill = () => {
    btnPill = !btnPill;
  };
  let btnDisabled = false;
  const changeBtnDisabled = () => {
    btnDisabled = !btnDisabled;
  };
  const btnSizes = Object.keys(button.variants.size);
  let btnSize = "md";
  const gradientColors = Object.keys(gradientButton.variants.color);
  let gradientColor = "blue";
  const gradientSizes = Object.keys(button.variants.size);
  let gradientSize = "md";
  let gradientClass = "";
  const changeGradientClass = () => {
    gradientClass = gradientClass === "" ? "w-48" : "";
  };
  let gradientOutline = false;
  const changeGradientOutline = () => {
    gradientOutline = !gradientOutline;
  };
  let gradientShadow = false;
  const changeGradientShadow = () => {
    gradientShadow = !gradientShadow;
  };
  let graidentPill = false;
  const changeGradientPill = () => {
    graidentPill = !graidentPill;
  };
  let gradientDisabled = false;
  const changeGradientDisabled = () => {
    gradientDisabled = !gradientDisabled;
  };
  let gradientLink = "";
  const changeGradientLink = () => {
    gradientLink = gradientLink === "" ? "/" : "";
  };
  let generatedCode = (() => {
    let props = [];
    if (btnColor !== "primary") props.push(` color="${btnColor}"`);
    if (btnShadow) props.push(" shadow");
    if (btnOutline) props.push(" outline");
    if (btnPill) props.push(" pill");
    if (btnClass) props.push(` class="${btnClass}"`);
    if (btnLink) props.push(` href="${btnLink}"`);
    if (btnDisabled) props.push(" disabled");
    if (btnSize !== "md") props.push(` size="${btnSize}"`);
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Button${propsString}>My Button</Button>`;
  })();
  let gradientGeneratedCode = (() => {
    let props = [];
    if (gradientColor !== "blue") props.push(` color="${gradientColor}"`);
    if (gradientShadow) props.push(" shadow");
    if (gradientOutline) props.push(" outline");
    if (graidentPill) props.push(" pill");
    if (gradientClass) props.push(` class="${gradientClass}"`);
    if (gradientLink) props.push(` href="${gradientLink}"`);
    if (gradientDisabled) props.push(" disabled");
    if (gradientSize !== "md") props.push(` size="${gradientSize}"`);
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<GradientButton${propsString}>My Gradient Button</GradientButton>`;
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
        $$payload3.out += `<!---->Buttons`;
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
        $$payload3.out += `<!---->Interactive Button Bilder`;
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
        innerClass: "flex flex-wrap gap-2",
        codeblock,
        children: ($$payload3) => {
          const each_array = ensure_array_like(btnColors);
          const each_array_1 = ensure_array_like(btnSizes);
          $$payload3.out += `<div class="h-16">`;
          Button($$payload3, {
            color: btnColor,
            class: btnClass,
            outline: btnOutline,
            shadow: btnShadow,
            pill: btnPill,
            disabled: btnDisabled,
            size: btnSize,
            href: btnLink ? btnLink : "",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Button`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="mb-4 flex flex-wrap space-x-2">`;
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
              name: "btn_color",
              get group() {
                return btnColor;
              },
              set group($$value) {
                btnColor = $$value;
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
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Size`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let sizeOption = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: "w-24 my-1",
              name: "btn_size",
              get group() {
                return btnSize;
              },
              set group($$value) {
                btnSize = $$value;
                $$settled = false;
              },
              value: sizeOption,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(sizeOption)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-40",
            color: "blue",
            onclick: changeBtnOutline,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(btnOutline === false ? "Add outline" : "Remove outline")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "green",
            onclick: changeBtnShadow,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(btnShadow === false ? "Add shadow" : "Remove shadow")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "yellow",
            onclick: changeBtnPill,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(btnPill === false ? "Add pill" : "Remove pill")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "red",
            onclick: changeBtnDisabled,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(btnDisabled === false ? "Add disabled" : "Remove disabled")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            onclick: changeBtnClass,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(btnClass === "" ? "Add class" : "Remove class")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "sky",
            onclick: changeBtnLink,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(btnLink === "" ? "Add link" : "Remove link")}`;
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
        $$payload3.out += `<!---->Interactive Gradient Button Builder`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        HighlightCompo($$payload3, { code: gradientGeneratedCode });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          const each_array_2 = ensure_array_like(gradientColors);
          const each_array_3 = ensure_array_like(gradientSizes);
          $$payload3.out += `<div class="h-16">`;
          GradientButton($$payload3, {
            outline: gradientOutline,
            shadow: gradientShadow,
            pill: graidentPill,
            class: gradientClass,
            disabled: gradientDisabled,
            color: gradientColor,
            size: gradientSize,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(capitalizeFirstLetter(gradientColor))}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Color`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let colorOption = each_array_2[$$index_2];
            Radio($$payload3, {
              labelClass: "w-32 my-1",
              name: "gradient_color",
              get group() {
                return gradientColor;
              },
              set group($$value) {
                gradientColor = $$value;
                $$settled = false;
              },
              value: colorOption,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(colorOption)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Size`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
            let sizeOption = each_array_3[$$index_3];
            Radio($$payload3, {
              labelClass: "w-24 my-1",
              name: "gradient_size",
              get group() {
                return gradientSize;
              },
              set group($$value) {
                gradientSize = $$value;
                $$settled = false;
              },
              value: sizeOption,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(sizeOption)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-40",
            color: "blue",
            onclick: changeGradientOutline,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(gradientOutline === false ? "Add outline" : "Remove outline")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "green",
            onclick: changeGradientShadow,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(gradientShadow === false ? "Add shadow" : "Remove shadow")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "yellow",
            onclick: changeGradientPill,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(graidentPill === false ? "Add pill" : "Remove pill")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "red",
            onclick: changeGradientDisabled,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(gradientDisabled === false ? "Add disabled" : "Remove disabled")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            onclick: changeGradientClass,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(gradientClass === "" ? "Add class" : "Remove class")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "sky",
            onclick: changeGradientLink,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(btnLink === "" ? "Add link" : "Remove link")}`;
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
          const each_array_4 = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-12 flex flex-wrap">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Example`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
            let style = each_array_4[$$index_4];
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
