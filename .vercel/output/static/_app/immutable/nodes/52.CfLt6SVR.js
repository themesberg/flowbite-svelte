import { a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { p as push, f as first_child, a as pop, s as sibling, t as template_effect, c as child, n as next, r as reset } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { i as init } from "../chunks/lifecycle.BITzOuoa.js";
import "../chunks/theme.BtjZjf2R.js";
import { A } from "../chunks/A.XuSt3J-W.js";
import { L as List, a as Li } from "../chunks/Li.B0Fkn06d.js";
import { P } from "../chunks/P.CbSbQedY.js";
import { a as removeHyphensAndCapitalize } from "../chunks/helpers.B9KbZW0W.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
var root_4 = template(`<!> <!> <!> <!>`, 1);
var root_14 = template(`<!> <!>`, 1);
var root_20 = template(`<!> <!> <!> <!>`, 1);
var root = template(`<div class="p-4"><!> <!> <!> <!> <!> <!> <!> <!></div>`);
function _page($$anchor, $$props) {
  push($$props, false);
  const name = "svelte-5-ui-lib";
  const svelte5uilibVersion = "0.11.2";
  const svelteVersion = "5.2.4";
  const svelteKitVersion = "2.8.2";
  const viteVersion = "5.4.11";
  init();
  var div = root();
  var node = child(div);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("About");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  P(node_1, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Svelte 5 UI Lib – a UI library for Svelte 5 and built upon Flowbite/Flowbite-Svelte.");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  H2(node_2, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Techinical info");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_3 = sibling(node_2, 2);
  List(node_3, {
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_4();
      var node_4 = first_child(fragment);
      Li(node_4, {
        children: ($$anchor3, $$slotProps2) => {
          A($$anchor3, {
            href: "https://svelte-5-ui-lib.codewithshin.com/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_3 = text();
              template_effect(() => set_text(text_3, `${removeHyphensAndCapitalize(name) ?? ""}: ${svelte5uilibVersion}`));
              append($$anchor4, text_3);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      var node_5 = sibling(node_4, 2);
      Li(node_5, {
        children: ($$anchor3, $$slotProps2) => {
          A($$anchor3, {
            href: "https://svelte-5-preview.codewithshin.com/docs/introduction",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_4 = text();
              text_4.nodeValue = `Svelte 5: ${svelteVersion}`;
              append($$anchor4, text_4);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      var node_6 = sibling(node_5, 2);
      Li(node_6, {
        children: ($$anchor3, $$slotProps2) => {
          A($$anchor3, {
            href: "https://kit.svelte.dev/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_5 = text();
              text_5.nodeValue = `Svelte Kit: ${svelteKitVersion}`;
              append($$anchor4, text_5);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      var node_7 = sibling(node_6, 2);
      Li(node_7, {
        children: ($$anchor3, $$slotProps2) => {
          A($$anchor3, {
            href: "https://vitejs.dev/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_6 = text();
              text_6.nodeValue = `Vite: ${viteVersion}`;
              append($$anchor4, text_6);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  var node_8 = sibling(node_3, 2);
  H2(node_8, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_7 = text("Repo");
      append($$anchor2, text_7);
    },
    $$slots: { default: true }
  });
  var node_9 = sibling(node_8, 2);
  List(node_9, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_9 = root_14();
      var node_10 = first_child(fragment_9);
      Li(node_10, {
        children: ($$anchor3, $$slotProps2) => {
          A($$anchor3, {
            href: "https://github.com/shinokada/svelte-5-ui-lib",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_8 = text("GitHub");
              append($$anchor4, text_8);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      var node_11 = sibling(node_10, 2);
      Li(node_11, {
        children: ($$anchor3, $$slotProps2) => {
          A($$anchor3, {
            href: "https://codewithshin.com",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_9 = text("codewithshin");
              append($$anchor4, text_9);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_9);
    },
    $$slots: { default: true }
  });
  var node_12 = sibling(node_9, 2);
  H2(node_12, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_10 = text("Other Flowbite-Svelte");
      append($$anchor2, text_10);
    },
    $$slots: { default: true }
  });
  var node_13 = sibling(node_12, 2);
  List(node_13, {
    children: ($$anchor2, $$slotProps) => {
      var fragment_12 = root_20();
      var node_14 = first_child(fragment_12);
      Li(node_14, {
        children: ($$anchor3, $$slotProps2) => {
          A($$anchor3, {
            href: "https://flowbite-svelte.com/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_11 = text("Flowbite-Svelte");
              append($$anchor4, text_11);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      var node_15 = sibling(node_14, 2);
      Li(node_15, {
        children: ($$anchor3, $$slotProps2) => {
          A($$anchor3, {
            href: "https://flowbite-svelte-icons.codewithshin.com/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_12 = text("Flowbite-Svelte-Icons");
              append($$anchor4, text_12);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      var node_16 = sibling(node_15, 2);
      Li(node_16, {
        children: ($$anchor3, $$slotProps2) => {
          A($$anchor3, {
            href: "https://flowbite-svelte-blocks.codewithshin.com/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_13 = text("Flowbite-Svelte-Blocks");
              append($$anchor4, text_13);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      var node_17 = sibling(node_16, 2);
      Li(node_17, {
        children: ($$anchor3, $$slotProps2) => {
          A($$anchor3, {
            href: "https://flowbite-svelte-admin-dashboard.codewithshin.com/",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var text_14 = text("Flowbite-Svelte-Dashboard");
              append($$anchor4, text_14);
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      append($$anchor2, fragment_12);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
  pop();
}
export {
  _page as component
};
