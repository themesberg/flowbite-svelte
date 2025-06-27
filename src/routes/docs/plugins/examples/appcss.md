```css
@import 'tailwindcss';
// ...
@plugin "flowbite-typography";

@source "../node_modules/@flowbite-svelte-plugins/texteditor/dist";

@layer components {

/* texteditor */
  :root {
    --white: #fff;
    --black: #2e2b29;
    --black-contrast: #110f0e;
    --gray-1: rgba(61, 37, 20, 0.05);
    --gray-2: rgba(61, 37, 20, 0.08);
    --gray-3: rgba(61, 37, 20, 0.12);
    --gray-4: rgba(53, 38, 28, 0.3);
    --gray-5: rgba(28, 25, 23, 0.6);
    --green: #22c55e;
    --purple: #6a00f5;
    --purple-contrast: #5800cc;
    --purple-light: rgba(88, 5, 255, 0.05);
    --yellow-contrast: #facc15;
    --yellow: rgba(250, 204, 21, 0.4);
    --yellow-light: #fffae5;
    --red: #ff5c33;
    --red-light: #ffebe5;
    --shadow: 0px 12px 33px 0px rgba(0, 0, 0, 0.06), 0px 3.618px 9.949px 0px rgba(0, 0, 0, 0.04);
  }

  .tiptap:first-child {
    margin-top: 0;
  }

  /* blockquote */
  .tiptap blockquote {
    border-left: 3px solid var(--gray-3);
    margin: 1.5rem 0;
    padding-left: 1rem;
  }

  /* bubble menu */
  .bubble-menu {
    background-color: var(--white);
    border: 1px solid var(--gray-1);
    border-radius: 0.7rem;
    box-shadow: var(--shadow);
    display: flex;
    padding: 0.2rem;
  }

  .bubble-menu button {
    background-color: unset;
    border-radius: 0.5rem;
    border: none;
    color: var(--black);
    font-family: inherit;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.15;
    padding: 0.375rem 0.625rem;
    transition: all 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
  }

  .bubble-menu button:hover {
    background-color: var(--gray-3);
  }

  .bubble-menu button.is-active {
    background-color: var(--purple);
    color: var(--white);
  }

  .bubble-menu button.is-active:hover {
    background-color: var(--purple-contrast);
  }

  /* texteditor Details */
  .tiptap .details {
    display: flex;
    gap: 0.25rem;
    margin: 1.5rem 0;
    border: 1px solid #d4c8c760;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }

  .tiptap .details summary {
    font-weight: 700;
    list-style: none;
  }

  .tiptap .details > button {
    align-items: center;
    background: transparent;
    border-radius: 4px;
    display: flex;
    font-size: 0.625rem;
    height: 1.25rem;
    justify-content: center;
    line-height: 1;
    margin-top: 0.1rem;
    padding: 0;
    width: 1.25rem;
  }

  .tiptap .details > button:hover {
    background-color: #dedad8d8;
  }

  .tiptap .details > button::before {
    content: '▶';
    display: inline-block;
    position: relative;
    top: 3px;
  }

  .tiptap .details.is-open > button::before {
    transform: rotate(90deg);
  }

  .tiptap .details > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .tiptap .details > div > [data-type='detailsContent'] > :last-child {
    margin-bottom: 0.5rem;
  }

  .tiptap .details .details {
    margin: 0.5rem 0;
  }

  /* emoji */
  [data-type='emoji'] {
    img {
      height: 1em;
      width: 1em;
      display: inline;
      margin: 0 !important;
      padding: 0 !important;
    }
  }

  /* mention */
  [data-type='mention'] {
    background-color: rgba(88, 5, 255, 0.05);
    border-radius: 0.4rem;
    box-decoration-break: clone;
    color: #6a00f5;
    padding: 0.1rem 0.3rem;
  }

  /*  mention and emoji */
  .tippy-box .tippy-content .dropdown-menu button,
  .tippy-box .tippy-content .mention-dropdown button {
    align-items: center;
    background-color: transparent;
    display: flex;
    gap: 0.25rem;
    text-align: left;
    width: 100%;
  }

  .tippy-box .tippy-content .dropdown-menu button:hover,
  .tippy-box .tippy-content .dropdown-menu button:hover.is-selected,
  .tippy-box .tippy-content .mention-dropdown button:hover,
  .tippy-box .tippy-content .mention-dropdown button:hover.is-selected {
    background-color: rgba(61, 37, 20, 0.12);
  }

  .tippy-box .tippy-content .dropdown-menu button.is-selected,
  .tippy-box .tippy-content .mention-dropdown button.is-selected {
    background-color: rgba(61, 37, 20, 0.08);
  }

  .tippy-box .tippy-content .dropdown-menu button img {
    height: 1em;
    width: 1em;
  }

  .tippy-box {
    transform-origin: center !important;
  }

  .tippy-box .tippy-content .dropdown-menu,
  .tippy-box .tippy-content .mention-dropdown {
    background: #fff;
    border: 1px solid rgba(61, 37, 20, 0.05);
    border-radius: 0.7rem;
    box-shadow:
      0px 12px 33px 0px rgba(0, 0, 0, 0.06),
      0px 3.618px 9.949px 0px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    overflow: auto;
    padding: 0.6rem;
    position: relative;
    min-width: 200px;
    max-width: 300px;
    width: max-content;
  }

  /* highlight */
  .tiptap mark {
    background-color: #faf594;
    border-radius: 0.4rem;
    box-decoration-break: clone;
    padding: 0.1rem 0.3rem;
  }

  /* hr: horizontal rule */
  .tiptap hr {
    border: none;
    border-top: 1px solid var(--gray-2);
    cursor: pointer;
    margin: 2rem 0;
  }

  .tiptap hr.ProseMirror-selectednode {
    border-top: 1px solid var(--purple) !important;
  }

  /* Table-specific styling */
  .tiptap table {
    border-collapse: collapse;
    margin: 0;
    overflow: hidden;
    table-layout: fixed;
    width: 100%;
  }

  .tiptap table td,
  .tiptap table th {
    border: 1px solid var(--gray-3);
    box-sizing: border-box;
    min-width: 1em;
    padding: 6px 8px;
    position: relative;
    vertical-align: top;
  }

  .tiptap table td > *,
  .tiptap table th > * {
    margin-bottom: 0;
  }

  .tiptap table th {
    background-color: var(--gray-1);
    font-weight: bold;
    text-align: left;
  }

  .tiptap table .selectedCell:after {
    background: var(--gray-2);
    content: '';
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    pointer-events: none;
    position: absolute;
    z-index: 2;
  }

  .tiptap table .column-resize-handle {
    background-color: var(--purple);
    bottom: -2px;
    pointer-events: none;
    position: absolute;
    right: -2px;
    top: 0;
    width: 4px;
  }

  .tiptap .tableWrapper {
    margin: 1.5rem 0;
    overflow-x: auto;
  }

  .tiptap.resize-cursor {
    cursor: col-resize;
  }

  /* List styles */
  .tiptap ul,
  .tiptap ol {
    padding: 0 1rem;
    margin: 1.25rem 1rem 1.25rem 0.4rem;
  }

  .tiptap ul li p,
  .tiptap ol li p {
    margin-bottom: 0.15em;
  }

  /* Task list specific styles */
  .tiptap ul[data-type='taskList'] {
    list-style: none;
    margin-left: 0;
    padding: 0.2em;
  }

  .tiptap ul[data-type='taskList'] li {
    align-items: flex-start;
    display: flex;
    margin: 0 !important;
    padding: 0.3em !important;
    gap: 0.5rem;
  }

  .tiptap ul[data-type='taskList'] li > label {
    flex: 0 0 auto;
    user-select: none;
    margin-top: -0.1em !important;
  }

  .tiptap ul[data-type='taskList'] li > div {
    flex: 1 1 auto;
    margin: 0 !important;
    padding: 0 !important;
    /* Prevent content from overflowing */
    min-width: 0;
  }

  .tiptap ul[data-type='taskList'] input[type='checkbox'] {
    cursor: pointer;
    /* Ensure consistent checkbox sizing */
    margin: 0;
    flex-shrink: 0;
  }

  .tiptap ul[data-type='taskList'] ul[data-type='taskList'] {
    margin: 0 !important;
  }

  /* Optional: Handle the span element in your label if it's for custom styling */
  .tiptap ul[data-type='taskList'] li > label span {
    display: inline-block;
    /* Add custom checkbox styles here if needed */
  }

  /* Ensure paragraphs in task list items don't add extra spacing */
  .tiptap ul[data-type='taskList'] li p {
    margin: 0 !important;
  }

  /* Youtube embed */
  .tiptap div[data-youtube-video] {
    cursor: move;
    padding-right: 1.5rem;
  }

  .tiptap div[data-youtube-video] iframe {
    border: 0.5rem solid var(--black-contrast);
    display: block;
    min-height: 200px;
    min-width: 200px;
    outline: 0px solid transparent;
  }

  .tiptap div[data-youtube-video].ProseMirror-selectednode iframe {
    outline: 3px solid var(--purple);
    transition: outline 0.15s;
  }
}
```
