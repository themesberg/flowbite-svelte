import { Q as push, a0 as spread_attributes, W as attr, S as pop, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like, V as escape_html } from "../../../../chunks/index.js";
import "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
function Video($$payload, $$props) {
  push();
  let {
    children,
    type = "video/mp4",
    trackSrc,
    src,
    srclang = "en",
    label = "english_captions",
    class: classname,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  $$payload.out += `<video${spread_attributes({ ...restProps, class: classname })}><source${attr("src", src)}${attr("type", type)}> `;
  if (children) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <track${attr("src", trackSrc)} kind="captions"${attr("srclang", srclang)}${attr("label", label)}> Your browser does not support the video tag.</video>`;
  pop();
}
const __vite_glob_0_0 = '<script>\n  import { Video } from "svelte-5-ui-lib";\n<\/script>\n';
function _page($$payload, $$props) {
  push();
  const dirName = "video";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Setup.svelte": __vite_glob_0_0
  });
  let controls = true;
  const changeControls = () => {
    controls = !controls;
  };
  let autoplay = false;
  const changeAutoplay = () => {
    autoplay = !autoplay;
  };
  let muted = false;
  const changeMuted = () => {
    muted = !muted;
  };
  const videoClasses = [
    { name: "default", class: "w-full" },
    { name: "width", class: "w-96" },
    { name: "height", class: "h-80" },
    {
      name: "responsive",
      class: "w-full max-w-full h-auto"
    },
    {
      name: "customStyle",
      class: "w-full max-w-full h-auto rounded-3xl border border-gray-200 dark:border-gray-700"
    }
  ];
  let selectedClass = "default";
  let currentClass = videoClasses.find((t) => t.name === selectedClass) || videoClasses[0];
  let generatedCode = (() => {
    let props = [];
    if (controls) props.push(" controls");
    if (autoplay) props.push(" autoplay");
    if (muted) props.push(" muted");
    if (currentClass.name !== "default") props.push(` class="${currentClass.class}"`);
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Video src="/videos/flowbite.mp4"${propsString} trackSrc="flowbite.mp4" />`;
  })();
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    H1($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Video`;
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
        $$payload3.out += `<!---->Interactive Video Player Builder`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        HighlightCompo($$payload3, { code: generatedCode });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          const each_array = ensure_array_like(videoClasses);
          $$payload3.out += `<div class="mb-4 md:h-[500px]">`;
          Video($$payload3, {
            src: "/videos/flowbite.mp4",
            controls,
            autoplay,
            muted,
            trackSrc: "flowbite.mp4",
            class: currentClass.class
          });
          $$payload3.out += `<!----></div> <div class="mb-4 flex flex-wrap space-x-6">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Style`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let option = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-24 my-1",
              name: "interactive_toast_color",
              get group() {
                return selectedClass;
              },
              set group($$value) {
                selectedClass = $$value;
                $$settled = false;
              },
              value: option.name,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(option.name)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap justify-center gap-2 md:justify-start">`;
          Button($$payload3, {
            class: "w-40",
            color: "emerald",
            onclick: changeControls,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(controls ? "Remove controls" : "Add controls")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "blue",
            onclick: changeAutoplay,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(autoplay ? "Remove autoplay" : "Add autoplay")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "pink",
            onclick: changeMuted,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(muted ? "Remove muted" : "Add muted")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div>`;
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
