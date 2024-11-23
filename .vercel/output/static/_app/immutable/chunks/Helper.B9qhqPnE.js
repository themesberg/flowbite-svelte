const name = "Helper";
const props = [
  [
    "children",
    "Snippet",
    ""
  ],
  [
    "class",
    "string",
    ""
  ],
  [
    "color",
    'type ColorName } from "$lib/types";\n\ninterface HelperProps extends HTMLAttributes<HTMLParagraphElement> {\n  children: Snippet;\n  class?: string;\n  color?: ColorName | "disabled";\n} | "disabled"',
    '"gray"'
  ]
];
const Helper = {
  name,
  props
};
export {
  Helper as default,
  name,
  props
};
