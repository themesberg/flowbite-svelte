import { Q as push, a0 as spread_attributes, W as attr, S as pop, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like, V as escape_html } from "../../../../chunks/index.js";
import { p as android, q as defaultMockup, r as desktop, s as ios, t as laptop, u as smartwatch, v as tablet } from "../../../../chunks/theme.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
function Android($$payload, $$props) {
  push();
  let {
    children,
    divClass,
    div2Class,
    div3Class,
    div4Class,
    div5Class,
    div6Class,
    div7Class,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const {
    div,
    slot,
    top,
    leftTop,
    leftMid,
    leftBot,
    right
  } = android();
  $$payload.out += `<div${spread_attributes({
    ...restProps,
    class: div({ class: divClass })
  })}><div${attr("class", top({ class: div2Class }))}></div> <div${attr("class", leftTop({ class: div3Class }))}></div> <div${attr("class", leftMid({ class: div4Class }))}></div> <div${attr("class", leftBot({ class: div5Class }))}></div> <div${attr("class", right({ class: div6Class }))}></div> <div${attr("class", slot({ class: div7Class }))}>`;
  if (children) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
function DefaultMockup($$payload, $$props) {
  push();
  let {
    children,
    divClass,
    div2Class,
    div3Class,
    div4Class,
    div5Class,
    div6Class,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { div, slot, top, leftTop, leftBot, right } = defaultMockup();
  $$payload.out += `<div${spread_attributes({
    ...restProps,
    class: div({ class: divClass })
  })}><div${attr("class", top({ class: div2Class }))}></div> <div${attr("class", leftTop({ class: div3Class }))}></div> <div${attr("class", leftBot({ class: div4Class }))}></div> <div${attr("class", right({ class: div5Class }))}></div> <div${attr("class", slot({ class: div6Class }))}>`;
  if (children) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
function Desktop($$payload, $$props) {
  push();
  let {
    children,
    divClass,
    div2Class,
    div3Class,
    div4Class,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { div, inner, bot, botUnder } = desktop();
  $$payload.out += `<div${spread_attributes({
    ...restProps,
    class: div({ class: divClass })
  })}><div${attr("class", inner({ class: div2Class }))}>`;
  if (children) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div> <div${attr("class", bot({ class: div3Class }))}></div> <div${attr("class", botUnder({ class: div4Class }))}></div>`;
  pop();
}
function Ios($$payload, $$props) {
  push();
  let {
    children,
    divClass,
    div2Class,
    div3Class,
    div4Class,
    div5Class,
    div6Class,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { div, slot, top, leftTop, leftBot, right } = ios();
  $$payload.out += `<div${spread_attributes({
    ...restProps,
    class: div({ class: divClass })
  })}><div${attr("class", top({ class: div2Class }))}></div> <div${attr("class", leftTop({ class: div3Class }))}></div> <div${attr("class", leftBot({ class: div4Class }))}></div> <div${attr("class", right({ class: div5Class }))}></div> <div${attr("class", slot({ class: div6Class }))}>`;
  if (children) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
function Laptop($$payload, $$props) {
  push();
  let {
    children,
    divClass,
    div2Class,
    div3Class,
    div4Class,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { div, inner, bot, botCen } = laptop();
  $$payload.out += `<div${spread_attributes({ ...restProps })}><div${attr("class", div({ class: divClass }))}><div${attr("class", inner({ class: div2Class }))}>`;
  if (children) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div> <div${attr("class", bot({ class: div3Class }))}><div${attr("class", botCen({ class: div4Class }))}></div></div></div>`;
  pop();
}
function Smartwatch($$payload, $$props) {
  push();
  let {
    children,
    divClass,
    div2Class,
    div3Class,
    div4Class,
    div5Class,
    div6Class,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { div, top, rightTop, rightBot, bot, slot } = smartwatch();
  $$payload.out += `<div${spread_attributes({ ...restProps })}><div${attr("class", div({ class: divClass }))}></div> <div${attr("class", top({ class: div2Class }))}><div${attr("class", rightTop({ class: div3Class }))}></div> <div${attr("class", rightBot({ class: div4Class }))}></div> <div${attr("class", slot({ class: div5Class }))}>`;
  if (children) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div> <div${attr("class", bot({ class: div6Class }))}></div></div>`;
  pop();
}
function Tablet($$payload, $$props) {
  push();
  let {
    children,
    divClass,
    div2Class,
    div3Class,
    div4Class,
    div5Class,
    div6Class,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const {
    div,
    leftTop,
    leftMid,
    leftBot,
    right,
    slot
  } = tablet();
  $$payload.out += `<div${spread_attributes({
    ...restProps,
    class: div({ class: divClass })
  })}><div${attr("class", leftTop({ class: div2Class }))}></div> <div${attr("class", leftMid({ class: div3Class }))}></div> <div${attr("class", leftBot({ class: div4Class }))}></div> <div${attr("class", right({ class: div5Class }))}></div> <div${attr("class", slot({ class: div6Class }))}>`;
  if (children) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div></div>`;
  pop();
}
function DeviceMockup($$payload, $$props) {
  push();
  let { children, device = "default" } = $$props;
  const componets = {
    android: Android,
    ios: Ios,
    tablet: Tablet,
    default: DefaultMockup,
    smartwatch: Smartwatch,
    laptop: Laptop,
    desktop: Desktop
  };
  let DeviceComponent = componets[device];
  $$payload.out += `<!---->`;
  DeviceComponent($$payload, {
    children: ($$payload2) => {
      children($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}
const __vite_glob_0_0 = '<script>\n  import { DeviceMockup } from "svelte-5-ui-lib";\n<\/script>\n';
function _page($$payload, $$props) {
  push();
  const dirName = "device-mockup";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Setup.svelte": __vite_glob_0_0
  });
  const devices = [
    {
      name: "Default",
      device: "default",
      lightimage: {
        src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png",
        class: "dark:hidden w-[272px] h-[572px]",
        alt: "default example 1"
      },
      darkimage: {
        src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png",
        class: "hidden dark:block w-[272px] h-[572px]",
        alt: "default example 2"
      }
    },
    {
      name: "Ios",
      device: "ios",
      lightimage: {
        src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png",
        class: "dark:hidden w-[272px] h-[572px]",
        alt: "ios example 1"
      },
      darkimage: {
        src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png",
        class: "hidden dark:block w-[272px] h-[572px]",
        alt: "ios example 2"
      }
    },
    {
      name: "Android",
      device: "android",
      lightimage: {
        src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png",
        class: "dark:hidden w-[272px] h-[572px]",
        alt: "android example 1"
      },
      darkimage: {
        src: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png",
        class: "hidden dark:block w-[272px] h-[572px]",
        alt: "android example 2"
      }
    },
    {
      name: "Tablet",
      device: "tablet",
      lightimage: {
        src: "https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image.png",
        class: "dark:hidden h-[426px] md:h-[654px]",
        alt: "tablet example 1"
      },
      darkimage: {
        src: "https://flowbite.s3.amazonaws.com/docs/device-mockups/tablet-mockup-image-dark.png",
        class: "hidden dark:block h-[426px] md:h-[654px]",
        alt: "tablet example 2"
      }
    },
    {
      name: "Laptop",
      device: "laptop",
      lightimage: {
        src: "https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png",
        class: "dark:hidden h-[156px] md:h-[278px] w-full rounded-xl",
        alt: "laptop example 1"
      },
      darkimage: {
        src: "https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png",
        class: "hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg",
        alt: "laptop example 2"
      }
    },
    {
      name: "Desktop",
      device: "desktop",
      lightimage: {
        src: "https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac.png",
        class: "dark:hidden h-[140px] md:h-[262px] w-full rounded-xl",
        alt: "desktop example 1"
      },
      darkimage: {
        src: "https://flowbite.s3.amazonaws.com/docs/device-mockups/screen-image-imac-dark.png",
        class: "hidden dark:block h-[140px] md:h-[262px] w-full rounded-xl",
        alt: "desktop example 2"
      }
    },
    {
      name: "Smartwatch",
      device: "smartwatch",
      lightimage: {
        src: "https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image.png",
        class: "dark:hidden h-[193px] w-[188px",
        alt: "smartwatch example 1"
      },
      darkimage: {
        src: "https://flowbite.s3.amazonaws.com/docs/device-mockups/watch-screen-image-dark.png",
        class: "hidden dark:block h-[193px] w-[188px]",
        alt: "smartwatch example 2"
      }
    }
  ];
  const deviceNames = devices.map((device) => device.name);
  let selectedDevice = "Default";
  let currentDevice = devices.find((d) => d.name === selectedDevice) || devices[0];
  let generatedCode = (() => {
    let props = [];
    if (currentDevice.device !== "default") props.push(` device="${currentDevice.device}"`);
    return `<DeviceMockup${props.join("")}>
  <img src="${currentDevice.lightimage.src}" class="${currentDevice.lightimage.class}" alt="${currentDevice.lightimage.alt}" />
  <img src="${currentDevice.darkimage.src}" class="${currentDevice.darkimage.class}" alt="${currentDevice.darkimage.alt}" />
</DeviceMockup>`;
  })();
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    H1($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Device mockup`;
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
        $$payload3.out += `<!---->Interactive Device Mockup Builder`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        HighlightCompo($$payload3, { code: generatedCode });
      };
      CodeWrapper($$payload2, {
        innerClass: "overflow-auto",
        codeblock,
        children: ($$payload3) => {
          const each_array = ensure_array_like(deviceNames);
          $$payload3.out += `<div class="mb-8 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Device`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let device = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-24 my-1",
              name: "alert_reactive",
              get group() {
                return selectedDevice;
              },
              set group($$value) {
                selectedDevice = $$value;
                $$settled = false;
              },
              value: device,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(device)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> `;
          DeviceMockup($$payload3, {
            device: currentDevice.device,
            children: ($$payload4) => {
              $$payload4.out += `<img${attr("src", currentDevice.lightimage.src)}${attr("class", currentDevice.lightimage.class)}${attr("alt", currentDevice.lightimage.alt)}> <img${attr("src", currentDevice.darkimage.src)}${attr("class", currentDevice.darkimage.class)}${attr("alt", currentDevice.darkimage.alt)}>`;
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
