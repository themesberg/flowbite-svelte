import { Q as push, W as attr, a0 as spread_attributes, V as escape_html, S as pop, a1 as getContext, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like } from "../../../../chunks/index.js";
import { a as fade, f as fly, b as blur, s as slide, c as scale } from "../../../../chunks/index3.js";
import { s as sineIn, l as linear } from "../../../../chunks/index4.js";
import { u as uiHelpers } from "../../../../chunks/uiHelpers.svelte.js";
import { L as modal } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { C as CloseButton } from "../../../../chunks/CloseButton.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { twMerge } from "tailwind-merge";
import { C as Checkbox } from "../../../../chunks/Checkbox.js";
import { I as Input } from "../../../../chunks/index5.js";
function Modal($$payload, $$props) {
  push();
  let {
    children,
    header,
    footer,
    title,
    modalStatus,
    dismissable = true,
    closeModal,
    divClass,
    contentClass,
    closeBtnClass,
    h3Class,
    headerClass,
    bodyClass,
    footerClass,
    outsideClose = true,
    size = "md",
    backdrop = true,
    backdropClass,
    position = "center",
    class: className,
    params = { duration: 100, easing: sineIn },
    transition = fade,
    rounded = true,
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  const {
    base,
    div,
    content,
    backdrop: backdropCls,
    header: headerCls,
    footer: footerCls,
    body,
    closeBtn,
    h3
  } = modal({ position, size, backdrop, rounded });
  if (modalStatus) {
    $$payload.out += "<!--[-->";
    if (backdrop && outsideClose) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div role="presentation"${attr("class", backdropCls({ class: backdropClass }))}></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      if (backdrop && !outsideClose) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div role="presentation"${attr("class", backdropCls({ class: backdropClass }))}></div>`;
      } else {
        $$payload.out += "<!--[!-->";
        if (!backdrop && outsideClose) {
          $$payload.out += "<!--[-->";
          $$payload.out += `<div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full"></div>`;
        } else {
          $$payload.out += "<!--[!-->";
          if (!backdrop && !outsideClose) {
            $$payload.out += "<!--[-->";
            $$payload.out += `<div role="presentation" class="fixed start-0 top-0 z-50 h-full w-full"></div>`;
          } else {
            $$payload.out += "<!--[!-->";
          }
          $$payload.out += `<!--]-->`;
        }
        $$payload.out += `<!--]-->`;
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]--> <div${spread_attributes({
      ...restProps,
      class: base({ className }),
      tabindex: "-1"
    })}><div${attr("class", div({ class: divClass }))}><div${attr("class", content({ class: contentClass }))}>`;
    if (title || header) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr("class", headerCls({ class: headerClass }))}>`;
      if (title) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<h3${attr("class", h3({ class: h3Class }))}>${escape_html(title)}</h3>`;
      } else {
        $$payload.out += "<!--[!-->";
        if (header) {
          $$payload.out += "<!--[-->";
          header($$payload);
          $$payload.out += `<!---->`;
        } else {
          $$payload.out += "<!--[!-->";
        }
        $$payload.out += `<!--]-->`;
      }
      $$payload.out += `<!--]--> `;
      if (dismissable) {
        $$payload.out += "<!--[-->";
        CloseButton($$payload, {
          onclick: closeModal,
          class: closeBtn({ class: closeBtnClass })
        });
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div${attr("class", body({ class: bodyClass }))}>`;
    if (dismissable && !title && !header) {
      $$payload.out += "<!--[-->";
      CloseButton($$payload, {
        onclick: closeModal,
        class: closeBtn({ class: closeBtnClass })
      });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    children($$payload);
    $$payload.out += `<!----></div> `;
    if (footer) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr("class", footerCls({ class: footerClass }))}>`;
      footer($$payload);
      $$payload.out += `<!----></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function ExclamationCircleOutline($$payload, $$props) {
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
    ariaLabel = "exclamation circle outline",
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>`;
  pop();
}
function QuestionCircleOutline($$payload, $$props) {
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
    ariaLabel = "question circle outline",
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="M9.529 9.988a2.502 2.502 0 1 1 5 .191A2.441 2.441 0 0 1 12 12.582V14m-.01 3.008H12M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>`;
  pop();
}
const __vite_glob_0_0 = '<script>\n  import { Button, Modal, uiHelpers } from "$lib";\n  import MetaMask from "../../../utils/icons/MetaMask.svelte";\n  import CoinbaseWallet from "../../../utils/icons/CoinbaseWallet.svelte";\n  import OperaWallet from "../../../utils/icons/OperaWallet.svelte";\n  import Fortmatic from "../../../utils/icons/Fortmatic.svelte";\n  import WalletConnect from "../../../utils/icons/WalletConnect.svelte";\n  import { QuestionCircleOutline } from "flowbite-svelte-icons";\n  const modalExample = uiHelpers();\n  let modalStatus = $state(false);\n  const closeModal = modalExample.close;\n  $effect(() => {\n    modalStatus = modalExample.isOpen;\n  });\n<\/script>\n\n<div class="flex justify-center">\n  <Button onclick={modalExample.toggle}>Pop-up modal</Button>\n</div>\n\n<Modal title="Connect wallet" {modalStatus} {closeModal} size="xs">\n  <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p>\n  <ul class="my-4 space-y-3">\n    <li>\n      <a href="/" class="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">\n        <MetaMask />\n        <span class="ms-3 flex-1 whitespace-nowrap">MetaMask</span>\n        <span class="ms-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">Popular</span>\n      </a>\n    </li>\n    <li>\n      <a href="/" class="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">\n        <CoinbaseWallet />\n        <span class="ms-3 flex-1 whitespace-nowrap">Coinbase Wallet</span>\n      </a>\n    </li>\n    <li>\n      <a href="/" class="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">\n        <OperaWallet />\n        <span class="ms-3 flex-1 whitespace-nowrap">Opera Wallet</span>\n      </a>\n    </li>\n    <li>\n      <a href="/" class="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">\n        <WalletConnect />\n        <span class="ms-3 flex-1 whitespace-nowrap">WalletConnect</span>\n      </a>\n    </li>\n    <li>\n      <a href="/" class="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">\n        <Fortmatic />\n        <span class="ms-3 flex-1 whitespace-nowrap">Fortmatic</span>\n      </a>\n    </li>\n  </ul>\n  <div>\n    <a href="/" class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">\n      <QuestionCircleOutline class="me-2 h-3 w-3" /> Why do I need to connect with my wallet?\n    </a>\n  </div>\n</Modal>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Modal, Button, uiHelpers } from "$lib";\n  const modalExample = uiHelpers();\n  let modalStatus = $state(false);\n  const closeModal = modalExample.close;\n  $effect(() => {\n    modalStatus = modalExample.isOpen;\n  });\n<\/script>\n\n<div class="flex justify-center">\n  <Button onclick={modalExample.toggle}>Default modal</Button>\n</div>\n\n<Modal title="Terms of Service" {modalStatus} {closeModal}>\n  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>\n  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>\n</Modal>\n';
const __vite_glob_0_2 = `<script lang="ts">
  import { Modal, Button, uiHelpers } from "$lib";
  const modalExample = uiHelpers();
  let modalStatus = $state(false);
  const closeModal = modalExample.close;
  $effect(() => {
    modalStatus = modalExample.isOpen;
  });
<\/script>

<div class="flex justify-center">
  <Button onclick={modalExample.toggle}>Pop-up modal</Button>
</div>

<Modal title="Terms of Service" {modalStatus} {closeModal} outsideClose={false}>
  {#snippet footer()}
    <Button onclick={() => alert('Handle "success"')}>I accept</Button>
    <Button color="alternative" onclick={closeModal}>Decline</Button>
  {/snippet}
  <!-- Modal body -->
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
</Modal>
`;
const __vite_glob_0_3 = `<script lang="ts">
  import { Modal, Button, uiHelpers } from "$lib";
  const modalExample = uiHelpers();
  let modalStatus = $state(false);
  const closeModal = modalExample.close;
  $effect(() => {
    modalStatus = modalExample.isOpen;
  });
<\/script>

<div class="flex justify-center">
  <Button onclick={modalExample.toggle}>Default modal</Button>
</div>

<Modal title="Terms of Service" {modalStatus} {closeModal}>
  {#snippet footer()}
    <Button onclick={() => alert('Handle "success"')}>I accept</Button>
    <Button color="alternative" onclick={closeModal}>Decline</Button>
  {/snippet}
  <!-- Modal body -->
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
</Modal>
`;
const __vite_glob_0_4 = '<script>\n  import { Button, Modal, Label, Input, Checkbox, uiHelpers } from "$lib";\n  const modalExample = uiHelpers();\n  let modalStatus = $state(false);\n  const closeModal = modalExample.close;\n  $effect(() => {\n    modalStatus = modalExample.isOpen;\n  });\n<\/script>\n\n<div class="flex justify-center">\n  <Button onclick={modalExample.toggle}>Pop-up modal</Button>\n</div>\n\n<Modal {modalStatus} {closeModal} size="xs" class="w-full">\n  <form class="flex flex-col space-y-6" action="#">\n    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>\n    <Label class="space-y-2">\n      <span>Email</span>\n      <Input type="email" name="email" placeholder="name@company.com" required />\n    </Label>\n    <Label class="space-y-2">\n      <span>Your password</span>\n      <Input type="password" name="password" placeholder="•••••" required />\n    </Label>\n    <div class="flex items-start">\n      <Checkbox>Remember me</Checkbox>\n      <a href="/" class="ms-auto text-sm text-primary-700 hover:underline dark:text-primary-500">Lost password?</a>\n    </div>\n    <Button type="submit" class="w-full1">Login to your account</Button>\n    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">\n      Not registered? <a href="/" class="text-primary-700 hover:underline dark:text-primary-500">Create account</a>\n    </div>\n  </form>\n</Modal>\n';
const __vite_glob_0_5 = '<script lang="ts">\n  import { Modal, Button, uiHelpers } from "$lib";\n  const modalExample = uiHelpers();\n  let modalStatus = $state(false);\n  const closeModal = modalExample.close;\n  $effect(() => {\n    modalStatus = modalExample.isOpen;\n  });\n<\/script>\n\n<div class="flex justify-center">\n  <Button onclick={modalExample.toggle}>Default modal</Button>\n</div>\n\n<Modal {modalStatus} {closeModal}>\n  {#snippet header()}\n    <h2 class="weight-bold text-xl text-pink-700">Terms of Service</h2>\n  {/snippet}\n  <!-- Modal body -->\n  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>\n  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>\n</Modal>\n';
const __vite_glob_0_6 = `<script lang="ts">
  import { Modal, Button, uiHelpers } from "$lib";
  import { ExclamationCircleOutline } from "flowbite-svelte-icons";
  const modalExample = uiHelpers();
  let modalStatus = $state(false);
  const closeModal = modalExample.close;
  $effect(() => {
    modalStatus = modalExample.isOpen;
  });
<\/script>

<div class="flex justify-center">
  <Button onclick={modalExample.toggle}>Pop-up modal</Button>
</div>

<Modal size="xs" {modalStatus} {closeModal}>
  <div class="text-center">
    <ExclamationCircleOutline class="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200" />
    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
    <Button color="red" class="me-2">Yes, I'm sure</Button>
    <Button color="alternative">No, cancel</Button>
  </div>
</Modal>
`;
const __vite_glob_0_7 = '<script lang="ts">\n  import { Modal, Button, uiHelpers } from "$lib";\n  const modalExample = uiHelpers();\n  let modalStatus = $state(false);\n  const closeModal = modalExample.close;\n  $effect(() => {\n    modalStatus = modalExample.isOpen;\n  });\n<\/script>\n\n<div class="flex justify-center">\n  <Button onclick={modalExample.toggle}>Default modal</Button>\n</div>\n';
function Default($$payload, $$props) {
  push();
  const modalExample = uiHelpers();
  let modalStatus = false;
  const closeModal = modalExample.close;
  $$payload.out += `<div class="flex justify-center">`;
  Button($$payload, {
    onclick: modalExample.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Default modal`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Modal($$payload, {
    title: "Terms of Service",
    modalStatus,
    closeModal,
    children: ($$payload2) => {
      $$payload2.out += `<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}
function Popup($$payload, $$props) {
  push();
  const modalExample = uiHelpers();
  let modalStatus = false;
  const closeModal = modalExample.close;
  $$payload.out += `<div class="flex justify-center">`;
  Button($$payload, {
    onclick: modalExample.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Pop-up modal`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Modal($$payload, {
    size: "xs",
    modalStatus,
    closeModal,
    children: ($$payload2) => {
      $$payload2.out += `<div class="text-center">`;
      ExclamationCircleOutline($$payload2, {
        class: "mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200"
      });
      $$payload2.out += `<!----> <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3> `;
      Button($$payload2, {
        color: "red",
        class: "me-2",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Yes, I'm sure`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        color: "alternative",
        children: ($$payload3) => {
          $$payload3.out += `<!---->No, cancel`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}
function DisableOutsideclose($$payload, $$props) {
  push();
  const modalExample = uiHelpers();
  let modalStatus = false;
  const closeModal = modalExample.close;
  $$payload.out += `<div class="flex justify-center">`;
  Button($$payload, {
    onclick: modalExample.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Pop-up modal`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  {
    let footer = function($$payload2) {
      Button($$payload2, {
        onclick: () => alert('Handle "success"'),
        children: ($$payload3) => {
          $$payload3.out += `<!---->I accept`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        color: "alternative",
        onclick: closeModal,
        children: ($$payload3) => {
          $$payload3.out += `<!---->Decline`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    };
    Modal($$payload, {
      title: "Terms of Service",
      modalStatus,
      closeModal,
      outsideClose: false,
      footer,
      children: ($$payload2) => {
        $$payload2.out += `<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>`;
      },
      $$slots: { footer: true, default: true }
    });
  }
  $$payload.out += `<!---->`;
  pop();
}
function Form($$payload, $$props) {
  push();
  const modalExample = uiHelpers();
  let modalStatus = false;
  const closeModal = modalExample.close;
  $$payload.out += `<div class="flex justify-center">`;
  Button($$payload, {
    onclick: modalExample.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Pop-up modal`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Modal($$payload, {
    modalStatus,
    closeModal,
    size: "xs",
    class: "w-full",
    children: ($$payload2) => {
      $$payload2.out += `<form class="flex flex-col space-y-6" action="#"><h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3> `;
      Label($$payload2, {
        class: "space-y-2",
        children: ($$payload3) => {
          $$payload3.out += `<span>Email</span> `;
          Input($$payload3, {
            type: "email",
            name: "email",
            placeholder: "name@company.com",
            required: true
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Label($$payload2, {
        class: "space-y-2",
        children: ($$payload3) => {
          $$payload3.out += `<span>Your password</span> `;
          Input($$payload3, {
            type: "password",
            name: "password",
            placeholder: "•••••",
            required: true
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <div class="flex items-start">`;
      Checkbox($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<!---->Remember me`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <a href="/" class="ms-auto text-sm text-primary-700 hover:underline dark:text-primary-500">Lost password?</a></div> `;
      Button($$payload2, {
        type: "submit",
        class: "w-full1",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Login to your account`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <div class="text-sm font-medium text-gray-500 dark:text-gray-300">Not registered? <a href="/" class="text-primary-700 hover:underline dark:text-primary-500">Create account</a></div></form>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}
function MetaMask($$payload) {
  $$payload.out += `<svg aria-hidden="true" class="h-4" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z" fill="#E17726"></path><path d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z" fill="#E27625"></path><path d="M32.1656 27.0093L39.7516 27.1537L37.1004 36.1603L27.8438 33.6116L32.1656 27.0093Z" fill="#E27625"></path><path d="M7.83409 27.0093L12.1399 33.6116L2.89876 36.1604L0.263672 27.1537L7.83409 27.0093Z" fill="#E27625"></path><path d="M17.5203 10.8677L17.8304 20.8807L8.55371 20.4587L11.1924 16.4778L11.2258 16.4394L17.5203 10.8677Z" fill="#E27625"></path><path d="M22.3831 10.7559L28.7737 16.4397L28.8067 16.4778L31.4455 20.4586L22.1709 20.8806L22.3831 10.7559Z" fill="#E27625"></path><path d="M12.4115 27.0381L17.4768 30.9848L11.5928 33.8257L12.4115 27.0381Z" fill="#E27625"></path><path d="M27.5893 27.0376L28.391 33.8258L22.5234 30.9847L27.5893 27.0376Z" fill="#E27625"></path><path d="M22.6523 30.6128L28.6066 33.4959L23.0679 36.1282L23.1255 34.3884L22.6523 30.6128Z" fill="#D5BFB2"></path><path d="M17.3458 30.6143L16.8913 34.3601L16.9286 36.1263L11.377 33.4961L17.3458 30.6143Z" fill="#D5BFB2"></path><path d="M15.6263 22.1875L17.1822 25.4575L11.8848 23.9057L15.6263 22.1875Z" fill="#233447"></path><path d="M24.3739 22.1875L28.133 23.9053L22.8184 25.4567L24.3739 22.1875Z" fill="#233447"></path><path d="M12.8169 27.0049L11.9606 34.0423L7.37109 27.1587L12.8169 27.0049Z" fill="#CC6228"></path><path d="M27.1836 27.0049L32.6296 27.1587L28.0228 34.0425L27.1836 27.0049Z" fill="#CC6228"></path><path d="M31.5799 20.0605L27.6165 24.0998L24.5608 22.7034L23.0978 25.779L22.1387 20.4901L31.5799 20.0605Z" fill="#CC6228"></path><path d="M8.41797 20.0605L17.8608 20.4902L16.9017 25.779L15.4384 22.7038L12.3988 24.0999L8.41797 20.0605Z" fill="#CC6228"></path><path d="M8.15039 19.2314L12.6345 23.7816L12.7899 28.2736L8.15039 19.2314Z" fill="#E27525"></path><path d="M31.8538 19.2236L27.2061 28.2819L27.381 23.7819L31.8538 19.2236Z" fill="#E27525"></path><path d="M17.6412 19.5088L17.8217 20.6447L18.2676 23.4745L17.9809 32.166L16.6254 25.1841L16.625 25.1119L17.6412 19.5088Z" fill="#E27525"></path><path d="M22.3562 19.4932L23.3751 25.1119L23.3747 25.1841L22.0158 32.1835L21.962 30.4328L21.75 23.4231L22.3562 19.4932Z" fill="#E27525"></path><path d="M27.7797 23.6011L27.628 27.5039L22.8977 31.1894L21.9414 30.5138L23.0133 24.9926L27.7797 23.6011Z" fill="#F5841F"></path><path d="M12.2373 23.6011L16.9873 24.9926L18.0591 30.5137L17.1029 31.1893L12.3723 27.5035L12.2373 23.6011Z" fill="#F5841F"></path><path d="M10.4717 32.6338L16.5236 35.5013L16.4979 34.2768L17.0043 33.8323H22.994L23.5187 34.2753L23.48 35.4989L29.4935 32.641L26.5673 35.0591L23.0289 37.4894H16.9558L13.4197 35.0492L10.4717 32.6338Z" fill="#C0AC9D"></path><path d="M22.2191 30.231L23.0748 30.8354L23.5763 34.8361L22.8506 34.2234H17.1513L16.4395 34.8485L16.9244 30.8357L17.7804 30.231H22.2191Z" fill="#161616"></path><path d="M37.9395 0.351562L39.9998 6.53242L38.7131 12.7819L39.6293 13.4887L38.3895 14.4346L39.3213 15.1542L38.0875 16.2779L38.8449 16.8264L36.8347 19.1742L28.5894 16.7735L28.5179 16.7352L22.5762 11.723L37.9395 0.351562Z" fill="#763E1A"></path><path d="M2.06031 0.351562L17.4237 11.723L11.4819 16.7352L11.4105 16.7735L3.16512 19.1742L1.15488 16.8264L1.91176 16.2783L0.678517 15.1542L1.60852 14.4354L0.350209 13.4868L1.30098 12.7795L0 6.53265L2.06031 0.351562Z" fill="#763E1A"></path><path d="M28.1861 16.2485L36.9226 18.7921L39.7609 27.5398L32.2728 27.5398L27.1133 27.6049L30.8655 20.2912L28.1861 16.2485Z" fill="#F5841F"></path><path d="M11.8139 16.2485L9.13399 20.2912L12.8867 27.6049L7.72971 27.5398H0.254883L3.07728 18.7922L11.8139 16.2485Z" fill="#F5841F"></path><path d="M25.5283 5.17383L23.0847 11.7736L22.5661 20.6894L22.3677 23.4839L22.352 30.6225H17.6471L17.6318 23.4973L17.4327 20.6869L16.9139 11.7736L14.4707 5.17383H25.5283Z" fill="#F5841F"></path></svg>`;
}
function CoinbaseWallet($$payload) {
  $$payload.out += `<svg aria-hidden="true" class="h-5" viewBox="0 0 292 292" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M145.7 291.66C226.146 291.66 291.36 226.446 291.36 146C291.36 65.5541 226.146 0.339844 145.7 0.339844C65.2542 0.339844 0.0400391 65.5541 0.0400391 146C0.0400391 226.446 65.2542 291.66 145.7 291.66Z" fill="#3259A5"></path><path d="M195.94 155.5C191.49 179.08 170.8 196.91 145.93 196.91C117.81 196.91 95.0204 174.12 95.0204 146C95.0204 117.88 117.81 95.0897 145.93 95.0897C170.8 95.0897 191.49 112.93 195.94 136.5H247.31C242.52 84.7197 198.96 44.1797 145.93 44.1797C89.6904 44.1797 44.1104 89.7697 44.1104 146C44.1104 202.24 89.7004 247.82 145.93 247.82C198.96 247.82 242.52 207.28 247.31 155.5H195.94Z" fill="white"></path></svg>`;
}
function OperaWallet($$payload) {
  $$payload.out += `<svg aria-hidden="true" class="h-5" viewBox="0 0 75.591 75.591" xmlns="http://www.w3.org/2000/svg"><linearGradient id="a" gradientTransform="matrix(0 -54.944 -54.944 0 23.62 79.474)" gradientUnits="userSpaceOnUse" x2="1"><stop offset="0" stop-color="#ff1b2d"></stop><stop offset=".3" stop-color="#ff1b2d"></stop><stop offset=".614" stop-color="#ff1b2d"></stop><stop offset="1" stop-color="#a70014"></stop></linearGradient><linearGradient id="b" gradientTransform="matrix(0 -48.595 -48.595 0 37.854 76.235)" gradientUnits="userSpaceOnUse" x2="1"><stop offset="0" stop-color="#9c0000"></stop><stop offset=".7" stop-color="#ff4b4b"></stop><stop offset="1" stop-color="#ff4b4b"></stop></linearGradient><g transform="matrix(1.3333 0 0 -1.3333 0 107.2)"><path d="m28.346 80.398c-15.655 0-28.346-12.691-28.346-28.346 0-15.202 11.968-27.609 26.996-28.313.44848-.02115.89766-.03314 1.3504-.03314 7.2574 0 13.876 2.7289 18.891 7.2137-3.3227-2.2036-7.2074-3.4715-11.359-3.4715-6.7504 0-12.796 3.3488-16.862 8.6297-3.1344 3.6999-5.1645 9.1691-5.3028 15.307v1.3349c.13821 6.1377 2.1683 11.608 5.302 15.307 4.0666 5.2809 10.112 8.6297 16.862 8.6297 4.1526 0 8.038-1.2679 11.361-3.4729-4.9904 4.4643-11.569 7.1876-18.786 7.2144-.03596 0-.07122.0014-.10718.0014z" fill="url(#a)"></path><path d="m19.016 68.025c2.6013 3.0709 5.9607 4.9227 9.631 4.9227 8.2524 0 14.941-9.356 14.941-20.897s-6.6891-20.897-14.941-20.897c-3.6703 0-7.0297 1.851-9.6303 4.922 4.0659-5.2809 10.111-8.6297 16.862-8.6297 4.1519 0 8.0366 1.2679 11.359 3.4715 5.802 5.1906 9.4554 12.735 9.4554 21.133 0 8.397-3.6527 15.941-9.4533 21.131-3.3234 2.205-7.2088 3.4729-11.361 3.4729-6.7504 0-12.796-3.3488-16.862-8.6297" fill="url(#b)"></path></g></svg>`;
}
function Fortmatic($$payload) {
  $$payload.out += `<svg aria-hidden="true" class="h-4" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M72.0998 0.600098H48.3998H24.5998H0.799805V24.4001V48.2001V49.7001V71.8001V71.9001V95.5001H24.5998V72.0001V71.9001V49.8001V48.3001V24.5001H48.3998H72.1998H95.9998V0.700104H72.0998V0.600098Z" fill="#617BFF"></path><path d="M48.5 71.8002H72.1V95.6002H73C79.1 95.6002 84.9 93.2002 89.2 88.9002C93.5 84.6002 95.9 78.8002 95.9 72.7002V48.2002H48.5V71.8002Z" fill="#617BFF"></path></svg>`;
}
function WalletConnect($$payload) {
  $$payload.out += `<svg aria-hidden="true" class="h-5" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient cx="0%" cy="50%" fx="0%" fy="50%" r="100%" id="radialGradient-1"><stop stop-color="#5D9DF6" offset="0%"></stop><stop stop-color="#006FFF" offset="100%"></stop></radialGradient></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="logo"><rect id="base" fill="url(#radialGradient-1)" x="0" y="0" width="512" height="512" rx="256"></rect><path d="M169.209772,184.531136 C217.142772,137.600733 294.857519,137.600733 342.790517,184.531136 L348.559331,190.179285 C350.955981,192.525805 350.955981,196.330266 348.559331,198.676787 L328.82537,217.99798 C327.627045,219.171241 325.684176,219.171241 324.485851,217.99798 L316.547278,210.225455 C283.10802,177.485633 228.89227,177.485633 195.453011,210.225455 L186.951456,218.549188 C185.75313,219.722448 183.810261,219.722448 182.611937,218.549188 L162.877976,199.227995 C160.481326,196.881474 160.481326,193.077013 162.877976,190.730493 L169.209772,184.531136 Z M383.602212,224.489406 L401.165475,241.685365 C403.562113,244.031874 403.562127,247.836312 401.165506,250.182837 L321.971538,327.721548 C319.574905,330.068086 315.689168,330.068112 313.292501,327.721609 C313.292491,327.721599 313.29248,327.721588 313.29247,327.721578 L257.08541,272.690097 C256.486248,272.103467 255.514813,272.103467 254.915651,272.690097 C254.915647,272.690101 254.915644,272.690105 254.91564,272.690108 L198.709777,327.721548 C196.313151,330.068092 192.427413,330.068131 190.030739,327.721634 C190.030725,327.72162 190.03071,327.721606 190.030695,327.721591 L110.834524,250.181849 C108.437875,247.835329 108.437875,244.030868 110.834524,241.684348 L128.397819,224.488418 C130.794468,222.141898 134.680206,222.141898 137.076856,224.488418 L193.284734,279.520668 C193.883897,280.107298 194.85533,280.107298 195.454493,279.520668 C195.454502,279.520659 195.45451,279.520651 195.454519,279.520644 L251.65958,224.488418 C254.056175,222.141844 257.941913,222.141756 260.338618,224.488222 C260.338651,224.488255 260.338684,224.488288 260.338717,224.488321 L316.546521,279.520644 C317.145683,280.107273 318.117118,280.107273 318.71628,279.520644 L374.923175,224.489406 C377.319825,222.142885 381.205562,222.142885 383.602212,224.489406 Z" id="WalletConnect" fill="#FFFFFF" fill-rule="nonzero"></path></g></g></svg>`;
}
function CryptoWallet($$payload, $$props) {
  push();
  const modalExample = uiHelpers();
  let modalStatus = false;
  const closeModal = modalExample.close;
  $$payload.out += `<div class="flex justify-center">`;
  Button($$payload, {
    onclick: modalExample.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Pop-up modal`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  Modal($$payload, {
    title: "Connect wallet",
    modalStatus,
    closeModal,
    size: "xs",
    children: ($$payload2) => {
      $$payload2.out += `<p class="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p> <ul class="my-4 space-y-3"><li><a href="/" class="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">`;
      MetaMask($$payload2);
      $$payload2.out += `<!----> <span class="ms-3 flex-1 whitespace-nowrap">MetaMask</span> <span class="ms-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">Popular</span></a></li> <li><a href="/" class="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">`;
      CoinbaseWallet($$payload2);
      $$payload2.out += `<!----> <span class="ms-3 flex-1 whitespace-nowrap">Coinbase Wallet</span></a></li> <li><a href="/" class="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">`;
      OperaWallet($$payload2);
      $$payload2.out += `<!----> <span class="ms-3 flex-1 whitespace-nowrap">Opera Wallet</span></a></li> <li><a href="/" class="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">`;
      WalletConnect($$payload2);
      $$payload2.out += `<!----> <span class="ms-3 flex-1 whitespace-nowrap">WalletConnect</span></a></li> <li><a href="/" class="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">`;
      Fortmatic($$payload2);
      $$payload2.out += `<!----> <span class="ms-3 flex-1 whitespace-nowrap">Fortmatic</span></a></li></ul> <div><a href="/" class="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">`;
      QuestionCircleOutline($$payload2, { class: "me-2 h-3 w-3" });
      $$payload2.out += `<!----> Why do I need to connect with my wallet?</a></div>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!---->`;
  pop();
}
function HeaderSnippet($$payload, $$props) {
  push();
  const modalExample = uiHelpers();
  let modalStatus = false;
  const closeModal = modalExample.close;
  $$payload.out += `<div class="flex justify-center">`;
  Button($$payload, {
    onclick: modalExample.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Default modal`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  {
    let header = function($$payload2) {
      $$payload2.out += `<h2 class="weight-bold text-xl text-pink-700">Terms of Service</h2>`;
    };
    Modal($$payload, {
      modalStatus,
      closeModal,
      header,
      children: ($$payload2) => {
        $$payload2.out += `<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>`;
      },
      $$slots: { header: true, default: true }
    });
  }
  $$payload.out += `<!---->`;
  pop();
}
function FooterSnippet($$payload, $$props) {
  push();
  const modalExample = uiHelpers();
  let modalStatus = false;
  const closeModal = modalExample.close;
  $$payload.out += `<div class="flex justify-center">`;
  Button($$payload, {
    onclick: modalExample.toggle,
    children: ($$payload2) => {
      $$payload2.out += `<!---->Default modal`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div> `;
  {
    let footer = function($$payload2) {
      Button($$payload2, {
        onclick: () => alert('Handle "success"'),
        children: ($$payload3) => {
          $$payload3.out += `<!---->I accept`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        color: "alternative",
        onclick: closeModal,
        children: ($$payload3) => {
          $$payload3.out += `<!---->Decline`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    };
    Modal($$payload, {
      title: "Terms of Service",
      modalStatus,
      closeModal,
      footer,
      children: ($$payload2) => {
        $$payload2.out += `<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p> <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>`;
      },
      $$slots: { footer: true, default: true }
    });
  }
  $$payload.out += `<!---->`;
  pop();
}
function _page($$payload, $$props) {
  push();
  const dirName = "modal";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/CryptoWallet.svelte": __vite_glob_0_0,
    "./examples/Default.svelte": __vite_glob_0_1,
    "./examples/DisableOutsideclose.svelte": __vite_glob_0_2,
    "./examples/FooterSnippet.svelte": __vite_glob_0_3,
    "./examples/Form.svelte": __vite_glob_0_4,
    "./examples/HeaderSnippet.svelte": __vite_glob_0_5,
    "./examples/Popup.svelte": __vite_glob_0_6,
    "./examples/Setup.svelte": __vite_glob_0_7
  });
  const exampleArr = [
    {
      name: "Default",
      component: Default
    },
    {
      name: "Popup",
      component: Popup
    },
    {
      name: "Form",
      component: Form
    },
    {
      name: "Disable outsideclose",
      component: DisableOutsideclose
    },
    {
      name: "Crypto wallet",
      component: CryptoWallet
    },
    {
      name: "Header snippet",
      component: HeaderSnippet
    },
    {
      name: "Footer snippet",
      component: FooterSnippet
    }
  ];
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  const interactiveModalExample = uiHelpers();
  let interactiveModalStatus = false;
  const closeInteractiveModal = interactiveModalExample.close;
  const positions = Object.keys(modal.variants.position);
  let modalPosition = "default";
  const sizes = Object.keys(modal.variants.size);
  console.log("sizes", sizes);
  let modalSize = "md";
  let backdrop = true;
  const changeBackdrop = () => {
    backdrop = !backdrop;
  };
  let outsideClose = true;
  const changeOutsideClose = () => {
    outsideClose = !outsideClose;
  };
  let rounded = true;
  const changeRounded = () => {
    rounded = !rounded;
  };
  const transitions = [
    {
      name: "Fade",
      transition: fade,
      params: { duration: 200, easing: linear }
    },
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
  let selectedTransition = "Fade";
  let currentTransition = transitions.find((t) => t.name === selectedTransition) || transitions[0];
  let generatedCode = (() => {
    let props = [];
    if (modalSize !== "md") props.push(`size="${modalSize}"`);
    if (!backdrop) props.push("backdrop={false}");
    if (!outsideClose) props.push("outsideClose={false}");
    if (!rounded) props.push("rounded={false}");
    if (modalPosition !== "default") props.push(`position="${modalPosition}"`);
    if (currentTransition !== transitions[0]) {
      props.push(`transition={${currentTransition.transition.name}}`);
      const paramsString = Object.entries(currentTransition.params).map(([key, value]) => {
        if (typeof value === "function") {
          return `${key}:${value.name}`;
        }
        return `${key}:${value}`;
      }).join(",");
      props.push(`params={{${paramsString}}}`);
    }
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Modal title="Terms of Service" {modalStatus} {closeModal}${propsString}>
  Modal content
</Modal>`;
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
        $$payload3.out += `<!---->Modal`;
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
        $$payload3.out += `<!---->Interactive Modal Bilder`;
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
          const each_array_1 = ensure_array_like(positions);
          const each_array_2 = ensure_array_like(transitions);
          $$payload3.out += `<div class="mb-4 h-20"><div class="flex justify-center">`;
          Button($$payload3, {
            onclick: interactiveModalExample.toggle,
            children: ($$payload4) => {
              $$payload4.out += `<!---->Default modal`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> `;
          Modal($$payload3, {
            title: "Terms of Service",
            size: modalSize,
            backdrop,
            outsideClose,
            rounded,
            position: modalPosition,
            transition: currentTransition.transition,
            params: currentTransition.params,
            modalStatus: interactiveModalStatus,
            closeModal: closeInteractiveModal,
            children: ($$payload4) => {
              $$payload4.out += `<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident odit quis fugit beatae, veritatis minus cupiditate ea numquam facere iusto vitae sequi, ipsum ducimus quo eaque illum. Eveniet, dolorem autem.</p>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <div class="mb-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Size`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let size = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-12 my-1",
              name: "modal-size",
              get group() {
                return modalSize;
              },
              set group($$value) {
                modalSize = $$value;
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
              $$payload4.out += `<!---->Position`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let position = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: "w-32 my-1",
              name: "modal-position",
              get group() {
                return modalPosition;
              },
              set group($$value) {
                modalPosition = $$value;
                $$settled = false;
              },
              value: position,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(position)}`;
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
          for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
            let transition = each_array_2[$$index_2];
            Radio($$payload3, {
              labelClass: "w-16 my-1",
              name: "transition_interactive",
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
            class: "w-48",
            onclick: changeBackdrop,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(backdrop ? "Remove backdrop" : "Add backdrop")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-48",
            color: "secondary",
            onclick: changeOutsideClose,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(outsideClose ? "Remove outside close" : "Add outside close")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-48",
            color: "pink",
            onclick: changeRounded,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(rounded ? "Remove rounded" : "Add rounded")}`;
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
          $$payload3.out += `<div class="mb-4 flex flex-wrap">`;
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
              labelClass: "w-44 my-1",
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
