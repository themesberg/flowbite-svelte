import { Q as push, W as attr, V as escape_html, a0 as spread_attributes, S as pop, a1 as getContext, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like } from "../../../../chunks/index.js";
import { z as footerCopyright, A as footerIcon } from "../../../../chunks/theme.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { F as Footer, b as FooterUl, c as FooterLi, a as FooterBrand } from "../../../../chunks/FooterUl.js";
import { F as FacebookSolid, D as DiscordSolid } from "../../../../chunks/FacebookSolid.js";
import { twMerge } from "tailwind-merge";
import { S as Skeleton, I as ImagePlaceholder } from "../../../../chunks/Skeleton.js";
import { T as TextPlaceholder } from "../../../../chunks/TextPlaceholder.js";
function FooterCopyright($$payload, $$props) {
  push();
  let {
    spanClass,
    aClass,
    href,
    by,
    copyrightMessage = "All Rights Reserved.",
    year,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  if (!year) year = (/* @__PURE__ */ new Date()).getFullYear();
  const { base, link, bySpan } = footerCopyright();
  $$payload.out += `<span${attr("class", base({ class: spanClass }))}>© ${escape_html(year)} `;
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({
      ...restProps,
      href,
      class: link({ class: aClass })
    })}>${escape_html(by)}</a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<span${attr("class", bySpan())}>${escape_html(by)}</span>`;
  }
  $$payload.out += `<!--]--> ${escape_html(copyrightMessage)}</span>`;
  pop();
}
function FooterIcon($$payload, $$props) {
  push();
  let {
    children,
    href,
    ariaLabel,
    class: aClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const aCls = footerIcon({ class: aClass });
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({
      ...restProps,
      href,
      "aria-label": ariaLabel,
      class: aCls
    })}>`;
    children($$payload);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    children($$payload);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function GithubSolid($$payload, $$props) {
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
    ariaLabel = "github solid",
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
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function TwitterSolid($$payload, $$props) {
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
    ariaLabel = "twitter solid",
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
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Footer, FooterLi, FooterUl, FooterCopyright } from "$lib";\n<\/script>\n\n<Footer class="shadow-none" footerType="logo">\n  <div class="sm:flex sm:items-center sm:justify-between">\n    <FooterCopyright href="/" by="Flowbite" year={2022} />\n    <FooterUl class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400">\n      <FooterLi href="/">About</FooterLi>\n      <FooterLi href="/">Privacy Policy</FooterLi>\n      <FooterLi href="/">Licensing</FooterLi>\n      <FooterLi href="/">Contact</FooterLi>\n    </FooterUl>\n  </div>\n</Footer>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Footer, FooterBrand, FooterLi, FooterUl, FooterCopyright } from "$lib";\n<\/script>\n\n<Footer footerType="logo">\n  <div class="sm:flex sm:items-center sm:justify-between">\n    <FooterBrand href="https://flowbite.com" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite Logo" name="Flowbite" />\n    <FooterUl class="mb-6 flex flex-wrap items-center text-sm text-gray-500 sm:mb-0 dark:text-gray-400">\n      <FooterLi href="/">About</FooterLi>\n      <FooterLi href="/">Privacy Policy</FooterLi>\n      <FooterLi href="/">Licensing</FooterLi>\n      <FooterLi href="/">Contact</FooterLi>\n    </FooterUl>\n  </div>\n  <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />\n  <FooterCopyright href="/" by="Flowbite™" />\n</Footer>\n';
const __vite_glob_0_2 = '<script>\n  import { Footer, FooterBrand, FooterLi, FooterUl, FooterCopyright, FooterIcon } from "$lib";\n<\/script>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Footer, FooterLi, FooterUl, FooterCopyright, FooterIcon } from "$lib";\n  import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<Footer footerType="sitemap">\n  <div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">\n    <div>\n      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Company</h2>\n      <FooterUl class="text-gray-300">\n        <FooterLi liClass="mb-4" href="/">About</FooterLi>\n        <FooterLi liClass="mb-4" href="/">Careers</FooterLi>\n        <FooterLi liClass="mb-4" href="/">Brand Center</FooterLi>\n        <FooterLi liClass="mb-4" href="/">Blog</FooterLi>\n      </FooterUl>\n    </div>\n    <div>\n      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Download</h2>\n      <FooterUl class="text-gray-300">\n        <FooterLi liClass="mb-4" href="/">Discord Server</FooterLi>\n        <FooterLi liClass="mb-4" href="/">Twitter</FooterLi>\n        <FooterLi liClass="mb-4" href="/">Facebook</FooterLi>\n        <FooterLi liClass="mb-4" href="/">Contact Us</FooterLi>\n      </FooterUl>\n    </div>\n    <div>\n      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Legal</h2>\n      <FooterUl class="text-gray-300">\n        <FooterLi liClass="mb-4" href="/">Privacy Policy</FooterLi>\n        <FooterLi liClass="mb-4" href="/">Licensing</FooterLi>\n        <FooterLi liClass="mb-4" href="/">Terms & Conditions</FooterLi>\n      </FooterUl>\n    </div>\n    <div>\n      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Download</h2>\n      <FooterUl class="text-gray-300">\n        <FooterLi liClass="mb-4" href="/">iOS</FooterLi>\n        <FooterLi liClass="mb-4" href="/">Android</FooterLi>\n        <FooterLi liClass="mb-4" href="/">Windows</FooterLi>\n        <FooterLi liClass="mb-4" href="/">MacOS</FooterLi>\n      </FooterUl>\n    </div>\n  </div>\n  <div class="bg-gray-700 px-4 py-6 md:flex md:items-center md:justify-between">\n    <FooterCopyright spanClass="text-sm text-gray-300 sm:text-center" href="/" by="Flowbite™" />\n    <div class="mt-4 flex space-x-6 sm:justify-center md:mt-0 rtl:space-x-reverse">\n      <FooterIcon href="/">\n        <FacebookSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />\n      </FooterIcon>\n      <FooterIcon href="/">\n        <DiscordSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />\n      </FooterIcon>\n      <FooterIcon href="/">\n        <TwitterSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />\n      </FooterIcon>\n      <FooterIcon href="/">\n        <GithubSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />\n      </FooterIcon>\n    </div>\n  </div>\n</Footer>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Footer, FooterBrand, FooterLi, FooterUl, FooterCopyright, FooterIcon } from "$lib";\n  import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from "flowbite-svelte-icons";\n<\/script>\n\n<Footer footerType="socialmedia">\n  <div class="md:flex md:justify-between">\n    <div class="mb-6 md:mb-0">\n      <FooterBrand href="https://flowbite.com" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite Logo" name="Flowbite" />\n    </div>\n    <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">\n      <div>\n        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Resources</h2>\n        <FooterUl>\n          <FooterLi liClass="mb-4" href="/">Flowbite</FooterLi>\n          <FooterLi liClass="mb-4" href="/">Tailwind CSS</FooterLi>\n        </FooterUl>\n      </div>\n      <div>\n        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>\n        <FooterUl>\n          <FooterLi liClass="mb-4" href="/">GitHub</FooterLi>\n          <FooterLi liClass="mb-4" href="/">Discord</FooterLi>\n        </FooterUl>\n      </div>\n      <div>\n        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>\n        <FooterUl>\n          <FooterLi liClass="mb-4" href="/">Privacy Policy</FooterLi>\n          <FooterLi liClass="mb-4" href="/">Terms & Conditions</FooterLi>\n        </FooterUl>\n      </div>\n    </div>\n  </div>\n  <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />\n  <div class="sm:flex sm:items-center sm:justify-between">\n    <FooterCopyright href="/" by="Flowbite™" />\n    <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center rtl:space-x-reverse">\n      <FooterIcon href="/">\n        <FacebookSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />\n      </FooterIcon>\n      <FooterIcon href="/">\n        <DiscordSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />\n      </FooterIcon>\n      <FooterIcon href="/">\n        <TwitterSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />\n      </FooterIcon>\n      <FooterIcon href="/">\n        <GithubSolid class="h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white" />\n      </FooterIcon>\n    </div>\n  </div>\n</Footer>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { Footer, FooterCopyright, FooterUl, FooterLi, Skeleton, ImagePlaceholder, TextPlaceholder } from "$lib";\n<\/script>\n\n<div class="relative p-6">\n  <div style="height:300px;" class="overflow-auto">\n    <Skeleton class="my-8" />\n    <ImagePlaceholder class="my-8" />\n    <TextPlaceholder class="my-8" />\n  </div>\n  <Footer footerType="sticky" class="absolute">\n    <FooterCopyright href="/" by="Flowbite™" />\n    <FooterUl class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400">\n      <FooterLi href="/">About</FooterLi>\n      <FooterLi href="/">Privacy Policy</FooterLi>\n      <FooterLi href="/">Licensing</FooterLi>\n      <FooterLi href="/">Contact</FooterLi>\n    </FooterUl>\n  </Footer>\n</div>\n';
function Default($$payload) {
  Footer($$payload, {
    class: "shadow-none",
    footerType: "logo",
    children: ($$payload2) => {
      $$payload2.out += `<div class="sm:flex sm:items-center sm:justify-between">`;
      FooterCopyright($$payload2, { href: "/", by: "Flowbite", year: 2022 });
      $$payload2.out += `<!----> `;
      FooterUl($$payload2, {
        class: "mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400",
        children: ($$payload3) => {
          FooterLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->About`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Privacy Policy`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Licensing`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Contact`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div>`;
    },
    $$slots: { default: true }
  });
}
function Logo($$payload) {
  Footer($$payload, {
    footerType: "logo",
    children: ($$payload2) => {
      $$payload2.out += `<div class="sm:flex sm:items-center sm:justify-between">`;
      FooterBrand($$payload2, {
        href: "https://flowbite.com",
        src: "/images/flowbite-svelte-icon-logo.svg",
        alt: "Flowbite Logo",
        name: "Flowbite"
      });
      $$payload2.out += `<!----> `;
      FooterUl($$payload2, {
        class: "mb-6 flex flex-wrap items-center text-sm text-gray-500 sm:mb-0 dark:text-gray-400",
        children: ($$payload3) => {
          FooterLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->About`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Privacy Policy`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Licensing`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Contact`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700"> `;
      FooterCopyright($$payload2, { href: "/", by: "Flowbite™" });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function SitemapLink($$payload) {
  Footer($$payload, {
    footerType: "sitemap",
    children: ($$payload2) => {
      $$payload2.out += `<div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4"><div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Company</h2> `;
      FooterUl($$payload2, {
        class: "text-gray-300",
        children: ($$payload3) => {
          FooterLi($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->About`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Careers`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Brand Center`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Blog`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Download</h2> `;
      FooterUl($$payload2, {
        class: "text-gray-300",
        children: ($$payload3) => {
          FooterLi($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Discord Server`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Twitter`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Facebook`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Contact Us`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Legal</h2> `;
      FooterUl($$payload2, {
        class: "text-gray-300",
        children: ($$payload3) => {
          FooterLi($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Privacy Policy`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Licensing`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Terms &amp; Conditions`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Download</h2> `;
      FooterUl($$payload2, {
        class: "text-gray-300",
        children: ($$payload3) => {
          FooterLi($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->iOS`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Android`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Windows`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->MacOS`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div></div> <div class="bg-gray-700 px-4 py-6 md:flex md:items-center md:justify-between">`;
      FooterCopyright($$payload2, {
        spanClass: "text-sm text-gray-300 sm:text-center",
        href: "/",
        by: "Flowbite™"
      });
      $$payload2.out += `<!----> <div class="mt-4 flex space-x-6 sm:justify-center md:mt-0 rtl:space-x-reverse">`;
      FooterIcon($$payload2, {
        href: "/",
        children: ($$payload3) => {
          FacebookSolid($$payload3, {
            class: "h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      FooterIcon($$payload2, {
        href: "/",
        children: ($$payload3) => {
          DiscordSolid($$payload3, {
            class: "h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      FooterIcon($$payload2, {
        href: "/",
        children: ($$payload3) => {
          TwitterSolid($$payload3, {
            class: "h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      FooterIcon($$payload2, {
        href: "/",
        children: ($$payload3) => {
          GithubSolid($$payload3, {
            class: "h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div></div>`;
    },
    $$slots: { default: true }
  });
}
function SocialMedia($$payload) {
  Footer($$payload, {
    footerType: "socialmedia",
    children: ($$payload2) => {
      $$payload2.out += `<div class="md:flex md:justify-between"><div class="mb-6 md:mb-0">`;
      FooterBrand($$payload2, {
        href: "https://flowbite.com",
        src: "/images/flowbite-svelte-icon-logo.svg",
        alt: "Flowbite Logo",
        name: "Flowbite"
      });
      $$payload2.out += `<!----></div> <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6"><div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Resources</h2> `;
      FooterUl($$payload2, {
        children: ($$payload3) => {
          FooterLi($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Flowbite`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Tailwind CSS`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2> `;
      FooterUl($$payload2, {
        children: ($$payload3) => {
          FooterLi($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->GitHub`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Discord`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> <div><h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2> `;
      FooterUl($$payload2, {
        children: ($$payload3) => {
          FooterLi($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Privacy Policy`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            liClass: "mb-4",
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Terms &amp; Conditions`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div></div></div> <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700"> <div class="sm:flex sm:items-center sm:justify-between">`;
      FooterCopyright($$payload2, { href: "/", by: "Flowbite™" });
      $$payload2.out += `<!----> <div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center rtl:space-x-reverse">`;
      FooterIcon($$payload2, {
        href: "/",
        children: ($$payload3) => {
          FacebookSolid($$payload3, {
            class: "h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      FooterIcon($$payload2, {
        href: "/",
        children: ($$payload3) => {
          DiscordSolid($$payload3, {
            class: "h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      FooterIcon($$payload2, {
        href: "/",
        children: ($$payload3) => {
          TwitterSolid($$payload3, {
            class: "h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      FooterIcon($$payload2, {
        href: "/",
        children: ($$payload3) => {
          GithubSolid($$payload3, {
            class: "h-5 w-5 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div></div>`;
    },
    $$slots: { default: true }
  });
}
function Sticky($$payload) {
  $$payload.out += `<div class="relative p-6"><div style="height:300px;" class="overflow-auto">`;
  Skeleton($$payload, { class: "my-8" });
  $$payload.out += `<!----> `;
  ImagePlaceholder($$payload, { class: "my-8" });
  $$payload.out += `<!----> `;
  TextPlaceholder($$payload, { class: "my-8" });
  $$payload.out += `<!----></div> `;
  Footer($$payload, {
    footerType: "sticky",
    class: "absolute",
    children: ($$payload2) => {
      FooterCopyright($$payload2, { href: "/", by: "Flowbite™" });
      $$payload2.out += `<!----> `;
      FooterUl($$payload2, {
        class: "mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400",
        children: ($$payload3) => {
          FooterLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->About`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Privacy Policy`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Licensing`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          FooterLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Contact`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function _page($$payload, $$props) {
  push();
  const dirName = "footer";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Default.svelte": __vite_glob_0_0,
    "./examples/Logo.svelte": __vite_glob_0_1,
    "./examples/Setup.svelte": __vite_glob_0_2,
    "./examples/SitemapLink.svelte": __vite_glob_0_3,
    "./examples/SocialMedia.svelte": __vite_glob_0_4,
    "./examples/Sticky.svelte": __vite_glob_0_5
  });
  const exampleArr = [
    {
      name: "Default",
      component: Default
    },
    {
      name: "Logo",
      component: Logo
    },
    {
      name: "Sitemap link",
      component: SitemapLink
    },
    {
      name: "Social media",
      component: SocialMedia
    },
    {
      name: "Sticky",
      component: Sticky
    }
  ];
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  let exampleExpand = false;
  let showExpandButton = isSvelteOverflow(svelteCode, exampleModules);
  const handleExpandClick = () => {
    exampleExpand = !exampleExpand;
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    H1($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Footer`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        DynamicCodeBlockHighlight($$payload3, {
          replaceLib: true,
          handleExpandClick,
          expand: exampleExpand,
          showExpandButton,
          code: exampleModules[`./examples/${svelteCode}`]
        });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          const each_array = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-12 flex flex-wrap">`;
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
              labelClass: "w-32 my-1",
              onclick: () => exampleExpand = false,
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
