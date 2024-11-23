import { c as comment, a as append, t as template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, f as first_child, a as pop, c as child, r as reset, t as template_effect, s as sibling, b as get, d as derived, n as next, a7 as set, a6 as state, u as user_effect } from "../chunks/runtime.BkfDdwap.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { e as each, i as index } from "../chunks/each.CtHIoDcm.js";
import { p as prop, i as if_block, r as rest_props, b as proxy, c as component } from "../chunks/props.B7eOu8hW.js";
import { aC as fly, N as CloseButton, _ as transition, b as set_class, a as set_attributes, aP as toast, ab as linear, aD as blur, Z as slide, aE as scale, aA as fade, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { s as snippet } from "../chunks/snippet.BDfn85k4.js";
import { C as CompoAttributesViewer, L as Label, R as Radio } from "../chunks/CompoAttributesViewer.HsPJjrMu.js";
import { C as CheckCircleSolid } from "../chunks/CheckCircleSolid.D51Mv3aE.js";
import { D as DynamicCodeBlockHighlight } from "../chunks/DynamicCodeBlockHighlight.BS23lgW_.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
import { g as getExampleFileName, i as isGeneratedCodeOverflow, d as isSvelteOverflow } from "../chunks/helpers.B9KbZW0W.js";
import "../chunks/legacy.DvF4DOPZ.js";
import { A as Avatar } from "../chunks/Avatar.BvpffrdL.js";
var root_2$1 = template(`<div><!></div>`);
var root_1$2 = template(`<div><!> <div><!></div> <!></div>`);
function Toast($$anchor, $$props) {
  push($$props, true);
  let toastStatus = prop($$props, "toastStatus", 15, true), dismissable = prop($$props, "dismissable", 3, true), color = prop($$props, "color", 3, "primary"), align = prop($$props, "align", 3, true), transition$1 = prop($$props, "transition", 3, fly), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "icon",
    "toastStatus",
    "dismissable",
    "color",
    "position",
    "baseClass",
    "iconClass",
    "contentClass",
    "align",
    "params",
    "transition"
  ]);
  const $$d = derived(() => toast({
    color: color(),
    position: $$props.position,
    align: align()
  })), base = derived(() => get($$d).base), iconVariants = derived(() => get($$d).icon), content = derived(() => get($$d).content), close = derived(() => get($$d).close);
  var fragment = comment();
  var node = first_child(fragment);
  if_block(node, toastStatus, ($$anchor2) => {
    var div = root_1$2();
    let attributes;
    var node_1 = child(div);
    if_block(node_1, () => $$props.icon, ($$anchor3) => {
      var div_1 = root_2$1();
      const class_derived = derived(() => get(iconVariants)({ class: $$props.iconClass }));
      var node_2 = child(div_1);
      snippet(node_2, () => $$props.icon);
      reset(div_1);
      template_effect(() => set_class(div_1, get(class_derived)));
      append($$anchor3, div_1);
    });
    var div_2 = sibling(node_1, 2);
    const class_derived_1 = derived(() => get(content)({ class: $$props.contentClass }));
    var node_3 = child(div_2);
    snippet(node_3, () => $$props.children);
    reset(div_2);
    var node_4 = sibling(div_2, 2);
    if_block(node_4, dismissable, ($$anchor3) => {
      var class_1 = derived(() => get(close)());
      CloseButton($$anchor3, {
        get class() {
          return get(class_1);
        },
        ariaLabel: "Remove toast",
        get color() {
          return color();
        },
        onclick: () => {
          toastStatus(false);
        }
      });
    });
    reset(div);
    template_effect(() => {
      attributes = set_attributes(div, attributes, {
        role: "alert",
        ...restProps,
        class: get(base)({ class: $$props.baseClass })
      });
      set_class(div_2, get(class_derived_1));
    });
    transition(3, div, transition$1, () => $$props.params);
    append($$anchor2, div);
  });
  append($$anchor, fragment);
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Toast, Button } from "$lib";\n  import { CameraPhotoOutline } from "flowbite-svelte-icons";\n<\/script>\n\n<div class="flex h-48 flex-col items-center">\n  <Toast align={false}>\n    {#snippet icon()}\n      <CameraPhotoOutline class="h-5 w-5" />\n    {/snippet}\n    <span class="font-semibold text-gray-900 dark:text-white">Update available</span>\n    <div class="mt-3">\n      <div class="mb-2 text-sm font-normal">A new software version is available for download.</div>\n      <div class="grid grid-cols-2 gap-2">\n        <Button size="xs" class="w-full">Update</Button>\n      </div>\n    </div>\n  </Toast>\n</div>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Toast, Avatar } from "$lib";\n<\/script>\n\n<div class="flex h-[140px] flex-col items-center">\n  <Toast align={false}>\n    <span class="font-semibold text-gray-900 dark:text-white">New notification</span>\n    <div class="mt-3 flex items-center">\n      <Avatar src="/images/profile-picture-3.webp" />\n      <div class="ms-3">\n        <h4 class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</h4>\n        <div class="text-sm font-normal">commented on your photo</div>\n        <span class="text-xs font-medium text-primary-600 dark:text-primary-500">a few seconds ago</span>\n      </div>\n    </div>\n  </Toast>\n</div>\n';
const __vite_glob_0_2 = '<script>\n  import { Toast } from "$lib";\n  import { slide, blur, fly, scale, fade } from "svelte/transition";\n  import { linear } from "svelte/easing";\n<\/script>\n';
const __vite_glob_0_3 = '<script lang="ts">\n  import { Avatar, Button, Toast } from "$lib";\n<\/script>\n\n<div class="flex h-[180px] flex-col items-center">\n  <Toast align={false} iconClass="w-10 h-10 rounded-full">\n    {#snippet icon()}\n      <Avatar src="/images/profile-picture-1.webp" />\n    {/snippet}\n    <div class="ms-3 text-sm font-normal">\n      <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>\n      <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div>\n      <Button size="xs">Reply</Button>\n    </div>\n  </Toast>\n</div>\n';
const __vite_glob_0_4 = '<script lang="ts">\n  import { Button, Toast } from "$lib";\n  let toastUndoStatus: boolean = $state(true);\n  const changeUndoStatus = () => {\n    toastUndoStatus = !toastUndoStatus;\n  };\n<\/script>\n\n<div class="flex flex-col items-center">\n  <div class="mb-4 h-16">\n    <Toast bind:toastStatus={toastUndoStatus} iconClass="w-full text-sm font-normal flex items-center justify-between">\n      Conversation archived.\n      <a class="ms-auto rounded-lg p-1.5 font-medium text-primary-600 hover:bg-primary-100 dark:text-primary-500 dark:hover:bg-gray-700" href="/">Undo</a>\n    </Toast>\n  </div>\n  <Button class="w-36" disabled={toastUndoStatus ? true : false} onclick={changeUndoStatus}>Open toast</Button>\n</div>\n';
var root_1$1 = template(`<span class="font-semibold text-gray-900 dark:text-white">New notification</span> <div class="mt-3 flex items-center"><!> <div class="ms-3"><h4 class="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</h4> <div class="text-sm font-normal">commented on your photo</div> <span class="text-xs font-medium text-primary-600 dark:text-primary-500">a few seconds ago</span></div></div>`, 1);
var root$3 = template(`<div class="flex h-[140px] flex-col items-center"><!></div>`);
function PushNotification($$anchor) {
  var div = root$3();
  var node = child(div);
  Toast(node, {
    align: false,
    children: ($$anchor2, $$slotProps) => {
      var fragment = root_1$1();
      var div_1 = sibling(first_child(fragment), 2);
      var node_1 = child(div_1);
      Avatar(node_1, { src: "/images/profile-picture-3.webp" });
      next(2);
      reset(div_1);
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_2 = template(`<div class="ms-3 text-sm font-normal"><span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span> <div class="mb-2 text-sm font-normal">Hi Neil, thanks for sharing your thoughts regarding Flowbite.</div> <!></div>`);
var root$2 = template(`<div class="flex h-[180px] flex-col items-center"><!></div>`);
function ToastMessage($$anchor) {
  var div = root$2();
  var node = child(div);
  {
    const icon = ($$anchor2) => {
      Avatar($$anchor2, { src: "/images/profile-picture-1.webp" });
    };
    Toast(node, {
      align: false,
      iconClass: "w-10 h-10 rounded-full",
      icon,
      children: ($$anchor2, $$slotProps) => {
        var div_1 = root_2();
        var node_1 = sibling(child(div_1), 4);
        Button(node_1, {
          size: "xs",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text$1 = text("Reply");
            append($$anchor3, text$1);
          },
          $$slots: { default: true }
        });
        reset(div_1);
        append($$anchor2, div_1);
      },
      $$slots: { icon: true, default: true }
    });
  }
  reset(div);
  append($$anchor, div);
}
var root_1 = template(`Conversation archived. <a class="ms-auto rounded-lg p-1.5 font-medium text-primary-600 hover:bg-primary-100 dark:text-primary-500 dark:hover:bg-gray-700" href="/">Undo</a>`, 1);
var root$1 = template(`<div class="flex flex-col items-center"><div class="mb-4 h-16"><!></div> <!></div>`);
function UndoButton($$anchor) {
  let toastUndoStatus = state(true);
  const changeUndoStatus = () => {
    set(toastUndoStatus, !get(toastUndoStatus));
  };
  var div = root$1();
  var div_1 = child(div);
  var node = child(div_1);
  Toast(node, {
    get toastStatus() {
      return get(toastUndoStatus);
    },
    set toastStatus($$value) {
      set(toastUndoStatus, proxy($$value));
    },
    iconClass: "w-full text-sm font-normal flex items-center justify-between",
    children: ($$anchor2, $$slotProps) => {
      next();
      var fragment = root_1();
      next();
      append($$anchor2, fragment);
    },
    $$slots: { default: true }
  });
  reset(div_1);
  var node_1 = sibling(div_1, 2);
  var disabled = derived(() => get(toastUndoStatus) ? true : false);
  Button(node_1, {
    class: "w-36",
    get disabled() {
      return get(disabled);
    },
    onclick: changeUndoStatus,
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Open toast");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  reset(div);
  append($$anchor, div);
}
var root_6 = template(`<!> <span class="sr-only">Check icon</span>`, 1);
var root_5 = template(`<div class="relative h-28 md:h-56"><!></div> <div class="mb-4"><!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-4"><!> <!></div> <div class="mb-4 flex flex-wrap space-x-2"><!> <!></div> <div class="flex flex-wrap gap-2"><!></div>`, 1);
var root_21 = template(`<div class="mb-12 flex flex-wrap"><!> <!></div> <!>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
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
  let selectedExample = state(proxy(exampleArr[0].name));
  let svelteCode = derived(() => getExampleFileName(get(selectedExample), exampleArr));
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = derived(() => findObject(exampleArr, get(selectedExample)));
  const colors = Object.keys(toast.variants.color);
  let toastColor = state("primary");
  let dismissable = state(true);
  const changeDismissable = () => {
    set(dismissable, !get(dismissable));
  };
  const positions = Object.keys(toast.variants.position);
  let toastPosition = state("top-left");
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
  let selectedTransition = state("Default");
  let currentTransition = derived(() => transitions.find((t) => t.name === get(selectedTransition)) || transitions[0]);
  let toastStatus = state(true);
  let generatedCode = derived(() => (() => {
    let props = [];
    if (get(toastColor) !== "primary") props.push(` color="${get(toastColor)}"`);
    if (get(dismissable) !== true) props.push(" dismissable={false}");
    if (get(toastPosition) !== "top-left") props.push(` position="${get(toastPosition)}"`);
    if (get(currentTransition) !== transitions[0] && get(dismissable)) {
      props.push(` transition={${get(currentTransition).transition.name}}`);
      const paramsString = Object.entries(get(currentTransition).params).map(([key, value]) => {
        if (typeof value === "function") {
          return `${key}:${value.name}`;
        }
        return `${key}:${value}`;
      }).join(",");
      props.push(` params={{${paramsString}}}`);
    }
    const propsString = props.length > 0 ? props.map((prop2) => `
  ${prop2}`).join("") + "\n" : "";
    return `<div class="relative h-56">
  <Toast${propsString}>My Toast</Toast>
</div>`;
  })());
  let builder = uiHelpers();
  let builderExpand = state(false);
  let showBuilderExpandButton = derived(() => isGeneratedCodeOverflow(get(generatedCode)));
  const handleBuilderExpandClick = () => {
    set(builderExpand, !get(builderExpand));
  };
  let codeBlock = uiHelpers();
  let exampleExpand = state(false);
  let showExpandButton = derived(() => isSvelteOverflow(get(svelteCode), exampleModules));
  const handleExpandClick = () => {
    set(exampleExpand, !get(exampleExpand));
  };
  user_effect(() => {
    set(exampleExpand, proxy(codeBlock.isOpen));
    set(builderExpand, proxy(builder.isOpen));
  });
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Toast");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  H2(node_1, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Setup");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  HighlightCompo(node_2, {
    get code() {
      return exampleModules[`./examples/Setup.svelte`];
    }
  });
  var node_3 = sibling(node_2, 2);
  H2(node_3, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Interactive Toast Builder");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_3, 2);
  {
    const codeblock = ($$anchor2) => {
      DynamicCodeBlockHighlight($$anchor2, {
        handleExpandClick: handleBuilderExpandClick,
        get expand() {
          return get(builderExpand);
        },
        get showExpandButton() {
          return get(showBuilderExpandButton);
        },
        get code() {
          return get(generatedCode);
        }
      });
    };
    CodeWrapper(node_4, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_2 = root_5();
        var div = first_child(fragment_2);
        var node_5 = child(div);
        {
          const icon = ($$anchor3) => {
            var fragment_3 = root_6();
            var node_6 = first_child(fragment_3);
            CheckCircleSolid(node_6, { class: "h-5 w-5" });
            next(2);
            append($$anchor3, fragment_3);
          };
          Toast(node_5, {
            get color() {
              return get(toastColor);
            },
            get toastStatus() {
              return get(toastStatus);
            },
            set toastStatus($$value) {
              set(toastStatus, proxy($$value));
            },
            get dismissable() {
              return get(dismissable);
            },
            get transition() {
              return get(currentTransition).transition;
            },
            get params() {
              return get(currentTransition).params;
            },
            get position() {
              return get(toastPosition);
            },
            icon,
            children: ($$anchor3, $$slotProps2) => {
              next();
              var text_3 = text("Toast content");
              append($$anchor3, text_3);
            },
            $$slots: { icon: true, default: true }
          });
        }
        reset(div);
        var div_1 = sibling(div, 2);
        var node_7 = child(div_1);
        var disabled = derived(() => get(toastStatus) ? true : false);
        Button(node_7, {
          get disabled() {
            return get(disabled);
          },
          onclick: () => set(toastStatus, true),
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_4 = text("Open toast");
            append($$anchor3, text_4);
          },
          $$slots: { default: true }
        });
        reset(div_1);
        var div_2 = sibling(div_1, 2);
        var node_8 = child(div_2);
        Label(node_8, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_5 = text("Color");
            append($$anchor3, text_5);
          },
          $$slots: { default: true }
        });
        var node_9 = sibling(node_8, 2);
        each(node_9, 17, () => colors, index, ($$anchor3, colorOption) => {
          Radio($$anchor3, {
            labelClass: "w-24 my-1",
            name: "interactive_toast_color",
            get group() {
              return get(toastColor);
            },
            set group($$value) {
              set(toastColor, proxy($$value));
            },
            get color() {
              return get(colorOption);
            },
            get value() {
              return get(colorOption);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_6 = text();
              template_effect(() => set_text(text_6, get(colorOption)));
              append($$anchor4, text_6);
            },
            $$slots: { default: true }
          });
        });
        reset(div_2);
        var div_3 = sibling(div_2, 2);
        var node_10 = child(div_3);
        Label(node_10, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_7 = text("Transition");
            append($$anchor3, text_7);
          },
          $$slots: { default: true }
        });
        var node_11 = sibling(node_10, 2);
        each(node_11, 17, () => transitions, index, ($$anchor3, transition2) => {
          Radio($$anchor3, {
            labelClass: "w-16 my-1",
            name: "interactive_toast_transition",
            get group() {
              return get(selectedTransition);
            },
            set group($$value) {
              set(selectedTransition, proxy($$value));
            },
            get value() {
              return get(transition2).name;
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_8 = text();
              template_effect(() => set_text(text_8, get(transition2).name));
              append($$anchor4, text_8);
            },
            $$slots: { default: true }
          });
        });
        reset(div_3);
        var div_4 = sibling(div_3, 2);
        var node_12 = child(div_4);
        Label(node_12, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_9 = text("Position");
            append($$anchor3, text_9);
          },
          $$slots: { default: true }
        });
        var node_13 = sibling(node_12, 2);
        each(node_13, 17, () => positions, index, ($$anchor3, option) => {
          Radio($$anchor3, {
            labelClass: "w-32 my-1",
            name: "interactive_toast_position",
            get group() {
              return get(toastPosition);
            },
            set group($$value) {
              set(toastPosition, proxy($$value));
            },
            get value() {
              return get(option);
            },
            children: ($$anchor4, $$slotProps2) => {
              next();
              var text_10 = text();
              template_effect(() => set_text(text_10, get(option)));
              append($$anchor4, text_10);
            },
            $$slots: { default: true }
          });
        });
        reset(div_4);
        var div_5 = sibling(div_4, 2);
        var node_14 = child(div_5);
        Button(node_14, {
          onclick: changeDismissable,
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_11 = text();
            template_effect(() => set_text(text_11, `${(get(dismissable) ? "Disable" : "Enable") ?? ""} dismissable`));
            append($$anchor3, text_11);
          },
          $$slots: { default: true }
        });
        reset(div_5);
        append($$anchor2, fragment_2);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_15 = sibling(node_4, 2);
  H2(node_15, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_12 = text("Examples");
      append($$anchor2, text_12);
    },
    $$slots: { default: true }
  });
  var node_16 = sibling(node_15, 2);
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
    CodeWrapper(node_16, {
      codeblock,
      children: ($$anchor2, $$slotProps) => {
        var fragment_12 = root_21();
        var div_6 = first_child(fragment_12);
        var node_17 = child(div_6);
        Label(node_17, {
          class: "mb-4 w-full font-bold",
          children: ($$anchor3, $$slotProps2) => {
            next();
            var text_13 = text("Example");
            append($$anchor3, text_13);
          },
          $$slots: { default: true }
        });
        var node_18 = sibling(node_17, 2);
        each(node_18, 17, () => exampleArr, index, ($$anchor3, style) => {
          Radio($$anchor3, {
            labelClass: "w-40 my-1",
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
              var text_14 = text();
              template_effect(() => set_text(text_14, get(style).name));
              append($$anchor4, text_14);
            },
            $$slots: { default: true }
          });
        });
        reset(div_6);
        var node_19 = sibling(div_6, 2);
        component(node_19, () => get(SelectedComponent), ($$anchor3, $$component) => {
          $$component($$anchor3, {});
        });
        append($$anchor2, fragment_12);
      },
      $$slots: { codeblock: true, default: true }
    });
  }
  var node_20 = sibling(node_16, 2);
  H2(node_20, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_15 = text("Component data");
      append($$anchor2, text_15);
    },
    $$slots: { default: true }
  });
  var node_21 = sibling(node_20, 2);
  CompoAttributesViewer(node_21, { dirName });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
