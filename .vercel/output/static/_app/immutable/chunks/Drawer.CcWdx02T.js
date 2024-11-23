const name = "Drawer";
const props = [
  [
    "children",
    "Snippet",
    ""
  ],
  [
    "drawerStatus",
    "boolean",
    ""
  ],
  [
    "closeDrawer",
    "() => void",
    ""
  ],
  [
    "activateClickOutside",
    "boolean",
    "true"
  ],
  [
    "position",
    '"fixed" | "absolute" | undefined',
    ""
  ],
  [
    "width",
    '"default" | "full" | "half" | undefined',
    ""
  ],
  [
    "backdrop",
    "boolean",
    "true"
  ],
  [
    "backdropClass",
    "string",
    ""
  ],
  [
    "placement",
    '"left" | "right" | "top" | "bottom" | undefined',
    '"left"'
  ],
  [
    "class",
    "string",
    ""
  ],
  [
    "params",
    "ParamsType",
    "{ x: -320"
  ],
  [
    "duration",
    "any",
    ""
  ],
  [
    "easing",
    "any",
    ""
  ],
  [
    "transition",
    "TransitionFunc",
    "fly"
  ]
];
const Drawer = {
  name,
  props
};
export {
  Drawer as default,
  name,
  props
};
