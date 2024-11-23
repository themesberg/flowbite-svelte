import { Q as push, a0 as spread_attributes, W as attr, a2 as bind_props, S as pop, a1 as getContext, V as escape_html, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like } from "../../../../chunks/index.js";
import { a as fade, f as fly, b as blur, s as slide, c as scale } from "../../../../chunks/index3.js";
import { f as banner } from "../../../../chunks/theme.js";
import { C as CloseButton } from "../../../../chunks/CloseButton.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { l as linear } from "../../../../chunks/index4.js";
import { S as Skeleton, I as ImagePlaceholder } from "../../../../chunks/Skeleton.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { twMerge } from "tailwind-merge";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { A as ArrowRightOutline } from "../../../../chunks/ArrowRightOutline.js";
function Banner($$payload, $$props) {
  push();
  let {
    children,
    header,
    bannerStatus = true,
    position = "sticky",
    dismissable = true,
    color = "gray",
    bannerType = "default",
    class: className,
    innerClass,
    transition = fade,
    params,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, insideDiv } = banner({ bannerType, color });
  let bannerClass = base({ position, bannerType, color, className });
  let innerCls = insideDiv({ bannerType, class: innerClass });
  if (bannerStatus) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes({
      tabindex: "-1",
      class: bannerClass,
      ...restProps
    })}>`;
    if (header) {
      $$payload.out += "<!--[-->";
      header($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div${attr("class", innerCls)}>`;
    children($$payload);
    $$payload.out += `<!----></div> `;
    if (dismissable) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div class="flex items-center">`;
      CloseButton($$payload, {
        class: "-mx-1.5 -my-1.5",
        color,
        ariaLabel: "Remove badge",
        onclick: () => {
          bannerStatus = false;
        }
      });
      $$payload.out += `<!----></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { bannerStatus });
  pop();
}
function BookOpenSolid($$payload, $$props) {
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
    ariaLabel = "book open solid",
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
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function BullhornOutline($$payload, $$props) {
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
    strokeWidth = ctx.strokeWidth || "2",
    desc,
    class: className,
    ariaLabel = "bullhorn outline",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      color,
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="M11 9H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6m0-6v6m0-6 5.419-3.87A1 1 0 0 1 18 5.942v12.114a1 1 0 0 1-1.581.814L11 15m7 0a3 3 0 0 0 0-6M6 15h3v5H6v-5Z"></path></svg>`;
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Skeleton, ImagePlaceholder, Banner } from "$lib";\n  import { BookOpenSolid, ArrowRightOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="relative">\n  <div class="p-6">\n    <Skeleton class="py-4" />\n    <ImagePlaceholder class="py-4" />\n  </div>\n  <Banner id="info-banner" position="absolute" bannerType="info">\n    {#snippet header()}\n      <div class="mb-4 md:mb-0 md:me-4">\n        <h2 class="mb-1 text-base font-semibold text-gray-900 dark:text-white">Integration is the key</h2>\n        <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">You can integrate Flowbite with many tools.</p>\n      </div>\n    {/snippet}\n    <a href="/" class="me-3 inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">\n      <BookOpenSolid class="me-2 h-3 w-3" />\n      Learn more\n    </a>\n    <a href="/" class="me-2 inline-flex rounded-lg bg-primary-700 px-3 py-2 text-xs font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">\n      Get started <ArrowRightOutline class="ms-2 h-3 w-3" />\n    </a>\n  </Banner>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Skeleton, ImagePlaceholder, Banner } from "$lib";\n<\/script>\n\n<div class="relative">\n  <div class="p-6">\n    <Skeleton class="py-4" />\n    <ImagePlaceholder class="py-4" />\n  </div>\n  <Banner id="signup-banner" position="absolute" bannerType="signup">\n    <form action="/" class="flex w-full flex-col items-center md:flex-row">\n      <label for="email" class="mb-2 me-auto flex-shrink-0 text-sm font-medium text-gray-500 md:m-0 md:mb-0 md:me-4 dark:text-gray-400">Sign up for our newsletter</label>\n      <input type="email" id="email" placeholder="Enter your email" class="mb-2 block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 md:mb-0 md:me-4 md:w-64 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required />\n      <button type="submit" class="w-full rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button>\n    </form>\n  </Banner>\n</div>\n';
const __vite_glob_0_2 = '<script>\n  import { Banner } from "svelte-5-ui-lib";\n<\/script>\n';
function InformationBanner($$payload) {
  $$payload.out += `<div class="relative"><div class="p-6">`;
  Skeleton($$payload, { class: "py-4" });
  $$payload.out += `<!----> `;
  ImagePlaceholder($$payload, { class: "py-4" });
  $$payload.out += `<!----></div> `;
  {
    let header = function($$payload2) {
      $$payload2.out += `<div class="mb-4 md:mb-0 md:me-4"><h2 class="mb-1 text-base font-semibold text-gray-900 dark:text-white">Integration is the key</h2> <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">You can integrate Flowbite with many tools.</p></div>`;
    };
    Banner($$payload, {
      id: "info-banner",
      position: "absolute",
      bannerType: "info",
      header,
      children: ($$payload2) => {
        $$payload2.out += `<a href="/" class="me-3 inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">`;
        BookOpenSolid($$payload2, { class: "me-2 h-3 w-3" });
        $$payload2.out += `<!----> Learn more</a> <a href="/" class="me-2 inline-flex rounded-lg bg-primary-700 px-3 py-2 text-xs font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Get started `;
        ArrowRightOutline($$payload2, { class: "ms-2 h-3 w-3" });
        $$payload2.out += `<!----></a>`;
      },
      $$slots: { header: true, default: true }
    });
  }
  $$payload.out += `<!----></div>`;
}
function NewsletterSignupBanner($$payload) {
  $$payload.out += `<div class="relative"><div class="p-6">`;
  Skeleton($$payload, { class: "py-4" });
  $$payload.out += `<!----> `;
  ImagePlaceholder($$payload, { class: "py-4" });
  $$payload.out += `<!----></div> `;
  Banner($$payload, {
    id: "signup-banner",
    position: "absolute",
    bannerType: "signup",
    children: ($$payload2) => {
      $$payload2.out += `<form action="/" class="flex w-full flex-col items-center md:flex-row"><label for="email" class="mb-2 me-auto flex-shrink-0 text-sm font-medium text-gray-500 md:m-0 md:mb-0 md:me-4 dark:text-gray-400">Sign up for our newsletter</label> <input type="email" id="email" placeholder="Enter your email" class="mb-2 block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 md:mb-0 md:me-4 md:w-64 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" required> <button type="submit" class="w-full rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Subscribe</button></form>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function _page($$payload, $$props) {
  push();
  const dirName = "banner";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/InformationBanner.svelte": __vite_glob_0_0,
    "./examples/NewsletterSignupBanner.svelte": __vite_glob_0_1,
    "./examples/Setup.svelte": __vite_glob_0_2
  });
  const exampleArr = [
    {
      name: "Newsletter signup banner",
      component: NewsletterSignupBanner
    },
    {
      name: "Information banner",
      component: InformationBanner
    }
  ];
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  const colors = Object.keys(banner.variants.color);
  let position = "sticky";
  const changePosition = () => {
    position = position === "sticky" ? "absolute" : "sticky";
    if (position === "sticky") {
      bannerType = "default";
    }
  };
  let bannerType = "default";
  const changeBannerType = () => {
    bannerType = bannerType === "default" ? "cta" : "default";
    if (bannerType === "cta") {
      position = "absolute";
    }
  };
  let color = "primary";
  let bannerClass = "";
  const changeClass = () => {
    bannerClass = bannerClass === "" ? "mt-4" : "";
  };
  let bannerStatus = true;
  const changeStatus = () => {
    bannerStatus = true;
  };
  const transitions = [
    {
      name: "Fly",
      transition: fly,
      params: { duration: 500, easing: linear, x: 150 }
    },
    {
      name: "Blur",
      transition: blur,
      params: { duration: 500, easing: linear }
    },
    {
      name: "Slide",
      transition: slide,
      params: { duration: 500, easing: linear, x: -150 }
    },
    {
      name: "Scale",
      transition: scale,
      params: { duration: 500, easing: linear }
    }
  ];
  let selectedTransition = "Fly";
  let currentTransition = transitions.find((t) => t.name === selectedTransition) || transitions[0];
  let generatedCode = (() => {
    let props = [];
    if (color !== "primary") props.push(` color="${color}"`);
    if (bannerType !== "default") props.push(` bannerType="${bannerType}"`);
    if (position !== "sticky") props.push(` position="${position}"`);
    if (bannerClass) props.push(` class="${bannerClass}"`);
    if (!bannerStatus) props.push(" bannerStatus={false}");
    if (currentTransition !== transitions[0]) {
      props.push(` transition={${currentTransition.transition.name}}`);
      const paramsString = Object.entries(currentTransition.params).map(([key, value]) => {
        if (typeof value === "function") {
          return `${key}:${value.name}`;
        }
        return `${key}:${value}`;
      }).join(",");
      props.push(` params={{${paramsString}}}`);
    }
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<div class="relative h-40">
  <Banner${propsString}>
    My Banner
  </Banner>
</div>`;
  })();
  let builderExpand = false;
  let showBuilderExpandButton = isGeneratedCodeOverflow(generatedCode);
  const handleBuilderExpandClick = () => {
    builderExpand = !builderExpand;
  };
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
        $$payload3.out += `<!---->Banner`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Setup`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    HighlightCompo($$payload2, {
      code: exampleModules[`./examples/Setup.svelte`]
    });
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Interactive Banner Builder`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        DynamicCodeBlockHighlight($$payload3, {
          handleExpandClick: handleBuilderExpandClick,
          expand: builderExpand,
          showExpandButton: showBuilderExpandButton,
          code: generatedCode
        });
      };
      CodeWrapper($$payload2, {
        class: "relative",
        innerClass: "p-0",
        codeblock,
        children: ($$payload3) => {
          const each_array = ensure_array_like(colors);
          const each_array_1 = ensure_array_like(transitions);
          $$payload3.out += `<div class="mb-4 h-[670px] md:h-[480px]"><div class="p-6">`;
          Skeleton($$payload3, { class: "py-4" });
          $$payload3.out += `<!----> `;
          ImagePlaceholder($$payload3, { class: "py-4" });
          $$payload3.out += `<!----></div> `;
          Banner($$payload3, {
            id: "sample-banner",
            position,
            bannerType,
            color,
            class: bannerClass,
            get bannerStatus() {
              return bannerStatus;
            },
            set bannerStatus($$value) {
              bannerStatus = $$value;
              $$settled = false;
            },
            transition: currentTransition.transition,
            params: currentTransition.params,
            children: ($$payload4) => {
              $$payload4.out += `<p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"><span class="me-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600">`;
              BullhornOutline($$payload4, {
                class: "h-3 w-3 text-gray-500 dark:text-gray-400"
              });
              $$payload4.out += `<!----> <span class="sr-only">Light bulb</span></span> <span>New brand identity has been launched for the <a href="https://flowbite.com" class="decoration-600 dark:decoration-500 inline font-medium text-primary-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-primary-500">Flowbite Library</a></span></p>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="p-6"><div class="mb-4 h-12">`;
          Button($$payload3, {
            class: "w-48",
            disabled: bannerStatus ? true : false,
            onclick: changeStatus,
            children: ($$payload4) => {
              $$payload4.out += `<!---->Open banner`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="mb-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Color`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let colorOption = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-24 my-1",
              name: "color",
              get group() {
                return color;
              },
              set group($$value) {
                color = $$value;
                $$settled = false;
              },
              color: colorOption,
              value: colorOption,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(colorOption)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Transition`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let transition = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: "w-16 my-1",
              name: "interactive_transition",
              get group() {
                return selectedTransition;
              },
              set group($$value) {
                selectedTransition = $$value;
                $$settled = false;
              },
              value: transition.name,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(transition.name)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-40",
            onclick: changePosition,
            children: ($$payload4) => {
              $$payload4.out += `<!---->Position: ${escape_html(position === "sticky" ? "absolute" : "sticky")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "blue",
            onclick: changeBannerType,
            children: ($$payload4) => {
              $$payload4.out += `<!---->Type: ${escape_html(bannerType === "default" ? "cta" : "default")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "green",
            onclick: changeClass,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(bannerClass ? "Remove class" : "Add class")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div></div>`;
        },
        $$slots: { codeblock: true, default: true }
      });
    }
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
          expand: exampleExpand,
          showExpandButton,
          code: exampleModules[`./examples/${svelteCode}`]
        });
      };
      CodeWrapper($$payload2, {
        innerClass: "p-0",
        codeblock,
        children: ($$payload3) => {
          const each_array_2 = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-4 flex flex-wrap p-6">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Example`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let style = each_array_2[$$index_2];
            Radio($$payload3, {
              labelClass: "w-64 my-1",
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
