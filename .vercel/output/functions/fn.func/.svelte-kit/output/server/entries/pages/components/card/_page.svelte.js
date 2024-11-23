import { a3 as copy_payload, a4 as assign_payload, S as pop, Q as push, Y as ensure_array_like, V as escape_html, X as stringify } from "../../../../chunks/index.js";
import { n as card } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { C as Card } from "../../../../chunks/Card.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { T as Toggle } from "../../../../chunks/Toggle.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { A as ArrowRightOutline } from "../../../../chunks/ArrowRightOutline.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { Card, Button } from "$lib";\n<\/script>\n\n<div class="flex justify-center">\n  <Card class="text-center" size="lg" padding="xl">\n    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5>\n    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.</p>\n    <div class="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0 rtl:space-x-reverse">\n      <Button>Download it</Button>\n      <Button>Get it on</Button>\n    </div>\n  </Card>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Card, Button } from "$lib";\n  import { ArrowRightOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="flex justify-center">\n  <Card>\n    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions</h5>\n    <p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order.</p>\n    <Button class="w-fit">\n      Read more <ArrowRightOutline class="ms-2 h-3.5 w-3.5 text-white" />\n    </Button>\n  </Card>\n</div>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Card } from "$lib";\n<\/script>\n\n<div class="flex justify-center">\n  <Card class="max-w-[250px]">\n    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Technology acquisitions</h5>\n    <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions.</p>\n  </Card>\n</div>\n';
const __vite_glob_0_3 = '<script>\n  import { Card } from "svelte-5-ui-lib";\n<\/script>\n';
function CallToActionCard($$payload) {
  $$payload.out += `<div class="flex justify-center">`;
  Card($$payload, {
    class: "text-center",
    size: "lg",
    padding: "xl",
    children: ($$payload2) => {
      $$payload2.out += `<h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5> <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with Flowbite on iOS &amp; Android. Download the app today.</p> <div class="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0 rtl:space-x-reverse">`;
      Button($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->Download it`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->Get it on`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function CardWithActionButton($$payload) {
  $$payload.out += `<div class="flex justify-center">`;
  Card($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions</h5> <p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order.</p> `;
      Button($$payload2, {
        class: "w-fit",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Read more `;
          ArrowRightOutline($$payload3, { class: "ms-2 h-3.5 w-3.5 text-white" });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function CustomSize($$payload) {
  $$payload.out += `<div class="flex justify-center">`;
  Card($$payload, {
    class: "max-w-[250px]",
    children: ($$payload2) => {
      $$payload2.out += `<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Technology acquisitions</h5> <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions.</p>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function _page($$payload, $$props) {
  push();
  const dirName = "card";
  let reverse = false;
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/CallToActionCard.svelte": __vite_glob_0_0,
    "./examples/CardWithActionButton.svelte": __vite_glob_0_1,
    "./examples/CustomSize.svelte": __vite_glob_0_2,
    "./examples/Setup.svelte": __vite_glob_0_3
  });
  const exampleArr = [
    {
      name: "Custom size",
      component: CustomSize
    },
    {
      name: "Call to action card",
      component: CallToActionCard
    },
    {
      name: "Card with action button",
      component: CardWithActionButton
    }
  ];
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  const sizes = Object.keys(card.variants.size);
  let cardSize = "sm";
  const colors = Object.keys(card.variants.color);
  let color = "gray";
  const paddings = Object.keys(card.variants.padding);
  let cardPadding = "lg";
  const shadows = Object.keys(card.variants.shadow);
  let cardShadow = "md";
  let horizontal = false;
  const changeImgLayout = () => {
    horizontal = !horizontal;
  };
  let link = "";
  const changeLink = () => {
    link = link === "" ? "/" : "";
  };
  let cardClass = "";
  const changeClass = () => {
    cardClass = cardClass === "" ? "pl-10" : "";
  };
  let cardImage = {};
  const changeImage = () => {
    cardImage = Object.keys(cardImage).length === 0 ? { src: "/images/image-1.webp", alt: "my image" } : {};
  };
  let generatedCode = (() => {
    let props = [];
    if (cardSize !== "sm") props.push(` size="${cardSize}"`);
    if (color !== "gray") props.push(` color="${color}"`);
    if (cardShadow !== "md") props.push(` shadow="${cardShadow}"`);
    if (cardClass) props.push(` class="${cardClass}"`);
    if (cardPadding !== "lg") props.push(` padding="${cardPadding}"`);
    if (link) props.push(` href="${link}"`);
    if (horizontal) props.push(` horizontal`);
    if (reverse) props.push(` reverse`);
    if (Object.keys(cardImage).length > 0) {
      const imgString = Object.entries(cardImage).map(([key, value]) => `${key}:"${value}"`).join(",");
      props.push(` img={{${imgString}}}`);
    }
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Card${propsString}>My Card</Card>`;
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
        $$payload3.out += `<!---->Cards`;
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
        $$payload3.out += `<!---->Interactive Card Builder`;
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
          const each_array_2 = ensure_array_like(paddings);
          const each_array_3 = ensure_array_like(shadows);
          $$payload3.out += `<div class="flex justify-center">`;
          Card($$payload3, {
            size: cardSize,
            color,
            padding: cardPadding,
            shadow: cardShadow,
            href: link ? link : "",
            class: cardClass,
            img: cardImage,
            horizontal,
            reverse,
            children: ($$payload4) => {
              $$payload4.out += `<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions</h5> <p class="font-normal leading-tight text-gray-700 dark:text-gray-300">Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order.</p>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="my-4 flex flex-wrap space-x-4">`;
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
              labelClass: "w-16 my-1",
              name: "interactive_card_size",
              get group() {
                return cardSize;
              },
              set group($$value) {
                cardSize = $$value;
                $$settled = false;
              },
              value: size,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(size)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap space-x-2">`;
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
          $$payload3.out += `<!--]--></div> <div class="my-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Padding`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let padding = each_array_2[$$index_2];
            Radio($$payload3, {
              labelClass: "w-16 my-1",
              name: "interactive_card_padding",
              get group() {
                return cardPadding;
              },
              set group($$value) {
                cardPadding = $$value;
                $$settled = false;
              },
              value: padding,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(padding)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="my-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Shadow`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
            let shadow = each_array_3[$$index_3];
            Radio($$payload3, {
              labelClass: "w-16 my-1",
              name: "interactive_card_shadow",
              get group() {
                return cardShadow;
              },
              set group($$value) {
                cardShadow = $$value;
                $$settled = false;
              },
              value: shadow,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(shadow)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-40",
            color: "sky",
            onclick: changeLink,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(link === "" ? "Add link" : "Remove link")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "green",
            onclick: changeClass,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(cardClass ? "Remove class" : "Add class")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "blue",
            onclick: changeImage,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(Object.keys(cardImage).length === 0 ? "Add image" : "Remove image")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            disabled: Object.keys(cardImage).length === 0,
            class: "w-40",
            color: "violet",
            onclick: changeImgLayout,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(horizontal ? "Vertical" : "Horizontal")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Toggle($$payload3, {
            get checked() {
              return reverse;
            },
            set checked($$value) {
              reverse = $$value;
              $$settled = false;
            },
            labelClass: `italic dark:text-gray-500 ${stringify(Object.keys(cardImage).length === 0 ? "opacity-50 cursor-not-allowed" : "")}`,
            disabled: Object.keys(cardImage).length === 0,
            children: ($$payload4) => {
              $$payload4.out += `<!---->Reverse: ${escape_html(reverse)}`;
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
              labelClass: "w-48 my-1",
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
