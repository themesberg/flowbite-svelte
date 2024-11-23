import { Q as push, a0 as spread_attributes, W as attr, a2 as bind_props, S as pop, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like, V as escape_html } from "../../../../chunks/index.js";
import { f as fly, b as blur, s as slide, c as scale, a as fade } from "../../../../chunks/index3.js";
import { aH as toast } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { l as linear } from "../../../../chunks/index4.js";
import { C as CloseButton } from "../../../../chunks/CloseButton.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { C as CheckCircleSolid } from "../../../../chunks/CheckCircleSolid.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { A as Avatar } from "../../../../chunks/Avatar.js";
function Toast($$payload, $$props) {
  push();
  let {
    children,
    icon,
    toastStatus = true,
    dismissable = true,
    color = "primary",
    position,
    baseClass,
    iconClass,
    contentClass,
    align = true,
    params,
    transition = fly,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const { base, icon: iconVariants, content, close } = toast({ color, position, align });
  if (toastStatus) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes({
      role: "alert",
      ...restProps,
      class: base({ class: baseClass })
    })}>`;
    if (icon) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr("class", iconVariants({ class: iconClass }))}>`;
      icon($$payload);
      $$payload.out += `<!----></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div${attr("class", content({ class: contentClass }))}>`;
    children($$payload);
    $$payload.out += `<!----></div> `;
    if (dismissable) {
      $$payload.out += "<!--[-->";
      CloseButton($$payload, {
        class: close(),
        ariaLabel: "Remove toast",
        color,
        onclick: () => {
          toastStatus = false;
        }
      });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { toastStatus });
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Toast, Button } from "$lib";\n  import { CameraPhotoOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="flex h-48 flex-col items-center">\n  <Toast align={false}>\n    {#snippet icon()}\n      <CameraPhotoOutline class="h-5 w-5" />\n    {/snippet}\n    <span class="font-semibold text-gray-900 dark:text-white">Update available</span>\n    <div class="mt-3">\n      <div class="mb-2 text-sm font-normal">A new software version is available for download.</div>\n      <div class="grid grid-cols-2 gap-2">\n        <Button size="xs" class="w-full">Update</Button>\n      </div>\n    </div>\n  </Toast>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Toast, Avatar } from "$lib";\n<\/script>\n\n<div class="flex h-[140px] flex-col items-center">\n  <Toast align={false}>\n    <span class="font-semibold text-gray-900 dark:text-white">New notification</span>\n    <div class="mt-3 flex items-center">\n      <Avatar src="/images/profile-picture-3.webp" />\n      <div class="ms-3">\n        <h4 class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</h4>\n        <div class="text-sm font-normal">commented on your photo</div>\n        <span class="text-xs font-medium text-primary-600 dark:text-primary-500">a few seconds ago</span>\n      </div>\n    </div>\n  </Toast>\n</div>\n';
const __vite_glob_0_2 = '<script>\n  import { Toast } from "$lib";\n  import { slide, blur, fly, scale, fade } from "svelte/transition";\n  import { linear } from "svelte/easing";\n<\/script>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Avatar, Button, Toast } from "$lib";\n<\/script>\n\n<div class="flex h-[180px] flex-col items-center">\n  <Toast align={false} iconClass="w-10 h-10 rounded-full">\n    {#snippet icon()}\n      <Avatar src="/images/profile-picture-1.webp" />\n    {/snippet}\n    <div class="ms-3 text-sm font-normal">\n      <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>\n      <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>\n      <Button size="xs">Reply</Button>\n    </div>\n  </Toast>\n</div>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Button, Toast } from "$lib";\n  let toastUndoStatus: boolean = $state(true);\n  const changeUndoStatus = () => {\n    toastUndoStatus = !toastUndoStatus;\n  };\n<\/script>\n\n<div class="flex flex-col items-center">\n  <div class="mb-4 h-16">\n    <Toast bind:toastStatus={toastUndoStatus} iconClass="w-full text-sm font-normal flex items-center justify-between">\n      Conversation archived.\n      <a class="ms-auto rounded-lg p-1.5 font-medium text-primary-600 hover:bg-primary-100 dark:text-primary-500 dark:hover:bg-gray-700" href="/">Undo</a>\n    </Toast>\n  </div>\n  <Button class="w-36" disabled={toastUndoStatus ? true : false} onclick={changeUndoStatus}>Open toast</Button>\n</div>\n';
function PushNotification($$payload) {
  $$payload.out += `<div class="flex h-[140px] flex-col items-center">`;
  Toast($$payload, {
    align: false,
    children: ($$payload2) => {
      $$payload2.out += `<span class="font-semibold text-gray-900 dark:text-white">New notification</span> <div class="mt-3 flex items-center">`;
      Avatar($$payload2, { src: "/images/profile-picture-3.webp" });
      $$payload2.out += `<!----> <div class="ms-3"><h4 class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</h4> <div class="text-sm font-normal">commented on your photo</div> <span class="text-xs font-medium text-primary-600 dark:text-primary-500">a few seconds ago</span></div></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function ToastMessage($$payload) {
  $$payload.out += `<div class="flex h-[180px] flex-col items-center">`;
  {
    let icon = function($$payload2) {
      Avatar($$payload2, { src: "/images/profile-picture-1.webp" });
    };
    Toast($$payload, {
      align: false,
      iconClass: "w-10 h-10 rounded-full",
      icon,
      children: ($$payload2) => {
        $$payload2.out += `<div class="ms-3 text-sm font-normal"><span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span> <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div> `;
        Button($$payload2, {
          size: "xs",
          children: ($$payload3) => {
            $$payload3.out += `<!---->Reply`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----></div>`;
      },
      $$slots: { icon: true, default: true }
    });
  }
  $$payload.out += `<!----></div>`;
}
function UndoButton($$payload) {
  let toastUndoStatus = true;
  const changeUndoStatus = () => {
    toastUndoStatus = !toastUndoStatus;
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<div class="flex flex-col items-center"><div class="mb-4 h-16">`;
    Toast($$payload2, {
      get toastStatus() {
        return toastUndoStatus;
      },
      set toastStatus($$value) {
        toastUndoStatus = $$value;
        $$settled = false;
      },
      iconClass: "w-full text-sm font-normal flex items-center justify-between",
      children: ($$payload3) => {
        $$payload3.out += `<!---->Conversation archived. <a class="ms-auto rounded-lg p-1.5 font-medium text-primary-600 hover:bg-primary-100 dark:text-primary-500 dark:hover:bg-gray-700" href="/">Undo</a>`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div> `;
    Button($$payload2, {
      class: "w-36",
      disabled: toastUndoStatus ? true : false,
      onclick: changeUndoStatus,
      children: ($$payload3) => {
        $$payload3.out += `<!---->Open toast`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
}
function _page($$payload, $$props) {
  push();
  const dirName = "toast";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/InteractiveToast.svelte": __vite_glob_0_0,
    "./examples/PushNotification.svelte": __vite_glob_0_1,
    "./examples/Setup.svelte": __vite_glob_0_2,
    "./examples/ToastMessage.svelte": __vite_glob_0_3,
    "./examples/UndoButton.svelte": __vite_glob_0_4
  });
  const exampleArr = [
    {
      name: "Push notification",
      component: PushNotification
    },
    {
      name: "Toast message",
      component: ToastMessage
    },
    {
      name: "Undo button",
      component: UndoButton
    }
  ];
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  const colors = Object.keys(toast.variants.color);
  let toastColor = "primary";
  let dismissable = true;
  const changeDismissable = () => {
    dismissable = !dismissable;
  };
  const positions = Object.keys(toast.variants.position);
  let toastPosition = "top-left";
  const transitions = [
    {
      name: "Default",
      transition: fly,
      params: { duration: 400 }
    },
    {
      name: "Fly",
      transition: fly,
      params: { duration: 300, easing: linear, x: 150 }
    },
    {
      name: "Blur",
      transition: blur,
      params: { duration: 400, easing: linear }
    },
    {
      name: "Slide",
      transition: slide,
      params: { duration: 500, easing: linear, x: -150 }
    },
    {
      name: "Scale",
      transition: scale,
      params: { duration: 400, easing: linear }
    },
    {
      name: "Fade",
      transition: fade,
      params: { duration: 500, easing: linear }
    }
  ];
  let selectedTransition = "Default";
  let currentTransition = transitions.find((t) => t.name === selectedTransition) || transitions[0];
  let toastStatus = true;
  let generatedCode = (() => {
    let props = [];
    if (toastColor !== "primary") props.push(` color="${toastColor}"`);
    if (dismissable !== true) props.push(" dismissable={false}");
    if (toastPosition !== "top-left") props.push(` position="${toastPosition}"`);
    if (currentTransition !== transitions[0] && dismissable) {
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
    return `<div class="relative h-56">
  <Toast${propsString}>My Toast</Toast>
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
        $$payload3.out += `<!---->Toast`;
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
        $$payload3.out += `<!---->Interactive Toast Builder`;
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
          const each_array = ensure_array_like(colors);
          const each_array_1 = ensure_array_like(transitions);
          const each_array_2 = ensure_array_like(positions);
          $$payload3.out += `<div class="relative h-28 md:h-56">`;
          {
            let icon = function($$payload4) {
              CheckCircleSolid($$payload4, { class: "h-5 w-5" });
              $$payload4.out += `<!----> <span class="sr-only">Check icon</span>`;
            };
            Toast($$payload3, {
              color: toastColor,
              get toastStatus() {
                return toastStatus;
              },
              set toastStatus($$value) {
                toastStatus = $$value;
                $$settled = false;
              },
              dismissable,
              transition: currentTransition.transition,
              params: currentTransition.params,
              position: toastPosition,
              icon,
              children: ($$payload4) => {
                $$payload4.out += `<!---->Toast content`;
              },
              $$slots: { icon: true, default: true }
            });
          }
          $$payload3.out += `<!----></div> <div class="mb-4">`;
          Button($$payload3, {
            disabled: toastStatus ? true : false,
            onclick: () => toastStatus = true,
            children: ($$payload4) => {
              $$payload4.out += `<!---->Open toast`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="mb-4 flex flex-wrap space-x-2">`;
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
              name: "interactive_toast_color",
              get group() {
                return toastColor;
              },
              set group($$value) {
                toastColor = $$value;
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
              name: "interactive_toast_transition",
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
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex flex-wrap space-x-2">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Position`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let option = each_array_2[$$index_2];
            Radio($$payload3, {
              labelClass: "w-32 my-1",
              name: "interactive_toast_position",
              get group() {
                return toastPosition;
              },
              set group($$value) {
                toastPosition = $$value;
                $$settled = false;
              },
              value: option,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(option)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="flex flex-wrap gap-2">`;
          Button($$payload3, {
            onclick: changeDismissable,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(dismissable ? "Disable" : "Enable")} dismissable`;
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
          const each_array_3 = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-12 flex flex-wrap">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Example`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
            let style = each_array_3[$$index_3];
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
