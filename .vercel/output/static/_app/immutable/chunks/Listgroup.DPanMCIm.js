const name = "Listgroup";
const props = [
  [
    "children",
    "Snippet",
    ""
  ],
  [
    "items",
    "(interface ListGroupItemType {\n  name: string;\n  Icon?: Component;\n  onclick?: () => void;\n  href?: string;\n  active?: boolean;\n  current?: boolean;\n  disabled?: boolean;\n  [key: string]: any;\n} | string)[]",
    ""
  ],
  [
    "active",
    "boolean",
    ""
  ],
  [
    "onclick",
    "(event?",
    ""
  ],
  [
    "rounded",
    "boolean",
    "true"
  ],
  [
    "border",
    "boolean",
    "true"
  ],
  [
    "class",
    "string",
    ""
  ]
];
const Listgroup = {
  name,
  props
};
export {
  Listgroup as default,
  name,
  props
};
