import { S as pop, Q as push, V as escape_html } from "../../../../chunks/index.js";
import "../../../../chunks/theme.js";
import { A } from "../../../../chunks/A.js";
import { L as List, a as Li } from "../../../../chunks/Li.js";
import { P } from "../../../../chunks/P.js";
import { r as removeHyphensAndCapitalize } from "../../../../chunks/helpers.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
function _page($$payload, $$props) {
  push();
  const name = "svelte-5-ui-lib";
  const svelte5uilibVersion = "0.11.2";
  const svelteVersion = "5.2.4";
  const svelteKitVersion = "2.8.2";
  const viteVersion = "5.4.11";
  $$payload.out += `<div class="p-4">`;
  H1($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->About`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  P($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Svelte 5 UI Lib – a UI library for Svelte 5 and built upon Flowbite/Flowbite-Svelte.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  H2($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Techinical info`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  List($$payload, {
    children: ($$payload2) => {
      Li($$payload2, {
        children: ($$payload3) => {
          A($$payload3, {
            href: "https://svelte-5-ui-lib.codewithshin.com/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(removeHyphensAndCapitalize(name))}: ${escape_html(svelte5uilibVersion)}`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          A($$payload3, {
            href: "https://svelte-5-preview.codewithshin.com/docs/introduction",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Svelte 5: ${escape_html(svelteVersion)}`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          A($$payload3, {
            href: "https://kit.svelte.dev/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Svelte Kit: ${escape_html(svelteKitVersion)}`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          A($$payload3, {
            href: "https://vitejs.dev/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Vite: ${escape_html(viteVersion)}`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  H2($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Repo`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  List($$payload, {
    children: ($$payload2) => {
      Li($$payload2, {
        children: ($$payload3) => {
          A($$payload3, {
            href: "https://github.com/shinokada/svelte-5-ui-lib",
            children: ($$payload4) => {
              $$payload4.out += `<!---->GitHub`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          A($$payload3, {
            href: "https://codewithshin.com",
            children: ($$payload4) => {
              $$payload4.out += `<!---->codewithshin`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  H2($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Other Flowbite-Svelte`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  List($$payload, {
    children: ($$payload2) => {
      Li($$payload2, {
        children: ($$payload3) => {
          A($$payload3, {
            href: "https://flowbite-svelte.com/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Flowbite-Svelte`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          A($$payload3, {
            href: "https://flowbite-svelte-icons.codewithshin.com/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Flowbite-Svelte-Icons`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          A($$payload3, {
            href: "https://flowbite-svelte-blocks.codewithshin.com/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Flowbite-Svelte-Blocks`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Li($$payload2, {
        children: ($$payload3) => {
          A($$payload3, {
            href: "https://flowbite-svelte-admin-dashboard.codewithshin.com/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Flowbite-Svelte-Dashboard`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
  pop();
}
export {
  _page as default
};
