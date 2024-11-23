import { Q as push, a1 as getContext, a0 as spread_attributes, W as attr, V as escape_html, S as pop, Y as ensure_array_like, X as stringify } from "../../../../chunks/index.js";
import "../../../../chunks/theme.js";
import { a as H1, H as Heading } from "../../../../chunks/H1.js";
import { L as List, a as Li } from "../../../../chunks/Li.js";
import { C as CheckCircleSolid } from "../../../../chunks/CheckCircleSolid.js";
import { twMerge } from "tailwind-merge";
import { Q as QuestionCircleSolid } from "../../../../chunks/QuestionCircleSolid.js";
import { H as H2 } from "../../../../chunks/H2.js";
function CloseCircleSolid($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    desc,
    class: className,
    ariaLabel = "close circle solid",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], className),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function _page($$payload) {
  function convertStringToKebabCase(text) {
    return text.replace(/[A-Z]/g, (match) => "-" + match.toLowerCase());
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
      total++;
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
  H1($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Component and example checks`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  H2($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Components`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  List($$payload, {
    class: "space-y-1 text-gray-500 dark:text-gray-400",
    children: ($$payload2) => {
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!----># of pages: ${escape_html(componentsAnalysis.total)}`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!----># of components/pages checked: ${escape_html(componentsAnalysis.pageChecked)}`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!----># of components/pages to be completed: ${escape_html(componentsAnalysis.pageUnchecked)}`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        class: "text-green-500",
        children: ($$payload3) => {
          $$payload3.out += `<!----># of pages without problems: ${escape_html(componentsAnalysis.pageWithoutProblems)}`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      if (componentsAnalysis.exampleProblems > 0) {
        $$payload2.out += "<!--[-->";
        Li($$payload2, {
          class: "text-red-500",
          children: ($$payload3) => {
            $$payload3.out += `<!----># of examples to be completed: ${escape_html(componentsAnalysis.exampleProblems)}`;
          },
          $$slots: { default: true }
        });
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  H2($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Forms`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  List($$payload, {
    class: "space-y-1 text-gray-500 dark:text-gray-400",
    children: ($$payload2) => {
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!----># of pages: ${escape_html(formsAnalysis.total)}`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!----># of components/pages checked: ${escape_html(formsAnalysis.pageChecked)}`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!----># of components/pages to be completed: ${escape_html(formsAnalysis.pageUnchecked)}`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        class: "text-green-500",
        children: ($$payload3) => {
          $$payload3.out += `<!----># of pages without problems: ${escape_html(formsAnalysis.pageWithoutProblems)}`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      if (formsAnalysis.exampleProblems > 0) {
        $$payload2.out += "<!--[-->";
        Li($$payload2, {
          class: "text-red-500",
          children: ($$payload3) => {
            $$payload3.out += `<!----># of examples to be completed: ${escape_html(formsAnalysis.exampleProblems)}`;
          },
          $$slots: { default: true }
        });
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  H2($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Typography`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  List($$payload, {
    class: "space-y-1 text-gray-500 dark:text-gray-400",
    children: ($$payload2) => {
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!----># of pages: ${escape_html(typographyAnalysis.total)}`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!----># of components/pages checked: ${escape_html(typographyAnalysis.pageChecked)}`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!----># of components/pages to be completed: ${escape_html(typographyAnalysis.pageUnchecked)}`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        class: "text-green-500",
        children: ($$payload3) => {
          $$payload3.out += `<!----># of pages without problems: ${escape_html(typographyAnalysis.pageWithoutProblems)}`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      if (typographyAnalysis.exampleProblems > 0) {
        $$payload2.out += "<!--[-->";
        Li($$payload2, {
          class: "text-red-500",
          children: ($$payload3) => {
            $$payload3.out += `<!----># of examples to be completed: ${escape_html(typographyAnalysis.exampleProblems)}`;
          },
          $$slots: { default: true }
        });
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Heading($$payload, {
    tag: "h2",
    class: "mb-2 py-4 text-2xl font-semibold text-gray-900 dark:text-white",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Components`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  List($$payload, {
    class: "space-y-1 text-gray-500 dark:text-gray-400",
    children: ($$payload2) => {
      const each_array = ensure_array_like(Object.entries(components));
      $$payload2.out += `<!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let [key, { checked, problems, notes }] = each_array[$$index];
        Li($$payload2, {
          icon: true,
          children: ($$payload3) => {
            if (checked && !problems) {
              $$payload3.out += "<!--[-->";
              CheckCircleSolid($$payload3, {
                class: "me-2 h-8 w-8 text-green-500 dark:text-green-400"
              });
            } else {
              $$payload3.out += "<!--[!-->";
              if (problems) {
                $$payload3.out += "<!--[-->";
                CloseCircleSolid($$payload3, {
                  class: "me-2 h-8 w-8 text-red-500 dark:text-red-400"
                });
              } else {
                $$payload3.out += "<!--[!-->";
                QuestionCircleSolid($$payload3, {
                  class: "me-2 h-8 w-8 text-gray-500 dark:text-gray-400"
                });
              }
              $$payload3.out += `<!--]-->`;
            }
            $$payload3.out += `<!--]--> <a${attr("href", `/components/${stringify(convertStringToKebabCase(key))}`)} class="text-blue-800 underline hover:text-blue-500 dark:text-blue-300 hover:dark:text-blue-200">${escape_html(key)}</a> `;
            if (problems) {
              $$payload3.out += "<!--[-->";
              $$payload3.out += `<span class="ml-4 text-red-500">( ${escape_html(problems)})</span>`;
            } else {
              $$payload3.out += "<!--[!-->";
            }
            $$payload3.out += `<!--]-->`;
            if (notes) {
              $$payload3.out += "<!--[-->";
              $$payload3.out += `<span class="ml-4 text-green-500">(DONE: ${escape_html(notes)})</span>`;
            } else {
              $$payload3.out += "<!--[!-->";
            }
            $$payload3.out += `<!--]-->`;
          },
          $$slots: { default: true }
        });
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Heading($$payload, {
    tag: "h2",
    class: "mb-2 py-4 text-2xl font-semibold text-gray-900 dark:text-white",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Forms`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  List($$payload, {
    class: "space-y-1 text-gray-500 dark:text-gray-400",
    children: ($$payload2) => {
      const each_array_1 = ensure_array_like(Object.entries(forms));
      $$payload2.out += `<!--[-->`;
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let [key, { checked, problems, notes }] = each_array_1[$$index_1];
        Li($$payload2, {
          icon: true,
          children: ($$payload3) => {
            if (checked && !problems) {
              $$payload3.out += "<!--[-->";
              CheckCircleSolid($$payload3, {
                class: "me-2 h-8 w-8 text-green-500 dark:text-green-400"
              });
            } else {
              $$payload3.out += "<!--[!-->";
              if (problems) {
                $$payload3.out += "<!--[-->";
                CloseCircleSolid($$payload3, {
                  class: "me-2 h-8 w-8 text-red-500 dark:text-red-400"
                });
              } else {
                $$payload3.out += "<!--[!-->";
                QuestionCircleSolid($$payload3, {
                  class: "me-2 h-8 w-8 text-gray-500 dark:text-gray-400"
                });
              }
              $$payload3.out += `<!--]-->`;
            }
            $$payload3.out += `<!--]--> <a${attr("href", `/forms/${stringify(convertStringToKebabCase(key))}`)} class="text-blue-800 underline hover:text-blue-500 dark:text-blue-300 hover:dark:text-blue-200">${escape_html(key)}</a> `;
            if (problems) {
              $$payload3.out += "<!--[-->";
              $$payload3.out += `<span class="ml-4 text-red-500">( ${escape_html(problems)})</span>`;
            } else {
              $$payload3.out += "<!--[!-->";
            }
            $$payload3.out += `<!--]-->`;
            if (notes) {
              $$payload3.out += "<!--[-->";
              $$payload3.out += `<span class="ml-4 text-green-500">(DONE: ${escape_html(notes)})</span>`;
            } else {
              $$payload3.out += "<!--[!-->";
            }
            $$payload3.out += `<!--]-->`;
          },
          $$slots: { default: true }
        });
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Heading($$payload, {
    tag: "h2",
    class: "mb-2 py-4 text-2xl font-semibold text-gray-900 dark:text-white",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Typography`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  List($$payload, {
    class: "space-y-1 text-gray-500 dark:text-gray-400",
    children: ($$payload2) => {
      const each_array_2 = ensure_array_like(Object.entries(typography));
      $$payload2.out += `<!--[-->`;
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let [key, { checked, problems, notes }] = each_array_2[$$index_2];
        Li($$payload2, {
          icon: true,
          children: ($$payload3) => {
            if (checked && !problems) {
              $$payload3.out += "<!--[-->";
              CheckCircleSolid($$payload3, {
                class: "me-2 h-8 w-8 text-green-500 dark:text-green-400"
              });
            } else {
              $$payload3.out += "<!--[!-->";
              if (problems) {
                $$payload3.out += "<!--[-->";
                CloseCircleSolid($$payload3, {
                  class: "me-2 h-8 w-8 text-red-500 dark:text-red-400"
                });
              } else {
                $$payload3.out += "<!--[!-->";
                QuestionCircleSolid($$payload3, {
                  class: "me-2 h-8 w-8 text-gray-500 dark:text-gray-400"
                });
              }
              $$payload3.out += `<!--]-->`;
            }
            $$payload3.out += `<!--]--> <a${attr("href", `/typography/${stringify(convertStringToKebabCase(key))}`)} class="text-blue-800 underline hover:text-blue-500 dark:text-blue-300 hover:dark:text-blue-200">${escape_html(key)}</a> `;
            if (problems) {
              $$payload3.out += "<!--[-->";
              $$payload3.out += `<span class="ml-4 text-red-500">( ${escape_html(problems)})</span>`;
            } else {
              $$payload3.out += "<!--[!-->";
            }
            $$payload3.out += `<!--]-->`;
            if (notes) {
              $$payload3.out += "<!--[-->";
              $$payload3.out += `<span class="ml-4 text-green-500">(DONE: ${escape_html(notes)})</span>`;
            } else {
              $$payload3.out += "<!--[!-->";
            }
            $$payload3.out += `<!--]-->`;
          },
          $$slots: { default: true }
        });
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
