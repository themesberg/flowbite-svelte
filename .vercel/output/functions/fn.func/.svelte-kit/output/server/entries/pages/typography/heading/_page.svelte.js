import { Q as push, a0 as spread_attributes, S as pop, a3 as copy_payload, a4 as assign_payload, a2 as bind_props, Y as ensure_array_like, V as escape_html } from "../../../../chunks/index.js";
import { aU as mark, aV as secondary } from "../../../../chunks/theme.js";
import { a as Badge, B as Button } from "../../../../chunks/markdown.js";
import { C as CloseButton } from "../../../../chunks/CloseButton.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { I as Input } from "../../../../chunks/index5.js";
import { H as Heading, a as H1 } from "../../../../chunks/H1.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { B as Breadcrumb, a as BreadcrumbItem } from "../../../../chunks/BreadcrumbItem.js";
import { P } from "../../../../chunks/P.js";
import { A as ArrowRightOutline } from "../../../../chunks/ArrowRightOutline.js";
import { S as Span } from "../../../../chunks/Span.js";
import { twMerge } from "tailwind-merge";
import { A } from "../../../../chunks/A.js";
import { C as ChevronRightOutline } from "../../../../chunks/ChevronRightOutline.js";
function Mark($$payload, $$props) {
  push();
  let {
    children,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<mark${spread_attributes({
    ...restProps,
    class: twMerge(mark(), className)
  })}>`;
  children($$payload);
  $$payload.out += `<!----></mark>`;
  pop();
}
function Secondary($$payload, $$props) {
  push();
  let {
    children,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<small${spread_attributes({
    ...restProps,
    class: twMerge(secondary(), className)
  })}>`;
  children($$payload);
  $$payload.out += `<!----></small>`;
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Heading, Badge } from "$lib";\n<\/script>\n\n<Heading tag="h1" class="flex items-center text-5xl">\n  Flowbite <Badge class="ms-2 text-2xl font-semibold">PRO</Badge>\n</Heading>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Breadcrumb, BreadcrumbItem } from "$lib";\n<\/script>\n\n<Breadcrumb class="mb-4">\n  <BreadcrumbItem href="/" home>Home</BreadcrumbItem>\n  <BreadcrumbItem href="/">Settings</BreadcrumbItem>\n  <BreadcrumbItem>Team</BreadcrumbItem>\n</Breadcrumb>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Heading, P, Button } from "$lib";\n  import { ArrowRightOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<Heading tag="h1" class="mb-4 text-4xl font-extrabold  md:text-5xl lg:text-6xl">We invest in the world’s potential</Heading>\n<P class="mb-6 text-lg sm:px-16 lg:text-xl xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>\n<Button href="/">\n  Learn more\n  <ArrowRightOutline class="ms-2 h-5 w-5" />\n</Button>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Heading, P, Span } from "$lib";\n<\/script>\n\n<Heading tag="h1" class="mb-4 text-3xl font-extrabold  md:text-5xl lg:text-6xl">\n  <Span gradient="amberToEmerald">Better Data</Span> Scalable AI.\n</Heading>\n<P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>\n';
const __vite_glob_0_4 = `<script lang="ts">
  import { Heading, P, Span } from "$lib";
<\/script>

<Heading tag="h1" class="mb-4">Get back to growth with <Span highlight="blue">the world's #1</Span> CRM.</Heading>
<P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>
`;
const __vite_glob_0_5 = '<script lang="ts">\n  import { Heading, P, Mark } from "$lib";\n<\/script>\n\n<Heading tag="h1" class="mb-4">Regain <Mark>control</Mark> over your days</Heading>\n<P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { Heading, P, A } from "$lib";\n  import { ChevronRightOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<Heading tag="h2" class="text-4xl font-extrabold ">Payments tool for companies</Heading>\n<P class="my-4 text-gray-500">Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.</P>\n<P class="mb-4">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</P>\n<A href="/">Read more <ChevronRightOutline class="ms-2 h-5 w-5" /></A>\n';
const __vite_glob_0_7 = '<script lang="ts">\n  import { Heading, Secondary } from "$lib";\n<\/script>\n\n<Heading tag="h1" class="text-5xl font-extrabold">\n  Flowbite <Secondary class="ms-2">This is secondary text</Secondary>\n</Heading>\n';
const __vite_glob_0_8 = '<script>\n  import { Heading, Button, P, A, Span, Mark } from "svelte-5-ui-lib";\n<\/script>\n';
const __vite_glob_0_9 = '<script lang="ts">\n  import { Heading, P, Span } from "$lib";\n<\/script>\n\n<Heading tag="h1" class="mb-4">\n  We invest in the <Span underline class="decoration-blue-400 decoration-8 dark:decoration-blue-600">world’s potential</Span>\n</Heading>\n<P>Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</P>\n';
function Badge_1($$payload) {
  Heading($$payload, {
    tag: "h1",
    class: "flex items-center text-5xl",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Flowbite `;
      Badge($$payload2, {
        class: "ms-2 text-2xl font-semibold",
        children: ($$payload3) => {
          $$payload3.out += `<!---->PRO`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function Breadcrumb_1($$payload) {
  Breadcrumb($$payload, {
    class: "mb-4",
    children: ($$payload2) => {
      BreadcrumbItem($$payload2, {
        href: "/",
        home: true,
        children: ($$payload3) => {
          $$payload3.out += `<!---->Home`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BreadcrumbItem($$payload2, {
        href: "/",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Settings`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      BreadcrumbItem($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->Team`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function Default($$payload) {
  Heading($$payload, {
    tag: "h1",
    class: "mb-4 text-4xl font-extrabold  md:text-5xl lg:text-6xl",
    children: ($$payload2) => {
      $$payload2.out += `<!---->We invest in the world’s potential`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  P($$payload, {
    class: "mb-6 text-lg sm:px-16 lg:text-xl xl:px-48 dark:text-gray-400",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    href: "/",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Learn more `;
      ArrowRightOutline($$payload2, { class: "ms-2 h-5 w-5" });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function Gradient($$payload) {
  Heading($$payload, {
    tag: "h1",
    class: "mb-4 text-3xl font-extrabold  md:text-5xl lg:text-6xl",
    children: ($$payload2) => {
      Span($$payload2, {
        gradient: "amberToEmerald",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Better Data`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> Scalable AI.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  P($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function Highlighted($$payload) {
  Heading($$payload, {
    tag: "h1",
    class: "mb-4",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Get back to growth with `;
      Span($$payload2, {
        highlight: "blue",
        children: ($$payload3) => {
          $$payload3.out += `<!---->the world's #1`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> CRM.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  P($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function Mark_1($$payload) {
  Heading($$payload, {
    tag: "h1",
    class: "mb-4",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Regain `;
      Mark($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->control`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> over your days`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  P($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function Secondary_1($$payload) {
  Heading($$payload, {
    tag: "h1",
    class: "text-5xl font-extrabold",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Flowbite `;
      Secondary($$payload2, {
        class: "ms-2",
        children: ($$payload3) => {
          $$payload3.out += `<!---->This is secondary text`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function SecondLevel($$payload) {
  Heading($$payload, {
    tag: "h2",
    class: "text-4xl font-extrabold ",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Payments tool for companies`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  P($$payload, {
    class: "my-4 text-gray-500",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  P($$payload, {
    class: "mb-4",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  A($$payload, {
    href: "/",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Read more `;
      ChevronRightOutline($$payload2, { class: "ms-2 h-5 w-5" });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function Underline($$payload) {
  Heading($$payload, {
    tag: "h1",
    class: "mb-4",
    children: ($$payload2) => {
      $$payload2.out += `<!---->We invest in the `;
      Span($$payload2, {
        underline: true,
        class: "decoration-blue-400 decoration-8 dark:decoration-blue-600",
        children: ($$payload3) => {
          $$payload3.out += `<!---->world’s potential`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  P($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function _page($$payload, $$props) {
  push();
  const dirName = "typography/heading";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Badge.svelte": __vite_glob_0_0,
    "./examples/Breadcrumb.svelte": __vite_glob_0_1,
    "./examples/Default.svelte": __vite_glob_0_2,
    "./examples/Gradient.svelte": __vite_glob_0_3,
    "./examples/Highlighted.svelte": __vite_glob_0_4,
    "./examples/Mark.svelte": __vite_glob_0_5,
    "./examples/SecondLevel.svelte": __vite_glob_0_6,
    "./examples/Secondary.svelte": __vite_glob_0_7,
    "./examples/Setup.svelte": __vite_glob_0_8,
    "./examples/Underline.svelte": __vite_glob_0_9
  });
  const exampleArr = [
    {
      name: "Default",
      component: Default
    },
    {
      name: "Badge",
      component: Badge_1
    },
    {
      name: "Breadcrumb",
      component: Breadcrumb_1
    },
    {
      name: "Gradient",
      component: Gradient
    },
    {
      name: "Highlighted",
      component: Highlighted
    },
    {
      name: "Mark",
      component: Mark_1
    },
    {
      name: "Secondary",
      component: Secondary_1
    },
    {
      name: "Second level",
      component: SecondLevel
    },
    {
      name: "Underline",
      component: Underline
    }
  ];
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  const tags = ["h1", "h2", "h3", "h4", "h5", "h6"];
  let headingTag = "h1";
  let headingCls = "text-primary-700 dark:text-primary-500";
  const changeHeadingCls = () => {
    headingCls = headingCls === "text-primary-700 dark:text-primary-500" ? "text-blue-500 dark:text-blue-400 uppercase italic underline text-center font-semibold bg-gray-50 dark:bg-gray-700 p-4" : "text-primary-700 dark:text-primary-500";
  };
  let { text = "My heading" } = $$props;
  let generatedCode = (() => {
    let props = [];
    if (headingTag) props.push(` tag="${headingTag}"`);
    if (headingCls) props.push(` class="${headingCls}"`);
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Heading${propsString}>
  ${text}
</Headin>`;
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
        $$payload3.out += `<!---->Heading &amp; Mark`;
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
        $$payload3.out += `<!---->Sizes`;
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
          const each_array = ensure_array_like(tags);
          Label($$payload3, {
            class: "text-md mb-2",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Edit heading`;
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
              class: "mb-8 pr-12",
              right,
              $$slots: { right: true }
            });
          }
          $$payload3.out += `<!----> <div class="h-24">`;
          Heading($$payload3, {
            tag: headingTag,
            class: headingCls,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(text)}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Rounded`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let tag = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-12 my-1",
              name: "tag",
              get group() {
                return headingTag;
              },
              set group($$value) {
                headingTag = $$value;
                $$settled = false;
              },
              value: tag,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(tag)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-40",
            color: "blue",
            onclick: changeHeadingCls,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(headingCls !== "text-primary-700 dark:text-primary-500" ? "Original class" : "Change class")}`;
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
              labelClass: "w-28 my-1",
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
