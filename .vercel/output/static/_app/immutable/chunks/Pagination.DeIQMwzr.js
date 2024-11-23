const name = "Pagination";
const props = [
  [
    "pages",
    'interface PaginationItemProps extends HTMLAttributesWithoutAbort {\n  children?: Snippet;\n  name?: string;\n  href?: string;\n  active?: boolean;\n  rel?: string;\n  size?: "default" | "large" | undefined;\n}[]',
    "[]"
  ],
  [
    "previous",
    "() => void",
    ""
  ],
  [
    "next",
    "() => void",
    ""
  ],
  [
    "prevContent",
    "Snippet",
    ""
  ],
  [
    "nextContent",
    "Snippet",
    ""
  ],
  [
    "table",
    "boolean",
    ""
  ],
  [
    "size",
    '{\n  size?: "default" | "large"["size"]',
    ""
  ],
  [
    "ariaLabel",
    "string",
    ""
  ]
];
const Pagination = {
  name,
  props
};
export {
  Pagination as default,
  name,
  props
};
