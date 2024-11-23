import { a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, c as child, r as reset, t as template_effect, a as pop, n as next, s as sibling, f as first_child, a6 as state, u as user_effect, b as get, a7 as set, d as derived } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { r as rest_props, b as proxy, p as prop, c as component } from "../chunks/props.B7eOu8hW.js";
import { a as set_attributes, t as twMerge, bc as mark, bd as secondary, B as Badge, N as CloseButton, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { I as Input } from "../chunks/index.CCICtSX3.js";
import { a as Heading, H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { B as Breadcrumb, a as BreadcrumbItem } from "../chunks/BreadcrumbItem.B7Fco-nU.js";
import { P } from "../chunks/P.CbSbQedY.js";
import { A as ArrowRightOutline } from "../chunks/ArrowRightOutline.C1f8PGpf.js";
import { S as Span } from "../chunks/Span.DbQTChO8.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { A } from "../chunks/A.XuSt3J-W.js";
import { C as ChevronRightOutline } from "../chunks/ChevronRightOutline.D-4U2W9t.js";
var root$8 = template(`<mark><!></mark>`);
function Mark($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "class"
  ]);
  var mark_1 = root$8();
  let attributes;
  var node = child(mark_1);
  snippet(node, () => $$props.children);
  reset(mark_1);
  template_effect(() => attributes = set_attributes(mark_1, attributes, {
    ...restProps,
    class: twMerge(mark(), $$props.class)
  }));
  append($$anchor, mark_1);
  pop();
}
var root$7 = template(`<small><!></small>`);
function Secondary($$anchor, $$props) {
  push($$props, true);
  let restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "class"
  ]);
  var small = root$7();
  let attributes;
  var node = child(small);
  snippet(node, () => $$props.children);
  reset(small);
  template_effect(() => attributes = set_attributes(small, attributes, {
    ...restProps,
    class: twMerge(secondary(), $$props.class)
  }));
  append($$anchor, small);
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
var root_1$6 = template(`Flowbite <!>`, 1);
function Badge_1($$anchor) {
  Heading($$anchor, {
    tag: "h1",
    class: "flex items-center text-5xl",
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment_1 = root_1$6();
      var node = sibling(first_child(fragment_1));
      Badge(node, {
        class: "ms-2 text-2xl font-semibold",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("PRO");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_1$5 = template(`<!> <!> <!>`, 1);
function Breadcrumb_1($$anchor) {
  Breadcrumb($$anchor, {
    class: "mb-4",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$5();
      var node = first_child(fragment_1);
      BreadcrumbItem(node, {
        href: "/",
        home: true,
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("Home");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      var node_1 = sibling(node, 2);
      BreadcrumbItem(node_1, {
        href: "/",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_1 = text("Settings");
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
      var node_2 = sibling(node_1, 2);
      BreadcrumbItem(node_2, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_2 = text("Team");
          append($$anchor3, text_2);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_3 = template(`Learn more <!>`, 1);
var root$6 = template(`<!> <!> <!>`, 1);
function Default($$anchor) {
  var fragment = root$6();
  var node = first_child(fragment);
  Heading(node, {
    tag: "h1",
    class: "mb-4 text-4xl font-extrabold  md:text-5xl lg:text-6xl",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("We invest in the world’s potential");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  P(node_1, {
    class: "mb-6 text-lg sm:px-16 lg:text-xl xl:px-48 dark:text-gray-400",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  Button(node_2, {
    href: "/",
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment_1 = root_3();
      var node_3 = sibling(first_child(fragment_1));
      ArrowRightOutline(node_3, { class: "ms-2 h-5 w-5" });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
}
var root_1$4 = template(`<!> Scalable AI.`, 1);
var root$5 = template(`<!> <!>`, 1);
function Gradient($$anchor) {
  var fragment = root$5();
  var node = first_child(fragment);
  Heading(node, {
    tag: "h1",
    class: "mb-4 text-3xl font-extrabold  md:text-5xl lg:text-6xl",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$4();
      var node_1 = first_child(fragment_1);
      Span(node_1, {
        gradient: "amberToEmerald",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("Better Data");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      next();
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node, 2);
  P(node_2, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
}
var root_1$3 = template(`Get back to growth with <!> CRM.`, 1);
var root$4 = template(`<!> <!>`, 1);
function Highlighted($$anchor) {
  var fragment = root$4();
  var node = first_child(fragment);
  Heading(node, {
    tag: "h1",
    class: "mb-4",
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment_1 = root_1$3();
      var node_1 = sibling(first_child(fragment_1));
      Span(node_1, {
        highlight: "blue",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("the world's #1");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      next();
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node, 2);
  P(node_2, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
}
var root_1$2 = template(`Regain <!> over your days`, 1);
var root$3 = template(`<!> <!>`, 1);
function Mark_1($$anchor) {
  var fragment = root$3();
  var node = first_child(fragment);
  Heading(node, {
    tag: "h1",
    class: "mb-4",
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment_1 = root_1$2();
      var node_1 = sibling(first_child(fragment_1));
      Mark(node_1, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("control");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      next();
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node, 2);
  P(node_2, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
}
var root_1$1 = template(`Flowbite <!>`, 1);
function Secondary_1($$anchor) {
  Heading($$anchor, {
    tag: "h1",
    class: "text-5xl font-extrabold",
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment_1 = root_1$1();
      var node = sibling(first_child(fragment_1));
      Secondary(node, {
        class: "ms-2",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("This is secondary text");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_4 = template(`Read more <!>`, 1);
var root$2 = template(`<!> <!> <!> <!>`, 1);
function SecondLevel($$anchor) {
  var fragment = root$2();
  var node = first_child(fragment);
  Heading(node, {
    tag: "h2",
    class: "text-4xl font-extrabold ",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Payments tool for companies");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  P(node_1, {
    class: "my-4 text-gray-500",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  P(node_2, {
    class: "mb-4",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_3 = sibling(node_2, 2);
  A(node_3, {
    href: "/",
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment_1 = root_4();
      var node_4 = sibling(first_child(fragment_1));
      ChevronRightOutline(node_4, { class: "ms-2 h-5 w-5" });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
}
var root_1 = template(`We invest in the <!>`, 1);
var root$1 = template(`<!> <!>`, 1);
function Underline($$anchor) {
  var fragment = root$1();
  var node = first_child(fragment);
  Heading(node, {
    tag: "h1",
    class: "mb-4",
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment_1 = root_1();
      var node_1 = sibling(first_child(fragment_1));
      Span(node_1, {
        underline: true,
        class: "decoration-blue-400 decoration-8 dark:decoration-blue-600",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text$1 = text("world’s potential");
          append($$anchor3, text$1);
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node, 2);
  P(node_2, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
}
var root_5 = template(`<!> <!> <div class="h-24"><!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!></div>`, 1);
var root_15 = template(`<div class="mb-8 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
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
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  const tags = ["h1", "h2", "h3", "h4", "h5", "h6"];
  let headingTag = state("h1");
  let headingCls = state("text-primary-700 dark:text-primary-500");
  const changeHeadingCls = () => {
    set(headingCls, proxy(get(headingCls) === "text-primary-700 dark:text-primary-500" ? "text-blue-500 dark:text-blue-400 uppercase italic underline text-center font-semibold bg-gray-50 dark:bg-gray-700 p-4" : "text-primary-700 dark:text-primary-500"));
  };
  let text$1 = prop($$props, "text", 15, "My heading");
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(headingTag)) props.push(` tag="${get(headingTag)}"`);
    if (get(headingCls)) props.push(` class="${get(headingCls)}"`);
    const propsString = props.length > 0 ? props.map((prop2) => `
  ${prop2}`).join("") + "\n" : "";
    return `<Heading${propsString}>
  ${text$1()}
</Headin>`;
  })());
  let codeBlock = uiHelpers();
  let expand = state(false);
  let showExpandButton = derived(() => isSvelteOverflow(get(svelteCode), exampleModules));
  const handleExpandClick = () => {
    set(expand, !get(expand));
  };
  user_effect(() => {
    set(expand, proxy(codeBlock.isOpen));
  });
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Heading & Mark");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  H2(node_1, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Setup");
      append($$anchor2, text_2);
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
      var text_3 = text("Sizes");
      append($$anchor2, text_3);
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
          class: "text-md mb-2",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_4 = text("Edit heading");
            append($$anchor3, text_4);
          },
          $$slots: { default: true }
        });
        var node_6 = sibling(node_5, 2);
        {
          const right = ($$anchor3) => {
            CloseButton($$anchor3, { onclick: () => text$1("") });
          };
          Input(node_6, {
            type: "text",
            get value() {
              return text$1();
            },
            set value($$value) {
              text$1($$value);
            },
            placeholder: "Write your blockquote text",
            class: "mb-8 pr-12",
            right,
            $$slots: { right: true }
          });
        }
        var div = sibling(node_6, 2);
        var node_7 = child(div);
        Heading(node_7, {
          get tag() {
            return get(headingTag);
          },
          get class() {
            return get(headingCls);
          },
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_5 = text();
            template_effect(() => set_text(text_5, text$1()));
            append($$anchor3, text_5);
          },
          $$slots: { default: true }
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var node_8 = child(div_1);
        Label(node_8, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_6 = text("Rounded");
            append($$anchor3, text_6);
          },
          $$slots: { default: true }
        });
        var node_9 = sibling(node_8, 2);
        each(node_9, 17, () => tags, index, ($$anchor3, tag) => {
          Radio($$anchor3, {
            labelClass: "w-12 my-1",
            name: "tag",
            get group() {
              return get(headingTag);
            },
            set group($$value) {
              set(headingTag, proxy($$value));
            },
            get value() {
              return get(tag);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_7 = text();
              template_effect(() => set_text(text_7, get(tag)));
              append($$anchor4, text_7);
            },
            $$slots: { default: true }
          });
        });
        reset(div_1);
        var div_2 = sibling(div_1, 2);
        var node_10 = child(div_2);
        Button(node_10, {
          class: "w-40",
          color: "blue",
          onclick: changeHeadingCls,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_8 = text();
            template_effect(() => set_text(text_8, get(headingCls) !== "text-primary-700 dark:text-primary-500" ? "Original class" : "Change class"));
            append($$anchor3, text_8);
          },
          $$slots: { default: true }
        });
        reset(div_2);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_11 = sibling(node_4, 2);
  H2(node_11, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_9 = text("Examples");
      append($$anchor2, text_9);
    },
    $$slots: { default: true }
  });
  var node_12 = sibling(node_11, 2);
  {
    const codeblock = ($$anchor2) => {
      DynamicCodeBlockHighlight($$anchor2, {
        replaceLib: true,
        handleExpandClick,
        get expand() {
          return get(expand);
        },
        get showExpandButton() {
          return get(showExpandButton);
        },
        get code() {
          return exampleModules[`./examples/${get(svelteCode)}`];
        }
      });
    };
    CodeWrapper(node_12, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_9 = root_15();
        var div_3 = first_child(fragment_9);
        var node_13 = child(div_3);
        Label(node_13, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_10 = text("Example");
            append($$anchor3, text_10);
          },
          $$slots: { default: true }
        });
        var node_14 = sibling(node_13, 2);
        each(node_14, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-28 my-1",
            onclick: () => set(expand, false),
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
              var text_11 = text();
              template_effect(() => set_text(text_11, get(style).name));
              append($$anchor4, text_11);
            },
            $$slots: { default: true }
          });
        });
        reset(div_3);
        var node_15 = sibling(div_3, 2);
        component(node_15, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_9);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_16 = sibling(node_12, 2);
  H2(node_16, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_12 = text("Component data");
      append($$anchor2, text_12);
    },
    $$slots: { default: true }
  });
  var node_17 = sibling(node_16, 2);
  CompoAttributesViewer(node_17, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
