import { c as comment, a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, f as first_child, r as reset, t as template_effect, a as pop, c as child, h as noop, b as get, d as derived, s as sibling, n as next, a6 as state, u as user_effect, a7 as set } from "../chunks/runtime.BkfDdwap.js";
import { r as replay_events, a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { p as prop, i as if_block, r as rest_props, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { a_ as gallery, h as action, a as set_attributes, j as handle_lazy_img, b as set_class, s as set_attribute, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { g as getExampleFileName, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
var root_1$4 = template(`<div><img></div>`);
var root$2 = template(`<div></div>`);
function Gallery($$anchor, $$props) {
  push($$props, true);
  const figure = ($$anchor2, item = noop) => {
    var div_1 = root_1$4();
    var img = child(div_1);
    let attributes;
    reset(div_1);
    template_effect(() => attributes = set_attributes(img, attributes, {
      src: item().src,
      alt: item().alt,
      class: image({ class: $$props.imgClass }),
      ...restProps
    }));
    handle_lazy_img(img);
    replay_events(img);
    append($$anchor2, div_1);
  };
  let items = prop($$props, "items", 19, () => []), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "items",
    "imgClass",
    "divClass"
  ]);
  function init(node) {
    if (getComputedStyle(node).gap === "normal") node.style.gap = "inherit";
  }
  const { image, div } = gallery();
  var div_2 = root$2();
  const class_derived = derived(() => div({ class: $$props.divClass }));
  each(
    div_2,
    21,
    items,
    index,
    ($$anchor2, item) => {
      figure($$anchor2, () => get(item));
    },
    ($$anchor2) => {
      var fragment_1 = comment();
      var node_1 = first_child(fragment_1);
      if_block(node_1, () => $$props.children, ($$anchor3) => {
        var fragment_2 = comment();
        var node_2 = first_child(fragment_2);
        snippet(node_2, () => $$props.children);
        append($$anchor3, fragment_2);
      });
      append($$anchor2, fragment_1);
    }
  );
  reset(div_2);
  action(div_2, ($$node) => init($$node));
  template_effect(() => set_class(div_2, get(class_derived)));
  append($$anchor, div_2);
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Gallery, type ImgType } from "$lib";\n\n  const images9 = [\n    {\n      alt: "shoes",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"\n    },\n    {\n      alt: "small bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"\n    },\n    {\n      alt: "plants",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"\n    },\n    {\n      alt: "watch",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"\n    },\n    {\n      alt: "shoe",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"\n    }\n  ];\n<\/script>\n\n{#snippet figure(item: ImgType)}\n  <div class="p-1 ring-4 ring-red-600 dark:ring-red-400">\n    <img src={item.src} alt={item.alt} class="h-auto max-w-full" />\n  </div>\n{/snippet}\n\n<Gallery divClass="gap-4 grid-cols-3">\n  {#each images9 as item}\n    {@render figure(item)}\n  {/each}\n</Gallery>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Gallery } from "$lib";\n  const images = [\n    {\n      alt: "erbology",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"\n    },\n    {\n      alt: "shoes",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"\n    },\n    {\n      alt: "small bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"\n    },\n    {\n      alt: "plants",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"\n    },\n    {\n      alt: "watch",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"\n    },\n    {\n      alt: "shoe",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"\n    },\n    {\n      alt: "cream",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"\n    },\n    {\n      alt: "small bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"\n    },\n    {\n      alt: "lamp",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"\n    },\n    {\n      alt: "toiletbag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"\n    },\n    {\n      alt: "playstation",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"\n    },\n    {\n      alt: "bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"\n    }\n  ];\n<\/script>\n\n<Gallery items={images} divClass="gap-4 grid-cols-2 md:grid-cols-3" />\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Gallery } from "$lib";\n\n  const image5 = {\n    alt: "erbology",\n    src: "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"\n  };\n  const images6 = [\n    {\n      alt: "shoes",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"\n    },\n    {\n      alt: "small bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"\n    },\n    {\n      alt: "plants",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"\n    },\n    {\n      alt: "watch",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"\n    },\n    {\n      alt: "shoe",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"\n    }\n  ];\n<\/script>\n\n<Gallery divClass="gap-4">\n  <img src={image5.src} alt={image5.alt} class="h-auto max-w-full rounded-lg" />\n  <!-- Safari needs gap -->\n  <Gallery divClass="grid-cols-5 gap-4" items={images6} />\n</Gallery>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Gallery, Button } from "$lib";\n\n  const images8 = [\n    {\n      alt: "erbology",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"\n    },\n    {\n      alt: "shoes",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"\n    },\n    {\n      alt: "small bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"\n    },\n    {\n      alt: "plants",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"\n    },\n    {\n      alt: "watch",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"\n    },\n    {\n      alt: "shoe",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"\n    },\n    {\n      alt: "cream",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"\n    },\n    {\n      alt: "small bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"\n    },\n    {\n      alt: "lamp",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"\n    },\n    {\n      alt: "toiletbag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"\n    },\n    {\n      alt: "playstation",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"\n    },\n    {\n      alt: "bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"\n    }\n  ];\n<\/script>\n\n<div class="mx-auto mb-3 flex flex-wrap items-center justify-center gap-3 py-4 md:py-8">\n  <Button pill size="xl" outline>All categories</Button>\n  <Button pill size="xl" color="alternative">Shoes</Button>\n  <Button pill size="xl" color="alternative">Bags</Button>\n  <Button pill size="xl" color="alternative">Electronics</Button>\n  <Button pill size="xl" color="alternative">Gaming</Button>\n</div>\n\n<Gallery items={images8} divClass="gap-4 grid-cols-2 md:grid-cols-3" />\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Gallery } from "$lib";\n<\/script>\n\n<Gallery divClass="gap-4 grid-cols-2">\n  <img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="shoas" class="max-w- h-auto rounded-lg" />\n  <div class="max-w- flex h-auto items-center justify-center rounded-lg bg-red-300 text-6xl font-extrabold">Sale</div>\n  <div class="max-w- flex h-auto items-center justify-center rounded-lg bg-blue-300 text-6xl font-extrabold">Sale</div>\n  <img alt="plants" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" class="max-w- h-auto rounded-lg" />\n</Gallery>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { Gallery } from "$lib";\n  const images1 = [\n    {\n      alt: "erbology",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"\n    },\n    {\n      alt: "shoes",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"\n    },\n    {\n      alt: "small bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"\n    }\n  ];\n  const images2 = [\n    {\n      alt: "plants",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"\n    },\n    {\n      alt: "watch",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"\n    },\n    {\n      alt: "shoe",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"\n    }\n  ];\n  const images3 = [\n    {\n      alt: "cream",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"\n    },\n    {\n      alt: "small bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"\n    },\n    {\n      alt: "lamp",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"\n    }\n  ];\n  const images4 = [\n    {\n      alt: "toiletbag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"\n    },\n    {\n      alt: "playstation",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"\n    },\n    {\n      alt: "bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"\n    }\n  ];\n<\/script>\n\n<Gallery divClass="gap-4 grid-cols-2 md:grid-cols-4">\n  <!-- Safari needs gap -->\n  <Gallery items={images1} divClass="gap-4" />\n  <Gallery items={images2} />\n  <Gallery items={images3} />\n  <Gallery items={images4} />\n</Gallery>\n';
const __vite_glob_0_6 = '<script lang="ts">\n  import { Gallery } from "$lib";\n\n  const images7 = [\n    {\n      alt: "shoes",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"\n    },\n    {\n      alt: "small bag",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"\n    },\n    {\n      alt: "plants",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"\n    },\n    {\n      alt: "watch",\n      src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"\n    }\n  ];\n<\/script>\n\n<Gallery divClass="gap-2 grid-cols-2" items={images7} />\n';
function Default($$anchor) {
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
  Gallery($$anchor, {
    items: images,
    divClass: "gap-4 grid-cols-2 md:grid-cols-3"
  });
}
var root_1$3 = template(`<div class="p-1 ring-4 ring-red-600 dark:ring-red-400"><img class="h-auto max-w-full"></div>`);
function CustomImageRendering($$anchor) {
  const figure = ($$anchor2, item = noop) => {
    var div = root_1$3();
    var img = child(div);
    reset(div);
    template_effect(() => {
      set_attribute(img, "src", item().src);
      set_attribute(img, "alt", item().alt);
    });
    append($$anchor2, div);
  };
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
  Gallery($$anchor, {
    divClass: "gap-4 grid-cols-3",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = comment();
      var node = first_child(fragment_1);
      each(node, 1, () => images9, index, ($$anchor3, item) => {
        figure($$anchor3, () => get(item));
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_1$2 = template(`<img class="h-auto max-w-full rounded-lg"> <!>`, 1);
function FeaturedImage($$anchor) {
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
  Gallery($$anchor, {
    divClass: "gap-4",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$2();
      var img = first_child(fragment_1);
      var node = sibling(img, 2);
      Gallery(node, { divClass: "grid-cols-5 gap-4", items: images6 });
      template_effect(() => {
        set_attribute(img, "src", image5.src);
        set_attribute(img, "alt", image5.alt);
      });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root$1 = template(`<div class="mx-auto mb-3 flex flex-wrap items-center justify-center gap-3 py-4 md:py-8"><!> <!> <!> <!> <!></div> <!>`, 1);
function GalleryWithTag($$anchor) {
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
  var fragment = root$1();
  var div = first_child(fragment);
  var node = child(div);
  Button(node, {
    pill: true,
    size: "xl",
    outline: true,
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("All categories");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  Button(node_1, {
    pill: true,
    size: "xl",
    color: "alternative",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Shoes");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  Button(node_2, {
    pill: true,
    size: "xl",
    color: "alternative",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Bags");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_3 = sibling(node_2, 2);
  Button(node_3, {
    pill: true,
    size: "xl",
    color: "alternative",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_3 = text("Electronics");
      append($$anchor2, text_3);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_3, 2);
  Button(node_4, {
    pill: true,
    size: "xl",
    color: "alternative",
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_4 = text("Gaming");
      append($$anchor2, text_4);
    },
    $$slots: { default: true }
  });
  reset(div);
  var node_5 = sibling(div, 2);
  Gallery(node_5, {
    items: images8,
    divClass: "gap-4 grid-cols-2 md:grid-cols-3"
  });
  append($$anchor, fragment);
}
var root_1$1 = template(`<img src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="shoas" class="max-w- h-auto rounded-lg"> <div class="max-w- flex h-auto items-center justify-center rounded-lg bg-red-300 text-6xl font-extrabold">Sale</div> <div class="max-w- flex h-auto items-center justify-center rounded-lg bg-blue-300 text-6xl font-extrabold">Sale</div> <img alt="plants" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" class="max-w- h-auto rounded-lg">`, 1);
function Heterogeneous($$anchor) {
  Gallery($$anchor, {
    divClass: "gap-4 grid-cols-2",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1$1();
      next(6);
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
var root_1 = template(`<!> <!> <!> <!>`, 1);
function MansoryGrid($$anchor) {
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
  Gallery($$anchor, {
    divClass: "gap-4 grid-cols-2 md:grid-cols-4",
    children: ($$anchor2, $$slotProps) => {
      var fragment_1 = root_1();
      var node = first_child(fragment_1);
      Gallery(node, { items: images1, divClass: "gap-4" });
      var node_1 = sibling(node, 2);
      Gallery(node_1, { items: images2 });
      var node_2 = sibling(node_1, 2);
      Gallery(node_2, { items: images3 });
      var node_3 = sibling(node_2, 2);
      Gallery(node_3, { items: images4 });
      append($$anchor2, fragment_1);
    },
    $$slots: { default: true }
  });
}
function Quad($$anchor) {
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
  Gallery($$anchor, { divClass: "gap-2 grid-cols-2", items: images7 });
}
var root_3 = template(`<div class="mb-8 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
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
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  let codeBlock = uiHelpers();
  let exampleExpand = state(false);
  let showExpandButton = derived(() => isSvelteOverflow(get(svelteCode), exampleModules));
  const handleExpandClick = () => {
    set(exampleExpand, !get(exampleExpand));
  };
  user_effect(() => {
    set(exampleExpand, proxy(codeBlock.isOpen));
  });
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Gallery");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  {
    const codeblock = ($$anchor2) => {
      DynamicCodeBlockHighlight($$anchor2, {
        replaceLib: true,
        handleExpandClick,
        get expand() {
          return get(exampleExpand);
        },
        get showExpandButton() {
          return get(showExpandButton);
        },
        get code() {
          return exampleModules[`./examples/${get(svelteCode)}`];
        }
      });
    };
    CodeWrapper(node_1, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_2 = root_3();
        var div = first_child(fragment_2);
        var node_2 = child(div);
        Label(node_2, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_1 = text("Example");
            append($$anchor3, text_1);
          },
          $$slots: { default: true }
        });
        var node_3 = sibling(node_2, 2);
        each(node_3, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-48 my-1",
            onclick: () => set(exampleExpand, false),
            name: "block_style",
            get group() {
              return get(selectedExample);
            },
            set group($$value) {
              set(selectedExample, proxy($$value));
            },
            get value() {
              return get(style).name;
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_2 = text();
              template_effect(() => set_text(text_2, get(style).name));
              append($$anchor4, text_2);
            },
            $$slots: { default: true }
          });
        });
        reset(div);
        var node_4 = sibling(div, 2);
        component(node_4, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_5 = sibling(node_1, 2);
  H2(node_5, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_3 = text("Component data");
      append($$anchor2, text_3);
    },
    $$slots: { default: true }
  });
  var node_6 = sibling(node_5, 2);
  CompoAttributesViewer(node_6, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
