import { Q as push, a0 as spread_attributes, W as attr, S as pop, Y as ensure_array_like, a3 as copy_payload, a4 as assign_payload, V as escape_html } from "../../../../chunks/index.js";
import { aw as cardPlaceholder, ax as listPlaceholder, ay as testimonialPlaceholder, az as videoPlaceholder, aA as widgetPlaceholder, a7 as skeleton, a6 as imagePlaceholder } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { S as Skeleton, I as ImagePlaceholder } from "../../../../chunks/Skeleton.js";
import { T as TextPlaceholder } from "../../../../chunks/TextPlaceholder.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
function CardPlaceholder($$payload, $$props) {
  push();
  let {
    size = "sm",
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const {
    base,
    imageArea,
    imageIcon,
    line,
    footerArea
  } = cardPlaceholder({ size });
  $$payload.out += `<div${spread_attributes({
    role: "status",
    ...restProps,
    class: base({ className })
  })}><div${attr("class", imageArea())}><svg width="48" height="48"${attr("class", imageIcon())} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"></path></svg></div> <div${attr("class", line({ class: "mb-4 h-2.5 w-1/2" }))}></div> <div${attr("class", line({ class: "mb-2.5 h-2" }))}></div> <div${attr("class", line({ class: "mb-2.5 h-2" }))}></div> <div${attr("class", line({ class: "h-2" }))}></div> <div${attr("class", footerArea())}><svg${attr("class", line({ class: "h-14 w-14" }))} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg> <div${attr("class", line({ class: "mb-2 h-2.5 w-32" }))}></div> <div${attr("class", line({ class: "mb-2 h-2 w-32" }))}></div></div> <span class="sr-only">Loading...</span></div>`;
  pop();
}
function ListPlaceholder($$payload, $$props) {
  push();
  let {
    itemNumber = 5,
    size = "md",
    rounded,
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const {
    base,
    item,
    itemContent,
    itemTitle,
    itemSubtitle,
    itemExtra
  } = listPlaceholder({ size, rounded });
  let items = [...Array(itemNumber).keys()];
  const each_array = ensure_array_like(items);
  $$payload.out += `<div${spread_attributes({
    role: "status",
    ...restProps,
    class: base({ className })
  })}><!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    each_array[i];
    $$payload.out += `<div${attr("class", item({ class: i > 0 ? "pt-4" : "" }))}><div${attr("class", itemContent())}><div${attr("class", itemTitle())}></div> <div${attr("class", itemSubtitle())}></div></div> <div${attr("class", itemExtra())}></div></div>`;
  }
  $$payload.out += `<!--]--> <span class="sr-only">Loading...</span></div>`;
  pop();
}
function TestimonialPlaceholder($$payload, $$props) {
  push();
  let {
    class: className,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { wrapper, line1, line2, svg, subContent } = testimonialPlaceholder();
  $$payload.out += `<div${spread_attributes({
    role: "status",
    ...restProps,
    class: wrapper({ className })
  })}><div${attr("class", line2({ class: "mx-auto mb-2.5 h-2.5 max-w-[640px]" }))}></div> <div${attr("class", line2({ class: "mx-auto h-2.5 max-w-[540px]" }))}></div> <div${attr("class", subContent())}><svg${attr("class", svg())} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg> <div${attr("class", line1({ class: "me-3 h-2.5 w-20" }))}></div> <div${attr("class", line1({ class: "h-2 w-24" }))}></div></div> <span class="sr-only">Loading...</span></div>`;
  pop();
}
function VideoPlaceholder($$payload, $$props) {
  push();
  let { size = "sm", class: className } = $$props;
  const base = videoPlaceholder({ size, className });
  $$payload.out += `<div role="status"${attr("class", base)}><svg width="48" height="48" class="text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 384 512"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"></path></svg> <span class="sr-only">Loading...</span></div>`;
  pop();
}
function WidgetPlaceholder($$payload, $$props) {
  push();
  let { class: className } = $$props;
  const { base, wrapper, vLine, hLine } = widgetPlaceholder({});
  $$payload.out += `<div role="status"${attr("class", base({ className }))}><div${attr("class", hLine({ class: "mb-2.5 h-2.5 w-32" }))}></div> <div${attr("class", hLine({ class: "mb-10 h-2 w-48" }))}></div> <div${attr("class", wrapper())}><div${attr("class", vLine({ class: "h-72" }))}></div> <div${attr("class", vLine({ class: "h-56" }))}></div> <div${attr("class", vLine({ class: "h-72" }))}></div> <div${attr("class", vLine({ class: "h-64" }))}></div> <div${attr("class", vLine({ class: "h-80" }))}></div> <div${attr("class", vLine({ class: "h-72" }))}></div> <div${attr("class", vLine({ class: "h-80" }))}></div></div> <span class="sr-only">Loading...</span></div>`;
  pop();
}
const __vite_glob_0_0 = '<script>\n  import { Skeleton, CardPlaceholder, ImagePlaceholder, VideoPlaceholder, TextPlaceholder, WidgetPlaceholder, ListPlaceholder, TestimonialPlaceholder } from "svelte-5-ui-lib";\n<\/script>\n';
function _page($$payload, $$props) {
  push();
  const dirName = "skeleton";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Setup.svelte": __vite_glob_0_0
  });
  const skeletonSizes = Object.keys(skeleton.variants.size);
  let skeletonSize = "sm";
  const imageSizes = Object.keys(imagePlaceholder.variants.size);
  let imagePlaceholderSize = "md";
  let imagePlaceholderRounded = "none";
  const videoSizes = skeletonSizes;
  let videoPlaceholderSize = "sm";
  const imageRoundedSizes = Object.keys(imagePlaceholder.variants.rounded);
  const textSizes = skeletonSizes;
  let textPlaceholderSize = "sm";
  const cardSizes = skeletonSizes;
  let cardPlaceholderSize = "sm";
  const listSizes = imageSizes;
  const listRoundedSizes = imageRoundedSizes;
  const listItemNumbers = [1, 2, 3, 4, 5];
  let listPlaceholderSize = "md";
  let listPlaceholderRounded = "none";
  let listPlaceholderItemNumber = 5;
  let skeletonClass = "";
  let imagePlaceholderClass = "";
  let videoPlaceholderClass = "";
  let textPlaceholderClass = "";
  let cardPlaceholderClass = "";
  let widgetPlaceholderClass = "";
  let listPlaceholderClass = "";
  let TestimonialPlaceholderClass = "";
  const generatePlaceholderCode = (componentName, size, classes) => {
    let props = [];
    if (componentName === "Skeleton" && size !== "sm") props.push(` size="${size}"`);
    if (componentName === "ImagePlaceholder" && size !== "md") props.push(` size="${size}"`);
    if (componentName === "VideoPlaceholder" && size !== "sm") props.push(` size="${size}"`);
    if (componentName === "TextPlaceholder" && size !== "sm") props.push(` size="${size}"`);
    if (componentName === "CardPlaceholder" && size !== "sm") props.push(` size="${size}"`);
    if (componentName === "ListPlaceholder" && size !== "md") props.push(` size="${size}"`);
    if (classes !== "") props.push(` class="${classes}"`);
    if (componentName === "ImagePlaceholder" && imagePlaceholderRounded !== "none") props.push(` rounded="${imagePlaceholderRounded}"`);
    if (componentName === "ListPlaceholder" && listPlaceholderItemNumber !== 5) props.push(` itemNumber={${listPlaceholderItemNumber}}`);
    if (componentName === "ListPlaceholder" && listPlaceholderRounded !== "none") props.push(` rounded="${listPlaceholderRounded}"`);
    return `<${componentName}${props.join("")} />`;
  };
  let generatedCodeSkeleton = generatePlaceholderCode("Skeleton", skeletonSize, skeletonClass);
  let generatedCodeVideo = generatePlaceholderCode("VideoPlaceholder", videoPlaceholderSize, videoPlaceholderClass);
  let generatedCodeText = generatePlaceholderCode("TextPlaceholder", textPlaceholderSize, textPlaceholderClass);
  let generatedCodeCard = generatePlaceholderCode("CardPlaceholder", cardPlaceholderSize, cardPlaceholderClass);
  let generatedCodeImage = generatePlaceholderCode("ImagePlaceholder", imagePlaceholderSize, imagePlaceholderClass);
  let generatedCodeWidget = generatePlaceholderCode("WidgetPlaceholder", "md", widgetPlaceholderClass);
  let generatedCodeList = generatePlaceholderCode("ListPlaceholder", listPlaceholderSize, listPlaceholderClass);
  let generatedCodeTestimonial = generatePlaceholderCode("TestimonialPlaceholder", "md", TestimonialPlaceholderClass);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    H1($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Skeleton`;
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
        $$payload3.out += `<!---->Default skeleton`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        HighlightCompo($$payload3, { code: generatedCodeSkeleton });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          const each_array = ensure_array_like(skeletonSizes);
          $$payload3.out += `<div class="md:h-40">`;
          Skeleton($$payload3, { size: skeletonSize, class: skeletonClass });
          $$payload3.out += `<!----></div> <div class="my-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Size(width)`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let size = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-12 my-1",
              name: "skeletonsize",
              get group() {
                return skeletonSize;
              },
              set group($$value) {
                skeletonSize = $$value;
                $$settled = false;
              },
              value: size,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(size)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> `;
          Button($$payload3, {
            class: "w-36",
            onclick: () => skeletonClass === "" ? skeletonClass = "ml-4" : skeletonClass = "",
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(skeletonClass ? "Remove class" : "Add class")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { codeblock: true, default: true }
      });
    }
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Image placeholder`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        HighlightCompo($$payload3, { code: generatedCodeImage });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          const each_array_1 = ensure_array_like(imageSizes);
          const each_array_2 = ensure_array_like(imageRoundedSizes);
          $$payload3.out += `<div class="md:h-64">`;
          ImagePlaceholder($$payload3, {
            size: imagePlaceholderSize,
            rounded: imagePlaceholderRounded,
            class: imagePlaceholderClass
          });
          $$payload3.out += `<!----></div> <div class="my-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Size`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let size = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: "w-12 my-1",
              name: "imageSize",
              get group() {
                return imagePlaceholderSize;
              },
              set group($$value) {
                imagePlaceholderSize = $$value;
                $$settled = false;
              },
              value: size,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(size)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Rounded`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let size = each_array_2[$$index_2];
            Radio($$payload3, {
              labelClass: "w-12 my-1",
              name: "imageRoundedSize",
              get group() {
                return imagePlaceholderRounded;
              },
              set group($$value) {
                imagePlaceholderRounded = $$value;
                $$settled = false;
              },
              value: size,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(size)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> `;
          Button($$payload3, {
            class: "w-36",
            onclick: () => imagePlaceholderClass === "" ? imagePlaceholderClass = "ml-4" : imagePlaceholderClass = "",
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(imagePlaceholderClass ? "Remove class" : "Add class")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { codeblock: true, default: true }
      });
    }
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Video placeholder`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        HighlightCompo($$payload3, { code: generatedCodeVideo });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          const each_array_3 = ensure_array_like(videoSizes);
          $$payload3.out += `<div class="md:h-64">`;
          VideoPlaceholder($$payload3, {
            size: videoPlaceholderSize,
            class: videoPlaceholderClass
          });
          $$payload3.out += `<!----></div> <div class="my-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Size(width)`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
            let size = each_array_3[$$index_3];
            Radio($$payload3, {
              labelClass: "w-12 my-1",
              name: "videoSize",
              get group() {
                return videoPlaceholderSize;
              },
              set group($$value) {
                videoPlaceholderSize = $$value;
                $$settled = false;
              },
              value: size,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(size)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> `;
          Button($$payload3, {
            class: "w-36",
            onclick: () => videoPlaceholderClass === "" ? videoPlaceholderClass = "ml-4" : videoPlaceholderClass = "",
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(videoPlaceholderClass ? "Remove class" : "Add class")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { codeblock: true, default: true }
      });
    }
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Text placeholder`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        HighlightCompo($$payload3, { code: generatedCodeText });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          const each_array_4 = ensure_array_like(textSizes);
          TextPlaceholder($$payload3, {
            size: textPlaceholderSize,
            class: textPlaceholderClass
          });
          $$payload3.out += `<!----> <div class="my-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Size(width)`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
            let size = each_array_4[$$index_4];
            Radio($$payload3, {
              labelClass: "w-12 my-1",
              name: "textSize",
              get group() {
                return textPlaceholderSize;
              },
              set group($$value) {
                textPlaceholderSize = $$value;
                $$settled = false;
              },
              value: size,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(size)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> `;
          Button($$payload3, {
            class: "w-36",
            onclick: () => textPlaceholderClass === "" ? textPlaceholderClass = "ml-4" : textPlaceholderClass = "",
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(textPlaceholderClass ? "Remove class" : "Add class")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { codeblock: true, default: true }
      });
    }
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Card placeholder`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        HighlightCompo($$payload3, { code: generatedCodeCard });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          const each_array_5 = ensure_array_like(cardSizes);
          CardPlaceholder($$payload3, {
            size: cardPlaceholderSize,
            class: cardPlaceholderClass
          });
          $$payload3.out += `<!----> <div class="my-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Size(width)`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
            let size = each_array_5[$$index_5];
            Radio($$payload3, {
              labelClass: "w-12 my-1",
              name: "cardSize",
              get group() {
                return cardPlaceholderSize;
              },
              set group($$value) {
                cardPlaceholderSize = $$value;
                $$settled = false;
              },
              value: size,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(size)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> `;
          Button($$payload3, {
            class: "w-36",
            onclick: () => cardPlaceholderClass === "" ? cardPlaceholderClass = "ml-4" : cardPlaceholderClass = "",
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(cardPlaceholderClass ? "Remove class" : "Add class")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { codeblock: true, default: true }
      });
    }
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Widget placeholder`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        HighlightCompo($$payload3, { code: generatedCodeWidget });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          WidgetPlaceholder($$payload3, { class: widgetPlaceholderClass });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "mt-4 w-36",
            onclick: () => widgetPlaceholderClass === "" ? widgetPlaceholderClass = "ml-4" : widgetPlaceholderClass = "",
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(widgetPlaceholderClass ? "Remove class" : "Add class")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { codeblock: true, default: true }
      });
    }
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->List placeholder`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        HighlightCompo($$payload3, { code: generatedCodeList });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          const each_array_6 = ensure_array_like(listSizes);
          const each_array_7 = ensure_array_like(listRoundedSizes);
          const each_array_8 = ensure_array_like(listItemNumbers);
          $$payload3.out += `<div class="md:h-[500px]">`;
          ListPlaceholder($$payload3, {
            itemNumber: listPlaceholderItemNumber,
            size: listPlaceholderSize,
            rounded: listPlaceholderRounded,
            class: listPlaceholderClass
          });
          $$payload3.out += `<!----></div> <div class="my-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Size`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_6 = 0, $$length = each_array_6.length; $$index_6 < $$length; $$index_6++) {
            let size = each_array_6[$$index_6];
            Radio($$payload3, {
              labelClass: "w-12 my-1",
              name: "size",
              get group() {
                return listPlaceholderSize;
              },
              set group($$value) {
                listPlaceholderSize = $$value;
                $$settled = false;
              },
              value: size,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(size)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Rounded`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_7 = 0, $$length = each_array_7.length; $$index_7 < $$length; $$index_7++) {
            let size = each_array_7[$$index_7];
            Radio($$payload3, {
              labelClass: "w-12 my-1",
              name: "roundedSize",
              get group() {
                return listPlaceholderRounded;
              },
              set group($$value) {
                listPlaceholderRounded = $$value;
                $$settled = false;
              },
              value: size,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(size)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Items:`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_8 = 0, $$length = each_array_8.length; $$index_8 < $$length; $$index_8++) {
            let itemNumber = each_array_8[$$index_8];
            Radio($$payload3, {
              labelClass: "w-10 my-1",
              name: "itemNumber",
              get group() {
                return listPlaceholderItemNumber;
              },
              set group($$value) {
                listPlaceholderItemNumber = $$value;
                $$settled = false;
              },
              value: itemNumber,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(itemNumber)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> `;
          Button($$payload3, {
            class: "w-36",
            onclick: () => listPlaceholderClass === "" ? listPlaceholderClass = "ml-4" : listPlaceholderClass = "",
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(listPlaceholderClass ? "Remove class" : "Add class")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { codeblock: true, default: true }
      });
    }
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Testimonial placeholder`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        HighlightCompo($$payload3, { code: generatedCodeTestimonial });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          TestimonialPlaceholder($$payload3, { class: TestimonialPlaceholderClass });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "mt-4 w-36",
            onclick: () => TestimonialPlaceholderClass === "" ? TestimonialPlaceholderClass = "mx-auto w-[200px] sm:w-[400px]" : TestimonialPlaceholderClass = "",
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(TestimonialPlaceholderClass ? "Remove class" : "Add class")}`;
            },
            $$slots: { default: true }
          });
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
