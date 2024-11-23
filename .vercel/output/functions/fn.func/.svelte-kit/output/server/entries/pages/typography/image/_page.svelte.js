import { Q as push, W as attr, S as pop, a0 as spread_attributes, Y as ensure_array_like, a3 as copy_payload, a4 as assign_payload, V as escape_html } from "../../../../chunks/index.js";
import { aX as img } from "../../../../chunks/theme.js";
import { h as html, B as Button, a as Badge } from "../../../../chunks/markdown.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
function Img($$payload, $$props) {
  push();
  let {
    size = "none",
    alignment = "left",
    effect = "none",
    shadow = "none",
    rounded = "none",
    caption,
    imgClass,
    figClass,
    captionClass,
    href,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let { base, figure, figureCaption } = img({ size, alignment, effect, shadow, rounded });
  function imageSlot($$payload2) {
    if (caption) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<figure${attr("class", figure({ class: figClass }))}><img${spread_attributes({
        ...restProps,
        class: base({ class: imgClass })
      })} onload="this.__e=event" onerror="this.__e=event"> <figcaption${attr("class", figureCaption({ class: captionClass }))}>${html(caption)}</figcaption></figure>`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<img${spread_attributes({
        ...restProps,
        class: base({ class: imgClass })
      })} onload="this.__e=event" onerror="this.__e=event">`;
    }
    $$payload2.out += `<!--]-->`;
  }
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", href)}>`;
    imageSlot($$payload);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    imageSlot($$payload);
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function ImgEnhanced($$payload, $$props) {
  push();
  let {
    src,
    size = "none",
    alignment = "left",
    effect = "none",
    shadow = "none",
    rounded = "none",
    caption,
    imgClass,
    figClass,
    captionClass,
    href,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let { base, figure, figureCaption } = img({ size, alignment, effect, shadow, rounded });
  function imageSlot($$payload2) {
    if (caption) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<figure${attr("class", figure({ class: figClass }))}>`;
      if (typeof src === "string") {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<img${spread_attributes({
          ...restProps,
          src: src.img.src,
          class: base({ class: imgClass }),
          width: src.img.w,
          height: src.img.h
        })} onload="this.__e=event" onerror="this.__e=event">`;
      } else {
        $$payload2.out += "<!--[!-->";
        const each_array = ensure_array_like(Object.entries(src.sources));
        $$payload2.out += `<picture><!--[-->`;
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let [format, srcset] = each_array[$$index];
          $$payload2.out += `<source${attr("srcset", srcset)}${attr("type", "image/" + format)}>`;
        }
        $$payload2.out += `<!--]--> <img${spread_attributes({
          ...restProps,
          src: src.img.src,
          class: base({ class: imgClass }),
          width: src.img.w,
          height: src.img.h
        })} onload="this.__e=event" onerror="this.__e=event"></picture>`;
      }
      $$payload2.out += `<!--]--> <figcaption${attr("class", figureCaption({ class: captionClass }))}>${html(caption)}</figcaption></figure>`;
    } else {
      $$payload2.out += "<!--[!-->";
      if (typeof src === "string") {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<img${spread_attributes({
          ...restProps,
          src: src.img.src,
          class: base({ class: imgClass }),
          width: src.img.w,
          height: src.img.h
        })} onload="this.__e=event" onerror="this.__e=event">`;
      } else {
        $$payload2.out += "<!--[!-->";
        const each_array_1 = ensure_array_like(Object.entries(src.sources));
        $$payload2.out += `<picture><!--[-->`;
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let [format, srcset] = each_array_1[$$index_1];
          $$payload2.out += `<source${attr("srcset", srcset)}${attr("type", "image/" + format)}>`;
        }
        $$payload2.out += `<!--]--> <img${spread_attributes({
          ...restProps,
          src: src.img.src,
          class: base({ class: imgClass }),
          width: src.img.w,
          height: src.img.h
        })} onload="this.__e=event" onerror="this.__e=event"></picture>`;
      }
      $$payload2.out += `<!--]-->`;
    }
    $$payload2.out += `<!--]-->`;
  }
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", href)}>`;
    imageSlot($$payload);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    imageSlot($$payload);
  }
  $$payload.out += `<!--]-->`;
  pop();
}
const __vite_glob_0_0 = '<script>\n  import { ImgEnhanced } from "$lib";\n  import MyImage from "./garnished.webp?enhanced";\n<\/script>\n\n<ImgEnhanced src={MyImage} alt="An alt text" caption="This is a caption" />\n';
const __vite_glob_0_1 = '<script>\n  import { EnhancedImg } from "$lib";\n  import MyImage from "./garnished.webp?enhanced";\n<\/script>\n\n<EnhancedImg src={MyImage} alt="An alt text" caption="This is a caption" />\n';
const __vite_glob_0_2 = '<script lang="ts">\n  import { Img } from "$lib";\n<\/script>\n\n<div class="flex justify-center">\n  <Img srcset="/images/examples/image-1.jpg 1x, /images/examples/image-1@2x.jpg 2x" alt="sample 1" class="w-full max-w-xl rounded-lg" />\n</div>\n';
const __vite_glob_0_3 = '<script>\n  import { Img } from "svelte-5-ui-lib";\n<\/script>\n';
function RetinaReady($$payload) {
  $$payload.out += `<div class="flex justify-center">`;
  Img($$payload, {
    srcset: "/images/examples/image-1.jpg 1x, /images/examples/image-1@2x.jpg 2x",
    alt: "sample 1",
    class: "w-full max-w-xl rounded-lg"
  });
  $$payload.out += `<!----></div>`;
}
const MyImage = {
  sources: {
    avif: "/_app/immutable/assets/garnished.BkQnFkyS.avif 925w, /_app/immutable/assets/garnished.ziIfAfZ7.avif 1850w",
    webp: "/_app/immutable/assets/garnished.VPMenER1.webp 925w, /_app/immutable/assets/garnished.BrH-V07o.webp 1850w",
    png: "/_app/immutable/assets/garnished.OF7x5Emd.png 925w, /_app/immutable/assets/garnished.Dab1lv_v.png 1850w"
  },
  img: {
    src: "/_app/immutable/assets/garnished.Dab1lv_v.png",
    w: 1850,
    h: 1233
  }
};
function Enhanced($$payload) {
  ImgEnhanced($$payload, {
    src: MyImage,
    alt: "An alt text",
    caption: "This is a caption"
  });
}
function _page($$payload, $$props) {
  push();
  const dirName = "typography/img";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Enhanced.svelte": __vite_glob_0_0,
    "./examples/ImportEx.svelte": __vite_glob_0_1,
    "./examples/RetinaReady.svelte": __vite_glob_0_2,
    "./examples/Setup.svelte": __vite_glob_0_3
  });
  const exampleArr = [
    // { name: "Import ex", component: ExampleComponents.ImportEx },
    {
      name: "Enhanced",
      component: Enhanced
    },
    {
      name: "Retina ready",
      component: RetinaReady
    }
  ];
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  const sizes = Object.keys(img.variants.size);
  let imgSize = "none";
  const alignments = Object.keys(img.variants.alignment);
  let imgAlignment = "left";
  const effects = Object.keys(img.variants.effect);
  let imgEffect = "none";
  const shadows = Object.keys(img.variants.shadow);
  let imgShadow = "none";
  const roundeds = Object.keys(img.variants.rounded);
  let imgRounded = "none";
  let imgCaption = false;
  const changeImgCaption = () => {
    imgCaption = !imgCaption;
  };
  let imgHref = "";
  const changeImgHrf = () => {
    imgHref = imgHref === "" ? "/" : "";
  };
  let generatedCode = (() => {
    let props = [];
    if (imgSize !== "none") props.push(` size="${imgSize}"`);
    if (imgAlignment !== "left") props.push(` alignment="${imgAlignment}"`);
    if (imgEffect !== "none") props.push(` effect="${imgEffect}"`);
    if (imgShadow !== "none") props.push(` shadow="${imgShadow}"`);
    if (imgRounded !== "none") props.push(` rounded="${imgRounded}"`);
    if (imgEffect !== "none" && imgCaption) props.push(` figClass="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"`);
    if (imgEffect !== "none" && imgCaption) props.push(` captionClass="absolute bottom-6 px-4 text-lg text-white"`);
    if (imgCaption) props.push(` caption="Image caption"`);
    if (imgHref) props.push(` href="/"`);
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Img${propsString} src='/images/examples/content-gallery-1.png'/>`;
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
        $$payload3.out += `<!---->Image`;
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
        $$payload3.out += `<!---->Interactive Image Builder`;
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
        codeblock,
        children: ($$payload3) => {
          const each_array = ensure_array_like(sizes);
          const each_array_1 = ensure_array_like(alignments);
          const each_array_2 = ensure_array_like(shadows);
          const each_array_3 = ensure_array_like(roundeds);
          const each_array_4 = ensure_array_like(effects);
          $$payload3.out += `<div class="mb-4 overflow-y-auto md:h-[470px]">`;
          Img($$payload3, {
            src: imgEffect !== "none" ? "/images/examples/content-gallery-3.png" : imgRounded === "full" ? "/images/examples/image-4@2x.jpg" : "/images/examples/image-1@2x.jpg",
            size: imgSize,
            shadow: imgShadow,
            alignment: imgAlignment,
            rounded: imgRounded,
            alt: "sample 1",
            effect: imgEffect,
            figClass: imgEffect !== "none" && imgCaption ? "relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" : "",
            captionClass: imgEffect !== "none" && imgCaption ? "absolute bottom-6 px-4 text-lg text-white" : "",
            caption: imgEffect !== "none" ? "Do you want to get notified when a new component is added to Flowbite?" : imgCaption ? "Image caption" : "",
            href: imgHref
          });
          $$payload3.out += `<!----></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Size`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let option = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-16 my-1",
              name: "img_size",
              get group() {
                return imgSize;
              },
              set group($$value) {
                imgSize = $$value;
                $$settled = false;
              },
              value: option,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(option)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Alignment`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let alignment = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: "w-20 my-1",
              name: "img_alignment",
              get group() {
                return imgAlignment;
              },
              set group($$value) {
                imgAlignment = $$value;
                $$settled = false;
              },
              value: alignment,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(alignment)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Shadow`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let shadow = each_array_2[$$index_2];
            Radio($$payload3, {
              labelClass: "w-20 my-1",
              name: "img_shadow",
              get group() {
                return imgShadow;
              },
              set group($$value) {
                imgShadow = $$value;
                $$settled = false;
              },
              value: shadow,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(shadow)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Rounded`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
            let rounded = each_array_3[$$index_3];
            Radio($$payload3, {
              labelClass: "w-20 my-1",
              name: "img_rounded",
              get group() {
                return imgRounded;
              },
              set group($$value) {
                imgRounded = $$value;
                $$settled = false;
              },
              value: rounded,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(rounded)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Effect`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
            let effect = each_array_4[$$index_4];
            Radio($$payload3, {
              labelClass: "w-24 my-1",
              name: "img_effect",
              get group() {
                return imgEffect;
              },
              set group($$value) {
                imgEffect = $$value;
                $$settled = false;
              },
              value: effect,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(effect)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-48",
            color: "blue",
            onclick: changeImgCaption,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(imgCaption ? "Remove caption" : "Add caption")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-48",
            color: "lime",
            onclick: changeImgHrf,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(imgHref === "" ? "Add href" : "Remove href")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div>`;
        },
        $$slots: { codeblock: true, default: true }
      });
    }
    $$payload2.out += `<!----> `;
    Badge($$payload2, {
      large: true,
      class: "my-4",
      children: ($$payload3) => {
        $$payload3.out += `<!---->Warning: the caption is using @html.`;
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
          expand: exampleExpand,
          showExpandButton,
          code: exampleModules[`./examples/${svelteCode}`]
        });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          const each_array_5 = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-12 flex flex-wrap">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Example`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
            let style = each_array_5[$$index_5];
            Radio($$payload3, {
              labelClass: "w-40 my-1",
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
