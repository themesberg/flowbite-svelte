<script lang="ts">
  import 'katex/dist/katex.min.css';
  import { TextEditor, UndoRedoButtonGroup } from '@flowbite-svelte-plugins/texteditor';
  import type { Editor } from '@tiptap/core';

  let editorInstance = $state<Editor | null>(null);

  const content = `
  <h1>
          This editor supports <span data-type="inline-math" data-latex="\\LaTeX"></span> math expressions. And it even supports converting old $\\sub(3*5=15)$ calculations.
        </h1>
        <p>This is a old $\\LaTeX$ calculation string with $3*5=15$ calculations.</p>
        <p>
          Did you know that <span data-type="inline-math" data-latex="3 * 3 = 9"></span>? Isn't that crazy? Also Pythagoras' theorem is <span data-type="inline-math" data-latex="a^2 + b^2 = c^2"></span>.<br />
          Also the square root of 2 is <span data-type="inline-math" data-latex="\\sqrt{2}"></span>. If you want to know more about <span data-type="inline-math" data-latex="\\LaTeX"></span> visit <a href="https://katex.org/docs/supported.html" target="_blank">katex.org</a>.
        </p>
        <code>
          <pre>$\\LaTeX$</pre>
        </code>
        <p>
          Do you want go deeper? Here is a list of all supported functions:
        </p>
        <ul>
          <li><span data-type="inline-math" data-latex="\\sin(x)"></span></li>
          <li><span data-type="inline-math" data-latex="\\cos(x)"></span></li>
          <li><span data-type="inline-math" data-latex="\\tan(x)"></span></li>
          <li><span data-type="inline-math" data-latex="\\log(x)"></span></li>
          <li><span data-type="inline-math" data-latex="\\ln(x)"></span></li>
          <li><span data-type="inline-math" data-latex="\\sqrt{x}"></span></li>
          <li><span data-type="inline-math" data-latex="\\sum_{i=0}^n x_i"></span></li>
          <li><span data-type="inline-math" data-latex="\\int_a^b x^2 dx"></span></li>
          <li><span data-type="inline-math" data-latex="\\frac{1}{x}"></span></li>
          <li><span data-type="inline-math" data-latex="\\binom{n}{k}"></span></li>
          <li><span data-type="inline-math" data-latex="\\sqrt[n]{x}"></span></li>
          <li><span data-type="inline-math" data-latex="\\left(\\frac{1}{x}\\right)"></span></li>
          <li><span data-type="inline-math" data-latex="\\left\\{\\begin{matrix}x&\\text{if }x>0\\\\0&\\text{otherwise}\\end{matrix}\\right."></span></li>
        </ul>
        <p>The math extension also supports block level math nodes:</p>
        <div data-type="block-math" data-latex="\\int_a^b x^2 dx"></div>`;
</script>

<TextEditor bind:editor={editorInstance} {content} math contentprops={{ id: 'math-ex' }}>
  <UndoRedoButtonGroup editor={editorInstance} />
</TextEditor>
