import { Q as push, a0 as spread_attributes, S as pop, a3 as copy_payload, a4 as assign_payload, a2 as bind_props, Y as ensure_array_like, V as escape_html } from "../../../../chunks/index.js";
import { aT as blockquote } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { C as CloseButton } from "../../../../chunks/CloseButton.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { I as Input } from "../../../../chunks/index5.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { P } from "../../../../chunks/P.js";
import { Q as QuoteSolid } from "../../../../chunks/QuoteSolid.js";
import { R as Rating } from "../../../../chunks/Rating.js";
function Blockquote($$payload, $$props) {
  push();
  let {
    children,
    class: className,
    border,
    italic = true,
    bg,
    alignment = "left",
    size = "lg",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let blockquoteClass = blockquote({
    border,
    italic,
    bg,
    alignment,
    size,
    className
  });
  $$payload.out += `<blockquote${spread_attributes({ ...restProps, class: blockquoteClass })}>`;
  children($$payload);
  $$payload.out += `<!----></blockquote>`;
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Blockquote, P } from "$lib";\n<\/script>\n\n<P class="mb-3" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>\n<div class="grid grid-cols-1 md:grid-cols-2 md:gap-6">\n  <P class="mb-3" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>\n  <Blockquote class="mb-3" size="xl">" Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application. "</Blockquote>\n</div>\n<P class="mb-3" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Blockquote } from "$lib";\n<\/script>\n\n<Blockquote size="xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Blockquote } from "$lib";\n  import { QuoteSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<Blockquote size="xl">\n  <QuoteSolid class="h-10 w-10 text-gray-400 dark:text-gray-600" />\n  "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."\n</Blockquote>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Blockquote, Rating } from "$lib";\n<\/script>\n\n<figure class="max-w-screen-md">\n  <div class="mb-4 flex items-center text-yellow-300">\n    <Rating total={5} rating={4.66} size={24} />\n  </div>\n  <Blockquote italic={false} size="2xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>\n  <figcaption class="mt-6 flex items-center space-x-3 rtl:space-x-reverse">\n    <img class="h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green profile" />\n    <div class="flex items-center divide-x-2 divide-gray-300 rtl:divide-x-reverse dark:divide-gray-700">\n      <cite class="pe-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>\n      <cite class="ps-3 text-sm font-light text-gray-500 dark:text-gray-400">CTO at Flowbite</cite>\n    </div>\n  </figcaption>\n</figure>\n';
const __vite_glob_0_4 = '<script>\n  import { Blockquote, P } from "svelte-5-ui-lib";\n<\/script>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { Blockquote, P } from "$lib";\n<\/script>\n\n<P color="text-gray-500 dark:text-gray-400">Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live.</P>\n<Blockquote border bg class="my-4 p-4">\n  <P size="xl" height="relaxed">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</P>\n</Blockquote>\n<P color="text-gray-500 dark:text-gray-400">First of all you need to understand how Flowbite works. This library is not another framework. Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the documentation.</P>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { Blockquote } from "$lib";\n  import { QuoteSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<figure class="mx-auto max-w-screen-md text-center">\n  <QuoteSolid class="mx-auto mb-3 h-12 w-12 text-gray-400 dark:text-gray-600" />\n  <Blockquote alignment="center" size="2xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>\n  <figcaption class="mt-6 flex items-center justify-center space-x-3 rtl:space-x-reverse">\n    <img class="h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Micheal Gough profile" />\n    <div class="flex items-center divide-x-2 divide-gray-500 rtl:divide-x-reverse dark:divide-gray-700">\n      <cite class="pe-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>\n      <cite class="ps-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</cite>\n    </div>\n  </figcaption>\n</figure>\n';
function Context($$payload) {
  P($$payload, {
    class: "mb-3",
    color: "text-gray-500 dark:text-gray-400",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="grid grid-cols-1 md:grid-cols-2 md:gap-6">`;
  P($$payload, {
    class: "mb-3",
    color: "text-gray-500 dark:text-gray-400",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Blockquote($$payload, {
    class: "mb-3",
    size: "xl",
    children: ($$payload2) => {
      $$payload2.out += `<!---->" Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application. "`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  P($$payload, {
    class: "mb-3",
    color: "text-gray-500 dark:text-gray-400",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function Default($$payload) {
  Blockquote($$payload, {
    size: "xl",
    children: ($$payload2) => {
      $$payload2.out += `<!---->"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."`;
    },
    $$slots: { default: true }
  });
}
function Icon($$payload) {
  Blockquote($$payload, {
    size: "xl",
    children: ($$payload2) => {
      QuoteSolid($$payload2, {
        class: "h-10 w-10 text-gray-400 dark:text-gray-600"
      });
      $$payload2.out += `<!----> "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."`;
    },
    $$slots: { default: true }
  });
}
function Review($$payload) {
  $$payload.out += `<figure class="max-w-screen-md"><div class="mb-4 flex items-center text-yellow-300">`;
  Rating($$payload, { total: 5, rating: 4.66, size: 24 });
  $$payload.out += `<!----></div> `;
  Blockquote($$payload, {
    italic: false,
    size: "2xl",
    children: ($$payload2) => {
      $$payload2.out += `<!---->"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <figcaption class="mt-6 flex items-center space-x-3 rtl:space-x-reverse"><img class="h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green profile"> <div class="flex items-center divide-x-2 divide-gray-300 rtl:divide-x-reverse dark:divide-gray-700"><cite class="pe-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite> <cite class="ps-3 text-sm font-light text-gray-500 dark:text-gray-400">CTO at Flowbite</cite></div></figcaption></figure>`;
}
function Solid($$payload) {
  P($$payload, {
    color: "text-gray-500 dark:text-gray-400",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Blockquote($$payload, {
    border: true,
    bg: true,
    class: "my-4 p-4",
    children: ($$payload2) => {
      P($$payload2, {
        size: "xl",
        height: "relaxed",
        children: ($$payload3) => {
          $$payload3.out += `<!---->"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  P($$payload, {
    color: "text-gray-500 dark:text-gray-400",
    children: ($$payload2) => {
      $$payload2.out += `<!---->First of all you need to understand how Flowbite works. This library is not another framework. Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the documentation.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function Testimonial($$payload) {
  $$payload.out += `<figure class="mx-auto max-w-screen-md text-center">`;
  QuoteSolid($$payload, {
    class: "mx-auto mb-3 h-12 w-12 text-gray-400 dark:text-gray-600"
  });
  $$payload.out += `<!----> `;
  Blockquote($$payload, {
    alignment: "center",
    size: "2xl",
    children: ($$payload2) => {
      $$payload2.out += `<!---->"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <figcaption class="mt-6 flex items-center justify-center space-x-3 rtl:space-x-reverse"><img class="h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Micheal Gough profile"> <div class="flex items-center divide-x-2 divide-gray-500 rtl:divide-x-reverse dark:divide-gray-700"><cite class="pe-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite> <cite class="ps-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</cite></div></figcaption></figure>`;
}
function _page($$payload, $$props) {
  push();
  const dirName = "typography/blockquote";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Context.svelte": __vite_glob_0_0,
    "./examples/Default.svelte": __vite_glob_0_1,
    "./examples/Icon.svelte": __vite_glob_0_2,
    "./examples/Review.svelte": __vite_glob_0_3,
    "./examples/Setup.svelte": __vite_glob_0_4,
    "./examples/Solid.svelte": __vite_glob_0_5,
    "./examples/Testimonial.svelte": __vite_glob_0_6
  });
  const exampleArr = [
    {
      name: "Default",
      component: Default
    },
    {
      name: "Context",
      component: Context
    },
    {
      name: "Icon",
      component: Icon
    },
    {
      name: "Review",
      component: Review
    },
    {
      name: "Solid",
      component: Solid
    },
    {
      name: "Testimonial",
      component: Testimonial
    }
  ];
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  let {
    text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas commodi accusamus dignissimos qui totam iste rem necessitatibus? Cumque minus et animi nostrum deserunt provident excepturi laboriosam ipsum minima nisi!"
  } = $$props;
  const sizes = Object.keys(blockquote.variants.size);
  let selectedSize = "lg";
  const alignments = Object.keys(blockquote.variants.alignment);
  let selectedAlignment = "left";
  let border = false;
  const changeBorder = () => {
    border = !border;
  };
  let italic = false;
  const changeItalic = () => {
    italic = !italic;
  };
  let bg = false;
  const changeBg = () => {
    bg = !bg;
  };
  let blockClass = "p-8";
  const changeClass = () => {
    blockClass = blockClass === "p-8" ? "p-4" : "p-8";
  };
  let generatedCode = (() => {
    let props = [];
    if (bg) props.push(" bg");
    if (border) props.push(" border");
    if (italic) props.push(" italic");
    if (selectedAlignment !== "left") props.push(` alignment="${selectedAlignment}"`);
    if (blockClass) props.push(` class="${blockClass}"`);
    if (selectedSize !== "lg") props.push(` size="${selectedSize}"`);
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Blockquote${propsString}>
  ${text}
</Blockquote>`;
  })();
  let expand = false;
  let showExpandButton = isSvelteOverflow(svelteCode, exampleModules);
  const handleExpandClick = () => {
    expand = !expand;
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    H1($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Blockquote`;
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
        $$payload3.out += `<!---->Interactive Blockquote Bilder`;
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
          const each_array = ensure_array_like(sizes);
          const each_array_1 = ensure_array_like(alignments);
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
              class: "mb-8 pr-12",
              right,
              $$slots: { right: true }
            });
          }
          $$payload3.out += `<!----> <div class="mb-4 h-[300px] overflow-y-auto md:h-[250px]">`;
          Blockquote($$payload3, {
            border,
            italic,
            size: selectedSize,
            bg,
            alignment: selectedAlignment,
            class: blockClass,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(text)}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="mb-4 flex flex-wrap space-x-2">`;
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
              name: "block_size",
              get group() {
                return selectedSize;
              },
              set group($$value) {
                selectedSize = $$value;
                $$settled = false;
              },
              value: size,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(size)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Alignment`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let alignment = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: "w-16 my-1",
              name: "block_alignment",
              get group() {
                return selectedAlignment;
              },
              set group($$value) {
                selectedAlignment = $$value;
                $$settled = false;
              },
              value: alignment,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(alignment)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-40",
            color: "blue",
            onclick: changeBorder,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(border ? "Remove border" : "Add border")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "rose",
            onclick: changeItalic,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(italic ? "Remove italic" : "Add italic")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "indigo",
            onclick: changeBg,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(bg ? "Remove bg" : "Add bg")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "sky",
            onclick: changeClass,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(blockClass === "p-8" ? "class: p-4" : "class: p-8")}`;
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
          expand,
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
              labelClass: "w-24 my-1",
              onclick: () => expand = false,
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
