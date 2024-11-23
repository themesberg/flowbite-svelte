import { a as append, n as ns_template, c as comment, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { p as push, g as getContext, c as child, r as reset, t as template_effect, s as sibling, n as next, a as pop, b as get, d as derived, f as first_child } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { p as prop, i as if_block, r as rest_props } from "../chunks/props.B7eOu8hW.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { s as set_attribute, a as set_attributes, t as twMerge } from "../chunks/theme.BtjZjf2R.js";
import { H as H1, a as Heading } from "../chunks/H1.DunGd_Oq.js";
import { L as List, a as Li } from "../chunks/Li.B0Fkn06d.js";
import { C as CheckCircleSolid } from "../chunks/CheckCircleSolid.D51Mv3aE.js";
import { Q as QuestionCircleSolid } from "../chunks/QuestionCircleSolid.B_6ngNl9.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
var root_1 = ns_template(`<title> </title>`);
var root_2 = ns_template(`<desc> </desc>`);
var root$1 = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"></path></svg>`);
function CloseCircleSolid($$anchor, $$props) {
  var _a, _b;
  push($$props, true);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "close circle solid"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "color",
    "title",
    "desc",
    "class",
    "ariaLabel"
  ]);
  let ariaDescribedby = `${((_a = $$props.title) == null ? void 0 : _a.id) || ""} ${((_b = $$props.desc) == null ? void 0 : _b.id) || ""}`;
  const hasDescription = derived(() => {
    var _a2, _b2;
    return !!(((_a2 = $$props.title) == null ? void 0 : _a2.id) || ((_b2 = $$props.desc) == null ? void 0 : _b2.id));
  });
  var svg = root$1();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1();
    var text2 = child(title_1, true);
    reset(title_1);
    template_effect(() => {
      set_attribute(title_1, "id", $$props.title.id);
      set_text(text2, $$props.title.title);
    });
    append($$anchor2, title_1);
  });
  var node_1 = sibling(node);
  if_block(node_1, () => {
    var _a2;
    return ((_a2 = $$props.desc) == null ? void 0 : _a2.id) && $$props.desc.desc;
  }, ($$anchor2) => {
    var desc_1 = root_2();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  next();
  reset(svg);
  template_effect(() => attributes = set_attributes(
    svg,
    attributes,
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color(),
      ...restProps,
      class: twMerge("shrink-0", sizes[size()], $$props.class),
      "aria-label": ariaLabel(),
      "aria-describedby": get(hasDescription) ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    true
  ));
  append($$anchor, svg);
  pop();
}
var root_3 = template(`<!> <!> <!> <!> <!>`, 1);
var root_11 = template(`<!> <!> <!> <!> <!>`, 1);
var root_19 = template(`<!> <!> <!> <!> <!>`, 1);
var root_34 = template(`<span class="ml-4 text-red-500"> </span>`);
var root_35 = template(`<span class="ml-4 text-green-500"> </span>`);
var root_29 = template(`<!> <a class="text-blue-800 underline hover:text-blue-500 dark:text-blue-300 hover:dark:text-blue-200"> </a> <!><!>`, 1);
var root_44 = template(`<span class="ml-4 text-red-500"> </span>`);
var root_45 = template(`<span class="ml-4 text-green-500"> </span>`);
var root_39 = template(`<!> <a class="text-blue-800 underline hover:text-blue-500 dark:text-blue-300 hover:dark:text-blue-200"> </a> <!><!>`, 1);
var root_54 = template(`<span class="ml-4 text-red-500"> </span>`);
var root_55 = template(`<span class="ml-4 text-green-500"> </span>`);
var root_49 = template(`<!> <a class="text-blue-800 underline hover:text-blue-500 dark:text-blue-300 hover:dark:text-blue-200"> </a> <!><!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor) {
  function convertStringToKebabCase(text2) {
    return text2.replace(/[A-Z]/g, (match) => "-" + match.toLowerCase());
  }
  const components = {
    accordion: {
      checked: true
      // notes: 'Variants'
    },
    alert: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    avatar: {
      checked: true
      // problems: 'Avatar tooltip',
    },
    badge: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    banner: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    bottomNavigation: {
      checked: true
      // problems: "Tooltip"
    },
    breadcrumb: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    buttonGroup: {
      checked: true
      // notes: 'Variants, reactive examples',
    },
    buttons: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    card: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    carousel: { checked: false },
    darkmode: {
      checked: true
      // problems: 'Switcher style'
    },
    deviceMockups: {
      checked: true
      // notes: 'Variants checked'
    },
    drawer: {
      checked: true
      // problems: 'Contact form, Form elements'
    },
    dropdown: {
      checked: true,
      problems: "apply floating-ui"
      //   'Sizes, Placement, Double placement, Events'
    },
    footer: {
      checked: true
      // notes: 'Variants checked'
    },
    gallery: {
      checked: true
      // notes: 'Variants checked'
    },
    indicators: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    kbd: {
      checked: true
      // notes: 'Varants checked'
    },
    listGroup: {
      checked: true
      // problems: 'Advanced',
    },
    megaMenu: { checked: true, problems: "apply floating-ui" },
    modal: { checked: true },
    navbar: {
      checked: true
      // problems: 'User menu dropdown'
    },
    pagination: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    popover: { checked: true, problems: "apply floating-ui" },
    progress: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    rating: { checked: true },
    sidebar: {
      checked: true
      // problems: 'add auto props to SidebarGroup to control SidebarDropdownWrapper open/close like accordion'
    },
    skeleton: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    spinner: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    speedDial: { checked: false, problems: "apply floating-ui" },
    table: {
      checked: true,
      problems: "Sorting by column, Click and double-click on row"
    },
    tabs: {
      checked: true
      // problems: 'Full width tabs, Components in tab contents'
    },
    timeline: {
      checked: true
      // notes: 'Variants checked'
    },
    toast: {
      checked: true,
      problems: "Icons, Autohide example"
      // notes: 'Variants, reactive examples'
    },
    tooltip: {
      checked: true
      // problems: "apply floating-ui"
    },
    video: {
      checked: true
      // notes: 'Variants, reactive examples'
    }
  };
  const forms = {
    checkbox: {
      checked: true
      // problems: 'Group variable',
    },
    fileInput: {
      checked: true,
      problems: "Dropzone example"
      // notes: 'Variants, reactive examples'
    },
    floatingLabel: {
      checked: true
      // problems:
    },
    inputField: {
      checked: true
      // problems: 'Advanced usage'
    },
    label: { checked: true },
    radio: {
      checked: true
      // problems: 'Radio in dropdown',
    },
    range: {
      checked: true
      // problems: 'Sizes - blob sizes',
    },
    searchInput: {
      checked: true
      // problems: 'Event example',
    },
    select: {
      checked: true,
      problems: "MultiSelect"
      // notes: 'Variants, reactive examples'
    },
    textarea: {
      checked: true
      // notes: 'Variants checked'
    },
    toggle: {
      checked: true
      // notes: 'Variants, reactive examples'
    }
  };
  const typography = {
    blockquote: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    heading: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    hr: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    image: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    layout: { checked: true },
    link: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    list: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    paragraph: {
      checked: true
      // problems: 'Paragraph popover',
    },
    span: {
      checked: true
      // problems: 'Opacity',
    }
  };
  function analyzeComponents(components2) {
    let total = 0;
    let pageChecked = 0;
    let pageUnchecked = 0;
    let pageWithProblems = 0;
    let pageWithoutProblems = 0;
    let exampleProblems = 0;
    for (const component in components2) {
      total += 1;
      pageChecked += components2[component].checked ? 1 : 0;
      pageUnchecked += !components2[component].checked ? 1 : 0;
      pageWithProblems += components2[component].problems ? 1 : 0;
      let numberOfProblemsForComponent = 0;
      if (components2[component].problems) {
        const problemsArray = components2[component].problems.split(/\s*,\s*/);
        numberOfProblemsForComponent = problemsArray.length;
      }
      exampleProblems += numberOfProblemsForComponent;
    }
    pageWithoutProblems = pageChecked - pageWithProblems;
    return {
      total,
      pageChecked,
      pageUnchecked,
      pageWithProblems,
      pageWithoutProblems,
      exampleProblems
    };
  }
  const componentsAnalysis = analyzeComponents(components);
  const formsAnalysis = analyzeComponents(forms);
  const typographyAnalysis = analyzeComponents(typography);
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Component and example checks");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  H2(node_1, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Components");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  List(node_2, {
    class: "space-y-1 text-gray-500 dark:text-gray-400",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_3();
      var node_3 = first_child(fragment_1);
      Li(node_3, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_3 = text();
          template_effect(() => set_text(text_3, `# of pages: ${componentsAnalysis.total ?? ""}`));
          append($$anchor3, text_3);
        },
        $$slots: { default: true }
      });
      var node_4 = sibling(node_3, 2);
      Li(node_4, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_4 = text();
          template_effect(() => set_text(text_4, `# of components/pages checked: ${componentsAnalysis.pageChecked ?? ""}`));
          append($$anchor3, text_4);
        },
        $$slots: { default: true }
      });
      var node_5 = sibling(node_4, 2);
      Li(node_5, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_5 = text();
          template_effect(() => set_text(text_5, `# of components/pages to be completed: ${componentsAnalysis.pageUnchecked ?? ""}`));
          append($$anchor3, text_5);
        },
        $$slots: { default: true }
      });
      var node_6 = sibling(node_5, 2);
      Li(node_6, {
        class: "text-green-500",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_6 = text();
          template_effect(() => set_text(text_6, `# of pages without problems: ${componentsAnalysis.pageWithoutProblems ?? ""}`));
          append($$anchor3, text_6);
        },
        $$slots: { default: true }
      });
      var node_7 = sibling(node_6, 2);
      if_block(node_7, () => componentsAnalysis.exampleProblems > 0, ($$anchor3) => {
        Li($$anchor3, {
          class: "text-red-500",
          children: ($$anchor4, $$slotProps2) => {
            next();
            var text_7 = text();
            template_effect(() => set_text(text_7, `# of examples to be completed: ${componentsAnalysis.exampleProblems ?? ""}`));
            append($$anchor4, text_7);
          },
          $$slots: { default: true }
        });
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  var node_8 = sibling(node_2, 2);
  H2(node_8, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_8 = text("Forms");
      append($$anchor2, text_8);
    },
    $$slots: { default: true }
  });
  var node_9 = sibling(node_8, 2);
  List(node_9, {
    class: "space-y-1 text-gray-500 dark:text-gray-400",
    children: ($$anchor2, $$slotProps) => {
      var fragment_8 = root_11();
      var node_10 = first_child(fragment_8);
      Li(node_10, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_9 = text();
          template_effect(() => set_text(text_9, `# of pages: ${formsAnalysis.total ?? ""}`));
          append($$anchor3, text_9);
        },
        $$slots: { default: true }
      });
      var node_11 = sibling(node_10, 2);
      Li(node_11, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_10 = text();
          template_effect(() => set_text(text_10, `# of components/pages checked: ${formsAnalysis.pageChecked ?? ""}`));
          append($$anchor3, text_10);
        },
        $$slots: { default: true }
      });
      var node_12 = sibling(node_11, 2);
      Li(node_12, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_11 = text();
          template_effect(() => set_text(text_11, `# of components/pages to be completed: ${formsAnalysis.pageUnchecked ?? ""}`));
          append($$anchor3, text_11);
        },
        $$slots: { default: true }
      });
      var node_13 = sibling(node_12, 2);
      Li(node_13, {
        class: "text-green-500",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_12 = text();
          template_effect(() => set_text(text_12, `# of pages without problems: ${formsAnalysis.pageWithoutProblems ?? ""}`));
          append($$anchor3, text_12);
        },
        $$slots: { default: true }
      });
      var node_14 = sibling(node_13, 2);
      if_block(node_14, () => formsAnalysis.exampleProblems > 0, ($$anchor3) => {
        Li($$anchor3, {
          class: "text-red-500",
          children: ($$anchor4, $$slotProps2) => {
            next();
            var text_13 = text();
            template_effect(() => set_text(text_13, `# of examples to be completed: ${formsAnalysis.exampleProblems ?? ""}`));
            append($$anchor4, text_13);
          },
          $$slots: { default: true }
        });
      });
      append($$anchor2, fragment_8);
    },
    $$slots: { default: true }
  });
  var node_15 = sibling(node_9, 2);
  H2(node_15, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_14 = text("Typography");
      append($$anchor2, text_14);
    },
    $$slots: { default: true }
  });
  var node_16 = sibling(node_15, 2);
  List(node_16, {
    class: "space-y-1 text-gray-500 dark:text-gray-400",
    children: ($$anchor2, $$slotProps) => {
      var fragment_15 = root_19();
      var node_17 = first_child(fragment_15);
      Li(node_17, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_15 = text();
          template_effect(() => set_text(text_15, `# of pages: ${typographyAnalysis.total ?? ""}`));
          append($$anchor3, text_15);
        },
        $$slots: { default: true }
      });
      var node_18 = sibling(node_17, 2);
      Li(node_18, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_16 = text();
          template_effect(() => set_text(text_16, `# of components/pages checked: ${typographyAnalysis.pageChecked ?? ""}`));
          append($$anchor3, text_16);
        },
        $$slots: { default: true }
      });
      var node_19 = sibling(node_18, 2);
      Li(node_19, {
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_17 = text();
          template_effect(() => set_text(text_17, `# of components/pages to be completed: ${typographyAnalysis.pageUnchecked ?? ""}`));
          append($$anchor3, text_17);
        },
        $$slots: { default: true }
      });
      var node_20 = sibling(node_19, 2);
      Li(node_20, {
        class: "text-green-500",
        children: ($$anchor3, $$slotProps2) => {
          next();
          var text_18 = text();
          template_effect(() => set_text(text_18, `# of pages without problems: ${typographyAnalysis.pageWithoutProblems ?? ""}`));
          append($$anchor3, text_18);
        },
        $$slots: { default: true }
      });
      var node_21 = sibling(node_20, 2);
      if_block(node_21, () => typographyAnalysis.exampleProblems > 0, ($$anchor3) => {
        Li($$anchor3, {
          class: "text-red-500",
          children: ($$anchor4, $$slotProps2) => {
            next();
            var text_19 = text();
            template_effect(() => set_text(text_19, `# of examples to be completed: ${typographyAnalysis.exampleProblems ?? ""}`));
            append($$anchor4, text_19);
          },
          $$slots: { default: true }
        });
      });
      append($$anchor2, fragment_15);
    },
    $$slots: { default: true }
  });
  var node_22 = sibling(node_16, 2);
  Heading(node_22, {
    tag: "h2",
    class: "mb-2 py-4 text-2xl font-semibold text-gray-900 dark:text-white",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_20 = text("Components");
      append($$anchor2, text_20);
    },
    $$slots: { default: true }
  });
  var node_23 = sibling(node_22, 2);
  List(node_23, {
    class: "space-y-1 text-gray-500 dark:text-gray-400",
    children: ($$anchor2, $$slotProps) => {
      var fragment_22 = comment();
      var node_24 = first_child(fragment_22);
      each(node_24, 1, () => Object.entries(components), index, ($$anchor3, $$item) => {
        let key = () => get($$item)[0];
        let checked = () => get($$item)[1].checked;
        let problems = () => get($$item)[1].problems;
        let notes = () => get($$item)[1].notes;
        Li($$anchor3, {
          icon: true,
          children: ($$anchor4, $$slotProps2) => {
            var fragment_24 = root_29();
            var node_25 = first_child(fragment_24);
            if_block(
              node_25,
              () => checked() && !problems(),
              ($$anchor5) => {
                CheckCircleSolid($$anchor5, {
                  class: "me-2 h-8 w-8 text-green-500 dark:text-green-400"
                });
              },
              ($$anchor5) => {
                var fragment_26 = comment();
                var node_26 = first_child(fragment_26);
                if_block(
                  node_26,
                  problems,
                  ($$anchor6) => {
                    CloseCircleSolid($$anchor6, {
                      class: "me-2 h-8 w-8 text-red-500 dark:text-red-400"
                    });
                  },
                  ($$anchor6) => {
                    QuestionCircleSolid($$anchor6, {
                      class: "me-2 h-8 w-8 text-gray-500 dark:text-gray-400"
                    });
                  },
                  true
                );
                append($$anchor5, fragment_26);
              }
            );
            var a = sibling(node_25, 2);
            template_effect(() => set_attribute(a, "href", `/components/${convertStringToKebabCase(key()) ?? ""}`));
            var text_21 = child(a, true);
            reset(a);
            var node_27 = sibling(a, 2);
            if_block(node_27, problems, ($$anchor5) => {
              var span = root_34();
              var text_22 = child(span);
              reset(span);
              template_effect(() => set_text(text_22, `( ${problems() ?? ""})`));
              append($$anchor5, span);
            });
            var node_28 = sibling(node_27);
            if_block(node_28, notes, ($$anchor5) => {
              var span_1 = root_35();
              var text_23 = child(span_1);
              reset(span_1);
              template_effect(() => set_text(text_23, `(DONE: ${notes() ?? ""})`));
              append($$anchor5, span_1);
            });
            template_effect(() => set_text(text_21, key()));
            append($$anchor4, fragment_24);
          },
          $$slots: { default: true }
        });
      });
      append($$anchor2, fragment_22);
    },
    $$slots: { default: true }
  });
  var node_29 = sibling(node_23, 2);
  Heading(node_29, {
    tag: "h2",
    class: "mb-2 py-4 text-2xl font-semibold text-gray-900 dark:text-white",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_24 = text("Forms");
      append($$anchor2, text_24);
    },
    $$slots: { default: true }
  });
  var node_30 = sibling(node_29, 2);
  List(node_30, {
    class: "space-y-1 text-gray-500 dark:text-gray-400",
    children: ($$anchor2, $$slotProps) => {
      var fragment_29 = comment();
      var node_31 = first_child(fragment_29);
      each(node_31, 1, () => Object.entries(forms), index, ($$anchor3, $$item) => {
        let key = () => get($$item)[0];
        let checked = () => get($$item)[1].checked;
        let problems = () => get($$item)[1].problems;
        let notes = () => get($$item)[1].notes;
        Li($$anchor3, {
          icon: true,
          children: ($$anchor4, $$slotProps2) => {
            var fragment_31 = root_39();
            var node_32 = first_child(fragment_31);
            if_block(
              node_32,
              () => checked() && !problems(),
              ($$anchor5) => {
                CheckCircleSolid($$anchor5, {
                  class: "me-2 h-8 w-8 text-green-500 dark:text-green-400"
                });
              },
              ($$anchor5) => {
                var fragment_33 = comment();
                var node_33 = first_child(fragment_33);
                if_block(
                  node_33,
                  problems,
                  ($$anchor6) => {
                    CloseCircleSolid($$anchor6, {
                      class: "me-2 h-8 w-8 text-red-500 dark:text-red-400"
                    });
                  },
                  ($$anchor6) => {
                    QuestionCircleSolid($$anchor6, {
                      class: "me-2 h-8 w-8 text-gray-500 dark:text-gray-400"
                    });
                  },
                  true
                );
                append($$anchor5, fragment_33);
              }
            );
            var a_1 = sibling(node_32, 2);
            template_effect(() => set_attribute(a_1, "href", `/forms/${convertStringToKebabCase(key()) ?? ""}`));
            var text_25 = child(a_1, true);
            reset(a_1);
            var node_34 = sibling(a_1, 2);
            if_block(node_34, problems, ($$anchor5) => {
              var span_2 = root_44();
              var text_26 = child(span_2);
              reset(span_2);
              template_effect(() => set_text(text_26, `( ${problems() ?? ""})`));
              append($$anchor5, span_2);
            });
            var node_35 = sibling(node_34);
            if_block(node_35, notes, ($$anchor5) => {
              var span_3 = root_45();
              var text_27 = child(span_3);
              reset(span_3);
              template_effect(() => set_text(text_27, `(DONE: ${notes() ?? ""})`));
              append($$anchor5, span_3);
            });
            template_effect(() => set_text(text_25, key()));
            append($$anchor4, fragment_31);
          },
          $$slots: { default: true }
        });
      });
      append($$anchor2, fragment_29);
    },
    $$slots: { default: true }
  });
  var node_36 = sibling(node_30, 2);
  Heading(node_36, {
    tag: "h2",
    class: "mb-2 py-4 text-2xl font-semibold text-gray-900 dark:text-white",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_28 = text("Typography");
      append($$anchor2, text_28);
    },
    $$slots: { default: true }
  });
  var node_37 = sibling(node_36, 2);
  List(node_37, {
    class: "space-y-1 text-gray-500 dark:text-gray-400",
    children: ($$anchor2, $$slotProps) => {
      var fragment_36 = comment();
      var node_38 = first_child(fragment_36);
      each(node_38, 1, () => Object.entries(typography), index, ($$anchor3, $$item) => {
        let key = () => get($$item)[0];
        let checked = () => get($$item)[1].checked;
        let problems = () => get($$item)[1].problems;
        let notes = () => get($$item)[1].notes;
        Li($$anchor3, {
          icon: true,
          children: ($$anchor4, $$slotProps2) => {
            var fragment_38 = root_49();
            var node_39 = first_child(fragment_38);
            if_block(
              node_39,
              () => checked() && !problems(),
              ($$anchor5) => {
                CheckCircleSolid($$anchor5, {
                  class: "me-2 h-8 w-8 text-green-500 dark:text-green-400"
                });
              },
              ($$anchor5) => {
                var fragment_40 = comment();
                var node_40 = first_child(fragment_40);
                if_block(
                  node_40,
                  problems,
                  ($$anchor6) => {
                    CloseCircleSolid($$anchor6, {
                      class: "me-2 h-8 w-8 text-red-500 dark:text-red-400"
                    });
                  },
                  ($$anchor6) => {
                    QuestionCircleSolid($$anchor6, {
                      class: "me-2 h-8 w-8 text-gray-500 dark:text-gray-400"
                    });
                  },
                  true
                );
                append($$anchor5, fragment_40);
              }
            );
            var a_2 = sibling(node_39, 2);
            template_effect(() => set_attribute(a_2, "href", `/typography/${convertStringToKebabCase(key()) ?? ""}`));
            var text_29 = child(a_2, true);
            reset(a_2);
            var node_41 = sibling(a_2, 2);
            if_block(node_41, problems, ($$anchor5) => {
              var span_4 = root_54();
              var text_30 = child(span_4);
              reset(span_4);
              template_effect(() => set_text(text_30, `( ${problems() ?? ""})`));
              append($$anchor5, span_4);
            });
            var node_42 = sibling(node_41);
            if_block(node_42, notes, ($$anchor5) => {
              var span_5 = root_55();
              var text_31 = child(span_5);
              reset(span_5);
              template_effect(() => set_text(text_31, `(DONE: ${notes() ?? ""})`));
              append($$anchor5, span_5);
            });
            template_effect(() => set_text(text_29, key()));
            append($$anchor4, fragment_38);
          },
          $$slots: { default: true }
        });
      });
      append($$anchor2, fragment_36);
    },
    $$slots: { default: true }
  });
  append($$anchor, fragment);
}
export {
  _page as component
};
