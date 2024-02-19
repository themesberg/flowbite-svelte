<script>
  import { FloatingLabel, Helper } from '$lib';

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  import H3 from '../../utils/H3.svelte';
  const modules = import.meta.glob('./md/*.md', { query: '?raw', import: 'default', eager: true });
</script>

<H1>Floating label</H1>
<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md']} />
<H2>Floating label examples</H2>
<CodeWrapper>
  <div id="exampleWrapper" class="grid w-full items-end gap-6 md:grid-cols-3">
    <FloatingLabel style="filled" id="floating_filled" name="floating_filled" type="text">Floating filled</FloatingLabel>
    <FloatingLabel style="outlined" id="floating_outlined" name="floating_outlined" type="text">Floating outlined</FloatingLabel>
    <FloatingLabel id="floating_standard" name="floating_standard" type="text" label="Floating standard">Floating standard</FloatingLabel>
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/floating-label-examples.md']} />
<H2>Disabled state</H2>
<CodeWrapper>
  <div id="exampleWrapper" class="grid w-full items-end gap-6 md:grid-cols-3">
    <FloatingLabel style="filled" id="disabled_filled" name="disabled_filled" type="text" disabled>Disabled filled</FloatingLabel>
    <FloatingLabel style="outlined" id="disabled_outlined" name="disabled_outlined" type="text" disabled>Disabled outlined</FloatingLabel>
    <FloatingLabel id="disabled_standard" name="disabled_standard" type="text" disabled>Disabled standard</FloatingLabel>
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/disabled-state.md']} />

<H2>Validation</H2>
<CodeWrapper>
  <!-- Success messages -->
  <div class="mb-6 grid items-end gap-6 md:grid-cols-3">
    <div>
      <FloatingLabel color="green" style="filled" id="filled_success" aria-describedby="filled_success_help" name="filled_success" type="text">
        Filled success
      </FloatingLabel>
      <Helper color="green">
        <span class="font-medium">Well done!</span>
        Some success message.
      </Helper>
    </div>
    <div>
      <FloatingLabel
        color="green"
        style="outlined"
        id="outlined_success"
        aria-describedby="outlined_success_help"
        name="outlined_success"
        type="text"
      >
        Outlined success
      </FloatingLabel>
      <Helper color="green">
        <span class="font-medium">Well done!</span>
        Some success message.
      </Helper>
    </div>
    <div>
      <FloatingLabel
        color="green"
        style="standard"
        id="standard_success"
        aria-describedby="standard_success_help"
        name="standard_success"
        type="text"
      >
        Standard success
      </FloatingLabel>
      <Helper color="green">
        <span class="font-medium">Well done!</span>
        Some success message.
      </Helper>
    </div>
  </div>
  <!-- Error messages -->
  <div class="mb-6 grid items-end gap-6 md:grid-cols-3">
    <div>
      <FloatingLabel color="red" style="filled" id="filled_error" aria-describedby="filled_error_help" name="filled_error" type="text">
        Filled error
      </FloatingLabel>
      <Helper color="red">
        <span class="font-medium">Oh, snapp!</span>
        Some error message.
      </Helper>
    </div>
    <div>
      <FloatingLabel color="red" style="outlined" id="outlined_error" aria-describedby="outlined_error_help" name="outlined_success" type="text">
        Outlined error
      </FloatingLabel>
      <Helper color="red">
        <span class="font-medium">Oh, snapp!</span>
        Some error message.
      </Helper>
    </div>
    <div>
      <FloatingLabel color="red" style="standard" id="standard_error" aria-describedby="standard_error_help" name="standard_success" type="text">
        Standard error
      </FloatingLabel>
      <Helper color="red">
        <span class="font-medium">Oh, snapp!</span>
        Some error message.
      </Helper>
    </div>
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/validation.md']} />

<H2>Sizes</H2>
<CodeWrapper>
  <div class="mb-6 grid items-end gap-6 md:grid-cols-3">
    <FloatingLabel size="small" style="filled" id="small_filled" name="small_filled" type="text">Small filled</FloatingLabel>
    <FloatingLabel size="small" style="outlined" id="small_outlined" name="small_outlined" type="text">Small outlined</FloatingLabel>
    <FloatingLabel size="small" id="small_standard" name="small_standard" type="text">Small standard</FloatingLabel>
  </div>
  <div class="grid items-end gap-6 md:grid-cols-3">
    <FloatingLabel style="filled" id="default_filled" name="default_filled" type="text">Default filled</FloatingLabel>
    <FloatingLabel style="outlined" id="default_outlined" name="default_outlined" type="text">Default outlined</FloatingLabel>
    <FloatingLabel id="default_standard" name="default_standard" type="text">Default standard</FloatingLabel>
  </div>
</CodeWrapper>
<HighlightCompo code={modules['./md/sizes.md']} />

<H2>Helper text</H2>
<CodeWrapper>
  <FloatingLabel style="filled" id="floating_helper" aria-describedby="floating_helper_text" name="floating_helper" type="text">
    Floating helper
  </FloatingLabel>
  <Helper pclass="pt-2">
    Remember, contributions to this topic should follow our <a href="/" class="text-primary-600 hover:underline dark:text-primary-500">
      Community Guidelines
    </a>.
  </Helper>
</CodeWrapper>
<HighlightCompo code={modules['./md/helper-text.md']} />
