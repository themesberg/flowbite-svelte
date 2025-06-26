```css
@import 'tailwindcss';
// ...
@plugin "flowbite-typography";

@source "../node_modules/@flowbite-svelte-plugins/texteditor/dist";

@layer components {
  .tiptap ul,
  .tiptap ol {
    padding: 0 1rem;
    margin: 1.25rem 1rem 1.25rem 0.4rem;
  }

  .tiptap ul li p,
  .tiptap ol li p {
    margin-bottom: 0.15em;
  }


  .tiptap ul[data-type='taskList'] {
    list-style: none;
    margin-left: 0;
    padding: 1em;
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
    margin-top: 0.4em !important;
  }

  .tiptap ul[data-type='taskList'] li > div {
    flex: 1 1 auto;
    margin: 0 !important;
    padding: 0 !important;
    min-width: 0;
  }

  .tiptap ul[data-type='taskList'] input[type='checkbox'] {
    cursor: pointer;
    margin: 0;
    flex-shrink: 0;
  }

  .tiptap ul[data-type='taskList'] ul[data-type='taskList'] {
    margin: 0;
  }

  .tiptap ul[data-type='taskList'] li > label span {
    display: inline-block;
  }

  .tiptap ul[data-type='taskList'] li p {
    margin: 0 !important;
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
  [data-type='emoji'] img {
    height: 1em;
    width: 1em;
    display: inline;
    margin: 0;
    padding: 0;
  }

  /* mention */
  [data-type="mention"] {
    background-color: rgba(88, 5, 255, .05);
    border-radius: 0.4rem;
    box-decoration-break: clone;
    color: #6A00F5;
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
```
