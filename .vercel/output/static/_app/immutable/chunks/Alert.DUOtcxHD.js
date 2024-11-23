const name = "Alert";
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
    "alertStatus",
    "boolean",
    "$bindable(true)"
  ],
  [
    "closeIcon",
    "boolean",
    ""
  ],
  [
    "color",
    '"primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose"',
    '"primary"'
  ],
  [
    "rounded",
    "boolean",
    "true"
  ],
  [
    "border",
    "boolean",
    ""
  ],
  [
    "class",
    "string",
    ""
  ],
  [
    "dismissable",
    "boolean",
    ""
  ],
  [
    "transition",
    "TransitionFunc",
    "fade"
  ],
  [
    "params",
    "ParamsType",
    ""
  ],
  [
    "onclick",
    "() => void",
    ""
  ]
];
const Alert = {
  name,
  props
};
export {
  Alert as default,
  name,
  props
};
