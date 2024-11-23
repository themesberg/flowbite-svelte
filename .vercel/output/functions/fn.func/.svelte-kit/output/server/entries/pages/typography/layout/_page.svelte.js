import { Q as push, a0 as spread_attributes, S as pop, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like, V as escape_html } from "../../../../chunks/index.js";
import { aY as layout } from "../../../../chunks/theme.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { P } from "../../../../chunks/P.js";
function Layout($$payload, $$props) {
  push();
  let {
    children,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let classDiv = layout({ className });
  $$payload.out += `<div${spread_attributes({ ...restProps, class: classDiv })}>`;
  children($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { P } from "$lib";\n<\/script>\n\n<P class="mb-3" weight="light" color="text-gray-900 dark:text-white" contenteditable>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>\n<P class="mb-3" weight="light" color="text-gray-900 dark:text-white" contenteditable>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Layout, P } from "svelte-5-ui-lib";\n<\/script>\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Layout, P } from "$lib";\n<\/script>\n\n<P class="mb-3" weight="light" color="text-gray-900 dark:text-white" contenteditable>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>\n<Layout class="grid-cols-1 gap-6 sm:grid-cols-3">\n  <P class="mb-3" weight="light" color="text-gray-900 dark:text-white" contenteditable>Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>\n  <P class="mb-3" weight="light" color="text-gray-900 dark:text-white" contenteditable>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>\n  <P class="mb-3" weight="light" color="text-gray-900 dark:text-white" contenteditable>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>\n</Layout>\n<P class="mb-3" weight="light" color="text-gray-900 dark:text-white" contenteditable>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Layout, P } from "$lib";\n<\/script>\n\n<P class="mb-3" weight="light" color="text-gray-900 dark:text-white">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>\n<Layout class="gap-6">\n  <P class="mb-3" weight="light" color="text-gray-900 dark:text-white">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>\n  <P class="mb-3" weight="light" color="text-gray-900 dark:text-white">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>\n</Layout>\n<P class="mb-3" weight="light" color="text-gray-900 dark:text-white">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Layout, P } from "$lib";\n<\/script>\n\n<P class="mb-3" weight="light" color="text-gray-900 dark:text-white">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>\n<Layout class="grid-cols-1 gap-6 sm:grid-cols-3">\n  <div class="col-span-2">\n    <P class="mb-3" weight="light" color="text-gray-900 dark:text-white">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</P>\n    <P class="mb-3" weight="light" color="text-gray-900 dark:text-white">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>\n  </div>\n  <P class="mb-3" weight="light" color="text-gray-900 dark:text-white">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>\n</Layout>\n<P class="mb-3" weight="light" color="text-gray-900 dark:text-white">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>\n';
function OneColumn($$payload) {
  P($$payload, {
    class: "mb-3",
    weight: "light",
    color: "text-gray-900 dark:text-white",
    contenteditable: true,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  P($$payload, {
    class: "mb-3",
    weight: "light",
    color: "text-gray-900 dark:text-white",
    contenteditable: true,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function ThreeColumnsEven($$payload) {
  P($$payload, {
    class: "mb-3",
    weight: "light",
    color: "text-gray-900 dark:text-white",
    contenteditable: true,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Layout($$payload, {
    class: "grid-cols-1 gap-6 sm:grid-cols-3",
    children: ($$payload2) => {
      P($$payload2, {
        class: "mb-3",
        weight: "light",
        color: "text-gray-900 dark:text-white",
        contenteditable: true,
        children: ($$payload3) => {
          $$payload3.out += `<!---->Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      P($$payload2, {
        class: "mb-3",
        weight: "light",
        color: "text-gray-900 dark:text-white",
        contenteditable: true,
        children: ($$payload3) => {
          $$payload3.out += `<!---->Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      P($$payload2, {
        class: "mb-3",
        weight: "light",
        color: "text-gray-900 dark:text-white",
        contenteditable: true,
        children: ($$payload3) => {
          $$payload3.out += `<!---->Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  P($$payload, {
    class: "mb-3",
    weight: "light",
    color: "text-gray-900 dark:text-white",
    contenteditable: true,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function TwoColumnsEven($$payload) {
  P($$payload, {
    class: "mb-3",
    weight: "light",
    color: "text-gray-900 dark:text-white",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Layout($$payload, {
    class: "gap-6",
    children: ($$payload2) => {
      P($$payload2, {
        class: "mb-3",
        weight: "light",
        color: "text-gray-900 dark:text-white",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      P($$payload2, {
        class: "mb-3",
        weight: "light",
        color: "text-gray-900 dark:text-white",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  P($$payload, {
    class: "mb-3",
    weight: "light",
    color: "text-gray-900 dark:text-white",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function TwoColumnsUneven($$payload) {
  P($$payload, {
    class: "mb-3",
    weight: "light",
    color: "text-gray-900 dark:text-white",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Layout($$payload, {
    class: "grid-cols-1 gap-6 sm:grid-cols-3",
    children: ($$payload2) => {
      $$payload2.out += `<div class="col-span-2">`;
      P($$payload2, {
        class: "mb-3",
        weight: "light",
        color: "text-gray-900 dark:text-white",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      P($$payload2, {
        class: "mb-3",
        weight: "light",
        color: "text-gray-900 dark:text-white",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> `;
      P($$payload2, {
        class: "mb-3",
        weight: "light",
        color: "text-gray-900 dark:text-white",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  P($$payload, {
    class: "mb-3",
    weight: "light",
    color: "text-gray-900 dark:text-white",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
}
function _page($$payload, $$props) {
  push();
  const dirName = "typography/layout";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/OneColumn.svelte": __vite_glob_0_0,
    "./examples/Setup.svelte": __vite_glob_0_1,
    "./examples/ThreeColumnsEven.svelte": __vite_glob_0_2,
    "./examples/TwoColumnsEven.svelte": __vite_glob_0_3,
    "./examples/TwoColumnsUneven.svelte": __vite_glob_0_4
  });
  const exampleArr = [
    {
      name: "One column",
      component: OneColumn
    },
    {
      name: "Two columns even",
      component: TwoColumnsEven
    },
    {
      name: "Two columns uneven",
      component: TwoColumnsUneven
    },
    {
      name: "Three columns even",
      component: ThreeColumnsEven
    }
  ];
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
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
        $$payload3.out += `<!---->Layout`;
      },
      $$slots: { default: true }
    });
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
          const each_array = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-8 flex flex-wrap">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Example`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let style = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-[170px] my-1",
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
  pop();
}
export {
  _page as default
};
