import { a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, t as template_effect, a as pop, c as child, r as reset, b as get, d as derived, f as first_child, n as next, s as sibling, a6 as state, u as user_effect, a7 as set } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { p as prop, r as rest_props, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { a as set_attributes, aX as blockquote, N as CloseButton, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { I as Input } from "../chunks/index.CCICtSX3.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { P } from "../chunks/P.CbSbQedY.js";
import { Q as QuoteSolid } from "../chunks/QuoteSolid.fe7j2M1q.js";
import { R as Rating } from "../chunks/Rating.BFtXGQ16.js";
var root$5 = template(`<blockquote><!></blockquote>`);
function Blockquote($$anchor, $$props) {
  push($$props, true);
  let italic = prop($$props, "italic", 3, true), alignment = prop($$props, "alignment", 3, "left"), size = prop($$props, "size", 3, "lg"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "class",
    "border",
    "italic",
    "bg",
    "alignment",
    "size"
  ]);
  let blockquoteClass = derived(() => blockquote({
    border: $$props.border,
    italic: italic(),
    bg: $$props.bg,
    alignment: alignment(),
    size: size(),
    className: $$props.class
  }));
  var blockquote_1 = root$5();
  let attributes;
  var node = child(blockquote_1);
  snippet(node, () => $$props.children);
  reset(blockquote_1);
  template_effect(() => attributes = set_attributes(blockquote_1, attributes, {
    ...restProps,
    class: get(blockquoteClass)
  }));
  append($$anchor, blockquote_1);
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Blockquote, P } from "$lib";\n<\/script>\n\n<P class="mb-3" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>\n<div class="grid grid-cols-1 md:grid-cols-2 md:gap-6">\n  <P class="mb-3" color="text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>\n  <Blockquote class="mb-3" size="xl">" Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application. "</Blockquote>\n</div>\n<P class="mb-3" color="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Blockquote } from "$lib";\n<\/script>\n\n<Blockquote size="xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Blockquote } from "$lib";\n  import { QuoteSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<Blockquote size="xl">\n  <QuoteSolid class="h-10 w-10 text-gray-400 dark:text-gray-600" />\n  "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."\n</Blockquote>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Blockquote, Rating } from "$lib";\n<\/script>\n\n<figure class="max-w-screen-md">\n  <div class="mb-4 flex items-center text-yellow-300">\n    <Rating total={5} rating={4.66} size={24} />\n  </div>\n  <Blockquote italic={false} size="2xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>\n  <figcaption class="mt-6 flex items-center space-x-3 rtl:space-x-reverse">\n    <img class="h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green profile" />\n    <div class="flex items-center divide-x-2 divide-gray-300 rtl:divide-x-reverse dark:divide-gray-700">\n      <cite class="pe-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite>\n      <cite class="ps-3 text-sm font-light text-gray-500 dark:text-gray-400">CTO at Flowbite</cite>\n    </div>\n  </figcaption>\n</figure>\n';
const __vite_glob_0_4 = '<script>\n  import { Blockquote, P } from "svelte-5-ui-lib";\n<\/script>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { Blockquote, P } from "$lib";\n<\/script>\n\n<P color="text-gray-500 dark:text-gray-400">Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live.</P>\n<Blockquote border bg class="my-4 p-4">\n  <P size="xl" height="relaxed">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</P>\n</Blockquote>\n<P color="text-gray-500 dark:text-gray-400">First of all you need to understand how Flowbite works. This library is not another framework. Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the documentation.</P>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { Blockquote } from "$lib";\n  import { QuoteSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<figure class="mx-auto max-w-screen-md text-center">\n  <QuoteSolid class="mx-auto mb-3 h-12 w-12 text-gray-400 dark:text-gray-600" />\n  <Blockquote alignment="center" size="2xl">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</Blockquote>\n  <figcaption class="mt-6 flex items-center justify-center space-x-3 rtl:space-x-reverse">\n    <img class="h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Micheal Gough profile" />\n    <div class="flex items-center divide-x-2 divide-gray-500 rtl:divide-x-reverse dark:divide-gray-700">\n      <cite class="pe-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite>\n      <cite class="ps-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</cite>\n    </div>\n  </figcaption>\n</figure>\n';
var root$4 = template(`<!> <div class="grid grid-cols-1 md:grid-cols-2 md:gap-6"><!> <!></div> <!>`, 1);
function Context($$anchor) {
  var fragment = root$4();
  var node = first_child(fragment);
  P(node, {
    class: "mb-3",
    color: "text-gray-500 dark:text-gray-400",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var div = sibling(node, 2);
  var node_1 = child(div);
  P(node_1, {
    class: "mb-3",
    color: "text-gray-500 dark:text-gray-400",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  Blockquote(node_2, {
    class: "mb-3",
    size: "xl",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text('" Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application. "');
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  reset(div);
  var node_3 = sibling(div, 2);
  P(node_3, {
    class: "mb-3",
    color: "text-gray-500 dark:text-gray-400",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_3 = text("Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.");
      append($$anchor2, text_3);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
}
function Default($$anchor) {
  Blockquote($$anchor, {
    size: "xl",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text('"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."');
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
}
var root_1 = template(`<!> "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."`, 1);
function Icon($$anchor) {
  Blockquote($$anchor, {
    size: "xl",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1();
      var node = first_child(fragment_1);
      QuoteSolid(node, {
        class: "h-10 w-10 text-gray-400 dark:text-gray-600"
      });
      next();
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root$3 = template(`<figure class="max-w-screen-md"><div class="mb-4 flex items-center text-yellow-300"><!></div> <!> <figcaption class="mt-6 flex items-center space-x-3 rtl:space-x-reverse"><img class="h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Green profile"> <div class="flex items-center divide-x-2 divide-gray-300 rtl:divide-x-reverse dark:divide-gray-700"><cite class="pe-3 font-medium text-gray-900 dark:text-white">Bonnie Green</cite> <cite class="ps-3 text-sm font-light text-gray-500 dark:text-gray-400">CTO at Flowbite</cite></div></figcaption></figure>`);
function Review($$anchor) {
  var figure = root$3();
  var div = child(figure);
  var node = child(div);
  Rating(node, { total: 5, rating: 4.66, size: 24 });
  reset(div);
  var node_1 = sibling(div, 2);
  Blockquote(node_1, {
    italic: false,
    size: "2xl",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text('"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."');
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  next(2);
  reset(figure);
  append($$anchor, figure);
}
var root$2 = template(`<!> <!> <!>`, 1);
function Solid($$anchor) {
  var fragment = root$2();
  var node = first_child(fragment);
  P(node, {
    color: "text-gray-500 dark:text-gray-400",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Does your user know how to exit out of screens? Can they follow your intended user journey and buy something from the site you’ve designed? By running a usability test, you’ll be able to see how users will interact with your design once it’s live.");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Blockquote(node_1, {
    border: true,
    bg: true,
    class: "my-4 p-4",
    children: ($$anchor2, $$slotProps) => {
      P($$anchor2, {
        size: "xl",
        height: "relaxed",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_1 = text('"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."');
          append($$anchor3, text_1);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  P(node_2, {
    color: "text-gray-500 dark:text-gray-400",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("First of all you need to understand how Flowbite works. This library is not another framework. Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the documentation.");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
}
var root$1 = template(`<figure class="mx-auto max-w-screen-md text-center"><!> <!> <figcaption class="mt-6 flex items-center justify-center space-x-3 rtl:space-x-reverse"><img class="h-6 w-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="Micheal Gough profile"> <div class="flex items-center divide-x-2 divide-gray-500 rtl:divide-x-reverse dark:divide-gray-700"><cite class="pe-3 font-medium text-gray-900 dark:text-white">Micheal Gough</cite> <cite class="ps-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</cite></div></figcaption></figure>`);
function Testimonial($$anchor) {
  var figure = root$1();
  var node = child(figure);
  QuoteSolid(node, {
    class: "mx-auto mb-3 h-12 w-12 text-gray-400 dark:text-gray-600"
  });
  var node_1 = sibling(node, 2);
  Blockquote(node_1, {
    alignment: "center",
    size: "2xl",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text('"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."');
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  next(2);
  reset(figure);
  append($$anchor, figure);
}
var root_5 = template(`<!> <div class="mb-4 h-[300px] overflow-y-auto md:h-[250px]"><!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start"><!> <!> <!> <!></div>`, 1);
var root_20 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
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
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  let text$1 = prop($$props, "text", 15, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas commodi accusamus dignissimos qui totam iste rem necessitatibus? Cumque minus et animi nostrum deserunt provident excepturi laboriosam ipsum minima nisi!");
  const sizes = Object.keys(blockquote.variants.size);
  let selectedSize = state("lg");
  const alignments = Object.keys(blockquote.variants.alignment);
  let selectedAlignment = state("left");
  let border = state(false);
  const changeBorder = () => {
    set(border, !get(border));
  };
  let italic = state(false);
  const changeItalic = () => {
    set(italic, !get(italic));
  };
  let bg = state(false);
  const changeBg = () => {
    set(bg, !get(bg));
  };
  let blockClass = state("p-8");
  const changeClass = () => {
    set(blockClass, proxy(get(blockClass) === "p-8" ? "p-4" : "p-8"));
  };
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(bg)) props.push(" bg");
    if (get(border)) props.push(" border");
    if (get(italic)) props.push(" italic");
    if (get(selectedAlignment) !== "left") props.push(` alignment="${get(selectedAlignment)}"`);
    if (get(blockClass)) props.push(` class="${get(blockClass)}"`);
    if (get(selectedSize) !== "lg") props.push(` size="${get(selectedSize)}"`);
    const propsString = props.length > 0 ? props.map((prop2) => `
  ${prop2}`).join("") + "\n" : "";
    return `<Blockquote${propsString}>
  ${text$1()}
</Blockquote>`;
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
      var text_1 = text("Blockquote");
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
      var text_3 = text("Interactive Blockquote Bilder");
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
        {
          const right = ($$anchor3) => {
            CloseButton($$anchor3, { onclick: () => text$1("") });
          };
          Input(node_5, {
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
        var div = sibling(node_5, 2);
        var node_6 = child(div);
        Blockquote(node_6, {
          get border() {
            return get(border);
          },
          get italic() {
            return get(italic);
          },
          get size() {
            return get(selectedSize);
          },
          get bg() {
            return get(bg);
          },
          get alignment() {
            return get(selectedAlignment);
          },
          get class() {
            return get(blockClass);
          },
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_4 = text();
            template_effect(() => set_text(text_4, text$1()));
            append($$anchor3, text_4);
          },
          $$slots: { default: true }
        });
        reset(div);
        var div_1 = sibling(div, 2);
        var node_7 = child(div_1);
        Label(node_7, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_5 = text("Size");
            append($$anchor3, text_5);
          },
          $$slots: { default: true }
        });
        var node_8 = sibling(node_7, 2);
        each(node_8, 17, () => sizes, index, ($$anchor3, size) => {
          Radio($$anchor3, {
            labelClass: "w-16 my-1",
            name: "block_size",
            get group() {
              return get(selectedSize);
            },
            set group($$value) {
              set(selectedSize, proxy($$value));
            },
            get value() {
              return get(size);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_6 = text();
              template_effect(() => set_text(text_6, get(size)));
              append($$anchor4, text_6);
            },
            $$slots: { default: true }
          });
        });
        reset(div_1);
        var div_2 = sibling(div_1, 2);
        var node_9 = child(div_2);
        Label(node_9, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_7 = text("Alignment");
            append($$anchor3, text_7);
          },
          $$slots: { default: true }
        });
        var node_10 = sibling(node_9, 2);
        each(node_10, 17, () => alignments, index, ($$anchor3, alignment) => {
          Radio($$anchor3, {
            labelClass: "w-16 my-1",
            name: "block_alignment",
            get group() {
              return get(selectedAlignment);
            },
            set group($$value) {
              set(selectedAlignment, proxy($$value));
            },
            get value() {
              return get(alignment);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_8 = text();
              template_effect(() => set_text(text_8, get(alignment)));
              append($$anchor4, text_8);
            },
            $$slots: { default: true }
          });
        });
        reset(div_2);
        var div_3 = sibling(div_2, 2);
        var node_11 = child(div_3);
        Button(node_11, {
          class: "w-40",
          color: "blue",
          onclick: changeBorder,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text();
            template_effect(() => set_text(text_9, get(border) ? "Remove border" : "Add border"));
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        var node_12 = sibling(node_11, 2);
        Button(node_12, {
          class: "w-40",
          color: "rose",
          onclick: changeItalic,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_10 = text();
            template_effect(() => set_text(text_10, get(italic) ? "Remove italic" : "Add italic"));
            append($$anchor3, text_10);
          },
          $$slots: { default: true }
        });
        var node_13 = sibling(node_12, 2);
        Button(node_13, {
          class: "w-40",
          color: "indigo",
          onclick: changeBg,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_11 = text();
            template_effect(() => set_text(text_11, get(bg) ? "Remove bg" : "Add bg"));
            append($$anchor3, text_11);
          },
          $$slots: { default: true }
        });
        var node_14 = sibling(node_13, 2);
        Button(node_14, {
          class: "w-40",
          color: "sky",
          onclick: changeClass,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_12 = text();
            template_effect(() => set_text(text_12, get(blockClass) === "p-8" ? "class: p-4" : "class: p-8"));
            append($$anchor3, text_12);
          },
          $$slots: { default: true }
        });
        reset(div_3);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_15 = sibling(node_4, 2);
  H2(node_15, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_13 = text("Examples");
      append($$anchor2, text_13);
    },
    $$slots: { default: true }
  });
  var node_16 = sibling(node_15, 2);
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
    CodeWrapper(node_16, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_14 = root_20();
        var div_4 = first_child(fragment_14);
        var node_17 = child(div_4);
        Label(node_17, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_14 = text("Example");
            append($$anchor3, text_14);
          },
          $$slots: { default: true }
        });
        var node_18 = sibling(node_17, 2);
        each(node_18, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
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
              var text_15 = text();
              template_effect(() => set_text(text_15, get(style).name));
              append($$anchor4, text_15);
            },
            $$slots: { default: true }
          });
        });
        reset(div_4);
        var node_19 = sibling(div_4, 2);
        component(node_19, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_14);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_20 = sibling(node_16, 2);
  H2(node_20, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_16 = text("Component data");
      append($$anchor2, text_16);
    },
    $$slots: { default: true }
  });
  var node_21 = sibling(node_20, 2);
  CompoAttributesViewer(node_21, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
