import { a3 as copy_payload, a4 as assign_payload, V as escape_html, a2 as bind_props, S as pop, Q as push, Y as ensure_array_like } from "../../../../chunks/index.js";
import { ad as anchor } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { C as CloseButton } from "../../../../chunks/CloseButton.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { I as Input } from "../../../../chunks/index5.js";
import { A } from "../../../../chunks/A.js";
import { A as ArrowRightOutline } from "../../../../chunks/ArrowRightOutline.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { C as Card } from "../../../../chunks/Card.js";
import { T as Toggle } from "../../../../chunks/Toggle.js";
const __vite_glob_0_0 = '<script lang="ts">\n  import { Button } from "$lib";\n<\/script>\n\n<Button href="/">Read more</Button>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Card } from "$lib";\n<\/script>\n\n<Card href="/">\n  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>\n  <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>\n</Card>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Card, Toggle, Button } from "$lib";\n  import { ArrowRightOutline } from "flowbite-svelte-icons";\n  let vCard = $state(false);\n<\/script>\n\n<div class="flex flex-col space-y-4">\n  <Card img={{ src: "/images/image-1.webp", alt: "my image" }} reverse={vCard}>\n    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions</h5>\n    <p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order.</p>\n    <Button>\n      Read more <ArrowRightOutline class="ms-2 h-3.5 w-3.5 text-white" />\n    </Button>\n  </Card>\n  <Toggle bind:checked={vCard} spanClass="italic dark:text-gray-500">Reverse: {vCard}</Toggle>\n</div>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { A } from "$lib";\n  import { ArrowRightOutline } from "flowbite-svelte-icons";\n  import Figma from "../../../utils/icons/Figma.svelte";\n<\/script>\n\n<A href="/" class="inline-flex items-center justify-center rounded-lg bg-gray-50 p-5 text-base font-medium hover:bg-gray-100 hover:text-gray-900 hover:no-underline dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">\n  <Figma />\n  <span class="ms-3 w-full">Get started with our Figma Design System</span>\n  <ArrowRightOutline class="ms-2 h-6 w-6" />\n</A>\n';
const __vite_glob_0_4 = '<script>\n  import { A } from "svelte-5-ui-lib";\n  import { ArrowRightOutline } from "flowbite-svelte-icons";\n<\/script>\n';
function ButtonLink($$payload) {
  Button($$payload, {
    href: "/",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Read more`;
    },
    $$slots: { default: true }
  });
}
function CardLink($$payload) {
  Card($$payload, {
    href: "/",
    children: ($$payload2) => {
      $$payload2.out += `<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5> <p class="font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>`;
    },
    $$slots: { default: true }
  });
}
function CardWithImage($$payload) {
  let vCard = false;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="flex flex-col space-y-4">`;
    Card($$payload2, {
      img: { src: "/images/image-1.webp", alt: "my image" },
      reverse: vCard,
      children: ($$payload3) => {
        $$payload3.out += `<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions</h5> <p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of so far, in reverse chronological order.</p> `;
        Button($$payload3, {
          children: ($$payload4) => {
            $$payload4.out += `<!---->Read more `;
            ArrowRightOutline($$payload4, { class: "ms-2 h-3.5 w-3.5 text-white" });
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Toggle($$payload2, {
      get checked() {
        return vCard;
      },
      set checked($$value) {
        vCard = $$value;
        $$settled = false;
      },
      spanClass: "italic dark:text-gray-500",
      children: ($$payload3) => {
        $$payload3.out += `<!---->Reverse: ${escape_html(vCard)}`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}
function Figma($$payload) {
  $$payload.out += `<svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_18_290731)"><path d="M4.38242 24.8955C6.80071 24.8955 8.76338 23.1035 8.76338 20.8955V16.8955H4.38242C1.96413 16.8955 0.00146484 18.6875 0.00146484 20.8955C0.00146484 23.1035 1.96413 24.8955 4.38242 24.8955Z" fill="#0ACF83"></path><path d="M0.00146484 12.8955C0.00146484 10.6875 1.96413 8.89551 4.38242 8.89551H8.76338V16.8955H4.38242C1.96413 16.8955 0.00146484 15.1035 0.00146484 12.8955Z" fill="#A259FF"></path><path d="M0.00195312 4.89551C0.00195312 2.68751 1.96462 0.895508 4.38291 0.895508H8.76387V8.8955H4.38291C1.96462 8.8955 0.00195312 7.1035 0.00195312 4.89551Z" fill="#F24E1E"></path><path d="M8.76367 0.895508H13.1446C15.5629 0.895508 17.5256 2.68751 17.5256 4.89551C17.5256 7.1035 15.5629 8.8955 13.1446 8.8955H8.76367V0.895508Z" fill="#FF7262"></path><path d="M17.5256 12.8955C17.5256 15.1035 15.5629 16.8955 13.1446 16.8955C10.7263 16.8955 8.76367 15.1035 8.76367 12.8955C8.76367 10.6875 10.7263 8.89551 13.1446 8.89551C15.5629 8.89551 17.5256 10.6875 17.5256 12.8955Z" fill="#1ABCFE"></path></g><defs><clipPath id="clip0_18_290731"><rect width="17.5273" height="24" fill="white" transform="translate(0 0.895508)"></rect></clipPath></defs></svg>`;
}
function CtaLink($$payload) {
  A($$payload, {
    href: "/",
    class: "inline-flex items-center justify-center rounded-lg bg-gray-50 p-5 text-base font-medium hover:bg-gray-100 hover:text-gray-900 hover:no-underline dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white",
    children: ($$payload2) => {
      Figma($$payload2);
      $$payload2.out += `<!----> <span class="ms-3 w-full">Get started with our Figma Design System</span> `;
      ArrowRightOutline($$payload2, { class: "ms-2 h-6 w-6" });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function _page($$payload, $$props) {
  push();
  let { text = "Read more" } = $$props;
  const dirName = "typography/anchor";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/ButtonLink.svelte": __vite_glob_0_0,
    "./examples/CardLink.svelte": __vite_glob_0_1,
    "./examples/CardWithImage.svelte": __vite_glob_0_2,
    "./examples/CtaLink.svelte": __vite_glob_0_3,
    "./examples/Setup.svelte": __vite_glob_0_4
  });
  const exampleArr = [
    {
      name: "Button link",
      component: ButtonLink
    },
    {
      name: "Cta link",
      component: CtaLink
    },
    {
      name: "Card link",
      component: CardLink
    },
    {
      name: "Card with image",
      component: CardWithImage
    }
  ];
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  const colors = Object.keys(anchor.variants.color);
  let anchorColor = "primary";
  let linkClass = "font-medium hover:underline";
  const changeLinkClass = () => {
    linkClass = linkClass === "font-medium hover:underline" ? "underline hover:no-underline italic font-semibold" : "font-medium hover:underline";
  };
  let linkIcon = false;
  const changeIcon = () => {
    linkIcon = !linkIcon;
  };
  let generatedCode = (() => {
    let props = [];
    let iconSlot;
    props.push(` href="/"`);
    if (anchorColor !== "primary") props.push(` color="${anchorColor}"`);
    if (linkClass) props.push(` class="${linkClass}"`);
    iconSlot = linkIcon ? `
  <ArrowRightOutline class="ms-2 h-6 w-6" />` : "";
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<A${propsString}>
  ${text} ${iconSlot}
</A>`;
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
        $$payload3.out += `<!---->Links`;
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
        $$payload3.out += `<!---->Interactive Link Builder`;
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
          Label($$payload3, {
            class: "text-md mb-2",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Edit link`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          {
            let right = function($$payload4) {
              CloseButton($$payload4, { onclick: () => text = "" });
            };
            Input($$payload3, {
              type: "text",
              get value() {
                return text;
              },
              set value($$value) {
                text = $$value;
                $$settled = false;
              },
              placeholder: "Write your blockquote text",
              class: "mb-4 pr-12",
              right,
              $$slots: { right: true }
            });
          }
          $$payload3.out += `<!----> <div class="mb-4 md:h-10">`;
          A($$payload3, {
            href: "/",
            color: anchorColor,
            class: linkClass,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(text)} `;
              if (linkIcon) {
                $$payload4.out += "<!--[-->";
                ArrowRightOutline($$payload4, { class: "ms-2 h-6 w-6" });
              } else {
                $$payload4.out += "<!--[!-->";
              }
              $$payload4.out += `<!--]-->`;
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
              name: "anchor_color",
              get group() {
                return anchorColor;
              },
              set group($$value) {
                anchorColor = $$value;
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
            class: "w-36",
            color: "blue",
            onclick: changeLinkClass,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(linkClass === "font-medium hover:underline" ? "Change class" : "Remove class")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-36",
            color: "pink",
            onclick: changeIcon,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(linkIcon ? "Remove icon" : "Add icon")}`;
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
          const each_array_1 = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-8 flex flex-wrap">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Example`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let style = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: "w-36 my-1",
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
  bind_props($$props, { text });
  pop();
}
export {
  _page as default
};
