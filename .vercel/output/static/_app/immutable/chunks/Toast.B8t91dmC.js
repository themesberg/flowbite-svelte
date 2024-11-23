const name = "Toast";
const props = [
  [
    "children",
    "Snippet",
    ""
  ],
  [
    "icon",
    "Snippet",
    ""
  ],
  [
    "toastStatus",
    "boolean",
    "$bindable(true)"
  ],
  [
    "dismissable",
    "boolean",
    "true"
  ],
  [
    "color",
    '"primary" | "gray" | "red" | "yellow" | "green" | "indigo" | "purple" | "pink" | "blue" | "orange" | "amber" | "lime" | "emerald" | "teal" | "cyan" | "sky" | "violet" | "fuchsia" | "rose" | undefined',
    '"primary"'
  ],
  [
    "position",
    '"top-left" | "top-right" | "bottom-left" | "bottom-right" | undefined',
    ""
  ],
  [
    "baseClass",
    "string",
    ""
  ],
  [
    "iconClass",
    "string",
    ""
  ],
  [
    "contentClass",
    "string",
    ""
  ],
  [
    "align",
    "boolean",
    "true"
  ],
  [
    "params",
    "ParamsType",
    ""
  ],
  [
    "transition",
    "TransitionFunc",
    "fly"
  ]
];
const Toast = {
  name,
  props
};
export {
  Toast as default,
  name,
  props
};
