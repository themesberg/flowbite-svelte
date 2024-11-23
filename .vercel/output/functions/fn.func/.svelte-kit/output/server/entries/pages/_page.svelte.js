import { S as pop, Q as push, W as attr, V as escape_html } from "../../chunks/index.js";
import "../../chunks/theme.js";
import { P } from "../../chunks/P.js";
import { H as HighlightCompo } from "../../chunks/HighlightCompo.js";
import { h as h3Cls, H as Heading, a as H1 } from "../../chunks/H1.js";
import { H as H2 } from "../../chunks/H2.js";
import { r as removeHyphensAndCapitalize } from "../../chunks/helpers.js";
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
function H3($$payload, $$props) {
  push();
  let { children, class: className } = $$props;
  const base = h3Cls({ className });
  Heading($$payload, {
    tag: "h3",
    class: base,
    children: ($$payload2) => {
      children($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  pop();
}
function _page($$payload, $$props) {
  push();
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
  H1($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<a class="hover:underline dark:text-primary-500"${attr("href", githuburl)}>${escape_html(removeHyphensAndCapitalize(name))}: v${escape_html(version)}</a>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  P($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Svelte 5 UI Lib is a UI library built from scratch to leverage Svelte 5's runes system, creating smooth, reactive components.`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  H2($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Installation`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  H3($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Svelte 5 Runes`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  P($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Installing Svelte 5:`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  HighlightCompo($$payload, {
    class: "mb-8",
    codeLang: "js",
    code: modules["./md/install-svelte.md"]
  });
  $$payload.out += `<!----> `;
  H3($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Installing Svelte-5-Ui-Lib`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  P($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Install \`svelte-5-ui-lib\` and update dependencies:`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  HighlightCompo($$payload, {
    class: "mb-8",
    codeLang: "sh",
    code: modules["./md/svelte-5-ui-lib.md"]
  });
  $$payload.out += `<!----> `;
  H3($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Tailwind`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  P($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Add the following to tailwind.config.js:`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  HighlightCompo($$payload, {
    class: "mb-8",
    codeLang: "json",
    code: modules["./md/tailwind-config.md"]
  });
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
