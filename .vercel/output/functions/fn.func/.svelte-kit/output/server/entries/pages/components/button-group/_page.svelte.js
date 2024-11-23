import { a3 as copy_payload, a4 as assign_payload, S as pop, Q as push, Y as ensure_array_like, V as escape_html } from "../../../../chunks/index.js";
import { m as buttonGroup, k as button } from "../../../../chunks/theme.js";
import { B as ButtonGroup } from "../../../../chunks/ButtonGroup.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { A as AdjustmentsVerticalSolid } from "../../../../chunks/AdjustmentsVerticalSolid.js";
import { D as DownloadSolid } from "../../../../chunks/DownloadSolid.js";
import { U as UserCircleSolid } from "../../../../chunks/UserCircleSolid.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { G as GradientButton } from "../../../../chunks/GradientButton.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { ButtonGroup, GradientButton } from "$lib";\n<\/script>\n\n<ButtonGroup class="space-x-px">\n  <GradientButton color="purpleToBlue">Profile</GradientButton>\n  <GradientButton color="cyanToBlue">Settings</GradientButton>\n  <GradientButton color="greenToBlue">Messages</GradientButton>\n</ButtonGroup>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { ButtonGroup, GradientButton } from "$lib";\n<\/script>\n\n<ButtonGroup class="space-x-px">\n  <GradientButton pill color="purpleToBlue">Profile</GradientButton>\n  <GradientButton pill color="cyanToBlue">Settings</GradientButton>\n  <GradientButton pill color="greenToBlue">Messages</GradientButton>\n</ButtonGroup>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { ButtonGroup, Button } from "$lib";\n  const handleClick = () => {\n    alert("Clicked");\n  };\n<\/script>\n\n<ButtonGroup>\n  <Button onclick={handleClick}>Click me</Button>\n  <Button>Settings</Button>\n  <Button>Messages</Button>\n</ButtonGroup>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { ButtonGroup, GradientButton } from "$lib";\n<\/script>\n\n<ButtonGroup>\n  <GradientButton shadow color="green">Profile</GradientButton>\n  <GradientButton shadow color="pink">Settings</GradientButton>\n  <GradientButton shadow color="teal">Messages</GradientButton>\n</ButtonGroup>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { ButtonGroup, Button } from "$lib";\n<\/script>\n\n<ButtonGroup>\n  <Button outline color="red">Profile</Button>\n  <Button outline color="green">Settings</Button>\n  <Button outline color="yellow">Messages</Button>\n</ButtonGroup>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { ButtonGroup, Button } from "$lib";\n<\/script>\n\n<ButtonGroup class="space-x-px">\n  <Button pill color="purple">Profile</Button>\n  <Button pill color="purple">Settings</Button>\n  <Button pill color="purple">Messages</Button>\n</ButtonGroup>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { ButtonGroup, Button, GradientButton } from "$lib";\n  import { UserCircleSolid, AdjustmentsVerticalSolid, DownloadSolid } from "flowbite-svelte-icons";\n<\/script>\n';
const __vite_glob_0_7 = '<script lang="ts">\n  import { ButtonGroup, Button } from "$lib";\n<\/script>\n\n<ButtonGroup>\n  <Button color="red">Profile</Button>\n  <Button color="green">Settings</Button>\n  <Button color="yellow">Messages</Button>\n</ButtonGroup>\n';
function DualtoneGradient($$payload) {
  ButtonGroup($$payload, {
    class: "space-x-px",
    children: ($$payload2) => {
      GradientButton($$payload2, {
        color: "purpleToBlue",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Profile`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      GradientButton($$payload2, {
        color: "cyanToBlue",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Settings`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      GradientButton($$payload2, {
        color: "greenToBlue",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Messages`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function DualtoneGradientPill($$payload) {
  ButtonGroup($$payload, {
    class: "space-x-px",
    children: ($$payload2) => {
      GradientButton($$payload2, {
        pill: true,
        color: "purpleToBlue",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Profile`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      GradientButton($$payload2, {
        pill: true,
        color: "cyanToBlue",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Settings`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      GradientButton($$payload2, {
        pill: true,
        color: "greenToBlue",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Messages`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function Events($$payload) {
  const handleClick = () => {
    alert("Clicked");
  };
  ButtonGroup($$payload, {
    children: ($$payload2) => {
      Button($$payload2, {
        onclick: handleClick,
        children: ($$payload3) => {
          $$payload3.out += `<!---->Click me`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->Settings`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->Messages`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function GradientShadow($$payload) {
  ButtonGroup($$payload, {
    children: ($$payload2) => {
      GradientButton($$payload2, {
        shadow: true,
        color: "green",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Profile`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      GradientButton($$payload2, {
        shadow: true,
        color: "pink",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Settings`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      GradientButton($$payload2, {
        shadow: true,
        color: "teal",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Messages`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function OutlineButtons($$payload) {
  ButtonGroup($$payload, {
    children: ($$payload2) => {
      Button($$payload2, {
        outline: true,
        color: "red",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Profile`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        outline: true,
        color: "green",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Settings`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        outline: true,
        color: "yellow",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Messages`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function PillButtons($$payload) {
  ButtonGroup($$payload, {
    class: "space-x-px",
    children: ($$payload2) => {
      Button($$payload2, {
        pill: true,
        color: "purple",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Profile`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        pill: true,
        color: "purple",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Settings`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        pill: true,
        color: "purple",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Messages`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function StandardButtons($$payload) {
  ButtonGroup($$payload, {
    children: ($$payload2) => {
      Button($$payload2, {
        color: "red",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Profile`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        color: "green",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Settings`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        color: "yellow",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Messages`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function _page($$payload, $$props) {
  push();
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
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  const sizes = Object.keys(buttonGroup.variants.size);
  let size = "md";
  const colors = Object.keys(button.variants.color);
  let color = "primary";
  let link = "";
  const changeLink = () => {
    link = link === "" ? "/" : "";
  };
  let icon = false;
  const changeIcon = () => {
    icon = !icon;
  };
  let outline = false;
  const changeOutline = () => {
    outline = !outline;
  };
  let buttonGroupClass = "";
  const changeClass = () => {
    buttonGroupClass = buttonGroupClass === "" ? "ml-4" : "";
  };
  let generatedCode = (() => {
    let props = [];
    let btnProps = [];
    let icon1 = icon ? '<UserCircleSolid class="me-2 h-4 w-4" />' : "";
    let icon2 = icon ? '<AdjustmentsVerticalSolid class="me-2 h-4 w-4" />' : "";
    let icon3 = icon ? '<DownloadSolid class="me-2 h-4 w-4" />' : "";
    if (size !== "md") props.push(` size="${size}"`);
    if (buttonGroupClass !== "") props.push(` class="${buttonGroupClass}"`);
    if (link) btnProps.push(` href="${link}"`);
    if (color !== "primary") btnProps.push(` color="${color}"`);
    if (outline) btnProps.push(" outline");
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<ButtonGroup${propsString}>
  <Button${btnProps}>${icon1}Profile</Button>
  <Button${btnProps}>${icon2}Settings</Button>
  <Button${btnProps}>${icon3}Messages</Button>
</ButtonGroup>`;
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
        $$payload3.out += `<!---->Button group`;
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
        $$payload3.out += `<!---->Interactive Button-group Builder`;
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
          const each_array_1 = ensure_array_like(colors);
          $$payload3.out += `<div class="flex h-16 items-center justify-center">`;
          ButtonGroup($$payload3, {
            size,
            class: buttonGroupClass,
            children: ($$payload4) => {
              Button($$payload4, {
                color,
                href: link,
                outline,
                children: ($$payload5) => {
                  if (icon) {
                    $$payload5.out += "<!--[-->";
                    UserCircleSolid($$payload5, { class: "me-2 h-4 w-4" });
                  } else {
                    $$payload5.out += "<!--[!-->";
                  }
                  $$payload5.out += `<!--]-->Profile`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Button($$payload4, {
                color,
                href: link,
                outline,
                children: ($$payload5) => {
                  if (icon) {
                    $$payload5.out += "<!--[-->";
                    AdjustmentsVerticalSolid($$payload5, { class: "me-2 h-4 w-4" });
                  } else {
                    $$payload5.out += "<!--[!-->";
                  }
                  $$payload5.out += `<!--]-->Settings`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Button($$payload4, {
                color,
                href: link,
                outline,
                children: ($$payload5) => {
                  if (icon) {
                    $$payload5.out += "<!--[-->";
                    DownloadSolid($$payload5, { class: "me-2 h-4 w-4" });
                  } else {
                    $$payload5.out += "<!--[!-->";
                  }
                  $$payload5.out += `<!--]-->Messages`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
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
            let sizeOption = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-24 my-1",
              name: "size",
              get group() {
                return size;
              },
              set group($$value) {
                size = $$value;
                $$settled = false;
              },
              value: sizeOption,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(sizeOption)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Color`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let colorOption = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: "w-24 my-1",
              name: "color",
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
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-40",
            onclick: changeClass,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(buttonGroupClass ? "Remove class" : "Add class")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "secondary",
            onclick: changeLink,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(link === "" ? "Add link" : "Remove link")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "red",
            onclick: changeIcon,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(icon ? "Remove icon" : "Add icon")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "violet",
            onclick: changeOutline,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(outline ? "Remove outline" : "Add outline")}`;
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
          $$payload3.out += `<div class="mb-8 flex flex-wrap">`;
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
              labelClass: "w-[230px] my-1",
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
