import { Q as push, Y as ensure_array_like, W as attr, S as pop, a0 as spread_attributes, a3 as copy_payload, a4 as assign_payload, V as escape_html } from "../../../../chunks/index.js";
import { F as gallery } from "../../../../chunks/theme.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { g as getExampleFileName, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { B as Button } from "../../../../chunks/markdown.js";
function Gallery($$payload, $$props) {
  push();
  let {
    children,
    items = [],
    imgClass,
    divClass,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { image, div } = gallery();
  function figure($$payload2, item) {
    $$payload2.out += `<div><img${spread_attributes({
      src: item.src,
      alt: item.alt,
      class: image({ class: imgClass }),
      ...restProps
    })} onload="this.__e=event" onerror="this.__e=event"></div>`;
  }
  const each_array = ensure_array_like(items);
  $$payload.out += `<div${attr("class", div({ class: divClass }))}>`;
  if (each_array.length !== 0) {
    $$payload.out += "<!--[-->";
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      figure($$payload, item);
    }
  } else {
    $$payload.out += "<!--[!-->";
    if (children) {
      $$payload.out += "<!--[-->";
      children($$payload);
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div>`;
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Gallery, type ImgType } from "$lib";\n\n  const images9 = [\n    {\n      alt: "shoes",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"\n    },\n    {\n      alt: "small bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"\n    },\n    {\n      alt: "plants",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"\n    },\n    {\n      alt: "watch",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"\n    },\n    {\n      alt: "shoe",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"\n    }\n  ];\n<\/script>\n\n{#snippet figure(item: ImgType)}\n  <div class="p-1 ring-4 ring-red-600 dark:ring-red-400">\n    <img src={item.src} alt={item.alt} class="h-auto max-w-full" />\n  </div>\n{/snippet}\n\n<Gallery divClass="gap-4 grid-cols-3">\n  {#each images9 as item}\n    {@render figure(item)}\n  {/each}\n</Gallery>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Gallery } from "$lib";\n  const images = [\n    {\n      alt: "erbology",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"\n    },\n    {\n      alt: "shoes",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"\n    },\n    {\n      alt: "small bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"\n    },\n    {\n      alt: "plants",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"\n    },\n    {\n      alt: "watch",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"\n    },\n    {\n      alt: "shoe",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"\n    },\n    {\n      alt: "cream",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"\n    },\n    {\n      alt: "small bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"\n    },\n    {\n      alt: "lamp",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"\n    },\n    {\n      alt: "toiletbag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"\n    },\n    {\n      alt: "playstation",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"\n    },\n    {\n      alt: "bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"\n    }\n  ];\n<\/script>\n\n<Gallery items={images} divClass="gap-4 grid-cols-2 md:grid-cols-3" />\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Gallery } from "$lib";\n\n  const image5 = {\n    alt: "erbology",\n    src: "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"\n  };\n  const images6 = [\n    {\n      alt: "shoes",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"\n    },\n    {\n      alt: "small bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"\n    },\n    {\n      alt: "plants",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"\n    },\n    {\n      alt: "watch",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"\n    },\n    {\n      alt: "shoe",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"\n    }\n  ];\n<\/script>\n\n<Gallery divClass="gap-4">\n  <img src={image5.src} alt={image5.alt} class="h-auto max-w-full rounded-lg" />\n  <!-- Safari needs gap -->\n  <Gallery divClass="grid-cols-5 gap-4" items={images6} />\n</Gallery>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Gallery, Button } from "$lib";\n\n  const images8 = [\n    {\n      alt: "erbology",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"\n    },\n    {\n      alt: "shoes",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"\n    },\n    {\n      alt: "small bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"\n    },\n    {\n      alt: "plants",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"\n    },\n    {\n      alt: "watch",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"\n    },\n    {\n      alt: "shoe",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"\n    },\n    {\n      alt: "cream",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"\n    },\n    {\n      alt: "small bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"\n    },\n    {\n      alt: "lamp",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"\n    },\n    {\n      alt: "toiletbag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"\n    },\n    {\n      alt: "playstation",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"\n    },\n    {\n      alt: "bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"\n    }\n  ];\n<\/script>\n\n<div class="mx-auto mb-3 flex flex-wrap items-center justify-center gap-3 py-4 md:py-8">\n  <Button pill size="xl" outline>All categories</Button>\n  <Button pill size="xl" color="alternative">Shoes</Button>\n  <Button pill size="xl" color="alternative">Bags</Button>\n  <Button pill size="xl" color="alternative">Electronics</Button>\n  <Button pill size="xl" color="alternative">Gaming</Button>\n</div>\n\n<Gallery items={images8} divClass="gap-4 grid-cols-2 md:grid-cols-3" />\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Gallery } from "$lib";\n<\/script>\n\n<Gallery divClass="gap-4 grid-cols-2">\n  <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="shoas" class="max-w- h-auto rounded-lg" />\n  <div class="max-w- flex h-auto items-center justify-center rounded-lg bg-red-300 text-6xl font-extrabold">Sale</div>\n  <div class="max-w- flex h-auto items-center justify-center rounded-lg bg-blue-300 text-6xl font-extrabold">Sale</div>\n  <img alt="plants" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" class="max-w- h-auto rounded-lg" />\n</Gallery>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { Gallery } from "$lib";\n  const images1 = [\n    {\n      alt: "erbology",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"\n    },\n    {\n      alt: "shoes",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"\n    },\n    {\n      alt: "small bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"\n    }\n  ];\n  const images2 = [\n    {\n      alt: "plants",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"\n    },\n    {\n      alt: "watch",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"\n    },\n    {\n      alt: "shoe",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"\n    }\n  ];\n  const images3 = [\n    {\n      alt: "cream",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"\n    },\n    {\n      alt: "small bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"\n    },\n    {\n      alt: "lamp",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"\n    }\n  ];\n  const images4 = [\n    {\n      alt: "toiletbag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"\n    },\n    {\n      alt: "playstation",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"\n    },\n    {\n      alt: "bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"\n    }\n  ];\n<\/script>\n\n<Gallery divClass="gap-4 grid-cols-2 md:grid-cols-4">\n  <!-- Safari needs gap -->\n  <Gallery items={images1} divClass="gap-4" />\n  <Gallery items={images2} />\n  <Gallery items={images3} />\n  <Gallery items={images4} />\n</Gallery>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { Gallery } from "$lib";\n\n  const images7 = [\n    {\n      alt: "shoes",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"\n    },\n    {\n      alt: "small bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"\n    },\n    {\n      alt: "plants",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"\n    },\n    {\n      alt: "watch",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"\n    }\n  ];\n<\/script>\n\n<Gallery divClass="gap-2 grid-cols-2" items={images7} />\n';
function Default($$payload) {
  const images = [
    {
      alt: "erbology",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
    },
    {
      alt: "shoes",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
    },
    {
      alt: "small bag",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
    },
    {
      alt: "plants",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
    },
    {
      alt: "watch",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
    },
    {
      alt: "shoe",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
    },
    {
      alt: "cream",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
    },
    {
      alt: "small bag",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
    },
    {
      alt: "lamp",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
    },
    {
      alt: "toiletbag",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
    },
    {
      alt: "playstation",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
    },
    {
      alt: "bag",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
    }
  ];
  Gallery($$payload, {
    items: images,
    divClass: "gap-4 grid-cols-2 md:grid-cols-3"
  });
}
function CustomImageRendering($$payload) {
  const images9 = [
    {
      alt: "shoes",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
    },
    {
      alt: "small bag",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
    },
    {
      alt: "plants",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
    },
    {
      alt: "watch",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
    },
    {
      alt: "shoe",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
    }
  ];
  function figure($$payload2, item) {
    $$payload2.out += `<div class="p-1 ring-4 ring-red-600 dark:ring-red-400"><img${attr("src", item.src)}${attr("alt", item.alt)} class="h-auto max-w-full"></div>`;
  }
  Gallery($$payload, {
    divClass: "gap-4 grid-cols-3",
    children: ($$payload2) => {
      const each_array = ensure_array_like(images9);
      $$payload2.out += `<!--[-->`;
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let item = each_array[$$index];
        figure($$payload2, item);
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
}
function FeaturedImage($$payload) {
  const image5 = {
    alt: "erbology",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
  };
  const images6 = [
    {
      alt: "shoes",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
    },
    {
      alt: "small bag",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
    },
    {
      alt: "plants",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
    },
    {
      alt: "watch",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
    },
    {
      alt: "shoe",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
    }
  ];
  Gallery($$payload, {
    divClass: "gap-4",
    children: ($$payload2) => {
      $$payload2.out += `<img${attr("src", image5.src)}${attr("alt", image5.alt)} class="h-auto max-w-full rounded-lg"> `;
      Gallery($$payload2, { divClass: "grid-cols-5 gap-4", items: images6 });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function GalleryWithTag($$payload) {
  const images8 = [
    {
      alt: "erbology",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
    },
    {
      alt: "shoes",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
    },
    {
      alt: "small bag",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
    },
    {
      alt: "plants",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
    },
    {
      alt: "watch",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
    },
    {
      alt: "shoe",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
    },
    {
      alt: "cream",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
    },
    {
      alt: "small bag",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
    },
    {
      alt: "lamp",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
    },
    {
      alt: "toiletbag",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
    },
    {
      alt: "playstation",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
    },
    {
      alt: "bag",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
    }
  ];
  $$payload.out += `<div class="mx-auto mb-3 flex flex-wrap items-center justify-center gap-3 py-4 md:py-8">`;
  Button($$payload, {
    pill: true,
    size: "xl",
    outline: true,
    children: ($$payload2) => {
      $$payload2.out += `<!---->All categories`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    pill: true,
    size: "xl",
    color: "alternative",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Shoes`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    pill: true,
    size: "xl",
    color: "alternative",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Bags`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    pill: true,
    size: "xl",
    color: "alternative",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Electronics`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  Button($$payload, {
    pill: true,
    size: "xl",
    color: "alternative",
    children: ($$payload2) => {
      $$payload2.out += `<!---->Gaming`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Gallery($$payload, {
    items: images8,
    divClass: "gap-4 grid-cols-2 md:grid-cols-3"
  });
  $$payload.out += `<!---->`;
}
function Heterogeneous($$payload) {
  Gallery($$payload, {
    divClass: "gap-4 grid-cols-2",
    children: ($$payload2) => {
      $$payload2.out += `<img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="shoas" class="max-w- h-auto rounded-lg"> <div class="max-w- flex h-auto items-center justify-center rounded-lg bg-red-300 text-6xl font-extrabold">Sale</div> <div class="max-w- flex h-auto items-center justify-center rounded-lg bg-blue-300 text-6xl font-extrabold">Sale</div> <img alt="plants" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" class="max-w- h-auto rounded-lg">`;
    },
    $$slots: { default: true }
  });
}
function MansoryGrid($$payload) {
  const images1 = [
    {
      alt: "erbology",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
    },
    {
      alt: "shoes",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
    },
    {
      alt: "small bag",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
    }
  ];
  const images2 = [
    {
      alt: "plants",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
    },
    {
      alt: "watch",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
    },
    {
      alt: "shoe",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
    }
  ];
  const images3 = [
    {
      alt: "cream",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
    },
    {
      alt: "small bag",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
    },
    {
      alt: "lamp",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
    }
  ];
  const images4 = [
    {
      alt: "toiletbag",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
    },
    {
      alt: "playstation",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
    },
    {
      alt: "bag",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
    }
  ];
  Gallery($$payload, {
    divClass: "gap-4 grid-cols-2 md:grid-cols-4",
    children: ($$payload2) => {
      Gallery($$payload2, { items: images1, divClass: "gap-4" });
      $$payload2.out += `<!----> `;
      Gallery($$payload2, { items: images2 });
      $$payload2.out += `<!----> `;
      Gallery($$payload2, { items: images3 });
      $$payload2.out += `<!----> `;
      Gallery($$payload2, { items: images4 });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function Quad($$payload) {
  const images7 = [
    {
      alt: "shoes",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
    },
    {
      alt: "small bag",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
    },
    {
      alt: "plants",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
    },
    {
      alt: "watch",
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
    }
  ];
  Gallery($$payload, { divClass: "gap-2 grid-cols-2", items: images7 });
}
function _page($$payload, $$props) {
  push();
  const dirName = "gallery";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/CustomImageRendering.svelte": __vite_glob_0_0,
    "./examples/Default.svelte": __vite_glob_0_1,
    "./examples/FeaturedImage.svelte": __vite_glob_0_2,
    "./examples/GalleryWithTag.svelte": __vite_glob_0_3,
    "./examples/Heterogeneous.svelte": __vite_glob_0_4,
    "./examples/MansoryGrid.svelte": __vite_glob_0_5,
    "./examples/Quad.svelte": __vite_glob_0_6
  });
  const exampleArr = [
    {
      name: "Default",
      component: Default
    },
    {
      name: "Mansory grid",
      component: MansoryGrid
    },
    {
      name: "Featured image",
      component: FeaturedImage
    },
    {
      name: "Quad",
      component: Quad
    },
    {
      name: "Gallery with tag",
      component: GalleryWithTag
    },
    {
      name: "Heterogeneous",
      component: Heterogeneous
    },
    {
      name: "Custom image rendering",
      component: CustomImageRendering
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
        $$payload3.out += `<!---->Gallery`;
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
              labelClass: "w-48 my-1",
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
