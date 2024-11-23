import { c as comment, a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { p as push, a as pop, b as get, f as first_child, d as derived, t as template_effect, c as child, r as reset, s as sibling, n as next } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { s as set_attribute } from "../chunks/theme.BtjZjf2R.js";
import { i as init } from "../chunks/lifecycle.BITzOuoa.js";
import { P } from "../chunks/P.CbSbQedY.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { a as Heading, d as h3Cls, H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { a as removeHyphensAndCapitalize } from "../chunks/helpers.B9KbZW0W.js";
const __vite_glob_0_0 = "pnpm i -D flowbite-svelte-icons\n";
const __vite_glob_0_1 = "npx sv create myapp // select to install tailwindcss\ncd myapp\npnpm dev";
const __vite_glob_0_2 = "import adapter from '@sveltejs/adapter-auto';\nimport { vitePreprocess } from '@sveltejs/vite-plugin-svelte';\n\n/** @type {import('@sveltejs/kit').Config} */\nconst config = {\n  preprocess: [vitePreprocess({})],\n  compilerOptions: {\n    runes: true\n  },\n  kit: {\n    adapter: adapter()\n  }\n};\n\nexport default config;\n";
const __vite_glob_0_3 = "pnpm i -D svelte-5-ui-lib";
const __vite_glob_0_4 = `import type { Config } from 'tailwindcss';

export default { 
  content: [
    './src/**/*.{html,js,svelte,ts}', 
    './node_modules/svelte-5-ui-lib/**/*.{html,js,svelte,ts}', 
    './node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}'
  ], 
  darkMode: 'selector', 
  theme: {
    extend: {
      colors: {
        primary: { 50: '#FFF5F2', 100: '#FFF1EE', 200: '#FFE4DE', 300: '#FFD5CC', 400: '#FFBCAD', 500: '#FE795D', 600: '#EF562F', 700: '#EB4F27', 800: '#CC4522', 900: '#A5371B' }, 
        secondary: { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e" }, 
      }
    }
  },
} satisfies Config;
`;
const __vite_glob_0_5 = "npx svelte-add@latest tailwindcss pnpm i\n";
function H3($$anchor, $$props) {
  push($$props, true);
  const base = derived(() => h3Cls({ className: $$props.class }));
  Heading($$anchor, {
    tag: "h3",
    get class() {
      return get(base);
    },
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      snippet(node, () => $$props.children);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
  pop();
}
var root_1 = template(`<a class="hover:underline dark:text-primary-500"> </a>`);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, false);
  const modules = /* @__PURE__ */ Object.assign({
    "./md/flowbite-svelte-icons.md": __vite_glob_0_0,
    "./md/install-svelte.md": __vite_glob_0_1,
    "./md/runes.md": __vite_glob_0_2,
    "./md/svelte-5-ui-lib.md": __vite_glob_0_3,
    "./md/tailwind-config.md": __vite_glob_0_4,
    "./md/tailwind.md": __vite_glob_0_5
  });
  const name = "svelte-5-ui-lib";
  const version = "0.11.2";
  const githuburl = "https://github.com/shinokada/svelte-5-ui-lib";
  init();
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      var a = root_1();
      set_attribute(a, "href", githuburl);
      var text2 = child(a);
      template_effect(() => set_text(text2, `${removeHyphensAndCapitalize(name) ?? ""}: v${version}`));
      reset(a);
      append($$anchor2, a);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  P(node_1, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Svelte 5 UI Lib is a UI library built from scratch to leverage Svelte 5's runes system, creating smooth, reactive components.");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  H2(node_2, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Installation");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_3 = sibling(node_2, 2);
  H3(node_3, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_3 = text("Svelte 5 Runes");
      append($$anchor2, text_3);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_3, 2);
  P(node_4, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_4 = text("Installing Svelte 5:");
      append($$anchor2, text_4);
    },
    $$slots: { default: true }
  });
  var node_5 = sibling(node_4, 2);
  HighlightCompo(node_5, {
    class: "mb-8",
    codeLang: "js",
    get code() {
      return modules["./md/install-svelte.md"];
    }
  });
  var node_6 = sibling(node_5, 2);
  H3(node_6, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_5 = text("Installing Svelte-5-Ui-Lib");
      append($$anchor2, text_5);
    },
    $$slots: { default: true }
  });
  var node_7 = sibling(node_6, 2);
  P(node_7, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_6 = text("Install `svelte-5-ui-lib` and update dependencies:");
      append($$anchor2, text_6);
    },
    $$slots: { default: true }
  });
  var node_8 = sibling(node_7, 2);
  HighlightCompo(node_8, {
    class: "mb-8",
    codeLang: "sh",
    get code() {
      return modules["./md/svelte-5-ui-lib.md"];
    }
  });
  var node_9 = sibling(node_8, 2);
  H3(node_9, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_7 = text("Tailwind");
      append($$anchor2, text_7);
    },
    $$slots: { default: true }
  });
  var node_10 = sibling(node_9, 2);
  P(node_10, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_8 = text("Add the following to tailwind.config.js:");
      append($$anchor2, text_8);
    },
    $$slots: { default: true }
  });
  var node_11 = sibling(node_10, 2);
  HighlightCompo(node_11, {
    class: "mb-8",
    codeLang: "json",
    get code() {
      return modules["./md/tailwind-config.md"];
    }
  });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
