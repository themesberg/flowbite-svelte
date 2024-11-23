const name = "Dropdown";
const props = [
  [
    "children",
    "Snippet",
    ""
  ],
  [
    "dropdownStatus",
    "boolean",
    "$bindable()"
  ],
  [
    "closeDropdown",
    "() => void",
    ""
  ],
  [
    "class",
    "string",
    ""
  ],
  [
    "backdropClass",
    "string",
    ""
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
  ],
  [
    "activeUrl",
    "string",
    '""'
  ]
];
const Dropdown = {
  name,
  props
};
export {
  Dropdown as default,
  name,
  props
};
